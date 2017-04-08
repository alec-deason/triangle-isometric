(ns my-sketch.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))
(enable-console-print!)

(def tile-width 16)
(def half-width (/ tile-width 2))

(defn make-triangle [color direction]
  ; Make the pixel grid for a triangle
  (let [gr (q/create-graphics tile-width tile-width)]
    (q/with-graphics gr
      (apply q/stroke color)
      (q/stroke-weight 0.5)
      (apply q/fill color)
      (case direction
        :left (q/triangle 0 half-width tile-width 0 tile-width tile-width)
        :right (q/triangle 0 0 0 tile-width tile-width half-width)
      )
    )
    [gr true]
  )
)
  
(defn make-noise [w h]
  (let [img (q/create-image w h :argb)]
    (dotimes [x w]
      (dotimes [y h]
        (let [c (rand-int 255)]
        (q/set-pixel img x y (q/color c c c 45))
        )
      )
    )
    img
  )
)

(defn map-to-screen [x y z]
  [(+ (- x y) 30) (- (+ x y) (* z 2))]
)


(defn draw-block [mx my mz view color_offset layer]
  (let [[x y] (map-to-screen mx my mz)
        idx (+ mx my mz layer)
        color_offset (+ color_offset (* mz 3))]
    (reduce-kv (fn [m k v] (assoc m k (vec (concat v (m k))))) view 
               (if (even? x) {
                           [x y] [[:left (+ 3 color_offset) idx]]
                           [(+ x 1) y] [[:right (+ 3 color_offset) idx]]

                           [(- x 1) (+ y 1)] [[:right (+ 2 color_offset) idx]]
                           [x (+ y 2)] [[:left (+ 2 color_offset) idx]]

                           [x (+ y 1)] [[:left (+ 1 color_offset) idx]]
                           [(+ x 1) (+ y 2)] [[:right (+ 1 color_offset) idx]]
                          }
                           (let [x (- x 1)
                                ]
                          {
                           [x y] [[:left (+ 3 color_offset) idx]]
                           [(+ x 1) y] [[:right (+ 3 color_offset) idx]]

                           [(+ x 1) (+ y 1)] [[:right (+ 2 color_offset) idx]]
                           [x (+ y 2)] [[:left (+ 2 color_offset) idx]]

                           [(+ x 2) (+ y 1)] [[:left (+ 1 color_offset) idx]]
                           [(+ x 1) (+ y 2)] [[:right (+ 1 color_offset) idx]]
                          }))

    )
    )
)

(defn triangles-for-block [mx my mz]
  (let [[x y] (map-to-screen mx my mz)]
               (if (even? x) [
                           [x y]
                           [(+ x 1) y]

                           [(- x 1) (+ y 1)]
                           [x (+ y 2)]

                           [x (+ y 1)]
                           [(+ x 1) (+ y 2)]
                          ]
                           (let [x (- x 1)
                                ]
                          [
                           [x y]
                           [(+ x 1) y]

                           [(+ x 1) (+ y 1)]
                           [x (+ y 2)]

                           [(+ x 2) (+ y 1)]
                           [(+ x 1) (+ y 2)]
                          ]))

    )
)

(defn make-view [grid]
  (let [view (into {} (for [x (range (/ (q/width) tile-width)) y (range (/ (q/height) half-width))] [[x y] [[(if (even? x) :left :right) 0 (- 0 js/Infinity)]]]))]
    (reduce (fn [view [[x y z] b]] (if (= b :block) (draw-block x y z view 0 0) view)) view
      (sort (fn [[[x y z] _] [[xx yy zz] _]] (< (+ x y z) (+ xx yy zz))) 
            grid))
  )
)

(defn make-grid [] 
  (apply hash-map (mapcat identity (mapcat identity
  (for [k (range 2)]
    (mapcat identity
          
    (for [i (range 40)]
    (for [j (range 40)] [[i j k] (if (= k 0) (rand-nth (concat [:empty] (repeat 10 :block))) (rand-nth (concat (repeat 5 :empty) [:block])))] )))))
)))

(def n-colors 12)
(defn setup []
  (q/background 0)
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  (q/color-mode :rgb)
  (let [tint [(* (rand) 256) (* (rand) 256) (* (rand) 256)]
        colors (for [i (range n-colors)] [(* (/ (nth tint 0) n-colors) i) (* (/ (nth tint 1) n-colors) i) (* (/ (nth tint 2) n-colors) i) 255])
        grid (make-grid)]
    {
    :left (for [i (range n-colors)] (make-triangle (nth colors i) :left))
    :right (for [i (range n-colors)] (make-triangle (nth colors i)  :right))
    :grid grid
    :view (make-view grid)
    :dood [18 15 1]
    :noise (for [_ (range 4)] (make-noise (* 20 32) (* 20 32)))
    :draw []
    :dirty (for [x (range (/ (q/width) tile-width)) y (range (/ (q/height) half-width))] [x y])
    }
  )
)

(defn update-state [state]
  (if (not-empty (state :dirty)) 
    (assoc (assoc state :draw (state :dirty)) :dirty [])
    (assoc state :draw [])
  )
)

(defn draw-triangle [x y img]
        (let [xx (+ (* x tile-width) (if (odd? y) tile-width 0))
            yy (* y half-width)
           ]
        (q/image img xx yy)
      )
)

(defn draw-triangle-stacks [triangles x y & stacks]
    (loop [stacks (map seq stacks)]
      (let [current (map first stacks)
            idx (apply max-key (concat [(fn [i] (nth (nth current i) 2))] (range (count current))))
            [t1n t1i _] (nth current idx)
            [img is-opaque] (nth (triangles t1n) t1i)]
        (draw-triangle x y img)
        (when (not is-opaque)
          (recur (map-indexed (fn [i s] (if (= i idx) (next s) s)) stacks))
        )
      )
    )
)


(defn draw-state [state]
  (let [{grid :grid draw :draw noise :noise view :view} state
        dood-view (apply draw-block (concat (:dood state) [{} 3 0]))]
    (doseq [[x y] draw]
      (let [
            tile-stack (view [x y])
            dood-stack (if (contains? dood-view [x y]) (dood-view [x y]) false) 
            ]
        (if dood-stack
          (draw-triangle-stacks state x y tile-stack dood-stack)
          (draw-triangle-stacks state x y tile-stack)
        )
      )
  ))
)

(defn move-dood [state dx dy]
  (let [[ix iy iz] (state :dood)]
    (if (and (= ((state :grid) [(+ ix dx) (+ iy dy) iz]) :empty)
             (= ((state :grid) [(+ ix dx) (+ iy dy) (- iz 1)]) :block)
        )
    (update
        (assoc state :dood [(+ ix dx) (+ iy dy) iz])
        :dirty (fn [x] (concat x (triangles-for-block ix iy iz) (triangles-for-block (+ ix dx) (+ iy dy) iz)))
    ) state)
  )
)

(defn on-key-down [state event]
  (case (:key event)
    (:w :up) (move-dood state 0 -1)
    (:s :down) (move-dood state 0 1)
    (:a :left) (move-dood state -1 0)
    (:d :right) (move-dood state 1 0)
    state)
)

(q/defsketch my-sketch
  :host "my-sketch"
  :size [(* 80 tile-width) (* 40 tile-width)]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :key-pressed on-key-down
  :middleware [m/fun-mode])

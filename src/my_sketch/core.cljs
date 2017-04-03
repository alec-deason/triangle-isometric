(ns my-sketch.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))
(enable-console-print!)

(defn make-triangle [color direction]
  ; Make the pixel grid for a triangle
  (let [img (q/create-image 16 16 :argb)
        comparitor (direction {:down-left (fn [i j] (<= i j))
         :up-right (fn [i j] (> i j))
         :up-left (fn [i j] (> (- 16 i) j))
         :down-right (fn [i j] (<= (- 16 i) j))
        })]
    (dotimes [i 16]
      (dotimes [j 16]
        (when (comparitor i j) (q/set-pixel img i j (apply q/color color)))
      )
    )
    img
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

(defn make-view [grid]
  (let [view (into {} (for [x (range 40) y (range 40)] [[x y] [[[:up-left 3] [:down-right 3]]]]))]
    view
  )
)

(defn draw-block [mx my mz view]
  (let [x (- mx my)
        y (- (+ mx my) mz)
       ]
    (reduce-kv (fn [m k v] (assoc m k (vec (concat v (m k))))) view {
                           [x y] [[[:down-right 1] [:up-left 1]]]
                           [(+ x 1) y] [[[:down-left 1] [:up-right 2]]]
                          }
    )
;    (q/set-image x y (nth (:triangles-down-right triangles) 1))
;    (q/set-image (+ x 16) y (nth (:triangles-down-left triangles) 1))
;
;    (q/set-image x (+ y 16) (nth (:triangles-up-right triangles) 1))
;    (q/set-image (+ x 16) (+ y 16) (nth (:triangles-up-left triangles) 1))
;    (when (> mz 0) 
;    (q/set-image x (+ y 16) (nth (:triangles-down-left triangles) 0))
;    (q/set-image (+ x 16) (+ y 16) (nth (:triangles-down-right triangles) 2))
;
;    (q/set-image (+ x 16) (+ y 32) (nth (:triangles-up-left triangles) 2))
;    (q/set-image x (+ y 32) (nth (:triangles-up-right triangles) 0))
    )
)

(defn setup []
  (q/background 0)
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  (q/color-mode :rgb)
  (let [colors (for [i (range 4)] [(* (/ 256 4) i) 255])]
    {
    :up-left (for [i (range 4)] (make-triangle (nth colors i) :up-left))
    :up-right (for [i (range 4)] (make-triangle (nth colors i)  :up-right))
    :down-right (for [i (range 4)] (make-triangle (nth colors i) :down-right))
    :down-left (for [i (range 4)] (make-triangle (nth colors i) :down-left))
    :grid (for [k (range 2)]
                (sort (fn [[x y _ _] [xx yy _ _]] (< (+ x y) (+ xx yy))) (mapcat identity
                (for [i (range 20)]
                (for [j (range 20)] [i j k (if (= k 0) :block (rand-nth [:block :empty :empty :empty :empty]))] )))))
    :view (draw-block 20 10 1 (make-view nil))
    :dood [10 10 0]
    :noise (for [_ (range 4)] (make-noise (* 20 32) (* 20 32)))
    :draw []
    :dirty (for [x (range 20) y (range 20) z (range 2)] [x y z])
    }
  )
)

(defn update-state [state]
  (if (not-empty (state :dirty)) 
    (assoc (assoc state :draw (state :dirty)) :dirty [])
    (assoc state :draw [])
  )
)

(defn draw-dood [x y z]
  (q/fill (q/color 240 240 0))
  (q/ellipse (+ (* (- x y) 16) 316) (+ (+ (* (+ x y) 16) (* z 16)) 16) 16 16)
)

(defn draw-state [state]
  (let [{grid :grid draw :draw noise :noise view :view} state]
    (when (not-empty draw)
    (doseq [[[x y] [[[t1n t1i] [t2n t2i]] & _]] view]
      (q/set-image (* x 16) (* y 16) (nth (t1n state) t1i))
      (q/set-image (* x 16) (* y 16) (nth (t2n state) t2i))
    ))
;    (when (not-empty draw)
;      (doseq [slice grid]
;        (doseq [[x y z b] slice] 
;          (when (some #(= [x y z] %) draw)
;            (when (= b :block) (draw-block x y z state))
;            (when (= [x y z] (state :dood)) (draw-dood x y z))
;          )
;        )
;        ;(apply q/blend (concat [(nth noise 0)] draw draw [:multiply]))
;      )
;    )
  )
)

(defn neighborhood [x y, z] 
  (for [dz (range -1 2)] [x y (+ z dz)])
)

(defn move-dood [state dx dy]
  (let [[ix iy iz] (state :dood)]
    (update
      (assoc-in 
        (assoc-in state [:dood 0] (+ ix dx))
        [:dood 1] (+ iy dy))
      :dirty (fn [x] (concat x (neighborhood ix iy iz) (neighborhood (+ ix dx) (+ iy dy) iz)))
    )
  )
)

(defn on-key-down [state event]
  (case (:key event)
    (:w :up) (move-dood state 0 1)
    (:s :down) (move-dood state 0 -1)
    (:a :left) (move-dood state -1 0)
    (:d :right) (move-dood state 1 0)
    state)
)

(q/defsketch my-sketch
  :host "my-sketch"
  :size [(* 20 32) (* 20 32)]
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

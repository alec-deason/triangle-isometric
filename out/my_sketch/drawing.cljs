(ns my-sketch.drawing
  (:require [quil.core :as q :include-macros true])
)

(def n-colors 16)
(def tile-width 16)
(def half-width (/ tile-width 2))

(defn make-left-triangle [width color img]
  (doseq [x (range width) y (range width)]
    (let [
          hw (/ width 2)
          lly (+ hw (* hw (* (/ x width))))
          uly (- hw (* hw (* (/ x width))))
         ]
      (when (and (<= y lly) (>= y uly))
        (q/set-pixel img x y color)
      )
    )
  )
)

(defn make-right-triangle [width color img]
  (doseq [x (range width) y (range width)]
    (let [
          hw (/ width 2)
          lly (- width (* hw (/ x width)))
          uly (* hw (/ x width))
         ]
      (when (and (<= y lly) (>= y uly))
        (q/set-pixel img x y color)
      )
    )
  )
)

(defn make-triangle [color direction]
  ; Make the pixel grid for a triangle
  (let [
        img (q/create-image tile-width tile-width :argb)
        color (apply q/color color)
       ]
      (case direction
        :left (make-left-triangle tile-width color img)
        :right (make-right-triangle tile-width color img)
      )
    [img true]
  )
)

(defn make-artist []
  (let [tint [(* (rand) 256) (* (rand) 256) (* (rand) 256)]
        colors (for [i (range n-colors)] [(int (* (/ (nth tint 0) n-colors) i)) (int (* (/ (nth tint 1) n-colors) i)) (int (* (/ (nth tint 2) n-colors) i)) 255])
       ]
    {
     :colors colors
     :triangles {
       :left (for [c colors] (make-triangle c :left))
       :right (for [c colors] (make-triangle c  :right))
     }
    }
  )
)

(defn color [artist idx]
  (nth (artist :colors) idx)
)

(defn colors [artist]
  (artist :colors)
)

(defn triangles [artist]
  (artist :triangles)
)

(defn draw-triangle [x y img]
        (let [xx (+ (* x tile-width) (if (odd? y) tile-width 0))
            yy (* y half-width)
           ]
        (q/image img xx yy)
      )
)

(defn draw-triangle-stacks [artist x y & stacks]
  (loop [stacks (map seq stacks)]
    (let [current (map first stacks)
          idx (apply max-key (concat [(fn [i] (nth (nth current i) 2))] (range (count current))))
          [t1n t1i _] (nth current idx)
          [img is-opaque] (nth ((triangles artist) t1n) t1i)]
      (draw-triangle x y img)
      (when (not is-opaque)
        (recur (map-indexed (fn [i s] (if (= i idx) (next s) s)) stacks))
      )
    )
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


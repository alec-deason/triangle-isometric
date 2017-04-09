(ns my-sketch.terrain
  (:require [quil.core :as q :include-macros true])
)

(defn make-grid [width height depth] 
  (apply hash-map (apply concat
    (for [z (range (+ depth 2)) x (range width) y (range height)]
      (let [s .02]
      [[x y z] 
        (if (>= z depth)
          :empty
          (if (> (q/noise (* x s) (* y s)) (- 0.6 (/ z 10))) :empty :block)
        )
      ]
    ))
  ))
)

(defn elevation [x y grid]
  (let [
        pred (fn [[[xx yy _] b]] (and (and (= xx x) (= yy y)) (= b :block)))
        matches (filter pred grid)
       ]
    (if (empty? matches)
      (.-NEGATIVE_INFINITY js/Number)
      (nth (nth (apply max-key (concat [(fn [[k v]] (nth k 2))] matches)) 0) 2)
    )
  )
)

(ns my-sketch.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [my-sketch.drawing :as d]
            [my-sketch.terrain :as t]))
(enable-console-print!)



(defn setup []
  (q/background 0)
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  (q/color-mode :rgb)
  (let [artist (d/make-artist)
        grid (t/make-grid 40 40 3)]
    {
    :grid grid
    :artist artist
    :view (d/make-view grid)
    :dood [18 15 (+ (t/elevation 0 0 grid) 1)]
    :draw []
    :dirty (for [x (range (/ (q/width) d/tile-width)) y (range (/ (q/height) d/half-width))] [x y])
    }
  )
)

(defn update-state [state]
  (if (not-empty (state :dirty)) 
    (assoc (assoc state :draw (state :dirty)) :dirty [])
    (assoc state :draw [])
  )
)


(defn draw-state [state]
  (let [{dood :dood draw :draw view :view artist :artist} state
        dood-view (apply d/draw-block (concat dood [{} 3 0]))]
    (doseq [[x y] draw]
      (let [
            tile-stack (view [x y])
            dood-stack (if (contains? dood-view [x y]) (dood-view [x y]) false) 
            ]
        (if dood-stack
          (d/draw-triangle-stacks artist x y tile-stack dood-stack)
          (d/draw-triangle-stacks artist x y tile-stack)
        )
      )
  ))
)

(defn move-dood [state dx dy]
  (let [
        [ix iy iz] (state :dood)
        nx (+ ix dx)
        ny (+ iy dy)
        e (+ (t/elevation nx ny (state :grid)) 1)
       ]
    (if (and (<= e (+ iz 2)) (> e (- iz 2)) (> e -1))
    (update
        (assoc state :dood [(+ ix dx) (+ iy dy) e])
        :dirty (fn [x] (concat x (d/triangles-for-block ix iy iz) (d/triangles-for-block (+ ix dx) (+ iy dy) e)))
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
  :size [(* 80 d/tile-width) (* 40 d/tile-width)]
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

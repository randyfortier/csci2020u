(ns d3-cljs.fractal-tree)
(def seed {:i 0
           :x 420
           :y 600
           :a 0     ; angle
           :l 130   ; length
           :d 1     ; depth
           })


(def conf (atom {:da 0.5      ; each branch angular twist
                 :dl 0.8      ; degradation of branch length
                 :ar 0.2      ; magnitude for random rotation
                 :rotation-bias 0.5 ; (bias-random) * ar
                 :max-depth 10}))

(def id-counter (atom 0))

(defn get-id []
  (swap! id-counter inc))

(defn end-point [p]
  (let [x (+ (:x p) (* (Math/sin (:a p)) (:l p)))
        y (- (:y p) (* (Math/cos (:a p)) (:l p)))]
    {:x x :y y}))

(defn make-child [p angle]
  (let [{da :da dl :dl} @conf
        end  (end-point p)
        depth (inc (:d p))]
    (merge end {:i (get-id)
                :a angle
                :l (* (:l p) dl)
                :d depth
                :level (- (:max-depth @conf) depth)
                :parent (:i p)})))

(defn random-rotation []
  (let [rand (- (:rotation-bias @conf) (Math/random))]
    (* (:ar @conf) rand)))

(defn make-left [p]
  (make-child p (+ (random-rotation) (- (:a p) (:da @conf)))))

(defn make-right [p]
  (make-child p (+ (random-rotation) (+ (:a p) (:da @conf)))))

(defn grow [p]
  (if (= (:d p) (:max-depth @conf))
    [p]
    (concat [p] (grow (make-left p)) (grow (make-right p)))))

(defn tree []
  (do
    (reset! id-counter 0)
    (grow (assoc seed :level (:max-depth @conf)))))


(defn update-conf [dx dy]
  "`dx` in [-1, 1]
   `dy` in [0   1]
    --------------------------------
    dx => the bias  ar
    dy => the twist rotation-bias
  "
  (let [da dy
        bias (+ 0.5 (* 0.5 dx))]
    (swap! conf merge {:da da
                       :rotation-bias bias})))

(ns com.wsscode.oge.ui.codemirror
  (:require [om.next :as om]
            [om.dom :as dom]
            [goog.object :as gobj]
            [goog.functions :as gfun]
            [cljsjs.codemirror]
            [cljsjs.codemirror.mode.clojure]
            [cljs.spec.alpha :as s]))

(s/def ::mode (s/or :string string? :obj map?))
(s/def ::theme string?)
(s/def ::indentUnit pos-int?)
(s/def ::smartIndent boolean?)
(s/def ::lineNumbers boolean?)
(s/def ::readOnly boolean?)

(s/def ::value string?)
(s/def ::onChange (s/fspec :args (s/cat :code string?)))

(s/def ::options (s/keys :opt [::mode
                               ::theme
                               ::indentUnit
                               ::smartIndent
                               ::lineNumbers]))

(s/def ::props (s/keys :req-un [::value]
                       :opt [::options]))

(defn prop-call [comp name & args]
  (when-let [f (-> comp om/props name)]
    (apply f args)))

(defn html-props [props]
  (->> props
       (remove (fn [[k _]] (namespace k)))
       (into {})
       (clj->js)))

(om/defui ^:once Editor
  Object
  (componentWillMount [this]
    (let [f (gobj/get this "componentWillReceiveProps")]
      (gobj/set this "componentWillReceiveProps"
                (gfun/debounce #(.call f this %) 0))))

  (componentWillReceiveProps [this {:keys [value]}]
    (let [cm        (gobj/get this "codemirror")
          cur-value (.getValue cm)]
      (if (and cm value (not= value cur-value))
        (.setValue cm value))))

  (componentDidMount [this]
    (let [textarea   (gobj/get this "textNode")
          options    (-> this om/props ::options (or {}) clj->js)
          process    (-> this om/props ::process)
          codemirror (js/CodeMirror.fromTextArea textarea options)]
      (try
        (.on codemirror "change" #(if (not= (gobj/get % "origin") "setValue")
                                    (prop-call this :onChange (.getValue %))))
        (.setValue codemirror (-> this om/props :value))
        (if process (process codemirror))
        (catch :default e (js/console.warn "Error setting up CodeMirror" e)))
      (gobj/set this "codemirror" codemirror)))

  (componentWillUnmount [this]
    (if-let [cm (gobj/get this "codemirror")]
      (.toTextArea cm)))

  (render [this]
    (let [props (om/props this)]
      (dom/div (-> props (dissoc :value :onChange) (html-props))
        (js/React.createElement "textarea"
          #js {:ref #(gobj/set this "textNode" %)
               :defaultValue (:value props)
               :autoComplete "off"})))))

(def editor (om/factory Editor {:validator #(if (s/valid? ::props %)
                                              true
                                              (do
                                                (js/console.warn (s/explain-str ::props %))
                                                false))}))

(defn clojure [props]
  (let [options {::lineNumbers true
                 ::mode        "clojure"}]
    (editor (-> props
                (assoc ::process (fn [cm] (js/parinferCodeMirror.init cm "smart" #js {:forceBalance true})))
                (update ::options #(merge options %))))))

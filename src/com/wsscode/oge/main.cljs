(ns com.wsscode.oge.main
  (:require [fulcro.client.core :as fulcro]
            [fulcro.client.data-fetch :as fetch]
            [fulcro.client.mutations :as mutations]
            [fulcro-css.css :as css]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.profile :as p.profile]
            [com.wsscode.pathom.connect :as p.connect]
            [com.wsscode.oge.ui.codemirror :as codemirror]
            [com.wsscode.oge.ui.flame-graph :as ui.flame]
            [com.wsscode.oge.ui.styles :as styles]
            [om.next :as om]
            [om.dom :as dom]
            [cljs.pprint :refer [pprint]]
            [cljs.reader :refer [read-string]]))

(defmethod mutations/mutate `clear-errors [{:keys [state]} _ _]
  {:action
   (fn []
     (swap! state dissoc ::p/errors))})

(defmethod mutations/mutate `normalize-result [{:keys [ref state]} _ _]
  {:action
   (fn []
     (let [result' (cond-> (-> @state (get-in ref) :oge/result')
                     (get @state ::p/errors) (assoc ::p/errors (->> (get @state ::p/errors)
                                                                    (into {} (map (fn [[k v]] [(vec (next k)) v]))))))
           profile (some-> result' ::p.profile/profile :>/oge)
           result  (with-out-str (cljs.pprint/pprint (dissoc result' ::p.profile/profile)))]
       (swap! state update-in ref merge {:oge/result  result
                                         :oge/profile profile})))})

(defn oge-query [this query]
  (try
    (om/transact! this [`(clear-errors)
                        (list 'fulcro/load {:target        (conj (om/get-ident this) :oge/result')
                                            :query         [{:>/oge (conj (read-string query) ::p.profile/profile)}]
                                            :refresh       [:oge/result]
                                            :post-mutation `normalize-result})])
    (catch :default e
      (js/console.error "Invalid query" e))))

(om/defui ^:once Oge
  static fulcro/InitialAppState
  (initial-state [_ _] {:oge/id      "editor"
                        :oge/query   "[]"
                        :oge/result  "{}"
                        :oge/profile nil})

  static om/IQuery
  (query [_] [:oge/id :oge/query :oge/result :oge/profile
              {::p.connect/indexes [::p.connect/idents ::p.connect/index-io]}
              {:oge/result' [:ui/fetch-state]}])

  static om/Ident
  (ident [_ props] [:oge/id (:oge/id props)])

  static css/CSS
  (local-rules [_] [[:.container {:display               "grid"
                                  :width                 "100%"
                                  :border                "1px solid #ddd"
                                  :grid-template-rows    "auto 1fr 12px 300px"
                                  :grid-template-columns "600px 12px 1fr"
                                  :grid-template-areas   (styles/strings ["title title title"
                                                                          "editor divisor result"
                                                                          "hdiv divisor result"
                                                                          "flame divisor result"])}
                     [:&.simple {:grid-template-rows    "auto 1fr"
                                 :grid-template-columns "600px 12px 1fr"
                                 :grid-template-areas   (styles/strings ["title title title"
                                                                         "editor divisor result"])}]
                     [:$CodeMirror {:height "100%" :width "100%" :position "absolute"}]]

                    [:.title {:grid-area     "title"
                              :display       "flex"
                              :align-items   "center"
                              :background    "linear-gradient(#f7f7f7, #e2e2e2)"
                              :padding       "2px 10px"
                              :border-bottom "1px solid #e0e0e0"}]
                    [:.divisor {:grid-area     "divisor"
                                :background    "#eee"
                                :border        "1px solid #e0e0e0"
                                :border-top    "0"
                                :border-bottom "0"}]
                    [:.editor {:grid-area "editor"
                               :position  "relative"}]
                    [:.result {:grid-area "result"
                               :position  "relative"}
                     [:$CodeMirror {:background "#f6f7f8"}]]
                    [:.hdiv {:grid-area    "hdiv"
                             :background   "#eee"
                             :border       "1px solid #e0e0e0"
                             :border-width "1px 0"}]
                    [:.flame {:grid-area  "flame"
                              :background "#f6f7f8"}]])
  (include-children [_] [])

  Object
  (render [this]
    (let [{:oge/keys        [query result profile result']
           ::p.connect/keys [indexes]} (om/props this)
          {:keys [style]} (om/get-computed (om/props this))
          css (css/get-classnames Oge)]
      (dom/div #js {:className (str (:container css) " " (if-not profile (:simple css)))
                    :style     (clj->js style)}
        (dom/div #js {:className (:title css)}
          (dom/h2 #js {:className "flex"} "OgE")
          (dom/button #js {:style     #js {:marginLeft 10}
                           :className "btn btn-primary"
                           :disabled  (fetch/loading? (:ui/fetch-state result'))
                           :onClick   #(oge-query this query)}
            (if (fetch/loading? (:ui/fetch-state result'))
              "Loading..."
              "Run Query")))
        (codemirror/oge {:className           (:editor css)
                         :value               (or (str query) "")
                         ::p.connect/indexes  indexes
                         ::codemirror/options {::codemirror/extraKeys
                                               {"Cmd-Enter"   (fn [_] (oge-query this (-> this om/props :oge/query)))
                                                "Ctrl-Enter"  (fn [_] (oge-query this (-> this om/props :oge/query)))
                                                "Shift-Enter" (fn [_] (oge-query this (-> this om/props :oge/query)))
                                                "Cmd-J"       "ogeJoin"
                                                "Ctrl-Space"  "autocomplete"}}
                         :onChange            #(mutations/set-value! this :oge/query %)})
        (dom/div #js {:className (:divisor css)})
        (codemirror/clojure {:className           (:result css)
                             :value               (or (str result) "")
                             ::codemirror/options #::codemirror{:readOnly    true
                                                                :lineNumbers true}})
        (if profile (dom/div #js {:className (:hdiv css)}))
        (if profile (dom/div #js {:className (:flame css)} (ui.flame/flame-graph {:profile profile})))))))

(def oge (om/factory Oge))

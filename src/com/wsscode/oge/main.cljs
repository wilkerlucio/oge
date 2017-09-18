(ns com.wsscode.oge.main
  (:require [fulcro.client.core :as fulcro]
            [fulcro.client.data-fetch :as fetch]
            [fulcro.client.mutations :as mutations]
            [fulcro-css.css :as css]
            [com.wsscode.oge.ui.codemirror :as codemirror]
            [com.wsscode.oge.ui.styles :as styles]
            [om.next :as om]
            [om.dom :as dom]
            [fulcro.client.network :as fulcro.network]))

(defmethod mutations/mutate `send-query [{:keys [ref state]} _ {:keys [q]}]
  {:action
   (fn []
     )})

(om/defui ^:once Oge
  static fulcro/InitialAppState
  (initial-state [_ _] {:oge/id    (random-uuid)
                        :oge/query ""
                        :oge/result ""})

  static om/IQuery
  (query [_] [:oge/id :oge/query :oge/result])

  static om/Ident
  (ident [_ props] [:oge/by-id (:oge/id props)])

  static css/CSS
  (local-rules [_] [[:.container {:display "grid"
                                  :width "100%"
                                  :border "1px solid #ddd"
                                  :margin "20px"
                                  :grid-template-rows "auto 1fr"
                                  :grid-template-columns "1fr 12px 1fr"
                                  :grid-template-areas (styles/strings ["title title title"
                                                                        "editor divisor result"])}
                     [:$CodeMirror {:height "inherit" :width "100%"}]]

                    [:.title {:grid-area "title"
                              :display "flex"
                              :align-items "center"
                              :background "linear-gradient(#f7f7f7, #e2e2e2)"
                              :padding "2px 10px"
                              :border-bottom "1px solid #e0e0e0"}]
                    [:.divisor {:grid-area "divisor"
                                :background "#eee"
                                :border "1px solid #e0e0e0"
                                :border-top "0"
                                :border-bottom "0"}]
                    [:.editor {:grid-area "editor"
                               :display "flex"}]
                    [:.result {:grid-area "result"
                               :display "flex"}]])
  (include-children [_] [])

  Object
  (render [this]
    (let [{:oge/keys [query result]} (om/props this)
          css (css/get-classnames Oge)]
      (dom/div #js {:className (:container css)}
        (dom/div #js {:className (:title css)}
          (dom/h2 #js {:className "flex"} "OgE")
          (dom/button #js {:style #js {:marginLeft 10}
                           :className "btn btn-primary"
                           :onClick #(fetch/load-field this :result :params {:q query})}
            "Run Query"))
        (codemirror/clojure {:className (:editor css)
                             :value    query
                             :onChange #(mutations/set-value! this :oge/query %)})
        (dom/div #js {:className (:divisor css)})
        (codemirror/clojure {:className (:result css)
                             :value    result
                             ::codemirror/options #::codemirror{:readOnly true}})))))

(def oge (om/factory Oge))

(om/defui ^:once OgeMain
  static fulcro/InitialAppState
  (initial-state [_ _] {:ui/editor (fulcro/get-initial-state Oge {})})

  static om/IQuery
  (query [_] [{:ui/editor (om/get-query Oge)}])

  static om/Ident
  (ident [_ props] [:oge-app "main"])

  static css/Global
  (global-rules [_] [[:body {:padding "0"
                             :overflow "hidden"}]
                     [:.flex {:flex "1"}]])

  static css/CSS
  (local-rules [_] [[:.container {:display "flex"
                                  :width "100vw"
                                  :height "100vh"}]])
  (include-children [_] [Oge])

  Object
  (render [this]
    (let [{:keys [ui/editor]} (om/props this)
          css (css/get-classnames OgeMain)]
      (dom/div #js {:className (:container css)}
        (oge editor)))))

(def oge-main (om/factory OgeMain))

(om/defui ^:once Root
  static fulcro/InitialAppState
  (initial-state [_ _] {:ui/react-key (random-uuid)
                        :ui/root      (fulcro/get-initial-state OgeMain {})})

  static om/IQuery
  (query [_] [{:ui/root (om/get-query OgeMain)} :ui/react-key])

  static css/CSS
  (local-rules [_] [])
  (include-children [_] [OgeMain])

  Object
  (render [this]
    (let [{:keys [ui/react-key ui/root]} (om/props this)]
      (dom/div #js {:key react-key}
        (oge-main root)))))

(defrecord LocalNetwork [parser]
  fulcro.network/NetworkBehavior
  (serialize-requests? [_] true)

  fulcro.network/FulcroNetwork
  (send [this edn ok error]
    )

  (start [_]))

(defn local-network [parser]
  (map->LocalNetwork {:parser parser}))

(defonce app (atom (fulcro/new-fulcro-client :networking (network/local-network parser))))

(defn init []
  (swap! app fulcro/mount Root "oge-container")
  (css/upsert-css "oge" Root))

(init)

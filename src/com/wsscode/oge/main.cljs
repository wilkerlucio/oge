(ns com.wsscode.oge.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [fulcro.client.core :as fulcro]
            [fulcro.client.mutations :as mutations]
            [fulcro-css.css :as css]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.async :as p.async]
            [com.wsscode.pathom.fulcro.network :as p.network]
            [com.wsscode.oge.ui.codemirror :as codemirror]
            [com.wsscode.oge.ui.styles :as styles]
            [om.next :as om]
            [om.dom :as dom]
            [cljs.core.async :refer [promise-chan put! <!]]))

(defmethod mutations/mutate `send-query [{:keys [ref state]} _ {:keys [q]}]
  {:action
   (fn []
     )})

(om/defui ^:once Oge
  static fulcro/InitialAppState
  (initial-state [_ _] {:oge/id     (random-uuid)
                        :oge/query  ""
                        :oge/result ""})

  static om/IQuery
  (query [_] [:oge/id :oge/query :oge/result])

  static om/Ident
  (ident [_ props] [:oge/id (:oge/id props)])

  static css/CSS
  (local-rules [_] [[:.container {:display               "grid"
                                  :width                 "100%"
                                  :border                "1px solid #ddd"
                                  :margin                "20px"
                                  :grid-template-rows    "auto 1fr"
                                  :grid-template-columns "1fr 12px 1fr"
                                  :grid-template-areas   (styles/strings ["title title title"
                                                                          "editor divisor result"])}
                     [:$CodeMirror {:height "inherit" :width "100%"}]]

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
                               :display   "flex"}]
                    [:.result {:grid-area "result"
                               :display   "flex"}]])
  (include-children [_] [])

  Object
  (render [this]
    (let [{:oge/keys [query result]} (om/props this)
          css (css/get-classnames Oge)]
      (dom/div #js {:className (:container css)}
        (dom/div #js {:className (:title css)}
          (dom/h2 #js {:className "flex"} "OgE")
          (dom/button #js {:style     #js {:marginLeft 10}
                           :className "btn btn-primary"
                           :onClick   #_#(fetch/load-field this :oge/result)
                                      #(om/transact! this [(list 'fulcro/load {:ident (om/get-ident this)
                                                                               :query [(list :oge/result {:q query})]})])}
            "Run Query"))
        (codemirror/clojure {:className (:editor css)
                             :value     query
                             :onChange  #(mutations/set-value! this :oge/query %)})
        (dom/div #js {:className (:divisor css)})
        (codemirror/clojure {:className           (:result css)
                             :value               result
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
  (global-rules [_] [[:body {:padding  "0"
                             :overflow "hidden"}]
                     [:.flex {:flex "1"}]])

  static css/CSS
  (local-rules [_] [[:.container {:display "flex"
                                  :width   "100vw"
                                  :height  "100vh"}]])
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

(defn request-edn [{:keys [url body]}]
  (-> (js/fetch url #js {:headers (js/Headers. #js {"Content-Type" "application/edn"})
                         :method  "post"
                         :body    body})
      (.then #(.text %))))

(defn debug
  ([v] (debug "" v))
  ([l v] (js/console.info l) (js/console.log v) v))

(defn oge-reader [{:keys [ast query] :as env}]
  (let [k (:dispatch-key ast)]
    (case k
      :oge/result
      (let [c (promise-chan)]
        (-> (request-edn {:url  "http://localhost:8890/graph"
                          :body (-> ast :params :q)})
            (.then #(put! c (debug %))))
        c)

      (if query (p/join env)))))

(def parser
  (-> {::p/plugins [(p/env-plugin {::p/reader [oge-reader]})
                    p.async/async-plugin]}
      (p/parser)))

(defonce app (atom (fulcro/new-fulcro-client :networking (p.network/local-network parser))))

(defn init []
  (swap! app fulcro/mount Root "oge-container")
  (css/upsert-css "oge" Root))

(init)

(defn log-state []
  (-> @app :reconciler om/app-state deref))

(comment
  (go
    (-> (parser {} [{[:oge/id 123] [(list :oge/result {:q [{[:customer/id #uuid "5596d902-225f-4173-86c5-95918330657a"] [:customer/name]}]})]}])
        <! js/console.log))

  (-> (request-edn {:url  "http://localhost:8890/graph"
                    :body (pr-str [{[:customer/id #uuid "5596d902-225f-4173-86c5-95918330657a"]
                                    [:customer/id :customer/name]}

                                   :com.wsscode.pathom.profile/profile])})
      (.then js/console.log)))

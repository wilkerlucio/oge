(ns com.wsscode.oge.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [fulcro.client.core :as fulcro]
            [fulcro.client.data-fetch]
            [fulcro.client.mutations :as mutations]
            [fulcro-css.css :as css]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.async :as p.async]
            [com.wsscode.pathom.profile :as p.profile]
            [com.wsscode.pathom.fulcro.network :as p.network]
            [com.wsscode.oge.ui.codemirror :as codemirror]
            [com.wsscode.oge.ui.flame-graph :as ui.flame]
            [com.wsscode.oge.ui.styles :as styles]
            [om.next :as om]
            [om.dom :as dom]
            [cljs.pprint :refer [pprint]]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :refer [promise-chan put! <!]]))

(defmethod mutations/mutate `normalize-result [{:keys [ref state]} _ _]
  {:action
   (fn []
     (let [result  (-> @state (get-in ref) :oge/result read-string)
           profile (::p.profile/profile result)
           result' (with-out-str (cljs.pprint/pprint (dissoc result ::p.profile/profile)))]
       (swap! state update-in ref merge {:oge/result  result'
                                         :oge/profile profile})))})

(def sample-profile
  {[:customer/id #uuid "5596d902-225f-4173-86c5-95918330657a"]
   {:customer/id                     0,
    :customer/boletos                {0                                {:boleto/amount 1,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 339}},
                                      7
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 1}},
                                      20
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      27
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      1
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 1}},
                                      24
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      4
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      15
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 1}},
                                      21
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      31
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      13
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      22
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      29
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      6
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      28
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      25
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      17
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      3
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      12
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      :com.wsscode.pathom.profile/self 2068,
                                      2
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      23
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 1, :com.wsscode.pathom.profile/self 1}},
                                      19
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      11
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      9
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      5
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      14
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      26
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      16
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      30
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      10
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      18
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}},
                                      8
                                                                       {:boleto/amount 0,
                                                                        :boleto/customer
                                                                                       {:customer/name 0, :com.wsscode.pathom.profile/self 0}}},
    :com.wsscode.pathom.profile/self 2224}})

(om/defui ^:once Oge
  static fulcro/InitialAppState
  (initial-state [_ _] {:oge/id      (random-uuid)
                        :oge/query   ""
                        :oge/result  ""
                        :oge/profile sample-profile})

  static om/IQuery
  (query [_] [:oge/id :oge/query :oge/result :oge/profile])

  static om/Ident
  (ident [_ props] [:oge/id (:oge/id props)])

  static css/CSS
  (local-rules [_] [[:.container {:display               "grid"
                                  :width                 "100%"
                                  :border                "1px solid #ddd"
                                  :margin                "20px"
                                  :grid-template-rows    "auto 1fr 300px"
                                  :grid-template-columns "600px 12px 1fr"
                                  :grid-template-areas   (styles/strings ["title title title"
                                                                          "editor divisor result"
                                                                          "flame divisor result"])}
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
                               :position "relative"}]
                    [:.result {:grid-area "result"
                               :position "relative"}
                     [:$CodeMirror {:background "#f6f7f8"}]]
                    [:.flame {:grid-area  "flame"
                              :border-top "1px solid #e0e0e0"
                              :background "#f6f7f8"}]])
  (include-children [_] [])

  Object
  (render [this]
    (let [{:oge/keys [query result profile]} (om/props this)
          css (css/get-classnames Oge)]
      (dom/div #js {:className (:container css)}
        (dom/div #js {:className (:title css)}
          (dom/h2 #js {:className "flex"} "OgE")
          (dom/button #js {:style     #js {:marginLeft 10}
                           :className "btn btn-primary"
                           :onClick   #(om/transact! this [(list 'fulcro/load {:ident         (om/get-ident this)
                                                                               :query         [(list :oge/result {:q query})]
                                                                               :post-mutation `normalize-result})])}
            "Run Query"))
        (codemirror/clojure {:className (:editor css)
                             :value     query
                             :onChange  #(mutations/set-value! this :oge/query %)
                             ::codemirror/options #::codemirror{:viewportMargin js/Infinity}})
        (dom/div #js {:className (:divisor css)})
        (codemirror/clojure {:className           (:result css)
                             :value               result
                             ::codemirror/options #::codemirror{:readOnly    true
                                                                :lineNumbers false}})

        (dom/div #js {:className (:flame css)}
          (ui.flame/flame-graph {:profile profile}))))))

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

(defn oge-reader [{:keys [ast query] :as env}]
  (let [k (:dispatch-key ast)]
    (case k
      :oge/result
      (try
        (let [q (-> ast :params :q read-string)
              c (promise-chan)]
          (-> (request-edn {:url  "http://localhost:8890/graph"
                            :body (-> q (conj :com.wsscode.pathom.profile/profile) pr-str)})
              (.then #(put! c %))
              (.catch #(put! c %)))
          c)
        (catch :default _
          (js/console.log "Invalid query" (-> ast :params :q))
          nil))

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

  (with-out-str (cljs.pprint/pprint {:a 1 :b 2}))

  (-> (request-edn {:url  "http://localhost:8890/graph"
                    :body (pr-str [{[:customer/id #uuid "5596d902-225f-4173-86c5-95918330657a"]
                                    [:customer/id :customer/name]}

                                   :com.wsscode.pathom.profile/profile])})
      (.then js/console.log)))

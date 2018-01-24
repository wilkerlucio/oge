(ns com.wsscode.oge.pub.main
  (:require [fulcro.client :as fulcro]
            [fulcro.client.mutations :as mutations]
            [fulcro-css.css :as css]
            [com.wsscode.pathom.connect :as p.connect]
            [com.wsscode.oge.core :as oge]
            [com.wsscode.oge.ui.common :as ui]
            [com.wsscode.oge.pub.network :as network]
            [goog.functions :as gfun]
            [fulcro.client.primitives :as fp]
            [fulcro.client.dom :as dom]
            [fulcro.client.data-fetch :as fetch]))

(defn update-index [reconciler]
  (fp/transact! reconciler
    [(list 'fulcro/load {:target  [:oge/id "editor" ::p.connect/indexes]
                         :query   (-> oge/Oge fp/get-query (fp/focus-query [::p.connect/indexes]))
                         :refresh #{:ui/editor}})]))

(def debounced-update-index
  (gfun/debounce update-index 600))

(defmethod mutations/mutate `update-endpoint [{:keys [state ref reconciler shared]} _ {::keys [url]}]
  {:action
   (fn []
     (reset! (::endpoint* shared) url)
     (swap! state assoc-in (conj ref :ui/target-url) url)
     (js/localStorage.setItem "oge-pub-last-url" url)
     (debounced-update-index reconciler))})

(fp/defui ^:once OgeMain
  static fp/InitialAppState
  (initial-state [_ _] {:ui/editor     (fp/get-initial-state oge/Oge {})
                        :ui/target-url (or (js/localStorage.getItem "oge-pub-last-url") "")})

  static fp/IQuery
  (query [_] [{:ui/editor (fp/get-query oge/Oge)} :ui/target-url])

  static fp/Ident
  (ident [_ props] [:oge-app "main"])

  static css/Global
  (global-rules [_] [[:body {:padding  "0"
                             :overflow "hidden"}]
                     [:.flex {:flex "1"}]])

  static css/CSS
  (local-rules [_] [[:.container {:box-sizing     "border-box"
                                  :display        "flex"
                                  :flex-direction "column"
                                  :padding        "20px"
                                  :width          "100vw"
                                  :height         "100vh"}]
                    [:.input {:margin-bottom "10px"}]])
  (include-children [_] [oge/Oge])

  Object
  (render [this]
    (let [{:keys [ui/editor ui/target-url]} (fp/props this)
          css (css/get-classnames OgeMain)
          fs  (-> editor ::p.connect/indexes :ui/fetch-state)]
      (dom/div #js {:className (:container css)}
        (ui/text-field {:value       target-url
                        :className   (:input css)
                        :placeholder "https://your-endpoint.here.com"
                        :onChange    #(fp/transact! this [`(update-endpoint {::url ~(.. % -target -value)})])
                        ::ui/classes (cond
                                       (-> editor ::p.connect/indexes ::p.connect/index-io)
                                       [:success]

                                       (fetch/failed? fs)
                                       [:warning])})
        (oge/oge (fp/computed editor {:style {:flex 1}}))))))

(def oge-main (fp/factory OgeMain))

(fp/defui ^:once Root
  static fp/InitialAppState
  (initial-state [_ _] {:ui/react-key (random-uuid)
                        :ui/root      (fp/get-initial-state OgeMain {})})

  static fp/IQuery
  (query [_] [{:ui/root (fp/get-query OgeMain)} :ui/react-key])

  static css/CSS
  (local-rules [_] [])
  (include-children [_] [OgeMain])

  Object
  (render [this]
    (let [{:keys [ui/react-key ui/root]} (fp/props this)]
      (dom/div #js {:key react-key}
        (oge-main root)))))

(def endpoint (atom (or (js/localStorage.getItem "oge-pub-last-url") "")))

(defonce app
  (atom (fulcro/new-fulcro-client :networking (network/make-network endpoint)
          :shared {::endpoint* endpoint}
          :started-callback
          (fn [app]
            (update-index (:reconciler app))))))

(defn init []
  (swap! app fulcro/mount Root "oge-container")
  (css/upsert-css "oge" Root))

(init)

(defn log-state []
  (-> @app :reconciler fp/app-state deref))

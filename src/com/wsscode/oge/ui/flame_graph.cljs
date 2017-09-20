(ns com.wsscode.oge.ui.flame-graph
  (:require [om.next :as om]
            [om.dom :as dom]
            [com.wsscode.pathom.profile :as p.profile]
            [goog.object :as gobj]))

(defn render-flame [profile target]
  (let [profile' (-> profile p.profile/profile->flame-graph clj->js)
        flame    (js/d3.flameGraph target profile' true)
        tooltip  (fn [d]
                   (let [name        (gobj/get d "name")
                         value       (gobj/get d "value")
                         total-value (gobj/get profile' "value")
                         pct         (-> (/ value total-value) (* 100) (.toFixed 2))]
                     (str name " <br /><br />"
                          value " samples<br />"
                          pct "% of total")))]

    (js/console.log "render profile" profile')

    (-> flame
        (.size #js [600 300])
        (.cellHeight 20)
        (.zoomEnabled true)
        (.tooltip tooltip)
        (.render))))

(om/defui ^:once FlameGraph
  Object
  (componentDidMount [this]
    (let [{:keys [profile]} (om/props this)]
      (render-flame profile (gobj/get this "root"))))

  (componentWillReceiveProps [this {:keys [profile]}]
    (when (not= profile (-> this om/props :profile))
      (render-flame profile (gobj/get this "root"))))

  (render [this]
    (let [props (om/props this)]
      (dom/div #js {:ref #(gobj/set this "root" %)}))))

(def flame-graph (om/factory FlameGraph))

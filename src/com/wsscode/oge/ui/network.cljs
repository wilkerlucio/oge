(ns com.wsscode.oge.ui.network
  (:require [cljsjs.d3]
            [fulcro.client.core :as fulcro]
            [om.dom :as dom]
            [om.next :as om]))

(om/defui ^:once RelationGraph
  Object
  (componentDidMount [_]
    )

  (render [this]
    (let [{:keys []} (om/props this)]
      (dom/div nil
        ))))

(def relation-graph (om/factory RelationGraph))

(ns com.wsscode.oge.ui.common
  (:require [om.next :as om]
            [com.wsscode.oge.ui.helpers :as helpers]
            [fulcro-css.css :as css]
            [om.dom :as dom]))

(def css-button
  {:color            "#fff"
   :cursor           "pointer"
   :background-color "#0275d8"
   :border-color     "#0275d8"
   :display          "inline-block"
   :font-weight      "400"
   :line-height      "1.25"
   :text-align       "center"
   :white-space      "nowrap"
   :vertical-align   "middle"
   :user-select      "none"
   :border           "1px solid transparent"
   :padding          ".5rem 1rem"
   :font-size        "1rem"
   :border-radius    ".25rem"
   :transition       "all .2s ease-in-out"})

(def css-button-hover
  {:color            "#fff"
   :background-color "#025aa5"
   :border-color     "#01549b"})

(om/defui ^:once Button
  static css/CSS
  (local-rules [_] [[:.button css-button
                     [:&:hover css-button-hover]]])
  (include-children [_] [])

  Object
  (render [this]
    (let [props (om/props this)
          css   (css/get-classnames Button)]
      (dom/button (helpers/props->html {:className (:button css)} props)
        (om/children this)))))

(def button (helpers/container-factory Button))

(def css-input
  {:display          "block"
   :width            "100%"
   :padding          ".5rem .75rem"
   :font-size        "1rem"
   :line-height      "1.25"
   :color            "#464a4c"
   :background-color "#fff"
   :background-image "none"
   :background-clip  "padding-box"
   :border           "1px solid rgba(0,0,0,.15)"
   :border-radius    ".25rem"
   :transition       "border-color ease-in-out .15s,box-shadow ease-in-out .15s"})

(def css-input-focus
  {:color            "#464a4c"
   :background-color "#fff"
   :border-color     "#5cb3fd"
   :outline          "0"})

(om/defui ^:once TextField
  static css/CSS
  (local-rules [_] [[:.input css-input
                     [:&:focus css-input-focus]]])
  (include-children [_] [])

  Object
  (render [this]
    (let [props (om/props this)
          css   (css/get-classnames TextField)]
      (dom/input (helpers/props->html {:className (:input css)
                                       :type      "text"}
                   props)))))

(def text-field (om/factory TextField))

(om/defui ^:once CSS
  static css/CSS
  (local-rules [_] [])
  (include-children [_] [Button TextField]))

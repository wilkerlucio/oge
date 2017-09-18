(ns com.wsscode.oge.ui.styles
  (:require [clojure.string :as str]))

(defn strings [strings]
  (->> strings
       (map #(str "\"" % "\""))
       (str/join " ")))

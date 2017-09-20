(defproject com.wsscode.oge "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha17"]
                 [org.clojure/clojurescript "1.9.908"]
                 [org.clojure/core.async "0.3.443"]
                 [org.clojure/test.check "0.9.0"]

                 [spec-coerce "1.0.0-alpha5"]
                 [org.omcljs/om "1.0.0-beta1"]
                 [fulcrologic/fulcro "1.0.0-beta10-SNAPSHOT"]
                 [fulcrologic/fulcro-css "1.0.0"]
                 [com.wsscode/pathom "1.0.0-beta8-SNAPSHOT"]
                 [cljsjs/codemirror "5.24.0-1"]

                 [figwheel-sidecar "0.5.13"]
                 [binaryage/devtools "0.9.4"]]

  :source-paths ["src"]

  :cljsbuild {:builds [{:id           "dev"
                        :figwheel     true
                        :source-paths ["src"]
                        :compiler     {:main                 com.wsscode.oge.main
                                       :source-map-timestamp true
                                       :asset-path           "/js/dev"
                                       :output-to            "resources/public/js/dev/main.js"
                                       :output-dir           "resources/public/js/dev"
                                       :preloads             [devtools.preload]
                                       :parallel-build       true
                                       :verbose              false}}]})

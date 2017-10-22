(defproject com.wsscode.oge "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-beta2"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async "0.3.443"]

                 [spec-coerce "1.0.0-alpha5"]
                 [org.omcljs/om "1.0.0-beta1"]
                 [fulcrologic/fulcro "1.0.0"]
                 [fulcrologic/fulcro-css "1.0.0"]
                 [com.wsscode/pathom "1.0.0-beta9-SNAPSHOT"]

                 [cljsjs/codemirror "5.24.0-1"]
                 [cljsjs/d3 "4.3.0-5"]
                 [cljsjs/d3-tip "0.7.1-0"]]

  :source-paths ["src"]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :jar-exclusions [#"public/js/.*"]

  :figwheel {:server-port 3450}

  :cljsbuild {:builds [{:id           "dev"
                        :figwheel     true
                        :source-paths ["src"]
                        :compiler     {:main                 com.wsscode.oge.pub.main
                                       :source-map-timestamp true
                                       :asset-path           "/js/dev"
                                       :output-to            "resources/public/js/dev/main.js"
                                       :output-dir           "resources/public/js/dev"
                                       :preloads             [devtools.preload]
                                       :parallel-build       true
                                       :verbose              false}}

                       {:id           "prod"
                        :source-paths ["src"]
                        :compiler     {:main                 com.wsscode.oge.pub.main
                                       :source-map-timestamp true
                                       :asset-path           "/js/prod"
                                       :output-to            "resources/public/js/prod/main.js"
                                       :output-dir           "resources/public/js/prod"
                                       :optimizations        :advanced
                                       :parallel-build       true
                                       :verbose              false}}]}

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.13"]
                                  [binaryage/devtools "0.9.4"]]}})

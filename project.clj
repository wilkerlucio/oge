(defproject com.wsscode.oge "1.0.0-alpha3-SNAPSHOT"
  :description "Om Graph Explorer"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async "0.4.474"]

                 [spec-coerce "1.0.0-alpha5"]
                 [fulcrologic/fulcro "2.5.4"]
                 [fulcrologic/fulcro-inspect "2.1.0"]
                 [com.wsscode/pathom "2.0.0-beta1"]

                 [cljsjs/codemirror "5.24.0-1"]
                 [cljsjs/d3 "4.3.0-5"]
                 [cljsjs/d3-tip "0.7.1-0"]]

  :source-paths ["src"]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.16"]]

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
                                       :preloads             [devtools.preload fulcro.inspect.preload]
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

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.16"]
                                  [binaryage/devtools "0.9.10"]]}})

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

  :jar-exclusions [#"public/js/.*"]

  :figwheel {:server-port 3450}

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.13"]
                                  [binaryage/devtools "0.9.4"]]}})

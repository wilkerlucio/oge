{:foreign-libs [{:file     "com/wsscode/oge/ui/oge-mode.js"
                 :provides ["codemirror.oge"]
                 :requires ["cljsjs.codemirror"]}

                {:file     "com/wsscode/oge/vendor/parinfer.js"
                 :provides ["parinfer"]}

                {:file     "com/wsscode/oge/vendor/parinfer-codemirror.js"
                 :provides ["codemirror.parinfer"]
                 :requires ["parinfer" "cljsjs.codemirror"]}

                {:file     "com/wsscode/oge/vendor/d3.flameGraph.min.js"
                 :provides ["d3.flamegraph"]
                 :requires ["cljsjs.d3" "cljsjs.d3-tip"]}]}

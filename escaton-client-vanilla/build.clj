(require 'cljs.build.api)

(cljs.build.api/build "src" {:main 'escaton-client.core
                             :output-to "out/main.js" })

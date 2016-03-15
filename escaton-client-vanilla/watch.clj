(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main 'escaton-client.core
   :output-to "out/main.js"})

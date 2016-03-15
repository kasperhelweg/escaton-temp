(ns escaton-proto.core
  (:require [org.httpkit.server :refer [run-server]]
            [escaton-proto.handler :refer [app]]
            [ring.middleware.reload :as reload]
            [ring.middleware.logger :as logger]
            [compojure.handler :refer [api]])
  (:gen-class))
  
(defn- configure [ ]
  (org.apache.log4j.BasicConfigurator/configure))

(defn in-dev? [args] true) ;; TODO read a config variable from command line, env, or file?

(defn -main [& args]
  (configure)
  
  (let [handler (logger/wrap-with-logger
                 (if (in-dev? args)
                   (do
                     (println "starting server")
                     (reload/wrap-reload (api #'app))) ;; only reload when dev
                   (api app)))]
    (run-server handler {:port 3000})))

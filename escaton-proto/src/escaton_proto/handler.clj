(ns escaton-proto.handler
  (:require [compojure.core :refer [defroutes GET POST]]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)]))

(defn- str-to [num]
  (apply str (interpose ", " (range 1 (inc num)))))

(defn- str-from [num]
  (apply str (interpose ", " (reverse (range 1 ())))))

;; SENTE ---------------
(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! sente-web-server-adapter {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv)        ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn)        ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defroutes app
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req)) ;; sente
  (POST "/chsk" req (ring-ajax-post                req)) ;; sente
  (GET  "/count-up/:to" [to] (str-to (Integer. to)))
  (GET  "/map" [] "hello")
  (GET  "/count-down/:from" [from] (str-from (Integer. from))))

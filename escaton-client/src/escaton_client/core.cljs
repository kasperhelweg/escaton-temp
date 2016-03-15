(ns escaton-client.core
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require
   ;; <other stuff>
   [cljs.core.async :as async :refer (<! >! put! chan)]
   [taoensso.sente  :as sente :refer (cb-success?)] ; <--- Add this
   ))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

;; -----------------------------------------------
;; This is whats going on in the below sente:
;; (def point {:x 5 :y 7})

;; (let [{:keys [x y]} point]
;;     (def x x)
;;     (def y y))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! nil {:type :auto
                                       :chsk-url-fn (constantly "ws://localhost:3000/chsk")
                                       })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state))  ; Watchable, read-only atom

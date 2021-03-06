(defproject escaton-proto "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring/ring-core "1.4.0"]
                 [ring/ring-devel "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring.middleware.logger "0.5.0"]
                 [compojure "1.4.0"]
                 [com.taoensso/sente "1.8.0"]
                 [http-kit "2.1.18"]
                 [javax.servlet/servlet-api "2.5"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler escaton-proto.handler/app
         :nrepl {:start? true
                 :port 9998}}
  :main ^:skip-aot escaton-proto.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})

(ns com.wsscode.oge.pub.network
  (:require [fulcro.client.network :as f.network]))

(defn request-transform [req]
  (let [token nil]
    (-> req
        (cond-> token (assoc-in [:headers "Authorization"] (str "Bearer " token))))))

(defn network-error-callback [& args]
  (js/console.log "Network error" args))

(defrecord DynamicNetwork [url-atom network]
  f.network/NetworkBehavior
  (serialize-requests? [_] (f.network/serialize-requests? network))

  f.network/FulcroNetwork
  (send [this edn ok error]
    (if @url-atom
      (-> network
          (assoc :url @url-atom)
          (f.network/send edn ok error))
      (error (ex-info "No URL set" {}))))

  (start [_]))

(defn make-network
  ([url-atom] (make-network url-atom {}))
  ([url-atom _]
   (let [base-network (f.network/make-fulcro-network nil
                        :request-transform request-transform
                        :global-error-callback network-error-callback)]
     (map->DynamicNetwork {:url-atom url-atom
                           :network  base-network}))))

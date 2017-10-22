(ns com.wsscode.spec-inspec
  (:require [clojure.spec.alpha :as s]))

(defn- accept-keyword [x]
  (if (qualified-keyword? x) x))

(defn- accept-symbol [x]
  (if (qualified-symbol? x) x))

(defn- accept-symbol-call [spec]
  (if (and (seq? spec)
           (symbol? (first spec)))
    spec))

(defn safe-form
  "Return the spec form or nil."
  [spec]
  (if (contains? (s/registry) spec)
    (s/form spec)))

(defn form->spec
  "Return the spec, or first spec when input is a s/and."
  [and-spec]
  (if (and (seq? and-spec)
           (= (first and-spec) `s/and))
    (second and-spec)
    and-spec))

(defn spec->root-sym
  "Determine the main spec symbol from a spec form."
  [spec]
  (let [f (or (safe-form spec)
              (accept-symbol spec)
              (accept-symbol-call spec))]
    (let [spec-def (form->spec f)]
      (if (qualified-keyword? spec-def)
        (recur spec-def)
        spec-def))))

(defn parent-spec
  "Look up for the parent coercer using the spec hierarchy."
  [k]
  (or (-> (s/get-spec k) accept-keyword)
      (-> (form->spec (safe-form k)) accept-keyword)))

(defn registry-lookup
  "Look for the key in registry, if not found try key spec parent recursively."
  [registry k]
  (if-let [c (get registry k)]
    c
    (when-let [parent (-> (parent-spec k) accept-keyword)]
      (recur registry parent))))

(s/fdef registry-lookup
  :args (s/cat :registry map? :k qualified-keyword?)
  :ret any?)

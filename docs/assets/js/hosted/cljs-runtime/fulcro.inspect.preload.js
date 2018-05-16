goog.provide('fulcro.inspect.preload');
goog.require('cljs.core');
goog.require('fulcro.inspect.core');
goog.require('fulcro.inspect.prefs');
fulcro.inspect.core.install((function (){var or__3922__auto__ = cljs.core.deref(fulcro.inspect.prefs.external_config);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

//# sourceMappingURL=fulcro.inspect.preload.js.map

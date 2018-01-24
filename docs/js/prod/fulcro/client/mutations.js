// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.mutations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('fulcro.util');
goog.require('fulcro.client.logging');
goog.require('fulcro.client.primitives');
goog.require('fulcro.i18n');
goog.require('cljs.loader');
goog.require('fulcro.client.impl.protocols');
if(typeof fulcro.client.mutations.mutate !== 'undefined'){
} else {
fulcro.client.mutations.mutate = (function (){var method_table__11860__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11861__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11862__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11864__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fulcro.client.mutations","mutate"),fulcro.client.primitives.dispatch,cljs.core.cst$kw$default,hierarchy__11864__auto__,method_table__11860__auto__,prefer_table__11861__auto__,method_cache__11862__auto__,cached_hierarchy__11863__auto__));
})();
}
if(typeof fulcro.client.mutations.post_mutate !== 'undefined'){
} else {
fulcro.client.mutations.post_mutate = (function (){var method_table__11860__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11861__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11862__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11864__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fulcro.client.mutations","post-mutate"),fulcro.client.primitives.dispatch,cljs.core.cst$kw$default,hierarchy__11864__auto__,method_table__11860__auto__,prefer_table__11861__auto__,method_cache__11862__auto__,cached_hierarchy__11863__auto__));
})();
}
fulcro.client.mutations.post_mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (env,k,p){
return null;
}));
fulcro.client.mutations.default_locale_QMARK_ = (function fulcro$client$mutations$default_locale_QMARK_(locale_string){
var fexpr__40785 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["en",null,"en-US",null], null), null);
return (fexpr__40785.cljs$core$IFn$_invoke$arity$1 ? fexpr__40785.cljs$core$IFn$_invoke$arity$1(locale_string) : fexpr__40785.call(null,locale_string));
});
fulcro.client.mutations.locale_present_QMARK_ = (function fulcro$client$mutations$locale_present_QMARK_(locale_string){
var or__10805__auto__ = fulcro.client.mutations.default_locale_QMARK_(locale_string);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.deref(fulcro.i18n._STAR_loaded_translations_STAR_),locale_string);
}
});
/**
 * Returns true if the given locale is in a loadable module. Always returns false on the server-side.
 */
fulcro.client.mutations.locale_loadable_QMARK_ = (function fulcro$client$mutations$locale_loadable_QMARK_(locale_key){
return cljs.core.contains_QMARK_(cljs.loader.module_infos,locale_key);
});
/**
 * Given a state map and locale, returns a new state map with the locale properly changed. Also potentially triggers a module load.
 *   There is also the mutation `change-locale` that can be used from transact.
 */
fulcro.client.mutations.change_locale_impl = (function fulcro$client$mutations$change_locale_impl(state_map,lang){
var lang__$1 = cljs.core.name(lang);
var locale_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang__$1);
var present_QMARK_ = fulcro.client.mutations.locale_present_QMARK_(lang__$1);
var loadable_QMARK_ = fulcro.client.mutations.locale_loadable_QMARK_(locale_key);
var valid_locale_QMARK_ = (function (){var or__10805__auto__ = present_QMARK_;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return loadable_QMARK_;
}
})();
var set_locale_BANG_ = ((function (lang__$1,locale_key,present_QMARK_,loadable_QMARK_,valid_locale_QMARK_){
return (function (){
cljs.core.reset_BANG_(fulcro.i18n._STAR_current_locale_STAR_,lang__$1);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$ui_SLASH_locale,lang__$1);
});})(lang__$1,locale_key,present_QMARK_,loadable_QMARK_,valid_locale_QMARK_))
;
var should_load_QMARK_ = (function (){var and__10793__auto__ = cljs.core.not(present_QMARK_);
if(and__10793__auto__){
return loadable_QMARK_;
} else {
return and__10793__auto__;
}
})();
if(cljs.core.truth_(should_load_QMARK_)){
cljs.loader.load.cljs$core$IFn$_invoke$arity$2(locale_key,set_locale_BANG_);

return set_locale_BANG_();
} else {
if(cljs.core.truth_(valid_locale_QMARK_)){
return set_locale_BANG_();
} else {
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Attempt to change locale to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang__$1)," but there was no such locale required or available as a loadable module."].join('')], 0));

return state_map;

}
}
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_change_DASH_locale,(function (env40818,_,p__40820){
var map__40821 = p__40820;
var map__40821__$1 = ((((!((map__40821 == null)))?((((map__40821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40821):map__40821);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40821__$1,cljs.core.cst$kw$lang);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__40828 = env40818;
var map__40828__$1 = ((((!((map__40828 == null)))?((((map__40828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40828):map__40828);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40828__$1,cljs.core.cst$kw$reconciler);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40828__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__40828,map__40828__$1,reconciler,state,map__40821,map__40821__$1,lang){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.mutations.change_locale_impl,lang,reconciler);
});})(map__40828,map__40828__$1,reconciler,state,map__40821,map__40821__$1,lang))
], null);
})(),(function (){var env = env40818;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_set_DASH_props,(function (env40843,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__40844 = env40843;
var map__40844__$1 = ((((!((map__40844 == null)))?((((map__40844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40844):map__40844);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40844__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40844__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__40844,map__40844__$1,state,ref){
return (function (){
if((ref == null)){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/set-props requires component to have an ident."], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,((function (map__40844,map__40844__$1,state,ref){
return (function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
});})(map__40844,map__40844__$1,state,ref))
);
});})(map__40844,map__40844__$1,state,ref))
], null);
})(),(function (){var env = env40843;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_toggle,(function (env40855,_,p__40856){
var map__40857 = p__40856;
var map__40857__$1 = ((((!((map__40857 == null)))?((((map__40857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40857):map__40857);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40857__$1,cljs.core.cst$kw$field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__40862 = env40855;
var map__40862__$1 = ((((!((map__40862 == null)))?((((map__40862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40862):map__40862);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40862__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40862__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__40862,map__40862__$1,state,ref,map__40857,map__40857__$1,field){
return (function (){
if((ref == null)){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/toggle requires component to have an ident."], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
});})(map__40862,map__40862__$1,state,ref,map__40857,map__40857__$1,field))
], null);
})(),(function (){var env = env40855;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__40877,k,_){
var map__40878 = p__40877;
var map__40878__$1 = ((((!((map__40878 == null)))?((((map__40878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40878):map__40878);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40878__$1,cljs.core.cst$kw$target);
if((target == null)){
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.logging.value_message("Unknown app state mutation. Have you required the file with your mutations?",k)], 0));
} else {
return null;
}
}));
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
fulcro.client.mutations.toggle_BANG_ = (function fulcro$client$mutations$toggle_BANG_(comp,field){
return fulcro.client.primitives.compressible_transact_BANG_(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$mutations_SLASH_toggle),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$field),(function (){var x__11759__auto__ = field;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())))));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data). Changes made via these
 *   helpers are compressed in the history.
 */
fulcro.client.mutations.set_value_BANG_ = (function fulcro$client$mutations$set_value_BANG_(component,field,value){
return fulcro.client.primitives.compressible_transact_BANG_(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$mutations_SLASH_set_DASH_props),(function (){var x__11759__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())))));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
fulcro.client.mutations.ensure_integer = (function fulcro$client$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return rv;
}
});
fulcro.client.mutations.target_value = (function fulcro$client$mutations$target_value(evt){
return evt.target.value;
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
fulcro.client.mutations.set_integer_BANG_ = (function fulcro$client$mutations$set_integer_BANG_(var_args){
var args__12091__auto__ = [];
var len__12084__auto___40964 = arguments.length;
var i__12085__auto___40965 = (0);
while(true){
if((i__12085__auto___40965 < len__12084__auto___40964)){
args__12091__auto__.push((arguments[i__12085__auto___40965]));

var G__40966 = (i__12085__auto___40965 + (1));
i__12085__auto___40965 = G__40966;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__40956){
var map__40957 = p__40956;
var map__40957__$1 = ((((!((map__40957 == null)))?((((map__40957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40957):map__40957);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40957__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40957__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_((function (){var and__10793__auto__ = (function (){var or__10805__auto__ = event;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not((function (){var and__10793__auto____$1 = event;
if(cljs.core.truth_(and__10793__auto____$1)){
return value;
} else {
return and__10793__auto____$1;
}
})());
} else {
return and__10793__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = fulcro.client.mutations.ensure_integer((cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value));
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

fulcro.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq40950){
var G__40951 = cljs.core.first(seq40950);
var seq40950__$1 = cljs.core.next(seq40950);
var G__40952 = cljs.core.first(seq40950__$1);
var seq40950__$2 = cljs.core.next(seq40950__$1);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40951,G__40952,seq40950__$2);
});

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 *   Calls to this are compressed in history.
 */
fulcro.client.mutations.set_string_BANG_ = (function fulcro$client$mutations$set_string_BANG_(var_args){
var args__12091__auto__ = [];
var len__12084__auto___40999 = arguments.length;
var i__12085__auto___41000 = (0);
while(true){
if((i__12085__auto___41000 < len__12084__auto___40999)){
args__12091__auto__.push((arguments[i__12085__auto___41000]));

var G__41001 = (i__12085__auto___41000 + (1));
i__12085__auto___41000 = G__41001;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__40989){
var map__40990 = p__40989;
var map__40990__$1 = ((((!((map__40990 == null)))?((((map__40990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40990):map__40990);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40990__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40990__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_((function (){var and__10793__auto__ = (function (){var or__10805__auto__ = event;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not((function (){var and__10793__auto____$1 = event;
if(cljs.core.truth_(and__10793__auto____$1)){
return value;
} else {
return and__10793__auto____$1;
}
})());
} else {
return and__10793__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value);
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

fulcro.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq40980){
var G__40981 = cljs.core.first(seq40980);
var seq40980__$1 = cljs.core.next(seq40980);
var G__40982 = cljs.core.first(seq40980__$1);
var seq40980__$2 = cljs.core.next(seq40980__$1);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40981,G__40982,seq40980__$2);
});

fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_set_DASH_query_BANG_,(function (env41008,_,p__41009){
var map__41012 = p__41009;
var map__41012__$1 = ((((!((map__41012 == null)))?((((map__41012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41012):map__41012);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41012__$1,cljs.core.cst$kw$queryid);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41012__$1,cljs.core.cst$kw$query);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41012__$1,cljs.core.cst$kw$params);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__41014 = env41008;
var map__41014__$1 = ((((!((map__41014 == null)))?((((map__41014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41014):map__41014);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014__$1,cljs.core.cst$kw$reconciler);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__41014,map__41014__$1,reconciler,state,map__41012,map__41012__$1,queryid,query,params){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.set_query_STAR_,queryid,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$params,params], null));

if(cljs.core.truth_(reconciler)){
return fulcro.client.impl.protocols.reindex_BANG_(reconciler);
} else {
return null;
}
});})(map__41014,map__41014__$1,reconciler,state,map__41012,map__41012__$1,queryid,query,params))
], null);
})(),(function (){var env = env41008;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_merge_BANG_,(function (env41029,_,p__41030){
var map__41031 = p__41030;
var map__41031__$1 = ((((!((map__41031 == null)))?((((map__41031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41031):map__41031);
var params = map__41031__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41031__$1,cljs.core.cst$kw$query);
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41031__$1,cljs.core.cst$kw$data_DASH_tree);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41031__$1,cljs.core.cst$kw$remote);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env41029;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (env,map__41031,map__41031__$1,params,query,data_tree,remote){
return (function (){
var map__41033 = env;
var map__41033__$1 = ((((!((map__41033 == null)))?((((map__41033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41033):map__41033);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41033__$1,cljs.core.cst$kw$reconciler);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41033__$1,cljs.core.cst$kw$state);
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var state__$1 = fulcro.client.primitives.app_state(reconciler);
var root_component = fulcro.client.primitives.app_root(reconciler);
var root_query = (cljs.core.truth_(query)?null:fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(root_component,cljs.core.deref(state__$1)));
var map__41034 = fulcro.client.primitives.merge_STAR_(reconciler,cljs.core.deref(state__$1),data_tree,query);
var map__41034__$1 = ((((!((map__41034 == null)))?((((map__41034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41034):map__41034);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41034__$1,cljs.core.cst$kw$keys);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41034__$1,cljs.core.cst$kw$next);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41034__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_tempids);
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,keys,remote);

cljs.core.reset_BANG_(state__$1,(function (){var temp__5455__auto__ = cljs.core.cst$kw$migrate.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5455__auto__)){
var migrate = temp__5455__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null)),(function (){var G__41044 = next;
var G__41045 = (function (){var or__10805__auto__ = query;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return root_query;
}
})();
var G__41046 = tempids;
return (migrate.cljs$core$IFn$_invoke$arity$3 ? migrate.cljs$core$IFn$_invoke$arity$3(G__41044,G__41045,G__41046) : migrate.call(null,G__41044,G__41045,G__41046));
})()], 0));
} else {
return next;
}
})());

if((remote == null)){
return null;
} else {
return fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,remote);
}
});})(env,map__41031,map__41031__$1,params,query,data_tree,remote))
], null);
})(),(function (){var env = env41029;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_send_DASH_history,(function (env41080,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env41080;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (env){
return (function (){
return null;
});})(env))
], null);
})(),(function (){var map__41083 = env41080;
var map__41083__$1 = ((((!((map__41083 == null)))?((((map__41083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41083):map__41083);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41083__$1,cljs.core.cst$kw$reconciler);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41083__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41083__$1,cljs.core.cst$kw$ast);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,(function (){var history = cljs.core.deref(fulcro.client.primitives.get_history(reconciler));
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$history,history);
fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$1(["Sending ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$history_DASH_steps.cljs$core$IFn$_invoke$arity$1(history)))," history steps to the server."].join(''));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$params,params__$1);
})()], null);
})()], 0));
}));
/**
 * Indicate the the remote operation will return a value of the given component type. The server-side mutation need
 *   simply return a tree matching that component's query and it will auto-merge into state. The ast param MUST be a query ast
 *   containing exactly one mutation that is *not* already a mutation join. The state is required for looking up dynamic queries, and
 *   may be nil if you use only static queries.
 */
fulcro.client.mutations.returning = (function fulcro$client$mutations$returning(ast,state,class$){
if((cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

var map__41105 = ast;
var map__41105__$1 = ((((!((map__41105 == null)))?((((map__41105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41105):map__41105);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41105__$1,cljs.core.cst$kw$key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41105__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41105__$1,cljs.core.cst$kw$query);
var query_SINGLEQUOTE_ = (function (){var G__41111 = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(class$,state);
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__41111,((function (G__41111,map__41105,map__41105__$1,key,params,query){
return (function (p1__41096_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__41096_SHARP_], 0));
});})(G__41111,map__41105,map__41105__$1,key,params,query))
);
} else {
return G__41111;
}
})();
return fulcro.client.primitives.query__GT_ast1(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = query_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())))));
});
/**
 * Set's a target for the return value from the mutation to be merged into. This can be combined with returning to define
 *   a path to insert the new entry.
 */
fulcro.client.mutations.with_target = (function fulcro$client$mutations$with_target(ast,target){
if((cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

var map__41134 = ast;
var map__41134__$1 = ((((!((map__41134 == null)))?((((map__41134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41134):map__41134);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41134__$1,cljs.core.cst$kw$key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41134__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41134__$1,cljs.core.cst$kw$query);
var query_SINGLEQUOTE_ = (cljs.core.truth_(query)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.assoc,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,target):cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,target], null)));
return fulcro.client.primitives.query__GT_ast1(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = query_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())))));
});
/**
 * Modify an AST containing a single mutation, changing it's parameters to those given as an argument.
 */
fulcro.client.mutations.with_params = (function fulcro$client$mutations$with_params(ast,params){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$params,params);
});

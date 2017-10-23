// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.mutations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('om.next');
goog.require('fulcro.client.util');
goog.require('fulcro.client.logging');
goog.require('fulcro.i18n');
goog.require('cljs.loader');
if(typeof fulcro.client.mutations.mutate !== 'undefined'){
} else {
fulcro.client.mutations.mutate = (function (){var method_table__11467__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11468__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11469__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11470__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11471__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fulcro.client.mutations","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__11471__auto__,method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__));
})();
}
if(typeof fulcro.client.mutations.post_mutate !== 'undefined'){
} else {
fulcro.client.mutations.post_mutate = (function (){var method_table__11467__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11468__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11469__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11470__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11471__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fulcro.client.mutations","post-mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__11471__auto__,method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__));
})();
}
fulcro.client.mutations.post_mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (env,k,p){
return null;
}));
fulcro.client.mutations.default_locale_QMARK_ = (function fulcro$client$mutations$default_locale_QMARK_(locale_string){
var fexpr__44944 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["en",null,"en-US",null], null), null);
return (fexpr__44944.cljs$core$IFn$_invoke$arity$1 ? fexpr__44944.cljs$core$IFn$_invoke$arity$1(locale_string) : fexpr__44944.call(null,locale_string));
});
fulcro.client.mutations.locale_present_QMARK_ = (function fulcro$client$mutations$locale_present_QMARK_(locale_string){
var or__10412__auto__ = fulcro.client.mutations.default_locale_QMARK_(locale_string);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
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
var valid_locale_QMARK_ = (function (){var or__10412__auto__ = present_QMARK_;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return fulcro.client.mutations.locale_loadable_QMARK_(locale_key);
}
})();
if(cljs.core.truth_(valid_locale_QMARK_)){
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.not(present_QMARK_);
if(and__10400__auto__){
return fulcro.client.mutations.locale_loadable_QMARK_(locale_key);
} else {
return and__10400__auto__;
}
})())){
cljs.loader.load.cljs$core$IFn$_invoke$arity$2(locale_key,((function (lang__$1,locale_key,present_QMARK_,valid_locale_QMARK_){
return (function (){
return fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$2("Finished loading locale ",lang__$1);
});})(lang__$1,locale_key,present_QMARK_,valid_locale_QMARK_))
);
} else {
}

cljs.core.reset_BANG_(fulcro.i18n._STAR_current_locale_STAR_,lang__$1);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$ui_SLASH_locale,lang__$1),cljs.core.cst$kw$ui_SLASH_react_DASH_key,lang__$1);
} else {
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Attempt to change locale to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang__$1)," but there was no such locale required or available as a loadable module."].join('')], 0));

return state_map;
}
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_change_DASH_locale,(function (env44981,_,p__44983){
var map__44984 = p__44983;
var map__44984__$1 = ((((!((map__44984 == null)))?((((map__44984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44984):map__44984);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44984__$1,cljs.core.cst$kw$lang);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__44990 = env44981;
var map__44990__$1 = ((((!((map__44990 == null)))?((((map__44990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44990):map__44990);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44990__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__44990,map__44990__$1,state,map__44984,map__44984__$1,lang){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,fulcro.client.mutations.change_locale_impl,lang);
});})(map__44990,map__44990__$1,state,map__44984,map__44984__$1,lang))
], null);
})(),(function (){var env = env44981;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_set_DASH_props,(function (env45001,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__45002 = env45001;
var map__45002__$1 = ((((!((map__45002 == null)))?((((map__45002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45002):map__45002);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45002__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45002__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__45002,map__45002__$1,state,ref){
return (function (){
if((ref == null)){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/set-props requires component to have an ident."], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,((function (map__45002,map__45002__$1,state,ref){
return (function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
});})(map__45002,map__45002__$1,state,ref))
);
});})(map__45002,map__45002__$1,state,ref))
], null);
})(),(function (){var env = env45001;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_toggle,(function (env45015,_,p__45016){
var map__45017 = p__45016;
var map__45017__$1 = ((((!((map__45017 == null)))?((((map__45017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45017):map__45017);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45017__$1,cljs.core.cst$kw$field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__45021 = env45015;
var map__45021__$1 = ((((!((map__45021 == null)))?((((map__45021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45021):map__45021);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45021__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45021__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__45021,map__45021__$1,state,ref,map__45017,map__45017__$1,field){
return (function (){
if((ref == null)){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/toggle requires component to have an ident."], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
});})(map__45021,map__45021__$1,state,ref,map__45017,map__45017__$1,field))
], null);
})(),(function (){var env = env45015;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__45029,k,_){
var map__45030 = p__45029;
var map__45030__$1 = ((((!((map__45030 == null)))?((((map__45030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45030):map__45030);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,cljs.core.cst$kw$target);
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
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$mutations_SLASH_toggle),(function (){var x__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$field),(function (){var x__11366__auto__ = field;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())))));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data).
 */
fulcro.client.mutations.set_value_BANG_ = (function fulcro$client$mutations$set_value_BANG_(component,field,value){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$mutations_SLASH_set_DASH_props),(function (){var x__11366__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
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
 * and write clear top-level transactions for anything else.
 */
fulcro.client.mutations.set_integer_BANG_ = (function fulcro$client$mutations$set_integer_BANG_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___45108 = arguments.length;
var i__11692__auto___45109 = (0);
while(true){
if((i__11692__auto___45109 < len__11691__auto___45108)){
args__11698__auto__.push((arguments[i__11692__auto___45109]));

var G__45110 = (i__11692__auto___45109 + (1));
i__11692__auto___45109 = G__45110;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__45100){
var map__45102 = p__45100;
var map__45102__$1 = ((((!((map__45102 == null)))?((((map__45102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45102):map__45102);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45102__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45102__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_((function (){var and__10400__auto__ = (function (){var or__10412__auto__ = event;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not((function (){var and__10400__auto____$1 = event;
if(cljs.core.truth_(and__10400__auto____$1)){
return value;
} else {
return and__10400__auto____$1;
}
})());
} else {
return and__10400__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = fulcro.client.mutations.ensure_integer((cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value));
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

fulcro.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq45095){
var G__45097 = cljs.core.first(seq45095);
var seq45095__$1 = cljs.core.next(seq45095);
var G__45098 = cljs.core.first(seq45095__$1);
var seq45095__$2 = cljs.core.next(seq45095__$1);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45097,G__45098,seq45095__$2);
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
 */
fulcro.client.mutations.set_string_BANG_ = (function fulcro$client$mutations$set_string_BANG_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___45139 = arguments.length;
var i__11692__auto___45141 = (0);
while(true){
if((i__11692__auto___45141 < len__11691__auto___45139)){
args__11698__auto__.push((arguments[i__11692__auto___45141]));

var G__45143 = (i__11692__auto___45141 + (1));
i__11692__auto___45141 = G__45143;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__45125){
var map__45126 = p__45125;
var map__45126__$1 = ((((!((map__45126 == null)))?((((map__45126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45126):map__45126);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45126__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45126__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_((function (){var and__10400__auto__ = (function (){var or__10412__auto__ = event;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not((function (){var and__10400__auto____$1 = event;
if(cljs.core.truth_(and__10400__auto____$1)){
return value;
} else {
return and__10400__auto____$1;
}
})());
} else {
return and__10400__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value);
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

fulcro.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq45120){
var G__45121 = cljs.core.first(seq45120);
var seq45120__$1 = cljs.core.next(seq45120);
var G__45122 = cljs.core.first(seq45120__$1);
var seq45120__$2 = cljs.core.next(seq45120__$1);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45121,G__45122,seq45120__$2);
});


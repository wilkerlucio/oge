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
var fexpr__44909 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["en",null,"en-US",null], null), null);
return (fexpr__44909.cljs$core$IFn$_invoke$arity$1 ? fexpr__44909.cljs$core$IFn$_invoke$arity$1(locale_string) : fexpr__44909.call(null,locale_string));
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
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_change_DASH_locale,(function (env44951,_,p__44953){
var map__44954 = p__44953;
var map__44954__$1 = ((((!((map__44954 == null)))?((((map__44954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44954):map__44954);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44954__$1,cljs.core.cst$kw$lang);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__44959 = env44951;
var map__44959__$1 = ((((!((map__44959 == null)))?((((map__44959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44959):map__44959);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44959__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__44959,map__44959__$1,state,map__44954,map__44954__$1,lang){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,fulcro.client.mutations.change_locale_impl,lang);
});})(map__44959,map__44959__$1,state,map__44954,map__44954__$1,lang))
], null);
})(),(function (){var env = env44951;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_set_DASH_props,(function (env44973,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__44975 = env44973;
var map__44975__$1 = ((((!((map__44975 == null)))?((((map__44975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44975):map__44975);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44975__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44975__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__44975,map__44975__$1,state,ref){
return (function (){
if((ref == null)){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/set-props requires component to have an ident."], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,((function (map__44975,map__44975__$1,state,ref){
return (function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
});})(map__44975,map__44975__$1,state,ref))
);
});})(map__44975,map__44975__$1,state,ref))
], null);
})(),(function (){var env = env44973;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_toggle,(function (env44984,_,p__44985){
var map__44986 = p__44985;
var map__44986__$1 = ((((!((map__44986 == null)))?((((map__44986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44986):map__44986);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44986__$1,cljs.core.cst$kw$field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__44995 = env44984;
var map__44995__$1 = ((((!((map__44995 == null)))?((((map__44995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44995):map__44995);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__44995,map__44995__$1,state,ref,map__44986,map__44986__$1,field){
return (function (){
if((ref == null)){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/toggle requires component to have an ident."], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
});})(map__44995,map__44995__$1,state,ref,map__44986,map__44986__$1,field))
], null);
})(),(function (){var env = env44984;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__45003,k,_){
var map__45004 = p__45003;
var map__45004__$1 = ((((!((map__45004 == null)))?((((map__45004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45004):map__45004);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45004__$1,cljs.core.cst$kw$target);
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
var len__11691__auto___45069 = arguments.length;
var i__11692__auto___45071 = (0);
while(true){
if((i__11692__auto___45071 < len__11691__auto___45069)){
args__11698__auto__.push((arguments[i__11692__auto___45071]));

var G__45075 = (i__11692__auto___45071 + (1));
i__11692__auto___45071 = G__45075;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__45063){
var map__45064 = p__45063;
var map__45064__$1 = ((((!((map__45064 == null)))?((((map__45064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45064):map__45064);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45064__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45064__$1,cljs.core.cst$kw$value);
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

fulcro.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq45056){
var G__45057 = cljs.core.first(seq45056);
var seq45056__$1 = cljs.core.next(seq45056);
var G__45058 = cljs.core.first(seq45056__$1);
var seq45056__$2 = cljs.core.next(seq45056__$1);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45057,G__45058,seq45056__$2);
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
var len__11691__auto___45107 = arguments.length;
var i__11692__auto___45108 = (0);
while(true){
if((i__11692__auto___45108 < len__11691__auto___45107)){
args__11698__auto__.push((arguments[i__11692__auto___45108]));

var G__45109 = (i__11692__auto___45108 + (1));
i__11692__auto___45108 = G__45109;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__45101){
var map__45102 = p__45101;
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

var value__$1 = (cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value);
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

fulcro.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq45096){
var G__45097 = cljs.core.first(seq45096);
var seq45096__$1 = cljs.core.next(seq45096);
var G__45098 = cljs.core.first(seq45096__$1);
var seq45096__$2 = cljs.core.next(seq45096__$1);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45097,G__45098,seq45096__$2);
});


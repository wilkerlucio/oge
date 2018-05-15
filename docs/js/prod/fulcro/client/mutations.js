// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.mutations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('fulcro.util');
goog.require('fulcro.logging');
goog.require('fulcro.client.primitives');
goog.require('cljs.loader');
goog.require('fulcro.client.impl.protocols');
goog.require('fulcro.client.impl.parser');
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
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_set_DASH_props,(function (env37840,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__37842 = env37840;
var map__37842__$1 = ((((!((map__37842 == null)))?((((map__37842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37842):map__37842);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37842__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37842__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__37842,map__37842__$1,state,ref){
return (function (){
if((ref == null)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.mutations",cljs.core.cst$kw$line,113], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/set-props requires component to have an ident."], 0));
}catch (e37846){if((e37846 instanceof Error)){
var e__18456__auto___37848 = e37846;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.mutations",cljs.core.cst$kw$line,113], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___37848], 0));
} else {
throw e37846;

}
}} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,((function (map__37842,map__37842__$1,state,ref){
return (function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
});})(map__37842,map__37842__$1,state,ref))
);
});})(map__37842,map__37842__$1,state,ref))
], null);
})(),(function (){var env = env37840;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_toggle,(function (env37850,_,p__37851){
var map__37852 = p__37851;
var map__37852__$1 = ((((!((map__37852 == null)))?((((map__37852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37852):map__37852);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37852__$1,cljs.core.cst$kw$field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__37854 = env37850;
var map__37854__$1 = ((((!((map__37854 == null)))?((((map__37854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37854):map__37854);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37854__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37854__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__37854,map__37854__$1,state,ref,map__37852,map__37852__$1,field){
return (function (){
if((ref == null)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.mutations",cljs.core.cst$kw$line,123], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/toggle requires component to have an ident."], 0));
}catch (e37856){if((e37856 instanceof Error)){
var e__18456__auto___37857 = e37856;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.mutations",cljs.core.cst$kw$line,123], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___37857], 0));
} else {
throw e37856;

}
}} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
});})(map__37854,map__37854__$1,state,ref,map__37852,map__37852__$1,field))
], null);
})(),(function (){var env = env37850;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__37858,k,_){
var map__37859 = p__37858;
var map__37859__$1 = ((((!((map__37859 == null)))?((((map__37859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37859):map__37859);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37859__$1,cljs.core.cst$kw$target);
if((target == null)){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.mutations",cljs.core.cst$kw$line,128], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown app state mutation. Have you required the file with your mutations?",k], 0));
}catch (e37861){if((e37861 instanceof Error)){
var e__18456__auto__ = e37861;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.mutations",cljs.core.cst$kw$line,128], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto__], 0));
} else {
throw e37861;

}
}} else {
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
var len__12084__auto___37880 = arguments.length;
var i__12085__auto___37881 = (0);
while(true){
if((i__12085__auto___37881 < len__12084__auto___37880)){
args__12091__auto__.push((arguments[i__12085__auto___37881]));

var G__37882 = (i__12085__auto___37881 + (1));
i__12085__auto___37881 = G__37882;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__37877){
var map__37878 = p__37877;
var map__37878__$1 = ((((!((map__37878 == null)))?((((map__37878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37878):map__37878);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878__$1,cljs.core.cst$kw$value);
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

fulcro.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq37871){
var G__37872 = cljs.core.first(seq37871);
var seq37871__$1 = cljs.core.next(seq37871);
var G__37873 = cljs.core.first(seq37871__$1);
var seq37871__$2 = cljs.core.next(seq37871__$1);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37872,G__37873,seq37871__$2);
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
var len__12084__auto___37897 = arguments.length;
var i__12085__auto___37898 = (0);
while(true){
if((i__12085__auto___37898 < len__12084__auto___37897)){
args__12091__auto__.push((arguments[i__12085__auto___37898]));

var G__37899 = (i__12085__auto___37898 + (1));
i__12085__auto___37898 = G__37899;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__37890){
var map__37891 = p__37890;
var map__37891__$1 = ((((!((map__37891 == null)))?((((map__37891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37891):map__37891);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37891__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37891__$1,cljs.core.cst$kw$value);
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

fulcro.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq37887){
var G__37888 = cljs.core.first(seq37887);
var seq37887__$1 = cljs.core.next(seq37887);
var G__37889 = cljs.core.first(seq37887__$1);
var seq37887__$2 = cljs.core.next(seq37887__$1);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37888,G__37889,seq37887__$2);
});

fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_set_DASH_query_BANG_,(function (env37905,_,p__37906){
var map__37907 = p__37906;
var map__37907__$1 = ((((!((map__37907 == null)))?((((map__37907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37907):map__37907);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,cljs.core.cst$kw$queryid);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,cljs.core.cst$kw$query);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,cljs.core.cst$kw$params);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__37912 = env37905;
var map__37912__$1 = ((((!((map__37912 == null)))?((((map__37912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37912):map__37912);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37912__$1,cljs.core.cst$kw$reconciler);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37912__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__37912,map__37912__$1,reconciler,state,map__37907,map__37907__$1,queryid,query,params){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.set_query_STAR_,queryid,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,query,cljs.core.cst$kw$params,params], null));

if(cljs.core.truth_(reconciler)){
return fulcro.client.impl.protocols.reindex_BANG_(reconciler);
} else {
return null;
}
});})(map__37912,map__37912__$1,reconciler,state,map__37907,map__37907__$1,queryid,query,params))
], null);
})(),(function (){var env = env37905;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_merge_BANG_,(function (env37915,_,p__37916){
var map__37917 = p__37916;
var map__37917__$1 = ((((!((map__37917 == null)))?((((map__37917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37917):map__37917);
var params = map__37917__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,cljs.core.cst$kw$query);
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,cljs.core.cst$kw$data_DASH_tree);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,cljs.core.cst$kw$remote);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env37915;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (env,map__37917,map__37917__$1,params,query,data_tree,remote){
return (function (){
var map__37919 = env;
var map__37919__$1 = ((((!((map__37919 == null)))?((((map__37919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37919):map__37919);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37919__$1,cljs.core.cst$kw$reconciler);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37919__$1,cljs.core.cst$kw$state);
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var state__$1 = fulcro.client.primitives.app_state(reconciler);
var root_component = fulcro.client.primitives.app_root(reconciler);
var root_query = (cljs.core.truth_(query)?null:fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(root_component,cljs.core.deref(state__$1)));
var map__37920 = fulcro.client.primitives.merge_STAR_(reconciler,cljs.core.deref(state__$1),data_tree,query);
var map__37920__$1 = ((((!((map__37920 == null)))?((((map__37920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37920):map__37920);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37920__$1,cljs.core.cst$kw$keys);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37920__$1,cljs.core.cst$kw$next);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37920__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_tempids);
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,keys,remote);

cljs.core.reset_BANG_(state__$1,(function (){var temp__5455__auto__ = cljs.core.cst$kw$migrate.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5455__auto__)){
var migrate = temp__5455__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null)),(function (){var G__37926 = next;
var G__37927 = (function (){var or__10805__auto__ = query;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return root_query;
}
})();
var G__37928 = tempids;
return (migrate.cljs$core$IFn$_invoke$arity$3 ? migrate.cljs$core$IFn$_invoke$arity$3(G__37926,G__37927,G__37928) : migrate.call(null,G__37926,G__37927,G__37928));
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
});})(env,map__37917,map__37917__$1,params,query,data_tree,remote))
], null);
})(),(function (){var env = env37915;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$mutations_SLASH_send_DASH_history,(function (env37930,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env37930;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (env){
return (function (){
return null;
});})(env))
], null);
})(),(function (){var map__37931 = env37930;
var map__37931__$1 = ((((!((map__37931 == null)))?((((map__37931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37931):map__37931);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931__$1,cljs.core.cst$kw$reconciler);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37931__$1,cljs.core.cst$kw$ast);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,(function (){var history = cljs.core.deref(fulcro.client.primitives.get_history(reconciler));
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$history,history);
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.mutations",cljs.core.cst$kw$line,231], null),cljs.core.cst$kw$debug,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Sending ",cljs.core.count(cljs.core.cst$kw$history_DASH_steps.cljs$core$IFn$_invoke$arity$1(history))," history steps to the server."], 0));
}catch (e37936){if((e37936 instanceof Error)){
var e__18456__auto___37940 = e37936;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.mutations",cljs.core.cst$kw$line,231], null),cljs.core.cst$kw$debug,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___37940], 0));
} else {
throw e37936;

}
}
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

var map__37942 = ast;
var map__37942__$1 = ((((!((map__37942 == null)))?((((map__37942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37942):map__37942);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942__$1,cljs.core.cst$kw$key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37942__$1,cljs.core.cst$kw$query);
var query_SINGLEQUOTE_ = (function (){var G__37944 = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(class$,state);
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__37944,((function (G__37944,map__37942,map__37942__$1,key,params,query){
return (function (p1__37941_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__37941_SHARP_], 0));
});})(G__37944,map__37942,map__37942__$1,key,params,query))
);
} else {
return G__37944;
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

var map__37956 = ast;
var map__37956__$1 = ((((!((map__37956 == null)))?((((map__37956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37956):map__37956);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,cljs.core.cst$kw$key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,cljs.core.cst$kw$query);
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
fulcro.client.mutations.is_call_QMARK_ = (function fulcro$client$mutations$is_call_QMARK_(expr){
return (cljs.core.list_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(expr))) || (cljs.core.map_QMARK_(cljs.core.second(expr))));
});
/**
 * Modifies the AST node to enable progressive updates (if available) about the response download progress.
 *   `progress-mutation` is a call expression (e.g. `(f {})`) for a mutation, which can include the normal parameter
 *   map. This mutation mutation will be triggered on each progress step. It will receive
 *   one call when the request is sent, followed by zero or more progress events from the low-level network layer,
 *   and one call when the request is done (with any status). The first and last calls are guaranteed.
 * 
 *   An extra parameter keyed at `fulcro.client.network/progress` will be included that contains a :progress key
 *   (:sending, :receiving, :complete, or :failed), and a status that will be dependent on the network implementation
 *   (e.g. a google XhrIO progress event).
 */
fulcro.client.mutations.with_progressive_updates = (function fulcro$client$mutations$with_progressive_updates(ast,progress_mutation){
if((cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

if(cljs.core.truth_(fulcro.client.mutations.is_call_QMARK_(progress_mutation))){
} else {
throw (new Error("Assert failed: (is-call? progress-mutation)"));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$6(ast,cljs.core.cst$kw$key,cljs.core.vary_meta,cljs.core.assoc,cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_mutation,progress_mutation);
});
/**
 * Given a remote transaction containing one or more remote mutations, returns a local transaction of zero or
 *   more mutations that should be run to provide a progress update. The `progress` argument will be added to
 *   each resulting mutation in parameters as `:fulcro.client.network/progress`.
 */
fulcro.client.mutations.progressive_update_transaction = (function fulcro$client$mutations$progressive_update_transaction(network_transaction,progress){
var add_progress = (function (expr){
var ast = fulcro.client.impl.parser.expr__GT_ast(expr);
var ast_2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(ast,cljs.core.cst$kw$params,cljs.core.assoc,cljs.core.cst$kw$fulcro$client$network_SLASH_progress,progress);
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_2);
});
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (add_progress){
return (function (m){
var G__37970 = m;
var G__37970__$1 = (((G__37970 == null))?null:cljs.core.seq(G__37970));
var G__37970__$2 = (((G__37970__$1 == null))?null:cljs.core.first(G__37970__$1));
var G__37970__$3 = (((G__37970__$2 == null))?null:cljs.core.meta(G__37970__$2));
var G__37970__$4 = (((G__37970__$3 == null))?null:cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_mutation.cljs$core$IFn$_invoke$arity$1(G__37970__$3));
if((G__37970__$4 == null)){
return null;
} else {
return add_progress(G__37970__$4);
}
});})(add_progress))
,network_transaction));
});
/**
 * Modifies the mutation to enable network-level aborts. The id is a user-defined ID (any type) that identifies
 *   things that can be aborted on networking. IDs need not be unique per node, though aborting an ID that refers to
 *   more than one in-flight request will abort them all.
 */
fulcro.client.mutations.with_abort_id = (function fulcro$client$mutations$with_abort_id(ast,id){
if((cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$6(ast,cljs.core.cst$kw$key,cljs.core.vary_meta,cljs.core.assoc,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id,id);
});
/**
 * Returns a set of abort IDs from the given transaction.
 */
fulcro.client.mutations.abort_ids = (function fulcro$client$mutations$abort_ids(tx){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (m){
var G__37976 = m;
var G__37976__$1 = (((G__37976 == null))?null:cljs.core.seq(G__37976));
var G__37976__$2 = (((G__37976__$1 == null))?null:cljs.core.first(G__37976__$1));
var G__37976__$3 = (((G__37976__$2 == null))?null:cljs.core.meta(G__37976__$2));
if((G__37976__$3 == null)){
return null;
} else {
return cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id.cljs$core$IFn$_invoke$arity$1(G__37976__$3);
}
}),tx));
});

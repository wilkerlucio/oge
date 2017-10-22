// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.impl.om_plumbing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('om.util');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.logging');
goog.require('cljs.core.async');
goog.require('clojure.walk');
/**
 * Read function for the Om parser.
 * 
 *   *** NOTE: This function only runs when it is called without a target -- it is not triggered for remote reads. To
 *   trigger a remote read, use the `fulcro/data-fetch` namespace. ***
 * 
 *   If a user-read is supplied, *it will be allowed* to trigger remote reads. This is not recommended, as you
 *   will probably have to augment the networking layer to get it to do what you mean. Use `load` instead. You have
 *   been warned. Triggering remote reads is allowed, but discouraged and unsupported.
 * 
 *   Returns the current locale when reading the :ui/locale keyword. Otherwise pulls data out of the app-state.
 *   
 */
fulcro.client.impl.om_plumbing.read_local = (function fulcro$client$impl$om_plumbing$read_local(user_read,p__45162,dkey,params){
var map__45163 = p__45162;
var map__45163__$1 = ((((!((map__45163 == null)))?((((map__45163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45163):map__45163);
var env = map__45163__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45163__$1,cljs.core.cst$kw$query);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45163__$1,cljs.core.cst$kw$target);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45163__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45163__$1,cljs.core.cst$kw$ast);
var temp__5457__auto__ = (user_read.cljs$core$IFn$_invoke$arity$3 ? user_read.cljs$core$IFn$_invoke$arity$3(env,dkey,params) : user_read.call(null,env,dkey,params));
if(cljs.core.truth_(temp__5457__auto__)){
var custom_result = temp__5457__auto__;
return custom_result;
} else {
if(cljs.core.not(target)){
var G__45171 = dkey;
switch (G__45171) {
default:
var top_level_prop = (query == null);
var key = (function (){var or__10412__auto__ = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return dkey;
}
})();
var by_ident_QMARK_ = om.util.ident_QMARK_(key);
var union_QMARK_ = cljs.core.map_QMARK_(query);
var data = ((by_ident_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),key));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,((union_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])], null),cljs.core.deref(state),cljs.core.deref(state)),key):((top_level_prop)?data:om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,data,cljs.core.deref(state))
))], null);

}
} else {
return null;
}
}
});
/**
 * This is the Om entry point for writes. In general this is simply a call to the multi-method
 *   defined by Fulcro (mutate); however, Fulcro supports the concept of a global `post-mutate`
 *   function that will be called anytime the general mutate has an action that is desired. This
 *   can be useful, for example, in cases where you have some post-processing that needs
 *   to happen for a given (sub)set of mutations (that perhaps you did not define).
 */
fulcro.client.impl.om_plumbing.write_entry_point = (function fulcro$client$impl$om_plumbing$write_entry_point(env,k,params){
var rv = (function (){try{return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : fulcro.client.mutations.mutate.call(null,env,k,params));
}catch (e45200){var e = e45200;
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Mutation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," failed with exception"].join(''),e], 0));

return null;
}})();
var action = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(rv);
if(cljs.core.truth_(action)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rv,cljs.core.cst$kw$action,((function (rv,action){
return (function (){
try{var action_result = (action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(env,k,params) : action.call(null,env,k,params));
try{(fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : fulcro.client.mutations.post_mutate.call(null,env,k,params));
}catch (e45202){var e_45210 = e45202;
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Post mutate failed on dispatch to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], 0));
}
return action_result;
}catch (e45201){var e = e45201;
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Mutation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," failed with exception"].join(''),e], 0));

throw e;
}});})(rv,action))
);
} else {
return rv;
}
});
/**
 * Replaces all om-tempids in app-state with the ids returned by the server.
 */
fulcro.client.impl.om_plumbing.resolve_tempids = (function fulcro$client$impl$om_plumbing$resolve_tempids(state,tid__GT_rid){
if(cljs.core.empty_QMARK_(tid__GT_rid)){
return state;
} else {
return clojure.walk.prewalk((function (p1__45214_SHARP_){
if(om.next.tempid_QMARK_(p1__45214_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tid__GT_rid,p1__45214_SHARP_,p1__45214_SHARP_);
} else {
return p1__45214_SHARP_;
}
}),state);
}
});
/**
 * Rewrite any pending requests in the request queue to account for the fact that a response might have
 *   changed ids that are expressed in the mutations of that queue. tempid-map MUST be a map from om
 *   tempid to real ids, not idents.
 */
fulcro.client.impl.om_plumbing.rewrite_tempids_in_request_queue = (function fulcro$client$impl$om_plumbing$rewrite_tempids_in_request_queue(queue,tempid_map){
var entry = cljs.core.async.poll_BANG_(queue);
var entries = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(entry)){
var G__45225 = cljs.core.async.poll_BANG_(queue);
var G__45226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entries,fulcro.client.impl.om_plumbing.resolve_tempids(entry,tempid_map));
entry = G__45225;
entries = G__45226;
continue;
} else {
if(cljs.core.seq(entries)){
var seq__45219 = cljs.core.seq(entries);
var chunk__45220 = null;
var count__45221 = (0);
var i__45222 = (0);
while(true){
if((i__45222 < count__45221)){
var e = chunk__45220.cljs$core$IIndexed$_nth$arity$2(null,i__45222);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
throw (new Error(["Assert failed: ","Queue should not block.","\n","(async/offer! queue e)"].join('')));
}

var G__45227 = seq__45219;
var G__45228 = chunk__45220;
var G__45229 = count__45221;
var G__45230 = (i__45222 + (1));
seq__45219 = G__45227;
chunk__45220 = G__45228;
count__45221 = G__45229;
i__45222 = G__45230;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__45219);
if(temp__5459__auto__){
var seq__45219__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45219__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__45219__$1);
var G__45231 = cljs.core.chunk_rest(seq__45219__$1);
var G__45232 = c__11343__auto__;
var G__45233 = cljs.core.count(c__11343__auto__);
var G__45234 = (0);
seq__45219 = G__45231;
chunk__45220 = G__45232;
count__45221 = G__45233;
i__45222 = G__45234;
continue;
} else {
var e = cljs.core.first(seq__45219__$1);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
throw (new Error(["Assert failed: ","Queue should not block.","\n","(async/offer! queue e)"].join('')));
}

var G__45235 = cljs.core.next(seq__45219__$1);
var G__45236 = null;
var G__45237 = (0);
var G__45238 = (0);
seq__45219 = G__45235;
chunk__45220 = G__45236;
count__45221 = G__45237;
i__45222 = G__45238;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
break;
}
});
/**
 * Removes all fulcro/load and tx/fallback mutations from the query
 */
fulcro.client.impl.om_plumbing.remove_loads_and_fallbacks = (function fulcro$client$impl$om_plumbing$remove_loads_and_fallbacks(query){
var symbols_to_filter = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$fulcro_SLASH_load,null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_load,null,cljs.core.cst$sym$tx_SLASH_fallback,null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_fallback,null], null), null);
var ast = om.next.query__GT_ast(query);
var children = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_filter,ast,children){
return (function (child){
return !(cljs.core.contains_QMARK_(symbols_to_filter,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(child)));
});})(symbols_to_filter,ast,children))
,children);
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,new_children);
return om.next.ast__GT_query(new_ast);
});
fulcro.client.impl.om_plumbing.fallback_query = (function fulcro$client$impl$om_plumbing$fallback_query(query,resp){

var symbols_to_find = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$tx_SLASH_fallback,null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_fallback,null], null), null);
var ast = om.next.query__GT_ast(query);
var children = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (ast__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(ast__$1,cljs.core.cst$kw$params,cljs.core.assoc,cljs.core.cst$kw$execute,true,cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp], 0));
});})(symbols_to_find,ast,children))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (child){
return cljs.core.contains_QMARK_(symbols_to_find,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(child));
});})(symbols_to_find,ast,children))
,children));
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,new_children);
var fallback_query = om.next.ast__GT_query(new_ast);
if(cljs.core.truth_(cljs.core.not_empty(fallback_query))){
return fallback_query;
} else {
return null;
}
});
/**
 * Check the given keyword to see if it is in the :ui namespace.
 */
fulcro.client.impl.om_plumbing.is_ui_query_fragment_QMARK_ = (function fulcro$client$impl$om_plumbing$is_ui_query_fragment_QMARK_(kw){
var kw__$1 = ((cljs.core.map_QMARK_(kw))?cljs.core.first(cljs.core.keys(kw)):kw);
if((kw__$1 instanceof cljs.core.Keyword)){
var G__45253 = kw__$1;
var G__45253__$1 = (((G__45253 == null))?null:cljs.core.namespace(G__45253));
if((G__45253__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^ui(?:\.|$)/,G__45253__$1);
}
} else {
return null;
}
});
/**
 * Returns a new query with fragments that are in the `ui` namespace removed.
 */
fulcro.client.impl.om_plumbing.strip_ui = (function fulcro$client$impl$om_plumbing$strip_ui(query){
var ast = om.next.query__GT_ast(query);
var drop_ui_children = ((function (ast){
return (function fulcro$client$impl$om_plumbing$strip_ui_$_drop_ui_children(ast_node){
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ast){
return (function (acc,n){
if(cljs.core.truth_(fulcro.client.impl.om_plumbing.is_ui_query_fragment_QMARK_(cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(n)))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,fulcro$client$impl$om_plumbing$strip_ui_$_drop_ui_children(n));
}
});})(ast))
,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast_node));
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_node,cljs.core.cst$kw$children,children);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast_node,cljs.core.cst$kw$children);
}
});})(ast))
;
return om.next.ast__GT_query(drop_ui_children(ast));
});
fulcro.client.impl.om_plumbing.nf = cljs.core.cst$kw$fulcro$client$impl$om_DASH_plumbing_SLASH_not_DASH_found;
fulcro.client.impl.om_plumbing.walk = (function fulcro$client$impl$om_plumbing$walk(inner,outer,form){
if(cljs.core.map_QMARK_(form)){
var G__45262 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45261_SHARP_){
var G__45263 = cljs.core.with_meta(p1__45261_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map_DASH_entry_QMARK_,true], null));
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__45263) : inner.call(null,G__45263));
}),form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45262) : outer.call(null,G__45262));
} else {
if(cljs.core.list_QMARK_(form)){
var G__45264 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45264) : outer.call(null,G__45264));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__45265 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45265) : outer.call(null,G__45265));
} else {
if(cljs.core.record_QMARK_(form)){
var G__45266 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45266) : outer.call(null,G__45266));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__45267 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__45267) : outer.call(null,G__45267));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(form) : outer.call(null,form));

}
}
}
}
}
});
fulcro.client.impl.om_plumbing.prewalk = (function fulcro$client$impl$om_plumbing$prewalk(f,form){
return fulcro.client.impl.om_plumbing.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.om_plumbing.prewalk,f),cljs.core.identity,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form)));
});
fulcro.client.impl.om_plumbing.postwalk = (function fulcro$client$impl$om_plumbing$postwalk(f,form){
return fulcro.client.impl.om_plumbing.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.om_plumbing.postwalk,f),f,form);
});
fulcro.client.impl.om_plumbing.recursive_QMARK_ = (function fulcro$client$impl$om_plumbing$recursive_QMARK_(qf){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,qf);
});
fulcro.client.impl.om_plumbing.add_meta_to_recursive_queries = (function fulcro$client$impl$om_plumbing$add_meta_to_recursive_queries(q){
var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(q);
return fulcro.client.impl.om_plumbing.postwalk(((function (a){
return (function (p1__45282_SHARP_){
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.vector_QMARK_(p1__45282_SHARP_);
if(and__10400__auto__){
var and__10400__auto____$1 = cljs.core.not((function (){var G__45315 = p1__45282_SHARP_;
var G__45315__$1 = (((G__45315 == null))?null:cljs.core.meta(G__45315));
if((G__45315__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$map_DASH_entry_QMARK_.cljs$core$IFn$_invoke$arity$1(G__45315__$1);
}
})());
if(and__10400__auto____$1){
var and__10400__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__45282_SHARP_),(2));
if(and__10400__auto____$2){
var G__45320 = p1__45282_SHARP_;
var G__45320__$1 = (((G__45320 == null))?null:cljs.core.second(G__45320));
var G__45320__$2 = (((G__45320__$1 == null))?null:cljs.core.meta(G__45320__$1));
var G__45320__$3 = (((G__45320__$2 == null))?null:cljs.core.cst$kw$depth.cljs$core$IFn$_invoke$arity$1(G__45320__$2));
if((G__45320__$3 == null)){
return null;
} else {
return typeof G__45320__$3 === 'number';
}
} else {
return and__10400__auto____$2;
}
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(p1__45282_SHARP_),cljs.core.cst$kw$depth.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.second(p1__45282_SHARP_)))], null);
} else {
return p1__45282_SHARP_;

}
});})(a))
,fulcro.client.impl.om_plumbing.prewalk(((function (a){
return (function (p1__45281_SHARP_){
if((cljs.core.vector_QMARK_(p1__45281_SHARP_)) && (cljs.core.cst$kw$map_DASH_entry_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__45281_SHARP_)) === false)){
cljs.core.reset_BANG_(a,p1__45281_SHARP_);

return p1__45281_SHARP_;
} else {
if(typeof p1__45281_SHARP_ === 'number'){
return cljs.core.with_meta(cljs.core.cst$sym$$$$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$$$$,cljs.core.deref(a),cljs.core.cst$kw$depth,p1__45281_SHARP_], null));
} else {
if(cljs.core.truth_(fulcro.client.impl.om_plumbing.recursive_QMARK_(p1__45281_SHARP_))){
return cljs.core.with_meta(p1__45281_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$$$$,cljs.core.deref(a)], null));
} else {
return p1__45281_SHARP_;

}
}
}
});})(a))
,q));
});
/**
 * Returns data with meta-data marking it as a leaf in the result.
 */
fulcro.client.impl.om_plumbing.as_leaf = (function fulcro$client$impl$om_plumbing$as_leaf(data){
if(cljs.core.coll_QMARK_(data)){
return cljs.core.with_meta(data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro_SLASH_leaf,true], null));
} else {
return data;
}
});
/**
 * Returns true iff the given data is marked as a leaf in the result (according to the query). Requires pre-marking.
 */
fulcro.client.impl.om_plumbing.leaf_QMARK_ = (function fulcro$client$impl$om_plumbing$leaf_QMARK_(data){
return (!(cljs.core.coll_QMARK_(data))) || (cljs.core.empty_QMARK_(data)) || ((cljs.core.coll_QMARK_(data)) && (cljs.core.boolean$(cljs.core.cst$kw$fulcro_SLASH_leaf.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))));
});
/**
 * Recursively walk the query and response marking anything that was *asked for* in the query but is *not* in the response as missing.
 *   The merge process (which happens later in the plumbing) looks for these markers as indicators to remove any existing
 *   data in the database (which has provably disappeared).
 * 
 *   The naive approach to data merging (even recursive) would fail to remove such data.
 * 
 *   Returns the result with missing markers in place (which are then used/removed in a later stage).
 */
fulcro.client.impl.om_plumbing.mark_missing = (function fulcro$client$impl$om_plumbing$mark_missing(result,query){
var paramterized_QMARK_ = (function fulcro$client$impl$om_plumbing$mark_missing_$_paramterized_QMARK_(q){
return (cljs.core.list_QMARK_(q)) && (((cljs.core.first(q) instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(q))));
});
var ok_STAR_not_found = (function fulcro$client$impl$om_plumbing$mark_missing_$_ok_STAR_not_found(res,k){
if(cljs.core.contains_QMARK_(res,k)){
return res;
} else {
if(cljs.core.truth_(fulcro.client.impl.om_plumbing.recursive_QMARK_(k))){
return res;
} else {
if(om.util.ident_QMARK_(k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(((cljs.core.map_QMARK_(res))?res:cljs.core.PersistentArrayMap.EMPTY),k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$not_DASH_found], null)], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(((cljs.core.map_QMARK_(res))?res:cljs.core.PersistentArrayMap.EMPTY),k,fulcro.client.impl.om_plumbing.nf);

}
}
}
});
var union__GT_query = (function fulcro$client$impl$om_plumbing$mark_missing_$_union__GT_query(u){
return cljs.core.set(cljs.core.flatten(cljs.core.vals(u)));
});
var union_QMARK_ = (function fulcro$client$impl$om_plumbing$mark_missing_$_union_QMARK_(q){
var expr = (function (){var G__45372 = q;
if(cljs.core.seq_QMARK_(q)){
return cljs.core.first(G__45372);
} else {
return G__45372;
}
})();
return (cljs.core.map_QMARK_(expr)) && (((1) < cljs.core.count(cljs.core.seq(expr))));
});
var step = (function fulcro$client$impl$om_plumbing$mark_missing_$_step(res,q){
var q__$1 = (cljs.core.truth_(paramterized_QMARK_(q))?cljs.core.first(q):q);
var vec__45373 = (cljs.core.truth_(om.util.join_QMARK_(q__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key(q__$1),om.util.join_value(q__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$1,null], null)
);
var query_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45373,(0),null);
var _QMARK_sub_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45373,(1),null);
var result_or_not_found = ok_STAR_not_found(res,query_key);
var result_or_not_found__$1 = ((((q__$1 instanceof cljs.core.Keyword)) && (cljs.core.map_QMARK_(result_or_not_found)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(result_or_not_found,q__$1,fulcro.client.impl.om_plumbing.as_leaf):result_or_not_found);
var sub_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result_or_not_found__$1,query_key);
if(cljs.core.truth_((function (){var and__10400__auto__ = union_QMARK_(_QMARK_sub_query);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.map_QMARK_(sub_result);
} else {
return and__10400__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_or_not_found__$1,query_key,(function (){var G__45378 = sub_result;
var G__45379 = union__GT_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,query_key));
return (fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(G__45378,G__45379) : fulcro.client.impl.om_plumbing.mark_missing.call(null,G__45378,G__45379));
})());
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = union_QMARK_(_QMARK_sub_query);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.coll_QMARK_(sub_result);
} else {
return and__10400__auto__;
}
})())){
var _LT__GT_ = sub_result;
var _LT__GT___$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_LT__GT_,q__$1,vec__45373,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result){
return (function (p1__45337_SHARP_){
var G__45380 = p1__45337_SHARP_;
var G__45381 = union__GT_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,query_key));
return (fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(G__45380,G__45381) : fulcro.client.impl.om_plumbing.mark_missing.call(null,G__45380,G__45381));
});})(_LT__GT_,q__$1,vec__45373,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result))
,_LT__GT_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_or_not_found__$1,query_key,_LT__GT___$1);
} else {
if(cljs.core.truth_(fulcro.client.impl.om_plumbing.is_ui_query_fragment_QMARK_(q__$1))){
return fulcro.client.impl.om_plumbing.as_leaf(res);
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = _QMARK_sub_query;
if(cljs.core.truth_(and__10400__auto__)){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.om_plumbing.nf,sub_result)) && (cljs.core.not(fulcro.client.impl.om_plumbing.recursive_QMARK_(_QMARK_sub_query)));
} else {
return and__10400__auto__;
}
})())){
var _LT__GT_ = sub_result;
var _LT__GT___$1 = ((cljs.core.vector_QMARK_(_LT__GT_))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_LT__GT_,q__$1,vec__45373,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result){
return (function (p1__45338_SHARP_){
return (fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(p1__45338_SHARP_,_QMARK_sub_query) : fulcro.client.impl.om_plumbing.mark_missing.call(null,p1__45338_SHARP_,_QMARK_sub_query));
});})(_LT__GT_,q__$1,vec__45373,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result))
,_LT__GT_):(fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(_LT__GT_,_QMARK_sub_query) : fulcro.client.impl.om_plumbing.mark_missing.call(null,_LT__GT_,_QMARK_sub_query)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_or_not_found__$1,query_key,_LT__GT___$1);
} else {
if(cljs.core.truth_(fulcro.client.impl.om_plumbing.recursive_QMARK_(_QMARK_sub_query))){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,query_key);
if(cljs.core.truth_(temp__5457__auto__)){
var res_ = temp__5457__auto__;
var _LT__GT_ = res_;
var _LT__GT___$1 = ((cljs.core.vector_QMARK_(_LT__GT_))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_LT__GT_,res_,temp__5457__auto__,q__$1,vec__45373,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result){
return (function (p1__45339_SHARP_){
return (fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(p1__45339_SHARP_,_QMARK_sub_query) : fulcro.client.impl.om_plumbing.mark_missing.call(null,p1__45339_SHARP_,_QMARK_sub_query));
});})(_LT__GT_,res_,temp__5457__auto__,q__$1,vec__45373,query_key,_QMARK_sub_query,result_or_not_found,result_or_not_found__$1,sub_result))
,_LT__GT_):(fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.om_plumbing.mark_missing.cljs$core$IFn$_invoke$arity$2(_LT__GT_,_QMARK_sub_query) : fulcro.client.impl.om_plumbing.mark_missing.call(null,_LT__GT_,_QMARK_sub_query)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,query_key,_LT__GT___$1);
} else {
return result_or_not_found__$1;
}
} else {
return result_or_not_found__$1;

}
}
}
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,result,(cljs.core.truth_(fulcro.client.impl.om_plumbing.recursive_QMARK_(query))?fulcro.client.impl.om_plumbing.add_meta_to_recursive_queries(cljs.core.cst$kw$$$$.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query))):fulcro.client.impl.om_plumbing.add_meta_to_recursive_queries(query)));
});

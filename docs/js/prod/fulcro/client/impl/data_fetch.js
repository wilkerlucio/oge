// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.impl.data_fetch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next.impl.parser');
goog.require('om.next');
goog.require('om.next.protocols');
goog.require('om.util');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('fulcro.client.logging');
goog.require('fulcro.client.util');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.impl.om_plumbing');











/**
 * Test if the given bit of state is a data fetch state-tracking marker
 */
fulcro.client.impl.data_fetch.data_state_QMARK_ = (function fulcro$client$impl$data_fetch$data_state_QMARK_(state){
return cljs.core.contains_QMARK_(state,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type);
});
var is_kind_QMARK_ = (function fulcro$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_state_QMARK_(state))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type.cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
/**
 * Test if the given item is a data state marker that is in the ready state
 */
fulcro.client.impl.data_fetch.ready_QMARK_ = (function fulcro$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_(state,cljs.core.cst$kw$ready);
});

/**
 * Test if the given item is a data state marker in the loading state
 */
fulcro.client.impl.data_fetch.loading_QMARK_ = (function fulcro$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_(state,cljs.core.cst$kw$loading);
});

/**
 * Test if the given item is a data state marker in the failed state
 */
fulcro.client.impl.data_fetch.failed_QMARK_ = (function fulcro$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_(state,cljs.core.cst$kw$failed);
});
fulcro.client.impl.data_fetch.is_direct_table_load_QMARK_ = (function fulcro$client$impl$data_fetch$is_direct_table_load_QMARK_(load_marker){
return (cljs.core.not((fulcro.client.impl.data_fetch.data_field.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_field.cljs$core$IFn$_invoke$arity$1(load_marker) : fulcro.client.impl.data_fetch.data_field.call(null,load_marker)))) && (om.util.ident_QMARK_((fulcro.client.impl.data_fetch.data_query_key.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_query_key.cljs$core$IFn$_invoke$arity$1(load_marker) : fulcro.client.impl.data_fetch.data_query_key.call(null,load_marker))));
});
fulcro.client.impl.data_fetch.place_load_marker = (function fulcro$client$impl$data_fetch$place_load_marker(state_map,marker){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,(fulcro.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1(marker) : fulcro.client.impl.data_fetch.data_path.call(null,marker)),(function (current_val){
if(cljs.core.truth_(fulcro.client.impl.data_fetch.is_direct_table_load_QMARK_(marker))){
if(cljs.core.map_QMARK_(current_val)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_val,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,marker);
} else {
return null;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,marker], null);
}
}));
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
fulcro.client.impl.data_fetch.place_load_markers = (function fulcro$client$impl$data_fetch$place_load_markers(state_atom,items_to_load){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (state_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,item){
var i = (fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(item) : fulcro.client.impl.data_fetch.set_loading_BANG_.call(null,item));
var G__45449 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),(fulcro.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1(i) : fulcro.client.impl.data_fetch.data_uuid.call(null,i)));
if(cljs.core.truth_((fulcro.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1(i) : fulcro.client.impl.data_fetch.data_marker_QMARK_.call(null,i)))){
return fulcro.client.impl.data_fetch.place_load_marker(G__45449,i);
} else {
return G__45449;
}
}),state_map,items_to_load);
}));
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and return maps with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
fulcro.client.impl.data_fetch.mark_parallel_loading = (function fulcro$client$impl$data_fetch$mark_parallel_loading(remote_name,reconciler){
var state = om.next.app_state(reconciler);
var queued_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load);
var is_eligible_QMARK_ = ((function (state,queued_items){
return (function (item){
var and__10400__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remote_name,(fulcro.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1(item) : fulcro.client.impl.data_fetch.data_remote.call(null,item)));
} else {
return and__10400__auto__;
}
});})(state,queued_items))
;
var other_items_loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress)));
var items_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_eligible_QMARK_,queued_items);
var remaining_items = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,is_eligible_QMARK_),queued_items);
var loading_QMARK_ = (cljs.core.seq(items_to_load)) || (other_items_loading_QMARK_);
if(cljs.core.empty_QMARK_(items_to_load)){
return null;
} else {
fulcro.client.impl.data_fetch.place_load_markers(state,items_to_load);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load,remaining_items], 0));

var iter__11294__auto__ = ((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function fulcro$client$impl$data_fetch$mark_parallel_loading_$_iter__45459(s__45460){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function (){
var s__45460__$1 = s__45460;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__45460__$1);
if(temp__5459__auto__){
var s__45460__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45460__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__45460__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__45462 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__45461 = (0);
while(true){
if((i__45461 < size__11293__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__45461);
cljs.core.chunk_append(b__45462,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(function (){var G__45463 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__45463) : fulcro.client.impl.data_fetch.full_query.call(null,G__45463));
})(),cljs.core.cst$kw$on_DASH_load,(fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__45486 = (i__45461 + (1));
i__45461 = G__45486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45462),fulcro$client$impl$data_fetch$mark_parallel_loading_$_iter__45459(cljs.core.chunk_rest(s__45460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45462),null);
}
} else {
var item = cljs.core.first(s__45460__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(function (){var G__45466 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__45466) : fulcro.client.impl.data_fetch.full_query.call(null,G__45466));
})(),cljs.core.cst$kw$on_DASH_load,(fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),fulcro$client$impl$data_fetch$mark_parallel_loading_$_iter__45459(cljs.core.rest(s__45460__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_))
,null,null));
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_))
;
return iter__11294__auto__(items_to_load);
}
});
/**
 * Returns a lazy sequence of the elements of coll with dupes removed.
 * An element is a duplicate IFF (keys-fn element) has key collision with any prior element
 * to come before it. E.g. (dedupe-by identity [[:a] [:b] [:a] [:a :c]]) => [[:a] [:b]]
 * Returns a stateful transducer when no collection is provided.
 */
fulcro.client.impl.data_fetch.dedupe_by = (function fulcro$client$impl$data_fetch$dedupe_by(var_args){
var G__45493 = arguments.length;
switch (G__45493) {
case 1:
return fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__45495 = null;
var G__45495__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__45495__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__45495__2 = (function (result,input){
var input_keys = cljs.core.set((keys_fn.cljs$core$IFn$_invoke$arity$1 ? keys_fn.cljs$core$IFn$_invoke$arity$1(input) : keys_fn.call(null,input)));
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(keys_seen),input_keys))){
cljs.core._vreset_BANG_(keys_seen,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(keys_seen),input_keys));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return result;
}
});
G__45495 = function(result,input){
switch(arguments.length){
case 0:
return G__45495__0.call(this);
case 1:
return G__45495__1.call(this,result);
case 2:
return G__45495__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45495.cljs$core$IFn$_invoke$arity$0 = G__45495__0;
G__45495.cljs$core$IFn$_invoke$arity$1 = G__45495__1;
G__45495.cljs$core$IFn$_invoke$arity$2 = G__45495__2;
return G__45495;
})()
;})(keys_seen))
});
});

fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (keys_fn,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1(keys_fn),coll);
});

fulcro.client.impl.data_fetch.dedupe_by.cljs$lang$maxFixedArity = 2;

fulcro.client.impl.data_fetch.join_key_or_nil = (function fulcro$client$impl$data_fetch$join_key_or_nil(expr){
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var join_key_or_ident = om.util.join_key(expr);
if(om.util.ident_QMARK_(join_key_or_ident)){
return cljs.core.first(join_key_or_ident);
} else {
return join_key_or_ident;
}
} else {
return null;
}
});
/**
 * This function is used to split accidental colliding queries into separate network
 *   requests. The most general description of this issue is
 *   from two unrelated `load` calls when black-box composing functions. The two
 *   separate queries: One issues `[{:entitlements [:foo]}]`, and the other
 *   asks for `[{:entitlements [:bar]}]`. Fulcro merges these into a single query
 *   [{:entitlements [:foo]} {:entitlements [:bar]}]. However, the response to a query
 *   is a map, and such a query would result in the backend parser being called twice (once per key in the subquery)
 *   but one would stomp on the other. Thus, this function ensures such accidental collisions are
 *   not combined into a single network request.
 */
fulcro.client.impl.data_fetch.split_items_ready_to_load = (function fulcro$client$impl$data_fetch$split_items_ready_to_load(items_ready_to_load){
var items_to_load_now = cljs.core.vec(fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.join_key_or_nil,(fulcro.client.impl.data_fetch.data_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_query.cljs$core$IFn$_invoke$arity$1(item) : fulcro.client.impl.data_fetch.data_query.call(null,item)));
}),items_ready_to_load));
var is_loading_now_QMARK_ = cljs.core.set(items_to_load_now);
var items_to_defer = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(is_loading_now_QMARK_,items_ready_to_load));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_to_load_now,items_to_defer], null);
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and returns a map with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
fulcro.client.impl.data_fetch.mark_loading = (function fulcro$client$impl$data_fetch$mark_loading(remote,reconciler){
var state = om.next.app_state(reconciler);
var is_eligible_QMARK_ = ((function (state){
return (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remote,(fulcro.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1(item) : fulcro.client.impl.data_fetch.data_remote.call(null,item)));
});})(state))
;
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load);
var items_ready_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_eligible_QMARK_,all_items);
var items_for_other_remotes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,is_eligible_QMARK_),all_items);
var other_items_loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress)));
var vec__45501 = fulcro.client.impl.data_fetch.split_items_ready_to_load(items_ready_to_load);
var items_to_load_now = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45501,(0),null);
var items_to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45501,(1),null);
var remaining_items = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(items_for_other_remotes,items_to_defer);
var loading_QMARK_ = (cljs.core.seq(items_to_load_now)) || (other_items_loading_QMARK_);
if(cljs.core.empty_QMARK_(items_to_load_now)){
return null;
} else {
fulcro.client.impl.data_fetch.place_load_markers(state,items_to_load_now);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load,remaining_items], 0));

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(items_to_load_now) : fulcro.client.impl.data_fetch.full_query.call(null,items_to_load_now)),cljs.core.cst$kw$on_DASH_load,(fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,items_to_load_now], null);
}
});
fulcro.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ready,null,cljs.core.cst$kw$loading,null,cljs.core.cst$kw$failed,null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
fulcro.client.impl.data_fetch.make_data_state = (function fulcro$client$impl$data_fetch$make_data_state(var_args){
var G__45519 = arguments.length;
switch (G__45519) {
case 1:
return fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2(type,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_params,params], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["INVALID DATA STATE TYPE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

fulcro.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;

/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
fulcro.client.impl.data_fetch.elide_ast_nodes = (function fulcro$client$impl$data_fetch$elide_ast_nodes(p__45525,elision_set){
var map__45527 = p__45525;
var map__45527__$1 = ((((!((map__45527 == null)))?((((map__45527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45527):map__45527);
var ast = map__45527__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45527__$1,cljs.core.cst$kw$key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45527__$1,cljs.core.cst$kw$union_DASH_key);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45527__$1,cljs.core.cst$kw$children);
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count(children) <= (2)))){
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Om unions are not designed to be used with fewer than two children. Check your calls to Fulcro\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([union_key], 0))], 0));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,((function (union_elision_QMARK_,map__45527,map__45527__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__45527,map__45527__$1,ast,key,union_key,children){
return (function (p1__45524_SHARP_){
return (fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__45524_SHARP_,elision_set) : fulcro.client.impl.data_fetch.elide_ast_nodes.call(null,p1__45524_SHARP_,elision_set));
});})(union_elision_QMARK_,map__45527,map__45527__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__45527,map__45527__$1,ast,key,union_key,children))
);
}
});
/**
 * Inject parameters into elements of the top-level query.
 * 
 *   `params` is a map from keyword (on the query in the AST) to parameter maps. So, given the AST for this query:
 * 
 *   ```
 *   [:a :b :c]
 *   ```
 * 
 *   and a `params` of `{:a {:x 1} :c {:y 2}}` you'll get an AST representing:
 * 
 *   ```
 *   [(:a {:x 1}) :b (:c {:y 2})]
 *   ```
 *   
 */
fulcro.client.impl.data_fetch.inject_query_params = (function fulcro$client$impl$data_fetch$inject_query_params(ast,params){
var top_level_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast)));
var param_keys = cljs.core.set(cljs.core.keys(params));
var unknown_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(param_keys,top_level_keys);
if(!(cljs.core.empty_QMARK_(unknown_keys))){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Error: You attempted to add parameters for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unknown_keys], 0)))," to top-level key(s) of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.next.ast__GT_query(ast)], 0)))].join('')], 0));
} else {
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children], null),((function (top_level_keys,param_keys,unknown_keys){
return (function (p1__45534_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (top_level_keys,param_keys,unknown_keys){
return (function (c){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__5457__auto__)){
var new_params = temp__5457__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(c,cljs.core.cst$kw$params,cljs.core.merge,new_params);
} else {
return c;
}
});})(top_level_keys,param_keys,unknown_keys))
,p1__45534_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
fulcro.client.impl.data_fetch.ready_state = (function fulcro$client$impl$data_fetch$ready_state(p__45538){
var map__45539 = p__45538;
var map__45539__$1 = ((((!((map__45539 == null)))?((((map__45539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45539):map__45539);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$target);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$query);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45539__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45539__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$parallel);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45539__$1,cljs.core.cst$kw$marker,true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$params);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$field);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$env);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$post_DASH_mutation);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45539__$1,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$ident);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
if(cljs.core.truth_((function (){var or__10412__auto__ = field;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error(["Assert failed: ","You must supply a query or a field/ident pair","\n","(or field query)"].join('')));
}

if(cljs.core.truth_((function (){var or__10412__auto__ = cljs.core.not(field);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var and__10400__auto__ = field;
if(cljs.core.truth_(and__10400__auto__)){
return om.util.ident_QMARK_(ident);
} else {
return and__10400__auto__;
}
}
})())){
} else {
throw (new Error(["Assert failed: ","Field requires ident","\n","(or (not field) (and field (util/ident? ident)))"].join('')));
}

var old_ast = om.next.query__GT_ast(query);
var ast = (function (){var G__45546 = old_ast;
var G__45546__$1 = (cljs.core.truth_(cljs.core.not_empty(without))?fulcro.client.impl.data_fetch.elide_ast_nodes(G__45546,without):G__45546);
if(cljs.core.truth_(params)){
return fulcro.client.impl.data_fetch.inject_query_params(G__45546__$1,params);
} else {
return G__45546__$1;
}
})();
var query_field = cljs.core.first(query);
var key = (cljs.core.truth_(om.util.join_QMARK_(query_field))?om.util.join_key(query_field):query_field);
var query_SINGLEQUOTE_ = om.next.ast__GT_query(ast);
if((cljs.core.not(field)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,key))){
} else {
throw (new Error(["Assert failed: ","Component fetch query does not match supplied field.","\n","(or (not field) (= field key))"].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_remote,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_ident,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''),parallel,target,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,env),remote,query_SINGLEQUOTE_,refresh,ident,cljs.core.cst$kw$ready,post_mutation_params,fallback,marker,post_mutation,field]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load` and `load-field` functions in `fulcro.client.data-fetch` for the public API.
 */
fulcro.client.impl.data_fetch.mark_ready = (function fulcro$client$impl$data_fetch$mark_ready(p__45561){
var map__45562 = p__45561;
var map__45562__$1 = ((((!((map__45562 == null)))?((((map__45562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45562):map__45562);
var config = map__45562__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45562__$1,cljs.core.cst$kw$env);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$state);
var marker_QMARK_ = !((false === cljs.core.cst$kw$marker.cljs$core$IFn$_invoke$arity$1(config)));
var load_request = fulcro.client.impl.data_fetch.ready_state(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$env,env], null),config], 0)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,marker_QMARK_,load_request,map__45562,map__45562__$1,config,env){
return (function (s){
var G__45564 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),load_request);
if(marker_QMARK_){
return fulcro.client.impl.data_fetch.place_load_marker(G__45564,load_request);
} else {
return G__45564;
}
});})(state,marker_QMARK_,load_request,map__45562,map__45562__$1,config,env))
);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
fulcro.client.impl.data_fetch.data_target = (function fulcro$client$impl$data_fetch$data_target(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
fulcro.client.impl.data_fetch.data_ident = (function fulcro$client$impl$data_fetch$data_ident(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_ident.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the query that will be sent to the server as a result of the given data state marker
 */
fulcro.client.impl.data_fetch.data_query = (function fulcro$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_ident(state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.client.impl.data_fetch.data_ident(state),cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_query.cljs$core$IFn$_invoke$arity$1(state)])], null);
} else {
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_query.cljs$core$IFn$_invoke$arity$1(state);
}
});
/**
 * Get the target field (if any) from the data state marker
 */
fulcro.client.impl.data_fetch.data_field = (function fulcro$client$impl$data_fetch$data_field(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the UUID of the data fetch
 */
fulcro.client.impl.data_fetch.data_uuid = (function fulcro$client$impl$data_fetch$data_uuid(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Test if the user desires a copy of the state marker to appear in the app state at the data path of the target data.
 */
fulcro.client.impl.data_fetch.data_marker_QMARK_ = (function fulcro$client$impl$data_fetch$data_marker_QMARK_(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the list of query keywords that should be refreshed (re-rendered) when this load completes.
 */
fulcro.client.impl.data_fetch.data_refresh = (function fulcro$client$impl$data_fetch$data_refresh(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the remote that this marker is meant to talk to
 */
fulcro.client.impl.data_fetch.data_remote = (function fulcro$client$impl$data_fetch$data_remote(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_remote.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the 'primary' query key of the data fetch. This is defined as the first keyword of the overall query (which might
 *   be a simple prop or join key for example)
 */
fulcro.client.impl.data_fetch.data_query_key = (function fulcro$client$impl$data_fetch$data_query_key(state){
var ast = om.next.query__GT_ast(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_query.cljs$core$IFn$_invoke$arity$1(state));
var node = cljs.core.first(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(node);
});
/**
 * Get the app-state database path of the target of the load that the given data state marker is trying to load.
 */
fulcro.client.impl.data_fetch.data_path = (function fulcro$client$impl$data_fetch$data_path(state){
var target = fulcro.client.impl.data_fetch.data_target(state);
if(cljs.core.truth_((function (){var and__10400__auto__ = (fulcro.client.impl.data_fetch.data_field(state) == null);
if(and__10400__auto__){
var and__10400__auto____$1 = cljs.core.vector_QMARK_(target);
if(and__10400__auto____$1){
return cljs.core.not_empty(target);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return target;
} else {
if((cljs.core.vector_QMARK_(fulcro.client.impl.data_fetch.data_ident(state))) && ((fulcro.client.impl.data_fetch.data_field(state) instanceof cljs.core.Keyword))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_ident(state),fulcro.client.impl.data_fetch.data_field(state));
} else {
if(om.util.ident_QMARK_(fulcro.client.impl.data_fetch.data_query_key(state))){
return fulcro.client.impl.data_fetch.data_query_key(state);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.data_query_key(state)], null);

}
}
}
});
/**
 * Get the parameters that the user wants to add to the first join/keyword of the data fetch query.
 */
fulcro.client.impl.data_fetch.data_params = (function fulcro$client$impl$data_fetch$data_params(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_params.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the keywords that should be (recursively) removed from the query that will be sent to the server.
 */
fulcro.client.impl.data_fetch.data_exclusions = (function fulcro$client$impl$data_fetch$data_exclusions(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_without.cljs$core$IFn$_invoke$arity$1(state);
});
var set_type = (function fulcro$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_params,params], null)], 0));
});
/**
 * Returns a state (based on the input state) that is in the 'ready' to load state.
 */
fulcro.client.impl.data_fetch.set_ready_BANG_ = (function fulcro$client$impl$data_fetch$set_ready_BANG_(var_args){
var G__45596 = arguments.length;
switch (G__45596) {
case 1:
return fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type(state,cljs.core.cst$kw$ready,params);
});

fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the loading state (and ensures that it has a UUID)
 */
fulcro.client.impl.data_fetch.set_loading_BANG_ = (function fulcro$client$impl$data_fetch$set_loading_BANG_(var_args){
var G__45598 = arguments.length;
switch (G__45598) {
case 1:
return fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type(state,cljs.core.cst$kw$loading,params);
return cljs.core.with_meta(rv,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,rv], null));
});

fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the error state
 */
fulcro.client.impl.data_fetch.set_failed_BANG_ = (function fulcro$client$impl$data_fetch$set_failed_BANG_(var_args){
var G__45600 = arguments.length;
switch (G__45600) {
case 1:
return fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type(state,cljs.core.cst$kw$failed,params);
});

fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Composes together the queries of a sequence of data states into a single query.
 */
fulcro.client.impl.data_fetch.full_query = (function fulcro$client$impl$data_fetch$full_query(items){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (item){
return fulcro.client.impl.data_fetch.data_query(item);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0)));
});
fulcro.client.impl.data_fetch.set_global_loading = (function fulcro$client$impl$data_fetch$set_global_loading(reconciler){

var state_atom = om.next.app_state(reconciler);
var loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_atom),cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_);
});
/**
 * For items that are manually targeted, move them in app state from their result location to their target location.
 */
fulcro.client.impl.data_fetch.relocate_targeted_results = (function fulcro$client$impl$data_fetch$relocate_targeted_results(state_atom,items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (state_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,item){
var default_target = fulcro.client.impl.data_fetch.data_query_key(item);
var explicit_target = (function (){var or__10412__auto__ = fulcro.client.impl.data_fetch.data_target(item);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK_ = (function (){var and__10400__auto__ = (fulcro.client.impl.data_fetch.data_field(item) == null);
if(and__10400__auto__){
var and__10400__auto____$1 = (fulcro.client.impl.data_fetch.data_query_key(item) instanceof cljs.core.Keyword);
if(and__10400__auto____$1){
return cljs.core.not_empty(explicit_target);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK_)){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,default_target);
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,fulcro.client.impl.data_fetch.data_query_key(item)),explicit_target,value);
} else {
return state;
}
}),state_map,items);
}));
});
/**
 * Returns app-state without the load marker for the given item.
 */
fulcro.client.impl.data_fetch.remove_marker = (function fulcro$client$impl$data_fetch$remove_marker(app_state,item){
var path = fulcro.client.impl.data_fetch.data_path(item);
var data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,path);
if((cljs.core.map_QMARK_(data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,null], null), null),cljs.core.set(cljs.core.keys(data))))){
return cljs.core.assoc_in(app_state,path,null);
} else {
if((cljs.core.map_QMARK_(data)) && (cljs.core.contains_QMARK_(data,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,path,cljs.core.dissoc,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state);
} else {
return cljs.core.assoc_in(app_state,path,null);

}
}
});
/**
 * Build a callback env for post mutations and fallbacks
 */
fulcro.client.impl.data_fetch.callback_env = (function fulcro$client$impl$data_fetch$callback_env(reconciler,load_request,original_env){
var state = om.next.app_state(reconciler);
var map__45624 = load_request;
var map__45624__$1 = ((((!((map__45624 == null)))?((((map__45624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45624):map__45624);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_remote);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_query);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_ident);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45624__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([original_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,state,cljs.core.cst$kw$load_DASH_request,(function (){var G__45629 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$remote,remote,cljs.core.cst$kw$marker,marker,cljs.core.cst$kw$server_DASH_query,query,cljs.core.cst$kw$parallel,cljs.core.boolean$(parallel)], null);
var G__45629__$1 = (cljs.core.truth_(post_mutation)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45629,cljs.core.cst$kw$post_DASH_mutation,post_mutation):G__45629);
var G__45629__$2 = (cljs.core.truth_(post_mutation_params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45629__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params,post_mutation_params):G__45629__$1);
var G__45629__$3 = (cljs.core.truth_(refresh)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45629__$2,cljs.core.cst$kw$refresh,refresh):G__45629__$2);
if(cljs.core.truth_(fallback)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45629__$3,cljs.core.cst$kw$fallback,fallback);
} else {
return G__45629__$3;
}
})()], null)], 0));
});
/**
 * Generates a callback that processes all of the post-processing steps once a remote load has completed. This includes:
 * 
 *   - Marking the items that were queries for but not returned as 'missing' (see documentation on mark and sweep of db)
 *   - Refreshing elements of the UI that were included in the data fetch :refresh option
 *   - Removing loading markers related to the executed loads that were not overwritten by incoming data
 *   - Merging the incoming data into the normalized database
 *   - Running post-mutations for any fetches that completed
 *   - Updating the global loading marker
 *   - Triggering re-render for all data item refresh lists
 *   
 */
fulcro.client.impl.data_fetch.loaded_callback = (function fulcro$client$impl$data_fetch$loaded_callback(reconciler){
return (function (response,items){
var query = fulcro.client.impl.data_fetch.full_query(items);
var loading_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_loading_DASH_data,null], null), null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch.data_refresh,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0)));
var to_refresh = cljs.core.vec(refresh_set);
var marked_response = fulcro.client.impl.om_plumbing.mark_missing(response,query);
var app_state = om.next.app_state(reconciler);
var ran_mutations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var remove_markers = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (){
var seq__45652 = cljs.core.seq(loading_items);
var chunk__45653 = null;
var count__45654 = (0);
var i__45655 = (0);
while(true){
if((i__45655 < count__45654)){
var item = chunk__45653.cljs$core$IIndexed$_nth$arity$2(null,i__45655);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__45652,chunk__45653,count__45654,i__45655,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__45656 = s;
var G__45656__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45656,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))){
return fulcro.client.impl.data_fetch.remove_marker(G__45656__$1,item);
} else {
return G__45656__$1;
}
});})(seq__45652,chunk__45653,count__45654,i__45655,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__45692 = seq__45652;
var G__45693 = chunk__45653;
var G__45694 = count__45654;
var G__45695 = (i__45655 + (1));
seq__45652 = G__45692;
chunk__45653 = G__45693;
count__45654 = G__45694;
i__45655 = G__45695;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__45652);
if(temp__5459__auto__){
var seq__45652__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45652__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__45652__$1);
var G__45705 = cljs.core.chunk_rest(seq__45652__$1);
var G__45706 = c__11343__auto__;
var G__45707 = cljs.core.count(c__11343__auto__);
var G__45708 = (0);
seq__45652 = G__45705;
chunk__45653 = G__45706;
count__45654 = G__45707;
i__45655 = G__45708;
continue;
} else {
var item = cljs.core.first(seq__45652__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__45652,chunk__45653,count__45654,i__45655,item,seq__45652__$1,temp__5459__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__45660 = s;
var G__45660__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45660,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))){
return fulcro.client.impl.data_fetch.remove_marker(G__45660__$1,item);
} else {
return G__45660__$1;
}
});})(seq__45652,chunk__45653,count__45654,i__45655,item,seq__45652__$1,temp__5459__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__45722 = cljs.core.next(seq__45652__$1);
var G__45723 = null;
var G__45724 = (0);
var G__45725 = (0);
seq__45652 = G__45722;
chunk__45653 = G__45723;
count__45654 = G__45724;
i__45655 = G__45725;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
;
var run_post_mutations = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers){
return (function (){
var seq__45663 = cljs.core.seq(loading_items);
var chunk__45664 = null;
var count__45665 = (0);
var i__45666 = (0);
while(true){
if((i__45666 < count__45665)){
var item = chunk__45664.cljs$core$IIndexed$_nth$arity$2(null,i__45666);
var temp__5459__auto___45739 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5459__auto___45739)){
var mutation_symbol_45742 = temp__5459__auto___45739;
cljs.core.reset_BANG_(ran_mutations,true);

var params_45745 = (function (){var or__10412__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_45746 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var G__45669_45747 = (function (){var G__45670 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_45746);
var G__45671 = mutation_symbol_45742;
var G__45672 = params_45745;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__45670,G__45671,G__45672) : fulcro.client.mutations.mutate.call(null,G__45670,G__45671,G__45672));
})();
var G__45669_45748__$1 = (((G__45669_45747 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__45669_45747));
if((G__45669_45748__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__45669_45748__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__45753 = seq__45663;
var G__45754 = chunk__45664;
var G__45755 = count__45665;
var G__45756 = (i__45666 + (1));
seq__45663 = G__45753;
chunk__45664 = G__45754;
count__45665 = G__45755;
i__45666 = G__45756;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__45663);
if(temp__5459__auto__){
var seq__45663__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45663__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__45663__$1);
var G__45759 = cljs.core.chunk_rest(seq__45663__$1);
var G__45760 = c__11343__auto__;
var G__45761 = cljs.core.count(c__11343__auto__);
var G__45762 = (0);
seq__45663 = G__45759;
chunk__45664 = G__45760;
count__45665 = G__45761;
i__45666 = G__45762;
continue;
} else {
var item = cljs.core.first(seq__45663__$1);
var temp__5459__auto___45766__$1 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5459__auto___45766__$1)){
var mutation_symbol_45767 = temp__5459__auto___45766__$1;
cljs.core.reset_BANG_(ran_mutations,true);

var params_45770 = (function (){var or__10412__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_45771 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var G__45677_45777 = (function (){var G__45678 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_45771);
var G__45679 = mutation_symbol_45767;
var G__45680 = params_45770;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__45678,G__45679,G__45680) : fulcro.client.mutations.mutate.call(null,G__45678,G__45679,G__45680));
})();
var G__45677_45778__$1 = (((G__45677_45777 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__45677_45777));
if((G__45677_45778__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__45677_45778__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__45787 = cljs.core.next(seq__45663__$1);
var G__45788 = null;
var G__45789 = (0);
var G__45790 = (0);
seq__45663 = G__45787;
chunk__45664 = G__45788;
count__45665 = G__45789;
i__45666 = G__45790;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers))
;
remove_markers();

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,marked_response,query);

fulcro.client.impl.data_fetch.relocate_targeted_results(app_state,loading_items);

run_post_mutations();

fulcro.client.impl.data_fetch.set_global_loading(reconciler);

if(cljs.core.contains_QMARK_(refresh_set,cljs.core.cst$kw$fulcro_SLASH_force_DASH_root)){
return om.next.force_root_render_BANG_(reconciler);
} else {
return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$2(reconciler,to_refresh);
}
});
});
/**
 * Generates a callback that is used whenever a hard server error occurs (status code 400+ or network error).
 * 
 *   The generated callback:
 * 
 *   - Replaces affected loading markers with error markers (if :marker is true on the load item)
 *   - Runs fallbacks associated with the loads
 *   - Sets the global error marker (:fulcro/server-error)
 *   - Refreshes UI (from root if there were fallbacks)
 *   
 */
fulcro.client.impl.data_fetch.error_callback = (function fulcro$client$impl$data_fetch$error_callback(reconciler){
return (function (error,items){
var loading_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = om.next.app_state(reconciler);
var refresh_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_loading_DASH_data,null], null), null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch.data_refresh,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0)));
var to_refresh = cljs.core.vec(refresh_set);
var ran_fallbacks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var mark_errors = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc,cljs.core.cst$kw$fulcro_SLASH_server_DASH_error,error);

var seq__45794 = cljs.core.seq(loading_items);
var chunk__45795 = null;
var count__45796 = (0);
var i__45797 = (0);
while(true){
if((i__45797 < count__45796)){
var item = chunk__45795.cljs$core$IIndexed$_nth$arity$2(null,i__45797);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__45794,chunk__45795,count__45796,i__45797,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__45800 = s;
var G__45800__$1 = (cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__45800,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__45800);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45800__$1,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__45794,chunk__45795,count__45796,i__45797,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__45847 = seq__45794;
var G__45848 = chunk__45795;
var G__45849 = count__45796;
var G__45850 = (i__45797 + (1));
seq__45794 = G__45847;
chunk__45795 = G__45848;
count__45796 = G__45849;
i__45797 = G__45850;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__45794);
if(temp__5459__auto__){
var seq__45794__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45794__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__45794__$1);
var G__45852 = cljs.core.chunk_rest(seq__45794__$1);
var G__45853 = c__11343__auto__;
var G__45854 = cljs.core.count(c__11343__auto__);
var G__45855 = (0);
seq__45794 = G__45852;
chunk__45795 = G__45853;
count__45796 = G__45854;
i__45797 = G__45855;
continue;
} else {
var item = cljs.core.first(seq__45794__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__45794,chunk__45795,count__45796,i__45797,item,seq__45794__$1,temp__5459__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__45803 = s;
var G__45803__$1 = (cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__45803,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__45803);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45803__$1,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__45794,chunk__45795,count__45796,i__45797,item,seq__45794__$1,temp__5459__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__45870 = cljs.core.next(seq__45794__$1);
var G__45871 = null;
var G__45872 = (0);
var G__45873 = (0);
seq__45794 = G__45870;
chunk__45795 = G__45871;
count__45796 = G__45872;
i__45797 = G__45873;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
;
var run_fallbacks = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors){
return (function (){
var seq__45804 = cljs.core.seq(loading_items);
var chunk__45805 = null;
var count__45806 = (0);
var i__45807 = (0);
while(true){
if((i__45807 < count__45806)){
var item = chunk__45805.cljs$core$IIndexed$_nth$arity$2(null,i__45807);
var temp__5459__auto___45875 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5459__auto___45875)){
var fallback_symbol_45877 = temp__5459__auto___45875;
var original_env_45878 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var env_45879 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_45878);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__45814_45883 = (function (){var G__45816 = env_45879;
var G__45817 = fallback_symbol_45877;
var G__45818 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__45816,G__45817,G__45818) : fulcro.client.mutations.mutate.call(null,G__45816,G__45817,G__45818));
})();
var G__45814_45884__$1 = (((G__45814_45883 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__45814_45883));
if((G__45814_45884__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__45814_45884__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__45889 = seq__45804;
var G__45890 = chunk__45805;
var G__45891 = count__45806;
var G__45892 = (i__45807 + (1));
seq__45804 = G__45889;
chunk__45805 = G__45890;
count__45806 = G__45891;
i__45807 = G__45892;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__45804);
if(temp__5459__auto__){
var seq__45804__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45804__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__45804__$1);
var G__45897 = cljs.core.chunk_rest(seq__45804__$1);
var G__45898 = c__11343__auto__;
var G__45899 = cljs.core.count(c__11343__auto__);
var G__45900 = (0);
seq__45804 = G__45897;
chunk__45805 = G__45898;
count__45806 = G__45899;
i__45807 = G__45900;
continue;
} else {
var item = cljs.core.first(seq__45804__$1);
var temp__5459__auto___45904__$1 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5459__auto___45904__$1)){
var fallback_symbol_45905 = temp__5459__auto___45904__$1;
var original_env_45907 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var env_45908 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_45907);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__45826_45911 = (function (){var G__45827 = env_45908;
var G__45828 = fallback_symbol_45905;
var G__45829 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__45827,G__45828,G__45829) : fulcro.client.mutations.mutate.call(null,G__45827,G__45828,G__45829));
})();
var G__45826_45912__$1 = (((G__45826_45911 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__45826_45911));
if((G__45826_45912__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__45826_45912__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__45923 = cljs.core.next(seq__45804__$1);
var G__45924 = null;
var G__45925 = (0);
var G__45926 = (0);
seq__45804 = G__45923;
chunk__45805 = G__45924;
count__45806 = G__45925;
i__45807 = G__45926;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors))
;
mark_errors();

run_fallbacks();

fulcro.client.impl.data_fetch.set_global_loading(reconciler);

return om.next.force_root_render_BANG_(reconciler);
});
});

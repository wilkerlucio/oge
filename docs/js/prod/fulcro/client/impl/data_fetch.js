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
var G__45442 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),(fulcro.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1(i) : fulcro.client.impl.data_fetch.data_uuid.call(null,i)));
if(cljs.core.truth_((fulcro.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1(i) : fulcro.client.impl.data_fetch.data_marker_QMARK_.call(null,i)))){
return fulcro.client.impl.data_fetch.place_load_marker(G__45442,i);
} else {
return G__45442;
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
return (function fulcro$client$impl$data_fetch$mark_parallel_loading_$_iter__45448(s__45449){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function (){
var s__45449__$1 = s__45449;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__45449__$1);
if(temp__5459__auto__){
var s__45449__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45449__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__45449__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__45451 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__45450 = (0);
while(true){
if((i__45450 < size__11293__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__45450);
cljs.core.chunk_append(b__45451,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(function (){var G__45452 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__45452) : fulcro.client.impl.data_fetch.full_query.call(null,G__45452));
})(),cljs.core.cst$kw$on_DASH_load,(fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__45469 = (i__45450 + (1));
i__45450 = G__45469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45451),fulcro$client$impl$data_fetch$mark_parallel_loading_$_iter__45448(cljs.core.chunk_rest(s__45449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45451),null);
}
} else {
var item = cljs.core.first(s__45449__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(function (){var G__45455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__45455) : fulcro.client.impl.data_fetch.full_query.call(null,G__45455));
})(),cljs.core.cst$kw$on_DASH_load,(fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),fulcro$client$impl$data_fetch$mark_parallel_loading_$_iter__45448(cljs.core.rest(s__45449__$2)));
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
var G__45473 = arguments.length;
switch (G__45473) {
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
var G__45479 = null;
var G__45479__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__45479__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__45479__2 = (function (result,input){
var input_keys = cljs.core.set((keys_fn.cljs$core$IFn$_invoke$arity$1 ? keys_fn.cljs$core$IFn$_invoke$arity$1(input) : keys_fn.call(null,input)));
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(keys_seen),input_keys))){
cljs.core._vreset_BANG_(keys_seen,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(keys_seen),input_keys));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return result;
}
});
G__45479 = function(result,input){
switch(arguments.length){
case 0:
return G__45479__0.call(this);
case 1:
return G__45479__1.call(this,result);
case 2:
return G__45479__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45479.cljs$core$IFn$_invoke$arity$0 = G__45479__0;
G__45479.cljs$core$IFn$_invoke$arity$1 = G__45479__1;
G__45479.cljs$core$IFn$_invoke$arity$2 = G__45479__2;
return G__45479;
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
var vec__45497 = fulcro.client.impl.data_fetch.split_items_ready_to_load(items_ready_to_load);
var items_to_load_now = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45497,(0),null);
var items_to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45497,(1),null);
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
var G__45505 = arguments.length;
switch (G__45505) {
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
fulcro.client.impl.data_fetch.elide_ast_nodes = (function fulcro$client$impl$data_fetch$elide_ast_nodes(p__45513,elision_set){
var map__45514 = p__45513;
var map__45514__$1 = ((((!((map__45514 == null)))?((((map__45514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45514):map__45514);
var ast = map__45514__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514__$1,cljs.core.cst$kw$key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514__$1,cljs.core.cst$kw$union_DASH_key);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514__$1,cljs.core.cst$kw$children);
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count(children) <= (2)))){
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Om unions are not designed to be used with fewer than two children. Check your calls to Fulcro\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([union_key], 0))], 0));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,((function (union_elision_QMARK_,map__45514,map__45514__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__45514,map__45514__$1,ast,key,union_key,children){
return (function (p1__45512_SHARP_){
return (fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__45512_SHARP_,elision_set) : fulcro.client.impl.data_fetch.elide_ast_nodes.call(null,p1__45512_SHARP_,elision_set));
});})(union_elision_QMARK_,map__45514,map__45514__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__45514,map__45514__$1,ast,key,union_key,children))
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
return (function (p1__45525_SHARP_){
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
,p1__45525_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
fulcro.client.impl.data_fetch.ready_state = (function fulcro$client$impl$data_fetch$ready_state(p__45533){
var map__45534 = p__45533;
var map__45534__$1 = ((((!((map__45534 == null)))?((((map__45534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45534):map__45534);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$target);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$query);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45534__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45534__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$parallel);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45534__$1,cljs.core.cst$kw$marker,true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$params);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$field);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$env);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$post_DASH_mutation);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45534__$1,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$ident);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45534__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
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
var ast = (function (){var G__45542 = old_ast;
var G__45542__$1 = (cljs.core.truth_(cljs.core.not_empty(without))?fulcro.client.impl.data_fetch.elide_ast_nodes(G__45542,without):G__45542);
if(cljs.core.truth_(params)){
return fulcro.client.impl.data_fetch.inject_query_params(G__45542__$1,params);
} else {
return G__45542__$1;
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
fulcro.client.impl.data_fetch.mark_ready = (function fulcro$client$impl$data_fetch$mark_ready(p__45560){
var map__45561 = p__45560;
var map__45561__$1 = ((((!((map__45561 == null)))?((((map__45561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45561):map__45561);
var config = map__45561__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45561__$1,cljs.core.cst$kw$env);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$state);
var marker_QMARK_ = !((false === cljs.core.cst$kw$marker.cljs$core$IFn$_invoke$arity$1(config)));
var load_request = fulcro.client.impl.data_fetch.ready_state(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$env,env], null),config], 0)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,marker_QMARK_,load_request,map__45561,map__45561__$1,config,env){
return (function (s){
var G__45564 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),load_request);
if(marker_QMARK_){
return fulcro.client.impl.data_fetch.place_load_marker(G__45564,load_request);
} else {
return G__45564;
}
});})(state,marker_QMARK_,load_request,map__45561,map__45561__$1,config,env))
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
var G__45571 = arguments.length;
switch (G__45571) {
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
var G__45573 = arguments.length;
switch (G__45573) {
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
var G__45575 = arguments.length;
switch (G__45575) {
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
var map__45612 = load_request;
var map__45612__$1 = ((((!((map__45612 == null)))?((((map__45612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45612):map__45612);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_remote);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_query);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_ident);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([original_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,state,cljs.core.cst$kw$load_DASH_request,(function (){var G__45618 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$remote,remote,cljs.core.cst$kw$marker,marker,cljs.core.cst$kw$server_DASH_query,query,cljs.core.cst$kw$parallel,cljs.core.boolean$(parallel)], null);
var G__45618__$1 = (cljs.core.truth_(post_mutation)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45618,cljs.core.cst$kw$post_DASH_mutation,post_mutation):G__45618);
var G__45618__$2 = (cljs.core.truth_(post_mutation_params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45618__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params,post_mutation_params):G__45618__$1);
var G__45618__$3 = (cljs.core.truth_(refresh)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45618__$2,cljs.core.cst$kw$refresh,refresh):G__45618__$2);
if(cljs.core.truth_(fallback)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45618__$3,cljs.core.cst$kw$fallback,fallback);
} else {
return G__45618__$3;
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
var seq__45637 = cljs.core.seq(loading_items);
var chunk__45638 = null;
var count__45639 = (0);
var i__45640 = (0);
while(true){
if((i__45640 < count__45639)){
var item = chunk__45638.cljs$core$IIndexed$_nth$arity$2(null,i__45640);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__45637,chunk__45638,count__45639,i__45640,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__45641 = s;
var G__45641__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45641,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))){
return fulcro.client.impl.data_fetch.remove_marker(G__45641__$1,item);
} else {
return G__45641__$1;
}
});})(seq__45637,chunk__45638,count__45639,i__45640,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__45682 = seq__45637;
var G__45683 = chunk__45638;
var G__45684 = count__45639;
var G__45685 = (i__45640 + (1));
seq__45637 = G__45682;
chunk__45638 = G__45683;
count__45639 = G__45684;
i__45640 = G__45685;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__45637);
if(temp__5459__auto__){
var seq__45637__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45637__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__45637__$1);
var G__45694 = cljs.core.chunk_rest(seq__45637__$1);
var G__45695 = c__11343__auto__;
var G__45696 = cljs.core.count(c__11343__auto__);
var G__45697 = (0);
seq__45637 = G__45694;
chunk__45638 = G__45695;
count__45639 = G__45696;
i__45640 = G__45697;
continue;
} else {
var item = cljs.core.first(seq__45637__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__45637,chunk__45638,count__45639,i__45640,item,seq__45637__$1,temp__5459__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__45643 = s;
var G__45643__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45643,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))){
return fulcro.client.impl.data_fetch.remove_marker(G__45643__$1,item);
} else {
return G__45643__$1;
}
});})(seq__45637,chunk__45638,count__45639,i__45640,item,seq__45637__$1,temp__5459__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__45710 = cljs.core.next(seq__45637__$1);
var G__45711 = null;
var G__45712 = (0);
var G__45713 = (0);
seq__45637 = G__45710;
chunk__45638 = G__45711;
count__45639 = G__45712;
i__45640 = G__45713;
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
var seq__45645 = cljs.core.seq(loading_items);
var chunk__45646 = null;
var count__45647 = (0);
var i__45648 = (0);
while(true){
if((i__45648 < count__45647)){
var item = chunk__45646.cljs$core$IIndexed$_nth$arity$2(null,i__45648);
var temp__5459__auto___45721 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5459__auto___45721)){
var mutation_symbol_45722 = temp__5459__auto___45721;
cljs.core.reset_BANG_(ran_mutations,true);

var params_45725 = (function (){var or__10412__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_45726 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var G__45650_45728 = (function (){var G__45651 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_45726);
var G__45652 = mutation_symbol_45722;
var G__45653 = params_45725;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__45651,G__45652,G__45653) : fulcro.client.mutations.mutate.call(null,G__45651,G__45652,G__45653));
})();
var G__45650_45729__$1 = (((G__45650_45728 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__45650_45728));
if((G__45650_45729__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__45650_45729__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__45736 = seq__45645;
var G__45737 = chunk__45646;
var G__45738 = count__45647;
var G__45739 = (i__45648 + (1));
seq__45645 = G__45736;
chunk__45646 = G__45737;
count__45647 = G__45738;
i__45648 = G__45739;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__45645);
if(temp__5459__auto__){
var seq__45645__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45645__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__45645__$1);
var G__45749 = cljs.core.chunk_rest(seq__45645__$1);
var G__45750 = c__11343__auto__;
var G__45751 = cljs.core.count(c__11343__auto__);
var G__45752 = (0);
seq__45645 = G__45749;
chunk__45646 = G__45750;
count__45647 = G__45751;
i__45648 = G__45752;
continue;
} else {
var item = cljs.core.first(seq__45645__$1);
var temp__5459__auto___45755__$1 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5459__auto___45755__$1)){
var mutation_symbol_45756 = temp__5459__auto___45755__$1;
cljs.core.reset_BANG_(ran_mutations,true);

var params_45757 = (function (){var or__10412__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_45758 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var G__45658_45759 = (function (){var G__45660 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_45758);
var G__45661 = mutation_symbol_45756;
var G__45662 = params_45757;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__45660,G__45661,G__45662) : fulcro.client.mutations.mutate.call(null,G__45660,G__45661,G__45662));
})();
var G__45658_45760__$1 = (((G__45658_45759 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__45658_45759));
if((G__45658_45760__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__45658_45760__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__45762 = cljs.core.next(seq__45645__$1);
var G__45763 = null;
var G__45764 = (0);
var G__45765 = (0);
seq__45645 = G__45762;
chunk__45646 = G__45763;
count__45647 = G__45764;
i__45648 = G__45765;
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

var seq__45770 = cljs.core.seq(loading_items);
var chunk__45771 = null;
var count__45772 = (0);
var i__45773 = (0);
while(true){
if((i__45773 < count__45772)){
var item = chunk__45771.cljs$core$IIndexed$_nth$arity$2(null,i__45773);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__45770,chunk__45771,count__45772,i__45773,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__45775 = s;
var G__45775__$1 = (cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__45775,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__45775);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45775__$1,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__45770,chunk__45771,count__45772,i__45773,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__45820 = seq__45770;
var G__45821 = chunk__45771;
var G__45822 = count__45772;
var G__45823 = (i__45773 + (1));
seq__45770 = G__45820;
chunk__45771 = G__45821;
count__45772 = G__45822;
i__45773 = G__45823;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__45770);
if(temp__5459__auto__){
var seq__45770__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45770__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__45770__$1);
var G__45829 = cljs.core.chunk_rest(seq__45770__$1);
var G__45830 = c__11343__auto__;
var G__45831 = cljs.core.count(c__11343__auto__);
var G__45832 = (0);
seq__45770 = G__45829;
chunk__45771 = G__45830;
count__45772 = G__45831;
i__45773 = G__45832;
continue;
} else {
var item = cljs.core.first(seq__45770__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__45770,chunk__45771,count__45772,i__45773,item,seq__45770__$1,temp__5459__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__45783 = s;
var G__45783__$1 = (cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__45783,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__45783);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45783__$1,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__45770,chunk__45771,count__45772,i__45773,item,seq__45770__$1,temp__5459__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__45841 = cljs.core.next(seq__45770__$1);
var G__45842 = null;
var G__45843 = (0);
var G__45844 = (0);
seq__45770 = G__45841;
chunk__45771 = G__45842;
count__45772 = G__45843;
i__45773 = G__45844;
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
var seq__45786 = cljs.core.seq(loading_items);
var chunk__45787 = null;
var count__45788 = (0);
var i__45789 = (0);
while(true){
if((i__45789 < count__45788)){
var item = chunk__45787.cljs$core$IIndexed$_nth$arity$2(null,i__45789);
var temp__5459__auto___45847 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5459__auto___45847)){
var fallback_symbol_45851 = temp__5459__auto___45847;
var original_env_45855 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var env_45856 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_45855);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__45791_45857 = (function (){var G__45792 = env_45856;
var G__45793 = fallback_symbol_45851;
var G__45794 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__45792,G__45793,G__45794) : fulcro.client.mutations.mutate.call(null,G__45792,G__45793,G__45794));
})();
var G__45791_45858__$1 = (((G__45791_45857 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__45791_45857));
if((G__45791_45858__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__45791_45858__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__45867 = seq__45786;
var G__45868 = chunk__45787;
var G__45869 = count__45788;
var G__45870 = (i__45789 + (1));
seq__45786 = G__45867;
chunk__45787 = G__45868;
count__45788 = G__45869;
i__45789 = G__45870;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__45786);
if(temp__5459__auto__){
var seq__45786__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45786__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__45786__$1);
var G__45874 = cljs.core.chunk_rest(seq__45786__$1);
var G__45875 = c__11343__auto__;
var G__45876 = cljs.core.count(c__11343__auto__);
var G__45877 = (0);
seq__45786 = G__45874;
chunk__45787 = G__45875;
count__45788 = G__45876;
i__45789 = G__45877;
continue;
} else {
var item = cljs.core.first(seq__45786__$1);
var temp__5459__auto___45879__$1 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5459__auto___45879__$1)){
var fallback_symbol_45881 = temp__5459__auto___45879__$1;
var original_env_45882 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var env_45883 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_45882);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__45800_45887 = (function (){var G__45801 = env_45883;
var G__45802 = fallback_symbol_45881;
var G__45803 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__45801,G__45802,G__45803) : fulcro.client.mutations.mutate.call(null,G__45801,G__45802,G__45803));
})();
var G__45800_45888__$1 = (((G__45800_45887 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__45800_45887));
if((G__45800_45888__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__45800_45888__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__45896 = cljs.core.next(seq__45786__$1);
var G__45897 = null;
var G__45898 = (0);
var G__45899 = (0);
seq__45786 = G__45896;
chunk__45787 = G__45897;
count__45788 = G__45898;
i__45789 = G__45899;
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

// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.impl.application');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.logging');
goog.require('om.next');
goog.require('om.util');
goog.require('fulcro.i18n');
goog.require('fulcro.client.impl.data_fetch');
goog.require('fulcro.client.util');
goog.require('cljs.core.async');
goog.require('fulcro.client.network');
goog.require('fulcro.client.impl.om_plumbing');
/**
 * This internal function is responsible for generating and returning a function that can accomplish calling the fallbacks that
 *   appear in an incoming Om transaction, which is in turn used by the error-handling logic of the plumbing.
 */
fulcro.client.impl.application.fallback_handler = (function fulcro$client$impl$application$fallback_handler(p__46165,query){
var map__46166 = p__46165;
var map__46166__$1 = ((((!((map__46166 == null)))?((((map__46166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46166):map__46166);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46166__$1,cljs.core.cst$kw$reconciler);
return ((function (map__46166,map__46166__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.app_state(reconciler),cljs.core.assoc,cljs.core.cst$kw$fulcro_SLASH_server_DASH_error,error);

var temp__5457__auto__ = fulcro.client.impl.om_plumbing.fallback_query(query,error);
if(cljs.core.truth_(temp__5457__auto__)){
var q = temp__5457__auto__;
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.logging.value_message("Transaction failed. Running fallback.",q)], 0));

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,q);
} else {
return fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fallback triggered, but no fallbacks were defined."], 0));
}
});
;})(map__46166,map__46166__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
fulcro.client.impl.application.enqueue = (function fulcro$client$impl$application$enqueue(q,v){
var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto__){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto__){
return (function (state_46175){
var state_val_46176 = (state_46175[(1)]);
if((state_val_46176 === (1))){
var state_46175__$1 = state_46175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46175__$1,(2),q,v);
} else {
if((state_val_46176 === (2))){
var inst_46173 = (state_46175[(2)]);
var state_46175__$1 = state_46175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46175__$1,inst_46173);
} else {
return null;
}
}
});})(c__28612__auto__))
;
return ((function (switch__24124__auto__,c__28612__auto__){
return (function() {
var fulcro$client$impl$application$enqueue_$_state_machine__24125__auto__ = null;
var fulcro$client$impl$application$enqueue_$_state_machine__24125__auto____0 = (function (){
var statearr_46178 = [null,null,null,null,null,null,null];
(statearr_46178[(0)] = fulcro$client$impl$application$enqueue_$_state_machine__24125__auto__);

(statearr_46178[(1)] = (1));

return statearr_46178;
});
var fulcro$client$impl$application$enqueue_$_state_machine__24125__auto____1 = (function (state_46175){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_46175);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e46179){if((e46179 instanceof Object)){
var ex__24128__auto__ = e46179;
var statearr_46180_46197 = state_46175;
(statearr_46180_46197[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46175);

return cljs.core.cst$kw$recur;
} else {
throw e46179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__46198 = state_46175;
state_46175 = G__46198;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
fulcro$client$impl$application$enqueue_$_state_machine__24125__auto__ = function(state_46175){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$enqueue_$_state_machine__24125__auto____0.call(this);
case 1:
return fulcro$client$impl$application$enqueue_$_state_machine__24125__auto____1.call(this,state_46175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$enqueue_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$enqueue_$_state_machine__24125__auto____0;
fulcro$client$impl$application$enqueue_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$enqueue_$_state_machine__24125__auto____1;
return fulcro$client$impl$application$enqueue_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto__))
})();
var state__28614__auto__ = (function (){var statearr_46184 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_46184[(6)] = c__28612__auto__);

return statearr_46184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto__))
);

return c__28612__auto__;
});
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response.
 */
fulcro.client.impl.application.real_send = (function fulcro$client$impl$application$real_send(net,tx,on_done,on_error,on_load){
if(((!((net == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$ProgressiveTransfer$)))?true:false):false)){
return fulcro.client.network.updating_send(net,fulcro.client.impl.om_plumbing.strip_ui(tx),on_done,on_error,on_load);
} else {
return fulcro.client.network.send(net,fulcro.client.impl.om_plumbing.strip_ui(tx),on_done,on_error);
}
});
/**
 * Split a tx that contains mutations. Returns a vector that contains at least one tx (the original).
 * 
 * Examples:
 * [(f) (g)] => [[(f) (g)]]
 * [(f) (g) (f) (k)] => [[(f) (g)] [(f) (k)]]
 * [(f) (g) (f) (k) (g)] => [[(f) (g)] [(f) (k) (g)]]
 * 
 */
fulcro.client.impl.application.split_mutations = (function fulcro$client$impl$application$split_mutations(tx){
if(!((cljs.core.vector_QMARK_(tx)) && (cljs.core.every_QMARK_((function (t){
return (cljs.core.list_QMARK_(t)) && ((cljs.core.first(t) instanceof cljs.core.Symbol));
}),tx)))){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INTERNAL ERROR: split-mutations was asked to split a tx that contained things other than mutations.",tx], 0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
} else {
if(cljs.core.empty_QMARK_(tx)){
return cljs.core.PersistentVector.EMPTY;
} else {
var mutation_name = (function (m){
return cljs.core.first(m);
});
var map__46209 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (mutation_name){
return (function (p__46210,mutation){
var map__46211 = p__46210;
var map__46211__$1 = ((((!((map__46211 == null)))?((((map__46211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46211):map__46211);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,cljs.core.cst$kw$seen);
var accumulator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,cljs.core.cst$kw$accumulator);
var current_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,cljs.core.cst$kw$current_DASH_tx);
if(cljs.core.contains_QMARK_(seen,mutation_name(mutation))){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$accumulator,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accumulator,current_tx),cljs.core.cst$kw$current_DASH_tx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mutation], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,mutation_name(mutation)),cljs.core.cst$kw$accumulator,accumulator,cljs.core.cst$kw$current_DASH_tx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_tx,mutation)], null);
}
});})(mutation_name))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$accumulator,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$current_DASH_tx,cljs.core.PersistentVector.EMPTY], null),tx);
var map__46209__$1 = ((((!((map__46209 == null)))?((((map__46209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46209):map__46209);
var accumulator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46209__$1,cljs.core.cst$kw$accumulator);
var current_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46209__$1,cljs.core.cst$kw$current_DASH_tx);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accumulator,current_tx);
}
}
});
/**
 * Splits out the (remote) mutations and fallbacks in a transaction, creates an error handler that can
 * trigger fallbacks, and enqueues the remote mutations on the network queue. If duplicate mutation names
 * appear, then they will be separated into separate network requests.
 * 
 * NOTE: If the mutation in the tx has duplicates, then the same fallback will be used for the
 * resulting split tx. See `split-mutations` (which is used by this function to split dupes out of txes).
 */
fulcro.client.impl.application.enqueue_mutations = (function fulcro$client$impl$application$enqueue_mutations(p__46229,remote_tx_map,cb){
var map__46230 = p__46229;
var map__46230__$1 = ((((!((map__46230 == null)))?((((map__46230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46230):map__46230);
var app = map__46230__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46230__$1,cljs.core.cst$kw$send_DASH_queues);
var seq__46232 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__46233 = null;
var count__46234 = (0);
var i__46235 = (0);
while(true){
if((i__46235 < count__46234)){
var remote = chunk__46233.cljs$core$IIndexed$_nth$arity$2(null,i__46235);
var queue_46281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_46282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var fallback_46283 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_46282);
var desired_remote_mutations_46284 = fulcro.client.impl.om_plumbing.remove_loads_and_fallbacks(full_remote_transaction_46282);
var tx_list_46285 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_46284);
var has_mutations_QMARK__46286 = ((function (seq__46232,chunk__46233,count__46234,i__46235,queue_46281,full_remote_transaction_46282,fallback_46283,desired_remote_mutations_46284,tx_list_46285,remote,map__46230,map__46230__$1,app,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__46232,chunk__46233,count__46234,i__46235,queue_46281,full_remote_transaction_46282,fallback_46283,desired_remote_mutations_46284,tx_list_46285,remote,map__46230,map__46230__$1,app,send_queues))
;
var payload_46287 = ((function (seq__46232,chunk__46233,count__46234,i__46235,queue_46281,full_remote_transaction_46282,fallback_46283,desired_remote_mutations_46284,tx_list_46285,has_mutations_QMARK__46286,remote,map__46230,map__46230__$1,app,send_queues){
return (function (tx){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,tx,cljs.core.cst$kw$on_DASH_load,cb,cljs.core.cst$kw$on_DASH_error,((function (seq__46232,chunk__46233,count__46234,i__46235,queue_46281,full_remote_transaction_46282,fallback_46283,desired_remote_mutations_46284,tx_list_46285,has_mutations_QMARK__46286,remote,map__46230,map__46230__$1,app,send_queues){
return (function (p1__46228_SHARP_){
return (fallback_46283.cljs$core$IFn$_invoke$arity$1 ? fallback_46283.cljs$core$IFn$_invoke$arity$1(p1__46228_SHARP_) : fallback_46283.call(null,p1__46228_SHARP_));
});})(seq__46232,chunk__46233,count__46234,i__46235,queue_46281,full_remote_transaction_46282,fallback_46283,desired_remote_mutations_46284,tx_list_46285,has_mutations_QMARK__46286,remote,map__46230,map__46230__$1,app,send_queues))
], null);
});})(seq__46232,chunk__46233,count__46234,i__46235,queue_46281,full_remote_transaction_46282,fallback_46283,desired_remote_mutations_46284,tx_list_46285,has_mutations_QMARK__46286,remote,map__46230,map__46230__$1,app,send_queues))
;
var seq__46243_46295 = cljs.core.seq(tx_list_46285);
var chunk__46244_46296 = null;
var count__46245_46297 = (0);
var i__46246_46298 = (0);
while(true){
if((i__46246_46298 < count__46245_46297)){
var tx_46299 = chunk__46244_46296.cljs$core$IIndexed$_nth$arity$2(null,i__46246_46298);
if(cljs.core.truth_(has_mutations_QMARK__46286(tx_46299))){
fulcro.client.impl.application.enqueue(queue_46281,payload_46287(tx_46299));
} else {
}

var G__46300 = seq__46243_46295;
var G__46301 = chunk__46244_46296;
var G__46302 = count__46245_46297;
var G__46303 = (i__46246_46298 + (1));
seq__46243_46295 = G__46300;
chunk__46244_46296 = G__46301;
count__46245_46297 = G__46302;
i__46246_46298 = G__46303;
continue;
} else {
var temp__5459__auto___46310 = cljs.core.seq(seq__46243_46295);
if(temp__5459__auto___46310){
var seq__46243_46311__$1 = temp__5459__auto___46310;
if(cljs.core.chunked_seq_QMARK_(seq__46243_46311__$1)){
var c__11343__auto___46313 = cljs.core.chunk_first(seq__46243_46311__$1);
var G__46314 = cljs.core.chunk_rest(seq__46243_46311__$1);
var G__46315 = c__11343__auto___46313;
var G__46316 = cljs.core.count(c__11343__auto___46313);
var G__46317 = (0);
seq__46243_46295 = G__46314;
chunk__46244_46296 = G__46315;
count__46245_46297 = G__46316;
i__46246_46298 = G__46317;
continue;
} else {
var tx_46318 = cljs.core.first(seq__46243_46311__$1);
if(cljs.core.truth_(has_mutations_QMARK__46286(tx_46318))){
fulcro.client.impl.application.enqueue(queue_46281,payload_46287(tx_46318));
} else {
}

var G__46321 = cljs.core.next(seq__46243_46311__$1);
var G__46322 = null;
var G__46323 = (0);
var G__46324 = (0);
seq__46243_46295 = G__46321;
chunk__46244_46296 = G__46322;
count__46245_46297 = G__46323;
i__46246_46298 = G__46324;
continue;
}
} else {
}
}
break;
}

var G__46325 = seq__46232;
var G__46326 = chunk__46233;
var G__46327 = count__46234;
var G__46328 = (i__46235 + (1));
seq__46232 = G__46325;
chunk__46233 = G__46326;
count__46234 = G__46327;
i__46235 = G__46328;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__46232);
if(temp__5459__auto__){
var seq__46232__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46232__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__46232__$1);
var G__46331 = cljs.core.chunk_rest(seq__46232__$1);
var G__46332 = c__11343__auto__;
var G__46333 = cljs.core.count(c__11343__auto__);
var G__46334 = (0);
seq__46232 = G__46331;
chunk__46233 = G__46332;
count__46234 = G__46333;
i__46235 = G__46334;
continue;
} else {
var remote = cljs.core.first(seq__46232__$1);
var queue_46335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_46337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var fallback_46338 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_46337);
var desired_remote_mutations_46339 = fulcro.client.impl.om_plumbing.remove_loads_and_fallbacks(full_remote_transaction_46337);
var tx_list_46340 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_46339);
var has_mutations_QMARK__46341 = ((function (seq__46232,chunk__46233,count__46234,i__46235,queue_46335,full_remote_transaction_46337,fallback_46338,desired_remote_mutations_46339,tx_list_46340,remote,seq__46232__$1,temp__5459__auto__,map__46230,map__46230__$1,app,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__46232,chunk__46233,count__46234,i__46235,queue_46335,full_remote_transaction_46337,fallback_46338,desired_remote_mutations_46339,tx_list_46340,remote,seq__46232__$1,temp__5459__auto__,map__46230,map__46230__$1,app,send_queues))
;
var payload_46342 = ((function (seq__46232,chunk__46233,count__46234,i__46235,queue_46335,full_remote_transaction_46337,fallback_46338,desired_remote_mutations_46339,tx_list_46340,has_mutations_QMARK__46341,remote,seq__46232__$1,temp__5459__auto__,map__46230,map__46230__$1,app,send_queues){
return (function (tx){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,tx,cljs.core.cst$kw$on_DASH_load,cb,cljs.core.cst$kw$on_DASH_error,((function (seq__46232,chunk__46233,count__46234,i__46235,queue_46335,full_remote_transaction_46337,fallback_46338,desired_remote_mutations_46339,tx_list_46340,has_mutations_QMARK__46341,remote,seq__46232__$1,temp__5459__auto__,map__46230,map__46230__$1,app,send_queues){
return (function (p1__46228_SHARP_){
return (fallback_46338.cljs$core$IFn$_invoke$arity$1 ? fallback_46338.cljs$core$IFn$_invoke$arity$1(p1__46228_SHARP_) : fallback_46338.call(null,p1__46228_SHARP_));
});})(seq__46232,chunk__46233,count__46234,i__46235,queue_46335,full_remote_transaction_46337,fallback_46338,desired_remote_mutations_46339,tx_list_46340,has_mutations_QMARK__46341,remote,seq__46232__$1,temp__5459__auto__,map__46230,map__46230__$1,app,send_queues))
], null);
});})(seq__46232,chunk__46233,count__46234,i__46235,queue_46335,full_remote_transaction_46337,fallback_46338,desired_remote_mutations_46339,tx_list_46340,has_mutations_QMARK__46341,remote,seq__46232__$1,temp__5459__auto__,map__46230,map__46230__$1,app,send_queues))
;
var seq__46256_46353 = cljs.core.seq(tx_list_46340);
var chunk__46257_46354 = null;
var count__46258_46355 = (0);
var i__46259_46356 = (0);
while(true){
if((i__46259_46356 < count__46258_46355)){
var tx_46357 = chunk__46257_46354.cljs$core$IIndexed$_nth$arity$2(null,i__46259_46356);
if(cljs.core.truth_(has_mutations_QMARK__46341(tx_46357))){
fulcro.client.impl.application.enqueue(queue_46335,payload_46342(tx_46357));
} else {
}

var G__46358 = seq__46256_46353;
var G__46359 = chunk__46257_46354;
var G__46360 = count__46258_46355;
var G__46361 = (i__46259_46356 + (1));
seq__46256_46353 = G__46358;
chunk__46257_46354 = G__46359;
count__46258_46355 = G__46360;
i__46259_46356 = G__46361;
continue;
} else {
var temp__5459__auto___46362__$1 = cljs.core.seq(seq__46256_46353);
if(temp__5459__auto___46362__$1){
var seq__46256_46363__$1 = temp__5459__auto___46362__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46256_46363__$1)){
var c__11343__auto___46364 = cljs.core.chunk_first(seq__46256_46363__$1);
var G__46365 = cljs.core.chunk_rest(seq__46256_46363__$1);
var G__46366 = c__11343__auto___46364;
var G__46367 = cljs.core.count(c__11343__auto___46364);
var G__46368 = (0);
seq__46256_46353 = G__46365;
chunk__46257_46354 = G__46366;
count__46258_46355 = G__46367;
i__46259_46356 = G__46368;
continue;
} else {
var tx_46369 = cljs.core.first(seq__46256_46363__$1);
if(cljs.core.truth_(has_mutations_QMARK__46341(tx_46369))){
fulcro.client.impl.application.enqueue(queue_46335,payload_46342(tx_46369));
} else {
}

var G__46370 = cljs.core.next(seq__46256_46363__$1);
var G__46371 = null;
var G__46372 = (0);
var G__46373 = (0);
seq__46256_46353 = G__46370;
chunk__46257_46354 = G__46371;
count__46258_46355 = G__46372;
i__46259_46356 = G__46373;
continue;
}
} else {
}
}
break;
}

var G__46374 = cljs.core.next(seq__46232__$1);
var G__46375 = null;
var G__46376 = (0);
var G__46377 = (0);
seq__46232 = G__46374;
chunk__46233 = G__46375;
count__46234 = G__46376;
i__46235 = G__46377;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Finds any loads marked `parallel` and triggers real network requests immediately. Remaining loads
 *   are pulled into a single fetch payload (combined into one query) and enqueued behind any prior mutations/reads that
 *   were already requested in a prior UI/event cycle. Thus non-parallel reads are processed in clusters grouped due to UI
 *   events (a single event might trigger many reads which will all go to the server as a single combined request).
 *   Further UI events that trigger remote interaction will end up waiting until prior network request(s) are complete.
 * 
 *   This ensures that default reasoning is simple and sequential in the face of optimistic UI updates (real network
 *   traffic characteristics could cause out of order processing, and you would not want
 *   a 'create list' to be processed on the server *after* an 'add an item to the list'). 
 */
fulcro.client.impl.application.enqueue_reads = (function fulcro$client$impl$application$enqueue_reads(p__46380){
var map__46381 = p__46380;
var map__46381__$1 = ((((!((map__46381 == null)))?((((map__46381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46381):map__46381);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46381__$1,cljs.core.cst$kw$send_DASH_queues);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46381__$1,cljs.core.cst$kw$reconciler);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46381__$1,cljs.core.cst$kw$networking);
var seq__46386 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__46387 = null;
var count__46388 = (0);
var i__46389 = (0);
while(true){
if((i__46389 < count__46388)){
var remote = chunk__46387.cljs$core$IIndexed$_nth$arity$2(null,i__46389);
var queue_46426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_46428 = fulcro.client.impl.data_fetch.mark_parallel_loading(remote,reconciler);
var seq__46390_46431 = cljs.core.seq(parallel_payload_46428);
var chunk__46391_46432 = null;
var count__46392_46433 = (0);
var i__46393_46434 = (0);
while(true){
if((i__46393_46434 < count__46392_46433)){
var map__46394_46435 = chunk__46391_46432.cljs$core$IIndexed$_nth$arity$2(null,i__46393_46434);
var map__46394_46436__$1 = ((((!((map__46394_46435 == null)))?((((map__46394_46435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46394_46435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46394_46435):map__46394_46435);
var query_46437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46394_46436__$1,cljs.core.cst$kw$query);
var on_load_46438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46394_46436__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46394_46436__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46394_46436__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46441 = ((function (seq__46390_46431,chunk__46391_46432,count__46392_46433,i__46393_46434,seq__46386,chunk__46387,count__46388,i__46389,map__46394_46435,map__46394_46436__$1,query_46437,on_load_46438,on_error_46439,load_descriptors_46440,queue_46426,network_46427,parallel_payload_46428,remote,map__46381,map__46381__$1,send_queues,reconciler,networking){
return (function (p1__46378_SHARP_){
return (on_load_46438.cljs$core$IFn$_invoke$arity$2 ? on_load_46438.cljs$core$IFn$_invoke$arity$2(p1__46378_SHARP_,load_descriptors_46440) : on_load_46438.call(null,p1__46378_SHARP_,load_descriptors_46440));
});})(seq__46390_46431,chunk__46391_46432,count__46392_46433,i__46393_46434,seq__46386,chunk__46387,count__46388,i__46389,map__46394_46435,map__46394_46436__$1,query_46437,on_load_46438,on_error_46439,load_descriptors_46440,queue_46426,network_46427,parallel_payload_46428,remote,map__46381,map__46381__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46442 = ((function (seq__46390_46431,chunk__46391_46432,count__46392_46433,i__46393_46434,seq__46386,chunk__46387,count__46388,i__46389,on_load_SINGLEQUOTE__46441,map__46394_46435,map__46394_46436__$1,query_46437,on_load_46438,on_error_46439,load_descriptors_46440,queue_46426,network_46427,parallel_payload_46428,remote,map__46381,map__46381__$1,send_queues,reconciler,networking){
return (function (p1__46379_SHARP_){
return (on_error_46439.cljs$core$IFn$_invoke$arity$2 ? on_error_46439.cljs$core$IFn$_invoke$arity$2(p1__46379_SHARP_,load_descriptors_46440) : on_error_46439.call(null,p1__46379_SHARP_,load_descriptors_46440));
});})(seq__46390_46431,chunk__46391_46432,count__46392_46433,i__46393_46434,seq__46386,chunk__46387,count__46388,i__46389,on_load_SINGLEQUOTE__46441,map__46394_46435,map__46394_46436__$1,query_46437,on_load_46438,on_error_46439,load_descriptors_46440,queue_46426,network_46427,parallel_payload_46428,remote,map__46381,map__46381__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_46427,query_46437,on_load_SINGLEQUOTE__46441,on_error_SINGLEQUOTE__46442,null);

var G__46447 = seq__46390_46431;
var G__46448 = chunk__46391_46432;
var G__46449 = count__46392_46433;
var G__46450 = (i__46393_46434 + (1));
seq__46390_46431 = G__46447;
chunk__46391_46432 = G__46448;
count__46392_46433 = G__46449;
i__46393_46434 = G__46450;
continue;
} else {
var temp__5459__auto___46455 = cljs.core.seq(seq__46390_46431);
if(temp__5459__auto___46455){
var seq__46390_46456__$1 = temp__5459__auto___46455;
if(cljs.core.chunked_seq_QMARK_(seq__46390_46456__$1)){
var c__11343__auto___46457 = cljs.core.chunk_first(seq__46390_46456__$1);
var G__46458 = cljs.core.chunk_rest(seq__46390_46456__$1);
var G__46459 = c__11343__auto___46457;
var G__46460 = cljs.core.count(c__11343__auto___46457);
var G__46461 = (0);
seq__46390_46431 = G__46458;
chunk__46391_46432 = G__46459;
count__46392_46433 = G__46460;
i__46393_46434 = G__46461;
continue;
} else {
var map__46401_46464 = cljs.core.first(seq__46390_46456__$1);
var map__46401_46465__$1 = ((((!((map__46401_46464 == null)))?((((map__46401_46464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46401_46464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46401_46464):map__46401_46464);
var query_46466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46401_46465__$1,cljs.core.cst$kw$query);
var on_load_46467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46401_46465__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46401_46465__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46401_46465__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46474 = ((function (seq__46390_46431,chunk__46391_46432,count__46392_46433,i__46393_46434,seq__46386,chunk__46387,count__46388,i__46389,map__46401_46464,map__46401_46465__$1,query_46466,on_load_46467,on_error_46468,load_descriptors_46469,seq__46390_46456__$1,temp__5459__auto___46455,queue_46426,network_46427,parallel_payload_46428,remote,map__46381,map__46381__$1,send_queues,reconciler,networking){
return (function (p1__46378_SHARP_){
return (on_load_46467.cljs$core$IFn$_invoke$arity$2 ? on_load_46467.cljs$core$IFn$_invoke$arity$2(p1__46378_SHARP_,load_descriptors_46469) : on_load_46467.call(null,p1__46378_SHARP_,load_descriptors_46469));
});})(seq__46390_46431,chunk__46391_46432,count__46392_46433,i__46393_46434,seq__46386,chunk__46387,count__46388,i__46389,map__46401_46464,map__46401_46465__$1,query_46466,on_load_46467,on_error_46468,load_descriptors_46469,seq__46390_46456__$1,temp__5459__auto___46455,queue_46426,network_46427,parallel_payload_46428,remote,map__46381,map__46381__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46475 = ((function (seq__46390_46431,chunk__46391_46432,count__46392_46433,i__46393_46434,seq__46386,chunk__46387,count__46388,i__46389,on_load_SINGLEQUOTE__46474,map__46401_46464,map__46401_46465__$1,query_46466,on_load_46467,on_error_46468,load_descriptors_46469,seq__46390_46456__$1,temp__5459__auto___46455,queue_46426,network_46427,parallel_payload_46428,remote,map__46381,map__46381__$1,send_queues,reconciler,networking){
return (function (p1__46379_SHARP_){
return (on_error_46468.cljs$core$IFn$_invoke$arity$2 ? on_error_46468.cljs$core$IFn$_invoke$arity$2(p1__46379_SHARP_,load_descriptors_46469) : on_error_46468.call(null,p1__46379_SHARP_,load_descriptors_46469));
});})(seq__46390_46431,chunk__46391_46432,count__46392_46433,i__46393_46434,seq__46386,chunk__46387,count__46388,i__46389,on_load_SINGLEQUOTE__46474,map__46401_46464,map__46401_46465__$1,query_46466,on_load_46467,on_error_46468,load_descriptors_46469,seq__46390_46456__$1,temp__5459__auto___46455,queue_46426,network_46427,parallel_payload_46428,remote,map__46381,map__46381__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_46427,query_46466,on_load_SINGLEQUOTE__46474,on_error_SINGLEQUOTE__46475,null);

var G__46480 = cljs.core.next(seq__46390_46456__$1);
var G__46481 = null;
var G__46482 = (0);
var G__46483 = (0);
seq__46390_46431 = G__46480;
chunk__46391_46432 = G__46481;
count__46392_46433 = G__46482;
i__46393_46434 = G__46483;
continue;
}
} else {
}
}
break;
}

var fetch_payload_46486 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_46486)){
fulcro.client.impl.application.enqueue(queue_46426,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_46486,cljs.core.cst$kw$networking,network_46427));

var G__46487 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_46486 = G__46487;
continue;
} else {
}
break;
}

var G__46491 = seq__46386;
var G__46492 = chunk__46387;
var G__46493 = count__46388;
var G__46494 = (i__46389 + (1));
seq__46386 = G__46491;
chunk__46387 = G__46492;
count__46388 = G__46493;
i__46389 = G__46494;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__46386);
if(temp__5459__auto__){
var seq__46386__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46386__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__46386__$1);
var G__46495 = cljs.core.chunk_rest(seq__46386__$1);
var G__46496 = c__11343__auto__;
var G__46497 = cljs.core.count(c__11343__auto__);
var G__46498 = (0);
seq__46386 = G__46495;
chunk__46387 = G__46496;
count__46388 = G__46497;
i__46389 = G__46498;
continue;
} else {
var remote = cljs.core.first(seq__46386__$1);
var queue_46499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_46501 = fulcro.client.impl.data_fetch.mark_parallel_loading(remote,reconciler);
var seq__46407_46502 = cljs.core.seq(parallel_payload_46501);
var chunk__46409_46503 = null;
var count__46410_46504 = (0);
var i__46411_46505 = (0);
while(true){
if((i__46411_46505 < count__46410_46504)){
var map__46412_46506 = chunk__46409_46503.cljs$core$IIndexed$_nth$arity$2(null,i__46411_46505);
var map__46412_46507__$1 = ((((!((map__46412_46506 == null)))?((((map__46412_46506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46412_46506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46412_46506):map__46412_46506);
var query_46508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46412_46507__$1,cljs.core.cst$kw$query);
var on_load_46509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46412_46507__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46412_46507__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46412_46507__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46512 = ((function (seq__46407_46502,chunk__46409_46503,count__46410_46504,i__46411_46505,seq__46386,chunk__46387,count__46388,i__46389,map__46412_46506,map__46412_46507__$1,query_46508,on_load_46509,on_error_46510,load_descriptors_46511,queue_46499,network_46500,parallel_payload_46501,remote,seq__46386__$1,temp__5459__auto__,map__46381,map__46381__$1,send_queues,reconciler,networking){
return (function (p1__46378_SHARP_){
return (on_load_46509.cljs$core$IFn$_invoke$arity$2 ? on_load_46509.cljs$core$IFn$_invoke$arity$2(p1__46378_SHARP_,load_descriptors_46511) : on_load_46509.call(null,p1__46378_SHARP_,load_descriptors_46511));
});})(seq__46407_46502,chunk__46409_46503,count__46410_46504,i__46411_46505,seq__46386,chunk__46387,count__46388,i__46389,map__46412_46506,map__46412_46507__$1,query_46508,on_load_46509,on_error_46510,load_descriptors_46511,queue_46499,network_46500,parallel_payload_46501,remote,seq__46386__$1,temp__5459__auto__,map__46381,map__46381__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46513 = ((function (seq__46407_46502,chunk__46409_46503,count__46410_46504,i__46411_46505,seq__46386,chunk__46387,count__46388,i__46389,on_load_SINGLEQUOTE__46512,map__46412_46506,map__46412_46507__$1,query_46508,on_load_46509,on_error_46510,load_descriptors_46511,queue_46499,network_46500,parallel_payload_46501,remote,seq__46386__$1,temp__5459__auto__,map__46381,map__46381__$1,send_queues,reconciler,networking){
return (function (p1__46379_SHARP_){
return (on_error_46510.cljs$core$IFn$_invoke$arity$2 ? on_error_46510.cljs$core$IFn$_invoke$arity$2(p1__46379_SHARP_,load_descriptors_46511) : on_error_46510.call(null,p1__46379_SHARP_,load_descriptors_46511));
});})(seq__46407_46502,chunk__46409_46503,count__46410_46504,i__46411_46505,seq__46386,chunk__46387,count__46388,i__46389,on_load_SINGLEQUOTE__46512,map__46412_46506,map__46412_46507__$1,query_46508,on_load_46509,on_error_46510,load_descriptors_46511,queue_46499,network_46500,parallel_payload_46501,remote,seq__46386__$1,temp__5459__auto__,map__46381,map__46381__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_46500,query_46508,on_load_SINGLEQUOTE__46512,on_error_SINGLEQUOTE__46513,null);

var G__46519 = seq__46407_46502;
var G__46520 = chunk__46409_46503;
var G__46521 = count__46410_46504;
var G__46522 = (i__46411_46505 + (1));
seq__46407_46502 = G__46519;
chunk__46409_46503 = G__46520;
count__46410_46504 = G__46521;
i__46411_46505 = G__46522;
continue;
} else {
var temp__5459__auto___46523__$1 = cljs.core.seq(seq__46407_46502);
if(temp__5459__auto___46523__$1){
var seq__46407_46524__$1 = temp__5459__auto___46523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46407_46524__$1)){
var c__11343__auto___46525 = cljs.core.chunk_first(seq__46407_46524__$1);
var G__46526 = cljs.core.chunk_rest(seq__46407_46524__$1);
var G__46527 = c__11343__auto___46525;
var G__46528 = cljs.core.count(c__11343__auto___46525);
var G__46529 = (0);
seq__46407_46502 = G__46526;
chunk__46409_46503 = G__46527;
count__46410_46504 = G__46528;
i__46411_46505 = G__46529;
continue;
} else {
var map__46415_46530 = cljs.core.first(seq__46407_46524__$1);
var map__46415_46531__$1 = ((((!((map__46415_46530 == null)))?((((map__46415_46530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46415_46530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46415_46530):map__46415_46530);
var query_46532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46415_46531__$1,cljs.core.cst$kw$query);
var on_load_46533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46415_46531__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46415_46531__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46415_46531__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46538 = ((function (seq__46407_46502,chunk__46409_46503,count__46410_46504,i__46411_46505,seq__46386,chunk__46387,count__46388,i__46389,map__46415_46530,map__46415_46531__$1,query_46532,on_load_46533,on_error_46534,load_descriptors_46535,seq__46407_46524__$1,temp__5459__auto___46523__$1,queue_46499,network_46500,parallel_payload_46501,remote,seq__46386__$1,temp__5459__auto__,map__46381,map__46381__$1,send_queues,reconciler,networking){
return (function (p1__46378_SHARP_){
return (on_load_46533.cljs$core$IFn$_invoke$arity$2 ? on_load_46533.cljs$core$IFn$_invoke$arity$2(p1__46378_SHARP_,load_descriptors_46535) : on_load_46533.call(null,p1__46378_SHARP_,load_descriptors_46535));
});})(seq__46407_46502,chunk__46409_46503,count__46410_46504,i__46411_46505,seq__46386,chunk__46387,count__46388,i__46389,map__46415_46530,map__46415_46531__$1,query_46532,on_load_46533,on_error_46534,load_descriptors_46535,seq__46407_46524__$1,temp__5459__auto___46523__$1,queue_46499,network_46500,parallel_payload_46501,remote,seq__46386__$1,temp__5459__auto__,map__46381,map__46381__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46539 = ((function (seq__46407_46502,chunk__46409_46503,count__46410_46504,i__46411_46505,seq__46386,chunk__46387,count__46388,i__46389,on_load_SINGLEQUOTE__46538,map__46415_46530,map__46415_46531__$1,query_46532,on_load_46533,on_error_46534,load_descriptors_46535,seq__46407_46524__$1,temp__5459__auto___46523__$1,queue_46499,network_46500,parallel_payload_46501,remote,seq__46386__$1,temp__5459__auto__,map__46381,map__46381__$1,send_queues,reconciler,networking){
return (function (p1__46379_SHARP_){
return (on_error_46534.cljs$core$IFn$_invoke$arity$2 ? on_error_46534.cljs$core$IFn$_invoke$arity$2(p1__46379_SHARP_,load_descriptors_46535) : on_error_46534.call(null,p1__46379_SHARP_,load_descriptors_46535));
});})(seq__46407_46502,chunk__46409_46503,count__46410_46504,i__46411_46505,seq__46386,chunk__46387,count__46388,i__46389,on_load_SINGLEQUOTE__46538,map__46415_46530,map__46415_46531__$1,query_46532,on_load_46533,on_error_46534,load_descriptors_46535,seq__46407_46524__$1,temp__5459__auto___46523__$1,queue_46499,network_46500,parallel_payload_46501,remote,seq__46386__$1,temp__5459__auto__,map__46381,map__46381__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_46500,query_46532,on_load_SINGLEQUOTE__46538,on_error_SINGLEQUOTE__46539,null);

var G__46544 = cljs.core.next(seq__46407_46524__$1);
var G__46545 = null;
var G__46546 = (0);
var G__46547 = (0);
seq__46407_46502 = G__46544;
chunk__46409_46503 = G__46545;
count__46410_46504 = G__46546;
i__46411_46505 = G__46547;
continue;
}
} else {
}
}
break;
}

var fetch_payload_46548 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_46548)){
fulcro.client.impl.application.enqueue(queue_46499,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_46548,cljs.core.cst$kw$networking,network_46500));

var G__46550 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_46548 = G__46550;
continue;
} else {
}
break;
}

var G__46551 = cljs.core.next(seq__46386__$1);
var G__46552 = null;
var G__46553 = (0);
var G__46554 = (0);
seq__46386 = G__46551;
chunk__46387 = G__46552;
count__46388 = G__46553;
i__46389 = G__46554;
continue;
}
} else {
return null;
}
}
break;
}
});
fulcro.client.impl.application.detect_errant_remotes = (function fulcro$client$impl$application$detect_errant_remotes(p__46556){
var map__46557 = p__46556;
var map__46557__$1 = ((((!((map__46557 == null)))?((((map__46557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46557):map__46557);
var app = map__46557__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46557__$1,cljs.core.cst$kw$reconciler);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46557__$1,cljs.core.cst$kw$send_DASH_queues);
var state = om.next.app_state(reconciler);
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load);
var item_remotes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_remote,all_items));
var all_remotes = cljs.core.set(cljs.core.keys(send_queues));
var invalid_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty(invalid_remotes))){
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Use of invalid remote(s) detected! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid_remotes)].join('')], 0));
} else {
return null;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking code will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
fulcro.client.impl.application.server_send = (function fulcro$client$impl$application$server_send(app,remote_tx_map,cb){
fulcro.client.impl.application.detect_errant_remotes(app);

fulcro.client.impl.application.enqueue_mutations(app,remote_tx_map,cb);

return fulcro.client.impl.application.enqueue_reads(app);
});
/**
 * Sends a network payload. There are two kinds of payloads in Fulcro. The first is
 *   for reads, which are tracked by load descriptors in the app state. These load descriptors
 *   tell the plumbing how to handle the response, and expect to only be merged in once. Mutations
 *   do not have a payload, and can technically received progress updates from the network. The built-in
 *   networking does not (currently) give progress events, but plugin networking can. It is currently not
 *   supported to give an update on a load, so this function is careful to detect that a payload is a send
 *   and turns all but the last update into a no-op. The send-complete function comes from the
 *   network sequential processing loop, and when called unblocks the network processing to allow the
 *   next request to go. Be very careful with this code, as bugs will cause applications to stop responding
 *   to remote requests.
 */
fulcro.client.impl.application.send_payload = (function fulcro$client$impl$application$send_payload(network,payload,send_complete){
var map__46564 = payload;
var map__46564__$1 = ((((!((map__46564 == null)))?((((map__46564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46564):map__46564);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46564__$1,cljs.core.cst$kw$query);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46564__$1,cljs.core.cst$kw$on_DASH_load);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46564__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46564__$1,cljs.core.cst$kw$load_DASH_descriptors);
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__46564,map__46564__$1,query,on_load,on_error,load_descriptors){
return (function (p1__46562_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__46562_SHARP_,load_descriptors) : on_load.call(null,p1__46562_SHARP_,load_descriptors));
});})(map__46564,map__46564__$1,query,on_load,on_error,load_descriptors))
:on_load);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__46564,map__46564__$1,query,on_load,on_error,load_descriptors,merge_data,on_update){
return (function (p1__46563_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__46563_SHARP_,load_descriptors) : on_error.call(null,p1__46563_SHARP_,load_descriptors));
});})(map__46564,map__46564__$1,query,on_load,on_error,load_descriptors,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,on_error__$1);
var on_done = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,merge_data);
return fulcro.client.impl.application.real_send(network,query,on_done,on_error__$2,on_update);
});
fulcro.client.impl.application.is_sequential_QMARK_ = (function fulcro$client$impl$application$is_sequential_QMARK_(network){
if(((!((network == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$NetworkBehavior$)))?true:false):false)){
return fulcro.client.network.serialize_requests_QMARK_(network);
} else {
return true;
}
});
/**
 * Starts a async go loop that sends network requests on a networking object's request queue. Must be called once and only
 *   once for each active networking object on the UI. Each iteration of the loop pulls off a
 *   single request, sends it, waits for the response, and then repeats. Gives the appearance of a separate networking
 *   'thread' using core async.
 */
fulcro.client.impl.application.start_network_sequential_processing = (function fulcro$client$impl$application$start_network_sequential_processing(p__46581){
var map__46582 = p__46581;
var map__46582__$1 = ((((!((map__46582 == null)))?((((map__46582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46582):map__46582);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46582__$1,cljs.core.cst$kw$networking);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46582__$1,cljs.core.cst$kw$send_DASH_queues);
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46582__$1,cljs.core.cst$kw$response_DASH_channels);
var seq__46588 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__46589 = null;
var count__46590 = (0);
var i__46591 = (0);
while(true){
if((i__46591 < count__46590)){
var remote = chunk__46589.cljs$core$IIndexed$_nth$arity$2(null,i__46591);
var queue_46705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__46707 = fulcro.client.impl.application.is_sequential_QMARK_(network_46706);
var response_channel_46708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_46709 = (cljs.core.truth_(sequential_QMARK__46707)?((function (seq__46588,chunk__46589,count__46590,i__46591,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,remote,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (){
var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto__,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,remote,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto__,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,remote,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (state_46596){
var state_val_46597 = (state_46596[(1)]);
if((state_val_46597 === (1))){
var state_46596__$1 = state_46596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46596__$1,(2),response_channel_46708,cljs.core.cst$kw$complete);
} else {
if((state_val_46597 === (2))){
var inst_46594 = (state_46596[(2)]);
var state_46596__$1 = state_46596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46596__$1,inst_46594);
} else {
return null;
}
}
});})(seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto__,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,remote,map__46582,map__46582__$1,networking,send_queues,response_channels))
;
return ((function (seq__46588,chunk__46589,count__46590,i__46591,switch__24124__auto__,c__28612__auto__,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,remote,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0 = (function (){
var statearr_46603 = [null,null,null,null,null,null,null];
(statearr_46603[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__);

(statearr_46603[(1)] = (1));

return statearr_46603;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1 = (function (state_46596){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_46596);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e46608){if((e46608 instanceof Object)){
var ex__24128__auto__ = e46608;
var statearr_46609_46715 = state_46596;
(statearr_46609_46715[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46596);

return cljs.core.cst$kw$recur;
} else {
throw e46608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__46722 = state_46596;
state_46596 = G__46722;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__ = function(state_46596){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1.call(this,state_46596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__;
})()
;})(seq__46588,chunk__46589,count__46590,i__46591,switch__24124__auto__,c__28612__auto__,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,remote,map__46582,map__46582__$1,networking,send_queues,response_channels))
})();
var state__28614__auto__ = (function (){var statearr_46610 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_46610[(6)] = c__28612__auto__);

return statearr_46610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto__,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,remote,map__46582,map__46582__$1,networking,send_queues,response_channels))
);

return c__28612__auto__;
});})(seq__46588,chunk__46589,count__46590,i__46591,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,remote,map__46582,map__46582__$1,networking,send_queues,response_channels))
:cljs.core.identity);
var c__28612__auto___46723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto___46723,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,send_complete_46709,remote,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto___46723,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,send_complete_46709,remote,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (state_46628){
var state_val_46629 = (state_46628[(1)]);
if((state_val_46629 === (1))){
var state_46628__$1 = state_46628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46628__$1,(2),queue_46705);
} else {
if((state_val_46629 === (2))){
var inst_46612 = (state_46628[(2)]);
var inst_46613 = inst_46612;
var state_46628__$1 = (function (){var statearr_46630 = state_46628;
(statearr_46630[(7)] = inst_46613);

return statearr_46630;
})();
var statearr_46631_46724 = state_46628__$1;
(statearr_46631_46724[(2)] = null);

(statearr_46631_46724[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46629 === (3))){
var inst_46613 = (state_46628[(7)]);
var inst_46615 = fulcro.client.impl.application.send_payload(network_46706,inst_46613,send_complete_46709);
var state_46628__$1 = (function (){var statearr_46632 = state_46628;
(statearr_46632[(8)] = inst_46615);

return statearr_46632;
})();
if(cljs.core.truth_(sequential_QMARK__46707)){
var statearr_46633_46726 = state_46628__$1;
(statearr_46633_46726[(1)] = (5));

} else {
var statearr_46634_46728 = state_46628__$1;
(statearr_46634_46728[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46629 === (4))){
var inst_46626 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46628__$1,inst_46626);
} else {
if((state_val_46629 === (5))){
var state_46628__$1 = state_46628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46628__$1,(8),response_channel_46708);
} else {
if((state_val_46629 === (6))){
var state_46628__$1 = state_46628;
var statearr_46635_46729 = state_46628__$1;
(statearr_46635_46729[(2)] = null);

(statearr_46635_46729[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46629 === (7))){
var inst_46621 = (state_46628[(2)]);
var state_46628__$1 = (function (){var statearr_46640 = state_46628;
(statearr_46640[(9)] = inst_46621);

return statearr_46640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46628__$1,(9),queue_46705);
} else {
if((state_val_46629 === (8))){
var inst_46618 = (state_46628[(2)]);
var state_46628__$1 = state_46628;
var statearr_46641_46730 = state_46628__$1;
(statearr_46641_46730[(2)] = inst_46618);

(statearr_46641_46730[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46629 === (9))){
var inst_46623 = (state_46628[(2)]);
var inst_46613 = inst_46623;
var state_46628__$1 = (function (){var statearr_46642 = state_46628;
(statearr_46642[(7)] = inst_46613);

return statearr_46642;
})();
var statearr_46644_46733 = state_46628__$1;
(statearr_46644_46733[(2)] = null);

(statearr_46644_46733[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto___46723,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,send_complete_46709,remote,map__46582,map__46582__$1,networking,send_queues,response_channels))
;
return ((function (seq__46588,chunk__46589,count__46590,i__46591,switch__24124__auto__,c__28612__auto___46723,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,send_complete_46709,remote,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0 = (function (){
var statearr_46646 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46646[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__);

(statearr_46646[(1)] = (1));

return statearr_46646;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1 = (function (state_46628){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_46628);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e46647){if((e46647 instanceof Object)){
var ex__24128__auto__ = e46647;
var statearr_46648_46734 = state_46628;
(statearr_46648_46734[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46628);

return cljs.core.cst$kw$recur;
} else {
throw e46647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__46740 = state_46628;
state_46628 = G__46740;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__ = function(state_46628){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1.call(this,state_46628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__;
})()
;})(seq__46588,chunk__46589,count__46590,i__46591,switch__24124__auto__,c__28612__auto___46723,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,send_complete_46709,remote,map__46582,map__46582__$1,networking,send_queues,response_channels))
})();
var state__28614__auto__ = (function (){var statearr_46649 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_46649[(6)] = c__28612__auto___46723);

return statearr_46649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto___46723,queue_46705,network_46706,sequential_QMARK__46707,response_channel_46708,send_complete_46709,remote,map__46582,map__46582__$1,networking,send_queues,response_channels))
);


var G__46741 = seq__46588;
var G__46742 = chunk__46589;
var G__46743 = count__46590;
var G__46744 = (i__46591 + (1));
seq__46588 = G__46741;
chunk__46589 = G__46742;
count__46590 = G__46743;
i__46591 = G__46744;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__46588);
if(temp__5459__auto__){
var seq__46588__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46588__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__46588__$1);
var G__46745 = cljs.core.chunk_rest(seq__46588__$1);
var G__46746 = c__11343__auto__;
var G__46747 = cljs.core.count(c__11343__auto__);
var G__46748 = (0);
seq__46588 = G__46745;
chunk__46589 = G__46746;
count__46590 = G__46747;
i__46591 = G__46748;
continue;
} else {
var remote = cljs.core.first(seq__46588__$1);
var queue_46749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__46751 = fulcro.client.impl.application.is_sequential_QMARK_(network_46750);
var response_channel_46752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_46753 = (cljs.core.truth_(sequential_QMARK__46751)?((function (seq__46588,chunk__46589,count__46590,i__46591,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (){
var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto__,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto__,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (state_46654){
var state_val_46655 = (state_46654[(1)]);
if((state_val_46655 === (1))){
var state_46654__$1 = state_46654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46654__$1,(2),response_channel_46752,cljs.core.cst$kw$complete);
} else {
if((state_val_46655 === (2))){
var inst_46652 = (state_46654[(2)]);
var state_46654__$1 = state_46654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46654__$1,inst_46652);
} else {
return null;
}
}
});})(seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto__,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels))
;
return ((function (seq__46588,chunk__46589,count__46590,i__46591,switch__24124__auto__,c__28612__auto__,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0 = (function (){
var statearr_46664 = [null,null,null,null,null,null,null];
(statearr_46664[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__);

(statearr_46664[(1)] = (1));

return statearr_46664;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1 = (function (state_46654){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_46654);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e46665){if((e46665 instanceof Object)){
var ex__24128__auto__ = e46665;
var statearr_46666_46759 = state_46654;
(statearr_46666_46759[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46654);

return cljs.core.cst$kw$recur;
} else {
throw e46665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__46760 = state_46654;
state_46654 = G__46760;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__ = function(state_46654){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1.call(this,state_46654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__;
})()
;})(seq__46588,chunk__46589,count__46590,i__46591,switch__24124__auto__,c__28612__auto__,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels))
})();
var state__28614__auto__ = (function (){var statearr_46667 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_46667[(6)] = c__28612__auto__);

return statearr_46667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto__,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels))
);

return c__28612__auto__;
});})(seq__46588,chunk__46589,count__46590,i__46591,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels))
:cljs.core.identity);
var c__28612__auto___46761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto___46761,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,send_complete_46753,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto___46761,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,send_complete_46753,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function (state_46685){
var state_val_46686 = (state_46685[(1)]);
if((state_val_46686 === (1))){
var state_46685__$1 = state_46685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46685__$1,(2),queue_46749);
} else {
if((state_val_46686 === (2))){
var inst_46669 = (state_46685[(2)]);
var inst_46670 = inst_46669;
var state_46685__$1 = (function (){var statearr_46687 = state_46685;
(statearr_46687[(7)] = inst_46670);

return statearr_46687;
})();
var statearr_46688_46768 = state_46685__$1;
(statearr_46688_46768[(2)] = null);

(statearr_46688_46768[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46686 === (3))){
var inst_46670 = (state_46685[(7)]);
var inst_46672 = fulcro.client.impl.application.send_payload(network_46750,inst_46670,send_complete_46753);
var state_46685__$1 = (function (){var statearr_46689 = state_46685;
(statearr_46689[(8)] = inst_46672);

return statearr_46689;
})();
if(cljs.core.truth_(sequential_QMARK__46751)){
var statearr_46690_46769 = state_46685__$1;
(statearr_46690_46769[(1)] = (5));

} else {
var statearr_46691_46770 = state_46685__$1;
(statearr_46691_46770[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46686 === (4))){
var inst_46683 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46685__$1,inst_46683);
} else {
if((state_val_46686 === (5))){
var state_46685__$1 = state_46685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46685__$1,(8),response_channel_46752);
} else {
if((state_val_46686 === (6))){
var state_46685__$1 = state_46685;
var statearr_46693_46771 = state_46685__$1;
(statearr_46693_46771[(2)] = null);

(statearr_46693_46771[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46686 === (7))){
var inst_46678 = (state_46685[(2)]);
var state_46685__$1 = (function (){var statearr_46694 = state_46685;
(statearr_46694[(9)] = inst_46678);

return statearr_46694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46685__$1,(9),queue_46749);
} else {
if((state_val_46686 === (8))){
var inst_46675 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
var statearr_46695_46772 = state_46685__$1;
(statearr_46695_46772[(2)] = inst_46675);

(statearr_46695_46772[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46686 === (9))){
var inst_46680 = (state_46685[(2)]);
var inst_46670 = inst_46680;
var state_46685__$1 = (function (){var statearr_46696 = state_46685;
(statearr_46696[(7)] = inst_46670);

return statearr_46696;
})();
var statearr_46697_46773 = state_46685__$1;
(statearr_46697_46773[(2)] = null);

(statearr_46697_46773[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto___46761,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,send_complete_46753,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels))
;
return ((function (seq__46588,chunk__46589,count__46590,i__46591,switch__24124__auto__,c__28612__auto___46761,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,send_complete_46753,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0 = (function (){
var statearr_46698 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46698[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__);

(statearr_46698[(1)] = (1));

return statearr_46698;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1 = (function (state_46685){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_46685);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e46699){if((e46699 instanceof Object)){
var ex__24128__auto__ = e46699;
var statearr_46700_46779 = state_46685;
(statearr_46700_46779[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46685);

return cljs.core.cst$kw$recur;
} else {
throw e46699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__46780 = state_46685;
state_46685 = G__46780;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__ = function(state_46685){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1.call(this,state_46685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__24125__auto__;
})()
;})(seq__46588,chunk__46589,count__46590,i__46591,switch__24124__auto__,c__28612__auto___46761,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,send_complete_46753,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels))
})();
var state__28614__auto__ = (function (){var statearr_46704 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_46704[(6)] = c__28612__auto___46761);

return statearr_46704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(seq__46588,chunk__46589,count__46590,i__46591,c__28612__auto___46761,queue_46749,network_46750,sequential_QMARK__46751,response_channel_46752,send_complete_46753,remote,seq__46588__$1,temp__5459__auto__,map__46582,map__46582__$1,networking,send_queues,response_channels))
);


var G__46781 = cljs.core.next(seq__46588__$1);
var G__46782 = null;
var G__46783 = (0);
var G__46784 = (0);
seq__46588 = G__46781;
chunk__46589 = G__46782;
count__46590 = G__46783;
i__46591 = G__46784;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Configure a re-render when the locale changes and also when the translations arrive from a module load.
 * During startup this function will be called once for each reconciler that is running on a page.
 */
fulcro.client.impl.application.initialize_internationalization = (function fulcro$client$impl$application$initialize_internationalization(reconciler){
var re_render = (function fulcro$client$impl$application$initialize_internationalization_$_re_render(k,r,o,n){
if(om.next.mounted_QMARK_(om.next.app_root(reconciler))){
fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$1("Forcing a UI refresh on locale change.");

return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1(reconciler);
} else {
return null;
}
});
cljs.core.remove_watch(fulcro.i18n._STAR_current_locale_STAR_,cljs.core.cst$kw$locale);

cljs.core.add_watch(fulcro.i18n._STAR_loaded_translations_STAR_,cljs.core.cst$kw$locale,re_render);

return cljs.core.add_watch(fulcro.i18n._STAR_current_locale_STAR_,cljs.core.cst$kw$locale,re_render);
});
/**
 * Remove not-found keys from m (non-recursive)
 */
fulcro.client.impl.application.sweep_one = (function fulcro$client$impl$application$sweep_one(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__46788){
var vec__46789 = p__46788;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$impl$om_DASH_plumbing_SLASH_not_DASH_found,k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$impl$om_DASH_plumbing_SLASH_not_DASH_found,v))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.application.sweep_one,m),cljs.core.meta(m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
fulcro.client.impl.application.sweep = (function fulcro$client$impl$application$sweep(m){
if(cljs.core.truth_(fulcro.client.impl.om_plumbing.leaf_QMARK_(m))){
return fulcro.client.impl.application.sweep_one(m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__46792){
var vec__46793 = p__46792;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$impl$om_DASH_plumbing_SLASH_not_DASH_found,k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$impl$om_DASH_plumbing_SLASH_not_DASH_found,v))){
return acc;
} else {
if((om.util.ident_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$impl$om_DASH_plumbing_SLASH_not_DASH_found,cljs.core.second(v)))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(fulcro.client.impl.application.sweep.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.application.sweep.cljs$core$IFn$_invoke$arity$1(v) : fulcro.client.impl.application.sweep.call(null,v)));

}
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.application.sweep,m),cljs.core.meta(m));
} else {
return m;

}
}
}
});
/**
 * Do a recursive merge of source into target, but remove any target data that is marked as missing in the response. The
 *   missing marker is generated in the source when something has been asked for in the query, but had no value in the
 *   response. This allows us to correctly remove 'empty' data from the database without accidentally removing something
 *   that may still exist on the server (in truth we don't know its status, since it wasn't asked for, but we leave
 *   it as our 'best guess')
 */
fulcro.client.impl.application.sweep_merge = (function fulcro$client$impl$application$sweep_merge(target,source){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__46802){
var vec__46803 = p__46802;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46803,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46803,(1),null);
var existing_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$fulcro$client$impl$om_DASH_plumbing_SLASH_not_DASH_found)){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.cst$kw$fulcro$client$impl$om_DASH_plumbing_SLASH_not_DASH_found)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,key);
} else {
if((om.util.ident_QMARK_(new_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$impl$om_DASH_plumbing_SLASH_not_DASH_found,cljs.core.second(new_value)))){
return acc;
} else {
if(cljs.core.truth_(fulcro.client.impl.om_plumbing.leaf_QMARK_(new_value))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,fulcro.client.impl.application.sweep_one(new_value));
} else {
if((cljs.core.map_QMARK_(existing_value)) && (cljs.core.map_QMARK_(new_value))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,key,fulcro.client.impl.application.sweep_merge,new_value);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,fulcro.client.impl.application.sweep(new_value));

}
}
}
}
}
}),target,source);
});
fulcro.client.impl.application.merge_handler = (function fulcro$client$impl$application$merge_handler(mutation_merge,target,source){
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__46809){
var vec__46810 = p__46809;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46810,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46810,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = fulcro.client.impl.application.sweep_merge(target,source_to_merge);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source_to_merge,merged_state){
return (function (acc,p__46813){
var vec__46814 = p__46813;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(1),null);
if(cljs.core.truth_((function (){var and__10400__auto__ = mutation_merge;
if(cljs.core.truth_(and__10400__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__10400__auto__;
}
})())){
var temp__5457__auto__ = (function (){var G__46817 = acc;
var G__46818 = k;
var G__46819 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$tempids);
return (mutation_merge.cljs$core$IFn$_invoke$arity$3 ? mutation_merge.cljs$core$IFn$_invoke$arity$3(G__46817,G__46818,G__46819) : mutation_merge.call(null,G__46817,G__46818,G__46819));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var updated_state = temp__5457__auto__;
return updated_state;
} else {
fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Return value handler for",k,"returned nil. Ignored."], 0));

return acc;
}
} else {
return acc;
}
});})(source_to_merge,merged_state))
,merged_state,source);
});
/**
 * The reconciler's send method calls FulcroApplication/server-send, which itself requires a reconciler with a
 *   send method already defined. This creates a catch-22 / circular dependency on the reconciler and :send field within
 *   the reconciler.
 * 
 *   To resolve the issue, we def an atom pointing to the reconciler that the send method will deref each time it is
 *   called. This allows us to define the reconciler with a send method that, at the time of initialization, has an app
 *   that points to a nil reconciler. By the end of this function, the app's reconciler reference has been properly set.
 */
fulcro.client.impl.application.generate_reconciler = (function fulcro$client$impl$application$generate_reconciler(p__46826,initial_state,parser,p__46827){
var map__46828 = p__46826;
var map__46828__$1 = ((((!((map__46828 == null)))?((((map__46828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46828):map__46828);
var app = map__46828__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46828__$1,cljs.core.cst$kw$send_DASH_queues);
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46828__$1,cljs.core.cst$kw$mutation_DASH_merge);
var map__46829 = p__46827;
var map__46829__$1 = ((((!((map__46829 == null)))?((((map__46829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46829):map__46829);
var reconciler_options = map__46829__$1;
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46829__$1,cljs.core.cst$kw$migrate);
var rec_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate){
return (function (pure,_,tempids,___$1){
var seq__46832_46840 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__46833_46841 = null;
var count__46834_46842 = (0);
var i__46835_46843 = (0);
while(true){
if((i__46835_46843 < count__46834_46842)){
var queue_46844 = chunk__46833_46841.cljs$core$IIndexed$_nth$arity$2(null,i__46835_46843);
fulcro.client.impl.om_plumbing.rewrite_tempids_in_request_queue(queue_46844,tempids);

var G__46848 = seq__46832_46840;
var G__46849 = chunk__46833_46841;
var G__46850 = count__46834_46842;
var G__46851 = (i__46835_46843 + (1));
seq__46832_46840 = G__46848;
chunk__46833_46841 = G__46849;
count__46834_46842 = G__46850;
i__46835_46843 = G__46851;
continue;
} else {
var temp__5459__auto___46852 = cljs.core.seq(seq__46832_46840);
if(temp__5459__auto___46852){
var seq__46832_46853__$1 = temp__5459__auto___46852;
if(cljs.core.chunked_seq_QMARK_(seq__46832_46853__$1)){
var c__11343__auto___46854 = cljs.core.chunk_first(seq__46832_46853__$1);
var G__46855 = cljs.core.chunk_rest(seq__46832_46853__$1);
var G__46856 = c__11343__auto___46854;
var G__46857 = cljs.core.count(c__11343__auto___46854);
var G__46858 = (0);
seq__46832_46840 = G__46855;
chunk__46833_46841 = G__46856;
count__46834_46842 = G__46857;
i__46835_46843 = G__46858;
continue;
} else {
var queue_46859 = cljs.core.first(seq__46832_46853__$1);
fulcro.client.impl.om_plumbing.rewrite_tempids_in_request_queue(queue_46859,tempids);

var G__46860 = cljs.core.next(seq__46832_46853__$1);
var G__46861 = null;
var G__46862 = (0);
var G__46863 = (0);
seq__46832_46840 = G__46860;
chunk__46833_46841 = G__46861;
count__46834_46842 = G__46862;
i__46835_46843 = G__46863;
continue;
}
} else {
}
}
break;
}

var state_migrate = (function (){var or__10412__auto__ = migrate;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return fulcro.client.impl.om_plumbing.resolve_tempids;
}
})();
return (state_migrate.cljs$core$IFn$_invoke$arity$2 ? state_migrate.cljs$core$IFn$_invoke$arity$2(pure,tempids) : state_migrate.call(null,pure,tempids));
});})(rec_atom,remotes,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate))
;
var initial_state_with_locale = (function (){var set_default_locale = ((function (rec_atom,remotes,tempid_migrate,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,cljs.core.cst$kw$ui_SLASH_locale,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.cst$kw$en));
});})(rec_atom,remotes,tempid_migrate,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate))
;
var is_atom_QMARK_ = fulcro.client.util.atom_QMARK_(initial_state);
var incoming_locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(is_atom_QMARK_)?cljs.core.deref(initial_state):initial_state),cljs.core.cst$kw$ui_SLASH_locale);
if(cljs.core.truth_(incoming_locale)){
cljs.core.reset_BANG_(fulcro.i18n._STAR_current_locale_STAR_,incoming_locale);
} else {
}

if(cljs.core.truth_(is_atom_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(initial_state,set_default_locale);

return initial_state;
} else {
return set_default_locale(initial_state);
}
})();
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,reconciler_options,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$migrate,tempid_migrate,cljs.core.cst$kw$state,initial_state_with_locale,cljs.core.cst$kw$send,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate){
return (function (tx,cb){
return fulcro.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$reconciler,cljs.core.deref(rec_atom)),tx,cb);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate))
,cljs.core.cst$kw$normalize,true,cljs.core.cst$kw$remotes,remotes,cljs.core.cst$kw$merge_DASH_ident,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.application.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate))
,cljs.core.cst$kw$merge_DASH_tree,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate){
return (function (target,source){
return fulcro.client.impl.application.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46828,map__46828__$1,app,send_queues,mutation_merge,map__46829,map__46829__$1,reconciler_options,migrate))
,cljs.core.cst$kw$parser,parser], null)], 0));
var rec = om.next.reconciler(config);
cljs.core.reset_BANG_(rec_atom,rec);

return rec;
});
fulcro.client.impl.application.initialize_global_error_callbacks = (function fulcro$client$impl$application$initialize_global_error_callbacks(app){
var seq__46876 = cljs.core.seq(cljs.core.keys(cljs.core.cst$kw$networking.cljs$core$IFn$_invoke$arity$1(app)));
var chunk__46877 = null;
var count__46878 = (0);
var i__46879 = (0);
while(true){
if((i__46879 < count__46878)){
var remote = chunk__46877.cljs$core$IIndexed$_nth$arity$2(null,i__46879);
var cb_atom_46880 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(fulcro.client.util.atom_QMARK_(cb_atom_46880))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_46880,((function (seq__46876,chunk__46877,count__46878,i__46879,cb_atom_46880,remote){
return (function (p1__46875_SHARP_){
if(cljs.core.fn_QMARK_(p1__46875_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__46875_SHARP_,om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__46876,chunk__46877,count__46878,i__46879,cb_atom_46880,remote))
);
} else {
}

var G__46881 = seq__46876;
var G__46882 = chunk__46877;
var G__46883 = count__46878;
var G__46884 = (i__46879 + (1));
seq__46876 = G__46881;
chunk__46877 = G__46882;
count__46878 = G__46883;
i__46879 = G__46884;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__46876);
if(temp__5459__auto__){
var seq__46876__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46876__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__46876__$1);
var G__46885 = cljs.core.chunk_rest(seq__46876__$1);
var G__46886 = c__11343__auto__;
var G__46887 = cljs.core.count(c__11343__auto__);
var G__46888 = (0);
seq__46876 = G__46885;
chunk__46877 = G__46886;
count__46878 = G__46887;
i__46879 = G__46888;
continue;
} else {
var remote = cljs.core.first(seq__46876__$1);
var cb_atom_46889 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(fulcro.client.util.atom_QMARK_(cb_atom_46889))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_46889,((function (seq__46876,chunk__46877,count__46878,i__46879,cb_atom_46889,remote,seq__46876__$1,temp__5459__auto__){
return (function (p1__46875_SHARP_){
if(cljs.core.fn_QMARK_(p1__46875_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__46875_SHARP_,om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__46876,chunk__46877,count__46878,i__46879,cb_atom_46889,remote,seq__46876__$1,temp__5459__auto__))
);
} else {
}

var G__46890 = cljs.core.next(seq__46876__$1);
var G__46891 = null;
var G__46892 = (0);
var G__46893 = (0);
seq__46876 = G__46890;
chunk__46877 = G__46891;
count__46878 = G__46892;
i__46879 = G__46893;
continue;
}
} else {
return null;
}
}
break;
}
});

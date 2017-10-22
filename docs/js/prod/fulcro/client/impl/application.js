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
fulcro.client.impl.application.fallback_handler = (function fulcro$client$impl$application$fallback_handler(p__46168,query){
var map__46169 = p__46168;
var map__46169__$1 = ((((!((map__46169 == null)))?((((map__46169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46169):map__46169);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46169__$1,cljs.core.cst$kw$reconciler);
return ((function (map__46169,map__46169__$1,reconciler){
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
;})(map__46169,map__46169__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
fulcro.client.impl.application.enqueue = (function fulcro$client$impl$application$enqueue(q,v){
var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto__){
return (function (state_46178){
var state_val_46179 = (state_46178[(1)]);
if((state_val_46179 === (1))){
var state_46178__$1 = state_46178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46178__$1,(2),q,v);
} else {
if((state_val_46179 === (2))){
var inst_46176 = (state_46178[(2)]);
var state_46178__$1 = state_46178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46178__$1,inst_46176);
} else {
return null;
}
}
});})(c__21855__auto__))
;
return ((function (switch__21492__auto__,c__21855__auto__){
return (function() {
var fulcro$client$impl$application$enqueue_$_state_machine__21493__auto__ = null;
var fulcro$client$impl$application$enqueue_$_state_machine__21493__auto____0 = (function (){
var statearr_46181 = [null,null,null,null,null,null,null];
(statearr_46181[(0)] = fulcro$client$impl$application$enqueue_$_state_machine__21493__auto__);

(statearr_46181[(1)] = (1));

return statearr_46181;
});
var fulcro$client$impl$application$enqueue_$_state_machine__21493__auto____1 = (function (state_46178){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_46178);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e46182){if((e46182 instanceof Object)){
var ex__21496__auto__ = e46182;
var statearr_46183_46190 = state_46178;
(statearr_46183_46190[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46178);

return cljs.core.cst$kw$recur;
} else {
throw e46182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__46191 = state_46178;
state_46178 = G__46191;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
fulcro$client$impl$application$enqueue_$_state_machine__21493__auto__ = function(state_46178){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$enqueue_$_state_machine__21493__auto____0.call(this);
case 1:
return fulcro$client$impl$application$enqueue_$_state_machine__21493__auto____1.call(this,state_46178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$enqueue_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$enqueue_$_state_machine__21493__auto____0;
fulcro$client$impl$application$enqueue_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$enqueue_$_state_machine__21493__auto____1;
return fulcro$client$impl$application$enqueue_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_46184 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_46184[(6)] = c__21855__auto__);

return statearr_46184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
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
var map__46198 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (mutation_name){
return (function (p__46199,mutation){
var map__46203 = p__46199;
var map__46203__$1 = ((((!((map__46203 == null)))?((((map__46203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46203):map__46203);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203__$1,cljs.core.cst$kw$seen);
var accumulator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203__$1,cljs.core.cst$kw$accumulator);
var current_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203__$1,cljs.core.cst$kw$current_DASH_tx);
if(cljs.core.contains_QMARK_(seen,mutation_name(mutation))){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$accumulator,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accumulator,current_tx),cljs.core.cst$kw$current_DASH_tx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mutation], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,mutation_name(mutation)),cljs.core.cst$kw$accumulator,accumulator,cljs.core.cst$kw$current_DASH_tx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_tx,mutation)], null);
}
});})(mutation_name))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$accumulator,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$current_DASH_tx,cljs.core.PersistentVector.EMPTY], null),tx);
var map__46198__$1 = ((((!((map__46198 == null)))?((((map__46198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46198):map__46198);
var accumulator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46198__$1,cljs.core.cst$kw$accumulator);
var current_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46198__$1,cljs.core.cst$kw$current_DASH_tx);
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
fulcro.client.impl.application.enqueue_mutations = (function fulcro$client$impl$application$enqueue_mutations(p__46219,remote_tx_map,cb){
var map__46220 = p__46219;
var map__46220__$1 = ((((!((map__46220 == null)))?((((map__46220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46220):map__46220);
var app = map__46220__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46220__$1,cljs.core.cst$kw$send_DASH_queues);
var seq__46224 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__46225 = null;
var count__46226 = (0);
var i__46227 = (0);
while(true){
if((i__46227 < count__46226)){
var remote = chunk__46225.cljs$core$IIndexed$_nth$arity$2(null,i__46227);
var queue_46248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_46249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var fallback_46250 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_46249);
var desired_remote_mutations_46251 = fulcro.client.impl.om_plumbing.remove_loads_and_fallbacks(full_remote_transaction_46249);
var tx_list_46252 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_46251);
var has_mutations_QMARK__46253 = ((function (seq__46224,chunk__46225,count__46226,i__46227,queue_46248,full_remote_transaction_46249,fallback_46250,desired_remote_mutations_46251,tx_list_46252,remote,map__46220,map__46220__$1,app,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__46224,chunk__46225,count__46226,i__46227,queue_46248,full_remote_transaction_46249,fallback_46250,desired_remote_mutations_46251,tx_list_46252,remote,map__46220,map__46220__$1,app,send_queues))
;
var payload_46254 = ((function (seq__46224,chunk__46225,count__46226,i__46227,queue_46248,full_remote_transaction_46249,fallback_46250,desired_remote_mutations_46251,tx_list_46252,has_mutations_QMARK__46253,remote,map__46220,map__46220__$1,app,send_queues){
return (function (tx){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,tx,cljs.core.cst$kw$on_DASH_load,cb,cljs.core.cst$kw$on_DASH_error,((function (seq__46224,chunk__46225,count__46226,i__46227,queue_46248,full_remote_transaction_46249,fallback_46250,desired_remote_mutations_46251,tx_list_46252,has_mutations_QMARK__46253,remote,map__46220,map__46220__$1,app,send_queues){
return (function (p1__46218_SHARP_){
return (fallback_46250.cljs$core$IFn$_invoke$arity$1 ? fallback_46250.cljs$core$IFn$_invoke$arity$1(p1__46218_SHARP_) : fallback_46250.call(null,p1__46218_SHARP_));
});})(seq__46224,chunk__46225,count__46226,i__46227,queue_46248,full_remote_transaction_46249,fallback_46250,desired_remote_mutations_46251,tx_list_46252,has_mutations_QMARK__46253,remote,map__46220,map__46220__$1,app,send_queues))
], null);
});})(seq__46224,chunk__46225,count__46226,i__46227,queue_46248,full_remote_transaction_46249,fallback_46250,desired_remote_mutations_46251,tx_list_46252,has_mutations_QMARK__46253,remote,map__46220,map__46220__$1,app,send_queues))
;
var seq__46228_46273 = cljs.core.seq(tx_list_46252);
var chunk__46229_46274 = null;
var count__46230_46275 = (0);
var i__46231_46276 = (0);
while(true){
if((i__46231_46276 < count__46230_46275)){
var tx_46278 = chunk__46229_46274.cljs$core$IIndexed$_nth$arity$2(null,i__46231_46276);
if(cljs.core.truth_(has_mutations_QMARK__46253(tx_46278))){
fulcro.client.impl.application.enqueue(queue_46248,payload_46254(tx_46278));
} else {
}

var G__46284 = seq__46228_46273;
var G__46285 = chunk__46229_46274;
var G__46286 = count__46230_46275;
var G__46287 = (i__46231_46276 + (1));
seq__46228_46273 = G__46284;
chunk__46229_46274 = G__46285;
count__46230_46275 = G__46286;
i__46231_46276 = G__46287;
continue;
} else {
var temp__5459__auto___46288 = cljs.core.seq(seq__46228_46273);
if(temp__5459__auto___46288){
var seq__46228_46289__$1 = temp__5459__auto___46288;
if(cljs.core.chunked_seq_QMARK_(seq__46228_46289__$1)){
var c__11343__auto___46290 = cljs.core.chunk_first(seq__46228_46289__$1);
var G__46291 = cljs.core.chunk_rest(seq__46228_46289__$1);
var G__46292 = c__11343__auto___46290;
var G__46293 = cljs.core.count(c__11343__auto___46290);
var G__46294 = (0);
seq__46228_46273 = G__46291;
chunk__46229_46274 = G__46292;
count__46230_46275 = G__46293;
i__46231_46276 = G__46294;
continue;
} else {
var tx_46295 = cljs.core.first(seq__46228_46289__$1);
if(cljs.core.truth_(has_mutations_QMARK__46253(tx_46295))){
fulcro.client.impl.application.enqueue(queue_46248,payload_46254(tx_46295));
} else {
}

var G__46296 = cljs.core.next(seq__46228_46289__$1);
var G__46297 = null;
var G__46298 = (0);
var G__46299 = (0);
seq__46228_46273 = G__46296;
chunk__46229_46274 = G__46297;
count__46230_46275 = G__46298;
i__46231_46276 = G__46299;
continue;
}
} else {
}
}
break;
}

var G__46300 = seq__46224;
var G__46301 = chunk__46225;
var G__46302 = count__46226;
var G__46303 = (i__46227 + (1));
seq__46224 = G__46300;
chunk__46225 = G__46301;
count__46226 = G__46302;
i__46227 = G__46303;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__46224);
if(temp__5459__auto__){
var seq__46224__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46224__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__46224__$1);
var G__46309 = cljs.core.chunk_rest(seq__46224__$1);
var G__46310 = c__11343__auto__;
var G__46311 = cljs.core.count(c__11343__auto__);
var G__46312 = (0);
seq__46224 = G__46309;
chunk__46225 = G__46310;
count__46226 = G__46311;
i__46227 = G__46312;
continue;
} else {
var remote = cljs.core.first(seq__46224__$1);
var queue_46313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_46314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var fallback_46315 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_46314);
var desired_remote_mutations_46316 = fulcro.client.impl.om_plumbing.remove_loads_and_fallbacks(full_remote_transaction_46314);
var tx_list_46317 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_46316);
var has_mutations_QMARK__46318 = ((function (seq__46224,chunk__46225,count__46226,i__46227,queue_46313,full_remote_transaction_46314,fallback_46315,desired_remote_mutations_46316,tx_list_46317,remote,seq__46224__$1,temp__5459__auto__,map__46220,map__46220__$1,app,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__46224,chunk__46225,count__46226,i__46227,queue_46313,full_remote_transaction_46314,fallback_46315,desired_remote_mutations_46316,tx_list_46317,remote,seq__46224__$1,temp__5459__auto__,map__46220,map__46220__$1,app,send_queues))
;
var payload_46319 = ((function (seq__46224,chunk__46225,count__46226,i__46227,queue_46313,full_remote_transaction_46314,fallback_46315,desired_remote_mutations_46316,tx_list_46317,has_mutations_QMARK__46318,remote,seq__46224__$1,temp__5459__auto__,map__46220,map__46220__$1,app,send_queues){
return (function (tx){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,tx,cljs.core.cst$kw$on_DASH_load,cb,cljs.core.cst$kw$on_DASH_error,((function (seq__46224,chunk__46225,count__46226,i__46227,queue_46313,full_remote_transaction_46314,fallback_46315,desired_remote_mutations_46316,tx_list_46317,has_mutations_QMARK__46318,remote,seq__46224__$1,temp__5459__auto__,map__46220,map__46220__$1,app,send_queues){
return (function (p1__46218_SHARP_){
return (fallback_46315.cljs$core$IFn$_invoke$arity$1 ? fallback_46315.cljs$core$IFn$_invoke$arity$1(p1__46218_SHARP_) : fallback_46315.call(null,p1__46218_SHARP_));
});})(seq__46224,chunk__46225,count__46226,i__46227,queue_46313,full_remote_transaction_46314,fallback_46315,desired_remote_mutations_46316,tx_list_46317,has_mutations_QMARK__46318,remote,seq__46224__$1,temp__5459__auto__,map__46220,map__46220__$1,app,send_queues))
], null);
});})(seq__46224,chunk__46225,count__46226,i__46227,queue_46313,full_remote_transaction_46314,fallback_46315,desired_remote_mutations_46316,tx_list_46317,has_mutations_QMARK__46318,remote,seq__46224__$1,temp__5459__auto__,map__46220,map__46220__$1,app,send_queues))
;
var seq__46237_46327 = cljs.core.seq(tx_list_46317);
var chunk__46238_46328 = null;
var count__46239_46329 = (0);
var i__46240_46330 = (0);
while(true){
if((i__46240_46330 < count__46239_46329)){
var tx_46332 = chunk__46238_46328.cljs$core$IIndexed$_nth$arity$2(null,i__46240_46330);
if(cljs.core.truth_(has_mutations_QMARK__46318(tx_46332))){
fulcro.client.impl.application.enqueue(queue_46313,payload_46319(tx_46332));
} else {
}

var G__46339 = seq__46237_46327;
var G__46340 = chunk__46238_46328;
var G__46341 = count__46239_46329;
var G__46342 = (i__46240_46330 + (1));
seq__46237_46327 = G__46339;
chunk__46238_46328 = G__46340;
count__46239_46329 = G__46341;
i__46240_46330 = G__46342;
continue;
} else {
var temp__5459__auto___46343__$1 = cljs.core.seq(seq__46237_46327);
if(temp__5459__auto___46343__$1){
var seq__46237_46345__$1 = temp__5459__auto___46343__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46237_46345__$1)){
var c__11343__auto___46346 = cljs.core.chunk_first(seq__46237_46345__$1);
var G__46347 = cljs.core.chunk_rest(seq__46237_46345__$1);
var G__46348 = c__11343__auto___46346;
var G__46349 = cljs.core.count(c__11343__auto___46346);
var G__46350 = (0);
seq__46237_46327 = G__46347;
chunk__46238_46328 = G__46348;
count__46239_46329 = G__46349;
i__46240_46330 = G__46350;
continue;
} else {
var tx_46351 = cljs.core.first(seq__46237_46345__$1);
if(cljs.core.truth_(has_mutations_QMARK__46318(tx_46351))){
fulcro.client.impl.application.enqueue(queue_46313,payload_46319(tx_46351));
} else {
}

var G__46352 = cljs.core.next(seq__46237_46345__$1);
var G__46353 = null;
var G__46354 = (0);
var G__46355 = (0);
seq__46237_46327 = G__46352;
chunk__46238_46328 = G__46353;
count__46239_46329 = G__46354;
i__46240_46330 = G__46355;
continue;
}
} else {
}
}
break;
}

var G__46356 = cljs.core.next(seq__46224__$1);
var G__46357 = null;
var G__46358 = (0);
var G__46359 = (0);
seq__46224 = G__46356;
chunk__46225 = G__46357;
count__46226 = G__46358;
i__46227 = G__46359;
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
fulcro.client.impl.application.enqueue_reads = (function fulcro$client$impl$application$enqueue_reads(p__46362){
var map__46363 = p__46362;
var map__46363__$1 = ((((!((map__46363 == null)))?((((map__46363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46363):map__46363);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46363__$1,cljs.core.cst$kw$send_DASH_queues);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46363__$1,cljs.core.cst$kw$reconciler);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46363__$1,cljs.core.cst$kw$networking);
var seq__46365 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__46366 = null;
var count__46367 = (0);
var i__46368 = (0);
while(true){
if((i__46368 < count__46367)){
var remote = chunk__46366.cljs$core$IIndexed$_nth$arity$2(null,i__46368);
var queue_46407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_46409 = fulcro.client.impl.data_fetch.mark_parallel_loading(remote,reconciler);
var seq__46369_46410 = cljs.core.seq(parallel_payload_46409);
var chunk__46370_46411 = null;
var count__46371_46412 = (0);
var i__46372_46413 = (0);
while(true){
if((i__46372_46413 < count__46371_46412)){
var map__46373_46415 = chunk__46370_46411.cljs$core$IIndexed$_nth$arity$2(null,i__46372_46413);
var map__46373_46416__$1 = ((((!((map__46373_46415 == null)))?((((map__46373_46415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46373_46415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46373_46415):map__46373_46415);
var query_46417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46373_46416__$1,cljs.core.cst$kw$query);
var on_load_46418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46373_46416__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46373_46416__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46373_46416__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46422 = ((function (seq__46369_46410,chunk__46370_46411,count__46371_46412,i__46372_46413,seq__46365,chunk__46366,count__46367,i__46368,map__46373_46415,map__46373_46416__$1,query_46417,on_load_46418,on_error_46419,load_descriptors_46420,queue_46407,network_46408,parallel_payload_46409,remote,map__46363,map__46363__$1,send_queues,reconciler,networking){
return (function (p1__46360_SHARP_){
return (on_load_46418.cljs$core$IFn$_invoke$arity$2 ? on_load_46418.cljs$core$IFn$_invoke$arity$2(p1__46360_SHARP_,load_descriptors_46420) : on_load_46418.call(null,p1__46360_SHARP_,load_descriptors_46420));
});})(seq__46369_46410,chunk__46370_46411,count__46371_46412,i__46372_46413,seq__46365,chunk__46366,count__46367,i__46368,map__46373_46415,map__46373_46416__$1,query_46417,on_load_46418,on_error_46419,load_descriptors_46420,queue_46407,network_46408,parallel_payload_46409,remote,map__46363,map__46363__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46423 = ((function (seq__46369_46410,chunk__46370_46411,count__46371_46412,i__46372_46413,seq__46365,chunk__46366,count__46367,i__46368,on_load_SINGLEQUOTE__46422,map__46373_46415,map__46373_46416__$1,query_46417,on_load_46418,on_error_46419,load_descriptors_46420,queue_46407,network_46408,parallel_payload_46409,remote,map__46363,map__46363__$1,send_queues,reconciler,networking){
return (function (p1__46361_SHARP_){
return (on_error_46419.cljs$core$IFn$_invoke$arity$2 ? on_error_46419.cljs$core$IFn$_invoke$arity$2(p1__46361_SHARP_,load_descriptors_46420) : on_error_46419.call(null,p1__46361_SHARP_,load_descriptors_46420));
});})(seq__46369_46410,chunk__46370_46411,count__46371_46412,i__46372_46413,seq__46365,chunk__46366,count__46367,i__46368,on_load_SINGLEQUOTE__46422,map__46373_46415,map__46373_46416__$1,query_46417,on_load_46418,on_error_46419,load_descriptors_46420,queue_46407,network_46408,parallel_payload_46409,remote,map__46363,map__46363__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_46408,query_46417,on_load_SINGLEQUOTE__46422,on_error_SINGLEQUOTE__46423,null);

var G__46427 = seq__46369_46410;
var G__46428 = chunk__46370_46411;
var G__46429 = count__46371_46412;
var G__46430 = (i__46372_46413 + (1));
seq__46369_46410 = G__46427;
chunk__46370_46411 = G__46428;
count__46371_46412 = G__46429;
i__46372_46413 = G__46430;
continue;
} else {
var temp__5459__auto___46431 = cljs.core.seq(seq__46369_46410);
if(temp__5459__auto___46431){
var seq__46369_46432__$1 = temp__5459__auto___46431;
if(cljs.core.chunked_seq_QMARK_(seq__46369_46432__$1)){
var c__11343__auto___46433 = cljs.core.chunk_first(seq__46369_46432__$1);
var G__46434 = cljs.core.chunk_rest(seq__46369_46432__$1);
var G__46435 = c__11343__auto___46433;
var G__46436 = cljs.core.count(c__11343__auto___46433);
var G__46437 = (0);
seq__46369_46410 = G__46434;
chunk__46370_46411 = G__46435;
count__46371_46412 = G__46436;
i__46372_46413 = G__46437;
continue;
} else {
var map__46378_46438 = cljs.core.first(seq__46369_46432__$1);
var map__46378_46439__$1 = ((((!((map__46378_46438 == null)))?((((map__46378_46438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46378_46438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46378_46438):map__46378_46438);
var query_46440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378_46439__$1,cljs.core.cst$kw$query);
var on_load_46441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378_46439__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378_46439__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46378_46439__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46449 = ((function (seq__46369_46410,chunk__46370_46411,count__46371_46412,i__46372_46413,seq__46365,chunk__46366,count__46367,i__46368,map__46378_46438,map__46378_46439__$1,query_46440,on_load_46441,on_error_46442,load_descriptors_46443,seq__46369_46432__$1,temp__5459__auto___46431,queue_46407,network_46408,parallel_payload_46409,remote,map__46363,map__46363__$1,send_queues,reconciler,networking){
return (function (p1__46360_SHARP_){
return (on_load_46441.cljs$core$IFn$_invoke$arity$2 ? on_load_46441.cljs$core$IFn$_invoke$arity$2(p1__46360_SHARP_,load_descriptors_46443) : on_load_46441.call(null,p1__46360_SHARP_,load_descriptors_46443));
});})(seq__46369_46410,chunk__46370_46411,count__46371_46412,i__46372_46413,seq__46365,chunk__46366,count__46367,i__46368,map__46378_46438,map__46378_46439__$1,query_46440,on_load_46441,on_error_46442,load_descriptors_46443,seq__46369_46432__$1,temp__5459__auto___46431,queue_46407,network_46408,parallel_payload_46409,remote,map__46363,map__46363__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46450 = ((function (seq__46369_46410,chunk__46370_46411,count__46371_46412,i__46372_46413,seq__46365,chunk__46366,count__46367,i__46368,on_load_SINGLEQUOTE__46449,map__46378_46438,map__46378_46439__$1,query_46440,on_load_46441,on_error_46442,load_descriptors_46443,seq__46369_46432__$1,temp__5459__auto___46431,queue_46407,network_46408,parallel_payload_46409,remote,map__46363,map__46363__$1,send_queues,reconciler,networking){
return (function (p1__46361_SHARP_){
return (on_error_46442.cljs$core$IFn$_invoke$arity$2 ? on_error_46442.cljs$core$IFn$_invoke$arity$2(p1__46361_SHARP_,load_descriptors_46443) : on_error_46442.call(null,p1__46361_SHARP_,load_descriptors_46443));
});})(seq__46369_46410,chunk__46370_46411,count__46371_46412,i__46372_46413,seq__46365,chunk__46366,count__46367,i__46368,on_load_SINGLEQUOTE__46449,map__46378_46438,map__46378_46439__$1,query_46440,on_load_46441,on_error_46442,load_descriptors_46443,seq__46369_46432__$1,temp__5459__auto___46431,queue_46407,network_46408,parallel_payload_46409,remote,map__46363,map__46363__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_46408,query_46440,on_load_SINGLEQUOTE__46449,on_error_SINGLEQUOTE__46450,null);

var G__46458 = cljs.core.next(seq__46369_46432__$1);
var G__46459 = null;
var G__46460 = (0);
var G__46461 = (0);
seq__46369_46410 = G__46458;
chunk__46370_46411 = G__46459;
count__46371_46412 = G__46460;
i__46372_46413 = G__46461;
continue;
}
} else {
}
}
break;
}

var fetch_payload_46462 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_46462)){
fulcro.client.impl.application.enqueue(queue_46407,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_46462,cljs.core.cst$kw$networking,network_46408));

var G__46465 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_46462 = G__46465;
continue;
} else {
}
break;
}

var G__46466 = seq__46365;
var G__46467 = chunk__46366;
var G__46468 = count__46367;
var G__46469 = (i__46368 + (1));
seq__46365 = G__46466;
chunk__46366 = G__46467;
count__46367 = G__46468;
i__46368 = G__46469;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__46365);
if(temp__5459__auto__){
var seq__46365__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46365__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__46365__$1);
var G__46470 = cljs.core.chunk_rest(seq__46365__$1);
var G__46471 = c__11343__auto__;
var G__46472 = cljs.core.count(c__11343__auto__);
var G__46473 = (0);
seq__46365 = G__46470;
chunk__46366 = G__46471;
count__46367 = G__46472;
i__46368 = G__46473;
continue;
} else {
var remote = cljs.core.first(seq__46365__$1);
var queue_46474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_46476 = fulcro.client.impl.data_fetch.mark_parallel_loading(remote,reconciler);
var seq__46385_46477 = cljs.core.seq(parallel_payload_46476);
var chunk__46386_46478 = null;
var count__46387_46479 = (0);
var i__46388_46480 = (0);
while(true){
if((i__46388_46480 < count__46387_46479)){
var map__46389_46483 = chunk__46386_46478.cljs$core$IIndexed$_nth$arity$2(null,i__46388_46480);
var map__46389_46484__$1 = ((((!((map__46389_46483 == null)))?((((map__46389_46483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46389_46483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46389_46483):map__46389_46483);
var query_46485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46389_46484__$1,cljs.core.cst$kw$query);
var on_load_46486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46389_46484__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46389_46484__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46389_46484__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46494 = ((function (seq__46385_46477,chunk__46386_46478,count__46387_46479,i__46388_46480,seq__46365,chunk__46366,count__46367,i__46368,map__46389_46483,map__46389_46484__$1,query_46485,on_load_46486,on_error_46487,load_descriptors_46488,queue_46474,network_46475,parallel_payload_46476,remote,seq__46365__$1,temp__5459__auto__,map__46363,map__46363__$1,send_queues,reconciler,networking){
return (function (p1__46360_SHARP_){
return (on_load_46486.cljs$core$IFn$_invoke$arity$2 ? on_load_46486.cljs$core$IFn$_invoke$arity$2(p1__46360_SHARP_,load_descriptors_46488) : on_load_46486.call(null,p1__46360_SHARP_,load_descriptors_46488));
});})(seq__46385_46477,chunk__46386_46478,count__46387_46479,i__46388_46480,seq__46365,chunk__46366,count__46367,i__46368,map__46389_46483,map__46389_46484__$1,query_46485,on_load_46486,on_error_46487,load_descriptors_46488,queue_46474,network_46475,parallel_payload_46476,remote,seq__46365__$1,temp__5459__auto__,map__46363,map__46363__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46495 = ((function (seq__46385_46477,chunk__46386_46478,count__46387_46479,i__46388_46480,seq__46365,chunk__46366,count__46367,i__46368,on_load_SINGLEQUOTE__46494,map__46389_46483,map__46389_46484__$1,query_46485,on_load_46486,on_error_46487,load_descriptors_46488,queue_46474,network_46475,parallel_payload_46476,remote,seq__46365__$1,temp__5459__auto__,map__46363,map__46363__$1,send_queues,reconciler,networking){
return (function (p1__46361_SHARP_){
return (on_error_46487.cljs$core$IFn$_invoke$arity$2 ? on_error_46487.cljs$core$IFn$_invoke$arity$2(p1__46361_SHARP_,load_descriptors_46488) : on_error_46487.call(null,p1__46361_SHARP_,load_descriptors_46488));
});})(seq__46385_46477,chunk__46386_46478,count__46387_46479,i__46388_46480,seq__46365,chunk__46366,count__46367,i__46368,on_load_SINGLEQUOTE__46494,map__46389_46483,map__46389_46484__$1,query_46485,on_load_46486,on_error_46487,load_descriptors_46488,queue_46474,network_46475,parallel_payload_46476,remote,seq__46365__$1,temp__5459__auto__,map__46363,map__46363__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_46475,query_46485,on_load_SINGLEQUOTE__46494,on_error_SINGLEQUOTE__46495,null);

var G__46496 = seq__46385_46477;
var G__46497 = chunk__46386_46478;
var G__46498 = count__46387_46479;
var G__46499 = (i__46388_46480 + (1));
seq__46385_46477 = G__46496;
chunk__46386_46478 = G__46497;
count__46387_46479 = G__46498;
i__46388_46480 = G__46499;
continue;
} else {
var temp__5459__auto___46500__$1 = cljs.core.seq(seq__46385_46477);
if(temp__5459__auto___46500__$1){
var seq__46385_46501__$1 = temp__5459__auto___46500__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46385_46501__$1)){
var c__11343__auto___46502 = cljs.core.chunk_first(seq__46385_46501__$1);
var G__46503 = cljs.core.chunk_rest(seq__46385_46501__$1);
var G__46504 = c__11343__auto___46502;
var G__46505 = cljs.core.count(c__11343__auto___46502);
var G__46506 = (0);
seq__46385_46477 = G__46503;
chunk__46386_46478 = G__46504;
count__46387_46479 = G__46505;
i__46388_46480 = G__46506;
continue;
} else {
var map__46395_46509 = cljs.core.first(seq__46385_46501__$1);
var map__46395_46510__$1 = ((((!((map__46395_46509 == null)))?((((map__46395_46509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46395_46509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46395_46509):map__46395_46509);
var query_46511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46395_46510__$1,cljs.core.cst$kw$query);
var on_load_46512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46395_46510__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46395_46510__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46395_46510__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46518 = ((function (seq__46385_46477,chunk__46386_46478,count__46387_46479,i__46388_46480,seq__46365,chunk__46366,count__46367,i__46368,map__46395_46509,map__46395_46510__$1,query_46511,on_load_46512,on_error_46513,load_descriptors_46514,seq__46385_46501__$1,temp__5459__auto___46500__$1,queue_46474,network_46475,parallel_payload_46476,remote,seq__46365__$1,temp__5459__auto__,map__46363,map__46363__$1,send_queues,reconciler,networking){
return (function (p1__46360_SHARP_){
return (on_load_46512.cljs$core$IFn$_invoke$arity$2 ? on_load_46512.cljs$core$IFn$_invoke$arity$2(p1__46360_SHARP_,load_descriptors_46514) : on_load_46512.call(null,p1__46360_SHARP_,load_descriptors_46514));
});})(seq__46385_46477,chunk__46386_46478,count__46387_46479,i__46388_46480,seq__46365,chunk__46366,count__46367,i__46368,map__46395_46509,map__46395_46510__$1,query_46511,on_load_46512,on_error_46513,load_descriptors_46514,seq__46385_46501__$1,temp__5459__auto___46500__$1,queue_46474,network_46475,parallel_payload_46476,remote,seq__46365__$1,temp__5459__auto__,map__46363,map__46363__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46519 = ((function (seq__46385_46477,chunk__46386_46478,count__46387_46479,i__46388_46480,seq__46365,chunk__46366,count__46367,i__46368,on_load_SINGLEQUOTE__46518,map__46395_46509,map__46395_46510__$1,query_46511,on_load_46512,on_error_46513,load_descriptors_46514,seq__46385_46501__$1,temp__5459__auto___46500__$1,queue_46474,network_46475,parallel_payload_46476,remote,seq__46365__$1,temp__5459__auto__,map__46363,map__46363__$1,send_queues,reconciler,networking){
return (function (p1__46361_SHARP_){
return (on_error_46513.cljs$core$IFn$_invoke$arity$2 ? on_error_46513.cljs$core$IFn$_invoke$arity$2(p1__46361_SHARP_,load_descriptors_46514) : on_error_46513.call(null,p1__46361_SHARP_,load_descriptors_46514));
});})(seq__46385_46477,chunk__46386_46478,count__46387_46479,i__46388_46480,seq__46365,chunk__46366,count__46367,i__46368,on_load_SINGLEQUOTE__46518,map__46395_46509,map__46395_46510__$1,query_46511,on_load_46512,on_error_46513,load_descriptors_46514,seq__46385_46501__$1,temp__5459__auto___46500__$1,queue_46474,network_46475,parallel_payload_46476,remote,seq__46365__$1,temp__5459__auto__,map__46363,map__46363__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_46475,query_46511,on_load_SINGLEQUOTE__46518,on_error_SINGLEQUOTE__46519,null);

var G__46521 = cljs.core.next(seq__46385_46501__$1);
var G__46522 = null;
var G__46523 = (0);
var G__46524 = (0);
seq__46385_46477 = G__46521;
chunk__46386_46478 = G__46522;
count__46387_46479 = G__46523;
i__46388_46480 = G__46524;
continue;
}
} else {
}
}
break;
}

var fetch_payload_46525 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_46525)){
fulcro.client.impl.application.enqueue(queue_46474,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_46525,cljs.core.cst$kw$networking,network_46475));

var G__46527 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_46525 = G__46527;
continue;
} else {
}
break;
}

var G__46528 = cljs.core.next(seq__46365__$1);
var G__46529 = null;
var G__46530 = (0);
var G__46531 = (0);
seq__46365 = G__46528;
chunk__46366 = G__46529;
count__46367 = G__46530;
i__46368 = G__46531;
continue;
}
} else {
return null;
}
}
break;
}
});
fulcro.client.impl.application.detect_errant_remotes = (function fulcro$client$impl$application$detect_errant_remotes(p__46532){
var map__46536 = p__46532;
var map__46536__$1 = ((((!((map__46536 == null)))?((((map__46536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46536):map__46536);
var app = map__46536__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46536__$1,cljs.core.cst$kw$reconciler);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46536__$1,cljs.core.cst$kw$send_DASH_queues);
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
var map__46543 = payload;
var map__46543__$1 = ((((!((map__46543 == null)))?((((map__46543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46543):map__46543);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46543__$1,cljs.core.cst$kw$query);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46543__$1,cljs.core.cst$kw$on_DASH_load);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46543__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46543__$1,cljs.core.cst$kw$load_DASH_descriptors);
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__46543,map__46543__$1,query,on_load,on_error,load_descriptors){
return (function (p1__46541_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__46541_SHARP_,load_descriptors) : on_load.call(null,p1__46541_SHARP_,load_descriptors));
});})(map__46543,map__46543__$1,query,on_load,on_error,load_descriptors))
:on_load);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__46543,map__46543__$1,query,on_load,on_error,load_descriptors,merge_data,on_update){
return (function (p1__46542_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__46542_SHARP_,load_descriptors) : on_error.call(null,p1__46542_SHARP_,load_descriptors));
});})(map__46543,map__46543__$1,query,on_load,on_error,load_descriptors,merge_data,on_update))
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
fulcro.client.impl.application.start_network_sequential_processing = (function fulcro$client$impl$application$start_network_sequential_processing(p__46556){
var map__46557 = p__46556;
var map__46557__$1 = ((((!((map__46557 == null)))?((((map__46557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46557):map__46557);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46557__$1,cljs.core.cst$kw$networking);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46557__$1,cljs.core.cst$kw$send_DASH_queues);
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46557__$1,cljs.core.cst$kw$response_DASH_channels);
var seq__46561 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__46562 = null;
var count__46563 = (0);
var i__46564 = (0);
while(true){
if((i__46564 < count__46563)){
var remote = chunk__46562.cljs$core$IIndexed$_nth$arity$2(null,i__46564);
var queue_46687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__46689 = fulcro.client.impl.application.is_sequential_QMARK_(network_46688);
var response_channel_46690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_46691 = (cljs.core.truth_(sequential_QMARK__46689)?((function (seq__46561,chunk__46562,count__46563,i__46564,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,remote,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (){
var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto__,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,remote,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto__,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,remote,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (state_46572){
var state_val_46573 = (state_46572[(1)]);
if((state_val_46573 === (1))){
var state_46572__$1 = state_46572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46572__$1,(2),response_channel_46690,cljs.core.cst$kw$complete);
} else {
if((state_val_46573 === (2))){
var inst_46570 = (state_46572[(2)]);
var state_46572__$1 = state_46572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46572__$1,inst_46570);
} else {
return null;
}
}
});})(seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto__,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,remote,map__46557,map__46557__$1,networking,send_queues,response_channels))
;
return ((function (seq__46561,chunk__46562,count__46563,i__46564,switch__21492__auto__,c__21855__auto__,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,remote,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0 = (function (){
var statearr_46574 = [null,null,null,null,null,null,null];
(statearr_46574[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__);

(statearr_46574[(1)] = (1));

return statearr_46574;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1 = (function (state_46572){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_46572);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e46575){if((e46575 instanceof Object)){
var ex__21496__auto__ = e46575;
var statearr_46576_46692 = state_46572;
(statearr_46576_46692[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46572);

return cljs.core.cst$kw$recur;
} else {
throw e46575;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__46697 = state_46572;
state_46572 = G__46697;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__ = function(state_46572){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1.call(this,state_46572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__;
})()
;})(seq__46561,chunk__46562,count__46563,i__46564,switch__21492__auto__,c__21855__auto__,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,remote,map__46557,map__46557__$1,networking,send_queues,response_channels))
})();
var state__21857__auto__ = (function (){var statearr_46579 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_46579[(6)] = c__21855__auto__);

return statearr_46579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto__,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,remote,map__46557,map__46557__$1,networking,send_queues,response_channels))
);

return c__21855__auto__;
});})(seq__46561,chunk__46562,count__46563,i__46564,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,remote,map__46557,map__46557__$1,networking,send_queues,response_channels))
:cljs.core.identity);
var c__21855__auto___46698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto___46698,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,send_complete_46691,remote,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto___46698,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,send_complete_46691,remote,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (state_46600){
var state_val_46601 = (state_46600[(1)]);
if((state_val_46601 === (1))){
var state_46600__$1 = state_46600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46600__$1,(2),queue_46687);
} else {
if((state_val_46601 === (2))){
var inst_46584 = (state_46600[(2)]);
var inst_46585 = inst_46584;
var state_46600__$1 = (function (){var statearr_46605 = state_46600;
(statearr_46605[(7)] = inst_46585);

return statearr_46605;
})();
var statearr_46606_46706 = state_46600__$1;
(statearr_46606_46706[(2)] = null);

(statearr_46606_46706[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46601 === (3))){
var inst_46585 = (state_46600[(7)]);
var inst_46587 = fulcro.client.impl.application.send_payload(network_46688,inst_46585,send_complete_46691);
var state_46600__$1 = (function (){var statearr_46610 = state_46600;
(statearr_46610[(8)] = inst_46587);

return statearr_46610;
})();
if(cljs.core.truth_(sequential_QMARK__46689)){
var statearr_46611_46707 = state_46600__$1;
(statearr_46611_46707[(1)] = (5));

} else {
var statearr_46612_46708 = state_46600__$1;
(statearr_46612_46708[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46601 === (4))){
var inst_46598 = (state_46600[(2)]);
var state_46600__$1 = state_46600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46600__$1,inst_46598);
} else {
if((state_val_46601 === (5))){
var state_46600__$1 = state_46600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46600__$1,(8),response_channel_46690);
} else {
if((state_val_46601 === (6))){
var state_46600__$1 = state_46600;
var statearr_46617_46709 = state_46600__$1;
(statearr_46617_46709[(2)] = null);

(statearr_46617_46709[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46601 === (7))){
var inst_46593 = (state_46600[(2)]);
var state_46600__$1 = (function (){var statearr_46618 = state_46600;
(statearr_46618[(9)] = inst_46593);

return statearr_46618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46600__$1,(9),queue_46687);
} else {
if((state_val_46601 === (8))){
var inst_46590 = (state_46600[(2)]);
var state_46600__$1 = state_46600;
var statearr_46619_46710 = state_46600__$1;
(statearr_46619_46710[(2)] = inst_46590);

(statearr_46619_46710[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46601 === (9))){
var inst_46595 = (state_46600[(2)]);
var inst_46585 = inst_46595;
var state_46600__$1 = (function (){var statearr_46620 = state_46600;
(statearr_46620[(7)] = inst_46585);

return statearr_46620;
})();
var statearr_46621_46713 = state_46600__$1;
(statearr_46621_46713[(2)] = null);

(statearr_46621_46713[(1)] = (3));


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
});})(seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto___46698,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,send_complete_46691,remote,map__46557,map__46557__$1,networking,send_queues,response_channels))
;
return ((function (seq__46561,chunk__46562,count__46563,i__46564,switch__21492__auto__,c__21855__auto___46698,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,send_complete_46691,remote,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0 = (function (){
var statearr_46622 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46622[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__);

(statearr_46622[(1)] = (1));

return statearr_46622;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1 = (function (state_46600){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_46600);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e46623){if((e46623 instanceof Object)){
var ex__21496__auto__ = e46623;
var statearr_46624_46714 = state_46600;
(statearr_46624_46714[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46600);

return cljs.core.cst$kw$recur;
} else {
throw e46623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__46717 = state_46600;
state_46600 = G__46717;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__ = function(state_46600){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1.call(this,state_46600);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__;
})()
;})(seq__46561,chunk__46562,count__46563,i__46564,switch__21492__auto__,c__21855__auto___46698,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,send_complete_46691,remote,map__46557,map__46557__$1,networking,send_queues,response_channels))
})();
var state__21857__auto__ = (function (){var statearr_46625 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_46625[(6)] = c__21855__auto___46698);

return statearr_46625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto___46698,queue_46687,network_46688,sequential_QMARK__46689,response_channel_46690,send_complete_46691,remote,map__46557,map__46557__$1,networking,send_queues,response_channels))
);


var G__46718 = seq__46561;
var G__46719 = chunk__46562;
var G__46720 = count__46563;
var G__46721 = (i__46564 + (1));
seq__46561 = G__46718;
chunk__46562 = G__46719;
count__46563 = G__46720;
i__46564 = G__46721;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__46561);
if(temp__5459__auto__){
var seq__46561__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46561__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__46561__$1);
var G__46722 = cljs.core.chunk_rest(seq__46561__$1);
var G__46723 = c__11343__auto__;
var G__46724 = cljs.core.count(c__11343__auto__);
var G__46725 = (0);
seq__46561 = G__46722;
chunk__46562 = G__46723;
count__46563 = G__46724;
i__46564 = G__46725;
continue;
} else {
var remote = cljs.core.first(seq__46561__$1);
var queue_46726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__46728 = fulcro.client.impl.application.is_sequential_QMARK_(network_46727);
var response_channel_46729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_46730 = (cljs.core.truth_(sequential_QMARK__46728)?((function (seq__46561,chunk__46562,count__46563,i__46564,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (){
var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto__,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto__,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (state_46633){
var state_val_46634 = (state_46633[(1)]);
if((state_val_46634 === (1))){
var state_46633__$1 = state_46633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46633__$1,(2),response_channel_46729,cljs.core.cst$kw$complete);
} else {
if((state_val_46634 === (2))){
var inst_46631 = (state_46633[(2)]);
var state_46633__$1 = state_46633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46633__$1,inst_46631);
} else {
return null;
}
}
});})(seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto__,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels))
;
return ((function (seq__46561,chunk__46562,count__46563,i__46564,switch__21492__auto__,c__21855__auto__,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0 = (function (){
var statearr_46637 = [null,null,null,null,null,null,null];
(statearr_46637[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__);

(statearr_46637[(1)] = (1));

return statearr_46637;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1 = (function (state_46633){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_46633);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e46638){if((e46638 instanceof Object)){
var ex__21496__auto__ = e46638;
var statearr_46639_46736 = state_46633;
(statearr_46639_46736[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46633);

return cljs.core.cst$kw$recur;
} else {
throw e46638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__46737 = state_46633;
state_46633 = G__46737;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__ = function(state_46633){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1.call(this,state_46633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__;
})()
;})(seq__46561,chunk__46562,count__46563,i__46564,switch__21492__auto__,c__21855__auto__,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels))
})();
var state__21857__auto__ = (function (){var statearr_46641 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_46641[(6)] = c__21855__auto__);

return statearr_46641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto__,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels))
);

return c__21855__auto__;
});})(seq__46561,chunk__46562,count__46563,i__46564,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels))
:cljs.core.identity);
var c__21855__auto___46741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto___46741,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,send_complete_46730,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto___46741,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,send_complete_46730,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function (state_46659){
var state_val_46660 = (state_46659[(1)]);
if((state_val_46660 === (1))){
var state_46659__$1 = state_46659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46659__$1,(2),queue_46726);
} else {
if((state_val_46660 === (2))){
var inst_46643 = (state_46659[(2)]);
var inst_46644 = inst_46643;
var state_46659__$1 = (function (){var statearr_46669 = state_46659;
(statearr_46669[(7)] = inst_46644);

return statearr_46669;
})();
var statearr_46670_46744 = state_46659__$1;
(statearr_46670_46744[(2)] = null);

(statearr_46670_46744[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46660 === (3))){
var inst_46644 = (state_46659[(7)]);
var inst_46646 = fulcro.client.impl.application.send_payload(network_46727,inst_46644,send_complete_46730);
var state_46659__$1 = (function (){var statearr_46671 = state_46659;
(statearr_46671[(8)] = inst_46646);

return statearr_46671;
})();
if(cljs.core.truth_(sequential_QMARK__46728)){
var statearr_46672_46745 = state_46659__$1;
(statearr_46672_46745[(1)] = (5));

} else {
var statearr_46673_46746 = state_46659__$1;
(statearr_46673_46746[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46660 === (4))){
var inst_46657 = (state_46659[(2)]);
var state_46659__$1 = state_46659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46659__$1,inst_46657);
} else {
if((state_val_46660 === (5))){
var state_46659__$1 = state_46659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46659__$1,(8),response_channel_46729);
} else {
if((state_val_46660 === (6))){
var state_46659__$1 = state_46659;
var statearr_46674_46747 = state_46659__$1;
(statearr_46674_46747[(2)] = null);

(statearr_46674_46747[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46660 === (7))){
var inst_46652 = (state_46659[(2)]);
var state_46659__$1 = (function (){var statearr_46675 = state_46659;
(statearr_46675[(9)] = inst_46652);

return statearr_46675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46659__$1,(9),queue_46726);
} else {
if((state_val_46660 === (8))){
var inst_46649 = (state_46659[(2)]);
var state_46659__$1 = state_46659;
var statearr_46676_46752 = state_46659__$1;
(statearr_46676_46752[(2)] = inst_46649);

(statearr_46676_46752[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46660 === (9))){
var inst_46654 = (state_46659[(2)]);
var inst_46644 = inst_46654;
var state_46659__$1 = (function (){var statearr_46677 = state_46659;
(statearr_46677[(7)] = inst_46644);

return statearr_46677;
})();
var statearr_46678_46755 = state_46659__$1;
(statearr_46678_46755[(2)] = null);

(statearr_46678_46755[(1)] = (3));


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
});})(seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto___46741,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,send_complete_46730,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels))
;
return ((function (seq__46561,chunk__46562,count__46563,i__46564,switch__21492__auto__,c__21855__auto___46741,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,send_complete_46730,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0 = (function (){
var statearr_46679 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46679[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__);

(statearr_46679[(1)] = (1));

return statearr_46679;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1 = (function (state_46659){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_46659);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e46680){if((e46680 instanceof Object)){
var ex__21496__auto__ = e46680;
var statearr_46681_46756 = state_46659;
(statearr_46681_46756[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46659);

return cljs.core.cst$kw$recur;
} else {
throw e46680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__46757 = state_46659;
state_46659 = G__46757;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__ = function(state_46659){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1.call(this,state_46659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21493__auto__;
})()
;})(seq__46561,chunk__46562,count__46563,i__46564,switch__21492__auto__,c__21855__auto___46741,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,send_complete_46730,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels))
})();
var state__21857__auto__ = (function (){var statearr_46683 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_46683[(6)] = c__21855__auto___46741);

return statearr_46683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(seq__46561,chunk__46562,count__46563,i__46564,c__21855__auto___46741,queue_46726,network_46727,sequential_QMARK__46728,response_channel_46729,send_complete_46730,remote,seq__46561__$1,temp__5459__auto__,map__46557,map__46557__$1,networking,send_queues,response_channels))
);


var G__46758 = cljs.core.next(seq__46561__$1);
var G__46759 = null;
var G__46760 = (0);
var G__46761 = (0);
seq__46561 = G__46758;
chunk__46562 = G__46759;
count__46563 = G__46760;
i__46564 = G__46761;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__46767){
var vec__46768 = p__46767;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46768,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__46774){
var vec__46775 = p__46774;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__46778){
var vec__46779 = p__46778;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46779,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46779,(1),null);
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
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__46788){
var vec__46789 = p__46788;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = fulcro.client.impl.application.sweep_merge(target,source_to_merge);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source_to_merge,merged_state){
return (function (acc,p__46792){
var vec__46793 = p__46792;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(1),null);
if(cljs.core.truth_((function (){var and__10400__auto__ = mutation_merge;
if(cljs.core.truth_(and__10400__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__10400__auto__;
}
})())){
var temp__5457__auto__ = (function (){var G__46796 = acc;
var G__46797 = k;
var G__46798 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$tempids);
return (mutation_merge.cljs$core$IFn$_invoke$arity$3 ? mutation_merge.cljs$core$IFn$_invoke$arity$3(G__46796,G__46797,G__46798) : mutation_merge.call(null,G__46796,G__46797,G__46798));
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
fulcro.client.impl.application.generate_reconciler = (function fulcro$client$impl$application$generate_reconciler(p__46802,initial_state,parser,p__46803){
var map__46804 = p__46802;
var map__46804__$1 = ((((!((map__46804 == null)))?((((map__46804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46804):map__46804);
var app = map__46804__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46804__$1,cljs.core.cst$kw$send_DASH_queues);
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46804__$1,cljs.core.cst$kw$mutation_DASH_merge);
var map__46805 = p__46803;
var map__46805__$1 = ((((!((map__46805 == null)))?((((map__46805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46805):map__46805);
var reconciler_options = map__46805__$1;
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46805__$1,cljs.core.cst$kw$migrate);
var rec_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate){
return (function (pure,_,tempids,___$1){
var seq__46808_46818 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__46809_46819 = null;
var count__46810_46820 = (0);
var i__46811_46821 = (0);
while(true){
if((i__46811_46821 < count__46810_46820)){
var queue_46822 = chunk__46809_46819.cljs$core$IIndexed$_nth$arity$2(null,i__46811_46821);
fulcro.client.impl.om_plumbing.rewrite_tempids_in_request_queue(queue_46822,tempids);

var G__46823 = seq__46808_46818;
var G__46824 = chunk__46809_46819;
var G__46825 = count__46810_46820;
var G__46826 = (i__46811_46821 + (1));
seq__46808_46818 = G__46823;
chunk__46809_46819 = G__46824;
count__46810_46820 = G__46825;
i__46811_46821 = G__46826;
continue;
} else {
var temp__5459__auto___46827 = cljs.core.seq(seq__46808_46818);
if(temp__5459__auto___46827){
var seq__46808_46828__$1 = temp__5459__auto___46827;
if(cljs.core.chunked_seq_QMARK_(seq__46808_46828__$1)){
var c__11343__auto___46829 = cljs.core.chunk_first(seq__46808_46828__$1);
var G__46830 = cljs.core.chunk_rest(seq__46808_46828__$1);
var G__46831 = c__11343__auto___46829;
var G__46832 = cljs.core.count(c__11343__auto___46829);
var G__46833 = (0);
seq__46808_46818 = G__46830;
chunk__46809_46819 = G__46831;
count__46810_46820 = G__46832;
i__46811_46821 = G__46833;
continue;
} else {
var queue_46834 = cljs.core.first(seq__46808_46828__$1);
fulcro.client.impl.om_plumbing.rewrite_tempids_in_request_queue(queue_46834,tempids);

var G__46836 = cljs.core.next(seq__46808_46828__$1);
var G__46837 = null;
var G__46838 = (0);
var G__46839 = (0);
seq__46808_46818 = G__46836;
chunk__46809_46819 = G__46837;
count__46810_46820 = G__46838;
i__46811_46821 = G__46839;
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
});})(rec_atom,remotes,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate))
;
var initial_state_with_locale = (function (){var set_default_locale = ((function (rec_atom,remotes,tempid_migrate,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,cljs.core.cst$kw$ui_SLASH_locale,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.cst$kw$en));
});})(rec_atom,remotes,tempid_migrate,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate))
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
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,reconciler_options,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$migrate,tempid_migrate,cljs.core.cst$kw$state,initial_state_with_locale,cljs.core.cst$kw$send,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate){
return (function (tx,cb){
return fulcro.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$reconciler,cljs.core.deref(rec_atom)),tx,cb);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate))
,cljs.core.cst$kw$normalize,true,cljs.core.cst$kw$remotes,remotes,cljs.core.cst$kw$merge_DASH_ident,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.application.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate))
,cljs.core.cst$kw$merge_DASH_tree,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate){
return (function (target,source){
return fulcro.client.impl.application.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__46804,map__46804__$1,app,send_queues,mutation_merge,map__46805,map__46805__$1,reconciler_options,migrate))
,cljs.core.cst$kw$parser,parser], null)], 0));
var rec = om.next.reconciler(config);
cljs.core.reset_BANG_(rec_atom,rec);

return rec;
});
fulcro.client.impl.application.initialize_global_error_callbacks = (function fulcro$client$impl$application$initialize_global_error_callbacks(app){
var seq__46850 = cljs.core.seq(cljs.core.keys(cljs.core.cst$kw$networking.cljs$core$IFn$_invoke$arity$1(app)));
var chunk__46851 = null;
var count__46852 = (0);
var i__46853 = (0);
while(true){
if((i__46853 < count__46852)){
var remote = chunk__46851.cljs$core$IIndexed$_nth$arity$2(null,i__46853);
var cb_atom_46856 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(fulcro.client.util.atom_QMARK_(cb_atom_46856))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_46856,((function (seq__46850,chunk__46851,count__46852,i__46853,cb_atom_46856,remote){
return (function (p1__46846_SHARP_){
if(cljs.core.fn_QMARK_(p1__46846_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__46846_SHARP_,om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__46850,chunk__46851,count__46852,i__46853,cb_atom_46856,remote))
);
} else {
}

var G__46860 = seq__46850;
var G__46861 = chunk__46851;
var G__46862 = count__46852;
var G__46863 = (i__46853 + (1));
seq__46850 = G__46860;
chunk__46851 = G__46861;
count__46852 = G__46862;
i__46853 = G__46863;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__46850);
if(temp__5459__auto__){
var seq__46850__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46850__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__46850__$1);
var G__46866 = cljs.core.chunk_rest(seq__46850__$1);
var G__46867 = c__11343__auto__;
var G__46868 = cljs.core.count(c__11343__auto__);
var G__46869 = (0);
seq__46850 = G__46866;
chunk__46851 = G__46867;
count__46852 = G__46868;
i__46853 = G__46869;
continue;
} else {
var remote = cljs.core.first(seq__46850__$1);
var cb_atom_46871 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(fulcro.client.util.atom_QMARK_(cb_atom_46871))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_46871,((function (seq__46850,chunk__46851,count__46852,i__46853,cb_atom_46871,remote,seq__46850__$1,temp__5459__auto__){
return (function (p1__46846_SHARP_){
if(cljs.core.fn_QMARK_(p1__46846_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__46846_SHARP_,om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__46850,chunk__46851,count__46852,i__46853,cb_atom_46871,remote,seq__46850__$1,temp__5459__auto__))
);
} else {
}

var G__46872 = cljs.core.next(seq__46850__$1);
var G__46873 = null;
var G__46874 = (0);
var G__46875 = (0);
seq__46850 = G__46872;
chunk__46851 = G__46873;
count__46852 = G__46874;
i__46853 = G__46875;
continue;
}
} else {
return null;
}
}
break;
}
});

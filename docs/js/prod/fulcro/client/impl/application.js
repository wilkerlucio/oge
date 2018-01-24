// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.impl.application');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.logging');
goog.require('fulcro.client.primitives');
goog.require('fulcro.i18n');
goog.require('fulcro.client.mutations');
goog.require('fulcro.history');
goog.require('fulcro.client.impl.data_fetch');
goog.require('fulcro.util');
goog.require('fulcro.client.util');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('fulcro.client.network');
goog.require('fulcro.client.impl.protocols');
/**
 * This internal function is responsible for generating and returning a function that can accomplish calling the fallbacks that
 *   appear in an incoming transaction, which is in turn used by the error-handling logic of the plumbing.
 */
fulcro.client.impl.application.fallback_handler = (function fulcro$client$impl$application$fallback_handler(p__41723,query){
var map__41724 = p__41723;
var map__41724__$1 = ((((!((map__41724 == null)))?((((map__41724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41724):map__41724);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41724__$1,cljs.core.cst$kw$reconciler);
return ((function (map__41724,map__41724__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc,cljs.core.cst$kw$fulcro_SLASH_server_DASH_error,error);

var temp__5455__auto__ = fulcro.client.primitives.fallback_tx(query,error);
if(cljs.core.truth_(temp__5455__auto__)){
var q = temp__5455__auto__;
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.logging.value_message("Transaction failed. Running fallback.",q)], 0));

return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,q);
} else {
return fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fallback triggered, but no fallbacks were defined."], 0));
}
});
;})(map__41724,map__41724__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
fulcro.client.impl.application.enqueue = (function fulcro$client$impl$application$enqueue(q,v){
var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto__){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto__){
return (function (state_41734){
var state_val_41735 = (state_41734[(1)]);
if((state_val_41735 === (1))){
var state_41734__$1 = state_41734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41734__$1,(2),q,v);
} else {
if((state_val_41735 === (2))){
var inst_41731 = (state_41734[(2)]);
var state_41734__$1 = state_41734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41734__$1,inst_41731);
} else {
return null;
}
}
});})(c__17404__auto__))
;
return ((function (switch__16860__auto__,c__17404__auto__){
return (function() {
var fulcro$client$impl$application$enqueue_$_state_machine__16861__auto__ = null;
var fulcro$client$impl$application$enqueue_$_state_machine__16861__auto____0 = (function (){
var statearr_41737 = [null,null,null,null,null,null,null];
(statearr_41737[(0)] = fulcro$client$impl$application$enqueue_$_state_machine__16861__auto__);

(statearr_41737[(1)] = (1));

return statearr_41737;
});
var fulcro$client$impl$application$enqueue_$_state_machine__16861__auto____1 = (function (state_41734){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_41734);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e41738){if((e41738 instanceof Object)){
var ex__16864__auto__ = e41738;
var statearr_41739_41747 = state_41734;
(statearr_41739_41747[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41734);

return cljs.core.cst$kw$recur;
} else {
throw e41738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__41748 = state_41734;
state_41734 = G__41748;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
fulcro$client$impl$application$enqueue_$_state_machine__16861__auto__ = function(state_41734){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$enqueue_$_state_machine__16861__auto____0.call(this);
case 1:
return fulcro$client$impl$application$enqueue_$_state_machine__16861__auto____1.call(this,state_41734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$enqueue_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$enqueue_$_state_machine__16861__auto____0;
fulcro$client$impl$application$enqueue_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$enqueue_$_state_machine__16861__auto____1;
return fulcro$client$impl$application$enqueue_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto__))
})();
var state__17406__auto__ = (function (){var statearr_41742 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_41742[(6)] = c__17404__auto__);

return statearr_41742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto__))
);

return c__17404__auto__;
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$impl$application_SLASH_enqueue,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$queue,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$queue,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue,cljs.core.cst$kw$payload], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$queue,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response.
 */
fulcro.client.impl.application.real_send = (function fulcro$client$impl$application$real_send(net,tx,on_done,on_error,on_load){
if(((!((net == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$ProgressiveTransfer$)))?true:false):false)){
return fulcro.client.network.updating_send(net,fulcro.client.primitives.strip_ui(tx),on_done,on_error,on_load);
} else {
return fulcro.client.network.send(net,fulcro.client.primitives.strip_ui(tx),on_done,on_error);
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
var or__10805__auto__ = fulcro.util.mutation_join_QMARK_(t);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return (cljs.core.list_QMARK_(t)) && ((cljs.core.first(t) instanceof cljs.core.Symbol));
}
}),tx)))){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INTERNAL ERROR: split-mutations was asked to split a tx that contained things other than mutations.",tx], 0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
} else {
if(cljs.core.empty_QMARK_(tx)){
return cljs.core.PersistentVector.EMPTY;
} else {
var mutation_name = (function (m){
if(cljs.core.list_QMARK_(m)){
return cljs.core.first(m);
} else {
if(cljs.core.truth_(fulcro.util.mutation_join_QMARK_(m))){
return cljs.core.ffirst(cljs.core.keys(m));
} else {
return cljs.core.cst$sym$unrecongnized_DASH_mutation;

}
}
});
var map__41760 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (mutation_name){
return (function (p__41763,mutation){
var map__41764 = p__41763;
var map__41764__$1 = ((((!((map__41764 == null)))?((((map__41764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41764):map__41764);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41764__$1,cljs.core.cst$kw$seen);
var accumulator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41764__$1,cljs.core.cst$kw$accumulator);
var current_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41764__$1,cljs.core.cst$kw$current_DASH_tx);
if(cljs.core.contains_QMARK_(seen,mutation_name(mutation))){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$accumulator,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accumulator,current_tx),cljs.core.cst$kw$current_DASH_tx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mutation], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,mutation_name(mutation)),cljs.core.cst$kw$accumulator,accumulator,cljs.core.cst$kw$current_DASH_tx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_tx,mutation)], null);
}
});})(mutation_name))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$accumulator,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$current_DASH_tx,cljs.core.PersistentVector.EMPTY], null),tx);
var map__41760__$1 = ((((!((map__41760 == null)))?((((map__41760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41760):map__41760);
var accumulator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41760__$1,cljs.core.cst$kw$accumulator);
var current_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41760__$1,cljs.core.cst$kw$current_DASH_tx);
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
fulcro.client.impl.application.enqueue_mutations = (function fulcro$client$impl$application$enqueue_mutations(p__41778,remote_tx_map,cb){
var map__41779 = p__41778;
var map__41779__$1 = ((((!((map__41779 == null)))?((((map__41779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41779):map__41779);
var app = map__41779__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41779__$1,cljs.core.cst$kw$reconciler);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41779__$1,cljs.core.cst$kw$send_DASH_queues);
var history = fulcro.client.primitives.get_history(reconciler);
var seq__41782 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__41783 = null;
var count__41784 = (0);
var i__41785 = (0);
while(true){
if((i__41785 < count__41784)){
var remote = chunk__41783.cljs$core$IIndexed$_nth$arity$2(null,i__41785);
var queue_41815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_41816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_41817 = (function (){var or__10805__auto__ = (function (){var G__41790 = full_remote_transaction_41816;
var G__41790__$1 = (((G__41790 == null))?null:cljs.core.meta(G__41790));
var G__41790__$2 = (((G__41790__$1 == null))?null:cljs.core.cst$kw$fulcro$client$primitives_SLASH_refresh.cljs$core$IFn$_invoke$arity$1(G__41790__$1));
if((G__41790__$2 == null)){
return null;
} else {
return cljs.core.vec(G__41790__$2);
}
})();
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_41818 = (function (){var G__41791 = full_remote_transaction_41816;
var G__41791__$1 = (((G__41791 == null))?null:cljs.core.meta(G__41791));
if((G__41791__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time.cljs$core$IFn$_invoke$arity$1(G__41791__$1);
}
})();
var fallback_41819 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_41816);
var desired_remote_mutations_41820 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_41816);
var tx_list_41821 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_41820);
var has_mutations_QMARK__41822 = ((function (seq__41782,chunk__41783,count__41784,i__41785,queue_41815,full_remote_transaction_41816,refresh_set_41817,tx_time_41818,fallback_41819,desired_remote_mutations_41820,tx_list_41821,remote,history,map__41779,map__41779__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__41782,chunk__41783,count__41784,i__41785,queue_41815,full_remote_transaction_41816,refresh_set_41817,tx_time_41818,fallback_41819,desired_remote_mutations_41820,tx_list_41821,remote,history,map__41779,map__41779__$1,app,reconciler,send_queues))
;
var payload_41823 = ((function (seq__41782,chunk__41783,count__41784,i__41785,queue_41815,full_remote_transaction_41816,refresh_set_41817,tx_time_41818,fallback_41819,desired_remote_mutations_41820,tx_list_41821,has_mutations_QMARK__41822,remote,history,map__41779,map__41779__$1,app,reconciler,send_queues){
return (function (tx){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time_41818,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,history,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,remote,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,((function (seq__41782,chunk__41783,count__41784,i__41785,queue_41815,full_remote_transaction_41816,refresh_set_41817,tx_time_41818,fallback_41819,desired_remote_mutations_41820,tx_list_41821,has_mutations_QMARK__41822,remote,history,map__41779,map__41779__$1,app,reconciler,send_queues){
return (function (result){
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(result,tx,remote) : cb.call(null,result,tx,remote));
});})(seq__41782,chunk__41783,count__41784,i__41785,queue_41815,full_remote_transaction_41816,refresh_set_41817,tx_time_41818,fallback_41819,desired_remote_mutations_41820,tx_list_41821,has_mutations_QMARK__41822,remote,history,map__41779,map__41779__$1,app,reconciler,send_queues))
,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,((function (seq__41782,chunk__41783,count__41784,i__41785,queue_41815,full_remote_transaction_41816,refresh_set_41817,tx_time_41818,fallback_41819,desired_remote_mutations_41820,tx_list_41821,has_mutations_QMARK__41822,remote,history,map__41779,map__41779__$1,app,reconciler,send_queues){
return (function (result){
return (fallback_41819.cljs$core$IFn$_invoke$arity$1 ? fallback_41819.cljs$core$IFn$_invoke$arity$1(result) : fallback_41819.call(null,result));
});})(seq__41782,chunk__41783,count__41784,i__41785,queue_41815,full_remote_transaction_41816,refresh_set_41817,tx_time_41818,fallback_41819,desired_remote_mutations_41820,tx_list_41821,has_mutations_QMARK__41822,remote,history,map__41779,map__41779__$1,app,reconciler,send_queues))
], null);
});})(seq__41782,chunk__41783,count__41784,i__41785,queue_41815,full_remote_transaction_41816,refresh_set_41817,tx_time_41818,fallback_41819,desired_remote_mutations_41820,tx_list_41821,has_mutations_QMARK__41822,remote,history,map__41779,map__41779__$1,app,reconciler,send_queues))
;
if(cljs.core.truth_(history)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history,fulcro.history.remote_activity_started,remote,tx_time_41818);
} else {
}

var seq__41794_41833 = cljs.core.seq(tx_list_41821);
var chunk__41795_41834 = null;
var count__41796_41835 = (0);
var i__41797_41836 = (0);
while(true){
if((i__41797_41836 < count__41796_41835)){
var tx_41837 = chunk__41795_41834.cljs$core$IIndexed$_nth$arity$2(null,i__41797_41836);
if(cljs.core.truth_(has_mutations_QMARK__41822(tx_41837))){
fulcro.client.impl.application.enqueue(queue_41815,payload_41823(tx_41837));
} else {
}

var G__41840 = seq__41794_41833;
var G__41841 = chunk__41795_41834;
var G__41842 = count__41796_41835;
var G__41843 = (i__41797_41836 + (1));
seq__41794_41833 = G__41840;
chunk__41795_41834 = G__41841;
count__41796_41835 = G__41842;
i__41797_41836 = G__41843;
continue;
} else {
var temp__5457__auto___41845 = cljs.core.seq(seq__41794_41833);
if(temp__5457__auto___41845){
var seq__41794_41846__$1 = temp__5457__auto___41845;
if(cljs.core.chunked_seq_QMARK_(seq__41794_41846__$1)){
var c__11736__auto___41847 = cljs.core.chunk_first(seq__41794_41846__$1);
var G__41848 = cljs.core.chunk_rest(seq__41794_41846__$1);
var G__41849 = c__11736__auto___41847;
var G__41850 = cljs.core.count(c__11736__auto___41847);
var G__41851 = (0);
seq__41794_41833 = G__41848;
chunk__41795_41834 = G__41849;
count__41796_41835 = G__41850;
i__41797_41836 = G__41851;
continue;
} else {
var tx_41852 = cljs.core.first(seq__41794_41846__$1);
if(cljs.core.truth_(has_mutations_QMARK__41822(tx_41852))){
fulcro.client.impl.application.enqueue(queue_41815,payload_41823(tx_41852));
} else {
}

var G__41853 = cljs.core.next(seq__41794_41846__$1);
var G__41854 = null;
var G__41855 = (0);
var G__41856 = (0);
seq__41794_41833 = G__41853;
chunk__41795_41834 = G__41854;
count__41796_41835 = G__41855;
i__41797_41836 = G__41856;
continue;
}
} else {
}
}
break;
}

var G__41857 = seq__41782;
var G__41858 = chunk__41783;
var G__41859 = count__41784;
var G__41860 = (i__41785 + (1));
seq__41782 = G__41857;
chunk__41783 = G__41858;
count__41784 = G__41859;
i__41785 = G__41860;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__41782);
if(temp__5457__auto__){
var seq__41782__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41782__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__41782__$1);
var G__41864 = cljs.core.chunk_rest(seq__41782__$1);
var G__41865 = c__11736__auto__;
var G__41866 = cljs.core.count(c__11736__auto__);
var G__41867 = (0);
seq__41782 = G__41864;
chunk__41783 = G__41865;
count__41784 = G__41866;
i__41785 = G__41867;
continue;
} else {
var remote = cljs.core.first(seq__41782__$1);
var queue_41868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_41869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_41870 = (function (){var or__10805__auto__ = (function (){var G__41803 = full_remote_transaction_41869;
var G__41803__$1 = (((G__41803 == null))?null:cljs.core.meta(G__41803));
var G__41803__$2 = (((G__41803__$1 == null))?null:cljs.core.cst$kw$fulcro$client$primitives_SLASH_refresh.cljs$core$IFn$_invoke$arity$1(G__41803__$1));
if((G__41803__$2 == null)){
return null;
} else {
return cljs.core.vec(G__41803__$2);
}
})();
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_41871 = (function (){var G__41804 = full_remote_transaction_41869;
var G__41804__$1 = (((G__41804 == null))?null:cljs.core.meta(G__41804));
if((G__41804__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time.cljs$core$IFn$_invoke$arity$1(G__41804__$1);
}
})();
var fallback_41872 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_41869);
var desired_remote_mutations_41873 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_41869);
var tx_list_41874 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_41873);
var has_mutations_QMARK__41875 = ((function (seq__41782,chunk__41783,count__41784,i__41785,queue_41868,full_remote_transaction_41869,refresh_set_41870,tx_time_41871,fallback_41872,desired_remote_mutations_41873,tx_list_41874,remote,seq__41782__$1,temp__5457__auto__,history,map__41779,map__41779__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__41782,chunk__41783,count__41784,i__41785,queue_41868,full_remote_transaction_41869,refresh_set_41870,tx_time_41871,fallback_41872,desired_remote_mutations_41873,tx_list_41874,remote,seq__41782__$1,temp__5457__auto__,history,map__41779,map__41779__$1,app,reconciler,send_queues))
;
var payload_41876 = ((function (seq__41782,chunk__41783,count__41784,i__41785,queue_41868,full_remote_transaction_41869,refresh_set_41870,tx_time_41871,fallback_41872,desired_remote_mutations_41873,tx_list_41874,has_mutations_QMARK__41875,remote,seq__41782__$1,temp__5457__auto__,history,map__41779,map__41779__$1,app,reconciler,send_queues){
return (function (tx){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time_41871,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,history,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,remote,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,((function (seq__41782,chunk__41783,count__41784,i__41785,queue_41868,full_remote_transaction_41869,refresh_set_41870,tx_time_41871,fallback_41872,desired_remote_mutations_41873,tx_list_41874,has_mutations_QMARK__41875,remote,seq__41782__$1,temp__5457__auto__,history,map__41779,map__41779__$1,app,reconciler,send_queues){
return (function (result){
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(result,tx,remote) : cb.call(null,result,tx,remote));
});})(seq__41782,chunk__41783,count__41784,i__41785,queue_41868,full_remote_transaction_41869,refresh_set_41870,tx_time_41871,fallback_41872,desired_remote_mutations_41873,tx_list_41874,has_mutations_QMARK__41875,remote,seq__41782__$1,temp__5457__auto__,history,map__41779,map__41779__$1,app,reconciler,send_queues))
,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,((function (seq__41782,chunk__41783,count__41784,i__41785,queue_41868,full_remote_transaction_41869,refresh_set_41870,tx_time_41871,fallback_41872,desired_remote_mutations_41873,tx_list_41874,has_mutations_QMARK__41875,remote,seq__41782__$1,temp__5457__auto__,history,map__41779,map__41779__$1,app,reconciler,send_queues){
return (function (result){
return (fallback_41872.cljs$core$IFn$_invoke$arity$1 ? fallback_41872.cljs$core$IFn$_invoke$arity$1(result) : fallback_41872.call(null,result));
});})(seq__41782,chunk__41783,count__41784,i__41785,queue_41868,full_remote_transaction_41869,refresh_set_41870,tx_time_41871,fallback_41872,desired_remote_mutations_41873,tx_list_41874,has_mutations_QMARK__41875,remote,seq__41782__$1,temp__5457__auto__,history,map__41779,map__41779__$1,app,reconciler,send_queues))
], null);
});})(seq__41782,chunk__41783,count__41784,i__41785,queue_41868,full_remote_transaction_41869,refresh_set_41870,tx_time_41871,fallback_41872,desired_remote_mutations_41873,tx_list_41874,has_mutations_QMARK__41875,remote,seq__41782__$1,temp__5457__auto__,history,map__41779,map__41779__$1,app,reconciler,send_queues))
;
if(cljs.core.truth_(history)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history,fulcro.history.remote_activity_started,remote,tx_time_41871);
} else {
}

var seq__41807_41886 = cljs.core.seq(tx_list_41874);
var chunk__41808_41887 = null;
var count__41809_41888 = (0);
var i__41810_41889 = (0);
while(true){
if((i__41810_41889 < count__41809_41888)){
var tx_41890 = chunk__41808_41887.cljs$core$IIndexed$_nth$arity$2(null,i__41810_41889);
if(cljs.core.truth_(has_mutations_QMARK__41875(tx_41890))){
fulcro.client.impl.application.enqueue(queue_41868,payload_41876(tx_41890));
} else {
}

var G__41891 = seq__41807_41886;
var G__41892 = chunk__41808_41887;
var G__41893 = count__41809_41888;
var G__41894 = (i__41810_41889 + (1));
seq__41807_41886 = G__41891;
chunk__41808_41887 = G__41892;
count__41809_41888 = G__41893;
i__41810_41889 = G__41894;
continue;
} else {
var temp__5457__auto___41897__$1 = cljs.core.seq(seq__41807_41886);
if(temp__5457__auto___41897__$1){
var seq__41807_41899__$1 = temp__5457__auto___41897__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41807_41899__$1)){
var c__11736__auto___41900 = cljs.core.chunk_first(seq__41807_41899__$1);
var G__41901 = cljs.core.chunk_rest(seq__41807_41899__$1);
var G__41902 = c__11736__auto___41900;
var G__41903 = cljs.core.count(c__11736__auto___41900);
var G__41904 = (0);
seq__41807_41886 = G__41901;
chunk__41808_41887 = G__41902;
count__41809_41888 = G__41903;
i__41810_41889 = G__41904;
continue;
} else {
var tx_41905 = cljs.core.first(seq__41807_41899__$1);
if(cljs.core.truth_(has_mutations_QMARK__41875(tx_41905))){
fulcro.client.impl.application.enqueue(queue_41868,payload_41876(tx_41905));
} else {
}

var G__41906 = cljs.core.next(seq__41807_41899__$1);
var G__41907 = null;
var G__41908 = (0);
var G__41909 = (0);
seq__41807_41886 = G__41906;
chunk__41808_41887 = G__41907;
count__41809_41888 = G__41908;
i__41810_41889 = G__41909;
continue;
}
} else {
}
}
break;
}

var G__41910 = cljs.core.next(seq__41782__$1);
var G__41911 = null;
var G__41912 = (0);
var G__41913 = (0);
seq__41782 = G__41910;
chunk__41783 = G__41911;
count__41784 = G__41912;
i__41785 = G__41913;
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
fulcro.client.impl.application.enqueue_reads = (function fulcro$client$impl$application$enqueue_reads(p__41919){
var map__41920 = p__41919;
var map__41920__$1 = ((((!((map__41920 == null)))?((((map__41920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41920):map__41920);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41920__$1,cljs.core.cst$kw$send_DASH_queues);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41920__$1,cljs.core.cst$kw$reconciler);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41920__$1,cljs.core.cst$kw$networking);
var seq__41922 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__41923 = null;
var count__41924 = (0);
var i__41925 = (0);
while(true){
if((i__41925 < count__41924)){
var remote = chunk__41923.cljs$core$IIndexed$_nth$arity$2(null,i__41925);
var queue_41957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_41958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_41959 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__41928_41960 = cljs.core.seq(parallel_payload_41959);
var chunk__41929_41961 = null;
var count__41930_41962 = (0);
var i__41931_41964 = (0);
while(true){
if((i__41931_41964 < count__41930_41962)){
var map__41933_41967 = chunk__41929_41961.cljs$core$IIndexed$_nth$arity$2(null,i__41931_41964);
var map__41933_41968__$1 = ((((!((map__41933_41967 == null)))?((((map__41933_41967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41933_41967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41933_41967):map__41933_41967);
var payload_41969 = map__41933_41968__$1;
var query_41970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41933_41968__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load_41971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41933_41968__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error_41972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41933_41968__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors_41973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41933_41968__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var on_load_SINGLEQUOTE__41974 = ((function (seq__41928_41960,chunk__41929_41961,count__41930_41962,i__41931_41964,seq__41922,chunk__41923,count__41924,i__41925,map__41933_41967,map__41933_41968__$1,payload_41969,query_41970,on_load_41971,on_error_41972,load_descriptors_41973,queue_41957,network_41958,parallel_payload_41959,remote,map__41920,map__41920__$1,send_queues,reconciler,networking){
return (function (p1__41917_SHARP_){
return (on_load_41971.cljs$core$IFn$_invoke$arity$2 ? on_load_41971.cljs$core$IFn$_invoke$arity$2(p1__41917_SHARP_,load_descriptors_41973) : on_load_41971.call(null,p1__41917_SHARP_,load_descriptors_41973));
});})(seq__41928_41960,chunk__41929_41961,count__41930_41962,i__41931_41964,seq__41922,chunk__41923,count__41924,i__41925,map__41933_41967,map__41933_41968__$1,payload_41969,query_41970,on_load_41971,on_error_41972,load_descriptors_41973,queue_41957,network_41958,parallel_payload_41959,remote,map__41920,map__41920__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__41975 = ((function (seq__41928_41960,chunk__41929_41961,count__41930_41962,i__41931_41964,seq__41922,chunk__41923,count__41924,i__41925,on_load_SINGLEQUOTE__41974,map__41933_41967,map__41933_41968__$1,payload_41969,query_41970,on_load_41971,on_error_41972,load_descriptors_41973,queue_41957,network_41958,parallel_payload_41959,remote,map__41920,map__41920__$1,send_queues,reconciler,networking){
return (function (p1__41918_SHARP_){
return (on_error_41972.cljs$core$IFn$_invoke$arity$2 ? on_error_41972.cljs$core$IFn$_invoke$arity$2(p1__41918_SHARP_,load_descriptors_41973) : on_error_41972.call(null,p1__41918_SHARP_,load_descriptors_41973));
});})(seq__41928_41960,chunk__41929_41961,count__41930_41962,i__41931_41964,seq__41922,chunk__41923,count__41924,i__41925,on_load_SINGLEQUOTE__41974,map__41933_41967,map__41933_41968__$1,payload_41969,query_41970,on_load_41971,on_error_41972,load_descriptors_41973,queue_41957,network_41958,parallel_payload_41959,remote,map__41920,map__41920__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_41958,query_41970,on_load_SINGLEQUOTE__41974,on_error_SINGLEQUOTE__41975,null);

var G__41982 = seq__41928_41960;
var G__41983 = chunk__41929_41961;
var G__41984 = count__41930_41962;
var G__41985 = (i__41931_41964 + (1));
seq__41928_41960 = G__41982;
chunk__41929_41961 = G__41983;
count__41930_41962 = G__41984;
i__41931_41964 = G__41985;
continue;
} else {
var temp__5457__auto___41986 = cljs.core.seq(seq__41928_41960);
if(temp__5457__auto___41986){
var seq__41928_41987__$1 = temp__5457__auto___41986;
if(cljs.core.chunked_seq_QMARK_(seq__41928_41987__$1)){
var c__11736__auto___41988 = cljs.core.chunk_first(seq__41928_41987__$1);
var G__41989 = cljs.core.chunk_rest(seq__41928_41987__$1);
var G__41990 = c__11736__auto___41988;
var G__41991 = cljs.core.count(c__11736__auto___41988);
var G__41992 = (0);
seq__41928_41960 = G__41989;
chunk__41929_41961 = G__41990;
count__41930_41962 = G__41991;
i__41931_41964 = G__41992;
continue;
} else {
var map__41937_41993 = cljs.core.first(seq__41928_41987__$1);
var map__41937_41994__$1 = ((((!((map__41937_41993 == null)))?((((map__41937_41993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41937_41993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41937_41993):map__41937_41993);
var payload_41995 = map__41937_41994__$1;
var query_41996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937_41994__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load_41997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937_41994__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error_41998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937_41994__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors_41999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937_41994__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var on_load_SINGLEQUOTE__42003 = ((function (seq__41928_41960,chunk__41929_41961,count__41930_41962,i__41931_41964,seq__41922,chunk__41923,count__41924,i__41925,map__41937_41993,map__41937_41994__$1,payload_41995,query_41996,on_load_41997,on_error_41998,load_descriptors_41999,seq__41928_41987__$1,temp__5457__auto___41986,queue_41957,network_41958,parallel_payload_41959,remote,map__41920,map__41920__$1,send_queues,reconciler,networking){
return (function (p1__41917_SHARP_){
return (on_load_41997.cljs$core$IFn$_invoke$arity$2 ? on_load_41997.cljs$core$IFn$_invoke$arity$2(p1__41917_SHARP_,load_descriptors_41999) : on_load_41997.call(null,p1__41917_SHARP_,load_descriptors_41999));
});})(seq__41928_41960,chunk__41929_41961,count__41930_41962,i__41931_41964,seq__41922,chunk__41923,count__41924,i__41925,map__41937_41993,map__41937_41994__$1,payload_41995,query_41996,on_load_41997,on_error_41998,load_descriptors_41999,seq__41928_41987__$1,temp__5457__auto___41986,queue_41957,network_41958,parallel_payload_41959,remote,map__41920,map__41920__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__42004 = ((function (seq__41928_41960,chunk__41929_41961,count__41930_41962,i__41931_41964,seq__41922,chunk__41923,count__41924,i__41925,on_load_SINGLEQUOTE__42003,map__41937_41993,map__41937_41994__$1,payload_41995,query_41996,on_load_41997,on_error_41998,load_descriptors_41999,seq__41928_41987__$1,temp__5457__auto___41986,queue_41957,network_41958,parallel_payload_41959,remote,map__41920,map__41920__$1,send_queues,reconciler,networking){
return (function (p1__41918_SHARP_){
return (on_error_41998.cljs$core$IFn$_invoke$arity$2 ? on_error_41998.cljs$core$IFn$_invoke$arity$2(p1__41918_SHARP_,load_descriptors_41999) : on_error_41998.call(null,p1__41918_SHARP_,load_descriptors_41999));
});})(seq__41928_41960,chunk__41929_41961,count__41930_41962,i__41931_41964,seq__41922,chunk__41923,count__41924,i__41925,on_load_SINGLEQUOTE__42003,map__41937_41993,map__41937_41994__$1,payload_41995,query_41996,on_load_41997,on_error_41998,load_descriptors_41999,seq__41928_41987__$1,temp__5457__auto___41986,queue_41957,network_41958,parallel_payload_41959,remote,map__41920,map__41920__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_41958,query_41996,on_load_SINGLEQUOTE__42003,on_error_SINGLEQUOTE__42004,null);

var G__42008 = cljs.core.next(seq__41928_41987__$1);
var G__42009 = null;
var G__42010 = (0);
var G__42011 = (0);
seq__41928_41960 = G__42008;
chunk__41929_41961 = G__42009;
count__41930_41962 = G__42010;
i__41931_41964 = G__42011;
continue;
}
} else {
}
}
break;
}

var fetch_payload_42012 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_42012)){
fulcro.client.impl.application.enqueue(queue_41957,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_42012,cljs.core.cst$kw$networking,network_41958));

var G__42014 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_42012 = G__42014;
continue;
} else {
}
break;
}

var G__42016 = seq__41922;
var G__42017 = chunk__41923;
var G__42018 = count__41924;
var G__42019 = (i__41925 + (1));
seq__41922 = G__42016;
chunk__41923 = G__42017;
count__41924 = G__42018;
i__41925 = G__42019;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__41922);
if(temp__5457__auto__){
var seq__41922__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41922__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__41922__$1);
var G__42021 = cljs.core.chunk_rest(seq__41922__$1);
var G__42022 = c__11736__auto__;
var G__42023 = cljs.core.count(c__11736__auto__);
var G__42024 = (0);
seq__41922 = G__42021;
chunk__41923 = G__42022;
count__41924 = G__42023;
i__41925 = G__42024;
continue;
} else {
var remote = cljs.core.first(seq__41922__$1);
var queue_42025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_42026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_42027 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__41943_42028 = cljs.core.seq(parallel_payload_42027);
var chunk__41944_42029 = null;
var count__41945_42030 = (0);
var i__41946_42031 = (0);
while(true){
if((i__41946_42031 < count__41945_42030)){
var map__41947_42035 = chunk__41944_42029.cljs$core$IIndexed$_nth$arity$2(null,i__41946_42031);
var map__41947_42036__$1 = ((((!((map__41947_42035 == null)))?((((map__41947_42035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41947_42035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41947_42035):map__41947_42035);
var payload_42037 = map__41947_42036__$1;
var query_42038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41947_42036__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load_42039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41947_42036__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error_42040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41947_42036__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors_42041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41947_42036__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var on_load_SINGLEQUOTE__42042 = ((function (seq__41943_42028,chunk__41944_42029,count__41945_42030,i__41946_42031,seq__41922,chunk__41923,count__41924,i__41925,map__41947_42035,map__41947_42036__$1,payload_42037,query_42038,on_load_42039,on_error_42040,load_descriptors_42041,queue_42025,network_42026,parallel_payload_42027,remote,seq__41922__$1,temp__5457__auto__,map__41920,map__41920__$1,send_queues,reconciler,networking){
return (function (p1__41917_SHARP_){
return (on_load_42039.cljs$core$IFn$_invoke$arity$2 ? on_load_42039.cljs$core$IFn$_invoke$arity$2(p1__41917_SHARP_,load_descriptors_42041) : on_load_42039.call(null,p1__41917_SHARP_,load_descriptors_42041));
});})(seq__41943_42028,chunk__41944_42029,count__41945_42030,i__41946_42031,seq__41922,chunk__41923,count__41924,i__41925,map__41947_42035,map__41947_42036__$1,payload_42037,query_42038,on_load_42039,on_error_42040,load_descriptors_42041,queue_42025,network_42026,parallel_payload_42027,remote,seq__41922__$1,temp__5457__auto__,map__41920,map__41920__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__42043 = ((function (seq__41943_42028,chunk__41944_42029,count__41945_42030,i__41946_42031,seq__41922,chunk__41923,count__41924,i__41925,on_load_SINGLEQUOTE__42042,map__41947_42035,map__41947_42036__$1,payload_42037,query_42038,on_load_42039,on_error_42040,load_descriptors_42041,queue_42025,network_42026,parallel_payload_42027,remote,seq__41922__$1,temp__5457__auto__,map__41920,map__41920__$1,send_queues,reconciler,networking){
return (function (p1__41918_SHARP_){
return (on_error_42040.cljs$core$IFn$_invoke$arity$2 ? on_error_42040.cljs$core$IFn$_invoke$arity$2(p1__41918_SHARP_,load_descriptors_42041) : on_error_42040.call(null,p1__41918_SHARP_,load_descriptors_42041));
});})(seq__41943_42028,chunk__41944_42029,count__41945_42030,i__41946_42031,seq__41922,chunk__41923,count__41924,i__41925,on_load_SINGLEQUOTE__42042,map__41947_42035,map__41947_42036__$1,payload_42037,query_42038,on_load_42039,on_error_42040,load_descriptors_42041,queue_42025,network_42026,parallel_payload_42027,remote,seq__41922__$1,temp__5457__auto__,map__41920,map__41920__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_42026,query_42038,on_load_SINGLEQUOTE__42042,on_error_SINGLEQUOTE__42043,null);

var G__42049 = seq__41943_42028;
var G__42050 = chunk__41944_42029;
var G__42051 = count__41945_42030;
var G__42052 = (i__41946_42031 + (1));
seq__41943_42028 = G__42049;
chunk__41944_42029 = G__42050;
count__41945_42030 = G__42051;
i__41946_42031 = G__42052;
continue;
} else {
var temp__5457__auto___42054__$1 = cljs.core.seq(seq__41943_42028);
if(temp__5457__auto___42054__$1){
var seq__41943_42055__$1 = temp__5457__auto___42054__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41943_42055__$1)){
var c__11736__auto___42056 = cljs.core.chunk_first(seq__41943_42055__$1);
var G__42057 = cljs.core.chunk_rest(seq__41943_42055__$1);
var G__42058 = c__11736__auto___42056;
var G__42059 = cljs.core.count(c__11736__auto___42056);
var G__42060 = (0);
seq__41943_42028 = G__42057;
chunk__41944_42029 = G__42058;
count__41945_42030 = G__42059;
i__41946_42031 = G__42060;
continue;
} else {
var map__41951_42061 = cljs.core.first(seq__41943_42055__$1);
var map__41951_42062__$1 = ((((!((map__41951_42061 == null)))?((((map__41951_42061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41951_42061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41951_42061):map__41951_42061);
var payload_42063 = map__41951_42062__$1;
var query_42064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41951_42062__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load_42065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41951_42062__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error_42066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41951_42062__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors_42067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41951_42062__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var on_load_SINGLEQUOTE__42071 = ((function (seq__41943_42028,chunk__41944_42029,count__41945_42030,i__41946_42031,seq__41922,chunk__41923,count__41924,i__41925,map__41951_42061,map__41951_42062__$1,payload_42063,query_42064,on_load_42065,on_error_42066,load_descriptors_42067,seq__41943_42055__$1,temp__5457__auto___42054__$1,queue_42025,network_42026,parallel_payload_42027,remote,seq__41922__$1,temp__5457__auto__,map__41920,map__41920__$1,send_queues,reconciler,networking){
return (function (p1__41917_SHARP_){
return (on_load_42065.cljs$core$IFn$_invoke$arity$2 ? on_load_42065.cljs$core$IFn$_invoke$arity$2(p1__41917_SHARP_,load_descriptors_42067) : on_load_42065.call(null,p1__41917_SHARP_,load_descriptors_42067));
});})(seq__41943_42028,chunk__41944_42029,count__41945_42030,i__41946_42031,seq__41922,chunk__41923,count__41924,i__41925,map__41951_42061,map__41951_42062__$1,payload_42063,query_42064,on_load_42065,on_error_42066,load_descriptors_42067,seq__41943_42055__$1,temp__5457__auto___42054__$1,queue_42025,network_42026,parallel_payload_42027,remote,seq__41922__$1,temp__5457__auto__,map__41920,map__41920__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__42072 = ((function (seq__41943_42028,chunk__41944_42029,count__41945_42030,i__41946_42031,seq__41922,chunk__41923,count__41924,i__41925,on_load_SINGLEQUOTE__42071,map__41951_42061,map__41951_42062__$1,payload_42063,query_42064,on_load_42065,on_error_42066,load_descriptors_42067,seq__41943_42055__$1,temp__5457__auto___42054__$1,queue_42025,network_42026,parallel_payload_42027,remote,seq__41922__$1,temp__5457__auto__,map__41920,map__41920__$1,send_queues,reconciler,networking){
return (function (p1__41918_SHARP_){
return (on_error_42066.cljs$core$IFn$_invoke$arity$2 ? on_error_42066.cljs$core$IFn$_invoke$arity$2(p1__41918_SHARP_,load_descriptors_42067) : on_error_42066.call(null,p1__41918_SHARP_,load_descriptors_42067));
});})(seq__41943_42028,chunk__41944_42029,count__41945_42030,i__41946_42031,seq__41922,chunk__41923,count__41924,i__41925,on_load_SINGLEQUOTE__42071,map__41951_42061,map__41951_42062__$1,payload_42063,query_42064,on_load_42065,on_error_42066,load_descriptors_42067,seq__41943_42055__$1,temp__5457__auto___42054__$1,queue_42025,network_42026,parallel_payload_42027,remote,seq__41922__$1,temp__5457__auto__,map__41920,map__41920__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.real_send(network_42026,query_42064,on_load_SINGLEQUOTE__42071,on_error_SINGLEQUOTE__42072,null);

var G__42076 = cljs.core.next(seq__41943_42055__$1);
var G__42077 = null;
var G__42078 = (0);
var G__42079 = (0);
seq__41943_42028 = G__42076;
chunk__41944_42029 = G__42077;
count__41945_42030 = G__42078;
i__41946_42031 = G__42079;
continue;
}
} else {
}
}
break;
}

var fetch_payload_42080 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_42080)){
fulcro.client.impl.application.enqueue(queue_42025,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_42080,cljs.core.cst$kw$networking,network_42026));

var G__42081 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_42080 = G__42081;
continue;
} else {
}
break;
}

var G__42084 = cljs.core.next(seq__41922__$1);
var G__42085 = null;
var G__42086 = (0);
var G__42087 = (0);
seq__41922 = G__42084;
chunk__41923 = G__42085;
count__41924 = G__42086;
i__41925 = G__42087;
continue;
}
} else {
return null;
}
}
break;
}
});
fulcro.client.impl.application.detect_errant_remotes = (function fulcro$client$impl$application$detect_errant_remotes(p__42089){
var map__42090 = p__42089;
var map__42090__$1 = ((((!((map__42090 == null)))?((((map__42090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42090):map__42090);
var app = map__42090__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42090__$1,cljs.core.cst$kw$reconciler);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42090__$1,cljs.core.cst$kw$send_DASH_queues);
var state = fulcro.client.primitives.app_state(reconciler);
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
fulcro.client.impl.application.server_send = (function fulcro$client$impl$application$server_send(app,remote_tx_map,merge_result_callback){
fulcro.client.impl.application.detect_errant_remotes(app);

fulcro.client.impl.application.enqueue_mutations(app,remote_tx_map,merge_result_callback);

return fulcro.client.impl.application.enqueue_reads(app);
});
/**
 * Sends a network payload. There are two kinds of payloads in Fulcro. The first is
 *   for reads, which are tracked by load descriptors in the app state. These load descriptors
 *   tell the plumbing how to handle the response, and expect to only be merged in once. Mutations
 *   do not have a payload, and can technically receive progress updates from the network. The built-in
 *   networking does not (currently) give progress events, but plugin networking can. It is currently not
 *   supported to give an update on a load, so this function is careful to detect that a payload is a send
 *   and turns all but the last update into a no-op. The send-complete function comes from the
 *   network sequential processing loop, and when called unblocks the network processing to allow the
 *   next request to go. Be very careful with this code, as bugs will cause applications to stop responding
 *   to remote requests.
 */
fulcro.client.impl.application.send_payload = (function fulcro$client$impl$application$send_payload(network,payload,send_complete){
var map__42103 = payload;
var map__42103__$1 = ((((!((map__42103 == null)))?((((map__42103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42103):map__42103);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__42103,map__42103__$1,query,on_load,on_error,load_descriptors){
return (function (p1__42098_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__42098_SHARP_,load_descriptors) : on_load.call(null,p1__42098_SHARP_,load_descriptors));
});})(map__42103,map__42103__$1,query,on_load,on_error,load_descriptors))
:on_load);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__42103,map__42103__$1,query,on_load,on_error,load_descriptors,merge_data,on_update){
return (function (p1__42101_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__42101_SHARP_,load_descriptors) : on_error.call(null,p1__42101_SHARP_,load_descriptors));
});})(map__42103,map__42103__$1,query,on_load,on_error,load_descriptors,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,on_error__$1);
var on_done = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,merge_data);
if(cljs.core.truth_(fulcro.client.impl.data_fetch.is_deferred_transaction_QMARK_(query))){
var G__42105 = cljs.core.PersistentArrayMap.EMPTY;
return (on_done.cljs$core$IFn$_invoke$arity$1 ? on_done.cljs$core$IFn$_invoke$arity$1(G__42105) : on_done.call(null,G__42105));
} else {
return fulcro.client.impl.application.real_send(network,query,on_done,on_error__$2,on_update);
}
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
fulcro.client.impl.application.start_network_sequential_processing = (function fulcro$client$impl$application$start_network_sequential_processing(p__42116){
var map__42117 = p__42116;
var map__42117__$1 = ((((!((map__42117 == null)))?((((map__42117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42117):map__42117);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42117__$1,cljs.core.cst$kw$networking);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42117__$1,cljs.core.cst$kw$send_DASH_queues);
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42117__$1,cljs.core.cst$kw$response_DASH_channels);
var seq__42122 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__42123 = null;
var count__42124 = (0);
var i__42125 = (0);
while(true){
if((i__42125 < count__42124)){
var remote = chunk__42123.cljs$core$IIndexed$_nth$arity$2(null,i__42125);
var queue_42374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_42375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__42376 = fulcro.client.impl.application.is_sequential_QMARK_(network_42375);
var response_channel_42377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_42378 = (cljs.core.truth_(sequential_QMARK__42376)?((function (seq__42122,chunk__42123,count__42124,i__42125,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,remote,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (){
var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto__,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,remote,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto__,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,remote,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (state_42129){
var state_val_42130 = (state_42129[(1)]);
if((state_val_42130 === (1))){
var state_42129__$1 = state_42129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42129__$1,(2),response_channel_42377,cljs.core.cst$kw$complete);
} else {
if((state_val_42130 === (2))){
var inst_42127 = (state_42129[(2)]);
var state_42129__$1 = state_42129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42129__$1,inst_42127);
} else {
return null;
}
}
});})(seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto__,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,remote,map__42117,map__42117__$1,networking,send_queues,response_channels))
;
return ((function (seq__42122,chunk__42123,count__42124,i__42125,switch__16860__auto__,c__17404__auto__,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,remote,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0 = (function (){
var statearr_42134 = [null,null,null,null,null,null,null];
(statearr_42134[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__);

(statearr_42134[(1)] = (1));

return statearr_42134;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1 = (function (state_42129){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_42129);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e42135){if((e42135 instanceof Object)){
var ex__16864__auto__ = e42135;
var statearr_42136_42386 = state_42129;
(statearr_42136_42386[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42129);

return cljs.core.cst$kw$recur;
} else {
throw e42135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__42389 = state_42129;
state_42129 = G__42389;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__ = function(state_42129){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1.call(this,state_42129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__;
})()
;})(seq__42122,chunk__42123,count__42124,i__42125,switch__16860__auto__,c__17404__auto__,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,remote,map__42117,map__42117__$1,networking,send_queues,response_channels))
})();
var state__17406__auto__ = (function (){var statearr_42137 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_42137[(6)] = c__17404__auto__);

return statearr_42137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto__,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,remote,map__42117,map__42117__$1,networking,send_queues,response_channels))
);

return c__17404__auto__;
});})(seq__42122,chunk__42123,count__42124,i__42125,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,remote,map__42117,map__42117__$1,networking,send_queues,response_channels))
:cljs.core.identity);
var c__17404__auto___42390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto___42390,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,send_complete_42378,remote,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto___42390,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,send_complete_42378,remote,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (state_42192){
var state_val_42193 = (state_42192[(1)]);
if((state_val_42193 === (7))){
var inst_42161 = (state_42192[(2)]);
var state_42192__$1 = state_42192;
if(cljs.core.truth_(inst_42161)){
var statearr_42196_42394 = state_42192__$1;
(statearr_42196_42394[(1)] = (11));

} else {
var statearr_42198_42395 = state_42192__$1;
(statearr_42198_42395[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (20))){
var inst_42180 = (state_42192[(2)]);
var state_42192__$1 = state_42192;
if(cljs.core.truth_(inst_42180)){
var statearr_42199_42396 = state_42192__$1;
(statearr_42199_42396[(1)] = (21));

} else {
var statearr_42200_42397 = state_42192__$1;
(statearr_42200_42397[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (1))){
var state_42192__$1 = state_42192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42192__$1,(2),queue_42374);
} else {
if((state_val_42193 === (24))){
var inst_42187 = (state_42192[(2)]);
var inst_42141 = inst_42187;
var state_42192__$1 = (function (){var statearr_42201 = state_42192;
(statearr_42201[(7)] = inst_42141);

return statearr_42201;
})();
var statearr_42202_42401 = state_42192__$1;
(statearr_42202_42401[(2)] = null);

(statearr_42202_42401[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (4))){
var inst_42190 = (state_42192[(2)]);
var state_42192__$1 = state_42192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42192__$1,inst_42190);
} else {
if((state_val_42193 === (15))){
var state_42192__$1 = state_42192;
var statearr_42203_42402 = state_42192__$1;
(statearr_42203_42402[(2)] = null);

(statearr_42203_42402[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (21))){
var inst_42167 = (state_42192[(8)]);
var inst_42169 = (state_42192[(9)]);
var inst_42168 = (state_42192[(10)]);
var inst_42182 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inst_42168,fulcro.history.remote_activity_finished,inst_42169,inst_42167);
var state_42192__$1 = state_42192;
var statearr_42206_42406 = state_42192__$1;
(statearr_42206_42406[(2)] = inst_42182);

(statearr_42206_42406[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (13))){
var inst_42141 = (state_42192[(7)]);
var inst_42166 = (state_42192[(2)]);
var inst_42167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42166,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time);
var inst_42168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42166,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom);
var inst_42169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42166,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote);
var inst_42170 = fulcro.client.impl.application.send_payload(network_42375,inst_42141,send_complete_42378);
var state_42192__$1 = (function (){var statearr_42208 = state_42192;
(statearr_42208[(8)] = inst_42167);

(statearr_42208[(9)] = inst_42169);

(statearr_42208[(11)] = inst_42170);

(statearr_42208[(10)] = inst_42168);

return statearr_42208;
})();
if(cljs.core.truth_(sequential_QMARK__42376)){
var statearr_42209_42409 = state_42192__$1;
(statearr_42209_42409[(1)] = (14));

} else {
var statearr_42210_42410 = state_42192__$1;
(statearr_42210_42410[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (22))){
var state_42192__$1 = state_42192;
var statearr_42211_42412 = state_42192__$1;
(statearr_42211_42412[(2)] = null);

(statearr_42211_42412[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (6))){
var state_42192__$1 = state_42192;
var statearr_42212_42413 = state_42192__$1;
(statearr_42212_42413[(2)] = false);

(statearr_42212_42413[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (17))){
var inst_42173 = (state_42192[(2)]);
var state_42192__$1 = state_42192;
var statearr_42216_42414 = state_42192__$1;
(statearr_42216_42414[(2)] = inst_42173);

(statearr_42216_42414[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (3))){
var inst_42141 = (state_42192[(7)]);
var inst_42146 = (inst_42141 == null);
var inst_42147 = cljs.core.not(inst_42146);
var state_42192__$1 = state_42192;
if(inst_42147){
var statearr_42217_42417 = state_42192__$1;
(statearr_42217_42417[(1)] = (5));

} else {
var statearr_42218_42418 = state_42192__$1;
(statearr_42218_42418[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (12))){
var inst_42141 = (state_42192[(7)]);
var state_42192__$1 = state_42192;
var statearr_42219_42420 = state_42192__$1;
(statearr_42219_42420[(2)] = inst_42141);

(statearr_42219_42420[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (2))){
var inst_42140 = (state_42192[(2)]);
var inst_42141 = inst_42140;
var state_42192__$1 = (function (){var statearr_42220 = state_42192;
(statearr_42220[(7)] = inst_42141);

return statearr_42220;
})();
var statearr_42221_42421 = state_42192__$1;
(statearr_42221_42421[(2)] = null);

(statearr_42221_42421[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (23))){
var inst_42185 = (state_42192[(2)]);
var state_42192__$1 = (function (){var statearr_42224 = state_42192;
(statearr_42224[(12)] = inst_42185);

return statearr_42224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42192__$1,(24),queue_42374);
} else {
if((state_val_42193 === (19))){
var inst_42168 = (state_42192[(10)]);
var state_42192__$1 = state_42192;
var statearr_42226_42424 = state_42192__$1;
(statearr_42226_42424[(2)] = inst_42168);

(statearr_42226_42424[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (11))){
var inst_42141 = (state_42192[(7)]);
var inst_42163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42141);
var state_42192__$1 = state_42192;
var statearr_42227_42426 = state_42192__$1;
(statearr_42227_42426[(2)] = inst_42163);

(statearr_42227_42426[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (9))){
var state_42192__$1 = state_42192;
var statearr_42228_42427 = state_42192__$1;
(statearr_42228_42427[(2)] = false);

(statearr_42228_42427[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (5))){
var inst_42141 = (state_42192[(7)]);
var inst_42150 = inst_42141.cljs$lang$protocol_mask$partition0$;
var inst_42151 = (inst_42150 & (64));
var inst_42152 = inst_42141.cljs$core$ISeq$;
var inst_42153 = (cljs.core.PROTOCOL_SENTINEL === inst_42152);
var inst_42154 = (inst_42151) || (inst_42153);
var state_42192__$1 = state_42192;
if(cljs.core.truth_(inst_42154)){
var statearr_42232_42430 = state_42192__$1;
(statearr_42232_42430[(1)] = (8));

} else {
var statearr_42233_42432 = state_42192__$1;
(statearr_42233_42432[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (14))){
var state_42192__$1 = state_42192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42192__$1,(17),response_channel_42377);
} else {
if((state_val_42193 === (16))){
var inst_42168 = (state_42192[(10)]);
var inst_42176 = (state_42192[(2)]);
var state_42192__$1 = (function (){var statearr_42234 = state_42192;
(statearr_42234[(13)] = inst_42176);

return statearr_42234;
})();
if(cljs.core.truth_(inst_42168)){
var statearr_42235_42433 = state_42192__$1;
(statearr_42235_42433[(1)] = (18));

} else {
var statearr_42236_42434 = state_42192__$1;
(statearr_42236_42434[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (10))){
var inst_42158 = (state_42192[(2)]);
var state_42192__$1 = state_42192;
var statearr_42237_42435 = state_42192__$1;
(statearr_42237_42435[(2)] = inst_42158);

(statearr_42237_42435[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (18))){
var inst_42167 = (state_42192[(8)]);
var state_42192__$1 = state_42192;
var statearr_42238_42436 = state_42192__$1;
(statearr_42238_42436[(2)] = inst_42167);

(statearr_42238_42436[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42193 === (8))){
var state_42192__$1 = state_42192;
var statearr_42241_42437 = state_42192__$1;
(statearr_42241_42437[(2)] = true);

(statearr_42241_42437[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto___42390,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,send_complete_42378,remote,map__42117,map__42117__$1,networking,send_queues,response_channels))
;
return ((function (seq__42122,chunk__42123,count__42124,i__42125,switch__16860__auto__,c__17404__auto___42390,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,send_complete_42378,remote,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0 = (function (){
var statearr_42243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42243[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__);

(statearr_42243[(1)] = (1));

return statearr_42243;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1 = (function (state_42192){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_42192);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e42244){if((e42244 instanceof Object)){
var ex__16864__auto__ = e42244;
var statearr_42245_42440 = state_42192;
(statearr_42245_42440[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42192);

return cljs.core.cst$kw$recur;
} else {
throw e42244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__42442 = state_42192;
state_42192 = G__42442;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__ = function(state_42192){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1.call(this,state_42192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__;
})()
;})(seq__42122,chunk__42123,count__42124,i__42125,switch__16860__auto__,c__17404__auto___42390,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,send_complete_42378,remote,map__42117,map__42117__$1,networking,send_queues,response_channels))
})();
var state__17406__auto__ = (function (){var statearr_42247 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_42247[(6)] = c__17404__auto___42390);

return statearr_42247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto___42390,queue_42374,network_42375,sequential_QMARK__42376,response_channel_42377,send_complete_42378,remote,map__42117,map__42117__$1,networking,send_queues,response_channels))
);


var G__42444 = seq__42122;
var G__42445 = chunk__42123;
var G__42446 = count__42124;
var G__42447 = (i__42125 + (1));
seq__42122 = G__42444;
chunk__42123 = G__42445;
count__42124 = G__42446;
i__42125 = G__42447;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__42122);
if(temp__5457__auto__){
var seq__42122__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42122__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__42122__$1);
var G__42448 = cljs.core.chunk_rest(seq__42122__$1);
var G__42449 = c__11736__auto__;
var G__42450 = cljs.core.count(c__11736__auto__);
var G__42451 = (0);
seq__42122 = G__42448;
chunk__42123 = G__42449;
count__42124 = G__42450;
i__42125 = G__42451;
continue;
} else {
var remote = cljs.core.first(seq__42122__$1);
var queue_42457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_42458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__42459 = fulcro.client.impl.application.is_sequential_QMARK_(network_42458);
var response_channel_42460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_42461 = (cljs.core.truth_(sequential_QMARK__42459)?((function (seq__42122,chunk__42123,count__42124,i__42125,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (){
var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto__,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto__,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (state_42253){
var state_val_42254 = (state_42253[(1)]);
if((state_val_42254 === (1))){
var state_42253__$1 = state_42253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42253__$1,(2),response_channel_42460,cljs.core.cst$kw$complete);
} else {
if((state_val_42254 === (2))){
var inst_42251 = (state_42253[(2)]);
var state_42253__$1 = state_42253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42253__$1,inst_42251);
} else {
return null;
}
}
});})(seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto__,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels))
;
return ((function (seq__42122,chunk__42123,count__42124,i__42125,switch__16860__auto__,c__17404__auto__,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0 = (function (){
var statearr_42258 = [null,null,null,null,null,null,null];
(statearr_42258[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__);

(statearr_42258[(1)] = (1));

return statearr_42258;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1 = (function (state_42253){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_42253);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e42259){if((e42259 instanceof Object)){
var ex__16864__auto__ = e42259;
var statearr_42260_42466 = state_42253;
(statearr_42260_42466[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42253);

return cljs.core.cst$kw$recur;
} else {
throw e42259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__42467 = state_42253;
state_42253 = G__42467;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__ = function(state_42253){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1.call(this,state_42253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__;
})()
;})(seq__42122,chunk__42123,count__42124,i__42125,switch__16860__auto__,c__17404__auto__,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels))
})();
var state__17406__auto__ = (function (){var statearr_42261 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_42261[(6)] = c__17404__auto__);

return statearr_42261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto__,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels))
);

return c__17404__auto__;
});})(seq__42122,chunk__42123,count__42124,i__42125,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels))
:cljs.core.identity);
var c__17404__auto___42468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto___42468,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,send_complete_42461,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto___42468,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,send_complete_42461,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function (state_42316){
var state_val_42317 = (state_42316[(1)]);
if((state_val_42317 === (7))){
var inst_42285 = (state_42316[(2)]);
var state_42316__$1 = state_42316;
if(cljs.core.truth_(inst_42285)){
var statearr_42321_42469 = state_42316__$1;
(statearr_42321_42469[(1)] = (11));

} else {
var statearr_42322_42470 = state_42316__$1;
(statearr_42322_42470[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (20))){
var inst_42304 = (state_42316[(2)]);
var state_42316__$1 = state_42316;
if(cljs.core.truth_(inst_42304)){
var statearr_42323_42471 = state_42316__$1;
(statearr_42323_42471[(1)] = (21));

} else {
var statearr_42324_42472 = state_42316__$1;
(statearr_42324_42472[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (1))){
var state_42316__$1 = state_42316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42316__$1,(2),queue_42457);
} else {
if((state_val_42317 === (24))){
var inst_42311 = (state_42316[(2)]);
var inst_42267 = inst_42311;
var state_42316__$1 = (function (){var statearr_42325 = state_42316;
(statearr_42325[(7)] = inst_42267);

return statearr_42325;
})();
var statearr_42326_42473 = state_42316__$1;
(statearr_42326_42473[(2)] = null);

(statearr_42326_42473[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (4))){
var inst_42314 = (state_42316[(2)]);
var state_42316__$1 = state_42316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42316__$1,inst_42314);
} else {
if((state_val_42317 === (15))){
var state_42316__$1 = state_42316;
var statearr_42328_42474 = state_42316__$1;
(statearr_42328_42474[(2)] = null);

(statearr_42328_42474[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (21))){
var inst_42291 = (state_42316[(8)]);
var inst_42292 = (state_42316[(9)]);
var inst_42293 = (state_42316[(10)]);
var inst_42306 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inst_42292,fulcro.history.remote_activity_finished,inst_42293,inst_42291);
var state_42316__$1 = state_42316;
var statearr_42331_42475 = state_42316__$1;
(statearr_42331_42475[(2)] = inst_42306);

(statearr_42331_42475[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (13))){
var inst_42267 = (state_42316[(7)]);
var inst_42290 = (state_42316[(2)]);
var inst_42291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42290,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time);
var inst_42292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42290,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom);
var inst_42293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42290,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote);
var inst_42294 = fulcro.client.impl.application.send_payload(network_42458,inst_42267,send_complete_42461);
var state_42316__$1 = (function (){var statearr_42332 = state_42316;
(statearr_42332[(8)] = inst_42291);

(statearr_42332[(11)] = inst_42294);

(statearr_42332[(9)] = inst_42292);

(statearr_42332[(10)] = inst_42293);

return statearr_42332;
})();
if(cljs.core.truth_(sequential_QMARK__42459)){
var statearr_42333_42476 = state_42316__$1;
(statearr_42333_42476[(1)] = (14));

} else {
var statearr_42334_42477 = state_42316__$1;
(statearr_42334_42477[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (22))){
var state_42316__$1 = state_42316;
var statearr_42335_42478 = state_42316__$1;
(statearr_42335_42478[(2)] = null);

(statearr_42335_42478[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (6))){
var state_42316__$1 = state_42316;
var statearr_42338_42479 = state_42316__$1;
(statearr_42338_42479[(2)] = false);

(statearr_42338_42479[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (17))){
var inst_42297 = (state_42316[(2)]);
var state_42316__$1 = state_42316;
var statearr_42340_42480 = state_42316__$1;
(statearr_42340_42480[(2)] = inst_42297);

(statearr_42340_42480[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (3))){
var inst_42267 = (state_42316[(7)]);
var inst_42271 = (inst_42267 == null);
var inst_42272 = cljs.core.not(inst_42271);
var state_42316__$1 = state_42316;
if(inst_42272){
var statearr_42341_42481 = state_42316__$1;
(statearr_42341_42481[(1)] = (5));

} else {
var statearr_42342_42482 = state_42316__$1;
(statearr_42342_42482[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (12))){
var inst_42267 = (state_42316[(7)]);
var state_42316__$1 = state_42316;
var statearr_42343_42485 = state_42316__$1;
(statearr_42343_42485[(2)] = inst_42267);

(statearr_42343_42485[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (2))){
var inst_42265 = (state_42316[(2)]);
var inst_42267 = inst_42265;
var state_42316__$1 = (function (){var statearr_42344 = state_42316;
(statearr_42344[(7)] = inst_42267);

return statearr_42344;
})();
var statearr_42345_42486 = state_42316__$1;
(statearr_42345_42486[(2)] = null);

(statearr_42345_42486[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (23))){
var inst_42309 = (state_42316[(2)]);
var state_42316__$1 = (function (){var statearr_42348 = state_42316;
(statearr_42348[(12)] = inst_42309);

return statearr_42348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42316__$1,(24),queue_42457);
} else {
if((state_val_42317 === (19))){
var inst_42292 = (state_42316[(9)]);
var state_42316__$1 = state_42316;
var statearr_42350_42492 = state_42316__$1;
(statearr_42350_42492[(2)] = inst_42292);

(statearr_42350_42492[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (11))){
var inst_42267 = (state_42316[(7)]);
var inst_42287 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42267);
var state_42316__$1 = state_42316;
var statearr_42351_42493 = state_42316__$1;
(statearr_42351_42493[(2)] = inst_42287);

(statearr_42351_42493[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (9))){
var state_42316__$1 = state_42316;
var statearr_42352_42494 = state_42316__$1;
(statearr_42352_42494[(2)] = false);

(statearr_42352_42494[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (5))){
var inst_42267 = (state_42316[(7)]);
var inst_42274 = inst_42267.cljs$lang$protocol_mask$partition0$;
var inst_42275 = (inst_42274 & (64));
var inst_42276 = inst_42267.cljs$core$ISeq$;
var inst_42277 = (cljs.core.PROTOCOL_SENTINEL === inst_42276);
var inst_42278 = (inst_42275) || (inst_42277);
var state_42316__$1 = state_42316;
if(cljs.core.truth_(inst_42278)){
var statearr_42353_42497 = state_42316__$1;
(statearr_42353_42497[(1)] = (8));

} else {
var statearr_42354_42499 = state_42316__$1;
(statearr_42354_42499[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (14))){
var state_42316__$1 = state_42316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42316__$1,(17),response_channel_42460);
} else {
if((state_val_42317 === (16))){
var inst_42292 = (state_42316[(9)]);
var inst_42300 = (state_42316[(2)]);
var state_42316__$1 = (function (){var statearr_42358 = state_42316;
(statearr_42358[(13)] = inst_42300);

return statearr_42358;
})();
if(cljs.core.truth_(inst_42292)){
var statearr_42359_42500 = state_42316__$1;
(statearr_42359_42500[(1)] = (18));

} else {
var statearr_42360_42501 = state_42316__$1;
(statearr_42360_42501[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (10))){
var inst_42282 = (state_42316[(2)]);
var state_42316__$1 = state_42316;
var statearr_42361_42502 = state_42316__$1;
(statearr_42361_42502[(2)] = inst_42282);

(statearr_42361_42502[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (18))){
var inst_42291 = (state_42316[(8)]);
var state_42316__$1 = state_42316;
var statearr_42362_42504 = state_42316__$1;
(statearr_42362_42504[(2)] = inst_42291);

(statearr_42362_42504[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42317 === (8))){
var state_42316__$1 = state_42316;
var statearr_42363_42505 = state_42316__$1;
(statearr_42363_42505[(2)] = true);

(statearr_42363_42505[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto___42468,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,send_complete_42461,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels))
;
return ((function (seq__42122,chunk__42123,count__42124,i__42125,switch__16860__auto__,c__17404__auto___42468,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,send_complete_42461,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0 = (function (){
var statearr_42366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42366[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__);

(statearr_42366[(1)] = (1));

return statearr_42366;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1 = (function (state_42316){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_42316);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e42368){if((e42368 instanceof Object)){
var ex__16864__auto__ = e42368;
var statearr_42369_42510 = state_42316;
(statearr_42369_42510[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42316);

return cljs.core.cst$kw$recur;
} else {
throw e42368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__42511 = state_42316;
state_42316 = G__42511;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__ = function(state_42316){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1.call(this,state_42316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__16861__auto__;
})()
;})(seq__42122,chunk__42123,count__42124,i__42125,switch__16860__auto__,c__17404__auto___42468,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,send_complete_42461,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels))
})();
var state__17406__auto__ = (function (){var statearr_42370 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_42370[(6)] = c__17404__auto___42468);

return statearr_42370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(seq__42122,chunk__42123,count__42124,i__42125,c__17404__auto___42468,queue_42457,network_42458,sequential_QMARK__42459,response_channel_42460,send_complete_42461,remote,seq__42122__$1,temp__5457__auto__,map__42117,map__42117__$1,networking,send_queues,response_channels))
);


var G__42513 = cljs.core.next(seq__42122__$1);
var G__42514 = null;
var G__42515 = (0);
var G__42516 = (0);
seq__42122 = G__42513;
chunk__42123 = G__42514;
count__42124 = G__42515;
i__42125 = G__42516;
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
var app_id = fulcro.client.impl.protocols.get_id(reconciler);
var re_render = ((function (app_id){
return (function fulcro$client$impl$application$initialize_internationalization_$_re_render(k,r,o,n){
if(fulcro.client.primitives.mounted_QMARK_(fulcro.client.primitives.app_root(reconciler))){
var G__42521 = ((function (app_id){
return (function (){
return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1(reconciler);
});})(app_id))
;
var G__42522 = (0);
return setTimeout(G__42521,G__42522);
} else {
return null;
}
});})(app_id))
;
return cljs.core.add_watch(fulcro.i18n._STAR_current_locale_STAR_,app_id,re_render);
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
fulcro.client.impl.application.generate_reconciler = (function fulcro$client$impl$application$generate_reconciler(p__42526,initial_state,parser,p__42527){
var map__42528 = p__42526;
var map__42528__$1 = ((((!((map__42528 == null)))?((((map__42528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42528):map__42528);
var app = map__42528__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42528__$1,cljs.core.cst$kw$send_DASH_queues);
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42528__$1,cljs.core.cst$kw$mutation_DASH_merge);
var map__42529 = p__42527;
var map__42529__$1 = ((((!((map__42529 == null)))?((((map__42529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42529):map__42529);
var reconciler_options = map__42529__$1;
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42529__$1,cljs.core.cst$kw$migrate);
var rec_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate){
return (function (pure,_,tempids){
var seq__42536_42557 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__42537_42558 = null;
var count__42538_42559 = (0);
var i__42539_42560 = (0);
while(true){
if((i__42539_42560 < count__42538_42559)){
var queue_42561 = chunk__42537_42558.cljs$core$IIndexed$_nth$arity$2(null,i__42539_42560);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_42561,tempids);

var G__42567 = seq__42536_42557;
var G__42568 = chunk__42537_42558;
var G__42569 = count__42538_42559;
var G__42570 = (i__42539_42560 + (1));
seq__42536_42557 = G__42567;
chunk__42537_42558 = G__42568;
count__42538_42559 = G__42569;
i__42539_42560 = G__42570;
continue;
} else {
var temp__5457__auto___42571 = cljs.core.seq(seq__42536_42557);
if(temp__5457__auto___42571){
var seq__42536_42573__$1 = temp__5457__auto___42571;
if(cljs.core.chunked_seq_QMARK_(seq__42536_42573__$1)){
var c__11736__auto___42574 = cljs.core.chunk_first(seq__42536_42573__$1);
var G__42575 = cljs.core.chunk_rest(seq__42536_42573__$1);
var G__42576 = c__11736__auto___42574;
var G__42577 = cljs.core.count(c__11736__auto___42574);
var G__42578 = (0);
seq__42536_42557 = G__42575;
chunk__42537_42558 = G__42576;
count__42538_42559 = G__42577;
i__42539_42560 = G__42578;
continue;
} else {
var queue_42580 = cljs.core.first(seq__42536_42573__$1);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_42580,tempids);

var G__42582 = cljs.core.next(seq__42536_42573__$1);
var G__42583 = null;
var G__42584 = (0);
var G__42585 = (0);
seq__42536_42557 = G__42582;
chunk__42537_42558 = G__42583;
count__42538_42559 = G__42584;
i__42539_42560 = G__42585;
continue;
}
} else {
}
}
break;
}

var state_migrate = (function (){var or__10805__auto__ = migrate;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return fulcro.client.primitives.resolve_tempids;
}
})();
return (state_migrate.cljs$core$IFn$_invoke$arity$2 ? state_migrate.cljs$core$IFn$_invoke$arity$2(pure,tempids) : state_migrate.call(null,pure,tempids));
});})(rec_atom,remotes,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate))
;
var initial_state_with_locale = (function (){var set_default_locale = ((function (rec_atom,remotes,tempid_migrate,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,cljs.core.cst$kw$ui_SLASH_locale,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.cst$kw$en));
});})(rec_atom,remotes,tempid_migrate,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate))
;
var is_atom_QMARK_ = fulcro.util.atom_QMARK_(initial_state);
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
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,reconciler_options,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$migrate,tempid_migrate,cljs.core.cst$kw$state,initial_state_with_locale,cljs.core.cst$kw$send,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate){
return (function (sends_keyed_by_remote,result_merge_callback){
return fulcro.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$reconciler,cljs.core.deref(rec_atom)),sends_keyed_by_remote,result_merge_callback);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate))
,cljs.core.cst$kw$normalize,true,cljs.core.cst$kw$remotes,remotes,cljs.core.cst$kw$merge_DASH_ident,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate))
,cljs.core.cst$kw$merge_DASH_tree,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate){
return (function (target,source){
return fulcro.client.primitives.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__42528,map__42528__$1,app,send_queues,mutation_merge,map__42529,map__42529__$1,reconciler_options,migrate))
,cljs.core.cst$kw$parser,parser], null)], 0));
var rec = fulcro.client.primitives.reconciler(config);
cljs.core.reset_BANG_(rec_atom,rec);

return rec;
});
fulcro.client.impl.application.initialize_global_error_callbacks = (function fulcro$client$impl$application$initialize_global_error_callbacks(app){
var seq__42600 = cljs.core.seq(cljs.core.keys(cljs.core.cst$kw$networking.cljs$core$IFn$_invoke$arity$1(app)));
var chunk__42601 = null;
var count__42602 = (0);
var i__42603 = (0);
while(true){
if((i__42603 < count__42602)){
var remote = chunk__42601.cljs$core$IIndexed$_nth$arity$2(null,i__42603);
var cb_atom_42611 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(fulcro.util.atom_QMARK_(cb_atom_42611))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_42611,((function (seq__42600,chunk__42601,count__42602,i__42603,cb_atom_42611,remote){
return (function (p1__42598_SHARP_){
if(cljs.core.fn_QMARK_(p1__42598_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__42598_SHARP_,fulcro.client.primitives.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__42600,chunk__42601,count__42602,i__42603,cb_atom_42611,remote))
);
} else {
}

var G__42614 = seq__42600;
var G__42615 = chunk__42601;
var G__42616 = count__42602;
var G__42617 = (i__42603 + (1));
seq__42600 = G__42614;
chunk__42601 = G__42615;
count__42602 = G__42616;
i__42603 = G__42617;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__42600);
if(temp__5457__auto__){
var seq__42600__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42600__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__42600__$1);
var G__42621 = cljs.core.chunk_rest(seq__42600__$1);
var G__42622 = c__11736__auto__;
var G__42623 = cljs.core.count(c__11736__auto__);
var G__42624 = (0);
seq__42600 = G__42621;
chunk__42601 = G__42622;
count__42602 = G__42623;
i__42603 = G__42624;
continue;
} else {
var remote = cljs.core.first(seq__42600__$1);
var cb_atom_42625 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(fulcro.util.atom_QMARK_(cb_atom_42625))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_42625,((function (seq__42600,chunk__42601,count__42602,i__42603,cb_atom_42625,remote,seq__42600__$1,temp__5457__auto__){
return (function (p1__42598_SHARP_){
if(cljs.core.fn_QMARK_(p1__42598_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__42598_SHARP_,fulcro.client.primitives.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__42600,chunk__42601,count__42602,i__42603,cb_atom_42625,remote,seq__42600__$1,temp__5457__auto__))
);
} else {
}

var G__42627 = cljs.core.next(seq__42600__$1);
var G__42628 = null;
var G__42629 = (0);
var G__42630 = (0);
seq__42600 = G__42627;
chunk__42601 = G__42628;
count__42602 = G__42629;
i__42603 = G__42630;
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
 * Read function for the built-in parser.
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
fulcro.client.impl.application.read_local = (function fulcro$client$impl$application$read_local(user_read,p__42637,dkey,params){
var map__42638 = p__42637;
var map__42638__$1 = ((((!((map__42638 == null)))?((((map__42638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42638):map__42638);
var env = map__42638__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42638__$1,cljs.core.cst$kw$query);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42638__$1,cljs.core.cst$kw$target);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42638__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42638__$1,cljs.core.cst$kw$ast);
var temp__5455__auto__ = (user_read.cljs$core$IFn$_invoke$arity$3 ? user_read.cljs$core$IFn$_invoke$arity$3(env,dkey,params) : user_read.call(null,env,dkey,params));
if(cljs.core.truth_(temp__5455__auto__)){
var custom_result = temp__5455__auto__;
return custom_result;
} else {
if(cljs.core.not(target)){
var G__42640 = dkey;
switch (G__42640) {
default:
var top_level_prop = (query == null);
var key = (function (){var or__10805__auto__ = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return dkey;
}
})();
var by_ident_QMARK_ = fulcro.util.ident_QMARK_(key);
var union_QMARK_ = cljs.core.map_QMARK_(query);
var data = ((by_ident_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),key));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,((union_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])], null),cljs.core.deref(state),cljs.core.deref(state)),key):((top_level_prop)?data:fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,data,cljs.core.deref(state))
))], null);

}
} else {
return null;
}
}
});
/**
 * This is the entry point for writes. In general this is simply a call to the multi-method
 *   defined by Fulcro (mutate); however, Fulcro supports the concept of a global `post-mutate`
 *   function that will be called anytime the general mutate has an action that is desired. This
 *   can be useful, for example, in cases where you have some post-processing that needs
 *   to happen for a given (sub)set of mutations (that perhaps you did not define).
 */
fulcro.client.impl.application.write_entry_point = (function fulcro$client$impl$application$write_entry_point(env,k,params){
var rv = (function (){try{return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : fulcro.client.mutations.mutate.call(null,env,k,params));
}catch (e42651){var e = e42651;
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Mutation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," failed with exception"].join(''),e], 0));

return null;
}})();
var action = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(rv);
if(cljs.core.truth_(action)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rv,cljs.core.cst$kw$action,((function (rv,action){
return (function (){
try{var action_result = (action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(env,k,params) : action.call(null,env,k,params));
try{(fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : fulcro.client.mutations.post_mutate.call(null,env,k,params));
}catch (e42653){var e_42663 = e42653;
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Post mutate failed on dispatch to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], 0));
}
return action_result;
}catch (e42652){var e = e42652;
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Mutation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," failed with exception"].join(''),e], 0));

throw e;
}});})(rv,action))
);
} else {
return rv;
}
});

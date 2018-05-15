// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.impl.application');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.logging');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('fulcro.history');
goog.require('clojure.set');
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
fulcro.client.impl.application.fallback_handler = (function fulcro$client$impl$application$fallback_handler(p__38649,query){
var map__38650 = p__38649;
var map__38650__$1 = ((((!((map__38650 == null)))?((((map__38650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38650):map__38650);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38650__$1,cljs.core.cst$kw$reconciler);
return ((function (map__38650,map__38650__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc,cljs.core.cst$kw$fulcro_SLASH_server_DASH_error,error);

var temp__5455__auto__ = fulcro.client.primitives.fallback_tx(query,error);
if(cljs.core.truth_(temp__5455__auto__)){
var q = temp__5455__auto__;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,28], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transaction failed. Running fallback.",q], 0));
}catch (e38653){if((e38653 instanceof Error)){
var e__18456__auto___38657 = e38653;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,28], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___38657], 0));
} else {
throw e38653;

}
}
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,q);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,30], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fallback triggered, but no fallbacks were defined."], 0));
}catch (e38655){if((e38655 instanceof Error)){
var e__18456__auto__ = e38655;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,30], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto__], 0));
} else {
throw e38655;

}
}}
});
;})(map__38650,map__38650__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
fulcro.client.impl.application.enqueue = (function fulcro$client$impl$application$enqueue(q,v){
var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto__){
return (function (state_38664){
var state_val_38665 = (state_38664[(1)]);
if((state_val_38665 === (1))){
var state_38664__$1 = state_38664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38664__$1,(2),q,v);
} else {
if((state_val_38665 === (2))){
var inst_38662 = (state_38664[(2)]);
var state_38664__$1 = state_38664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38664__$1,inst_38662);
} else {
return null;
}
}
});})(c__21787__auto__))
;
return ((function (switch__21538__auto__,c__21787__auto__){
return (function() {
var fulcro$client$impl$application$enqueue_$_state_machine__21539__auto__ = null;
var fulcro$client$impl$application$enqueue_$_state_machine__21539__auto____0 = (function (){
var statearr_38667 = [null,null,null,null,null,null,null];
(statearr_38667[(0)] = fulcro$client$impl$application$enqueue_$_state_machine__21539__auto__);

(statearr_38667[(1)] = (1));

return statearr_38667;
});
var fulcro$client$impl$application$enqueue_$_state_machine__21539__auto____1 = (function (state_38664){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_38664);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e38668){if((e38668 instanceof Object)){
var ex__21542__auto__ = e38668;
var statearr_38669_38676 = state_38664;
(statearr_38669_38676[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38664);

return cljs.core.cst$kw$recur;
} else {
throw e38668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__38677 = state_38664;
state_38664 = G__38677;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
fulcro$client$impl$application$enqueue_$_state_machine__21539__auto__ = function(state_38664){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$enqueue_$_state_machine__21539__auto____0.call(this);
case 1:
return fulcro$client$impl$application$enqueue_$_state_machine__21539__auto____1.call(this,state_38664);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$enqueue_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$enqueue_$_state_machine__21539__auto____0;
fulcro$client$impl$application$enqueue_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$enqueue_$_state_machine__21539__auto____1;
return fulcro$client$impl$application$enqueue_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_38670 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_38670[(6)] = c__21787__auto__);

return statearr_38670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$impl$application_SLASH_enqueue,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$queue,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$queue,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue,cljs.core.cst$kw$payload], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$queue,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$payload,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response. DEPRECATED: If
 *   you're doing something really low-level with networking, use send-with-history-tracking.
 */
fulcro.client.impl.application.real_send = (function fulcro$client$impl$application$real_send(var_args){
var G__38700 = arguments.length;
switch (G__38700) {
case 2:
return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2 = (function (net,p__38703){
var map__38704 = p__38703;
var map__38704__$1 = ((((!((map__38704 == null)))?((((map__38704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38704):map__38704);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.cst$kw$reconciler);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.cst$kw$tx);
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.cst$kw$on_DASH_done);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.cst$kw$on_DASH_error);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.cst$kw$on_DASH_load);
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.cst$kw$abort_DASH_id);
var progress_tx = ((function (map__38704,map__38704__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p1__38693_SHARP_){
return fulcro.client.mutations.progressive_update_transaction(tx,p1__38693_SHARP_);
});})(map__38704,map__38704__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var tx__$1 = fulcro.client.primitives.strip_ui(tx);
if(((!((net == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$ProgressiveTransfer$)))?true:false):false)){
return fulcro.client.network.updating_send(net,tx__$1,on_done,on_error,on_load);
} else {
if(((!((net == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroNetwork$)))?true:false):false)){
return fulcro.client.network.send(net,tx__$1,on_done,on_error);
} else {
if(((!((net == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroRemoteI$)))?true:false):false)){
var on_done__$1 = ((function (progress_tx,tx__$1,map__38704,map__38704__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__38719){
var map__38720 = p__38719;
var map__38720__$1 = ((((!((map__38720 == null)))?((((map__38720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38720):map__38720);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38720__$1,cljs.core.cst$kw$body);
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38720__$1,cljs.core.cst$kw$transaction);
return (on_done.cljs$core$IFn$_invoke$arity$2 ? on_done.cljs$core$IFn$_invoke$arity$2(body,transaction) : on_done.call(null,body,transaction));
});})(progress_tx,tx__$1,map__38704,map__38704__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_error__$1 = ((function (on_done__$1,progress_tx,tx__$1,map__38704,map__38704__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__38725){
var map__38726 = p__38725;
var map__38726__$1 = ((((!((map__38726 == null)))?((((map__38726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38726):map__38726);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38726__$1,cljs.core.cst$kw$body);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(body) : on_error.call(null,body));
});})(on_done__$1,progress_tx,tx__$1,map__38704,map__38704__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_load__$1 = ((function (on_done__$1,on_error__$1,progress_tx,tx__$1,map__38704,map__38704__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (progress){
if(cljs.core.truth_(reconciler)){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,progress_tx(progress));
} else {
return null;
}
});})(on_done__$1,on_error__$1,progress_tx,tx__$1,map__38704,map__38704__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
return fulcro.client.network.transmit(net,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$fulcro$client$network_SLASH_edn,tx__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id,abort_id,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler,on_done__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler,on_error__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_handler,on_load__$1], null));
} else {
return null;
}
}
}
});

fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$5 = (function (net,tx,on_done,on_error,on_load){
return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2(net,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tx,tx,cljs.core.cst$kw$on_DASH_done,on_done,cljs.core.cst$kw$on_DASH_error,on_error,cljs.core.cst$kw$on_DASH_load,on_load], null));
});

fulcro.client.impl.application.real_send.cljs$lang$maxFixedArity = 5;

/**
 * Does a real send but includes history activity tracking to prevent the gc of history that is related to active
 *   network requests. If you're doing something really low level in the networking, you want this over real-send.
 */
fulcro.client.impl.application.send_with_history_tracking = (function fulcro$client$impl$application$send_with_history_tracking(var_args){
var G__38776 = arguments.length;
switch (G__38776) {
case 2:
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2 = (function (net,p__38779){
var map__38780 = p__38779;
var map__38780__$1 = ((((!((map__38780 == null)))?((((map__38780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38780):map__38780);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,cljs.core.cst$kw$reconciler);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,cljs.core.cst$kw$payload);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,cljs.core.cst$kw$tx);
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,cljs.core.cst$kw$on_DASH_done);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,cljs.core.cst$kw$on_DASH_error);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38780__$1,cljs.core.cst$kw$on_DASH_load);
var map__38783 = payload;
var map__38783__$1 = ((((!((map__38783 == null)))?((((map__38783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38783):map__38783);
var history_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38783__$1,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom);
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38783__$1,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38783__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote);
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38783__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id);
var with_history_recording = ((function (map__38783,map__38783__$1,history_atom,tx_time,remote,abort_id,map__38780,map__38780__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__38783,map__38783__$1,history_atom,tx_time,remote,abort_id,map__38780,map__38780__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (resp,items_or_tx){
if(cljs.core.truth_((function (){var and__10793__auto__ = history_atom;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = remote;
if(cljs.core.truth_(and__10793__auto____$1)){
return tx_time;
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history_atom,fulcro.history.remote_activity_finished,remote,tx_time);
} else {
}

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(resp,items_or_tx) : handler.call(null,resp,items_or_tx));
});
;})(map__38783,map__38783__$1,history_atom,tx_time,remote,abort_id,map__38780,map__38780__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__38783,map__38783__$1,history_atom,tx_time,remote,abort_id,map__38780,map__38780__$1,reconciler,payload,tx,on_done,on_error,on_load))
;
var on_done__$1 = with_history_recording(on_done);
var on_error__$1 = with_history_recording(on_error);
if(cljs.core.truth_((function (){var and__10793__auto__ = history_atom;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = tx_time;
if(cljs.core.truth_(and__10793__auto____$1)){
return remote;
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history_atom,fulcro.history.remote_activity_started,remote,tx_time);
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,79], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Payload had no history details."], 0));
}catch (e38790){if((e38790 instanceof Error)){
var e__18456__auto___38807 = e38790;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,79], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___38807], 0));
} else {
throw e38790;

}
}}

return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2(net,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$reconciler,reconciler,cljs.core.cst$kw$tx,tx,cljs.core.cst$kw$on_DASH_done,on_done__$1,cljs.core.cst$kw$on_DASH_error,on_error__$1,cljs.core.cst$kw$on_DASH_load,on_load,cljs.core.cst$kw$abort_DASH_id,abort_id], null));
});

fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$6 = (function (payload,net,tx,on_done,on_error,on_load){
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(net,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$payload,payload,cljs.core.cst$kw$tx,tx,cljs.core.cst$kw$on_DASH_done,on_done,cljs.core.cst$kw$on_DASH_error,on_error,cljs.core.cst$kw$on_DASH_load,on_load], null));
});

fulcro.client.impl.application.send_with_history_tracking.cljs$lang$maxFixedArity = 6;

/**
 * Split a tx that contains mutations.
 * 
 * Examples:
 * [(f) (g)] => [[(f) (g)]]
 * [(f) (g) (f) (k)] => [[(f) (g)] [(f) (k)]]
 * [(f) (g) (f) (k) (g)] => [[(f) (g)] [(f) (k) (g)]]
 * 
 * This function splits any mutation that uses the same dispatch symbol more than once (since returns from server go
 * into a map, and that is the only way to get return values from both), and also when the mutations do not share abort
 * IDs (so that mutations do not get grouped into a transaction that could cause them to get cancelled incorrectly).
 * 
 * Returns a sequence that contains one or more transactions.
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
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,100], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INTERNAL ERROR: split-mutations was asked to split a tx that contained things other than mutations.",tx], 0));
}catch (e38827){if((e38827 instanceof Error)){
var e__18456__auto___38845 = e38827;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,100], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___38845], 0));
} else {
throw e38827;

}
}
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
} else {
if(cljs.core.empty_QMARK_(tx)){
return cljs.core.PersistentVector.EMPTY;
} else {
var dispatch_symbols = (function (tx__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$key),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_)),(function (){var G__38829 = tx__$1;
var G__38829__$1 = (((G__38829 == null))?null:fulcro.client.primitives.query__GT_ast(G__38829));
if((G__38829__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__38829__$1);
}
})());
});
var compatible_abort_QMARK_ = ((function (dispatch_symbols){
return (function (tx1,tx2){
var a1 = fulcro.client.mutations.abort_ids(tx1);
var a2 = fulcro.client.mutations.abort_ids(tx2);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(a1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a1,a2))) || ((cljs.core.empty_QMARK_(a1)) && (cljs.core.empty_QMARK_(a2)));
});})(dispatch_symbols))
;
var can_be_included_QMARK_ = ((function (dispatch_symbols,compatible_abort_QMARK_){
return (function (tx__$1,expr){
var or__10805__auto__ = cljs.core.empty_QMARK_(tx__$1);
if(or__10805__auto__){
return or__10805__auto__;
} else {
var and__10793__auto__ = compatible_abort_QMARK_(tx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null));
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(dispatch_symbols(tx__$1),dispatch_symbols(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null))));
} else {
return and__10793__auto__;
}
}
});})(dispatch_symbols,compatible_abort_QMARK_))
;
var map__38828 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_){
return (function (p__38831,expr){
var map__38832 = p__38831;
var map__38832__$1 = ((((!((map__38832 == null)))?((((map__38832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38832):map__38832);
var acc = map__38832__$1;
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38832__$1,cljs.core.cst$kw$current);
if(cljs.core.truth_(can_be_included_QMARK_(current,expr))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,cljs.core.cst$kw$current,cljs.core.conj,expr);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,cljs.core.cst$kw$transactions,cljs.core.conj,current),cljs.core.cst$kw$current,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null));
}
});})(dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transactions,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$current,cljs.core.PersistentVector.EMPTY], null),tx);
var map__38828__$1 = ((((!((map__38828 == null)))?((((map__38828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38828):map__38828);
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$transactions);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$current);
if(cljs.core.empty_QMARK_(current)){
return transactions;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(transactions,current);
}
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
fulcro.client.impl.application.enqueue_mutations = (function fulcro$client$impl$application$enqueue_mutations(p__38862,remote_tx_map,cb){
var map__38863 = p__38862;
var map__38863__$1 = ((((!((map__38863 == null)))?((((map__38863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38863):map__38863);
var app = map__38863__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38863__$1,cljs.core.cst$kw$reconciler);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38863__$1,cljs.core.cst$kw$send_DASH_queues);
var history = fulcro.client.primitives.get_history(reconciler);
var seq__38869 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__38870 = null;
var count__38871 = (0);
var i__38872 = (0);
while(true){
if((i__38872 < count__38871)){
var remote = chunk__38870.cljs$core$IIndexed$_nth$arity$2(null,i__38872);
var queue_38975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_38976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_38977 = (function (){var or__10805__auto__ = (function (){var G__38877 = full_remote_transaction_38976;
var G__38877__$1 = (((G__38877 == null))?null:cljs.core.meta(G__38877));
var G__38877__$2 = (((G__38877__$1 == null))?null:cljs.core.cst$kw$fulcro$client$primitives_SLASH_refresh.cljs$core$IFn$_invoke$arity$1(G__38877__$1));
if((G__38877__$2 == null)){
return null;
} else {
return cljs.core.vec(G__38877__$2);
}
})();
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_38978 = (function (){var G__38884 = full_remote_transaction_38976;
var G__38884__$1 = (((G__38884 == null))?null:cljs.core.meta(G__38884));
if((G__38884__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time.cljs$core$IFn$_invoke$arity$1(G__38884__$1);
}
})();
var fallback_38979 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_38976);
var desired_remote_mutations_38980 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_38976);
var tx_list_38981 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_38980);
var has_mutations_QMARK__38982 = ((function (seq__38869,chunk__38870,count__38871,i__38872,queue_38975,full_remote_transaction_38976,refresh_set_38977,tx_time_38978,fallback_38979,desired_remote_mutations_38980,tx_list_38981,remote,history,map__38863,map__38863__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__38869,chunk__38870,count__38871,i__38872,queue_38975,full_remote_transaction_38976,refresh_set_38977,tx_time_38978,fallback_38979,desired_remote_mutations_38980,tx_list_38981,remote,history,map__38863,map__38863__$1,app,reconciler,send_queues))
;
var payload_38983 = ((function (seq__38869,chunk__38870,count__38871,i__38872,queue_38975,full_remote_transaction_38976,refresh_set_38977,tx_time_38978,fallback_38979,desired_remote_mutations_38980,tx_list_38981,has_mutations_QMARK__38982,remote,history,map__38863,map__38863__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__38891 = tx;
var G__38891__$1 = (((G__38891 == null))?null:fulcro.client.mutations.abort_ids(G__38891));
if((G__38891__$1 == null)){
return null;
} else {
return cljs.core.first(G__38891__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time_38978,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,history,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,remote,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id,abort_id,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,((function (seq__38869,chunk__38870,count__38871,i__38872,abort_id,queue_38975,full_remote_transaction_38976,refresh_set_38977,tx_time_38978,fallback_38979,desired_remote_mutations_38980,tx_list_38981,has_mutations_QMARK__38982,remote,history,map__38863,map__38863__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__38895 = result;
var G__38896 = (function (){var or__10805__auto__ = mtx;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return tx;
}
})();
var G__38897 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__38895,G__38896,G__38897) : cb.call(null,G__38895,G__38896,G__38897));
});})(seq__38869,chunk__38870,count__38871,i__38872,abort_id,queue_38975,full_remote_transaction_38976,refresh_set_38977,tx_time_38978,fallback_38979,desired_remote_mutations_38980,tx_list_38981,has_mutations_QMARK__38982,remote,history,map__38863,map__38863__$1,app,reconciler,send_queues))
,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,((function (seq__38869,chunk__38870,count__38871,i__38872,abort_id,queue_38975,full_remote_transaction_38976,refresh_set_38977,tx_time_38978,fallback_38979,desired_remote_mutations_38980,tx_list_38981,has_mutations_QMARK__38982,remote,history,map__38863,map__38863__$1,app,reconciler,send_queues){
return (function (result){
return (fallback_38979.cljs$core$IFn$_invoke$arity$1 ? fallback_38979.cljs$core$IFn$_invoke$arity$1(result) : fallback_38979.call(null,result));
});})(seq__38869,chunk__38870,count__38871,i__38872,abort_id,queue_38975,full_remote_transaction_38976,refresh_set_38977,tx_time_38978,fallback_38979,desired_remote_mutations_38980,tx_list_38981,has_mutations_QMARK__38982,remote,history,map__38863,map__38863__$1,app,reconciler,send_queues))
], null);
});})(seq__38869,chunk__38870,count__38871,i__38872,queue_38975,full_remote_transaction_38976,refresh_set_38977,tx_time_38978,fallback_38979,desired_remote_mutations_38980,tx_list_38981,has_mutations_QMARK__38982,remote,history,map__38863,map__38863__$1,app,reconciler,send_queues))
;
var seq__38907_38992 = cljs.core.seq(tx_list_38981);
var chunk__38908_38993 = null;
var count__38909_38994 = (0);
var i__38910_38995 = (0);
while(true){
if((i__38910_38995 < count__38909_38994)){
var tx_38996 = chunk__38908_38993.cljs$core$IIndexed$_nth$arity$2(null,i__38910_38995);
if(cljs.core.truth_(has_mutations_QMARK__38982(tx_38996))){
fulcro.client.impl.application.enqueue(queue_38975,payload_38983(tx_38996));
} else {
}

var G__38999 = seq__38907_38992;
var G__39000 = chunk__38908_38993;
var G__39001 = count__38909_38994;
var G__39002 = (i__38910_38995 + (1));
seq__38907_38992 = G__38999;
chunk__38908_38993 = G__39000;
count__38909_38994 = G__39001;
i__38910_38995 = G__39002;
continue;
} else {
var temp__5457__auto___39003 = cljs.core.seq(seq__38907_38992);
if(temp__5457__auto___39003){
var seq__38907_39004__$1 = temp__5457__auto___39003;
if(cljs.core.chunked_seq_QMARK_(seq__38907_39004__$1)){
var c__11736__auto___39005 = cljs.core.chunk_first(seq__38907_39004__$1);
var G__39006 = cljs.core.chunk_rest(seq__38907_39004__$1);
var G__39007 = c__11736__auto___39005;
var G__39008 = cljs.core.count(c__11736__auto___39005);
var G__39009 = (0);
seq__38907_38992 = G__39006;
chunk__38908_38993 = G__39007;
count__38909_38994 = G__39008;
i__38910_38995 = G__39009;
continue;
} else {
var tx_39011 = cljs.core.first(seq__38907_39004__$1);
if(cljs.core.truth_(has_mutations_QMARK__38982(tx_39011))){
fulcro.client.impl.application.enqueue(queue_38975,payload_38983(tx_39011));
} else {
}

var G__39012 = cljs.core.next(seq__38907_39004__$1);
var G__39013 = null;
var G__39014 = (0);
var G__39015 = (0);
seq__38907_38992 = G__39012;
chunk__38908_38993 = G__39013;
count__38909_38994 = G__39014;
i__38910_38995 = G__39015;
continue;
}
} else {
}
}
break;
}

var G__39016 = seq__38869;
var G__39017 = chunk__38870;
var G__39018 = count__38871;
var G__39019 = (i__38872 + (1));
seq__38869 = G__39016;
chunk__38870 = G__39017;
count__38871 = G__39018;
i__38872 = G__39019;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38869);
if(temp__5457__auto__){
var seq__38869__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38869__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__38869__$1);
var G__39020 = cljs.core.chunk_rest(seq__38869__$1);
var G__39021 = c__11736__auto__;
var G__39022 = cljs.core.count(c__11736__auto__);
var G__39023 = (0);
seq__38869 = G__39020;
chunk__38870 = G__39021;
count__38871 = G__39022;
i__38872 = G__39023;
continue;
} else {
var remote = cljs.core.first(seq__38869__$1);
var queue_39026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_39027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_39028 = (function (){var or__10805__auto__ = (function (){var G__38951 = full_remote_transaction_39027;
var G__38951__$1 = (((G__38951 == null))?null:cljs.core.meta(G__38951));
var G__38951__$2 = (((G__38951__$1 == null))?null:cljs.core.cst$kw$fulcro$client$primitives_SLASH_refresh.cljs$core$IFn$_invoke$arity$1(G__38951__$1));
if((G__38951__$2 == null)){
return null;
} else {
return cljs.core.vec(G__38951__$2);
}
})();
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_39029 = (function (){var G__38954 = full_remote_transaction_39027;
var G__38954__$1 = (((G__38954 == null))?null:cljs.core.meta(G__38954));
if((G__38954__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time.cljs$core$IFn$_invoke$arity$1(G__38954__$1);
}
})();
var fallback_39030 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_39027);
var desired_remote_mutations_39031 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_39027);
var tx_list_39032 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_39031);
var has_mutations_QMARK__39033 = ((function (seq__38869,chunk__38870,count__38871,i__38872,queue_39026,full_remote_transaction_39027,refresh_set_39028,tx_time_39029,fallback_39030,desired_remote_mutations_39031,tx_list_39032,remote,seq__38869__$1,temp__5457__auto__,history,map__38863,map__38863__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__38869,chunk__38870,count__38871,i__38872,queue_39026,full_remote_transaction_39027,refresh_set_39028,tx_time_39029,fallback_39030,desired_remote_mutations_39031,tx_list_39032,remote,seq__38869__$1,temp__5457__auto__,history,map__38863,map__38863__$1,app,reconciler,send_queues))
;
var payload_39034 = ((function (seq__38869,chunk__38870,count__38871,i__38872,queue_39026,full_remote_transaction_39027,refresh_set_39028,tx_time_39029,fallback_39030,desired_remote_mutations_39031,tx_list_39032,has_mutations_QMARK__39033,remote,seq__38869__$1,temp__5457__auto__,history,map__38863,map__38863__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__38959 = tx;
var G__38959__$1 = (((G__38959 == null))?null:fulcro.client.mutations.abort_ids(G__38959));
if((G__38959__$1 == null)){
return null;
} else {
return cljs.core.first(G__38959__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time_39029,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,history,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,remote,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id,abort_id,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,((function (seq__38869,chunk__38870,count__38871,i__38872,abort_id,queue_39026,full_remote_transaction_39027,refresh_set_39028,tx_time_39029,fallback_39030,desired_remote_mutations_39031,tx_list_39032,has_mutations_QMARK__39033,remote,seq__38869__$1,temp__5457__auto__,history,map__38863,map__38863__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__38961 = result;
var G__38962 = (function (){var or__10805__auto__ = mtx;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return tx;
}
})();
var G__38963 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__38961,G__38962,G__38963) : cb.call(null,G__38961,G__38962,G__38963));
});})(seq__38869,chunk__38870,count__38871,i__38872,abort_id,queue_39026,full_remote_transaction_39027,refresh_set_39028,tx_time_39029,fallback_39030,desired_remote_mutations_39031,tx_list_39032,has_mutations_QMARK__39033,remote,seq__38869__$1,temp__5457__auto__,history,map__38863,map__38863__$1,app,reconciler,send_queues))
,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,((function (seq__38869,chunk__38870,count__38871,i__38872,abort_id,queue_39026,full_remote_transaction_39027,refresh_set_39028,tx_time_39029,fallback_39030,desired_remote_mutations_39031,tx_list_39032,has_mutations_QMARK__39033,remote,seq__38869__$1,temp__5457__auto__,history,map__38863,map__38863__$1,app,reconciler,send_queues){
return (function (result){
return (fallback_39030.cljs$core$IFn$_invoke$arity$1 ? fallback_39030.cljs$core$IFn$_invoke$arity$1(result) : fallback_39030.call(null,result));
});})(seq__38869,chunk__38870,count__38871,i__38872,abort_id,queue_39026,full_remote_transaction_39027,refresh_set_39028,tx_time_39029,fallback_39030,desired_remote_mutations_39031,tx_list_39032,has_mutations_QMARK__39033,remote,seq__38869__$1,temp__5457__auto__,history,map__38863,map__38863__$1,app,reconciler,send_queues))
], null);
});})(seq__38869,chunk__38870,count__38871,i__38872,queue_39026,full_remote_transaction_39027,refresh_set_39028,tx_time_39029,fallback_39030,desired_remote_mutations_39031,tx_list_39032,has_mutations_QMARK__39033,remote,seq__38869__$1,temp__5457__auto__,history,map__38863,map__38863__$1,app,reconciler,send_queues))
;
var seq__38967_39049 = cljs.core.seq(tx_list_39032);
var chunk__38968_39050 = null;
var count__38969_39051 = (0);
var i__38970_39052 = (0);
while(true){
if((i__38970_39052 < count__38969_39051)){
var tx_39054 = chunk__38968_39050.cljs$core$IIndexed$_nth$arity$2(null,i__38970_39052);
if(cljs.core.truth_(has_mutations_QMARK__39033(tx_39054))){
fulcro.client.impl.application.enqueue(queue_39026,payload_39034(tx_39054));
} else {
}

var G__39056 = seq__38967_39049;
var G__39057 = chunk__38968_39050;
var G__39058 = count__38969_39051;
var G__39059 = (i__38970_39052 + (1));
seq__38967_39049 = G__39056;
chunk__38968_39050 = G__39057;
count__38969_39051 = G__39058;
i__38970_39052 = G__39059;
continue;
} else {
var temp__5457__auto___39060__$1 = cljs.core.seq(seq__38967_39049);
if(temp__5457__auto___39060__$1){
var seq__38967_39062__$1 = temp__5457__auto___39060__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38967_39062__$1)){
var c__11736__auto___39063 = cljs.core.chunk_first(seq__38967_39062__$1);
var G__39064 = cljs.core.chunk_rest(seq__38967_39062__$1);
var G__39065 = c__11736__auto___39063;
var G__39066 = cljs.core.count(c__11736__auto___39063);
var G__39067 = (0);
seq__38967_39049 = G__39064;
chunk__38968_39050 = G__39065;
count__38969_39051 = G__39066;
i__38970_39052 = G__39067;
continue;
} else {
var tx_39068 = cljs.core.first(seq__38967_39062__$1);
if(cljs.core.truth_(has_mutations_QMARK__39033(tx_39068))){
fulcro.client.impl.application.enqueue(queue_39026,payload_39034(tx_39068));
} else {
}

var G__39069 = cljs.core.next(seq__38967_39062__$1);
var G__39070 = null;
var G__39071 = (0);
var G__39072 = (0);
seq__38967_39049 = G__39069;
chunk__38968_39050 = G__39070;
count__38969_39051 = G__39071;
i__38970_39052 = G__39072;
continue;
}
} else {
}
}
break;
}

var G__39073 = cljs.core.next(seq__38869__$1);
var G__39074 = null;
var G__39075 = (0);
var G__39076 = (0);
seq__38869 = G__39073;
chunk__38870 = G__39074;
count__38871 = G__39075;
i__38872 = G__39076;
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
fulcro.client.impl.application.enqueue_reads = (function fulcro$client$impl$application$enqueue_reads(p__39083){
var map__39084 = p__39083;
var map__39084__$1 = ((((!((map__39084 == null)))?((((map__39084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39084):map__39084);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39084__$1,cljs.core.cst$kw$send_DASH_queues);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39084__$1,cljs.core.cst$kw$reconciler);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39084__$1,cljs.core.cst$kw$networking);
var seq__39087 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__39088 = null;
var count__39089 = (0);
var i__39090 = (0);
while(true){
if((i__39090 < count__39089)){
var remote = chunk__39088.cljs$core$IIndexed$_nth$arity$2(null,i__39090);
var queue_39136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_39137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_39138 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__39091_39140 = cljs.core.seq(parallel_payload_39138);
var chunk__39092_39141 = null;
var count__39093_39142 = (0);
var i__39094_39143 = (0);
while(true){
if((i__39094_39143 < count__39093_39142)){
var map__39097_39145 = chunk__39092_39141.cljs$core$IIndexed$_nth$arity$2(null,i__39094_39143);
var map__39097_39146__$1 = ((((!((map__39097_39145 == null)))?((((map__39097_39145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39097_39145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39097_39145):map__39097_39145);
var payload_39147 = map__39097_39146__$1;
var query_39149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097_39146__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load_39150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097_39146__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error_39151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097_39146__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors_39152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097_39146__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var abort_id_39153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097_39146__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id);
var on_load_SINGLEQUOTE__39160 = ((function (seq__39091_39140,chunk__39092_39141,count__39093_39142,i__39094_39143,seq__39087,chunk__39088,count__39089,i__39090,map__39097_39145,map__39097_39146__$1,payload_39147,query_39149,on_load_39150,on_error_39151,load_descriptors_39152,abort_id_39153,queue_39136,network_39137,parallel_payload_39138,remote,map__39084,map__39084__$1,send_queues,reconciler,networking){
return (function (p1__39078_SHARP_){
return (on_load_39150.cljs$core$IFn$_invoke$arity$2 ? on_load_39150.cljs$core$IFn$_invoke$arity$2(p1__39078_SHARP_,load_descriptors_39152) : on_load_39150.call(null,p1__39078_SHARP_,load_descriptors_39152));
});})(seq__39091_39140,chunk__39092_39141,count__39093_39142,i__39094_39143,seq__39087,chunk__39088,count__39089,i__39090,map__39097_39145,map__39097_39146__$1,payload_39147,query_39149,on_load_39150,on_error_39151,load_descriptors_39152,abort_id_39153,queue_39136,network_39137,parallel_payload_39138,remote,map__39084,map__39084__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__39161 = ((function (seq__39091_39140,chunk__39092_39141,count__39093_39142,i__39094_39143,seq__39087,chunk__39088,count__39089,i__39090,on_load_SINGLEQUOTE__39160,map__39097_39145,map__39097_39146__$1,payload_39147,query_39149,on_load_39150,on_error_39151,load_descriptors_39152,abort_id_39153,queue_39136,network_39137,parallel_payload_39138,remote,map__39084,map__39084__$1,send_queues,reconciler,networking){
return (function (p1__39080_SHARP_){
return (on_error_39151.cljs$core$IFn$_invoke$arity$2 ? on_error_39151.cljs$core$IFn$_invoke$arity$2(p1__39080_SHARP_,load_descriptors_39152) : on_error_39151.call(null,p1__39080_SHARP_,load_descriptors_39152));
});})(seq__39091_39140,chunk__39092_39141,count__39093_39142,i__39094_39143,seq__39087,chunk__39088,count__39089,i__39090,on_load_SINGLEQUOTE__39160,map__39097_39145,map__39097_39146__$1,payload_39147,query_39149,on_load_39150,on_error_39151,load_descriptors_39152,abort_id_39153,queue_39136,network_39137,parallel_payload_39138,remote,map__39084,map__39084__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_39137,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$payload,payload_39147,cljs.core.cst$kw$reconciler,reconciler,cljs.core.cst$kw$tx,query_39149,cljs.core.cst$kw$on_DASH_done,on_load_SINGLEQUOTE__39160,cljs.core.cst$kw$on_DASH_error,on_error_SINGLEQUOTE__39161,cljs.core.cst$kw$abort_DASH_id,abort_id_39153], null));

var G__39166 = seq__39091_39140;
var G__39167 = chunk__39092_39141;
var G__39168 = count__39093_39142;
var G__39169 = (i__39094_39143 + (1));
seq__39091_39140 = G__39166;
chunk__39092_39141 = G__39167;
count__39093_39142 = G__39168;
i__39094_39143 = G__39169;
continue;
} else {
var temp__5457__auto___39170 = cljs.core.seq(seq__39091_39140);
if(temp__5457__auto___39170){
var seq__39091_39171__$1 = temp__5457__auto___39170;
if(cljs.core.chunked_seq_QMARK_(seq__39091_39171__$1)){
var c__11736__auto___39172 = cljs.core.chunk_first(seq__39091_39171__$1);
var G__39173 = cljs.core.chunk_rest(seq__39091_39171__$1);
var G__39174 = c__11736__auto___39172;
var G__39175 = cljs.core.count(c__11736__auto___39172);
var G__39176 = (0);
seq__39091_39140 = G__39173;
chunk__39092_39141 = G__39174;
count__39093_39142 = G__39175;
i__39094_39143 = G__39176;
continue;
} else {
var map__39100_39179 = cljs.core.first(seq__39091_39171__$1);
var map__39100_39180__$1 = ((((!((map__39100_39179 == null)))?((((map__39100_39179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39100_39179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39100_39179):map__39100_39179);
var payload_39181 = map__39100_39180__$1;
var query_39182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39100_39180__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load_39183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39100_39180__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error_39184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39100_39180__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors_39185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39100_39180__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var abort_id_39186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39100_39180__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id);
var on_load_SINGLEQUOTE__39192 = ((function (seq__39091_39140,chunk__39092_39141,count__39093_39142,i__39094_39143,seq__39087,chunk__39088,count__39089,i__39090,map__39100_39179,map__39100_39180__$1,payload_39181,query_39182,on_load_39183,on_error_39184,load_descriptors_39185,abort_id_39186,seq__39091_39171__$1,temp__5457__auto___39170,queue_39136,network_39137,parallel_payload_39138,remote,map__39084,map__39084__$1,send_queues,reconciler,networking){
return (function (p1__39078_SHARP_){
return (on_load_39183.cljs$core$IFn$_invoke$arity$2 ? on_load_39183.cljs$core$IFn$_invoke$arity$2(p1__39078_SHARP_,load_descriptors_39185) : on_load_39183.call(null,p1__39078_SHARP_,load_descriptors_39185));
});})(seq__39091_39140,chunk__39092_39141,count__39093_39142,i__39094_39143,seq__39087,chunk__39088,count__39089,i__39090,map__39100_39179,map__39100_39180__$1,payload_39181,query_39182,on_load_39183,on_error_39184,load_descriptors_39185,abort_id_39186,seq__39091_39171__$1,temp__5457__auto___39170,queue_39136,network_39137,parallel_payload_39138,remote,map__39084,map__39084__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__39193 = ((function (seq__39091_39140,chunk__39092_39141,count__39093_39142,i__39094_39143,seq__39087,chunk__39088,count__39089,i__39090,on_load_SINGLEQUOTE__39192,map__39100_39179,map__39100_39180__$1,payload_39181,query_39182,on_load_39183,on_error_39184,load_descriptors_39185,abort_id_39186,seq__39091_39171__$1,temp__5457__auto___39170,queue_39136,network_39137,parallel_payload_39138,remote,map__39084,map__39084__$1,send_queues,reconciler,networking){
return (function (p1__39080_SHARP_){
return (on_error_39184.cljs$core$IFn$_invoke$arity$2 ? on_error_39184.cljs$core$IFn$_invoke$arity$2(p1__39080_SHARP_,load_descriptors_39185) : on_error_39184.call(null,p1__39080_SHARP_,load_descriptors_39185));
});})(seq__39091_39140,chunk__39092_39141,count__39093_39142,i__39094_39143,seq__39087,chunk__39088,count__39089,i__39090,on_load_SINGLEQUOTE__39192,map__39100_39179,map__39100_39180__$1,payload_39181,query_39182,on_load_39183,on_error_39184,load_descriptors_39185,abort_id_39186,seq__39091_39171__$1,temp__5457__auto___39170,queue_39136,network_39137,parallel_payload_39138,remote,map__39084,map__39084__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_39137,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$payload,payload_39181,cljs.core.cst$kw$reconciler,reconciler,cljs.core.cst$kw$tx,query_39182,cljs.core.cst$kw$on_DASH_done,on_load_SINGLEQUOTE__39192,cljs.core.cst$kw$on_DASH_error,on_error_SINGLEQUOTE__39193,cljs.core.cst$kw$abort_DASH_id,abort_id_39186], null));

var G__39221 = cljs.core.next(seq__39091_39171__$1);
var G__39222 = null;
var G__39223 = (0);
var G__39224 = (0);
seq__39091_39140 = G__39221;
chunk__39092_39141 = G__39222;
count__39093_39142 = G__39223;
i__39094_39143 = G__39224;
continue;
}
} else {
}
}
break;
}

var fetch_payload_39226 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_39226)){
fulcro.client.impl.application.enqueue(queue_39136,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_39226,cljs.core.cst$kw$networking,network_39137));

var G__39232 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_39226 = G__39232;
continue;
} else {
}
break;
}

var G__39233 = seq__39087;
var G__39234 = chunk__39088;
var G__39235 = count__39089;
var G__39236 = (i__39090 + (1));
seq__39087 = G__39233;
chunk__39088 = G__39234;
count__39089 = G__39235;
i__39090 = G__39236;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39087);
if(temp__5457__auto__){
var seq__39087__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39087__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__39087__$1);
var G__39237 = cljs.core.chunk_rest(seq__39087__$1);
var G__39238 = c__11736__auto__;
var G__39239 = cljs.core.count(c__11736__auto__);
var G__39240 = (0);
seq__39087 = G__39237;
chunk__39088 = G__39238;
count__39089 = G__39239;
i__39090 = G__39240;
continue;
} else {
var remote = cljs.core.first(seq__39087__$1);
var queue_39241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_39242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_39243 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__39106_39246 = cljs.core.seq(parallel_payload_39243);
var chunk__39107_39247 = null;
var count__39108_39248 = (0);
var i__39109_39249 = (0);
while(true){
if((i__39109_39249 < count__39108_39248)){
var map__39110_39250 = chunk__39107_39247.cljs$core$IIndexed$_nth$arity$2(null,i__39109_39249);
var map__39110_39251__$1 = ((((!((map__39110_39250 == null)))?((((map__39110_39250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39110_39250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39110_39250):map__39110_39250);
var payload_39252 = map__39110_39251__$1;
var query_39253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39110_39251__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load_39254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39110_39251__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error_39255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39110_39251__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors_39256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39110_39251__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var abort_id_39257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39110_39251__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id);
var on_load_SINGLEQUOTE__39269 = ((function (seq__39106_39246,chunk__39107_39247,count__39108_39248,i__39109_39249,seq__39087,chunk__39088,count__39089,i__39090,map__39110_39250,map__39110_39251__$1,payload_39252,query_39253,on_load_39254,on_error_39255,load_descriptors_39256,abort_id_39257,queue_39241,network_39242,parallel_payload_39243,remote,seq__39087__$1,temp__5457__auto__,map__39084,map__39084__$1,send_queues,reconciler,networking){
return (function (p1__39078_SHARP_){
return (on_load_39254.cljs$core$IFn$_invoke$arity$2 ? on_load_39254.cljs$core$IFn$_invoke$arity$2(p1__39078_SHARP_,load_descriptors_39256) : on_load_39254.call(null,p1__39078_SHARP_,load_descriptors_39256));
});})(seq__39106_39246,chunk__39107_39247,count__39108_39248,i__39109_39249,seq__39087,chunk__39088,count__39089,i__39090,map__39110_39250,map__39110_39251__$1,payload_39252,query_39253,on_load_39254,on_error_39255,load_descriptors_39256,abort_id_39257,queue_39241,network_39242,parallel_payload_39243,remote,seq__39087__$1,temp__5457__auto__,map__39084,map__39084__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__39270 = ((function (seq__39106_39246,chunk__39107_39247,count__39108_39248,i__39109_39249,seq__39087,chunk__39088,count__39089,i__39090,on_load_SINGLEQUOTE__39269,map__39110_39250,map__39110_39251__$1,payload_39252,query_39253,on_load_39254,on_error_39255,load_descriptors_39256,abort_id_39257,queue_39241,network_39242,parallel_payload_39243,remote,seq__39087__$1,temp__5457__auto__,map__39084,map__39084__$1,send_queues,reconciler,networking){
return (function (p1__39080_SHARP_){
return (on_error_39255.cljs$core$IFn$_invoke$arity$2 ? on_error_39255.cljs$core$IFn$_invoke$arity$2(p1__39080_SHARP_,load_descriptors_39256) : on_error_39255.call(null,p1__39080_SHARP_,load_descriptors_39256));
});})(seq__39106_39246,chunk__39107_39247,count__39108_39248,i__39109_39249,seq__39087,chunk__39088,count__39089,i__39090,on_load_SINGLEQUOTE__39269,map__39110_39250,map__39110_39251__$1,payload_39252,query_39253,on_load_39254,on_error_39255,load_descriptors_39256,abort_id_39257,queue_39241,network_39242,parallel_payload_39243,remote,seq__39087__$1,temp__5457__auto__,map__39084,map__39084__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_39242,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$payload,payload_39252,cljs.core.cst$kw$reconciler,reconciler,cljs.core.cst$kw$tx,query_39253,cljs.core.cst$kw$on_DASH_done,on_load_SINGLEQUOTE__39269,cljs.core.cst$kw$on_DASH_error,on_error_SINGLEQUOTE__39270,cljs.core.cst$kw$abort_DASH_id,abort_id_39257], null));

var G__39284 = seq__39106_39246;
var G__39285 = chunk__39107_39247;
var G__39286 = count__39108_39248;
var G__39287 = (i__39109_39249 + (1));
seq__39106_39246 = G__39284;
chunk__39107_39247 = G__39285;
count__39108_39248 = G__39286;
i__39109_39249 = G__39287;
continue;
} else {
var temp__5457__auto___39290__$1 = cljs.core.seq(seq__39106_39246);
if(temp__5457__auto___39290__$1){
var seq__39106_39291__$1 = temp__5457__auto___39290__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39106_39291__$1)){
var c__11736__auto___39292 = cljs.core.chunk_first(seq__39106_39291__$1);
var G__39294 = cljs.core.chunk_rest(seq__39106_39291__$1);
var G__39295 = c__11736__auto___39292;
var G__39296 = cljs.core.count(c__11736__auto___39292);
var G__39297 = (0);
seq__39106_39246 = G__39294;
chunk__39107_39247 = G__39295;
count__39108_39248 = G__39296;
i__39109_39249 = G__39297;
continue;
} else {
var map__39118_39298 = cljs.core.first(seq__39106_39291__$1);
var map__39118_39299__$1 = ((((!((map__39118_39298 == null)))?((((map__39118_39298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39118_39298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39118_39298):map__39118_39298);
var payload_39300 = map__39118_39299__$1;
var query_39301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39118_39299__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load_39302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39118_39299__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error_39303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39118_39299__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors_39304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39118_39299__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var abort_id_39305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39118_39299__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id);
var on_load_SINGLEQUOTE__39310 = ((function (seq__39106_39246,chunk__39107_39247,count__39108_39248,i__39109_39249,seq__39087,chunk__39088,count__39089,i__39090,map__39118_39298,map__39118_39299__$1,payload_39300,query_39301,on_load_39302,on_error_39303,load_descriptors_39304,abort_id_39305,seq__39106_39291__$1,temp__5457__auto___39290__$1,queue_39241,network_39242,parallel_payload_39243,remote,seq__39087__$1,temp__5457__auto__,map__39084,map__39084__$1,send_queues,reconciler,networking){
return (function (p1__39078_SHARP_){
return (on_load_39302.cljs$core$IFn$_invoke$arity$2 ? on_load_39302.cljs$core$IFn$_invoke$arity$2(p1__39078_SHARP_,load_descriptors_39304) : on_load_39302.call(null,p1__39078_SHARP_,load_descriptors_39304));
});})(seq__39106_39246,chunk__39107_39247,count__39108_39248,i__39109_39249,seq__39087,chunk__39088,count__39089,i__39090,map__39118_39298,map__39118_39299__$1,payload_39300,query_39301,on_load_39302,on_error_39303,load_descriptors_39304,abort_id_39305,seq__39106_39291__$1,temp__5457__auto___39290__$1,queue_39241,network_39242,parallel_payload_39243,remote,seq__39087__$1,temp__5457__auto__,map__39084,map__39084__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__39311 = ((function (seq__39106_39246,chunk__39107_39247,count__39108_39248,i__39109_39249,seq__39087,chunk__39088,count__39089,i__39090,on_load_SINGLEQUOTE__39310,map__39118_39298,map__39118_39299__$1,payload_39300,query_39301,on_load_39302,on_error_39303,load_descriptors_39304,abort_id_39305,seq__39106_39291__$1,temp__5457__auto___39290__$1,queue_39241,network_39242,parallel_payload_39243,remote,seq__39087__$1,temp__5457__auto__,map__39084,map__39084__$1,send_queues,reconciler,networking){
return (function (p1__39080_SHARP_){
return (on_error_39303.cljs$core$IFn$_invoke$arity$2 ? on_error_39303.cljs$core$IFn$_invoke$arity$2(p1__39080_SHARP_,load_descriptors_39304) : on_error_39303.call(null,p1__39080_SHARP_,load_descriptors_39304));
});})(seq__39106_39246,chunk__39107_39247,count__39108_39248,i__39109_39249,seq__39087,chunk__39088,count__39089,i__39090,on_load_SINGLEQUOTE__39310,map__39118_39298,map__39118_39299__$1,payload_39300,query_39301,on_load_39302,on_error_39303,load_descriptors_39304,abort_id_39305,seq__39106_39291__$1,temp__5457__auto___39290__$1,queue_39241,network_39242,parallel_payload_39243,remote,seq__39087__$1,temp__5457__auto__,map__39084,map__39084__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_39242,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$payload,payload_39300,cljs.core.cst$kw$reconciler,reconciler,cljs.core.cst$kw$tx,query_39301,cljs.core.cst$kw$on_DASH_done,on_load_SINGLEQUOTE__39310,cljs.core.cst$kw$on_DASH_error,on_error_SINGLEQUOTE__39311,cljs.core.cst$kw$abort_DASH_id,abort_id_39305], null));

var G__39312 = cljs.core.next(seq__39106_39291__$1);
var G__39313 = null;
var G__39314 = (0);
var G__39315 = (0);
seq__39106_39246 = G__39312;
chunk__39107_39247 = G__39313;
count__39108_39248 = G__39314;
i__39109_39249 = G__39315;
continue;
}
} else {
}
}
break;
}

var fetch_payload_39316 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_39316)){
fulcro.client.impl.application.enqueue(queue_39241,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_39316,cljs.core.cst$kw$networking,network_39242));

var G__39317 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_39316 = G__39317;
continue;
} else {
}
break;
}

var G__39318 = cljs.core.next(seq__39087__$1);
var G__39319 = null;
var G__39320 = (0);
var G__39321 = (0);
seq__39087 = G__39318;
chunk__39088 = G__39319;
count__39089 = G__39320;
i__39090 = G__39321;
continue;
}
} else {
return null;
}
}
break;
}
});
fulcro.client.impl.application.detect_errant_remotes = (function fulcro$client$impl$application$detect_errant_remotes(p__39322){
var map__39323 = p__39322;
var map__39323__$1 = ((((!((map__39323 == null)))?((((map__39323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39323):map__39323);
var app = map__39323__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39323__$1,cljs.core.cst$kw$reconciler);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39323__$1,cljs.core.cst$kw$send_DASH_queues);
var state = fulcro.client.primitives.app_state(reconciler);
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load);
var item_remotes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_remote,all_items));
var all_remotes = cljs.core.set(cljs.core.keys(send_queues));
var invalid_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty(invalid_remotes))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,203], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Use of invalid remote(s) detected! ",invalid_remotes], 0));
}catch (e39328){if((e39328 instanceof Error)){
var e__18456__auto__ = e39328;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,203], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto__], 0));
} else {
throw e39328;

}
}} else {
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
fulcro.client.impl.application.send_payload = (function fulcro$client$impl$application$send_payload(network,reconciler,payload,send_complete){
var map__39342 = payload;
var map__39342__$1 = ((((!((map__39342 == null)))?((((map__39342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39342):map__39342);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors);
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id);
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__39342,map__39342__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__39337_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__39337_SHARP_,load_descriptors) : on_load.call(null,p1__39337_SHARP_,load_descriptors));
});})(map__39342,map__39342__$1,query,on_load,on_error,load_descriptors,abort_id))
:((function (map__39342,map__39342__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__39338_SHARP_,p2__39339_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__39338_SHARP_,p2__39339_SHARP_) : on_load.call(null,p1__39338_SHARP_,p2__39339_SHARP_));
});})(map__39342,map__39342__$1,query,on_load,on_error,load_descriptors,abort_id))
);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__39342,map__39342__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update){
return (function (p1__39340_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__39340_SHARP_,load_descriptors) : on_error.call(null,p1__39340_SHARP_,load_descriptors));
});})(map__39342,map__39342__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,on_error__$1);
var on_done = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,merge_data);
if(cljs.core.truth_(fulcro.client.impl.data_fetch.is_deferred_transaction_QMARK_(query))){
var G__39346 = cljs.core.PersistentArrayMap.EMPTY;
return (on_done.cljs$core$IFn$_invoke$arity$1 ? on_done.cljs$core$IFn$_invoke$arity$1(G__39346) : on_done.call(null,G__39346));
} else {
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$payload,payload,cljs.core.cst$kw$tx,query,cljs.core.cst$kw$reconciler,reconciler,cljs.core.cst$kw$on_DASH_done,on_done,cljs.core.cst$kw$on_DASH_error,on_error__$2,cljs.core.cst$kw$on_DASH_load,on_update,cljs.core.cst$kw$abort_DASH_id,abort_id], null));
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
 * Starts a async go loop that sends network requests on networking object's request queue.
 * Gives the appearance of a separate networking 'thread' using core async.
 */
fulcro.client.impl.application.start_network_sequential_processing = (function fulcro$client$impl$application$start_network_sequential_processing(p__39361){
var map__39362 = p__39361;
var map__39362__$1 = ((((!((map__39362 == null)))?((((map__39362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39362):map__39362);
var app = map__39362__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39362__$1,cljs.core.cst$kw$networking);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39362__$1,cljs.core.cst$kw$reconciler);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39362__$1,cljs.core.cst$kw$send_DASH_queues);
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39362__$1,cljs.core.cst$kw$response_DASH_channels);
var seq__39364 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__39365 = null;
var count__39366 = (0);
var i__39367 = (0);
while(true){
if((i__39367 < count__39366)){
var remote = chunk__39365.cljs$core$IIndexed$_nth$arity$2(null,i__39367);
var queue_39503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_39504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__39505 = fulcro.client.impl.application.is_sequential_QMARK_(network_39504);
var response_channel_39506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_39507 = (cljs.core.truth_(sequential_QMARK__39505)?((function (seq__39364,chunk__39365,count__39366,i__39367,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto__,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto__,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_39371){
var state_val_39372 = (state_39371[(1)]);
if((state_val_39372 === (1))){
var state_39371__$1 = state_39371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39371__$1,(2),response_channel_39506,cljs.core.cst$kw$complete);
} else {
if((state_val_39372 === (2))){
var inst_39369 = (state_39371[(2)]);
var state_39371__$1 = state_39371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39371__$1,inst_39369);
} else {
return null;
}
}
});})(seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto__,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__39364,chunk__39365,count__39366,i__39367,switch__21538__auto__,c__21787__auto__,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0 = (function (){
var statearr_39376 = [null,null,null,null,null,null,null];
(statearr_39376[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__);

(statearr_39376[(1)] = (1));

return statearr_39376;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1 = (function (state_39371){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_39371);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e39377){if((e39377 instanceof Object)){
var ex__21542__auto__ = e39377;
var statearr_39381_39509 = state_39371;
(statearr_39381_39509[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39371);

return cljs.core.cst$kw$recur;
} else {
throw e39377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__39511 = state_39371;
state_39371 = G__39511;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__ = function(state_39371){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1.call(this,state_39371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__;
})()
;})(seq__39364,chunk__39365,count__39366,i__39367,switch__21538__auto__,c__21787__auto__,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__21789__auto__ = (function (){var statearr_39394 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_39394[(6)] = c__21787__auto__);

return statearr_39394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto__,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__21787__auto__;
});})(seq__39364,chunk__39365,count__39366,i__39367,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__21787__auto___39517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto___39517,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,send_complete_39507,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto___39517,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,send_complete_39507,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_39416){
var state_val_39417 = (state_39416[(1)]);
if((state_val_39417 === (1))){
var state_39416__$1 = state_39416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39416__$1,(2),queue_39503);
} else {
if((state_val_39417 === (2))){
var inst_39400 = (state_39416[(2)]);
var inst_39401 = inst_39400;
var state_39416__$1 = (function (){var statearr_39420 = state_39416;
(statearr_39420[(7)] = inst_39401);

return statearr_39420;
})();
var statearr_39421_39520 = state_39416__$1;
(statearr_39421_39520[(2)] = null);

(statearr_39421_39520[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39417 === (3))){
var inst_39401 = (state_39416[(7)]);
var inst_39403 = fulcro.client.impl.application.send_payload(network_39504,reconciler,inst_39401,send_complete_39507);
var state_39416__$1 = (function (){var statearr_39422 = state_39416;
(statearr_39422[(8)] = inst_39403);

return statearr_39422;
})();
if(cljs.core.truth_(sequential_QMARK__39505)){
var statearr_39423_39521 = state_39416__$1;
(statearr_39423_39521[(1)] = (5));

} else {
var statearr_39424_39522 = state_39416__$1;
(statearr_39424_39522[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39417 === (4))){
var inst_39414 = (state_39416[(2)]);
var state_39416__$1 = state_39416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39416__$1,inst_39414);
} else {
if((state_val_39417 === (5))){
var state_39416__$1 = state_39416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39416__$1,(8),response_channel_39506);
} else {
if((state_val_39417 === (6))){
var state_39416__$1 = state_39416;
var statearr_39425_39526 = state_39416__$1;
(statearr_39425_39526[(2)] = null);

(statearr_39425_39526[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39417 === (7))){
var inst_39409 = (state_39416[(2)]);
var state_39416__$1 = (function (){var statearr_39428 = state_39416;
(statearr_39428[(9)] = inst_39409);

return statearr_39428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39416__$1,(9),queue_39503);
} else {
if((state_val_39417 === (8))){
var inst_39406 = (state_39416[(2)]);
var state_39416__$1 = state_39416;
var statearr_39431_39527 = state_39416__$1;
(statearr_39431_39527[(2)] = inst_39406);

(statearr_39431_39527[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39417 === (9))){
var inst_39411 = (state_39416[(2)]);
var inst_39401 = inst_39411;
var state_39416__$1 = (function (){var statearr_39436 = state_39416;
(statearr_39436[(7)] = inst_39401);

return statearr_39436;
})();
var statearr_39437_39529 = state_39416__$1;
(statearr_39437_39529[(2)] = null);

(statearr_39437_39529[(1)] = (3));


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
});})(seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto___39517,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,send_complete_39507,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__39364,chunk__39365,count__39366,i__39367,switch__21538__auto__,c__21787__auto___39517,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,send_complete_39507,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0 = (function (){
var statearr_39440 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39440[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__);

(statearr_39440[(1)] = (1));

return statearr_39440;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1 = (function (state_39416){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_39416);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e39445){if((e39445 instanceof Object)){
var ex__21542__auto__ = e39445;
var statearr_39446_39530 = state_39416;
(statearr_39446_39530[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39416);

return cljs.core.cst$kw$recur;
} else {
throw e39445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__39531 = state_39416;
state_39416 = G__39531;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__ = function(state_39416){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1.call(this,state_39416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__;
})()
;})(seq__39364,chunk__39365,count__39366,i__39367,switch__21538__auto__,c__21787__auto___39517,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,send_complete_39507,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__21789__auto__ = (function (){var statearr_39453 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_39453[(6)] = c__21787__auto___39517);

return statearr_39453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto___39517,queue_39503,network_39504,sequential_QMARK__39505,response_channel_39506,send_complete_39507,remote,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
);


var G__39549 = seq__39364;
var G__39550 = chunk__39365;
var G__39551 = count__39366;
var G__39552 = (i__39367 + (1));
seq__39364 = G__39549;
chunk__39365 = G__39550;
count__39366 = G__39551;
i__39367 = G__39552;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39364);
if(temp__5457__auto__){
var seq__39364__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39364__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__39364__$1);
var G__39558 = cljs.core.chunk_rest(seq__39364__$1);
var G__39559 = c__11736__auto__;
var G__39560 = cljs.core.count(c__11736__auto__);
var G__39561 = (0);
seq__39364 = G__39558;
chunk__39365 = G__39559;
count__39366 = G__39560;
i__39367 = G__39561;
continue;
} else {
var remote = cljs.core.first(seq__39364__$1);
var queue_39562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_39563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__39564 = fulcro.client.impl.application.is_sequential_QMARK_(network_39563);
var response_channel_39565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_39566 = (cljs.core.truth_(sequential_QMARK__39564)?((function (seq__39364,chunk__39365,count__39366,i__39367,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto__,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto__,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_39460){
var state_val_39461 = (state_39460[(1)]);
if((state_val_39461 === (1))){
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39460__$1,(2),response_channel_39565,cljs.core.cst$kw$complete);
} else {
if((state_val_39461 === (2))){
var inst_39458 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39460__$1,inst_39458);
} else {
return null;
}
}
});})(seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto__,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__39364,chunk__39365,count__39366,i__39367,switch__21538__auto__,c__21787__auto__,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0 = (function (){
var statearr_39462 = [null,null,null,null,null,null,null];
(statearr_39462[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__);

(statearr_39462[(1)] = (1));

return statearr_39462;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1 = (function (state_39460){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_39460);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e39463){if((e39463 instanceof Object)){
var ex__21542__auto__ = e39463;
var statearr_39464_39572 = state_39460;
(statearr_39464_39572[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39460);

return cljs.core.cst$kw$recur;
} else {
throw e39463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__39573 = state_39460;
state_39460 = G__39573;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__ = function(state_39460){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1.call(this,state_39460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__;
})()
;})(seq__39364,chunk__39365,count__39366,i__39367,switch__21538__auto__,c__21787__auto__,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__21789__auto__ = (function (){var statearr_39465 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_39465[(6)] = c__21787__auto__);

return statearr_39465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto__,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__21787__auto__;
});})(seq__39364,chunk__39365,count__39366,i__39367,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__21787__auto___39577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto___39577,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,send_complete_39566,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto___39577,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,send_complete_39566,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_39483){
var state_val_39484 = (state_39483[(1)]);
if((state_val_39484 === (1))){
var state_39483__$1 = state_39483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39483__$1,(2),queue_39562);
} else {
if((state_val_39484 === (2))){
var inst_39467 = (state_39483[(2)]);
var inst_39468 = inst_39467;
var state_39483__$1 = (function (){var statearr_39487 = state_39483;
(statearr_39487[(7)] = inst_39468);

return statearr_39487;
})();
var statearr_39488_39584 = state_39483__$1;
(statearr_39488_39584[(2)] = null);

(statearr_39488_39584[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39484 === (3))){
var inst_39468 = (state_39483[(7)]);
var inst_39470 = fulcro.client.impl.application.send_payload(network_39563,reconciler,inst_39468,send_complete_39566);
var state_39483__$1 = (function (){var statearr_39489 = state_39483;
(statearr_39489[(8)] = inst_39470);

return statearr_39489;
})();
if(cljs.core.truth_(sequential_QMARK__39564)){
var statearr_39490_39585 = state_39483__$1;
(statearr_39490_39585[(1)] = (5));

} else {
var statearr_39491_39586 = state_39483__$1;
(statearr_39491_39586[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_39484 === (4))){
var inst_39481 = (state_39483[(2)]);
var state_39483__$1 = state_39483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39483__$1,inst_39481);
} else {
if((state_val_39484 === (5))){
var state_39483__$1 = state_39483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39483__$1,(8),response_channel_39565);
} else {
if((state_val_39484 === (6))){
var state_39483__$1 = state_39483;
var statearr_39492_39587 = state_39483__$1;
(statearr_39492_39587[(2)] = null);

(statearr_39492_39587[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39484 === (7))){
var inst_39476 = (state_39483[(2)]);
var state_39483__$1 = (function (){var statearr_39493 = state_39483;
(statearr_39493[(9)] = inst_39476);

return statearr_39493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39483__$1,(9),queue_39562);
} else {
if((state_val_39484 === (8))){
var inst_39473 = (state_39483[(2)]);
var state_39483__$1 = state_39483;
var statearr_39494_39588 = state_39483__$1;
(statearr_39494_39588[(2)] = inst_39473);

(statearr_39494_39588[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_39484 === (9))){
var inst_39478 = (state_39483[(2)]);
var inst_39468 = inst_39478;
var state_39483__$1 = (function (){var statearr_39495 = state_39483;
(statearr_39495[(7)] = inst_39468);

return statearr_39495;
})();
var statearr_39496_39589 = state_39483__$1;
(statearr_39496_39589[(2)] = null);

(statearr_39496_39589[(1)] = (3));


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
});})(seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto___39577,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,send_complete_39566,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__39364,chunk__39365,count__39366,i__39367,switch__21538__auto__,c__21787__auto___39577,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,send_complete_39566,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0 = (function (){
var statearr_39497 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39497[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__);

(statearr_39497[(1)] = (1));

return statearr_39497;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1 = (function (state_39483){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_39483);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e39498){if((e39498 instanceof Object)){
var ex__21542__auto__ = e39498;
var statearr_39499_39592 = state_39483;
(statearr_39499_39592[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39483);

return cljs.core.cst$kw$recur;
} else {
throw e39498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__39593 = state_39483;
state_39483 = G__39593;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__ = function(state_39483){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1.call(this,state_39483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__21539__auto__;
})()
;})(seq__39364,chunk__39365,count__39366,i__39367,switch__21538__auto__,c__21787__auto___39577,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,send_complete_39566,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__21789__auto__ = (function (){var statearr_39500 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_39500[(6)] = c__21787__auto___39577);

return statearr_39500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(seq__39364,chunk__39365,count__39366,i__39367,c__21787__auto___39577,queue_39562,network_39563,sequential_QMARK__39564,response_channel_39565,send_complete_39566,remote,seq__39364__$1,temp__5457__auto__,map__39362,map__39362__$1,app,networking,reconciler,send_queues,response_channels))
);


var G__39594 = cljs.core.next(seq__39364__$1);
var G__39595 = null;
var G__39596 = (0);
var G__39597 = (0);
seq__39364 = G__39594;
chunk__39365 = G__39595;
count__39366 = G__39596;
i__39367 = G__39597;
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
 * The reconciler's send method calls FulcroApplication/server-send, which itself requires a reconciler with a
 *   send method already defined. This creates a catch-22 / circular dependency on the reconciler and :send field within
 *   the reconciler.
 * 
 *   To resolve the issue, we def an atom pointing to the reconciler that the send method will deref each time it is
 *   called. This allows us to define the reconciler with a send method that, at the time of initialization, has an app
 *   that points to a nil reconciler. By the end of this function, the app's reconciler reference has been properly set.
 */
fulcro.client.impl.application.generate_reconciler = (function fulcro$client$impl$application$generate_reconciler(p__39598,initial_state,parser,p__39599){
var map__39600 = p__39598;
var map__39600__$1 = ((((!((map__39600 == null)))?((((map__39600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39600):map__39600);
var app = map__39600__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39600__$1,cljs.core.cst$kw$send_DASH_queues);
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39600__$1,cljs.core.cst$kw$mutation_DASH_merge);
var map__39601 = p__39599;
var map__39601__$1 = ((((!((map__39601 == null)))?((((map__39601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39601):map__39601);
var reconciler_options = map__39601__$1;
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39601__$1,cljs.core.cst$kw$migrate);
var rec_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate){
return (function (pure,_,tempids){
var seq__39604_39614 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__39605_39615 = null;
var count__39606_39616 = (0);
var i__39607_39617 = (0);
while(true){
if((i__39607_39617 < count__39606_39616)){
var queue_39618 = chunk__39605_39615.cljs$core$IIndexed$_nth$arity$2(null,i__39607_39617);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_39618,tempids);

var G__39619 = seq__39604_39614;
var G__39620 = chunk__39605_39615;
var G__39621 = count__39606_39616;
var G__39622 = (i__39607_39617 + (1));
seq__39604_39614 = G__39619;
chunk__39605_39615 = G__39620;
count__39606_39616 = G__39621;
i__39607_39617 = G__39622;
continue;
} else {
var temp__5457__auto___39624 = cljs.core.seq(seq__39604_39614);
if(temp__5457__auto___39624){
var seq__39604_39625__$1 = temp__5457__auto___39624;
if(cljs.core.chunked_seq_QMARK_(seq__39604_39625__$1)){
var c__11736__auto___39626 = cljs.core.chunk_first(seq__39604_39625__$1);
var G__39627 = cljs.core.chunk_rest(seq__39604_39625__$1);
var G__39628 = c__11736__auto___39626;
var G__39629 = cljs.core.count(c__11736__auto___39626);
var G__39630 = (0);
seq__39604_39614 = G__39627;
chunk__39605_39615 = G__39628;
count__39606_39616 = G__39629;
i__39607_39617 = G__39630;
continue;
} else {
var queue_39631 = cljs.core.first(seq__39604_39625__$1);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_39631,tempids);

var G__39632 = cljs.core.next(seq__39604_39625__$1);
var G__39633 = null;
var G__39634 = (0);
var G__39635 = (0);
seq__39604_39614 = G__39632;
chunk__39605_39615 = G__39633;
count__39606_39616 = G__39634;
i__39607_39617 = G__39635;
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
});})(rec_atom,remotes,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate))
;
var initial_state_with_locale = (function (){var set_default_locale = ((function (rec_atom,remotes,tempid_migrate,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,cljs.core.cst$kw$ui_SLASH_locale,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.cst$kw$en));
});})(rec_atom,remotes,tempid_migrate,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate))
;
var is_atom_QMARK_ = fulcro.util.atom_QMARK_(initial_state);
if(cljs.core.truth_(is_atom_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(initial_state,set_default_locale);

return initial_state;
} else {
return set_default_locale(initial_state);
}
})();
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,reconciler_options,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$migrate,tempid_migrate,cljs.core.cst$kw$state,initial_state_with_locale,cljs.core.cst$kw$send,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate){
return (function (sends_keyed_by_remote,result_merge_callback){
return fulcro.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$reconciler,cljs.core.deref(rec_atom)),sends_keyed_by_remote,result_merge_callback);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate))
,cljs.core.cst$kw$normalize,true,cljs.core.cst$kw$remotes,remotes,cljs.core.cst$kw$merge_DASH_ident,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate))
,cljs.core.cst$kw$merge_DASH_tree,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate){
return (function (target,source){
return fulcro.client.primitives.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__39600,map__39600__$1,app,send_queues,mutation_merge,map__39601,map__39601__$1,reconciler_options,migrate))
,cljs.core.cst$kw$parser,parser], null)], 0));
var rec = fulcro.client.primitives.reconciler(config);
cljs.core.reset_BANG_(rec_atom,rec);

return rec;
});
fulcro.client.impl.application.initialize_global_error_callbacks = (function fulcro$client$impl$application$initialize_global_error_callbacks(app){
var seq__39648 = cljs.core.seq(cljs.core.keys(cljs.core.cst$kw$networking.cljs$core$IFn$_invoke$arity$1(app)));
var chunk__39649 = null;
var count__39650 = (0);
var i__39651 = (0);
while(true){
if((i__39651 < count__39650)){
var remote = chunk__39649.cljs$core$IIndexed$_nth$arity$2(null,i__39651);
var cb_atom_39653 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(fulcro.util.atom_QMARK_(cb_atom_39653))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_39653,((function (seq__39648,chunk__39649,count__39650,i__39651,cb_atom_39653,remote){
return (function (p1__39647_SHARP_){
if(cljs.core.fn_QMARK_(p1__39647_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__39647_SHARP_,fulcro.client.primitives.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__39648,chunk__39649,count__39650,i__39651,cb_atom_39653,remote))
);
} else {
}

var G__39654 = seq__39648;
var G__39655 = chunk__39649;
var G__39656 = count__39650;
var G__39657 = (i__39651 + (1));
seq__39648 = G__39654;
chunk__39649 = G__39655;
count__39650 = G__39656;
i__39651 = G__39657;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39648);
if(temp__5457__auto__){
var seq__39648__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39648__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__39648__$1);
var G__39658 = cljs.core.chunk_rest(seq__39648__$1);
var G__39659 = c__11736__auto__;
var G__39660 = cljs.core.count(c__11736__auto__);
var G__39661 = (0);
seq__39648 = G__39658;
chunk__39649 = G__39659;
count__39650 = G__39660;
i__39651 = G__39661;
continue;
} else {
var remote = cljs.core.first(seq__39648__$1);
var cb_atom_39662 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(fulcro.util.atom_QMARK_(cb_atom_39662))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_39662,((function (seq__39648,chunk__39649,count__39650,i__39651,cb_atom_39662,remote,seq__39648__$1,temp__5457__auto__){
return (function (p1__39647_SHARP_){
if(cljs.core.fn_QMARK_(p1__39647_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__39647_SHARP_,fulcro.client.primitives.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__39648,chunk__39649,count__39650,i__39651,cb_atom_39662,remote,seq__39648__$1,temp__5457__auto__))
);
} else {
}

var G__39663 = cljs.core.next(seq__39648__$1);
var G__39664 = null;
var G__39665 = (0);
var G__39666 = (0);
seq__39648 = G__39663;
chunk__39649 = G__39664;
count__39650 = G__39665;
i__39651 = G__39666;
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
fulcro.client.impl.application.read_local = (function fulcro$client$impl$application$read_local(user_read,p__39667,dkey,params){
var map__39668 = p__39667;
var map__39668__$1 = ((((!((map__39668 == null)))?((((map__39668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39668):map__39668);
var env = map__39668__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39668__$1,cljs.core.cst$kw$query);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39668__$1,cljs.core.cst$kw$target);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39668__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39668__$1,cljs.core.cst$kw$ast);
var temp__5455__auto__ = (user_read.cljs$core$IFn$_invoke$arity$3 ? user_read.cljs$core$IFn$_invoke$arity$3(env,dkey,params) : user_read.call(null,env,dkey,params));
if(cljs.core.truth_(temp__5455__auto__)){
var custom_result = temp__5455__auto__;
return custom_result;
} else {
if(cljs.core.not(target)){
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
}catch (e39670){var e = e39670;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,350], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception",e], 0));
}catch (e39671){if((e39671 instanceof Error)){
var e__18456__auto___39676 = e39671;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,350], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___39676], 0));
} else {
throw e39671;

}
}
return null;
}})();
var action = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(rv);
if(cljs.core.truth_(action)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rv,cljs.core.cst$kw$action,((function (rv,action){
return (function (){
try{var action_result = (action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(env,k,params) : action.call(null,env,k,params));
try{(fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : fulcro.client.mutations.post_mutate.call(null,env,k,params));
}catch (e39674){var e_39682 = e39674;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,359], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post mutate failed on dispatch to ",k], 0));
}catch (e39675){if((e39675 instanceof Error)){
var e__18456__auto___39683 = e39675;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,359], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___39683], 0));
} else {
throw e39675;

}
}}
return action_result;
}catch (e39672){var e = e39672;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,362], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception",e], 0));
}catch (e39673){if((e39673 instanceof Error)){
var e__18456__auto___39685 = e39673;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.application",cljs.core.cst$kw$line,362], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___39685], 0));
} else {
throw e39673;

}
}
throw e;
}});})(rv,action))
);
} else {
return rv;
}
});

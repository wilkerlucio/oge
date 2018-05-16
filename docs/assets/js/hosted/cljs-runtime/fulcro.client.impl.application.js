goog.provide('fulcro.client.impl.application');
goog.require('cljs.core');
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
fulcro.client.impl.application.fallback_handler = (function fulcro$client$impl$application$fallback_handler(p__43629,query){
var map__43631 = p__43629;
var map__43631__$1 = ((((!((map__43631 == null)))?(((((map__43631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43631):map__43631);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43631__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__43631,map__43631__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc,new cljs.core.Keyword("fulcro","server-error","fulcro/server-error",-1254037316),error);

var temp__5455__auto__ = fulcro.client.primitives.fallback_tx(query,error);
if(cljs.core.truth_(temp__5455__auto__)){
var q = temp__5455__auto__;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),28], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transaction failed. Running fallback.",q], 0));
}catch (e43634){if((e43634 instanceof Error)){
var e__33343__auto___43639 = e43634;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),28], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___43639], 0));
} else {
throw e43634;

}
}
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,q);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),30], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Fallback triggered, but no fallbacks were defined."], 0));
}catch (e43635){if((e43635 instanceof Error)){
var e__33343__auto__ = e43635;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),30], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e43635;

}
}}
});
;})(map__43631,map__43631__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
fulcro.client.impl.application.enqueue = (function fulcro$client$impl$application$enqueue(q,v){
var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto__){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto__){
return (function (state_43646){
var state_val_43647 = (state_43646[(1)]);
if((state_val_43647 === (1))){
var state_43646__$1 = state_43646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43646__$1,(2),q,v);
} else {
if((state_val_43647 === (2))){
var inst_43644 = (state_43646[(2)]);
var state_43646__$1 = state_43646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43646__$1,inst_43644);
} else {
return null;
}
}
});})(c__33851__auto__))
;
return ((function (switch__32834__auto__,c__33851__auto__){
return (function() {
var fulcro$client$impl$application$enqueue_$_state_machine__32835__auto__ = null;
var fulcro$client$impl$application$enqueue_$_state_machine__32835__auto____0 = (function (){
var statearr_43648 = [null,null,null,null,null,null,null];
(statearr_43648[(0)] = fulcro$client$impl$application$enqueue_$_state_machine__32835__auto__);

(statearr_43648[(1)] = (1));

return statearr_43648;
});
var fulcro$client$impl$application$enqueue_$_state_machine__32835__auto____1 = (function (state_43646){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_43646);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e43649){if((e43649 instanceof Object)){
var ex__32838__auto__ = e43649;
var statearr_43650_43655 = state_43646;
(statearr_43650_43655[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43656 = state_43646;
state_43646 = G__43656;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
fulcro$client$impl$application$enqueue_$_state_machine__32835__auto__ = function(state_43646){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$enqueue_$_state_machine__32835__auto____0.call(this);
case 1:
return fulcro$client$impl$application$enqueue_$_state_machine__32835__auto____1.call(this,state_43646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$enqueue_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$enqueue_$_state_machine__32835__auto____0;
fulcro$client$impl$application$enqueue_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$enqueue_$_state_machine__32835__auto____1;
return fulcro$client$impl$application$enqueue_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto__))
})();
var state__33853__auto__ = (function (){var statearr_43653 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_43653[(6)] = c__33851__auto__);

return statearr_43653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto__))
);

return c__33851__auto__;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.impl.application","enqueue","fulcro.client.impl.application/enqueue",-1810476387,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword("fulcro.client.impl.data-fetch","payload","fulcro.client.impl.data-fetch/payload",1553254295)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response. DEPRECATED: If
 *   you're doing something really low-level with networking, use send-with-history-tracking.
 */
fulcro.client.impl.application.real_send = (function fulcro$client$impl$application$real_send(var_args){
var G__43659 = arguments.length;
switch (G__43659) {
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

fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2 = (function (net,p__43660){
var map__43661 = p__43660;
var map__43661__$1 = ((((!((map__43661 == null)))?(((((map__43661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43661):map__43661);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43661__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43661__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43661__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43661__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43661__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43661__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var progress_tx = ((function (map__43661,map__43661__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p1__43657_SHARP_){
return fulcro.client.mutations.progressive_update_transaction(tx,p1__43657_SHARP_);
});})(map__43661,map__43661__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var tx__$1 = fulcro.client.primitives.strip_ui(tx);
if(((!((net == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$ProgressiveTransfer$))))?true:false):false)){
return fulcro.client.network.updating_send(net,tx__$1,on_done,on_error,on_load);
} else {
if(((!((net == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.client.network.send(net,tx__$1,on_done,on_error);
} else {
if(((!((net == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === net.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
var on_done__$1 = ((function (progress_tx,tx__$1,map__43661,map__43661__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__43666){
var map__43667 = p__43666;
var map__43667__$1 = ((((!((map__43667 == null)))?(((((map__43667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43667):map__43667);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43667__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43667__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
return (on_done.cljs$core$IFn$_invoke$arity$2 ? on_done.cljs$core$IFn$_invoke$arity$2(body,transaction) : on_done.call(null,body,transaction));
});})(progress_tx,tx__$1,map__43661,map__43661__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_error__$1 = ((function (on_done__$1,progress_tx,tx__$1,map__43661,map__43661__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (p__43669){
var map__43670 = p__43669;
var map__43670__$1 = ((((!((map__43670 == null)))?(((((map__43670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43670):map__43670);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43670__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(body) : on_error.call(null,body));
});})(on_done__$1,progress_tx,tx__$1,map__43661,map__43661__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
var on_load__$1 = ((function (on_done__$1,on_error__$1,progress_tx,tx__$1,map__43661,map__43661__$1,reconciler,tx,on_done,on_error,on_load,abort_id){
return (function (progress){
if(cljs.core.truth_(reconciler)){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,progress_tx(progress));
} else {
return null;
}
});})(on_done__$1,on_error__$1,progress_tx,tx__$1,map__43661,map__43661__$1,reconciler,tx,on_done,on_error,on_load,abort_id))
;
return fulcro.client.network.transmit(net,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),tx__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),on_done__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),on_error__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),on_load__$1], null));
} else {
return null;
}
}
}
});

fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$5 = (function (net,tx,on_done,on_error,on_load){
return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2(net,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_done,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error,new cljs.core.Keyword(null,"on-load","on-load",1415151594),on_load], null));
});

fulcro.client.impl.application.real_send.cljs$lang$maxFixedArity = 5;

/**
 * Does a real send but includes history activity tracking to prevent the gc of history that is related to active
 *   network requests. If you're doing something really low level in the networking, you want this over real-send.
 */
fulcro.client.impl.application.send_with_history_tracking = (function fulcro$client$impl$application$send_with_history_tracking(var_args){
var G__43674 = arguments.length;
switch (G__43674) {
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

fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2 = (function (net,p__43675){
var map__43676 = p__43675;
var map__43676__$1 = ((((!((map__43676 == null)))?(((((map__43676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43676):map__43676);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43676__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43676__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43676__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43676__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43676__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43676__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var map__43678 = payload;
var map__43678__$1 = ((((!((map__43678 == null)))?(((((map__43678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43678):map__43678);
var history_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43678__$1,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43678__$1,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43678__$1,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43678__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var with_history_recording = ((function (map__43678,map__43678__$1,history_atom,tx_time,remote,abort_id,map__43676,map__43676__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (handler){
return ((function (map__43678,map__43678__$1,history_atom,tx_time,remote,abort_id,map__43676,map__43676__$1,reconciler,payload,tx,on_done,on_error,on_load){
return (function (resp,items_or_tx){
if(cljs.core.truth_((function (){var and__3911__auto__ = history_atom;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = remote;
if(cljs.core.truth_(and__3911__auto____$1)){
return tx_time;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history_atom,fulcro.history.remote_activity_finished,remote,tx_time);
} else {
}

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(resp,items_or_tx) : handler.call(null,resp,items_or_tx));
});
;})(map__43678,map__43678__$1,history_atom,tx_time,remote,abort_id,map__43676,map__43676__$1,reconciler,payload,tx,on_done,on_error,on_load))
});})(map__43678,map__43678__$1,history_atom,tx_time,remote,abort_id,map__43676,map__43676__$1,reconciler,payload,tx,on_done,on_error,on_load))
;
var on_done__$1 = with_history_recording(on_done);
var on_error__$1 = with_history_recording(on_error);
if(cljs.core.truth_((function (){var and__3911__auto__ = history_atom;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = tx_time;
if(cljs.core.truth_(and__3911__auto____$1)){
return remote;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history_atom,fulcro.history.remote_activity_started,remote,tx_time);
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),79], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Payload had no history details."], 0));
}catch (e43680){if((e43680 instanceof Error)){
var e__33343__auto___43682 = e43680;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),79], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___43682], 0));
} else {
throw e43680;

}
}}

return fulcro.client.impl.application.real_send.cljs$core$IFn$_invoke$arity$2(net,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_done__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594),on_load,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id], null));
});

fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$6 = (function (payload,net,tx,on_done,on_error,on_load){
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(net,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_done,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error,new cljs.core.Keyword(null,"on-load","on-load",1415151594),on_load], null));
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
if(!(((cljs.core.vector_QMARK_(tx)) && (cljs.core.every_QMARK_((function (t){
var or__3922__auto__ = fulcro.util.mutation_join_QMARK_(t);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((cljs.core.list_QMARK_(t)) && ((cljs.core.first(t) instanceof cljs.core.Symbol)));
}
}),tx))))){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),100], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INTERNAL ERROR: split-mutations was asked to split a tx that contained things other than mutations.",tx], 0));
}catch (e43683){if((e43683 instanceof Error)){
var e__33343__auto___43690 = e43683;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),100], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___43690], 0));
} else {
throw e43683;

}
}
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null);
} else {
if(cljs.core.empty_QMARK_(tx)){
return cljs.core.PersistentVector.EMPTY;
} else {
var dispatch_symbols = (function (tx__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_)),(function (){var G__43685 = tx__$1;
var G__43685__$1 = (((G__43685 == null))?null:fulcro.client.primitives.query__GT_ast(G__43685));
if((G__43685__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__43685__$1);
}
})());
});
var compatible_abort_QMARK_ = ((function (dispatch_symbols){
return (function (tx1,tx2){
var a1 = fulcro.client.mutations.abort_ids(tx1);
var a2 = fulcro.client.mutations.abort_ids(tx2);
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(a1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a1,a2)))) || (((cljs.core.empty_QMARK_(a1)) && (cljs.core.empty_QMARK_(a2)))));
});})(dispatch_symbols))
;
var can_be_included_QMARK_ = ((function (dispatch_symbols,compatible_abort_QMARK_){
return (function (tx__$1,expr){
var or__3922__auto__ = cljs.core.empty_QMARK_(tx__$1);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = compatible_abort_QMARK_(tx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null));
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(dispatch_symbols(tx__$1),dispatch_symbols(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null))));
} else {
return and__3911__auto__;
}
}
});})(dispatch_symbols,compatible_abort_QMARK_))
;
var map__43684 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_){
return (function (p__43686,expr){
var map__43687 = p__43686;
var map__43687__$1 = ((((!((map__43687 == null)))?(((((map__43687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43687):map__43687);
var acc = map__43687__$1;
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43687__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
if(cljs.core.truth_(can_be_included_QMARK_(current,expr))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.conj,expr);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.conj,current),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null));
}
});})(dispatch_symbols,compatible_abort_QMARK_,can_be_included_QMARK_))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.PersistentVector.EMPTY], null),tx);
var map__43684__$1 = ((((!((map__43684 == null)))?(((((map__43684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43684):map__43684);
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43684__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43684__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
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
fulcro.client.impl.application.enqueue_mutations = (function fulcro$client$impl$application$enqueue_mutations(p__43691,remote_tx_map,cb){
var map__43692 = p__43691;
var map__43692__$1 = ((((!((map__43692 == null)))?(((((map__43692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43692):map__43692);
var app = map__43692__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43692__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43692__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var history = fulcro.client.primitives.get_history(reconciler);
var seq__43694 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__43695 = null;
var count__43696 = (0);
var i__43697 = (0);
while(true){
if((i__43697 < count__43696)){
var remote = chunk__43695.cljs$core$IIndexed$_nth$arity$2(null,i__43697);
var queue_43720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_43721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_43722 = (function (){var or__3922__auto__ = (function (){var G__43699 = full_remote_transaction_43721;
var G__43699__$1 = (((G__43699 == null))?null:cljs.core.meta(G__43699));
var G__43699__$2 = (((G__43699__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__43699__$1));
if((G__43699__$2 == null)){
return null;
} else {
return cljs.core.vec(G__43699__$2);
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_43723 = (function (){var G__43700 = full_remote_transaction_43721;
var G__43700__$1 = (((G__43700 == null))?null:cljs.core.meta(G__43700));
if((G__43700__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__43700__$1);
}
})();
var fallback_43724 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_43721);
var desired_remote_mutations_43725 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_43721);
var tx_list_43726 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_43725);
var has_mutations_QMARK__43727 = ((function (seq__43694,chunk__43695,count__43696,i__43697,queue_43720,full_remote_transaction_43721,refresh_set_43722,tx_time_43723,fallback_43724,desired_remote_mutations_43725,tx_list_43726,remote,history,map__43692,map__43692__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__43694,chunk__43695,count__43696,i__43697,queue_43720,full_remote_transaction_43721,refresh_set_43722,tx_time_43723,fallback_43724,desired_remote_mutations_43725,tx_list_43726,remote,history,map__43692,map__43692__$1,app,reconciler,send_queues))
;
var payload_43728 = ((function (seq__43694,chunk__43695,count__43696,i__43697,queue_43720,full_remote_transaction_43721,refresh_set_43722,tx_time_43723,fallback_43724,desired_remote_mutations_43725,tx_list_43726,has_mutations_QMARK__43727,remote,history,map__43692,map__43692__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__43701 = tx;
var G__43701__$1 = (((G__43701 == null))?null:fulcro.client.mutations.abort_ids(G__43701));
if((G__43701__$1 == null)){
return null;
} else {
return cljs.core.first(G__43701__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_43723,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__43694,chunk__43695,count__43696,i__43697,abort_id,queue_43720,full_remote_transaction_43721,refresh_set_43722,tx_time_43723,fallback_43724,desired_remote_mutations_43725,tx_list_43726,has_mutations_QMARK__43727,remote,history,map__43692,map__43692__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__43702 = result;
var G__43703 = (function (){var or__3922__auto__ = mtx;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return tx;
}
})();
var G__43704 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__43702,G__43703,G__43704) : cb.call(null,G__43702,G__43703,G__43704));
});})(seq__43694,chunk__43695,count__43696,i__43697,abort_id,queue_43720,full_remote_transaction_43721,refresh_set_43722,tx_time_43723,fallback_43724,desired_remote_mutations_43725,tx_list_43726,has_mutations_QMARK__43727,remote,history,map__43692,map__43692__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__43694,chunk__43695,count__43696,i__43697,abort_id,queue_43720,full_remote_transaction_43721,refresh_set_43722,tx_time_43723,fallback_43724,desired_remote_mutations_43725,tx_list_43726,has_mutations_QMARK__43727,remote,history,map__43692,map__43692__$1,app,reconciler,send_queues){
return (function (result){
return (fallback_43724.cljs$core$IFn$_invoke$arity$1 ? fallback_43724.cljs$core$IFn$_invoke$arity$1(result) : fallback_43724.call(null,result));
});})(seq__43694,chunk__43695,count__43696,i__43697,abort_id,queue_43720,full_remote_transaction_43721,refresh_set_43722,tx_time_43723,fallback_43724,desired_remote_mutations_43725,tx_list_43726,has_mutations_QMARK__43727,remote,history,map__43692,map__43692__$1,app,reconciler,send_queues))
], null);
});})(seq__43694,chunk__43695,count__43696,i__43697,queue_43720,full_remote_transaction_43721,refresh_set_43722,tx_time_43723,fallback_43724,desired_remote_mutations_43725,tx_list_43726,has_mutations_QMARK__43727,remote,history,map__43692,map__43692__$1,app,reconciler,send_queues))
;
var seq__43705_43729 = cljs.core.seq(tx_list_43726);
var chunk__43706_43730 = null;
var count__43707_43731 = (0);
var i__43708_43732 = (0);
while(true){
if((i__43708_43732 < count__43707_43731)){
var tx_43733 = chunk__43706_43730.cljs$core$IIndexed$_nth$arity$2(null,i__43708_43732);
if(cljs.core.truth_(has_mutations_QMARK__43727(tx_43733))){
fulcro.client.impl.application.enqueue(queue_43720,payload_43728(tx_43733));
} else {
}


var G__43734 = seq__43705_43729;
var G__43735 = chunk__43706_43730;
var G__43736 = count__43707_43731;
var G__43737 = (i__43708_43732 + (1));
seq__43705_43729 = G__43734;
chunk__43706_43730 = G__43735;
count__43707_43731 = G__43736;
i__43708_43732 = G__43737;
continue;
} else {
var temp__5457__auto___43738 = cljs.core.seq(seq__43705_43729);
if(temp__5457__auto___43738){
var seq__43705_43739__$1 = temp__5457__auto___43738;
if(cljs.core.chunked_seq_QMARK_(seq__43705_43739__$1)){
var c__4319__auto___43740 = cljs.core.chunk_first(seq__43705_43739__$1);
var G__43741 = cljs.core.chunk_rest(seq__43705_43739__$1);
var G__43742 = c__4319__auto___43740;
var G__43743 = cljs.core.count(c__4319__auto___43740);
var G__43744 = (0);
seq__43705_43729 = G__43741;
chunk__43706_43730 = G__43742;
count__43707_43731 = G__43743;
i__43708_43732 = G__43744;
continue;
} else {
var tx_43745 = cljs.core.first(seq__43705_43739__$1);
if(cljs.core.truth_(has_mutations_QMARK__43727(tx_43745))){
fulcro.client.impl.application.enqueue(queue_43720,payload_43728(tx_43745));
} else {
}


var G__43746 = cljs.core.next(seq__43705_43739__$1);
var G__43747 = null;
var G__43748 = (0);
var G__43749 = (0);
seq__43705_43729 = G__43746;
chunk__43706_43730 = G__43747;
count__43707_43731 = G__43748;
i__43708_43732 = G__43749;
continue;
}
} else {
}
}
break;
}


var G__43750 = seq__43694;
var G__43751 = chunk__43695;
var G__43752 = count__43696;
var G__43753 = (i__43697 + (1));
seq__43694 = G__43750;
chunk__43695 = G__43751;
count__43696 = G__43752;
i__43697 = G__43753;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__43694);
if(temp__5457__auto__){
var seq__43694__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43694__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__43694__$1);
var G__43754 = cljs.core.chunk_rest(seq__43694__$1);
var G__43755 = c__4319__auto__;
var G__43756 = cljs.core.count(c__4319__auto__);
var G__43757 = (0);
seq__43694 = G__43754;
chunk__43695 = G__43755;
count__43696 = G__43756;
i__43697 = G__43757;
continue;
} else {
var remote = cljs.core.first(seq__43694__$1);
var queue_43758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_43759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var refresh_set_43760 = (function (){var or__3922__auto__ = (function (){var G__43710 = full_remote_transaction_43759;
var G__43710__$1 = (((G__43710 == null))?null:cljs.core.meta(G__43710));
var G__43710__$2 = (((G__43710__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__43710__$1));
if((G__43710__$2 == null)){
return null;
} else {
return cljs.core.vec(G__43710__$2);
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var tx_time_43761 = (function (){var G__43711 = full_remote_transaction_43759;
var G__43711__$1 = (((G__43711 == null))?null:cljs.core.meta(G__43711));
if((G__43711__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456).cljs$core$IFn$_invoke$arity$1(G__43711__$1);
}
})();
var fallback_43762 = fulcro.client.impl.application.fallback_handler(app,full_remote_transaction_43759);
var desired_remote_mutations_43763 = fulcro.client.primitives.remove_loads_and_fallbacks(full_remote_transaction_43759);
var tx_list_43764 = fulcro.client.impl.application.split_mutations(desired_remote_mutations_43763);
var has_mutations_QMARK__43765 = ((function (seq__43694,chunk__43695,count__43696,i__43697,queue_43758,full_remote_transaction_43759,refresh_set_43760,tx_time_43761,fallback_43762,desired_remote_mutations_43763,tx_list_43764,remote,seq__43694__$1,temp__5457__auto__,history,map__43692,map__43692__$1,app,reconciler,send_queues){
return (function (tx){
return (cljs.core.count(tx) > (0));
});})(seq__43694,chunk__43695,count__43696,i__43697,queue_43758,full_remote_transaction_43759,refresh_set_43760,tx_time_43761,fallback_43762,desired_remote_mutations_43763,tx_list_43764,remote,seq__43694__$1,temp__5457__auto__,history,map__43692,map__43692__$1,app,reconciler,send_queues))
;
var payload_43766 = ((function (seq__43694,chunk__43695,count__43696,i__43697,queue_43758,full_remote_transaction_43759,refresh_set_43760,tx_time_43761,fallback_43762,desired_remote_mutations_43763,tx_list_43764,has_mutations_QMARK__43765,remote,seq__43694__$1,temp__5457__auto__,history,map__43692,map__43692__$1,app,reconciler,send_queues){
return (function (tx){
var abort_id = (function (){var G__43712 = tx;
var G__43712__$1 = (((G__43712 == null))?null:fulcro.client.mutations.abort_ids(G__43712));
if((G__43712__$1 == null)){
return null;
} else {
return cljs.core.first(G__43712__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),tx,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time_43761,new cljs.core.Keyword("fulcro.history","history-atom","fulcro.history/history-atom",-1250797564),history,new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),remote,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),abort_id,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603),((function (seq__43694,chunk__43695,count__43696,i__43697,abort_id,queue_43758,full_remote_transaction_43759,refresh_set_43760,tx_time_43761,fallback_43762,desired_remote_mutations_43763,tx_list_43764,has_mutations_QMARK__43765,remote,seq__43694__$1,temp__5457__auto__,history,map__43692,map__43692__$1,app,reconciler,send_queues){
return (function (result,mtx){
var G__43713 = result;
var G__43714 = (function (){var or__3922__auto__ = mtx;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return tx;
}
})();
var G__43715 = remote;
return (cb.cljs$core$IFn$_invoke$arity$3 ? cb.cljs$core$IFn$_invoke$arity$3(G__43713,G__43714,G__43715) : cb.call(null,G__43713,G__43714,G__43715));
});})(seq__43694,chunk__43695,count__43696,i__43697,abort_id,queue_43758,full_remote_transaction_43759,refresh_set_43760,tx_time_43761,fallback_43762,desired_remote_mutations_43763,tx_list_43764,has_mutations_QMARK__43765,remote,seq__43694__$1,temp__5457__auto__,history,map__43692,map__43692__$1,app,reconciler,send_queues))
,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629),((function (seq__43694,chunk__43695,count__43696,i__43697,abort_id,queue_43758,full_remote_transaction_43759,refresh_set_43760,tx_time_43761,fallback_43762,desired_remote_mutations_43763,tx_list_43764,has_mutations_QMARK__43765,remote,seq__43694__$1,temp__5457__auto__,history,map__43692,map__43692__$1,app,reconciler,send_queues){
return (function (result){
return (fallback_43762.cljs$core$IFn$_invoke$arity$1 ? fallback_43762.cljs$core$IFn$_invoke$arity$1(result) : fallback_43762.call(null,result));
});})(seq__43694,chunk__43695,count__43696,i__43697,abort_id,queue_43758,full_remote_transaction_43759,refresh_set_43760,tx_time_43761,fallback_43762,desired_remote_mutations_43763,tx_list_43764,has_mutations_QMARK__43765,remote,seq__43694__$1,temp__5457__auto__,history,map__43692,map__43692__$1,app,reconciler,send_queues))
], null);
});})(seq__43694,chunk__43695,count__43696,i__43697,queue_43758,full_remote_transaction_43759,refresh_set_43760,tx_time_43761,fallback_43762,desired_remote_mutations_43763,tx_list_43764,has_mutations_QMARK__43765,remote,seq__43694__$1,temp__5457__auto__,history,map__43692,map__43692__$1,app,reconciler,send_queues))
;
var seq__43716_43767 = cljs.core.seq(tx_list_43764);
var chunk__43717_43768 = null;
var count__43718_43769 = (0);
var i__43719_43770 = (0);
while(true){
if((i__43719_43770 < count__43718_43769)){
var tx_43771 = chunk__43717_43768.cljs$core$IIndexed$_nth$arity$2(null,i__43719_43770);
if(cljs.core.truth_(has_mutations_QMARK__43765(tx_43771))){
fulcro.client.impl.application.enqueue(queue_43758,payload_43766(tx_43771));
} else {
}


var G__43772 = seq__43716_43767;
var G__43773 = chunk__43717_43768;
var G__43774 = count__43718_43769;
var G__43775 = (i__43719_43770 + (1));
seq__43716_43767 = G__43772;
chunk__43717_43768 = G__43773;
count__43718_43769 = G__43774;
i__43719_43770 = G__43775;
continue;
} else {
var temp__5457__auto___43776__$1 = cljs.core.seq(seq__43716_43767);
if(temp__5457__auto___43776__$1){
var seq__43716_43777__$1 = temp__5457__auto___43776__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43716_43777__$1)){
var c__4319__auto___43778 = cljs.core.chunk_first(seq__43716_43777__$1);
var G__43779 = cljs.core.chunk_rest(seq__43716_43777__$1);
var G__43780 = c__4319__auto___43778;
var G__43781 = cljs.core.count(c__4319__auto___43778);
var G__43782 = (0);
seq__43716_43767 = G__43779;
chunk__43717_43768 = G__43780;
count__43718_43769 = G__43781;
i__43719_43770 = G__43782;
continue;
} else {
var tx_43783 = cljs.core.first(seq__43716_43777__$1);
if(cljs.core.truth_(has_mutations_QMARK__43765(tx_43783))){
fulcro.client.impl.application.enqueue(queue_43758,payload_43766(tx_43783));
} else {
}


var G__43784 = cljs.core.next(seq__43716_43777__$1);
var G__43785 = null;
var G__43786 = (0);
var G__43787 = (0);
seq__43716_43767 = G__43784;
chunk__43717_43768 = G__43785;
count__43718_43769 = G__43786;
i__43719_43770 = G__43787;
continue;
}
} else {
}
}
break;
}


var G__43788 = cljs.core.next(seq__43694__$1);
var G__43789 = null;
var G__43790 = (0);
var G__43791 = (0);
seq__43694 = G__43788;
chunk__43695 = G__43789;
count__43696 = G__43790;
i__43697 = G__43791;
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
fulcro.client.impl.application.enqueue_reads = (function fulcro$client$impl$application$enqueue_reads(p__43794){
var map__43795 = p__43794;
var map__43795__$1 = ((((!((map__43795 == null)))?(((((map__43795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43795):map__43795);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43795__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43795__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43795__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__43797 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__43798 = null;
var count__43799 = (0);
var i__43800 = (0);
while(true){
if((i__43800 < count__43799)){
var remote = chunk__43798.cljs$core$IIndexed$_nth$arity$2(null,i__43800);
var queue_43817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_43818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_43819 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__43801_43820 = cljs.core.seq(parallel_payload_43819);
var chunk__43802_43821 = null;
var count__43803_43822 = (0);
var i__43804_43823 = (0);
while(true){
if((i__43804_43823 < count__43803_43822)){
var map__43805_43824 = chunk__43802_43821.cljs$core$IIndexed$_nth$arity$2(null,i__43804_43823);
var map__43805_43825__$1 = ((((!((map__43805_43824 == null)))?(((((map__43805_43824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43805_43824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43805_43824):map__43805_43824);
var payload_43826 = map__43805_43825__$1;
var query_43827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43805_43825__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_43828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43805_43825__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_43829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43805_43825__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_43830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43805_43825__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_43831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43805_43825__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__43832 = ((function (seq__43801_43820,chunk__43802_43821,count__43803_43822,i__43804_43823,seq__43797,chunk__43798,count__43799,i__43800,map__43805_43824,map__43805_43825__$1,payload_43826,query_43827,on_load_43828,on_error_43829,load_descriptors_43830,abort_id_43831,queue_43817,network_43818,parallel_payload_43819,remote,map__43795,map__43795__$1,send_queues,reconciler,networking){
return (function (p1__43792_SHARP_){
return (on_load_43828.cljs$core$IFn$_invoke$arity$2 ? on_load_43828.cljs$core$IFn$_invoke$arity$2(p1__43792_SHARP_,load_descriptors_43830) : on_load_43828.call(null,p1__43792_SHARP_,load_descriptors_43830));
});})(seq__43801_43820,chunk__43802_43821,count__43803_43822,i__43804_43823,seq__43797,chunk__43798,count__43799,i__43800,map__43805_43824,map__43805_43825__$1,payload_43826,query_43827,on_load_43828,on_error_43829,load_descriptors_43830,abort_id_43831,queue_43817,network_43818,parallel_payload_43819,remote,map__43795,map__43795__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__43833 = ((function (seq__43801_43820,chunk__43802_43821,count__43803_43822,i__43804_43823,seq__43797,chunk__43798,count__43799,i__43800,on_load_SINGLEQUOTE__43832,map__43805_43824,map__43805_43825__$1,payload_43826,query_43827,on_load_43828,on_error_43829,load_descriptors_43830,abort_id_43831,queue_43817,network_43818,parallel_payload_43819,remote,map__43795,map__43795__$1,send_queues,reconciler,networking){
return (function (p1__43793_SHARP_){
return (on_error_43829.cljs$core$IFn$_invoke$arity$2 ? on_error_43829.cljs$core$IFn$_invoke$arity$2(p1__43793_SHARP_,load_descriptors_43830) : on_error_43829.call(null,p1__43793_SHARP_,load_descriptors_43830));
});})(seq__43801_43820,chunk__43802_43821,count__43803_43822,i__43804_43823,seq__43797,chunk__43798,count__43799,i__43800,on_load_SINGLEQUOTE__43832,map__43805_43824,map__43805_43825__$1,payload_43826,query_43827,on_load_43828,on_error_43829,load_descriptors_43830,abort_id_43831,queue_43817,network_43818,parallel_payload_43819,remote,map__43795,map__43795__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_43818,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_43826,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_43827,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__43832,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__43833,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_43831], null));


var G__43834 = seq__43801_43820;
var G__43835 = chunk__43802_43821;
var G__43836 = count__43803_43822;
var G__43837 = (i__43804_43823 + (1));
seq__43801_43820 = G__43834;
chunk__43802_43821 = G__43835;
count__43803_43822 = G__43836;
i__43804_43823 = G__43837;
continue;
} else {
var temp__5457__auto___43838 = cljs.core.seq(seq__43801_43820);
if(temp__5457__auto___43838){
var seq__43801_43839__$1 = temp__5457__auto___43838;
if(cljs.core.chunked_seq_QMARK_(seq__43801_43839__$1)){
var c__4319__auto___43840 = cljs.core.chunk_first(seq__43801_43839__$1);
var G__43841 = cljs.core.chunk_rest(seq__43801_43839__$1);
var G__43842 = c__4319__auto___43840;
var G__43843 = cljs.core.count(c__4319__auto___43840);
var G__43844 = (0);
seq__43801_43820 = G__43841;
chunk__43802_43821 = G__43842;
count__43803_43822 = G__43843;
i__43804_43823 = G__43844;
continue;
} else {
var map__43807_43845 = cljs.core.first(seq__43801_43839__$1);
var map__43807_43846__$1 = ((((!((map__43807_43845 == null)))?(((((map__43807_43845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43807_43845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43807_43845):map__43807_43845);
var payload_43847 = map__43807_43846__$1;
var query_43848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43807_43846__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_43849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43807_43846__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_43850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43807_43846__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_43851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43807_43846__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_43852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43807_43846__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__43853 = ((function (seq__43801_43820,chunk__43802_43821,count__43803_43822,i__43804_43823,seq__43797,chunk__43798,count__43799,i__43800,map__43807_43845,map__43807_43846__$1,payload_43847,query_43848,on_load_43849,on_error_43850,load_descriptors_43851,abort_id_43852,seq__43801_43839__$1,temp__5457__auto___43838,queue_43817,network_43818,parallel_payload_43819,remote,map__43795,map__43795__$1,send_queues,reconciler,networking){
return (function (p1__43792_SHARP_){
return (on_load_43849.cljs$core$IFn$_invoke$arity$2 ? on_load_43849.cljs$core$IFn$_invoke$arity$2(p1__43792_SHARP_,load_descriptors_43851) : on_load_43849.call(null,p1__43792_SHARP_,load_descriptors_43851));
});})(seq__43801_43820,chunk__43802_43821,count__43803_43822,i__43804_43823,seq__43797,chunk__43798,count__43799,i__43800,map__43807_43845,map__43807_43846__$1,payload_43847,query_43848,on_load_43849,on_error_43850,load_descriptors_43851,abort_id_43852,seq__43801_43839__$1,temp__5457__auto___43838,queue_43817,network_43818,parallel_payload_43819,remote,map__43795,map__43795__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__43854 = ((function (seq__43801_43820,chunk__43802_43821,count__43803_43822,i__43804_43823,seq__43797,chunk__43798,count__43799,i__43800,on_load_SINGLEQUOTE__43853,map__43807_43845,map__43807_43846__$1,payload_43847,query_43848,on_load_43849,on_error_43850,load_descriptors_43851,abort_id_43852,seq__43801_43839__$1,temp__5457__auto___43838,queue_43817,network_43818,parallel_payload_43819,remote,map__43795,map__43795__$1,send_queues,reconciler,networking){
return (function (p1__43793_SHARP_){
return (on_error_43850.cljs$core$IFn$_invoke$arity$2 ? on_error_43850.cljs$core$IFn$_invoke$arity$2(p1__43793_SHARP_,load_descriptors_43851) : on_error_43850.call(null,p1__43793_SHARP_,load_descriptors_43851));
});})(seq__43801_43820,chunk__43802_43821,count__43803_43822,i__43804_43823,seq__43797,chunk__43798,count__43799,i__43800,on_load_SINGLEQUOTE__43853,map__43807_43845,map__43807_43846__$1,payload_43847,query_43848,on_load_43849,on_error_43850,load_descriptors_43851,abort_id_43852,seq__43801_43839__$1,temp__5457__auto___43838,queue_43817,network_43818,parallel_payload_43819,remote,map__43795,map__43795__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_43818,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_43847,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_43848,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__43853,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__43854,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_43852], null));


var G__43855 = cljs.core.next(seq__43801_43839__$1);
var G__43856 = null;
var G__43857 = (0);
var G__43858 = (0);
seq__43801_43820 = G__43855;
chunk__43802_43821 = G__43856;
count__43803_43822 = G__43857;
i__43804_43823 = G__43858;
continue;
}
} else {
}
}
break;
}

var fetch_payload_43859 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_43859)){
fulcro.client.impl.application.enqueue(queue_43817,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_43859,new cljs.core.Keyword(null,"networking","networking",586110628),network_43818));

var G__43860 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_43859 = G__43860;
continue;
} else {
}
break;
}


var G__43861 = seq__43797;
var G__43862 = chunk__43798;
var G__43863 = count__43799;
var G__43864 = (i__43800 + (1));
seq__43797 = G__43861;
chunk__43798 = G__43862;
count__43799 = G__43863;
i__43800 = G__43864;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__43797);
if(temp__5457__auto__){
var seq__43797__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43797__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__43797__$1);
var G__43865 = cljs.core.chunk_rest(seq__43797__$1);
var G__43866 = c__4319__auto__;
var G__43867 = cljs.core.count(c__4319__auto__);
var G__43868 = (0);
seq__43797 = G__43865;
chunk__43798 = G__43866;
count__43799 = G__43867;
i__43800 = G__43868;
continue;
} else {
var remote = cljs.core.first(seq__43797__$1);
var queue_43869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_43870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_43871 = fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_(remote,reconciler);
var seq__43809_43872 = cljs.core.seq(parallel_payload_43871);
var chunk__43810_43873 = null;
var count__43811_43874 = (0);
var i__43812_43875 = (0);
while(true){
if((i__43812_43875 < count__43811_43874)){
var map__43813_43876 = chunk__43810_43873.cljs$core$IIndexed$_nth$arity$2(null,i__43812_43875);
var map__43813_43877__$1 = ((((!((map__43813_43876 == null)))?(((((map__43813_43876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43813_43876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43813_43876):map__43813_43876);
var payload_43878 = map__43813_43877__$1;
var query_43879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43813_43877__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_43880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43813_43877__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_43881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43813_43877__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_43882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43813_43877__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_43883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43813_43877__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__43884 = ((function (seq__43809_43872,chunk__43810_43873,count__43811_43874,i__43812_43875,seq__43797,chunk__43798,count__43799,i__43800,map__43813_43876,map__43813_43877__$1,payload_43878,query_43879,on_load_43880,on_error_43881,load_descriptors_43882,abort_id_43883,queue_43869,network_43870,parallel_payload_43871,remote,seq__43797__$1,temp__5457__auto__,map__43795,map__43795__$1,send_queues,reconciler,networking){
return (function (p1__43792_SHARP_){
return (on_load_43880.cljs$core$IFn$_invoke$arity$2 ? on_load_43880.cljs$core$IFn$_invoke$arity$2(p1__43792_SHARP_,load_descriptors_43882) : on_load_43880.call(null,p1__43792_SHARP_,load_descriptors_43882));
});})(seq__43809_43872,chunk__43810_43873,count__43811_43874,i__43812_43875,seq__43797,chunk__43798,count__43799,i__43800,map__43813_43876,map__43813_43877__$1,payload_43878,query_43879,on_load_43880,on_error_43881,load_descriptors_43882,abort_id_43883,queue_43869,network_43870,parallel_payload_43871,remote,seq__43797__$1,temp__5457__auto__,map__43795,map__43795__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__43885 = ((function (seq__43809_43872,chunk__43810_43873,count__43811_43874,i__43812_43875,seq__43797,chunk__43798,count__43799,i__43800,on_load_SINGLEQUOTE__43884,map__43813_43876,map__43813_43877__$1,payload_43878,query_43879,on_load_43880,on_error_43881,load_descriptors_43882,abort_id_43883,queue_43869,network_43870,parallel_payload_43871,remote,seq__43797__$1,temp__5457__auto__,map__43795,map__43795__$1,send_queues,reconciler,networking){
return (function (p1__43793_SHARP_){
return (on_error_43881.cljs$core$IFn$_invoke$arity$2 ? on_error_43881.cljs$core$IFn$_invoke$arity$2(p1__43793_SHARP_,load_descriptors_43882) : on_error_43881.call(null,p1__43793_SHARP_,load_descriptors_43882));
});})(seq__43809_43872,chunk__43810_43873,count__43811_43874,i__43812_43875,seq__43797,chunk__43798,count__43799,i__43800,on_load_SINGLEQUOTE__43884,map__43813_43876,map__43813_43877__$1,payload_43878,query_43879,on_load_43880,on_error_43881,load_descriptors_43882,abort_id_43883,queue_43869,network_43870,parallel_payload_43871,remote,seq__43797__$1,temp__5457__auto__,map__43795,map__43795__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_43870,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_43878,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_43879,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__43884,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__43885,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_43883], null));


var G__43886 = seq__43809_43872;
var G__43887 = chunk__43810_43873;
var G__43888 = count__43811_43874;
var G__43889 = (i__43812_43875 + (1));
seq__43809_43872 = G__43886;
chunk__43810_43873 = G__43887;
count__43811_43874 = G__43888;
i__43812_43875 = G__43889;
continue;
} else {
var temp__5457__auto___43890__$1 = cljs.core.seq(seq__43809_43872);
if(temp__5457__auto___43890__$1){
var seq__43809_43891__$1 = temp__5457__auto___43890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43809_43891__$1)){
var c__4319__auto___43892 = cljs.core.chunk_first(seq__43809_43891__$1);
var G__43893 = cljs.core.chunk_rest(seq__43809_43891__$1);
var G__43894 = c__4319__auto___43892;
var G__43895 = cljs.core.count(c__4319__auto___43892);
var G__43896 = (0);
seq__43809_43872 = G__43893;
chunk__43810_43873 = G__43894;
count__43811_43874 = G__43895;
i__43812_43875 = G__43896;
continue;
} else {
var map__43815_43897 = cljs.core.first(seq__43809_43891__$1);
var map__43815_43898__$1 = ((((!((map__43815_43897 == null)))?(((((map__43815_43897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43815_43897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43815_43897):map__43815_43897);
var payload_43899 = map__43815_43898__$1;
var query_43900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43815_43898__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load_43901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43815_43898__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error_43902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43815_43898__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors_43903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43815_43898__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id_43904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43815_43898__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var on_load_SINGLEQUOTE__43905 = ((function (seq__43809_43872,chunk__43810_43873,count__43811_43874,i__43812_43875,seq__43797,chunk__43798,count__43799,i__43800,map__43815_43897,map__43815_43898__$1,payload_43899,query_43900,on_load_43901,on_error_43902,load_descriptors_43903,abort_id_43904,seq__43809_43891__$1,temp__5457__auto___43890__$1,queue_43869,network_43870,parallel_payload_43871,remote,seq__43797__$1,temp__5457__auto__,map__43795,map__43795__$1,send_queues,reconciler,networking){
return (function (p1__43792_SHARP_){
return (on_load_43901.cljs$core$IFn$_invoke$arity$2 ? on_load_43901.cljs$core$IFn$_invoke$arity$2(p1__43792_SHARP_,load_descriptors_43903) : on_load_43901.call(null,p1__43792_SHARP_,load_descriptors_43903));
});})(seq__43809_43872,chunk__43810_43873,count__43811_43874,i__43812_43875,seq__43797,chunk__43798,count__43799,i__43800,map__43815_43897,map__43815_43898__$1,payload_43899,query_43900,on_load_43901,on_error_43902,load_descriptors_43903,abort_id_43904,seq__43809_43891__$1,temp__5457__auto___43890__$1,queue_43869,network_43870,parallel_payload_43871,remote,seq__43797__$1,temp__5457__auto__,map__43795,map__43795__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__43906 = ((function (seq__43809_43872,chunk__43810_43873,count__43811_43874,i__43812_43875,seq__43797,chunk__43798,count__43799,i__43800,on_load_SINGLEQUOTE__43905,map__43815_43897,map__43815_43898__$1,payload_43899,query_43900,on_load_43901,on_error_43902,load_descriptors_43903,abort_id_43904,seq__43809_43891__$1,temp__5457__auto___43890__$1,queue_43869,network_43870,parallel_payload_43871,remote,seq__43797__$1,temp__5457__auto__,map__43795,map__43795__$1,send_queues,reconciler,networking){
return (function (p1__43793_SHARP_){
return (on_error_43902.cljs$core$IFn$_invoke$arity$2 ? on_error_43902.cljs$core$IFn$_invoke$arity$2(p1__43793_SHARP_,load_descriptors_43903) : on_error_43902.call(null,p1__43793_SHARP_,load_descriptors_43903));
});})(seq__43809_43872,chunk__43810_43873,count__43811_43874,i__43812_43875,seq__43797,chunk__43798,count__43799,i__43800,on_load_SINGLEQUOTE__43905,map__43815_43897,map__43815_43898__$1,payload_43899,query_43900,on_load_43901,on_error_43902,load_descriptors_43903,abort_id_43904,seq__43809_43891__$1,temp__5457__auto___43890__$1,queue_43869,network_43870,parallel_payload_43871,remote,seq__43797__$1,temp__5457__auto__,map__43795,map__43795__$1,send_queues,reconciler,networking))
;
fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network_43870,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload_43899,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"tx","tx",466630418),query_43900,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_load_SINGLEQUOTE__43905,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error_SINGLEQUOTE__43906,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_43904], null));


var G__43907 = cljs.core.next(seq__43809_43891__$1);
var G__43908 = null;
var G__43909 = (0);
var G__43910 = (0);
seq__43809_43872 = G__43907;
chunk__43810_43873 = G__43908;
count__43811_43874 = G__43909;
i__43812_43875 = G__43910;
continue;
}
} else {
}
}
break;
}

var fetch_payload_43911 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_43911)){
fulcro.client.impl.application.enqueue(queue_43869,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_43911,new cljs.core.Keyword(null,"networking","networking",586110628),network_43870));

var G__43912 = fulcro.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_43911 = G__43912;
continue;
} else {
}
break;
}


var G__43913 = cljs.core.next(seq__43797__$1);
var G__43914 = null;
var G__43915 = (0);
var G__43916 = (0);
seq__43797 = G__43913;
chunk__43798 = G__43914;
count__43799 = G__43915;
i__43800 = G__43916;
continue;
}
} else {
return null;
}
}
break;
}
});
fulcro.client.impl.application.detect_errant_remotes = (function fulcro$client$impl$application$detect_errant_remotes(p__43917){
var map__43918 = p__43917;
var map__43918__$1 = ((((!((map__43918 == null)))?(((((map__43918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43918):map__43918);
var app = map__43918__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43918__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43918__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var state = fulcro.client.primitives.app_state(reconciler);
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("fulcro","ready-to-load","fulcro/ready-to-load",127104696));
var item_remotes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_remote,all_items));
var all_remotes = cljs.core.set(cljs.core.keys(send_queues));
var invalid_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty(invalid_remotes))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),203], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Use of invalid remote(s) detected! ",invalid_remotes], 0));
}catch (e43920){if((e43920 instanceof Error)){
var e__33343__auto__ = e43920;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),203], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e43920;

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
var map__43925 = payload;
var map__43925__$1 = ((((!((map__43925 == null)))?(((((map__43925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43925):map__43925);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758));
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-load","fulcro.client.impl.data-fetch/on-load",-1170993603));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","on-error","fulcro.client.impl.data-fetch/on-error",867419629));
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","load-descriptors","fulcro.client.impl.data-fetch/load-descriptors",1275690424));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43925__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__43925,map__43925__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__43921_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__43921_SHARP_,load_descriptors) : on_load.call(null,p1__43921_SHARP_,load_descriptors));
});})(map__43925,map__43925__$1,query,on_load,on_error,load_descriptors,abort_id))
:((function (map__43925,map__43925__$1,query,on_load,on_error,load_descriptors,abort_id){
return (function (p1__43922_SHARP_,p2__43923_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__43922_SHARP_,p2__43923_SHARP_) : on_load.call(null,p1__43922_SHARP_,p2__43923_SHARP_));
});})(map__43925,map__43925__$1,query,on_load,on_error,load_descriptors,abort_id))
);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__43925,map__43925__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update){
return (function (p1__43924_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__43924_SHARP_,load_descriptors) : on_error.call(null,p1__43924_SHARP_,load_descriptors));
});})(map__43925,map__43925__$1,query,on_load,on_error,load_descriptors,abort_id,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,on_error__$1);
var on_done = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,merge_data);
if(cljs.core.truth_(fulcro.client.impl.data_fetch.is_deferred_transaction_QMARK_(query))){
var G__43927 = cljs.core.PersistentArrayMap.EMPTY;
return (on_done.cljs$core$IFn$_invoke$arity$1 ? on_done.cljs$core$IFn$_invoke$arity$1(G__43927) : on_done.call(null,G__43927));
} else {
return fulcro.client.impl.application.send_with_history_tracking.cljs$core$IFn$_invoke$arity$2(network,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"tx","tx",466630418),query,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"on-done","on-done",-699252077),on_done,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error__$2,new cljs.core.Keyword(null,"on-load","on-load",1415151594),on_update,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id], null));
}
});
fulcro.client.impl.application.is_sequential_QMARK_ = (function fulcro$client$impl$application$is_sequential_QMARK_(network){
if(((!((network == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$NetworkBehavior$))))?true:false):false)){
return fulcro.client.network.serialize_requests_QMARK_(network);
} else {
return true;
}
});
/**
 * Starts a async go loop that sends network requests on networking object's request queue.
 * Gives the appearance of a separate networking 'thread' using core async.
 */
fulcro.client.impl.application.start_network_sequential_processing = (function fulcro$client$impl$application$start_network_sequential_processing(p__43929){
var map__43930 = p__43929;
var map__43930__$1 = ((((!((map__43930 == null)))?(((((map__43930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43930):map__43930);
var app = map__43930__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43930__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43930__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43930__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43930__$1,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128));
var seq__43932 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__43933 = null;
var count__43934 = (0);
var i__43935 = (0);
while(true){
if((i__43935 < count__43934)){
var remote = chunk__43933.cljs$core$IIndexed$_nth$arity$2(null,i__43935);
var queue_44020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_44021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__44022 = fulcro.client.impl.application.is_sequential_QMARK_(network_44021);
var response_channel_44023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_44024 = (cljs.core.truth_(sequential_QMARK__44022)?((function (seq__43932,chunk__43933,count__43934,i__43935,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto__,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto__,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_43939){
var state_val_43940 = (state_43939[(1)]);
if((state_val_43940 === (1))){
var state_43939__$1 = state_43939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43939__$1,(2),response_channel_44023,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_43940 === (2))){
var inst_43937 = (state_43939[(2)]);
var state_43939__$1 = state_43939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43939__$1,inst_43937);
} else {
return null;
}
}
});})(seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto__,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__43932,chunk__43933,count__43934,i__43935,switch__32834__auto__,c__33851__auto__,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0 = (function (){
var statearr_43941 = [null,null,null,null,null,null,null];
(statearr_43941[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__);

(statearr_43941[(1)] = (1));

return statearr_43941;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1 = (function (state_43939){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_43939);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e43942){if((e43942 instanceof Object)){
var ex__32838__auto__ = e43942;
var statearr_43943_44025 = state_43939;
(statearr_43943_44025[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44026 = state_43939;
state_43939 = G__44026;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__ = function(state_43939){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1.call(this,state_43939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__;
})()
;})(seq__43932,chunk__43933,count__43934,i__43935,switch__32834__auto__,c__33851__auto__,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__33853__auto__ = (function (){var statearr_43944 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_43944[(6)] = c__33851__auto__);

return statearr_43944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto__,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__33851__auto__;
});})(seq__43932,chunk__43933,count__43934,i__43935,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__33851__auto___44027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto___44027,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,send_complete_44024,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto___44027,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,send_complete_44024,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_43962){
var state_val_43963 = (state_43962[(1)]);
if((state_val_43963 === (1))){
var state_43962__$1 = state_43962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43962__$1,(2),queue_44020);
} else {
if((state_val_43963 === (2))){
var inst_43946 = (state_43962[(2)]);
var inst_43947 = inst_43946;
var state_43962__$1 = (function (){var statearr_43964 = state_43962;
(statearr_43964[(7)] = inst_43947);

return statearr_43964;
})();
var statearr_43965_44028 = state_43962__$1;
(statearr_43965_44028[(2)] = null);

(statearr_43965_44028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (3))){
var inst_43947 = (state_43962[(7)]);
var inst_43949 = fulcro.client.impl.application.send_payload(network_44021,reconciler,inst_43947,send_complete_44024);
var state_43962__$1 = (function (){var statearr_43966 = state_43962;
(statearr_43966[(8)] = inst_43949);

return statearr_43966;
})();
if(cljs.core.truth_(sequential_QMARK__44022)){
var statearr_43967_44029 = state_43962__$1;
(statearr_43967_44029[(1)] = (5));

} else {
var statearr_43968_44030 = state_43962__$1;
(statearr_43968_44030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (4))){
var inst_43960 = (state_43962[(2)]);
var state_43962__$1 = state_43962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43962__$1,inst_43960);
} else {
if((state_val_43963 === (5))){
var state_43962__$1 = state_43962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43962__$1,(8),response_channel_44023);
} else {
if((state_val_43963 === (6))){
var state_43962__$1 = state_43962;
var statearr_43969_44031 = state_43962__$1;
(statearr_43969_44031[(2)] = null);

(statearr_43969_44031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (7))){
var inst_43955 = (state_43962[(2)]);
var state_43962__$1 = (function (){var statearr_43970 = state_43962;
(statearr_43970[(9)] = inst_43955);

return statearr_43970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43962__$1,(9),queue_44020);
} else {
if((state_val_43963 === (8))){
var inst_43952 = (state_43962[(2)]);
var state_43962__$1 = state_43962;
var statearr_43971_44032 = state_43962__$1;
(statearr_43971_44032[(2)] = inst_43952);

(statearr_43971_44032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43963 === (9))){
var inst_43957 = (state_43962[(2)]);
var inst_43947 = inst_43957;
var state_43962__$1 = (function (){var statearr_43972 = state_43962;
(statearr_43972[(7)] = inst_43947);

return statearr_43972;
})();
var statearr_43973_44033 = state_43962__$1;
(statearr_43973_44033[(2)] = null);

(statearr_43973_44033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto___44027,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,send_complete_44024,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__43932,chunk__43933,count__43934,i__43935,switch__32834__auto__,c__33851__auto___44027,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,send_complete_44024,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0 = (function (){
var statearr_43974 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43974[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__);

(statearr_43974[(1)] = (1));

return statearr_43974;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1 = (function (state_43962){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_43962);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e43975){if((e43975 instanceof Object)){
var ex__32838__auto__ = e43975;
var statearr_43976_44034 = state_43962;
(statearr_43976_44034[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44035 = state_43962;
state_43962 = G__44035;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__ = function(state_43962){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1.call(this,state_43962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__;
})()
;})(seq__43932,chunk__43933,count__43934,i__43935,switch__32834__auto__,c__33851__auto___44027,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,send_complete_44024,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__33853__auto__ = (function (){var statearr_43977 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_43977[(6)] = c__33851__auto___44027);

return statearr_43977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto___44027,queue_44020,network_44021,sequential_QMARK__44022,response_channel_44023,send_complete_44024,remote,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__44036 = seq__43932;
var G__44037 = chunk__43933;
var G__44038 = count__43934;
var G__44039 = (i__43935 + (1));
seq__43932 = G__44036;
chunk__43933 = G__44037;
count__43934 = G__44038;
i__43935 = G__44039;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__43932);
if(temp__5457__auto__){
var seq__43932__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43932__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__43932__$1);
var G__44040 = cljs.core.chunk_rest(seq__43932__$1);
var G__44041 = c__4319__auto__;
var G__44042 = cljs.core.count(c__4319__auto__);
var G__44043 = (0);
seq__43932 = G__44040;
chunk__43933 = G__44041;
count__43934 = G__44042;
i__43935 = G__44043;
continue;
} else {
var remote = cljs.core.first(seq__43932__$1);
var queue_44044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_44045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var sequential_QMARK__44046 = fulcro.client.impl.application.is_sequential_QMARK_(network_44045);
var response_channel_44047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_44048 = (cljs.core.truth_(sequential_QMARK__44046)?((function (seq__43932,chunk__43933,count__43934,i__43935,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto__,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto__,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_43981){
var state_val_43982 = (state_43981[(1)]);
if((state_val_43982 === (1))){
var state_43981__$1 = state_43981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43981__$1,(2),response_channel_44047,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_43982 === (2))){
var inst_43979 = (state_43981[(2)]);
var state_43981__$1 = state_43981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43981__$1,inst_43979);
} else {
return null;
}
}
});})(seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto__,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__43932,chunk__43933,count__43934,i__43935,switch__32834__auto__,c__33851__auto__,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0 = (function (){
var statearr_43983 = [null,null,null,null,null,null,null];
(statearr_43983[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__);

(statearr_43983[(1)] = (1));

return statearr_43983;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1 = (function (state_43981){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_43981);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e43984){if((e43984 instanceof Object)){
var ex__32838__auto__ = e43984;
var statearr_43985_44049 = state_43981;
(statearr_43985_44049[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44050 = state_43981;
state_43981 = G__44050;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__ = function(state_43981){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1.call(this,state_43981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__;
})()
;})(seq__43932,chunk__43933,count__43934,i__43935,switch__32834__auto__,c__33851__auto__,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__33853__auto__ = (function (){var statearr_43986 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_43986[(6)] = c__33851__auto__);

return statearr_43986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto__,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
);

return c__33851__auto__;
});})(seq__43932,chunk__43933,count__43934,i__43935,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
:cljs.core.identity);
var c__33851__auto___44051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto___44051,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,send_complete_44048,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto___44051,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,send_complete_44048,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function (state_44004){
var state_val_44005 = (state_44004[(1)]);
if((state_val_44005 === (1))){
var state_44004__$1 = state_44004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44004__$1,(2),queue_44044);
} else {
if((state_val_44005 === (2))){
var inst_43988 = (state_44004[(2)]);
var inst_43989 = inst_43988;
var state_44004__$1 = (function (){var statearr_44006 = state_44004;
(statearr_44006[(7)] = inst_43989);

return statearr_44006;
})();
var statearr_44007_44052 = state_44004__$1;
(statearr_44007_44052[(2)] = null);

(statearr_44007_44052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44005 === (3))){
var inst_43989 = (state_44004[(7)]);
var inst_43991 = fulcro.client.impl.application.send_payload(network_44045,reconciler,inst_43989,send_complete_44048);
var state_44004__$1 = (function (){var statearr_44008 = state_44004;
(statearr_44008[(8)] = inst_43991);

return statearr_44008;
})();
if(cljs.core.truth_(sequential_QMARK__44046)){
var statearr_44009_44053 = state_44004__$1;
(statearr_44009_44053[(1)] = (5));

} else {
var statearr_44010_44054 = state_44004__$1;
(statearr_44010_44054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44005 === (4))){
var inst_44002 = (state_44004[(2)]);
var state_44004__$1 = state_44004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44004__$1,inst_44002);
} else {
if((state_val_44005 === (5))){
var state_44004__$1 = state_44004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44004__$1,(8),response_channel_44047);
} else {
if((state_val_44005 === (6))){
var state_44004__$1 = state_44004;
var statearr_44011_44055 = state_44004__$1;
(statearr_44011_44055[(2)] = null);

(statearr_44011_44055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44005 === (7))){
var inst_43997 = (state_44004[(2)]);
var state_44004__$1 = (function (){var statearr_44012 = state_44004;
(statearr_44012[(9)] = inst_43997);

return statearr_44012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44004__$1,(9),queue_44044);
} else {
if((state_val_44005 === (8))){
var inst_43994 = (state_44004[(2)]);
var state_44004__$1 = state_44004;
var statearr_44013_44056 = state_44004__$1;
(statearr_44013_44056[(2)] = inst_43994);

(statearr_44013_44056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44005 === (9))){
var inst_43999 = (state_44004[(2)]);
var inst_43989 = inst_43999;
var state_44004__$1 = (function (){var statearr_44014 = state_44004;
(statearr_44014[(7)] = inst_43989);

return statearr_44014;
})();
var statearr_44015_44057 = state_44004__$1;
(statearr_44015_44057[(2)] = null);

(statearr_44015_44057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto___44051,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,send_complete_44048,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
;
return ((function (seq__43932,chunk__43933,count__43934,i__43935,switch__32834__auto__,c__33851__auto___44051,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,send_complete_44048,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels){
return (function() {
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__ = null;
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0 = (function (){
var statearr_44016 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44016[(0)] = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__);

(statearr_44016[(1)] = (1));

return statearr_44016;
});
var fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1 = (function (state_44004){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_44004);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e44017){if((e44017 instanceof Object)){
var ex__32838__auto__ = e44017;
var statearr_44018_44058 = state_44004;
(statearr_44018_44058[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44059 = state_44004;
state_44004 = G__44059;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__ = function(state_44004){
switch(arguments.length){
case 0:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0.call(this);
case 1:
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1.call(this,state_44004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____0;
fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto____1;
return fulcro$client$impl$application$start_network_sequential_processing_$_state_machine__32835__auto__;
})()
;})(seq__43932,chunk__43933,count__43934,i__43935,switch__32834__auto__,c__33851__auto___44051,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,send_complete_44048,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
})();
var state__33853__auto__ = (function (){var statearr_44019 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_44019[(6)] = c__33851__auto___44051);

return statearr_44019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(seq__43932,chunk__43933,count__43934,i__43935,c__33851__auto___44051,queue_44044,network_44045,sequential_QMARK__44046,response_channel_44047,send_complete_44048,remote,seq__43932__$1,temp__5457__auto__,map__43930,map__43930__$1,app,networking,reconciler,send_queues,response_channels))
);



var G__44060 = cljs.core.next(seq__43932__$1);
var G__44061 = null;
var G__44062 = (0);
var G__44063 = (0);
seq__43932 = G__44060;
chunk__43933 = G__44061;
count__43934 = G__44062;
i__43935 = G__44063;
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
fulcro.client.impl.application.generate_reconciler = (function fulcro$client$impl$application$generate_reconciler(p__44064,initial_state,parser,p__44065){
var map__44066 = p__44064;
var map__44066__$1 = ((((!((map__44066 == null)))?(((((map__44066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44066):map__44066);
var app = map__44066__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44066__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44066__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__44067 = p__44065;
var map__44067__$1 = ((((!((map__44067 == null)))?(((((map__44067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44067):map__44067);
var reconciler_options = map__44067__$1;
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44067__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743));
var rec_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate){
return (function (pure,_,tempids){
var seq__44070_44074 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__44071_44075 = null;
var count__44072_44076 = (0);
var i__44073_44077 = (0);
while(true){
if((i__44073_44077 < count__44072_44076)){
var queue_44078 = chunk__44071_44075.cljs$core$IIndexed$_nth$arity$2(null,i__44073_44077);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_44078,tempids);


var G__44079 = seq__44070_44074;
var G__44080 = chunk__44071_44075;
var G__44081 = count__44072_44076;
var G__44082 = (i__44073_44077 + (1));
seq__44070_44074 = G__44079;
chunk__44071_44075 = G__44080;
count__44072_44076 = G__44081;
i__44073_44077 = G__44082;
continue;
} else {
var temp__5457__auto___44083 = cljs.core.seq(seq__44070_44074);
if(temp__5457__auto___44083){
var seq__44070_44084__$1 = temp__5457__auto___44083;
if(cljs.core.chunked_seq_QMARK_(seq__44070_44084__$1)){
var c__4319__auto___44085 = cljs.core.chunk_first(seq__44070_44084__$1);
var G__44086 = cljs.core.chunk_rest(seq__44070_44084__$1);
var G__44087 = c__4319__auto___44085;
var G__44088 = cljs.core.count(c__4319__auto___44085);
var G__44089 = (0);
seq__44070_44074 = G__44086;
chunk__44071_44075 = G__44087;
count__44072_44076 = G__44088;
i__44073_44077 = G__44089;
continue;
} else {
var queue_44090 = cljs.core.first(seq__44070_44084__$1);
fulcro.client.primitives.rewrite_tempids_in_request_queue(queue_44090,tempids);


var G__44091 = cljs.core.next(seq__44070_44084__$1);
var G__44092 = null;
var G__44093 = (0);
var G__44094 = (0);
seq__44070_44074 = G__44091;
chunk__44071_44075 = G__44092;
count__44072_44076 = G__44093;
i__44073_44077 = G__44094;
continue;
}
} else {
}
}
break;
}

var state_migrate = (function (){var or__3922__auto__ = migrate;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return fulcro.client.primitives.resolve_tempids;
}
})();
return (state_migrate.cljs$core$IFn$_invoke$arity$2 ? state_migrate.cljs$core$IFn$_invoke$arity$2(pure,tempids) : state_migrate.call(null,pure,tempids));
});})(rec_atom,remotes,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate))
;
var initial_state_with_locale = (function (){var set_default_locale = ((function (rec_atom,remotes,tempid_migrate,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.Keyword(null,"en","en",88457073)));
});})(rec_atom,remotes,tempid_migrate,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate))
;
var is_atom_QMARK_ = fulcro.util.atom_QMARK_(initial_state);
if(cljs.core.truth_(is_atom_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(initial_state,set_default_locale);

return initial_state;
} else {
return set_default_locale(initial_state);
}
})();
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,reconciler_options,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"migrate","migrate",-207110743),tempid_migrate,new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate){
return (function (sends_keyed_by_remote,result_merge_callback){
return fulcro.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref(rec_atom)),sends_keyed_by_remote,result_merge_callback);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"remotes","remotes",1132366312),remotes,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate){
return (function (target,source){
return fulcro.client.primitives.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__44066,map__44066__$1,app,send_queues,mutation_merge,map__44067,map__44067__$1,reconciler_options,migrate))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null)], 0));
var rec = fulcro.client.primitives.reconciler(config);
cljs.core.reset_BANG_(rec_atom,rec);

return rec;
});
fulcro.client.impl.application.initialize_global_error_callbacks = (function fulcro$client$impl$application$initialize_global_error_callbacks(app){
var seq__44096 = cljs.core.seq(cljs.core.keys(new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app)));
var chunk__44097 = null;
var count__44098 = (0);
var i__44099 = (0);
while(true){
if((i__44099 < count__44098)){
var remote = chunk__44097.cljs$core$IIndexed$_nth$arity$2(null,i__44099);
var cb_atom_44100 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(fulcro.util.atom_QMARK_(cb_atom_44100))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_44100,((function (seq__44096,chunk__44097,count__44098,i__44099,cb_atom_44100,remote){
return (function (p1__44095_SHARP_){
if(cljs.core.fn_QMARK_(p1__44095_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__44095_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__44096,chunk__44097,count__44098,i__44099,cb_atom_44100,remote))
);
} else {
}


var G__44101 = seq__44096;
var G__44102 = chunk__44097;
var G__44103 = count__44098;
var G__44104 = (i__44099 + (1));
seq__44096 = G__44101;
chunk__44097 = G__44102;
count__44098 = G__44103;
i__44099 = G__44104;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__44096);
if(temp__5457__auto__){
var seq__44096__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44096__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__44096__$1);
var G__44105 = cljs.core.chunk_rest(seq__44096__$1);
var G__44106 = c__4319__auto__;
var G__44107 = cljs.core.count(c__4319__auto__);
var G__44108 = (0);
seq__44096 = G__44105;
chunk__44097 = G__44106;
count__44098 = G__44107;
i__44099 = G__44108;
continue;
} else {
var remote = cljs.core.first(seq__44096__$1);
var cb_atom_44109 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(fulcro.util.atom_QMARK_(cb_atom_44109))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_44109,((function (seq__44096,chunk__44097,count__44098,i__44099,cb_atom_44109,remote,seq__44096__$1,temp__5457__auto__){
return (function (p1__44095_SHARP_){
if(cljs.core.fn_QMARK_(p1__44095_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__44095_SHARP_,fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__44096,chunk__44097,count__44098,i__44099,cb_atom_44109,remote,seq__44096__$1,temp__5457__auto__))
);
} else {
}


var G__44110 = cljs.core.next(seq__44096__$1);
var G__44111 = null;
var G__44112 = (0);
var G__44113 = (0);
seq__44096 = G__44110;
chunk__44097 = G__44111;
count__44098 = G__44112;
i__44099 = G__44113;
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
fulcro.client.impl.application.read_local = (function fulcro$client$impl$application$read_local(user_read,p__44114,dkey,params){
var map__44115 = p__44114;
var map__44115__$1 = ((((!((map__44115 == null)))?(((((map__44115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44115):map__44115);
var env = map__44115__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44115__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44115__$1,new cljs.core.Keyword(null,"target","target",253001721));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44115__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44115__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var temp__5455__auto__ = (user_read.cljs$core$IFn$_invoke$arity$3 ? user_read.cljs$core$IFn$_invoke$arity$3(env,dkey,params) : user_read.call(null,env,dkey,params));
if(cljs.core.truth_(temp__5455__auto__)){
var custom_result = temp__5455__auto__;
return custom_result;
} else {
if(cljs.core.not(target)){
var top_level_prop = (query == null);
var key = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return dkey;
}
})();
var by_ident_QMARK_ = fulcro.util.ident_QMARK_(key);
var union_QMARK_ = cljs.core.map_QMARK_(query);
var data = ((by_ident_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),key));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((union_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])], null),cljs.core.deref(state),cljs.core.deref(state)),key):((top_level_prop)?data:fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,data,cljs.core.deref(state))
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
}catch (e44117){var e = e44117;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),350], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception",e], 0));
}catch (e44118){if((e44118 instanceof Error)){
var e__33343__auto___44123 = e44118;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),350], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___44123], 0));
} else {
throw e44118;

}
}
return null;
}})();
var action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(rv);
if(cljs.core.truth_(action)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rv,new cljs.core.Keyword(null,"action","action",-811238024),((function (rv,action){
return (function (){
try{var action_result = (action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(env,k,params) : action.call(null,env,k,params));
try{(fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.post_mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : fulcro.client.mutations.post_mutate.call(null,env,k,params));
}catch (e44121){var e_44124 = e44121;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),359], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post mutate failed on dispatch to ",k], 0));
}catch (e44122){if((e44122 instanceof Error)){
var e__33343__auto___44125 = e44122;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),359], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___44125], 0));
} else {
throw e44122;

}
}}
return action_result;
}catch (e44119){var e = e44119;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),362], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation ",k," failed with exception",e], 0));
}catch (e44120){if((e44120 instanceof Error)){
var e__33343__auto___44126 = e44120;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.impl.application",new cljs.core.Keyword(null,"line","line",212345235),362], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___44126], 0));
} else {
throw e44120;

}
}
throw e;
}});})(rv,action))
);
} else {
return rv;
}
});

//# sourceMappingURL=fulcro.client.impl.application.js.map

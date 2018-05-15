// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.pathom.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('cljs.core.async.impl.protocols');
com.wsscode.pathom.async.chan_QMARK_ = (function com$wsscode$pathom$async$chan_QMARK_(v){
if(!((v == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$async$impl$protocols$Channel$))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.Channel,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.Channel,v);
}
});
com.wsscode.pathom.async.resolved_chan = (function com$wsscode$pathom$async$resolved_chan(v){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,v);

return c;
});
com.wsscode.pathom.async.read_chan_values = (function com$wsscode$pathom$async$read_chan_values(m){
if(cljs.core.truth_(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38283_SHARP_){
var or__10805__auto__ = com.wsscode.pathom.async.chan_QMARK_(p1__38283_SHARP_);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return com.wsscode.pathom.async.chan_QMARK_(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(p1__38283_SHARP_));
}
}),cljs.core.vals(m))))){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var in$ = cljs.core.async.to_chan(m);
var c__21787__auto___38431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___38431,c,in$){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___38431,c,in$){
return (function (state_38342){
var state_val_38343 = (state_38342[(1)]);
if((state_val_38343 === (7))){
var inst_38337 = (state_38342[(2)]);
var state_38342__$1 = state_38342;
var statearr_38348_38437 = state_38342__$1;
(statearr_38348_38437[(2)] = inst_38337);

(statearr_38348_38437[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (1))){
var inst_38293 = cljs.core.PersistentHashMap.EMPTY;
var inst_38295 = inst_38293;
var state_38342__$1 = (function (){var statearr_38355 = state_38342;
(statearr_38355[(7)] = inst_38295);

return statearr_38355;
})();
var statearr_38357_38439 = state_38342__$1;
(statearr_38357_38439[(2)] = null);

(statearr_38357_38439[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (4))){
var inst_38300 = (state_38342[(8)]);
var inst_38300__$1 = (state_38342[(2)]);
var state_38342__$1 = (function (){var statearr_38361 = state_38342;
(statearr_38361[(8)] = inst_38300__$1);

return statearr_38361;
})();
if(cljs.core.truth_(inst_38300__$1)){
var statearr_38364_38444 = state_38342__$1;
(statearr_38364_38444[(1)] = (5));

} else {
var statearr_38365_38445 = state_38342__$1;
(statearr_38365_38445[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (15))){
var inst_38309 = (state_38342[(9)]);
var inst_38320 = (state_38342[(2)]);
var inst_38321 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_38309,cljs.core.cst$kw$result,inst_38320);
var state_38342__$1 = state_38342;
var statearr_38368_38446 = state_38342__$1;
(statearr_38368_38446[(2)] = inst_38321);

(statearr_38368_38446[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (13))){
var state_38342__$1 = state_38342;
var statearr_38369_38447 = state_38342__$1;
(statearr_38369_38447[(1)] = (16));



return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (6))){
var inst_38295 = (state_38342[(7)]);
var state_38342__$1 = state_38342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38342__$1,(19),c,inst_38295);
} else {
if((state_val_38343 === (17))){
var state_38342__$1 = state_38342;
var statearr_38384_38448 = state_38342__$1;
(statearr_38384_38448[(2)] = null);

(statearr_38384_38448[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (3))){
var inst_38339 = (state_38342[(2)]);
var state_38342__$1 = state_38342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38342__$1,inst_38339);
} else {
if((state_val_38343 === (12))){
var inst_38309 = (state_38342[(9)]);
var inst_38318 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_38309);
var state_38342__$1 = state_38342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38342__$1,(15),inst_38318);
} else {
if((state_val_38343 === (2))){
var state_38342__$1 = state_38342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38342__$1,(4),in$);
} else {
if((state_val_38343 === (19))){
var inst_38335 = (state_38342[(2)]);
var state_38342__$1 = state_38342;
var statearr_38393_38449 = state_38342__$1;
(statearr_38393_38449[(2)] = inst_38335);

(statearr_38393_38449[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (11))){
var inst_38313 = (state_38342[(2)]);
var state_38342__$1 = state_38342;
var statearr_38395_38454 = state_38342__$1;
(statearr_38395_38454[(2)] = inst_38313);

(statearr_38395_38454[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (9))){
var inst_38309 = (state_38342[(9)]);
var inst_38315 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_38309);
var inst_38316 = com.wsscode.pathom.async.chan_QMARK_(inst_38315);
var state_38342__$1 = state_38342;
if(cljs.core.truth_(inst_38316)){
var statearr_38396_38460 = state_38342__$1;
(statearr_38396_38460[(1)] = (12));

} else {
var statearr_38397_38461 = state_38342__$1;
(statearr_38397_38461[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (5))){
var inst_38300 = (state_38342[(8)]);
var inst_38309 = (state_38342[(9)]);
var inst_38308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38300,(0),null);
var inst_38309__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38300,(1),null);
var inst_38310 = com.wsscode.pathom.async.chan_QMARK_(inst_38309__$1);
var state_38342__$1 = (function (){var statearr_38402 = state_38342;
(statearr_38402[(10)] = inst_38308);

(statearr_38402[(9)] = inst_38309__$1);

return statearr_38402;
})();
if(cljs.core.truth_(inst_38310)){
var statearr_38404_38465 = state_38342__$1;
(statearr_38404_38465[(1)] = (8));

} else {
var statearr_38405_38466 = state_38342__$1;
(statearr_38405_38466[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (14))){
var inst_38328 = (state_38342[(2)]);
var state_38342__$1 = state_38342;
var statearr_38407_38467 = state_38342__$1;
(statearr_38407_38467[(2)] = inst_38328);

(statearr_38407_38467[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (16))){
var inst_38309 = (state_38342[(9)]);
var state_38342__$1 = state_38342;
var statearr_38408_38475 = state_38342__$1;
(statearr_38408_38475[(2)] = inst_38309);

(statearr_38408_38475[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (10))){
var inst_38308 = (state_38342[(10)]);
var inst_38295 = (state_38342[(7)]);
var inst_38330 = (state_38342[(2)]);
var inst_38331 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_38295,inst_38308,inst_38330);
var inst_38295__$1 = inst_38331;
var state_38342__$1 = (function (){var statearr_38410 = state_38342;
(statearr_38410[(7)] = inst_38295__$1);

return statearr_38410;
})();
var statearr_38411_38480 = state_38342__$1;
(statearr_38411_38480[(2)] = null);

(statearr_38411_38480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (18))){
var inst_38326 = (state_38342[(2)]);
var state_38342__$1 = state_38342;
var statearr_38412_38484 = state_38342__$1;
(statearr_38412_38484[(2)] = inst_38326);

(statearr_38412_38484[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38343 === (8))){
var inst_38309 = (state_38342[(9)]);
var state_38342__$1 = state_38342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38342__$1,(11),inst_38309);
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
});})(c__21787__auto___38431,c,in$))
;
return ((function (switch__21538__auto__,c__21787__auto___38431,c,in$){
return (function() {
var com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto__ = null;
var com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto____0 = (function (){
var statearr_38415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38415[(0)] = com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto__);

(statearr_38415[(1)] = (1));

return statearr_38415;
});
var com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto____1 = (function (state_38342){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_38342);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e38416){if((e38416 instanceof Object)){
var ex__21542__auto__ = e38416;
var statearr_38417_38493 = state_38342;
(statearr_38417_38493[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38342);

return cljs.core.cst$kw$recur;
} else {
throw e38416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__38498 = state_38342;
state_38342 = G__38498;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto__ = function(state_38342){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto____1.call(this,state_38342);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto____0;
com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto____1;
return com$wsscode$pathom$async$read_chan_values_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___38431,c,in$))
})();
var state__21789__auto__ = (function (){var statearr_38425 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_38425[(6)] = c__21787__auto___38431);

return statearr_38425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___38431,c,in$))
);


return c;
} else {
return com.wsscode.pathom.async.resolved_chan(m);
}
});
com.wsscode.pathom.async.read_chan_seq = (function com$wsscode$pathom$async$read_chan_seq(f,s){
var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto__){
return (function (state_38526){
var state_val_38527 = (state_38526[(1)]);
if((state_val_38527 === (1))){
var inst_38517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((64));
var inst_38518 = (function (){var out = inst_38517;
return ((function (out,inst_38517,state_val_38527,c__21787__auto__){
return (function (in$,c){
var c__21787__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto____$1,out,inst_38517,state_val_38527,c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto____$1,out,inst_38517,state_val_38527,c__21787__auto__){
return (function (state_38557){
var state_val_38558 = (state_38557[(1)]);
if((state_val_38558 === (7))){
var inst_38545 = (state_38557[(7)]);
var state_38557__$1 = state_38557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38557__$1,(10),inst_38545);
} else {
if((state_val_38558 === (1))){
var inst_38538 = com.wsscode.pathom.async.chan_QMARK_(in$);
var state_38557__$1 = state_38557;
if(cljs.core.truth_(inst_38538)){
var statearr_38565_38611 = state_38557__$1;
(statearr_38565_38611[(1)] = (2));

} else {
var statearr_38566_38612 = state_38557__$1;
(statearr_38566_38612[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38558 === (4))){
var inst_38545 = (state_38557[(7)]);
var inst_38544 = (state_38557[(2)]);
var inst_38545__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38544) : f.call(null,inst_38544));
var inst_38546 = com.wsscode.pathom.async.chan_QMARK_(inst_38545__$1);
var state_38557__$1 = (function (){var statearr_38571 = state_38557;
(statearr_38571[(7)] = inst_38545__$1);

return statearr_38571;
})();
if(cljs.core.truth_(inst_38546)){
var statearr_38575_38614 = state_38557__$1;
(statearr_38575_38614[(1)] = (7));

} else {
var statearr_38576_38615 = state_38557__$1;
(statearr_38576_38615[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38558 === (6))){
var inst_38554 = (state_38557[(2)]);
var inst_38555 = cljs.core.async.close_BANG_(c);
var state_38557__$1 = (function (){var statearr_38577 = state_38557;
(statearr_38577[(8)] = inst_38554);

return statearr_38577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38557__$1,inst_38555);
} else {
if((state_val_38558 === (3))){
var state_38557__$1 = state_38557;
var statearr_38584_38618 = state_38557__$1;
(statearr_38584_38618[(2)] = in$);

(statearr_38584_38618[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38558 === (2))){
var state_38557__$1 = state_38557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38557__$1,(5),in$);
} else {
if((state_val_38558 === (9))){
var inst_38552 = (state_38557[(2)]);
var state_38557__$1 = state_38557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38557__$1,(6),c,inst_38552);
} else {
if((state_val_38558 === (5))){
var inst_38541 = (state_38557[(2)]);
var state_38557__$1 = state_38557;
var statearr_38591_38628 = state_38557__$1;
(statearr_38591_38628[(2)] = inst_38541);

(statearr_38591_38628[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38558 === (10))){
var inst_38549 = (state_38557[(2)]);
var state_38557__$1 = state_38557;
var statearr_38595_38637 = state_38557__$1;
(statearr_38595_38637[(2)] = inst_38549);

(statearr_38595_38637[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38558 === (8))){
var inst_38545 = (state_38557[(7)]);
var state_38557__$1 = state_38557;
var statearr_38596_38639 = state_38557__$1;
(statearr_38596_38639[(2)] = inst_38545);

(statearr_38596_38639[(1)] = (9));


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
});})(c__21787__auto____$1,out,inst_38517,state_val_38527,c__21787__auto__))
;
return ((function (switch__21538__auto__,c__21787__auto____$1,out,inst_38517,state_val_38527,c__21787__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____0 = (function (){
var statearr_38597 = [null,null,null,null,null,null,null,null,null];
(statearr_38597[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__);

(statearr_38597[(1)] = (1));

return statearr_38597;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____1 = (function (state_38557){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_38557);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e38600){if((e38600 instanceof Object)){
var ex__21542__auto__ = e38600;
var statearr_38603_38652 = state_38557;
(statearr_38603_38652[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38557);

return cljs.core.cst$kw$recur;
} else {
throw e38600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__38654 = state_38557;
state_38557 = G__38654;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__ = function(state_38557){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____1.call(this,state_38557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto____$1,out,inst_38517,state_val_38527,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_38604 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_38604[(6)] = c__21787__auto____$1);

return statearr_38604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto____$1,out,inst_38517,state_val_38527,c__21787__auto__))
);

return c__21787__auto____$1;
});
;})(out,inst_38517,state_val_38527,c__21787__auto__))
})();
var inst_38519 = cljs.core.async.to_chan(s);
var inst_38520 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_38517,inst_38518,inst_38519);
var inst_38521 = cljs.core.PersistentVector.EMPTY;
var inst_38522 = cljs.core.async.into(inst_38521,inst_38517);
var state_38526__$1 = (function (){var statearr_38605 = state_38526;
(statearr_38605[(7)] = inst_38520);

return statearr_38605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38526__$1,(2),inst_38522);
} else {
if((state_val_38527 === (2))){
var inst_38524 = (state_38526[(2)]);
var state_38526__$1 = state_38526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38526__$1,inst_38524);
} else {
return null;
}
}
});})(c__21787__auto__))
;
return ((function (switch__21538__auto__,c__21787__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____0 = (function (){
var statearr_38606 = [null,null,null,null,null,null,null,null];
(statearr_38606[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__);

(statearr_38606[(1)] = (1));

return statearr_38606;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____1 = (function (state_38526){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_38526);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e38607){if((e38607 instanceof Object)){
var ex__21542__auto__ = e38607;
var statearr_38608_38658 = state_38526;
(statearr_38608_38658[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38526);

return cljs.core.cst$kw$recur;
} else {
throw e38607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__38659 = state_38526;
state_38526 = G__38659;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__ = function(state_38526){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____1.call(this,state_38526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_38609 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_38609[(6)] = c__21787__auto__);

return statearr_38609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
});
com.wsscode.pathom.async.wrap_read_async = (function com$wsscode$pathom$async$wrap_read_async(reader){
return (function com$wsscode$pathom$async$wrap_read_async_$_wrap_read_async_internal(env){
var value = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(cljs.core.sequential_QMARK_(value)){
return com.wsscode.pathom.async.read_chan_seq(com.wsscode.pathom.async.read_chan_values,value);
} else {
if(cljs.core.map_QMARK_(value)){
return com.wsscode.pathom.async.read_chan_values(value);
} else {
return value;

}
}
});
});
com.wsscode.pathom.async.wrap_parser_async = (function com$wsscode$pathom$async$wrap_parser_async(parser){
return (function com$wsscode$pathom$async$wrap_parser_async_$_wrap_parser_async_internal(env,tx){
return com.wsscode.pathom.async.read_chan_values((parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx)));
});
});
com.wsscode.pathom.async.async_plugin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,com.wsscode.pathom.async.wrap_read_async,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,com.wsscode.pathom.async.wrap_parser_async], null);
com.wsscode.pathom.async.js_obj_reader = (function com$wsscode$pathom$async$js_obj_reader(p__38672){
var map__38673 = p__38672;
var map__38673__$1 = ((((!((map__38673 == null)))?((((map__38673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38673):map__38673);
var env = map__38673__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38673__$1,cljs.core.cst$kw$query);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38673__$1,cljs.core.cst$kw$ast);
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38673__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_key_DASH_transform,cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38673__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_value_DASH_transform,((function (map__38673,map__38673__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__38673,map__38673__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38673__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var js_key = (function (){var G__38675 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__38675) : js_key_transform.call(null,G__38675));
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(goog.object.containsKey(entity,js_key))){
var v = goog.object.get(entity,js_key);
if(cljs.core.truth_(Array.isArray(v))){
return com.wsscode.pathom.async.read_chan_seq(com.wsscode.pathom.async.read_chan_values,com.wsscode.pathom.core.join_seq(env,v));
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = query;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),Object);
} else {
return and__10793__auto__;
}
})())){
return com.wsscode.pathom.async.read_chan_values(com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v)));
} else {
var G__38682 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var G__38683 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__38682,G__38683) : js_value_transform.call(null,G__38682,G__38683));
}
}
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
/**
 * DEPRECATED: use async-plugin
 */
com.wsscode.pathom.async.wrap_reader = (function com$wsscode$pathom$async$wrap_reader(reader){
return (function (env){
var v = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(cljs.core.map_QMARK_(v)){
return com.wsscode.pathom.async.read_chan_values(v);
} else {
return v;

}
});
});
/**
 * DEPRECATED: use async-plugin
 *   Produces a reader that will respond to any keyword with the namespace ns. The join node logical level stays the same
 *   as the parent where the placeholder node is requested.
 */
com.wsscode.pathom.async.placeholder_node = (function com$wsscode$pathom$async$placeholder_node(ns){
return (function (p__38711){
var map__38712 = p__38711;
var map__38712__$1 = ((((!((map__38712 == null)))?((((map__38712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38712):map__38712);
var env = map__38712__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38712__$1,cljs.core.cst$kw$ast);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast)))){
return com.wsscode.pathom.async.read_chan_values(com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env));
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
});
/**
 * DEPRECATED: use async-plugin
 */
com.wsscode.pathom.async.map_reader = (function com$wsscode$pathom$async$map_reader(p__38728){
var map__38729 = p__38728;
var map__38729__$1 = ((((!((map__38729 == null)))?((((map__38729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38729):map__38729);
var env = map__38729__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38729__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38729__$1,cljs.core.cst$kw$query);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38729__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5455__auto__ = cljs.core.find(entity,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__38731 = temp__5455__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38731,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38731,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return com.wsscode.pathom.async.read_chan_seq(com.wsscode.pathom.async.read_chan_values,com.wsscode.pathom.core.join_seq(env,v));
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = cljs.core.map_QMARK_(v);
if(and__10793__auto__){
return query;
} else {
return and__10793__auto__;
}
})())){
return com.wsscode.pathom.async.read_chan_values(com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v)));
} else {
return v;
}
}
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
/**
 * DEPRECATED: use async-plugin
 */
com.wsscode.pathom.async.parser_error = (function com$wsscode$pathom$async$parser_error(env,err){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Parser Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.message)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path.cljs$core$IFn$_invoke$arity$1(env)], 0))], null));
});
com.wsscode.pathom.async.error_QMARK_ = (function com$wsscode$pathom$async$error_QMARK_(e){
return (e instanceof Error);
});
/**
 * DEPRECATED: user async-plugin
 */
com.wsscode.pathom.async.async_pathom_read = (function com$wsscode$pathom$async$async_pathom_read(p__38744,_,___$1){
var map__38745 = p__38744;
var map__38745__$1 = ((((!((map__38745 == null)))?((((map__38745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38745):map__38745);
var env = map__38745__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38745__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader);
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38745__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_reader);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
try{var value = com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(value))){
var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto__,value,env__$1,map__38745,map__38745__$1,env,reader,process_reader){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto__,value,env__$1,map__38745,map__38745__$1,env,reader,process_reader){
return (function (state_38761){
var state_val_38762 = (state_38761[(1)]);
if((state_val_38762 === (1))){
var state_38761__$1 = state_38761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38761__$1,(2),value);
} else {
if((state_val_38762 === (2))){
var inst_38753 = (state_38761[(7)]);
var inst_38753__$1 = (state_38761[(2)]);
var inst_38754 = com.wsscode.pathom.async.error_QMARK_(inst_38753__$1);
var state_38761__$1 = (function (){var statearr_38766 = state_38761;
(statearr_38766[(7)] = inst_38753__$1);

return statearr_38766;
})();
if(cljs.core.truth_(inst_38754)){
var statearr_38767_38797 = state_38761__$1;
(statearr_38767_38797[(1)] = (3));

} else {
var statearr_38768_38798 = state_38761__$1;
(statearr_38768_38798[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38762 === (3))){
var inst_38753 = (state_38761[(7)]);
var inst_38756 = com.wsscode.pathom.async.parser_error(env__$1,inst_38753);
var state_38761__$1 = state_38761;
var statearr_38769_38799 = state_38761__$1;
(statearr_38769_38799[(2)] = inst_38756);

(statearr_38769_38799[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38762 === (4))){
var inst_38753 = (state_38761[(7)]);
var state_38761__$1 = state_38761;
var statearr_38770_38801 = state_38761__$1;
(statearr_38770_38801[(2)] = inst_38753);

(statearr_38770_38801[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38762 === (5))){
var inst_38759 = (state_38761[(2)]);
var state_38761__$1 = state_38761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38761__$1,inst_38759);
} else {
return null;
}
}
}
}
}
});})(c__21787__auto__,value,env__$1,map__38745,map__38745__$1,env,reader,process_reader))
;
return ((function (switch__21538__auto__,c__21787__auto__,value,env__$1,map__38745,map__38745__$1,env,reader,process_reader){
return (function() {
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto__ = null;
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto____0 = (function (){
var statearr_38771 = [null,null,null,null,null,null,null,null];
(statearr_38771[(0)] = com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto__);

(statearr_38771[(1)] = (1));

return statearr_38771;
});
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto____1 = (function (state_38761){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_38761);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e38777){if((e38777 instanceof Object)){
var ex__21542__auto__ = e38777;
var statearr_38778_38804 = state_38761;
(statearr_38778_38804[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38761);

return cljs.core.cst$kw$recur;
} else {
throw e38777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__38806 = state_38761;
state_38761 = G__38806;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto__ = function(state_38761){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto____1.call(this,state_38761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto____0;
com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto____1;
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto__,value,env__$1,map__38745,map__38745__$1,env,reader,process_reader))
})();
var state__21789__auto__ = (function (){var statearr_38782 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_38782[(6)] = c__21787__auto__);

return statearr_38782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto__,value,env__$1,map__38745,map__38745__$1,env,reader,process_reader))
);

return c__21787__auto__;
} else {
return value;
}
}catch (e38751){var e = e38751;
return com.wsscode.pathom.async.parser_error(env__$1,e);
}})()], null);
});

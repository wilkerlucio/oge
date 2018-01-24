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
if(cljs.core.truth_(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40727_SHARP_){
var or__10805__auto__ = com.wsscode.pathom.async.chan_QMARK_(p1__40727_SHARP_);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return com.wsscode.pathom.async.chan_QMARK_(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(p1__40727_SHARP_));
}
}),cljs.core.vals(m))))){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var in$ = cljs.core.async.to_chan(m);
var c__17404__auto___40834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___40834,c,in$){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___40834,c,in$){
return (function (state_40780){
var state_val_40781 = (state_40780[(1)]);
if((state_val_40781 === (7))){
var inst_40773 = (state_40780[(2)]);
var state_40780__$1 = state_40780;
var statearr_40784_40837 = state_40780__$1;
(statearr_40784_40837[(2)] = inst_40773);

(statearr_40784_40837[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (1))){
var inst_40734 = cljs.core.PersistentHashMap.EMPTY;
var inst_40735 = inst_40734;
var state_40780__$1 = (function (){var statearr_40786 = state_40780;
(statearr_40786[(7)] = inst_40735);

return statearr_40786;
})();
var statearr_40788_40840 = state_40780__$1;
(statearr_40788_40840[(2)] = null);

(statearr_40788_40840[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (4))){
var inst_40738 = (state_40780[(8)]);
var inst_40738__$1 = (state_40780[(2)]);
var state_40780__$1 = (function (){var statearr_40792 = state_40780;
(statearr_40792[(8)] = inst_40738__$1);

return statearr_40792;
})();
if(cljs.core.truth_(inst_40738__$1)){
var statearr_40793_40841 = state_40780__$1;
(statearr_40793_40841[(1)] = (5));

} else {
var statearr_40794_40842 = state_40780__$1;
(statearr_40794_40842[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (15))){
var inst_40745 = (state_40780[(9)]);
var inst_40756 = (state_40780[(2)]);
var inst_40757 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_40745,cljs.core.cst$kw$result,inst_40756);
var state_40780__$1 = state_40780;
var statearr_40796_40848 = state_40780__$1;
(statearr_40796_40848[(2)] = inst_40757);

(statearr_40796_40848[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (13))){
var state_40780__$1 = state_40780;
var statearr_40797_40849 = state_40780__$1;
(statearr_40797_40849[(1)] = (16));



return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (6))){
var inst_40735 = (state_40780[(7)]);
var state_40780__$1 = state_40780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40780__$1,(19),c,inst_40735);
} else {
if((state_val_40781 === (17))){
var state_40780__$1 = state_40780;
var statearr_40799_40850 = state_40780__$1;
(statearr_40799_40850[(2)] = null);

(statearr_40799_40850[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (3))){
var inst_40775 = (state_40780[(2)]);
var state_40780__$1 = state_40780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40780__$1,inst_40775);
} else {
if((state_val_40781 === (12))){
var inst_40745 = (state_40780[(9)]);
var inst_40754 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_40745);
var state_40780__$1 = state_40780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40780__$1,(15),inst_40754);
} else {
if((state_val_40781 === (2))){
var state_40780__$1 = state_40780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40780__$1,(4),in$);
} else {
if((state_val_40781 === (19))){
var inst_40771 = (state_40780[(2)]);
var state_40780__$1 = state_40780;
var statearr_40800_40854 = state_40780__$1;
(statearr_40800_40854[(2)] = inst_40771);

(statearr_40800_40854[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (11))){
var inst_40749 = (state_40780[(2)]);
var state_40780__$1 = state_40780;
var statearr_40802_40861 = state_40780__$1;
(statearr_40802_40861[(2)] = inst_40749);

(statearr_40802_40861[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (9))){
var inst_40745 = (state_40780[(9)]);
var inst_40751 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_40745);
var inst_40752 = com.wsscode.pathom.async.chan_QMARK_(inst_40751);
var state_40780__$1 = state_40780;
if(cljs.core.truth_(inst_40752)){
var statearr_40803_40864 = state_40780__$1;
(statearr_40803_40864[(1)] = (12));

} else {
var statearr_40804_40865 = state_40780__$1;
(statearr_40804_40865[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (5))){
var inst_40745 = (state_40780[(9)]);
var inst_40738 = (state_40780[(8)]);
var inst_40744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40738,(0),null);
var inst_40745__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40738,(1),null);
var inst_40746 = com.wsscode.pathom.async.chan_QMARK_(inst_40745__$1);
var state_40780__$1 = (function (){var statearr_40807 = state_40780;
(statearr_40807[(9)] = inst_40745__$1);

(statearr_40807[(10)] = inst_40744);

return statearr_40807;
})();
if(cljs.core.truth_(inst_40746)){
var statearr_40808_40868 = state_40780__$1;
(statearr_40808_40868[(1)] = (8));

} else {
var statearr_40809_40869 = state_40780__$1;
(statearr_40809_40869[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (14))){
var inst_40764 = (state_40780[(2)]);
var state_40780__$1 = state_40780;
var statearr_40810_40870 = state_40780__$1;
(statearr_40810_40870[(2)] = inst_40764);

(statearr_40810_40870[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (16))){
var inst_40745 = (state_40780[(9)]);
var state_40780__$1 = state_40780;
var statearr_40812_40871 = state_40780__$1;
(statearr_40812_40871[(2)] = inst_40745);

(statearr_40812_40871[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (10))){
var inst_40744 = (state_40780[(10)]);
var inst_40735 = (state_40780[(7)]);
var inst_40766 = (state_40780[(2)]);
var inst_40767 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_40735,inst_40744,inst_40766);
var inst_40735__$1 = inst_40767;
var state_40780__$1 = (function (){var statearr_40815 = state_40780;
(statearr_40815[(7)] = inst_40735__$1);

return statearr_40815;
})();
var statearr_40816_40874 = state_40780__$1;
(statearr_40816_40874[(2)] = null);

(statearr_40816_40874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (18))){
var inst_40762 = (state_40780[(2)]);
var state_40780__$1 = state_40780;
var statearr_40817_40876 = state_40780__$1;
(statearr_40817_40876[(2)] = inst_40762);

(statearr_40817_40876[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40781 === (8))){
var inst_40745 = (state_40780[(9)]);
var state_40780__$1 = state_40780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40780__$1,(11),inst_40745);
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
});})(c__17404__auto___40834,c,in$))
;
return ((function (switch__16860__auto__,c__17404__auto___40834,c,in$){
return (function() {
var com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto__ = null;
var com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto____0 = (function (){
var statearr_40822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40822[(0)] = com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto__);

(statearr_40822[(1)] = (1));

return statearr_40822;
});
var com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto____1 = (function (state_40780){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_40780);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e40826){if((e40826 instanceof Object)){
var ex__16864__auto__ = e40826;
var statearr_40827_40884 = state_40780;
(statearr_40827_40884[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40780);

return cljs.core.cst$kw$recur;
} else {
throw e40826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__40885 = state_40780;
state_40780 = G__40885;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto__ = function(state_40780){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto____1.call(this,state_40780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto____0;
com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto____1;
return com$wsscode$pathom$async$read_chan_values_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___40834,c,in$))
})();
var state__17406__auto__ = (function (){var statearr_40830 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_40830[(6)] = c__17404__auto___40834);

return statearr_40830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___40834,c,in$))
);


return c;
} else {
return com.wsscode.pathom.async.resolved_chan(m);
}
});
com.wsscode.pathom.async.read_chan_seq = (function com$wsscode$pathom$async$read_chan_seq(f,s){
var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto__){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto__){
return (function (state_40899){
var state_val_40900 = (state_40899[(1)]);
if((state_val_40900 === (1))){
var inst_40888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((64));
var inst_40889 = (function (){var out = inst_40888;
return ((function (out,inst_40888,state_val_40900,c__17404__auto__){
return (function (in$,c){
var c__17404__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto____$1,out,inst_40888,state_val_40900,c__17404__auto__){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto____$1,out,inst_40888,state_val_40900,c__17404__auto__){
return (function (state_40920){
var state_val_40921 = (state_40920[(1)]);
if((state_val_40921 === (7))){
var inst_40908 = (state_40920[(7)]);
var state_40920__$1 = state_40920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40920__$1,(10),inst_40908);
} else {
if((state_val_40921 === (1))){
var inst_40901 = com.wsscode.pathom.async.chan_QMARK_(in$);
var state_40920__$1 = state_40920;
if(cljs.core.truth_(inst_40901)){
var statearr_40927_40967 = state_40920__$1;
(statearr_40927_40967[(1)] = (2));

} else {
var statearr_40928_40968 = state_40920__$1;
(statearr_40928_40968[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40921 === (4))){
var inst_40908 = (state_40920[(7)]);
var inst_40907 = (state_40920[(2)]);
var inst_40908__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40907) : f.call(null,inst_40907));
var inst_40909 = com.wsscode.pathom.async.chan_QMARK_(inst_40908__$1);
var state_40920__$1 = (function (){var statearr_40929 = state_40920;
(statearr_40929[(7)] = inst_40908__$1);

return statearr_40929;
})();
if(cljs.core.truth_(inst_40909)){
var statearr_40930_40972 = state_40920__$1;
(statearr_40930_40972[(1)] = (7));

} else {
var statearr_40931_40973 = state_40920__$1;
(statearr_40931_40973[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40921 === (6))){
var inst_40917 = (state_40920[(2)]);
var inst_40918 = cljs.core.async.close_BANG_(c);
var state_40920__$1 = (function (){var statearr_40934 = state_40920;
(statearr_40934[(8)] = inst_40917);

return statearr_40934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40920__$1,inst_40918);
} else {
if((state_val_40921 === (3))){
var state_40920__$1 = state_40920;
var statearr_40935_40974 = state_40920__$1;
(statearr_40935_40974[(2)] = in$);

(statearr_40935_40974[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40921 === (2))){
var state_40920__$1 = state_40920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40920__$1,(5),in$);
} else {
if((state_val_40921 === (9))){
var inst_40915 = (state_40920[(2)]);
var state_40920__$1 = state_40920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40920__$1,(6),c,inst_40915);
} else {
if((state_val_40921 === (5))){
var inst_40904 = (state_40920[(2)]);
var state_40920__$1 = state_40920;
var statearr_40936_40979 = state_40920__$1;
(statearr_40936_40979[(2)] = inst_40904);

(statearr_40936_40979[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40921 === (10))){
var inst_40912 = (state_40920[(2)]);
var state_40920__$1 = state_40920;
var statearr_40937_40983 = state_40920__$1;
(statearr_40937_40983[(2)] = inst_40912);

(statearr_40937_40983[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40921 === (8))){
var inst_40908 = (state_40920[(7)]);
var state_40920__$1 = state_40920;
var statearr_40940_40987 = state_40920__$1;
(statearr_40940_40987[(2)] = inst_40908);

(statearr_40940_40987[(1)] = (9));


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
});})(c__17404__auto____$1,out,inst_40888,state_val_40900,c__17404__auto__))
;
return ((function (switch__16860__auto__,c__17404__auto____$1,out,inst_40888,state_val_40900,c__17404__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____0 = (function (){
var statearr_40941 = [null,null,null,null,null,null,null,null,null];
(statearr_40941[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__);

(statearr_40941[(1)] = (1));

return statearr_40941;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____1 = (function (state_40920){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_40920);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e40944){if((e40944 instanceof Object)){
var ex__16864__auto__ = e40944;
var statearr_40945_40992 = state_40920;
(statearr_40945_40992[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40920);

return cljs.core.cst$kw$recur;
} else {
throw e40944;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__40997 = state_40920;
state_40920 = G__40997;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__ = function(state_40920){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____1.call(this,state_40920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto____$1,out,inst_40888,state_val_40900,c__17404__auto__))
})();
var state__17406__auto__ = (function (){var statearr_40946 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_40946[(6)] = c__17404__auto____$1);

return statearr_40946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto____$1,out,inst_40888,state_val_40900,c__17404__auto__))
);

return c__17404__auto____$1;
});
;})(out,inst_40888,state_val_40900,c__17404__auto__))
})();
var inst_40890 = cljs.core.async.to_chan(s);
var inst_40891 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_40888,inst_40889,inst_40890);
var inst_40894 = cljs.core.PersistentVector.EMPTY;
var inst_40895 = cljs.core.async.into(inst_40894,inst_40888);
var state_40899__$1 = (function (){var statearr_40949 = state_40899;
(statearr_40949[(7)] = inst_40891);

return statearr_40949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40899__$1,(2),inst_40895);
} else {
if((state_val_40900 === (2))){
var inst_40897 = (state_40899[(2)]);
var state_40899__$1 = state_40899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40899__$1,inst_40897);
} else {
return null;
}
}
});})(c__17404__auto__))
;
return ((function (switch__16860__auto__,c__17404__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____0 = (function (){
var statearr_40953 = [null,null,null,null,null,null,null,null];
(statearr_40953[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__);

(statearr_40953[(1)] = (1));

return statearr_40953;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____1 = (function (state_40899){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_40899);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e40954){if((e40954 instanceof Object)){
var ex__16864__auto__ = e40954;
var statearr_40955_41004 = state_40899;
(statearr_40955_41004[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40899);

return cljs.core.cst$kw$recur;
} else {
throw e40954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__41007 = state_40899;
state_40899 = G__41007;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__ = function(state_40899){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____1.call(this,state_40899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto__))
})();
var state__17406__auto__ = (function (){var statearr_40961 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_40961[(6)] = c__17404__auto__);

return statearr_40961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto__))
);

return c__17404__auto__;
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
com.wsscode.pathom.async.js_obj_reader = (function com$wsscode$pathom$async$js_obj_reader(p__41019){
var map__41020 = p__41019;
var map__41020__$1 = ((((!((map__41020 == null)))?((((map__41020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41020):map__41020);
var env = map__41020__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020__$1,cljs.core.cst$kw$query);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020__$1,cljs.core.cst$kw$ast);
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41020__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_key_DASH_transform,cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41020__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_value_DASH_transform,((function (map__41020,map__41020__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__41020,map__41020__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var js_key = (function (){var G__41024 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__41024) : js_key_transform.call(null,G__41024));
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
var G__41025 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var G__41026 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__41025,G__41026) : js_value_transform.call(null,G__41025,G__41026));
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
return (function (p__41052){
var map__41053 = p__41052;
var map__41053__$1 = ((((!((map__41053 == null)))?((((map__41053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41053):map__41053);
var env = map__41053__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41053__$1,cljs.core.cst$kw$ast);
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
com.wsscode.pathom.async.map_reader = (function com$wsscode$pathom$async$map_reader(p__41065){
var map__41066 = p__41065;
var map__41066__$1 = ((((!((map__41066 == null)))?((((map__41066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41066):map__41066);
var env = map__41066__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41066__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41066__$1,cljs.core.cst$kw$query);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41066__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5455__auto__ = cljs.core.find(entity,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__41071 = temp__5455__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41071,(1),null);
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
com.wsscode.pathom.async.async_pathom_read = (function com$wsscode$pathom$async$async_pathom_read(p__41087,_,___$1){
var map__41088 = p__41087;
var map__41088__$1 = ((((!((map__41088 == null)))?((((map__41088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41088):map__41088);
var env = map__41088__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader);
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_reader);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
try{var value = com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(value))){
var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto__,value,env__$1,map__41088,map__41088__$1,env,reader,process_reader){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto__,value,env__$1,map__41088,map__41088__$1,env,reader,process_reader){
return (function (state_41103){
var state_val_41104 = (state_41103[(1)]);
if((state_val_41104 === (1))){
var state_41103__$1 = state_41103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41103__$1,(2),value);
} else {
if((state_val_41104 === (2))){
var inst_41094 = (state_41103[(7)]);
var inst_41094__$1 = (state_41103[(2)]);
var inst_41095 = com.wsscode.pathom.async.error_QMARK_(inst_41094__$1);
var state_41103__$1 = (function (){var statearr_41107 = state_41103;
(statearr_41107[(7)] = inst_41094__$1);

return statearr_41107;
})();
if(cljs.core.truth_(inst_41095)){
var statearr_41108_41127 = state_41103__$1;
(statearr_41108_41127[(1)] = (3));

} else {
var statearr_41112_41130 = state_41103__$1;
(statearr_41112_41130[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41104 === (3))){
var inst_41094 = (state_41103[(7)]);
var inst_41098 = com.wsscode.pathom.async.parser_error(env__$1,inst_41094);
var state_41103__$1 = state_41103;
var statearr_41114_41131 = state_41103__$1;
(statearr_41114_41131[(2)] = inst_41098);

(statearr_41114_41131[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41104 === (4))){
var inst_41094 = (state_41103[(7)]);
var state_41103__$1 = state_41103;
var statearr_41115_41132 = state_41103__$1;
(statearr_41115_41132[(2)] = inst_41094);

(statearr_41115_41132[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41104 === (5))){
var inst_41101 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41103__$1,inst_41101);
} else {
return null;
}
}
}
}
}
});})(c__17404__auto__,value,env__$1,map__41088,map__41088__$1,env,reader,process_reader))
;
return ((function (switch__16860__auto__,c__17404__auto__,value,env__$1,map__41088,map__41088__$1,env,reader,process_reader){
return (function() {
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto__ = null;
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto____0 = (function (){
var statearr_41116 = [null,null,null,null,null,null,null,null];
(statearr_41116[(0)] = com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto__);

(statearr_41116[(1)] = (1));

return statearr_41116;
});
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto____1 = (function (state_41103){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_41103);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e41119){if((e41119 instanceof Object)){
var ex__16864__auto__ = e41119;
var statearr_41120_41141 = state_41103;
(statearr_41120_41141[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41103);

return cljs.core.cst$kw$recur;
} else {
throw e41119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__41144 = state_41103;
state_41103 = G__41144;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto__ = function(state_41103){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto____1.call(this,state_41103);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto____0;
com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto____1;
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto__,value,env__$1,map__41088,map__41088__$1,env,reader,process_reader))
})();
var state__17406__auto__ = (function (){var statearr_41121 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_41121[(6)] = c__17404__auto__);

return statearr_41121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto__,value,env__$1,map__41088,map__41088__$1,env,reader,process_reader))
);

return c__17404__auto__;
} else {
return value;
}
}catch (e41090){var e = e41090;
return com.wsscode.pathom.async.parser_error(env__$1,e);
}})()], null);
});

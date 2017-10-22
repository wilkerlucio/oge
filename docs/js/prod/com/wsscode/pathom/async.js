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
if(cljs.core.truth_(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44859_SHARP_){
var or__10412__auto__ = com.wsscode.pathom.async.chan_QMARK_(p1__44859_SHARP_);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return com.wsscode.pathom.async.chan_QMARK_(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(p1__44859_SHARP_));
}
}),cljs.core.vals(m))))){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var in$ = cljs.core.async.to_chan(m);
var c__21855__auto___44967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___44967,c,in$){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___44967,c,in$){
return (function (state_44906){
var state_val_44907 = (state_44906[(1)]);
if((state_val_44907 === (7))){
var inst_44899 = (state_44906[(2)]);
var state_44906__$1 = state_44906;
var statearr_44908_44969 = state_44906__$1;
(statearr_44908_44969[(2)] = inst_44899);

(statearr_44908_44969[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (1))){
var inst_44861 = cljs.core.PersistentHashMap.EMPTY;
var inst_44862 = inst_44861;
var state_44906__$1 = (function (){var statearr_44910 = state_44906;
(statearr_44910[(7)] = inst_44862);

return statearr_44910;
})();
var statearr_44911_44971 = state_44906__$1;
(statearr_44911_44971[(2)] = null);

(statearr_44911_44971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (4))){
var inst_44865 = (state_44906[(8)]);
var inst_44865__$1 = (state_44906[(2)]);
var state_44906__$1 = (function (){var statearr_44915 = state_44906;
(statearr_44915[(8)] = inst_44865__$1);

return statearr_44915;
})();
if(cljs.core.truth_(inst_44865__$1)){
var statearr_44916_44972 = state_44906__$1;
(statearr_44916_44972[(1)] = (5));

} else {
var statearr_44917_44974 = state_44906__$1;
(statearr_44917_44974[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (15))){
var inst_44871 = (state_44906[(9)]);
var inst_44882 = (state_44906[(2)]);
var inst_44883 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_44871,cljs.core.cst$kw$result,inst_44882);
var state_44906__$1 = state_44906;
var statearr_44919_44977 = state_44906__$1;
(statearr_44919_44977[(2)] = inst_44883);

(statearr_44919_44977[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (13))){
var state_44906__$1 = state_44906;
var statearr_44920_44978 = state_44906__$1;
(statearr_44920_44978[(1)] = (16));



return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (6))){
var inst_44862 = (state_44906[(7)]);
var state_44906__$1 = state_44906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44906__$1,(19),c,inst_44862);
} else {
if((state_val_44907 === (17))){
var state_44906__$1 = state_44906;
var statearr_44922_44979 = state_44906__$1;
(statearr_44922_44979[(2)] = null);

(statearr_44922_44979[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (3))){
var inst_44904 = (state_44906[(2)]);
var state_44906__$1 = state_44906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44906__$1,inst_44904);
} else {
if((state_val_44907 === (12))){
var inst_44871 = (state_44906[(9)]);
var inst_44880 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_44871);
var state_44906__$1 = state_44906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44906__$1,(15),inst_44880);
} else {
if((state_val_44907 === (2))){
var state_44906__$1 = state_44906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44906__$1,(4),in$);
} else {
if((state_val_44907 === (19))){
var inst_44897 = (state_44906[(2)]);
var state_44906__$1 = state_44906;
var statearr_44923_44982 = state_44906__$1;
(statearr_44923_44982[(2)] = inst_44897);

(statearr_44923_44982[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (11))){
var inst_44875 = (state_44906[(2)]);
var state_44906__$1 = state_44906;
var statearr_44924_44983 = state_44906__$1;
(statearr_44924_44983[(2)] = inst_44875);

(statearr_44924_44983[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (9))){
var inst_44871 = (state_44906[(9)]);
var inst_44877 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_44871);
var inst_44878 = com.wsscode.pathom.async.chan_QMARK_(inst_44877);
var state_44906__$1 = state_44906;
if(cljs.core.truth_(inst_44878)){
var statearr_44925_44987 = state_44906__$1;
(statearr_44925_44987[(1)] = (12));

} else {
var statearr_44926_44989 = state_44906__$1;
(statearr_44926_44989[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (5))){
var inst_44871 = (state_44906[(9)]);
var inst_44865 = (state_44906[(8)]);
var inst_44870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44865,(0),null);
var inst_44871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44865,(1),null);
var inst_44872 = com.wsscode.pathom.async.chan_QMARK_(inst_44871__$1);
var state_44906__$1 = (function (){var statearr_44930 = state_44906;
(statearr_44930[(9)] = inst_44871__$1);

(statearr_44930[(10)] = inst_44870);

return statearr_44930;
})();
if(cljs.core.truth_(inst_44872)){
var statearr_44933_44997 = state_44906__$1;
(statearr_44933_44997[(1)] = (8));

} else {
var statearr_44934_44998 = state_44906__$1;
(statearr_44934_44998[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (14))){
var inst_44890 = (state_44906[(2)]);
var state_44906__$1 = state_44906;
var statearr_44939_44999 = state_44906__$1;
(statearr_44939_44999[(2)] = inst_44890);

(statearr_44939_44999[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (16))){
var inst_44871 = (state_44906[(9)]);
var state_44906__$1 = state_44906;
var statearr_44942_45000 = state_44906__$1;
(statearr_44942_45000[(2)] = inst_44871);

(statearr_44942_45000[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (10))){
var inst_44870 = (state_44906[(10)]);
var inst_44862 = (state_44906[(7)]);
var inst_44892 = (state_44906[(2)]);
var inst_44893 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_44862,inst_44870,inst_44892);
var inst_44862__$1 = inst_44893;
var state_44906__$1 = (function (){var statearr_44947 = state_44906;
(statearr_44947[(7)] = inst_44862__$1);

return statearr_44947;
})();
var statearr_44950_45001 = state_44906__$1;
(statearr_44950_45001[(2)] = null);

(statearr_44950_45001[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (18))){
var inst_44888 = (state_44906[(2)]);
var state_44906__$1 = state_44906;
var statearr_44952_45002 = state_44906__$1;
(statearr_44952_45002[(2)] = inst_44888);

(statearr_44952_45002[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44907 === (8))){
var inst_44871 = (state_44906[(9)]);
var state_44906__$1 = state_44906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44906__$1,(11),inst_44871);
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
});})(c__21855__auto___44967,c,in$))
;
return ((function (switch__21492__auto__,c__21855__auto___44967,c,in$){
return (function() {
var com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto__ = null;
var com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto____0 = (function (){
var statearr_44956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44956[(0)] = com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto__);

(statearr_44956[(1)] = (1));

return statearr_44956;
});
var com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto____1 = (function (state_44906){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_44906);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e44957){if((e44957 instanceof Object)){
var ex__21496__auto__ = e44957;
var statearr_44958_45006 = state_44906;
(statearr_44958_45006[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44906);

return cljs.core.cst$kw$recur;
} else {
throw e44957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__45007 = state_44906;
state_44906 = G__45007;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto__ = function(state_44906){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto____1.call(this,state_44906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto____0;
com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto____1;
return com$wsscode$pathom$async$read_chan_values_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___44967,c,in$))
})();
var state__21857__auto__ = (function (){var statearr_44961 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_44961[(6)] = c__21855__auto___44967);

return statearr_44961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___44967,c,in$))
);


return c;
} else {
return com.wsscode.pathom.async.resolved_chan(m);
}
});
com.wsscode.pathom.async.read_chan_seq = (function com$wsscode$pathom$async$read_chan_seq(f,s){
var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto__){
return (function (state_45017){
var state_val_45018 = (state_45017[(1)]);
if((state_val_45018 === (1))){
var inst_45008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((64));
var inst_45009 = (function (){var out = inst_45008;
return ((function (out,inst_45008,state_val_45018,c__21855__auto__){
return (function (in$,c){
var c__21855__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto____$1,out,inst_45008,state_val_45018,c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto____$1,out,inst_45008,state_val_45018,c__21855__auto__){
return (function (state_45038){
var state_val_45039 = (state_45038[(1)]);
if((state_val_45039 === (7))){
var inst_45026 = (state_45038[(7)]);
var state_45038__$1 = state_45038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45038__$1,(10),inst_45026);
} else {
if((state_val_45039 === (1))){
var inst_45019 = com.wsscode.pathom.async.chan_QMARK_(in$);
var state_45038__$1 = state_45038;
if(cljs.core.truth_(inst_45019)){
var statearr_45040_45066 = state_45038__$1;
(statearr_45040_45066[(1)] = (2));

} else {
var statearr_45041_45067 = state_45038__$1;
(statearr_45041_45067[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45039 === (4))){
var inst_45026 = (state_45038[(7)]);
var inst_45025 = (state_45038[(2)]);
var inst_45026__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45025) : f.call(null,inst_45025));
var inst_45027 = com.wsscode.pathom.async.chan_QMARK_(inst_45026__$1);
var state_45038__$1 = (function (){var statearr_45042 = state_45038;
(statearr_45042[(7)] = inst_45026__$1);

return statearr_45042;
})();
if(cljs.core.truth_(inst_45027)){
var statearr_45043_45068 = state_45038__$1;
(statearr_45043_45068[(1)] = (7));

} else {
var statearr_45044_45070 = state_45038__$1;
(statearr_45044_45070[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45039 === (6))){
var inst_45035 = (state_45038[(2)]);
var inst_45036 = cljs.core.async.close_BANG_(c);
var state_45038__$1 = (function (){var statearr_45045 = state_45038;
(statearr_45045[(8)] = inst_45035);

return statearr_45045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45038__$1,inst_45036);
} else {
if((state_val_45039 === (3))){
var state_45038__$1 = state_45038;
var statearr_45046_45076 = state_45038__$1;
(statearr_45046_45076[(2)] = in$);

(statearr_45046_45076[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45039 === (2))){
var state_45038__$1 = state_45038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45038__$1,(5),in$);
} else {
if((state_val_45039 === (9))){
var inst_45033 = (state_45038[(2)]);
var state_45038__$1 = state_45038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45038__$1,(6),c,inst_45033);
} else {
if((state_val_45039 === (5))){
var inst_45022 = (state_45038[(2)]);
var state_45038__$1 = state_45038;
var statearr_45047_45082 = state_45038__$1;
(statearr_45047_45082[(2)] = inst_45022);

(statearr_45047_45082[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45039 === (10))){
var inst_45030 = (state_45038[(2)]);
var state_45038__$1 = state_45038;
var statearr_45048_45083 = state_45038__$1;
(statearr_45048_45083[(2)] = inst_45030);

(statearr_45048_45083[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45039 === (8))){
var inst_45026 = (state_45038[(7)]);
var state_45038__$1 = state_45038;
var statearr_45049_45085 = state_45038__$1;
(statearr_45049_45085[(2)] = inst_45026);

(statearr_45049_45085[(1)] = (9));


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
});})(c__21855__auto____$1,out,inst_45008,state_val_45018,c__21855__auto__))
;
return ((function (switch__21492__auto__,c__21855__auto____$1,out,inst_45008,state_val_45018,c__21855__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____0 = (function (){
var statearr_45050 = [null,null,null,null,null,null,null,null,null];
(statearr_45050[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__);

(statearr_45050[(1)] = (1));

return statearr_45050;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____1 = (function (state_45038){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_45038);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e45051){if((e45051 instanceof Object)){
var ex__21496__auto__ = e45051;
var statearr_45052_45086 = state_45038;
(statearr_45052_45086[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45038);

return cljs.core.cst$kw$recur;
} else {
throw e45051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__45087 = state_45038;
state_45038 = G__45087;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__ = function(state_45038){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____1.call(this,state_45038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto____$1,out,inst_45008,state_val_45018,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_45053 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_45053[(6)] = c__21855__auto____$1);

return statearr_45053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto____$1,out,inst_45008,state_val_45018,c__21855__auto__))
);

return c__21855__auto____$1;
});
;})(out,inst_45008,state_val_45018,c__21855__auto__))
})();
var inst_45010 = cljs.core.async.to_chan(s);
var inst_45011 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_45008,inst_45009,inst_45010);
var inst_45012 = cljs.core.PersistentVector.EMPTY;
var inst_45013 = cljs.core.async.into(inst_45012,inst_45008);
var state_45017__$1 = (function (){var statearr_45055 = state_45017;
(statearr_45055[(7)] = inst_45011);

return statearr_45055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45017__$1,(2),inst_45013);
} else {
if((state_val_45018 === (2))){
var inst_45015 = (state_45017[(2)]);
var state_45017__$1 = state_45017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45017__$1,inst_45015);
} else {
return null;
}
}
});})(c__21855__auto__))
;
return ((function (switch__21492__auto__,c__21855__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____0 = (function (){
var statearr_45059 = [null,null,null,null,null,null,null,null];
(statearr_45059[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__);

(statearr_45059[(1)] = (1));

return statearr_45059;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____1 = (function (state_45017){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_45017);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e45060){if((e45060 instanceof Object)){
var ex__21496__auto__ = e45060;
var statearr_45061_45099 = state_45017;
(statearr_45061_45099[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45017);

return cljs.core.cst$kw$recur;
} else {
throw e45060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__45100 = state_45017;
state_45017 = G__45100;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__ = function(state_45017){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____1.call(this,state_45017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_45062 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_45062[(6)] = c__21855__auto__);

return statearr_45062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
});
com.wsscode.pathom.async.wrap_read_async = (function com$wsscode$pathom$async$wrap_read_async(reader){
return (function (env){
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
return (function (env,tx){
return com.wsscode.pathom.async.read_chan_values((parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx)));
});
});
com.wsscode.pathom.async.async_plugin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,com.wsscode.pathom.async.wrap_read_async,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,com.wsscode.pathom.async.wrap_parser_async], null);
com.wsscode.pathom.async.js_obj_reader = (function com$wsscode$pathom$async$js_obj_reader(p__45117){
var map__45118 = p__45117;
var map__45118__$1 = ((((!((map__45118 == null)))?((((map__45118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45118):map__45118);
var env = map__45118__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,cljs.core.cst$kw$query);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,cljs.core.cst$kw$ast);
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45118__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_key_DASH_transform,cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45118__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_value_DASH_transform,((function (map__45118,map__45118__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__45118,map__45118__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var js_key = (function (){var G__45122 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__45122) : js_key_transform.call(null,G__45122));
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(goog.object.containsKey(entity,js_key))){
var v = goog.object.get(entity,js_key);
if(cljs.core.truth_(Array.isArray(v))){
return com.wsscode.pathom.async.read_chan_seq(com.wsscode.pathom.async.read_chan_values,com.wsscode.pathom.core.join_seq(env,v));
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = query;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),Object);
} else {
return and__10400__auto__;
}
})())){
return com.wsscode.pathom.async.read_chan_values(com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v)));
} else {
var G__45123 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var G__45124 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__45123,G__45124) : js_value_transform.call(null,G__45123,G__45124));
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
return (function (p__45140){
var map__45141 = p__45140;
var map__45141__$1 = ((((!((map__45141 == null)))?((((map__45141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45141):map__45141);
var env = map__45141__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45141__$1,cljs.core.cst$kw$ast);
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
com.wsscode.pathom.async.map_reader = (function com$wsscode$pathom$async$map_reader(p__45145){
var map__45146 = p__45145;
var map__45146__$1 = ((((!((map__45146 == null)))?((((map__45146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45146):map__45146);
var env = map__45146__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45146__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45146__$1,cljs.core.cst$kw$query);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45146__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5457__auto__ = cljs.core.find(entity,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__45149 = temp__5457__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45149,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return com.wsscode.pathom.async.read_chan_seq(com.wsscode.pathom.async.read_chan_values,com.wsscode.pathom.core.join_seq(env,v));
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.map_QMARK_(v);
if(and__10400__auto__){
return query;
} else {
return and__10400__auto__;
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
com.wsscode.pathom.async.async_pathom_read = (function com$wsscode$pathom$async$async_pathom_read(p__45167,_,___$1){
var map__45169 = p__45167;
var map__45169__$1 = ((((!((map__45169 == null)))?((((map__45169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45169):map__45169);
var env = map__45169__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader);
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45169__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_reader);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
try{var value = com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(value))){
var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto__,value,env__$1,map__45169,map__45169__$1,env,reader,process_reader){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto__,value,env__$1,map__45169,map__45169__$1,env,reader,process_reader){
return (function (state_45182){
var state_val_45183 = (state_45182[(1)]);
if((state_val_45183 === (1))){
var state_45182__$1 = state_45182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45182__$1,(2),value);
} else {
if((state_val_45183 === (2))){
var inst_45174 = (state_45182[(7)]);
var inst_45174__$1 = (state_45182[(2)]);
var inst_45175 = com.wsscode.pathom.async.error_QMARK_(inst_45174__$1);
var state_45182__$1 = (function (){var statearr_45189 = state_45182;
(statearr_45189[(7)] = inst_45174__$1);

return statearr_45189;
})();
if(cljs.core.truth_(inst_45175)){
var statearr_45191_45211 = state_45182__$1;
(statearr_45191_45211[(1)] = (3));

} else {
var statearr_45192_45212 = state_45182__$1;
(statearr_45192_45212[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45183 === (3))){
var inst_45174 = (state_45182[(7)]);
var inst_45177 = com.wsscode.pathom.async.parser_error(env__$1,inst_45174);
var state_45182__$1 = state_45182;
var statearr_45193_45213 = state_45182__$1;
(statearr_45193_45213[(2)] = inst_45177);

(statearr_45193_45213[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45183 === (4))){
var inst_45174 = (state_45182[(7)]);
var state_45182__$1 = state_45182;
var statearr_45195_45218 = state_45182__$1;
(statearr_45195_45218[(2)] = inst_45174);

(statearr_45195_45218[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45183 === (5))){
var inst_45180 = (state_45182[(2)]);
var state_45182__$1 = state_45182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45182__$1,inst_45180);
} else {
return null;
}
}
}
}
}
});})(c__21855__auto__,value,env__$1,map__45169,map__45169__$1,env,reader,process_reader))
;
return ((function (switch__21492__auto__,c__21855__auto__,value,env__$1,map__45169,map__45169__$1,env,reader,process_reader){
return (function() {
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto__ = null;
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto____0 = (function (){
var statearr_45196 = [null,null,null,null,null,null,null,null];
(statearr_45196[(0)] = com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto__);

(statearr_45196[(1)] = (1));

return statearr_45196;
});
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto____1 = (function (state_45182){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_45182);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e45197){if((e45197 instanceof Object)){
var ex__21496__auto__ = e45197;
var statearr_45198_45223 = state_45182;
(statearr_45198_45223[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45182);

return cljs.core.cst$kw$recur;
} else {
throw e45197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__45224 = state_45182;
state_45182 = G__45224;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto__ = function(state_45182){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto____1.call(this,state_45182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto____0;
com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto____1;
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto__,value,env__$1,map__45169,map__45169__$1,env,reader,process_reader))
})();
var state__21857__auto__ = (function (){var statearr_45199 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_45199[(6)] = c__21855__auto__);

return statearr_45199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto__,value,env__$1,map__45169,map__45169__$1,env,reader,process_reader))
);

return c__21855__auto__;
} else {
return value;
}
}catch (e45172){var e = e45172;
return com.wsscode.pathom.async.parser_error(env__$1,e);
}})()], null);
});

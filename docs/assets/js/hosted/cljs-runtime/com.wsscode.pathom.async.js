goog.provide('com.wsscode.pathom.async');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.core');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('cljs.core.async.impl.protocols');
com.wsscode.pathom.async.chan_QMARK_ = (function com$wsscode$pathom$async$chan_QMARK_(v){
if(!((v == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$async$impl$protocols$Channel$)))){
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
if(cljs.core.truth_(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47039_SHARP_){
var or__3922__auto__ = com.wsscode.pathom.async.chan_QMARK_(p1__47039_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return com.wsscode.pathom.async.chan_QMARK_(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(p1__47039_SHARP_));
}
}),cljs.core.vals(m))))){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var in$ = cljs.core.async.to_chan(m);
var c__33851__auto___47121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___47121,c,in$){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___47121,c,in$){
return (function (state_47083){
var state_val_47084 = (state_47083[(1)]);
if((state_val_47084 === (7))){
var inst_47079 = (state_47083[(2)]);
var state_47083__$1 = state_47083;
var statearr_47085_47125 = state_47083__$1;
(statearr_47085_47125[(2)] = inst_47079);

(statearr_47085_47125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (1))){
var inst_47040 = cljs.core.PersistentHashMap.EMPTY;
var inst_47041 = inst_47040;
var state_47083__$1 = (function (){var statearr_47086 = state_47083;
(statearr_47086[(7)] = inst_47041);

return statearr_47086;
})();
var statearr_47087_47128 = state_47083__$1;
(statearr_47087_47128[(2)] = null);

(statearr_47087_47128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (4))){
var inst_47044 = (state_47083[(8)]);
var inst_47044__$1 = (state_47083[(2)]);
var state_47083__$1 = (function (){var statearr_47088 = state_47083;
(statearr_47088[(8)] = inst_47044__$1);

return statearr_47088;
})();
if(cljs.core.truth_(inst_47044__$1)){
var statearr_47089_47129 = state_47083__$1;
(statearr_47089_47129[(1)] = (5));

} else {
var statearr_47090_47130 = state_47083__$1;
(statearr_47090_47130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (15))){
var inst_47051 = (state_47083[(9)]);
var inst_47062 = (state_47083[(2)]);
var inst_47063 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_47051,new cljs.core.Keyword(null,"result","result",1415092211),inst_47062);
var state_47083__$1 = state_47083;
var statearr_47091_47131 = state_47083__$1;
(statearr_47091_47131[(2)] = inst_47063);

(statearr_47091_47131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (13))){
var state_47083__$1 = state_47083;
var statearr_47092_47132 = state_47083__$1;
(statearr_47092_47132[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (6))){
var inst_47041 = (state_47083[(7)]);
var state_47083__$1 = state_47083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47083__$1,(19),c,inst_47041);
} else {
if((state_val_47084 === (17))){
var state_47083__$1 = state_47083;
var statearr_47095_47134 = state_47083__$1;
(statearr_47095_47134[(2)] = null);

(statearr_47095_47134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (3))){
var inst_47081 = (state_47083[(2)]);
var state_47083__$1 = state_47083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47083__$1,inst_47081);
} else {
if((state_val_47084 === (12))){
var inst_47051 = (state_47083[(9)]);
var inst_47060 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_47051);
var state_47083__$1 = state_47083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47083__$1,(15),inst_47060);
} else {
if((state_val_47084 === (2))){
var state_47083__$1 = state_47083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47083__$1,(4),in$);
} else {
if((state_val_47084 === (19))){
var inst_47077 = (state_47083[(2)]);
var state_47083__$1 = state_47083;
var statearr_47098_47137 = state_47083__$1;
(statearr_47098_47137[(2)] = inst_47077);

(statearr_47098_47137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (11))){
var inst_47055 = (state_47083[(2)]);
var state_47083__$1 = state_47083;
var statearr_47100_47138 = state_47083__$1;
(statearr_47100_47138[(2)] = inst_47055);

(statearr_47100_47138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (9))){
var inst_47051 = (state_47083[(9)]);
var inst_47057 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_47051);
var inst_47058 = com.wsscode.pathom.async.chan_QMARK_(inst_47057);
var state_47083__$1 = state_47083;
if(cljs.core.truth_(inst_47058)){
var statearr_47101_47139 = state_47083__$1;
(statearr_47101_47139[(1)] = (12));

} else {
var statearr_47105_47140 = state_47083__$1;
(statearr_47105_47140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (5))){
var inst_47044 = (state_47083[(8)]);
var inst_47051 = (state_47083[(9)]);
var inst_47050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47044,(0),null);
var inst_47051__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47044,(1),null);
var inst_47052 = com.wsscode.pathom.async.chan_QMARK_(inst_47051__$1);
var state_47083__$1 = (function (){var statearr_47107 = state_47083;
(statearr_47107[(10)] = inst_47050);

(statearr_47107[(9)] = inst_47051__$1);

return statearr_47107;
})();
if(cljs.core.truth_(inst_47052)){
var statearr_47108_47144 = state_47083__$1;
(statearr_47108_47144[(1)] = (8));

} else {
var statearr_47109_47145 = state_47083__$1;
(statearr_47109_47145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (14))){
var inst_47070 = (state_47083[(2)]);
var state_47083__$1 = state_47083;
var statearr_47111_47146 = state_47083__$1;
(statearr_47111_47146[(2)] = inst_47070);

(statearr_47111_47146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (16))){
var inst_47051 = (state_47083[(9)]);
var state_47083__$1 = state_47083;
var statearr_47112_47148 = state_47083__$1;
(statearr_47112_47148[(2)] = inst_47051);

(statearr_47112_47148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (10))){
var inst_47041 = (state_47083[(7)]);
var inst_47050 = (state_47083[(10)]);
var inst_47072 = (state_47083[(2)]);
var inst_47073 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_47041,inst_47050,inst_47072);
var inst_47041__$1 = inst_47073;
var state_47083__$1 = (function (){var statearr_47113 = state_47083;
(statearr_47113[(7)] = inst_47041__$1);

return statearr_47113;
})();
var statearr_47114_47151 = state_47083__$1;
(statearr_47114_47151[(2)] = null);

(statearr_47114_47151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (18))){
var inst_47068 = (state_47083[(2)]);
var state_47083__$1 = state_47083;
var statearr_47116_47152 = state_47083__$1;
(statearr_47116_47152[(2)] = inst_47068);

(statearr_47116_47152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47084 === (8))){
var inst_47051 = (state_47083[(9)]);
var state_47083__$1 = state_47083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47083__$1,(11),inst_47051);
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
});})(c__33851__auto___47121,c,in$))
;
return ((function (switch__32834__auto__,c__33851__auto___47121,c,in$){
return (function() {
var com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto__ = null;
var com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto____0 = (function (){
var statearr_47117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47117[(0)] = com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto__);

(statearr_47117[(1)] = (1));

return statearr_47117;
});
var com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto____1 = (function (state_47083){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_47083);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e47118){if((e47118 instanceof Object)){
var ex__32838__auto__ = e47118;
var statearr_47119_47156 = state_47083;
(statearr_47119_47156[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47157 = state_47083;
state_47083 = G__47157;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto__ = function(state_47083){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto____1.call(this,state_47083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto____0;
com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto____1;
return com$wsscode$pathom$async$read_chan_values_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___47121,c,in$))
})();
var state__33853__auto__ = (function (){var statearr_47120 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_47120[(6)] = c__33851__auto___47121);

return statearr_47120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___47121,c,in$))
);


return c;
} else {
return com.wsscode.pathom.async.resolved_chan(m);
}
});
com.wsscode.pathom.async.read_chan_seq = (function com$wsscode$pathom$async$read_chan_seq(f,s){
var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto__){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto__){
return (function (state_47168){
var state_val_47169 = (state_47168[(1)]);
if((state_val_47169 === (1))){
var inst_47159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((64));
var inst_47160 = (function (){var out = inst_47159;
return ((function (out,inst_47159,state_val_47169,c__33851__auto__){
return (function (in$,c){
var c__33851__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto____$1,out,inst_47159,state_val_47169,c__33851__auto__){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto____$1,out,inst_47159,state_val_47169,c__33851__auto__){
return (function (state_47191){
var state_val_47192 = (state_47191[(1)]);
if((state_val_47192 === (7))){
var inst_47179 = (state_47191[(7)]);
var state_47191__$1 = state_47191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47191__$1,(10),inst_47179);
} else {
if((state_val_47192 === (1))){
var inst_47172 = com.wsscode.pathom.async.chan_QMARK_(in$);
var state_47191__$1 = state_47191;
if(cljs.core.truth_(inst_47172)){
var statearr_47195_47229 = state_47191__$1;
(statearr_47195_47229[(1)] = (2));

} else {
var statearr_47196_47230 = state_47191__$1;
(statearr_47196_47230[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (4))){
var inst_47179 = (state_47191[(7)]);
var inst_47178 = (state_47191[(2)]);
var inst_47179__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47178) : f.call(null,inst_47178));
var inst_47180 = com.wsscode.pathom.async.chan_QMARK_(inst_47179__$1);
var state_47191__$1 = (function (){var statearr_47197 = state_47191;
(statearr_47197[(7)] = inst_47179__$1);

return statearr_47197;
})();
if(cljs.core.truth_(inst_47180)){
var statearr_47198_47231 = state_47191__$1;
(statearr_47198_47231[(1)] = (7));

} else {
var statearr_47199_47232 = state_47191__$1;
(statearr_47199_47232[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (6))){
var inst_47188 = (state_47191[(2)]);
var inst_47189 = cljs.core.async.close_BANG_(c);
var state_47191__$1 = (function (){var statearr_47201 = state_47191;
(statearr_47201[(8)] = inst_47188);

return statearr_47201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47191__$1,inst_47189);
} else {
if((state_val_47192 === (3))){
var state_47191__$1 = state_47191;
var statearr_47203_47233 = state_47191__$1;
(statearr_47203_47233[(2)] = in$);

(statearr_47203_47233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (2))){
var state_47191__$1 = state_47191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47191__$1,(5),in$);
} else {
if((state_val_47192 === (9))){
var inst_47186 = (state_47191[(2)]);
var state_47191__$1 = state_47191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47191__$1,(6),c,inst_47186);
} else {
if((state_val_47192 === (5))){
var inst_47175 = (state_47191[(2)]);
var state_47191__$1 = state_47191;
var statearr_47210_47234 = state_47191__$1;
(statearr_47210_47234[(2)] = inst_47175);

(statearr_47210_47234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (10))){
var inst_47183 = (state_47191[(2)]);
var state_47191__$1 = state_47191;
var statearr_47211_47235 = state_47191__$1;
(statearr_47211_47235[(2)] = inst_47183);

(statearr_47211_47235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47192 === (8))){
var inst_47179 = (state_47191[(7)]);
var state_47191__$1 = state_47191;
var statearr_47212_47237 = state_47191__$1;
(statearr_47212_47237[(2)] = inst_47179);

(statearr_47212_47237[(1)] = (9));


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
}
});})(c__33851__auto____$1,out,inst_47159,state_val_47169,c__33851__auto__))
;
return ((function (switch__32834__auto__,c__33851__auto____$1,out,inst_47159,state_val_47169,c__33851__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____0 = (function (){
var statearr_47213 = [null,null,null,null,null,null,null,null,null];
(statearr_47213[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__);

(statearr_47213[(1)] = (1));

return statearr_47213;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____1 = (function (state_47191){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_47191);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e47216){if((e47216 instanceof Object)){
var ex__32838__auto__ = e47216;
var statearr_47217_47241 = state_47191;
(statearr_47217_47241[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47244 = state_47191;
state_47191 = G__47244;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__ = function(state_47191){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____1.call(this,state_47191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto____$1,out,inst_47159,state_val_47169,c__33851__auto__))
})();
var state__33853__auto__ = (function (){var statearr_47218 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_47218[(6)] = c__33851__auto____$1);

return statearr_47218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto____$1,out,inst_47159,state_val_47169,c__33851__auto__))
);

return c__33851__auto____$1;
});
;})(out,inst_47159,state_val_47169,c__33851__auto__))
})();
var inst_47161 = cljs.core.async.to_chan(s);
var inst_47162 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_47159,inst_47160,inst_47161);
var inst_47163 = cljs.core.PersistentVector.EMPTY;
var inst_47164 = cljs.core.async.into(inst_47163,inst_47159);
var state_47168__$1 = (function (){var statearr_47220 = state_47168;
(statearr_47220[(7)] = inst_47162);

return statearr_47220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47168__$1,(2),inst_47164);
} else {
if((state_val_47169 === (2))){
var inst_47166 = (state_47168[(2)]);
var state_47168__$1 = state_47168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47168__$1,inst_47166);
} else {
return null;
}
}
});})(c__33851__auto__))
;
return ((function (switch__32834__auto__,c__33851__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____0 = (function (){
var statearr_47221 = [null,null,null,null,null,null,null,null];
(statearr_47221[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__);

(statearr_47221[(1)] = (1));

return statearr_47221;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____1 = (function (state_47168){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_47168);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e47222){if((e47222 instanceof Object)){
var ex__32838__auto__ = e47222;
var statearr_47223_47257 = state_47168;
(statearr_47223_47257[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47258 = state_47168;
state_47168 = G__47258;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__ = function(state_47168){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____1.call(this,state_47168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto__))
})();
var state__33853__auto__ = (function (){var statearr_47225 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_47225[(6)] = c__33851__auto__);

return statearr_47225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto__))
);

return c__33851__auto__;
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
com.wsscode.pathom.async.async_plugin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),com.wsscode.pathom.async.wrap_read_async,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),com.wsscode.pathom.async.wrap_parser_async], null);
com.wsscode.pathom.async.js_obj_reader = (function com$wsscode$pathom$async$js_obj_reader(p__47269){
var map__47270 = p__47269;
var map__47270__$1 = ((((!((map__47270 == null)))?(((((map__47270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47270):map__47270);
var env = map__47270__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47270__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47270__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47270__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47270__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__47270,map__47270__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__47270,map__47270__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47270__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__47272 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__47272) : js_key_transform.call(null,G__47272));
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(goog.object.containsKey(entity,js_key))){
var v = goog.object.get(entity,js_key);
if(cljs.core.truth_(Array.isArray(v))){
return com.wsscode.pathom.async.read_chan_seq(com.wsscode.pathom.async.read_chan_values,com.wsscode.pathom.core.join_seq(env,v));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = query;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),Object);
} else {
return and__3911__auto__;
}
})())){
return com.wsscode.pathom.async.read_chan_values(com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v)));
} else {
var G__47273 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__47274 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__47273,G__47274) : js_value_transform.call(null,G__47273,G__47274));
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
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
return (function (p__47284){
var map__47285 = p__47284;
var map__47285__$1 = ((((!((map__47285 == null)))?(((((map__47285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47285):map__47285);
var env = map__47285__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47285__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast)))){
return com.wsscode.pathom.async.read_chan_values(com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
});
/**
 * DEPRECATED: use async-plugin
 */
com.wsscode.pathom.async.map_reader = (function com$wsscode$pathom$async$map_reader(p__47289){
var map__47290 = p__47289;
var map__47290__$1 = ((((!((map__47290 == null)))?(((((map__47290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47290):map__47290);
var env = map__47290__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47290__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47290__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47290__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5455__auto__ = cljs.core.find(entity,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__47295 = temp__5455__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47295,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47295,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return com.wsscode.pathom.async.read_chan_seq(com.wsscode.pathom.async.read_chan_values,com.wsscode.pathom.core.join_seq(env,v));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.map_QMARK_(v);
if(and__3911__auto__){
return query;
} else {
return and__3911__auto__;
}
})())){
return com.wsscode.pathom.async.read_chan_values(com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v)));
} else {
return v;
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * DEPRECATED: use async-plugin
 */
com.wsscode.pathom.async.parser_error = (function com$wsscode$pathom$async$parser_error(env,err){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Parser Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.message)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env)], 0))], null));
});
com.wsscode.pathom.async.error_QMARK_ = (function com$wsscode$pathom$async$error_QMARK_(e){
return (e instanceof Error);
});
/**
 * DEPRECATED: user async-plugin
 */
com.wsscode.pathom.async.async_pathom_read = (function com$wsscode$pathom$async$async_pathom_read(p__47305,_,___$1){
var map__47306 = p__47305;
var map__47306__$1 = ((((!((map__47306 == null)))?(((((map__47306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47306):map__47306);
var env = map__47306__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47306__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47306__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
try{var value = com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(value))){
var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto__,value,env__$1,map__47306,map__47306__$1,env,reader,process_reader){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto__,value,env__$1,map__47306,map__47306__$1,env,reader,process_reader){
return (function (state_47322){
var state_val_47323 = (state_47322[(1)]);
if((state_val_47323 === (1))){
var state_47322__$1 = state_47322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47322__$1,(2),value);
} else {
if((state_val_47323 === (2))){
var inst_47314 = (state_47322[(7)]);
var inst_47314__$1 = (state_47322[(2)]);
var inst_47315 = com.wsscode.pathom.async.error_QMARK_(inst_47314__$1);
var state_47322__$1 = (function (){var statearr_47327 = state_47322;
(statearr_47327[(7)] = inst_47314__$1);

return statearr_47327;
})();
if(cljs.core.truth_(inst_47315)){
var statearr_47330_47356 = state_47322__$1;
(statearr_47330_47356[(1)] = (3));

} else {
var statearr_47333_47357 = state_47322__$1;
(statearr_47333_47357[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (3))){
var inst_47314 = (state_47322[(7)]);
var inst_47317 = com.wsscode.pathom.async.parser_error(env__$1,inst_47314);
var state_47322__$1 = state_47322;
var statearr_47334_47358 = state_47322__$1;
(statearr_47334_47358[(2)] = inst_47317);

(statearr_47334_47358[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (4))){
var inst_47314 = (state_47322[(7)]);
var state_47322__$1 = state_47322;
var statearr_47338_47359 = state_47322__$1;
(statearr_47338_47359[(2)] = inst_47314);

(statearr_47338_47359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (5))){
var inst_47320 = (state_47322[(2)]);
var state_47322__$1 = state_47322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47322__$1,inst_47320);
} else {
return null;
}
}
}
}
}
});})(c__33851__auto__,value,env__$1,map__47306,map__47306__$1,env,reader,process_reader))
;
return ((function (switch__32834__auto__,c__33851__auto__,value,env__$1,map__47306,map__47306__$1,env,reader,process_reader){
return (function() {
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto__ = null;
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto____0 = (function (){
var statearr_47339 = [null,null,null,null,null,null,null,null];
(statearr_47339[(0)] = com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto__);

(statearr_47339[(1)] = (1));

return statearr_47339;
});
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto____1 = (function (state_47322){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_47322);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e47340){if((e47340 instanceof Object)){
var ex__32838__auto__ = e47340;
var statearr_47343_47361 = state_47322;
(statearr_47343_47361[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47365 = state_47322;
state_47322 = G__47365;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto__ = function(state_47322){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto____1.call(this,state_47322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto____0;
com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto____1;
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto__,value,env__$1,map__47306,map__47306__$1,env,reader,process_reader))
})();
var state__33853__auto__ = (function (){var statearr_47344 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_47344[(6)] = c__33851__auto__);

return statearr_47344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto__,value,env__$1,map__47306,map__47306__$1,env,reader,process_reader))
);

return c__33851__auto__;
} else {
return value;
}
}catch (e47310){var e = e47310;
return com.wsscode.pathom.async.parser_error(env__$1,e);
}})()], null);
});

//# sourceMappingURL=com.wsscode.pathom.async.js.map

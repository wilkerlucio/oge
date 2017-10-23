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
if(cljs.core.truth_(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44885_SHARP_){
var or__10412__auto__ = com.wsscode.pathom.async.chan_QMARK_(p1__44885_SHARP_);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return com.wsscode.pathom.async.chan_QMARK_(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(p1__44885_SHARP_));
}
}),cljs.core.vals(m))))){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var in$ = cljs.core.async.to_chan(m);
var c__28612__auto___44993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___44993,c,in$){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___44993,c,in$){
return (function (state_44932){
var state_val_44933 = (state_44932[(1)]);
if((state_val_44933 === (7))){
var inst_44925 = (state_44932[(2)]);
var state_44932__$1 = state_44932;
var statearr_44934_44995 = state_44932__$1;
(statearr_44934_44995[(2)] = inst_44925);

(statearr_44934_44995[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (1))){
var inst_44887 = cljs.core.PersistentHashMap.EMPTY;
var inst_44888 = inst_44887;
var state_44932__$1 = (function (){var statearr_44936 = state_44932;
(statearr_44936[(7)] = inst_44888);

return statearr_44936;
})();
var statearr_44937_44997 = state_44932__$1;
(statearr_44937_44997[(2)] = null);

(statearr_44937_44997[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (4))){
var inst_44891 = (state_44932[(8)]);
var inst_44891__$1 = (state_44932[(2)]);
var state_44932__$1 = (function (){var statearr_44941 = state_44932;
(statearr_44941[(8)] = inst_44891__$1);

return statearr_44941;
})();
if(cljs.core.truth_(inst_44891__$1)){
var statearr_44942_44999 = state_44932__$1;
(statearr_44942_44999[(1)] = (5));

} else {
var statearr_44943_45000 = state_44932__$1;
(statearr_44943_45000[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (15))){
var inst_44897 = (state_44932[(9)]);
var inst_44908 = (state_44932[(2)]);
var inst_44909 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_44897,cljs.core.cst$kw$result,inst_44908);
var state_44932__$1 = state_44932;
var statearr_44945_45004 = state_44932__$1;
(statearr_44945_45004[(2)] = inst_44909);

(statearr_44945_45004[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (13))){
var state_44932__$1 = state_44932;
var statearr_44946_45006 = state_44932__$1;
(statearr_44946_45006[(1)] = (16));



return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (6))){
var inst_44888 = (state_44932[(7)]);
var state_44932__$1 = state_44932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44932__$1,(19),c,inst_44888);
} else {
if((state_val_44933 === (17))){
var state_44932__$1 = state_44932;
var statearr_44948_45007 = state_44932__$1;
(statearr_44948_45007[(2)] = null);

(statearr_44948_45007[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (3))){
var inst_44927 = (state_44932[(2)]);
var state_44932__$1 = state_44932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44932__$1,inst_44927);
} else {
if((state_val_44933 === (12))){
var inst_44897 = (state_44932[(9)]);
var inst_44906 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_44897);
var state_44932__$1 = state_44932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44932__$1,(15),inst_44906);
} else {
if((state_val_44933 === (2))){
var state_44932__$1 = state_44932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44932__$1,(4),in$);
} else {
if((state_val_44933 === (19))){
var inst_44923 = (state_44932[(2)]);
var state_44932__$1 = state_44932;
var statearr_44952_45013 = state_44932__$1;
(statearr_44952_45013[(2)] = inst_44923);

(statearr_44952_45013[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (11))){
var inst_44901 = (state_44932[(2)]);
var state_44932__$1 = state_44932;
var statearr_44957_45014 = state_44932__$1;
(statearr_44957_45014[(2)] = inst_44901);

(statearr_44957_45014[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (9))){
var inst_44897 = (state_44932[(9)]);
var inst_44903 = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(inst_44897);
var inst_44904 = com.wsscode.pathom.async.chan_QMARK_(inst_44903);
var state_44932__$1 = state_44932;
if(cljs.core.truth_(inst_44904)){
var statearr_44962_45019 = state_44932__$1;
(statearr_44962_45019[(1)] = (12));

} else {
var statearr_44965_45020 = state_44932__$1;
(statearr_44965_45020[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (5))){
var inst_44897 = (state_44932[(9)]);
var inst_44891 = (state_44932[(8)]);
var inst_44896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44891,(0),null);
var inst_44897__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44891,(1),null);
var inst_44898 = com.wsscode.pathom.async.chan_QMARK_(inst_44897__$1);
var state_44932__$1 = (function (){var statearr_44970 = state_44932;
(statearr_44970[(9)] = inst_44897__$1);

(statearr_44970[(10)] = inst_44896);

return statearr_44970;
})();
if(cljs.core.truth_(inst_44898)){
var statearr_44971_45023 = state_44932__$1;
(statearr_44971_45023[(1)] = (8));

} else {
var statearr_44972_45024 = state_44932__$1;
(statearr_44972_45024[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (14))){
var inst_44916 = (state_44932[(2)]);
var state_44932__$1 = state_44932;
var statearr_44973_45025 = state_44932__$1;
(statearr_44973_45025[(2)] = inst_44916);

(statearr_44973_45025[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (16))){
var inst_44897 = (state_44932[(9)]);
var state_44932__$1 = state_44932;
var statearr_44974_45026 = state_44932__$1;
(statearr_44974_45026[(2)] = inst_44897);

(statearr_44974_45026[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (10))){
var inst_44888 = (state_44932[(7)]);
var inst_44896 = (state_44932[(10)]);
var inst_44918 = (state_44932[(2)]);
var inst_44919 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_44888,inst_44896,inst_44918);
var inst_44888__$1 = inst_44919;
var state_44932__$1 = (function (){var statearr_44975 = state_44932;
(statearr_44975[(7)] = inst_44888__$1);

return statearr_44975;
})();
var statearr_44976_45027 = state_44932__$1;
(statearr_44976_45027[(2)] = null);

(statearr_44976_45027[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (18))){
var inst_44914 = (state_44932[(2)]);
var state_44932__$1 = state_44932;
var statearr_44977_45028 = state_44932__$1;
(statearr_44977_45028[(2)] = inst_44914);

(statearr_44977_45028[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44933 === (8))){
var inst_44897 = (state_44932[(9)]);
var state_44932__$1 = state_44932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44932__$1,(11),inst_44897);
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
});})(c__28612__auto___44993,c,in$))
;
return ((function (switch__24124__auto__,c__28612__auto___44993,c,in$){
return (function() {
var com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto__ = null;
var com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto____0 = (function (){
var statearr_44978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44978[(0)] = com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto__);

(statearr_44978[(1)] = (1));

return statearr_44978;
});
var com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto____1 = (function (state_44932){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_44932);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e44979){if((e44979 instanceof Object)){
var ex__24128__auto__ = e44979;
var statearr_44980_45032 = state_44932;
(statearr_44980_45032[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44932);

return cljs.core.cst$kw$recur;
} else {
throw e44979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__45033 = state_44932;
state_44932 = G__45033;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto__ = function(state_44932){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto____1.call(this,state_44932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto____0;
com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto____1;
return com$wsscode$pathom$async$read_chan_values_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___44993,c,in$))
})();
var state__28614__auto__ = (function (){var statearr_44982 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_44982[(6)] = c__28612__auto___44993);

return statearr_44982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___44993,c,in$))
);


return c;
} else {
return com.wsscode.pathom.async.resolved_chan(m);
}
});
com.wsscode.pathom.async.read_chan_seq = (function com$wsscode$pathom$async$read_chan_seq(f,s){
var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto__){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto__){
return (function (state_45043){
var state_val_45044 = (state_45043[(1)]);
if((state_val_45044 === (1))){
var inst_45034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((64));
var inst_45035 = (function (){var out = inst_45034;
return ((function (out,inst_45034,state_val_45044,c__28612__auto__){
return (function (in$,c){
var c__28612__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto____$1,out,inst_45034,state_val_45044,c__28612__auto__){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto____$1,out,inst_45034,state_val_45044,c__28612__auto__){
return (function (state_45064){
var state_val_45065 = (state_45064[(1)]);
if((state_val_45065 === (7))){
var inst_45052 = (state_45064[(7)]);
var state_45064__$1 = state_45064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45064__$1,(10),inst_45052);
} else {
if((state_val_45065 === (1))){
var inst_45045 = com.wsscode.pathom.async.chan_QMARK_(in$);
var state_45064__$1 = state_45064;
if(cljs.core.truth_(inst_45045)){
var statearr_45066_45096 = state_45064__$1;
(statearr_45066_45096[(1)] = (2));

} else {
var statearr_45067_45099 = state_45064__$1;
(statearr_45067_45099[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45065 === (4))){
var inst_45052 = (state_45064[(7)]);
var inst_45051 = (state_45064[(2)]);
var inst_45052__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45051) : f.call(null,inst_45051));
var inst_45053 = com.wsscode.pathom.async.chan_QMARK_(inst_45052__$1);
var state_45064__$1 = (function (){var statearr_45068 = state_45064;
(statearr_45068[(7)] = inst_45052__$1);

return statearr_45068;
})();
if(cljs.core.truth_(inst_45053)){
var statearr_45069_45101 = state_45064__$1;
(statearr_45069_45101[(1)] = (7));

} else {
var statearr_45070_45104 = state_45064__$1;
(statearr_45070_45104[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45065 === (6))){
var inst_45061 = (state_45064[(2)]);
var inst_45062 = cljs.core.async.close_BANG_(c);
var state_45064__$1 = (function (){var statearr_45071 = state_45064;
(statearr_45071[(8)] = inst_45061);

return statearr_45071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45064__$1,inst_45062);
} else {
if((state_val_45065 === (3))){
var state_45064__$1 = state_45064;
var statearr_45073_45107 = state_45064__$1;
(statearr_45073_45107[(2)] = in$);

(statearr_45073_45107[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45065 === (2))){
var state_45064__$1 = state_45064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45064__$1,(5),in$);
} else {
if((state_val_45065 === (9))){
var inst_45059 = (state_45064[(2)]);
var state_45064__$1 = state_45064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45064__$1,(6),c,inst_45059);
} else {
if((state_val_45065 === (5))){
var inst_45048 = (state_45064[(2)]);
var state_45064__$1 = state_45064;
var statearr_45074_45116 = state_45064__$1;
(statearr_45074_45116[(2)] = inst_45048);

(statearr_45074_45116[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45065 === (10))){
var inst_45056 = (state_45064[(2)]);
var state_45064__$1 = state_45064;
var statearr_45075_45117 = state_45064__$1;
(statearr_45075_45117[(2)] = inst_45056);

(statearr_45075_45117[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45065 === (8))){
var inst_45052 = (state_45064[(7)]);
var state_45064__$1 = state_45064;
var statearr_45076_45119 = state_45064__$1;
(statearr_45076_45119[(2)] = inst_45052);

(statearr_45076_45119[(1)] = (9));


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
});})(c__28612__auto____$1,out,inst_45034,state_val_45044,c__28612__auto__))
;
return ((function (switch__24124__auto__,c__28612__auto____$1,out,inst_45034,state_val_45044,c__28612__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____0 = (function (){
var statearr_45077 = [null,null,null,null,null,null,null,null,null];
(statearr_45077[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__);

(statearr_45077[(1)] = (1));

return statearr_45077;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____1 = (function (state_45064){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_45064);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e45078){if((e45078 instanceof Object)){
var ex__24128__auto__ = e45078;
var statearr_45079_45123 = state_45064;
(statearr_45079_45123[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45064);

return cljs.core.cst$kw$recur;
} else {
throw e45078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__45124 = state_45064;
state_45064 = G__45124;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__ = function(state_45064){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____1.call(this,state_45064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto____$1,out,inst_45034,state_val_45044,c__28612__auto__))
})();
var state__28614__auto__ = (function (){var statearr_45080 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_45080[(6)] = c__28612__auto____$1);

return statearr_45080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto____$1,out,inst_45034,state_val_45044,c__28612__auto__))
);

return c__28612__auto____$1;
});
;})(out,inst_45034,state_val_45044,c__28612__auto__))
})();
var inst_45036 = cljs.core.async.to_chan(s);
var inst_45037 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_45034,inst_45035,inst_45036);
var inst_45038 = cljs.core.PersistentVector.EMPTY;
var inst_45039 = cljs.core.async.into(inst_45038,inst_45034);
var state_45043__$1 = (function (){var statearr_45081 = state_45043;
(statearr_45081[(7)] = inst_45037);

return statearr_45081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45043__$1,(2),inst_45039);
} else {
if((state_val_45044 === (2))){
var inst_45041 = (state_45043[(2)]);
var state_45043__$1 = state_45043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45043__$1,inst_45041);
} else {
return null;
}
}
});})(c__28612__auto__))
;
return ((function (switch__24124__auto__,c__28612__auto__){
return (function() {
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__ = null;
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____0 = (function (){
var statearr_45082 = [null,null,null,null,null,null,null,null];
(statearr_45082[(0)] = com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__);

(statearr_45082[(1)] = (1));

return statearr_45082;
});
var com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____1 = (function (state_45043){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_45043);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e45083){if((e45083 instanceof Object)){
var ex__24128__auto__ = e45083;
var statearr_45084_45140 = state_45043;
(statearr_45084_45140[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45043);

return cljs.core.cst$kw$recur;
} else {
throw e45083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__45145 = state_45043;
state_45043 = G__45145;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__ = function(state_45043){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____1.call(this,state_45043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____0;
com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto____1;
return com$wsscode$pathom$async$read_chan_seq_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto__))
})();
var state__28614__auto__ = (function (){var statearr_45085 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_45085[(6)] = c__28612__auto__);

return statearr_45085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto__))
);

return c__28612__auto__;
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
com.wsscode.pathom.async.js_obj_reader = (function com$wsscode$pathom$async$js_obj_reader(p__45152){
var map__45153 = p__45152;
var map__45153__$1 = ((((!((map__45153 == null)))?((((map__45153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45153):map__45153);
var env = map__45153__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45153__$1,cljs.core.cst$kw$query);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45153__$1,cljs.core.cst$kw$ast);
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45153__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_key_DASH_transform,cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45153__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_value_DASH_transform,((function (map__45153,map__45153__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__45153,map__45153__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45153__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var js_key = (function (){var G__45157 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__45157) : js_key_transform.call(null,G__45157));
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
var G__45158 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var G__45159 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__45158,G__45159) : js_value_transform.call(null,G__45158,G__45159));
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
return (function (p__45173){
var map__45175 = p__45173;
var map__45175__$1 = ((((!((map__45175 == null)))?((((map__45175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45175):map__45175);
var env = map__45175__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45175__$1,cljs.core.cst$kw$ast);
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
com.wsscode.pathom.async.map_reader = (function com$wsscode$pathom$async$map_reader(p__45183){
var map__45186 = p__45183;
var map__45186__$1 = ((((!((map__45186 == null)))?((((map__45186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45186):map__45186);
var env = map__45186__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45186__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45186__$1,cljs.core.cst$kw$query);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45186__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5457__auto__ = cljs.core.find(entity,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__45191 = temp__5457__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45191,(1),null);
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
com.wsscode.pathom.async.async_pathom_read = (function com$wsscode$pathom$async$async_pathom_read(p__45206,_,___$1){
var map__45207 = p__45206;
var map__45207__$1 = ((((!((map__45207 == null)))?((((map__45207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45207):map__45207);
var env = map__45207__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45207__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader);
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45207__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_reader);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
try{var value = com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(value))){
var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto__,value,env__$1,map__45207,map__45207__$1,env,reader,process_reader){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto__,value,env__$1,map__45207,map__45207__$1,env,reader,process_reader){
return (function (state_45225){
var state_val_45226 = (state_45225[(1)]);
if((state_val_45226 === (1))){
var state_45225__$1 = state_45225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45225__$1,(2),value);
} else {
if((state_val_45226 === (2))){
var inst_45217 = (state_45225[(7)]);
var inst_45217__$1 = (state_45225[(2)]);
var inst_45218 = com.wsscode.pathom.async.error_QMARK_(inst_45217__$1);
var state_45225__$1 = (function (){var statearr_45230 = state_45225;
(statearr_45230[(7)] = inst_45217__$1);

return statearr_45230;
})();
if(cljs.core.truth_(inst_45218)){
var statearr_45231_45247 = state_45225__$1;
(statearr_45231_45247[(1)] = (3));

} else {
var statearr_45232_45248 = state_45225__$1;
(statearr_45232_45248[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45226 === (3))){
var inst_45217 = (state_45225[(7)]);
var inst_45220 = com.wsscode.pathom.async.parser_error(env__$1,inst_45217);
var state_45225__$1 = state_45225;
var statearr_45233_45249 = state_45225__$1;
(statearr_45233_45249[(2)] = inst_45220);

(statearr_45233_45249[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45226 === (4))){
var inst_45217 = (state_45225[(7)]);
var state_45225__$1 = state_45225;
var statearr_45234_45254 = state_45225__$1;
(statearr_45234_45254[(2)] = inst_45217);

(statearr_45234_45254[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45226 === (5))){
var inst_45223 = (state_45225[(2)]);
var state_45225__$1 = state_45225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45225__$1,inst_45223);
} else {
return null;
}
}
}
}
}
});})(c__28612__auto__,value,env__$1,map__45207,map__45207__$1,env,reader,process_reader))
;
return ((function (switch__24124__auto__,c__28612__auto__,value,env__$1,map__45207,map__45207__$1,env,reader,process_reader){
return (function() {
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto__ = null;
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto____0 = (function (){
var statearr_45235 = [null,null,null,null,null,null,null,null];
(statearr_45235[(0)] = com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto__);

(statearr_45235[(1)] = (1));

return statearr_45235;
});
var com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto____1 = (function (state_45225){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_45225);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e45236){if((e45236 instanceof Object)){
var ex__24128__auto__ = e45236;
var statearr_45237_45277 = state_45225;
(statearr_45237_45277[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45225);

return cljs.core.cst$kw$recur;
} else {
throw e45236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__45278 = state_45225;
state_45225 = G__45278;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto__ = function(state_45225){
switch(arguments.length){
case 0:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto____0.call(this);
case 1:
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto____1.call(this,state_45225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto____0;
com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto____1;
return com$wsscode$pathom$async$async_pathom_read_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto__,value,env__$1,map__45207,map__45207__$1,env,reader,process_reader))
})();
var state__28614__auto__ = (function (){var statearr_45239 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_45239[(6)] = c__28612__auto__);

return statearr_45239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto__,value,env__$1,map__45207,map__45207__$1,env,reader,process_reader))
);

return c__28612__auto__;
} else {
return value;
}
}catch (e45213){var e = e45213;
return com.wsscode.pathom.async.parser_error(env__$1,e);
}})()], null);
});

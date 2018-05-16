goog.provide('com.wsscode.pathom.profile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.async');
com.wsscode.pathom.profile.append_at = (function com$wsscode$pathom$profile$append_at(cur,v){
if(cljs.core.map_QMARK_(cur)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur,new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364),v);
} else {
return v;

}
});
com.wsscode.pathom.profile.current_time_ms = (function com$wsscode$pathom$profile$current_time_ms(){
return (new Date()).getTime();
});
com.wsscode.pathom.profile.profile_plugin = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$profile$profile_plugin_wrap_parser(parser){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_parser_$_profile_plugin_wrap_parser_internal(env,tx){
var G__47633 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__47634 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__47633,G__47634) : parser.call(null,G__47633,G__47634));
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),(function com$wsscode$pathom$profile$profile_plugin_wrap_read(reader){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal(p__47635){
var map__47636 = p__47635;
var map__47636__$1 = ((((!((map__47636 == null)))?(((((map__47636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47636):map__47636);
var env = map__47636__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47636__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47636__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),com.wsscode.pathom.core.key_dispatch(env))){
return cljs.core.deref(profile_STAR_);
} else {
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.profile.current_time_ms() - start_time)], 0));

return res;
}
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),(function com$wsscode$pathom$profile$profile_plugin_wrap_mutate(mutate){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_mutate_$_profile_plugin_wrap_mutate_internal(p__47638,k,params){
var map__47639 = p__47638;
var map__47639__$1 = ((((!((map__47639 == null)))?(((((map__47639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47639):map__47639);
var env = map__47639__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47639__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var out = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : mutate.call(null,env,k,params));
var G__47641 = out;
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(out))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47641,new cljs.core.Keyword(null,"action","action",-811238024),((function (G__47641,out,map__47639,map__47639__$1,env,profile_STAR_){
return (function (action){
return ((function (G__47641,out,map__47639,map__47639__$1,env,profile_STAR_){
return (function (){
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile_STAR_,cljs.core.assoc,k,(com.wsscode.pathom.profile.current_time_ms() - start_time));

return res;
});
;})(G__47641,out,map__47639,map__47639__$1,env,profile_STAR_))
});})(G__47641,out,map__47639,map__47639__$1,env,profile_STAR_))
);
} else {
return G__47641;
}
});
})], null);
com.wsscode.pathom.profile.process_pending_QMARK_ = (function com$wsscode$pathom$profile$process_pending_QMARK_(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__47642){
var vec__47643 = p__47642;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47643,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47643,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","processing","com.wsscode.pathom.profile/processing",-1086880784),v)));
}),m));
} else {
return null;
}
});
com.wsscode.pathom.profile.sleep = (function com$wsscode$pathom$profile$sleep(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
setTimeout(((function (c){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword("com.wsscode.pathom.profile","done","com.wsscode.pathom.profile/done",-1381466155));
});})(c))
,ms);

return c;
});
com.wsscode.pathom.profile.async_wrap_profile = (function com$wsscode$pathom$profile$async_wrap_profile(f){
return (function (p__47646,k,p){
var map__47647 = p__47646;
var map__47647__$1 = ((((!((map__47647 == null)))?(((((map__47647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47647):map__47647);
var env = map__47647__$1;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47647__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583));
var map__47649 = com.wsscode.pathom.core.normalize_env(env);
var map__47649__$1 = ((((!((map__47649 == null)))?(((((map__47649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47649):map__47649);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47649__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(env,k,p) : f.call(null,env,k,p));
if(cljs.core.truth_(profile)){
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.profile","processing","com.wsscode.pathom.profile/processing",-1086880784)], 0));

var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto__,map__47649,map__47649__$1,path,start_time,res,map__47647,map__47647__$1,env,profile){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto__,map__47649,map__47649__$1,path,start_time,res,map__47647,map__47647__$1,env,profile){
return (function (state_47673){
var state_val_47674 = (state_47673[(1)]);
if((state_val_47674 === (1))){
var inst_47651 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var state_47673__$1 = state_47673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47673__$1,(2),inst_47651);
} else {
if((state_val_47674 === (2))){
var inst_47653 = (state_47673[(2)]);
var state_47673__$1 = (function (){var statearr_47675 = state_47673;
(statearr_47675[(7)] = inst_47653);

return statearr_47675;
})();
var statearr_47676_47688 = state_47673__$1;
(statearr_47676_47688[(2)] = null);

(statearr_47676_47688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (3))){
var inst_47655 = cljs.core.deref(profile);
var inst_47656 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_47655,path);
var inst_47657 = com.wsscode.pathom.profile.process_pending_QMARK_(inst_47656);
var state_47673__$1 = state_47673;
if(cljs.core.truth_(inst_47657)){
var statearr_47677_47689 = state_47673__$1;
(statearr_47677_47689[(1)] = (5));

} else {
var statearr_47678_47690 = state_47673__$1;
(statearr_47678_47690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (4))){
var inst_47653 = (state_47673[(7)]);
var inst_47667 = (state_47673[(2)]);
var inst_47668 = com.wsscode.pathom.profile.current_time_ms();
var inst_47669 = (inst_47668 - start_time);
var inst_47670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47669], 0));
var inst_47671 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword(null,"value","value",305978217),inst_47653);
var state_47673__$1 = (function (){var statearr_47679 = state_47673;
(statearr_47679[(8)] = inst_47670);

(statearr_47679[(9)] = inst_47667);

return statearr_47679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47673__$1,inst_47671);
} else {
if((state_val_47674 === (5))){
var inst_47659 = com.wsscode.pathom.profile.sleep((1));
var state_47673__$1 = state_47673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47673__$1,(8),inst_47659);
} else {
if((state_val_47674 === (6))){
var state_47673__$1 = state_47673;
var statearr_47680_47691 = state_47673__$1;
(statearr_47680_47691[(2)] = null);

(statearr_47680_47691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (7))){
var inst_47665 = (state_47673[(2)]);
var state_47673__$1 = state_47673;
var statearr_47681_47692 = state_47673__$1;
(statearr_47681_47692[(2)] = inst_47665);

(statearr_47681_47692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47674 === (8))){
var inst_47661 = (state_47673[(2)]);
var state_47673__$1 = (function (){var statearr_47682 = state_47673;
(statearr_47682[(10)] = inst_47661);

return statearr_47682;
})();
var statearr_47683_47693 = state_47673__$1;
(statearr_47683_47693[(2)] = null);

(statearr_47683_47693[(1)] = (3));


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
});})(c__33851__auto__,map__47649,map__47649__$1,path,start_time,res,map__47647,map__47647__$1,env,profile))
;
return ((function (switch__32834__auto__,c__33851__auto__,map__47649,map__47649__$1,path,start_time,res,map__47647,map__47647__$1,env,profile){
return (function() {
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto__ = null;
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto____0 = (function (){
var statearr_47684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47684[(0)] = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto__);

(statearr_47684[(1)] = (1));

return statearr_47684;
});
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto____1 = (function (state_47673){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_47673);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e47685){if((e47685 instanceof Object)){
var ex__32838__auto__ = e47685;
var statearr_47686_47694 = state_47673;
(statearr_47686_47694[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47685;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47695 = state_47673;
state_47673 = G__47695;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto__ = function(state_47673){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto____1.call(this,state_47673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto____0;
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto____1;
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto__,map__47649,map__47649__$1,path,start_time,res,map__47647,map__47647__$1,env,profile))
})();
var state__33853__auto__ = (function (){var statearr_47687 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_47687[(6)] = c__33851__auto__);

return statearr_47687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto__,map__47649,map__47649__$1,path,start_time,res,map__47647,map__47647__$1,env,profile))
);

return c__33851__auto__;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.profile.current_time_ms() - start_time)], 0));

return res;
}
} else {
return res;
}
});
});
com.wsscode.pathom.profile.node_name = (function com$wsscode$pathom$profile$node_name(x){
if(cljs.core.vector_QMARK_(x)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.profile.node_name,x));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');

}
});
com.wsscode.pathom.profile.node_value = (function com$wsscode$pathom$profile$node_value(x){
if(cljs.core.map_QMARK_(x)){
var or__3922__auto__ = new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.profile.node_value,cljs.core.vals(x)));
}
} else {
return x;
}
});
com.wsscode.pathom.profile.profile__GT_nvc_STAR_ = (function com$wsscode$pathom$profile$profile__GT_nvc_STAR_(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__47696_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364),cljs.core.first(p1__47696_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__47697){
var vec__47698 = p__47697;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47698,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47698,(1),null);
var G__47701 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),com.wsscode.pathom.profile.node_name(k),new cljs.core.Keyword(null,"value","value",305978217),com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47701,new cljs.core.Keyword(null,"children","children",-940561982),(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__47701;
}
}))),m);
});
/**
 * Convert data into format of maps containg the keys:
 *  name: the current attribute name
 *  value: the total time spent on the node + children
 *  children: the children elements (recursive)
 * 
 * This for is suitable for some d3 flamegraph plugins on the browser
 */
com.wsscode.pathom.profile.profile__GT_nvc = (function com$wsscode$pathom$profile$profile__GT_nvc(data){
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.profile.node_value,cljs.core.vals(data)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Root",new cljs.core.Keyword(null,"value","value",305978217),total,new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.profile.profile__GT_nvc_STAR_(data)], null);
});
com.wsscode.pathom.profile.profile__GT_flame_graph = com.wsscode.pathom.profile.profile__GT_nvc;

//# sourceMappingURL=com.wsscode.pathom.profile.js.map

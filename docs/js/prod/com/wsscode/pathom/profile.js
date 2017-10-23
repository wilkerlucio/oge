// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.pathom.profile');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.async');
com.wsscode.pathom.profile.append_at = (function com$wsscode$pathom$profile$append_at(cur,v){
if(cljs.core.map_QMARK_(cur)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self,v);
} else {
return v;

}
});
com.wsscode.pathom.profile.current_time_ms = (function com$wsscode$pathom$profile$current_time_ms(){
return (new Date()).getTime();
});
com.wsscode.pathom.profile.profile_plugin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,(function (parser){
return (function (env,tx){
var G__45283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__45284 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__45283,G__45284) : parser.call(null,G__45283,G__45284));
});
}),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,(function (reader){
return (function (p__45286){
var map__45287 = p__45286;
var map__45287__$1 = ((((!((map__45287 == null)))?((((map__45287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45287):map__45287);
var env = map__45287__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45287__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45287__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile,com.wsscode.pathom.core.key_dispatch(env))){
return cljs.core.deref(profile_STAR_);
} else {
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.profile.current_time_ms() - start_time)], 0));

return res;
}
});
})], null);
com.wsscode.pathom.profile.process_pending_QMARK_ = (function com$wsscode$pathom$profile$process_pending_QMARK_(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45294){
var vec__45295 = p__45294;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45295,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45295,(1),null);
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_processing,v));
}),m));
} else {
return null;
}
});
com.wsscode.pathom.profile.sleep = (function com$wsscode$pathom$profile$sleep(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__45302_45305 = ((function (c){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_done);
});})(c))
;
var G__45303_45306 = ms;
setTimeout(G__45302_45305,G__45303_45306);

return c;
});
com.wsscode.pathom.profile.async_wrap_profile = (function com$wsscode$pathom$profile$async_wrap_profile(f){
return (function (p__45310,k,p){
var map__45311 = p__45310;
var map__45311__$1 = ((((!((map__45311 == null)))?((((map__45311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45311):map__45311);
var env = map__45311__$1;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45311__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile);
var map__45316 = com.wsscode.pathom.core.normalize_env(env);
var map__45316__$1 = ((((!((map__45316 == null)))?((((map__45316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45316):map__45316);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45316__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(env,k,p) : f.call(null,env,k,p));
if(cljs.core.truth_(profile)){
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_processing], 0));

var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto__,map__45316,map__45316__$1,path,start_time,res,map__45311,map__45311__$1,env,profile){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto__,map__45316,map__45316__$1,path,start_time,res,map__45311,map__45311__$1,env,profile){
return (function (state_45342){
var state_val_45343 = (state_45342[(1)]);
if((state_val_45343 === (1))){
var inst_45319 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var state_45342__$1 = state_45342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45342__$1,(2),inst_45319);
} else {
if((state_val_45343 === (2))){
var inst_45321 = (state_45342[(2)]);
var state_45342__$1 = (function (){var statearr_45345 = state_45342;
(statearr_45345[(7)] = inst_45321);

return statearr_45345;
})();
var statearr_45347_45367 = state_45342__$1;
(statearr_45347_45367[(2)] = null);

(statearr_45347_45367[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45343 === (3))){
var inst_45323 = cljs.core.deref(profile);
var inst_45324 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_45323,path);
var inst_45325 = com.wsscode.pathom.profile.process_pending_QMARK_(inst_45324);
var state_45342__$1 = state_45342;
if(cljs.core.truth_(inst_45325)){
var statearr_45348_45371 = state_45342__$1;
(statearr_45348_45371[(1)] = (5));

} else {
var statearr_45349_45372 = state_45342__$1;
(statearr_45349_45372[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45343 === (4))){
var inst_45321 = (state_45342[(7)]);
var inst_45336 = (state_45342[(2)]);
var inst_45337 = com.wsscode.pathom.profile.current_time_ms();
var inst_45338 = (inst_45337 - start_time);
var inst_45339 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45338], 0));
var inst_45340 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$value,inst_45321);
var state_45342__$1 = (function (){var statearr_45351 = state_45342;
(statearr_45351[(8)] = inst_45339);

(statearr_45351[(9)] = inst_45336);

return statearr_45351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45342__$1,inst_45340);
} else {
if((state_val_45343 === (5))){
var inst_45328 = com.wsscode.pathom.profile.sleep((1));
var state_45342__$1 = state_45342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45342__$1,(8),inst_45328);
} else {
if((state_val_45343 === (6))){
var state_45342__$1 = state_45342;
var statearr_45352_45381 = state_45342__$1;
(statearr_45352_45381[(2)] = null);

(statearr_45352_45381[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45343 === (7))){
var inst_45334 = (state_45342[(2)]);
var state_45342__$1 = state_45342;
var statearr_45353_45384 = state_45342__$1;
(statearr_45353_45384[(2)] = inst_45334);

(statearr_45353_45384[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45343 === (8))){
var inst_45330 = (state_45342[(2)]);
var state_45342__$1 = (function (){var statearr_45354 = state_45342;
(statearr_45354[(10)] = inst_45330);

return statearr_45354;
})();
var statearr_45355_45389 = state_45342__$1;
(statearr_45355_45389[(2)] = null);

(statearr_45355_45389[(1)] = (3));


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
});})(c__28612__auto__,map__45316,map__45316__$1,path,start_time,res,map__45311,map__45311__$1,env,profile))
;
return ((function (switch__24124__auto__,c__28612__auto__,map__45316,map__45316__$1,path,start_time,res,map__45311,map__45311__$1,env,profile){
return (function() {
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto__ = null;
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto____0 = (function (){
var statearr_45356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45356[(0)] = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto__);

(statearr_45356[(1)] = (1));

return statearr_45356;
});
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto____1 = (function (state_45342){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_45342);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e45357){if((e45357 instanceof Object)){
var ex__24128__auto__ = e45357;
var statearr_45358_45390 = state_45342;
(statearr_45358_45390[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45342);

return cljs.core.cst$kw$recur;
} else {
throw e45357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__45392 = state_45342;
state_45342 = G__45392;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto__ = function(state_45342){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto____1.call(this,state_45342);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto____0;
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto____1;
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto__,map__45316,map__45316__$1,path,start_time,res,map__45311,map__45311__$1,env,profile))
})();
var state__28614__auto__ = (function (){var statearr_45359 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_45359[(6)] = c__28612__auto__);

return statearr_45359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto__,map__45316,map__45316__$1,path,start_time,res,map__45311,map__45311__$1,env,profile))
);

return c__28612__auto__;
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
var or__10412__auto__ = cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.profile.node_value,cljs.core.vals(x)));
}
} else {
return x;
}
});
com.wsscode.pathom.profile.profile__GT_nvc_STAR_ = (function com$wsscode$pathom$profile$profile__GT_nvc_STAR_(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__45406_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self,cljs.core.first(p1__45406_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__45407){
var vec__45408 = p__45407;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45408,(1),null);
var G__45411 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,com.wsscode.pathom.profile.node_name(k),cljs.core.cst$kw$value,com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45411,cljs.core.cst$kw$children,(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__45411;
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
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Root",cljs.core.cst$kw$value,total,cljs.core.cst$kw$children,com.wsscode.pathom.profile.profile__GT_nvc_STAR_(data)], null);
});
com.wsscode.pathom.profile.profile__GT_flame_graph = com.wsscode.pathom.profile.profile__GT_nvc;

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
var G__45256 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__45257 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__45256,G__45257) : parser.call(null,G__45256,G__45257));
});
}),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,(function (reader){
return (function (p__45258){
var map__45259 = p__45258;
var map__45259__$1 = ((((!((map__45259 == null)))?((((map__45259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45259):map__45259);
var env = map__45259__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45259__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45259__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45268){
var vec__45269 = p__45268;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45269,(1),null);
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_processing,v));
}),m));
} else {
return null;
}
});
com.wsscode.pathom.profile.sleep = (function com$wsscode$pathom$profile$sleep(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__45272_45274 = ((function (c){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_done);
});})(c))
;
var G__45273_45275 = ms;
setTimeout(G__45272_45274,G__45273_45275);

return c;
});
com.wsscode.pathom.profile.async_wrap_profile = (function com$wsscode$pathom$profile$async_wrap_profile(f){
return (function (p__45276,k,p){
var map__45277 = p__45276;
var map__45277__$1 = ((((!((map__45277 == null)))?((((map__45277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45277):map__45277);
var env = map__45277__$1;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile);
var map__45279 = com.wsscode.pathom.core.normalize_env(env);
var map__45279__$1 = ((((!((map__45279 == null)))?((((map__45279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45279):map__45279);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45279__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(env,k,p) : f.call(null,env,k,p));
if(cljs.core.truth_(profile)){
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_processing], 0));

var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto__,map__45279,map__45279__$1,path,start_time,res,map__45277,map__45277__$1,env,profile){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto__,map__45279,map__45279__$1,path,start_time,res,map__45277,map__45277__$1,env,profile){
return (function (state_45307){
var state_val_45308 = (state_45307[(1)]);
if((state_val_45308 === (1))){
var inst_45283 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var state_45307__$1 = state_45307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45307__$1,(2),inst_45283);
} else {
if((state_val_45308 === (2))){
var inst_45285 = (state_45307[(2)]);
var state_45307__$1 = (function (){var statearr_45310 = state_45307;
(statearr_45310[(7)] = inst_45285);

return statearr_45310;
})();
var statearr_45311_45334 = state_45307__$1;
(statearr_45311_45334[(2)] = null);

(statearr_45311_45334[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45308 === (3))){
var inst_45288 = cljs.core.deref(profile);
var inst_45289 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_45288,path);
var inst_45290 = com.wsscode.pathom.profile.process_pending_QMARK_(inst_45289);
var state_45307__$1 = state_45307;
if(cljs.core.truth_(inst_45290)){
var statearr_45313_45335 = state_45307__$1;
(statearr_45313_45335[(1)] = (5));

} else {
var statearr_45314_45336 = state_45307__$1;
(statearr_45314_45336[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45308 === (4))){
var inst_45285 = (state_45307[(7)]);
var inst_45300 = (state_45307[(2)]);
var inst_45301 = com.wsscode.pathom.profile.current_time_ms();
var inst_45302 = (inst_45301 - start_time);
var inst_45303 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45302], 0));
var inst_45304 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$value,inst_45285);
var state_45307__$1 = (function (){var statearr_45316 = state_45307;
(statearr_45316[(8)] = inst_45303);

(statearr_45316[(9)] = inst_45300);

return statearr_45316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45307__$1,inst_45304);
} else {
if((state_val_45308 === (5))){
var inst_45292 = com.wsscode.pathom.profile.sleep((1));
var state_45307__$1 = state_45307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45307__$1,(8),inst_45292);
} else {
if((state_val_45308 === (6))){
var state_45307__$1 = state_45307;
var statearr_45319_45340 = state_45307__$1;
(statearr_45319_45340[(2)] = null);

(statearr_45319_45340[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45308 === (7))){
var inst_45298 = (state_45307[(2)]);
var state_45307__$1 = state_45307;
var statearr_45321_45341 = state_45307__$1;
(statearr_45321_45341[(2)] = inst_45298);

(statearr_45321_45341[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45308 === (8))){
var inst_45294 = (state_45307[(2)]);
var state_45307__$1 = (function (){var statearr_45322 = state_45307;
(statearr_45322[(10)] = inst_45294);

return statearr_45322;
})();
var statearr_45323_45342 = state_45307__$1;
(statearr_45323_45342[(2)] = null);

(statearr_45323_45342[(1)] = (3));


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
});})(c__21855__auto__,map__45279,map__45279__$1,path,start_time,res,map__45277,map__45277__$1,env,profile))
;
return ((function (switch__21492__auto__,c__21855__auto__,map__45279,map__45279__$1,path,start_time,res,map__45277,map__45277__$1,env,profile){
return (function() {
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto__ = null;
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto____0 = (function (){
var statearr_45325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45325[(0)] = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto__);

(statearr_45325[(1)] = (1));

return statearr_45325;
});
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto____1 = (function (state_45307){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_45307);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e45327){if((e45327 instanceof Object)){
var ex__21496__auto__ = e45327;
var statearr_45328_45348 = state_45307;
(statearr_45328_45348[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45307);

return cljs.core.cst$kw$recur;
} else {
throw e45327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__45354 = state_45307;
state_45307 = G__45354;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto__ = function(state_45307){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto____1.call(this,state_45307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto____0;
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto____1;
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto__,map__45279,map__45279__$1,path,start_time,res,map__45277,map__45277__$1,env,profile))
})();
var state__21857__auto__ = (function (){var statearr_45330 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_45330[(6)] = c__21855__auto__);

return statearr_45330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto__,map__45279,map__45279__$1,path,start_time,res,map__45277,map__45277__$1,env,profile))
);

return c__21855__auto__;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__45364_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self,cljs.core.first(p1__45364_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__45365){
var vec__45366 = p__45365;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45366,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45366,(1),null);
var G__45369 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,com.wsscode.pathom.profile.node_name(k),cljs.core.cst$kw$value,com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45369,cljs.core.cst$kw$children,(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__45369;
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

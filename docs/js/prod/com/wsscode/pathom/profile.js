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
com.wsscode.pathom.profile.profile_plugin = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,(function com$wsscode$pathom$profile$profile_plugin_wrap_parser(parser){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_parser_$_profile_plugin_wrap_parser_internal(env,tx){
var G__41173 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__41174 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__41173,G__41174) : parser.call(null,G__41173,G__41174));
});
}),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,(function com$wsscode$pathom$profile$profile_plugin_wrap_read(reader){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal(p__41175){
var map__41176 = p__41175;
var map__41176__$1 = ((((!((map__41176 == null)))?((((map__41176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41176):map__41176);
var env = map__41176__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41176__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41176__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile,com.wsscode.pathom.core.key_dispatch(env))){
return cljs.core.deref(profile_STAR_);
} else {
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.profile.current_time_ms() - start_time)], 0));

return res;
}
});
}),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_mutate,(function com$wsscode$pathom$profile$profile_plugin_wrap_mutate(mutate){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_mutate_$_profile_plugin_wrap_mutate_internal(p__41180,k,params){
var map__41181 = p__41180;
var map__41181__$1 = ((((!((map__41181 == null)))?((((map__41181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41181):map__41181);
var env = map__41181__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41181__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_);
var out = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : mutate.call(null,env,k,params));
var G__41185 = out;
if(cljs.core.truth_(cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(out))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__41185,cljs.core.cst$kw$action,((function (G__41185,out,map__41181,map__41181__$1,env,profile_STAR_){
return (function (action){
return ((function (G__41185,out,map__41181,map__41181__$1,env,profile_STAR_){
return (function (){
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile_STAR_,cljs.core.assoc,k,(com.wsscode.pathom.profile.current_time_ms() - start_time));

return res;
});
;})(G__41185,out,map__41181,map__41181__$1,env,profile_STAR_))
});})(G__41185,out,map__41181,map__41181__$1,env,profile_STAR_))
);
} else {
return G__41185;
}
});
})], null);
com.wsscode.pathom.profile.process_pending_QMARK_ = (function com$wsscode$pathom$profile$process_pending_QMARK_(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41195){
var vec__41196 = p__41195;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196,(1),null);
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_processing,v));
}),m));
} else {
return null;
}
});
com.wsscode.pathom.profile.sleep = (function com$wsscode$pathom$profile$sleep(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__41206_41208 = ((function (c){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_done);
});})(c))
;
var G__41207_41209 = ms;
setTimeout(G__41206_41208,G__41207_41209);

return c;
});
com.wsscode.pathom.profile.async_wrap_profile = (function com$wsscode$pathom$profile$async_wrap_profile(f){
return (function (p__41212,k,p){
var map__41213 = p__41212;
var map__41213__$1 = ((((!((map__41213 == null)))?((((map__41213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41213):map__41213);
var env = map__41213__$1;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41213__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile);
var map__41215 = com.wsscode.pathom.core.normalize_env(env);
var map__41215__$1 = ((((!((map__41215 == null)))?((((map__41215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41215):map__41215);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41215__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(env,k,p) : f.call(null,env,k,p));
if(cljs.core.truth_(profile)){
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_processing], 0));

var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto__,map__41215,map__41215__$1,path,start_time,res,map__41213,map__41213__$1,env,profile){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto__,map__41215,map__41215__$1,path,start_time,res,map__41213,map__41213__$1,env,profile){
return (function (state_41243){
var state_val_41244 = (state_41243[(1)]);
if((state_val_41244 === (1))){
var inst_41220 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var state_41243__$1 = state_41243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41243__$1,(2),inst_41220);
} else {
if((state_val_41244 === (2))){
var inst_41222 = (state_41243[(2)]);
var state_41243__$1 = (function (){var statearr_41247 = state_41243;
(statearr_41247[(7)] = inst_41222);

return statearr_41247;
})();
var statearr_41248_41278 = state_41243__$1;
(statearr_41248_41278[(2)] = null);

(statearr_41248_41278[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41244 === (3))){
var inst_41225 = cljs.core.deref(profile);
var inst_41226 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_41225,path);
var inst_41227 = com.wsscode.pathom.profile.process_pending_QMARK_(inst_41226);
var state_41243__$1 = state_41243;
if(cljs.core.truth_(inst_41227)){
var statearr_41249_41281 = state_41243__$1;
(statearr_41249_41281[(1)] = (5));

} else {
var statearr_41250_41282 = state_41243__$1;
(statearr_41250_41282[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41244 === (4))){
var inst_41222 = (state_41243[(7)]);
var inst_41237 = (state_41243[(2)]);
var inst_41238 = com.wsscode.pathom.profile.current_time_ms();
var inst_41239 = (inst_41238 - start_time);
var inst_41240 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41239], 0));
var inst_41241 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$value,inst_41222);
var state_41243__$1 = (function (){var statearr_41251 = state_41243;
(statearr_41251[(8)] = inst_41240);

(statearr_41251[(9)] = inst_41237);

return statearr_41251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41243__$1,inst_41241);
} else {
if((state_val_41244 === (5))){
var inst_41229 = com.wsscode.pathom.profile.sleep((1));
var state_41243__$1 = state_41243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41243__$1,(8),inst_41229);
} else {
if((state_val_41244 === (6))){
var state_41243__$1 = state_41243;
var statearr_41254_41291 = state_41243__$1;
(statearr_41254_41291[(2)] = null);

(statearr_41254_41291[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41244 === (7))){
var inst_41235 = (state_41243[(2)]);
var state_41243__$1 = state_41243;
var statearr_41257_41295 = state_41243__$1;
(statearr_41257_41295[(2)] = inst_41235);

(statearr_41257_41295[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41244 === (8))){
var inst_41231 = (state_41243[(2)]);
var state_41243__$1 = (function (){var statearr_41260 = state_41243;
(statearr_41260[(10)] = inst_41231);

return statearr_41260;
})();
var statearr_41261_41296 = state_41243__$1;
(statearr_41261_41296[(2)] = null);

(statearr_41261_41296[(1)] = (3));


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
});})(c__17404__auto__,map__41215,map__41215__$1,path,start_time,res,map__41213,map__41213__$1,env,profile))
;
return ((function (switch__16860__auto__,c__17404__auto__,map__41215,map__41215__$1,path,start_time,res,map__41213,map__41213__$1,env,profile){
return (function() {
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto__ = null;
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto____0 = (function (){
var statearr_41264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41264[(0)] = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto__);

(statearr_41264[(1)] = (1));

return statearr_41264;
});
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto____1 = (function (state_41243){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_41243);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e41265){if((e41265 instanceof Object)){
var ex__16864__auto__ = e41265;
var statearr_41266_41301 = state_41243;
(statearr_41266_41301[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41243);

return cljs.core.cst$kw$recur;
} else {
throw e41265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__41302 = state_41243;
state_41243 = G__41302;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto__ = function(state_41243){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto____1.call(this,state_41243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto____0;
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto____1;
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto__,map__41215,map__41215__$1,path,start_time,res,map__41213,map__41213__$1,env,profile))
})();
var state__17406__auto__ = (function (){var statearr_41270 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_41270[(6)] = c__17404__auto__);

return statearr_41270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto__,map__41215,map__41215__$1,path,start_time,res,map__41213,map__41213__$1,env,profile))
);

return c__17404__auto__;
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
var or__10805__auto__ = cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.profile.node_value,cljs.core.vals(x)));
}
} else {
return x;
}
});
com.wsscode.pathom.profile.profile__GT_nvc_STAR_ = (function com$wsscode$pathom$profile$profile__GT_nvc_STAR_(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__41306_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self,cljs.core.first(p1__41306_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__41307){
var vec__41308 = p__41307;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41308,(1),null);
var G__41311 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,com.wsscode.pathom.profile.node_name(k),cljs.core.cst$kw$value,com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41311,cljs.core.cst$kw$children,(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__41311;
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

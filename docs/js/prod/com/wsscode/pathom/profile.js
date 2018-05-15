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
var G__38841 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__38842 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__38841,G__38842) : parser.call(null,G__38841,G__38842));
});
}),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,(function com$wsscode$pathom$profile$profile_plugin_wrap_read(reader){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal(p__38843){
var map__38844 = p__38843;
var map__38844__$1 = ((((!((map__38844 == null)))?((((map__38844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38844):map__38844);
var env = map__38844__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38844__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38844__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
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
return (function com$wsscode$pathom$profile$profile_plugin_wrap_mutate_$_profile_plugin_wrap_mutate_internal(p__38847,k,params){
var map__38848 = p__38847;
var map__38848__$1 = ((((!((map__38848 == null)))?((((map__38848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38848):map__38848);
var env = map__38848__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38848__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile_STAR_);
var out = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : mutate.call(null,env,k,params));
var G__38853 = out;
if(cljs.core.truth_(cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(out))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__38853,cljs.core.cst$kw$action,((function (G__38853,out,map__38848,map__38848__$1,env,profile_STAR_){
return (function (action){
return ((function (G__38853,out,map__38848,map__38848__$1,env,profile_STAR_){
return (function (){
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile_STAR_,cljs.core.assoc,k,(com.wsscode.pathom.profile.current_time_ms() - start_time));

return res;
});
;})(G__38853,out,map__38848,map__38848__$1,env,profile_STAR_))
});})(G__38853,out,map__38848,map__38848__$1,env,profile_STAR_))
);
} else {
return G__38853;
}
});
})], null);
com.wsscode.pathom.profile.process_pending_QMARK_ = (function com$wsscode$pathom$profile$process_pending_QMARK_(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38865){
var vec__38866 = p__38865;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38866,(1),null);
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_processing,v));
}),m));
} else {
return null;
}
});
com.wsscode.pathom.profile.sleep = (function com$wsscode$pathom$profile$sleep(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__38882_38887 = ((function (c){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_done);
});})(c))
;
var G__38883_38888 = ms;
setTimeout(G__38882_38887,G__38883_38888);

return c;
});
com.wsscode.pathom.profile.async_wrap_profile = (function com$wsscode$pathom$profile$async_wrap_profile(f){
return (function (p__38894,k,p){
var map__38903 = p__38894;
var map__38903__$1 = ((((!((map__38903 == null)))?((((map__38903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38903):map__38903);
var env = map__38903__$1;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38903__$1,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile);
var map__38911 = com.wsscode.pathom.core.normalize_env(env);
var map__38911__$1 = ((((!((map__38911 == null)))?((((map__38911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38911):map__38911);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(env,k,p) : f.call(null,env,k,p));
if(cljs.core.truth_(profile)){
if(cljs.core.truth_(com.wsscode.pathom.async.chan_QMARK_(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_processing], 0));

var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto__,map__38911,map__38911__$1,path,start_time,res,map__38903,map__38903__$1,env,profile){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto__,map__38911,map__38911__$1,path,start_time,res,map__38903,map__38903__$1,env,profile){
return (function (state_38941){
var state_val_38942 = (state_38941[(1)]);
if((state_val_38942 === (1))){
var inst_38919 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var state_38941__$1 = state_38941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38941__$1,(2),inst_38919);
} else {
if((state_val_38942 === (2))){
var inst_38921 = (state_38941[(2)]);
var state_38941__$1 = (function (){var statearr_38946 = state_38941;
(statearr_38946[(7)] = inst_38921);

return statearr_38946;
})();
var statearr_38947_38984 = state_38941__$1;
(statearr_38947_38984[(2)] = null);

(statearr_38947_38984[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38942 === (3))){
var inst_38923 = cljs.core.deref(profile);
var inst_38924 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_38923,path);
var inst_38925 = com.wsscode.pathom.profile.process_pending_QMARK_(inst_38924);
var state_38941__$1 = state_38941;
if(cljs.core.truth_(inst_38925)){
var statearr_38949_38986 = state_38941__$1;
(statearr_38949_38986[(1)] = (5));

} else {
var statearr_38950_38987 = state_38941__$1;
(statearr_38950_38987[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_38942 === (4))){
var inst_38921 = (state_38941[(7)]);
var inst_38935 = (state_38941[(2)]);
var inst_38936 = com.wsscode.pathom.profile.current_time_ms();
var inst_38937 = (inst_38936 - start_time);
var inst_38938 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_38937], 0));
var inst_38939 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$value,inst_38921);
var state_38941__$1 = (function (){var statearr_38953 = state_38941;
(statearr_38953[(8)] = inst_38935);

(statearr_38953[(9)] = inst_38938);

return statearr_38953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38941__$1,inst_38939);
} else {
if((state_val_38942 === (5))){
var inst_38927 = com.wsscode.pathom.profile.sleep((1));
var state_38941__$1 = state_38941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38941__$1,(8),inst_38927);
} else {
if((state_val_38942 === (6))){
var state_38941__$1 = state_38941;
var statearr_38955_38988 = state_38941__$1;
(statearr_38955_38988[(2)] = null);

(statearr_38955_38988[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38942 === (7))){
var inst_38933 = (state_38941[(2)]);
var state_38941__$1 = state_38941;
var statearr_38956_38989 = state_38941__$1;
(statearr_38956_38989[(2)] = inst_38933);

(statearr_38956_38989[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_38942 === (8))){
var inst_38929 = (state_38941[(2)]);
var state_38941__$1 = (function (){var statearr_38957 = state_38941;
(statearr_38957[(10)] = inst_38929);

return statearr_38957;
})();
var statearr_38958_38990 = state_38941__$1;
(statearr_38958_38990[(2)] = null);

(statearr_38958_38990[(1)] = (3));


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
});})(c__21787__auto__,map__38911,map__38911__$1,path,start_time,res,map__38903,map__38903__$1,env,profile))
;
return ((function (switch__21538__auto__,c__21787__auto__,map__38911,map__38911__$1,path,start_time,res,map__38903,map__38903__$1,env,profile){
return (function() {
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto__ = null;
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto____0 = (function (){
var statearr_38960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38960[(0)] = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto__);

(statearr_38960[(1)] = (1));

return statearr_38960;
});
var com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto____1 = (function (state_38941){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_38941);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e38964){if((e38964 instanceof Object)){
var ex__21542__auto__ = e38964;
var statearr_38965_38991 = state_38941;
(statearr_38965_38991[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38941);

return cljs.core.cst$kw$recur;
} else {
throw e38964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__38997 = state_38941;
state_38941 = G__38997;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto__ = function(state_38941){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto____1.call(this,state_38941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto____0;
com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto____1;
return com$wsscode$pathom$profile$async_wrap_profile_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto__,map__38911,map__38911__$1,path,start_time,res,map__38903,map__38903__$1,env,profile))
})();
var state__21789__auto__ = (function (){var statearr_38971 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_38971[(6)] = c__21787__auto__);

return statearr_38971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto__,map__38911,map__38911__$1,path,start_time,res,map__38903,map__38903__$1,env,profile))
);

return c__21787__auto__;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__39035_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_self,cljs.core.first(p1__39035_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__39038){
var vec__39039 = p__39038;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39039,(1),null);
var G__39043 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,com.wsscode.pathom.profile.node_name(k),cljs.core.cst$kw$value,com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39043,cljs.core.cst$kw$children,(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__39043;
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

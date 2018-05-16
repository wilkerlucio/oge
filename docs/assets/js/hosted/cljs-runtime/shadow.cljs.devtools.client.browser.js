goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if(typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if(typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if(typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___48175 = arguments.length;
var i__4500__auto___48176 = (0);
while(true){
if((i__4500__auto___48176 < len__4499__auto___48175)){
args__4502__auto__.push((arguments[i__4500__auto___48176]));

var G__48177 = (i__4500__auto___48176 + (1));
i__4500__auto___48176 = G__48177;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq48173){
var G__48174 = cljs.core.first(seq48173);
var seq48173__$1 = cljs.core.next(seq48173);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48174,seq48173__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if(typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__48178){
var map__48179 = p__48178;
var map__48179__$1 = ((((!((map__48179 == null)))?(((((map__48179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48179):map__48179);
var src = map__48179__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48179__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48179__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
/**
 * js/eval doesn't get optimized properly, this hack seems to do the trick
 */
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
var node = document.createElement("script");
node.appendChild(document.createTextNode(code));

document.body.appendChild(node);

return document.body.removeChild(node);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__48181 = cljs.core.seq(sources);
var chunk__48182 = null;
var count__48183 = (0);
var i__48184 = (0);
while(true){
if((i__48184 < count__48183)){
var map__48185 = chunk__48182.cljs$core$IIndexed$_nth$arity$2(null,i__48184);
var map__48185__$1 = ((((!((map__48185 == null)))?(((((map__48185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48185):map__48185);
var src = map__48185__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48185__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48185__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48185__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48185__$1,new cljs.core.Keyword(null,"js","js",1768080579));
SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__48189 = seq__48181;
var G__48190 = chunk__48182;
var G__48191 = count__48183;
var G__48192 = (i__48184 + (1));
seq__48181 = G__48189;
chunk__48182 = G__48190;
count__48183 = G__48191;
i__48184 = G__48192;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__48181);
if(temp__5457__auto__){
var seq__48181__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48181__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__48181__$1);
var G__48193 = cljs.core.chunk_rest(seq__48181__$1);
var G__48194 = c__4319__auto__;
var G__48195 = cljs.core.count(c__4319__auto__);
var G__48196 = (0);
seq__48181 = G__48193;
chunk__48182 = G__48194;
count__48183 = G__48195;
i__48184 = G__48196;
continue;
} else {
var map__48187 = cljs.core.first(seq__48181__$1);
var map__48187__$1 = ((((!((map__48187 == null)))?(((((map__48187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48187):map__48187);
var src = map__48187__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48187__$1,new cljs.core.Keyword(null,"js","js",1768080579));
SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__48197 = cljs.core.next(seq__48181__$1);
var G__48198 = null;
var G__48199 = (0);
var G__48200 = (0);
seq__48181 = G__48197;
chunk__48182 = G__48198;
count__48183 = G__48199;
i__48184 = G__48200;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__48201 = cljs.core.seq(js_requires);
var chunk__48202 = null;
var count__48203 = (0);
var i__48204 = (0);
while(true){
if((i__48204 < count__48203)){
var js_ns = chunk__48202.cljs$core$IIndexed$_nth$arity$2(null,i__48204);
var require_str_48205 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48205);


var G__48206 = seq__48201;
var G__48207 = chunk__48202;
var G__48208 = count__48203;
var G__48209 = (i__48204 + (1));
seq__48201 = G__48206;
chunk__48202 = G__48207;
count__48203 = G__48208;
i__48204 = G__48209;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__48201);
if(temp__5457__auto__){
var seq__48201__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48201__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__48201__$1);
var G__48210 = cljs.core.chunk_rest(seq__48201__$1);
var G__48211 = c__4319__auto__;
var G__48212 = cljs.core.count(c__4319__auto__);
var G__48213 = (0);
seq__48201 = G__48210;
chunk__48202 = G__48211;
count__48203 = G__48212;
i__48204 = G__48213;
continue;
} else {
var js_ns = cljs.core.first(seq__48201__$1);
var require_str_48214 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48214);


var G__48215 = cljs.core.next(seq__48201__$1);
var G__48216 = null;
var G__48217 = (0);
var G__48218 = (0);
seq__48201 = G__48215;
chunk__48202 = G__48216;
count__48203 = G__48217;
i__48204 = G__48218;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__48219 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__48219) : callback.call(null,G__48219));
} else {
var G__48220 = shadow.cljs.devtools.client.env.files_url();
var G__48221 = ((function (G__48220){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__48220))
;
var G__48222 = "POST";
var G__48223 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__48224 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__48220,G__48221,G__48222,G__48223,G__48224);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__48226){
var map__48227 = p__48226;
var map__48227__$1 = ((((!((map__48227 == null)))?(((((map__48227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48227):map__48227);
var msg = map__48227__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48227__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48227__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__48229 = info;
var map__48229__$1 = ((((!((map__48229 == null)))?(((((map__48229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48229):map__48229);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48229__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48229__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__48229,map__48229__$1,sources,compiled,map__48227,map__48227__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48231(s__48232){
return (new cljs.core.LazySeq(null,((function (map__48229,map__48229__$1,sources,compiled,map__48227,map__48227__$1,msg,info,reload_info){
return (function (){
var s__48232__$1 = s__48232;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__48232__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__48237 = cljs.core.first(xs__6012__auto__);
var map__48237__$1 = ((((!((map__48237 == null)))?(((((map__48237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48237):map__48237);
var src = map__48237__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48237__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48237__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__48232__$1,map__48237,map__48237__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__48229,map__48229__$1,sources,compiled,map__48227,map__48227__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48231_$_iter__48233(s__48234){
return (new cljs.core.LazySeq(null,((function (s__48232__$1,map__48237,map__48237__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__48229,map__48229__$1,sources,compiled,map__48227,map__48227__$1,msg,info,reload_info){
return (function (){
var s__48234__$1 = s__48234;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__48234__$1);
if(temp__5457__auto____$1){
var s__48234__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48234__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__48234__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__48236 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__48235 = (0);
while(true){
if((i__48235 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__48235);
cljs.core.chunk_append(b__48236,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48256 = (i__48235 + (1));
i__48235 = G__48256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48236),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48231_$_iter__48233(cljs.core.chunk_rest(s__48234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48236),null);
}
} else {
var warning = cljs.core.first(s__48234__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48231_$_iter__48233(cljs.core.rest(s__48234__$2)));
}
} else {
return null;
}
break;
}
});})(s__48232__$1,map__48237,map__48237__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__48229,map__48229__$1,sources,compiled,map__48227,map__48227__$1,msg,info,reload_info))
,null,null));
});})(s__48232__$1,map__48237,map__48237__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__48229,map__48229__$1,sources,compiled,map__48227,map__48227__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48231(cljs.core.rest(s__48232__$1)));
} else {
var G__48257 = cljs.core.rest(s__48232__$1);
s__48232__$1 = G__48257;
continue;
}
} else {
var G__48258 = cljs.core.rest(s__48232__$1);
s__48232__$1 = G__48258;
continue;
}
} else {
return null;
}
break;
}
});})(map__48229,map__48229__$1,sources,compiled,map__48227,map__48227__$1,msg,info,reload_info))
,null,null));
});})(map__48229,map__48229__$1,sources,compiled,map__48227,map__48227__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
var seq__48239_48259 = cljs.core.seq(warnings);
var chunk__48240_48260 = null;
var count__48241_48261 = (0);
var i__48242_48262 = (0);
while(true){
if((i__48242_48262 < count__48241_48261)){
var map__48243_48263 = chunk__48240_48260.cljs$core$IIndexed$_nth$arity$2(null,i__48242_48262);
var map__48243_48264__$1 = ((((!((map__48243_48263 == null)))?(((((map__48243_48263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48243_48263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48243_48263):map__48243_48263);
var w_48265 = map__48243_48264__$1;
var msg_48266__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48243_48264__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48243_48264__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48243_48264__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48243_48264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48269)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48267),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48268),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48266__$1)].join(''));


var G__48270 = seq__48239_48259;
var G__48271 = chunk__48240_48260;
var G__48272 = count__48241_48261;
var G__48273 = (i__48242_48262 + (1));
seq__48239_48259 = G__48270;
chunk__48240_48260 = G__48271;
count__48241_48261 = G__48272;
i__48242_48262 = G__48273;
continue;
} else {
var temp__5457__auto___48274 = cljs.core.seq(seq__48239_48259);
if(temp__5457__auto___48274){
var seq__48239_48275__$1 = temp__5457__auto___48274;
if(cljs.core.chunked_seq_QMARK_(seq__48239_48275__$1)){
var c__4319__auto___48276 = cljs.core.chunk_first(seq__48239_48275__$1);
var G__48277 = cljs.core.chunk_rest(seq__48239_48275__$1);
var G__48278 = c__4319__auto___48276;
var G__48279 = cljs.core.count(c__4319__auto___48276);
var G__48280 = (0);
seq__48239_48259 = G__48277;
chunk__48240_48260 = G__48278;
count__48241_48261 = G__48279;
i__48242_48262 = G__48280;
continue;
} else {
var map__48245_48281 = cljs.core.first(seq__48239_48275__$1);
var map__48245_48282__$1 = ((((!((map__48245_48281 == null)))?(((((map__48245_48281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48245_48281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48245_48281):map__48245_48281);
var w_48283 = map__48245_48282__$1;
var msg_48284__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48245_48282__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48245_48282__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48245_48282__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48245_48282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48287)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48285),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48286),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48284__$1)].join(''));


var G__48288 = cljs.core.next(seq__48239_48275__$1);
var G__48289 = null;
var G__48290 = (0);
var G__48291 = (0);
seq__48239_48259 = G__48288;
chunk__48240_48260 = G__48289;
count__48241_48261 = G__48290;
i__48242_48262 = G__48291;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__48229,map__48229__$1,sources,compiled,warnings,map__48227,map__48227__$1,msg,info,reload_info){
return (function (p__48247){
var map__48248 = p__48247;
var map__48248__$1 = ((((!((map__48248 == null)))?(((((map__48248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48248):map__48248);
var src = map__48248__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48248__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48248__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__48229,map__48229__$1,sources,compiled,warnings,map__48227,map__48227__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__48229,map__48229__$1,sources,compiled,warnings,map__48227,map__48227__$1,msg,info,reload_info){
return (function (p__48250){
var map__48251 = p__48250;
var map__48251__$1 = ((((!((map__48251 == null)))?(((((map__48251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48251):map__48251);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48251__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__48229,map__48229__$1,sources,compiled,warnings,map__48227,map__48227__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__48229,map__48229__$1,sources,compiled,warnings,map__48227,map__48227__$1,msg,info,reload_info){
return (function (p__48253){
var map__48254 = p__48253;
var map__48254__$1 = ((((!((map__48254 == null)))?(((((map__48254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48254):map__48254);
var rc = map__48254__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48254__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__48229,map__48229__$1,sources,compiled,warnings,map__48227,map__48227__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__48229,map__48229__$1,sources,compiled,warnings,map__48227,map__48227__$1,msg,info,reload_info){
return (function (p1__48225_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48225_SHARP_,shadow.cljs.devtools.client.hud.load_end_success);
});})(sources_to_get,map__48229,map__48229__$1,sources,compiled,warnings,map__48227,map__48227__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__48292){
var map__48293 = p__48292;
var map__48293__$1 = ((((!((map__48293 == null)))?(((((map__48293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48293):map__48293);
var msg = map__48293__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48293__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__48295 = cljs.core.seq(updates);
var chunk__48297 = null;
var count__48298 = (0);
var i__48299 = (0);
while(true){
if((i__48299 < count__48298)){
var path = chunk__48297.cljs$core$IIndexed$_nth$arity$2(null,i__48299);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___48303 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___48303)){
var node_48304 = temp__5457__auto___48303;
var new_link_48305 = (function (){var G__48301 = document.createElement("link");
G__48301.setAttribute("rel","stylesheet");

G__48301.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48301;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_48305,node_48304);

goog.dom.removeNode(node_48304);
} else {
}


var G__48306 = seq__48295;
var G__48307 = chunk__48297;
var G__48308 = count__48298;
var G__48309 = (i__48299 + (1));
seq__48295 = G__48306;
chunk__48297 = G__48307;
count__48298 = G__48308;
i__48299 = G__48309;
continue;
} else {
var G__48310 = seq__48295;
var G__48311 = chunk__48297;
var G__48312 = count__48298;
var G__48313 = (i__48299 + (1));
seq__48295 = G__48310;
chunk__48297 = G__48311;
count__48298 = G__48312;
i__48299 = G__48313;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__48295);
if(temp__5457__auto__){
var seq__48295__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48295__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__48295__$1);
var G__48314 = cljs.core.chunk_rest(seq__48295__$1);
var G__48315 = c__4319__auto__;
var G__48316 = cljs.core.count(c__4319__auto__);
var G__48317 = (0);
seq__48295 = G__48314;
chunk__48297 = G__48315;
count__48298 = G__48316;
i__48299 = G__48317;
continue;
} else {
var path = cljs.core.first(seq__48295__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___48318__$1 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___48318__$1)){
var node_48319 = temp__5457__auto___48318__$1;
var new_link_48320 = (function (){var G__48302 = document.createElement("link");
G__48302.setAttribute("rel","stylesheet");

G__48302.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48302;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_48320,node_48319);

goog.dom.removeNode(node_48319);
} else {
}


var G__48321 = cljs.core.next(seq__48295__$1);
var G__48322 = null;
var G__48323 = (0);
var G__48324 = (0);
seq__48295 = G__48321;
chunk__48297 = G__48322;
count__48298 = G__48323;
i__48299 = G__48324;
continue;
} else {
var G__48325 = cljs.core.next(seq__48295__$1);
var G__48326 = null;
var G__48327 = (0);
var G__48328 = (0);
seq__48295 = G__48325;
chunk__48297 = G__48326;
count__48298 = G__48327;
i__48299 = G__48328;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__48329){
var map__48330 = p__48329;
var map__48330__$1 = ((((!((map__48330 == null)))?(((((map__48330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48330):map__48330);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48330__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48330__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__48330,map__48330__$1,id,js){
return (function (){
return eval(js);
});})(map__48330,map__48330__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__48332){
var map__48333 = p__48332;
var map__48333__$1 = ((((!((map__48333 == null)))?(((((map__48333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48333):map__48333);
var msg = map__48333__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48333__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48333__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48333__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48333__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__48333,map__48333__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__48335){
var map__48336 = p__48335;
var map__48336__$1 = ((((!((map__48336 == null)))?(((((map__48336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48336):map__48336);
var src = map__48336__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48336__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3911__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3911__auto__;
}
});})(map__48333,map__48333__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__48333,map__48333__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__48333,map__48333__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__48338){
var map__48339 = p__48338;
var map__48339__$1 = ((((!((map__48339 == null)))?(((((map__48339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48339):map__48339);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__48339,map__48339__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__48339,map__48339__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__48341){
var map__48342 = p__48341;
var map__48342__$1 = ((((!((map__48342 == null)))?(((((map__48342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48342):map__48342);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48342__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48342__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__48344){
var map__48345 = p__48344;
var map__48345__$1 = ((((!((map__48345 == null)))?(((((map__48345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48345):map__48345);
var msg = map__48345__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48345__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__48347 = type;
var G__48347__$1 = (((G__48347 instanceof cljs.core.Keyword))?G__48347.fqn:null);
switch (G__48347__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__48349 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__48350 = ((function (G__48349){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__48349))
;
var G__48351 = "POST";
var G__48352 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__48353 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__48349,G__48350,G__48351,G__48352,G__48353);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3922__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___48360 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___48360)){
var s_48361 = temp__5457__auto___48360;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_48361.onclose = ((function (s_48361,temp__5457__auto___48360){
return (function (e){
return null;
});})(s_48361,temp__5457__auto___48360))
;

s_48361.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

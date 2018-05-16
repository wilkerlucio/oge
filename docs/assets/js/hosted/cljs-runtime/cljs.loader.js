goog.provide('cljs.loader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager');
cljs.loader.module_infos = cljs.core.PersistentArrayMap.EMPTY;
cljs.loader.module_uris = cljs.core.PersistentArrayMap.EMPTY;
cljs.loader.deps_for = (function cljs$loader$deps_for(x,graph){
var depends_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,x);
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (depends_on){
return (function (p1__27074_SHARP_){
return (cljs.loader.deps_for.cljs$core$IFn$_invoke$arity$2 ? cljs.loader.deps_for.cljs$core$IFn$_invoke$arity$2(p1__27074_SHARP_,graph) : cljs.loader.deps_for.call(null,p1__27074_SHARP_,graph));
});})(depends_on))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([depends_on], 0)),depends_on)));
});
cljs.loader.munge_kw = (function cljs$loader$munge_kw(x){
var G__27079 = x;
if((x instanceof cljs.core.Keyword)){
return cljs.core.munge(cljs.core.name(G__27079));
} else {
return G__27079;
}
});
cljs.loader.to_js = (function cljs$loader$to_js(m){
return cljs.core.reduce_kv((function (ret,k,xs){
var arr = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.loader.munge_kw,xs));
var G__27092 = ret;
var G__27093_27100 = G__27092;
var G__27094_27101 = cljs.core.munge(cljs.core.name(k));
var G__27095_27102 = arr;
goog.object.set(G__27093_27100,G__27094_27101,G__27095_27102);

return G__27092;
}),({}),m);
});
cljs.loader.create_module_manager = (function cljs$loader$create_module_manager(){
var mm = (new goog.module.ModuleManager());
var ml = (new goog.module.ModuleLoader());
mm.setLoader(ml);

return mm;
});
if(typeof cljs.loader._STAR_module_manager_STAR_ !== 'undefined'){
} else {
cljs.loader._STAR_module_manager_STAR_ = cljs.loader.create_module_manager();
}
cljs.loader._STAR_module_manager_STAR_.setAllModuleInfo(cljs.loader.to_js(cljs.loader.module_infos));
cljs.loader._STAR_module_manager_STAR_.setModuleUris(cljs.loader.to_js(cljs.loader.module_uris));
/**
 * Return true if modules is loaded. module-name should be a keyword matching
 * a :modules module definition.
 */
cljs.loader.loaded_QMARK_ = (function cljs$loader$loaded_QMARK_(module_name){
if(cljs.core.contains_QMARK_(cljs.loader.module_infos,module_name)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)," does not exist"].join('')),"\n","(contains? module-infos module-name)"].join('')));
}

var mname = cljs.core.munge(cljs.core.name(module_name));
var module = cljs.loader._STAR_module_manager_STAR_.getModuleInfo(mname);
if(!((module == null))){
return module.isLoaded();
} else {
return null;
}
});
/**
 * Load a module. module-name should be a keyword matching a :modules module
 * definition.
 */
cljs.loader.load = (function cljs$loader$load(var_args){
var G__27164 = arguments.length;
switch (G__27164) {
case 1:
return cljs.loader.load.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.loader.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.loader.load.cljs$core$IFn$_invoke$arity$1 = (function (module_name){
return cljs.loader.load.cljs$core$IFn$_invoke$arity$2(module_name,null);
});

cljs.loader.load.cljs$core$IFn$_invoke$arity$2 = (function (module_name,cb){
if(cljs.core.contains_QMARK_(cljs.loader.module_infos,module_name)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)," does not exist"].join('')),"\n","(contains? module-infos module-name)"].join('')));
}

var mname = cljs.core.munge(cljs.core.name(module_name));
if(!((cb == null))){
return cljs.loader._STAR_module_manager_STAR_.execOnLoad(mname,cb);
} else {
return cljs.loader._STAR_module_manager_STAR_.load(mname);
}
});

cljs.loader.load.cljs$lang$maxFixedArity = 2;

/**
 * Set a module as being loaded. module-name should be a keyword matching a
 *   :modules module definition. Will mark all parent modules as also being
 *   loaded.
 */
cljs.loader.set_loaded_BANG_ = (function cljs$loader$set_loaded_BANG_(module_name){
if(cljs.core.contains_QMARK_(cljs.loader.module_infos,module_name)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)," does not exist"].join('')),"\n","(contains? module-infos module-name)"].join('')));
}

var xs = cljs.loader.deps_for(module_name,cljs.loader.module_infos);
var seq__27198_27214 = cljs.core.seq(xs);
var chunk__27199_27215 = null;
var count__27200_27216 = (0);
var i__27201_27217 = (0);
while(true){
if((i__27201_27217 < count__27200_27216)){
var x_27218 = chunk__27199_27215.cljs$core$IIndexed$_nth$arity$2(null,i__27201_27217);
cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw(x_27218));


var G__27220 = seq__27198_27214;
var G__27221 = chunk__27199_27215;
var G__27222 = count__27200_27216;
var G__27223 = (i__27201_27217 + (1));
seq__27198_27214 = G__27220;
chunk__27199_27215 = G__27221;
count__27200_27216 = G__27222;
i__27201_27217 = G__27223;
continue;
} else {
var temp__5457__auto___27225 = cljs.core.seq(seq__27198_27214);
if(temp__5457__auto___27225){
var seq__27198_27226__$1 = temp__5457__auto___27225;
if(cljs.core.chunked_seq_QMARK_(seq__27198_27226__$1)){
var c__4319__auto___27230 = cljs.core.chunk_first(seq__27198_27226__$1);
var G__27231 = cljs.core.chunk_rest(seq__27198_27226__$1);
var G__27232 = c__4319__auto___27230;
var G__27233 = cljs.core.count(c__4319__auto___27230);
var G__27234 = (0);
seq__27198_27214 = G__27231;
chunk__27199_27215 = G__27232;
count__27200_27216 = G__27233;
i__27201_27217 = G__27234;
continue;
} else {
var x_27235 = cljs.core.first(seq__27198_27226__$1);
cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw(x_27235));


var G__27236 = cljs.core.next(seq__27198_27226__$1);
var G__27237 = null;
var G__27238 = (0);
var G__27239 = (0);
seq__27198_27214 = G__27236;
chunk__27199_27215 = G__27237;
count__27200_27216 = G__27238;
i__27201_27217 = G__27239;
continue;
}
} else {
}
}
break;
}

return cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw(module_name));
});
/**
 * Prefetch a module. module-name should be a keyword matching a :modules
 *   module definition. Will download the module but not evaluate it. To
 *   complete module load, one must also call cljs.loader/load after prefetching
 *   the module. Does nothing if the module is loading or has been loaded.
 */
cljs.loader.prefetch = (function cljs$loader$prefetch(module_name){
if(cljs.core.contains_QMARK_(cljs.loader.module_infos,module_name)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)," does not exist"].join('')),"\n","(contains? module-infos module-name)"].join('')));
}

if(cljs.core.truth_(cljs.loader.loaded_QMARK_(module_name))){
return null;
} else {
var mname = cljs.core.munge(cljs.core.name(module_name));
if(cljs.core.truth_(cljs.loader._STAR_module_manager_STAR_.isModuleLoading(mname))){
return null;
} else {
return cljs.loader._STAR_module_manager_STAR_.prefetchModule(mname);
}
}
});

//# sourceMappingURL=cljs.loader.js.map

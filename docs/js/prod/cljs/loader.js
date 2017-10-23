// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :cache-key "D1921CD4E4408F5E917C850642612C62B0344CA6"}
goog.provide('cljs.loader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager');
cljs.loader.module_infos = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-base","cljs-base",-1271626984),cljs.core.PersistentVector.EMPTY], null);
cljs.loader.module_uris = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-base","cljs-base",-1271626984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/js/prod/cljs_base.js"], null)], null);
cljs.loader.deps_for = (function cljs$loader$deps_for(x,graph){
var depends_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,x);
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (depends_on){
return (function (p1__49068_SHARP_){
return (cljs.loader.deps_for.cljs$core$IFn$_invoke$arity$2 ? cljs.loader.deps_for.cljs$core$IFn$_invoke$arity$2(p1__49068_SHARP_,graph) : cljs.loader.deps_for.call(null,p1__49068_SHARP_,graph));
});})(depends_on))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([depends_on], 0)),depends_on)));
});
cljs.loader.munge_kw = (function cljs$loader$munge_kw(x){
var G__49069 = x;
if((x instanceof cljs.core.Keyword)){
return cljs.core.munge(cljs.core.name(G__49069));
} else {
return G__49069;
}
});
cljs.loader.to_js = (function cljs$loader$to_js(m){
return cljs.core.reduce_kv((function (ret,k,xs){
var arr = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.loader.munge_kw,xs));
var G__49070 = ret;
var G__49071_49074 = G__49070;
var G__49072_49075 = cljs.core.munge(cljs.core.name(k));
var G__49073_49076 = arr;
goog.object.set(G__49071_49074,G__49072_49075,G__49073_49076);

return G__49070;
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
var G__49078 = arguments.length;
switch (G__49078) {
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
 *   loaded. Note that calls to this function will be automatically generated
 *   as the final expression for known :modules entry points that require the
 *   cljs.loader namespace.
 */
cljs.loader.set_loaded_BANG_ = (function cljs$loader$set_loaded_BANG_(module_name){
if(cljs.core.contains_QMARK_(cljs.loader.module_infos,module_name)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)," does not exist"].join('')),"\n","(contains? module-infos module-name)"].join('')));
}

var xs = cljs.loader.deps_for(module_name,cljs.loader.module_infos);
var seq__49080_49084 = cljs.core.seq(xs);
var chunk__49081_49085 = null;
var count__49082_49086 = (0);
var i__49083_49087 = (0);
while(true){
if((i__49083_49087 < count__49082_49086)){
var x_49088 = chunk__49081_49085.cljs$core$IIndexed$_nth$arity$2(null,i__49083_49087);
cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw(x_49088));

var G__49089 = seq__49080_49084;
var G__49090 = chunk__49081_49085;
var G__49091 = count__49082_49086;
var G__49092 = (i__49083_49087 + (1));
seq__49080_49084 = G__49089;
chunk__49081_49085 = G__49090;
count__49082_49086 = G__49091;
i__49083_49087 = G__49092;
continue;
} else {
var temp__5459__auto___49093 = cljs.core.seq(seq__49080_49084);
if(temp__5459__auto___49093){
var seq__49080_49094__$1 = temp__5459__auto___49093;
if(cljs.core.chunked_seq_QMARK_(seq__49080_49094__$1)){
var c__11343__auto___49095 = cljs.core.chunk_first(seq__49080_49094__$1);
var G__49096 = cljs.core.chunk_rest(seq__49080_49094__$1);
var G__49097 = c__11343__auto___49095;
var G__49098 = cljs.core.count(c__11343__auto___49095);
var G__49099 = (0);
seq__49080_49084 = G__49096;
chunk__49081_49085 = G__49097;
count__49082_49086 = G__49098;
i__49083_49087 = G__49099;
continue;
} else {
var x_49100 = cljs.core.first(seq__49080_49094__$1);
cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw(x_49100));

var G__49101 = cljs.core.next(seq__49080_49094__$1);
var G__49102 = null;
var G__49103 = (0);
var G__49104 = (0);
seq__49080_49084 = G__49101;
chunk__49081_49085 = G__49102;
count__49082_49086 = G__49103;
i__49083_49087 = G__49104;
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

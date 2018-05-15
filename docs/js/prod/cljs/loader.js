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
return (function (p1__41053_SHARP_){
return (cljs.loader.deps_for.cljs$core$IFn$_invoke$arity$2 ? cljs.loader.deps_for.cljs$core$IFn$_invoke$arity$2(p1__41053_SHARP_,graph) : cljs.loader.deps_for.call(null,p1__41053_SHARP_,graph));
});})(depends_on))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([depends_on], 0)),depends_on)));
});
cljs.loader.munge_kw = (function cljs$loader$munge_kw(x){
var G__41054 = x;
if((x instanceof cljs.core.Keyword)){
return cljs.core.munge(cljs.core.name(G__41054));
} else {
return G__41054;
}
});
cljs.loader.to_js = (function cljs$loader$to_js(m){
return cljs.core.reduce_kv((function (ret,k,xs){
var arr = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.loader.munge_kw,xs));
var G__41055 = ret;
var G__41056_41059 = G__41055;
var G__41057_41060 = cljs.core.munge(cljs.core.name(k));
var G__41058_41061 = arr;
goog.object.set(G__41056_41059,G__41057_41060,G__41058_41061);

return G__41055;
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
var G__41063 = arguments.length;
switch (G__41063) {
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
var seq__41065_41069 = cljs.core.seq(xs);
var chunk__41066_41070 = null;
var count__41067_41071 = (0);
var i__41068_41072 = (0);
while(true){
if((i__41068_41072 < count__41067_41071)){
var x_41073 = chunk__41066_41070.cljs$core$IIndexed$_nth$arity$2(null,i__41068_41072);
cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw(x_41073));

var G__41074 = seq__41065_41069;
var G__41075 = chunk__41066_41070;
var G__41076 = count__41067_41071;
var G__41077 = (i__41068_41072 + (1));
seq__41065_41069 = G__41074;
chunk__41066_41070 = G__41075;
count__41067_41071 = G__41076;
i__41068_41072 = G__41077;
continue;
} else {
var temp__5457__auto___41078 = cljs.core.seq(seq__41065_41069);
if(temp__5457__auto___41078){
var seq__41065_41079__$1 = temp__5457__auto___41078;
if(cljs.core.chunked_seq_QMARK_(seq__41065_41079__$1)){
var c__11736__auto___41080 = cljs.core.chunk_first(seq__41065_41079__$1);
var G__41081 = cljs.core.chunk_rest(seq__41065_41079__$1);
var G__41082 = c__11736__auto___41080;
var G__41083 = cljs.core.count(c__11736__auto___41080);
var G__41084 = (0);
seq__41065_41069 = G__41081;
chunk__41066_41070 = G__41082;
count__41067_41071 = G__41083;
i__41068_41072 = G__41084;
continue;
} else {
var x_41085 = cljs.core.first(seq__41065_41079__$1);
cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw(x_41085));

var G__41086 = cljs.core.next(seq__41065_41079__$1);
var G__41087 = null;
var G__41088 = (0);
var G__41089 = (0);
seq__41065_41069 = G__41086;
chunk__41066_41070 = G__41087;
count__41067_41071 = G__41088;
i__41068_41072 = G__41089;
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

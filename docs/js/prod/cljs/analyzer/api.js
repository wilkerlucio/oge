// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.analyzer.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.env');
goog.require('cljs.analyzer');
/**
 * Creates an empty compilation state Atom<Map>.
 */
cljs.analyzer.api.empty_state = (function cljs$analyzer$api$empty_state(){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
});
var ret__11737__auto___21575 = /**
 * Run the body with the given compilation state Atom<Map>.
 */
cljs.analyzer.api.with_state = (function cljs$analyzer$api$with_state(_AMPERSAND_form,_AMPERSAND_env,state,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$env_SLASH_with_DASH_compiler_DASH_env),(function (){var x__11366__auto__ = state;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});
cljs.analyzer.api.with_state.cljs$lang$macro = true;

/**
 * Creates an empty analysis environment.
 */
cljs.analyzer.api.empty_env = (function cljs$analyzer$api$empty_env(){
return cljs.analyzer.empty_env();
});
var ret__11737__auto___21631 = (function (){
/**
 * Disable analyzer warnings for any analysis executed in body.
 */
cljs.analyzer.api.no_warn = (function cljs$analyzer$api$no_warn(var_args){
var args__11698__auto__ = [];
var len__11691__auto___21632 = arguments.length;
var i__11692__auto___21633 = (0);
while(true){
if((i__11692__auto___21633 < len__11691__auto___21632)){
args__11698__auto__.push((arguments[i__11692__auto___21633]));

var G__21634 = (i__11692__auto___21633 + (1));
i__11692__auto___21633 = G__21634;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var no_warnings = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$analyzer_SLASH__STAR_cljs_DASH_warnings_STAR_),(function (){var x__11366__auto__ = no_warnings;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.analyzer.api.no_warn.cljs$lang$maxFixedArity = (2);

cljs.analyzer.api.no_warn.cljs$lang$applyTo = (function (seq21585){
var G__21586 = cljs.core.first(seq21585);
var seq21585__$1 = cljs.core.next(seq21585);
var G__21587 = cljs.core.first(seq21585__$1);
var seq21585__$2 = cljs.core.next(seq21585__$1);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic(G__21586,G__21587,seq21585__$2);
});

return null;
})()
;
cljs.analyzer.api.no_warn.cljs$lang$macro = true;

/**
 * Test if the given warning-type is enabled.
 */
cljs.analyzer.api.warning_enabled_QMARK_ = (function cljs$analyzer$api$warning_enabled_QMARK_(warning_type){
return (cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1(warning_type) : cljs.analyzer._STAR_cljs_warnings_STAR_.call(null,warning_type));
});
/**
 * The default warning handler.
 * 
 * Outputs the warning messages to *err*.
 */
cljs.analyzer.api.default_warning_handler = (function cljs$analyzer$api$default_warning_handler(warning_type,env,extra){
return cljs.analyzer.default_warning_handler(warning_type,env,extra);
});
/**
 * Return the compiler options from compiler state.
 */
cljs.analyzer.api.get_options = (function cljs$analyzer$api$get_options(var_args){
var G__21673 = arguments.length;
switch (G__21673) {
case 0:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$options);
});

cljs.analyzer.api.get_options.cljs$lang$maxFixedArity = 1;

/**
 * Return the currently computed Google Closure js dependency index from the
 *   compiler state.
 */
cljs.analyzer.api.get_js_index = (function cljs$analyzer$api$get_js_index(var_args){
var G__21694 = arguments.length;
switch (G__21694) {
case 0:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$js_DASH_dependency_DASH_index);
});

cljs.analyzer.api.get_js_index.cljs$lang$maxFixedArity = 1;

/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
cljs.analyzer.api.resolve = (function cljs$analyzer$api$resolve(env,sym){
if(cljs.core.map_QMARK_(env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
}catch (e21749){var e = e21749;
return cljs.analyzer.resolve_macro_var(env,sym);
}});
/**
 * Return all namespaces. Analagous to clojure.core/all-ns but
 *   returns symbols identifying namespaces not Namespace instances.
 */
cljs.analyzer.api.all_ns = (function cljs$analyzer$api$all_ns(var_args){
var G__21760 = arguments.length;
switch (G__21760) {
case 0:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces));
});

cljs.analyzer.api.all_ns.cljs$lang$maxFixedArity = 1;

/**
 * Given a namespace return the corresponding namespace analysis map. Analagous
 *   to clojure.core/find-ns.
 */
cljs.analyzer.api.find_ns = (function cljs$analyzer$api$find_ns(var_args){
var G__21782 = arguments.length;
switch (G__21782) {
case 1:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,sym);
});

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,sym], null));
});

cljs.analyzer.api.find_ns.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace return all the var analysis maps. Analagous to
 *   clojure.core/ns-interns but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_interns = (function cljs$analyzer$api$ns_interns(var_args){
var G__21819 = arguments.length;
switch (G__21819) {
case 1:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))], 0));
});

cljs.analyzer.api.ns_interns.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace return all the public var analysis maps. Analagous to
 *   clojure.core/ns-publics but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_publics = (function cljs$analyzer$api$ns_publics(var_args){
var G__21862 = arguments.length;
switch (G__21862) {
case 1:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21868){
var vec__21869 = p__21868;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21869,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21869,(1),null);
return cljs.core.cst$kw$private.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))], 0))));
});

cljs.analyzer.api.ns_publics.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace and a symbol return the corresponding var analysis map.
 *   Analagous to clojure.core/ns-resolve but returns var analysis map not Var.
 */
cljs.analyzer.api.ns_resolve = (function cljs$analyzer$api$ns_resolve(var_args){
var G__21905 = arguments.length;
switch (G__21905) {
case 2:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ns,sym){
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3(cljs.env._STAR_compiler_STAR_,ns,sym);
});

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3 = (function (state,ns,sym){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs,sym], null));
});

cljs.analyzer.api.ns_resolve.cljs$lang$maxFixedArity = 3;

/**
 * Removes the namespace named by the symbol.
 */
cljs.analyzer.api.remove_ns = (function cljs$analyzer$api$remove_ns(var_args){
var G__21956 = arguments.length;
switch (G__21956) {
case 1:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns], 0));
});

cljs.analyzer.api.remove_ns.cljs$lang$maxFixedArity = 2;

var ret__11737__auto___22027 = (function (){
/**
 * Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation
 *   environment atom and runs body.
 */
cljs.analyzer.api.in_cljs_user = (function cljs$analyzer$api$in_cljs_user(var_args){
var args__11698__auto__ = [];
var len__11691__auto___22032 = arguments.length;
var i__11692__auto___22033 = (0);
while(true){
if((i__11692__auto___22033 < len__11691__auto___22032)){
args__11698__auto__.push((arguments[i__11692__auto___22033]));

var G__22036 = (i__11692__auto___22033 + (1));
i__11692__auto___22033 = G__22036;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$analyzer_SLASH__STAR_cljs_DASH_ns_STAR_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$user))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$env_SLASH_with_DASH_compiler_DASH_env),(function (){var x__11366__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
});

cljs.analyzer.api.in_cljs_user.cljs$lang$maxFixedArity = (3);

cljs.analyzer.api.in_cljs_user.cljs$lang$applyTo = (function (seq21989){
var G__21990 = cljs.core.first(seq21989);
var seq21989__$1 = cljs.core.next(seq21989);
var G__21991 = cljs.core.first(seq21989__$1);
var seq21989__$2 = cljs.core.next(seq21989__$1);
var G__21992 = cljs.core.first(seq21989__$2);
var seq21989__$3 = cljs.core.next(seq21989__$2);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic(G__21990,G__21991,G__21992,seq21989__$3);
});

return null;
})()
;
cljs.analyzer.api.in_cljs_user.cljs$lang$macro = true;


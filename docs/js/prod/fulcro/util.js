// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('fulcro.client.logging');
fulcro.util.force_children = (function fulcro$util$force_children(x){
var G__19283 = x;
if(cljs.core.seq_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.util.force_children),G__19283);
} else {
return G__19283;
}
});
fulcro.util.union_QMARK_ = (function fulcro$util$union_QMARK_(expr){
var expr__$1 = (function (){var G__19285 = expr;
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.first(G__19285);
} else {
return G__19285;
}
})();
return (cljs.core.map_QMARK_(expr__$1)) && (cljs.core.map_QMARK_(cljs.core.second(cljs.core.first(expr__$1))));
});
fulcro.util.join_QMARK_ = (function fulcro$util$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.first(x):x);
return cljs.core.map_QMARK_(x__$1);
});
/**
 * Returns true if x is an ident.
 */
fulcro.util.ident_QMARK_ = (function fulcro$util$ident_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (((2) === cljs.core.count(x))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)) instanceof cljs.core.Keyword));
});
fulcro.util.join_entry = (function fulcro$util$join_entry(expr){
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
return cljs.core.first(expr);
}
});
fulcro.util.join_key = (function fulcro$util$join_key(expr){
if(cljs.core.map_QMARK_(expr)){
var k = cljs.core.ffirst(expr);
if(cljs.core.list_QMARK_(k)){
return cljs.core.first(k);
} else {
return cljs.core.ffirst(expr);
}
} else {
if(cljs.core.seq_QMARK_(expr)){
var G__19295 = cljs.core.first(expr);
return (fulcro.util.join_key.cljs$core$IFn$_invoke$arity$1 ? fulcro.util.join_key.cljs$core$IFn$_invoke$arity$1(G__19295) : fulcro.util.join_key.call(null,G__19295));
} else {
return expr;

}
}
});
fulcro.util.join_value = (function fulcro$util$join_value(join){
return cljs.core.second(fulcro.util.join_entry(join));
});
fulcro.util.mutation_join_QMARK_ = (function fulcro$util$mutation_join_QMARK_(expr){
var and__10793__auto__ = fulcro.util.join_QMARK_(expr);
if(cljs.core.truth_(and__10793__auto__)){
return (fulcro.util.join_key(expr) instanceof cljs.core.Symbol);
} else {
return and__10793__auto__;
}
});
fulcro.util.unique_ident_QMARK_ = (function fulcro$util$unique_ident_QMARK_(x){
return (fulcro.util.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(x)));
});
fulcro.util.recursion_QMARK_ = (function fulcro$util$recursion_QMARK_(x){
return (cljs.core.symbol_identical_QMARK_(cljs.core.cst$sym$$$$,x)) || (typeof x === 'number');
});
fulcro.util.mutation_QMARK_ = (function fulcro$util$mutation_QMARK_(expr){
var or__10805__auto__ = fulcro.util.mutation_join_QMARK_(expr);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return ((function (){var G__19310 = expr;
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.first(G__19310);
} else {
return G__19310;
}
})() instanceof cljs.core.Symbol);
}
});
fulcro.util.mutation_key = (function fulcro$util$mutation_key(expr){
if((cljs.core.first(expr) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (first expr))"));
}

return cljs.core.first(expr);
});
/**
 * Get a unique string-based key. Never returns the same value.
 */
fulcro.util.unique_key = (function fulcro$util$unique_key(){
var s = cljs.core.random_uuid();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
fulcro.util.atom_QMARK_ = (function fulcro$util$atom_QMARK_(a){
return (a instanceof cljs.core.Atom);
});
fulcro.util.deep_merge = (function fulcro$util$deep_merge(var_args){
var args__12091__auto__ = [];
var len__12084__auto___19329 = arguments.length;
var i__12085__auto___19330 = (0);
while(true){
if((i__12085__auto___19330 < len__12084__auto___19329)){
args__12091__auto__.push((arguments[i__12085__auto___19330]));

var G__19332 = (i__12085__auto___19330 + (1));
i__12085__auto___19330 = G__19332;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,fulcro.util.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

fulcro.util.deep_merge.cljs$lang$maxFixedArity = (0);

fulcro.util.deep_merge.cljs$lang$applyTo = (function (seq19327){
return fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19327));
});

fulcro.util.conform_BANG_ = (function fulcro$util$conform_BANG_(spec,x){
var rt = cljs.spec.alpha.conform(spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(rt))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_str(spec,x),cljs.spec.alpha.explain_data(spec,x));
} else {
}

return rt;
});
/**
 * Logs the given message if v is false.
 */
fulcro.util.soft_invariant = (function fulcro$util$soft_invariant(v,msg){
if(cljs.core.truth_(v)){
return null;
} else {
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invariant failed"], 0));
}
});

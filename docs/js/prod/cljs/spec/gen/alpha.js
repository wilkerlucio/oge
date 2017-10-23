// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25590 = arguments.length;
var i__11692__auto___25591 = (0);
while(true){
if((i__11692__auto___25591 < len__11691__auto___25590)){
args__11698__auto__.push((arguments[i__11692__auto___25591]));

var G__25592 = (i__11692__auto___25591 + (1));
i__11692__auto___25591 = G__25592;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq25589){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25589));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25607 = arguments.length;
var i__11692__auto___25608 = (0);
while(true){
if((i__11692__auto___25608 < len__11691__auto___25607)){
args__11698__auto__.push((arguments[i__11692__auto___25608]));

var G__25609 = (i__11692__auto___25608 + (1));
i__11692__auto___25608 = G__25609;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq25601){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25601));
});

var g_QMARK__25627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_25628 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__25627){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__25627))
,null));
var mkg_25629 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__25627,g_25628){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__25627,g_25628))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__25627,g_25628,mkg_25629){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__25619 = cljs.core.deref(g_QMARK__25627);
return (fexpr__25619.cljs$core$IFn$_invoke$arity$1 ? fexpr__25619.cljs$core$IFn$_invoke$arity$1(x) : fexpr__25619.call(null,x));
});})(g_QMARK__25627,g_25628,mkg_25629))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__25627,g_25628,mkg_25629){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__25621 = cljs.core.deref(mkg_25629);
return (fexpr__25621.cljs$core$IFn$_invoke$arity$1 ? fexpr__25621.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__25621.call(null,gfn));
});})(g_QMARK__25627,g_25628,mkg_25629))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__25627,g_25628,mkg_25629){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__25623 = cljs.core.deref(g_25628);
return (fexpr__25623.cljs$core$IFn$_invoke$arity$1 ? fexpr__25623.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__25623.call(null,generator));
});})(g_QMARK__25627,g_25628,mkg_25629))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__25643 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__25643.cljs$core$IFn$_invoke$arity$2 ? fexpr__25643.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__25643.call(null,rnd,size));
}));
});
var g__24164__auto___25772 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__24164__auto___25772){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25773 = arguments.length;
var i__11692__auto___25774 = (0);
while(true){
if((i__11692__auto___25774 < len__11691__auto___25773)){
args__11698__auto__.push((arguments[i__11692__auto___25774]));

var G__25775 = (i__11692__auto___25774 + (1));
i__11692__auto___25774 = G__25775;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25772))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25772){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25772),args);
});})(g__24164__auto___25772))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__24164__auto___25772){
return (function (seq25664){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25664));
});})(g__24164__auto___25772))
;


var g__24164__auto___25776 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__24164__auto___25776){
return (function cljs$spec$gen$alpha$list(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25777 = arguments.length;
var i__11692__auto___25778 = (0);
while(true){
if((i__11692__auto___25778 < len__11691__auto___25777)){
args__11698__auto__.push((arguments[i__11692__auto___25778]));

var G__25779 = (i__11692__auto___25778 + (1));
i__11692__auto___25778 = G__25779;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25776))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25776){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25776),args);
});})(g__24164__auto___25776))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__24164__auto___25776){
return (function (seq25673){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25673));
});})(g__24164__auto___25776))
;


var g__24164__auto___25780 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__24164__auto___25780){
return (function cljs$spec$gen$alpha$map(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25781 = arguments.length;
var i__11692__auto___25782 = (0);
while(true){
if((i__11692__auto___25782 < len__11691__auto___25781)){
args__11698__auto__.push((arguments[i__11692__auto___25782]));

var G__25783 = (i__11692__auto___25782 + (1));
i__11692__auto___25782 = G__25783;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25780))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25780){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25780),args);
});})(g__24164__auto___25780))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__24164__auto___25780){
return (function (seq25696){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25696));
});})(g__24164__auto___25780))
;


var g__24164__auto___25784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__24164__auto___25784){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25785 = arguments.length;
var i__11692__auto___25786 = (0);
while(true){
if((i__11692__auto___25786 < len__11691__auto___25785)){
args__11698__auto__.push((arguments[i__11692__auto___25786]));

var G__25787 = (i__11692__auto___25786 + (1));
i__11692__auto___25786 = G__25787;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25784))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25784){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25784),args);
});})(g__24164__auto___25784))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__24164__auto___25784){
return (function (seq25710){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25710));
});})(g__24164__auto___25784))
;


var g__24164__auto___25792 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__24164__auto___25792){
return (function cljs$spec$gen$alpha$set(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25795 = arguments.length;
var i__11692__auto___25796 = (0);
while(true){
if((i__11692__auto___25796 < len__11691__auto___25795)){
args__11698__auto__.push((arguments[i__11692__auto___25796]));

var G__25797 = (i__11692__auto___25796 + (1));
i__11692__auto___25796 = G__25797;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25792))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25792){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25792),args);
});})(g__24164__auto___25792))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__24164__auto___25792){
return (function (seq25711){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25711));
});})(g__24164__auto___25792))
;


var g__24164__auto___25798 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__24164__auto___25798){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25804 = arguments.length;
var i__11692__auto___25806 = (0);
while(true){
if((i__11692__auto___25806 < len__11691__auto___25804)){
args__11698__auto__.push((arguments[i__11692__auto___25806]));

var G__25807 = (i__11692__auto___25806 + (1));
i__11692__auto___25806 = G__25807;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25798))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25798){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25798),args);
});})(g__24164__auto___25798))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__24164__auto___25798){
return (function (seq25713){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25713));
});})(g__24164__auto___25798))
;


var g__24164__auto___25817 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__24164__auto___25817){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25821 = arguments.length;
var i__11692__auto___25823 = (0);
while(true){
if((i__11692__auto___25823 < len__11691__auto___25821)){
args__11698__auto__.push((arguments[i__11692__auto___25823]));

var G__25824 = (i__11692__auto___25823 + (1));
i__11692__auto___25823 = G__25824;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25817))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25817){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25817),args);
});})(g__24164__auto___25817))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__24164__auto___25817){
return (function (seq25722){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25722));
});})(g__24164__auto___25817))
;


var g__24164__auto___25827 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__24164__auto___25827){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25835 = arguments.length;
var i__11692__auto___25837 = (0);
while(true){
if((i__11692__auto___25837 < len__11691__auto___25835)){
args__11698__auto__.push((arguments[i__11692__auto___25837]));

var G__25842 = (i__11692__auto___25837 + (1));
i__11692__auto___25837 = G__25842;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25827))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25827){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25827),args);
});})(g__24164__auto___25827))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__24164__auto___25827){
return (function (seq25723){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25723));
});})(g__24164__auto___25827))
;


var g__24164__auto___25855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__24164__auto___25855){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25862 = arguments.length;
var i__11692__auto___25863 = (0);
while(true){
if((i__11692__auto___25863 < len__11691__auto___25862)){
args__11698__auto__.push((arguments[i__11692__auto___25863]));

var G__25867 = (i__11692__auto___25863 + (1));
i__11692__auto___25863 = G__25867;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25855))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25855){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25855),args);
});})(g__24164__auto___25855))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__24164__auto___25855){
return (function (seq25724){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25724));
});})(g__24164__auto___25855))
;


var g__24164__auto___25871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__24164__auto___25871){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25874 = arguments.length;
var i__11692__auto___25875 = (0);
while(true){
if((i__11692__auto___25875 < len__11691__auto___25874)){
args__11698__auto__.push((arguments[i__11692__auto___25875]));

var G__25878 = (i__11692__auto___25875 + (1));
i__11692__auto___25875 = G__25878;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25871))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25871){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25871),args);
});})(g__24164__auto___25871))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__24164__auto___25871){
return (function (seq25725){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25725));
});})(g__24164__auto___25871))
;


var g__24164__auto___25885 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__24164__auto___25885){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25889 = arguments.length;
var i__11692__auto___25890 = (0);
while(true){
if((i__11692__auto___25890 < len__11691__auto___25889)){
args__11698__auto__.push((arguments[i__11692__auto___25890]));

var G__25892 = (i__11692__auto___25890 + (1));
i__11692__auto___25890 = G__25892;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25885))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25885){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25885),args);
});})(g__24164__auto___25885))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__24164__auto___25885){
return (function (seq25733){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25733));
});})(g__24164__auto___25885))
;


var g__24164__auto___25904 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__24164__auto___25904){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25908 = arguments.length;
var i__11692__auto___25909 = (0);
while(true){
if((i__11692__auto___25909 < len__11691__auto___25908)){
args__11698__auto__.push((arguments[i__11692__auto___25909]));

var G__25910 = (i__11692__auto___25909 + (1));
i__11692__auto___25909 = G__25910;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25904))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25904){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25904),args);
});})(g__24164__auto___25904))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__24164__auto___25904){
return (function (seq25746){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25746));
});})(g__24164__auto___25904))
;


var g__24164__auto___25918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__24164__auto___25918){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25923 = arguments.length;
var i__11692__auto___25924 = (0);
while(true){
if((i__11692__auto___25924 < len__11691__auto___25923)){
args__11698__auto__.push((arguments[i__11692__auto___25924]));

var G__25925 = (i__11692__auto___25924 + (1));
i__11692__auto___25924 = G__25925;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25918))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25918){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25918),args);
});})(g__24164__auto___25918))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__24164__auto___25918){
return (function (seq25750){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25750));
});})(g__24164__auto___25918))
;


var g__24164__auto___25933 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__24164__auto___25933){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25941 = arguments.length;
var i__11692__auto___25943 = (0);
while(true){
if((i__11692__auto___25943 < len__11691__auto___25941)){
args__11698__auto__.push((arguments[i__11692__auto___25943]));

var G__25944 = (i__11692__auto___25943 + (1));
i__11692__auto___25943 = G__25944;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25933))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25933){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25933),args);
});})(g__24164__auto___25933))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__24164__auto___25933){
return (function (seq25755){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25755));
});})(g__24164__auto___25933))
;


var g__24164__auto___25947 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__24164__auto___25947){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25950 = arguments.length;
var i__11692__auto___25951 = (0);
while(true){
if((i__11692__auto___25951 < len__11691__auto___25950)){
args__11698__auto__.push((arguments[i__11692__auto___25951]));

var G__25952 = (i__11692__auto___25951 + (1));
i__11692__auto___25951 = G__25952;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25947))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25947){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25947),args);
});})(g__24164__auto___25947))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__24164__auto___25947){
return (function (seq25759){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25759));
});})(g__24164__auto___25947))
;


var g__24164__auto___25953 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__24164__auto___25953){
return (function cljs$spec$gen$alpha$return(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25956 = arguments.length;
var i__11692__auto___25958 = (0);
while(true){
if((i__11692__auto___25958 < len__11691__auto___25956)){
args__11698__auto__.push((arguments[i__11692__auto___25958]));

var G__25960 = (i__11692__auto___25958 + (1));
i__11692__auto___25958 = G__25960;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25953))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25953){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25953),args);
});})(g__24164__auto___25953))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__24164__auto___25953){
return (function (seq25766){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25766));
});})(g__24164__auto___25953))
;


var g__24164__auto___25963 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__24164__auto___25963){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25964 = arguments.length;
var i__11692__auto___25965 = (0);
while(true){
if((i__11692__auto___25965 < len__11691__auto___25964)){
args__11698__auto__.push((arguments[i__11692__auto___25965]));

var G__25966 = (i__11692__auto___25965 + (1));
i__11692__auto___25965 = G__25966;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25963))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25963){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25963),args);
});})(g__24164__auto___25963))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__24164__auto___25963){
return (function (seq25768){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25768));
});})(g__24164__auto___25963))
;


var g__24164__auto___25967 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__24164__auto___25967){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25970 = arguments.length;
var i__11692__auto___25972 = (0);
while(true){
if((i__11692__auto___25972 < len__11691__auto___25970)){
args__11698__auto__.push((arguments[i__11692__auto___25972]));

var G__25974 = (i__11692__auto___25972 + (1));
i__11692__auto___25972 = G__25974;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25967))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25967){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25967),args);
});})(g__24164__auto___25967))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__24164__auto___25967){
return (function (seq25770){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25770));
});})(g__24164__auto___25967))
;


var g__24164__auto___25977 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__24164__auto___25977){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25978 = arguments.length;
var i__11692__auto___25979 = (0);
while(true){
if((i__11692__auto___25979 < len__11691__auto___25978)){
args__11698__auto__.push((arguments[i__11692__auto___25979]));

var G__25980 = (i__11692__auto___25979 + (1));
i__11692__auto___25979 = G__25980;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24164__auto___25977))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24164__auto___25977){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__24164__auto___25977),args);
});})(g__24164__auto___25977))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__24164__auto___25977){
return (function (seq25771){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25771));
});})(g__24164__auto___25977))
;

var g__24177__auto___26160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__24177__auto___26160){
return (function cljs$spec$gen$alpha$any(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26161 = arguments.length;
var i__11692__auto___26162 = (0);
while(true){
if((i__11692__auto___26162 < len__11691__auto___26161)){
args__11698__auto__.push((arguments[i__11692__auto___26162]));

var G__26167 = (i__11692__auto___26162 + (1));
i__11692__auto___26162 = G__26167;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26160))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26160){
return (function (args){
return cljs.core.deref(g__24177__auto___26160);
});})(g__24177__auto___26160))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__24177__auto___26160){
return (function (seq25987){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25987));
});})(g__24177__auto___26160))
;


var g__24177__auto___26170 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__24177__auto___26170){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26174 = arguments.length;
var i__11692__auto___26175 = (0);
while(true){
if((i__11692__auto___26175 < len__11691__auto___26174)){
args__11698__auto__.push((arguments[i__11692__auto___26175]));

var G__26176 = (i__11692__auto___26175 + (1));
i__11692__auto___26175 = G__26176;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26170))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26170){
return (function (args){
return cljs.core.deref(g__24177__auto___26170);
});})(g__24177__auto___26170))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__24177__auto___26170){
return (function (seq25992){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25992));
});})(g__24177__auto___26170))
;


var g__24177__auto___26181 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__24177__auto___26181){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26182 = arguments.length;
var i__11692__auto___26183 = (0);
while(true){
if((i__11692__auto___26183 < len__11691__auto___26182)){
args__11698__auto__.push((arguments[i__11692__auto___26183]));

var G__26185 = (i__11692__auto___26183 + (1));
i__11692__auto___26183 = G__26185;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26181))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26181){
return (function (args){
return cljs.core.deref(g__24177__auto___26181);
});})(g__24177__auto___26181))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__24177__auto___26181){
return (function (seq25995){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25995));
});})(g__24177__auto___26181))
;


var g__24177__auto___26193 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__24177__auto___26193){
return (function cljs$spec$gen$alpha$char(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26195 = arguments.length;
var i__11692__auto___26196 = (0);
while(true){
if((i__11692__auto___26196 < len__11691__auto___26195)){
args__11698__auto__.push((arguments[i__11692__auto___26196]));

var G__26197 = (i__11692__auto___26196 + (1));
i__11692__auto___26196 = G__26197;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26193))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26193){
return (function (args){
return cljs.core.deref(g__24177__auto___26193);
});})(g__24177__auto___26193))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__24177__auto___26193){
return (function (seq26002){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26002));
});})(g__24177__auto___26193))
;


var g__24177__auto___26202 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__24177__auto___26202){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26203 = arguments.length;
var i__11692__auto___26205 = (0);
while(true){
if((i__11692__auto___26205 < len__11691__auto___26203)){
args__11698__auto__.push((arguments[i__11692__auto___26205]));

var G__26206 = (i__11692__auto___26205 + (1));
i__11692__auto___26205 = G__26206;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26202))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26202){
return (function (args){
return cljs.core.deref(g__24177__auto___26202);
});})(g__24177__auto___26202))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__24177__auto___26202){
return (function (seq26007){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26007));
});})(g__24177__auto___26202))
;


var g__24177__auto___26208 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__24177__auto___26208){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26210 = arguments.length;
var i__11692__auto___26211 = (0);
while(true){
if((i__11692__auto___26211 < len__11691__auto___26210)){
args__11698__auto__.push((arguments[i__11692__auto___26211]));

var G__26212 = (i__11692__auto___26211 + (1));
i__11692__auto___26211 = G__26212;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26208))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26208){
return (function (args){
return cljs.core.deref(g__24177__auto___26208);
});})(g__24177__auto___26208))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__24177__auto___26208){
return (function (seq26015){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26015));
});})(g__24177__auto___26208))
;


var g__24177__auto___26213 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__24177__auto___26213){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26216 = arguments.length;
var i__11692__auto___26218 = (0);
while(true){
if((i__11692__auto___26218 < len__11691__auto___26216)){
args__11698__auto__.push((arguments[i__11692__auto___26218]));

var G__26219 = (i__11692__auto___26218 + (1));
i__11692__auto___26218 = G__26219;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26213))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26213){
return (function (args){
return cljs.core.deref(g__24177__auto___26213);
});})(g__24177__auto___26213))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__24177__auto___26213){
return (function (seq26021){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26021));
});})(g__24177__auto___26213))
;


var g__24177__auto___26222 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__24177__auto___26222){
return (function cljs$spec$gen$alpha$double(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26226 = arguments.length;
var i__11692__auto___26227 = (0);
while(true){
if((i__11692__auto___26227 < len__11691__auto___26226)){
args__11698__auto__.push((arguments[i__11692__auto___26227]));

var G__26228 = (i__11692__auto___26227 + (1));
i__11692__auto___26227 = G__26228;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26222))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26222){
return (function (args){
return cljs.core.deref(g__24177__auto___26222);
});})(g__24177__auto___26222))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__24177__auto___26222){
return (function (seq26029){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26029));
});})(g__24177__auto___26222))
;


var g__24177__auto___26232 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__24177__auto___26232){
return (function cljs$spec$gen$alpha$int(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26235 = arguments.length;
var i__11692__auto___26236 = (0);
while(true){
if((i__11692__auto___26236 < len__11691__auto___26235)){
args__11698__auto__.push((arguments[i__11692__auto___26236]));

var G__26237 = (i__11692__auto___26236 + (1));
i__11692__auto___26236 = G__26237;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26232))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26232){
return (function (args){
return cljs.core.deref(g__24177__auto___26232);
});})(g__24177__auto___26232))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__24177__auto___26232){
return (function (seq26035){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26035));
});})(g__24177__auto___26232))
;


var g__24177__auto___26239 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__24177__auto___26239){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26241 = arguments.length;
var i__11692__auto___26242 = (0);
while(true){
if((i__11692__auto___26242 < len__11691__auto___26241)){
args__11698__auto__.push((arguments[i__11692__auto___26242]));

var G__26243 = (i__11692__auto___26242 + (1));
i__11692__auto___26242 = G__26243;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26239))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26239){
return (function (args){
return cljs.core.deref(g__24177__auto___26239);
});})(g__24177__auto___26239))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__24177__auto___26239){
return (function (seq26047){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26047));
});})(g__24177__auto___26239))
;


var g__24177__auto___26246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__24177__auto___26246){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26251 = arguments.length;
var i__11692__auto___26252 = (0);
while(true){
if((i__11692__auto___26252 < len__11691__auto___26251)){
args__11698__auto__.push((arguments[i__11692__auto___26252]));

var G__26253 = (i__11692__auto___26252 + (1));
i__11692__auto___26252 = G__26253;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26246))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26246){
return (function (args){
return cljs.core.deref(g__24177__auto___26246);
});})(g__24177__auto___26246))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__24177__auto___26246){
return (function (seq26055){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26055));
});})(g__24177__auto___26246))
;


var g__24177__auto___26260 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__24177__auto___26260){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26261 = arguments.length;
var i__11692__auto___26262 = (0);
while(true){
if((i__11692__auto___26262 < len__11691__auto___26261)){
args__11698__auto__.push((arguments[i__11692__auto___26262]));

var G__26264 = (i__11692__auto___26262 + (1));
i__11692__auto___26262 = G__26264;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26260))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26260){
return (function (args){
return cljs.core.deref(g__24177__auto___26260);
});})(g__24177__auto___26260))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__24177__auto___26260){
return (function (seq26066){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26066));
});})(g__24177__auto___26260))
;


var g__24177__auto___26269 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__24177__auto___26269){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26270 = arguments.length;
var i__11692__auto___26271 = (0);
while(true){
if((i__11692__auto___26271 < len__11691__auto___26270)){
args__11698__auto__.push((arguments[i__11692__auto___26271]));

var G__26273 = (i__11692__auto___26271 + (1));
i__11692__auto___26271 = G__26273;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26269))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26269){
return (function (args){
return cljs.core.deref(g__24177__auto___26269);
});})(g__24177__auto___26269))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__24177__auto___26269){
return (function (seq26076){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26076));
});})(g__24177__auto___26269))
;


var g__24177__auto___26278 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__24177__auto___26278){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26284 = arguments.length;
var i__11692__auto___26285 = (0);
while(true){
if((i__11692__auto___26285 < len__11691__auto___26284)){
args__11698__auto__.push((arguments[i__11692__auto___26285]));

var G__26288 = (i__11692__auto___26285 + (1));
i__11692__auto___26285 = G__26288;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26278))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26278){
return (function (args){
return cljs.core.deref(g__24177__auto___26278);
});})(g__24177__auto___26278))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__24177__auto___26278){
return (function (seq26088){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26088));
});})(g__24177__auto___26278))
;


var g__24177__auto___26294 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__24177__auto___26294){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26302 = arguments.length;
var i__11692__auto___26303 = (0);
while(true){
if((i__11692__auto___26303 < len__11691__auto___26302)){
args__11698__auto__.push((arguments[i__11692__auto___26303]));

var G__26307 = (i__11692__auto___26303 + (1));
i__11692__auto___26303 = G__26307;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26294))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26294){
return (function (args){
return cljs.core.deref(g__24177__auto___26294);
});})(g__24177__auto___26294))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__24177__auto___26294){
return (function (seq26103){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26103));
});})(g__24177__auto___26294))
;


var g__24177__auto___26310 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__24177__auto___26310){
return (function cljs$spec$gen$alpha$string(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26313 = arguments.length;
var i__11692__auto___26314 = (0);
while(true){
if((i__11692__auto___26314 < len__11691__auto___26313)){
args__11698__auto__.push((arguments[i__11692__auto___26314]));

var G__26316 = (i__11692__auto___26314 + (1));
i__11692__auto___26314 = G__26316;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26310))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26310){
return (function (args){
return cljs.core.deref(g__24177__auto___26310);
});})(g__24177__auto___26310))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__24177__auto___26310){
return (function (seq26109){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26109));
});})(g__24177__auto___26310))
;


var g__24177__auto___26318 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__24177__auto___26318){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26320 = arguments.length;
var i__11692__auto___26321 = (0);
while(true){
if((i__11692__auto___26321 < len__11691__auto___26320)){
args__11698__auto__.push((arguments[i__11692__auto___26321]));

var G__26322 = (i__11692__auto___26321 + (1));
i__11692__auto___26321 = G__26322;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26318))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26318){
return (function (args){
return cljs.core.deref(g__24177__auto___26318);
});})(g__24177__auto___26318))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__24177__auto___26318){
return (function (seq26118){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26118));
});})(g__24177__auto___26318))
;


var g__24177__auto___26330 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__24177__auto___26330){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26334 = arguments.length;
var i__11692__auto___26335 = (0);
while(true){
if((i__11692__auto___26335 < len__11691__auto___26334)){
args__11698__auto__.push((arguments[i__11692__auto___26335]));

var G__26337 = (i__11692__auto___26335 + (1));
i__11692__auto___26335 = G__26337;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26330))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26330){
return (function (args){
return cljs.core.deref(g__24177__auto___26330);
});})(g__24177__auto___26330))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__24177__auto___26330){
return (function (seq26130){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26130));
});})(g__24177__auto___26330))
;


var g__24177__auto___26349 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__24177__auto___26349){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26350 = arguments.length;
var i__11692__auto___26352 = (0);
while(true){
if((i__11692__auto___26352 < len__11691__auto___26350)){
args__11698__auto__.push((arguments[i__11692__auto___26352]));

var G__26354 = (i__11692__auto___26352 + (1));
i__11692__auto___26352 = G__26354;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26349))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26349){
return (function (args){
return cljs.core.deref(g__24177__auto___26349);
});})(g__24177__auto___26349))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__24177__auto___26349){
return (function (seq26138){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26138));
});})(g__24177__auto___26349))
;


var g__24177__auto___26361 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__24177__auto___26361){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26365 = arguments.length;
var i__11692__auto___26367 = (0);
while(true){
if((i__11692__auto___26367 < len__11691__auto___26365)){
args__11698__auto__.push((arguments[i__11692__auto___26367]));

var G__26368 = (i__11692__auto___26367 + (1));
i__11692__auto___26367 = G__26368;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26361))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26361){
return (function (args){
return cljs.core.deref(g__24177__auto___26361);
});})(g__24177__auto___26361))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__24177__auto___26361){
return (function (seq26142){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26142));
});})(g__24177__auto___26361))
;


var g__24177__auto___26374 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__24177__auto___26374){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26376 = arguments.length;
var i__11692__auto___26377 = (0);
while(true){
if((i__11692__auto___26377 < len__11691__auto___26376)){
args__11698__auto__.push((arguments[i__11692__auto___26377]));

var G__26379 = (i__11692__auto___26377 + (1));
i__11692__auto___26377 = G__26379;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});})(g__24177__auto___26374))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__24177__auto___26374){
return (function (args){
return cljs.core.deref(g__24177__auto___26374);
});})(g__24177__auto___26374))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__24177__auto___26374){
return (function (seq26153){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26153));
});})(g__24177__auto___26374))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__11698__auto__ = [];
var len__11691__auto___26400 = arguments.length;
var i__11692__auto___26401 = (0);
while(true){
if((i__11692__auto___26401 < len__11691__auto___26400)){
args__11698__auto__.push((arguments[i__11692__auto___26401]));

var G__26403 = (i__11692__auto___26401 + (1));
i__11692__auto___26401 = G__26403;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__26389_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__26389_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq26391){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26391));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__26409_SHARP_){
return (new Date(p1__26409_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});

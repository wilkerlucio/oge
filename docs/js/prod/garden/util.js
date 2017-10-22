// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__11698__auto__ = [];
var len__11691__auto___27559 = arguments.length;
var i__11692__auto___27560 = (0);
while(true){
if((i__11692__auto___27560 < len__11691__auto___27559)){
args__11698__auto__.push((arguments[i__11692__auto___27560]));

var G__27561 = (i__11692__auto___27560 + (1));
i__11692__auto___27560 = G__27561;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq27538){
var G__27540 = cljs.core.first(seq27538);
var seq27538__$1 = cljs.core.next(seq27538);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__27540,seq27538__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (garden.util.to_str[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (garden.util.to_str["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});


cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(garden.util.ToString,"_",true);

var G__27570_27578 = garden.util.to_str;
var G__27571_27579 = "_";
var G__27572_27580 = ((function (G__27570_27578,G__27571_27579){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__27570_27578,G__27571_27579))
;
goog.object.set(G__27570_27578,G__27571_27579,G__27572_27580);

goog.object.set(garden.util.ToString,"null",true);

var G__27574_27581 = garden.util.to_str;
var G__27575_27582 = "null";
var G__27576_27583 = ((function (G__27574_27581,G__27575_27582){
return (function (this$){
return "";
});})(G__27574_27581,G__27575_27582))
;
goog.object.set(G__27574_27581,G__27575_27582,G__27576_27583);
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__11698__auto__ = [];
var len__11691__auto___27589 = arguments.length;
var i__11692__auto___27590 = (0);
while(true){
if((i__11692__auto___27590 < len__11691__auto___27589)){
args__11698__auto__.push((arguments[i__11692__auto___27590]));

var G__27591 = (i__11692__auto___27590 + (1));
i__11692__auto___27590 = G__27591;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq27585){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27585));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__11698__auto__ = [];
var len__11691__auto___27613 = arguments.length;
var i__11692__auto___27614 = (0);
while(true){
if((i__11692__auto___27614 < len__11691__auto___27613)){
args__11698__auto__.push((arguments[i__11692__auto___27614]));

var G__27615 = (i__11692__auto___27614 + (1));
i__11692__auto___27614 = G__27615;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__27597){
var vec__27598 = p__27597;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27598,(0),null);
var radix__$1 = (function (){var or__10412__auto__ = radix;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq27594){
var G__27595 = cljs.core.first(seq27594);
var seq27594__$1 = cljs.core.next(seq27594);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__27595,seq27594__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__11698__auto__ = [];
var len__11691__auto___27650 = arguments.length;
var i__11692__auto___27651 = (0);
while(true){
if((i__11692__auto___27651 < len__11691__auto___27650)){
args__11698__auto__.push((arguments[i__11692__auto___27651]));

var G__27652 = (i__11692__auto___27651 + (1));
i__11692__auto___27651 = G__27652;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__27640){
var vec__27641 = p__27640;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27641,(0),null);
var radix__$1 = (function (){var or__10412__auto__ = radix;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq27634){
var G__27635 = cljs.core.first(seq27634);
var seq27634__$1 = cljs.core.next(seq27634);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__27635,seq27634__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__11294__auto__ = (function garden$util$comma_join_$_iter__27659(s__27660){
return (new cljs.core.LazySeq(null,(function (){
var s__27660__$1 = s__27660;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__27660__$1);
if(temp__5459__auto__){
var s__27660__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27660__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__27660__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__27662 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__27661 = (0);
while(true){
if((i__27661 < size__11293__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__27661);
cljs.core.chunk_append(b__27662,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__27673 = (i__27661 + (1));
i__27661 = G__27673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27662),garden$util$comma_join_$_iter__27659(cljs.core.chunk_rest(s__27660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27662),null);
}
} else {
var x = cljs.core.first(s__27660__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__27659(cljs.core.rest(s__27660__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11294__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (!(cljs.core.record_QMARK_(x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__10400__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$media);
} else {
return and__10400__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__10400__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$keyframes);
} else {
return and__10400__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__10400__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$import);
} else {
return and__10400__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_(n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__10771__auto__ = a;
var y__10772__auto__ = b;
return ((x__10771__auto__ < y__10772__auto__) ? x__10771__auto__ : y__10772__auto__);
})();
var top = (function (){var x__10764__auto__ = a;
var y__10765__auto__ = b;
return ((x__10764__auto__ > y__10765__auto__) ? x__10764__auto__ : y__10765__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__27710 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27710,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27710,(1),null);
var x__10764__auto__ = a__$1;
var y__10765__auto__ = (function (){var x__10771__auto__ = b__$1;
var y__10772__auto__ = n;
return ((x__10771__auto__ < y__10772__auto__) ? x__10771__auto__ : y__10772__auto__);
})();
return ((x__10764__auto__ > y__10765__auto__) ? x__10764__auto__ : y__10765__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__11698__auto__ = [];
var len__11691__auto___27745 = arguments.length;
var i__11692__auto___27746 = (0);
while(true){
if((i__11692__auto___27746 < len__11691__auto___27745)){
args__11698__auto__.push((arguments[i__11692__auto___27746]));

var G__27749 = (i__11692__auto___27746 + (1));
i__11692__auto___27746 = G__27749;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq27725){
var G__27728 = cljs.core.first(seq27725);
var seq27725__$1 = cljs.core.next(seq27725);
var G__27729 = cljs.core.first(seq27725__$1);
var seq27725__$2 = cljs.core.next(seq27725__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__27728,G__27729,seq27725__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__11698__auto__ = [];
var len__11691__auto___27758 = arguments.length;
var i__11692__auto___27759 = (0);
while(true){
if((i__11692__auto___27759 < len__11691__auto___27758)){
args__11698__auto__.push((arguments[i__11692__auto___27759]));

var G__27760 = (i__11692__auto___27759 + (1));
i__11692__auto___27759 = G__27760;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5457__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5457__auto__){
var rst = temp__5457__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__27770 = (i - (1));
var G__27771 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__27770;
v_seqs__$2 = G__27771;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq27756){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27756));
});


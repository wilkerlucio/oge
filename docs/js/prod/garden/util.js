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
var args__12091__auto__ = [];
var len__12084__auto___16726 = arguments.length;
var i__12085__auto___16727 = (0);
while(true){
if((i__12085__auto___16727 < len__12084__auto___16726)){
args__12091__auto__.push((arguments[i__12085__auto___16727]));

var G__16729 = (i__12085__auto___16727 + (1));
i__12085__auto___16727 = G__16729;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq16724){
var G__16725 = cljs.core.first(seq16724);
var seq16724__$1 = cljs.core.next(seq16724);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__16725,seq16724__$1);
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
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (garden.util.to_str[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (garden.util.to_str["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
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

var G__16752_16761 = garden.util.to_str;
var G__16753_16762 = "_";
var G__16754_16763 = ((function (G__16752_16761,G__16753_16762){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__16752_16761,G__16753_16762))
;
goog.object.set(G__16752_16761,G__16753_16762,G__16754_16763);

goog.object.set(garden.util.ToString,"null",true);

var G__16755_16767 = garden.util.to_str;
var G__16756_16768 = "null";
var G__16757_16769 = ((function (G__16755_16767,G__16756_16768){
return (function (this$){
return "";
});})(G__16755_16767,G__16756_16768))
;
goog.object.set(G__16755_16767,G__16756_16768,G__16757_16769);
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__12091__auto__ = [];
var len__12084__auto___16778 = arguments.length;
var i__12085__auto___16779 = (0);
while(true){
if((i__12085__auto___16779 < len__12084__auto___16778)){
args__12091__auto__.push((arguments[i__12085__auto___16779]));

var G__16780 = (i__12085__auto___16779 + (1));
i__12085__auto___16779 = G__16780;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq16771){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16771));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__12091__auto__ = [];
var len__12084__auto___16790 = arguments.length;
var i__12085__auto___16792 = (0);
while(true){
if((i__12085__auto___16792 < len__12084__auto___16790)){
args__12091__auto__.push((arguments[i__12085__auto___16792]));

var G__16795 = (i__12085__auto___16792 + (1));
i__12085__auto___16792 = G__16795;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__16785){
var vec__16786 = p__16785;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16786,(0),null);
var radix__$1 = (function (){var or__10805__auto__ = radix;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq16783){
var G__16784 = cljs.core.first(seq16783);
var seq16783__$1 = cljs.core.next(seq16783);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__16784,seq16783__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__12091__auto__ = [];
var len__12084__auto___16804 = arguments.length;
var i__12085__auto___16805 = (0);
while(true){
if((i__12085__auto___16805 < len__12084__auto___16804)){
args__12091__auto__.push((arguments[i__12085__auto___16805]));

var G__16806 = (i__12085__auto___16805 + (1));
i__12085__auto___16805 = G__16806;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__16799){
var vec__16800 = p__16799;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16800,(0),null);
var radix__$1 = (function (){var or__10805__auto__ = radix;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq16797){
var G__16798 = cljs.core.first(seq16797);
var seq16797__$1 = cljs.core.next(seq16797);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__16798,seq16797__$1);
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
var ys = (function (){var iter__11687__auto__ = (function garden$util$comma_join_$_iter__16817(s__16818){
return (new cljs.core.LazySeq(null,(function (){
var s__16818__$1 = s__16818;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__16818__$1);
if(temp__5457__auto__){
var s__16818__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16818__$2)){
var c__11685__auto__ = cljs.core.chunk_first(s__16818__$2);
var size__11686__auto__ = cljs.core.count(c__11685__auto__);
var b__16820 = cljs.core.chunk_buffer(size__11686__auto__);
if((function (){var i__16819 = (0);
while(true){
if((i__16819 < size__11686__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11685__auto__,i__16819);
cljs.core.chunk_append(b__16820,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__16831 = (i__16819 + (1));
i__16819 = G__16831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16820),garden$util$comma_join_$_iter__16817(cljs.core.chunk_rest(s__16818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16820),null);
}
} else {
var x = cljs.core.first(s__16818__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__16817(cljs.core.rest(s__16818__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11687__auto__(xs);
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
var and__10793__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$media);
} else {
return and__10793__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__10793__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$keyframes);
} else {
return and__10793__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__10793__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$import);
} else {
return and__10793__auto__;
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
var bottom = (function (){var x__11164__auto__ = a;
var y__11165__auto__ = b;
return ((x__11164__auto__ < y__11165__auto__) ? x__11164__auto__ : y__11165__auto__);
})();
var top = (function (){var x__11157__auto__ = a;
var y__11158__auto__ = b;
return ((x__11157__auto__ > y__11158__auto__) ? x__11157__auto__ : y__11158__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__16887 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16887,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16887,(1),null);
var x__11157__auto__ = a__$1;
var y__11158__auto__ = (function (){var x__11164__auto__ = b__$1;
var y__11165__auto__ = n;
return ((x__11164__auto__ < y__11165__auto__) ? x__11164__auto__ : y__11165__auto__);
})();
return ((x__11157__auto__ > y__11158__auto__) ? x__11157__auto__ : y__11158__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__12091__auto__ = [];
var len__12084__auto___16910 = arguments.length;
var i__12085__auto___16911 = (0);
while(true){
if((i__12085__auto___16911 < len__12084__auto___16910)){
args__12091__auto__.push((arguments[i__12085__auto___16911]));

var G__16912 = (i__12085__auto___16911 + (1));
i__12085__auto___16911 = G__16912;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq16903){
var G__16904 = cljs.core.first(seq16903);
var seq16903__$1 = cljs.core.next(seq16903);
var G__16905 = cljs.core.first(seq16903__$1);
var seq16903__$2 = cljs.core.next(seq16903__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__16904,G__16905,seq16903__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__12091__auto__ = [];
var len__12084__auto___16932 = arguments.length;
var i__12085__auto___16933 = (0);
while(true){
if((i__12085__auto___16933 < len__12084__auto___16932)){
args__12091__auto__.push((arguments[i__12085__auto___16933]));

var G__16934 = (i__12085__auto___16933 + (1));
i__12085__auto___16933 = G__16934;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
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
var temp__5455__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__16943 = (i - (1));
var G__16944 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__16943;
v_seqs__$2 = G__16944;
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

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq16919){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16919));
});


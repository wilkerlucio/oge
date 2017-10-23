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
var len__11691__auto___31756 = arguments.length;
var i__11692__auto___31757 = (0);
while(true){
if((i__11692__auto___31757 < len__11691__auto___31756)){
args__11698__auto__.push((arguments[i__11692__auto___31757]));

var G__31759 = (i__11692__auto___31757 + (1));
i__11692__auto___31757 = G__31759;
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

garden.util.format.cljs$lang$applyTo = (function (seq31752){
var G__31753 = cljs.core.first(seq31752);
var seq31752__$1 = cljs.core.next(seq31752);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__31753,seq31752__$1);
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

var G__31774_31782 = garden.util.to_str;
var G__31775_31783 = "_";
var G__31776_31784 = ((function (G__31774_31782,G__31775_31783){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__31774_31782,G__31775_31783))
;
goog.object.set(G__31774_31782,G__31775_31783,G__31776_31784);

goog.object.set(garden.util.ToString,"null",true);

var G__31778_31785 = garden.util.to_str;
var G__31779_31786 = "null";
var G__31780_31787 = ((function (G__31778_31785,G__31779_31786){
return (function (this$){
return "";
});})(G__31778_31785,G__31779_31786))
;
goog.object.set(G__31778_31785,G__31779_31786,G__31780_31787);
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__11698__auto__ = [];
var len__11691__auto___31795 = arguments.length;
var i__11692__auto___31796 = (0);
while(true){
if((i__11692__auto___31796 < len__11691__auto___31795)){
args__11698__auto__.push((arguments[i__11692__auto___31796]));

var G__31797 = (i__11692__auto___31796 + (1));
i__11692__auto___31796 = G__31797;
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

garden.util.as_str.cljs$lang$applyTo = (function (seq31790){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31790));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__11698__auto__ = [];
var len__11691__auto___31805 = arguments.length;
var i__11692__auto___31806 = (0);
while(true){
if((i__11692__auto___31806 < len__11691__auto___31805)){
args__11698__auto__.push((arguments[i__11692__auto___31806]));

var G__31807 = (i__11692__auto___31806 + (1));
i__11692__auto___31806 = G__31807;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__31801){
var vec__31802 = p__31801;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31802,(0),null);
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

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq31798){
var G__31799 = cljs.core.first(seq31798);
var seq31798__$1 = cljs.core.next(seq31798);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__31799,seq31798__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__11698__auto__ = [];
var len__11691__auto___31819 = arguments.length;
var i__11692__auto___31820 = (0);
while(true){
if((i__11692__auto___31820 < len__11691__auto___31819)){
args__11698__auto__.push((arguments[i__11692__auto___31820]));

var G__31821 = (i__11692__auto___31820 + (1));
i__11692__auto___31820 = G__31821;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__31814){
var vec__31815 = p__31814;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31815,(0),null);
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

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq31811){
var G__31812 = cljs.core.first(seq31811);
var seq31811__$1 = cljs.core.next(seq31811);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__31812,seq31811__$1);
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
var ys = (function (){var iter__11294__auto__ = (function garden$util$comma_join_$_iter__31824(s__31825){
return (new cljs.core.LazySeq(null,(function (){
var s__31825__$1 = s__31825;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__31825__$1);
if(temp__5459__auto__){
var s__31825__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31825__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__31825__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__31827 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__31826 = (0);
while(true){
if((i__31826 < size__11293__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__31826);
cljs.core.chunk_append(b__31827,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__31828 = (i__31826 + (1));
i__31826 = G__31828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31827),garden$util$comma_join_$_iter__31824(cljs.core.chunk_rest(s__31825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31827),null);
}
} else {
var x = cljs.core.first(s__31825__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__31824(cljs.core.rest(s__31825__$2)));
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
var vec__31829 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31829,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31829,(1),null);
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
var len__11691__auto___31835 = arguments.length;
var i__11692__auto___31836 = (0);
while(true){
if((i__11692__auto___31836 < len__11691__auto___31835)){
args__11698__auto__.push((arguments[i__11692__auto___31836]));

var G__31837 = (i__11692__auto___31836 + (1));
i__11692__auto___31836 = G__31837;
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

garden.util.average.cljs$lang$applyTo = (function (seq31832){
var G__31833 = cljs.core.first(seq31832);
var seq31832__$1 = cljs.core.next(seq31832);
var G__31834 = cljs.core.first(seq31832__$1);
var seq31832__$2 = cljs.core.next(seq31832__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__31833,G__31834,seq31832__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__11698__auto__ = [];
var len__11691__auto___31839 = arguments.length;
var i__11692__auto___31840 = (0);
while(true){
if((i__11692__auto___31840 < len__11691__auto___31839)){
args__11698__auto__.push((arguments[i__11692__auto___31840]));

var G__31841 = (i__11692__auto___31840 + (1));
i__11692__auto___31840 = G__31841;
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
var G__31842 = (i - (1));
var G__31843 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__31842;
v_seqs__$2 = G__31843;
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

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq31838){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31838));
});


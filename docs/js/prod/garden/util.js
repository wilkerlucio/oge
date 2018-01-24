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
var len__12084__auto___21914 = arguments.length;
var i__12085__auto___21915 = (0);
while(true){
if((i__12085__auto___21915 < len__12084__auto___21914)){
args__12091__auto__.push((arguments[i__12085__auto___21915]));

var G__21916 = (i__12085__auto___21915 + (1));
i__12085__auto___21915 = G__21916;
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

garden.util.format.cljs$lang$applyTo = (function (seq21910){
var G__21911 = cljs.core.first(seq21910);
var seq21910__$1 = cljs.core.next(seq21910);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__21911,seq21910__$1);
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

var G__21937_21946 = garden.util.to_str;
var G__21938_21947 = "_";
var G__21939_21948 = ((function (G__21937_21946,G__21938_21947){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__21937_21946,G__21938_21947))
;
goog.object.set(G__21937_21946,G__21938_21947,G__21939_21948);

goog.object.set(garden.util.ToString,"null",true);

var G__21941_21949 = garden.util.to_str;
var G__21942_21950 = "null";
var G__21943_21951 = ((function (G__21941_21949,G__21942_21950){
return (function (this$){
return "";
});})(G__21941_21949,G__21942_21950))
;
goog.object.set(G__21941_21949,G__21942_21950,G__21943_21951);
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__12091__auto__ = [];
var len__12084__auto___21957 = arguments.length;
var i__12085__auto___21958 = (0);
while(true){
if((i__12085__auto___21958 < len__12084__auto___21957)){
args__12091__auto__.push((arguments[i__12085__auto___21958]));

var G__21959 = (i__12085__auto___21958 + (1));
i__12085__auto___21958 = G__21959;
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

garden.util.as_str.cljs$lang$applyTo = (function (seq21954){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21954));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__12091__auto__ = [];
var len__12084__auto___21978 = arguments.length;
var i__12085__auto___21979 = (0);
while(true){
if((i__12085__auto___21979 < len__12084__auto___21978)){
args__12091__auto__.push((arguments[i__12085__auto___21979]));

var G__21980 = (i__12085__auto___21979 + (1));
i__12085__auto___21979 = G__21980;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21966){
var vec__21967 = p__21966;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21967,(0),null);
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

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq21962){
var G__21963 = cljs.core.first(seq21962);
var seq21962__$1 = cljs.core.next(seq21962);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__21963,seq21962__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__12091__auto__ = [];
var len__12084__auto___21994 = arguments.length;
var i__12085__auto___21995 = (0);
while(true){
if((i__12085__auto___21995 < len__12084__auto___21994)){
args__12091__auto__.push((arguments[i__12085__auto___21995]));

var G__21996 = (i__12085__auto___21995 + (1));
i__12085__auto___21995 = G__21996;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__21989){
var vec__21990 = p__21989;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21990,(0),null);
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

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq21985){
var G__21986 = cljs.core.first(seq21985);
var seq21985__$1 = cljs.core.next(seq21985);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__21986,seq21985__$1);
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
var ys = (function (){var iter__11687__auto__ = (function garden$util$comma_join_$_iter__22003(s__22004){
return (new cljs.core.LazySeq(null,(function (){
var s__22004__$1 = s__22004;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22004__$1);
if(temp__5457__auto__){
var s__22004__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22004__$2)){
var c__11685__auto__ = cljs.core.chunk_first(s__22004__$2);
var size__11686__auto__ = cljs.core.count(c__11685__auto__);
var b__22006 = cljs.core.chunk_buffer(size__11686__auto__);
if((function (){var i__22005 = (0);
while(true){
if((i__22005 < size__11686__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11685__auto__,i__22005);
cljs.core.chunk_append(b__22006,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__22019 = (i__22005 + (1));
i__22005 = G__22019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22006),garden$util$comma_join_$_iter__22003(cljs.core.chunk_rest(s__22004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22006),null);
}
} else {
var x = cljs.core.first(s__22004__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__22003(cljs.core.rest(s__22004__$2)));
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
var vec__22049 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,(1),null);
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
var len__12084__auto___22061 = arguments.length;
var i__12085__auto___22062 = (0);
while(true){
if((i__12085__auto___22062 < len__12084__auto___22061)){
args__12091__auto__.push((arguments[i__12085__auto___22062]));

var G__22063 = (i__12085__auto___22062 + (1));
i__12085__auto___22062 = G__22063;
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

garden.util.average.cljs$lang$applyTo = (function (seq22055){
var G__22056 = cljs.core.first(seq22055);
var seq22055__$1 = cljs.core.next(seq22055);
var G__22057 = cljs.core.first(seq22055__$1);
var seq22055__$2 = cljs.core.next(seq22055__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__22056,G__22057,seq22055__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__12091__auto__ = [];
var len__12084__auto___22082 = arguments.length;
var i__12085__auto___22083 = (0);
while(true){
if((i__12085__auto___22083 < len__12084__auto___22082)){
args__12091__auto__.push((arguments[i__12085__auto___22083]));

var G__22085 = (i__12085__auto___22083 + (1));
i__12085__auto___22083 = G__22085;
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
var G__22088 = (i - (1));
var G__22089 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__22088;
v_seqs__$2 = G__22089;
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

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq22070){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22070));
});


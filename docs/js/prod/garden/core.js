// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__11698__auto__ = [];
var len__11691__auto___46897 = arguments.length;
var i__11692__auto___46898 = (0);
while(true){
if((i__11692__auto___46898 < len__11691__auto___46897)){
args__11698__auto__.push((arguments[i__11692__auto___46898]));

var G__46899 = (i__11692__auto___46898 + (1));
i__11692__auto___46898 = G__46899;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq46896){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46896));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__11698__auto__ = [];
var len__11691__auto___46901 = arguments.length;
var i__11692__auto___46902 = (0);
while(true){
if((i__11692__auto___46902 < len__11691__auto___46901)){
args__11698__auto__.push((arguments[i__11692__auto___46902]));

var G__46903 = (i__11692__auto___46902 + (1));
i__11692__auto___46902 = G__46903;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq46900){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46900));
});


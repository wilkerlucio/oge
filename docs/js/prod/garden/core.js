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
var len__11691__auto___46879 = arguments.length;
var i__11692__auto___46880 = (0);
while(true){
if((i__11692__auto___46880 < len__11691__auto___46879)){
args__11698__auto__.push((arguments[i__11692__auto___46880]));

var G__46881 = (i__11692__auto___46880 + (1));
i__11692__auto___46880 = G__46881;
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

garden.core.css.cljs$lang$applyTo = (function (seq46878){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46878));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__11698__auto__ = [];
var len__11691__auto___46883 = arguments.length;
var i__11692__auto___46884 = (0);
while(true){
if((i__11692__auto___46884 < len__11691__auto___46883)){
args__11698__auto__.push((arguments[i__11692__auto___46884]));

var G__46885 = (i__11692__auto___46884 + (1));
i__11692__auto___46884 = G__46885;
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

garden.core.style.cljs$lang$applyTo = (function (seq46882){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46882));
});


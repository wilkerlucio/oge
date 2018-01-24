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
var args__12091__auto__ = [];
var len__12084__auto___39117 = arguments.length;
var i__12085__auto___39118 = (0);
while(true){
if((i__12085__auto___39118 < len__12084__auto___39117)){
args__12091__auto__.push((arguments[i__12085__auto___39118]));

var G__39119 = (i__12085__auto___39118 + (1));
i__12085__auto___39118 = G__39119;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq39116){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39116));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__12091__auto__ = [];
var len__12084__auto___39121 = arguments.length;
var i__12085__auto___39122 = (0);
while(true){
if((i__12085__auto___39122 < len__12084__auto___39121)){
args__12091__auto__.push((arguments[i__12085__auto___39122]));

var G__39123 = (i__12085__auto___39122 + (1));
i__12085__auto___39122 = G__39123;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq39120){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39120));
});


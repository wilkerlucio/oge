// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.logging');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.stacktrace');
goog.require('goog.log');
goog.require('goog.object');
goog.require('goog.debug.Logger.Level');
goog.require('goog.debug.Console');
fulcro.logging.logging_priority = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$all,(100),cljs.core.cst$kw$trace,(6),cljs.core.cst$kw$debug,(5),cljs.core.cst$kw$info,(4),cljs.core.cst$kw$warn,(3),cljs.core.cst$kw$error,(2),cljs.core.cst$kw$fatal,(1),cljs.core.cst$kw$none,(0)], null);
/**
 * Returns true if the current logging level indicates that the message level is of interest.
 */
fulcro.logging.should_log_QMARK_ = (function fulcro$logging$should_log_QMARK_(current_logging_level,message_level){
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.logging.logging_priority,current_logging_level,(4));
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.logging.logging_priority,message_level,(4));
return (m <= c);
});
if(typeof fulcro.logging.current_logging_level !== 'undefined'){
} else {
fulcro.logging.current_logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
fulcro.logging.level_map = (function (){var levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all,cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,cljs.core.cst$kw$fatal], null);
var glevels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ALL","FINE","FINE","INFO","SEVERE","WARNING","SEVERE"], null);
return cljs.core.zipmap(levels,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (levels,glevels){
return (function (p1__18511_SHARP_){
return goog.debug.Logger.Level.getPredefinedLevel(p1__18511_SHARP_);
});})(levels,glevels))
,glevels));
})();
if(typeof fulcro.logging.logger !== 'undefined'){
} else {
fulcro.logging.logger = (function (){
if(goog.DEBUG){
(new goog.debug.Console()).setCapturing(true);
} else {
}

return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function() { 
var fulcro$logging$built_in_logger__delegate = function (p__18518,level,args){
var map__18519 = p__18518;
var map__18519__$1 = ((((!((map__18519 == null)))?((((map__18519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18519):map__18519);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18519__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18519__$1,cljs.core.cst$kw$line);
if(cljs.core.truth_(fulcro.logging.should_log_QMARK_(cljs.core.deref(fulcro.logging.current_logging_level),level))){
var location = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10805__auto__ = file;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "?";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10805__auto__ = line;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "?";
}
})())].join('');
var logger = goog.log.getLogger(file);
var first_exception = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (logger,location,map__18519,map__18519__$1,file,line){
return (function (p1__18516_SHARP_){
return (p1__18516_SHARP_ instanceof Error);
});})(logger,location,map__18519,map__18519__$1,file,line))
,args));
var message = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args);
if(cljs.core.truth_(logger)){
return logger.log(cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.logging.level_map,level,cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fulcro.logging.level_map)),message,first_exception);
} else {
return null;
}
} else {
return null;
}
};
var fulcro$logging$built_in_logger = function (p__18518,level,var_args){
var args = null;
if (arguments.length > 2) {
var G__18543__i = 0, G__18543__a = new Array(arguments.length -  2);
while (G__18543__i < G__18543__a.length) {G__18543__a[G__18543__i] = arguments[G__18543__i + 2]; ++G__18543__i;}
  args = new cljs.core.IndexedSeq(G__18543__a,0,null);
} 
return fulcro$logging$built_in_logger__delegate.call(this,p__18518,level,args);};
fulcro$logging$built_in_logger.cljs$lang$maxFixedArity = 2;
fulcro$logging$built_in_logger.cljs$lang$applyTo = (function (arglist__18544){
var p__18518 = cljs.core.first(arglist__18544);
arglist__18544 = cljs.core.next(arglist__18544);
var level = cljs.core.first(arglist__18544);
var args = cljs.core.rest(arglist__18544);
return fulcro$logging$built_in_logger__delegate(p__18518,level,args);
});
fulcro$logging$built_in_logger.cljs$core$IFn$_invoke$arity$variadic = fulcro$logging$built_in_logger__delegate;
return fulcro$logging$built_in_logger;
})()
);
})()
;
}
/**
 * Private implementation for macro output. Use `log` instead.
 */
fulcro.logging._log = (function fulcro$logging$_log(var_args){
var args__12091__auto__ = [];
var len__12084__auto___18561 = arguments.length;
var i__12085__auto___18562 = (0);
while(true){
if((i__12085__auto___18562 < len__12084__auto___18561)){
args__12091__auto__.push((arguments[i__12085__auto___18562]));

var G__18563 = (i__12085__auto___18562 + (1));
i__12085__auto___18562 = G__18563;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic = (function (location,level,things_to_print){
if(cljs.core.truth_(cljs.core.deref(fulcro.logging.logger))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(fulcro.logging.logger),location,level,things_to_print);
} else {
return null;
}
});

fulcro.logging._log.cljs$lang$maxFixedArity = (2);

fulcro.logging._log.cljs$lang$applyTo = (function (seq18545){
var G__18546 = cljs.core.first(seq18545);
var seq18545__$1 = cljs.core.next(seq18545);
var G__18547 = cljs.core.first(seq18545__$1);
var seq18545__$2 = cljs.core.next(seq18545__$1);
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(G__18546,G__18547,seq18545__$2);
});

fulcro.logging.log_STAR_ = (function fulcro$logging$log_STAR_(){
return null;
});
fulcro.logging.fline = (function fulcro$logging$fline(and_form){
var G__18564 = and_form;
var G__18564__$1 = (((G__18564 == null))?null:cljs.core.meta(G__18564));
if((G__18564__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(G__18564__$1);
}
});
fulcro.logging.set_level_BANG_ = (function fulcro$logging$set_level_BANG_(log_level){

return cljs.core.reset_BANG_(fulcro.logging.current_logging_level,cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.logging.logging_priority,log_level,(2)));
});
/**
 * Set the fulcro logging function.
 * 
 *   log-fn - A (fn [{:keys [file line] :as location} level & args] ...)
 */
fulcro.logging.set_logger_BANG_ = (function fulcro$logging$set_logger_BANG_(log_fn){
return cljs.core.reset_BANG_(fulcro.logging.logger,log_fn);
});
var ret__12130__auto___18600 = (function (){
fulcro.logging.trace = (function fulcro$logging$trace(var_args){
var args__12091__auto__ = [];
var len__12084__auto___18603 = arguments.length;
var i__12085__auto___18604 = (0);
while(true){
if((i__12085__auto___18604 < len__12084__auto___18603)){
args__12091__auto__.push((arguments[i__12085__auto___18604]));

var G__18607 = (i__12085__auto___18604 + (1));
i__12085__auto___18604 = G__18607;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.logging.trace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.logging.trace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$logging_SLASH_log),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),(function (){var x__11759__auto__ = fulcro.logging.fline(_AMPERSAND_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$trace)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
});

fulcro.logging.trace.cljs$lang$maxFixedArity = (2);

fulcro.logging.trace.cljs$lang$applyTo = (function (seq18587){
var G__18588 = cljs.core.first(seq18587);
var seq18587__$1 = cljs.core.next(seq18587);
var G__18589 = cljs.core.first(seq18587__$1);
var seq18587__$2 = cljs.core.next(seq18587__$1);
return fulcro.logging.trace.cljs$core$IFn$_invoke$arity$variadic(G__18588,G__18589,seq18587__$2);
});

return null;
})()
;
fulcro.logging.trace.cljs$lang$macro = true;

var ret__12130__auto___18620 = (function (){
fulcro.logging.debug = (function fulcro$logging$debug(var_args){
var args__12091__auto__ = [];
var len__12084__auto___18621 = arguments.length;
var i__12085__auto___18622 = (0);
while(true){
if((i__12085__auto___18622 < len__12084__auto___18621)){
args__12091__auto__.push((arguments[i__12085__auto___18622]));

var G__18623 = (i__12085__auto___18622 + (1));
i__12085__auto___18622 = G__18623;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.logging.debug.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.logging.debug.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$logging_SLASH_log),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),(function (){var x__11759__auto__ = fulcro.logging.fline(_AMPERSAND_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$debug)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
});

fulcro.logging.debug.cljs$lang$maxFixedArity = (2);

fulcro.logging.debug.cljs$lang$applyTo = (function (seq18615){
var G__18616 = cljs.core.first(seq18615);
var seq18615__$1 = cljs.core.next(seq18615);
var G__18617 = cljs.core.first(seq18615__$1);
var seq18615__$2 = cljs.core.next(seq18615__$1);
return fulcro.logging.debug.cljs$core$IFn$_invoke$arity$variadic(G__18616,G__18617,seq18615__$2);
});

return null;
})()
;
fulcro.logging.debug.cljs$lang$macro = true;

var ret__12130__auto___18632 = (function (){
fulcro.logging.info = (function fulcro$logging$info(var_args){
var args__12091__auto__ = [];
var len__12084__auto___18633 = arguments.length;
var i__12085__auto___18634 = (0);
while(true){
if((i__12085__auto___18634 < len__12084__auto___18633)){
args__12091__auto__.push((arguments[i__12085__auto___18634]));

var G__18635 = (i__12085__auto___18634 + (1));
i__12085__auto___18634 = G__18635;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.logging.info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$logging_SLASH_log),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),(function (){var x__11759__auto__ = fulcro.logging.fline(_AMPERSAND_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$info)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
});

fulcro.logging.info.cljs$lang$maxFixedArity = (2);

fulcro.logging.info.cljs$lang$applyTo = (function (seq18624){
var G__18625 = cljs.core.first(seq18624);
var seq18624__$1 = cljs.core.next(seq18624);
var G__18626 = cljs.core.first(seq18624__$1);
var seq18624__$2 = cljs.core.next(seq18624__$1);
return fulcro.logging.info.cljs$core$IFn$_invoke$arity$variadic(G__18625,G__18626,seq18624__$2);
});

return null;
})()
;
fulcro.logging.info.cljs$lang$macro = true;

var ret__12130__auto___18649 = (function (){
fulcro.logging.warn = (function fulcro$logging$warn(var_args){
var args__12091__auto__ = [];
var len__12084__auto___18651 = arguments.length;
var i__12085__auto___18652 = (0);
while(true){
if((i__12085__auto___18652 < len__12084__auto___18651)){
args__12091__auto__.push((arguments[i__12085__auto___18652]));

var G__18654 = (i__12085__auto___18652 + (1));
i__12085__auto___18652 = G__18654;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.logging.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$logging_SLASH_log),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),(function (){var x__11759__auto__ = fulcro.logging.fline(_AMPERSAND_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$warn)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
});

fulcro.logging.warn.cljs$lang$maxFixedArity = (2);

fulcro.logging.warn.cljs$lang$applyTo = (function (seq18640){
var G__18641 = cljs.core.first(seq18640);
var seq18640__$1 = cljs.core.next(seq18640);
var G__18642 = cljs.core.first(seq18640__$1);
var seq18640__$2 = cljs.core.next(seq18640__$1);
return fulcro.logging.warn.cljs$core$IFn$_invoke$arity$variadic(G__18641,G__18642,seq18640__$2);
});

return null;
})()
;
fulcro.logging.warn.cljs$lang$macro = true;

var ret__12130__auto___18693 = (function (){
fulcro.logging.error = (function fulcro$logging$error(var_args){
var args__12091__auto__ = [];
var len__12084__auto___18697 = arguments.length;
var i__12085__auto___18698 = (0);
while(true){
if((i__12085__auto___18698 < len__12084__auto___18697)){
args__12091__auto__.push((arguments[i__12085__auto___18698]));

var G__18699 = (i__12085__auto___18698 + (1));
i__12085__auto___18698 = G__18699;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.logging.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$logging_SLASH_log),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),(function (){var x__11759__auto__ = fulcro.logging.fline(_AMPERSAND_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$error)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
});

fulcro.logging.error.cljs$lang$maxFixedArity = (2);

fulcro.logging.error.cljs$lang$applyTo = (function (seq18675){
var G__18676 = cljs.core.first(seq18675);
var seq18675__$1 = cljs.core.next(seq18675);
var G__18677 = cljs.core.first(seq18675__$1);
var seq18675__$2 = cljs.core.next(seq18675__$1);
return fulcro.logging.error.cljs$core$IFn$_invoke$arity$variadic(G__18676,G__18677,seq18675__$2);
});

return null;
})()
;
fulcro.logging.error.cljs$lang$macro = true;

var ret__12130__auto___18726 = (function (){
fulcro.logging.fatal = (function fulcro$logging$fatal(var_args){
var args__12091__auto__ = [];
var len__12084__auto___18727 = arguments.length;
var i__12085__auto___18728 = (0);
while(true){
if((i__12085__auto___18728 < len__12084__auto___18727)){
args__12091__auto__.push((arguments[i__12085__auto___18728]));

var G__18730 = (i__12085__auto___18728 + (1));
i__12085__auto___18728 = G__18730;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.logging.fatal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.logging.fatal.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$logging_SLASH_log),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),(function (){var x__11759__auto__ = fulcro.logging.fline(_AMPERSAND_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fatal)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
});

fulcro.logging.fatal.cljs$lang$maxFixedArity = (2);

fulcro.logging.fatal.cljs$lang$applyTo = (function (seq18703){
var G__18704 = cljs.core.first(seq18703);
var seq18703__$1 = cljs.core.next(seq18703);
var G__18705 = cljs.core.first(seq18703__$1);
var seq18703__$2 = cljs.core.next(seq18703__$1);
return fulcro.logging.fatal.cljs$core$IFn$_invoke$arity$variadic(G__18704,G__18705,seq18703__$2);
});

return null;
})()
;
fulcro.logging.fatal.cljs$lang$macro = true;


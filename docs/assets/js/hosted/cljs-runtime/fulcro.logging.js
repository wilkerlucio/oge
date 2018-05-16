goog.provide('fulcro.logging');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.stacktrace');
goog.require('goog.log');
goog.require('goog.object');
goog.require('goog.debug.Logger.Level');
goog.require('goog.debug.Console');
fulcro.logging.logging_priority = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"all","all",892129742),(100),new cljs.core.Keyword(null,"trace","trace",-1082747415),(6),new cljs.core.Keyword(null,"debug","debug",-1608172596),(5),new cljs.core.Keyword(null,"info","info",-317069002),(4),new cljs.core.Keyword(null,"warn","warn",-436710552),(3),new cljs.core.Keyword(null,"error","error",-978969032),(2),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(1),new cljs.core.Keyword(null,"none","none",1333468478),(0)], null);
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
fulcro.logging.level_map = (function (){var levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"fatal","fatal",1874419888)], null);
var glevels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ALL","FINE","FINE","INFO","SEVERE","WARNING","SEVERE"], null);
return cljs.core.zipmap(levels,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (levels,glevels){
return (function (p1__33440_SHARP_){
return goog.debug.Logger.Level.getPredefinedLevel(p1__33440_SHARP_);
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
var fulcro$logging$built_in_logger__delegate = function (p__33443,level,args){
var map__33444 = p__33443;
var map__33444__$1 = ((((!((map__33444 == null)))?(((((map__33444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33444):map__33444);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33444__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33444__$1,new cljs.core.Keyword(null,"line","line",212345235));
if(cljs.core.truth_(fulcro.logging.should_log_QMARK_(cljs.core.deref(fulcro.logging.current_logging_level),level))){
var location = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = file;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "?";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "?";
}
})())].join('');
var logger = goog.log.getLogger(file);
var first_exception = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (logger,location,map__33444,map__33444__$1,file,line){
return (function (p1__33441_SHARP_){
return (p1__33441_SHARP_ instanceof Error);
});})(logger,location,map__33444,map__33444__$1,file,line))
,args));
var message = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args);
if(cljs.core.truth_(logger)){
return logger.log(cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.logging.level_map,level,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fulcro.logging.level_map)),message,first_exception);
} else {
return null;
}
} else {
return null;
}
};
var fulcro$logging$built_in_logger = function (p__33443,level,var_args){
var args = null;
if (arguments.length > 2) {
var G__33467__i = 0, G__33467__a = new Array(arguments.length -  2);
while (G__33467__i < G__33467__a.length) {G__33467__a[G__33467__i] = arguments[G__33467__i + 2]; ++G__33467__i;}
  args = new cljs.core.IndexedSeq(G__33467__a,0,null);
} 
return fulcro$logging$built_in_logger__delegate.call(this,p__33443,level,args);};
fulcro$logging$built_in_logger.cljs$lang$maxFixedArity = 2;
fulcro$logging$built_in_logger.cljs$lang$applyTo = (function (arglist__33468){
var p__33443 = cljs.core.first(arglist__33468);
arglist__33468 = cljs.core.next(arglist__33468);
var level = cljs.core.first(arglist__33468);
var args = cljs.core.rest(arglist__33468);
return fulcro$logging$built_in_logger__delegate(p__33443,level,args);
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
var args__4502__auto__ = [];
var len__4499__auto___33478 = arguments.length;
var i__4500__auto___33479 = (0);
while(true){
if((i__4500__auto___33479 < len__4499__auto___33478)){
args__4502__auto__.push((arguments[i__4500__auto___33479]));

var G__33480 = (i__4500__auto___33479 + (1));
i__4500__auto___33479 = G__33480;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic = (function (location,level,things_to_print){
if(cljs.core.truth_(cljs.core.deref(fulcro.logging.logger))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(fulcro.logging.logger),location,level,things_to_print);
} else {
return null;
}
});

fulcro.logging._log.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.logging._log.cljs$lang$applyTo = (function (seq33471){
var G__33472 = cljs.core.first(seq33471);
var seq33471__$1 = cljs.core.next(seq33471);
var G__33473 = cljs.core.first(seq33471__$1);
var seq33471__$2 = cljs.core.next(seq33471__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33472,G__33473,seq33471__$2);
});

fulcro.logging.log_STAR_ = (function fulcro$logging$log_STAR_(){
return null;
});
fulcro.logging.fline = (function fulcro$logging$fline(and_form){
var G__33487 = and_form;
var G__33487__$1 = (((G__33487 == null))?null:cljs.core.meta(G__33487));
if((G__33487__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__33487__$1);
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

//# sourceMappingURL=fulcro.logging.js.map

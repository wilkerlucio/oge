// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.logging');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
goog.require('goog.debug.Console');
if(typeof fulcro.client.logging._STAR_logger_STAR_ !== 'undefined'){
} else {
fulcro.client.logging._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("fulcro.client");
})()
:null);
}
fulcro.client.logging.set_level = (function fulcro$client$logging$set_level(log_level){

return fulcro.client.logging._STAR_logger_STAR_.setLevel((function (){var G__13797 = (function (){var G__13798 = log_level;
var G__13798__$1 = (((G__13798 instanceof cljs.core.Keyword))?G__13798.fqn:null);
switch (G__13798__$1) {
case "all":
return "ALL";

break;
case "debug":
return "FINE";

break;
case "info":
return "INFO";

break;
case "warn":
return "WARNING";

break;
case "error":
return "SEVERE";

break;
case "none":
return "OFF";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13798__$1)].join('')));

}
})();
return goog.debug.Logger.Level.getPredefinedLevel(G__13797);
})());
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
fulcro.client.logging.value_message = (function fulcro$client$logging$value_message(msg,val){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),":\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0)))].join('');
});
/**
 * Print a debug message to the logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
fulcro.client.logging.debug = (function fulcro$client$logging$debug(var_args){
var G__13831 = arguments.length;
switch (G__13831) {
case 1:
return fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$1 = (function (value){
var G__13833_13845 = fulcro.client.logging._STAR_logger_STAR_;
var G__13834_13846 = fulcro.client.logging.value_message("DEBUG",value);
goog.log.fine(G__13833_13845,G__13834_13846);

return value;
});

fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
var G__13835_13853 = fulcro.client.logging._STAR_logger_STAR_;
var G__13836_13854 = fulcro.client.logging.value_message(msg,value);
goog.log.fine(G__13835_13853,G__13836_13854);

return value;
});

fulcro.client.logging.debug.cljs$lang$maxFixedArity = 2;

/**
 * output an INFO level message to the logger
 */
fulcro.client.logging.info = (function fulcro$client$logging$info(var_args){
var args__12091__auto__ = [];
var len__12084__auto___13864 = arguments.length;
var i__12085__auto___13865 = (0);
while(true){
if((i__12085__auto___13865 < len__12084__auto___13864)){
args__12091__auto__.push((arguments[i__12085__auto___13865]));

var G__13870 = (i__12085__auto___13865 + (1));
i__12085__auto___13865 = G__13870;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__13861 = fulcro.client.logging._STAR_logger_STAR_;
var G__13862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.info(G__13861,G__13862);
});

fulcro.client.logging.info.cljs$lang$maxFixedArity = (0);

fulcro.client.logging.info.cljs$lang$applyTo = (function (seq13856){
return fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13856));
});

/**
 * output a WARNING level message to the logger
 */
fulcro.client.logging.warn = (function fulcro$client$logging$warn(var_args){
var args__12091__auto__ = [];
var len__12084__auto___13887 = arguments.length;
var i__12085__auto___13888 = (0);
while(true){
if((i__12085__auto___13888 < len__12084__auto___13887)){
args__12091__auto__.push((arguments[i__12085__auto___13888]));

var G__13889 = (i__12085__auto___13888 + (1));
i__12085__auto___13888 = G__13889;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__13881 = fulcro.client.logging._STAR_logger_STAR_;
var G__13882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.warning(G__13881,G__13882);
});

fulcro.client.logging.warn.cljs$lang$maxFixedArity = (0);

fulcro.client.logging.warn.cljs$lang$applyTo = (function (seq13879){
return fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13879));
});

/**
 * output an ERROR level message to the logger
 */
fulcro.client.logging.error = (function fulcro$client$logging$error(var_args){
var args__12091__auto__ = [];
var len__12084__auto___13907 = arguments.length;
var i__12085__auto___13908 = (0);
while(true){
if((i__12085__auto___13908 < len__12084__auto___13907)){
args__12091__auto__.push((arguments[i__12085__auto___13908]));

var G__13909 = (i__12085__auto___13908 + (1));
i__12085__auto___13908 = G__13909;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__13904 = fulcro.client.logging._STAR_logger_STAR_;
var G__13905 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.error(G__13904,G__13905);
});

fulcro.client.logging.error.cljs$lang$maxFixedArity = (0);

fulcro.client.logging.error.cljs$lang$applyTo = (function (seq13898){
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13898));
});


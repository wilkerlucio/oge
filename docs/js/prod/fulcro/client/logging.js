// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.logging');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
fulcro.client.logging.set_level = (function fulcro$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel((function (){var G__33238 = (function (){var G__33239 = log_level;
var G__33239__$1 = (((G__33239 instanceof cljs.core.Keyword))?G__33239.fqn:null);
switch (G__33239__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33239__$1)].join('')));

}
})();
return goog.debug.Logger.Level.getPredefinedLevel(G__33238);
})());
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
fulcro.client.logging.value_message = (function fulcro$client$logging$value_message(msg,val){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),":\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__11539__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33244_33247 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33245_33248 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33244_33247,_STAR_print_fn_STAR_33245_33248,sb__11539__auto__){
return (function (x__11540__auto__){
return sb__11539__auto__.append(x__11540__auto__);
});})(_STAR_print_newline_STAR_33244_33247,_STAR_print_fn_STAR_33245_33248,sb__11539__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33245_33248;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33244_33247;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__11539__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
fulcro.client.logging.debug = (function fulcro$client$logging$debug(var_args){
var G__33253 = arguments.length;
switch (G__33253) {
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
var G__33254_33260 = om.next._STAR_logger_STAR_;
var G__33255_33261 = fulcro.client.logging.value_message("DEBUG",value);
goog.log.fine(G__33254_33260,G__33255_33261);

return value;
});

fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
var G__33256_33262 = om.next._STAR_logger_STAR_;
var G__33257_33263 = fulcro.client.logging.value_message(msg,value);
goog.log.fine(G__33256_33262,G__33257_33263);

return value;
});

fulcro.client.logging.debug.cljs$lang$maxFixedArity = 2;

/**
 * output an INFO level message to the Om logger
 */
fulcro.client.logging.info = (function fulcro$client$logging$info(var_args){
var args__11698__auto__ = [];
var len__11691__auto___33269 = arguments.length;
var i__11692__auto___33270 = (0);
while(true){
if((i__11692__auto___33270 < len__11691__auto___33269)){
args__11698__auto__.push((arguments[i__11692__auto___33270]));

var G__33271 = (i__11692__auto___33270 + (1));
i__11692__auto___33270 = G__33271;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__33266 = om.next._STAR_logger_STAR_;
var G__33267 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.info(G__33266,G__33267);
});

fulcro.client.logging.info.cljs$lang$maxFixedArity = (0);

fulcro.client.logging.info.cljs$lang$applyTo = (function (seq33264){
return fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33264));
});

/**
 * output a WARNING level message to the Om logger
 */
fulcro.client.logging.warn = (function fulcro$client$logging$warn(var_args){
var args__11698__auto__ = [];
var len__11691__auto___33283 = arguments.length;
var i__11692__auto___33284 = (0);
while(true){
if((i__11692__auto___33284 < len__11691__auto___33283)){
args__11698__auto__.push((arguments[i__11692__auto___33284]));

var G__33285 = (i__11692__auto___33284 + (1));
i__11692__auto___33284 = G__33285;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__33280 = om.next._STAR_logger_STAR_;
var G__33281 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.warning(G__33280,G__33281);
});

fulcro.client.logging.warn.cljs$lang$maxFixedArity = (0);

fulcro.client.logging.warn.cljs$lang$applyTo = (function (seq33277){
return fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33277));
});

/**
 * output an ERROR level message to the Om logger
 */
fulcro.client.logging.error = (function fulcro$client$logging$error(var_args){
var args__11698__auto__ = [];
var len__11691__auto___33297 = arguments.length;
var i__11692__auto___33298 = (0);
while(true){
if((i__11692__auto___33298 < len__11691__auto___33297)){
args__11698__auto__.push((arguments[i__11692__auto___33298]));

var G__33299 = (i__11692__auto___33298 + (1));
i__11692__auto___33298 = G__33299;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__33293 = om.next._STAR_logger_STAR_;
var G__33295 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.error(G__33293,G__33295);
});

fulcro.client.logging.error.cljs$lang$maxFixedArity = (0);

fulcro.client.logging.error.cljs$lang$applyTo = (function (seq33291){
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33291));
});


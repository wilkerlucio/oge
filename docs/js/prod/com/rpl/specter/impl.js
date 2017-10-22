// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.rpl.specter.protocols');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('clojure.walk');
com.rpl.specter.impl.NONE = cljs.core.cst$kw$com$rpl$specter$impl_SLASH_NONE;
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SPY:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))], 0));

return e;
});
com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join('');
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__11698__auto__ = [];
var len__11691__auto___24005 = arguments.length;
var i__11692__auto___24006 = (0);
while(true){
if((i__11692__auto___24006 < len__11691__auto___24005)){
args__11698__auto__.push((arguments[i__11692__auto___24006]));

var G__24007 = (i__11692__auto___24006 + (1));
i__11692__auto___24006 = G__24007;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq23998){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23998));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__24014 = null;
var G__24014__0 = (function (){
return v;
});
var G__24014__1 = (function (a1){
return v;
});
var G__24014__2 = (function (a1,a2){
return v;
});
var G__24014__3 = (function (a1,a2,a3){
return v;
});
var G__24014__4 = (function (a1,a2,a3,a4){
return v;
});
var G__24014__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__24014__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__24014__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__24014__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__24014__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__24014__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__24014__11 = (function() { 
var G__24021__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__24021 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__24024__i = 0, G__24024__a = new Array(arguments.length -  10);
while (G__24024__i < G__24024__a.length) {G__24024__a[G__24024__i] = arguments[G__24024__i + 10]; ++G__24024__i;}
  r = new cljs.core.IndexedSeq(G__24024__a,0,null);
} 
return G__24021__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__24021.cljs$lang$maxFixedArity = 10;
G__24021.cljs$lang$applyTo = (function (arglist__24026){
var a1 = cljs.core.first(arglist__24026);
arglist__24026 = cljs.core.next(arglist__24026);
var a2 = cljs.core.first(arglist__24026);
arglist__24026 = cljs.core.next(arglist__24026);
var a3 = cljs.core.first(arglist__24026);
arglist__24026 = cljs.core.next(arglist__24026);
var a4 = cljs.core.first(arglist__24026);
arglist__24026 = cljs.core.next(arglist__24026);
var a5 = cljs.core.first(arglist__24026);
arglist__24026 = cljs.core.next(arglist__24026);
var a6 = cljs.core.first(arglist__24026);
arglist__24026 = cljs.core.next(arglist__24026);
var a7 = cljs.core.first(arglist__24026);
arglist__24026 = cljs.core.next(arglist__24026);
var a8 = cljs.core.first(arglist__24026);
arglist__24026 = cljs.core.next(arglist__24026);
var a9 = cljs.core.first(arglist__24026);
arglist__24026 = cljs.core.next(arglist__24026);
var a10 = cljs.core.first(arglist__24026);
var r = cljs.core.rest(arglist__24026);
return G__24021__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__24021.cljs$core$IFn$_invoke$arity$variadic = G__24021__delegate;
return G__24021;
})()
;
G__24014 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__24014__0.call(this);
case 1:
return G__24014__1.call(this,a1);
case 2:
return G__24014__2.call(this,a1,a2);
case 3:
return G__24014__3.call(this,a1,a2,a3);
case 4:
return G__24014__4.call(this,a1,a2,a3,a4);
case 5:
return G__24014__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__24014__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__24014__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__24014__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__24014__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__24014__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__24035 = null;
if (arguments.length > 10) {
var G__24037__i = 0, G__24037__a = new Array(arguments.length -  10);
while (G__24037__i < G__24037__a.length) {G__24037__a[G__24037__i] = arguments[G__24037__i + 10]; ++G__24037__i;}
G__24035 = new cljs.core.IndexedSeq(G__24037__a,0,null);
}
return G__24014__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__24035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24014.cljs$lang$maxFixedArity = 10;
G__24014.cljs$lang$applyTo = G__24014__11.cljs$lang$applyTo;
G__24014.cljs$core$IFn$_invoke$arity$0 = G__24014__0;
G__24014.cljs$core$IFn$_invoke$arity$1 = G__24014__1;
G__24014.cljs$core$IFn$_invoke$arity$2 = G__24014__2;
G__24014.cljs$core$IFn$_invoke$arity$3 = G__24014__3;
G__24014.cljs$core$IFn$_invoke$arity$4 = G__24014__4;
G__24014.cljs$core$IFn$_invoke$arity$5 = G__24014__5;
G__24014.cljs$core$IFn$_invoke$arity$6 = G__24014__6;
G__24014.cljs$core$IFn$_invoke$arity$7 = G__24014__7;
G__24014.cljs$core$IFn$_invoke$arity$8 = G__24014__8;
G__24014.cljs$core$IFn$_invoke$arity$9 = G__24014__9;
G__24014.cljs$core$IFn$_invoke$arity$10 = G__24014__10;
G__24014.cljs$core$IFn$_invoke$arity$variadic = G__24014__11.cljs$core$IFn$_invoke$arity$variadic;
return G__24014;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__11698__auto__ = [];
var len__11691__auto___24047 = arguments.length;
var i__11692__auto___24048 = (0);
while(true){
if((i__11692__auto___24048 < len__11691__auto___24047)){
args__11698__auto__.push((arguments[i__11692__auto___24048]));

var G__24049 = (i__11692__auto___24048 + (1));
i__11692__auto___24048 = G__24049;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq24041){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24041));
});

com.rpl.specter.impl.cljs_analyzer_macroexpand_1 = (function com$rpl$specter$impl$cljs_analyzer_macroexpand_1(){
return cljs.analyzer.macroexpand_1;
});
com.rpl.specter.impl.clj_macroexpand_all = (function com$rpl$specter$impl$clj_macroexpand_all(form){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["not implemented"], 0));
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["intern not supported in ClojureScript"], 0));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__11482__auto__ = cljs.core.system_time();
var ret__11483__auto__ = (function (){var n__11457__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__11457__auto__)){
(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null));

var G__24058 = (_ + (1));
_ = G__24058;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__11482__auto__).toFixed((6)))," msecs"].join('')], 0));

return ret__11483__auto__;
});
com.rpl.specter.impl.exec_select_STAR_ = (function com$rpl$specter$impl$exec_select_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4(null,vals,structure,next_fn);
});
com.rpl.specter.impl.exec_transform_STAR_ = (function com$rpl$specter$impl$exec_transform_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4(null,vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if((!((paths == null))) && (!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
var x__11145__auto__ = (((paths == null))?null:paths);
var m__11146__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__11146__auto__.call(null,paths));
} else {
var m__11146__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(paths) : m__11146__auto____$1.call(null,paths));
} else {
throw cljs.core.missing_protocol("PathComposer.do-comp-paths",paths);
}
}
}
});

com.rpl.specter.impl.rich_nav_QMARK_ = (function com$rpl$specter$impl$rich_nav_QMARK_(n){
if(!((n == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === n.com$rpl$specter$protocols$RichNavigator$))){
return true;
} else {
if((!n.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
}
});
com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(p){
if(cljs.core.truth_(com.rpl.specter.impl.rich_nav_QMARK_(p))){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths(p);
}
});
com.rpl.specter.impl.coerce_object = (function com$rpl$specter$impl$coerce_object(this$){
if(cljs.core.truth_(com.rpl.specter.impl.rich_nav_QMARK_(this$))){
return this$;
} else {
if(((!((this$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.com$rpl$specter$protocols$ImplicitNav$)))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$))){
return com.rpl.specter.protocols.implicit_nav(this$);
} else {
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not a navigator: ",this$," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(this$)], 0))], 0));

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoercePath.coerce-path",this$);
}
}
}
});

goog.object.set(com.rpl.specter.impl.CoercePath,"null",true);

var G__24088_24110 = com.rpl.specter.impl.coerce_path;
var G__24089_24111 = "null";
var G__24090_24112 = ((function (G__24088_24110,G__24089_24111){
return (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
});})(G__24088_24110,G__24089_24111))
;
goog.object.set(G__24088_24110,G__24089_24111,G__24090_24112);

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.do_comp_paths(this$__$1);
});

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
});

goog.object.set(com.rpl.specter.impl.CoercePath,"_",true);

var G__24106_24121 = com.rpl.specter.impl.coerce_path;
var G__24107_24122 = "_";
var G__24108_24123 = ((function (G__24106_24121,G__24107_24122){
return (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
});})(G__24106_24121,G__24107_24122))
;
goog.object.set(G__24106_24121,G__24107_24122,G__24108_24123);
com.rpl.specter.impl.STAY_STAR_ = (function (){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl24125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl24125 = (function (meta24126){
this.meta24126 = meta24126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl24125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24127,meta24126__$1){
var self__ = this;
var _24127__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl24125(meta24126__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl24125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24127){
var self__ = this;
var _24127__$1 = this;
return self__.meta24126;
});

com.rpl.specter.impl.t_com$rpl$specter$impl24125.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl24125.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
});

com.rpl.specter.impl.t_com$rpl$specter$impl24125.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
});

com.rpl.specter.impl.t_com$rpl$specter$impl24125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta24126], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl24125.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl24125.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl24125";

com.rpl.specter.impl.t_com$rpl$specter$impl24125.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl24125");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl24125 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl24125(meta24126){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl24125(meta24126));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl24125(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl24157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl24157 = (function (nav1,nav2,meta24158){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta24158 = meta24158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl24157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24159,meta24158__$1){
var self__ = this;
var _24159__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl24157(self__.nav1,self__.nav2,meta24158__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl24157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24159){
var self__ = this;
var _24159__$1 = this;
return self__.meta24158;
});

com.rpl.specter.impl.t_com$rpl$specter$impl24157.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl24157.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl24157.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl24157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nav1,cljs.core.cst$sym$nav2,cljs.core.cst$sym$meta24158], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl24157.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl24157.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl24157";

com.rpl.specter.impl.t_com$rpl$specter$impl24157.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl24157");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl24157 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl24157(nav1__$1,nav2__$1,meta24158){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl24157(nav1__$1,nav2__$1,meta24158));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl24157(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(com.rpl.specter.impl.PathComposer,"null",true);

var G__24179_24192 = com.rpl.specter.impl.do_comp_paths;
var G__24180_24193 = "null";
var G__24181_24194 = ((function (G__24179_24192,G__24180_24193){
return (function (o){
return com.rpl.specter.impl.coerce_path(o);
});})(G__24179_24192,G__24180_24193))
;
goog.object.set(G__24179_24192,G__24180_24193,G__24181_24194);

goog.object.set(com.rpl.specter.impl.PathComposer,"_",true);

var G__24184_24196 = com.rpl.specter.impl.do_comp_paths;
var G__24185_24197 = "_";
var G__24186_24198 = ((function (G__24184_24196,G__24185_24197){
return (function (o){
return com.rpl.specter.impl.coerce_path(o);
});})(G__24184_24196,G__24185_24197))
;
goog.object.set(G__24184_24196,G__24185_24197,G__24186_24198);

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 = (function (navigators){
var navigators__$1 = this;
var coerced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.coerce_path,navigators__$1);
if(cljs.core.empty_QMARK_(coerced)){
return com.rpl.specter.impl.STAY_STAR_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coerced))){
return cljs.core.first(coerced);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.combine_two_navs,coerced);

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((!((cell == null))) && (!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__11145__auto__ = (((cell == null))?null:cell);
var m__11146__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__11146__auto__.call(null,cell,x));
} else {
var m__11146__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(cell,x) : m__11146__auto____$1.call(null,cell,x));
} else {
throw cljs.core.missing_protocol("PMutableCell.set_cell",cell);
}
}
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
});
com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$q,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$volatile_DASH_mutable,true], null))], null);
});

com.rpl.specter.impl.MutableCell.cljs$lang$type = true;

com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell";

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var G__24211 = arguments.length;
switch (G__24211) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
});

com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1;

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell(cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = (function (){var G__24220 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__24220) : afn.call(null,G__24220));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null,structure__$1));
} else {
var G__24232 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__24232) : result_fn.call(null,G__24232));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});
com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl24248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl24248 = (function (apath,structure,meta24249){
this.apath = apath;
this.structure = structure;
this.meta24249 = meta24249;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl24248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24250,meta24249__$1){
var self__ = this;
var _24250__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl24248(self__.apath,self__.structure,meta24249__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl24248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24250){
var self__ = this;
var _24250__$1 = this;
return self__.meta24249;
});

com.rpl.specter.impl.t_com$rpl$specter$impl24248.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
});

com.rpl.specter.impl.t_com$rpl$specter$impl24248.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(start);
com.rpl.specter.impl.compiled_traverse_STAR_(self__.apath,((function (cell,this$__$1){
return (function (elem){
var curr = com.rpl.specter.impl.get_cell(cell);
var newv = (afn.cljs$core$IFn$_invoke$arity$2 ? afn.cljs$core$IFn$_invoke$arity$2(curr,elem) : afn.call(null,curr,elem));
com.rpl.specter.impl.set_cell_BANG_(cell,newv);

return newv;
});})(cell,this$__$1))
,self__.structure);

return com.rpl.specter.impl.get_cell(cell);
});

com.rpl.specter.impl.t_com$rpl$specter$impl24248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$apath,cljs.core.cst$sym$structure,cljs.core.cst$sym$meta24249], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl24248.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl24248.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl24248";

com.rpl.specter.impl.t_com$rpl$specter$impl24248.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl24248");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl24248 = (function com$rpl$specter$impl$do_compiled_traverse_STAR__$___GT_t_com$rpl$specter$impl24248(apath__$1,structure__$1,meta24249){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl24248(apath__$1,structure__$1,meta24249));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl24248(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl24272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl24272 = (function (apath,structure,traverser,meta24273){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta24273 = meta24273;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl24272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (traverser){
return (function (_24274,meta24273__$1){
var self__ = this;
var _24274__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl24272(self__.apath,self__.structure,self__.traverser,meta24273__$1));
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl24272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (traverser){
return (function (_24274){
var self__ = this;
var _24274__$1 = this;
return self__.meta24273;
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl24272.prototype.cljs$core$IReduce$_reduce$arity$2 = ((function (traverser){
return (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl24272.prototype.cljs$core$IReduce$_reduce$arity$3 = ((function (traverser){
return (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.traverser,afn,start);
return cljs.core.unreduced(res);
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl24272.getBasis = ((function (traverser){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$apath,cljs.core.cst$sym$structure,cljs.core.cst$sym$traverser,cljs.core.cst$sym$meta24273], null);
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl24272.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl24272.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl24272";

com.rpl.specter.impl.t_com$rpl$specter$impl24272.cljs$lang$ctorPrWriter = ((function (traverser){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl24272");
});})(traverser))
;

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl24272 = ((function (traverser){
return (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl24272(apath__$1,structure__$1,traverser__$1,meta24273){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl24272(apath__$1,structure__$1,traverser__$1,meta24273));
});})(traverser))
;

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl24272(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__24303 = null;
var G__24303__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__24303__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__24303__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null,r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__24303 = function(result,input){
switch(arguments.length){
case 0:
return G__24303__0.call(this);
case 1:
return G__24303__1.call(this,result);
case 2:
return G__24303__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24303.cljs$core$IFn$_invoke$arity$0 = G__24303__0;
G__24303.cljs$core$IFn$_invoke$arity$1 = G__24303__1;
G__24303.cljs$core$IFn$_invoke$arity$2 = G__24303__2;
return G__24303;
})()
});
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
return com.rpl.specter.impl.set_cell_BANG_(res,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(curr,structure__$1));
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

return cljs.core.persistent_BANG_(com.rpl.specter.impl.get_cell(res));
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((com.rpl.specter.impl.NONE === ret)){
com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Found no elements for select-one! on ",structure], 0));
} else {
}

return ret;
});
com.rpl.specter.impl.compiled_select_any_STAR_ = (function com$rpl$specter$impl$compiled_select_any_STAR_(var_args){
var G__24366 = arguments.length;
switch (G__24366) {
case 2:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (path,structure){
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(path,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (path,vals,structure){
return cljs.core.unreduced(com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,cljs.core.reduced,vals,structure));
});

com.rpl.specter.impl.compiled_select_any_STAR_.cljs$lang$maxFixedArity = 3;

com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
var ret = com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_ = (function com$rpl$specter$impl$compiled_selected_any_QMARK__STAR_(path,structure){
return !((com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure)));
});
com.rpl.specter.impl.terminal_STAR_ = (function com$rpl$specter$impl$terminal_STAR_(afn,vals,structure){
if((vals === cljs.core.PersistentVector.EMPTY)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,structure));
}
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,(function (vals,structure__$1){
return com.rpl.specter.impl.terminal_STAR_(transform_fn,vals,structure__$1);
}));
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return ((f instanceof cljs.core.LazySeq)) || (cljs.core.list_QMARK_(f));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k24423,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__24438 = k24423;
var G__24438__$1 = (((G__24438 instanceof cljs.core.Keyword))?G__24438.fqn:null);
switch (G__24438__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24423,else__11103__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24422){
var self__ = this;
var G__24422__$1 = this;
return (new cljs.core.RecordIter((0),G__24422__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$sym], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__24474 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__24474(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24428,other24429){
var self__ = this;
var this24428__$1 = this;
return (!((other24429 == null))) && ((this24428__$1.constructor === other24429.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24428__$1.val,other24429.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24428__$1.sym,other24429.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24428__$1.__extmap,other24429.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,null,cljs.core.cst$kw$sym,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__24422){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__24535 = cljs.core.keyword_identical_QMARK_;
var expr__24536 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__24539 = cljs.core.cst$kw$val;
var G__24540 = expr__24536;
return (pred__24535.cljs$core$IFn$_invoke$arity$2 ? pred__24535.cljs$core$IFn$_invoke$arity$2(G__24539,G__24540) : pred__24535.call(null,G__24539,G__24540));
})())){
return (new com.rpl.specter.impl.LocalSym(G__24422,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24544 = cljs.core.cst$kw$sym;
var G__24545 = expr__24536;
return (pred__24535.cljs$core$IFn$_invoke$arity$2 ? pred__24535.cljs$core$IFn$_invoke$arity$2(G__24544,G__24545) : pred__24535.call(null,G__24544,G__24545));
})())){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__24422,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__24422),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__24422){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__24422,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$sym], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__24433){
return (new com.rpl.specter.impl.LocalSym(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__24433),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__24433),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24433,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sym], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.VarUse = (function (val,var$,sym,__meta,__extmap,__hash){
this.val = val;
this.var$ = var$;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k24621,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__24631 = k24621;
var G__24631__$1 = (((G__24631 instanceof cljs.core.Keyword))?G__24631.fqn:null);
switch (G__24631__$1) {
case "val":
return self__.val;

break;
case "var":
return self__.var$;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24621,else__11103__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$var,self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24620){
var self__ = this;
var G__24620__$1 = this;
return (new cljs.core.RecordIter((0),G__24620__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$var,cljs.core.cst$kw$sym], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__24644 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__24644(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24622,other24623){
var self__ = this;
var this24622__$1 = this;
return (!((other24623 == null))) && ((this24622__$1.constructor === other24623.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24622__$1.val,other24623.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24622__$1.var,other24623.var)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24622__$1.sym,other24623.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24622__$1.__extmap,other24623.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$val,null,cljs.core.cst$kw$sym,null,cljs.core.cst$kw$var,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__24620){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__24655 = cljs.core.keyword_identical_QMARK_;
var expr__24656 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__24658 = cljs.core.cst$kw$val;
var G__24659 = expr__24656;
return (pred__24655.cljs$core$IFn$_invoke$arity$2 ? pred__24655.cljs$core$IFn$_invoke$arity$2(G__24658,G__24659) : pred__24655.call(null,G__24658,G__24659));
})())){
return (new com.rpl.specter.impl.VarUse(G__24620,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24661 = cljs.core.cst$kw$var;
var G__24662 = expr__24656;
return (pred__24655.cljs$core$IFn$_invoke$arity$2 ? pred__24655.cljs$core$IFn$_invoke$arity$2(G__24661,G__24662) : pred__24655.call(null,G__24661,G__24662));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,G__24620,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24663 = cljs.core.cst$kw$sym;
var G__24664 = expr__24656;
return (pred__24655.cljs$core$IFn$_invoke$arity$2 ? pred__24655.cljs$core$IFn$_invoke$arity$2(G__24663,G__24664) : pred__24655.call(null,G__24663,G__24664));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__24620,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__24620),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$var,self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__24620){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__24620,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$var,cljs.core.cst$sym$sym], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,var$,sym){
return (new com.rpl.specter.impl.VarUse(val,var$,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__24625){
return (new com.rpl.specter.impl.VarUse(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__24625),cljs.core.cst$kw$var.cljs$core$IFn$_invoke$arity$1(G__24625),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__24625),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24625,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$var,cljs.core.cst$kw$sym], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k24691,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__24718 = k24691;
var G__24718__$1 = (((G__24718 instanceof cljs.core.Keyword))?G__24718.fqn:null);
switch (G__24718__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24691,else__11103__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24690){
var self__ = this;
var G__24690__$1 = this;
return (new cljs.core.RecordIter((0),G__24690__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__24737 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__24737(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24692,other24693){
var self__ = this;
var this24692__$1 = this;
return (!((other24693 == null))) && ((this24692__$1.constructor === other24693.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24692__$1.val,other24693.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24692__$1.code,other24693.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24692__$1.__extmap,other24693.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,null,cljs.core.cst$kw$code,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__24690){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__24745 = cljs.core.keyword_identical_QMARK_;
var expr__24746 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__24748 = cljs.core.cst$kw$val;
var G__24749 = expr__24746;
return (pred__24745.cljs$core$IFn$_invoke$arity$2 ? pred__24745.cljs$core$IFn$_invoke$arity$2(G__24748,G__24749) : pred__24745.call(null,G__24748,G__24749));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(G__24690,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24750 = cljs.core.cst$kw$code;
var G__24751 = expr__24746;
return (pred__24745.cljs$core$IFn$_invoke$arity$2 ? pred__24745.cljs$core$IFn$_invoke$arity$2(G__24750,G__24751) : pred__24745.call(null,G__24750,G__24751));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__24690,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__24690),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__24690){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__24690,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$code], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__24695){
return (new com.rpl.specter.impl.SpecialFormUse(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__24695),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__24695),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24695,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k24790,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__24799 = k24790;
var G__24799__$1 = (((G__24799 instanceof cljs.core.Keyword))?G__24799.fqn:null);
switch (G__24799__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24790,else__11103__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24789){
var self__ = this;
var G__24789__$1 = this;
return (new cljs.core.RecordIter((0),G__24789__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$params,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__24808 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__24808(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24791,other24792){
var self__ = this;
var this24791__$1 = this;
return (!((other24792 == null))) && ((this24791__$1.constructor === other24792.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24791__$1.op,other24792.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24791__$1.params,other24792.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24791__$1.code,other24792.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24791__$1.__extmap,other24792.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$op,null,cljs.core.cst$kw$code,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__24789){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__24812 = cljs.core.keyword_identical_QMARK_;
var expr__24813 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__24815 = cljs.core.cst$kw$op;
var G__24816 = expr__24813;
return (pred__24812.cljs$core$IFn$_invoke$arity$2 ? pred__24812.cljs$core$IFn$_invoke$arity$2(G__24815,G__24816) : pred__24812.call(null,G__24815,G__24816));
})())){
return (new com.rpl.specter.impl.FnInvocation(G__24789,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24817 = cljs.core.cst$kw$params;
var G__24818 = expr__24813;
return (pred__24812.cljs$core$IFn$_invoke$arity$2 ? pred__24812.cljs$core$IFn$_invoke$arity$2(G__24817,G__24818) : pred__24812.call(null,G__24817,G__24818));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__24789,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24819 = cljs.core.cst$kw$code;
var G__24820 = expr__24813;
return (pred__24812.cljs$core$IFn$_invoke$arity$2 ? pred__24812.cljs$core$IFn$_invoke$arity$2(G__24819,G__24820) : pred__24812.call(null,G__24819,G__24820));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__24789,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__24789),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__24789){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__24789,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$op,cljs.core.cst$sym$params,cljs.core.cst$sym$code], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__24793){
return (new com.rpl.specter.impl.FnInvocation(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(G__24793),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__24793),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__24793),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24793,cljs.core.cst$kw$op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,cljs.core.cst$kw$code], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicVal = (function (code,__meta,__extmap,__hash){
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k24841,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__24852 = k24841;
var G__24852__$1 = (((G__24852 instanceof cljs.core.Keyword))?G__24852.fqn:null);
switch (G__24852__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24841,else__11103__auto__);

}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24840){
var self__ = this;
var G__24840__$1 = this;
return (new cljs.core.RecordIter((0),G__24840__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__24861 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__24861(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24842,other24843){
var self__ = this;
var this24842__$1 = this;
return (!((other24843 == null))) && ((this24842__$1.constructor === other24843.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24842__$1.code,other24843.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24842__$1.__extmap,other24843.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__24840){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__24887 = cljs.core.keyword_identical_QMARK_;
var expr__24888 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__24894 = cljs.core.cst$kw$code;
var G__24895 = expr__24888;
return (pred__24887.cljs$core$IFn$_invoke$arity$2 ? pred__24887.cljs$core$IFn$_invoke$arity$2(G__24894,G__24895) : pred__24887.call(null,G__24894,G__24895));
})())){
return (new com.rpl.specter.impl.DynamicVal(G__24840,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__24840),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__24840){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__24840,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$code], null);
});

com.rpl.specter.impl.DynamicVal.cljs$lang$type = true;

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicVal");
});

com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/DynamicVal");
});

com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__24845){
return (new com.rpl.specter.impl.DynamicVal(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__24845),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24845,cljs.core.cst$kw$code)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicPath = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k24993,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__25001 = k24993;
var G__25001__$1 = (((G__25001 instanceof cljs.core.Keyword))?G__25001.fqn:null);
switch (G__25001__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24993,else__11103__auto__);

}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24992){
var self__ = this;
var G__24992__$1 = this;
return (new cljs.core.RecordIter((0),G__24992__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__25017 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__25017(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24994,other24995){
var self__ = this;
var this24994__$1 = this;
return (!((other24995 == null))) && ((this24994__$1.constructor === other24995.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24994__$1.path,other24995.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24994__$1.__extmap,other24995.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__24992){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__25026 = cljs.core.keyword_identical_QMARK_;
var expr__25027 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__25029 = cljs.core.cst$kw$path;
var G__25030 = expr__25027;
return (pred__25026.cljs$core$IFn$_invoke$arity$2 ? pred__25026.cljs$core$IFn$_invoke$arity$2(G__25029,G__25030) : pred__25026.call(null,G__25029,G__25030));
})())){
return (new com.rpl.specter.impl.DynamicPath(G__24992,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__24992),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__24992){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__24992,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path], null);
});

com.rpl.specter.impl.DynamicPath.cljs$lang$type = true;

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicPath");
});

com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/DynamicPath");
});

com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__24997){
return (new com.rpl.specter.impl.DynamicPath(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__24997),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24997,cljs.core.cst$kw$path)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicFunction = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k25065,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__25072 = k25065;
var G__25072__$1 = (((G__25072 instanceof cljs.core.Keyword))?G__25072.fqn:null);
switch (G__25072__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25065,else__11103__auto__);

}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25064){
var self__ = this;
var G__25064__$1 = this;
return (new cljs.core.RecordIter((0),G__25064__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$params,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__25078 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__25078(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25066,other25067){
var self__ = this;
var this25066__$1 = this;
return (!((other25067 == null))) && ((this25066__$1.constructor === other25067.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25066__$1.op,other25067.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25066__$1.params,other25067.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25066__$1.code,other25067.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25066__$1.__extmap,other25067.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$op,null,cljs.core.cst$kw$code,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__25064){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__25085 = cljs.core.keyword_identical_QMARK_;
var expr__25086 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__25089 = cljs.core.cst$kw$op;
var G__25090 = expr__25086;
return (pred__25085.cljs$core$IFn$_invoke$arity$2 ? pred__25085.cljs$core$IFn$_invoke$arity$2(G__25089,G__25090) : pred__25085.call(null,G__25089,G__25090));
})())){
return (new com.rpl.specter.impl.DynamicFunction(G__25064,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25091 = cljs.core.cst$kw$params;
var G__25092 = expr__25086;
return (pred__25085.cljs$core$IFn$_invoke$arity$2 ? pred__25085.cljs$core$IFn$_invoke$arity$2(G__25091,G__25092) : pred__25085.call(null,G__25091,G__25092));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__25064,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25094 = cljs.core.cst$kw$code;
var G__25095 = expr__25086;
return (pred__25085.cljs$core$IFn$_invoke$arity$2 ? pred__25085.cljs$core$IFn$_invoke$arity$2(G__25094,G__25095) : pred__25085.call(null,G__25094,G__25095));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__25064,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__25064),null));
}
}
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__25064){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__25064,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$op,cljs.core.cst$sym$params,cljs.core.cst$sym$code], null);
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true;

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/DynamicFunction");
});

com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/DynamicFunction");
});

com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params,code){
return (new com.rpl.specter.impl.DynamicFunction(op,params,code,null,null,null));
});

com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__25070){
return (new com.rpl.specter.impl.DynamicFunction(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(G__25070),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__25070),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__25070),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25070,cljs.core.cst$kw$op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,cljs.core.cst$kw$code], 0))),null));
});

com.rpl.specter.impl.dynamic_param_QMARK_ = (function com$rpl$specter$impl$dynamic_param_QMARK_(o){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([com.rpl.specter.impl.DynamicPath,com.rpl.specter.impl.DynamicFunction,com.rpl.specter.impl.DynamicVal]),cljs.core.type(o));
});
com.rpl.specter.impl.static_path_QMARK_ = (function com$rpl$specter$impl$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.impl.static_path_QMARK_,path);
} else {
return cljs.core.not(com.rpl.specter.impl.dynamic_param_QMARK_(path));
}
});
com.rpl.specter.impl.late_path = (function com$rpl$specter$impl$late_path(path){
if(cljs.core.truth_(com.rpl.specter.impl.static_path_QMARK_(path))){
return com.rpl.specter.impl.comp_paths_STAR_(path);
} else {
return com.rpl.specter.impl.__GT_DynamicPath(path);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CachedPathInfo = (function (dynamic_QMARK_,precompiled,__meta,__extmap,__hash){
this.dynamic_QMARK_ = dynamic_QMARK_;
this.precompiled = precompiled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k25136,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__25172 = k25136;
var G__25172__$1 = (((G__25172 instanceof cljs.core.Keyword))?G__25172.fqn:null);
switch (G__25172__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25136,else__11103__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dynamic_QMARK_,self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$precompiled,self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25135){
var self__ = this;
var G__25135__$1 = this;
return (new cljs.core.RecordIter((0),G__25135__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dynamic_QMARK_,cljs.core.cst$kw$precompiled], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__25185 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__25185(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25137,other25138){
var self__ = this;
var this25137__$1 = this;
return (!((other25138 == null))) && ((this25137__$1.constructor === other25138.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25137__$1.dynamic_QMARK_,other25138.dynamic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25137__$1.precompiled,other25138.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25137__$1.__extmap,other25138.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dynamic_QMARK_,null,cljs.core.cst$kw$precompiled,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__25135){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__25190 = cljs.core.keyword_identical_QMARK_;
var expr__25191 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__25194 = cljs.core.cst$kw$dynamic_QMARK_;
var G__25195 = expr__25191;
return (pred__25190.cljs$core$IFn$_invoke$arity$2 ? pred__25190.cljs$core$IFn$_invoke$arity$2(G__25194,G__25195) : pred__25190.call(null,G__25194,G__25195));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(G__25135,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25198 = cljs.core.cst$kw$precompiled;
var G__25199 = expr__25191;
return (pred__25190.cljs$core$IFn$_invoke$arity$2 ? pred__25190.cljs$core$IFn$_invoke$arity$2(G__25198,G__25199) : pred__25190.call(null,G__25198,G__25199));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__25135,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__25135),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dynamic_QMARK_,self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$precompiled,self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__25135){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__25135,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dynamic_QMARK_,cljs.core.cst$sym$precompiled], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__25140){
return (new com.rpl.specter.impl.CachedPathInfo(cljs.core.cst$kw$dynamic_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25140),cljs.core.cst$kw$precompiled.cljs$core$IFn$_invoke$arity$1(G__25140),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25140,cljs.core.cst$kw$dynamic_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$precompiled], 0))),null));
});

com.rpl.specter.impl.cached_path_info_precompiled = (function com$rpl$specter$impl$cached_path_info_precompiled(c){
return c.precompiled;
});
com.rpl.specter.impl.cached_path_info_dynamic_QMARK_ = (function com$rpl$specter$impl$cached_path_info_dynamic_QMARK_(c){
return c.dynamic_QMARK_;
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});
com.rpl.specter.impl.pred_STAR_ = (function com$rpl$specter$impl$pred_STAR_(afn){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl25248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl25248 = (function (afn,meta25249){
this.afn = afn;
this.meta25249 = meta25249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl25248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25250,meta25249__$1){
var self__ = this;
var _25250__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl25248(self__.afn,meta25249__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl25248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25250){
var self__ = this;
var _25250__$1 = this;
return self__.meta25249;
});

com.rpl.specter.impl.t_com$rpl$specter$impl25248.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl25248.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl25248.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl25248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta25249], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl25248.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl25248.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl25248";

com.rpl.specter.impl.t_com$rpl$specter$impl25248.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl25248");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl25248 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl25248(afn__$1,meta25249){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl25248(afn__$1,meta25249));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl25248(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl25264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl25264 = (function (afn,meta25265){
this.afn = afn;
this.meta25265 = meta25265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl25264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25266,meta25265__$1){
var self__ = this;
var _25266__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl25264(self__.afn,meta25265__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl25264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25266){
var self__ = this;
var _25266__$1 = this;
return self__.meta25265;
});

com.rpl.specter.impl.t_com$rpl$specter$impl25264.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl25264.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl25264.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl25264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta25265], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl25264.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl25264.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl25264";

com.rpl.specter.impl.t_com$rpl$specter$impl25264.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl25264");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl25264 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl25264(afn__$1,meta25265){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl25264(afn__$1,meta25265));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl25264(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl25308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl25308 = (function (cell,meta25309){
this.cell = cell;
this.meta25309 = meta25309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl25308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25310,meta25309__$1){
var self__ = this;
var _25310__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl25308(self__.cell,meta25309__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl25308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25310){
var self__ = this;
var _25310__$1 = this;
return self__.meta25309;
});

com.rpl.specter.impl.t_com$rpl$specter$impl25308.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl25308.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl25308.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl25308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cell,cljs.core.cst$sym$meta25309], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl25308.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl25308.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl25308";

com.rpl.specter.impl.t_com$rpl$specter$impl25308.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl25308");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl25308 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl25308(cell__$1,meta25309){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl25308(cell__$1,meta25309));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl25308(cell,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.local_declarepath = (function com$rpl$specter$impl$local_declarepath(){
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.impl.cell_nav(cell),cljs.core.assoc,cljs.core.cst$kw$com$rpl$specter$impl_SLASH_cell,cell);
});
com.rpl.specter.impl.providepath_STAR_ = (function com$rpl$specter$impl$providepath_STAR_(declared,compiled_path){
var cell = cljs.core.cst$kw$com$rpl$specter$impl_SLASH_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declared));
return com.rpl.specter.impl.set_cell_BANG_(cell,compiled_path);
});
com.rpl.specter.impl.gensyms = (function com$rpl$specter$impl$gensyms(amt){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(amt,cljs.core.gensym));
});
com.rpl.specter.impl.comp_navs = (function com$rpl$specter$impl$comp_navs(var_args){
var G__25608 = arguments.length;
switch (G__25608) {
case 0:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case 13:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case 14:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case 15:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case 16:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case 17:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case 18:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case 19:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
default:
var args_arr__11714__auto__ = [];
var len__11691__auto___25708 = arguments.length;
var i__11692__auto___25709 = (0);
while(true){
if((i__11692__auto___25709 < len__11691__auto___25708)){
args_arr__11714__auto__.push((arguments[i__11692__auto___25709]));

var G__25710 = (i__11692__auto___25709 + (1));
i__11692__auto___25709 = G__25710;
continue;
} else {
}
break;
}

var argseq__11715__auto__ = (new cljs.core.IndexedSeq(args_arr__11714__auto__.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__11715__auto__);

}
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__23628__auto__){
return nav1__23628__auto__;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__23628__auto__,nav2__23629__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__23628__auto__,nav2__23629__auto__);
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__25393,G__25394,G__25395){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25393,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25394,G__25395));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__25396,G__25397,G__25398,G__25399){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25396,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__25397,G__25398,G__25399));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__25400,G__25401,G__25402,G__25403,G__25404){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25400,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__25401,G__25402,G__25403,G__25404));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__25405,G__25406,G__25407,G__25408,G__25409,G__25410){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25405,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__25406,G__25407,G__25408,G__25409,G__25410));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__25411,G__25412,G__25413,G__25414,G__25415,G__25416,G__25417){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25411,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__25412,G__25413,G__25414,G__25415,G__25416,G__25417));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__25418,G__25419,G__25420,G__25421,G__25422,G__25423,G__25424,G__25425){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25418,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__25419,G__25420,G__25421,G__25422,G__25423,G__25424,G__25425));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__25426,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25426,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__25435,G__25436,G__25437,G__25438,G__25439,G__25440,G__25441,G__25442,G__25443,G__25444){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25435,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__25436,G__25437,G__25438,G__25439,G__25440,G__25441,G__25442,G__25443,G__25444));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__25445,G__25446,G__25447,G__25448,G__25449,G__25450,G__25451,G__25452,G__25453,G__25454,G__25455){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25445,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__25446,G__25447,G__25448,G__25449,G__25450,G__25451,G__25452,G__25453,G__25454,G__25455));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__25456,G__25457,G__25458,G__25459,G__25460,G__25461,G__25462,G__25463,G__25464,G__25465,G__25466,G__25467){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25456,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__25457,G__25458,G__25459,G__25460,G__25461,G__25462,G__25463,G__25464,G__25465,G__25466,G__25467));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__25468,G__25469,G__25470,G__25471,G__25472,G__25473,G__25474,G__25475,G__25476,G__25477,G__25478,G__25479,G__25480){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25468,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__25469,G__25470,G__25471,G__25472,G__25473,G__25474,G__25475,G__25476,G__25477,G__25478,G__25479,G__25480));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__25481,G__25482,G__25483,G__25484,G__25485,G__25486,G__25487,G__25488,G__25489,G__25490,G__25491,G__25492,G__25493,G__25494){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25481,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__25482,G__25483,G__25484,G__25485,G__25486,G__25487,G__25488,G__25489,G__25490,G__25491,G__25492,G__25493,G__25494));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__25495,G__25496,G__25497,G__25498,G__25499,G__25500,G__25501,G__25502,G__25503,G__25504,G__25505,G__25506,G__25507,G__25508,G__25509){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25495,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__25496,G__25497,G__25498,G__25499,G__25500,G__25501,G__25502,G__25503,G__25504,G__25505,G__25506,G__25507,G__25508,G__25509));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__25510,G__25511,G__25512,G__25513,G__25514,G__25515,G__25516,G__25517,G__25518,G__25519,G__25520,G__25521,G__25522,G__25523,G__25524,G__25525){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25510,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__25511,G__25512,G__25513,G__25514,G__25515,G__25516,G__25517,G__25518,G__25519,G__25520,G__25521,G__25522,G__25523,G__25524,G__25525));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__25526,G__25527,G__25528,G__25529,G__25530,G__25531,G__25532,G__25533,G__25534,G__25535,G__25536,G__25537,G__25538,G__25539,G__25540,G__25541,G__25542){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25526,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__25527,G__25528,G__25529,G__25530,G__25531,G__25532,G__25533,G__25534,G__25535,G__25536,G__25537,G__25538,G__25539,G__25540,G__25541,G__25542));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__25543,G__25544,G__25545,G__25546,G__25547,G__25548,G__25549,G__25550,G__25551,G__25552,G__25553,G__25554,G__25555,G__25556,G__25557,G__25558,G__25559,G__25560){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25543,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__25544,G__25545,G__25546,G__25547,G__25548,G__25549,G__25550,G__25551,G__25552,G__25553,G__25554,G__25555,G__25556,G__25557,G__25558,G__25559,G__25560));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__25561,G__25562,G__25563,G__25564,G__25565,G__25566,G__25567,G__25568,G__25569,G__25570,G__25571,G__25572,G__25573,G__25574,G__25575,G__25576,G__25577,G__25578,G__25579){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__25561,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__25562,G__25563,G__25564,G__25565,G__25566,G__25567,G__25568,G__25569,G__25570,G__25571,G__25572,G__25573,G__25574,G__25575,G__25576,G__25577,G__25578,G__25579));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__25359,G__25360,G__25361,G__25362,G__25363,G__25364,G__25365,G__25366,G__25367,G__25368,G__25369,G__25370,G__25371,G__25372,G__25373,G__25374,G__25375,G__25376,G__25377,rest__23630__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__25359,G__25360,G__25361,G__25362,G__25363,G__25364,G__25365,G__25366,G__25367,G__25368,G__25369,G__25370,G__25371,G__25372,G__25373,G__25374,G__25375,G__25376,G__25377),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__23630__auto__));
});

com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq25588){
var G__25589 = cljs.core.first(seq25588);
var seq25588__$1 = cljs.core.next(seq25588);
var G__25590 = cljs.core.first(seq25588__$1);
var seq25588__$2 = cljs.core.next(seq25588__$1);
var G__25591 = cljs.core.first(seq25588__$2);
var seq25588__$3 = cljs.core.next(seq25588__$2);
var G__25592 = cljs.core.first(seq25588__$3);
var seq25588__$4 = cljs.core.next(seq25588__$3);
var G__25593 = cljs.core.first(seq25588__$4);
var seq25588__$5 = cljs.core.next(seq25588__$4);
var G__25594 = cljs.core.first(seq25588__$5);
var seq25588__$6 = cljs.core.next(seq25588__$5);
var G__25595 = cljs.core.first(seq25588__$6);
var seq25588__$7 = cljs.core.next(seq25588__$6);
var G__25596 = cljs.core.first(seq25588__$7);
var seq25588__$8 = cljs.core.next(seq25588__$7);
var G__25597 = cljs.core.first(seq25588__$8);
var seq25588__$9 = cljs.core.next(seq25588__$8);
var G__25598 = cljs.core.first(seq25588__$9);
var seq25588__$10 = cljs.core.next(seq25588__$9);
var G__25599 = cljs.core.first(seq25588__$10);
var seq25588__$11 = cljs.core.next(seq25588__$10);
var G__25600 = cljs.core.first(seq25588__$11);
var seq25588__$12 = cljs.core.next(seq25588__$11);
var G__25601 = cljs.core.first(seq25588__$12);
var seq25588__$13 = cljs.core.next(seq25588__$12);
var G__25602 = cljs.core.first(seq25588__$13);
var seq25588__$14 = cljs.core.next(seq25588__$13);
var G__25603 = cljs.core.first(seq25588__$14);
var seq25588__$15 = cljs.core.next(seq25588__$14);
var G__25604 = cljs.core.first(seq25588__$15);
var seq25588__$16 = cljs.core.next(seq25588__$15);
var G__25605 = cljs.core.first(seq25588__$16);
var seq25588__$17 = cljs.core.next(seq25588__$16);
var G__25606 = cljs.core.first(seq25588__$17);
var seq25588__$18 = cljs.core.next(seq25588__$17);
var G__25607 = cljs.core.first(seq25588__$18);
var seq25588__$19 = cljs.core.next(seq25588__$18);
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic(G__25589,G__25590,G__25591,G__25592,G__25593,G__25594,G__25595,G__25596,G__25597,G__25598,G__25599,G__25600,G__25601,G__25602,G__25603,G__25604,G__25605,G__25606,G__25607,seq25588__$19);
});

com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19);

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__25747 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__25747) : next_fn.call(null,G__25747));
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,cljs.core.count(structure)))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__25748 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__25748) : next_fn.call(null,G__25748));
})();
var res = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,(0),start),newpart,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,end,cljs.core.count(structure))], 0));
if(cljs.core.vector_QMARK_(structure)){
return cljs.core.vec(res);
} else {
return res;
}
}
});
com.rpl.specter.impl.matching_indices = (function com$rpl$specter$impl$matching_indices(aseq,p){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,e){
if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(e) : p.call(null,e)))){
return i;
} else {
return null;
}
}),aseq);
});
com.rpl.specter.impl.matching_ranges = (function com$rpl$specter$impl$matching_ranges(aseq,p){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25749,i){
var vec__25750 = p__25749;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25750,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25750,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25750,(2),null);
var curr = vec__25750;
if((curr_start == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,i,i], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(curr_last + (1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,curr_start,i], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_start,(curr_last + (1))], null)),i,i], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null,null], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.matching_indices(aseq,p),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))));
});
com.rpl.specter.impl.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$impl$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__25753){
var vec__25754 = p__25753;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25754,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25754,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_(structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse(com.rpl.specter.impl.matching_ranges(structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
var ret = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__10400__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_(structure);
if(cljs.core.truth_(and__10400__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_(ret);
} else {
return and__10400__auto__;
}
})())){
return cljs.core.with_meta(ret,cljs.core.meta(structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var walker = ((function (ret){
return (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure__$1) : pred.call(null,structure__$1)))){
var r = (continue_fn.cljs$core$IFn$_invoke$arity$1 ? continue_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : continue_fn.call(null,structure__$1));
if(!((r === com.rpl.specter.impl.NONE))){
com.rpl.specter.impl.set_cell_BANG_(ret,r);
} else {
}

return r;
} else {
return clojure.walk.walk(com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});})(ret))
;
walker(structure);

return com.rpl.specter.impl.get_cell(ret);
});
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.coerce_nav = (function com$rpl$specter$impl$coerce_nav(o){
if(((!((o == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === o.com$rpl$specter$protocols$RichNavigator$)))?true:(((!o.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o))){
return o;
} else {
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.comp_paths_STAR_(o);
} else {
return com.rpl.specter.protocols.implicit_nav(o);

}
}
});
com.rpl.specter.impl.dynamic_var_QMARK_ = (function com$rpl$specter$impl$dynamic_var_QMARK_(v){
return cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
});
com.rpl.specter.impl.direct_nav_obj = (function com$rpl$specter$impl$direct_nav_obj(o){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(o,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direct_DASH_nav,true,cljs.core.cst$kw$original_DASH_obj,o], null));
});
com.rpl.specter.impl.maybe_direct_nav = (function com$rpl$specter$impl$maybe_direct_nav(obj,direct_nav_QMARK_){
if(cljs.core.truth_(direct_nav_QMARK_)){
return com.rpl.specter.impl.direct_nav_obj(obj);
} else {
return obj;
}
});
com.rpl.specter.impl.original_obj = (function com$rpl$specter$impl$original_obj(o){
while(true){
var orig = cljs.core.cst$kw$original_DASH_obj.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
if(cljs.core.truth_(orig)){
var G__25788 = orig;
o = G__25788;
continue;
} else {
return o;
}
break;
}
});
com.rpl.specter.impl.direct_nav_QMARK_ = (function com$rpl$specter$impl$direct_nav_QMARK_(o){
return cljs.core.cst$kw$direct_DASH_nav.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
});
com.rpl.specter.impl.all_static_QMARK_ = (function com$rpl$specter$impl$all_static_QMARK_(params){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,params));
});
com.rpl.specter.impl.late_resolved_fn = (function com$rpl$specter$impl$late_resolved_fn(afn){
return (function() { 
var G__25789__delegate = function (args){
if(cljs.core.truth_(com.rpl.specter.impl.all_static_QMARK_(args))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__25789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25791__i = 0, G__25791__a = new Array(arguments.length -  0);
while (G__25791__i < G__25791__a.length) {G__25791__a[G__25791__i] = arguments[G__25791__i + 0]; ++G__25791__i;}
  args = new cljs.core.IndexedSeq(G__25791__a,0,null);
} 
return G__25789__delegate.call(this,args);};
G__25789.cljs$lang$maxFixedArity = 0;
G__25789.cljs$lang$applyTo = (function (arglist__25793){
var args = cljs.core.seq(arglist__25793);
return G__25789__delegate(args);
});
G__25789.cljs$core$IFn$_invoke$arity$variadic = G__25789__delegate;
return G__25789;
})()
;
});
com.rpl.specter.impl.preserve_map = (function com$rpl$specter$impl$preserve_map(afn,o){
if((cljs.core.list_QMARK_(o)) || (cljs.core.seq_QMARK_(o))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(o),cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o));
}
});
com.rpl.specter.impl.magic_precompilation_STAR_ = (function com$rpl$specter$impl$magic_precompilation_STAR_(o){
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.preserve_map(com.rpl.specter.impl.magic_precompilation_STAR_,o);
} else {
if((o instanceof com.rpl.specter.impl.VarUse)){
if(cljs.core.truth_(com.rpl.specter.impl.dynamic_var_QMARK_(cljs.core.cst$kw$var.cljs$core$IFn$_invoke$arity$1(o)))){
return com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.maybe_direct_nav(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(o),(function (){var or__10412__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(cljs.core.cst$kw$var.cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(o));
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(o),(function (){var or__10412__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(cljs.core.cst$kw$var.cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(o));
}
}
})());
}
} else {
if((o instanceof com.rpl.specter.impl.LocalSym)){
return com.rpl.specter.impl.__GT_DynamicVal(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(o));
} else {
if((o instanceof com.rpl.specter.impl.SpecialFormUse)){
return com.rpl.specter.impl.__GT_DynamicVal(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(o));
} else {
if((o instanceof com.rpl.specter.impl.FnInvocation)){
var op = (function (){var G__25847 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(o);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__25847) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__25847));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(o)));
if(cljs.core.truth_((function (){var or__10412__auto__ = cljs.core.cst$kw$dynamicnav.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__25860 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__25860) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__25860));
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(op,params,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(o));
}
} else {
return o;

}
}
}
}
}
});
com.rpl.specter.impl.static_combine = (function com$rpl$specter$impl$static_combine(var_args){
var G__25880 = arguments.length;
switch (G__25880) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1 = (function (o){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o,true);
});

com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2 = (function (o,nav_pos_QMARK_){
if(cljs.core.sequential_QMARK_(o)){
if(cljs.core.truth_(nav_pos_QMARK_)){
var res = com.rpl.specter.impl.continuous_subseqs_transform_STAR_(com.rpl.specter.impl.rich_nav_QMARK_,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.static_combine,cljs.core.flatten(o))),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.comp_paths_STAR_(s)], null);
}));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(res))){
return cljs.core.first(res);
} else {
return res;
}
} else {
return com.rpl.specter.impl.preserve_map((function (p1__25877_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__25877_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(o),false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25878_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__25878_SHARP_,false);
}),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(o))),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(o));
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return com.rpl.specter.impl.__GT_DynamicPath(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(o)));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return o;
} else {
if(cljs.core.truth_(nav_pos_QMARK_)){
return com.rpl.specter.impl.coerce_nav(o);
} else {
return o;
}

}
}
}
}
});

com.rpl.specter.impl.static_combine.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
com.rpl.specter.impl.LateResolve = function(){};

com.rpl.specter.impl.late_resolve = (function com$rpl$specter$impl$late_resolve(this$,dynamic_params){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null)))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__11146__auto__.call(null,this$,dynamic_params));
} else {
var m__11146__auto____$1 = (com.rpl.specter.impl.late_resolve["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__11146__auto____$1.call(null,this$,dynamic_params));
} else {
throw cljs.core.missing_protocol("LateResolve.late-resolve",this$);
}
}
}
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalParam = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k25899,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__25911 = k25899;
var G__25911__$1 = (((G__25911 instanceof cljs.core.Keyword))?G__25911.fqn:null);
switch (G__25911__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25899,else__11103__auto__);

}
});

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dynamic_params,self__.idx);
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$idx,self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25898){
var self__ = this;
var G__25898__$1 = this;
return (new cljs.core.RecordIter((0),G__25898__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idx], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__25946 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__25946(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25900,other25901){
var self__ = this;
var this25900__$1 = this;
return (!((other25901 == null))) && ((this25900__$1.constructor === other25901.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25900__$1.idx,other25901.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25900__$1.__extmap,other25901.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$idx,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__25898){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__25988 = cljs.core.keyword_identical_QMARK_;
var expr__25989 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__25991 = cljs.core.cst$kw$idx;
var G__25992 = expr__25989;
return (pred__25988.cljs$core$IFn$_invoke$arity$2 ? pred__25988.cljs$core$IFn$_invoke$arity$2(G__25991,G__25992) : pred__25988.call(null,G__25991,G__25992));
})())){
return (new com.rpl.specter.impl.LocalParam(G__25898,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__25898),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$idx,self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__25898){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__25898,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx], null);
});

com.rpl.specter.impl.LocalParam.cljs$lang$type = true;

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalParam");
});

com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LocalParam");
});

com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__25904){
return (new com.rpl.specter.impl.LocalParam(cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(G__25904),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25904,cljs.core.cst$kw$idx)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.StaticParam = (function (val,__meta,__extmap,__hash){
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k26011,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__26022 = k26011;
var G__26022__$1 = (((G__26022 instanceof cljs.core.Keyword))?G__26022.fqn:null);
switch (G__26022__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26011,else__11103__auto__);

}
});

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26010){
var self__ = this;
var G__26010__$1 = this;
return (new cljs.core.RecordIter((0),G__26010__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__26038 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__26038(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26012,other26013){
var self__ = this;
var this26012__$1 = this;
return (!((other26013 == null))) && ((this26012__$1.constructor === other26013.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26012__$1.val,other26013.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26012__$1.__extmap,other26013.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$val,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__26010){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__26053 = cljs.core.keyword_identical_QMARK_;
var expr__26054 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__26057 = cljs.core.cst$kw$val;
var G__26058 = expr__26054;
return (pred__26053.cljs$core$IFn$_invoke$arity$2 ? pred__26053.cljs$core$IFn$_invoke$arity$2(G__26057,G__26058) : pred__26053.call(null,G__26057,G__26058));
})())){
return (new com.rpl.specter.impl.StaticParam(G__26010,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__26010),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__26010){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__26010,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
});

com.rpl.specter.impl.StaticParam.cljs$lang$type = true;

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/StaticParam");
});

com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/StaticParam");
});

com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__26018){
return (new com.rpl.specter.impl.StaticParam(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__26018),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26018,cljs.core.cst$kw$val)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn0 = (function (fn,__meta,__extmap,__hash){
this.fn = fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k26109,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__26119 = k26109;
var G__26119__$1 = (((G__26119 instanceof cljs.core.Keyword))?G__26119.fqn:null);
switch (G__26119__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26109,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26077){
var self__ = this;
var this__23726__auto____$1 = this;
var fexpr__26124 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26077);
return (fexpr__26124.cljs$core$IFn$_invoke$arity$0 ? fexpr__26124.cljs$core$IFn$_invoke$arity$0() : fexpr__26124.call(null));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26108){
var self__ = this;
var G__26108__$1 = this;
return (new cljs.core.RecordIter((0),G__26108__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__26138 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__26138(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26110,other26111){
var self__ = this;
var this26110__$1 = this;
return (!((other26111 == null))) && ((this26110__$1.constructor === other26111.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26110__$1.fn,other26111.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26110__$1.__extmap,other26111.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__26108){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__26146 = cljs.core.keyword_identical_QMARK_;
var expr__26147 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__26150 = cljs.core.cst$kw$fn;
var G__26151 = expr__26147;
return (pred__26146.cljs$core$IFn$_invoke$arity$2 ? pred__26146.cljs$core$IFn$_invoke$arity$2(G__26150,G__26151) : pred__26146.call(null,G__26150,G__26151));
})())){
return (new com.rpl.specter.impl.LateFn0(G__26108,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__26108),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__26108){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__26108,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn], null);
});

com.rpl.specter.impl.LateFn0.cljs$lang$type = true;

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn0");
});

com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn0");
});

com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__26113){
return (new com.rpl.specter.impl.LateFn0(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__26113),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26113,cljs.core.cst$kw$fn)),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn1 = (function (fn,arg0,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k26172,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__26186 = k26172;
var G__26186__$1 = (((G__26186 instanceof cljs.core.Keyword))?G__26186.fqn:null);
switch (G__26186__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26172,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26083){
var self__ = this;
var this__23726__auto____$1 = this;
var G__26192 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26083);
var fexpr__26191 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26083);
return (fexpr__26191.cljs$core$IFn$_invoke$arity$1 ? fexpr__26191.cljs$core$IFn$_invoke$arity$1(G__26192) : fexpr__26191.call(null,G__26192));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26171){
var self__ = this;
var G__26171__$1 = this;
return (new cljs.core.RecordIter((0),G__26171__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__26213 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__26213(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26173,other26174){
var self__ = this;
var this26173__$1 = this;
return (!((other26174 == null))) && ((this26173__$1.constructor === other26174.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26173__$1.fn,other26174.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26173__$1.arg0,other26174.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26173__$1.__extmap,other26174.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg0,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__26171){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__26222 = cljs.core.keyword_identical_QMARK_;
var expr__26223 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__26227 = cljs.core.cst$kw$fn;
var G__26228 = expr__26223;
return (pred__26222.cljs$core$IFn$_invoke$arity$2 ? pred__26222.cljs$core$IFn$_invoke$arity$2(G__26227,G__26228) : pred__26222.call(null,G__26227,G__26228));
})())){
return (new com.rpl.specter.impl.LateFn1(G__26171,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26230 = cljs.core.cst$kw$arg0;
var G__26231 = expr__26223;
return (pred__26222.cljs$core$IFn$_invoke$arity$2 ? pred__26222.cljs$core$IFn$_invoke$arity$2(G__26230,G__26231) : pred__26222.call(null,G__26230,G__26231));
})())){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__26171,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__26171),null));
}
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__26171){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__26171,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0], null);
});

com.rpl.specter.impl.LateFn1.cljs$lang$type = true;

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn1");
});

com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn1");
});

com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__26179){
return (new com.rpl.specter.impl.LateFn1(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__26179),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__26179),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26179,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn2 = (function (fn,arg0,arg1,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k26245,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__26271 = k26245;
var G__26271__$1 = (((G__26271 instanceof cljs.core.Keyword))?G__26271.fqn:null);
switch (G__26271__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26245,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26090){
var self__ = this;
var this__23726__auto____$1 = this;
var G__26280 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26090);
var G__26281 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26090);
var fexpr__26279 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26090);
return (fexpr__26279.cljs$core$IFn$_invoke$arity$2 ? fexpr__26279.cljs$core$IFn$_invoke$arity$2(G__26280,G__26281) : fexpr__26279.call(null,G__26280,G__26281));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26244){
var self__ = this;
var G__26244__$1 = this;
return (new cljs.core.RecordIter((0),G__26244__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__26320 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__26320(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26247,other26248){
var self__ = this;
var this26247__$1 = this;
return (!((other26248 == null))) && ((this26247__$1.constructor === other26248.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26247__$1.fn,other26248.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26247__$1.arg0,other26248.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26247__$1.arg1,other26248.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26247__$1.__extmap,other26248.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__26244){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__26334 = cljs.core.keyword_identical_QMARK_;
var expr__26335 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__26339 = cljs.core.cst$kw$fn;
var G__26340 = expr__26335;
return (pred__26334.cljs$core$IFn$_invoke$arity$2 ? pred__26334.cljs$core$IFn$_invoke$arity$2(G__26339,G__26340) : pred__26334.call(null,G__26339,G__26340));
})())){
return (new com.rpl.specter.impl.LateFn2(G__26244,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26342 = cljs.core.cst$kw$arg0;
var G__26343 = expr__26335;
return (pred__26334.cljs$core$IFn$_invoke$arity$2 ? pred__26334.cljs$core$IFn$_invoke$arity$2(G__26342,G__26343) : pred__26334.call(null,G__26342,G__26343));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__26244,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26344 = cljs.core.cst$kw$arg1;
var G__26345 = expr__26335;
return (pred__26334.cljs$core$IFn$_invoke$arity$2 ? pred__26334.cljs$core$IFn$_invoke$arity$2(G__26344,G__26345) : pred__26334.call(null,G__26344,G__26345));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__26244,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__26244),null));
}
}
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__26244){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__26244,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1], null);
});

com.rpl.specter.impl.LateFn2.cljs$lang$type = true;

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn2");
});

com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn2");
});

com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__26249){
return (new com.rpl.specter.impl.LateFn2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__26249),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__26249),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__26249),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26249,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn3 = (function (fn,arg0,arg1,arg2,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k26362,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__26376 = k26362;
var G__26376__$1 = (((G__26376 instanceof cljs.core.Keyword))?G__26376.fqn:null);
switch (G__26376__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26362,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26091){
var self__ = this;
var this__23726__auto____$1 = this;
var G__26381 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26091);
var G__26382 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26091);
var G__26383 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26091);
var fexpr__26380 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26091);
return (fexpr__26380.cljs$core$IFn$_invoke$arity$3 ? fexpr__26380.cljs$core$IFn$_invoke$arity$3(G__26381,G__26382,G__26383) : fexpr__26380.call(null,G__26381,G__26382,G__26383));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26361){
var self__ = this;
var G__26361__$1 = this;
return (new cljs.core.RecordIter((0),G__26361__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__26397 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__26397(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26363,other26364){
var self__ = this;
var this26363__$1 = this;
return (!((other26364 == null))) && ((this26363__$1.constructor === other26364.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26363__$1.fn,other26364.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26363__$1.arg0,other26364.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26363__$1.arg1,other26364.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26363__$1.arg2,other26364.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26363__$1.__extmap,other26364.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__26361){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__26405 = cljs.core.keyword_identical_QMARK_;
var expr__26406 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__26408 = cljs.core.cst$kw$fn;
var G__26409 = expr__26406;
return (pred__26405.cljs$core$IFn$_invoke$arity$2 ? pred__26405.cljs$core$IFn$_invoke$arity$2(G__26408,G__26409) : pred__26405.call(null,G__26408,G__26409));
})())){
return (new com.rpl.specter.impl.LateFn3(G__26361,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26413 = cljs.core.cst$kw$arg0;
var G__26414 = expr__26406;
return (pred__26405.cljs$core$IFn$_invoke$arity$2 ? pred__26405.cljs$core$IFn$_invoke$arity$2(G__26413,G__26414) : pred__26405.call(null,G__26413,G__26414));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__26361,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26416 = cljs.core.cst$kw$arg1;
var G__26417 = expr__26406;
return (pred__26405.cljs$core$IFn$_invoke$arity$2 ? pred__26405.cljs$core$IFn$_invoke$arity$2(G__26416,G__26417) : pred__26405.call(null,G__26416,G__26417));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__26361,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26420 = cljs.core.cst$kw$arg2;
var G__26421 = expr__26406;
return (pred__26405.cljs$core$IFn$_invoke$arity$2 ? pred__26405.cljs$core$IFn$_invoke$arity$2(G__26420,G__26421) : pred__26405.call(null,G__26420,G__26421));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__26361,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__26361),null));
}
}
}
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__26361){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26361,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2], null);
});

com.rpl.specter.impl.LateFn3.cljs$lang$type = true;

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn3");
});

com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn3");
});

com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__26367){
return (new com.rpl.specter.impl.LateFn3(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__26367),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__26367),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__26367),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__26367),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26367,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn4 = (function (fn,arg0,arg1,arg2,arg3,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k26481,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__26496 = k26481;
var G__26496__$1 = (((G__26496 instanceof cljs.core.Keyword))?G__26496.fqn:null);
switch (G__26496__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26481,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26092){
var self__ = this;
var this__23726__auto____$1 = this;
var G__26500 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26092);
var G__26501 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26092);
var G__26502 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26092);
var G__26503 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26092);
var fexpr__26499 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26092);
return (fexpr__26499.cljs$core$IFn$_invoke$arity$4 ? fexpr__26499.cljs$core$IFn$_invoke$arity$4(G__26500,G__26501,G__26502,G__26503) : fexpr__26499.call(null,G__26500,G__26501,G__26502,G__26503));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26480){
var self__ = this;
var G__26480__$1 = this;
return (new cljs.core.RecordIter((0),G__26480__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__26528 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__26528(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26482,other26483){
var self__ = this;
var this26482__$1 = this;
return (!((other26483 == null))) && ((this26482__$1.constructor === other26483.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26482__$1.fn,other26483.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26482__$1.arg0,other26483.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26482__$1.arg1,other26483.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26482__$1.arg2,other26483.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26482__$1.arg3,other26483.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26482__$1.__extmap,other26483.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__26480){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__26552 = cljs.core.keyword_identical_QMARK_;
var expr__26553 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__26556 = cljs.core.cst$kw$fn;
var G__26557 = expr__26553;
return (pred__26552.cljs$core$IFn$_invoke$arity$2 ? pred__26552.cljs$core$IFn$_invoke$arity$2(G__26556,G__26557) : pred__26552.call(null,G__26556,G__26557));
})())){
return (new com.rpl.specter.impl.LateFn4(G__26480,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26559 = cljs.core.cst$kw$arg0;
var G__26560 = expr__26553;
return (pred__26552.cljs$core$IFn$_invoke$arity$2 ? pred__26552.cljs$core$IFn$_invoke$arity$2(G__26559,G__26560) : pred__26552.call(null,G__26559,G__26560));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__26480,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26565 = cljs.core.cst$kw$arg1;
var G__26566 = expr__26553;
return (pred__26552.cljs$core$IFn$_invoke$arity$2 ? pred__26552.cljs$core$IFn$_invoke$arity$2(G__26565,G__26566) : pred__26552.call(null,G__26565,G__26566));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__26480,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26569 = cljs.core.cst$kw$arg2;
var G__26570 = expr__26553;
return (pred__26552.cljs$core$IFn$_invoke$arity$2 ? pred__26552.cljs$core$IFn$_invoke$arity$2(G__26569,G__26570) : pred__26552.call(null,G__26569,G__26570));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__26480,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26571 = cljs.core.cst$kw$arg3;
var G__26572 = expr__26553;
return (pred__26552.cljs$core$IFn$_invoke$arity$2 ? pred__26552.cljs$core$IFn$_invoke$arity$2(G__26571,G__26572) : pred__26552.call(null,G__26571,G__26572));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26480,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__26480),null));
}
}
}
}
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__26480){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26480,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3], null);
});

com.rpl.specter.impl.LateFn4.cljs$lang$type = true;

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn4");
});

com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn4");
});

com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__26489){
return (new com.rpl.specter.impl.LateFn4(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__26489),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__26489),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__26489),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__26489),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__26489),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26489,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn5 = (function (fn,arg0,arg1,arg2,arg3,arg4,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k26612,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__26627 = k26612;
var G__26627__$1 = (((G__26627 instanceof cljs.core.Keyword))?G__26627.fqn:null);
switch (G__26627__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26612,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26093){
var self__ = this;
var this__23726__auto____$1 = this;
var G__26632 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26093);
var G__26633 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26093);
var G__26634 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26093);
var G__26635 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26093);
var G__26636 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26093);
var fexpr__26631 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26093);
return (fexpr__26631.cljs$core$IFn$_invoke$arity$5 ? fexpr__26631.cljs$core$IFn$_invoke$arity$5(G__26632,G__26633,G__26634,G__26635,G__26636) : fexpr__26631.call(null,G__26632,G__26633,G__26634,G__26635,G__26636));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26611){
var self__ = this;
var G__26611__$1 = this;
return (new cljs.core.RecordIter((0),G__26611__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__26686 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__26686(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26614,other26615){
var self__ = this;
var this26614__$1 = this;
return (!((other26615 == null))) && ((this26614__$1.constructor === other26615.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26614__$1.fn,other26615.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26614__$1.arg0,other26615.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26614__$1.arg1,other26615.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26614__$1.arg2,other26615.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26614__$1.arg3,other26615.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26614__$1.arg4,other26615.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26614__$1.__extmap,other26615.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__26611){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__26765 = cljs.core.keyword_identical_QMARK_;
var expr__26766 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__26770 = cljs.core.cst$kw$fn;
var G__26771 = expr__26766;
return (pred__26765.cljs$core$IFn$_invoke$arity$2 ? pred__26765.cljs$core$IFn$_invoke$arity$2(G__26770,G__26771) : pred__26765.call(null,G__26770,G__26771));
})())){
return (new com.rpl.specter.impl.LateFn5(G__26611,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26772 = cljs.core.cst$kw$arg0;
var G__26773 = expr__26766;
return (pred__26765.cljs$core$IFn$_invoke$arity$2 ? pred__26765.cljs$core$IFn$_invoke$arity$2(G__26772,G__26773) : pred__26765.call(null,G__26772,G__26773));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__26611,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26774 = cljs.core.cst$kw$arg1;
var G__26775 = expr__26766;
return (pred__26765.cljs$core$IFn$_invoke$arity$2 ? pred__26765.cljs$core$IFn$_invoke$arity$2(G__26774,G__26775) : pred__26765.call(null,G__26774,G__26775));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__26611,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26777 = cljs.core.cst$kw$arg2;
var G__26778 = expr__26766;
return (pred__26765.cljs$core$IFn$_invoke$arity$2 ? pred__26765.cljs$core$IFn$_invoke$arity$2(G__26777,G__26778) : pred__26765.call(null,G__26777,G__26778));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__26611,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26779 = cljs.core.cst$kw$arg3;
var G__26780 = expr__26766;
return (pred__26765.cljs$core$IFn$_invoke$arity$2 ? pred__26765.cljs$core$IFn$_invoke$arity$2(G__26779,G__26780) : pred__26765.call(null,G__26779,G__26780));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26611,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26784 = cljs.core.cst$kw$arg4;
var G__26785 = expr__26766;
return (pred__26765.cljs$core$IFn$_invoke$arity$2 ? pred__26765.cljs$core$IFn$_invoke$arity$2(G__26784,G__26785) : pred__26765.call(null,G__26784,G__26785));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26611,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__26611),null));
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__26611){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26611,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4], null);
});

com.rpl.specter.impl.LateFn5.cljs$lang$type = true;

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn5");
});

com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn5");
});

com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__26617){
return (new com.rpl.specter.impl.LateFn5(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__26617),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__26617),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__26617),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__26617),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__26617),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__26617),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26617,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn6 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k26818,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__26846 = k26818;
var G__26846__$1 = (((G__26846 instanceof cljs.core.Keyword))?G__26846.fqn:null);
switch (G__26846__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26818,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26094){
var self__ = this;
var this__23726__auto____$1 = this;
var G__26851 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26094);
var G__26852 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26094);
var G__26853 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26094);
var G__26854 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26094);
var G__26855 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26094);
var G__26856 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26094);
var fexpr__26850 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26094);
return (fexpr__26850.cljs$core$IFn$_invoke$arity$6 ? fexpr__26850.cljs$core$IFn$_invoke$arity$6(G__26851,G__26852,G__26853,G__26854,G__26855,G__26856) : fexpr__26850.call(null,G__26851,G__26852,G__26853,G__26854,G__26855,G__26856));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26817){
var self__ = this;
var G__26817__$1 = this;
return (new cljs.core.RecordIter((0),G__26817__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__26880 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__26880(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26820,other26821){
var self__ = this;
var this26820__$1 = this;
return (!((other26821 == null))) && ((this26820__$1.constructor === other26821.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26820__$1.fn,other26821.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26820__$1.arg0,other26821.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26820__$1.arg1,other26821.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26820__$1.arg2,other26821.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26820__$1.arg3,other26821.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26820__$1.arg4,other26821.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26820__$1.arg5,other26821.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26820__$1.__extmap,other26821.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__26817){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__26888 = cljs.core.keyword_identical_QMARK_;
var expr__26889 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__26891 = cljs.core.cst$kw$fn;
var G__26892 = expr__26889;
return (pred__26888.cljs$core$IFn$_invoke$arity$2 ? pred__26888.cljs$core$IFn$_invoke$arity$2(G__26891,G__26892) : pred__26888.call(null,G__26891,G__26892));
})())){
return (new com.rpl.specter.impl.LateFn6(G__26817,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26895 = cljs.core.cst$kw$arg0;
var G__26896 = expr__26889;
return (pred__26888.cljs$core$IFn$_invoke$arity$2 ? pred__26888.cljs$core$IFn$_invoke$arity$2(G__26895,G__26896) : pred__26888.call(null,G__26895,G__26896));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__26817,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26897 = cljs.core.cst$kw$arg1;
var G__26898 = expr__26889;
return (pred__26888.cljs$core$IFn$_invoke$arity$2 ? pred__26888.cljs$core$IFn$_invoke$arity$2(G__26897,G__26898) : pred__26888.call(null,G__26897,G__26898));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__26817,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26900 = cljs.core.cst$kw$arg2;
var G__26901 = expr__26889;
return (pred__26888.cljs$core$IFn$_invoke$arity$2 ? pred__26888.cljs$core$IFn$_invoke$arity$2(G__26900,G__26901) : pred__26888.call(null,G__26900,G__26901));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__26817,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26903 = cljs.core.cst$kw$arg3;
var G__26904 = expr__26889;
return (pred__26888.cljs$core$IFn$_invoke$arity$2 ? pred__26888.cljs$core$IFn$_invoke$arity$2(G__26903,G__26904) : pred__26888.call(null,G__26903,G__26904));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26817,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26907 = cljs.core.cst$kw$arg4;
var G__26908 = expr__26889;
return (pred__26888.cljs$core$IFn$_invoke$arity$2 ? pred__26888.cljs$core$IFn$_invoke$arity$2(G__26907,G__26908) : pred__26888.call(null,G__26907,G__26908));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26817,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26911 = cljs.core.cst$kw$arg5;
var G__26912 = expr__26889;
return (pred__26888.cljs$core$IFn$_invoke$arity$2 ? pred__26888.cljs$core$IFn$_invoke$arity$2(G__26911,G__26912) : pred__26888.call(null,G__26911,G__26912));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26817,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__26817),null));
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__26817){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26817,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5], null);
});

com.rpl.specter.impl.LateFn6.cljs$lang$type = true;

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn6");
});

com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn6");
});

com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__26830){
return (new com.rpl.specter.impl.LateFn6(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__26830),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__26830),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__26830),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__26830),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__26830),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__26830),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__26830),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26830,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn7 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k26949,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__26959 = k26949;
var G__26959__$1 = (((G__26959 instanceof cljs.core.Keyword))?G__26959.fqn:null);
switch (G__26959__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26949,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26095){
var self__ = this;
var this__23726__auto____$1 = this;
var G__26962 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26095);
var G__26963 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26095);
var G__26964 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26095);
var G__26965 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26095);
var G__26966 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26095);
var G__26967 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26095);
var G__26968 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26095);
var fexpr__26960 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26095);
return (fexpr__26960.cljs$core$IFn$_invoke$arity$7 ? fexpr__26960.cljs$core$IFn$_invoke$arity$7(G__26962,G__26963,G__26964,G__26965,G__26966,G__26967,G__26968) : fexpr__26960.call(null,G__26962,G__26963,G__26964,G__26965,G__26966,G__26967,G__26968));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26948){
var self__ = this;
var G__26948__$1 = this;
return (new cljs.core.RecordIter((0),G__26948__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__27000 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__27000(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26950,other26951){
var self__ = this;
var this26950__$1 = this;
return (!((other26951 == null))) && ((this26950__$1.constructor === other26951.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26950__$1.fn,other26951.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26950__$1.arg0,other26951.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26950__$1.arg1,other26951.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26950__$1.arg2,other26951.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26950__$1.arg3,other26951.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26950__$1.arg4,other26951.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26950__$1.arg5,other26951.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26950__$1.arg6,other26951.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26950__$1.__extmap,other26951.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__26948){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__27026 = cljs.core.keyword_identical_QMARK_;
var expr__27027 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__27030 = cljs.core.cst$kw$fn;
var G__27031 = expr__27027;
return (pred__27026.cljs$core$IFn$_invoke$arity$2 ? pred__27026.cljs$core$IFn$_invoke$arity$2(G__27030,G__27031) : pred__27026.call(null,G__27030,G__27031));
})())){
return (new com.rpl.specter.impl.LateFn7(G__26948,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27034 = cljs.core.cst$kw$arg0;
var G__27035 = expr__27027;
return (pred__27026.cljs$core$IFn$_invoke$arity$2 ? pred__27026.cljs$core$IFn$_invoke$arity$2(G__27034,G__27035) : pred__27026.call(null,G__27034,G__27035));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__26948,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27036 = cljs.core.cst$kw$arg1;
var G__27037 = expr__27027;
return (pred__27026.cljs$core$IFn$_invoke$arity$2 ? pred__27026.cljs$core$IFn$_invoke$arity$2(G__27036,G__27037) : pred__27026.call(null,G__27036,G__27037));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__26948,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27039 = cljs.core.cst$kw$arg2;
var G__27040 = expr__27027;
return (pred__27026.cljs$core$IFn$_invoke$arity$2 ? pred__27026.cljs$core$IFn$_invoke$arity$2(G__27039,G__27040) : pred__27026.call(null,G__27039,G__27040));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__26948,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27043 = cljs.core.cst$kw$arg3;
var G__27044 = expr__27027;
return (pred__27026.cljs$core$IFn$_invoke$arity$2 ? pred__27026.cljs$core$IFn$_invoke$arity$2(G__27043,G__27044) : pred__27026.call(null,G__27043,G__27044));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__26948,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27049 = cljs.core.cst$kw$arg4;
var G__27050 = expr__27027;
return (pred__27026.cljs$core$IFn$_invoke$arity$2 ? pred__27026.cljs$core$IFn$_invoke$arity$2(G__27049,G__27050) : pred__27026.call(null,G__27049,G__27050));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__26948,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27051 = cljs.core.cst$kw$arg5;
var G__27052 = expr__27027;
return (pred__27026.cljs$core$IFn$_invoke$arity$2 ? pred__27026.cljs$core$IFn$_invoke$arity$2(G__27051,G__27052) : pred__27026.call(null,G__27051,G__27052));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__26948,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27053 = cljs.core.cst$kw$arg6;
var G__27054 = expr__27027;
return (pred__27026.cljs$core$IFn$_invoke$arity$2 ? pred__27026.cljs$core$IFn$_invoke$arity$2(G__27053,G__27054) : pred__27026.call(null,G__27053,G__27054));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__26948,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__26948),null));
}
}
}
}
}
}
}
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__26948){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__26948,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6], null);
});

com.rpl.specter.impl.LateFn7.cljs$lang$type = true;

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn7");
});

com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn7");
});

com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__26953){
return (new com.rpl.specter.impl.LateFn7(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__26953),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__26953),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__26953),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__26953),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__26953),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__26953),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__26953),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__26953),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26953,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn8 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k27078,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__27086 = k27078;
var G__27086__$1 = (((G__27086 instanceof cljs.core.Keyword))?G__27086.fqn:null);
switch (G__27086__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27078,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26096){
var self__ = this;
var this__23726__auto____$1 = this;
var G__27093 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26096);
var G__27094 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26096);
var G__27095 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26096);
var G__27096 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26096);
var G__27097 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26096);
var G__27098 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26096);
var G__27099 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26096);
var G__27100 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26096);
var fexpr__27092 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26096);
return (fexpr__27092.cljs$core$IFn$_invoke$arity$8 ? fexpr__27092.cljs$core$IFn$_invoke$arity$8(G__27093,G__27094,G__27095,G__27096,G__27097,G__27098,G__27099,G__27100) : fexpr__27092.call(null,G__27093,G__27094,G__27095,G__27096,G__27097,G__27098,G__27099,G__27100));
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27077){
var self__ = this;
var G__27077__$1 = this;
return (new cljs.core.RecordIter((0),G__27077__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__27108 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__27108(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27079,other27080){
var self__ = this;
var this27079__$1 = this;
return (!((other27080 == null))) && ((this27079__$1.constructor === other27080.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.fn,other27080.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.arg0,other27080.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.arg1,other27080.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.arg2,other27080.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.arg3,other27080.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.arg4,other27080.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.arg5,other27080.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.arg6,other27080.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.arg7,other27080.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27079__$1.__extmap,other27080.__extmap));
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__27077){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__27150 = cljs.core.keyword_identical_QMARK_;
var expr__27151 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__27153 = cljs.core.cst$kw$fn;
var G__27154 = expr__27151;
return (pred__27150.cljs$core$IFn$_invoke$arity$2 ? pred__27150.cljs$core$IFn$_invoke$arity$2(G__27153,G__27154) : pred__27150.call(null,G__27153,G__27154));
})())){
return (new com.rpl.specter.impl.LateFn8(G__27077,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27155 = cljs.core.cst$kw$arg0;
var G__27156 = expr__27151;
return (pred__27150.cljs$core$IFn$_invoke$arity$2 ? pred__27150.cljs$core$IFn$_invoke$arity$2(G__27155,G__27156) : pred__27150.call(null,G__27155,G__27156));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__27077,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27157 = cljs.core.cst$kw$arg1;
var G__27158 = expr__27151;
return (pred__27150.cljs$core$IFn$_invoke$arity$2 ? pred__27150.cljs$core$IFn$_invoke$arity$2(G__27157,G__27158) : pred__27150.call(null,G__27157,G__27158));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__27077,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27165 = cljs.core.cst$kw$arg2;
var G__27166 = expr__27151;
return (pred__27150.cljs$core$IFn$_invoke$arity$2 ? pred__27150.cljs$core$IFn$_invoke$arity$2(G__27165,G__27166) : pred__27150.call(null,G__27165,G__27166));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__27077,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27168 = cljs.core.cst$kw$arg3;
var G__27169 = expr__27151;
return (pred__27150.cljs$core$IFn$_invoke$arity$2 ? pred__27150.cljs$core$IFn$_invoke$arity$2(G__27168,G__27169) : pred__27150.call(null,G__27168,G__27169));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__27077,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27171 = cljs.core.cst$kw$arg4;
var G__27172 = expr__27151;
return (pred__27150.cljs$core$IFn$_invoke$arity$2 ? pred__27150.cljs$core$IFn$_invoke$arity$2(G__27171,G__27172) : pred__27150.call(null,G__27171,G__27172));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__27077,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27173 = cljs.core.cst$kw$arg5;
var G__27174 = expr__27151;
return (pred__27150.cljs$core$IFn$_invoke$arity$2 ? pred__27150.cljs$core$IFn$_invoke$arity$2(G__27173,G__27174) : pred__27150.call(null,G__27173,G__27174));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__27077,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27182 = cljs.core.cst$kw$arg6;
var G__27183 = expr__27151;
return (pred__27150.cljs$core$IFn$_invoke$arity$2 ? pred__27150.cljs$core$IFn$_invoke$arity$2(G__27182,G__27183) : pred__27150.call(null,G__27182,G__27183));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__27077,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27184 = cljs.core.cst$kw$arg7;
var G__27185 = expr__27151;
return (pred__27150.cljs$core$IFn$_invoke$arity$2 ? pred__27150.cljs$core$IFn$_invoke$arity$2(G__27184,G__27185) : pred__27150.call(null,G__27184,G__27185));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__27077,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__27077),null));
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__27077){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__27077,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7], null);
});

com.rpl.specter.impl.LateFn8.cljs$lang$type = true;

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn8");
});

com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn8");
});

com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__27083){
return (new com.rpl.specter.impl.LateFn8(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__27083),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__27083),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__27083),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__27083),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__27083),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__27083),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__27083),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__27083),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__27083),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27083,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn9 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k27209,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__27219 = k27209;
var G__27219__$1 = (((G__27219 instanceof cljs.core.Keyword))?G__27219.fqn:null);
switch (G__27219__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27209,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26097){
var self__ = this;
var this__23726__auto____$1 = this;
var G__27223 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26097);
var G__27224 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26097);
var G__27225 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26097);
var G__27226 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26097);
var G__27227 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26097);
var G__27228 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26097);
var G__27229 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26097);
var G__27230 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26097);
var G__27231 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26097);
var fexpr__27222 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26097);
return (fexpr__27222.cljs$core$IFn$_invoke$arity$9 ? fexpr__27222.cljs$core$IFn$_invoke$arity$9(G__27223,G__27224,G__27225,G__27226,G__27227,G__27228,G__27229,G__27230,G__27231) : fexpr__27222.call(null,G__27223,G__27224,G__27225,G__27226,G__27227,G__27228,G__27229,G__27230,G__27231));
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27208){
var self__ = this;
var G__27208__$1 = this;
return (new cljs.core.RecordIter((0),G__27208__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__27243 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__27243(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27210,other27211){
var self__ = this;
var this27210__$1 = this;
return (!((other27211 == null))) && ((this27210__$1.constructor === other27211.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.fn,other27211.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.arg0,other27211.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.arg1,other27211.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.arg2,other27211.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.arg3,other27211.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.arg4,other27211.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.arg5,other27211.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.arg6,other27211.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.arg7,other27211.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.arg8,other27211.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27210__$1.__extmap,other27211.__extmap));
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__27208){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__27262 = cljs.core.keyword_identical_QMARK_;
var expr__27263 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__27266 = cljs.core.cst$kw$fn;
var G__27267 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27266,G__27267) : pred__27262.call(null,G__27266,G__27267));
})())){
return (new com.rpl.specter.impl.LateFn9(G__27208,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27269 = cljs.core.cst$kw$arg0;
var G__27270 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27269,G__27270) : pred__27262.call(null,G__27269,G__27270));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__27208,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27275 = cljs.core.cst$kw$arg1;
var G__27276 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27275,G__27276) : pred__27262.call(null,G__27275,G__27276));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__27208,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27278 = cljs.core.cst$kw$arg2;
var G__27279 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27278,G__27279) : pred__27262.call(null,G__27278,G__27279));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__27208,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27284 = cljs.core.cst$kw$arg3;
var G__27285 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27284,G__27285) : pred__27262.call(null,G__27284,G__27285));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__27208,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27293 = cljs.core.cst$kw$arg4;
var G__27294 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27293,G__27294) : pred__27262.call(null,G__27293,G__27294));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__27208,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27297 = cljs.core.cst$kw$arg5;
var G__27298 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27297,G__27298) : pred__27262.call(null,G__27297,G__27298));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__27208,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27300 = cljs.core.cst$kw$arg6;
var G__27301 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27300,G__27301) : pred__27262.call(null,G__27300,G__27301));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__27208,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27303 = cljs.core.cst$kw$arg7;
var G__27304 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27303,G__27304) : pred__27262.call(null,G__27303,G__27304));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__27208,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27313 = cljs.core.cst$kw$arg8;
var G__27314 = expr__27263;
return (pred__27262.cljs$core$IFn$_invoke$arity$2 ? pred__27262.cljs$core$IFn$_invoke$arity$2(G__27313,G__27314) : pred__27262.call(null,G__27313,G__27314));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__27208,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__27208),null));
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__27208){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__27208,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8], null);
});

com.rpl.specter.impl.LateFn9.cljs$lang$type = true;

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn9");
});

com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn9");
});

com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__27216){
return (new com.rpl.specter.impl.LateFn9(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__27216),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__27216),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__27216),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__27216),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__27216),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__27216),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__27216),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__27216),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__27216),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__27216),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27216,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn10 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k27353,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__27369 = k27353;
var G__27369__$1 = (((G__27369 instanceof cljs.core.Keyword))?G__27369.fqn:null);
switch (G__27369__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27353,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26098){
var self__ = this;
var this__23726__auto____$1 = this;
var G__27376 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26098);
var G__27377 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26098);
var G__27378 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26098);
var G__27379 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26098);
var G__27380 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26098);
var G__27381 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26098);
var G__27382 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26098);
var G__27383 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26098);
var G__27384 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26098);
var G__27385 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26098);
var fexpr__27375 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26098);
return (fexpr__27375.cljs$core$IFn$_invoke$arity$10 ? fexpr__27375.cljs$core$IFn$_invoke$arity$10(G__27376,G__27377,G__27378,G__27379,G__27380,G__27381,G__27382,G__27383,G__27384,G__27385) : fexpr__27375.call(null,G__27376,G__27377,G__27378,G__27379,G__27380,G__27381,G__27382,G__27383,G__27384,G__27385));
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27352){
var self__ = this;
var G__27352__$1 = this;
return (new cljs.core.RecordIter((0),G__27352__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__27414 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__27414(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27354,other27355){
var self__ = this;
var this27354__$1 = this;
return (!((other27355 == null))) && ((this27354__$1.constructor === other27355.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.fn,other27355.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg0,other27355.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg1,other27355.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg2,other27355.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg3,other27355.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg4,other27355.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg5,other27355.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg6,other27355.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg7,other27355.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg8,other27355.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.arg9,other27355.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27354__$1.__extmap,other27355.__extmap));
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__27352){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__27455 = cljs.core.keyword_identical_QMARK_;
var expr__27456 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__27459 = cljs.core.cst$kw$fn;
var G__27460 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27459,G__27460) : pred__27455.call(null,G__27459,G__27460));
})())){
return (new com.rpl.specter.impl.LateFn10(G__27352,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27464 = cljs.core.cst$kw$arg0;
var G__27465 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27464,G__27465) : pred__27455.call(null,G__27464,G__27465));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__27352,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27467 = cljs.core.cst$kw$arg1;
var G__27468 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27467,G__27468) : pred__27455.call(null,G__27467,G__27468));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__27352,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27478 = cljs.core.cst$kw$arg2;
var G__27479 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27478,G__27479) : pred__27455.call(null,G__27478,G__27479));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__27352,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27480 = cljs.core.cst$kw$arg3;
var G__27481 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27480,G__27481) : pred__27455.call(null,G__27480,G__27481));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__27352,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27486 = cljs.core.cst$kw$arg4;
var G__27487 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27486,G__27487) : pred__27455.call(null,G__27486,G__27487));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__27352,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27490 = cljs.core.cst$kw$arg5;
var G__27491 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27490,G__27491) : pred__27455.call(null,G__27490,G__27491));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__27352,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27495 = cljs.core.cst$kw$arg6;
var G__27496 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27495,G__27496) : pred__27455.call(null,G__27495,G__27496));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__27352,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27500 = cljs.core.cst$kw$arg7;
var G__27501 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27500,G__27501) : pred__27455.call(null,G__27500,G__27501));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__27352,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27502 = cljs.core.cst$kw$arg8;
var G__27503 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27502,G__27503) : pred__27455.call(null,G__27502,G__27503));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__27352,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27504 = cljs.core.cst$kw$arg9;
var G__27505 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27504,G__27505) : pred__27455.call(null,G__27504,G__27505));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__27352,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__27352),null));
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__27352){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__27352,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9], null);
});

com.rpl.specter.impl.LateFn10.cljs$lang$type = true;

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn10");
});

com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn10");
});

com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__27357){
return (new com.rpl.specter.impl.LateFn10(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__27357),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__27357),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27357,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn11 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k27528,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__27544 = k27528;
var G__27544__$1 = (((G__27544 instanceof cljs.core.Keyword))?G__27544.fqn:null);
switch (G__27544__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27528,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26099){
var self__ = this;
var this__23726__auto____$1 = this;
var G__27547 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26099);
var G__27548 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26099);
var G__27549 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26099);
var G__27550 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26099);
var G__27551 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26099);
var G__27552 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26099);
var G__27553 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26099);
var G__27554 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26099);
var G__27555 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26099);
var G__27556 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26099);
var G__27557 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params26099);
var fexpr__27546 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26099);
return (fexpr__27546.cljs$core$IFn$_invoke$arity$11 ? fexpr__27546.cljs$core$IFn$_invoke$arity$11(G__27547,G__27548,G__27549,G__27550,G__27551,G__27552,G__27553,G__27554,G__27555,G__27556,G__27557) : fexpr__27546.call(null,G__27547,G__27548,G__27549,G__27550,G__27551,G__27552,G__27553,G__27554,G__27555,G__27556,G__27557));
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27527){
var self__ = this;
var G__27527__$1 = this;
return (new cljs.core.RecordIter((0),G__27527__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__27577 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__27577(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27529,other27530){
var self__ = this;
var this27529__$1 = this;
return (!((other27530 == null))) && ((this27529__$1.constructor === other27530.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.fn,other27530.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg0,other27530.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg1,other27530.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg2,other27530.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg3,other27530.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg4,other27530.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg5,other27530.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg6,other27530.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg7,other27530.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg8,other27530.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg9,other27530.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.arg10,other27530.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27529__$1.__extmap,other27530.__extmap));
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__27527){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__27601 = cljs.core.keyword_identical_QMARK_;
var expr__27602 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__27604 = cljs.core.cst$kw$fn;
var G__27605 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27604,G__27605) : pred__27601.call(null,G__27604,G__27605));
})())){
return (new com.rpl.specter.impl.LateFn11(G__27527,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27607 = cljs.core.cst$kw$arg0;
var G__27608 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27607,G__27608) : pred__27601.call(null,G__27607,G__27608));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__27527,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27609 = cljs.core.cst$kw$arg1;
var G__27610 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27609,G__27610) : pred__27601.call(null,G__27609,G__27610));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__27527,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27611 = cljs.core.cst$kw$arg2;
var G__27612 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27611,G__27612) : pred__27601.call(null,G__27611,G__27612));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__27527,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27616 = cljs.core.cst$kw$arg3;
var G__27617 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27616,G__27617) : pred__27601.call(null,G__27616,G__27617));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__27527,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27618 = cljs.core.cst$kw$arg4;
var G__27619 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27618,G__27619) : pred__27601.call(null,G__27618,G__27619));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__27527,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27622 = cljs.core.cst$kw$arg5;
var G__27623 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27622,G__27623) : pred__27601.call(null,G__27622,G__27623));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__27527,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27624 = cljs.core.cst$kw$arg6;
var G__27625 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27624,G__27625) : pred__27601.call(null,G__27624,G__27625));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__27527,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27626 = cljs.core.cst$kw$arg7;
var G__27627 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27626,G__27627) : pred__27601.call(null,G__27626,G__27627));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__27527,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27628 = cljs.core.cst$kw$arg8;
var G__27629 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27628,G__27629) : pred__27601.call(null,G__27628,G__27629));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__27527,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27630 = cljs.core.cst$kw$arg9;
var G__27631 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27630,G__27631) : pred__27601.call(null,G__27630,G__27631));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__27527,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27632 = cljs.core.cst$kw$arg10;
var G__27633 = expr__27602;
return (pred__27601.cljs$core$IFn$_invoke$arity$2 ? pred__27601.cljs$core$IFn$_invoke$arity$2(G__27632,G__27633) : pred__27601.call(null,G__27632,G__27633));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__27527,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__27527),null));
}
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__27527){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__27527,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10], null);
});

com.rpl.specter.impl.LateFn11.cljs$lang$type = true;

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn11");
});

com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn11");
});

com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__27533){
return (new com.rpl.specter.impl.LateFn11(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__27533),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__27533),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27533,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn12 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k27665,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__27671 = k27665;
var G__27671__$1 = (((G__27671 instanceof cljs.core.Keyword))?G__27671.fqn:null);
switch (G__27671__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27665,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26100){
var self__ = this;
var this__23726__auto____$1 = this;
var G__27676 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26100);
var G__27677 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26100);
var G__27678 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26100);
var G__27679 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26100);
var G__27680 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26100);
var G__27681 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26100);
var G__27682 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26100);
var G__27683 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26100);
var G__27684 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26100);
var G__27685 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26100);
var G__27686 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params26100);
var G__27687 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params26100);
var fexpr__27675 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26100);
return (fexpr__27675.cljs$core$IFn$_invoke$arity$12 ? fexpr__27675.cljs$core$IFn$_invoke$arity$12(G__27676,G__27677,G__27678,G__27679,G__27680,G__27681,G__27682,G__27683,G__27684,G__27685,G__27686,G__27687) : fexpr__27675.call(null,G__27676,G__27677,G__27678,G__27679,G__27680,G__27681,G__27682,G__27683,G__27684,G__27685,G__27686,G__27687));
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27664){
var self__ = this;
var G__27664__$1 = this;
return (new cljs.core.RecordIter((0),G__27664__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__27701 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__27701(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27666,other27667){
var self__ = this;
var this27666__$1 = this;
return (!((other27667 == null))) && ((this27666__$1.constructor === other27667.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.fn,other27667.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg0,other27667.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg1,other27667.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg2,other27667.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg3,other27667.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg4,other27667.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg5,other27667.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg6,other27667.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg7,other27667.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg8,other27667.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg9,other27667.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg10,other27667.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.arg11,other27667.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.__extmap,other27667.__extmap));
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__27664){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__27713 = cljs.core.keyword_identical_QMARK_;
var expr__27714 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__27717 = cljs.core.cst$kw$fn;
var G__27718 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27717,G__27718) : pred__27713.call(null,G__27717,G__27718));
})())){
return (new com.rpl.specter.impl.LateFn12(G__27664,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27719 = cljs.core.cst$kw$arg0;
var G__27720 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27719,G__27720) : pred__27713.call(null,G__27719,G__27720));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__27664,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27721 = cljs.core.cst$kw$arg1;
var G__27722 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27721,G__27722) : pred__27713.call(null,G__27721,G__27722));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__27664,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27723 = cljs.core.cst$kw$arg2;
var G__27724 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27723,G__27724) : pred__27713.call(null,G__27723,G__27724));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__27664,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27726 = cljs.core.cst$kw$arg3;
var G__27727 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27726,G__27727) : pred__27713.call(null,G__27726,G__27727));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__27664,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27730 = cljs.core.cst$kw$arg4;
var G__27731 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27730,G__27731) : pred__27713.call(null,G__27730,G__27731));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__27664,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27732 = cljs.core.cst$kw$arg5;
var G__27733 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27732,G__27733) : pred__27713.call(null,G__27732,G__27733));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__27664,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27734 = cljs.core.cst$kw$arg6;
var G__27735 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27734,G__27735) : pred__27713.call(null,G__27734,G__27735));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__27664,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27737 = cljs.core.cst$kw$arg7;
var G__27738 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27737,G__27738) : pred__27713.call(null,G__27737,G__27738));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__27664,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27739 = cljs.core.cst$kw$arg8;
var G__27740 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27739,G__27740) : pred__27713.call(null,G__27739,G__27740));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__27664,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27741 = cljs.core.cst$kw$arg9;
var G__27742 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27741,G__27742) : pred__27713.call(null,G__27741,G__27742));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__27664,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27743 = cljs.core.cst$kw$arg10;
var G__27744 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27743,G__27744) : pred__27713.call(null,G__27743,G__27744));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__27664,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27747 = cljs.core.cst$kw$arg11;
var G__27748 = expr__27714;
return (pred__27713.cljs$core$IFn$_invoke$arity$2 ? pred__27713.cljs$core$IFn$_invoke$arity$2(G__27747,G__27748) : pred__27713.call(null,G__27747,G__27748));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__27664,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__27664),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__27664){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__27664,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11], null);
});

com.rpl.specter.impl.LateFn12.cljs$lang$type = true;

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn12");
});

com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn12");
});

com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__27669){
return (new com.rpl.specter.impl.LateFn12(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__27669),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__27669),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27669,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn13 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k27765,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__27776 = k27765;
var G__27776__$1 = (((G__27776 instanceof cljs.core.Keyword))?G__27776.fqn:null);
switch (G__27776__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27765,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26101){
var self__ = this;
var this__23726__auto____$1 = this;
var G__27785 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26101);
var G__27786 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26101);
var G__27787 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26101);
var G__27788 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26101);
var G__27789 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26101);
var G__27790 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26101);
var G__27791 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26101);
var G__27792 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26101);
var G__27793 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26101);
var G__27794 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26101);
var G__27795 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params26101);
var G__27796 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params26101);
var G__27797 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params26101);
var fexpr__27784 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26101);
return (fexpr__27784.cljs$core$IFn$_invoke$arity$13 ? fexpr__27784.cljs$core$IFn$_invoke$arity$13(G__27785,G__27786,G__27787,G__27788,G__27789,G__27790,G__27791,G__27792,G__27793,G__27794,G__27795,G__27796,G__27797) : fexpr__27784.call(null,G__27785,G__27786,G__27787,G__27788,G__27789,G__27790,G__27791,G__27792,G__27793,G__27794,G__27795,G__27796,G__27797));
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27764){
var self__ = this;
var G__27764__$1 = this;
return (new cljs.core.RecordIter((0),G__27764__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__27817 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__27817(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27766,other27767){
var self__ = this;
var this27766__$1 = this;
return (!((other27767 == null))) && ((this27766__$1.constructor === other27767.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.fn,other27767.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg0,other27767.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg1,other27767.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg2,other27767.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg3,other27767.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg4,other27767.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg5,other27767.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg6,other27767.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg7,other27767.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg8,other27767.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg9,other27767.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg10,other27767.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg11,other27767.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.arg12,other27767.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27766__$1.__extmap,other27767.__extmap));
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__27764){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__27838 = cljs.core.keyword_identical_QMARK_;
var expr__27839 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__27841 = cljs.core.cst$kw$fn;
var G__27842 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27841,G__27842) : pred__27838.call(null,G__27841,G__27842));
})())){
return (new com.rpl.specter.impl.LateFn13(G__27764,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27843 = cljs.core.cst$kw$arg0;
var G__27844 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27843,G__27844) : pred__27838.call(null,G__27843,G__27844));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__27764,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27845 = cljs.core.cst$kw$arg1;
var G__27846 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27845,G__27846) : pred__27838.call(null,G__27845,G__27846));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__27764,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27848 = cljs.core.cst$kw$arg2;
var G__27849 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27848,G__27849) : pred__27838.call(null,G__27848,G__27849));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__27764,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27850 = cljs.core.cst$kw$arg3;
var G__27851 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27850,G__27851) : pred__27838.call(null,G__27850,G__27851));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__27764,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27852 = cljs.core.cst$kw$arg4;
var G__27853 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27852,G__27853) : pred__27838.call(null,G__27852,G__27853));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__27764,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27854 = cljs.core.cst$kw$arg5;
var G__27855 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27854,G__27855) : pred__27838.call(null,G__27854,G__27855));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__27764,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27856 = cljs.core.cst$kw$arg6;
var G__27857 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27856,G__27857) : pred__27838.call(null,G__27856,G__27857));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__27764,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27858 = cljs.core.cst$kw$arg7;
var G__27859 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27858,G__27859) : pred__27838.call(null,G__27858,G__27859));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__27764,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27862 = cljs.core.cst$kw$arg8;
var G__27863 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27862,G__27863) : pred__27838.call(null,G__27862,G__27863));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__27764,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27864 = cljs.core.cst$kw$arg9;
var G__27865 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27864,G__27865) : pred__27838.call(null,G__27864,G__27865));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__27764,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27867 = cljs.core.cst$kw$arg10;
var G__27868 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27867,G__27868) : pred__27838.call(null,G__27867,G__27868));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__27764,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27870 = cljs.core.cst$kw$arg11;
var G__27871 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27870,G__27871) : pred__27838.call(null,G__27870,G__27871));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__27764,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27872 = cljs.core.cst$kw$arg12;
var G__27873 = expr__27839;
return (pred__27838.cljs$core$IFn$_invoke$arity$2 ? pred__27838.cljs$core$IFn$_invoke$arity$2(G__27872,G__27873) : pred__27838.call(null,G__27872,G__27873));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__27764,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__27764),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__27764){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__27764,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12], null);
});

com.rpl.specter.impl.LateFn13.cljs$lang$type = true;

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn13");
});

com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn13");
});

com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__27768){
return (new com.rpl.specter.impl.LateFn13(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__27768),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__27768),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27768,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn14 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k27885,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__27891 = k27885;
var G__27891__$1 = (((G__27891 instanceof cljs.core.Keyword))?G__27891.fqn:null);
switch (G__27891__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27885,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26102){
var self__ = this;
var this__23726__auto____$1 = this;
var G__27894 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26102);
var G__27895 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26102);
var G__27896 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26102);
var G__27897 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26102);
var G__27898 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26102);
var G__27899 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26102);
var G__27900 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26102);
var G__27901 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26102);
var G__27902 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26102);
var G__27903 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26102);
var G__27904 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params26102);
var G__27905 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params26102);
var G__27906 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params26102);
var G__27907 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params26102);
var fexpr__27893 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26102);
return (fexpr__27893.cljs$core$IFn$_invoke$arity$14 ? fexpr__27893.cljs$core$IFn$_invoke$arity$14(G__27894,G__27895,G__27896,G__27897,G__27898,G__27899,G__27900,G__27901,G__27902,G__27903,G__27904,G__27905,G__27906,G__27907) : fexpr__27893.call(null,G__27894,G__27895,G__27896,G__27897,G__27898,G__27899,G__27900,G__27901,G__27902,G__27903,G__27904,G__27905,G__27906,G__27907));
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27884){
var self__ = this;
var G__27884__$1 = this;
return (new cljs.core.RecordIter((0),G__27884__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__27920 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__27920(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27887,other27888){
var self__ = this;
var this27887__$1 = this;
return (!((other27888 == null))) && ((this27887__$1.constructor === other27888.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.fn,other27888.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg0,other27888.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg1,other27888.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg2,other27888.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg3,other27888.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg4,other27888.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg5,other27888.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg6,other27888.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg7,other27888.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg8,other27888.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg9,other27888.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg10,other27888.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg11,other27888.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg12,other27888.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.arg13,other27888.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27887__$1.__extmap,other27888.__extmap));
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__27884){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__27947 = cljs.core.keyword_identical_QMARK_;
var expr__27948 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__27950 = cljs.core.cst$kw$fn;
var G__27951 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27950,G__27951) : pred__27947.call(null,G__27950,G__27951));
})())){
return (new com.rpl.specter.impl.LateFn14(G__27884,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27952 = cljs.core.cst$kw$arg0;
var G__27953 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27952,G__27953) : pred__27947.call(null,G__27952,G__27953));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__27884,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27954 = cljs.core.cst$kw$arg1;
var G__27955 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27954,G__27955) : pred__27947.call(null,G__27954,G__27955));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__27884,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27956 = cljs.core.cst$kw$arg2;
var G__27957 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27956,G__27957) : pred__27947.call(null,G__27956,G__27957));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__27884,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27959 = cljs.core.cst$kw$arg3;
var G__27960 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27959,G__27960) : pred__27947.call(null,G__27959,G__27960));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__27884,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27965 = cljs.core.cst$kw$arg4;
var G__27966 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27965,G__27966) : pred__27947.call(null,G__27965,G__27966));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__27884,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27970 = cljs.core.cst$kw$arg5;
var G__27971 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27970,G__27971) : pred__27947.call(null,G__27970,G__27971));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__27884,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27972 = cljs.core.cst$kw$arg6;
var G__27973 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27972,G__27973) : pred__27947.call(null,G__27972,G__27973));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__27884,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27974 = cljs.core.cst$kw$arg7;
var G__27975 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27974,G__27975) : pred__27947.call(null,G__27974,G__27975));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__27884,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27979 = cljs.core.cst$kw$arg8;
var G__27980 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27979,G__27980) : pred__27947.call(null,G__27979,G__27980));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__27884,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27981 = cljs.core.cst$kw$arg9;
var G__27982 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27981,G__27982) : pred__27947.call(null,G__27981,G__27982));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__27884,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27986 = cljs.core.cst$kw$arg10;
var G__27987 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27986,G__27987) : pred__27947.call(null,G__27986,G__27987));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__27884,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27991 = cljs.core.cst$kw$arg11;
var G__27992 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27991,G__27992) : pred__27947.call(null,G__27991,G__27992));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__27884,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27993 = cljs.core.cst$kw$arg12;
var G__27994 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27993,G__27994) : pred__27947.call(null,G__27993,G__27994));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__27884,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27995 = cljs.core.cst$kw$arg13;
var G__27996 = expr__27948;
return (pred__27947.cljs$core$IFn$_invoke$arity$2 ? pred__27947.cljs$core$IFn$_invoke$arity$2(G__27995,G__27996) : pred__27947.call(null,G__27995,G__27996));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__27884,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__27884),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__27884){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__27884,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13], null);
});

com.rpl.specter.impl.LateFn14.cljs$lang$type = true;

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn14");
});

com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn14");
});

com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__27890){
return (new com.rpl.specter.impl.LateFn14(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__27890),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__27890),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27890,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn15 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k28017,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__28025 = k28017;
var G__28025__$1 = (((G__28025 instanceof cljs.core.Keyword))?G__28025.fqn:null);
switch (G__28025__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28017,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26103){
var self__ = this;
var this__23726__auto____$1 = this;
var G__28030 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26103);
var G__28031 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26103);
var G__28032 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26103);
var G__28033 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26103);
var G__28034 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26103);
var G__28035 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26103);
var G__28036 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26103);
var G__28037 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26103);
var G__28038 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26103);
var G__28039 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26103);
var G__28040 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params26103);
var G__28041 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params26103);
var G__28042 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params26103);
var G__28043 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params26103);
var G__28044 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params26103);
var fexpr__28029 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26103);
return (fexpr__28029.cljs$core$IFn$_invoke$arity$15 ? fexpr__28029.cljs$core$IFn$_invoke$arity$15(G__28030,G__28031,G__28032,G__28033,G__28034,G__28035,G__28036,G__28037,G__28038,G__28039,G__28040,G__28041,G__28042,G__28043,G__28044) : fexpr__28029.call(null,G__28030,G__28031,G__28032,G__28033,G__28034,G__28035,G__28036,G__28037,G__28038,G__28039,G__28040,G__28041,G__28042,G__28043,G__28044));
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28016){
var self__ = this;
var G__28016__$1 = this;
return (new cljs.core.RecordIter((0),G__28016__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__28068 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__28068(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28018,other28019){
var self__ = this;
var this28018__$1 = this;
return (!((other28019 == null))) && ((this28018__$1.constructor === other28019.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.fn,other28019.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg0,other28019.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg1,other28019.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg2,other28019.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg3,other28019.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg4,other28019.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg5,other28019.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg6,other28019.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg7,other28019.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg8,other28019.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg9,other28019.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg10,other28019.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg11,other28019.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg12,other28019.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg13,other28019.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.arg14,other28019.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28018__$1.__extmap,other28019.__extmap));
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__28016){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__28082 = cljs.core.keyword_identical_QMARK_;
var expr__28083 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__28085 = cljs.core.cst$kw$fn;
var G__28086 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28085,G__28086) : pred__28082.call(null,G__28085,G__28086));
})())){
return (new com.rpl.specter.impl.LateFn15(G__28016,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28087 = cljs.core.cst$kw$arg0;
var G__28088 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28087,G__28088) : pred__28082.call(null,G__28087,G__28088));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__28016,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28090 = cljs.core.cst$kw$arg1;
var G__28091 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28090,G__28091) : pred__28082.call(null,G__28090,G__28091));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__28016,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28093 = cljs.core.cst$kw$arg2;
var G__28094 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28093,G__28094) : pred__28082.call(null,G__28093,G__28094));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__28016,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28096 = cljs.core.cst$kw$arg3;
var G__28097 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28096,G__28097) : pred__28082.call(null,G__28096,G__28097));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__28016,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28098 = cljs.core.cst$kw$arg4;
var G__28099 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28098,G__28099) : pred__28082.call(null,G__28098,G__28099));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__28016,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28100 = cljs.core.cst$kw$arg5;
var G__28101 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28100,G__28101) : pred__28082.call(null,G__28100,G__28101));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__28016,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28105 = cljs.core.cst$kw$arg6;
var G__28106 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28105,G__28106) : pred__28082.call(null,G__28105,G__28106));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__28016,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28107 = cljs.core.cst$kw$arg7;
var G__28108 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28107,G__28108) : pred__28082.call(null,G__28107,G__28108));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__28016,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28109 = cljs.core.cst$kw$arg8;
var G__28110 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28109,G__28110) : pred__28082.call(null,G__28109,G__28110));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__28016,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28112 = cljs.core.cst$kw$arg9;
var G__28113 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28112,G__28113) : pred__28082.call(null,G__28112,G__28113));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__28016,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28116 = cljs.core.cst$kw$arg10;
var G__28117 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28116,G__28117) : pred__28082.call(null,G__28116,G__28117));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__28016,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28122 = cljs.core.cst$kw$arg11;
var G__28123 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28122,G__28123) : pred__28082.call(null,G__28122,G__28123));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__28016,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28124 = cljs.core.cst$kw$arg12;
var G__28125 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28124,G__28125) : pred__28082.call(null,G__28124,G__28125));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__28016,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28129 = cljs.core.cst$kw$arg13;
var G__28130 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28129,G__28130) : pred__28082.call(null,G__28129,G__28130));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__28016,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28131 = cljs.core.cst$kw$arg14;
var G__28132 = expr__28083;
return (pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(G__28131,G__28132) : pred__28082.call(null,G__28131,G__28132));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__28016,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__28016),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__28016){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__28016,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14], null);
});

com.rpl.specter.impl.LateFn15.cljs$lang$type = true;

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn15");
});

com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn15");
});

com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__28022){
return (new com.rpl.specter.impl.LateFn15(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__28022),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__28022),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28022,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn16 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k28157,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__28189 = k28157;
var G__28189__$1 = (((G__28189 instanceof cljs.core.Keyword))?G__28189.fqn:null);
switch (G__28189__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28157,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26104){
var self__ = this;
var this__23726__auto____$1 = this;
var G__28192 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26104);
var G__28193 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26104);
var G__28194 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26104);
var G__28195 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26104);
var G__28196 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26104);
var G__28197 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26104);
var G__28198 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26104);
var G__28199 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26104);
var G__28200 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26104);
var G__28201 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26104);
var G__28202 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params26104);
var G__28203 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params26104);
var G__28204 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params26104);
var G__28205 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params26104);
var G__28206 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params26104);
var G__28207 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params26104);
var fexpr__28191 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26104);
return (fexpr__28191.cljs$core$IFn$_invoke$arity$16 ? fexpr__28191.cljs$core$IFn$_invoke$arity$16(G__28192,G__28193,G__28194,G__28195,G__28196,G__28197,G__28198,G__28199,G__28200,G__28201,G__28202,G__28203,G__28204,G__28205,G__28206,G__28207) : fexpr__28191.call(null,G__28192,G__28193,G__28194,G__28195,G__28196,G__28197,G__28198,G__28199,G__28200,G__28201,G__28202,G__28203,G__28204,G__28205,G__28206,G__28207));
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28156){
var self__ = this;
var G__28156__$1 = this;
return (new cljs.core.RecordIter((0),G__28156__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__28230 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__28230(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28158,other28159){
var self__ = this;
var this28158__$1 = this;
return (!((other28159 == null))) && ((this28158__$1.constructor === other28159.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.fn,other28159.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg0,other28159.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg1,other28159.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg2,other28159.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg3,other28159.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg4,other28159.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg5,other28159.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg6,other28159.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg7,other28159.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg8,other28159.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg9,other28159.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg10,other28159.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg11,other28159.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg12,other28159.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg13,other28159.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg14,other28159.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.arg15,other28159.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28158__$1.__extmap,other28159.__extmap));
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__28156){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__28242 = cljs.core.keyword_identical_QMARK_;
var expr__28243 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__28245 = cljs.core.cst$kw$fn;
var G__28246 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28245,G__28246) : pred__28242.call(null,G__28245,G__28246));
})())){
return (new com.rpl.specter.impl.LateFn16(G__28156,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28247 = cljs.core.cst$kw$arg0;
var G__28248 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28247,G__28248) : pred__28242.call(null,G__28247,G__28248));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__28156,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28249 = cljs.core.cst$kw$arg1;
var G__28250 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28249,G__28250) : pred__28242.call(null,G__28249,G__28250));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__28156,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28252 = cljs.core.cst$kw$arg2;
var G__28253 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28252,G__28253) : pred__28242.call(null,G__28252,G__28253));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__28156,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28254 = cljs.core.cst$kw$arg3;
var G__28255 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28254,G__28255) : pred__28242.call(null,G__28254,G__28255));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__28156,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28257 = cljs.core.cst$kw$arg4;
var G__28258 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28257,G__28258) : pred__28242.call(null,G__28257,G__28258));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__28156,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28259 = cljs.core.cst$kw$arg5;
var G__28260 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28259,G__28260) : pred__28242.call(null,G__28259,G__28260));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__28156,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28261 = cljs.core.cst$kw$arg6;
var G__28262 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28261,G__28262) : pred__28242.call(null,G__28261,G__28262));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__28156,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28264 = cljs.core.cst$kw$arg7;
var G__28265 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28264,G__28265) : pred__28242.call(null,G__28264,G__28265));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__28156,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28266 = cljs.core.cst$kw$arg8;
var G__28267 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28266,G__28267) : pred__28242.call(null,G__28266,G__28267));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__28156,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28270 = cljs.core.cst$kw$arg9;
var G__28271 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28270,G__28271) : pred__28242.call(null,G__28270,G__28271));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__28156,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28273 = cljs.core.cst$kw$arg10;
var G__28274 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28273,G__28274) : pred__28242.call(null,G__28273,G__28274));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__28156,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28275 = cljs.core.cst$kw$arg11;
var G__28276 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28275,G__28276) : pred__28242.call(null,G__28275,G__28276));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__28156,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28277 = cljs.core.cst$kw$arg12;
var G__28278 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28277,G__28278) : pred__28242.call(null,G__28277,G__28278));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__28156,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28279 = cljs.core.cst$kw$arg13;
var G__28280 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28279,G__28280) : pred__28242.call(null,G__28279,G__28280));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__28156,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28284 = cljs.core.cst$kw$arg14;
var G__28285 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28284,G__28285) : pred__28242.call(null,G__28284,G__28285));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__28156,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28286 = cljs.core.cst$kw$arg15;
var G__28287 = expr__28243;
return (pred__28242.cljs$core$IFn$_invoke$arity$2 ? pred__28242.cljs$core$IFn$_invoke$arity$2(G__28286,G__28287) : pred__28242.call(null,G__28286,G__28287));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__28156,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__28156),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__28156){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__28156,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15], null);
});

com.rpl.specter.impl.LateFn16.cljs$lang$type = true;

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn16");
});

com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn16");
});

com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__28162){
return (new com.rpl.specter.impl.LateFn16(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__28162),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__28162),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28162,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn17 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k28317,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__28322 = k28317;
var G__28322__$1 = (((G__28322 instanceof cljs.core.Keyword))?G__28322.fqn:null);
switch (G__28322__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28317,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26105){
var self__ = this;
var this__23726__auto____$1 = this;
var G__28328 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26105);
var G__28329 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26105);
var G__28330 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26105);
var G__28331 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26105);
var G__28332 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26105);
var G__28333 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26105);
var G__28334 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26105);
var G__28335 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26105);
var G__28336 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26105);
var G__28337 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26105);
var G__28338 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params26105);
var G__28339 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params26105);
var G__28340 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params26105);
var G__28341 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params26105);
var G__28342 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params26105);
var G__28343 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params26105);
var G__28344 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params26105);
var fexpr__28327 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26105);
return (fexpr__28327.cljs$core$IFn$_invoke$arity$17 ? fexpr__28327.cljs$core$IFn$_invoke$arity$17(G__28328,G__28329,G__28330,G__28331,G__28332,G__28333,G__28334,G__28335,G__28336,G__28337,G__28338,G__28339,G__28340,G__28341,G__28342,G__28343,G__28344) : fexpr__28327.call(null,G__28328,G__28329,G__28330,G__28331,G__28332,G__28333,G__28334,G__28335,G__28336,G__28337,G__28338,G__28339,G__28340,G__28341,G__28342,G__28343,G__28344));
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28316){
var self__ = this;
var G__28316__$1 = this;
return (new cljs.core.RecordIter((0),G__28316__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__28363 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__28363(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28318,other28319){
var self__ = this;
var this28318__$1 = this;
return (!((other28319 == null))) && ((this28318__$1.constructor === other28319.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.fn,other28319.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg0,other28319.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg1,other28319.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg2,other28319.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg3,other28319.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg4,other28319.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg5,other28319.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg6,other28319.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg7,other28319.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg8,other28319.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg9,other28319.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg10,other28319.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg11,other28319.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg12,other28319.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg13,other28319.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg14,other28319.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg15,other28319.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.arg16,other28319.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28318__$1.__extmap,other28319.__extmap));
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg16,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__28316){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__28392 = cljs.core.keyword_identical_QMARK_;
var expr__28393 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__28395 = cljs.core.cst$kw$fn;
var G__28396 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28395,G__28396) : pred__28392.call(null,G__28395,G__28396));
})())){
return (new com.rpl.specter.impl.LateFn17(G__28316,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28397 = cljs.core.cst$kw$arg0;
var G__28398 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28397,G__28398) : pred__28392.call(null,G__28397,G__28398));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__28316,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28401 = cljs.core.cst$kw$arg1;
var G__28402 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28401,G__28402) : pred__28392.call(null,G__28401,G__28402));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__28316,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28407 = cljs.core.cst$kw$arg2;
var G__28408 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28407,G__28408) : pred__28392.call(null,G__28407,G__28408));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__28316,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28411 = cljs.core.cst$kw$arg3;
var G__28412 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28411,G__28412) : pred__28392.call(null,G__28411,G__28412));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__28316,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28419 = cljs.core.cst$kw$arg4;
var G__28420 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28419,G__28420) : pred__28392.call(null,G__28419,G__28420));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__28316,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28422 = cljs.core.cst$kw$arg5;
var G__28423 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28422,G__28423) : pred__28392.call(null,G__28422,G__28423));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__28316,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28424 = cljs.core.cst$kw$arg6;
var G__28425 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28424,G__28425) : pred__28392.call(null,G__28424,G__28425));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__28316,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28426 = cljs.core.cst$kw$arg7;
var G__28427 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28426,G__28427) : pred__28392.call(null,G__28426,G__28427));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__28316,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28428 = cljs.core.cst$kw$arg8;
var G__28429 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28428,G__28429) : pred__28392.call(null,G__28428,G__28429));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__28316,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28430 = cljs.core.cst$kw$arg9;
var G__28431 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28430,G__28431) : pred__28392.call(null,G__28430,G__28431));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__28316,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28432 = cljs.core.cst$kw$arg10;
var G__28433 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28432,G__28433) : pred__28392.call(null,G__28432,G__28433));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__28316,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28434 = cljs.core.cst$kw$arg11;
var G__28435 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28434,G__28435) : pred__28392.call(null,G__28434,G__28435));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__28316,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28436 = cljs.core.cst$kw$arg12;
var G__28437 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28436,G__28437) : pred__28392.call(null,G__28436,G__28437));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__28316,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28439 = cljs.core.cst$kw$arg13;
var G__28440 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28439,G__28440) : pred__28392.call(null,G__28439,G__28440));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__28316,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28441 = cljs.core.cst$kw$arg14;
var G__28442 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28441,G__28442) : pred__28392.call(null,G__28441,G__28442));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__28316,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28443 = cljs.core.cst$kw$arg15;
var G__28444 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28443,G__28444) : pred__28392.call(null,G__28443,G__28444));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__28316,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28447 = cljs.core.cst$kw$arg16;
var G__28448 = expr__28393;
return (pred__28392.cljs$core$IFn$_invoke$arity$2 ? pred__28392.cljs$core$IFn$_invoke$arity$2(G__28447,G__28448) : pred__28392.call(null,G__28447,G__28448));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__28316,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__28316),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__28316){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__28316,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15,cljs.core.cst$sym$arg16], null);
});

com.rpl.specter.impl.LateFn17.cljs$lang$type = true;

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn17");
});

com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn17");
});

com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__28320){
return (new com.rpl.specter.impl.LateFn17(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__28320),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__28320),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28320,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn18 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k28477,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__28492 = k28477;
var G__28492__$1 = (((G__28492 instanceof cljs.core.Keyword))?G__28492.fqn:null);
switch (G__28492__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28477,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26106){
var self__ = this;
var this__23726__auto____$1 = this;
var G__28496 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26106);
var G__28497 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26106);
var G__28498 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26106);
var G__28499 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26106);
var G__28500 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26106);
var G__28501 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26106);
var G__28502 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26106);
var G__28503 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26106);
var G__28504 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26106);
var G__28505 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26106);
var G__28506 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params26106);
var G__28507 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params26106);
var G__28508 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params26106);
var G__28509 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params26106);
var G__28510 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params26106);
var G__28511 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params26106);
var G__28512 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params26106);
var G__28513 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params26106);
var fexpr__28495 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26106);
return (fexpr__28495.cljs$core$IFn$_invoke$arity$18 ? fexpr__28495.cljs$core$IFn$_invoke$arity$18(G__28496,G__28497,G__28498,G__28499,G__28500,G__28501,G__28502,G__28503,G__28504,G__28505,G__28506,G__28507,G__28508,G__28509,G__28510,G__28511,G__28512,G__28513) : fexpr__28495.call(null,G__28496,G__28497,G__28498,G__28499,G__28500,G__28501,G__28502,G__28503,G__28504,G__28505,G__28506,G__28507,G__28508,G__28509,G__28510,G__28511,G__28512,G__28513));
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg17,self__.arg17],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28476){
var self__ = this;
var G__28476__$1 = this;
return (new cljs.core.RecordIter((0),G__28476__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__28533 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__28533(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28478,other28479){
var self__ = this;
var this28478__$1 = this;
return (!((other28479 == null))) && ((this28478__$1.constructor === other28479.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.fn,other28479.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg0,other28479.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg1,other28479.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg2,other28479.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg3,other28479.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg4,other28479.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg5,other28479.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg6,other28479.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg7,other28479.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg8,other28479.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg9,other28479.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg10,other28479.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg11,other28479.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg12,other28479.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg13,other28479.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg14,other28479.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg15,other28479.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg16,other28479.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.arg17,other28479.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28478__$1.__extmap,other28479.__extmap));
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg17,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg16,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__28476){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__28550 = cljs.core.keyword_identical_QMARK_;
var expr__28551 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__28553 = cljs.core.cst$kw$fn;
var G__28554 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28553,G__28554) : pred__28550.call(null,G__28553,G__28554));
})())){
return (new com.rpl.specter.impl.LateFn18(G__28476,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28555 = cljs.core.cst$kw$arg0;
var G__28556 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28555,G__28556) : pred__28550.call(null,G__28555,G__28556));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__28476,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28557 = cljs.core.cst$kw$arg1;
var G__28558 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28557,G__28558) : pred__28550.call(null,G__28557,G__28558));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__28476,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28559 = cljs.core.cst$kw$arg2;
var G__28560 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28559,G__28560) : pred__28550.call(null,G__28559,G__28560));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__28476,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28561 = cljs.core.cst$kw$arg3;
var G__28562 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28561,G__28562) : pred__28550.call(null,G__28561,G__28562));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__28476,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28563 = cljs.core.cst$kw$arg4;
var G__28564 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28563,G__28564) : pred__28550.call(null,G__28563,G__28564));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__28476,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28566 = cljs.core.cst$kw$arg5;
var G__28567 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28566,G__28567) : pred__28550.call(null,G__28566,G__28567));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__28476,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28568 = cljs.core.cst$kw$arg6;
var G__28569 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28568,G__28569) : pred__28550.call(null,G__28568,G__28569));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__28476,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28573 = cljs.core.cst$kw$arg7;
var G__28574 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28573,G__28574) : pred__28550.call(null,G__28573,G__28574));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__28476,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28575 = cljs.core.cst$kw$arg8;
var G__28576 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28575,G__28576) : pred__28550.call(null,G__28575,G__28576));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__28476,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28578 = cljs.core.cst$kw$arg9;
var G__28579 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28578,G__28579) : pred__28550.call(null,G__28578,G__28579));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__28476,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28580 = cljs.core.cst$kw$arg10;
var G__28581 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28580,G__28581) : pred__28550.call(null,G__28580,G__28581));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__28476,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28585 = cljs.core.cst$kw$arg11;
var G__28586 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28585,G__28586) : pred__28550.call(null,G__28585,G__28586));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__28476,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28587 = cljs.core.cst$kw$arg12;
var G__28588 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28587,G__28588) : pred__28550.call(null,G__28587,G__28588));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__28476,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28592 = cljs.core.cst$kw$arg13;
var G__28593 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28592,G__28593) : pred__28550.call(null,G__28592,G__28593));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__28476,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28596 = cljs.core.cst$kw$arg14;
var G__28597 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28596,G__28597) : pred__28550.call(null,G__28596,G__28597));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__28476,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28598 = cljs.core.cst$kw$arg15;
var G__28599 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28598,G__28599) : pred__28550.call(null,G__28598,G__28599));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__28476,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28602 = cljs.core.cst$kw$arg16;
var G__28603 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28602,G__28603) : pred__28550.call(null,G__28602,G__28603));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__28476,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28604 = cljs.core.cst$kw$arg17;
var G__28605 = expr__28551;
return (pred__28550.cljs$core$IFn$_invoke$arity$2 ? pred__28550.cljs$core$IFn$_invoke$arity$2(G__28604,G__28605) : pred__28550.call(null,G__28604,G__28605));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__28476,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__28476),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg17,self__.arg17],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__28476){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__28476,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15,cljs.core.cst$sym$arg16,cljs.core.cst$sym$arg17], null);
});

com.rpl.specter.impl.LateFn18.cljs$lang$type = true;

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn18");
});

com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn18");
});

com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__28483){
return (new com.rpl.specter.impl.LateFn18(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__28483),cljs.core.cst$kw$arg17.cljs$core$IFn$_invoke$arity$1(G__28483),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28483,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17], 0))),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn19 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.arg18 = arg18;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k28637,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__28645 = k28637;
var G__28645__$1 = (((G__28645 instanceof cljs.core.Keyword))?G__28645.fqn:null);
switch (G__28645__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
case "arg18":
return self__.arg18;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28637,else__11103__auto__);

}
});


com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__23726__auto__,dynamic_params26107){
var self__ = this;
var this__23726__auto____$1 = this;
var G__28647 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params26107);
var G__28648 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params26107);
var G__28649 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params26107);
var G__28650 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params26107);
var G__28651 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params26107);
var G__28652 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params26107);
var G__28653 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params26107);
var G__28654 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params26107);
var G__28655 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params26107);
var G__28656 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params26107);
var G__28657 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params26107);
var G__28658 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params26107);
var G__28659 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params26107);
var G__28660 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params26107);
var G__28661 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params26107);
var G__28662 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params26107);
var G__28663 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params26107);
var G__28664 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params26107);
var G__28665 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params26107);
var fexpr__28646 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params26107);
return (fexpr__28646.cljs$core$IFn$_invoke$arity$19 ? fexpr__28646.cljs$core$IFn$_invoke$arity$19(G__28647,G__28648,G__28649,G__28650,G__28651,G__28652,G__28653,G__28654,G__28655,G__28656,G__28657,G__28658,G__28659,G__28660,G__28661,G__28662,G__28663,G__28664,G__28665) : fexpr__28646.call(null,G__28647,G__28648,G__28649,G__28650,G__28651,G__28652,G__28653,G__28654,G__28655,G__28656,G__28657,G__28658,G__28659,G__28660,G__28661,G__28662,G__28663,G__28664,G__28665));
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg17,self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg18,self__.arg18],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28636){
var self__ = this;
var G__28636__$1 = this;
return (new cljs.core.RecordIter((0),G__28636__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17,cljs.core.cst$kw$arg18], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__28692 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__28692(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28638,other28639){
var self__ = this;
var this28638__$1 = this;
return (!((other28639 == null))) && ((this28638__$1.constructor === other28639.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.fn,other28639.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg0,other28639.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg1,other28639.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg2,other28639.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg3,other28639.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg4,other28639.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg5,other28639.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg6,other28639.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg7,other28639.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg8,other28639.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg9,other28639.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg10,other28639.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg11,other28639.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg12,other28639.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg13,other28639.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg14,other28639.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg15,other28639.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg16,other28639.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg17,other28639.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.arg18,other28639.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28638__$1.__extmap,other28639.__extmap));
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [cljs.core.cst$kw$arg13,null,cljs.core.cst$kw$arg3,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$arg7,null,cljs.core.cst$kw$arg2,null,cljs.core.cst$kw$arg17,null,cljs.core.cst$kw$arg6,null,cljs.core.cst$kw$arg9,null,cljs.core.cst$kw$arg10,null,cljs.core.cst$kw$arg0,null,cljs.core.cst$kw$arg15,null,cljs.core.cst$kw$arg16,null,cljs.core.cst$kw$arg14,null,cljs.core.cst$kw$arg18,null,cljs.core.cst$kw$arg5,null,cljs.core.cst$kw$arg11,null,cljs.core.cst$kw$arg8,null,cljs.core.cst$kw$arg4,null,cljs.core.cst$kw$arg12,null,cljs.core.cst$kw$arg1,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__28636){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__28716 = cljs.core.keyword_identical_QMARK_;
var expr__28717 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__28719 = cljs.core.cst$kw$fn;
var G__28720 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28719,G__28720) : pred__28716.call(null,G__28719,G__28720));
})())){
return (new com.rpl.specter.impl.LateFn19(G__28636,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28722 = cljs.core.cst$kw$arg0;
var G__28723 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28722,G__28723) : pred__28716.call(null,G__28722,G__28723));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__28636,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28724 = cljs.core.cst$kw$arg1;
var G__28725 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28724,G__28725) : pred__28716.call(null,G__28724,G__28725));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__28636,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28731 = cljs.core.cst$kw$arg2;
var G__28732 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28731,G__28732) : pred__28716.call(null,G__28731,G__28732));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__28636,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28733 = cljs.core.cst$kw$arg3;
var G__28734 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28733,G__28734) : pred__28716.call(null,G__28733,G__28734));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__28636,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28736 = cljs.core.cst$kw$arg4;
var G__28737 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28736,G__28737) : pred__28716.call(null,G__28736,G__28737));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__28636,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28739 = cljs.core.cst$kw$arg5;
var G__28740 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28739,G__28740) : pred__28716.call(null,G__28739,G__28740));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__28636,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28743 = cljs.core.cst$kw$arg6;
var G__28744 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28743,G__28744) : pred__28716.call(null,G__28743,G__28744));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__28636,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28746 = cljs.core.cst$kw$arg7;
var G__28747 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28746,G__28747) : pred__28716.call(null,G__28746,G__28747));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__28636,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28749 = cljs.core.cst$kw$arg8;
var G__28750 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28749,G__28750) : pred__28716.call(null,G__28749,G__28750));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__28636,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28751 = cljs.core.cst$kw$arg9;
var G__28752 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28751,G__28752) : pred__28716.call(null,G__28751,G__28752));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__28636,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28755 = cljs.core.cst$kw$arg10;
var G__28756 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28755,G__28756) : pred__28716.call(null,G__28755,G__28756));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__28636,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28759 = cljs.core.cst$kw$arg11;
var G__28760 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28759,G__28760) : pred__28716.call(null,G__28759,G__28760));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__28636,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28761 = cljs.core.cst$kw$arg12;
var G__28762 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28761,G__28762) : pred__28716.call(null,G__28761,G__28762));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__28636,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28763 = cljs.core.cst$kw$arg13;
var G__28764 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28763,G__28764) : pred__28716.call(null,G__28763,G__28764));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__28636,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28766 = cljs.core.cst$kw$arg14;
var G__28767 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28766,G__28767) : pred__28716.call(null,G__28766,G__28767));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__28636,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28769 = cljs.core.cst$kw$arg15;
var G__28770 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28769,G__28770) : pred__28716.call(null,G__28769,G__28770));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__28636,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28771 = cljs.core.cst$kw$arg16;
var G__28772 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28771,G__28772) : pred__28716.call(null,G__28771,G__28772));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__28636,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28773 = cljs.core.cst$kw$arg17;
var G__28774 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28773,G__28774) : pred__28716.call(null,G__28773,G__28774));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__28636,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28775 = cljs.core.cst$kw$arg18;
var G__28776 = expr__28717;
return (pred__28716.cljs$core$IFn$_invoke$arity$2 ? pred__28716.cljs$core$IFn$_invoke$arity$2(G__28775,G__28776) : pred__28716.call(null,G__28775,G__28776));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__28636,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__28636),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg2,self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg3,self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg4,self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg5,self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg6,self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg7,self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg8,self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg9,self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg10,self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg11,self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg12,self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg13,self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg14,self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg15,self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg16,self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg17,self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg18,self__.arg18],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__28636){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__28636,self__.__extmap,self__.__hash));
});


com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$arg0,cljs.core.cst$sym$arg1,cljs.core.cst$sym$arg2,cljs.core.cst$sym$arg3,cljs.core.cst$sym$arg4,cljs.core.cst$sym$arg5,cljs.core.cst$sym$arg6,cljs.core.cst$sym$arg7,cljs.core.cst$sym$arg8,cljs.core.cst$sym$arg9,cljs.core.cst$sym$arg10,cljs.core.cst$sym$arg11,cljs.core.cst$sym$arg12,cljs.core.cst$sym$arg13,cljs.core.cst$sym$arg14,cljs.core.cst$sym$arg15,cljs.core.cst$sym$arg16,cljs.core.cst$sym$arg17,cljs.core.cst$sym$arg18], null);
});

com.rpl.specter.impl.LateFn19.cljs$lang$type = true;

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.impl/LateFn19");
});

com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.impl/LateFn19");
});

com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__28641){
return (new com.rpl.specter.impl.LateFn19(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg17.cljs$core$IFn$_invoke$arity$1(G__28641),cljs.core.cst$kw$arg18.cljs$core$IFn$_invoke$arity$1(G__28641),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28641,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17,cljs.core.cst$kw$arg18], 0))),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn28785,args28786){
var G__28788 = cljs.core.count(args28786);
switch (G__28788) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn28785);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn28785,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args28786,(17)));

break;
default:
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cannot have late function with more than 18 args"], 0));

}
});
com.rpl.specter.impl.static_fn_code = (function com$rpl$specter$impl$static_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(com.rpl.specter.impl.__GT_StaticParam(afn),args);
});
com.rpl.specter.impl.dynamic_fn_code = (function com$rpl$specter$impl$dynamic_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(afn,args);
});
com.rpl.specter.impl.dynamic_val_code = (function com$rpl$specter$impl$dynamic_val_code(code,possible_params){
var vec__29218 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29218,(0),null);
if((i == null)){
com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not find ",code," in possible params ",possible_params], 0));
} else {
}

return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_LocalParam(i),com.rpl.specter.impl.direct_nav_QMARK_(code));
});
com.rpl.specter.impl.static_val_code = (function com$rpl$specter$impl$static_val_code(o){
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_StaticParam(o),com.rpl.specter.impl.direct_nav_QMARK_(o));
});
com.rpl.specter.impl.dynamic__GT_code = (function com$rpl$specter$impl$dynamic__GT_code(o){
return com.rpl.specter.impl.walk_until(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.cst$kw$code,o);
});
com.rpl.specter.impl.resolve_arg_code = (function com$rpl$specter$impl$resolve_arg_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var op = (function (){var G__29222 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(o);
var G__29223 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__29222,G__29223) : com.rpl.specter.impl.resolve_arg_code.call(null,G__29222,G__29223));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (op){
return (function (p1__29221_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__29221_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null,p1__29221_SHARP_,possible_params));
});})(op))
,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(o));
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.dynamic_fn_code(com.rpl.specter.impl.original_obj(op),params),com.rpl.specter.impl.direct_nav_QMARK_(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(o)));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return com.rpl.specter.impl.dynamic_val_code(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(o),possible_params);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(o,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,o,possible_params));
} else {
if((com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,o))){
return com.rpl.specter.impl.static_val_code(o);
} else {
var G__29224 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__29225 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__29224,G__29225) : com.rpl.specter.impl.resolve_arg_code.call(null,G__29224,G__29225));
}

}
}
}
});
com.rpl.specter.impl.resolve_nav_code = (function com$rpl$specter$impl$resolve_nav_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicPath)){
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.sequential_QMARK_(path)){
var resolved = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path){
return (function (p1__29226_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__29226_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,p1__29226_SHARP_,possible_params));
});})(path))
,path));
if(cljs.core.empty_QMARK_(resolved)){
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.STAY_STAR_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(resolved))){
return cljs.core.first(resolved);
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.comp_navs,resolved);

}
}
} else {
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(path,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,path,possible_params));
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
var code = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(o);
var d = com.rpl.specter.impl.dynamic_val_code(code,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(code))){
return d;
} else {
if(cljs.core.truth_((function (){var or__10412__auto__ = cljs.core.set_QMARK_(code);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var and__10400__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_(code);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn_STAR_,cljs.core.first(code));
} else {
return and__10400__auto__;
}
}
})())){
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.pred_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));

}
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var res = com.rpl.specter.impl.resolve_arg_code(o,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(res))){
return res;
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
}
} else {
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.coerce_nav(o));

}
}
}
});
com.rpl.specter.impl.used_locals = (function com$rpl$specter$impl$used_locals(locals_set,form){
var used_locals_cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk(((function (used_locals_cell){
return (function (e){
if(cljs.core.contains_QMARK_(locals_set,e)){
return com.rpl.specter.impl.update_cell_BANG_(used_locals_cell,((function (used_locals_cell){
return (function (p1__29227_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29227_SHARP_,e);
});})(used_locals_cell))
);
} else {
return e;
}
});})(used_locals_cell))
,form);

return com.rpl.specter.impl.get_cell(used_locals_cell);
});
com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_ = false;
com.rpl.specter.impl.mk_fn_name_strs = (function com$rpl$specter$impl$mk_fn_name_strs(o){
return clojure.walk.postwalk((function (e){
if(cljs.core.fn_QMARK_(e)){
return cljs.core.re_find(/ .*/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)));
} else {
return e;
}
}),o);
});
com.rpl.specter.impl.mk_dynamic_path_maker = (function com$rpl$specter$impl$mk_dynamic_path_maker(resolved_code,ns_str,used_locals_list,possible_params){
if(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Possible params:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([possible_params], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nProduced dynamic object:"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.mk_fn_name_strs(resolved_code));

cljs.core.println();
} else {
}

return (function (dynamic_params){
return com.rpl.specter.impl.late_resolve(resolved_code,dynamic_params);
});
});
com.rpl.specter.impl.magic_precompilation = (function com$rpl$specter$impl$magic_precompilation(path,ns_str,used_locals_list,possible_params){
var magic_path = com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.magic_precompilation_STAR_(path));
if(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Inline caching debug information"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Input path:",path,"\n"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processed path:",magic_path,"\n"], 0));
} else {
}

if(cljs.core.truth_(com.rpl.specter.impl.rich_nav_QMARK_(magic_path))){
if(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Static result:",magic_path], 0));
} else {
}

return com.rpl.specter.impl.__GT_CachedPathInfo(false,magic_path);
} else {
var maker = com.rpl.specter.impl.mk_dynamic_path_maker(com.rpl.specter.impl.resolve_nav_code(com.rpl.specter.impl.__GT_DynamicPath(magic_path),possible_params),ns_str,used_locals_list,possible_params);
return com.rpl.specter.impl.__GT_CachedPathInfo(true,maker);
}
});
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.fast_constantly(val),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___29240 = arguments.length;
var i__11692__auto___29241 = (0);
while(true){
if((i__11692__auto___29241 < len__11691__auto___29240)){
args__11698__auto__.push((arguments[i__11692__auto___29241]));

var G__29242 = (i__11692__auto___29241 + (1));
i__11692__auto___29241 = G__29242;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__29232){
var map__29233 = p__29232;
var map__29233__$1 = ((((!((map__29233 == null)))?((((map__29233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29233):map__29233);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29233__$1,cljs.core.cst$kw$merge_DASH_fn,cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,((function (state,map__29233,map__29233__$1,merge_fn){
return (function() { 
var G__29243__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__29235 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__29238 = com.rpl.specter.impl.get_cell(state);
var G__29239 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__29238,G__29239) : merge_fn.call(null,G__29238,G__29239));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__29243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29244__i = 0, G__29244__a = new Array(arguments.length -  0);
while (G__29244__i < G__29244__a.length) {G__29244__a[G__29244__i] = arguments[G__29244__i + 0]; ++G__29244__i;}
  args = new cljs.core.IndexedSeq(G__29244__a,0,null);
} 
return G__29243__delegate.call(this,args);};
G__29243.cljs$lang$maxFixedArity = 0;
G__29243.cljs$lang$applyTo = (function (arglist__29245){
var args = cljs.core.seq(arglist__29245);
return G__29243__delegate(args);
});
G__29243.cljs$core$IFn$_invoke$arity$variadic = G__29243__delegate;
return G__29243;
})()
;})(state,map__29233,map__29233__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell(state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq29228){
var G__29229 = cljs.core.first(seq29228);
var seq29228__$1 = cljs.core.next(seq29228);
var G__29230 = cljs.core.first(seq29228__$1);
var seq29228__$2 = cljs.core.next(seq29228__$1);
var G__29231 = cljs.core.first(seq29228__$2);
var seq29228__$3 = cljs.core.next(seq29228__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29229,G__29230,G__29231,seq29228__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__11698__auto__ = [];
var len__11691__auto___29247 = arguments.length;
var i__11692__auto___29248 = (0);
while(true){
if((i__11692__auto___29248 < len__11691__auto___29247)){
args__11698__auto__.push((arguments[i__11692__auto___29248]));

var G__29249 = (i__11692__auto___29248 + (1));
i__11692__auto___29248 = G__29249;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav], 0));
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq29246){
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29246));
});

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

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
var len__11691__auto___18945 = arguments.length;
var i__11692__auto___18947 = (0);
while(true){
if((i__11692__auto___18947 < len__11691__auto___18945)){
args__11698__auto__.push((arguments[i__11692__auto___18947]));

var G__18953 = (i__11692__auto___18947 + (1));
i__11692__auto___18947 = G__18953;
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

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq18933){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18933));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__18959 = null;
var G__18959__0 = (function (){
return v;
});
var G__18959__1 = (function (a1){
return v;
});
var G__18959__2 = (function (a1,a2){
return v;
});
var G__18959__3 = (function (a1,a2,a3){
return v;
});
var G__18959__4 = (function (a1,a2,a3,a4){
return v;
});
var G__18959__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__18959__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__18959__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__18959__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__18959__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__18959__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__18959__11 = (function() { 
var G__18960__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__18960 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__18961__i = 0, G__18961__a = new Array(arguments.length -  10);
while (G__18961__i < G__18961__a.length) {G__18961__a[G__18961__i] = arguments[G__18961__i + 10]; ++G__18961__i;}
  r = new cljs.core.IndexedSeq(G__18961__a,0,null);
} 
return G__18960__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__18960.cljs$lang$maxFixedArity = 10;
G__18960.cljs$lang$applyTo = (function (arglist__18963){
var a1 = cljs.core.first(arglist__18963);
arglist__18963 = cljs.core.next(arglist__18963);
var a2 = cljs.core.first(arglist__18963);
arglist__18963 = cljs.core.next(arglist__18963);
var a3 = cljs.core.first(arglist__18963);
arglist__18963 = cljs.core.next(arglist__18963);
var a4 = cljs.core.first(arglist__18963);
arglist__18963 = cljs.core.next(arglist__18963);
var a5 = cljs.core.first(arglist__18963);
arglist__18963 = cljs.core.next(arglist__18963);
var a6 = cljs.core.first(arglist__18963);
arglist__18963 = cljs.core.next(arglist__18963);
var a7 = cljs.core.first(arglist__18963);
arglist__18963 = cljs.core.next(arglist__18963);
var a8 = cljs.core.first(arglist__18963);
arglist__18963 = cljs.core.next(arglist__18963);
var a9 = cljs.core.first(arglist__18963);
arglist__18963 = cljs.core.next(arglist__18963);
var a10 = cljs.core.first(arglist__18963);
var r = cljs.core.rest(arglist__18963);
return G__18960__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__18960.cljs$core$IFn$_invoke$arity$variadic = G__18960__delegate;
return G__18960;
})()
;
G__18959 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__18959__0.call(this);
case 1:
return G__18959__1.call(this,a1);
case 2:
return G__18959__2.call(this,a1,a2);
case 3:
return G__18959__3.call(this,a1,a2,a3);
case 4:
return G__18959__4.call(this,a1,a2,a3,a4);
case 5:
return G__18959__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__18959__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__18959__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__18959__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__18959__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__18959__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__18980 = null;
if (arguments.length > 10) {
var G__18981__i = 0, G__18981__a = new Array(arguments.length -  10);
while (G__18981__i < G__18981__a.length) {G__18981__a[G__18981__i] = arguments[G__18981__i + 10]; ++G__18981__i;}
G__18980 = new cljs.core.IndexedSeq(G__18981__a,0,null);
}
return G__18959__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__18980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__18959.cljs$lang$maxFixedArity = 10;
G__18959.cljs$lang$applyTo = G__18959__11.cljs$lang$applyTo;
G__18959.cljs$core$IFn$_invoke$arity$0 = G__18959__0;
G__18959.cljs$core$IFn$_invoke$arity$1 = G__18959__1;
G__18959.cljs$core$IFn$_invoke$arity$2 = G__18959__2;
G__18959.cljs$core$IFn$_invoke$arity$3 = G__18959__3;
G__18959.cljs$core$IFn$_invoke$arity$4 = G__18959__4;
G__18959.cljs$core$IFn$_invoke$arity$5 = G__18959__5;
G__18959.cljs$core$IFn$_invoke$arity$6 = G__18959__6;
G__18959.cljs$core$IFn$_invoke$arity$7 = G__18959__7;
G__18959.cljs$core$IFn$_invoke$arity$8 = G__18959__8;
G__18959.cljs$core$IFn$_invoke$arity$9 = G__18959__9;
G__18959.cljs$core$IFn$_invoke$arity$10 = G__18959__10;
G__18959.cljs$core$IFn$_invoke$arity$variadic = G__18959__11.cljs$core$IFn$_invoke$arity$variadic;
return G__18959;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__11698__auto__ = [];
var len__11691__auto___18991 = arguments.length;
var i__11692__auto___18992 = (0);
while(true){
if((i__11692__auto___18992 < len__11691__auto___18991)){
args__11698__auto__.push((arguments[i__11692__auto___18992]));

var G__18993 = (i__11692__auto___18992 + (1));
i__11692__auto___18992 = G__18993;
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

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq18983){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18983));
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

var G__19006 = (_ + (1));
_ = G__19006;
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

var G__19029_19046 = com.rpl.specter.impl.coerce_path;
var G__19030_19047 = "null";
var G__19031_19048 = ((function (G__19029_19046,G__19030_19047){
return (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
});})(G__19029_19046,G__19030_19047))
;
goog.object.set(G__19029_19046,G__19030_19047,G__19031_19048);

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

var G__19041_19060 = com.rpl.specter.impl.coerce_path;
var G__19042_19061 = "_";
var G__19043_19062 = ((function (G__19041_19060,G__19042_19061){
return (function (this$){
return com.rpl.specter.impl.coerce_object(this$);
});})(G__19041_19060,G__19042_19061))
;
goog.object.set(G__19041_19060,G__19042_19061,G__19043_19062);
com.rpl.specter.impl.STAY_STAR_ = (function (){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl19065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl19065 = (function (meta19066){
this.meta19066 = meta19066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl19065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19067,meta19066__$1){
var self__ = this;
var _19067__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl19065(meta19066__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl19065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19067){
var self__ = this;
var _19067__$1 = this;
return self__.meta19066;
});

com.rpl.specter.impl.t_com$rpl$specter$impl19065.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl19065.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
});

com.rpl.specter.impl.t_com$rpl$specter$impl19065.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
});

com.rpl.specter.impl.t_com$rpl$specter$impl19065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta19066], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl19065.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl19065.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl19065";

com.rpl.specter.impl.t_com$rpl$specter$impl19065.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl19065");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl19065 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl19065(meta19066){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl19065(meta19066));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl19065(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl19124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl19124 = (function (nav1,nav2,meta19125){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta19125 = meta19125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl19124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19126,meta19125__$1){
var self__ = this;
var _19126__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl19124(self__.nav1,self__.nav2,meta19125__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl19124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19126){
var self__ = this;
var _19126__$1 = this;
return self__.meta19125;
});

com.rpl.specter.impl.t_com$rpl$specter$impl19124.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl19124.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl19124.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,((function (this$__$1){
return (function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
});})(this$__$1))
);
});

com.rpl.specter.impl.t_com$rpl$specter$impl19124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nav1,cljs.core.cst$sym$nav2,cljs.core.cst$sym$meta19125], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl19124.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl19124.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl19124";

com.rpl.specter.impl.t_com$rpl$specter$impl19124.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl19124");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl19124 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl19124(nav1__$1,nav2__$1,meta19125){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl19124(nav1__$1,nav2__$1,meta19125));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl19124(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(com.rpl.specter.impl.PathComposer,"null",true);

var G__19186_19200 = com.rpl.specter.impl.do_comp_paths;
var G__19187_19201 = "null";
var G__19188_19202 = ((function (G__19186_19200,G__19187_19201){
return (function (o){
return com.rpl.specter.impl.coerce_path(o);
});})(G__19186_19200,G__19187_19201))
;
goog.object.set(G__19186_19200,G__19187_19201,G__19188_19202);

goog.object.set(com.rpl.specter.impl.PathComposer,"_",true);

var G__19192_19228 = com.rpl.specter.impl.do_comp_paths;
var G__19193_19229 = "_";
var G__19194_19230 = ((function (G__19192_19228,G__19193_19229){
return (function (o){
return com.rpl.specter.impl.coerce_path(o);
});})(G__19192_19228,G__19193_19229))
;
goog.object.set(G__19192_19228,G__19193_19229,G__19194_19230);

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
var G__19303 = arguments.length;
switch (G__19303) {
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
var ret = (function (){var G__19352 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__19352) : afn.call(null,G__19352));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null,structure__$1));
} else {
var G__19372 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__19372) : result_fn.call(null,G__19372));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});
com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl19393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl19393 = (function (apath,structure,meta19394){
this.apath = apath;
this.structure = structure;
this.meta19394 = meta19394;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl19393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19395,meta19394__$1){
var self__ = this;
var _19395__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl19393(self__.apath,self__.structure,meta19394__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl19393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19395){
var self__ = this;
var _19395__$1 = this;
return self__.meta19394;
});

com.rpl.specter.impl.t_com$rpl$specter$impl19393.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
});

com.rpl.specter.impl.t_com$rpl$specter$impl19393.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
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

com.rpl.specter.impl.t_com$rpl$specter$impl19393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$apath,cljs.core.cst$sym$structure,cljs.core.cst$sym$meta19394], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl19393.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl19393.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl19393";

com.rpl.specter.impl.t_com$rpl$specter$impl19393.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl19393");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl19393 = (function com$rpl$specter$impl$do_compiled_traverse_STAR__$___GT_t_com$rpl$specter$impl19393(apath__$1,structure__$1,meta19394){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl19393(apath__$1,structure__$1,meta19394));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl19393(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl19426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl19426 = (function (apath,structure,traverser,meta19427){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta19427 = meta19427;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl19426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (traverser){
return (function (_19428,meta19427__$1){
var self__ = this;
var _19428__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl19426(self__.apath,self__.structure,self__.traverser,meta19427__$1));
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl19426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (traverser){
return (function (_19428){
var self__ = this;
var _19428__$1 = this;
return self__.meta19427;
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl19426.prototype.cljs$core$IReduce$_reduce$arity$2 = ((function (traverser){
return (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl19426.prototype.cljs$core$IReduce$_reduce$arity$3 = ((function (traverser){
return (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.traverser,afn,start);
return cljs.core.unreduced(res);
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl19426.getBasis = ((function (traverser){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$apath,cljs.core.cst$sym$structure,cljs.core.cst$sym$traverser,cljs.core.cst$sym$meta19427], null);
});})(traverser))
;

com.rpl.specter.impl.t_com$rpl$specter$impl19426.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl19426.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl19426";

com.rpl.specter.impl.t_com$rpl$specter$impl19426.cljs$lang$ctorPrWriter = ((function (traverser){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl19426");
});})(traverser))
;

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl19426 = ((function (traverser){
return (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl19426(apath__$1,structure__$1,traverser__$1,meta19427){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl19426(apath__$1,structure__$1,traverser__$1,meta19427));
});})(traverser))
;

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl19426(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__19490 = null;
var G__19490__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__19490__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__19490__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null,r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__19490 = function(result,input){
switch(arguments.length){
case 0:
return G__19490__0.call(this);
case 1:
return G__19490__1.call(this,result);
case 2:
return G__19490__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19490.cljs$core$IFn$_invoke$arity$0 = G__19490__0;
G__19490.cljs$core$IFn$_invoke$arity$1 = G__19490__1;
G__19490.cljs$core$IFn$_invoke$arity$2 = G__19490__2;
return G__19490;
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
var G__19580 = arguments.length;
switch (G__19580) {
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

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k19637,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__19643 = k19637;
var G__19643__$1 = (((G__19643 instanceof cljs.core.Keyword))?G__19643.fqn:null);
switch (G__19643__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19637,else__11103__auto__);

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

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19636){
var self__ = this;
var G__19636__$1 = this;
return (new cljs.core.RecordIter((0),G__19636__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$sym], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__19658 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__19658(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19638,other19639){
var self__ = this;
var this19638__$1 = this;
return (!((other19639 == null))) && ((this19638__$1.constructor === other19639.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19638__$1.val,other19639.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19638__$1.sym,other19639.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19638__$1.__extmap,other19639.__extmap));
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

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__19636){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__19663 = cljs.core.keyword_identical_QMARK_;
var expr__19664 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__19666 = cljs.core.cst$kw$val;
var G__19667 = expr__19664;
return (pred__19663.cljs$core$IFn$_invoke$arity$2 ? pred__19663.cljs$core$IFn$_invoke$arity$2(G__19666,G__19667) : pred__19663.call(null,G__19666,G__19667));
})())){
return (new com.rpl.specter.impl.LocalSym(G__19636,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19668 = cljs.core.cst$kw$sym;
var G__19669 = expr__19664;
return (pred__19663.cljs$core$IFn$_invoke$arity$2 ? pred__19663.cljs$core$IFn$_invoke$arity$2(G__19668,G__19669) : pred__19663.call(null,G__19668,G__19669));
})())){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__19636,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__19636),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__19636){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__19636,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__19640){
return (new com.rpl.specter.impl.LocalSym(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__19640),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__19640),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19640,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sym], 0))),null));
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

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k19751,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__19760 = k19751;
var G__19760__$1 = (((G__19760 instanceof cljs.core.Keyword))?G__19760.fqn:null);
switch (G__19760__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19751,else__11103__auto__);

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

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19750){
var self__ = this;
var G__19750__$1 = this;
return (new cljs.core.RecordIter((0),G__19750__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$var,cljs.core.cst$kw$sym], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__19776 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__19776(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19752,other19753){
var self__ = this;
var this19752__$1 = this;
return (!((other19753 == null))) && ((this19752__$1.constructor === other19753.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19752__$1.val,other19753.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19752__$1.var,other19753.var)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19752__$1.sym,other19753.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19752__$1.__extmap,other19753.__extmap));
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

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__19750){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__19798 = cljs.core.keyword_identical_QMARK_;
var expr__19799 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__19801 = cljs.core.cst$kw$val;
var G__19802 = expr__19799;
return (pred__19798.cljs$core$IFn$_invoke$arity$2 ? pred__19798.cljs$core$IFn$_invoke$arity$2(G__19801,G__19802) : pred__19798.call(null,G__19801,G__19802));
})())){
return (new com.rpl.specter.impl.VarUse(G__19750,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19804 = cljs.core.cst$kw$var;
var G__19805 = expr__19799;
return (pred__19798.cljs$core$IFn$_invoke$arity$2 ? pred__19798.cljs$core$IFn$_invoke$arity$2(G__19804,G__19805) : pred__19798.call(null,G__19804,G__19805));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,G__19750,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19808 = cljs.core.cst$kw$sym;
var G__19809 = expr__19799;
return (pred__19798.cljs$core$IFn$_invoke$arity$2 ? pred__19798.cljs$core$IFn$_invoke$arity$2(G__19808,G__19809) : pred__19798.call(null,G__19808,G__19809));
})())){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__19750,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__19750),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$var,self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sym,self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__19750){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__19750,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__19757){
return (new com.rpl.specter.impl.VarUse(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__19757),cljs.core.cst$kw$var.cljs$core$IFn$_invoke$arity$1(G__19757),cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(G__19757),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19757,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$var,cljs.core.cst$kw$sym], 0))),null));
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

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k19873,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__19887 = k19873;
var G__19887__$1 = (((G__19887 instanceof cljs.core.Keyword))?G__19887.fqn:null);
switch (G__19887__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19873,else__11103__auto__);

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

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19872){
var self__ = this;
var G__19872__$1 = this;
return (new cljs.core.RecordIter((0),G__19872__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__19898 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__19898(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19874,other19875){
var self__ = this;
var this19874__$1 = this;
return (!((other19875 == null))) && ((this19874__$1.constructor === other19875.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19874__$1.val,other19875.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19874__$1.code,other19875.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19874__$1.__extmap,other19875.__extmap));
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

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__19872){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__19909 = cljs.core.keyword_identical_QMARK_;
var expr__19910 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__19912 = cljs.core.cst$kw$val;
var G__19913 = expr__19910;
return (pred__19909.cljs$core$IFn$_invoke$arity$2 ? pred__19909.cljs$core$IFn$_invoke$arity$2(G__19912,G__19913) : pred__19909.call(null,G__19912,G__19913));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(G__19872,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19914 = cljs.core.cst$kw$code;
var G__19915 = expr__19910;
return (pred__19909.cljs$core$IFn$_invoke$arity$2 ? pred__19909.cljs$core$IFn$_invoke$arity$2(G__19914,G__19915) : pred__19909.call(null,G__19914,G__19915));
})())){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__19872,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__19872),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__19872){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__19872,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__19880){
return (new com.rpl.specter.impl.SpecialFormUse(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__19880),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__19880),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19880,cljs.core.cst$kw$val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code], 0))),null));
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

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k19957,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__19961 = k19957;
var G__19961__$1 = (((G__19961 instanceof cljs.core.Keyword))?G__19961.fqn:null);
switch (G__19961__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19957,else__11103__auto__);

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

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19956){
var self__ = this;
var G__19956__$1 = this;
return (new cljs.core.RecordIter((0),G__19956__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$params,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__19999 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__19999(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19958,other19959){
var self__ = this;
var this19958__$1 = this;
return (!((other19959 == null))) && ((this19958__$1.constructor === other19959.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19958__$1.op,other19959.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19958__$1.params,other19959.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19958__$1.code,other19959.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19958__$1.__extmap,other19959.__extmap));
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

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__19956){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__20000 = cljs.core.keyword_identical_QMARK_;
var expr__20001 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__20003 = cljs.core.cst$kw$op;
var G__20004 = expr__20001;
return (pred__20000.cljs$core$IFn$_invoke$arity$2 ? pred__20000.cljs$core$IFn$_invoke$arity$2(G__20003,G__20004) : pred__20000.call(null,G__20003,G__20004));
})())){
return (new com.rpl.specter.impl.FnInvocation(G__19956,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20005 = cljs.core.cst$kw$params;
var G__20006 = expr__20001;
return (pred__20000.cljs$core$IFn$_invoke$arity$2 ? pred__20000.cljs$core$IFn$_invoke$arity$2(G__20005,G__20006) : pred__20000.call(null,G__20005,G__20006));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__19956,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20008 = cljs.core.cst$kw$code;
var G__20009 = expr__20001;
return (pred__20000.cljs$core$IFn$_invoke$arity$2 ? pred__20000.cljs$core$IFn$_invoke$arity$2(G__20008,G__20009) : pred__20000.call(null,G__20008,G__20009));
})())){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__19956,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__19956),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__19956){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__19956,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__19960){
return (new com.rpl.specter.impl.FnInvocation(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(G__19960),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__19960),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__19960),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19960,cljs.core.cst$kw$op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,cljs.core.cst$kw$code], 0))),null));
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

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k20078,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__20085 = k20078;
var G__20085__$1 = (((G__20085 instanceof cljs.core.Keyword))?G__20085.fqn:null);
switch (G__20085__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20078,else__11103__auto__);

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

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20077){
var self__ = this;
var G__20077__$1 = this;
return (new cljs.core.RecordIter((0),G__20077__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__20091 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__20091(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20079,other20080){
var self__ = this;
var this20079__$1 = this;
return (!((other20080 == null))) && ((this20079__$1.constructor === other20080.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20079__$1.code,other20080.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20079__$1.__extmap,other20080.__extmap));
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

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__20077){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__20102 = cljs.core.keyword_identical_QMARK_;
var expr__20103 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__20105 = cljs.core.cst$kw$code;
var G__20106 = expr__20103;
return (pred__20102.cljs$core$IFn$_invoke$arity$2 ? pred__20102.cljs$core$IFn$_invoke$arity$2(G__20105,G__20106) : pred__20102.call(null,G__20105,G__20106));
})())){
return (new com.rpl.specter.impl.DynamicVal(G__20077,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__20077),null));
}
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__20077){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__20077,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__20082){
return (new com.rpl.specter.impl.DynamicVal(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__20082),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20082,cljs.core.cst$kw$code)),null));
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

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k20160,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__20166 = k20160;
var G__20166__$1 = (((G__20166 instanceof cljs.core.Keyword))?G__20166.fqn:null);
switch (G__20166__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20160,else__11103__auto__);

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

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20159){
var self__ = this;
var G__20159__$1 = this;
return (new cljs.core.RecordIter((0),G__20159__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__20169 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__20169(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20161,other20162){
var self__ = this;
var this20161__$1 = this;
return (!((other20162 == null))) && ((this20161__$1.constructor === other20162.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20161__$1.path,other20162.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20161__$1.__extmap,other20162.__extmap));
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

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__20159){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__20175 = cljs.core.keyword_identical_QMARK_;
var expr__20176 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__20179 = cljs.core.cst$kw$path;
var G__20180 = expr__20176;
return (pred__20175.cljs$core$IFn$_invoke$arity$2 ? pred__20175.cljs$core$IFn$_invoke$arity$2(G__20179,G__20180) : pred__20175.call(null,G__20179,G__20180));
})())){
return (new com.rpl.specter.impl.DynamicPath(G__20159,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__20159),null));
}
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__20159){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__20159,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__20163){
return (new com.rpl.specter.impl.DynamicPath(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__20163),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20163,cljs.core.cst$kw$path)),null));
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

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k20224,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__20232 = k20224;
var G__20232__$1 = (((G__20232 instanceof cljs.core.Keyword))?G__20232.fqn:null);
switch (G__20232__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20224,else__11103__auto__);

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

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20223){
var self__ = this;
var G__20223__$1 = this;
return (new cljs.core.RecordIter((0),G__20223__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$op,cljs.core.cst$kw$params,cljs.core.cst$kw$code], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__20245 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__20245(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20225,other20226){
var self__ = this;
var this20225__$1 = this;
return (!((other20226 == null))) && ((this20225__$1.constructor === other20226.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20225__$1.op,other20226.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20225__$1.params,other20226.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20225__$1.code,other20226.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20225__$1.__extmap,other20226.__extmap));
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

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__20223){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__20250 = cljs.core.keyword_identical_QMARK_;
var expr__20251 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__20258 = cljs.core.cst$kw$op;
var G__20259 = expr__20251;
return (pred__20250.cljs$core$IFn$_invoke$arity$2 ? pred__20250.cljs$core$IFn$_invoke$arity$2(G__20258,G__20259) : pred__20250.call(null,G__20258,G__20259));
})())){
return (new com.rpl.specter.impl.DynamicFunction(G__20223,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20260 = cljs.core.cst$kw$params;
var G__20261 = expr__20251;
return (pred__20250.cljs$core$IFn$_invoke$arity$2 ? pred__20250.cljs$core$IFn$_invoke$arity$2(G__20260,G__20261) : pred__20250.call(null,G__20260,G__20261));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__20223,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20262 = cljs.core.cst$kw$code;
var G__20263 = expr__20251;
return (pred__20250.cljs$core$IFn$_invoke$arity$2 ? pred__20250.cljs$core$IFn$_invoke$arity$2(G__20262,G__20263) : pred__20250.call(null,G__20262,G__20263));
})())){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__20223,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__20223),null));
}
}
}
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$op,self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$code,self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__20223){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__20223,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__20227){
return (new com.rpl.specter.impl.DynamicFunction(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(G__20227),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__20227),cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(G__20227),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20227,cljs.core.cst$kw$op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,cljs.core.cst$kw$code], 0))),null));
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

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k20326,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__20332 = k20326;
var G__20332__$1 = (((G__20332 instanceof cljs.core.Keyword))?G__20332.fqn:null);
switch (G__20332__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20326,else__11103__auto__);

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

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20325){
var self__ = this;
var G__20325__$1 = this;
return (new cljs.core.RecordIter((0),G__20325__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dynamic_QMARK_,cljs.core.cst$kw$precompiled], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__20339 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__20339(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20327,other20328){
var self__ = this;
var this20327__$1 = this;
return (!((other20328 == null))) && ((this20327__$1.constructor === other20328.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20327__$1.dynamic_QMARK_,other20328.dynamic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20327__$1.precompiled,other20328.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20327__$1.__extmap,other20328.__extmap));
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

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__20325){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__20343 = cljs.core.keyword_identical_QMARK_;
var expr__20344 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__20346 = cljs.core.cst$kw$dynamic_QMARK_;
var G__20347 = expr__20344;
return (pred__20343.cljs$core$IFn$_invoke$arity$2 ? pred__20343.cljs$core$IFn$_invoke$arity$2(G__20346,G__20347) : pred__20343.call(null,G__20346,G__20347));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(G__20325,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20348 = cljs.core.cst$kw$precompiled;
var G__20349 = expr__20344;
return (pred__20343.cljs$core$IFn$_invoke$arity$2 ? pred__20343.cljs$core$IFn$_invoke$arity$2(G__20348,G__20349) : pred__20343.call(null,G__20348,G__20349));
})())){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__20325,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__20325),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dynamic_QMARK_,self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$precompiled,self__.precompiled],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__20325){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__20325,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__20329){
return (new com.rpl.specter.impl.CachedPathInfo(cljs.core.cst$kw$dynamic_QMARK_.cljs$core$IFn$_invoke$arity$1(G__20329),cljs.core.cst$kw$precompiled.cljs$core$IFn$_invoke$arity$1(G__20329),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20329,cljs.core.cst$kw$dynamic_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$precompiled], 0))),null));
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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl20399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl20399 = (function (afn,meta20400){
this.afn = afn;
this.meta20400 = meta20400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl20399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20401,meta20400__$1){
var self__ = this;
var _20401__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl20399(self__.afn,meta20400__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl20399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20401){
var self__ = this;
var _20401__$1 = this;
return self__.meta20400;
});

com.rpl.specter.impl.t_com$rpl$specter$impl20399.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl20399.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl20399.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl20399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta20400], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl20399.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl20399.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl20399";

com.rpl.specter.impl.t_com$rpl$specter$impl20399.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl20399");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl20399 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl20399(afn__$1,meta20400){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl20399(afn__$1,meta20400));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl20399(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl20429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl20429 = (function (afn,meta20430){
this.afn = afn;
this.meta20430 = meta20430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl20429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20431,meta20430__$1){
var self__ = this;
var _20431__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl20429(self__.afn,meta20430__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl20429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20431){
var self__ = this;
var _20431__$1 = this;
return self__.meta20430;
});

com.rpl.specter.impl.t_com$rpl$specter$impl20429.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl20429.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl20429.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});

com.rpl.specter.impl.t_com$rpl$specter$impl20429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta20430], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl20429.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl20429.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl20429";

com.rpl.specter.impl.t_com$rpl$specter$impl20429.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl20429");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl20429 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl20429(afn__$1,meta20430){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl20429(afn__$1,meta20430));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl20429(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl20457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl20457 = (function (cell,meta20458){
this.cell = cell;
this.meta20458 = meta20458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.rpl.specter.impl.t_com$rpl$specter$impl20457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20459,meta20458__$1){
var self__ = this;
var _20459__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl20457(self__.cell,meta20458__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl20457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20459){
var self__ = this;
var _20459__$1 = this;
return self__.meta20458;
});

com.rpl.specter.impl.t_com$rpl$specter$impl20457.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.t_com$rpl$specter$impl20457.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl20457.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
});

com.rpl.specter.impl.t_com$rpl$specter$impl20457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cell,cljs.core.cst$sym$meta20458], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl20457.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl20457.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl20457";

com.rpl.specter.impl.t_com$rpl$specter$impl20457.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl20457");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl20457 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl20457(cell__$1,meta20458){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl20457(cell__$1,meta20458));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl20457(cell,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20707 = arguments.length;
switch (G__20707) {
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
var len__11691__auto___20757 = arguments.length;
var i__11692__auto___20758 = (0);
while(true){
if((i__11692__auto___20758 < len__11691__auto___20757)){
args_arr__11714__auto__.push((arguments[i__11692__auto___20758]));

var G__20759 = (i__11692__auto___20758 + (1));
i__11692__auto___20758 = G__20759;
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

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__18753__auto__){
return nav1__18753__auto__;
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__18753__auto__,nav2__18754__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__18753__auto__,nav2__18754__auto__);
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__20499,G__20500,G__20501){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20499,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20500,G__20501));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__20502,G__20503,G__20504,G__20505){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20502,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__20503,G__20504,G__20505));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__20506,G__20507,G__20508,G__20509,G__20510){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20506,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__20507,G__20508,G__20509,G__20510));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__20511,G__20512,G__20513,G__20514,G__20515,G__20516){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20511,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__20512,G__20513,G__20514,G__20515,G__20516));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__20517,G__20518,G__20519,G__20520,G__20521,G__20522,G__20523){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20517,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__20518,G__20519,G__20520,G__20521,G__20522,G__20523));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__20524,G__20525,G__20526,G__20527,G__20528,G__20529,G__20530,G__20531){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20524,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__20525,G__20526,G__20527,G__20528,G__20529,G__20530,G__20531));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__20532,G__20533,G__20534,G__20535,G__20536,G__20537,G__20538,G__20539,G__20540){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20532,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__20533,G__20534,G__20535,G__20536,G__20537,G__20538,G__20539,G__20540));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__20541,G__20542,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20541,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__20542,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__20551,G__20552,G__20553,G__20554,G__20555,G__20556,G__20557,G__20558,G__20559,G__20560,G__20561){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20551,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__20552,G__20553,G__20554,G__20555,G__20556,G__20557,G__20558,G__20559,G__20560,G__20561));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__20562,G__20563,G__20564,G__20565,G__20566,G__20567,G__20568,G__20569,G__20570,G__20571,G__20572,G__20573){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20562,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__20563,G__20564,G__20565,G__20566,G__20567,G__20568,G__20569,G__20570,G__20571,G__20572,G__20573));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__20574,G__20575,G__20576,G__20577,G__20578,G__20579,G__20580,G__20581,G__20582,G__20583,G__20584,G__20585,G__20586){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20574,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__20575,G__20576,G__20577,G__20578,G__20579,G__20580,G__20581,G__20582,G__20583,G__20584,G__20585,G__20586));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__20587,G__20588,G__20589,G__20590,G__20591,G__20592,G__20593,G__20594,G__20595,G__20596,G__20597,G__20598,G__20599,G__20600){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20587,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__20588,G__20589,G__20590,G__20591,G__20592,G__20593,G__20594,G__20595,G__20596,G__20597,G__20598,G__20599,G__20600));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__20601,G__20602,G__20603,G__20604,G__20605,G__20606,G__20607,G__20608,G__20609,G__20610,G__20611,G__20612,G__20613,G__20614,G__20615){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20601,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__20602,G__20603,G__20604,G__20605,G__20606,G__20607,G__20608,G__20609,G__20610,G__20611,G__20612,G__20613,G__20614,G__20615));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__20616,G__20617,G__20618,G__20619,G__20620,G__20621,G__20622,G__20623,G__20624,G__20625,G__20626,G__20627,G__20628,G__20629,G__20630,G__20631){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20616,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__20617,G__20618,G__20619,G__20620,G__20621,G__20622,G__20623,G__20624,G__20625,G__20626,G__20627,G__20628,G__20629,G__20630,G__20631));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__20632,G__20633,G__20634,G__20635,G__20636,G__20637,G__20638,G__20639,G__20640,G__20641,G__20642,G__20643,G__20644,G__20645,G__20646,G__20647,G__20648){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20632,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__20633,G__20634,G__20635,G__20636,G__20637,G__20638,G__20639,G__20640,G__20641,G__20642,G__20643,G__20644,G__20645,G__20646,G__20647,G__20648));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__20649,G__20650,G__20651,G__20652,G__20653,G__20654,G__20655,G__20656,G__20657,G__20658,G__20659,G__20660,G__20661,G__20662,G__20663,G__20664,G__20665,G__20666){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20649,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__20650,G__20651,G__20652,G__20653,G__20654,G__20655,G__20656,G__20657,G__20658,G__20659,G__20660,G__20661,G__20662,G__20663,G__20664,G__20665,G__20666));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__20667,G__20668,G__20669,G__20670,G__20671,G__20672,G__20673,G__20674,G__20675,G__20676,G__20677,G__20678,G__20679,G__20680,G__20681,G__20682,G__20683,G__20684,G__20685){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__20667,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__20668,G__20669,G__20670,G__20671,G__20672,G__20673,G__20674,G__20675,G__20676,G__20677,G__20678,G__20679,G__20680,G__20681,G__20682,G__20683,G__20684,G__20685));
});

com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__20480,G__20481,G__20482,G__20483,G__20484,G__20485,G__20486,G__20487,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496,G__20497,G__20498,rest__18755__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__20480,G__20481,G__20482,G__20483,G__20484,G__20485,G__20486,G__20487,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496,G__20497,G__20498),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__18755__auto__));
});

com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq20687){
var G__20688 = cljs.core.first(seq20687);
var seq20687__$1 = cljs.core.next(seq20687);
var G__20689 = cljs.core.first(seq20687__$1);
var seq20687__$2 = cljs.core.next(seq20687__$1);
var G__20690 = cljs.core.first(seq20687__$2);
var seq20687__$3 = cljs.core.next(seq20687__$2);
var G__20691 = cljs.core.first(seq20687__$3);
var seq20687__$4 = cljs.core.next(seq20687__$3);
var G__20692 = cljs.core.first(seq20687__$4);
var seq20687__$5 = cljs.core.next(seq20687__$4);
var G__20693 = cljs.core.first(seq20687__$5);
var seq20687__$6 = cljs.core.next(seq20687__$5);
var G__20694 = cljs.core.first(seq20687__$6);
var seq20687__$7 = cljs.core.next(seq20687__$6);
var G__20695 = cljs.core.first(seq20687__$7);
var seq20687__$8 = cljs.core.next(seq20687__$7);
var G__20696 = cljs.core.first(seq20687__$8);
var seq20687__$9 = cljs.core.next(seq20687__$8);
var G__20697 = cljs.core.first(seq20687__$9);
var seq20687__$10 = cljs.core.next(seq20687__$9);
var G__20698 = cljs.core.first(seq20687__$10);
var seq20687__$11 = cljs.core.next(seq20687__$10);
var G__20699 = cljs.core.first(seq20687__$11);
var seq20687__$12 = cljs.core.next(seq20687__$11);
var G__20700 = cljs.core.first(seq20687__$12);
var seq20687__$13 = cljs.core.next(seq20687__$12);
var G__20701 = cljs.core.first(seq20687__$13);
var seq20687__$14 = cljs.core.next(seq20687__$13);
var G__20702 = cljs.core.first(seq20687__$14);
var seq20687__$15 = cljs.core.next(seq20687__$14);
var G__20703 = cljs.core.first(seq20687__$15);
var seq20687__$16 = cljs.core.next(seq20687__$15);
var G__20704 = cljs.core.first(seq20687__$16);
var seq20687__$17 = cljs.core.next(seq20687__$16);
var G__20705 = cljs.core.first(seq20687__$17);
var seq20687__$18 = cljs.core.next(seq20687__$17);
var G__20706 = cljs.core.first(seq20687__$18);
var seq20687__$19 = cljs.core.next(seq20687__$18);
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic(G__20688,G__20689,G__20690,G__20691,G__20692,G__20693,G__20694,G__20695,G__20696,G__20697,G__20698,G__20699,G__20700,G__20701,G__20702,G__20703,G__20704,G__20705,G__20706,seq20687__$19);
});

com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19);

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__20816 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__20816) : next_fn.call(null,G__20816));
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,cljs.core.count(structure)))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__20818 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__20818) : next_fn.call(null,G__20818));
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
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20827,i){
var vec__20828 = p__20827;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20828,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20828,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20828,(2),null);
var curr = vec__20828;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__20837){
var vec__20838 = p__20837;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20838,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20838,(1),null);
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
var G__20873 = orig;
o = G__20873;
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
var G__20876__delegate = function (args){
if(cljs.core.truth_(com.rpl.specter.impl.all_static_QMARK_(args))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__20876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20879__i = 0, G__20879__a = new Array(arguments.length -  0);
while (G__20879__i < G__20879__a.length) {G__20879__a[G__20879__i] = arguments[G__20879__i + 0]; ++G__20879__i;}
  args = new cljs.core.IndexedSeq(G__20879__a,0,null);
} 
return G__20876__delegate.call(this,args);};
G__20876.cljs$lang$maxFixedArity = 0;
G__20876.cljs$lang$applyTo = (function (arglist__20880){
var args = cljs.core.seq(arglist__20880);
return G__20876__delegate(args);
});
G__20876.cljs$core$IFn$_invoke$arity$variadic = G__20876__delegate;
return G__20876;
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
var op = (function (){var G__20885 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(o);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__20885) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__20885));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(o)));
if(cljs.core.truth_((function (){var or__10412__auto__ = cljs.core.cst$kw$dynamicnav.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__20886 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__20886) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__20886));
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
var G__20899 = arguments.length;
switch (G__20899) {
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
return com.rpl.specter.impl.preserve_map((function (p1__20896_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__20896_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(o),false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20897_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__20897_SHARP_,false);
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

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k20917,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__20924 = k20917;
var G__20924__$1 = (((G__20924 instanceof cljs.core.Keyword))?G__20924.fqn:null);
switch (G__20924__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20917,else__11103__auto__);

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

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20916){
var self__ = this;
var G__20916__$1 = this;
return (new cljs.core.RecordIter((0),G__20916__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idx], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__20932 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__20932(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20918,other20919){
var self__ = this;
var this20918__$1 = this;
return (!((other20919 == null))) && ((this20918__$1.constructor === other20919.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20918__$1.idx,other20919.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20918__$1.__extmap,other20919.__extmap));
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

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__20916){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__20945 = cljs.core.keyword_identical_QMARK_;
var expr__20946 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__20948 = cljs.core.cst$kw$idx;
var G__20949 = expr__20946;
return (pred__20945.cljs$core$IFn$_invoke$arity$2 ? pred__20945.cljs$core$IFn$_invoke$arity$2(G__20948,G__20949) : pred__20945.call(null,G__20948,G__20949));
})())){
return (new com.rpl.specter.impl.LocalParam(G__20916,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__20916),null));
}
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$idx,self__.idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__20916){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__20916,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__20921){
return (new com.rpl.specter.impl.LocalParam(cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(G__20921),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20921,cljs.core.cst$kw$idx)),null));
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

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k20956,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__20964 = k20956;
var G__20964__$1 = (((G__20964 instanceof cljs.core.Keyword))?G__20964.fqn:null);
switch (G__20964__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20956,else__11103__auto__);

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

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20955){
var self__ = this;
var G__20955__$1 = this;
return (new cljs.core.RecordIter((0),G__20955__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$val], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__20979 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__20979(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20957,other20958){
var self__ = this;
var this20957__$1 = this;
return (!((other20958 == null))) && ((this20957__$1.constructor === other20958.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20957__$1.val,other20958.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20957__$1.__extmap,other20958.__extmap));
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

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__20955){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__20984 = cljs.core.keyword_identical_QMARK_;
var expr__20985 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__20987 = cljs.core.cst$kw$val;
var G__20988 = expr__20985;
return (pred__20984.cljs$core$IFn$_invoke$arity$2 ? pred__20984.cljs$core$IFn$_invoke$arity$2(G__20987,G__20988) : pred__20984.call(null,G__20987,G__20988));
})())){
return (new com.rpl.specter.impl.StaticParam(G__20955,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__20955),null));
}
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val,self__.val],null))], null),self__.__extmap));
});

com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__20955){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__20955,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__20961){
return (new com.rpl.specter.impl.StaticParam(cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(G__20961),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20961,cljs.core.cst$kw$val)),null));
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

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21017,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21026 = k21017;
var G__21026__$1 = (((G__21026 instanceof cljs.core.Keyword))?G__21026.fqn:null);
switch (G__21026__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21017,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params20994){
var self__ = this;
var this__18785__auto____$1 = this;
var fexpr__21027 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params20994);
return (fexpr__21027.cljs$core$IFn$_invoke$arity$0 ? fexpr__21027.cljs$core$IFn$_invoke$arity$0() : fexpr__21027.call(null));
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

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21016){
var self__ = this;
var G__21016__$1 = this;
return (new cljs.core.RecordIter((0),G__21016__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21032 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21032(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21018,other21019){
var self__ = this;
var this21018__$1 = this;
return (!((other21019 == null))) && ((this21018__$1.constructor === other21019.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21018__$1.fn,other21019.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21018__$1.__extmap,other21019.__extmap));
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

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21016){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21035 = cljs.core.keyword_identical_QMARK_;
var expr__21036 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21038 = cljs.core.cst$kw$fn;
var G__21039 = expr__21036;
return (pred__21035.cljs$core$IFn$_invoke$arity$2 ? pred__21035.cljs$core$IFn$_invoke$arity$2(G__21038,G__21039) : pred__21035.call(null,G__21038,G__21039));
})())){
return (new com.rpl.specter.impl.LateFn0(G__21016,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21016),null));
}
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21016){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__21016,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__21020){
return (new com.rpl.specter.impl.LateFn0(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21020),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21020,cljs.core.cst$kw$fn)),null));
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

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21043,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21049 = k21043;
var G__21049__$1 = (((G__21049 instanceof cljs.core.Keyword))?G__21049.fqn:null);
switch (G__21049__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21043,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params20995){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21053 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params20995);
var fexpr__21052 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params20995);
return (fexpr__21052.cljs$core$IFn$_invoke$arity$1 ? fexpr__21052.cljs$core$IFn$_invoke$arity$1(G__21053) : fexpr__21052.call(null,G__21053));
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

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21042){
var self__ = this;
var G__21042__$1 = this;
return (new cljs.core.RecordIter((0),G__21042__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21057 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21057(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21044,other21045){
var self__ = this;
var this21044__$1 = this;
return (!((other21045 == null))) && ((this21044__$1.constructor === other21045.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21044__$1.fn,other21045.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21044__$1.arg0,other21045.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21044__$1.__extmap,other21045.__extmap));
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

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21042){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21062 = cljs.core.keyword_identical_QMARK_;
var expr__21063 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21065 = cljs.core.cst$kw$fn;
var G__21066 = expr__21063;
return (pred__21062.cljs$core$IFn$_invoke$arity$2 ? pred__21062.cljs$core$IFn$_invoke$arity$2(G__21065,G__21066) : pred__21062.call(null,G__21065,G__21066));
})())){
return (new com.rpl.specter.impl.LateFn1(G__21042,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21067 = cljs.core.cst$kw$arg0;
var G__21068 = expr__21063;
return (pred__21062.cljs$core$IFn$_invoke$arity$2 ? pred__21062.cljs$core$IFn$_invoke$arity$2(G__21067,G__21068) : pred__21062.call(null,G__21067,G__21068));
})())){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__21042,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21042),null));
}
}
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21042){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__21042,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__21048){
return (new com.rpl.specter.impl.LateFn1(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21048),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21048),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21048,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0], 0))),null));
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

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21074,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21080 = k21074;
var G__21080__$1 = (((G__21080 instanceof cljs.core.Keyword))?G__21080.fqn:null);
switch (G__21080__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21074,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params20996){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21082 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params20996);
var G__21083 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params20996);
var fexpr__21081 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params20996);
return (fexpr__21081.cljs$core$IFn$_invoke$arity$2 ? fexpr__21081.cljs$core$IFn$_invoke$arity$2(G__21082,G__21083) : fexpr__21081.call(null,G__21082,G__21083));
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

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21073){
var self__ = this;
var G__21073__$1 = this;
return (new cljs.core.RecordIter((0),G__21073__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21089 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21089(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21075,other21076){
var self__ = this;
var this21075__$1 = this;
return (!((other21076 == null))) && ((this21075__$1.constructor === other21076.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21075__$1.fn,other21076.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21075__$1.arg0,other21076.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21075__$1.arg1,other21076.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21075__$1.__extmap,other21076.__extmap));
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

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21073){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21099 = cljs.core.keyword_identical_QMARK_;
var expr__21100 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21102 = cljs.core.cst$kw$fn;
var G__21103 = expr__21100;
return (pred__21099.cljs$core$IFn$_invoke$arity$2 ? pred__21099.cljs$core$IFn$_invoke$arity$2(G__21102,G__21103) : pred__21099.call(null,G__21102,G__21103));
})())){
return (new com.rpl.specter.impl.LateFn2(G__21073,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21104 = cljs.core.cst$kw$arg0;
var G__21105 = expr__21100;
return (pred__21099.cljs$core$IFn$_invoke$arity$2 ? pred__21099.cljs$core$IFn$_invoke$arity$2(G__21104,G__21105) : pred__21099.call(null,G__21104,G__21105));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__21073,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21106 = cljs.core.cst$kw$arg1;
var G__21107 = expr__21100;
return (pred__21099.cljs$core$IFn$_invoke$arity$2 ? pred__21099.cljs$core$IFn$_invoke$arity$2(G__21106,G__21107) : pred__21099.call(null,G__21106,G__21107));
})())){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__21073,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21073),null));
}
}
}
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg0,self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$arg1,self__.arg1],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21073){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__21073,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__21077){
return (new com.rpl.specter.impl.LateFn2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21077),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21077),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21077),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21077,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1], 0))),null));
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

com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21113,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21118 = k21113;
var G__21118__$1 = (((G__21118 instanceof cljs.core.Keyword))?G__21118.fqn:null);
switch (G__21118__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21113,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params20997){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21121 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params20997);
var G__21122 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params20997);
var G__21123 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params20997);
var fexpr__21120 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params20997);
return (fexpr__21120.cljs$core$IFn$_invoke$arity$3 ? fexpr__21120.cljs$core$IFn$_invoke$arity$3(G__21121,G__21122,G__21123) : fexpr__21120.call(null,G__21121,G__21122,G__21123));
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

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21112){
var self__ = this;
var G__21112__$1 = this;
return (new cljs.core.RecordIter((0),G__21112__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21131 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21131(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21114,other21115){
var self__ = this;
var this21114__$1 = this;
return (!((other21115 == null))) && ((this21114__$1.constructor === other21115.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21114__$1.fn,other21115.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21114__$1.arg0,other21115.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21114__$1.arg1,other21115.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21114__$1.arg2,other21115.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21114__$1.__extmap,other21115.__extmap));
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

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21112){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21135 = cljs.core.keyword_identical_QMARK_;
var expr__21136 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21138 = cljs.core.cst$kw$fn;
var G__21139 = expr__21136;
return (pred__21135.cljs$core$IFn$_invoke$arity$2 ? pred__21135.cljs$core$IFn$_invoke$arity$2(G__21138,G__21139) : pred__21135.call(null,G__21138,G__21139));
})())){
return (new com.rpl.specter.impl.LateFn3(G__21112,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21141 = cljs.core.cst$kw$arg0;
var G__21142 = expr__21136;
return (pred__21135.cljs$core$IFn$_invoke$arity$2 ? pred__21135.cljs$core$IFn$_invoke$arity$2(G__21141,G__21142) : pred__21135.call(null,G__21141,G__21142));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__21112,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21146 = cljs.core.cst$kw$arg1;
var G__21147 = expr__21136;
return (pred__21135.cljs$core$IFn$_invoke$arity$2 ? pred__21135.cljs$core$IFn$_invoke$arity$2(G__21146,G__21147) : pred__21135.call(null,G__21146,G__21147));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__21112,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21148 = cljs.core.cst$kw$arg2;
var G__21149 = expr__21136;
return (pred__21135.cljs$core$IFn$_invoke$arity$2 ? pred__21135.cljs$core$IFn$_invoke$arity$2(G__21148,G__21149) : pred__21135.call(null,G__21148,G__21149));
})())){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__21112,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21112),null));
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

com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21112){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__21112,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__21116){
return (new com.rpl.specter.impl.LateFn3(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21116),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21116),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21116),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__21116),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21116,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2], 0))),null));
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

com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21156,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21162 = k21156;
var G__21162__$1 = (((G__21162 instanceof cljs.core.Keyword))?G__21162.fqn:null);
switch (G__21162__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21156,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params20998){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21166 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params20998);
var G__21167 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params20998);
var G__21168 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params20998);
var G__21169 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params20998);
var fexpr__21165 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params20998);
return (fexpr__21165.cljs$core$IFn$_invoke$arity$4 ? fexpr__21165.cljs$core$IFn$_invoke$arity$4(G__21166,G__21167,G__21168,G__21169) : fexpr__21165.call(null,G__21166,G__21167,G__21168,G__21169));
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

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21155){
var self__ = this;
var G__21155__$1 = this;
return (new cljs.core.RecordIter((0),G__21155__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21177 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21177(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21157,other21158){
var self__ = this;
var this21157__$1 = this;
return (!((other21158 == null))) && ((this21157__$1.constructor === other21158.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21157__$1.fn,other21158.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21157__$1.arg0,other21158.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21157__$1.arg1,other21158.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21157__$1.arg2,other21158.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21157__$1.arg3,other21158.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21157__$1.__extmap,other21158.__extmap));
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

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21155){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21185 = cljs.core.keyword_identical_QMARK_;
var expr__21186 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21188 = cljs.core.cst$kw$fn;
var G__21189 = expr__21186;
return (pred__21185.cljs$core$IFn$_invoke$arity$2 ? pred__21185.cljs$core$IFn$_invoke$arity$2(G__21188,G__21189) : pred__21185.call(null,G__21188,G__21189));
})())){
return (new com.rpl.specter.impl.LateFn4(G__21155,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21190 = cljs.core.cst$kw$arg0;
var G__21191 = expr__21186;
return (pred__21185.cljs$core$IFn$_invoke$arity$2 ? pred__21185.cljs$core$IFn$_invoke$arity$2(G__21190,G__21191) : pred__21185.call(null,G__21190,G__21191));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__21155,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21192 = cljs.core.cst$kw$arg1;
var G__21193 = expr__21186;
return (pred__21185.cljs$core$IFn$_invoke$arity$2 ? pred__21185.cljs$core$IFn$_invoke$arity$2(G__21192,G__21193) : pred__21185.call(null,G__21192,G__21193));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__21155,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21195 = cljs.core.cst$kw$arg2;
var G__21196 = expr__21186;
return (pred__21185.cljs$core$IFn$_invoke$arity$2 ? pred__21185.cljs$core$IFn$_invoke$arity$2(G__21195,G__21196) : pred__21185.call(null,G__21195,G__21196));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__21155,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21199 = cljs.core.cst$kw$arg3;
var G__21200 = expr__21186;
return (pred__21185.cljs$core$IFn$_invoke$arity$2 ? pred__21185.cljs$core$IFn$_invoke$arity$2(G__21199,G__21200) : pred__21185.call(null,G__21199,G__21200));
})())){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__21155,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21155),null));
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

com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21155){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__21155,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__21159){
return (new com.rpl.specter.impl.LateFn4(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21159),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21159),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21159),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__21159),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__21159),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21159,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3], 0))),null));
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

com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21211,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21219 = k21211;
var G__21219__$1 = (((G__21219 instanceof cljs.core.Keyword))?G__21219.fqn:null);
switch (G__21219__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21211,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params20999){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21224 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params20999);
var G__21225 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params20999);
var G__21226 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params20999);
var G__21227 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params20999);
var G__21228 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params20999);
var fexpr__21223 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params20999);
return (fexpr__21223.cljs$core$IFn$_invoke$arity$5 ? fexpr__21223.cljs$core$IFn$_invoke$arity$5(G__21224,G__21225,G__21226,G__21227,G__21228) : fexpr__21223.call(null,G__21224,G__21225,G__21226,G__21227,G__21228));
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

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21210){
var self__ = this;
var G__21210__$1 = this;
return (new cljs.core.RecordIter((0),G__21210__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21234 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21234(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21212,other21213){
var self__ = this;
var this21212__$1 = this;
return (!((other21213 == null))) && ((this21212__$1.constructor === other21213.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21212__$1.fn,other21213.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21212__$1.arg0,other21213.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21212__$1.arg1,other21213.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21212__$1.arg2,other21213.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21212__$1.arg3,other21213.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21212__$1.arg4,other21213.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21212__$1.__extmap,other21213.__extmap));
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

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21210){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21246 = cljs.core.keyword_identical_QMARK_;
var expr__21247 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21249 = cljs.core.cst$kw$fn;
var G__21250 = expr__21247;
return (pred__21246.cljs$core$IFn$_invoke$arity$2 ? pred__21246.cljs$core$IFn$_invoke$arity$2(G__21249,G__21250) : pred__21246.call(null,G__21249,G__21250));
})())){
return (new com.rpl.specter.impl.LateFn5(G__21210,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21251 = cljs.core.cst$kw$arg0;
var G__21252 = expr__21247;
return (pred__21246.cljs$core$IFn$_invoke$arity$2 ? pred__21246.cljs$core$IFn$_invoke$arity$2(G__21251,G__21252) : pred__21246.call(null,G__21251,G__21252));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__21210,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21255 = cljs.core.cst$kw$arg1;
var G__21256 = expr__21247;
return (pred__21246.cljs$core$IFn$_invoke$arity$2 ? pred__21246.cljs$core$IFn$_invoke$arity$2(G__21255,G__21256) : pred__21246.call(null,G__21255,G__21256));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__21210,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21257 = cljs.core.cst$kw$arg2;
var G__21258 = expr__21247;
return (pred__21246.cljs$core$IFn$_invoke$arity$2 ? pred__21246.cljs$core$IFn$_invoke$arity$2(G__21257,G__21258) : pred__21246.call(null,G__21257,G__21258));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__21210,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21259 = cljs.core.cst$kw$arg3;
var G__21260 = expr__21247;
return (pred__21246.cljs$core$IFn$_invoke$arity$2 ? pred__21246.cljs$core$IFn$_invoke$arity$2(G__21259,G__21260) : pred__21246.call(null,G__21259,G__21260));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__21210,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21261 = cljs.core.cst$kw$arg4;
var G__21262 = expr__21247;
return (pred__21246.cljs$core$IFn$_invoke$arity$2 ? pred__21246.cljs$core$IFn$_invoke$arity$2(G__21261,G__21262) : pred__21246.call(null,G__21261,G__21262));
})())){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__21210,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21210),null));
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

com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21210){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__21210,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__21214){
return (new com.rpl.specter.impl.LateFn5(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21214),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21214),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21214),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__21214),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__21214),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__21214),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21214,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4], 0))),null));
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

com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21268,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21274 = k21268;
var G__21274__$1 = (((G__21274 instanceof cljs.core.Keyword))?G__21274.fqn:null);
switch (G__21274__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21268,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21000){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21280 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21000);
var G__21281 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21000);
var G__21282 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21000);
var G__21283 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21000);
var G__21284 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21000);
var G__21285 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21000);
var fexpr__21279 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21000);
return (fexpr__21279.cljs$core$IFn$_invoke$arity$6 ? fexpr__21279.cljs$core$IFn$_invoke$arity$6(G__21280,G__21281,G__21282,G__21283,G__21284,G__21285) : fexpr__21279.call(null,G__21280,G__21281,G__21282,G__21283,G__21284,G__21285));
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

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21267){
var self__ = this;
var G__21267__$1 = this;
return (new cljs.core.RecordIter((0),G__21267__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21293 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21293(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21269,other21270){
var self__ = this;
var this21269__$1 = this;
return (!((other21270 == null))) && ((this21269__$1.constructor === other21270.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21269__$1.fn,other21270.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21269__$1.arg0,other21270.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21269__$1.arg1,other21270.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21269__$1.arg2,other21270.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21269__$1.arg3,other21270.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21269__$1.arg4,other21270.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21269__$1.arg5,other21270.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21269__$1.__extmap,other21270.__extmap));
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

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21267){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21310 = cljs.core.keyword_identical_QMARK_;
var expr__21311 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21313 = cljs.core.cst$kw$fn;
var G__21314 = expr__21311;
return (pred__21310.cljs$core$IFn$_invoke$arity$2 ? pred__21310.cljs$core$IFn$_invoke$arity$2(G__21313,G__21314) : pred__21310.call(null,G__21313,G__21314));
})())){
return (new com.rpl.specter.impl.LateFn6(G__21267,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21317 = cljs.core.cst$kw$arg0;
var G__21318 = expr__21311;
return (pred__21310.cljs$core$IFn$_invoke$arity$2 ? pred__21310.cljs$core$IFn$_invoke$arity$2(G__21317,G__21318) : pred__21310.call(null,G__21317,G__21318));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__21267,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21319 = cljs.core.cst$kw$arg1;
var G__21320 = expr__21311;
return (pred__21310.cljs$core$IFn$_invoke$arity$2 ? pred__21310.cljs$core$IFn$_invoke$arity$2(G__21319,G__21320) : pred__21310.call(null,G__21319,G__21320));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__21267,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21322 = cljs.core.cst$kw$arg2;
var G__21323 = expr__21311;
return (pred__21310.cljs$core$IFn$_invoke$arity$2 ? pred__21310.cljs$core$IFn$_invoke$arity$2(G__21322,G__21323) : pred__21310.call(null,G__21322,G__21323));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__21267,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21324 = cljs.core.cst$kw$arg3;
var G__21325 = expr__21311;
return (pred__21310.cljs$core$IFn$_invoke$arity$2 ? pred__21310.cljs$core$IFn$_invoke$arity$2(G__21324,G__21325) : pred__21310.call(null,G__21324,G__21325));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__21267,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21326 = cljs.core.cst$kw$arg4;
var G__21327 = expr__21311;
return (pred__21310.cljs$core$IFn$_invoke$arity$2 ? pred__21310.cljs$core$IFn$_invoke$arity$2(G__21326,G__21327) : pred__21310.call(null,G__21326,G__21327));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__21267,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21328 = cljs.core.cst$kw$arg5;
var G__21329 = expr__21311;
return (pred__21310.cljs$core$IFn$_invoke$arity$2 ? pred__21310.cljs$core$IFn$_invoke$arity$2(G__21328,G__21329) : pred__21310.call(null,G__21328,G__21329));
})())){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__21267,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21267),null));
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

com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21267){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__21267,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__21273){
return (new com.rpl.specter.impl.LateFn6(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21273),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21273),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21273),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__21273),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__21273),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__21273),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__21273),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21273,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5], 0))),null));
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

com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21338,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21344 = k21338;
var G__21344__$1 = (((G__21344 instanceof cljs.core.Keyword))?G__21344.fqn:null);
switch (G__21344__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21338,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21001){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21346 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21001);
var G__21347 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21001);
var G__21348 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21001);
var G__21349 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21001);
var G__21350 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21001);
var G__21351 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21001);
var G__21352 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21001);
var fexpr__21345 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21001);
return (fexpr__21345.cljs$core$IFn$_invoke$arity$7 ? fexpr__21345.cljs$core$IFn$_invoke$arity$7(G__21346,G__21347,G__21348,G__21349,G__21350,G__21351,G__21352) : fexpr__21345.call(null,G__21346,G__21347,G__21348,G__21349,G__21350,G__21351,G__21352));
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

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21337){
var self__ = this;
var G__21337__$1 = this;
return (new cljs.core.RecordIter((0),G__21337__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21361 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21361(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21339,other21340){
var self__ = this;
var this21339__$1 = this;
return (!((other21340 == null))) && ((this21339__$1.constructor === other21340.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21339__$1.fn,other21340.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21339__$1.arg0,other21340.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21339__$1.arg1,other21340.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21339__$1.arg2,other21340.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21339__$1.arg3,other21340.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21339__$1.arg4,other21340.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21339__$1.arg5,other21340.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21339__$1.arg6,other21340.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21339__$1.__extmap,other21340.__extmap));
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

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21337){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21372 = cljs.core.keyword_identical_QMARK_;
var expr__21373 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21375 = cljs.core.cst$kw$fn;
var G__21376 = expr__21373;
return (pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(G__21375,G__21376) : pred__21372.call(null,G__21375,G__21376));
})())){
return (new com.rpl.specter.impl.LateFn7(G__21337,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21377 = cljs.core.cst$kw$arg0;
var G__21378 = expr__21373;
return (pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(G__21377,G__21378) : pred__21372.call(null,G__21377,G__21378));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__21337,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21379 = cljs.core.cst$kw$arg1;
var G__21380 = expr__21373;
return (pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(G__21379,G__21380) : pred__21372.call(null,G__21379,G__21380));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__21337,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21381 = cljs.core.cst$kw$arg2;
var G__21382 = expr__21373;
return (pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(G__21381,G__21382) : pred__21372.call(null,G__21381,G__21382));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__21337,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21383 = cljs.core.cst$kw$arg3;
var G__21384 = expr__21373;
return (pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(G__21383,G__21384) : pred__21372.call(null,G__21383,G__21384));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__21337,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21387 = cljs.core.cst$kw$arg4;
var G__21388 = expr__21373;
return (pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(G__21387,G__21388) : pred__21372.call(null,G__21387,G__21388));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__21337,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21390 = cljs.core.cst$kw$arg5;
var G__21391 = expr__21373;
return (pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(G__21390,G__21391) : pred__21372.call(null,G__21390,G__21391));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__21337,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21392 = cljs.core.cst$kw$arg6;
var G__21393 = expr__21373;
return (pred__21372.cljs$core$IFn$_invoke$arity$2 ? pred__21372.cljs$core$IFn$_invoke$arity$2(G__21392,G__21393) : pred__21372.call(null,G__21392,G__21393));
})())){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__21337,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21337),null));
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

com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21337){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__21337,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__21341){
return (new com.rpl.specter.impl.LateFn7(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21341),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21341),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21341),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__21341),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__21341),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__21341),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__21341),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__21341),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21341,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6], 0))),null));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21405,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21411 = k21405;
var G__21411__$1 = (((G__21411 instanceof cljs.core.Keyword))?G__21411.fqn:null);
switch (G__21411__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21405,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21002){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21414 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21002);
var G__21415 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21002);
var G__21416 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21002);
var G__21417 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21002);
var G__21418 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21002);
var G__21419 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21002);
var G__21420 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21002);
var G__21421 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21002);
var fexpr__21413 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21002);
return (fexpr__21413.cljs$core$IFn$_invoke$arity$8 ? fexpr__21413.cljs$core$IFn$_invoke$arity$8(G__21414,G__21415,G__21416,G__21417,G__21418,G__21419,G__21420,G__21421) : fexpr__21413.call(null,G__21414,G__21415,G__21416,G__21417,G__21418,G__21419,G__21420,G__21421));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21404){
var self__ = this;
var G__21404__$1 = this;
return (new cljs.core.RecordIter((0),G__21404__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21430 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21430(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21406,other21407){
var self__ = this;
var this21406__$1 = this;
return (!((other21407 == null))) && ((this21406__$1.constructor === other21407.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.fn,other21407.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.arg0,other21407.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.arg1,other21407.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.arg2,other21407.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.arg3,other21407.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.arg4,other21407.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.arg5,other21407.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.arg6,other21407.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.arg7,other21407.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.__extmap,other21407.__extmap));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21404){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21442 = cljs.core.keyword_identical_QMARK_;
var expr__21444 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21447 = cljs.core.cst$kw$fn;
var G__21448 = expr__21444;
return (pred__21442.cljs$core$IFn$_invoke$arity$2 ? pred__21442.cljs$core$IFn$_invoke$arity$2(G__21447,G__21448) : pred__21442.call(null,G__21447,G__21448));
})())){
return (new com.rpl.specter.impl.LateFn8(G__21404,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21450 = cljs.core.cst$kw$arg0;
var G__21451 = expr__21444;
return (pred__21442.cljs$core$IFn$_invoke$arity$2 ? pred__21442.cljs$core$IFn$_invoke$arity$2(G__21450,G__21451) : pred__21442.call(null,G__21450,G__21451));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__21404,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21452 = cljs.core.cst$kw$arg1;
var G__21453 = expr__21444;
return (pred__21442.cljs$core$IFn$_invoke$arity$2 ? pred__21442.cljs$core$IFn$_invoke$arity$2(G__21452,G__21453) : pred__21442.call(null,G__21452,G__21453));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__21404,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21454 = cljs.core.cst$kw$arg2;
var G__21455 = expr__21444;
return (pred__21442.cljs$core$IFn$_invoke$arity$2 ? pred__21442.cljs$core$IFn$_invoke$arity$2(G__21454,G__21455) : pred__21442.call(null,G__21454,G__21455));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__21404,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21456 = cljs.core.cst$kw$arg3;
var G__21457 = expr__21444;
return (pred__21442.cljs$core$IFn$_invoke$arity$2 ? pred__21442.cljs$core$IFn$_invoke$arity$2(G__21456,G__21457) : pred__21442.call(null,G__21456,G__21457));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__21404,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21458 = cljs.core.cst$kw$arg4;
var G__21459 = expr__21444;
return (pred__21442.cljs$core$IFn$_invoke$arity$2 ? pred__21442.cljs$core$IFn$_invoke$arity$2(G__21458,G__21459) : pred__21442.call(null,G__21458,G__21459));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__21404,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21462 = cljs.core.cst$kw$arg5;
var G__21463 = expr__21444;
return (pred__21442.cljs$core$IFn$_invoke$arity$2 ? pred__21442.cljs$core$IFn$_invoke$arity$2(G__21462,G__21463) : pred__21442.call(null,G__21462,G__21463));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__21404,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21466 = cljs.core.cst$kw$arg6;
var G__21467 = expr__21444;
return (pred__21442.cljs$core$IFn$_invoke$arity$2 ? pred__21442.cljs$core$IFn$_invoke$arity$2(G__21466,G__21467) : pred__21442.call(null,G__21466,G__21467));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__21404,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21469 = cljs.core.cst$kw$arg7;
var G__21470 = expr__21444;
return (pred__21442.cljs$core$IFn$_invoke$arity$2 ? pred__21442.cljs$core$IFn$_invoke$arity$2(G__21469,G__21470) : pred__21442.call(null,G__21469,G__21470));
})())){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__21404,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21404),null));
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

com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21404){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__21404,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__21408){
return (new com.rpl.specter.impl.LateFn8(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21408),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21408),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21408),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__21408),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__21408),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__21408),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__21408),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__21408),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__21408),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21408,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7], 0))),null));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21482,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21493 = k21482;
var G__21493__$1 = (((G__21493 instanceof cljs.core.Keyword))?G__21493.fqn:null);
switch (G__21493__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21482,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21004){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21496 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21004);
var G__21497 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21004);
var G__21498 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21004);
var G__21499 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21004);
var G__21500 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21004);
var G__21501 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21004);
var G__21502 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21004);
var G__21503 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21004);
var G__21504 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21004);
var fexpr__21495 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21004);
return (fexpr__21495.cljs$core$IFn$_invoke$arity$9 ? fexpr__21495.cljs$core$IFn$_invoke$arity$9(G__21496,G__21497,G__21498,G__21499,G__21500,G__21501,G__21502,G__21503,G__21504) : fexpr__21495.call(null,G__21496,G__21497,G__21498,G__21499,G__21500,G__21501,G__21502,G__21503,G__21504));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21481){
var self__ = this;
var G__21481__$1 = this;
return (new cljs.core.RecordIter((0),G__21481__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21518 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21518(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21483,other21484){
var self__ = this;
var this21483__$1 = this;
return (!((other21484 == null))) && ((this21483__$1.constructor === other21484.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.fn,other21484.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.arg0,other21484.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.arg1,other21484.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.arg2,other21484.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.arg3,other21484.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.arg4,other21484.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.arg5,other21484.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.arg6,other21484.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.arg7,other21484.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.arg8,other21484.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21483__$1.__extmap,other21484.__extmap));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21481){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21528 = cljs.core.keyword_identical_QMARK_;
var expr__21529 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21532 = cljs.core.cst$kw$fn;
var G__21533 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21532,G__21533) : pred__21528.call(null,G__21532,G__21533));
})())){
return (new com.rpl.specter.impl.LateFn9(G__21481,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21534 = cljs.core.cst$kw$arg0;
var G__21535 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21534,G__21535) : pred__21528.call(null,G__21534,G__21535));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__21481,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21539 = cljs.core.cst$kw$arg1;
var G__21540 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21539,G__21540) : pred__21528.call(null,G__21539,G__21540));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__21481,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21543 = cljs.core.cst$kw$arg2;
var G__21544 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21543,G__21544) : pred__21528.call(null,G__21543,G__21544));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__21481,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21545 = cljs.core.cst$kw$arg3;
var G__21546 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21545,G__21546) : pred__21528.call(null,G__21545,G__21546));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__21481,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21547 = cljs.core.cst$kw$arg4;
var G__21548 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21547,G__21548) : pred__21528.call(null,G__21547,G__21548));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__21481,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21549 = cljs.core.cst$kw$arg5;
var G__21550 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21549,G__21550) : pred__21528.call(null,G__21549,G__21550));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__21481,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21551 = cljs.core.cst$kw$arg6;
var G__21552 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21551,G__21552) : pred__21528.call(null,G__21551,G__21552));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__21481,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21553 = cljs.core.cst$kw$arg7;
var G__21554 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21553,G__21554) : pred__21528.call(null,G__21553,G__21554));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__21481,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21555 = cljs.core.cst$kw$arg8;
var G__21556 = expr__21529;
return (pred__21528.cljs$core$IFn$_invoke$arity$2 ? pred__21528.cljs$core$IFn$_invoke$arity$2(G__21555,G__21556) : pred__21528.call(null,G__21555,G__21556));
})())){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__21481,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21481),null));
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

com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21481){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__21481,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__21485){
return (new com.rpl.specter.impl.LateFn9(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21485),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21485),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21485),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__21485),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__21485),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__21485),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__21485),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__21485),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__21485),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__21485),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21485,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8], 0))),null));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21582,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21599 = k21582;
var G__21599__$1 = (((G__21599 instanceof cljs.core.Keyword))?G__21599.fqn:null);
switch (G__21599__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21582,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21006){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21604 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21006);
var G__21605 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21006);
var G__21606 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21006);
var G__21607 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21006);
var G__21608 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21006);
var G__21609 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21006);
var G__21610 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21006);
var G__21611 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21006);
var G__21612 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21006);
var G__21613 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21006);
var fexpr__21603 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21006);
return (fexpr__21603.cljs$core$IFn$_invoke$arity$10 ? fexpr__21603.cljs$core$IFn$_invoke$arity$10(G__21604,G__21605,G__21606,G__21607,G__21608,G__21609,G__21610,G__21611,G__21612,G__21613) : fexpr__21603.call(null,G__21604,G__21605,G__21606,G__21607,G__21608,G__21609,G__21610,G__21611,G__21612,G__21613));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21581){
var self__ = this;
var G__21581__$1 = this;
return (new cljs.core.RecordIter((0),G__21581__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21653 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21653(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21583,other21584){
var self__ = this;
var this21583__$1 = this;
return (!((other21584 == null))) && ((this21583__$1.constructor === other21584.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.fn,other21584.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg0,other21584.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg1,other21584.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg2,other21584.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg3,other21584.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg4,other21584.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg5,other21584.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg6,other21584.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg7,other21584.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg8,other21584.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.arg9,other21584.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21583__$1.__extmap,other21584.__extmap));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21581){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21695 = cljs.core.keyword_identical_QMARK_;
var expr__21696 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21699 = cljs.core.cst$kw$fn;
var G__21700 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21699,G__21700) : pred__21695.call(null,G__21699,G__21700));
})())){
return (new com.rpl.specter.impl.LateFn10(G__21581,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21708 = cljs.core.cst$kw$arg0;
var G__21709 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21708,G__21709) : pred__21695.call(null,G__21708,G__21709));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__21581,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21713 = cljs.core.cst$kw$arg1;
var G__21714 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21713,G__21714) : pred__21695.call(null,G__21713,G__21714));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__21581,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21718 = cljs.core.cst$kw$arg2;
var G__21719 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21718,G__21719) : pred__21695.call(null,G__21718,G__21719));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__21581,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21722 = cljs.core.cst$kw$arg3;
var G__21723 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21722,G__21723) : pred__21695.call(null,G__21722,G__21723));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__21581,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21727 = cljs.core.cst$kw$arg4;
var G__21728 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21727,G__21728) : pred__21695.call(null,G__21727,G__21728));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__21581,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21732 = cljs.core.cst$kw$arg5;
var G__21733 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21732,G__21733) : pred__21695.call(null,G__21732,G__21733));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__21581,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21738 = cljs.core.cst$kw$arg6;
var G__21739 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21738,G__21739) : pred__21695.call(null,G__21738,G__21739));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__21581,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21744 = cljs.core.cst$kw$arg7;
var G__21745 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21744,G__21745) : pred__21695.call(null,G__21744,G__21745));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__21581,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21747 = cljs.core.cst$kw$arg8;
var G__21748 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21747,G__21748) : pred__21695.call(null,G__21747,G__21748));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__21581,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21750 = cljs.core.cst$kw$arg9;
var G__21751 = expr__21696;
return (pred__21695.cljs$core$IFn$_invoke$arity$2 ? pred__21695.cljs$core$IFn$_invoke$arity$2(G__21750,G__21751) : pred__21695.call(null,G__21750,G__21751));
})())){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__21581,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21581),null));
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

com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21581){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__21581,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__21590){
return (new com.rpl.specter.impl.LateFn10(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__21590),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__21590),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21590,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9], 0))),null));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k21803,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__21830 = k21803;
var G__21830__$1 = (((G__21830 instanceof cljs.core.Keyword))?G__21830.fqn:null);
switch (G__21830__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21803,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21007){
var self__ = this;
var this__18785__auto____$1 = this;
var G__21839 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21007);
var G__21840 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21007);
var G__21841 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21007);
var G__21842 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21007);
var G__21843 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21007);
var G__21844 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21007);
var G__21845 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21007);
var G__21846 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21007);
var G__21847 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21007);
var G__21848 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21007);
var G__21849 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params21007);
var fexpr__21838 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21007);
return (fexpr__21838.cljs$core$IFn$_invoke$arity$11 ? fexpr__21838.cljs$core$IFn$_invoke$arity$11(G__21839,G__21840,G__21841,G__21842,G__21843,G__21844,G__21845,G__21846,G__21847,G__21848,G__21849) : fexpr__21838.call(null,G__21839,G__21840,G__21841,G__21842,G__21843,G__21844,G__21845,G__21846,G__21847,G__21848,G__21849));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21802){
var self__ = this;
var G__21802__$1 = this;
return (new cljs.core.RecordIter((0),G__21802__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__21891 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__21891(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21805,other21806){
var self__ = this;
var this21805__$1 = this;
return (!((other21806 == null))) && ((this21805__$1.constructor === other21806.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.fn,other21806.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg0,other21806.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg1,other21806.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg2,other21806.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg3,other21806.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg4,other21806.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg5,other21806.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg6,other21806.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg7,other21806.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg8,other21806.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg9,other21806.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.arg10,other21806.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21805__$1.__extmap,other21806.__extmap));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__21802){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__21941 = cljs.core.keyword_identical_QMARK_;
var expr__21942 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__21945 = cljs.core.cst$kw$fn;
var G__21946 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21945,G__21946) : pred__21941.call(null,G__21945,G__21946));
})())){
return (new com.rpl.specter.impl.LateFn11(G__21802,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21952 = cljs.core.cst$kw$arg0;
var G__21953 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21952,G__21953) : pred__21941.call(null,G__21952,G__21953));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__21802,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21960 = cljs.core.cst$kw$arg1;
var G__21961 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21960,G__21961) : pred__21941.call(null,G__21960,G__21961));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__21802,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21963 = cljs.core.cst$kw$arg2;
var G__21964 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21963,G__21964) : pred__21941.call(null,G__21963,G__21964));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__21802,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21965 = cljs.core.cst$kw$arg3;
var G__21966 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21965,G__21966) : pred__21941.call(null,G__21965,G__21966));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__21802,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21967 = cljs.core.cst$kw$arg4;
var G__21968 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21967,G__21968) : pred__21941.call(null,G__21967,G__21968));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__21802,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21970 = cljs.core.cst$kw$arg5;
var G__21971 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21970,G__21971) : pred__21941.call(null,G__21970,G__21971));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__21802,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21972 = cljs.core.cst$kw$arg6;
var G__21973 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21972,G__21973) : pred__21941.call(null,G__21972,G__21973));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__21802,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21978 = cljs.core.cst$kw$arg7;
var G__21979 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21978,G__21979) : pred__21941.call(null,G__21978,G__21979));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__21802,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21981 = cljs.core.cst$kw$arg8;
var G__21982 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21981,G__21982) : pred__21941.call(null,G__21981,G__21982));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__21802,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21983 = cljs.core.cst$kw$arg9;
var G__21984 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21983,G__21984) : pred__21941.call(null,G__21983,G__21984));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__21802,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21985 = cljs.core.cst$kw$arg10;
var G__21986 = expr__21942;
return (pred__21941.cljs$core$IFn$_invoke$arity$2 ? pred__21941.cljs$core$IFn$_invoke$arity$2(G__21985,G__21986) : pred__21941.call(null,G__21985,G__21986));
})())){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__21802,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__21802),null));
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

com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__21802){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__21802,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__21812){
return (new com.rpl.specter.impl.LateFn11(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__21812),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__21812),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21812,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10], 0))),null));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k22029,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__22046 = k22029;
var G__22046__$1 = (((G__22046 instanceof cljs.core.Keyword))?G__22046.fqn:null);
switch (G__22046__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22029,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21008){
var self__ = this;
var this__18785__auto____$1 = this;
var G__22055 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21008);
var G__22056 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21008);
var G__22057 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21008);
var G__22058 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21008);
var G__22059 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21008);
var G__22060 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21008);
var G__22061 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21008);
var G__22062 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21008);
var G__22063 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21008);
var G__22064 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21008);
var G__22065 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params21008);
var G__22066 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params21008);
var fexpr__22054 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21008);
return (fexpr__22054.cljs$core$IFn$_invoke$arity$12 ? fexpr__22054.cljs$core$IFn$_invoke$arity$12(G__22055,G__22056,G__22057,G__22058,G__22059,G__22060,G__22061,G__22062,G__22063,G__22064,G__22065,G__22066) : fexpr__22054.call(null,G__22055,G__22056,G__22057,G__22058,G__22059,G__22060,G__22061,G__22062,G__22063,G__22064,G__22065,G__22066));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22028){
var self__ = this;
var G__22028__$1 = this;
return (new cljs.core.RecordIter((0),G__22028__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__22090 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__22090(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22030,other22031){
var self__ = this;
var this22030__$1 = this;
return (!((other22031 == null))) && ((this22030__$1.constructor === other22031.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.fn,other22031.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg0,other22031.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg1,other22031.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg2,other22031.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg3,other22031.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg4,other22031.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg5,other22031.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg6,other22031.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg7,other22031.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg8,other22031.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg9,other22031.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg10,other22031.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.arg11,other22031.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22030__$1.__extmap,other22031.__extmap));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__22028){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__22107 = cljs.core.keyword_identical_QMARK_;
var expr__22108 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__22110 = cljs.core.cst$kw$fn;
var G__22111 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22110,G__22111) : pred__22107.call(null,G__22110,G__22111));
})())){
return (new com.rpl.specter.impl.LateFn12(G__22028,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22112 = cljs.core.cst$kw$arg0;
var G__22113 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22112,G__22113) : pred__22107.call(null,G__22112,G__22113));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__22028,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22114 = cljs.core.cst$kw$arg1;
var G__22115 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22114,G__22115) : pred__22107.call(null,G__22114,G__22115));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__22028,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22117 = cljs.core.cst$kw$arg2;
var G__22118 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22117,G__22118) : pred__22107.call(null,G__22117,G__22118));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__22028,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22120 = cljs.core.cst$kw$arg3;
var G__22121 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22120,G__22121) : pred__22107.call(null,G__22120,G__22121));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__22028,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22125 = cljs.core.cst$kw$arg4;
var G__22126 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22125,G__22126) : pred__22107.call(null,G__22125,G__22126));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__22028,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22128 = cljs.core.cst$kw$arg5;
var G__22129 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22128,G__22129) : pred__22107.call(null,G__22128,G__22129));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__22028,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22131 = cljs.core.cst$kw$arg6;
var G__22132 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22131,G__22132) : pred__22107.call(null,G__22131,G__22132));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__22028,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22135 = cljs.core.cst$kw$arg7;
var G__22136 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22135,G__22136) : pred__22107.call(null,G__22135,G__22136));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__22028,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22138 = cljs.core.cst$kw$arg8;
var G__22139 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22138,G__22139) : pred__22107.call(null,G__22138,G__22139));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__22028,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22141 = cljs.core.cst$kw$arg9;
var G__22142 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22141,G__22142) : pred__22107.call(null,G__22141,G__22142));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__22028,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22143 = cljs.core.cst$kw$arg10;
var G__22144 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22143,G__22144) : pred__22107.call(null,G__22143,G__22144));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__22028,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22147 = cljs.core.cst$kw$arg11;
var G__22148 = expr__22108;
return (pred__22107.cljs$core$IFn$_invoke$arity$2 ? pred__22107.cljs$core$IFn$_invoke$arity$2(G__22147,G__22148) : pred__22107.call(null,G__22147,G__22148));
})())){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__22028,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__22028),null));
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

com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__22028){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__22028,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__22037){
return (new com.rpl.specter.impl.LateFn12(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__22037),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__22037),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22037,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11], 0))),null));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k22194,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__22211 = k22194;
var G__22211__$1 = (((G__22211 instanceof cljs.core.Keyword))?G__22211.fqn:null);
switch (G__22211__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22194,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21009){
var self__ = this;
var this__18785__auto____$1 = this;
var G__22220 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21009);
var G__22221 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21009);
var G__22222 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21009);
var G__22223 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21009);
var G__22224 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21009);
var G__22225 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21009);
var G__22226 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21009);
var G__22227 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21009);
var G__22228 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21009);
var G__22229 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21009);
var G__22230 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params21009);
var G__22231 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params21009);
var G__22232 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params21009);
var fexpr__22219 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21009);
return (fexpr__22219.cljs$core$IFn$_invoke$arity$13 ? fexpr__22219.cljs$core$IFn$_invoke$arity$13(G__22220,G__22221,G__22222,G__22223,G__22224,G__22225,G__22226,G__22227,G__22228,G__22229,G__22230,G__22231,G__22232) : fexpr__22219.call(null,G__22220,G__22221,G__22222,G__22223,G__22224,G__22225,G__22226,G__22227,G__22228,G__22229,G__22230,G__22231,G__22232));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22193){
var self__ = this;
var G__22193__$1 = this;
return (new cljs.core.RecordIter((0),G__22193__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__22259 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__22259(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22195,other22196){
var self__ = this;
var this22195__$1 = this;
return (!((other22196 == null))) && ((this22195__$1.constructor === other22196.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.fn,other22196.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg0,other22196.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg1,other22196.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg2,other22196.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg3,other22196.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg4,other22196.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg5,other22196.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg6,other22196.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg7,other22196.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg8,other22196.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg9,other22196.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg10,other22196.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg11,other22196.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.arg12,other22196.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22195__$1.__extmap,other22196.__extmap));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__22193){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__22286 = cljs.core.keyword_identical_QMARK_;
var expr__22287 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__22291 = cljs.core.cst$kw$fn;
var G__22292 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22291,G__22292) : pred__22286.call(null,G__22291,G__22292));
})())){
return (new com.rpl.specter.impl.LateFn13(G__22193,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22294 = cljs.core.cst$kw$arg0;
var G__22295 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22294,G__22295) : pred__22286.call(null,G__22294,G__22295));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__22193,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22297 = cljs.core.cst$kw$arg1;
var G__22298 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22297,G__22298) : pred__22286.call(null,G__22297,G__22298));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__22193,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22300 = cljs.core.cst$kw$arg2;
var G__22301 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22300,G__22301) : pred__22286.call(null,G__22300,G__22301));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__22193,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22305 = cljs.core.cst$kw$arg3;
var G__22306 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22305,G__22306) : pred__22286.call(null,G__22305,G__22306));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__22193,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22309 = cljs.core.cst$kw$arg4;
var G__22310 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22309,G__22310) : pred__22286.call(null,G__22309,G__22310));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__22193,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22313 = cljs.core.cst$kw$arg5;
var G__22314 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22313,G__22314) : pred__22286.call(null,G__22313,G__22314));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__22193,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22316 = cljs.core.cst$kw$arg6;
var G__22317 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22316,G__22317) : pred__22286.call(null,G__22316,G__22317));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__22193,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22320 = cljs.core.cst$kw$arg7;
var G__22321 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22320,G__22321) : pred__22286.call(null,G__22320,G__22321));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__22193,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22323 = cljs.core.cst$kw$arg8;
var G__22324 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22323,G__22324) : pred__22286.call(null,G__22323,G__22324));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__22193,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22325 = cljs.core.cst$kw$arg9;
var G__22326 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22325,G__22326) : pred__22286.call(null,G__22325,G__22326));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__22193,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22330 = cljs.core.cst$kw$arg10;
var G__22331 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22330,G__22331) : pred__22286.call(null,G__22330,G__22331));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__22193,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22334 = cljs.core.cst$kw$arg11;
var G__22335 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22334,G__22335) : pred__22286.call(null,G__22334,G__22335));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__22193,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22339 = cljs.core.cst$kw$arg12;
var G__22340 = expr__22287;
return (pred__22286.cljs$core$IFn$_invoke$arity$2 ? pred__22286.cljs$core$IFn$_invoke$arity$2(G__22339,G__22340) : pred__22286.call(null,G__22339,G__22340));
})())){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__22193,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__22193),null));
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

com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__22193){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__22193,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__22201){
return (new com.rpl.specter.impl.LateFn13(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__22201),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__22201),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22201,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12], 0))),null));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k22389,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__22400 = k22389;
var G__22400__$1 = (((G__22400 instanceof cljs.core.Keyword))?G__22400.fqn:null);
switch (G__22400__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22389,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21010){
var self__ = this;
var this__18785__auto____$1 = this;
var G__22407 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21010);
var G__22408 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21010);
var G__22409 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21010);
var G__22410 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21010);
var G__22411 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21010);
var G__22412 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21010);
var G__22413 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21010);
var G__22414 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21010);
var G__22415 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21010);
var G__22416 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21010);
var G__22417 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params21010);
var G__22418 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params21010);
var G__22419 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params21010);
var G__22420 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params21010);
var fexpr__22406 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21010);
return (fexpr__22406.cljs$core$IFn$_invoke$arity$14 ? fexpr__22406.cljs$core$IFn$_invoke$arity$14(G__22407,G__22408,G__22409,G__22410,G__22411,G__22412,G__22413,G__22414,G__22415,G__22416,G__22417,G__22418,G__22419,G__22420) : fexpr__22406.call(null,G__22407,G__22408,G__22409,G__22410,G__22411,G__22412,G__22413,G__22414,G__22415,G__22416,G__22417,G__22418,G__22419,G__22420));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22388){
var self__ = this;
var G__22388__$1 = this;
return (new cljs.core.RecordIter((0),G__22388__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__22477 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__22477(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22390,other22391){
var self__ = this;
var this22390__$1 = this;
return (!((other22391 == null))) && ((this22390__$1.constructor === other22391.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.fn,other22391.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg0,other22391.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg1,other22391.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg2,other22391.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg3,other22391.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg4,other22391.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg5,other22391.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg6,other22391.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg7,other22391.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg8,other22391.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg9,other22391.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg10,other22391.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg11,other22391.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg12,other22391.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.arg13,other22391.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22390__$1.__extmap,other22391.__extmap));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__22388){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__22519 = cljs.core.keyword_identical_QMARK_;
var expr__22520 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__22522 = cljs.core.cst$kw$fn;
var G__22523 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22522,G__22523) : pred__22519.call(null,G__22522,G__22523));
})())){
return (new com.rpl.specter.impl.LateFn14(G__22388,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22524 = cljs.core.cst$kw$arg0;
var G__22525 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22524,G__22525) : pred__22519.call(null,G__22524,G__22525));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__22388,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22530 = cljs.core.cst$kw$arg1;
var G__22531 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22530,G__22531) : pred__22519.call(null,G__22530,G__22531));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__22388,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22533 = cljs.core.cst$kw$arg2;
var G__22534 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22533,G__22534) : pred__22519.call(null,G__22533,G__22534));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__22388,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22535 = cljs.core.cst$kw$arg3;
var G__22536 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22535,G__22536) : pred__22519.call(null,G__22535,G__22536));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__22388,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22537 = cljs.core.cst$kw$arg4;
var G__22538 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22537,G__22538) : pred__22519.call(null,G__22537,G__22538));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__22388,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22541 = cljs.core.cst$kw$arg5;
var G__22542 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22541,G__22542) : pred__22519.call(null,G__22541,G__22542));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__22388,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22545 = cljs.core.cst$kw$arg6;
var G__22546 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22545,G__22546) : pred__22519.call(null,G__22545,G__22546));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__22388,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22549 = cljs.core.cst$kw$arg7;
var G__22551 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22549,G__22551) : pred__22519.call(null,G__22549,G__22551));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__22388,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22554 = cljs.core.cst$kw$arg8;
var G__22555 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22554,G__22555) : pred__22519.call(null,G__22554,G__22555));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__22388,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22557 = cljs.core.cst$kw$arg9;
var G__22558 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22557,G__22558) : pred__22519.call(null,G__22557,G__22558));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__22388,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22561 = cljs.core.cst$kw$arg10;
var G__22562 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22561,G__22562) : pred__22519.call(null,G__22561,G__22562));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__22388,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22564 = cljs.core.cst$kw$arg11;
var G__22565 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22564,G__22565) : pred__22519.call(null,G__22564,G__22565));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__22388,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22567 = cljs.core.cst$kw$arg12;
var G__22568 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22567,G__22568) : pred__22519.call(null,G__22567,G__22568));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__22388,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22569 = cljs.core.cst$kw$arg13;
var G__22570 = expr__22520;
return (pred__22519.cljs$core$IFn$_invoke$arity$2 ? pred__22519.cljs$core$IFn$_invoke$arity$2(G__22569,G__22570) : pred__22519.call(null,G__22569,G__22570));
})())){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__22388,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__22388),null));
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

com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__22388){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__22388,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__22395){
return (new com.rpl.specter.impl.LateFn14(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__22395),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22395,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13], 0))),null));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k22616,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__22640 = k22616;
var G__22640__$1 = (((G__22640 instanceof cljs.core.Keyword))?G__22640.fqn:null);
switch (G__22640__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22616,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21011){
var self__ = this;
var this__18785__auto____$1 = this;
var G__22651 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21011);
var G__22652 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21011);
var G__22653 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21011);
var G__22654 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21011);
var G__22655 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21011);
var G__22656 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21011);
var G__22657 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21011);
var G__22658 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21011);
var G__22659 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21011);
var G__22660 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21011);
var G__22661 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params21011);
var G__22662 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params21011);
var G__22663 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params21011);
var G__22664 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params21011);
var G__22665 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params21011);
var fexpr__22650 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21011);
return (fexpr__22650.cljs$core$IFn$_invoke$arity$15 ? fexpr__22650.cljs$core$IFn$_invoke$arity$15(G__22651,G__22652,G__22653,G__22654,G__22655,G__22656,G__22657,G__22658,G__22659,G__22660,G__22661,G__22662,G__22663,G__22664,G__22665) : fexpr__22650.call(null,G__22651,G__22652,G__22653,G__22654,G__22655,G__22656,G__22657,G__22658,G__22659,G__22660,G__22661,G__22662,G__22663,G__22664,G__22665));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22615){
var self__ = this;
var G__22615__$1 = this;
return (new cljs.core.RecordIter((0),G__22615__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__22687 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__22687(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22618,other22619){
var self__ = this;
var this22618__$1 = this;
return (!((other22619 == null))) && ((this22618__$1.constructor === other22619.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.fn,other22619.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg0,other22619.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg1,other22619.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg2,other22619.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg3,other22619.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg4,other22619.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg5,other22619.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg6,other22619.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg7,other22619.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg8,other22619.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg9,other22619.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg10,other22619.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg11,other22619.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg12,other22619.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg13,other22619.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.arg14,other22619.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22618__$1.__extmap,other22619.__extmap));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__22615){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__22712 = cljs.core.keyword_identical_QMARK_;
var expr__22713 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__22715 = cljs.core.cst$kw$fn;
var G__22716 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22715,G__22716) : pred__22712.call(null,G__22715,G__22716));
})())){
return (new com.rpl.specter.impl.LateFn15(G__22615,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22717 = cljs.core.cst$kw$arg0;
var G__22718 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22717,G__22718) : pred__22712.call(null,G__22717,G__22718));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__22615,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22719 = cljs.core.cst$kw$arg1;
var G__22720 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22719,G__22720) : pred__22712.call(null,G__22719,G__22720));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__22615,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22721 = cljs.core.cst$kw$arg2;
var G__22722 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22721,G__22722) : pred__22712.call(null,G__22721,G__22722));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__22615,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22725 = cljs.core.cst$kw$arg3;
var G__22726 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22725,G__22726) : pred__22712.call(null,G__22725,G__22726));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__22615,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22729 = cljs.core.cst$kw$arg4;
var G__22730 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22729,G__22730) : pred__22712.call(null,G__22729,G__22730));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__22615,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22732 = cljs.core.cst$kw$arg5;
var G__22733 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22732,G__22733) : pred__22712.call(null,G__22732,G__22733));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__22615,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22734 = cljs.core.cst$kw$arg6;
var G__22735 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22734,G__22735) : pred__22712.call(null,G__22734,G__22735));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__22615,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22736 = cljs.core.cst$kw$arg7;
var G__22737 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22736,G__22737) : pred__22712.call(null,G__22736,G__22737));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__22615,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22738 = cljs.core.cst$kw$arg8;
var G__22739 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22738,G__22739) : pred__22712.call(null,G__22738,G__22739));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__22615,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22740 = cljs.core.cst$kw$arg9;
var G__22741 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22740,G__22741) : pred__22712.call(null,G__22740,G__22741));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__22615,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22743 = cljs.core.cst$kw$arg10;
var G__22744 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22743,G__22744) : pred__22712.call(null,G__22743,G__22744));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__22615,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22748 = cljs.core.cst$kw$arg11;
var G__22749 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22748,G__22749) : pred__22712.call(null,G__22748,G__22749));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__22615,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22752 = cljs.core.cst$kw$arg12;
var G__22753 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22752,G__22753) : pred__22712.call(null,G__22752,G__22753));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__22615,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22756 = cljs.core.cst$kw$arg13;
var G__22757 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22756,G__22757) : pred__22712.call(null,G__22756,G__22757));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__22615,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22760 = cljs.core.cst$kw$arg14;
var G__22761 = expr__22713;
return (pred__22712.cljs$core$IFn$_invoke$arity$2 ? pred__22712.cljs$core$IFn$_invoke$arity$2(G__22760,G__22761) : pred__22712.call(null,G__22760,G__22761));
})())){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__22615,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__22615),null));
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

com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__22615){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__22615,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__22627){
return (new com.rpl.specter.impl.LateFn15(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__22627),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22627,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14], 0))),null));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k22791,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__22803 = k22791;
var G__22803__$1 = (((G__22803 instanceof cljs.core.Keyword))?G__22803.fqn:null);
switch (G__22803__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22791,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21012){
var self__ = this;
var this__18785__auto____$1 = this;
var G__22809 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21012);
var G__22810 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21012);
var G__22811 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21012);
var G__22812 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21012);
var G__22813 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21012);
var G__22814 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21012);
var G__22815 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21012);
var G__22816 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21012);
var G__22817 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21012);
var G__22818 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21012);
var G__22819 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params21012);
var G__22820 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params21012);
var G__22821 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params21012);
var G__22822 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params21012);
var G__22823 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params21012);
var G__22824 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params21012);
var fexpr__22808 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21012);
return (fexpr__22808.cljs$core$IFn$_invoke$arity$16 ? fexpr__22808.cljs$core$IFn$_invoke$arity$16(G__22809,G__22810,G__22811,G__22812,G__22813,G__22814,G__22815,G__22816,G__22817,G__22818,G__22819,G__22820,G__22821,G__22822,G__22823,G__22824) : fexpr__22808.call(null,G__22809,G__22810,G__22811,G__22812,G__22813,G__22814,G__22815,G__22816,G__22817,G__22818,G__22819,G__22820,G__22821,G__22822,G__22823,G__22824));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22790){
var self__ = this;
var G__22790__$1 = this;
return (new cljs.core.RecordIter((0),G__22790__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__22854 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__22854(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22793,other22794){
var self__ = this;
var this22793__$1 = this;
return (!((other22794 == null))) && ((this22793__$1.constructor === other22794.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.fn,other22794.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg0,other22794.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg1,other22794.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg2,other22794.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg3,other22794.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg4,other22794.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg5,other22794.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg6,other22794.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg7,other22794.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg8,other22794.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg9,other22794.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg10,other22794.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg11,other22794.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg12,other22794.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg13,other22794.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg14,other22794.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.arg15,other22794.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22793__$1.__extmap,other22794.__extmap));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__22790){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__22873 = cljs.core.keyword_identical_QMARK_;
var expr__22874 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__22876 = cljs.core.cst$kw$fn;
var G__22877 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22876,G__22877) : pred__22873.call(null,G__22876,G__22877));
})())){
return (new com.rpl.specter.impl.LateFn16(G__22790,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22878 = cljs.core.cst$kw$arg0;
var G__22879 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22878,G__22879) : pred__22873.call(null,G__22878,G__22879));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__22790,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22880 = cljs.core.cst$kw$arg1;
var G__22881 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22880,G__22881) : pred__22873.call(null,G__22880,G__22881));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__22790,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22885 = cljs.core.cst$kw$arg2;
var G__22886 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22885,G__22886) : pred__22873.call(null,G__22885,G__22886));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__22790,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22890 = cljs.core.cst$kw$arg3;
var G__22891 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22890,G__22891) : pred__22873.call(null,G__22890,G__22891));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__22790,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22893 = cljs.core.cst$kw$arg4;
var G__22894 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22893,G__22894) : pred__22873.call(null,G__22893,G__22894));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__22790,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22895 = cljs.core.cst$kw$arg5;
var G__22896 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22895,G__22896) : pred__22873.call(null,G__22895,G__22896));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__22790,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22897 = cljs.core.cst$kw$arg6;
var G__22898 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22897,G__22898) : pred__22873.call(null,G__22897,G__22898));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__22790,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22899 = cljs.core.cst$kw$arg7;
var G__22900 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22899,G__22900) : pred__22873.call(null,G__22899,G__22900));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__22790,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22902 = cljs.core.cst$kw$arg8;
var G__22903 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22902,G__22903) : pred__22873.call(null,G__22902,G__22903));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__22790,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22910 = cljs.core.cst$kw$arg9;
var G__22911 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22910,G__22911) : pred__22873.call(null,G__22910,G__22911));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__22790,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22916 = cljs.core.cst$kw$arg10;
var G__22917 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22916,G__22917) : pred__22873.call(null,G__22916,G__22917));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__22790,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22918 = cljs.core.cst$kw$arg11;
var G__22919 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22918,G__22919) : pred__22873.call(null,G__22918,G__22919));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__22790,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22920 = cljs.core.cst$kw$arg12;
var G__22921 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22920,G__22921) : pred__22873.call(null,G__22920,G__22921));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__22790,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22922 = cljs.core.cst$kw$arg13;
var G__22923 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22922,G__22923) : pred__22873.call(null,G__22922,G__22923));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__22790,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22925 = cljs.core.cst$kw$arg14;
var G__22926 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22925,G__22926) : pred__22873.call(null,G__22925,G__22926));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__22790,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22927 = cljs.core.cst$kw$arg15;
var G__22928 = expr__22874;
return (pred__22873.cljs$core$IFn$_invoke$arity$2 ? pred__22873.cljs$core$IFn$_invoke$arity$2(G__22927,G__22928) : pred__22873.call(null,G__22927,G__22928));
})())){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__22790,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__22790),null));
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

com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__22790){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__22790,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__22798){
return (new com.rpl.specter.impl.LateFn16(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__22798),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__22798),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22798,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15], 0))),null));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k22952,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__22967 = k22952;
var G__22967__$1 = (((G__22967 instanceof cljs.core.Keyword))?G__22967.fqn:null);
switch (G__22967__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22952,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21013){
var self__ = this;
var this__18785__auto____$1 = this;
var G__22970 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21013);
var G__22971 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21013);
var G__22972 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21013);
var G__22974 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21013);
var G__22975 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21013);
var G__22976 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21013);
var G__22977 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21013);
var G__22978 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21013);
var G__22979 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21013);
var G__22980 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21013);
var G__22981 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params21013);
var G__22982 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params21013);
var G__22983 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params21013);
var G__22984 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params21013);
var G__22985 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params21013);
var G__22986 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params21013);
var G__22987 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params21013);
var fexpr__22969 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21013);
return (fexpr__22969.cljs$core$IFn$_invoke$arity$17 ? fexpr__22969.cljs$core$IFn$_invoke$arity$17(G__22970,G__22971,G__22972,G__22974,G__22975,G__22976,G__22977,G__22978,G__22979,G__22980,G__22981,G__22982,G__22983,G__22984,G__22985,G__22986,G__22987) : fexpr__22969.call(null,G__22970,G__22971,G__22972,G__22974,G__22975,G__22976,G__22977,G__22978,G__22979,G__22980,G__22981,G__22982,G__22983,G__22984,G__22985,G__22986,G__22987));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22951){
var self__ = this;
var G__22951__$1 = this;
return (new cljs.core.RecordIter((0),G__22951__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__23018 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__23018(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22953,other22954){
var self__ = this;
var this22953__$1 = this;
return (!((other22954 == null))) && ((this22953__$1.constructor === other22954.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.fn,other22954.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg0,other22954.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg1,other22954.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg2,other22954.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg3,other22954.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg4,other22954.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg5,other22954.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg6,other22954.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg7,other22954.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg8,other22954.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg9,other22954.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg10,other22954.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg11,other22954.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg12,other22954.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg13,other22954.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg14,other22954.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg15,other22954.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.arg16,other22954.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22953__$1.__extmap,other22954.__extmap));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__22951){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__23049 = cljs.core.keyword_identical_QMARK_;
var expr__23050 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__23052 = cljs.core.cst$kw$fn;
var G__23053 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23052,G__23053) : pred__23049.call(null,G__23052,G__23053));
})())){
return (new com.rpl.specter.impl.LateFn17(G__22951,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23054 = cljs.core.cst$kw$arg0;
var G__23055 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23054,G__23055) : pred__23049.call(null,G__23054,G__23055));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__22951,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23057 = cljs.core.cst$kw$arg1;
var G__23059 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23057,G__23059) : pred__23049.call(null,G__23057,G__23059));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__22951,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23061 = cljs.core.cst$kw$arg2;
var G__23062 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23061,G__23062) : pred__23049.call(null,G__23061,G__23062));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__22951,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23065 = cljs.core.cst$kw$arg3;
var G__23066 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23065,G__23066) : pred__23049.call(null,G__23065,G__23066));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__22951,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23068 = cljs.core.cst$kw$arg4;
var G__23069 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23068,G__23069) : pred__23049.call(null,G__23068,G__23069));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__22951,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23070 = cljs.core.cst$kw$arg5;
var G__23071 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23070,G__23071) : pred__23049.call(null,G__23070,G__23071));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__22951,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23073 = cljs.core.cst$kw$arg6;
var G__23074 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23073,G__23074) : pred__23049.call(null,G__23073,G__23074));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__22951,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23075 = cljs.core.cst$kw$arg7;
var G__23076 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23075,G__23076) : pred__23049.call(null,G__23075,G__23076));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__22951,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23077 = cljs.core.cst$kw$arg8;
var G__23078 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23077,G__23078) : pred__23049.call(null,G__23077,G__23078));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__22951,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23082 = cljs.core.cst$kw$arg9;
var G__23083 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23082,G__23083) : pred__23049.call(null,G__23082,G__23083));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__22951,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23086 = cljs.core.cst$kw$arg10;
var G__23087 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23086,G__23087) : pred__23049.call(null,G__23086,G__23087));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__22951,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23088 = cljs.core.cst$kw$arg11;
var G__23089 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23088,G__23089) : pred__23049.call(null,G__23088,G__23089));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__22951,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23090 = cljs.core.cst$kw$arg12;
var G__23091 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23090,G__23091) : pred__23049.call(null,G__23090,G__23091));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__22951,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23092 = cljs.core.cst$kw$arg13;
var G__23093 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23092,G__23093) : pred__23049.call(null,G__23092,G__23093));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__22951,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23094 = cljs.core.cst$kw$arg14;
var G__23095 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23094,G__23095) : pred__23049.call(null,G__23094,G__23095));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__22951,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23098 = cljs.core.cst$kw$arg15;
var G__23099 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23098,G__23099) : pred__23049.call(null,G__23098,G__23099));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__22951,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23103 = cljs.core.cst$kw$arg16;
var G__23104 = expr__23050;
return (pred__23049.cljs$core$IFn$_invoke$arity$2 ? pred__23049.cljs$core$IFn$_invoke$arity$2(G__23103,G__23104) : pred__23049.call(null,G__23103,G__23104));
})())){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__22951,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__22951),null));
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

com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__22951){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__22951,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__22957){
return (new com.rpl.specter.impl.LateFn17(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__22957),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__22957),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22957,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16], 0))),null));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k23138,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__23147 = k23138;
var G__23147__$1 = (((G__23147 instanceof cljs.core.Keyword))?G__23147.fqn:null);
switch (G__23147__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23138,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21014){
var self__ = this;
var this__18785__auto____$1 = this;
var G__23151 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21014);
var G__23152 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21014);
var G__23153 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21014);
var G__23154 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21014);
var G__23155 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21014);
var G__23156 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21014);
var G__23157 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21014);
var G__23158 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21014);
var G__23159 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21014);
var G__23160 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21014);
var G__23161 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params21014);
var G__23162 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params21014);
var G__23163 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params21014);
var G__23164 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params21014);
var G__23165 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params21014);
var G__23166 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params21014);
var G__23167 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params21014);
var G__23168 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params21014);
var fexpr__23150 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21014);
return (fexpr__23150.cljs$core$IFn$_invoke$arity$18 ? fexpr__23150.cljs$core$IFn$_invoke$arity$18(G__23151,G__23152,G__23153,G__23154,G__23155,G__23156,G__23157,G__23158,G__23159,G__23160,G__23161,G__23162,G__23163,G__23164,G__23165,G__23166,G__23167,G__23168) : fexpr__23150.call(null,G__23151,G__23152,G__23153,G__23154,G__23155,G__23156,G__23157,G__23158,G__23159,G__23160,G__23161,G__23162,G__23163,G__23164,G__23165,G__23166,G__23167,G__23168));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23137){
var self__ = this;
var G__23137__$1 = this;
return (new cljs.core.RecordIter((0),G__23137__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__23195 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__23195(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23139,other23140){
var self__ = this;
var this23139__$1 = this;
return (!((other23140 == null))) && ((this23139__$1.constructor === other23140.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.fn,other23140.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg0,other23140.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg1,other23140.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg2,other23140.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg3,other23140.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg4,other23140.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg5,other23140.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg6,other23140.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg7,other23140.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg8,other23140.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg9,other23140.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg10,other23140.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg11,other23140.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg12,other23140.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg13,other23140.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg14,other23140.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg15,other23140.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg16,other23140.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.arg17,other23140.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23139__$1.__extmap,other23140.__extmap));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__23137){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__23211 = cljs.core.keyword_identical_QMARK_;
var expr__23212 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__23214 = cljs.core.cst$kw$fn;
var G__23215 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23214,G__23215) : pred__23211.call(null,G__23214,G__23215));
})())){
return (new com.rpl.specter.impl.LateFn18(G__23137,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23216 = cljs.core.cst$kw$arg0;
var G__23217 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23216,G__23217) : pred__23211.call(null,G__23216,G__23217));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__23137,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23220 = cljs.core.cst$kw$arg1;
var G__23221 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23220,G__23221) : pred__23211.call(null,G__23220,G__23221));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__23137,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23224 = cljs.core.cst$kw$arg2;
var G__23225 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23224,G__23225) : pred__23211.call(null,G__23224,G__23225));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__23137,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23227 = cljs.core.cst$kw$arg3;
var G__23228 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23227,G__23228) : pred__23211.call(null,G__23227,G__23228));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__23137,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23229 = cljs.core.cst$kw$arg4;
var G__23230 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23229,G__23230) : pred__23211.call(null,G__23229,G__23230));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__23137,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23232 = cljs.core.cst$kw$arg5;
var G__23233 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23232,G__23233) : pred__23211.call(null,G__23232,G__23233));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__23137,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23238 = cljs.core.cst$kw$arg6;
var G__23239 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23238,G__23239) : pred__23211.call(null,G__23238,G__23239));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__23137,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23246 = cljs.core.cst$kw$arg7;
var G__23247 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23246,G__23247) : pred__23211.call(null,G__23246,G__23247));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__23137,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23250 = cljs.core.cst$kw$arg8;
var G__23251 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23250,G__23251) : pred__23211.call(null,G__23250,G__23251));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__23137,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23253 = cljs.core.cst$kw$arg9;
var G__23254 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23253,G__23254) : pred__23211.call(null,G__23253,G__23254));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__23137,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23255 = cljs.core.cst$kw$arg10;
var G__23256 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23255,G__23256) : pred__23211.call(null,G__23255,G__23256));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__23137,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23257 = cljs.core.cst$kw$arg11;
var G__23258 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23257,G__23258) : pred__23211.call(null,G__23257,G__23258));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__23137,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23260 = cljs.core.cst$kw$arg12;
var G__23261 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23260,G__23261) : pred__23211.call(null,G__23260,G__23261));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__23137,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23263 = cljs.core.cst$kw$arg13;
var G__23264 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23263,G__23264) : pred__23211.call(null,G__23263,G__23264));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__23137,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23268 = cljs.core.cst$kw$arg14;
var G__23269 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23268,G__23269) : pred__23211.call(null,G__23268,G__23269));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__23137,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23271 = cljs.core.cst$kw$arg15;
var G__23272 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23271,G__23272) : pred__23211.call(null,G__23271,G__23272));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__23137,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23274 = cljs.core.cst$kw$arg16;
var G__23275 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23274,G__23275) : pred__23211.call(null,G__23274,G__23275));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__23137,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23277 = cljs.core.cst$kw$arg17;
var G__23278 = expr__23212;
return (pred__23211.cljs$core$IFn$_invoke$arity$2 ? pred__23211.cljs$core$IFn$_invoke$arity$2(G__23277,G__23278) : pred__23211.call(null,G__23277,G__23278));
})())){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__23137,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__23137),null));
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

com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__23137){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__23137,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__23145){
return (new com.rpl.specter.impl.LateFn18(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__23145),cljs.core.cst$kw$arg17.cljs$core$IFn$_invoke$arity$1(G__23145),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23145,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17], 0))),null));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k23303,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__23309 = k23303;
var G__23309__$1 = (((G__23309 instanceof cljs.core.Keyword))?G__23309.fqn:null);
switch (G__23309__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23303,else__11103__auto__);

}
});

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__18785__auto__,dynamic_params21015){
var self__ = this;
var this__18785__auto____$1 = this;
var G__23313 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params21015);
var G__23315 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params21015);
var G__23316 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params21015);
var G__23317 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params21015);
var G__23318 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params21015);
var G__23319 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params21015);
var G__23320 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params21015);
var G__23321 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params21015);
var G__23322 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params21015);
var G__23323 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params21015);
var G__23324 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params21015);
var G__23325 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params21015);
var G__23326 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params21015);
var G__23327 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params21015);
var G__23328 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params21015);
var G__23329 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params21015);
var G__23330 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params21015);
var G__23331 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params21015);
var G__23332 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params21015);
var fexpr__23312 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params21015);
return (fexpr__23312.cljs$core$IFn$_invoke$arity$19 ? fexpr__23312.cljs$core$IFn$_invoke$arity$19(G__23313,G__23315,G__23316,G__23317,G__23318,G__23319,G__23320,G__23321,G__23322,G__23323,G__23324,G__23325,G__23326,G__23327,G__23328,G__23329,G__23330,G__23331,G__23332) : fexpr__23312.call(null,G__23313,G__23315,G__23316,G__23317,G__23318,G__23319,G__23320,G__23321,G__23322,G__23323,G__23324,G__23325,G__23326,G__23327,G__23328,G__23329,G__23330,G__23331,G__23332));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23302){
var self__ = this;
var G__23302__$1 = this;
return (new cljs.core.RecordIter((0),G__23302__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17,cljs.core.cst$kw$arg18], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__23346 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__23346(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23304,other23305){
var self__ = this;
var this23304__$1 = this;
return (!((other23305 == null))) && ((this23304__$1.constructor === other23305.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.fn,other23305.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg0,other23305.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg1,other23305.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg2,other23305.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg3,other23305.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg4,other23305.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg5,other23305.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg6,other23305.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg7,other23305.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg8,other23305.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg9,other23305.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg10,other23305.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg11,other23305.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg12,other23305.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg13,other23305.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg14,other23305.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg15,other23305.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg16,other23305.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg17,other23305.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.arg18,other23305.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.__extmap,other23305.__extmap));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__23302){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__23363 = cljs.core.keyword_identical_QMARK_;
var expr__23364 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__23368 = cljs.core.cst$kw$fn;
var G__23369 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23368,G__23369) : pred__23363.call(null,G__23368,G__23369));
})())){
return (new com.rpl.specter.impl.LateFn19(G__23302,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23370 = cljs.core.cst$kw$arg0;
var G__23371 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23370,G__23371) : pred__23363.call(null,G__23370,G__23371));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__23302,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23372 = cljs.core.cst$kw$arg1;
var G__23373 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23372,G__23373) : pred__23363.call(null,G__23372,G__23373));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__23302,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23374 = cljs.core.cst$kw$arg2;
var G__23375 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23374,G__23375) : pred__23363.call(null,G__23374,G__23375));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__23302,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23376 = cljs.core.cst$kw$arg3;
var G__23377 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23376,G__23377) : pred__23363.call(null,G__23376,G__23377));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__23302,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23378 = cljs.core.cst$kw$arg4;
var G__23379 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23378,G__23379) : pred__23363.call(null,G__23378,G__23379));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__23302,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23380 = cljs.core.cst$kw$arg5;
var G__23381 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23380,G__23381) : pred__23363.call(null,G__23380,G__23381));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__23302,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23383 = cljs.core.cst$kw$arg6;
var G__23384 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23383,G__23384) : pred__23363.call(null,G__23383,G__23384));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__23302,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23386 = cljs.core.cst$kw$arg7;
var G__23387 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23386,G__23387) : pred__23363.call(null,G__23386,G__23387));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__23302,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23390 = cljs.core.cst$kw$arg8;
var G__23391 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23390,G__23391) : pred__23363.call(null,G__23390,G__23391));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__23302,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23394 = cljs.core.cst$kw$arg9;
var G__23395 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23394,G__23395) : pred__23363.call(null,G__23394,G__23395));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__23302,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23398 = cljs.core.cst$kw$arg10;
var G__23399 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23398,G__23399) : pred__23363.call(null,G__23398,G__23399));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__23302,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23402 = cljs.core.cst$kw$arg11;
var G__23403 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23402,G__23403) : pred__23363.call(null,G__23402,G__23403));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__23302,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23404 = cljs.core.cst$kw$arg12;
var G__23405 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23404,G__23405) : pred__23363.call(null,G__23404,G__23405));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__23302,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23406 = cljs.core.cst$kw$arg13;
var G__23407 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23406,G__23407) : pred__23363.call(null,G__23406,G__23407));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__23302,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23408 = cljs.core.cst$kw$arg14;
var G__23409 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23408,G__23409) : pred__23363.call(null,G__23408,G__23409));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__23302,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23411 = cljs.core.cst$kw$arg15;
var G__23412 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23411,G__23412) : pred__23363.call(null,G__23411,G__23412));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__23302,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23417 = cljs.core.cst$kw$arg16;
var G__23418 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23417,G__23418) : pred__23363.call(null,G__23417,G__23418));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__23302,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23425 = cljs.core.cst$kw$arg17;
var G__23426 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23425,G__23426) : pred__23363.call(null,G__23425,G__23426));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__23302,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23427 = cljs.core.cst$kw$arg18;
var G__23428 = expr__23364;
return (pred__23363.cljs$core$IFn$_invoke$arity$2 ? pred__23363.cljs$core$IFn$_invoke$arity$2(G__23427,G__23428) : pred__23363.call(null,G__23427,G__23428));
})())){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__23302,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__23302),null));
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

com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__23302){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__23302,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__23306){
return (new com.rpl.specter.impl.LateFn19(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg0.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg4.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg5.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg6.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg7.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg8.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg9.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg10.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg11.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg12.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg13.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg14.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg15.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg16.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg17.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$arg18.cljs$core$IFn$_invoke$arity$1(G__23306),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23306,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arg0,cljs.core.cst$kw$arg1,cljs.core.cst$kw$arg2,cljs.core.cst$kw$arg3,cljs.core.cst$kw$arg4,cljs.core.cst$kw$arg5,cljs.core.cst$kw$arg6,cljs.core.cst$kw$arg7,cljs.core.cst$kw$arg8,cljs.core.cst$kw$arg9,cljs.core.cst$kw$arg10,cljs.core.cst$kw$arg11,cljs.core.cst$kw$arg12,cljs.core.cst$kw$arg13,cljs.core.cst$kw$arg14,cljs.core.cst$kw$arg15,cljs.core.cst$kw$arg16,cljs.core.cst$kw$arg17,cljs.core.cst$kw$arg18], 0))),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn23440,args23441){
var G__23444 = cljs.core.count(args23441);
switch (G__23444) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn23440);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn23440,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args23441,(17)));

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
var vec__25624 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25624,(0),null);
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
var op = (function (){var G__25648 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(o);
var G__25649 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__25648,G__25649) : com.rpl.specter.impl.resolve_arg_code.call(null,G__25648,G__25649));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (op){
return (function (p1__25644_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__25644_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null,p1__25644_SHARP_,possible_params));
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
var G__25658 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__25659 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__25658,G__25659) : com.rpl.specter.impl.resolve_arg_code.call(null,G__25658,G__25659));
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
return (function (p1__25678_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__25678_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,p1__25678_SHARP_,possible_params));
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
return (function (p1__25712_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25712_SHARP_,e);
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
var len__11691__auto___25747 = arguments.length;
var i__11692__auto___25748 = (0);
while(true){
if((i__11692__auto___25748 < len__11691__auto___25747)){
args__11698__auto__.push((arguments[i__11692__auto___25748]));

var G__25749 = (i__11692__auto___25748 + (1));
i__11692__auto___25748 = G__25749;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__25730){
var map__25731 = p__25730;
var map__25731__$1 = ((((!((map__25731 == null)))?((((map__25731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25731):map__25731);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25731__$1,cljs.core.cst$kw$merge_DASH_fn,cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,((function (state,map__25731,map__25731__$1,merge_fn){
return (function() { 
var G__25751__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__25734 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25734,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25734,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__25744 = com.rpl.specter.impl.get_cell(state);
var G__25745 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__25744,G__25745) : merge_fn.call(null,G__25744,G__25745));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__25751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25753__i = 0, G__25753__a = new Array(arguments.length -  0);
while (G__25753__i < G__25753__a.length) {G__25753__a[G__25753__i] = arguments[G__25753__i + 0]; ++G__25753__i;}
  args = new cljs.core.IndexedSeq(G__25753__a,0,null);
} 
return G__25751__delegate.call(this,args);};
G__25751.cljs$lang$maxFixedArity = 0;
G__25751.cljs$lang$applyTo = (function (arglist__25754){
var args = cljs.core.seq(arglist__25754);
return G__25751__delegate(args);
});
G__25751.cljs$core$IFn$_invoke$arity$variadic = G__25751__delegate;
return G__25751;
})()
;})(state,map__25731,map__25731__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell(state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq25726){
var G__25727 = cljs.core.first(seq25726);
var seq25726__$1 = cljs.core.next(seq25726);
var G__25728 = cljs.core.first(seq25726__$1);
var seq25726__$2 = cljs.core.next(seq25726__$1);
var G__25729 = cljs.core.first(seq25726__$2);
var seq25726__$3 = cljs.core.next(seq25726__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__25727,G__25728,G__25729,seq25726__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__11698__auto__ = [];
var len__11691__auto___25761 = arguments.length;
var i__11692__auto___25762 = (0);
while(true){
if((i__11692__auto___25762 < len__11691__auto___25761)){
args__11698__auto__.push((arguments[i__11692__auto___25762]));

var G__25763 = (i__11692__auto___25762 + (1));
i__11692__auto___25762 = G__25763;
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

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq25756){
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25756));
});

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

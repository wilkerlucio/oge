// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return cljs.core.not(com.rpl.specter.impl.dynamic_param_QMARK_(path));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__31920__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.sequential_QMARK_(ret);
if(and__10400__auto__){
return com.rpl.specter.static_path_QMARK_(ret);
} else {
return and__10400__auto__;
}
})())){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret)))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__31920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31921__i = 0, G__31921__a = new Array(arguments.length -  0);
while (G__31921__i < G__31921__a.length) {G__31921__a[G__31921__i] = arguments[G__31921__i + 0]; ++G__31921__i;}
  args = new cljs.core.IndexedSeq(G__31921__a,0,null);
} 
return G__31920__delegate.call(this,args);};
G__31920.cljs$lang$maxFixedArity = 0;
G__31920.cljs$lang$applyTo = (function (arglist__31922){
var args = cljs.core.seq(arglist__31922);
return G__31920__delegate(args);
});
G__31920.cljs$core$IFn$_invoke$arity$variadic = G__31920__delegate;
return G__31920;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__11698__auto__ = [];
var len__11691__auto___31939 = arguments.length;
var i__11692__auto___31940 = (0);
while(true){
if((i__11692__auto___31940 < len__11691__auto___31939)){
args__11698__auto__.push((arguments[i__11692__auto___31940]));

var G__31941 = (i__11692__auto___31940 + (1));
i__11692__auto___31940 = G__31941;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq31938){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31938));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__31942 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31943 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__31942,G__31943) : com.rpl.specter.compiled_select.call(null,G__31942,G__31943));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__31944 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31945 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__31944,G__31945) : com.rpl.specter.compiled_select_one.call(null,G__31944,G__31945));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__31946 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31947 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__31946,G__31947) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__31946,G__31947));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__31948 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31949 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__31948,G__31949) : com.rpl.specter.compiled_select_first.call(null,G__31948,G__31949));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__31950 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31951 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__31950,G__31951) : com.rpl.specter.compiled_select_any.call(null,G__31950,G__31951));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__31952 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31953 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__31952,G__31953) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__31952,G__31953));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__31954 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__31955 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__31954,G__31955) : com.rpl.specter.compiled_traverse.call(null,G__31954,G__31955));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__31956 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__31956) : com.rpl.specter.compiled_traverse_all.call(null,G__31956));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__31957 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31958 = transform_fn;
var G__31959 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__31957,G__31958,G__31959) : com.rpl.specter.compiled_transform.call(null,G__31957,G__31958,G__31959));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal`. Error is thrown if navigation finishes
 * at a non-`terminal` navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__31960 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31961 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__31960,G__31961) : com.rpl.specter.compiled_multi_transform.call(null,G__31960,G__31961));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__31962 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31963 = val;
var G__31964 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__31962,G__31963,G__31964) : com.rpl.specter.compiled_setval.call(null,G__31962,G__31963,G__31964));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___31977 = arguments.length;
var i__11692__auto___31978 = (0);
while(true){
if((i__11692__auto___31978 < len__11691__auto___31977)){
args__11698__auto__.push((arguments[i__11692__auto___31978]));

var G__31979 = (i__11692__auto___31978 + (1));
i__11692__auto___31978 = G__31979;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__31969){
var map__31970 = p__31969;
var map__31970__$1 = ((((!((map__31970 == null)))?((((map__31970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31970):map__31970);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31970__$1,cljs.core.cst$kw$merge_DASH_fn,cljs.core.concat);
var G__31972 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__31973 = transform_fn;
var G__31974 = structure;
var G__31975 = cljs.core.cst$kw$merge_DASH_fn;
var G__31976 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__31972,G__31973,G__31974,G__31975,G__31976) : com.rpl.specter.compiled_replace_in.call(null,G__31972,G__31973,G__31974,G__31975,G__31976));
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq31965){
var G__31966 = cljs.core.first(seq31965);
var seq31965__$1 = cljs.core.next(seq31965);
var G__31967 = cljs.core.first(seq31965__$1);
var seq31965__$2 = cljs.core.next(seq31965__$1);
var G__31968 = cljs.core.first(seq31965__$2);
var seq31965__$3 = cljs.core.next(seq31965__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__31966,G__31967,G__31968,seq31965__$3);
});

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav(((function (latenavfn){
return (function() { 
var G__31980__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__31980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31981__i = 0, G__31981__a = new Array(arguments.length -  0);
while (G__31981__i < G__31981__a.length) {G__31981__a[G__31981__i] = arguments[G__31981__i + 0]; ++G__31981__i;}
  args = new cljs.core.IndexedSeq(G__31981__a,0,null);
} 
return G__31980__delegate.call(this,args);};
G__31980.cljs$lang$maxFixedArity = 0;
G__31980.cljs$lang$applyTo = (function (arglist__31982){
var args = cljs.core.seq(arglist__31982);
return G__31980__delegate(args);
});
G__31980.cljs$core$IFn$_invoke$arity$variadic = G__31980__delegate;
return G__31980;
})()
;})(latenavfn))
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter31983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter31983 = (function (meta31984){
this.meta31984 = meta31984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter31983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31985,meta31984__$1){
var self__ = this;
var _31985__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter31983(meta31984__$1));
});


com.rpl.specter.t_com$rpl$specter31983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31985){
var self__ = this;
var _31985__$1 = this;
return self__.meta31984;
});


com.rpl.specter.t_com$rpl$specter31983.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter31983.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return com.rpl.specter.NONE;
});


com.rpl.specter.t_com$rpl$specter31983.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter31983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta31984], null);
});

com.rpl.specter.t_com$rpl$specter31983.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter31983.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter31983";

com.rpl.specter.t_com$rpl$specter31983.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter31983");
});

com.rpl.specter.__GT_t_com$rpl$specter31983 = (function com$rpl$specter$__GT_t_com$rpl$specter31983(meta31984){
return (new com.rpl.specter.t_com$rpl$specter31983(meta31984));
});

}

return (new com.rpl.specter.t_com$rpl$specter31983(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * For usage with `multi-transform`, defines an endpoint in the navigation
 *        that will have the parameterized transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter31986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter31986 = (function (afn,meta31987){
this.afn = afn;
this.meta31987 = meta31987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter31986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31988,meta31987__$1){
var self__ = this;
var _31988__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter31986(self__.afn,meta31987__$1));
});


com.rpl.specter.t_com$rpl$specter31986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31988){
var self__ = this;
var _31988__$1 = this;
return self__.meta31987;
});


com.rpl.specter.t_com$rpl$specter31986.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter31986.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["'terminal' should only be used in multi-transform"], 0))));
});


com.rpl.specter.t_com$rpl$specter31986.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter31986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta31987], null);
});

com.rpl.specter.t_com$rpl$specter31986.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter31986.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter31986";

com.rpl.specter.t_com$rpl$specter31986.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter31986");
});

com.rpl.specter.__GT_t_com$rpl$specter31986 = (function com$rpl$specter$__GT_t_com$rpl$specter31986(afn__$1,meta31987){
return (new com.rpl.specter.t_com$rpl$specter31986(afn__$1,meta31987));
});

}

return (new com.rpl.specter.t_com$rpl$specter31986(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__31989 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__31989) : com.rpl.specter.terminal.call(null,G__31989));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter31990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter31990 = (function (meta31991){
this.meta31991 = meta31991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter31990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31992,meta31991__$1){
var self__ = this;
var _31992__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter31990(meta31991__$1));
});


com.rpl.specter.t_com$rpl$specter31990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31992){
var self__ = this;
var _31992__$1 = this;
return self__.meta31991;
});


com.rpl.specter.t_com$rpl$specter31990.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter31990.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});


com.rpl.specter.t_com$rpl$specter31990.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter31990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta31991], null);
});

com.rpl.specter.t_com$rpl$specter31990.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter31990.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter31990";

com.rpl.specter.t_com$rpl$specter31990.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter31990");
});

com.rpl.specter.__GT_t_com$rpl$specter31990 = (function com$rpl$specter$__GT_t_com$rpl$specter31990(meta31991){
return (new com.rpl.specter.t_com$rpl$specter31990(meta31991));
});

}

return (new com.rpl.specter.t_com$rpl$specter31990(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if(!((res == null))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter31993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter31993 = (function (meta31994){
this.meta31994 = meta31994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter31993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31995,meta31994__$1){
var self__ = this;
var _31995__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter31993(meta31994__$1));
});


com.rpl.specter.t_com$rpl$specter31993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31995){
var self__ = this;
var _31995__$1 = this;
return self__.meta31994;
});


com.rpl.specter.t_com$rpl$specter31993.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter31993.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});


com.rpl.specter.t_com$rpl$specter31993.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if(!((res == null))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

com.rpl.specter.t_com$rpl$specter31993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta31994], null);
});

com.rpl.specter.t_com$rpl$specter31993.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter31993.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter31993";

com.rpl.specter.t_com$rpl$specter31993.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter31993");
});

com.rpl.specter.__GT_t_com$rpl$specter31993 = (function com$rpl$specter$__GT_t_com$rpl$specter31993(meta31994){
return (new com.rpl.specter.t_com$rpl$specter31993(meta31994));
});

}

return (new com.rpl.specter.t_com$rpl$specter31993(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__23608__auto__,v){
var ret__23609__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__23609__auto__ === com.rpl.specter.NONE)){
return curr__23608__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__23609__auto__)){
return cljs.core.reduced(ret__23609__auto__);
} else {
return ret__23609__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter31996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter31996 = (function (meta31997){
this.meta31997 = meta31997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter31996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31998,meta31997__$1){
var self__ = this;
var _31998__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter31996(meta31997__$1));
});


com.rpl.specter.t_com$rpl$specter31996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31998){
var self__ = this;
var _31998__$1 = this;
return self__.meta31997;
});


com.rpl.specter.t_com$rpl$specter31996.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter31996.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__30396__auto____$1){
return (function (curr__23608__auto__,v){
var ret__23609__auto__ = next_fn(v);
if((ret__23609__auto__ === com.rpl.specter.NONE)){
return curr__23608__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__23609__auto__)){
return cljs.core.reduced(ret__23609__auto__);
} else {
return ret__23609__auto__;
}
}
});})(next_fn,this__30396__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals(structure));
});


com.rpl.specter.t_com$rpl$specter31996.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter31996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta31997], null);
});

com.rpl.specter.t_com$rpl$specter31996.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter31996.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter31996";

com.rpl.specter.t_com$rpl$specter31996.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter31996");
});

com.rpl.specter.__GT_t_com$rpl$specter31996 = (function com$rpl$specter$__GT_t_com$rpl$specter31996(meta31997){
return (new com.rpl.specter.t_com$rpl$specter31996(meta31997));
});

}

return (new com.rpl.specter.t_com$rpl$specter31996(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__23608__auto__,k){
var ret__23609__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__23609__auto__ === com.rpl.specter.NONE)){
return curr__23608__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__23609__auto__)){
return cljs.core.reduced(ret__23609__auto__);
} else {
return ret__23609__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter31999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter31999 = (function (meta32000){
this.meta32000 = meta32000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter31999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32001,meta32000__$1){
var self__ = this;
var _32001__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter31999(meta32000__$1));
});


com.rpl.specter.t_com$rpl$specter31999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32001){
var self__ = this;
var _32001__$1 = this;
return self__.meta32000;
});


com.rpl.specter.t_com$rpl$specter31999.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter31999.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__30396__auto____$1){
return (function (curr__23608__auto__,k){
var ret__23609__auto__ = next_fn(k);
if((ret__23609__auto__ === com.rpl.specter.NONE)){
return curr__23608__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__23609__auto__)){
return cljs.core.reduced(ret__23609__auto__);
} else {
return ret__23609__auto__;
}
}
});})(next_fn,this__30396__auto____$1))
,com.rpl.specter.NONE,cljs.core.keys(structure));
});


com.rpl.specter.t_com$rpl$specter31999.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter31999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32000], null);
});

com.rpl.specter.t_com$rpl$specter31999.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter31999.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter31999";

com.rpl.specter.t_com$rpl$specter31999.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter31999");
});

com.rpl.specter.__GT_t_com$rpl$specter31999 = (function com$rpl$specter$__GT_t_com$rpl$specter31999(meta32000){
return (new com.rpl.specter.t_com$rpl$specter31999(meta32000));
});

}

return (new com.rpl.specter.t_com$rpl$specter31999(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32002 = (function (meta32003){
this.meta32003 = meta32003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32004,meta32003__$1){
var self__ = this;
var _32004__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32002(meta32003__$1));
});


com.rpl.specter.t_com$rpl$specter32002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32004){
var self__ = this;
var _32004__$1 = this;
return self__.meta32003;
});


com.rpl.specter.t_com$rpl$specter32002.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32002.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__31003__auto__,vals__31004__auto__,structure,next_fn__31005__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
var G__32005 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__31004__auto__,structure);
var G__32006 = structure;
return (next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2(G__32005,G__32006) : next_fn__31005__auto__.call(null,G__32005,G__32006));
});


com.rpl.specter.t_com$rpl$specter32002.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__31003__auto__,vals__31004__auto__,structure,next_fn__31005__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
var G__32007 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__31004__auto__,structure);
var G__32008 = structure;
return (next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2(G__32007,G__32008) : next_fn__31005__auto__.call(null,G__32007,G__32008));
});

com.rpl.specter.t_com$rpl$specter32002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32003], null);
});

com.rpl.specter.t_com$rpl$specter32002.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32002.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32002";

com.rpl.specter.t_com$rpl$specter32002.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32002");
});

com.rpl.specter.__GT_t_com$rpl$specter32002 = (function com$rpl$specter$__GT_t_com$rpl$specter32002(meta32003){
return (new com.rpl.specter.t_com$rpl$specter32002(meta32003));
});

}

return (new com.rpl.specter.t_com$rpl$specter32002(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__32009 = structure;
var G__32010 = s;
var G__32011 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__32012 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__32009,G__32010,G__32011,G__32012) : com.rpl.specter.navs.srange_transform.call(null,G__32009,G__32010,G__32011,G__32012));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if(typeof com.rpl.specter.t_com$rpl$specter32013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32013 = (function (start_index_fn,end_index_fn,meta32014){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta32014 = meta32014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32015,meta32014__$1){
var self__ = this;
var _32015__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32013(self__.start_index_fn,self__.end_index_fn,meta32014__$1));
});


com.rpl.specter.t_com$rpl$specter32013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32015){
var self__ = this;
var _32015__$1 = this;
return self__.meta32014;
});


com.rpl.specter.t_com$rpl$specter32013.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32013.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
});


com.rpl.specter.t_com$rpl$specter32013.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__32016 = structure;
var G__32017 = s;
var G__32018 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__32019 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__32016,G__32017,G__32018,G__32019) : com.rpl.specter.navs.srange_transform.call(null,G__32016,G__32017,G__32018,G__32019));
});

com.rpl.specter.t_com$rpl$specter32013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start_DASH_index_DASH_fn,cljs.core.cst$sym$end_DASH_index_DASH_fn,cljs.core.cst$sym$meta32014], null);
});

com.rpl.specter.t_com$rpl$specter32013.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32013.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32013";

com.rpl.specter.t_com$rpl$specter32013.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32013");
});

com.rpl.specter.__GT_t_com$rpl$specter32013 = (function com$rpl$specter$__GT_t_com$rpl$specter32013(start_index_fn__$1,end_index_fn__$1,meta32014){
return (new com.rpl.specter.t_com$rpl$specter32013(start_index_fn__$1,end_index_fn__$1,meta32014));
});

}

return (new com.rpl.specter.t_com$rpl$specter32013(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
if(typeof com.rpl.specter.t_com$rpl$specter32020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32020 = (function (start,end,meta32021){
this.start = start;
this.end = end;
this.meta32021 = meta32021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32022,meta32021__$1){
var self__ = this;
var _32022__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32020(self__.start,self__.end,meta32021__$1));
});


com.rpl.specter.t_com$rpl$specter32020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32022){
var self__ = this;
var _32022__$1 = this;
return self__.meta32021;
});


com.rpl.specter.t_com$rpl$specter32020.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32020.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
});


com.rpl.specter.t_com$rpl$specter32020.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
});

com.rpl.specter.t_com$rpl$specter32020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$end,cljs.core.cst$sym$meta32021], null);
});

com.rpl.specter.t_com$rpl$specter32020.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32020.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32020";

com.rpl.specter.t_com$rpl$specter32020.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32020");
});

com.rpl.specter.__GT_t_com$rpl$specter32020 = (function com$rpl$specter$__GT_t_com$rpl$specter32020(start__$1,end__$1,meta32021){
return (new com.rpl.specter.t_com$rpl$specter32020(start__$1,end__$1,meta32021));
});

}

return (new com.rpl.specter.t_com$rpl$specter32020(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__23608__auto__,p__32023){
var vec__32024 = p__32023;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32024,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32024,(1),null);
var ret__23609__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__23609__auto__ === com.rpl.specter.NONE)){
return curr__23608__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__23609__auto__)){
return cljs.core.reduced(ret__23609__auto__);
} else {
return ret__23609__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
if(typeof com.rpl.specter.t_com$rpl$specter32027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32027 = (function (pred,meta32028){
this.pred = pred;
this.meta32028 = meta32028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32029,meta32028__$1){
var self__ = this;
var _32029__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32027(self__.pred,meta32028__$1));
});


com.rpl.specter.t_com$rpl$specter32027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32029){
var self__ = this;
var _32029__$1 = this;
return self__.meta32028;
});


com.rpl.specter.t_com$rpl$specter32027.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32027.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__30396__auto____$1){
return (function (curr__23608__auto__,p__32030){
var vec__32031 = p__32030;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32031,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32031,(1),null);
var ret__23609__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__23609__auto__ === com.rpl.specter.NONE)){
return curr__23608__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__23609__auto__)){
return cljs.core.reduced(ret__23609__auto__);
} else {
return ret__23609__auto__;
}
}
});})(next_fn,this__30396__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
});


com.rpl.specter.t_com$rpl$specter32027.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter32027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pred,cljs.core.cst$sym$meta32028], null);
});

com.rpl.specter.t_com$rpl$specter32027.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32027.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32027";

com.rpl.specter.t_com$rpl$specter32027.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32027");
});

com.rpl.specter.__GT_t_com$rpl$specter32027 = (function com$rpl$specter$__GT_t_com$rpl$specter32027(pred__$1,meta32028){
return (new com.rpl.specter.t_com$rpl$specter32027(pred__$1,meta32028));
});

}

return (new com.rpl.specter.t_com$rpl$specter32027(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__32034 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32034) : next_fn.call(null,G__32034));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = (function (){var G__32035 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32035) : next_fn.call(null,G__32035));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32036 = (function (meta32037){
this.meta32037 = meta32037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32038,meta32037__$1){
var self__ = this;
var _32038__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32036(meta32037__$1));
});


com.rpl.specter.t_com$rpl$specter32036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32038){
var self__ = this;
var _32038__$1 = this;
return self__.meta32037;
});


com.rpl.specter.t_com$rpl$specter32036.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32036.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});


com.rpl.specter.t_com$rpl$specter32036.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

com.rpl.specter.t_com$rpl$specter32036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32037], null);
});

com.rpl.specter.t_com$rpl$specter32036.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32036.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32036";

com.rpl.specter.t_com$rpl$specter32036.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32036");
});

com.rpl.specter.__GT_t_com$rpl$specter32036 = (function com$rpl$specter$__GT_t_com$rpl$specter32036(meta32037){
return (new com.rpl.specter.t_com$rpl$specter32036(meta32037));
});

}

return (new com.rpl.specter.t_com$rpl$specter32036(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__32039 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32039) : next_fn.call(null,G__32039));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__32040 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32040) : next_fn.call(null,G__32040));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32041 = (function (meta32042){
this.meta32042 = meta32042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32043,meta32042__$1){
var self__ = this;
var _32043__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32041(meta32042__$1));
});


com.rpl.specter.t_com$rpl$specter32041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32043){
var self__ = this;
var _32043__$1 = this;
return self__.meta32042;
});


com.rpl.specter.t_com$rpl$specter32041.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32041.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});


com.rpl.specter.t_com$rpl$specter32041.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

com.rpl.specter.t_com$rpl$specter32041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32042], null);
});

com.rpl.specter.t_com$rpl$specter32041.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32041.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32041";

com.rpl.specter.t_com$rpl$specter32041.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32041");
});

com.rpl.specter.__GT_t_com$rpl$specter32041 = (function com$rpl$specter$__GT_t_com$rpl$specter32041(meta32042){
return (new com.rpl.specter.t_com$rpl$specter32041(meta32042));
});

}

return (new com.rpl.specter.t_com$rpl$specter32041(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32044 = (function (meta32045){
this.meta32045 = meta32045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32046,meta32045__$1){
var self__ = this;
var _32046__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32044(meta32045__$1));
});


com.rpl.specter.t_com$rpl$specter32044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32046){
var self__ = this;
var _32046__$1 = this;
return self__.meta32045;
});


com.rpl.specter.t_com$rpl$specter32044.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32044.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});


com.rpl.specter.t_com$rpl$specter32044.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

com.rpl.specter.t_com$rpl$specter32044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32045], null);
});

com.rpl.specter.t_com$rpl$specter32044.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32044.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32044";

com.rpl.specter.t_com$rpl$specter32044.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32044");
});

com.rpl.specter.__GT_t_com$rpl$specter32044 = (function com$rpl$specter$__GT_t_com$rpl$specter32044(meta32045){
return (new com.rpl.specter.t_com$rpl$specter32044(meta32045));
});

}

return (new com.rpl.specter.t_com$rpl$specter32044(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32047 = (function (meta32048){
this.meta32048 = meta32048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32049,meta32048__$1){
var self__ = this;
var _32049__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32047(meta32048__$1));
});


com.rpl.specter.t_com$rpl$specter32047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32049){
var self__ = this;
var _32049__$1 = this;
return self__.meta32048;
});


com.rpl.specter.t_com$rpl$specter32047.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32047.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});


com.rpl.specter.t_com$rpl$specter32047.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter32047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32048], null);
});

com.rpl.specter.t_com$rpl$specter32047.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32047.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32047";

com.rpl.specter.t_com$rpl$specter32047.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32047");
});

com.rpl.specter.__GT_t_com$rpl$specter32047 = (function com$rpl$specter$__GT_t_com$rpl$specter32047(meta32048){
return (new com.rpl.specter.t_com$rpl$specter32047(meta32048));
});

}

return (new com.rpl.specter.t_com$rpl$specter32047(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32050 = (function (meta32051){
this.meta32051 = meta32051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32052,meta32051__$1){
var self__ = this;
var _32052__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32050(meta32051__$1));
});


com.rpl.specter.t_com$rpl$specter32050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32052){
var self__ = this;
var _32052__$1 = this;
return self__.meta32051;
});


com.rpl.specter.t_com$rpl$specter32050.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32050.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});


com.rpl.specter.t_com$rpl$specter32050.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter32050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32051], null);
});

com.rpl.specter.t_com$rpl$specter32050.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32050.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32050";

com.rpl.specter.t_com$rpl$specter32050.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32050");
});

com.rpl.specter.__GT_t_com$rpl$specter32050 = (function com$rpl$specter$__GT_t_com$rpl$specter32050(meta32051){
return (new com.rpl.specter.t_com$rpl$specter32050(meta32051));
});

}

return (new com.rpl.specter.t_com$rpl$specter32050(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__32053 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32053) : next_fn.call(null,G__32053));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
if(typeof com.rpl.specter.t_com$rpl$specter32054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32054 = (function (aset,meta32055){
this.aset = aset;
this.meta32055 = meta32055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32056,meta32055__$1){
var self__ = this;
var _32056__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32054(self__.aset,meta32055__$1));
});


com.rpl.specter.t_com$rpl$specter32054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32056){
var self__ = this;
var _32056__$1 = this;
return self__.meta32055;
});


com.rpl.specter.t_com$rpl$specter32054.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32054.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
});


com.rpl.specter.t_com$rpl$specter32054.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter32054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$aset,cljs.core.cst$sym$meta32055], null);
});

com.rpl.specter.t_com$rpl$specter32054.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32054.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32054";

com.rpl.specter.t_com$rpl$specter32054.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32054");
});

com.rpl.specter.__GT_t_com$rpl$specter32054 = (function com$rpl$specter$__GT_t_com$rpl$specter32054(aset__$1,meta32055){
return (new com.rpl.specter.t_com$rpl$specter32054(aset__$1,meta32055));
});

}

return (new com.rpl.specter.t_com$rpl$specter32054(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__32057 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32057) : next_fn.call(null,G__32057));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
if(typeof com.rpl.specter.t_com$rpl$specter32058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32058 = (function (m_keys,meta32059){
this.m_keys = m_keys;
this.meta32059 = meta32059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32060,meta32059__$1){
var self__ = this;
var _32060__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32058(self__.m_keys,meta32059__$1));
});


com.rpl.specter.t_com$rpl$specter32058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32060){
var self__ = this;
var _32060__$1 = this;
return self__.meta32059;
});


com.rpl.specter.t_com$rpl$specter32058.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32058.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
});


com.rpl.specter.t_com$rpl$specter32058.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
});

com.rpl.specter.t_com$rpl$specter32058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m_DASH_keys,cljs.core.cst$sym$meta32059], null);
});

com.rpl.specter.t_com$rpl$specter32058.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32058.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32058";

com.rpl.specter.t_com$rpl$specter32058.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32058");
});

com.rpl.specter.__GT_t_com$rpl$specter32058 = (function com$rpl$specter$__GT_t_com$rpl$specter32058(m_keys__$1,meta32059){
return (new com.rpl.specter.t_com$rpl$specter32058(m_keys__$1,meta32059));
});

}

return (new com.rpl.specter.t_com$rpl$specter32058(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32067__delegate = function (path){
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if(typeof com.rpl.specter.t_com$rpl$specter32061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32061 = (function (path,late,meta32062){
this.path = path;
this.late = late;
this.meta32062 = meta32062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32063,meta32062__$1){
var self__ = this;
var _32063__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32061(self__.path,self__.late,meta32062__$1));
});


com.rpl.specter.t_com$rpl$specter32061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32063){
var self__ = this;
var _32063__$1 = this;
return self__.meta32062;
});


com.rpl.specter.t_com$rpl$specter32061.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32061.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
});


com.rpl.specter.t_com$rpl$specter32061.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(transformed);
var G__32064 = self__.late;
var G__32065 = ((function (G__32064,select_result,transformed,values_to_insert,next_fn,this__30396__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});})(G__32064,select_result,transformed,values_to_insert,next_fn,this__30396__auto____$1))
;
var G__32066 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__32064,G__32065,G__32066) : com.rpl.specter.compiled_transform.call(null,G__32064,G__32065,G__32066));
});

com.rpl.specter.t_com$rpl$specter32061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta32062], null);
});

com.rpl.specter.t_com$rpl$specter32061.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32061.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32061";

com.rpl.specter.t_com$rpl$specter32061.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32061");
});

com.rpl.specter.__GT_t_com$rpl$specter32061 = (function com$rpl$specter$__GT_t_com$rpl$specter32061(path__$1,late__$1,meta32062){
return (new com.rpl.specter.t_com$rpl$specter32061(path__$1,late__$1,meta32062));
});

}

return (new com.rpl.specter.t_com$rpl$specter32061(path,late,null));
}));
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
};
var G__32067 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__32068__i = 0, G__32068__a = new Array(arguments.length -  0);
while (G__32068__i < G__32068__a.length) {G__32068__a[G__32068__i] = arguments[G__32068__i + 0]; ++G__32068__i;}
  path = new cljs.core.IndexedSeq(G__32068__a,0,null);
} 
return G__32067__delegate.call(this,path);};
G__32067.cljs$lang$maxFixedArity = 0;
G__32067.cljs$lang$applyTo = (function (arglist__32069){
var path = cljs.core.seq(arglist__32069);
return G__32067__delegate(path);
});
G__32067.cljs$core$IFn$_invoke$arity$variadic = G__32067__delegate;
return G__32067;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if(typeof com.rpl.specter.t_com$rpl$specter32070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32070 = (function (key,meta32071){
this.key = key;
this.meta32071 = meta32071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32072,meta32071__$1){
var self__ = this;
var _32072__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32070(self__.key,meta32071__$1));
});


com.rpl.specter.t_com$rpl$specter32070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32072){
var self__ = this;
var _32072__$1 = this;
return self__.meta32071;
});


com.rpl.specter.t_com$rpl$specter32070.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32070.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
});


com.rpl.specter.t_com$rpl$specter32070.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter32070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key,cljs.core.cst$sym$meta32071], null);
});

com.rpl.specter.t_com$rpl$specter32070.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32070.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32070";

com.rpl.specter.t_com$rpl$specter32070.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32070");
});

com.rpl.specter.__GT_t_com$rpl$specter32070 = (function com$rpl$specter$__GT_t_com$rpl$specter32070(key__$1,meta32071){
return (new com.rpl.specter.t_com$rpl$specter32070(key__$1,meta32071));
});

}

return (new com.rpl.specter.t_com$rpl$specter32070(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if(typeof com.rpl.specter.t_com$rpl$specter32073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32073 = (function (elem,meta32074){
this.elem = elem;
this.meta32074 = meta32074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32075,meta32074__$1){
var self__ = this;
var _32075__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32073(self__.elem,meta32074__$1));
});


com.rpl.specter.t_com$rpl$specter32073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32075){
var self__ = this;
var _32075__$1 = this;
return self__.meta32074;
});


com.rpl.specter.t_com$rpl$specter32073.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32073.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
});


com.rpl.specter.t_com$rpl$specter32073.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
});

com.rpl.specter.t_com$rpl$specter32073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$meta32074], null);
});

com.rpl.specter.t_com$rpl$specter32073.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32073.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32073";

com.rpl.specter.t_com$rpl$specter32073.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32073");
});

com.rpl.specter.__GT_t_com$rpl$specter32073 = (function com$rpl$specter$__GT_t_com$rpl$specter32073(elem__$1,meta32074){
return (new com.rpl.specter.t_com$rpl$specter32073(elem__$1,meta32074));
});

}

return (new com.rpl.specter.t_com$rpl$specter32073(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another.If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter32076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32076 = (function (afn,meta32077){
this.afn = afn;
this.meta32077 = meta32077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32078,meta32077__$1){
var self__ = this;
var _32078__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32076(self__.afn,meta32077__$1));
});


com.rpl.specter.t_com$rpl$specter32076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32078){
var self__ = this;
var _32078__$1 = this;
return self__.meta32077;
});


com.rpl.specter.t_com$rpl$specter32076.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32076.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__32079 = vals;
var G__32080 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__32079,G__32080) : next_fn.call(null,G__32079,G__32080));
});


com.rpl.specter.t_com$rpl$specter32076.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__32081 = vals;
var G__32082 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__32081,G__32082) : next_fn.call(null,G__32081,G__32082));
});

com.rpl.specter.t_com$rpl$specter32076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta32077], null);
});

com.rpl.specter.t_com$rpl$specter32076.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32076.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32076";

com.rpl.specter.t_com$rpl$specter32076.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32076");
});

com.rpl.specter.__GT_t_com$rpl$specter32076 = (function com$rpl$specter$__GT_t_com$rpl$specter32076(afn__$1,meta32077){
return (new com.rpl.specter.t_com$rpl$specter32076(afn__$1,meta32077));
});

}

return (new com.rpl.specter.t_com$rpl$specter32076(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__32083 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32083) : next_fn.call(null,G__32083));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__32084 = (function (){var G__32085 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32085) : next_fn.call(null,G__32085));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__32084) : unparse_fn.call(null,G__32084));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if(typeof com.rpl.specter.t_com$rpl$specter32086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32086 = (function (parse_fn,unparse_fn,meta32087){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta32087 = meta32087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32088,meta32087__$1){
var self__ = this;
var _32088__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32086(self__.parse_fn,self__.unparse_fn,meta32087__$1));
});


com.rpl.specter.t_com$rpl$specter32086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32088){
var self__ = this;
var _32088__$1 = this;
return self__.meta32087;
});


com.rpl.specter.t_com$rpl$specter32086.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32086.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
});


com.rpl.specter.t_com$rpl$specter32086.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var G__32089 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__32089) : self__.unparse_fn.call(null,G__32089));
});

com.rpl.specter.t_com$rpl$specter32086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parse_DASH_fn,cljs.core.cst$sym$unparse_DASH_fn,cljs.core.cst$sym$meta32087], null);
});

com.rpl.specter.t_com$rpl$specter32086.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32086.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32086";

com.rpl.specter.t_com$rpl$specter32086.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32086");
});

com.rpl.specter.__GT_t_com$rpl$specter32086 = (function com$rpl$specter$__GT_t_com$rpl$specter32086(parse_fn__$1,unparse_fn__$1,meta32087){
return (new com.rpl.specter.t_com$rpl$specter32086(parse_fn__$1,unparse_fn__$1,meta32087));
});

}

return (new com.rpl.specter.t_com$rpl$specter32086(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__32090 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32090) : next_fn.call(null,G__32090));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32091 = (function (meta32092){
this.meta32092 = meta32092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32093,meta32092__$1){
var self__ = this;
var _32093__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32091(meta32092__$1));
});


com.rpl.specter.t_com$rpl$specter32091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32093){
var self__ = this;
var _32093__$1 = this;
return self__.meta32092;
});


com.rpl.specter.t_com$rpl$specter32091.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32091.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(cljs.core.deref(structure));
});


com.rpl.specter.t_com$rpl$specter32091.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter32091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32092], null);
});

com.rpl.specter.t_com$rpl$specter32091.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32091.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32091";

com.rpl.specter.t_com$rpl$specter32091.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32091");
});

com.rpl.specter.__GT_t_com$rpl$specter32091 = (function com$rpl$specter$__GT_t_com$rpl$specter32091(meta32092){
return (new com.rpl.specter.t_com$rpl$specter32091(meta32092));
});

}

return (new com.rpl.specter.t_com$rpl$specter32091(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32099__delegate = function (path){
var temp__5457__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5457__auto__)){
var afn = temp__5457__auto__;
return afn;
} else {
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5457__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter32096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32096 = (function (path,temp__5457__auto__,late,meta32097){
this.path = path;
this.temp__5457__auto__ = temp__5457__auto__;
this.late = late;
this.meta32097 = meta32097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5457__auto__){
return (function (_32098,meta32097__$1){
var self__ = this;
var _32098__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32096(self__.path,self__.temp__5457__auto__,self__.late,meta32097__$1));
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5457__auto__){
return (function (_32098){
var self__ = this;
var _32098__$1 = this;
return self__.meta32097;
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32096.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32096.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5457__auto__){
return (function (p1__32094_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__32094_SHARP_);
});})(this$__$1,temp__5457__auto__))
,vals,structure,next_fn);
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32096.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5457__auto__){
return (function (p1__32095_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__32095_SHARP_);
});})(this$__$1,temp__5457__auto__))
,vals,structure,next_fn);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter32096.getBasis = ((function (temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$temp__5457__auto__,cljs.core.cst$sym$late,cljs.core.cst$sym$meta32097], null);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter32096.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32096.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32096";

com.rpl.specter.t_com$rpl$specter32096.cljs$lang$ctorPrWriter = ((function (temp__5457__auto__){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32096");
});})(temp__5457__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter32096 = ((function (temp__5457__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter32096(path__$1,temp__5457__auto____$1,late__$1,meta32097){
return (new com.rpl.specter.t_com$rpl$specter32096(path__$1,temp__5457__auto____$1,late__$1,meta32097));
});})(temp__5457__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter32096(path,temp__5457__auto__,late,null));
});})(temp__5457__auto__))
);
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
}
};
var G__32099 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__32100__i = 0, G__32100__a = new Array(arguments.length -  0);
while (G__32100__i < G__32100__a.length) {G__32100__a[G__32100__i] = arguments[G__32100__i + 0]; ++G__32100__i;}
  path = new cljs.core.IndexedSeq(G__32100__a,0,null);
} 
return G__32099__delegate.call(this,path);};
G__32099.cljs$lang$maxFixedArity = 0;
G__32099.cljs$lang$applyTo = (function (arglist__32101){
var path = cljs.core.seq(arglist__32101);
return G__32099__delegate(path);
});
G__32099.cljs$core$IFn$_invoke$arity$variadic = G__32099__delegate;
return G__32099;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32107__delegate = function (path){
var temp__5457__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5457__auto__)){
var afn = temp__5457__auto__;
return ((function (afn,temp__5457__auto__){
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
;})(afn,temp__5457__auto__))
} else {
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5457__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter32104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32104 = (function (path,temp__5457__auto__,late,meta32105){
this.path = path;
this.temp__5457__auto__ = temp__5457__auto__;
this.late = late;
this.meta32105 = meta32105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5457__auto__){
return (function (_32106,meta32105__$1){
var self__ = this;
var _32106__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32104(self__.path,self__.temp__5457__auto__,self__.late,meta32105__$1));
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5457__auto__){
return (function (_32106){
var self__ = this;
var _32106__$1 = this;
return self__.meta32105;
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32104.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32104.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5457__auto__){
return (function (p1__32102_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__32102_SHARP_);
});})(this$__$1,temp__5457__auto__))
,vals,structure,next_fn);
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32104.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5457__auto__){
return (function (p1__32103_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__32103_SHARP_);
});})(this$__$1,temp__5457__auto__))
,vals,structure,next_fn);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter32104.getBasis = ((function (temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$temp__5457__auto__,cljs.core.cst$sym$late,cljs.core.cst$sym$meta32105], null);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter32104.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32104.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32104";

com.rpl.specter.t_com$rpl$specter32104.cljs$lang$ctorPrWriter = ((function (temp__5457__auto__){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32104");
});})(temp__5457__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter32104 = ((function (temp__5457__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter32104(path__$1,temp__5457__auto____$1,late__$1,meta32105){
return (new com.rpl.specter.t_com$rpl$specter32104(path__$1,temp__5457__auto____$1,late__$1,meta32105));
});})(temp__5457__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter32104(path,temp__5457__auto__,late,null));
});})(temp__5457__auto__))
);
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
}
};
var G__32107 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__32108__i = 0, G__32108__a = new Array(arguments.length -  0);
while (G__32108__i < G__32108__a.length) {G__32108__a[G__32108__i] = arguments[G__32108__i + 0]; ++G__32108__i;}
  path = new cljs.core.IndexedSeq(G__32108__a,0,null);
} 
return G__32107__delegate.call(this,path);};
G__32107.cljs$lang$maxFixedArity = 0;
G__32107.cljs$lang$applyTo = (function (arglist__32109){
var path = cljs.core.seq(arglist__32109);
return G__32107__delegate(path);
});
G__32107.cljs$core$IFn$_invoke$arity$variadic = G__32107__delegate;
return G__32107;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32112__delegate = function (path){
var G__32110 = com.rpl.specter.ALL;
var G__32111 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__32110,G__32111) : com.rpl.specter.subselect.call(null,G__32110,G__32111));
};
var G__32112 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__32113__i = 0, G__32113__a = new Array(arguments.length -  0);
while (G__32113__i < G__32113__a.length) {G__32113__a[G__32113__i] = arguments[G__32113__i + 0]; ++G__32113__i;}
  path = new cljs.core.IndexedSeq(G__32113__a,0,null);
} 
return G__32112__delegate.call(this,path);};
G__32112.cljs$lang$maxFixedArity = 0;
G__32112.cljs$lang$applyTo = (function (arglist__32114){
var path = cljs.core.seq(arglist__32114);
return G__32112__delegate(path);
});
G__32112.cljs$core$IFn$_invoke$arity$variadic = G__32112__delegate;
return G__32112;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter32115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32115 = (function (path,update_fn,late,late_fn,meta32116){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta32116 = meta32116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32117,meta32116__$1){
var self__ = this;
var _32117__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32115(self__.path,self__.update_fn,self__.late,self__.late_fn,meta32116__$1));
});


com.rpl.specter.t_com$rpl$specter32115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32117){
var self__ = this;
var _32117__$1 = this;
return self__.meta32116;
});


com.rpl.specter.t_com$rpl$specter32115.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32115.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});


com.rpl.specter.t_com$rpl$specter32115.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter32115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$update_DASH_fn,cljs.core.cst$sym$late,cljs.core.cst$sym$late_DASH_fn,cljs.core.cst$sym$meta32116], null);
});

com.rpl.specter.t_com$rpl$specter32115.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32115.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32115";

com.rpl.specter.t_com$rpl$specter32115.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32115");
});

com.rpl.specter.__GT_t_com$rpl$specter32115 = (function com$rpl$specter$__GT_t_com$rpl$specter32115(path__$1,update_fn__$1,late__$1,late_fn__$1,meta32116){
return (new com.rpl.specter.t_com$rpl$specter32115(path__$1,update_fn__$1,late__$1,late_fn__$1,meta32116));
});

}

return (new com.rpl.specter.t_com$rpl$specter32115(path,update_fn,late,late_fn,null));
}));
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter32118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32118 = (function (path,reduce_fn,late,late_fn,meta32119){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta32119 = meta32119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32120,meta32119__$1){
var self__ = this;
var _32120__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32118(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta32119__$1));
});


com.rpl.specter.t_com$rpl$specter32118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32120){
var self__ = this;
var _32120__$1 = this;
return self__.meta32119;
});


com.rpl.specter.t_com$rpl$specter32118.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32118.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});


com.rpl.specter.t_com$rpl$specter32118.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter32118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$reduce_DASH_fn,cljs.core.cst$sym$late,cljs.core.cst$sym$late_DASH_fn,cljs.core.cst$sym$meta32119], null);
});

com.rpl.specter.t_com$rpl$specter32118.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32118.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32118";

com.rpl.specter.t_com$rpl$specter32118.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32118");
});

com.rpl.specter.__GT_t_com$rpl$specter32118 = (function com$rpl$specter$__GT_t_com$rpl$specter32118(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta32119){
return (new com.rpl.specter.t_com$rpl$specter32118(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta32119));
});

}

return (new com.rpl.specter.t_com$rpl$specter32118(path,reduce_fn,late,late_fn,null));
}));
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__32122 = (function (p1__32121_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__32121_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__32122) : com.rpl.specter.pred.call(null,G__32122));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__32124 = (function (p1__32123_SHARP_){
return (p1__32123_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__32124) : com.rpl.specter.pred.call(null,G__32124));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__32126 = (function (p1__32125_SHARP_){
return (p1__32125_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__32126) : com.rpl.specter.pred.call(null,G__32126));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__32128 = (function (p1__32127_SHARP_){
return (p1__32127_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__32128) : com.rpl.specter.pred.call(null,G__32128));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__32130 = (function (p1__32129_SHARP_){
return (p1__32129_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__32130) : com.rpl.specter.pred.call(null,G__32130));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

var G__32131_32134 = com.rpl.specter.protocols.implicit_nav;
var G__32132_32135 = "null";
var G__32133_32136 = ((function (G__32131_32134,G__32132_32135){
return (function (this$){
return com.rpl.specter.STAY;
});})(G__32131_32134,G__32132_32135))
;
goog.object.set(G__32131_32134,G__32132_32135,G__32133_32136);

cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

var G__32137_32140 = com.rpl.specter.protocols.implicit_nav;
var G__32138_32141 = "function";
var G__32139_32142 = ((function (G__32137_32140,G__32138_32141){
return (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
});})(G__32137_32140,G__32138_32141))
;
goog.object.set(G__32137_32140,G__32138_32141,G__32139_32142);

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
});


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__32143 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32143) : next_fn.call(null,G__32143));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__32144 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32144) : next_fn.call(null,G__32144));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if(typeof com.rpl.specter.t_com$rpl$specter32145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32145 = (function (v,meta32146){
this.v = v;
this.meta32146 = meta32146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32147,meta32146__$1){
var self__ = this;
var _32147__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32145(self__.v,meta32146__$1));
});


com.rpl.specter.t_com$rpl$specter32145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32147){
var self__ = this;
var _32147__$1 = this;
return self__.meta32146;
});


com.rpl.specter.t_com$rpl$specter32145.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32145.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});


com.rpl.specter.t_com$rpl$specter32145.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter32145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v,cljs.core.cst$sym$meta32146], null);
});

com.rpl.specter.t_com$rpl$specter32145.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32145.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32145";

com.rpl.specter.t_com$rpl$specter32145.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32145");
});

com.rpl.specter.__GT_t_com$rpl$specter32145 = (function com$rpl$specter$__GT_t_com$rpl$specter32145(v__$1,meta32146){
return (new com.rpl.specter.t_com$rpl$specter32145(v__$1,meta32146));
});

}

return (new com.rpl.specter.t_com$rpl$specter32145(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__32148 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__32148) : com.rpl.specter.nil__GT_val.call(null,G__32148));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__32149 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__32149) : com.rpl.specter.nil__GT_val.call(null,G__32149));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__32150 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__32150) : com.rpl.specter.nil__GT_val.call(null,G__32150));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__32151 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32151) : next_fn.call(null,G__32151));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__32152 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32152) : next_fn.call(null,G__32152));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32153 = (function (meta32154){
this.meta32154 = meta32154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32155,meta32154__$1){
var self__ = this;
var _32155__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32153(meta32154__$1));
});


com.rpl.specter.t_com$rpl$specter32153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32155){
var self__ = this;
var _32155__$1 = this;
return self__.meta32154;
});


com.rpl.specter.t_com$rpl$specter32153.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32153.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(cljs.core.meta(structure));
});


com.rpl.specter.t_com$rpl$specter32153.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
});

com.rpl.specter.t_com$rpl$specter32153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32154], null);
});

com.rpl.specter.t_com$rpl$specter32153.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32153.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32153";

com.rpl.specter.t_com$rpl$specter32153.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32153");
});

com.rpl.specter.__GT_t_com$rpl$specter32153 = (function com$rpl$specter$__GT_t_com$rpl$specter32153(meta32154){
return (new com.rpl.specter.t_com$rpl$specter32153(meta32154));
});

}

return (new com.rpl.specter.t_com$rpl$specter32153(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__32156 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32156) : next_fn.call(null,G__32156));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__32157 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32157) : next_fn.call(null,G__32157));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0))));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32158 = (function (meta32159){
this.meta32159 = meta32159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32160,meta32159__$1){
var self__ = this;
var _32160__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32158(meta32159__$1));
});


com.rpl.specter.t_com$rpl$specter32158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32160){
var self__ = this;
var _32160__$1 = this;
return self__.meta32159;
});


com.rpl.specter.t_com$rpl$specter32158.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32158.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(cljs.core.name(structure));
});


com.rpl.specter.t_com$rpl$specter32158.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0))));

}
}
});

com.rpl.specter.t_com$rpl$specter32158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32159], null);
});

com.rpl.specter.t_com$rpl$specter32158.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32158.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32158";

com.rpl.specter.t_com$rpl$specter32158.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32158");
});

com.rpl.specter.__GT_t_com$rpl$specter32158 = (function com$rpl$specter$__GT_t_com$rpl$specter32158(meta32159){
return (new com.rpl.specter.t_com$rpl$specter32158(meta32159));
});

}

return (new com.rpl.specter.t_com$rpl$specter32158(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__32161 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32161) : next_fn.call(null,G__32161));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__32162 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__32162) : next_fn.call(null,G__32162));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0))));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32163 = (function (meta32164){
this.meta32164 = meta32164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32165,meta32164__$1){
var self__ = this;
var _32165__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32163(meta32164__$1));
});


com.rpl.specter.t_com$rpl$specter32163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32165){
var self__ = this;
var _32165__$1 = this;
return self__.meta32164;
});


com.rpl.specter.t_com$rpl$specter32163.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32163.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
return next_fn(cljs.core.namespace(structure));
});


com.rpl.specter.t_com$rpl$specter32163.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0))));

}
}
});

com.rpl.specter.t_com$rpl$specter32163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32164], null);
});

com.rpl.specter.t_com$rpl$specter32163.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32163.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32163";

com.rpl.specter.t_com$rpl$specter32163.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32163");
});

com.rpl.specter.__GT_t_com$rpl$specter32163 = (function com$rpl$specter$__GT_t_com$rpl$specter32163(meta32164){
return (new com.rpl.specter.t_com$rpl$specter32163(meta32164));
});

}

return (new com.rpl.specter.t_com$rpl$specter32163(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32173__delegate = function (path){
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if(typeof com.rpl.specter.t_com$rpl$specter32166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32166 = (function (path,late,meta32167){
this.path = path;
this.late = late;
this.meta32167 = meta32167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32168,meta32167__$1){
var self__ = this;
var _32168__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32166(self__.path,self__.late,meta32167__$1));
});


com.rpl.specter.t_com$rpl$specter32166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32168){
var self__ = this;
var _32168__$1 = this;
return self__.meta32167;
});


com.rpl.specter.t_com$rpl$specter32166.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32166.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__31003__auto__,vals__31004__auto__,structure,next_fn__31005__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
var G__32169 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__31004__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__32170 = structure;
return (next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2(G__32169,G__32170) : next_fn__31005__auto__.call(null,G__32169,G__32170));
});


com.rpl.specter.t_com$rpl$specter32166.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__31003__auto__,vals__31004__auto__,structure,next_fn__31005__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
var G__32171 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__31004__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__32172 = structure;
return (next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2(G__32171,G__32172) : next_fn__31005__auto__.call(null,G__32171,G__32172));
});

com.rpl.specter.t_com$rpl$specter32166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta32167], null);
});

com.rpl.specter.t_com$rpl$specter32166.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32166.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32166";

com.rpl.specter.t_com$rpl$specter32166.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32166");
});

com.rpl.specter.__GT_t_com$rpl$specter32166 = (function com$rpl$specter$__GT_t_com$rpl$specter32166(path__$1,late__$1,meta32167){
return (new com.rpl.specter.t_com$rpl$specter32166(path__$1,late__$1,meta32167));
});

}

return (new com.rpl.specter.t_com$rpl$specter32166(path,late,null));
}));
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
};
var G__32173 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__32174__i = 0, G__32174__a = new Array(arguments.length -  0);
while (G__32174__i < G__32174__a.length) {G__32174__a[G__32174__i] = arguments[G__32174__i + 0]; ++G__32174__i;}
  path = new cljs.core.IndexedSeq(G__32174__a,0,null);
} 
return G__32173__delegate.call(this,path);};
G__32173.cljs$lang$maxFixedArity = 0;
G__32173.cljs$lang$applyTo = (function (arglist__32175){
var path = cljs.core.seq(arglist__32175);
return G__32173__delegate(path);
});
G__32173.cljs$core$IFn$_invoke$arity$variadic = G__32173__delegate;
return G__32173;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32183__delegate = function (path){
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if(typeof com.rpl.specter.t_com$rpl$specter32176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32176 = (function (path,late,meta32177){
this.path = path;
this.late = late;
this.meta32177 = meta32177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32178,meta32177__$1){
var self__ = this;
var _32178__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32176(self__.path,self__.late,meta32177__$1));
});


com.rpl.specter.t_com$rpl$specter32176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32178){
var self__ = this;
var _32178__$1 = this;
return self__.meta32177;
});


com.rpl.specter.t_com$rpl$specter32176.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32176.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__31003__auto__,vals__31004__auto__,structure,next_fn__31005__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
var G__32179 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__31004__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__32180 = structure;
return (next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2(G__32179,G__32180) : next_fn__31005__auto__.call(null,G__32179,G__32180));
});


com.rpl.specter.t_com$rpl$specter32176.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__31003__auto__,vals__31004__auto__,structure,next_fn__31005__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
var G__32181 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__31004__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__32182 = structure;
return (next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2(G__32181,G__32182) : next_fn__31005__auto__.call(null,G__32181,G__32182));
});

com.rpl.specter.t_com$rpl$specter32176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta32177], null);
});

com.rpl.specter.t_com$rpl$specter32176.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32176.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32176";

com.rpl.specter.t_com$rpl$specter32176.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32176");
});

com.rpl.specter.__GT_t_com$rpl$specter32176 = (function com$rpl$specter$__GT_t_com$rpl$specter32176(path__$1,late__$1,meta32177){
return (new com.rpl.specter.t_com$rpl$specter32176(path__$1,late__$1,meta32177));
});

}

return (new com.rpl.specter.t_com$rpl$specter32176(path,late,null));
}));
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
};
var G__32183 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__32184__i = 0, G__32184__a = new Array(arguments.length -  0);
while (G__32184__i < G__32184__a.length) {G__32184__a[G__32184__i] = arguments[G__32184__i + 0]; ++G__32184__i;}
  path = new cljs.core.IndexedSeq(G__32184__a,0,null);
} 
return G__32183__delegate.call(this,path);};
G__32183.cljs$lang$maxFixedArity = 0;
G__32183.cljs$lang$applyTo = (function (arglist__32185){
var path = cljs.core.seq(arglist__32185);
return G__32183__delegate(path);
});
G__32183.cljs$core$IFn$_invoke$arity$variadic = G__32183__delegate;
return G__32183;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
if(typeof com.rpl.specter.t_com$rpl$specter32186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32186 = (function (val,meta32187){
this.val = val;
this.meta32187 = meta32187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32188,meta32187__$1){
var self__ = this;
var _32188__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32186(self__.val,meta32187__$1));
});


com.rpl.specter.t_com$rpl$specter32186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32188){
var self__ = this;
var _32188__$1 = this;
return self__.meta32187;
});


com.rpl.specter.t_com$rpl$specter32186.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32186.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__31003__auto__,vals__31004__auto__,structure,next_fn__31005__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
var G__32189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__31004__auto__,self__.val);
var G__32190 = structure;
return (next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2(G__32189,G__32190) : next_fn__31005__auto__.call(null,G__32189,G__32190));
});


com.rpl.specter.t_com$rpl$specter32186.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__31003__auto__,vals__31004__auto__,structure,next_fn__31005__auto__){
var self__ = this;
var this__31003__auto____$1 = this;
var G__32191 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__31004__auto__,self__.val);
var G__32192 = structure;
return (next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__31005__auto__.cljs$core$IFn$_invoke$arity$2(G__32191,G__32192) : next_fn__31005__auto__.call(null,G__32191,G__32192));
});

com.rpl.specter.t_com$rpl$specter32186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta32187], null);
});

com.rpl.specter.t_com$rpl$specter32186.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32186.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32186";

com.rpl.specter.t_com$rpl$specter32186.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32186");
});

com.rpl.specter.__GT_t_com$rpl$specter32186 = (function com$rpl$specter$__GT_t_com$rpl$specter32186(val__$1,meta32187){
return (new com.rpl.specter.t_com$rpl$specter32186(val__$1,meta32187));
});

}

return (new com.rpl.specter.t_com$rpl$specter32186(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32198__delegate = function (path){
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if(typeof com.rpl.specter.t_com$rpl$specter32193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32193 = (function (path,late,meta32194){
this.path = path;
this.late = late;
this.meta32194 = meta32194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32195,meta32194__$1){
var self__ = this;
var _32195__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32193(self__.path,self__.late,meta32194__$1));
});


com.rpl.specter.t_com$rpl$specter32193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32195){
var self__ = this;
var _32195__$1 = this;
return self__.meta32194;
});


com.rpl.specter.t_com$rpl$specter32193.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32193.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});


com.rpl.specter.t_com$rpl$specter32193.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter32193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta32194], null);
});

com.rpl.specter.t_com$rpl$specter32193.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32193.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32193";

com.rpl.specter.t_com$rpl$specter32193.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32193");
});

com.rpl.specter.__GT_t_com$rpl$specter32193 = (function com$rpl$specter$__GT_t_com$rpl$specter32193(path__$1,late__$1,meta32194){
return (new com.rpl.specter.t_com$rpl$specter32193(path__$1,late__$1,meta32194));
});

}

return (new com.rpl.specter.t_com$rpl$specter32193(path,late,null));
}));
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
};
var G__32198 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__32199__i = 0, G__32199__a = new Array(arguments.length -  0);
while (G__32199__i < G__32199__a.length) {G__32199__a[G__32199__i] = arguments[G__32199__i + 0]; ++G__32199__i;}
  path = new cljs.core.IndexedSeq(G__32199__a,0,null);
} 
return G__32198__delegate.call(this,path);};
G__32198.cljs$lang$maxFixedArity = 0;
G__32198.cljs$lang$applyTo = (function (arglist__32200){
var path = cljs.core.seq(arglist__32200);
return G__32198__delegate(path);
});
G__32198.cljs$core$IFn$_invoke$arity$variadic = G__32198__delegate;
return G__32198;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter32201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32201 = (function (meta32202){
this.meta32202 = meta32202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32203,meta32202__$1){
var self__ = this;
var _32203__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32201(meta32202__$1));
});


com.rpl.specter.t_com$rpl$specter32201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32203){
var self__ = this;
var _32203__$1 = this;
return self__.meta32202;
});


com.rpl.specter.t_com$rpl$specter32201.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32201.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__32204 = cljs.core.PersistentVector.EMPTY;
var G__32205 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__32204,G__32205) : next_fn.call(null,G__32204,G__32205));
});


com.rpl.specter.t_com$rpl$specter32201.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__32206 = cljs.core.PersistentVector.EMPTY;
var G__32207 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__32206,G__32207) : next_fn.call(null,G__32206,G__32207));
});

com.rpl.specter.t_com$rpl$specter32201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta32202], null);
});

com.rpl.specter.t_com$rpl$specter32201.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32201.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32201";

com.rpl.specter.t_com$rpl$specter32201.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32201");
});

com.rpl.specter.__GT_t_com$rpl$specter32201 = (function com$rpl$specter$__GT_t_com$rpl$specter32201(meta32202){
return (new com.rpl.specter.t_com$rpl$specter32201(meta32202));
});

}

return (new com.rpl.specter.t_com$rpl$specter32201(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__32216 = null;
var G__32216__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__32216__3 = (function (cond_p,then_path,else_path){
var temp__5457__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5457__auto__)){
var afn = temp__5457__auto__;
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (afn,temp__5457__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter32210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32210 = (function (cond_p,then_path,else_path,temp__5457__auto__,afn,late_then,late_else,meta32211){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5457__auto__ = temp__5457__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta32211 = meta32211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__5457__auto__){
return (function (_32212,meta32211__$1){
var self__ = this;
var _32212__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32210(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5457__auto__,self__.afn,self__.late_then,self__.late_else,meta32211__$1));
});})(afn,temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__5457__auto__){
return (function (_32212){
var self__ = this;
var _32212__$1 = this;
return self__.meta32211;
});})(afn,temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32210.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32210.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32210.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter32210.getBasis = ((function (afn,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_p,cljs.core.cst$sym$then_DASH_path,cljs.core.cst$sym$else_DASH_path,cljs.core.cst$sym$temp__5457__auto__,cljs.core.cst$sym$afn,cljs.core.cst$sym$late_DASH_then,cljs.core.cst$sym$late_DASH_else,cljs.core.cst$sym$meta32211], null);
});})(afn,temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter32210.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32210.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32210";

com.rpl.specter.t_com$rpl$specter32210.cljs$lang$ctorPrWriter = ((function (afn,temp__5457__auto__){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32210");
});})(afn,temp__5457__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter32210 = ((function (afn,temp__5457__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter32210(cond_p__$1,then_path__$1,else_path__$1,temp__5457__auto____$1,afn__$1,late_then__$1,late_else__$1,meta32211){
return (new com.rpl.specter.t_com$rpl$specter32210(cond_p__$1,then_path__$1,else_path__$1,temp__5457__auto____$1,afn__$1,late_then__$1,late_else__$1,meta32211));
});})(afn,temp__5457__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter32210(cond_p,then_path,else_path,temp__5457__auto__,afn,late_then,late_else,null));
});})(afn,temp__5457__auto__))
);
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
} else {
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5457__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter32213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32213 = (function (cond_p,then_path,else_path,temp__5457__auto__,late_cond,late_then,late_else,meta32214){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5457__auto__ = temp__5457__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta32214 = meta32214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5457__auto__){
return (function (_32215,meta32214__$1){
var self__ = this;
var _32215__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32213(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5457__auto__,self__.late_cond,self__.late_then,self__.late_else,meta32214__$1));
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5457__auto__){
return (function (_32215){
var self__ = this;
var _32215__$1 = this;
return self__.meta32214;
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32213.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32213.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,((function (this$__$1,temp__5457__auto__){
return (function (p1__32208_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__32208_SHARP_);
});})(this$__$1,temp__5457__auto__))
,self__.late_then,self__.late_else);
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter32213.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,((function (this$__$1,temp__5457__auto__){
return (function (p1__32209_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__32209_SHARP_);
});})(this$__$1,temp__5457__auto__))
,self__.late_then,self__.late_else);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter32213.getBasis = ((function (temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_p,cljs.core.cst$sym$then_DASH_path,cljs.core.cst$sym$else_DASH_path,cljs.core.cst$sym$temp__5457__auto__,cljs.core.cst$sym$late_DASH_cond,cljs.core.cst$sym$late_DASH_then,cljs.core.cst$sym$late_DASH_else,cljs.core.cst$sym$meta32214], null);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter32213.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32213.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32213";

com.rpl.specter.t_com$rpl$specter32213.cljs$lang$ctorPrWriter = ((function (temp__5457__auto__){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32213");
});})(temp__5457__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter32213 = ((function (temp__5457__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter32213(cond_p__$1,then_path__$1,else_path__$1,temp__5457__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta32214){
return (new com.rpl.specter.t_com$rpl$specter32213(cond_p__$1,then_path__$1,else_path__$1,temp__5457__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta32214));
});})(temp__5457__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter32213(cond_p,then_path,else_path,temp__5457__auto__,late_cond,late_then,late_else,null));
});})(temp__5457__auto__))
);
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
}
});
G__32216 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__32216__2.call(this,cond_p,then_path);
case 3:
return G__32216__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32216.cljs$core$IFn$_invoke$arity$2 = G__32216__2;
G__32216.cljs$core$IFn$_invoke$arity$3 = G__32216__3;
return G__32216;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32221__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p,p__32217){
var vec__32218 = p__32217;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32218,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32218,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__32221 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__32222__i = 0, G__32222__a = new Array(arguments.length -  0);
while (G__32222__i < G__32222__a.length) {G__32222__a[G__32222__i] = arguments[G__32222__i + 0]; ++G__32222__i;}
  conds = new cljs.core.IndexedSeq(G__32222__a,0,null);
} 
return G__32221__delegate.call(this,conds);};
G__32221.cljs$lang$maxFixedArity = 0;
G__32221.cljs$lang$applyTo = (function (arglist__32223){
var conds = cljs.core.seq(arglist__32223);
return G__32221__delegate(conds);
});
G__32221.cljs$core$IFn$_invoke$arity$variadic = G__32221__delegate;
return G__32221;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__32231 = null;
var G__32231__0 = (function (){
return com.rpl.specter.STAY;
});
var G__32231__1 = (function (path){
return path;
});
var G__32231__2 = (function (path1,path2){
var builder__31006__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter32224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter32224 = (function (path1,path2,late1,late2,meta32225){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta32225 = meta32225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter32224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32226,meta32225__$1){
var self__ = this;
var _32226__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter32224(self__.path1,self__.path2,self__.late1,self__.late2,meta32225__$1));
});


com.rpl.specter.t_com$rpl$specter32224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32226){
var self__ = this;
var _32226__$1 = this;
return self__.meta32225;
});


com.rpl.specter.t_com$rpl$specter32224.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter32224.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
});


com.rpl.specter.t_com$rpl$specter32224.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter32224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path1,cljs.core.cst$sym$path2,cljs.core.cst$sym$late1,cljs.core.cst$sym$late2,cljs.core.cst$sym$meta32225], null);
});

com.rpl.specter.t_com$rpl$specter32224.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter32224.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter32224";

com.rpl.specter.t_com$rpl$specter32224.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter32224");
});

com.rpl.specter.__GT_t_com$rpl$specter32224 = (function com$rpl$specter$__GT_t_com$rpl$specter32224(path1__$1,path2__$1,late1__$1,late2__$1,meta32225){
return (new com.rpl.specter.t_com$rpl$specter32224(path1__$1,path2__$1,late1__$1,late2__$1,meta32225));
});

}

return (new com.rpl.specter.t_com$rpl$specter32224(path1,path2,late1,late2,null));
}));
var curr_params__31007__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__31007__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__31006__auto__,curr_params__31007__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__31006__auto__,curr_params__31007__auto__,null);
}
});
var G__32231__3 = (function() { 
var G__32232__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__32232 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__32233__i = 0, G__32233__a = new Array(arguments.length -  2);
while (G__32233__i < G__32233__a.length) {G__32233__a[G__32233__i] = arguments[G__32233__i + 2]; ++G__32233__i;}
  paths = new cljs.core.IndexedSeq(G__32233__a,0,null);
} 
return G__32232__delegate.call(this,path1,path2,paths);};
G__32232.cljs$lang$maxFixedArity = 2;
G__32232.cljs$lang$applyTo = (function (arglist__32234){
var path1 = cljs.core.first(arglist__32234);
arglist__32234 = cljs.core.next(arglist__32234);
var path2 = cljs.core.first(arglist__32234);
var paths = cljs.core.rest(arglist__32234);
return G__32232__delegate(path1,path2,paths);
});
G__32232.cljs$core$IFn$_invoke$arity$variadic = G__32232__delegate;
return G__32232;
})()
;
G__32231 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__32231__0.call(this);
case 1:
return G__32231__1.call(this,path1);
case 2:
return G__32231__2.call(this,path1,path2);
default:
var G__32235 = null;
if (arguments.length > 2) {
var G__32236__i = 0, G__32236__a = new Array(arguments.length -  2);
while (G__32236__i < G__32236__a.length) {G__32236__a[G__32236__i] = arguments[G__32236__i + 2]; ++G__32236__i;}
G__32235 = new cljs.core.IndexedSeq(G__32236__a,0,null);
}
return G__32231__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__32235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32231.cljs$lang$maxFixedArity = 2;
G__32231.cljs$lang$applyTo = G__32231__3.cljs$lang$applyTo;
G__32231.cljs$core$IFn$_invoke$arity$0 = G__32231__0;
G__32231.cljs$core$IFn$_invoke$arity$1 = G__32231__1;
G__32231.cljs$core$IFn$_invoke$arity$2 = G__32231__2;
G__32231.cljs$core$IFn$_invoke$arity$variadic = G__32231__3.cljs$core$IFn$_invoke$arity$variadic;
return G__32231;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32237__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__32237 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__32238__i = 0, G__32238__a = new Array(arguments.length -  0);
while (G__32238__i < G__32238__a.length) {G__32238__a[G__32238__i] = arguments[G__32238__i + 0]; ++G__32238__i;}
  path = new cljs.core.IndexedSeq(G__32238__a,0,null);
} 
return G__32237__delegate.call(this,path);};
G__32237.cljs$lang$maxFixedArity = 0;
G__32237.cljs$lang$applyTo = (function (arglist__32239){
var path = cljs.core.seq(arglist__32239);
return G__32237__delegate(path);
});
G__32237.cljs$core$IFn$_invoke$arity$variadic = G__32237__delegate;
return G__32237;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__32240__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__32240 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__32241__i = 0, G__32241__a = new Array(arguments.length -  0);
while (G__32241__i < G__32241__a.length) {G__32241__a[G__32241__i] = arguments[G__32241__i + 0]; ++G__32241__i;}
  path = new cljs.core.IndexedSeq(G__32241__a,0,null);
} 
return G__32240__delegate.call(this,path);};
G__32240.cljs$lang$maxFixedArity = 0;
G__32240.cljs$lang$applyTo = (function (arglist__32242){
var path = cljs.core.seq(arglist__32242);
return G__32240__delegate(path);
});
G__32240.cljs$core$IFn$_invoke$arity$variadic = G__32240__delegate;
return G__32240;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__31013__auto__ = com.rpl.specter.pathcache32243;
var info__31013__auto____$1 = (((info__31013__auto__ == null))?(function (){var info32244 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},cljs.core.cst$sym$com$rpl$specter_SLASH_cond_DASH_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$cond_DASH_path,"resources/public/js/prod/com/rpl/specter.cljc",25,1,1237,1237,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.\n\n   The input paths may be parameterized, in which case the result of cond-path\n   will be parameterized in the order of which the parameterized navigators\n   were declared.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),cljs.core.cst$sym$cond_DASH_path),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},cljs.core.cst$sym$com$rpl$specter_SLASH_pred,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$direct_DASH_nav,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$pred,"resources/public/js/prod/com/rpl/specter.cljc",7,1,true,1042,1046,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. This is the\n          late-bound parameterized version of using a function directly in a path.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),cljs.core.cst$sym$pred),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,cljs.core.cst$sym$afn)], null),cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},cljs.core.cst$sym$com$rpl$specter_SLASH_STAY,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$STAY,"resources/public/js/prod/com/rpl/specter.cljc",7,1,626,628,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),cljs.core.cst$sym$STAY),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$tag,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$coll_QMARK_,"cljs/core.cljs",21,1,2086,2086,cljs.core.cst$sym$boolean,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),cljs.core.cst$sym$coll_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL,"resources/public/js/prod/com/rpl/specter.cljc",6,1,650,653,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),cljs.core.cst$sym$ALL),com.rpl.specter.impl.__GT_LocalSym(p,cljs.core.cst$sym$p)], null)], null),cljs.core.list(cljs.core.cst$sym$cond_DASH_path,cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn),cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$p], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_path,cljs.core.cst$sym$pred,cljs.core.cst$sym$afn,cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null),cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null));
com.rpl.specter.pathcache32243 = info32244;

return info32244;
})():info__31013__auto__);
var precompiled32245 = com.rpl.specter.impl.cached_path_info_precompiled(info__31013__auto____$1);
var dynamic_QMARK___31014__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__31013__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___31014__auto__)){
var G__32246 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled32245.cljs$core$IFn$_invoke$arity$1 ? precompiled32245.cljs$core$IFn$_invoke$arity$1(G__32246) : precompiled32245.call(null,G__32246));
} else {
return precompiled32245;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__31013__auto__ = com.rpl.specter.pathcache32247;
var info__31013__auto____$1 = (((info__31013__auto__ == null))?(function (){var info32248 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},cljs.core.cst$sym$com$rpl$specter_SLASH_cond_DASH_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$cond_DASH_path,"resources/public/js/prod/com/rpl/specter.cljc",25,1,1237,1237,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.\n\n   The input paths may be parameterized, in which case the result of cond-path\n   will be parameterized in the order of which the parameterized navigators\n   were declared.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),cljs.core.cst$sym$cond_DASH_path),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},cljs.core.cst$sym$com$rpl$specter_SLASH_pred,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$direct_DASH_nav,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$pred,"resources/public/js/prod/com/rpl/specter.cljc",7,1,true,1042,1046,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. This is the\n          late-bound parameterized version of using a function directly in a path.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),cljs.core.cst$sym$pred),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,cljs.core.cst$sym$afn)], null),cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},cljs.core.cst$sym$com$rpl$specter_SLASH_STAY,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$STAY,"resources/public/js/prod/com/rpl/specter.cljc",7,1,626,628,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),cljs.core.cst$sym$STAY),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$tag,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$coll_QMARK_,"cljs/core.cljs",21,1,2086,2086,cljs.core.cst$sym$boolean,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),cljs.core.cst$sym$coll_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL_DASH_WITH_DASH_META,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,"resources/public/js/prod/com/rpl/specter.cljc",16,1,660,662,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),cljs.core.cst$sym$ALL_DASH_WITH_DASH_META),com.rpl.specter.impl.__GT_LocalSym(p,cljs.core.cst$sym$p)], null)], null),cljs.core.list(cljs.core.cst$sym$cond_DASH_path,cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn),cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$p], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_path,cljs.core.cst$sym$pred,cljs.core.cst$sym$afn,cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null),cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null));
com.rpl.specter.pathcache32247 = info32248;

return info32248;
})():info__31013__auto__);
var precompiled32249 = com.rpl.specter.impl.cached_path_info_precompiled(info__31013__auto____$1);
var dynamic_QMARK___31014__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__31013__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___31014__auto__)){
var G__32250 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled32249.cljs$core$IFn$_invoke$arity$1 ? precompiled32249.cljs$core$IFn$_invoke$arity$1(G__32250) : precompiled32249.call(null,G__32250));
} else {
return precompiled32249;
}
})());

return p;
}));

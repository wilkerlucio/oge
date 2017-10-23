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
var G__29481__delegate = function (args){
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
var G__29481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29482__i = 0, G__29482__a = new Array(arguments.length -  0);
while (G__29482__i < G__29482__a.length) {G__29482__a[G__29482__i] = arguments[G__29482__i + 0]; ++G__29482__i;}
  args = new cljs.core.IndexedSeq(G__29482__a,0,null);
} 
return G__29481__delegate.call(this,args);};
G__29481.cljs$lang$maxFixedArity = 0;
G__29481.cljs$lang$applyTo = (function (arglist__29486){
var args = cljs.core.seq(arglist__29486);
return G__29481__delegate(args);
});
G__29481.cljs$core$IFn$_invoke$arity$variadic = G__29481__delegate;
return G__29481;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__11698__auto__ = [];
var len__11691__auto___29555 = arguments.length;
var i__11692__auto___29556 = (0);
while(true){
if((i__11692__auto___29556 < len__11691__auto___29555)){
args__11698__auto__.push((arguments[i__11692__auto___29556]));

var G__29557 = (i__11692__auto___29556 + (1));
i__11692__auto___29556 = G__29557;
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

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq29552){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29552));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__29559 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29560 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__29559,G__29560) : com.rpl.specter.compiled_select.call(null,G__29559,G__29560));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__29564 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29565 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__29564,G__29565) : com.rpl.specter.compiled_select_one.call(null,G__29564,G__29565));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__29570 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29571 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__29570,G__29571) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__29570,G__29571));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__29574 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29575 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__29574,G__29575) : com.rpl.specter.compiled_select_first.call(null,G__29574,G__29575));
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
var G__29578 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29579 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__29578,G__29579) : com.rpl.specter.compiled_select_any.call(null,G__29578,G__29579));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__29583 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29584 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__29583,G__29584) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__29583,G__29584));
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
var G__29586 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__29587 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__29586,G__29587) : com.rpl.specter.compiled_traverse.call(null,G__29586,G__29587));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__29593 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__29593) : com.rpl.specter.compiled_traverse_all.call(null,G__29593));
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
var G__29598 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29599 = transform_fn;
var G__29600 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__29598,G__29599,G__29600) : com.rpl.specter.compiled_transform.call(null,G__29598,G__29599,G__29600));
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
var G__29624 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29625 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__29624,G__29625) : com.rpl.specter.compiled_multi_transform.call(null,G__29624,G__29625));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__29637 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29638 = val;
var G__29639 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__29637,G__29638,G__29639) : com.rpl.specter.compiled_setval.call(null,G__29637,G__29638,G__29639));
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
var len__11691__auto___29662 = arguments.length;
var i__11692__auto___29663 = (0);
while(true){
if((i__11692__auto___29663 < len__11691__auto___29662)){
args__11698__auto__.push((arguments[i__11692__auto___29663]));

var G__29669 = (i__11692__auto___29663 + (1));
i__11692__auto___29663 = G__29669;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__29650){
var map__29651 = p__29650;
var map__29651__$1 = ((((!((map__29651 == null)))?((((map__29651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29651):map__29651);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29651__$1,cljs.core.cst$kw$merge_DASH_fn,cljs.core.concat);
var G__29654 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__29655 = transform_fn;
var G__29656 = structure;
var G__29657 = cljs.core.cst$kw$merge_DASH_fn;
var G__29658 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__29654,G__29655,G__29656,G__29657,G__29658) : com.rpl.specter.compiled_replace_in.call(null,G__29654,G__29655,G__29656,G__29657,G__29658));
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq29643){
var G__29644 = cljs.core.first(seq29643);
var seq29643__$1 = cljs.core.next(seq29643);
var G__29645 = cljs.core.first(seq29643__$1);
var seq29643__$2 = cljs.core.next(seq29643__$1);
var G__29646 = cljs.core.first(seq29643__$2);
var seq29643__$3 = cljs.core.next(seq29643__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29644,G__29645,G__29646,seq29643__$3);
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
var G__29681__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__29681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29683__i = 0, G__29683__a = new Array(arguments.length -  0);
while (G__29683__i < G__29683__a.length) {G__29683__a[G__29683__i] = arguments[G__29683__i + 0]; ++G__29683__i;}
  args = new cljs.core.IndexedSeq(G__29683__a,0,null);
} 
return G__29681__delegate.call(this,args);};
G__29681.cljs$lang$maxFixedArity = 0;
G__29681.cljs$lang$applyTo = (function (arglist__29684){
var args = cljs.core.seq(arglist__29684);
return G__29681__delegate(args);
});
G__29681.cljs$core$IFn$_invoke$arity$variadic = G__29681__delegate;
return G__29681;
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
if(typeof com.rpl.specter.t_com$rpl$specter29687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29687 = (function (meta29688){
this.meta29688 = meta29688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter29687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29689,meta29688__$1){
var self__ = this;
var _29689__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29687(meta29688__$1));
});


com.rpl.specter.t_com$rpl$specter29687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29689){
var self__ = this;
var _29689__$1 = this;
return self__.meta29688;
});


com.rpl.specter.t_com$rpl$specter29687.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter29687.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return com.rpl.specter.NONE;
});


com.rpl.specter.t_com$rpl$specter29687.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter29687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta29688], null);
});

com.rpl.specter.t_com$rpl$specter29687.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29687.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29687";

com.rpl.specter.t_com$rpl$specter29687.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter29687");
});

com.rpl.specter.__GT_t_com$rpl$specter29687 = (function com$rpl$specter$__GT_t_com$rpl$specter29687(meta29688){
return (new com.rpl.specter.t_com$rpl$specter29687(meta29688));
});

}

return (new com.rpl.specter.t_com$rpl$specter29687(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29701 = (function (afn,meta29702){
this.afn = afn;
this.meta29702 = meta29702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter29701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29703,meta29702__$1){
var self__ = this;
var _29703__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29701(self__.afn,meta29702__$1));
});


com.rpl.specter.t_com$rpl$specter29701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29703){
var self__ = this;
var _29703__$1 = this;
return self__.meta29702;
});


com.rpl.specter.t_com$rpl$specter29701.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter29701.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["'terminal' should only be used in multi-transform"], 0))));
});


com.rpl.specter.t_com$rpl$specter29701.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter29701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta29702], null);
});

com.rpl.specter.t_com$rpl$specter29701.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29701.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29701";

com.rpl.specter.t_com$rpl$specter29701.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter29701");
});

com.rpl.specter.__GT_t_com$rpl$specter29701 = (function com$rpl$specter$__GT_t_com$rpl$specter29701(afn__$1,meta29702){
return (new com.rpl.specter.t_com$rpl$specter29701(afn__$1,meta29702));
});

}

return (new com.rpl.specter.t_com$rpl$specter29701(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__29710 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__29710) : com.rpl.specter.terminal.call(null,G__29710));
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
if(typeof com.rpl.specter.t_com$rpl$specter29713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29713 = (function (meta29714){
this.meta29714 = meta29714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter29713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29715,meta29714__$1){
var self__ = this;
var _29715__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29713(meta29714__$1));
});


com.rpl.specter.t_com$rpl$specter29713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29715){
var self__ = this;
var _29715__$1 = this;
return self__.meta29714;
});


com.rpl.specter.t_com$rpl$specter29713.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter29713.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});


com.rpl.specter.t_com$rpl$specter29713.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta29714], null);
});

com.rpl.specter.t_com$rpl$specter29713.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29713.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29713";

com.rpl.specter.t_com$rpl$specter29713.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter29713");
});

com.rpl.specter.__GT_t_com$rpl$specter29713 = (function com$rpl$specter$__GT_t_com$rpl$specter29713(meta29714){
return (new com.rpl.specter.t_com$rpl$specter29713(meta29714));
});

}

return (new com.rpl.specter.t_com$rpl$specter29713(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29766 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29766 = (function (meta29767){
this.meta29767 = meta29767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter29766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29768,meta29767__$1){
var self__ = this;
var _29768__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29766(meta29767__$1));
});


com.rpl.specter.t_com$rpl$specter29766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29768){
var self__ = this;
var _29768__$1 = this;
return self__.meta29767;
});


com.rpl.specter.t_com$rpl$specter29766.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter29766.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return com.rpl.specter.navs.all_select(structure,next_fn);
});


com.rpl.specter.t_com$rpl$specter29766.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if(!((res == null))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

com.rpl.specter.t_com$rpl$specter29766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta29767], null);
});

com.rpl.specter.t_com$rpl$specter29766.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29766.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29766";

com.rpl.specter.t_com$rpl$specter29766.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter29766");
});

com.rpl.specter.__GT_t_com$rpl$specter29766 = (function com$rpl$specter$__GT_t_com$rpl$specter29766(meta29767){
return (new com.rpl.specter.t_com$rpl$specter29766(meta29767));
});

}

return (new com.rpl.specter.t_com$rpl$specter29766(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__18733__auto__,v){
var ret__18734__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__18734__auto__ === com.rpl.specter.NONE)){
return curr__18733__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18734__auto__)){
return cljs.core.reduced(ret__18734__auto__);
} else {
return ret__18734__auto__;
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
if(typeof com.rpl.specter.t_com$rpl$specter29785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29785 = (function (meta29786){
this.meta29786 = meta29786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter29785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29787,meta29786__$1){
var self__ = this;
var _29787__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29785(meta29786__$1));
});


com.rpl.specter.t_com$rpl$specter29785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29787){
var self__ = this;
var _29787__$1 = this;
return self__.meta29786;
});


com.rpl.specter.t_com$rpl$specter29785.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter29785.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__27024__auto____$1){
return (function (curr__18733__auto__,v){
var ret__18734__auto__ = next_fn(v);
if((ret__18734__auto__ === com.rpl.specter.NONE)){
return curr__18733__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18734__auto__)){
return cljs.core.reduced(ret__18734__auto__);
} else {
return ret__18734__auto__;
}
}
});})(next_fn,this__27024__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals(structure));
});


com.rpl.specter.t_com$rpl$specter29785.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta29786], null);
});

com.rpl.specter.t_com$rpl$specter29785.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29785.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29785";

com.rpl.specter.t_com$rpl$specter29785.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter29785");
});

com.rpl.specter.__GT_t_com$rpl$specter29785 = (function com$rpl$specter$__GT_t_com$rpl$specter29785(meta29786){
return (new com.rpl.specter.t_com$rpl$specter29785(meta29786));
});

}

return (new com.rpl.specter.t_com$rpl$specter29785(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__18733__auto__,k){
var ret__18734__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__18734__auto__ === com.rpl.specter.NONE)){
return curr__18733__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18734__auto__)){
return cljs.core.reduced(ret__18734__auto__);
} else {
return ret__18734__auto__;
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
if(typeof com.rpl.specter.t_com$rpl$specter29795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29795 = (function (meta29796){
this.meta29796 = meta29796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter29795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29797,meta29796__$1){
var self__ = this;
var _29797__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29795(meta29796__$1));
});


com.rpl.specter.t_com$rpl$specter29795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29797){
var self__ = this;
var _29797__$1 = this;
return self__.meta29796;
});


com.rpl.specter.t_com$rpl$specter29795.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter29795.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__27024__auto____$1){
return (function (curr__18733__auto__,k){
var ret__18734__auto__ = next_fn(k);
if((ret__18734__auto__ === com.rpl.specter.NONE)){
return curr__18733__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18734__auto__)){
return cljs.core.reduced(ret__18734__auto__);
} else {
return ret__18734__auto__;
}
}
});})(next_fn,this__27024__auto____$1))
,com.rpl.specter.NONE,cljs.core.keys(structure));
});


com.rpl.specter.t_com$rpl$specter29795.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter29795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta29796], null);
});

com.rpl.specter.t_com$rpl$specter29795.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29795.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29795";

com.rpl.specter.t_com$rpl$specter29795.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter29795");
});

com.rpl.specter.__GT_t_com$rpl$specter29795 = (function com$rpl$specter$__GT_t_com$rpl$specter29795(meta29796){
return (new com.rpl.specter.t_com$rpl$specter29795(meta29796));
});

}

return (new com.rpl.specter.t_com$rpl$specter29795(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter29800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29800 = (function (meta29801){
this.meta29801 = meta29801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter29800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29802,meta29801__$1){
var self__ = this;
var _29802__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29800(meta29801__$1));
});


com.rpl.specter.t_com$rpl$specter29800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29802){
var self__ = this;
var _29802__$1 = this;
return self__.meta29801;
});


com.rpl.specter.t_com$rpl$specter29800.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter29800.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27631__auto__,vals__27632__auto__,structure,next_fn__27633__auto__){
var self__ = this;
var this__27631__auto____$1 = this;
var G__29809 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__27632__auto__,structure);
var G__29810 = structure;
return (next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2(G__29809,G__29810) : next_fn__27633__auto__.call(null,G__29809,G__29810));
});


com.rpl.specter.t_com$rpl$specter29800.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27631__auto__,vals__27632__auto__,structure,next_fn__27633__auto__){
var self__ = this;
var this__27631__auto____$1 = this;
var G__29811 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__27632__auto__,structure);
var G__29812 = structure;
return (next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2(G__29811,G__29812) : next_fn__27633__auto__.call(null,G__29811,G__29812));
});

com.rpl.specter.t_com$rpl$specter29800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta29801], null);
});

com.rpl.specter.t_com$rpl$specter29800.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29800.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29800";

com.rpl.specter.t_com$rpl$specter29800.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter29800");
});

com.rpl.specter.__GT_t_com$rpl$specter29800 = (function com$rpl$specter$__GT_t_com$rpl$specter29800(meta29801){
return (new com.rpl.specter.t_com$rpl$specter29800(meta29801));
});

}

return (new com.rpl.specter.t_com$rpl$specter29800(null));
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
var G__29910 = structure;
var G__29911 = s;
var G__29912 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__29913 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__29910,G__29911,G__29912,G__29913) : com.rpl.specter.navs.srange_transform.call(null,G__29910,G__29911,G__29912,G__29913));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if(typeof com.rpl.specter.t_com$rpl$specter29920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29920 = (function (start_index_fn,end_index_fn,meta29921){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta29921 = meta29921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter29920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29922,meta29921__$1){
var self__ = this;
var _29922__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29920(self__.start_index_fn,self__.end_index_fn,meta29921__$1));
});


com.rpl.specter.t_com$rpl$specter29920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29922){
var self__ = this;
var _29922__$1 = this;
return self__.meta29921;
});


com.rpl.specter.t_com$rpl$specter29920.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter29920.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
});


com.rpl.specter.t_com$rpl$specter29920.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__29962 = structure;
var G__29963 = s;
var G__29964 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__29965 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__29962,G__29963,G__29964,G__29965) : com.rpl.specter.navs.srange_transform.call(null,G__29962,G__29963,G__29964,G__29965));
});

com.rpl.specter.t_com$rpl$specter29920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start_DASH_index_DASH_fn,cljs.core.cst$sym$end_DASH_index_DASH_fn,cljs.core.cst$sym$meta29921], null);
});

com.rpl.specter.t_com$rpl$specter29920.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29920.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29920";

com.rpl.specter.t_com$rpl$specter29920.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter29920");
});

com.rpl.specter.__GT_t_com$rpl$specter29920 = (function com$rpl$specter$__GT_t_com$rpl$specter29920(start_index_fn__$1,end_index_fn__$1,meta29921){
return (new com.rpl.specter.t_com$rpl$specter29920(start_index_fn__$1,end_index_fn__$1,meta29921));
});

}

return (new com.rpl.specter.t_com$rpl$specter29920(start_index_fn,end_index_fn,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter29994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29994 = (function (start,end,meta29995){
this.start = start;
this.end = end;
this.meta29995 = meta29995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter29994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29996,meta29995__$1){
var self__ = this;
var _29996__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29994(self__.start,self__.end,meta29995__$1));
});


com.rpl.specter.t_com$rpl$specter29994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29996){
var self__ = this;
var _29996__$1 = this;
return self__.meta29995;
});


com.rpl.specter.t_com$rpl$specter29994.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter29994.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
});


com.rpl.specter.t_com$rpl$specter29994.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
});

com.rpl.specter.t_com$rpl$specter29994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$end,cljs.core.cst$sym$meta29995], null);
});

com.rpl.specter.t_com$rpl$specter29994.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter29994.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29994";

com.rpl.specter.t_com$rpl$specter29994.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter29994");
});

com.rpl.specter.__GT_t_com$rpl$specter29994 = (function com$rpl$specter$__GT_t_com$rpl$specter29994(start__$1,end__$1,meta29995){
return (new com.rpl.specter.t_com$rpl$specter29994(start__$1,end__$1,meta29995));
});

}

return (new com.rpl.specter.t_com$rpl$specter29994(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__18733__auto__,p__30040){
var vec__30041 = p__30040;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30041,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30041,(1),null);
var ret__18734__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__18734__auto__ === com.rpl.specter.NONE)){
return curr__18733__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18734__auto__)){
return cljs.core.reduced(ret__18734__auto__);
} else {
return ret__18734__auto__;
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
if(typeof com.rpl.specter.t_com$rpl$specter30046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30046 = (function (pred,meta30047){
this.pred = pred;
this.meta30047 = meta30047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30048,meta30047__$1){
var self__ = this;
var _30048__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30046(self__.pred,meta30047__$1));
});


com.rpl.specter.t_com$rpl$specter30046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30048){
var self__ = this;
var _30048__$1 = this;
return self__.meta30047;
});


com.rpl.specter.t_com$rpl$specter30046.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30046.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (next_fn,this__27024__auto____$1){
return (function (curr__18733__auto__,p__30055){
var vec__30056 = p__30055;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30056,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30056,(1),null);
var ret__18734__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__18734__auto__ === com.rpl.specter.NONE)){
return curr__18733__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18734__auto__)){
return cljs.core.reduced(ret__18734__auto__);
} else {
return ret__18734__auto__;
}
}
});})(next_fn,this__27024__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
});


com.rpl.specter.t_com$rpl$specter30046.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter30046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pred,cljs.core.cst$sym$meta30047], null);
});

com.rpl.specter.t_com$rpl$specter30046.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30046.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30046";

com.rpl.specter.t_com$rpl$specter30046.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30046");
});

com.rpl.specter.__GT_t_com$rpl$specter30046 = (function com$rpl$specter$__GT_t_com$rpl$specter30046(pred__$1,meta30047){
return (new com.rpl.specter.t_com$rpl$specter30046(pred__$1,meta30047));
});

}

return (new com.rpl.specter.t_com$rpl$specter30046(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__30115 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30115) : next_fn.call(null,G__30115));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = (function (){var G__30116 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30116) : next_fn.call(null,G__30116));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter30117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30117 = (function (meta30118){
this.meta30118 = meta30118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30119,meta30118__$1){
var self__ = this;
var _30119__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30117(meta30118__$1));
});


com.rpl.specter.t_com$rpl$specter30117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30119){
var self__ = this;
var _30119__$1 = this;
return self__.meta30118;
});


com.rpl.specter.t_com$rpl$specter30117.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30117.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});


com.rpl.specter.t_com$rpl$specter30117.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

com.rpl.specter.t_com$rpl$specter30117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30118], null);
});

com.rpl.specter.t_com$rpl$specter30117.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30117.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30117";

com.rpl.specter.t_com$rpl$specter30117.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30117");
});

com.rpl.specter.__GT_t_com$rpl$specter30117 = (function com$rpl$specter$__GT_t_com$rpl$specter30117(meta30118){
return (new com.rpl.specter.t_com$rpl$specter30117(meta30118));
});

}

return (new com.rpl.specter.t_com$rpl$specter30117(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__30128 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30128) : next_fn.call(null,G__30128));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__30129 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30129) : next_fn.call(null,G__30129));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter30132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30132 = (function (meta30133){
this.meta30133 = meta30133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30134,meta30133__$1){
var self__ = this;
var _30134__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30132(meta30133__$1));
});


com.rpl.specter.t_com$rpl$specter30132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30134){
var self__ = this;
var _30134__$1 = this;
return self__.meta30133;
});


com.rpl.specter.t_com$rpl$specter30132.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30132.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});


com.rpl.specter.t_com$rpl$specter30132.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

com.rpl.specter.t_com$rpl$specter30132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30133], null);
});

com.rpl.specter.t_com$rpl$specter30132.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30132.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30132";

com.rpl.specter.t_com$rpl$specter30132.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30132");
});

com.rpl.specter.__GT_t_com$rpl$specter30132 = (function com$rpl$specter$__GT_t_com$rpl$specter30132(meta30133){
return (new com.rpl.specter.t_com$rpl$specter30132(meta30133));
});

}

return (new com.rpl.specter.t_com$rpl$specter30132(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter30146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30146 = (function (meta30147){
this.meta30147 = meta30147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30148,meta30147__$1){
var self__ = this;
var _30148__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30146(meta30147__$1));
});


com.rpl.specter.t_com$rpl$specter30146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30148){
var self__ = this;
var _30148__$1 = this;
return self__.meta30147;
});


com.rpl.specter.t_com$rpl$specter30146.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30146.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});


com.rpl.specter.t_com$rpl$specter30146.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
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

com.rpl.specter.t_com$rpl$specter30146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30147], null);
});

com.rpl.specter.t_com$rpl$specter30146.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30146.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30146";

com.rpl.specter.t_com$rpl$specter30146.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30146");
});

com.rpl.specter.__GT_t_com$rpl$specter30146 = (function com$rpl$specter$__GT_t_com$rpl$specter30146(meta30147){
return (new com.rpl.specter.t_com$rpl$specter30146(meta30147));
});

}

return (new com.rpl.specter.t_com$rpl$specter30146(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter30159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30159 = (function (meta30160){
this.meta30160 = meta30160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30161,meta30160__$1){
var self__ = this;
var _30161__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30159(meta30160__$1));
});


com.rpl.specter.t_com$rpl$specter30159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30161){
var self__ = this;
var _30161__$1 = this;
return self__.meta30160;
});


com.rpl.specter.t_com$rpl$specter30159.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30159.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});


com.rpl.specter.t_com$rpl$specter30159.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter30159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30160], null);
});

com.rpl.specter.t_com$rpl$specter30159.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30159.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30159";

com.rpl.specter.t_com$rpl$specter30159.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30159");
});

com.rpl.specter.__GT_t_com$rpl$specter30159 = (function com$rpl$specter$__GT_t_com$rpl$specter30159(meta30160){
return (new com.rpl.specter.t_com$rpl$specter30159(meta30160));
});

}

return (new com.rpl.specter.t_com$rpl$specter30159(null));
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
if(typeof com.rpl.specter.t_com$rpl$specter30186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30186 = (function (meta30187){
this.meta30187 = meta30187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30188,meta30187__$1){
var self__ = this;
var _30188__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30186(meta30187__$1));
});


com.rpl.specter.t_com$rpl$specter30186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30188){
var self__ = this;
var _30188__$1 = this;
return self__.meta30187;
});


com.rpl.specter.t_com$rpl$specter30186.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30186.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(com.rpl.specter.NONE);
});


com.rpl.specter.t_com$rpl$specter30186.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

com.rpl.specter.t_com$rpl$specter30186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30187], null);
});

com.rpl.specter.t_com$rpl$specter30186.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30186.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30186";

com.rpl.specter.t_com$rpl$specter30186.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30186");
});

com.rpl.specter.__GT_t_com$rpl$specter30186 = (function com$rpl$specter$__GT_t_com$rpl$specter30186(meta30187){
return (new com.rpl.specter.t_com$rpl$specter30186(meta30187));
});

}

return (new com.rpl.specter.t_com$rpl$specter30186(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__30201 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30201) : next_fn.call(null,G__30201));
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
if(typeof com.rpl.specter.t_com$rpl$specter30204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30204 = (function (aset,meta30205){
this.aset = aset;
this.meta30205 = meta30205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30206,meta30205__$1){
var self__ = this;
var _30206__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30204(self__.aset,meta30205__$1));
});


com.rpl.specter.t_com$rpl$specter30204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30206){
var self__ = this;
var _30206__$1 = this;
return self__.meta30205;
});


com.rpl.specter.t_com$rpl$specter30204.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30204.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
});


com.rpl.specter.t_com$rpl$specter30204.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter30204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$aset,cljs.core.cst$sym$meta30205], null);
});

com.rpl.specter.t_com$rpl$specter30204.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30204.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30204";

com.rpl.specter.t_com$rpl$specter30204.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30204");
});

com.rpl.specter.__GT_t_com$rpl$specter30204 = (function com$rpl$specter$__GT_t_com$rpl$specter30204(aset__$1,meta30205){
return (new com.rpl.specter.t_com$rpl$specter30204(aset__$1,meta30205));
});

}

return (new com.rpl.specter.t_com$rpl$specter30204(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__30217 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30217) : next_fn.call(null,G__30217));
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
if(typeof com.rpl.specter.t_com$rpl$specter30219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30219 = (function (m_keys,meta30220){
this.m_keys = m_keys;
this.meta30220 = meta30220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30221,meta30220__$1){
var self__ = this;
var _30221__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30219(self__.m_keys,meta30220__$1));
});


com.rpl.specter.t_com$rpl$specter30219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30221){
var self__ = this;
var _30221__$1 = this;
return self__.meta30220;
});


com.rpl.specter.t_com$rpl$specter30219.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30219.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
});


com.rpl.specter.t_com$rpl$specter30219.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
});

com.rpl.specter.t_com$rpl$specter30219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m_DASH_keys,cljs.core.cst$sym$meta30220], null);
});

com.rpl.specter.t_com$rpl$specter30219.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30219.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30219";

com.rpl.specter.t_com$rpl$specter30219.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30219");
});

com.rpl.specter.__GT_t_com$rpl$specter30219 = (function com$rpl$specter$__GT_t_com$rpl$specter30219(m_keys__$1,meta30220){
return (new com.rpl.specter.t_com$rpl$specter30219(m_keys__$1,meta30220));
});

}

return (new com.rpl.specter.t_com$rpl$specter30219(m_keys,null));
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
var G__30267__delegate = function (path){
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if(typeof com.rpl.specter.t_com$rpl$specter30228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30228 = (function (path,late,meta30229){
this.path = path;
this.late = late;
this.meta30229 = meta30229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30230,meta30229__$1){
var self__ = this;
var _30230__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30228(self__.path,self__.late,meta30229__$1));
});


com.rpl.specter.t_com$rpl$specter30228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30230){
var self__ = this;
var _30230__$1 = this;
return self__.meta30229;
});


com.rpl.specter.t_com$rpl$specter30228.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30228.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
});


com.rpl.specter.t_com$rpl$specter30228.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(transformed);
var G__30247 = self__.late;
var G__30248 = ((function (G__30247,select_result,transformed,values_to_insert,next_fn,this__27024__auto____$1){
return (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});})(G__30247,select_result,transformed,values_to_insert,next_fn,this__27024__auto____$1))
;
var G__30249 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__30247,G__30248,G__30249) : com.rpl.specter.compiled_transform.call(null,G__30247,G__30248,G__30249));
});

com.rpl.specter.t_com$rpl$specter30228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta30229], null);
});

com.rpl.specter.t_com$rpl$specter30228.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30228.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30228";

com.rpl.specter.t_com$rpl$specter30228.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30228");
});

com.rpl.specter.__GT_t_com$rpl$specter30228 = (function com$rpl$specter$__GT_t_com$rpl$specter30228(path__$1,late__$1,meta30229){
return (new com.rpl.specter.t_com$rpl$specter30228(path__$1,late__$1,meta30229));
});

}

return (new com.rpl.specter.t_com$rpl$specter30228(path,late,null));
}));
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
};
var G__30267 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30290__i = 0, G__30290__a = new Array(arguments.length -  0);
while (G__30290__i < G__30290__a.length) {G__30290__a[G__30290__i] = arguments[G__30290__i + 0]; ++G__30290__i;}
  path = new cljs.core.IndexedSeq(G__30290__a,0,null);
} 
return G__30267__delegate.call(this,path);};
G__30267.cljs$lang$maxFixedArity = 0;
G__30267.cljs$lang$applyTo = (function (arglist__30291){
var path = cljs.core.seq(arglist__30291);
return G__30267__delegate(path);
});
G__30267.cljs$core$IFn$_invoke$arity$variadic = G__30267__delegate;
return G__30267;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if(typeof com.rpl.specter.t_com$rpl$specter30292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30292 = (function (key,meta30293){
this.key = key;
this.meta30293 = meta30293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30294,meta30293__$1){
var self__ = this;
var _30294__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30292(self__.key,meta30293__$1));
});


com.rpl.specter.t_com$rpl$specter30292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30294){
var self__ = this;
var _30294__$1 = this;
return self__.meta30293;
});


com.rpl.specter.t_com$rpl$specter30292.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30292.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
});


com.rpl.specter.t_com$rpl$specter30292.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter30292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key,cljs.core.cst$sym$meta30293], null);
});

com.rpl.specter.t_com$rpl$specter30292.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30292.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30292";

com.rpl.specter.t_com$rpl$specter30292.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30292");
});

com.rpl.specter.__GT_t_com$rpl$specter30292 = (function com$rpl$specter$__GT_t_com$rpl$specter30292(key__$1,meta30293){
return (new com.rpl.specter.t_com$rpl$specter30292(key__$1,meta30293));
});

}

return (new com.rpl.specter.t_com$rpl$specter30292(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if(typeof com.rpl.specter.t_com$rpl$specter30302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30302 = (function (elem,meta30303){
this.elem = elem;
this.meta30303 = meta30303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30304,meta30303__$1){
var self__ = this;
var _30304__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30302(self__.elem,meta30303__$1));
});


com.rpl.specter.t_com$rpl$specter30302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30304){
var self__ = this;
var _30304__$1 = this;
return self__.meta30303;
});


com.rpl.specter.t_com$rpl$specter30302.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30302.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
});


com.rpl.specter.t_com$rpl$specter30302.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

com.rpl.specter.t_com$rpl$specter30302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$meta30303], null);
});

com.rpl.specter.t_com$rpl$specter30302.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30302.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30302";

com.rpl.specter.t_com$rpl$specter30302.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30302");
});

com.rpl.specter.__GT_t_com$rpl$specter30302 = (function com$rpl$specter$__GT_t_com$rpl$specter30302(elem__$1,meta30303){
return (new com.rpl.specter.t_com$rpl$specter30302(elem__$1,meta30303));
});

}

return (new com.rpl.specter.t_com$rpl$specter30302(elem,null));
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
if(typeof com.rpl.specter.t_com$rpl$specter30409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30409 = (function (afn,meta30410){
this.afn = afn;
this.meta30410 = meta30410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30411,meta30410__$1){
var self__ = this;
var _30411__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30409(self__.afn,meta30410__$1));
});


com.rpl.specter.t_com$rpl$specter30409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30411){
var self__ = this;
var _30411__$1 = this;
return self__.meta30410;
});


com.rpl.specter.t_com$rpl$specter30409.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30409.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__30420 = vals;
var G__30421 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__30420,G__30421) : next_fn.call(null,G__30420,G__30421));
});


com.rpl.specter.t_com$rpl$specter30409.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__30424 = vals;
var G__30425 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__30424,G__30425) : next_fn.call(null,G__30424,G__30425));
});

com.rpl.specter.t_com$rpl$specter30409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$meta30410], null);
});

com.rpl.specter.t_com$rpl$specter30409.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30409.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30409";

com.rpl.specter.t_com$rpl$specter30409.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30409");
});

com.rpl.specter.__GT_t_com$rpl$specter30409 = (function com$rpl$specter$__GT_t_com$rpl$specter30409(afn__$1,meta30410){
return (new com.rpl.specter.t_com$rpl$specter30409(afn__$1,meta30410));
});

}

return (new com.rpl.specter.t_com$rpl$specter30409(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__30442 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30442) : next_fn.call(null,G__30442));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__30445 = (function (){var G__30446 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30446) : next_fn.call(null,G__30446));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__30445) : unparse_fn.call(null,G__30445));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if(typeof com.rpl.specter.t_com$rpl$specter30447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30447 = (function (parse_fn,unparse_fn,meta30448){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta30448 = meta30448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30449,meta30448__$1){
var self__ = this;
var _30449__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30447(self__.parse_fn,self__.unparse_fn,meta30448__$1));
});


com.rpl.specter.t_com$rpl$specter30447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30449){
var self__ = this;
var _30449__$1 = this;
return self__.meta30448;
});


com.rpl.specter.t_com$rpl$specter30447.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30447.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
});


com.rpl.specter.t_com$rpl$specter30447.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
var G__30455 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__30455) : self__.unparse_fn.call(null,G__30455));
});

com.rpl.specter.t_com$rpl$specter30447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parse_DASH_fn,cljs.core.cst$sym$unparse_DASH_fn,cljs.core.cst$sym$meta30448], null);
});

com.rpl.specter.t_com$rpl$specter30447.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30447.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30447";

com.rpl.specter.t_com$rpl$specter30447.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30447");
});

com.rpl.specter.__GT_t_com$rpl$specter30447 = (function com$rpl$specter$__GT_t_com$rpl$specter30447(parse_fn__$1,unparse_fn__$1,meta30448){
return (new com.rpl.specter.t_com$rpl$specter30447(parse_fn__$1,unparse_fn__$1,meta30448));
});

}

return (new com.rpl.specter.t_com$rpl$specter30447(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__30481 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30481) : next_fn.call(null,G__30481));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter30483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30483 = (function (meta30484){
this.meta30484 = meta30484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30485,meta30484__$1){
var self__ = this;
var _30485__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30483(meta30484__$1));
});


com.rpl.specter.t_com$rpl$specter30483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30485){
var self__ = this;
var _30485__$1 = this;
return self__.meta30484;
});


com.rpl.specter.t_com$rpl$specter30483.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30483.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(cljs.core.deref(structure));
});


com.rpl.specter.t_com$rpl$specter30483.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter30483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30484], null);
});

com.rpl.specter.t_com$rpl$specter30483.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30483.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30483";

com.rpl.specter.t_com$rpl$specter30483.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30483");
});

com.rpl.specter.__GT_t_com$rpl$specter30483 = (function com$rpl$specter$__GT_t_com$rpl$specter30483(meta30484){
return (new com.rpl.specter.t_com$rpl$specter30483(meta30484));
});

}

return (new com.rpl.specter.t_com$rpl$specter30483(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30498__delegate = function (path){
var temp__5457__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5457__auto__)){
var afn = temp__5457__auto__;
return afn;
} else {
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5457__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter30495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30495 = (function (path,temp__5457__auto__,late,meta30496){
this.path = path;
this.temp__5457__auto__ = temp__5457__auto__;
this.late = late;
this.meta30496 = meta30496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5457__auto__){
return (function (_30497,meta30496__$1){
var self__ = this;
var _30497__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30495(self__.path,self__.temp__5457__auto__,self__.late,meta30496__$1));
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter30495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5457__auto__){
return (function (_30497){
var self__ = this;
var _30497__$1 = this;
return self__.meta30496;
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter30495.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30495.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5457__auto__){
return (function (p1__30493_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__30493_SHARP_);
});})(this$__$1,temp__5457__auto__))
,vals,structure,next_fn);
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter30495.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5457__auto__){
return (function (p1__30494_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__30494_SHARP_);
});})(this$__$1,temp__5457__auto__))
,vals,structure,next_fn);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter30495.getBasis = ((function (temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$temp__5457__auto__,cljs.core.cst$sym$late,cljs.core.cst$sym$meta30496], null);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter30495.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30495.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30495";

com.rpl.specter.t_com$rpl$specter30495.cljs$lang$ctorPrWriter = ((function (temp__5457__auto__){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30495");
});})(temp__5457__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter30495 = ((function (temp__5457__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter30495(path__$1,temp__5457__auto____$1,late__$1,meta30496){
return (new com.rpl.specter.t_com$rpl$specter30495(path__$1,temp__5457__auto____$1,late__$1,meta30496));
});})(temp__5457__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter30495(path,temp__5457__auto__,late,null));
});})(temp__5457__auto__))
);
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
}
};
var G__30498 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30501__i = 0, G__30501__a = new Array(arguments.length -  0);
while (G__30501__i < G__30501__a.length) {G__30501__a[G__30501__i] = arguments[G__30501__i + 0]; ++G__30501__i;}
  path = new cljs.core.IndexedSeq(G__30501__a,0,null);
} 
return G__30498__delegate.call(this,path);};
G__30498.cljs$lang$maxFixedArity = 0;
G__30498.cljs$lang$applyTo = (function (arglist__30503){
var path = cljs.core.seq(arglist__30503);
return G__30498__delegate(path);
});
G__30498.cljs$core$IFn$_invoke$arity$variadic = G__30498__delegate;
return G__30498;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30517__delegate = function (path){
var temp__5457__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5457__auto__)){
var afn = temp__5457__auto__;
return ((function (afn,temp__5457__auto__){
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
;})(afn,temp__5457__auto__))
} else {
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5457__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter30507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30507 = (function (path,temp__5457__auto__,late,meta30508){
this.path = path;
this.temp__5457__auto__ = temp__5457__auto__;
this.late = late;
this.meta30508 = meta30508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5457__auto__){
return (function (_30509,meta30508__$1){
var self__ = this;
var _30509__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30507(self__.path,self__.temp__5457__auto__,self__.late,meta30508__$1));
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter30507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5457__auto__){
return (function (_30509){
var self__ = this;
var _30509__$1 = this;
return self__.meta30508;
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter30507.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30507.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select(((function (this$__$1,temp__5457__auto__){
return (function (p1__30505_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__30505_SHARP_);
});})(this$__$1,temp__5457__auto__))
,vals,structure,next_fn);
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter30507.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform(((function (this$__$1,temp__5457__auto__){
return (function (p1__30506_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__30506_SHARP_);
});})(this$__$1,temp__5457__auto__))
,vals,structure,next_fn);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter30507.getBasis = ((function (temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$temp__5457__auto__,cljs.core.cst$sym$late,cljs.core.cst$sym$meta30508], null);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter30507.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30507.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30507";

com.rpl.specter.t_com$rpl$specter30507.cljs$lang$ctorPrWriter = ((function (temp__5457__auto__){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30507");
});})(temp__5457__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter30507 = ((function (temp__5457__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter30507(path__$1,temp__5457__auto____$1,late__$1,meta30508){
return (new com.rpl.specter.t_com$rpl$specter30507(path__$1,temp__5457__auto____$1,late__$1,meta30508));
});})(temp__5457__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter30507(path,temp__5457__auto__,late,null));
});})(temp__5457__auto__))
);
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
}
};
var G__30517 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30527__i = 0, G__30527__a = new Array(arguments.length -  0);
while (G__30527__i < G__30527__a.length) {G__30527__a[G__30527__i] = arguments[G__30527__i + 0]; ++G__30527__i;}
  path = new cljs.core.IndexedSeq(G__30527__a,0,null);
} 
return G__30517__delegate.call(this,path);};
G__30517.cljs$lang$maxFixedArity = 0;
G__30517.cljs$lang$applyTo = (function (arglist__30528){
var path = cljs.core.seq(arglist__30528);
return G__30517__delegate(path);
});
G__30517.cljs$core$IFn$_invoke$arity$variadic = G__30517__delegate;
return G__30517;
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
var G__30531__delegate = function (path){
var G__30529 = com.rpl.specter.ALL;
var G__30530 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__30529,G__30530) : com.rpl.specter.subselect.call(null,G__30529,G__30530));
};
var G__30531 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30532__i = 0, G__30532__a = new Array(arguments.length -  0);
while (G__30532__i < G__30532__a.length) {G__30532__a[G__30532__i] = arguments[G__30532__i + 0]; ++G__30532__i;}
  path = new cljs.core.IndexedSeq(G__30532__a,0,null);
} 
return G__30531__delegate.call(this,path);};
G__30531.cljs$lang$maxFixedArity = 0;
G__30531.cljs$lang$applyTo = (function (arglist__30533){
var path = cljs.core.seq(arglist__30533);
return G__30531__delegate(path);
});
G__30531.cljs$core$IFn$_invoke$arity$variadic = G__30531__delegate;
return G__30531;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter30537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30537 = (function (path,update_fn,late,late_fn,meta30538){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta30538 = meta30538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30539,meta30538__$1){
var self__ = this;
var _30539__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30537(self__.path,self__.update_fn,self__.late,self__.late_fn,meta30538__$1));
});


com.rpl.specter.t_com$rpl$specter30537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30539){
var self__ = this;
var _30539__$1 = this;
return self__.meta30538;
});


com.rpl.specter.t_com$rpl$specter30537.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30537.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});


com.rpl.specter.t_com$rpl$specter30537.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
});

com.rpl.specter.t_com$rpl$specter30537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$update_DASH_fn,cljs.core.cst$sym$late,cljs.core.cst$sym$late_DASH_fn,cljs.core.cst$sym$meta30538], null);
});

com.rpl.specter.t_com$rpl$specter30537.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30537.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30537";

com.rpl.specter.t_com$rpl$specter30537.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30537");
});

com.rpl.specter.__GT_t_com$rpl$specter30537 = (function com$rpl$specter$__GT_t_com$rpl$specter30537(path__$1,update_fn__$1,late__$1,late_fn__$1,meta30538){
return (new com.rpl.specter.t_com$rpl$specter30537(path__$1,update_fn__$1,late__$1,late_fn__$1,meta30538));
});

}

return (new com.rpl.specter.t_com$rpl$specter30537(path,update_fn,late,late_fn,null));
}));
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter30570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30570 = (function (path,reduce_fn,late,late_fn,meta30571){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta30571 = meta30571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30572,meta30571__$1){
var self__ = this;
var _30572__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30570(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta30571__$1));
});


com.rpl.specter.t_com$rpl$specter30570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30572){
var self__ = this;
var _30572__$1 = this;
return self__.meta30571;
});


com.rpl.specter.t_com$rpl$specter30570.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30570.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});


com.rpl.specter.t_com$rpl$specter30570.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
});

com.rpl.specter.t_com$rpl$specter30570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$reduce_DASH_fn,cljs.core.cst$sym$late,cljs.core.cst$sym$late_DASH_fn,cljs.core.cst$sym$meta30571], null);
});

com.rpl.specter.t_com$rpl$specter30570.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30570.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30570";

com.rpl.specter.t_com$rpl$specter30570.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30570");
});

com.rpl.specter.__GT_t_com$rpl$specter30570 = (function com$rpl$specter$__GT_t_com$rpl$specter30570(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta30571){
return (new com.rpl.specter.t_com$rpl$specter30570(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta30571));
});

}

return (new com.rpl.specter.t_com$rpl$specter30570(path,reduce_fn,late,late_fn,null));
}));
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
})),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__30588 = (function (p1__30587_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__30587_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__30588) : com.rpl.specter.pred.call(null,G__30588));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__30592 = (function (p1__30591_SHARP_){
return (p1__30591_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__30592) : com.rpl.specter.pred.call(null,G__30592));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__30596 = (function (p1__30593_SHARP_){
return (p1__30593_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__30596) : com.rpl.specter.pred.call(null,G__30596));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__30599 = (function (p1__30598_SHARP_){
return (p1__30598_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__30599) : com.rpl.specter.pred.call(null,G__30599));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__30601 = (function (p1__30600_SHARP_){
return (p1__30600_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__30601) : com.rpl.specter.pred.call(null,G__30601));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

var G__30602_30605 = com.rpl.specter.protocols.implicit_nav;
var G__30603_30606 = "null";
var G__30604_30607 = ((function (G__30602_30605,G__30603_30606){
return (function (this$){
return com.rpl.specter.STAY;
});})(G__30602_30605,G__30603_30606))
;
goog.object.set(G__30602_30605,G__30603_30606,G__30604_30607);

cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

var G__30617_30620 = com.rpl.specter.protocols.implicit_nav;
var G__30618_30621 = "function";
var G__30619_30622 = ((function (G__30617_30620,G__30618_30621){
return (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
});})(G__30617_30620,G__30618_30621))
;
goog.object.set(G__30617_30620,G__30618_30621,G__30619_30622);

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
});


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__30625 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30625) : next_fn.call(null,G__30625));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__30626 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30626) : next_fn.call(null,G__30626));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if(typeof com.rpl.specter.t_com$rpl$specter30627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30627 = (function (v,meta30628){
this.v = v;
this.meta30628 = meta30628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30629,meta30628__$1){
var self__ = this;
var _30629__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30627(self__.v,meta30628__$1));
});


com.rpl.specter.t_com$rpl$specter30627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30629){
var self__ = this;
var _30629__$1 = this;
return self__.meta30628;
});


com.rpl.specter.t_com$rpl$specter30627.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30627.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});


com.rpl.specter.t_com$rpl$specter30627.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn((((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter30627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v,cljs.core.cst$sym$meta30628], null);
});

com.rpl.specter.t_com$rpl$specter30627.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30627.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30627";

com.rpl.specter.t_com$rpl$specter30627.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30627");
});

com.rpl.specter.__GT_t_com$rpl$specter30627 = (function com$rpl$specter$__GT_t_com$rpl$specter30627(v__$1,meta30628){
return (new com.rpl.specter.t_com$rpl$specter30627(v__$1,meta30628));
});

}

return (new com.rpl.specter.t_com$rpl$specter30627(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__30644 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__30644) : com.rpl.specter.nil__GT_val.call(null,G__30644));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__30651 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__30651) : com.rpl.specter.nil__GT_val.call(null,G__30651));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__30652 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__30652) : com.rpl.specter.nil__GT_val.call(null,G__30652));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__30653 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30653) : next_fn.call(null,G__30653));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__30658 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30658) : next_fn.call(null,G__30658));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter30660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30660 = (function (meta30661){
this.meta30661 = meta30661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30662,meta30661__$1){
var self__ = this;
var _30662__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30660(meta30661__$1));
});


com.rpl.specter.t_com$rpl$specter30660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30662){
var self__ = this;
var _30662__$1 = this;
return self__.meta30661;
});


com.rpl.specter.t_com$rpl$specter30660.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30660.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(cljs.core.meta(structure));
});


com.rpl.specter.t_com$rpl$specter30660.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
});

com.rpl.specter.t_com$rpl$specter30660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30661], null);
});

com.rpl.specter.t_com$rpl$specter30660.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30660.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30660";

com.rpl.specter.t_com$rpl$specter30660.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30660");
});

com.rpl.specter.__GT_t_com$rpl$specter30660 = (function com$rpl$specter$__GT_t_com$rpl$specter30660(meta30661){
return (new com.rpl.specter.t_com$rpl$specter30660(meta30661));
});

}

return (new com.rpl.specter.t_com$rpl$specter30660(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__30737 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30737) : next_fn.call(null,G__30737));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__30739 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30739) : next_fn.call(null,G__30739));
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
if(typeof com.rpl.specter.t_com$rpl$specter30750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30750 = (function (meta30751){
this.meta30751 = meta30751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30752,meta30751__$1){
var self__ = this;
var _30752__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30750(meta30751__$1));
});


com.rpl.specter.t_com$rpl$specter30750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30752){
var self__ = this;
var _30752__$1 = this;
return self__.meta30751;
});


com.rpl.specter.t_com$rpl$specter30750.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30750.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(cljs.core.name(structure));
});


com.rpl.specter.t_com$rpl$specter30750.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
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

com.rpl.specter.t_com$rpl$specter30750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30751], null);
});

com.rpl.specter.t_com$rpl$specter30750.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30750.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30750";

com.rpl.specter.t_com$rpl$specter30750.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30750");
});

com.rpl.specter.__GT_t_com$rpl$specter30750 = (function com$rpl$specter$__GT_t_com$rpl$specter30750(meta30751){
return (new com.rpl.specter.t_com$rpl$specter30750(meta30751));
});

}

return (new com.rpl.specter.t_com$rpl$specter30750(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__30804 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30804) : next_fn.call(null,G__30804));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__30807 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__30807) : next_fn.call(null,G__30807));
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
if(typeof com.rpl.specter.t_com$rpl$specter30809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30809 = (function (meta30810){
this.meta30810 = meta30810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30811,meta30810__$1){
var self__ = this;
var _30811__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30809(meta30810__$1));
});


com.rpl.specter.t_com$rpl$specter30809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30811){
var self__ = this;
var _30811__$1 = this;
return self__.meta30810;
});


com.rpl.specter.t_com$rpl$specter30809.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30809.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
return next_fn(cljs.core.namespace(structure));
});


com.rpl.specter.t_com$rpl$specter30809.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
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

com.rpl.specter.t_com$rpl$specter30809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30810], null);
});

com.rpl.specter.t_com$rpl$specter30809.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30809.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30809";

com.rpl.specter.t_com$rpl$specter30809.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30809");
});

com.rpl.specter.__GT_t_com$rpl$specter30809 = (function com$rpl$specter$__GT_t_com$rpl$specter30809(meta30810){
return (new com.rpl.specter.t_com$rpl$specter30809(meta30810));
});

}

return (new com.rpl.specter.t_com$rpl$specter30809(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30840__delegate = function (path){
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if(typeof com.rpl.specter.t_com$rpl$specter30829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30829 = (function (path,late,meta30830){
this.path = path;
this.late = late;
this.meta30830 = meta30830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30831,meta30830__$1){
var self__ = this;
var _30831__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30829(self__.path,self__.late,meta30830__$1));
});


com.rpl.specter.t_com$rpl$specter30829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30831){
var self__ = this;
var _30831__$1 = this;
return self__.meta30830;
});


com.rpl.specter.t_com$rpl$specter30829.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30829.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27631__auto__,vals__27632__auto__,structure,next_fn__27633__auto__){
var self__ = this;
var this__27631__auto____$1 = this;
var G__30832 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__27632__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__30833 = structure;
return (next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2(G__30832,G__30833) : next_fn__27633__auto__.call(null,G__30832,G__30833));
});


com.rpl.specter.t_com$rpl$specter30829.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27631__auto__,vals__27632__auto__,structure,next_fn__27633__auto__){
var self__ = this;
var this__27631__auto____$1 = this;
var G__30834 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__27632__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__30835 = structure;
return (next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2(G__30834,G__30835) : next_fn__27633__auto__.call(null,G__30834,G__30835));
});

com.rpl.specter.t_com$rpl$specter30829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta30830], null);
});

com.rpl.specter.t_com$rpl$specter30829.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30829.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30829";

com.rpl.specter.t_com$rpl$specter30829.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30829");
});

com.rpl.specter.__GT_t_com$rpl$specter30829 = (function com$rpl$specter$__GT_t_com$rpl$specter30829(path__$1,late__$1,meta30830){
return (new com.rpl.specter.t_com$rpl$specter30829(path__$1,late__$1,meta30830));
});

}

return (new com.rpl.specter.t_com$rpl$specter30829(path,late,null));
}));
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
};
var G__30840 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30856__i = 0, G__30856__a = new Array(arguments.length -  0);
while (G__30856__i < G__30856__a.length) {G__30856__a[G__30856__i] = arguments[G__30856__i + 0]; ++G__30856__i;}
  path = new cljs.core.IndexedSeq(G__30856__a,0,null);
} 
return G__30840__delegate.call(this,path);};
G__30840.cljs$lang$maxFixedArity = 0;
G__30840.cljs$lang$applyTo = (function (arglist__30857){
var path = cljs.core.seq(arglist__30857);
return G__30840__delegate(path);
});
G__30840.cljs$core$IFn$_invoke$arity$variadic = G__30840__delegate;
return G__30840;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30878__delegate = function (path){
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if(typeof com.rpl.specter.t_com$rpl$specter30858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30858 = (function (path,late,meta30859){
this.path = path;
this.late = late;
this.meta30859 = meta30859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30860,meta30859__$1){
var self__ = this;
var _30860__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30858(self__.path,self__.late,meta30859__$1));
});


com.rpl.specter.t_com$rpl$specter30858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30860){
var self__ = this;
var _30860__$1 = this;
return self__.meta30859;
});


com.rpl.specter.t_com$rpl$specter30858.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30858.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27631__auto__,vals__27632__auto__,structure,next_fn__27633__auto__){
var self__ = this;
var this__27631__auto____$1 = this;
var G__30864 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__27632__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__30865 = structure;
return (next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2(G__30864,G__30865) : next_fn__27633__auto__.call(null,G__30864,G__30865));
});


com.rpl.specter.t_com$rpl$specter30858.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27631__auto__,vals__27632__auto__,structure,next_fn__27633__auto__){
var self__ = this;
var this__27631__auto____$1 = this;
var G__30866 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__27632__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__30867 = structure;
return (next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2(G__30866,G__30867) : next_fn__27633__auto__.call(null,G__30866,G__30867));
});

com.rpl.specter.t_com$rpl$specter30858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta30859], null);
});

com.rpl.specter.t_com$rpl$specter30858.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30858.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30858";

com.rpl.specter.t_com$rpl$specter30858.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30858");
});

com.rpl.specter.__GT_t_com$rpl$specter30858 = (function com$rpl$specter$__GT_t_com$rpl$specter30858(path__$1,late__$1,meta30859){
return (new com.rpl.specter.t_com$rpl$specter30858(path__$1,late__$1,meta30859));
});

}

return (new com.rpl.specter.t_com$rpl$specter30858(path,late,null));
}));
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
};
var G__30878 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30889__i = 0, G__30889__a = new Array(arguments.length -  0);
while (G__30889__i < G__30889__a.length) {G__30889__a[G__30889__i] = arguments[G__30889__i + 0]; ++G__30889__i;}
  path = new cljs.core.IndexedSeq(G__30889__a,0,null);
} 
return G__30878__delegate.call(this,path);};
G__30878.cljs$lang$maxFixedArity = 0;
G__30878.cljs$lang$applyTo = (function (arglist__30890){
var path = cljs.core.seq(arglist__30890);
return G__30878__delegate(path);
});
G__30878.cljs$core$IFn$_invoke$arity$variadic = G__30878__delegate;
return G__30878;
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
if(typeof com.rpl.specter.t_com$rpl$specter30892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30892 = (function (val,meta30893){
this.val = val;
this.meta30893 = meta30893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30894,meta30893__$1){
var self__ = this;
var _30894__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30892(self__.val,meta30893__$1));
});


com.rpl.specter.t_com$rpl$specter30892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30894){
var self__ = this;
var _30894__$1 = this;
return self__.meta30893;
});


com.rpl.specter.t_com$rpl$specter30892.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30892.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27631__auto__,vals__27632__auto__,structure,next_fn__27633__auto__){
var self__ = this;
var this__27631__auto____$1 = this;
var G__30896 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__27632__auto__,self__.val);
var G__30897 = structure;
return (next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2(G__30896,G__30897) : next_fn__27633__auto__.call(null,G__30896,G__30897));
});


com.rpl.specter.t_com$rpl$specter30892.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27631__auto__,vals__27632__auto__,structure,next_fn__27633__auto__){
var self__ = this;
var this__27631__auto____$1 = this;
var G__30898 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__27632__auto__,self__.val);
var G__30899 = structure;
return (next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27633__auto__.cljs$core$IFn$_invoke$arity$2(G__30898,G__30899) : next_fn__27633__auto__.call(null,G__30898,G__30899));
});

com.rpl.specter.t_com$rpl$specter30892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta30893], null);
});

com.rpl.specter.t_com$rpl$specter30892.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30892.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30892";

com.rpl.specter.t_com$rpl$specter30892.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30892");
});

com.rpl.specter.__GT_t_com$rpl$specter30892 = (function com$rpl$specter$__GT_t_com$rpl$specter30892(val__$1,meta30893){
return (new com.rpl.specter.t_com$rpl$specter30892(val__$1,meta30893));
});

}

return (new com.rpl.specter.t_com$rpl$specter30892(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__30917__delegate = function (path){
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if(typeof com.rpl.specter.t_com$rpl$specter30905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30905 = (function (path,late,meta30906){
this.path = path;
this.late = late;
this.meta30906 = meta30906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30907,meta30906__$1){
var self__ = this;
var _30907__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30905(self__.path,self__.late,meta30906__$1));
});


com.rpl.specter.t_com$rpl$specter30905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30907){
var self__ = this;
var _30907__$1 = this;
return self__.meta30906;
});


com.rpl.specter.t_com$rpl$specter30905.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30905.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});


com.rpl.specter.t_com$rpl$specter30905.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,((function (this$__$1){
return (function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
});})(this$__$1))
);
});

com.rpl.specter.t_com$rpl$specter30905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$late,cljs.core.cst$sym$meta30906], null);
});

com.rpl.specter.t_com$rpl$specter30905.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30905.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30905";

com.rpl.specter.t_com$rpl$specter30905.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30905");
});

com.rpl.specter.__GT_t_com$rpl$specter30905 = (function com$rpl$specter$__GT_t_com$rpl$specter30905(path__$1,late__$1,meta30906){
return (new com.rpl.specter.t_com$rpl$specter30905(path__$1,late__$1,meta30906));
});

}

return (new com.rpl.specter.t_com$rpl$specter30905(path,late,null));
}));
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
};
var G__30917 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__30922__i = 0, G__30922__a = new Array(arguments.length -  0);
while (G__30922__i < G__30922__a.length) {G__30922__a[G__30922__i] = arguments[G__30922__i + 0]; ++G__30922__i;}
  path = new cljs.core.IndexedSeq(G__30922__a,0,null);
} 
return G__30917__delegate.call(this,path);};
G__30917.cljs$lang$maxFixedArity = 0;
G__30917.cljs$lang$applyTo = (function (arglist__30923){
var path = cljs.core.seq(arglist__30923);
return G__30917__delegate(path);
});
G__30917.cljs$core$IFn$_invoke$arity$variadic = G__30917__delegate;
return G__30917;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter30924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30924 = (function (meta30925){
this.meta30925 = meta30925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30926,meta30925__$1){
var self__ = this;
var _30926__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30924(meta30925__$1));
});


com.rpl.specter.t_com$rpl$specter30924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30926){
var self__ = this;
var _30926__$1 = this;
return self__.meta30925;
});


com.rpl.specter.t_com$rpl$specter30924.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30924.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__30929 = cljs.core.PersistentVector.EMPTY;
var G__30930 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__30929,G__30930) : next_fn.call(null,G__30929,G__30930));
});


com.rpl.specter.t_com$rpl$specter30924.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__30933 = cljs.core.PersistentVector.EMPTY;
var G__30934 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__30933,G__30934) : next_fn.call(null,G__30933,G__30934));
});

com.rpl.specter.t_com$rpl$specter30924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta30925], null);
});

com.rpl.specter.t_com$rpl$specter30924.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30924.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30924";

com.rpl.specter.t_com$rpl$specter30924.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30924");
});

com.rpl.specter.__GT_t_com$rpl$specter30924 = (function com$rpl$specter$__GT_t_com$rpl$specter30924(meta30925){
return (new com.rpl.specter.t_com$rpl$specter30924(meta30925));
});

}

return (new com.rpl.specter.t_com$rpl$specter30924(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__31038 = null;
var G__31038__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__31038__3 = (function (cond_p,then_path,else_path){
var temp__5457__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5457__auto__)){
var afn = temp__5457__auto__;
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (afn,temp__5457__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter30997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter30997 = (function (cond_p,then_path,else_path,temp__5457__auto__,afn,late_then,late_else,meta30998){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5457__auto__ = temp__5457__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta30998 = meta30998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter30997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__5457__auto__){
return (function (_30999,meta30998__$1){
var self__ = this;
var _30999__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter30997(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5457__auto__,self__.afn,self__.late_then,self__.late_else,meta30998__$1));
});})(afn,temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter30997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__5457__auto__){
return (function (_30999){
var self__ = this;
var _30999__$1 = this;
return self__.meta30998;
});})(afn,temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter30997.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter30997.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter30997.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter30997.getBasis = ((function (afn,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_p,cljs.core.cst$sym$then_DASH_path,cljs.core.cst$sym$else_DASH_path,cljs.core.cst$sym$temp__5457__auto__,cljs.core.cst$sym$afn,cljs.core.cst$sym$late_DASH_then,cljs.core.cst$sym$late_DASH_else,cljs.core.cst$sym$meta30998], null);
});})(afn,temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter30997.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter30997.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter30997";

com.rpl.specter.t_com$rpl$specter30997.cljs$lang$ctorPrWriter = ((function (afn,temp__5457__auto__){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter30997");
});})(afn,temp__5457__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter30997 = ((function (afn,temp__5457__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter30997(cond_p__$1,then_path__$1,else_path__$1,temp__5457__auto____$1,afn__$1,late_then__$1,late_else__$1,meta30998){
return (new com.rpl.specter.t_com$rpl$specter30997(cond_p__$1,then_path__$1,else_path__$1,temp__5457__auto____$1,afn__$1,late_then__$1,late_else__$1,meta30998));
});})(afn,temp__5457__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter30997(cond_p,then_path,else_path,temp__5457__auto__,afn,late_then,late_else,null));
});})(afn,temp__5457__auto__))
);
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
} else {
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj(((function (temp__5457__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter31027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter31027 = (function (cond_p,then_path,else_path,temp__5457__auto__,late_cond,late_then,late_else,meta31028){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5457__auto__ = temp__5457__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta31028 = meta31028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter31027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__5457__auto__){
return (function (_31029,meta31028__$1){
var self__ = this;
var _31029__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter31027(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5457__auto__,self__.late_cond,self__.late_then,self__.late_else,meta31028__$1));
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter31027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__5457__auto__){
return (function (_31029){
var self__ = this;
var _31029__$1 = this;
return self__.meta31028;
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter31027.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter31027.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,((function (this$__$1,temp__5457__auto__){
return (function (p1__30991_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__30991_SHARP_);
});})(this$__$1,temp__5457__auto__))
,self__.late_then,self__.late_else);
});})(temp__5457__auto__))
;


com.rpl.specter.t_com$rpl$specter31027.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__5457__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,((function (this$__$1,temp__5457__auto__){
return (function (p1__30992_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__30992_SHARP_);
});})(this$__$1,temp__5457__auto__))
,self__.late_then,self__.late_else);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter31027.getBasis = ((function (temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_p,cljs.core.cst$sym$then_DASH_path,cljs.core.cst$sym$else_DASH_path,cljs.core.cst$sym$temp__5457__auto__,cljs.core.cst$sym$late_DASH_cond,cljs.core.cst$sym$late_DASH_then,cljs.core.cst$sym$late_DASH_else,cljs.core.cst$sym$meta31028], null);
});})(temp__5457__auto__))
;

com.rpl.specter.t_com$rpl$specter31027.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter31027.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter31027";

com.rpl.specter.t_com$rpl$specter31027.cljs$lang$ctorPrWriter = ((function (temp__5457__auto__){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter31027");
});})(temp__5457__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter31027 = ((function (temp__5457__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter31027(cond_p__$1,then_path__$1,else_path__$1,temp__5457__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta31028){
return (new com.rpl.specter.t_com$rpl$specter31027(cond_p__$1,then_path__$1,else_path__$1,temp__5457__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta31028));
});})(temp__5457__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter31027(cond_p,then_path,else_path,temp__5457__auto__,late_cond,late_then,late_else,null));
});})(temp__5457__auto__))
);
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
}
});
G__31038 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__31038__2.call(this,cond_p,then_path);
case 3:
return G__31038__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31038.cljs$core$IFn$_invoke$arity$2 = G__31038__2;
G__31038.cljs$core$IFn$_invoke$arity$3 = G__31038__3;
return G__31038;
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
var G__31072__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p,p__31063){
var vec__31064 = p__31063;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31064,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31064,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__31072 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__31076__i = 0, G__31076__a = new Array(arguments.length -  0);
while (G__31076__i < G__31076__a.length) {G__31076__a[G__31076__i] = arguments[G__31076__i + 0]; ++G__31076__i;}
  conds = new cljs.core.IndexedSeq(G__31076__a,0,null);
} 
return G__31072__delegate.call(this,conds);};
G__31072.cljs$lang$maxFixedArity = 0;
G__31072.cljs$lang$applyTo = (function (arglist__31078){
var conds = cljs.core.seq(arglist__31078);
return G__31072__delegate(conds);
});
G__31072.cljs$core$IFn$_invoke$arity$variadic = G__31072__delegate;
return G__31072;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__31134 = null;
var G__31134__0 = (function (){
return com.rpl.specter.STAY;
});
var G__31134__1 = (function (path){
return path;
});
var G__31134__2 = (function (path1,path2){
var builder__27634__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter31082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter31082 = (function (path1,path2,late1,late2,meta31083){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta31083 = meta31083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.t_com$rpl$specter31082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31084,meta31083__$1){
var self__ = this;
var _31084__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter31082(self__.path1,self__.path2,self__.late1,self__.late2,meta31083__$1));
});


com.rpl.specter.t_com$rpl$specter31082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31084){
var self__ = this;
var _31084__$1 = this;
return self__.meta31083;
});


com.rpl.specter.t_com$rpl$specter31082.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.t_com$rpl$specter31082.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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


com.rpl.specter.t_com$rpl$specter31082.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter31082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path1,cljs.core.cst$sym$path2,cljs.core.cst$sym$late1,cljs.core.cst$sym$late2,cljs.core.cst$sym$meta31083], null);
});

com.rpl.specter.t_com$rpl$specter31082.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter31082.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter31082";

com.rpl.specter.t_com$rpl$specter31082.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter/t_com$rpl$specter31082");
});

com.rpl.specter.__GT_t_com$rpl$specter31082 = (function com$rpl$specter$__GT_t_com$rpl$specter31082(path1__$1,path2__$1,late1__$1,late2__$1,meta31083){
return (new com.rpl.specter.t_com$rpl$specter31082(path1__$1,path2__$1,late1__$1,late2__$1,meta31083));
});

}

return (new com.rpl.specter.t_com$rpl$specter31082(path1,path2,late1,late2,null));
}));
var curr_params__27635__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__27635__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__27634__auto__,curr_params__27635__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__27634__auto__,curr_params__27635__auto__,null);
}
});
var G__31134__3 = (function() { 
var G__31147__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__31147 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__31149__i = 0, G__31149__a = new Array(arguments.length -  2);
while (G__31149__i < G__31149__a.length) {G__31149__a[G__31149__i] = arguments[G__31149__i + 2]; ++G__31149__i;}
  paths = new cljs.core.IndexedSeq(G__31149__a,0,null);
} 
return G__31147__delegate.call(this,path1,path2,paths);};
G__31147.cljs$lang$maxFixedArity = 2;
G__31147.cljs$lang$applyTo = (function (arglist__31150){
var path1 = cljs.core.first(arglist__31150);
arglist__31150 = cljs.core.next(arglist__31150);
var path2 = cljs.core.first(arglist__31150);
var paths = cljs.core.rest(arglist__31150);
return G__31147__delegate(path1,path2,paths);
});
G__31147.cljs$core$IFn$_invoke$arity$variadic = G__31147__delegate;
return G__31147;
})()
;
G__31134 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__31134__0.call(this);
case 1:
return G__31134__1.call(this,path1);
case 2:
return G__31134__2.call(this,path1,path2);
default:
var G__31152 = null;
if (arguments.length > 2) {
var G__31153__i = 0, G__31153__a = new Array(arguments.length -  2);
while (G__31153__i < G__31153__a.length) {G__31153__a[G__31153__i] = arguments[G__31153__i + 2]; ++G__31153__i;}
G__31152 = new cljs.core.IndexedSeq(G__31153__a,0,null);
}
return G__31134__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__31152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31134.cljs$lang$maxFixedArity = 2;
G__31134.cljs$lang$applyTo = G__31134__3.cljs$lang$applyTo;
G__31134.cljs$core$IFn$_invoke$arity$0 = G__31134__0;
G__31134.cljs$core$IFn$_invoke$arity$1 = G__31134__1;
G__31134.cljs$core$IFn$_invoke$arity$2 = G__31134__2;
G__31134.cljs$core$IFn$_invoke$arity$variadic = G__31134__3.cljs$core$IFn$_invoke$arity$variadic;
return G__31134;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__31155__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__31155 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__31156__i = 0, G__31156__a = new Array(arguments.length -  0);
while (G__31156__i < G__31156__a.length) {G__31156__a[G__31156__i] = arguments[G__31156__i + 0]; ++G__31156__i;}
  path = new cljs.core.IndexedSeq(G__31156__a,0,null);
} 
return G__31155__delegate.call(this,path);};
G__31155.cljs$lang$maxFixedArity = 0;
G__31155.cljs$lang$applyTo = (function (arglist__31157){
var path = cljs.core.seq(arglist__31157);
return G__31155__delegate(path);
});
G__31155.cljs$core$IFn$_invoke$arity$variadic = G__31155__delegate;
return G__31155;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__31161__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__31161 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__31162__i = 0, G__31162__a = new Array(arguments.length -  0);
while (G__31162__i < G__31162__a.length) {G__31162__a[G__31162__i] = arguments[G__31162__i + 0]; ++G__31162__i;}
  path = new cljs.core.IndexedSeq(G__31162__a,0,null);
} 
return G__31161__delegate.call(this,path);};
G__31161.cljs$lang$maxFixedArity = 0;
G__31161.cljs$lang$applyTo = (function (arglist__31163){
var path = cljs.core.seq(arglist__31163);
return G__31161__delegate(path);
});
G__31161.cljs$core$IFn$_invoke$arity$variadic = G__31161__delegate;
return G__31161;
})()
),cljs.core.assoc,cljs.core.cst$kw$dynamicnav,true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__27641__auto__ = com.rpl.specter.pathcache31165;
var info__27641__auto____$1 = (((info__27641__auto__ == null))?(function (){var info31166 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},cljs.core.cst$sym$com$rpl$specter_SLASH_cond_DASH_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$cond_DASH_path,"resources/public/js/prod/com/rpl/specter.cljc",25,1,1237,1237,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.\n\n   The input paths may be parameterized, in which case the result of cond-path\n   will be parameterized in the order of which the parameterized navigators\n   were declared.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),cljs.core.cst$sym$cond_DASH_path),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},cljs.core.cst$sym$com$rpl$specter_SLASH_pred,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$direct_DASH_nav,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$pred,"resources/public/js/prod/com/rpl/specter.cljc",7,1,true,1042,1046,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. This is the\n          late-bound parameterized version of using a function directly in a path.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),cljs.core.cst$sym$pred),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,cljs.core.cst$sym$afn)], null),cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},cljs.core.cst$sym$com$rpl$specter_SLASH_STAY,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$STAY,"resources/public/js/prod/com/rpl/specter.cljc",7,1,626,628,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),cljs.core.cst$sym$STAY),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$tag,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$coll_QMARK_,"cljs/core.cljs",21,1,2086,2086,cljs.core.cst$sym$boolean,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),cljs.core.cst$sym$coll_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL,"resources/public/js/prod/com/rpl/specter.cljc",6,1,650,653,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),cljs.core.cst$sym$ALL),com.rpl.specter.impl.__GT_LocalSym(p,cljs.core.cst$sym$p)], null)], null),cljs.core.list(cljs.core.cst$sym$cond_DASH_path,cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn),cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$p], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_path,cljs.core.cst$sym$pred,cljs.core.cst$sym$afn,cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null),cljs.core.cst$sym$ALL,cljs.core.cst$sym$p], null));
com.rpl.specter.pathcache31165 = info31166;

return info31166;
})():info__27641__auto__);
var precompiled31167 = com.rpl.specter.impl.cached_path_info_precompiled(info__27641__auto____$1);
var dynamic_QMARK___27642__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__27641__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___27642__auto__)){
var G__31179 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled31167.cljs$core$IFn$_invoke$arity$1 ? precompiled31167.cljs$core$IFn$_invoke$arity$1(G__31179) : precompiled31167.call(null,G__31179));
} else {
return precompiled31167;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__27641__auto__ = com.rpl.specter.pathcache31204;
var info__27641__auto____$1 = (((info__27641__auto__ == null))?(function (){var info31205 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},cljs.core.cst$sym$com$rpl$specter_SLASH_cond_DASH_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$cond_DASH_path,"resources/public/js/prod/com/rpl/specter.cljc",25,1,1237,1237,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.\n\n   The input paths may be parameterized, in which case the result of cond-path\n   will be parameterized in the order of which the parameterized navigators\n   were declared.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),cljs.core.cst$sym$cond_DASH_path),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},cljs.core.cst$sym$com$rpl$specter_SLASH_pred,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$direct_DASH_nav,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$pred,"resources/public/js/prod/com/rpl/specter.cljc",7,1,true,1042,1046,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. This is the\n          late-bound parameterized version of using a function directly in a path.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),cljs.core.cst$sym$pred),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,cljs.core.cst$sym$afn)], null),cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn)),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},cljs.core.cst$sym$com$rpl$specter_SLASH_STAY,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$STAY,"resources/public/js/prod/com/rpl/specter.cljc",7,1,626,628,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),cljs.core.cst$sym$STAY),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$tag,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$coll_QMARK_,"cljs/core.cljs",21,1,2086,2086,cljs.core.cst$sym$boolean,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns true if x satisfies ICollection",((cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),cljs.core.cst$sym$coll_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},cljs.core.cst$sym$com$rpl$specter_SLASH_ALL_DASH_WITH_DASH_META,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,"resources/public/js/prod/com/rpl/specter.cljc",16,1,660,662,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),cljs.core.cst$sym$ALL_DASH_WITH_DASH_META),com.rpl.specter.impl.__GT_LocalSym(p,cljs.core.cst$sym$p)], null)], null),cljs.core.list(cljs.core.cst$sym$cond_DASH_path,cljs.core.list(cljs.core.cst$sym$pred,cljs.core.cst$sym$afn),cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$afn,cljs.core.cst$sym$p], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cond_DASH_path,cljs.core.cst$sym$pred,cljs.core.cst$sym$afn,cljs.core.cst$sym$STAY,cljs.core.cst$sym$coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null),cljs.core.cst$sym$ALL_DASH_WITH_DASH_META,cljs.core.cst$sym$p], null));
com.rpl.specter.pathcache31204 = info31205;

return info31205;
})():info__27641__auto__);
var precompiled31206 = com.rpl.specter.impl.cached_path_info_precompiled(info__27641__auto____$1);
var dynamic_QMARK___27642__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__27641__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___27642__auto__)){
var G__31238 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled31206.cljs$core$IFn$_invoke$arity$1 ? precompiled31206.cljs$core$IFn$_invoke$arity$1(G__31238) : precompiled31206.call(null,G__31238));
} else {
return precompiled31206;
}
})());

return p;
}));

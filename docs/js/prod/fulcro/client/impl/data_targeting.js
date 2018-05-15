// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.impl.data_targeting');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('fulcro.util');
fulcro.client.impl.data_targeting.multiple_targets = (function fulcro$client$impl$data_targeting$multiple_targets(var_args){
var args__12091__auto__ = [];
var len__12084__auto___21629 = arguments.length;
var i__12085__auto___21630 = (0);
while(true){
if((i__12085__auto___21630 < len__12084__auto___21629)){
args__12091__auto__.push((arguments[i__12085__auto___21630]));

var G__21636 = (i__12085__auto___21630 + (1));
i__12085__auto___21630 = G__21636;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.impl.data_targeting.multiple_targets.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.impl.data_targeting.multiple_targets.cljs$core$IFn$_invoke$arity$variadic = (function (targets){
return cljs.core.with_meta(cljs.core.vec(targets),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_multiple_DASH_targets,true], null));
});

fulcro.client.impl.data_targeting.multiple_targets.cljs$lang$maxFixedArity = (0);

fulcro.client.impl.data_targeting.multiple_targets.cljs$lang$applyTo = (function (seq21619){
return fulcro.client.impl.data_targeting.multiple_targets.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21619));
});

fulcro.client.impl.data_targeting.prepend_to = (function fulcro$client$impl$data_targeting$prepend_to(target){
return cljs.core.with_meta(target,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_prepend_DASH_target,true], null));
});
fulcro.client.impl.data_targeting.append_to = (function fulcro$client$impl$data_targeting$append_to(target){
return cljs.core.with_meta(target,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_append_DASH_target,true], null));
});
fulcro.client.impl.data_targeting.replace_at = (function fulcro$client$impl$data_targeting$replace_at(target){
return cljs.core.with_meta(target,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_replace_DASH_target,true], null));
});
fulcro.client.impl.data_targeting.replacement_target_QMARK_ = (function fulcro$client$impl$data_targeting$replacement_target_QMARK_(t){
return cljs.core.boolean$(cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_replace_DASH_target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
fulcro.client.impl.data_targeting.prepend_target_QMARK_ = (function fulcro$client$impl$data_targeting$prepend_target_QMARK_(t){
return cljs.core.boolean$(cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_prepend_DASH_target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
fulcro.client.impl.data_targeting.append_target_QMARK_ = (function fulcro$client$impl$data_targeting$append_target_QMARK_(t){
return cljs.core.boolean$(cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_append_DASH_target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
fulcro.client.impl.data_targeting.multiple_targets_QMARK_ = (function fulcro$client$impl$data_targeting$multiple_targets_QMARK_(t){
return cljs.core.boolean$(cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_multiple_DASH_targets.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
fulcro.client.impl.data_targeting.special_target_QMARK_ = (function fulcro$client$impl$data_targeting$special_target_QMARK_(target){
return cljs.core.boolean$(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.meta(target)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_prepend_DASH_target,null,cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_append_DASH_target,null,cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_replace_DASH_target,null,cljs.core.cst$kw$fulcro$client$impl$data_DASH_targeting_SLASH_multiple_DASH_targets,null], null), null))));
});
/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 */
fulcro.client.impl.data_targeting.integrate_ident = (function fulcro$client$impl$data_targeting$integrate_ident(var_args){
var args__12091__auto__ = [];
var len__12084__auto___21711 = arguments.length;
var i__12085__auto___21713 = (0);
while(true){
if((i__12085__auto___21713 < len__12084__auto___21711)){
args__12091__auto__.push((arguments[i__12085__auto___21713]));

var G__21714 = (i__12085__auto___21713 + (1));
i__12085__auto___21713 = G__21714;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__21688){
var vec__21689 = p__21688;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21689,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21689,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__21689,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__21689,command,data_path,actions){
return (function (p1__21669_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21669_SHARP_,ident);
});})(vec__21689,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__21689,command,data_path,actions))
;
var G__21695 = command;
var G__21695__$1 = (((G__21695 instanceof cljs.core.Keyword))?G__21695.fqn:null);
switch (G__21695__$1) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for prepend must target an app-state vector."].join('')),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__21695,G__21695__$1,already_has_ident_at_path_QMARK_,vec__21689,command,data_path,actions){
return (function (p1__21670_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__21670_SHARP_);
});})(G__21695,G__21695__$1,already_has_ident_at_path_QMARK_,vec__21689,command,data_path,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for append must target an app-state vector."].join('')),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector = cljs.core.butlast(data_path);
var to_many_QMARK_ = (cljs.core.seq(path_to_vector)) && (cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector)));
var index = cljs.core.last(data_path);
var vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector);
if(cljs.core.vector_QMARK_(data_path)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Replacement path must be a vector. You passed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)].join('')),"\n","(vector? data-path)"].join('')));
}

if(to_many_QMARK_){
if(cljs.core.vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ","Path for replacement must be a vector","\n","(vector? vector)"].join('')));
}

if(typeof index === 'number'){
} else {
throw (new Error(["Assert failed: ","Path for replacement must end in a vector index","\n","(number? index)"].join('')));
}

if(cljs.core.contains_QMARK_(vector,index)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Target vector for replacement does not have an item at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')),"\n","(contains? vector index)"].join('')));
}
} else {
}

return cljs.core.assoc_in(state__$1,data_path,ident);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$command,command,cljs.core.cst$kw$arg,data_path], null));

}
});})(actions))
,state,actions);
});

fulcro.client.impl.data_targeting.integrate_ident.cljs$lang$maxFixedArity = (2);

fulcro.client.impl.data_targeting.integrate_ident.cljs$lang$applyTo = (function (seq21672){
var G__21673 = cljs.core.first(seq21672);
var seq21672__$1 = cljs.core.next(seq21672);
var G__21674 = cljs.core.first(seq21672__$1);
var seq21672__$2 = cljs.core.next(seq21672__$1);
return fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__21673,G__21674,seq21672__$2);
});

fulcro.client.impl.data_targeting.process_target = (function fulcro$client$impl$data_targeting$process_target(var_args){
var G__21737 = arguments.length;
switch (G__21737) {
case 3:
return fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3 = (function (state,source_path,target){
return fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$4(state,source_path,target,true);
});

fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$4 = (function (state,source_path,target,remove_ok_QMARK_){
if(cljs.core.vector_QMARK_(target)){
} else {
throw (new Error("Assert failed: (vector? target)"));
}

var item_to_place = ((fulcro.util.ident_QMARK_(source_path))?source_path:(((source_path instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,source_path):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,source_path)
));
var many_idents_QMARK_ = (cljs.core.vector_QMARK_(item_to_place)) && (cljs.core.every_QMARK_(fulcro.util.ident_QMARK_,item_to_place));
if((fulcro.util.ident_QMARK_(source_path)) && (cljs.core.not(fulcro.client.impl.data_targeting.special_target_QMARK_(target)))){
return cljs.core.assoc_in(state,target,item_to_place);
} else {
if(cljs.core.not(fulcro.client.impl.data_targeting.special_target_QMARK_(target))){
var G__21747 = cljs.core.assoc_in(state,target,item_to_place);
if(cljs.core.truth_(remove_ok_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21747,source_path);
} else {
return G__21747;
}
} else {
if(cljs.core.truth_(fulcro.client.impl.data_targeting.multiple_targets_QMARK_(target))){
var G__21748 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (item_to_place,many_idents_QMARK_){
return (function (s,t){
return fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$4(s,source_path,t,false);
});})(item_to_place,many_idents_QMARK_))
,state,target);
if(cljs.core.truth_((function (){var and__10793__auto__ = !(fulcro.util.ident_QMARK_(source_path));
if(and__10793__auto__){
return remove_ok_QMARK_;
} else {
return and__10793__auto__;
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21748,source_path);
} else {
return G__21748;
}
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = many_idents_QMARK_;
if(and__10793__auto__){
return fulcro.client.impl.data_targeting.special_target_QMARK_(target);
} else {
return and__10793__auto__;
}
})())){
var state__$1 = (cljs.core.truth_(remove_ok_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,source_path):state);
var target_has_many_QMARK_ = cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,target));
if(target_has_many_QMARK_){
if(cljs.core.truth_(fulcro.client.impl.data_targeting.prepend_target_QMARK_(target))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,target,((function (state__$1,target_has_many_QMARK_,item_to_place,many_idents_QMARK_){
return (function (v){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(item_to_place,v));
});})(state__$1,target_has_many_QMARK_,item_to_place,many_idents_QMARK_))
);
} else {
if(cljs.core.truth_(fulcro.client.impl.data_targeting.append_target_QMARK_(target))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,target,((function (state__$1,target_has_many_QMARK_,item_to_place,many_idents_QMARK_){
return (function (v){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(v,item_to_place));
});})(state__$1,target_has_many_QMARK_,item_to_place,many_idents_QMARK_))
);
} else {
return state__$1;

}
}
} else {
return cljs.core.assoc_in(state__$1,target,item_to_place);
}
} else {
if(cljs.core.truth_(fulcro.client.impl.data_targeting.special_target_QMARK_(target))){
var G__21749 = state;
var G__21749__$1 = (cljs.core.truth_(remove_ok_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21749,source_path):G__21749);
var G__21749__$2 = (cljs.core.truth_(fulcro.client.impl.data_targeting.prepend_target_QMARK_(target))?fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__21749__$1,item_to_place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$prepend,target], 0)):G__21749__$1);
var G__21749__$3 = (cljs.core.truth_(fulcro.client.impl.data_targeting.append_target_QMARK_(target))?fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__21749__$2,item_to_place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$append,target], 0)):G__21749__$2);
if(cljs.core.truth_(fulcro.client.impl.data_targeting.replacement_target_QMARK_(target))){
return fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__21749__$3,item_to_place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$replace,target], 0));
} else {
return G__21749__$3;
}
} else {
return state;

}
}
}
}
}
});

fulcro.client.impl.data_targeting.process_target.cljs$lang$maxFixedArity = 4;


goog.provide('fulcro.client.impl.data_targeting');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('fulcro.util');
fulcro.client.impl.data_targeting.multiple_targets = (function fulcro$client$impl$data_targeting$multiple_targets(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36743 = arguments.length;
var i__4500__auto___36744 = (0);
while(true){
if((i__4500__auto___36744 < len__4499__auto___36743)){
args__4502__auto__.push((arguments[i__4500__auto___36744]));

var G__36745 = (i__4500__auto___36744 + (1));
i__4500__auto___36744 = G__36745;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.impl.data_targeting.multiple_targets.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.impl.data_targeting.multiple_targets.cljs$core$IFn$_invoke$arity$variadic = (function (targets){
return cljs.core.with_meta(cljs.core.vec(targets),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.impl.data-targeting","multiple-targets","fulcro.client.impl.data-targeting/multiple-targets",-1232076818),true], null));
});

fulcro.client.impl.data_targeting.multiple_targets.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.impl.data_targeting.multiple_targets.cljs$lang$applyTo = (function (seq36741){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36741));
});

fulcro.client.impl.data_targeting.prepend_to = (function fulcro$client$impl$data_targeting$prepend_to(target){
return cljs.core.with_meta(target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.impl.data-targeting","prepend-target","fulcro.client.impl.data-targeting/prepend-target",1888238952),true], null));
});
fulcro.client.impl.data_targeting.append_to = (function fulcro$client$impl$data_targeting$append_to(target){
return cljs.core.with_meta(target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.impl.data-targeting","append-target","fulcro.client.impl.data-targeting/append-target",-1598475575),true], null));
});
fulcro.client.impl.data_targeting.replace_at = (function fulcro$client$impl$data_targeting$replace_at(target){
return cljs.core.with_meta(target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.impl.data-targeting","replace-target","fulcro.client.impl.data-targeting/replace-target",-252896082),true], null));
});
fulcro.client.impl.data_targeting.replacement_target_QMARK_ = (function fulcro$client$impl$data_targeting$replacement_target_QMARK_(t){
return cljs.core.boolean$(new cljs.core.Keyword("fulcro.client.impl.data-targeting","replace-target","fulcro.client.impl.data-targeting/replace-target",-252896082).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
fulcro.client.impl.data_targeting.prepend_target_QMARK_ = (function fulcro$client$impl$data_targeting$prepend_target_QMARK_(t){
return cljs.core.boolean$(new cljs.core.Keyword("fulcro.client.impl.data-targeting","prepend-target","fulcro.client.impl.data-targeting/prepend-target",1888238952).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
fulcro.client.impl.data_targeting.append_target_QMARK_ = (function fulcro$client$impl$data_targeting$append_target_QMARK_(t){
return cljs.core.boolean$(new cljs.core.Keyword("fulcro.client.impl.data-targeting","append-target","fulcro.client.impl.data-targeting/append-target",-1598475575).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
fulcro.client.impl.data_targeting.multiple_targets_QMARK_ = (function fulcro$client$impl$data_targeting$multiple_targets_QMARK_(t){
return cljs.core.boolean$(new cljs.core.Keyword("fulcro.client.impl.data-targeting","multiple-targets","fulcro.client.impl.data-targeting/multiple-targets",-1232076818).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
fulcro.client.impl.data_targeting.special_target_QMARK_ = (function fulcro$client$impl$data_targeting$special_target_QMARK_(target){
return cljs.core.boolean$(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.meta(target)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.impl.data-targeting","prepend-target","fulcro.client.impl.data-targeting/prepend-target",1888238952),null,new cljs.core.Keyword("fulcro.client.impl.data-targeting","append-target","fulcro.client.impl.data-targeting/append-target",-1598475575),null,new cljs.core.Keyword("fulcro.client.impl.data-targeting","replace-target","fulcro.client.impl.data-targeting/replace-target",-252896082),null,new cljs.core.Keyword("fulcro.client.impl.data-targeting","multiple-targets","fulcro.client.impl.data-targeting/multiple-targets",-1232076818),null], null), null))));
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
var args__4502__auto__ = [];
var len__4499__auto___36777 = arguments.length;
var i__4500__auto___36779 = (0);
while(true){
if((i__4500__auto___36779 < len__4499__auto___36777)){
args__4502__auto__.push((arguments[i__4500__auto___36779]));

var G__36780 = (i__4500__auto___36779 + (1));
i__4500__auto___36779 = G__36780;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__36763){
var vec__36764 = p__36763;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36764,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36764,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__36764,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__36764,command,data_path,actions){
return (function (p1__36757_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__36757_SHARP_,ident);
});})(vec__36764,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__36764,command,data_path,actions))
;
var G__36770 = command;
var G__36770__$1 = (((G__36770 instanceof cljs.core.Keyword))?G__36770.fqn:null);
switch (G__36770__$1) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for prepend must target an app-state vector."].join('')),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__36770,G__36770__$1,already_has_ident_at_path_QMARK_,vec__36764,command,data_path,actions){
return (function (p1__36758_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__36758_SHARP_);
});})(G__36770,G__36770__$1,already_has_ident_at_path_QMARK_,vec__36764,command,data_path,actions))
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
var to_many_QMARK_ = ((cljs.core.seq(path_to_vector)) && (cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector))));
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}
});})(actions))
,state,actions);
});

fulcro.client.impl.data_targeting.integrate_ident.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.impl.data_targeting.integrate_ident.cljs$lang$applyTo = (function (seq36760){
var G__36761 = cljs.core.first(seq36760);
var seq36760__$1 = cljs.core.next(seq36760);
var G__36762 = cljs.core.first(seq36760__$1);
var seq36760__$2 = cljs.core.next(seq36760__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36761,G__36762,seq36760__$2);
});

fulcro.client.impl.data_targeting.process_target = (function fulcro$client$impl$data_targeting$process_target(var_args){
var G__36794 = arguments.length;
switch (G__36794) {
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
var many_idents_QMARK_ = ((cljs.core.vector_QMARK_(item_to_place)) && (cljs.core.every_QMARK_(fulcro.util.ident_QMARK_,item_to_place)));
if(((fulcro.util.ident_QMARK_(source_path)) && (cljs.core.not(fulcro.client.impl.data_targeting.special_target_QMARK_(target))))){
return cljs.core.assoc_in(state,target,item_to_place);
} else {
if(cljs.core.not(fulcro.client.impl.data_targeting.special_target_QMARK_(target))){
var G__36796 = cljs.core.assoc_in(state,target,item_to_place);
if(cljs.core.truth_(remove_ok_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36796,source_path);
} else {
return G__36796;
}
} else {
if(cljs.core.truth_(fulcro.client.impl.data_targeting.multiple_targets_QMARK_(target))){
var G__36798 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (item_to_place,many_idents_QMARK_){
return (function (s,t){
return fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$4(s,source_path,t,false);
});})(item_to_place,many_idents_QMARK_))
,state,target);
if(cljs.core.truth_((function (){var and__3911__auto__ = !(fulcro.util.ident_QMARK_(source_path));
if(and__3911__auto__){
return remove_ok_QMARK_;
} else {
return and__3911__auto__;
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36798,source_path);
} else {
return G__36798;
}
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = many_idents_QMARK_;
if(and__3911__auto__){
return fulcro.client.impl.data_targeting.special_target_QMARK_(target);
} else {
return and__3911__auto__;
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
var G__36804 = state;
var G__36804__$1 = (cljs.core.truth_(remove_ok_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36804,source_path):G__36804);
var G__36804__$2 = (cljs.core.truth_(fulcro.client.impl.data_targeting.prepend_target_QMARK_(target))?fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__36804__$1,item_to_place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prepend","prepend",342616040),target], 0)):G__36804__$1);
var G__36804__$3 = (cljs.core.truth_(fulcro.client.impl.data_targeting.append_target_QMARK_(target))?fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__36804__$2,item_to_place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),target], 0)):G__36804__$2);
if(cljs.core.truth_(fulcro.client.impl.data_targeting.replacement_target_QMARK_(target))){
return fulcro.client.impl.data_targeting.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__36804__$3,item_to_place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"replace","replace",-786587770),target], 0));
} else {
return G__36804__$3;
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


//# sourceMappingURL=fulcro.client.impl.data_targeting.js.map

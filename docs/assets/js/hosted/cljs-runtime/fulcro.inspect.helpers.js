goog.provide('fulcro.inspect.helpers');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('fulcro.inspect.lib.local_storage');
fulcro.inspect.helpers.om_ident_QMARK_ = (function fulcro$inspect$helpers$om_ident_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
fulcro.inspect.helpers.query_component = (function fulcro$inspect$helpers$query_component(var_args){
var G__42815 = arguments.length;
switch (G__42815) {
case 1:
return fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1 = (function (this$){
var component = fulcro.client.primitives.react_type(this$);
var ref = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$);
var state = cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(this$)));
var query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component);
return fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref),state);
});

fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$2 = (function (this$,focus_path){
var component = fulcro.client.primitives.react_type(this$);
var ref = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$);
var state = cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(this$)));
var query = fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component),focus_path);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref),state),focus_path);
});

fulcro.inspect.helpers.query_component.cljs$lang$maxFixedArity = 2;

fulcro.inspect.helpers.swap_entity_BANG_ = (function fulcro$inspect$helpers$swap_entity_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42831 = arguments.length;
var i__4500__auto___42832 = (0);
while(true){
if((i__4500__auto___42832 < len__4499__auto___42831)){
args__4502__auto__.push((arguments[i__4500__auto___42832]));

var G__42833 = (i__4500__auto___42832 + (1));
i__4500__auto___42832 = G__42833;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42825,args){
var map__42827 = p__42825;
var map__42827__$1 = ((((!((map__42827 == null)))?(((((map__42827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42827):map__42827);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42827__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42827__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,cljs.core.update_in,ref,args);
});

fulcro.inspect.helpers.swap_entity_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.helpers.swap_entity_BANG_.cljs$lang$applyTo = (function (seq42822){
var G__42823 = cljs.core.first(seq42822);
var seq42822__$1 = cljs.core.next(seq42822);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42823,seq42822__$1);
});

fulcro.inspect.helpers.resolve_path = (function fulcro$inspect$helpers$resolve_path(state,path){
var G__42840 = path;
var vec__42841 = G__42840;
var seq__42842 = cljs.core.seq(vec__42841);
var first__42843 = cljs.core.first(seq__42842);
var seq__42842__$1 = cljs.core.next(seq__42842);
var h = first__42843;
var t = seq__42842__$1;
var new_path = cljs.core.PersistentVector.EMPTY;
var G__42840__$1 = G__42840;
var new_path__$1 = new_path;
while(true){
var vec__42844 = G__42840__$1;
var seq__42845 = cljs.core.seq(vec__42844);
var first__42846 = cljs.core.first(seq__42845);
var seq__42845__$1 = cljs.core.next(seq__42845);
var h__$1 = first__42846;
var t__$1 = seq__42845__$1;
var new_path__$2 = new_path__$1;
if(cljs.core.truth_(h__$1)){
var np = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_path__$2,h__$1);
var c = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,np);
if(cljs.core.truth_(fulcro.inspect.helpers.om_ident_QMARK_(c))){
var G__42850 = t__$1;
var G__42851 = c;
G__42840__$1 = G__42850;
new_path__$1 = G__42851;
continue;
} else {
var G__42852 = t__$1;
var G__42853 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_path__$2,h__$1);
G__42840__$1 = G__42852;
new_path__$1 = G__42853;
continue;
}
} else {
return new_path__$2;
}
break;
}
});
/**
 * Like get-in, but will resolve path before reading it.
 */
fulcro.inspect.helpers.get_in_path = (function fulcro$inspect$helpers$get_in_path(state,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,fulcro.inspect.helpers.resolve_path(state,path));
});
fulcro.inspect.helpers.swap_in_BANG_ = (function fulcro$inspect$helpers$swap_in_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42867 = arguments.length;
var i__4500__auto___42869 = (0);
while(true){
if((i__4500__auto___42869 < len__4499__auto___42867)){
args__4502__auto__.push((arguments[i__4500__auto___42869]));

var G__42870 = (i__4500__auto___42869 + (1));
i__4500__auto___42869 = G__42870;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.inspect.helpers.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.inspect.helpers.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42861,path,args){
var map__42862 = p__42861;
var map__42862__$1 = ((((!((map__42862 == null)))?(((((map__42862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42862):map__42862);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42862__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42862__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var path__$1 = fulcro.inspect.helpers.resolve_path(cljs.core.deref(state),cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref,path));
if(cljs.core.truth_((function (){var and__3911__auto__ = path__$1;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path__$1);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,cljs.core.update_in,path__$1,args);
} else {
return null;
}
});

fulcro.inspect.helpers.swap_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.inspect.helpers.swap_in_BANG_.cljs$lang$applyTo = (function (seq42855){
var G__42856 = cljs.core.first(seq42855);
var seq42855__$1 = cljs.core.next(seq42855);
var G__42857 = cljs.core.first(seq42855__$1);
var seq42855__$2 = cljs.core.next(seq42855__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42856,G__42857,seq42855__$2);
});

/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 *   The named parameters can be specified any number of times. They are:
 *   - set: A vector (path) to a list in your app state where this new object's ident should be set.
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 */
fulcro.inspect.helpers.integrate_ident = (function fulcro$inspect$helpers$integrate_ident(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42891 = arguments.length;
var i__4500__auto___42892 = (0);
while(true){
if((i__4500__auto___42892 < len__4499__auto___42891)){
args__4502__auto__.push((arguments[i__4500__auto___42892]));

var G__42893 = (i__4500__auto___42892 + (1));
i__4500__auto___42892 = G__42893;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.inspect.helpers.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.inspect.helpers.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__42883){
var vec__42884 = p__42883;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42884,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42884,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__42884,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__42884,command,data_path,actions){
return (function (p1__42874_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__42874_SHARP_,ident);
});})(vec__42884,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__42884,command,data_path,actions))
;
var G__42887 = command;
var G__42887__$1 = (((G__42887 instanceof cljs.core.Keyword))?G__42887.fqn:null);
switch (G__42887__$1) {
case "set":
return cljs.core.assoc_in(state__$1,data_path,ident);

break;
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for prepend must target an app-state vector."].join('')),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__42887,G__42887__$1,already_has_ident_at_path_QMARK_,vec__42884,command,data_path,actions){
return (function (p1__42875_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__42875_SHARP_);
});})(G__42887,G__42887__$1,already_has_ident_at_path_QMARK_,vec__42884,command,data_path,actions))
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

fulcro.inspect.helpers.integrate_ident.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.inspect.helpers.integrate_ident.cljs$lang$applyTo = (function (seq42876){
var G__42877 = cljs.core.first(seq42876);
var seq42876__$1 = cljs.core.next(seq42876);
var G__42878 = cljs.core.first(seq42876__$1);
var seq42876__$2 = cljs.core.next(seq42876__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42877,G__42878,seq42876__$2);
});

fulcro.inspect.helpers.merge_entity = (function fulcro$inspect$helpers$merge_entity(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42916 = arguments.length;
var i__4500__auto___42917 = (0);
while(true){
if((i__4500__auto___42917 < len__4499__auto___42916)){
args__4502__auto__.push((arguments[i__4500__auto___42917]));

var G__42918 = (i__4500__auto___42917 + (1));
i__4500__auto___42917 = G__42918;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fulcro.inspect.helpers.merge_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fulcro.inspect.helpers.merge_entity.cljs$core$IFn$_invoke$arity$variadic = (function (state,x,data,named_parameters){

var idents = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){
if(typeof fulcro.inspect.helpers.t_fulcro$inspect$helpers42909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {fulcro.client.primitives.IQuery}
 * @implements {cljs.core.IWithMeta}
*/
fulcro.inspect.helpers.t_fulcro$inspect$helpers42909 = (function (state,x,data,named_parameters,meta42910){
this.state = state;
this.x = x;
this.data = data;
this.named_parameters = named_parameters;
this.meta42910 = meta42910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
fulcro.inspect.helpers.t_fulcro$inspect$helpers42909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42911,meta42910__$1){
var self__ = this;
var _42911__$1 = this;
return (new fulcro.inspect.helpers.t_fulcro$inspect$helpers42909(self__.state,self__.x,self__.data,self__.named_parameters,meta42910__$1));
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers42909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42911){
var self__ = this;
var _42911__$1 = this;
return self__.meta42910;
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers42909.prototype.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.helpers.t_fulcro$inspect$helpers42909.prototype.fulcro$client$primitives$IQuery$query$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.helpers","root","fulcro.inspect.helpers/root",-1338874925),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(self__.x)], null)], null);
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers42909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"named-parameters","named-parameters",2053922585,null),new cljs.core.Symbol(null,"meta42910","meta42910",-1960299224,null)], null);
});

fulcro.inspect.helpers.t_fulcro$inspect$helpers42909.cljs$lang$type = true;

fulcro.inspect.helpers.t_fulcro$inspect$helpers42909.cljs$lang$ctorStr = "fulcro.inspect.helpers/t_fulcro$inspect$helpers42909";

fulcro.inspect.helpers.t_fulcro$inspect$helpers42909.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"fulcro.inspect.helpers/t_fulcro$inspect$helpers42909");
});

/**
 * Positional factory function for fulcro.inspect.helpers/t_fulcro$inspect$helpers42909.
 */
fulcro.inspect.helpers.__GT_t_fulcro$inspect$helpers42909 = (function fulcro$inspect$helpers$__GT_t_fulcro$inspect$helpers42909(state__$1,x__$1,data__$1,named_parameters__$1,meta42910){
return (new fulcro.inspect.helpers.t_fulcro$inspect$helpers42909(state__$1,x__$1,data__$1,named_parameters__$1,meta42910));
});

}

return (new fulcro.inspect.helpers.t_fulcro$inspect$helpers42909(state,x,data,named_parameters,cljs.core.PersistentArrayMap.EMPTY));
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.helpers","root","fulcro.inspect.helpers/root",-1338874925),data], null),true),new cljs.core.Keyword("fulcro.inspect.helpers","root","fulcro.inspect.helpers/root",-1338874925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.client.primitives","tables","fulcro.client.primitives/tables",-1418944816)], 0));
var root_ident = fulcro.client.primitives.ident(x,data);
var state__$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,idents], 0));
if(cljs.core.seq(named_parameters)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.inspect.helpers.integrate_ident,state__$1,root_ident,named_parameters);
} else {
return state__$1;
}
});

fulcro.inspect.helpers.merge_entity.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.inspect.helpers.merge_entity.cljs$lang$applyTo = (function (seq42904){
var G__42905 = cljs.core.first(seq42904);
var seq42904__$1 = cljs.core.next(seq42904);
var G__42906 = cljs.core.first(seq42904__$1);
var seq42904__$2 = cljs.core.next(seq42904__$1);
var G__42907 = cljs.core.first(seq42904__$2);
var seq42904__$3 = cljs.core.next(seq42904__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42905,G__42906,G__42907,seq42904__$3);
});

fulcro.inspect.helpers.create_entity_BANG_ = (function fulcro$inspect$helpers$create_entity_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42947 = arguments.length;
var i__4500__auto___42948 = (0);
while(true){
if((i__4500__auto___42948 < len__4499__auto___42947)){
args__4502__auto__.push((arguments[i__4500__auto___42948]));

var G__42949 = (i__4500__auto___42948 + (1));
i__4500__auto___42948 = G__42949;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42937,x,data,named_parameters){
var map__42938 = p__42937;
var map__42938__$1 = ((((!((map__42938 == null)))?(((((map__42938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42938):map__42938);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42938__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42938__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var named_parameters__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__42938,map__42938__$1,state,ref){
return (function (p__42941){
var vec__42942 = p__42941;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42942,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42942,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,path)], null);
});})(map__42938,map__42938__$1,state,ref))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters)));
var data_SINGLEQUOTE_ = (cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.helpers","initialized","fulcro.inspect.helpers/initialized",-1739021626).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))?data:fulcro.client.primitives.get_initial_state(x,data));
cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,state,fulcro.inspect.helpers.merge_entity,x,data_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_parameters__$1], 0));

return data_SINGLEQUOTE_;
});

fulcro.inspect.helpers.create_entity_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.inspect.helpers.create_entity_BANG_.cljs$lang$applyTo = (function (seq42929){
var G__42930 = cljs.core.first(seq42929);
var seq42929__$1 = cljs.core.next(seq42929);
var G__42931 = cljs.core.first(seq42929__$1);
var seq42929__$2 = cljs.core.next(seq42929__$1);
var G__42932 = cljs.core.first(seq42929__$2);
var seq42929__$3 = cljs.core.next(seq42929__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42930,G__42931,G__42932,seq42929__$3);
});

fulcro.inspect.helpers.dissoc_in = (function fulcro$inspect$helpers$dissoc_in(m,path){
var G__42955 = m;
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,cljs.core.butlast(path)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__42955,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
} else {
return G__42955;
}
});
fulcro.inspect.helpers.deep_remove_ref = (function fulcro$inspect$helpers$deep_remove_ref(state,ref){

var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref);
var idents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (item){
return (function (v){
if(cljs.core.truth_(fulcro.inspect.helpers.om_ident_QMARK_(v))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
} else {
if(((cljs.core.vector_QMARK_(v)) && (cljs.core.every_QMARK_(fulcro.inspect.helpers.om_ident_QMARK_,v)))){
return v;
} else {
return null;
}
}
});})(item))
),cljs.core.cat),cljs.core.vals(item));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (item,idents){
return (function (s,i){
return (fulcro.inspect.helpers.deep_remove_ref.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.helpers.deep_remove_ref.cljs$core$IFn$_invoke$arity$2(s,i) : fulcro.inspect.helpers.deep_remove_ref.call(null,s,i));
});})(item,idents))
,fulcro.inspect.helpers.dissoc_in(state,ref),idents);
});
fulcro.inspect.helpers.remove_edge_BANG_ = (function fulcro$inspect$helpers$remove_edge_BANG_(p__42969,field){
var map__42970 = p__42969;
var map__42970__$1 = ((((!((map__42970 == null)))?(((((map__42970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42970):map__42970);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42970__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42970__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var children = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field));
if(cljs.core.truth_(fulcro.inspect.helpers.om_ident_QMARK_(children))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (children,map__42970,map__42970__$1,state,ref){
return (function (p1__42963_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__42963_SHARP_,ref,cljs.core.dissoc,field);
});})(children,map__42970,map__42970__$1,state,ref))
,((function (children,map__42970,map__42970__$1,state,ref){
return (function (p1__42964_SHARP_){
return fulcro.inspect.helpers.deep_remove_ref(p1__42964_SHARP_,children);
});})(children,map__42970,map__42970__$1,state,ref))
));
} else {
if(cljs.core.seq(children)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (children,map__42970,map__42970__$1,state,ref){
return (function (p1__42966_SHARP_){
return cljs.core.assoc_in(p1__42966_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.PersistentVector.EMPTY);
});})(children,map__42970,map__42970__$1,state,ref))
,((function (children,map__42970,map__42970__$1,state,ref){
return (function (p1__42967_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fulcro.inspect.helpers.deep_remove_ref,p1__42967_SHARP_,children);
});})(children,map__42970,map__42970__$1,state,ref))
));
} else {
return null;
}
}
});
fulcro.inspect.helpers.vec_remove_index = (function fulcro$inspect$helpers$vec_remove_index(i,v){

return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(i + (1)),cljs.core.count(v))));
});
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.helpers","persistent-set-props","fulcro.inspect.helpers/persistent-set-props",-1753072879,null),(function (env42987,_,p__42988){
var map__42989 = p__42988;
var map__42989__$1 = ((((!((map__42989 == null)))?(((((map__42989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42989):map__42989);
var local_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42989__$1,new cljs.core.Keyword("fulcro.inspect.helpers","local-key","fulcro.inspect.helpers/local-key",-858551382));
var storage_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42989__$1,new cljs.core.Keyword("fulcro.inspect.helpers","storage-key","fulcro.inspect.helpers/storage-key",1801490937));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42989__$1,new cljs.core.Keyword("fulcro.inspect.helpers","value","fulcro.inspect.helpers/value",1147993961));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env42987;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__42989,map__42989__$1,local_key,storage_key,value){
return (function (){
fulcro.inspect.lib.local_storage.set_BANG_(storage_key,value);

return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,local_key,value], 0));
});})(env,map__42989,map__42989__$1,local_key,storage_key,value))
], null);
})(),(function (){var env = env42987;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
fulcro.inspect.helpers.persistent_set_BANG_ = (function fulcro$inspect$helpers$persistent_set_BANG_(comp,local_key,storage_key,value){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.helpers","persistent-set-props","fulcro.inspect.helpers/persistent-set-props",-1753072879,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.helpers","local-key","fulcro.inspect.helpers/local-key",-858551382),local_key,new cljs.core.Keyword("fulcro.inspect.helpers","storage-key","fulcro.inspect.helpers/storage-key",1801490937),storage_key,new cljs.core.Keyword("fulcro.inspect.helpers","value","fulcro.inspect.helpers/value",1147993961),value], null),null,(1),null)),(2),null)),local_key], null));
});

//# sourceMappingURL=fulcro.inspect.helpers.js.map

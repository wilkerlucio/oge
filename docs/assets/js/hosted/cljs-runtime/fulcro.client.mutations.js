goog.provide('fulcro.client.mutations');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('fulcro.util');
goog.require('fulcro.logging');
goog.require('fulcro.client.primitives');
goog.require('cljs.loader');
goog.require('fulcro.client.impl.protocols');
goog.require('fulcro.client.impl.parser');
if(typeof fulcro.client.mutations.mutate !== 'undefined'){
} else {
fulcro.client.mutations.mutate = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fulcro.client.mutations","mutate"),fulcro.client.primitives.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
if(typeof fulcro.client.mutations.post_mutate !== 'undefined'){
} else {
fulcro.client.mutations.post_mutate = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("fulcro.client.mutations","post-mutate"),fulcro.client.primitives.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method(fulcro.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),(function (env42370,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__42371 = env42370;
var map__42371__$1 = ((((!((map__42371 == null)))?(((((map__42371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42371):map__42371);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42371__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42371__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__42371,map__42371__$1,state,ref){
return (function (){
if((ref == null)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),113], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/set-props requires component to have an ident."], 0));
}catch (e42373){if((e42373 instanceof Error)){
var e__33343__auto___42374 = e42373;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),113], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___42374], 0));
} else {
throw e42373;

}
}} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,((function (map__42371,map__42371__$1,state,ref){
return (function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
});})(map__42371,map__42371__$1,state,ref))
);
});})(map__42371,map__42371__$1,state,ref))
], null);
})(),(function (){var env = env42370;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.client.mutations","toggle","fulcro.client.mutations/toggle",-1176623641,null),(function (env42375,_,p__42376){
var map__42377 = p__42376;
var map__42377__$1 = ((((!((map__42377 == null)))?(((((map__42377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42377):map__42377);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42377__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__42379 = env42375;
var map__42379__$1 = ((((!((map__42379 == null)))?(((((map__42379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42379):map__42379);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42379__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42379__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__42379,map__42379__$1,state,ref,map__42377,map__42377__$1,field){
return (function (){
if((ref == null)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),123], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ui/toggle requires component to have an ident."], 0));
}catch (e42381){if((e42381 instanceof Error)){
var e__33343__auto___42382 = e42381;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),123], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___42382], 0));
} else {
throw e42381;

}
}} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
});})(map__42379,map__42379__$1,state,ref,map__42377,map__42377__$1,field))
], null);
})(),(function (){var env = env42375;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__42383,k,_){
var map__42384 = p__42383;
var map__42384__$1 = ((((!((map__42384 == null)))?(((((map__42384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42384):map__42384);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42384__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),128], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown app state mutation. Have you required the file with your mutations?",k], 0));
}catch (e42386){if((e42386 instanceof Error)){
var e__33343__auto__ = e42386;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),128], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e42386;

}
}} else {
return null;
}
}));
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
fulcro.client.mutations.toggle_BANG_ = (function fulcro$client$mutations$toggle_BANG_(comp,field){
return fulcro.client.primitives.compressible_transact_BANG_(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","toggle","fulcro.client.mutations/toggle",-1176623641,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data). Changes made via these
 *   helpers are compressed in the history.
 */
fulcro.client.mutations.set_value_BANG_ = (function fulcro$client$mutations$set_value_BANG_(component,field,value){
return fulcro.client.primitives.compressible_transact_BANG_(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
fulcro.client.mutations.ensure_integer = (function fulcro$client$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return rv;
}
});
fulcro.client.mutations.target_value = (function fulcro$client$mutations$target_value(evt){
return evt.target.value;
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
fulcro.client.mutations.set_integer_BANG_ = (function fulcro$client$mutations$set_integer_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42393 = arguments.length;
var i__4500__auto___42394 = (0);
while(true){
if((i__4500__auto___42394 < len__4499__auto___42393)){
args__4502__auto__.push((arguments[i__4500__auto___42394]));

var G__42395 = (i__4500__auto___42394 + (1));
i__4500__auto___42394 = G__42395;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__42390){
var map__42391 = p__42390;
var map__42391__$1 = ((((!((map__42391 == null)))?(((((map__42391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42391):map__42391);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42391__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42391__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var or__3922__auto__ = event;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not((function (){var and__3911__auto____$1 = event;
if(cljs.core.truth_(and__3911__auto____$1)){
return value;
} else {
return and__3911__auto____$1;
}
})());
} else {
return and__3911__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = fulcro.client.mutations.ensure_integer((cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value));
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq42387){
var G__42388 = cljs.core.first(seq42387);
var seq42387__$1 = cljs.core.next(seq42387);
var G__42389 = cljs.core.first(seq42387__$1);
var seq42387__$2 = cljs.core.next(seq42387__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42388,G__42389,seq42387__$2);
});

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 *   Calls to this are compressed in history.
 */
fulcro.client.mutations.set_string_BANG_ = (function fulcro$client$mutations$set_string_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42404 = arguments.length;
var i__4500__auto___42405 = (0);
while(true){
if((i__4500__auto___42405 < len__4499__auto___42404)){
args__4502__auto__.push((arguments[i__4500__auto___42405]));

var G__42407 = (i__4500__auto___42405 + (1));
i__4500__auto___42405 = G__42407;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__42399){
var map__42400 = p__42399;
var map__42400__$1 = ((((!((map__42400 == null)))?(((((map__42400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42400):map__42400);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42400__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42400__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var or__3922__auto__ = event;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not((function (){var and__3911__auto____$1 = event;
if(cljs.core.truth_(and__3911__auto____$1)){
return value;
} else {
return and__3911__auto____$1;
}
})());
} else {
return and__3911__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?fulcro.client.mutations.target_value(event):value);
return fulcro.client.mutations.set_value_BANG_(component,field,value__$1);
});

fulcro.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq42396){
var G__42397 = cljs.core.first(seq42396);
var seq42396__$1 = cljs.core.next(seq42396);
var G__42398 = cljs.core.first(seq42396__$1);
var seq42396__$2 = cljs.core.next(seq42396__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42397,G__42398,seq42396__$2);
});

cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.client.mutations","set-query!","fulcro.client.mutations/set-query!",1750034612,null),(function (env42414,_,p__42415){
var map__42416 = p__42415;
var map__42416__$1 = ((((!((map__42416 == null)))?(((((map__42416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42416):map__42416);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42416__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42416__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42416__$1,new cljs.core.Keyword(null,"params","params",710516235));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__42420 = env42414;
var map__42420__$1 = ((((!((map__42420 == null)))?(((((map__42420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42420):map__42420);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42420__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42420__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__42420,map__42420__$1,reconciler,state,map__42416,map__42416__$1,queryid,query,params){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.set_query_STAR_,queryid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));

if(cljs.core.truth_(reconciler)){
return fulcro.client.impl.protocols.reindex_BANG_(reconciler);
} else {
return null;
}
});})(map__42420,map__42420__$1,reconciler,state,map__42416,map__42416__$1,queryid,query,params))
], null);
})(),(function (){var env = env42414;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.client.mutations","merge!","fulcro.client.mutations/merge!",137581651,null),(function (env42434,_,p__42435){
var map__42437 = p__42435;
var map__42437__$1 = ((((!((map__42437 == null)))?(((((map__42437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42437):map__42437);
var params = map__42437__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42437__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42437__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42437__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env42434;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__42437,map__42437__$1,params,query,data_tree,remote){
return (function (){
var map__42442 = env;
var map__42442__$1 = ((((!((map__42442 == null)))?(((((map__42442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42442):map__42442);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42442__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42442__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state__$1 = fulcro.client.primitives.app_state(reconciler);
var root_component = fulcro.client.primitives.app_root(reconciler);
var root_query = (cljs.core.truth_(query)?null:fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(root_component,cljs.core.deref(state__$1)));
var map__42443 = fulcro.client.primitives.merge_STAR_(reconciler,cljs.core.deref(state__$1),data_tree,query);
var map__42443__$1 = ((((!((map__42443 == null)))?(((((map__42443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42443):map__42443);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42443__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42443__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42443__$1,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205));
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,keys,remote);

cljs.core.reset_BANG_(state__$1,(function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5455__auto__)){
var migrate = temp__5455__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null)),(function (){var G__42447 = next;
var G__42448 = (function (){var or__3922__auto__ = query;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return root_query;
}
})();
var G__42449 = tempids;
return (migrate.cljs$core$IFn$_invoke$arity$3 ? migrate.cljs$core$IFn$_invoke$arity$3(G__42447,G__42448,G__42449) : migrate.call(null,G__42447,G__42448,G__42449));
})()], 0));
} else {
return next;
}
})());

if((remote == null)){
return null;
} else {
return fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,remote);
}
});})(env,map__42437,map__42437__$1,params,query,data_tree,remote))
], null);
})(),(function (){var env = env42434;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.client.mutations","send-history","fulcro.client.mutations/send-history",1441439026,null),(function (env42458,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env42458;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
return null;
});})(env))
], null);
})(),(function (){var map__42468 = env42458;
var map__42468__$1 = ((((!((map__42468 == null)))?(((((map__42468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42468):map__42468);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42468__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42468__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42468__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function (){var history = cljs.core.deref(fulcro.client.primitives.get_history(reconciler));
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"history","history",-247395220),history);
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),231], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Sending ",cljs.core.count(new cljs.core.Keyword(null,"history-steps","history-steps",-1348494357).cljs$core$IFn$_invoke$arity$1(history))," history steps to the server."], 0));
}catch (e42470){if((e42470 instanceof Error)){
var e__33343__auto___42475 = e42470;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.mutations",new cljs.core.Keyword(null,"line","line",212345235),231], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___42475], 0));
} else {
throw e42470;

}
}
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"params","params",710516235),params__$1);
})()], null);
})()], 0));
}));
/**
 * Indicate the the remote operation will return a value of the given component type. The server-side mutation need
 *   simply return a tree matching that component's query and it will auto-merge into state. The ast param MUST be a query ast
 *   containing exactly one mutation that is *not* already a mutation join. The state is required for looking up dynamic queries, and
 *   may be nil if you use only static queries.
 */
fulcro.client.mutations.returning = (function fulcro$client$mutations$returning(ast,state,class$){
if((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

var map__42479 = ast;
var map__42479__$1 = ((((!((map__42479 == null)))?(((((map__42479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42479):map__42479);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_SINGLEQUOTE_ = (function (){var G__42481 = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(class$,state);
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__42481,((function (G__42481,map__42479,map__42479__$1,key,params,query){
return (function (p1__42476_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__42476_SHARP_], 0));
});})(G__42481,map__42479,map__42479__$1,key,params,query))
);
} else {
return G__42481;
}
})();
return fulcro.client.primitives.query__GT_ast1(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,key,null,(1),null)),(new cljs.core.List(null,params,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,query_SINGLEQUOTE_,null,(1),null)))))),null,(1),null)))))));
});
/**
 * Set's a target for the return value from the mutation to be merged into. This can be combined with returning to define
 *   a path to insert the new entry.
 */
fulcro.client.mutations.with_target = (function fulcro$client$mutations$with_target(ast,target){
if((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

var map__42491 = ast;
var map__42491__$1 = ((((!((map__42491 == null)))?(((((map__42491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42491):map__42491);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42491__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42491__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42491__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_SINGLEQUOTE_ = (cljs.core.truth_(query)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),target):cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748),target], null)));
return fulcro.client.primitives.query__GT_ast1(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,key,null,(1),null)),(new cljs.core.List(null,params,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,query_SINGLEQUOTE_,null,(1),null)))))),null,(1),null)))))));
});
/**
 * Modify an AST containing a single mutation, changing it's parameters to those given as an argument.
 */
fulcro.client.mutations.with_params = (function fulcro$client$mutations$with_params(ast,params){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"params","params",710516235),params);
});
fulcro.client.mutations.is_call_QMARK_ = (function fulcro$client$mutations$is_call_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(expr))) || (cljs.core.map_QMARK_(cljs.core.second(expr))))));
});
/**
 * Modifies the AST node to enable progressive updates (if available) about the response download progress.
 *   `progress-mutation` is a call expression (e.g. `(f {})`) for a mutation, which can include the normal parameter
 *   map. This mutation mutation will be triggered on each progress step. It will receive
 *   one call when the request is sent, followed by zero or more progress events from the low-level network layer,
 *   and one call when the request is done (with any status). The first and last calls are guaranteed.
 * 
 *   An extra parameter keyed at `fulcro.client.network/progress` will be included that contains a :progress key
 *   (:sending, :receiving, :complete, or :failed), and a status that will be dependent on the network implementation
 *   (e.g. a google XhrIO progress event).
 */
fulcro.client.mutations.with_progressive_updates = (function fulcro$client$mutations$with_progressive_updates(ast,progress_mutation){
if((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

if(cljs.core.truth_(fulcro.client.mutations.is_call_QMARK_(progress_mutation))){
} else {
throw (new Error("Assert failed: (is-call? progress-mutation)"));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$6(ast,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.network","progress-mutation","fulcro.client.network/progress-mutation",-1587455677),progress_mutation);
});
/**
 * Given a remote transaction containing one or more remote mutations, returns a local transaction of zero or
 *   more mutations that should be run to provide a progress update. The `progress` argument will be added to
 *   each resulting mutation in parameters as `:fulcro.client.network/progress`.
 */
fulcro.client.mutations.progressive_update_transaction = (function fulcro$client$mutations$progressive_update_transaction(network_transaction,progress){
var add_progress = (function (expr){
var ast = fulcro.client.impl.parser.expr__GT_ast(expr);
var ast_2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(ast,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword("fulcro.client.network","progress","fulcro.client.network/progress",2047285121),progress);
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_2);
});
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (add_progress){
return (function (m){
var G__42515 = m;
var G__42515__$1 = (((G__42515 == null))?null:cljs.core.seq(G__42515));
var G__42515__$2 = (((G__42515__$1 == null))?null:cljs.core.first(G__42515__$1));
var G__42515__$3 = (((G__42515__$2 == null))?null:cljs.core.meta(G__42515__$2));
var G__42515__$4 = (((G__42515__$3 == null))?null:new cljs.core.Keyword("fulcro.client.network","progress-mutation","fulcro.client.network/progress-mutation",-1587455677).cljs$core$IFn$_invoke$arity$1(G__42515__$3));
if((G__42515__$4 == null)){
return null;
} else {
return add_progress(G__42515__$4);
}
});})(add_progress))
,network_transaction));
});
/**
 * Modifies the mutation to enable network-level aborts. The id is a user-defined ID (any type) that identifies
 *   things that can be aborted on networking. IDs need not be unique per node, though aborting an ID that refers to
 *   more than one in-flight request will abort them all.
 */
fulcro.client.mutations.with_abort_id = (function fulcro$client$mutations$with_abort_id(ast,id){
if((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? (-> ast :key))"));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$6(ast,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),id);
});
/**
 * Returns a set of abort IDs from the given transaction.
 */
fulcro.client.mutations.abort_ids = (function fulcro$client$mutations$abort_ids(tx){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (m){
var G__42520 = m;
var G__42520__$1 = (((G__42520 == null))?null:cljs.core.seq(G__42520));
var G__42520__$2 = (((G__42520__$1 == null))?null:cljs.core.first(G__42520__$1));
var G__42520__$3 = (((G__42520__$2 == null))?null:cljs.core.meta(G__42520__$2));
if((G__42520__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267).cljs$core$IFn$_invoke$arity$1(G__42520__$3);
}
}),tx));
});

//# sourceMappingURL=fulcro.client.mutations.js.map

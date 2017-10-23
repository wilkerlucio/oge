// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.rpl.specter.navs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.rpl.specter.impl');
com.rpl.specter.navs.not_selected_QMARK__STAR_ = (function com$rpl$specter$navs$not_selected_QMARK__STAR_(compiled_path,vals,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(compiled_path,vals,structure));
});
com.rpl.specter.navs.selected_QMARK__STAR_ = (function com$rpl$specter$navs$selected_QMARK__STAR_(compiled_path,vals,structure){
return cljs.core.not(com.rpl.specter.navs.not_selected_QMARK__STAR_(compiled_path,vals,structure));
});
com.rpl.specter.navs.all_select = (function com$rpl$specter$navs$all_select(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__18733__auto__,e){
var ret__18734__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(e) : next_fn.call(null,e));
if((ret__18734__auto__ === com.rpl.specter.impl.NONE)){
return curr__18733__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__18734__auto__)){
return cljs.core.reduced(ret__18734__auto__);
} else {
return ret__18734__auto__;
}
}
}),com.rpl.specter.impl.NONE,structure);
});
com.rpl.specter.navs.queue_QMARK_ = (function com$rpl$specter$navs$queue_QMARK_(coll){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(coll),cljs.core.type(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});

/**
 * @interface
 */
com.rpl.specter.navs.AllTransformProtocol = function(){};

com.rpl.specter.navs.all_transform = (function com$rpl$specter$navs$all_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 == null)))){
return structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
var x__11145__auto__ = (((structure == null))?null:structure);
var m__11146__auto__ = (com.rpl.specter.navs.all_transform[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__11146__auto__.call(null,structure,next_fn));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.all_transform["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__11146__auto____$1.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("AllTransformProtocol.all-transform",structure);
}
}
}
});

com.rpl.specter.navs.void_transformed_kv_pair_QMARK_ = (function com$rpl$specter$navs$void_transformed_kv_pair_QMARK_(newkv){
return ((newkv === com.rpl.specter.impl.NONE)) || ((cljs.core.count(newkv) < (2)));
});
com.rpl.specter.navs.non_transient_map_all_transform = (function com$rpl$specter$navs$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv((function (m,k,v){
var newkv = (function (){var G__28681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__28681) : next_fn.call(null,G__28681));
})();
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
}),empty_map,structure);
});
com.rpl.specter.navs.not_NONE_QMARK_ = (function com$rpl$specter$navs$not_NONE_QMARK_(v){
return !((v === com.rpl.specter.impl.NONE));
});
com.rpl.specter.navs.all_transform_list = (function com$rpl$specter$navs$all_transform_list(structure,next_fn){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure));
});
com.rpl.specter.navs.all_transform_record = (function com$rpl$specter$navs$all_transform_record(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,kv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,(next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(kv) : next_fn.call(null,kv)));
}),structure,structure);
});
goog.object.set(com.rpl.specter.navs.AllTransformProtocol,"null",true);

var G__28686_28698 = com.rpl.specter.navs.all_transform;
var G__28687_28699 = "null";
var G__28688_28700 = ((function (G__28686_28698,G__28687_28699){
return (function (structure,next_fn){
return null;
});})(G__28686_28698,G__28687_28699))
;
goog.object.set(G__28686_28698,G__28687_28699,G__28688_28700);


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
});


cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
});


cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform(structure__$1,next_fn,cljs.core.PersistentArrayMap.EMPTY);
});


cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform(structure__$1,next_fn,cljs.core.empty(structure__$1));
});


cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (structure__$1){
return (function (m,k,v){
var newkv = (function (){var G__28692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__28692) : next_fn.call(null,G__28692));
})();
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv))){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
});})(structure__$1))
,cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

goog.object.set(com.rpl.specter.navs.AllTransformProtocol,"_",true);

var G__28693_28706 = com.rpl.specter.navs.all_transform;
var G__28694_28707 = "_";
var G__28695_28708 = ((function (G__28693_28706,G__28694_28707){
return (function (structure,next_fn){
if(cljs.core.record_QMARK_(structure)){
return com.rpl.specter.navs.all_transform_record(structure,next_fn);
} else {
var empty_structure = cljs.core.empty(structure);
if((cljs.core.list_QMARK_(empty_structure)) && (cljs.core.not(com.rpl.specter.navs.queue_QMARK_(empty_structure)))){
return com.rpl.specter.navs.all_transform_list(structure,next_fn);
} else {
if(cljs.core.map_QMARK_(structure)){
return cljs.core.reduce_kv(((function (empty_structure,G__28693_28706,G__28694_28707){
return (function (m,k,v){
var newkv = (function (){var G__28696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__28696) : next_fn.call(null,G__28696));
})();
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
});})(empty_structure,G__28693_28706,G__28694_28707))
,empty_structure,structure);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(empty_structure,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
});})(G__28693_28706,G__28694_28707))
;
goog.object.set(G__28693_28706,G__28694_28707,G__28695_28708);

/**
 * @interface
 */
com.rpl.specter.navs.MapTransformProtocol = function(){};

com.rpl.specter.navs.map_vals_transform = (function com$rpl$specter$navs$map_vals_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 == null)))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
var x__11145__auto__ = (((structure == null))?null:structure);
var m__11146__auto__ = (com.rpl.specter.navs.map_vals_transform[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__11146__auto__.call(null,structure,next_fn));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.map_vals_transform["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__11146__auto____$1.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("MapTransformProtocol.map-vals-transform",structure);
}
}
}
});

com.rpl.specter.navs.map_keys_transform = (function com$rpl$specter$navs$map_keys_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 == null)))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2(structure,next_fn);
} else {
var x__11145__auto__ = (((structure == null))?null:structure);
var m__11146__auto__ = (com.rpl.specter.navs.map_keys_transform[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__11146__auto__.call(null,structure,next_fn));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.map_keys_transform["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__11146__auto____$1.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("MapTransformProtocol.map-keys-transform",structure);
}
}
}
});

com.rpl.specter.navs.map_vals_non_transient_transform = (function com$rpl$specter$navs$map_vals_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
}),empty_map,structure);
});
com.rpl.specter.navs.map_keys_non_transient_transform = (function com$rpl$specter$navs$map_keys_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
}),empty_map,structure);
});
goog.object.set(com.rpl.specter.navs.MapTransformProtocol,"null",true);

var G__28724_28746 = com.rpl.specter.navs.map_vals_transform;
var G__28725_28747 = "null";
var G__28726_28748 = ((function (G__28724_28746,G__28725_28747){
return (function (structure,next_fn){
return null;
});})(G__28724_28746,G__28725_28747))
;
goog.object.set(G__28724_28746,G__28725_28747,G__28726_28748);

var G__28727_28749 = com.rpl.specter.navs.map_keys_transform;
var G__28728_28750 = "null";
var G__28729_28751 = ((function (G__28727_28749,G__28728_28750){
return (function (structure,next_fn){
return null;
});})(G__28727_28749,G__28728_28750))
;
goog.object.set(G__28727_28749,G__28728_28750,G__28729_28751);


cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform(structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
});


cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform(structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
});


cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform(structure__$1,cljs.core.empty(structure__$1),next_fn);
});


cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform(structure__$1,cljs.core.empty(structure__$1),next_fn);
});


cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (structure__$1){
return (function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
});})(structure__$1))
,cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
});


cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (structure__$1){
return (function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
});})(structure__$1))
,cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

goog.object.set(com.rpl.specter.navs.MapTransformProtocol,"_",true);

var G__28733_28762 = com.rpl.specter.navs.map_vals_transform;
var G__28734_28763 = "_";
var G__28735_28764 = ((function (G__28733_28762,G__28734_28763){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__28733_28762,G__28734_28763){
return (function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
});})(G__28733_28762,G__28734_28763))
,cljs.core.empty(structure),structure);
});})(G__28733_28762,G__28734_28763))
;
goog.object.set(G__28733_28762,G__28734_28763,G__28735_28764);

var G__28743_28766 = com.rpl.specter.navs.map_keys_transform;
var G__28744_28767 = "_";
var G__28745_28768 = ((function (G__28743_28766,G__28744_28767){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__28743_28766,G__28744_28767){
return (function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
});})(G__28743_28766,G__28744_28767))
,cljs.core.empty(structure),structure);
});})(G__28743_28766,G__28744_28767))
;
goog.object.set(G__28743_28766,G__28744_28767,G__28745_28768);
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
var G__28769 = ((typeof structure === 'string')?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end):cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(structure),start,end));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__28769) : next_fn.call(null,G__28769));
});
com.rpl.specter.navs.srange_transform = com.rpl.specter.impl.srange_transform_STAR_;
com.rpl.specter.navs.extract_basic_filter_fn = (function com$rpl$specter$navs$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_(path)){
return path;
} else {
if((cljs.core.coll_QMARK_(path)) && (cljs.core.every_QMARK_(cljs.core.fn_QMARK_,path))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (combined,afn){
return (function (structure){
var and__10400__auto__ = (combined.cljs$core$IFn$_invoke$arity$1 ? combined.cljs$core$IFn$_invoke$arity$1(structure) : combined.call(null,structure));
if(cljs.core.truth_(and__10400__auto__)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return and__10400__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.navs.if_select = (function com$rpl$specter$navs$if_select(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.select_STAR_((cljs.core.truth_((then_tester.cljs$core$IFn$_invoke$arity$1 ? then_tester.cljs$core$IFn$_invoke$arity$1(structure) : then_tester.call(null,structure)))?then_nav:else_nav),vals,structure,next_fn);
});
com.rpl.specter.navs.if_transform = (function com$rpl$specter$navs$if_transform(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.transform_STAR_((cljs.core.truth_((then_tester.cljs$core$IFn$_invoke$arity$1 ? then_tester.cljs$core$IFn$_invoke$arity$1(structure) : then_tester.call(null,structure)))?then_nav:else_nav),vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.navs.AddExtremes = function(){};

com.rpl.specter.navs.append_all = (function com$rpl$specter$navs$append_all(structure,elements){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2(structure,elements);
} else {
var x__11145__auto__ = (((structure == null))?null:structure);
var m__11146__auto__ = (com.rpl.specter.navs.append_all[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__11146__auto__.call(null,structure,elements));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.append_all["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__11146__auto____$1.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-all",structure);
}
}
}
});

com.rpl.specter.navs.prepend_all = (function com$rpl$specter$navs$prepend_all(structure,elements){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
var x__11145__auto__ = (((structure == null))?null:structure);
var m__11146__auto__ = (com.rpl.specter.navs.prepend_all[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__11146__auto__.call(null,structure,elements));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.prepend_all["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__11146__auto____$1.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-all",structure);
}
}
}
});

com.rpl.specter.navs.append_one = (function com$rpl$specter$navs$append_one(structure,elem){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2(structure,elem);
} else {
var x__11145__auto__ = (((structure == null))?null:structure);
var m__11146__auto__ = (com.rpl.specter.navs.append_one[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__11146__auto__.call(null,structure,elem));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.append_one["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__11146__auto____$1.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-one",structure);
}
}
}
});

com.rpl.specter.navs.prepend_one = (function com$rpl$specter$navs$prepend_one(structure,elem){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2(structure,elem);
} else {
var x__11145__auto__ = (((structure == null))?null:structure);
var m__11146__auto__ = (com.rpl.specter.navs.prepend_one[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__11146__auto__.call(null,structure,elem));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.prepend_one["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__11146__auto____$1.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-one",structure);
}
}
}
});

goog.object.set(com.rpl.specter.navs.AddExtremes,"null",true);

var G__28840_28896 = com.rpl.specter.navs.append_all;
var G__28841_28897 = "null";
var G__28842_28898 = ((function (G__28840_28896,G__28841_28897){
return (function (_,elements){
return elements;
});})(G__28840_28896,G__28841_28897))
;
goog.object.set(G__28840_28896,G__28841_28897,G__28842_28898);

var G__28844_28902 = com.rpl.specter.navs.prepend_all;
var G__28845_28903 = "null";
var G__28846_28904 = ((function (G__28844_28902,G__28845_28903){
return (function (_,elements){
return elements;
});})(G__28844_28902,G__28845_28903))
;
goog.object.set(G__28844_28902,G__28845_28903,G__28846_28904);

var G__28847_28905 = com.rpl.specter.navs.append_one;
var G__28848_28906 = "null";
var G__28849_28907 = ((function (G__28847_28905,G__28848_28906){
return (function (_,elem){
var x__11366__auto__ = elem;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});})(G__28847_28905,G__28848_28906))
;
goog.object.set(G__28847_28905,G__28848_28906,G__28849_28907);

var G__28859_28909 = com.rpl.specter.navs.prepend_one;
var G__28860_28910 = "null";
var G__28861_28911 = ((function (G__28859_28909,G__28860_28910){
return (function (_,elem){
var x__11366__auto__ = elem;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});})(G__28859_28909,G__28860_28910))
;
goog.object.set(G__28859_28909,G__28860_28910,G__28861_28911);


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,structure__$1,elements);
});


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_(_LT__GT___$2);
});


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure__$1,elem);
});


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),structure__$1);
});

goog.object.set(com.rpl.specter.navs.AddExtremes,"_",true);

var G__28867_28925 = com.rpl.specter.navs.append_all;
var G__28868_28926 = "_";
var G__28869_28927 = ((function (G__28867_28925,G__28868_28926){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,elements);
});})(G__28867_28925,G__28868_28926))
;
goog.object.set(G__28867_28925,G__28868_28926,G__28869_28927);

var G__28872_28935 = com.rpl.specter.navs.prepend_all;
var G__28873_28936 = "_";
var G__28874_28937 = ((function (G__28872_28935,G__28873_28936){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(elements,structure);
});})(G__28872_28935,G__28873_28936))
;
goog.object.set(G__28872_28935,G__28873_28936,G__28874_28937);

var G__28889_28945 = com.rpl.specter.navs.append_one;
var G__28890_28946 = "_";
var G__28891_28947 = ((function (G__28889_28945,G__28890_28946){
return (function (structure,elem){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
});})(G__28889_28945,G__28890_28946))
;
goog.object.set(G__28889_28945,G__28890_28946,G__28891_28947);

var G__28893_28952 = com.rpl.specter.navs.prepend_one;
var G__28894_28953 = "_";
var G__28895_28954 = ((function (G__28893_28952,G__28894_28953){
return (function (structure,elem){
return cljs.core.cons(elem,structure);
});})(G__28893_28952,G__28894_28953))
;
goog.object.set(G__28893_28952,G__28894_28953,G__28895_28954);

/**
 * @interface
 */
com.rpl.specter.navs.UpdateExtremes = function(){};

com.rpl.specter.navs.update_first = (function com$rpl$specter$navs$update_first(s,afn){
if((!((s == null))) && (!((s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 == null)))){
return s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2(s,afn);
} else {
var x__11145__auto__ = (((s == null))?null:s);
var m__11146__auto__ = (com.rpl.specter.navs.update_first[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__11146__auto__.call(null,s,afn));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.update_first["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(s,afn) : m__11146__auto____$1.call(null,s,afn));
} else {
throw cljs.core.missing_protocol("UpdateExtremes.update-first",s);
}
}
}
});

com.rpl.specter.navs.update_last = (function com$rpl$specter$navs$update_last(s,afn){
if((!((s == null))) && (!((s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 == null)))){
return s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2(s,afn);
} else {
var x__11145__auto__ = (((s == null))?null:s);
var m__11146__auto__ = (com.rpl.specter.navs.update_last[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__11146__auto__.call(null,s,afn));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.update_last["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(s,afn) : m__11146__auto____$1.call(null,s,afn));
} else {
throw cljs.core.missing_protocol("UpdateExtremes.update-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.navs.GetExtremes = function(){};

com.rpl.specter.navs.get_first = (function com$rpl$specter$navs$get_first(s){
if((!((s == null))) && (!((s.com$rpl$specter$navs$GetExtremes$get_first$arity$1 == null)))){
return s.com$rpl$specter$navs$GetExtremes$get_first$arity$1(s);
} else {
var x__11145__auto__ = (((s == null))?null:s);
var m__11146__auto__ = (com.rpl.specter.navs.get_first[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__11146__auto__.call(null,s));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.get_first["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(s) : m__11146__auto____$1.call(null,s));
} else {
throw cljs.core.missing_protocol("GetExtremes.get-first",s);
}
}
}
});

com.rpl.specter.navs.get_last = (function com$rpl$specter$navs$get_last(s){
if((!((s == null))) && (!((s.com$rpl$specter$navs$GetExtremes$get_last$arity$1 == null)))){
return s.com$rpl$specter$navs$GetExtremes$get_last$arity$1(s);
} else {
var x__11145__auto__ = (((s == null))?null:s);
var m__11146__auto__ = (com.rpl.specter.navs.get_last[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__11146__auto__.call(null,s));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.get_last["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(s) : m__11146__auto____$1.call(null,s));
} else {
throw cljs.core.missing_protocol("GetExtremes.get-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.navs.FastEmpty = function(){};

com.rpl.specter.navs.fast_empty_QMARK_ = (function com$rpl$specter$navs$fast_empty_QMARK_(s){
if((!((s == null))) && (!((s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 == null)))){
return s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
var x__11145__auto__ = (((s == null))?null:s);
var m__11146__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__11146__auto__.call(null,s));
} else {
var m__11146__auto____$1 = (com.rpl.specter.navs.fast_empty_QMARK_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(s) : m__11146__auto____$1.call(null,s));
} else {
throw cljs.core.missing_protocol("FastEmpty.fast-empty?",s);
}
}
}
});



com.rpl.specter.navs.PosNavigator_select_STAR_ = (function com$rpl$specter$navs$PosNavigator_select_STAR_(getter,updater,structure,next_fn){
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
var G__29065 = (getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(structure) : getter.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__29065) : next_fn.call(null,G__29065));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.PosNavigator_transform_STAR_ = (function com$rpl$specter$navs$PosNavigator_transform_STAR_(getter,updater,structure,next_fn){
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (updater.cljs$core$IFn$_invoke$arity$2 ? updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : updater.call(null,structure,next_fn));
}
});

com.rpl.specter.navs.PosNavigator = com.rpl.specter.impl.direct_nav_obj((function (getter,updater){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs29069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs29069 = (function (getter,updater,meta29070){
this.getter = getter;
this.updater = updater;
this.meta29070 = meta29070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.navs.t_com$rpl$specter$navs29069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29071,meta29070__$1){
var self__ = this;
var _29071__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29069(self__.getter,self__.updater,meta29070__$1));
});


com.rpl.specter.navs.t_com$rpl$specter$navs29069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29071){
var self__ = this;
var _29071__$1 = this;
return self__.meta29070;
});


com.rpl.specter.navs.t_com$rpl$specter$navs29069.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.navs.t_com$rpl$specter$navs29069.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return next_fn((self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(structure) : self__.getter.call(null,structure)));
} else {
return com.rpl.specter.impl.NONE;
}
});


com.rpl.specter.navs.t_com$rpl$specter$navs29069.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27024__auto__,vals__27025__auto__,structure,next_fn__27026__auto__){
var self__ = this;
var this__27024__auto____$1 = this;
var next_fn = ((function (this__27024__auto____$1){
return (function (s__27027__auto__){
return (next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__27026__auto__.cljs$core$IFn$_invoke$arity$2(vals__27025__auto__,s__27027__auto__) : next_fn__27026__auto__.call(null,vals__27025__auto__,s__27027__auto__));
});})(this__27024__auto____$1))
;
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (self__.updater.cljs$core$IFn$_invoke$arity$2 ? self__.updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : self__.updater.call(null,structure,next_fn));
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs29069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$getter,cljs.core.cst$sym$updater,cljs.core.cst$sym$meta29070], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29069.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs29069.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs29069";

com.rpl.specter.navs.t_com$rpl$specter$navs29069.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs29069");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs29069 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs29069(getter__$1,updater__$1,meta29070){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29069(getter__$1,updater__$1,meta29070));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs29069(getter,updater,null));
}));
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = (function (){var G__29123 = cljs.core.first(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29123) : afn.call(null,G__29123));
})();
var restl = cljs.core.rest(l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons(newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = (function (){var G__29128 = cljs.core.last(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29128) : afn.call(null,G__29128));
})();
var bl = cljs.core.butlast(l);
if((com.rpl.specter.impl.NONE === lastl)){
if((bl == null)){
return cljs.core.List.EMPTY;
} else {
return bl;
}
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lastl], null));
}
});
com.rpl.specter.navs.vec_count = (function com$rpl$specter$navs$vec_count(v){
return cljs.core.count(v);
});
com.rpl.specter.navs.transient_vec_count = (function com$rpl$specter$navs$transient_vec_count(v){
return cljs.core.count(v);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
var newv = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(val) : afn.call(null,val));
if((com.rpl.specter.impl.NONE === newv)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v__$1,(1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,(0),newv);
}
});


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
var c = (com.rpl.specter.navs.vec_count(v__$1) | (0));
var G__29145 = c;
switch (G__29145) {
case (1):
var vec__29146 = v__$1;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29146,(0),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e) : afn.call(null,e));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__29161 = v__$1;
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29161,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29161,(1),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e2) : afn.call(null,e2));
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = (function (){var G__29166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,i);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29166) : afn.call(null,G__29166));
})();
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop(v__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,i,newe);
}

}
});

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"string",true);

var G__29168_29203 = com.rpl.specter.navs.update_first;
var G__29169_29204 = "string";
var G__29170_29205 = ((function (G__29168_29203,G__29169_29204){
return (function (s,afn){
var rests = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),cljs.core.count(s));
var newb = (function (){var G__29171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29171) : afn.call(null,G__29171));
})();
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rests)].join('');
}
});})(G__29168_29203,G__29169_29204))
;
goog.object.set(G__29168_29203,G__29169_29204,G__29170_29205);

var G__29172_29236 = com.rpl.specter.navs.update_last;
var G__29173_29237 = "string";
var G__29174_29238 = ((function (G__29172_29236,G__29173_29237){
return (function (s,afn){
var last_idx = (cljs.core.count(s) - (1));
var newl = (function (){var G__29175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,last_idx);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__29175) : afn.call(null,G__29175));
})();
var begins = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(begins),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
});})(G__29172_29236,G__29173_29237))
;
goog.object.set(G__29172_29236,G__29173_29237,G__29174_29238);

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"_",true);

var G__29177_29247 = com.rpl.specter.navs.update_first;
var G__29178_29248 = "_";
var G__29179_29249 = ((function (G__29177_29247,G__29178_29248){
return (function (l,val){
return com.rpl.specter.navs.update_first_list(l,val);
});})(G__29177_29247,G__29178_29248))
;
goog.object.set(G__29177_29247,G__29178_29248,G__29179_29249);

var G__29182_29254 = com.rpl.specter.navs.update_last;
var G__29183_29255 = "_";
var G__29184_29256 = ((function (G__29182_29254,G__29183_29255){
return (function (l,val){
return com.rpl.specter.navs.update_last_list(l,val);
});})(G__29182_29254,G__29183_29255))
;
goog.object.set(G__29182_29254,G__29183_29255,G__29184_29256);

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
});


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.peek(v__$1);
});

goog.object.set(com.rpl.specter.navs.GetExtremes,"_",true);

var G__29265_29283 = com.rpl.specter.navs.get_first;
var G__29266_29284 = "_";
var G__29267_29285 = ((function (G__29265_29283,G__29266_29284){
return (function (s){
return cljs.core.first(s);
});})(G__29265_29283,G__29266_29284))
;
goog.object.set(G__29265_29283,G__29266_29284,G__29267_29285);

var G__29268_29288 = com.rpl.specter.navs.get_last;
var G__29269_29289 = "_";
var G__29270_29290 = ((function (G__29268_29288,G__29269_29289){
return (function (s){
return cljs.core.last(s);
});})(G__29268_29288,G__29269_29289))
;
goog.object.set(G__29268_29288,G__29269_29289,G__29270_29290);

goog.object.set(com.rpl.specter.navs.GetExtremes,"string",true);

var G__29271_29294 = com.rpl.specter.navs.get_first;
var G__29272_29295 = "string";
var G__29273_29296 = ((function (G__29271_29294,G__29272_29295){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
});})(G__29271_29294,G__29272_29295))
;
goog.object.set(G__29271_29294,G__29272_29295,G__29273_29296);

var G__29275_29298 = com.rpl.specter.navs.get_last;
var G__29276_29299 = "string";
var G__29277_29300 = ((function (G__29275_29298,G__29276_29299){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
});})(G__29275_29298,G__29276_29299))
;
goog.object.set(G__29275_29298,G__29276_29299,G__29277_29300);
goog.object.set(com.rpl.specter.navs.FastEmpty,"null",true);

var G__29304_29316 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__29305_29317 = "null";
var G__29306_29318 = ((function (G__29304_29316,G__29305_29317){
return (function (_){
return true;
});})(G__29304_29316,G__29305_29317))
;
goog.object.set(G__29304_29316,G__29305_29317,G__29306_29318);


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),com.rpl.specter.navs.vec_count(v__$1));
});


cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),com.rpl.specter.navs.transient_vec_count(v__$1));
});

goog.object.set(com.rpl.specter.navs.FastEmpty,"_",true);

var G__29313_29321 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__29314_29322 = "_";
var G__29315_29323 = ((function (G__29313_29321,G__29314_29322){
return (function (s){
return cljs.core.empty_QMARK_(s);
});})(G__29313_29321,G__29314_29322))
;
goog.object.set(G__29313_29321,G__29314_29322,G__29315_29323);
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = (function (){var G__29325 = vals;
var G__29326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29325,G__29326) : next_fn.call(null,G__29325,G__29326));
})();
if((newv === com.rpl.specter.impl.NONE)){
if(cljs.core.sequential_QMARK_(structure)){
return com.rpl.specter.impl.srange_transform_STAR_(structure,key,(key + (1)),((function (newv){
return (function (_){
return cljs.core.PersistentVector.EMPTY;
});})(newv))
);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,key);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(structure,key,newv);
}
});
/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 *        Setting the value to NONE will remove it from the collection.
 */
com.rpl.specter.navs.keypath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (key){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs29327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs29327 = (function (key,meta29328){
this.key = key;
this.meta29328 = meta29328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.navs.t_com$rpl$specter$navs29327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29329,meta29328__$1){
var self__ = this;
var _29329__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29327(self__.key,meta29328__$1));
});


com.rpl.specter.navs.t_com$rpl$specter$navs29327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29329){
var self__ = this;
var _29329__$1 = this;
return self__.meta29328;
});


com.rpl.specter.navs.t_com$rpl$specter$navs29327.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.navs.t_com$rpl$specter$navs29327.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__29334 = vals;
var G__29335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29334,G__29335) : next_fn.call(null,G__29334,G__29335));
});


com.rpl.specter.navs.t_com$rpl$specter$navs29327.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.key,next_fn);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key,cljs.core.cst$sym$meta29328], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29327.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs29327.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs29327";

com.rpl.specter.navs.t_com$rpl$specter$navs29327.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs29327");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs29327 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs29327(key__$1,meta29328){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29327(key__$1,meta29328));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs29327(key,null));
}));
/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (k){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs29350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs29350 = (function (k,meta29351){
this.k = k;
this.meta29351 = meta29351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.navs.t_com$rpl$specter$navs29350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29352,meta29351__$1){
var self__ = this;
var _29352__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29350(self__.k,meta29351__$1));
});


com.rpl.specter.navs.t_com$rpl$specter$navs29350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29352){
var self__ = this;
var _29352__$1 = this;
return self__.meta29351;
});


com.rpl.specter.navs.t_com$rpl$specter$navs29350.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.navs.t_com$rpl$specter$navs29350.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
var G__29370 = vals;
var G__29371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.k);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29370,G__29371) : next_fn.call(null,G__29370,G__29371));
} else {
return com.rpl.specter.impl.NONE;
}
});


com.rpl.specter.navs.t_com$rpl$specter$navs29350.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.k,next_fn);
} else {
return structure;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs29350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$meta29351], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29350.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs29350.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs29350";

com.rpl.specter.navs.t_com$rpl$specter$navs29350.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs29350");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs29350 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs29350(k__$1,meta29351){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29350(k__$1,meta29351));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs29350(k,null));
}));
com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (i){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs29397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs29397 = (function (i,meta29398){
this.i = i;
this.meta29398 = meta29398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.navs.t_com$rpl$specter$navs29397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29399,meta29398__$1){
var self__ = this;
var _29399__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29397(self__.i,meta29398__$1));
});


com.rpl.specter.navs.t_com$rpl$specter$navs29397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29399){
var self__ = this;
var _29399__$1 = this;
return self__.meta29398;
});


com.rpl.specter.navs.t_com$rpl$specter$navs29397.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.navs.t_com$rpl$specter$navs29397.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__29404 = vals;
var G__29405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29404,G__29405) : next_fn.call(null,G__29404,G__29405));
});


com.rpl.specter.navs.t_com$rpl$specter$navs29397.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(structure)){
var newv = (function (){var G__29407 = vals;
var G__29408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__29407,G__29408) : next_fn.call(null,G__29407,G__29408));
})();
if((newv === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.srange_transform_STAR_(structure,self__.i,(self__.i + (1)),((function (newv,this$__$1){
return (function (_){
return cljs.core.PersistentVector.EMPTY;
});})(newv,this$__$1))
);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(structure,self__.i,newv);
}
} else {
return com.rpl.specter.impl.srange_transform_STAR_(structure,self__.i,(self__.i + (1)),((function (this$__$1){
return (function (p__29409){
var vec__29410 = p__29409;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29410,(0),null);
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,e) : next_fn.call(null,vals,e));
if((v === com.rpl.specter.impl.NONE)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
});})(this$__$1))
);
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs29397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$meta29398], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs29397.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs29397.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs29397";

com.rpl.specter.navs.t_com$rpl$specter$navs29397.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs29397");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs29397 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs29397(i__$1,meta29398){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs29397(i__$1,meta29398));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs29397(i,null));
}));

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
com.rpl.specter.navs.SrangeEndFunction = (function (end_fn,__meta,__extmap,__hash){
this.end_fn = end_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k29423,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__29429 = k29423;
var G__29429__$1 = (((G__29429 instanceof cljs.core.Keyword))?G__29429.fqn:null);
switch (G__29429__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29423,else__11103__auto__);

}
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.rpl.specter.navs.SrangeEndFunction{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_fn,self__.end_fn],null))], null),self__.__extmap));
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29422){
var self__ = this;
var G__29422__$1 = this;
return (new cljs.core.RecordIter((0),G__29422__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$end_DASH_fn], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,self__.__extmap,self__.__hash));
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__29432 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__29432(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29424,other29425){
var self__ = this;
var this29424__$1 = this;
return (!((other29425 == null))) && ((this29424__$1.constructor === other29425.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29424__$1.end_fn,other29425.end_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29424__$1.__extmap,other29425.__extmap));
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$end_DASH_fn,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__29422){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__29434 = cljs.core.keyword_identical_QMARK_;
var expr__29435 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__29437 = cljs.core.cst$kw$end_DASH_fn;
var G__29438 = expr__29435;
return (pred__29434.cljs$core$IFn$_invoke$arity$2 ? pred__29434.cljs$core$IFn$_invoke$arity$2(G__29437,G__29438) : pred__29434.call(null,G__29437,G__29438));
})())){
return (new com.rpl.specter.navs.SrangeEndFunction(G__29422,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__29422),null));
}
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_fn,self__.end_fn],null))], null),self__.__extmap));
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__29422){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__29422,self__.__extmap,self__.__hash));
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.rpl.specter.navs.SrangeEndFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$end_DASH_fn], null);
});

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$type = true;

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.rpl.specter.navs/SrangeEndFunction");
});

com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.rpl.specter.navs/SrangeEndFunction");
});

com.rpl.specter.navs.__GT_SrangeEndFunction = (function com$rpl$specter$navs$__GT_SrangeEndFunction(end_fn){
return (new com.rpl.specter.navs.SrangeEndFunction(end_fn,null,null,null));
});

com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__29427){
return (new com.rpl.specter.navs.SrangeEndFunction(cljs.core.cst$kw$end_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__29427),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29427,cljs.core.cst$kw$end_DASH_fn)),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
var fexpr__29470 = cljs.core.cst$kw$end_DASH_fn.cljs$core$IFn$_invoke$arity$1(end_fn);
return (fexpr__29470.cljs$core$IFn$_invoke$arity$2 ? fexpr__29470.cljs$core$IFn$_invoke$arity$2(structure,start) : fexpr__29470.call(null,structure,start));
} else {
return (end_fn.cljs$core$IFn$_invoke$arity$1 ? end_fn.cljs$core$IFn$_invoke$arity$1(structure) : end_fn.call(null,structure));
}
});

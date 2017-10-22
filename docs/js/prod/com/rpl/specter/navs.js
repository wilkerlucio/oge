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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__23608__auto__,e){
var ret__23609__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(e) : next_fn.call(null,e));
if((ret__23609__auto__ === com.rpl.specter.impl.NONE)){
return curr__23608__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__23609__auto__)){
return cljs.core.reduced(ret__23609__auto__);
} else {
return ret__23609__auto__;
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
var newkv = (function (){var G__31714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__31714) : next_fn.call(null,G__31714));
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

var G__31715_31723 = com.rpl.specter.navs.all_transform;
var G__31716_31724 = "null";
var G__31717_31725 = ((function (G__31715_31723,G__31716_31724){
return (function (structure,next_fn){
return null;
});})(G__31715_31723,G__31716_31724))
;
goog.object.set(G__31715_31723,G__31716_31724,G__31717_31725);


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
var newkv = (function (){var G__31718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__31718) : next_fn.call(null,G__31718));
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

var G__31719_31726 = com.rpl.specter.navs.all_transform;
var G__31720_31727 = "_";
var G__31721_31728 = ((function (G__31719_31726,G__31720_31727){
return (function (structure,next_fn){
if(cljs.core.record_QMARK_(structure)){
return com.rpl.specter.navs.all_transform_record(structure,next_fn);
} else {
var empty_structure = cljs.core.empty(structure);
if((cljs.core.list_QMARK_(empty_structure)) && (cljs.core.not(com.rpl.specter.navs.queue_QMARK_(empty_structure)))){
return com.rpl.specter.navs.all_transform_list(structure,next_fn);
} else {
if(cljs.core.map_QMARK_(structure)){
return cljs.core.reduce_kv(((function (empty_structure,G__31719_31726,G__31720_31727){
return (function (m,k,v){
var newkv = (function (){var G__31722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__31722) : next_fn.call(null,G__31722));
})();
if(cljs.core.truth_(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
});})(empty_structure,G__31719_31726,G__31720_31727))
,empty_structure,structure);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(empty_structure,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
});})(G__31719_31726,G__31720_31727))
;
goog.object.set(G__31719_31726,G__31720_31727,G__31721_31728);

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

var G__31729_31741 = com.rpl.specter.navs.map_vals_transform;
var G__31730_31742 = "null";
var G__31731_31743 = ((function (G__31729_31741,G__31730_31742){
return (function (structure,next_fn){
return null;
});})(G__31729_31741,G__31730_31742))
;
goog.object.set(G__31729_31741,G__31730_31742,G__31731_31743);

var G__31732_31744 = com.rpl.specter.navs.map_keys_transform;
var G__31733_31745 = "null";
var G__31734_31746 = ((function (G__31732_31744,G__31733_31745){
return (function (structure,next_fn){
return null;
});})(G__31732_31744,G__31733_31745))
;
goog.object.set(G__31732_31744,G__31733_31745,G__31734_31746);


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

var G__31735_31747 = com.rpl.specter.navs.map_vals_transform;
var G__31736_31748 = "_";
var G__31737_31749 = ((function (G__31735_31747,G__31736_31748){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__31735_31747,G__31736_31748){
return (function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
});})(G__31735_31747,G__31736_31748))
,cljs.core.empty(structure),structure);
});})(G__31735_31747,G__31736_31748))
;
goog.object.set(G__31735_31747,G__31736_31748,G__31737_31749);

var G__31738_31750 = com.rpl.specter.navs.map_keys_transform;
var G__31739_31751 = "_";
var G__31740_31752 = ((function (G__31738_31750,G__31739_31751){
return (function (structure,next_fn){
return cljs.core.reduce_kv(((function (G__31738_31750,G__31739_31751){
return (function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
});})(G__31738_31750,G__31739_31751))
,cljs.core.empty(structure),structure);
});})(G__31738_31750,G__31739_31751))
;
goog.object.set(G__31738_31750,G__31739_31751,G__31740_31752);
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
var G__31753 = ((typeof structure === 'string')?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end):cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(structure),start,end));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__31753) : next_fn.call(null,G__31753));
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

var G__31756_31780 = com.rpl.specter.navs.append_all;
var G__31757_31781 = "null";
var G__31758_31782 = ((function (G__31756_31780,G__31757_31781){
return (function (_,elements){
return elements;
});})(G__31756_31780,G__31757_31781))
;
goog.object.set(G__31756_31780,G__31757_31781,G__31758_31782);

var G__31759_31783 = com.rpl.specter.navs.prepend_all;
var G__31760_31784 = "null";
var G__31761_31785 = ((function (G__31759_31783,G__31760_31784){
return (function (_,elements){
return elements;
});})(G__31759_31783,G__31760_31784))
;
goog.object.set(G__31759_31783,G__31760_31784,G__31761_31785);

var G__31762_31786 = com.rpl.specter.navs.append_one;
var G__31763_31787 = "null";
var G__31764_31788 = ((function (G__31762_31786,G__31763_31787){
return (function (_,elem){
var x__11366__auto__ = elem;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});})(G__31762_31786,G__31763_31787))
;
goog.object.set(G__31762_31786,G__31763_31787,G__31764_31788);

var G__31765_31789 = com.rpl.specter.navs.prepend_one;
var G__31766_31790 = "null";
var G__31767_31791 = ((function (G__31765_31789,G__31766_31790){
return (function (_,elem){
var x__11366__auto__ = elem;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});})(G__31765_31789,G__31766_31790))
;
goog.object.set(G__31765_31789,G__31766_31790,G__31767_31791);


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

var G__31768_31792 = com.rpl.specter.navs.append_all;
var G__31769_31793 = "_";
var G__31770_31794 = ((function (G__31768_31792,G__31769_31793){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,elements);
});})(G__31768_31792,G__31769_31793))
;
goog.object.set(G__31768_31792,G__31769_31793,G__31770_31794);

var G__31771_31795 = com.rpl.specter.navs.prepend_all;
var G__31772_31796 = "_";
var G__31773_31797 = ((function (G__31771_31795,G__31772_31796){
return (function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(elements,structure);
});})(G__31771_31795,G__31772_31796))
;
goog.object.set(G__31771_31795,G__31772_31796,G__31773_31797);

var G__31774_31798 = com.rpl.specter.navs.append_one;
var G__31775_31799 = "_";
var G__31776_31800 = ((function (G__31774_31798,G__31775_31799){
return (function (structure,elem){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
});})(G__31774_31798,G__31775_31799))
;
goog.object.set(G__31774_31798,G__31775_31799,G__31776_31800);

var G__31777_31801 = com.rpl.specter.navs.prepend_one;
var G__31778_31802 = "_";
var G__31779_31803 = ((function (G__31777_31801,G__31778_31802){
return (function (structure,elem){
return cljs.core.cons(elem,structure);
});})(G__31777_31801,G__31778_31802))
;
goog.object.set(G__31777_31801,G__31778_31802,G__31779_31803);

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
var G__31804 = (getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(structure) : getter.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__31804) : next_fn.call(null,G__31804));
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
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs31805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs31805 = (function (getter,updater,meta31806){
this.getter = getter;
this.updater = updater;
this.meta31806 = meta31806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.navs.t_com$rpl$specter$navs31805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31807,meta31806__$1){
var self__ = this;
var _31807__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs31805(self__.getter,self__.updater,meta31806__$1));
});


com.rpl.specter.navs.t_com$rpl$specter$navs31805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31807){
var self__ = this;
var _31807__$1 = this;
return self__.meta31806;
});


com.rpl.specter.navs.t_com$rpl$specter$navs31805.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.navs.t_com$rpl$specter$navs31805.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return next_fn((self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(structure) : self__.getter.call(null,structure)));
} else {
return com.rpl.specter.impl.NONE;
}
});


com.rpl.specter.navs.t_com$rpl$specter$navs31805.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__30396__auto__,vals__30397__auto__,structure,next_fn__30398__auto__){
var self__ = this;
var this__30396__auto____$1 = this;
var next_fn = ((function (this__30396__auto____$1){
return (function (s__30399__auto__){
return (next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__30398__auto__.cljs$core$IFn$_invoke$arity$2(vals__30397__auto__,s__30399__auto__) : next_fn__30398__auto__.call(null,vals__30397__auto__,s__30399__auto__));
});})(this__30396__auto____$1))
;
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (self__.updater.cljs$core$IFn$_invoke$arity$2 ? self__.updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : self__.updater.call(null,structure,next_fn));
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs31805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$getter,cljs.core.cst$sym$updater,cljs.core.cst$sym$meta31806], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs31805.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs31805.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs31805";

com.rpl.specter.navs.t_com$rpl$specter$navs31805.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs31805");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs31805 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs31805(getter__$1,updater__$1,meta31806){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs31805(getter__$1,updater__$1,meta31806));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs31805(getter,updater,null));
}));
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = (function (){var G__31808 = cljs.core.first(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__31808) : afn.call(null,G__31808));
})();
var restl = cljs.core.rest(l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons(newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = (function (){var G__31809 = cljs.core.last(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__31809) : afn.call(null,G__31809));
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
var G__31810 = c;
switch (G__31810) {
case (1):
var vec__31811 = v__$1;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31811,(0),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e) : afn.call(null,e));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__31814 = v__$1;
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(1),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e2) : afn.call(null,e2));
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = (function (){var G__31817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,i);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__31817) : afn.call(null,G__31817));
})();
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop(v__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,i,newe);
}

}
});

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"string",true);

var G__31818_31833 = com.rpl.specter.navs.update_first;
var G__31819_31834 = "string";
var G__31820_31835 = ((function (G__31818_31833,G__31819_31834){
return (function (s,afn){
var rests = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),cljs.core.count(s));
var newb = (function (){var G__31821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__31821) : afn.call(null,G__31821));
})();
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rests)].join('');
}
});})(G__31818_31833,G__31819_31834))
;
goog.object.set(G__31818_31833,G__31819_31834,G__31820_31835);

var G__31822_31836 = com.rpl.specter.navs.update_last;
var G__31823_31837 = "string";
var G__31824_31838 = ((function (G__31822_31836,G__31823_31837){
return (function (s,afn){
var last_idx = (cljs.core.count(s) - (1));
var newl = (function (){var G__31825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,last_idx);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__31825) : afn.call(null,G__31825));
})();
var begins = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(begins),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
});})(G__31822_31836,G__31823_31837))
;
goog.object.set(G__31822_31836,G__31823_31837,G__31824_31838);

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"_",true);

var G__31826_31839 = com.rpl.specter.navs.update_first;
var G__31827_31840 = "_";
var G__31828_31841 = ((function (G__31826_31839,G__31827_31840){
return (function (l,val){
return com.rpl.specter.navs.update_first_list(l,val);
});})(G__31826_31839,G__31827_31840))
;
goog.object.set(G__31826_31839,G__31827_31840,G__31828_31841);

var G__31829_31842 = com.rpl.specter.navs.update_last;
var G__31830_31843 = "_";
var G__31831_31844 = ((function (G__31829_31842,G__31830_31843){
return (function (l,val){
return com.rpl.specter.navs.update_last_list(l,val);
});})(G__31829_31842,G__31830_31843))
;
goog.object.set(G__31829_31842,G__31830_31843,G__31831_31844);

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

var G__31845_31857 = com.rpl.specter.navs.get_first;
var G__31846_31858 = "_";
var G__31847_31859 = ((function (G__31845_31857,G__31846_31858){
return (function (s){
return cljs.core.first(s);
});})(G__31845_31857,G__31846_31858))
;
goog.object.set(G__31845_31857,G__31846_31858,G__31847_31859);

var G__31848_31860 = com.rpl.specter.navs.get_last;
var G__31849_31861 = "_";
var G__31850_31862 = ((function (G__31848_31860,G__31849_31861){
return (function (s){
return cljs.core.last(s);
});})(G__31848_31860,G__31849_31861))
;
goog.object.set(G__31848_31860,G__31849_31861,G__31850_31862);

goog.object.set(com.rpl.specter.navs.GetExtremes,"string",true);

var G__31851_31863 = com.rpl.specter.navs.get_first;
var G__31852_31864 = "string";
var G__31853_31865 = ((function (G__31851_31863,G__31852_31864){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
});})(G__31851_31863,G__31852_31864))
;
goog.object.set(G__31851_31863,G__31852_31864,G__31853_31865);

var G__31854_31866 = com.rpl.specter.navs.get_last;
var G__31855_31867 = "string";
var G__31856_31868 = ((function (G__31854_31866,G__31855_31867){
return (function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
});})(G__31854_31866,G__31855_31867))
;
goog.object.set(G__31854_31866,G__31855_31867,G__31856_31868);
goog.object.set(com.rpl.specter.navs.FastEmpty,"null",true);

var G__31869_31875 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__31870_31876 = "null";
var G__31871_31877 = ((function (G__31869_31875,G__31870_31876){
return (function (_){
return true;
});})(G__31869_31875,G__31870_31876))
;
goog.object.set(G__31869_31875,G__31870_31876,G__31871_31877);


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

var G__31872_31878 = com.rpl.specter.navs.fast_empty_QMARK_;
var G__31873_31879 = "_";
var G__31874_31880 = ((function (G__31872_31878,G__31873_31879){
return (function (s){
return cljs.core.empty_QMARK_(s);
});})(G__31872_31878,G__31873_31879))
;
goog.object.set(G__31872_31878,G__31873_31879,G__31874_31880);
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = (function (){var G__31881 = vals;
var G__31882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__31881,G__31882) : next_fn.call(null,G__31881,G__31882));
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
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs31883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs31883 = (function (key,meta31884){
this.key = key;
this.meta31884 = meta31884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.navs.t_com$rpl$specter$navs31883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31885,meta31884__$1){
var self__ = this;
var _31885__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs31883(self__.key,meta31884__$1));
});


com.rpl.specter.navs.t_com$rpl$specter$navs31883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31885){
var self__ = this;
var _31885__$1 = this;
return self__.meta31884;
});


com.rpl.specter.navs.t_com$rpl$specter$navs31883.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.navs.t_com$rpl$specter$navs31883.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__31886 = vals;
var G__31887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__31886,G__31887) : next_fn.call(null,G__31886,G__31887));
});


com.rpl.specter.navs.t_com$rpl$specter$navs31883.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.key,next_fn);
});

com.rpl.specter.navs.t_com$rpl$specter$navs31883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key,cljs.core.cst$sym$meta31884], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs31883.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs31883.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs31883";

com.rpl.specter.navs.t_com$rpl$specter$navs31883.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs31883");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs31883 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs31883(key__$1,meta31884){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs31883(key__$1,meta31884));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs31883(key,null));
}));
/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (k){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs31888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs31888 = (function (k,meta31889){
this.k = k;
this.meta31889 = meta31889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.navs.t_com$rpl$specter$navs31888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31890,meta31889__$1){
var self__ = this;
var _31890__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs31888(self__.k,meta31889__$1));
});


com.rpl.specter.navs.t_com$rpl$specter$navs31888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31890){
var self__ = this;
var _31890__$1 = this;
return self__.meta31889;
});


com.rpl.specter.navs.t_com$rpl$specter$navs31888.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.navs.t_com$rpl$specter$navs31888.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
var G__31891 = vals;
var G__31892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.k);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__31891,G__31892) : next_fn.call(null,G__31891,G__31892));
} else {
return com.rpl.specter.impl.NONE;
}
});


com.rpl.specter.navs.t_com$rpl$specter$navs31888.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.k,next_fn);
} else {
return structure;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs31888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$meta31889], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs31888.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs31888.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs31888";

com.rpl.specter.navs.t_com$rpl$specter$navs31888.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs31888");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs31888 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs31888(k__$1,meta31889){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs31888(k__$1,meta31889));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs31888(k,null));
}));
com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (i){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs31893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs31893 = (function (i,meta31894){
this.i = i;
this.meta31894 = meta31894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

com.rpl.specter.navs.t_com$rpl$specter$navs31893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31895,meta31894__$1){
var self__ = this;
var _31895__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs31893(self__.i,meta31894__$1));
});


com.rpl.specter.navs.t_com$rpl$specter$navs31893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31895){
var self__ = this;
var _31895__$1 = this;
return self__.meta31894;
});


com.rpl.specter.navs.t_com$rpl$specter$navs31893.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;


com.rpl.specter.navs.t_com$rpl$specter$navs31893.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__31896 = vals;
var G__31897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__31896,G__31897) : next_fn.call(null,G__31896,G__31897));
});


com.rpl.specter.navs.t_com$rpl$specter$navs31893.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(structure)){
var newv = (function (){var G__31898 = vals;
var G__31899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__31898,G__31899) : next_fn.call(null,G__31898,G__31899));
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
return (function (p__31900){
var vec__31901 = p__31900;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31901,(0),null);
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

com.rpl.specter.navs.t_com$rpl$specter$navs31893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$meta31894], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs31893.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs31893.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs31893";

com.rpl.specter.navs.t_com$rpl$specter$navs31893.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs31893");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs31893 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs31893(i__$1,meta31894){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs31893(i__$1,meta31894));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs31893(i,null));
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


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k31905,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__31909 = k31905;
var G__31909__$1 = (((G__31909 instanceof cljs.core.Keyword))?G__31909.fqn:null);
switch (G__31909__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31905,else__11103__auto__);

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


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31904){
var self__ = this;
var G__31904__$1 = this;
return (new cljs.core.RecordIter((0),G__31904__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$end_DASH_fn], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__10868__auto____$1 = (function (){var fexpr__31910 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__31910(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31906,other31907){
var self__ = this;
var this31906__$1 = this;
return (!((other31907 == null))) && ((this31906__$1.constructor === other31907.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31906__$1.end_fn,other31907.end_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31906__$1.__extmap,other31907.__extmap));
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


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__31904){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__31911 = cljs.core.keyword_identical_QMARK_;
var expr__31912 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__31914 = cljs.core.cst$kw$end_DASH_fn;
var G__31915 = expr__31912;
return (pred__31911.cljs$core$IFn$_invoke$arity$2 ? pred__31911.cljs$core$IFn$_invoke$arity$2(G__31914,G__31915) : pred__31911.call(null,G__31914,G__31915));
})())){
return (new com.rpl.specter.navs.SrangeEndFunction(G__31904,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__31904),null));
}
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_fn,self__.end_fn],null))], null),self__.__extmap));
});


com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__31904){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__31904,self__.__extmap,self__.__hash));
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

com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__31908){
return (new com.rpl.specter.navs.SrangeEndFunction(cljs.core.cst$kw$end_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__31908),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31908,cljs.core.cst$kw$end_DASH_fn)),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
var fexpr__31917 = cljs.core.cst$kw$end_DASH_fn.cljs$core$IFn$_invoke$arity$1(end_fn);
return (fexpr__31917.cljs$core$IFn$_invoke$arity$2 ? fexpr__31917.cljs$core$IFn$_invoke$arity$2(structure,start) : fexpr__31917.call(null,structure,start));
} else {
return (end_fn.cljs$core$IFn$_invoke$arity$1 ? end_fn.cljs$core$IFn$_invoke$arity$1(structure) : end_fn.call(null,structure));
}
});

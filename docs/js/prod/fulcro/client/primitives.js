// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.primitives');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('goog.log');
goog.require('goog.object');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('fulcro.history');
goog.require('fulcro.client.logging');
goog.require('fulcro.tempid');
goog.require('fulcro.transit');
goog.require('clojure.zip');
goog.require('fulcro.client.impl.data_targeting');
goog.require('fulcro.client.impl.protocols');
goog.require('fulcro.client.impl.parser');
goog.require('fulcro.util');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cognitect.transit');
goog.require('goog.debug.Console');











/**
 * @interface
 */
fulcro.client.primitives.Ident = function(){};

/**
 * Return the ident for this component
 */
fulcro.client.primitives.ident = (function fulcro$client$primitives$ident(this$,props){
if((!((this$ == null))) && (!((this$.fulcro$client$primitives$Ident$ident$arity$2 == null)))){
return this$.fulcro$client$primitives$Ident$ident$arity$2(this$,props);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.primitives.ident[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__11539__auto__.call(null,this$,props));
} else {
var m__11539__auto____$1 = (fulcro.client.primitives.ident["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__11539__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.primitives.IQueryParams = function(){};

/**
 * Return the query parameters
 */
fulcro.client.primitives.params = (function fulcro$client$primitives$params(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$primitives$IQueryParams$params$arity$1 == null)))){
return this$.fulcro$client$primitives$IQueryParams$params$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.primitives.params[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.primitives.params["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueryParams.params",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.primitives.IQuery = function(){};

/**
 * Return the component's unbound static query
 */
fulcro.client.primitives.query = (function fulcro$client$primitives$query(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$primitives$IQuery$query$arity$1 == null)))){
return this$.fulcro$client$primitives$IQuery$query$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.primitives.query[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.primitives.query["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.primitives.ILocalState = function(){};

/**
 * Set the component's local state
 */
fulcro.client.primitives._set_state_BANG_ = (function fulcro$client$primitives$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.fulcro$client$primitives$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.fulcro$client$primitives$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.primitives._set_state_BANG_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__11539__auto__.call(null,this$,new_state));
} else {
var m__11539__auto____$1 = (fulcro.client.primitives._set_state_BANG_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__11539__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
fulcro.client.primitives._get_state = (function fulcro$client$primitives$_get_state(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$primitives$ILocalState$_get_state$arity$1 == null)))){
return this$.fulcro$client$primitives$ILocalState$_get_state$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.primitives._get_state[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.primitives._get_state["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
fulcro.client.primitives._get_rendered_state = (function fulcro$client$primitives$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$primitives$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.fulcro$client$primitives$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.primitives._get_rendered_state[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.primitives._get_rendered_state["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
fulcro.client.primitives._merge_pending_state_BANG_ = (function fulcro$client$primitives$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$primitives$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.fulcro$client$primitives$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.primitives._merge_pending_state_BANG_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.primitives._merge_pending_state_BANG_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-merge-pending-state!",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.primitives.InitialAppState = function(){};

/**
 * Get the initial state to be used for this component in app state. You are responsible for composing these together.
 */
fulcro.client.primitives.initial_state = (function fulcro$client$primitives$initial_state(clz,params){
if((!((clz == null))) && (!((clz.fulcro$client$primitives$InitialAppState$initial_state$arity$2 == null)))){
return clz.fulcro$client$primitives$InitialAppState$initial_state$arity$2(clz,params);
} else {
var x__11538__auto__ = (((clz == null))?null:clz);
var m__11539__auto__ = (fulcro.client.primitives.initial_state[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(clz,params) : m__11539__auto__.call(null,clz,params));
} else {
var m__11539__auto____$1 = (fulcro.client.primitives.initial_state["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(clz,params) : m__11539__auto____$1.call(null,clz,params));
} else {
throw cljs.core.missing_protocol("InitialAppState.initial-state",clz);
}
}
}
});

fulcro.client.primitives.has_initial_app_state_QMARK_ = (function fulcro$client$primitives$has_initial_app_state_QMARK_(component){
if(!((component == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$InitialAppState$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
fulcro.client.primitives.has_ident_QMARK_ = (function fulcro$client$primitives$has_ident_QMARK_(component){
if(!((component == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$Ident$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
fulcro.client.primitives.has_query_QMARK_ = (function fulcro$client$primitives$has_query_QMARK_(component){
if(!((component == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
fulcro.client.primitives.has_query_params_QMARK_ = (function fulcro$client$primitives$has_query_params_QMARK_(component){
if(!((component == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$IQueryParams$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Get the initial state of a component. Needed because calling the protocol method from a defui component in clj will not work as expected.
 */
fulcro.client.primitives.get_initial_state = (function fulcro$client$primitives$get_initial_state(class$,params){
if(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$InitialAppState$)))?true:false):false)){
return fulcro.client.primitives.initial_state(class$,params);
} else {
return null;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$ident,cljs.core.cst$sym$fulcro$util_SLASH_ident_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$missing,cljs.core.cst$kw$ident], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$fulcro$util_SLASH_ident_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,fulcro.util.ident_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$primitives_SLASH_transaction,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__36898_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_or,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$p1__36898_SHARP_),cljs.core.list(cljs.core.cst$sym$fulcro$util_SLASH_mutation_QMARK_,cljs.core.cst$sym$p1__36898_SHARP_))),cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__36898_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$p1__36898_SHARP_),cljs.core.list(cljs.core.cst$sym$util_SLASH_mutation_QMARK_,cljs.core.cst$sym$p1__36898_SHARP_))),(function (p1__36898_SHARP_){
return ((p1__36898_SHARP_ instanceof cljs.core.Keyword)) || (fulcro.util.mutation_QMARK_(p1__36898_SHARP_));
}),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__36899){
return cljs.core.vector_QMARK_(G__36899);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_or,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$fulcro$util_SLASH_mutation_QMARK_,cljs.core.cst$sym$_PERCENT_))),cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$primitives_SLASH_component_DASH_or_DASH_reconciler,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$primitives_SLASH_pessimistic_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$primitives_SLASH_tempids,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$fulcro$client$primitives_SLASH_tempid_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$tempid_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fulcro$client$primitives_SLASH_tempid_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.primitives.tempid_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__36912){
return cljs.core.map_QMARK_(G__36912);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17232__auto__,v__17233__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17233__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$fulcro$client$primitives_SLASH_tempid_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
/**
 * pass-through function for getting history, that enables testing (cannot mock protocols easily)
 */
fulcro.client.primitives.get_history = (function fulcro$client$primitives$get_history(reconciler){
if(cljs.core.truth_(reconciler)){
return fulcro.client.impl.protocols.get_history(reconciler);
} else {
return null;
}
});
fulcro.client.primitives.add_basis_time_STAR_ = (function fulcro$client$primitives$add_basis_time_STAR_(p__36933,props,time){
var map__36934 = p__36933;
var map__36934__$1 = ((((!((map__36934 == null)))?((((map__36934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36934):map__36934);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36934__$1,cljs.core.cst$kw$children);
if(cljs.core.map_QMARK_(props)){
if(cljs.core.seq(children)){
var children__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$children,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))):children);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(props,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (children__$1,map__36934,map__36934__$1,children){
return (function (p1__36929_SHARP_){
return cljs.core.contains_QMARK_(props,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p1__36929_SHARP_));
});})(children__$1,map__36934,map__36934__$1,children))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (children__$1,map__36934,map__36934__$1,children){
return (function (p__36940){
var map__36941 = p__36940;
var map__36941__$1 = ((((!((map__36941 == null)))?((((map__36941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36941):map__36941);
var ast = map__36941__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36941__$1,cljs.core.cst$kw$key);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36941__$1,cljs.core.cst$kw$query);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,key);
var ast__$1 = (function (){var G__36944 = ast;
var G__36944__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36944,cljs.core.cst$kw$children,children__$1):G__36944);
if(cljs.core.pos_int_QMARK_(query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36944__$1,cljs.core.cst$kw$children,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__36944,G__36944__$1,x,map__36941,map__36941__$1,ast,key,query,children__$1,map__36934,map__36934__$1,children){
return (function (p1__36931_SHARP_){
var G__36945 = p1__36931_SHARP_;
if(cljs.core.pos_int_QMARK_(cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(p1__36931_SHARP_))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__36945,cljs.core.cst$kw$query,cljs.core.dec);
} else {
return G__36945;
}
});})(G__36944,G__36944__$1,x,map__36941,map__36941__$1,ast,key,query,children__$1,map__36934,map__36934__$1,children))
,children__$1));
} else {
return G__36944__$1;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core.sequential_QMARK_(x))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (x,ast__$1,map__36941,map__36941__$1,ast,key,query,children__$1,map__36934,map__36934__$1,children){
return (function (p1__36932_SHARP_){
return (fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3(ast__$1,p1__36932_SHARP_,time) : fulcro.client.primitives.add_basis_time_STAR_.call(null,ast__$1,p1__36932_SHARP_,time));
});})(x,ast__$1,map__36941,map__36941__$1,ast,key,query,children__$1,map__36934,map__36934__$1,children))
,x):(fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3(ast__$1,x,time) : fulcro.client.primitives.add_basis_time_STAR_.call(null,ast__$1,x,time)))], null);
});})(children__$1,map__36934,map__36934__$1,children))
)),children__$1),cljs.core.assoc,cljs.core.cst$kw$fulcro$client$primitives_SLASH_time,time);
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(props,cljs.core.assoc,cljs.core.cst$kw$fulcro$client$primitives_SLASH_time,time);
}
} else {
return props;
}
});
/**
 * Recursively add the given basis time to all of the maps in the props. This is part of the UI refresh optimization
 *   algorithm. Children that refresh in isolation could be mis-drawn if a parent subsequently does a re-render without
 *   a query (e.g. local state change). The basis times allow us to detect and avoid that.
 */
fulcro.client.primitives.add_basis_time = (function fulcro$client$primitives$add_basis_time(var_args){
var G__36959 = arguments.length;
switch (G__36959) {
case 2:
return fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$2 = (function (props,time){
return clojure.walk.prewalk((function (ele){
if(cljs.core.map_QMARK_(ele)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(ele,cljs.core.assoc,cljs.core.cst$kw$fulcro$client$primitives_SLASH_time,time);
} else {
return ele;
}
}),props);
});

fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3 = (function (q,props,time){
return fulcro.client.primitives.add_basis_time_STAR_((fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(q) : fulcro.client.primitives.query__GT_ast.call(null,q)),props,time);
});

fulcro.client.primitives.add_basis_time.cljs$lang$maxFixedArity = 3;

/**
 * Returns the basis time from the given props, or ::unset if not available.
 */
fulcro.client.primitives.get_basis_time = (function fulcro$client$primitives$get_basis_time(props){
var or__10805__auto__ = cljs.core.cst$kw$fulcro$client$primitives_SLASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.cst$kw$unset;
}
});
/**
 * get the current basis time from the reconciler. Used instead of calling the protocol method `basis-t` to facilitate testing.
 */
fulcro.client.primitives.get_current_time = (function fulcro$client$primitives$get_current_time(reconciler){
return fulcro.client.impl.protocols.basis_t(reconciler);
});
/**
 * Collect the static declarations from the defui.
 */
fulcro.client.primitives.collect_statics = (function fulcro$client$primitives$collect_statics(dt){
var split_on_static = (function fulcro$client$primitives$collect_statics_$_split_on_static(forms){
return cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$static,null], null), null)),forms);
});
var split_on_symbol = (function fulcro$client$primitives$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with(cljs.core.complement(cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq(dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fields,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$protocols,cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__36997 = split_on_static(dt__$1);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36997,(0),null);
var vec__37000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36997,(1),null);
var seq__37001 = cljs.core.seq(vec__37000);
var first__37002 = cljs.core.first(seq__37001);
var seq__37001__$1 = cljs.core.next(seq__37001);
var _ = first__37002;
var first__37002__$1 = cljs.core.first(seq__37001__$1);
var seq__37001__$2 = cljs.core.next(seq__37001__$1);
var sym = first__37002__$1;
var remaining = seq__37001__$2;
var post = vec__37000;
var dt_SINGLEQUOTE___$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(dt_SINGLEQUOTE_,pre);
if(cljs.core.seq(post)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,cljs.core.cst$sym$field)){
var vec__37011 = cljs.core.split_at((2),remaining);
var field_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37011,(1),null);
var G__37043 = cljs.core.seq(dt__$2);
var G__37044 = dt_SINGLEQUOTE___$1;
var G__37045 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields], null),cljs.core.conj,cljs.core.vec(field_info));
dt__$1 = G__37043;
dt_SINGLEQUOTE_ = G__37044;
statics = G__37045;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__37015 = split_on_symbol(remaining);
var protocol_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37015,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37015,(1),null);
var G__37049 = cljs.core.seq(dt__$2);
var G__37050 = dt_SINGLEQUOTE___$1;
var G__37051 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocols], null),cljs.core.into,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__37049;
dt_SINGLEQUOTE_ = G__37050;
statics = G__37051;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__37052 = null;
var G__37053 = dt_SINGLEQUOTE___$1;
var G__37054 = statics;
dt__$1 = G__37052;
dt_SINGLEQUOTE_ = G__37053;
statics = G__37054;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dt,dt_SINGLEQUOTE_,cljs.core.cst$kw$statics,statics], null);
}
break;
}
});
fulcro.client.primitives.validate_statics = (function fulcro$client$primitives$validate_statics(dt){
var temp__5457__auto__ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37055_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37055_SHARP_)].join(''),/\//));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__5457__auto__)){
var invalid = temp__5457__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid)," protocol declaration must appear with `static`."].join('')));
} else {
return null;
}
});
fulcro.client.primitives.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$initLocalState,cljs.core.cst$sym$componentWillMount,cljs.core.cst$sym$componentDidUpdate,cljs.core.cst$sym$componentWillUnmount,cljs.core.cst$sym$componentWillReceiveProps,cljs.core.cst$sym$shouldComponentUpdate,cljs.core.cst$sym$render,cljs.core.cst$sym$componentWillUpdate,cljs.core.cst$sym$componentDidMount],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$prev_DASH_props,cljs.core.cst$sym$prev_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null)]);
fulcro.client.primitives.validate_sig = (function fulcro$client$primitives$validate_sig(p__37077){
var vec__37078 = p__37077;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(0),null);
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(1),null);
var method = vec__37078;
var sig_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.lifecycle_sigs,name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sig_SINGLEQUOTE_),cljs.core.count(sig))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid signature for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),", need ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig_SINGLEQUOTE_)].join('')),"\n","(= (count sig') (count sig))"].join('')));
}
});
fulcro.client.primitives.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reshape,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$sym$initLocalState,(function (p__37173){
var vec__37174 = p__37173;
var seq__37175 = cljs.core.seq(vec__37174);
var first__37176 = cljs.core.first(seq__37175);
var seq__37175__$1 = cljs.core.next(seq__37175);
var name = first__37176;
var first__37176__$1 = cljs.core.first(seq__37175__$1);
var seq__37175__$2 = cljs.core.next(seq__37175__$1);
var vec__37177 = first__37176__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37177,(0),null);
var args = vec__37177;
var body = seq__37175__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__37101__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj),cljs.core._conj(cljs.core.List.EMPTY,"fulcro$state"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__37101__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillReceiveProps,(function (p__37190){
var vec__37191 = p__37190;
var seq__37192 = cljs.core.seq(vec__37191);
var first__37193 = cljs.core.first(seq__37192);
var seq__37192__$1 = cljs.core.next(seq__37192);
var name = first__37193;
var first__37193__$1 = cljs.core.first(seq__37192__$1);
var seq__37192__$2 = cljs.core.next(seq__37192__$1);
var vec__37194 = first__37193__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37194,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37194,(1),null);
var args = vec__37194;
var body = seq__37192__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37102__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37103__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37102__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37103__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37102__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUpdate,(function (p__37204){
var vec__37205 = p__37204;
var seq__37206 = cljs.core.seq(vec__37205);
var first__37207 = cljs.core.first(seq__37206);
var seq__37206__$1 = cljs.core.next(seq__37206);
var name = first__37207;
var first__37207__$1 = cljs.core.first(seq__37206__$1);
var seq__37206__$2 = cljs.core.next(seq__37206__$1);
var vec__37208 = first__37207__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37208,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37208,(1),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37208,(2),null);
var args = vec__37208;
var body = seq__37206__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37111__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__37112__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37111__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = next_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__37112__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$pendingState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__37112__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__37113__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_Ident),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__37114__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__37115__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__37114__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__37115__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__37116__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__37116__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__37116__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__37117__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__37117__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__37114__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__37115__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37110__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__37113__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentDidUpdate,(function (p__39124){
var vec__39125 = p__39124;
var seq__39126 = cljs.core.seq(vec__39125);
var first__39127 = cljs.core.first(seq__39126);
var seq__39126__$1 = cljs.core.next(seq__39126);
var name = first__39127;
var first__39127__$1 = cljs.core.first(seq__39126__$1);
var seq__39126__$2 = cljs.core.next(seq__39126__$1);
var vec__39128 = first__39127__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39128,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39128,(1),null);
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39128,(2),null);
var args = vec__39128;
var body = seq__39126__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37122__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__37123__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__37124__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37122__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = prev_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_prev_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__37123__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37122__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = prev_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__37124__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$previousState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37122__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillMount,(function (p__39131){
var vec__39132 = p__39131;
var seq__39133 = cljs.core.seq(vec__39132);
var first__39134 = cljs.core.first(seq__39133);
var seq__39133__$1 = cljs.core.next(seq__39133);
var name = first__39134;
var first__39134__$1 = cljs.core.first(seq__39133__$1);
var seq__39133__$2 = cljs.core.next(seq__39133__$1);
var vec__39135 = first__39134__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39135,(0),null);
var args = vec__39135;
var body = seq__39133__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37125__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37125__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$reconciler__37126__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37125__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37127__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$reconciler__37126__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37127__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$impl$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37127__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37125__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentDidMount,(function (p__39138){
var vec__39139 = p__39138;
var seq__39140 = cljs.core.seq(vec__39139);
var first__39141 = cljs.core.first(seq__39140);
var seq__39140__$1 = cljs.core.next(seq__39140);
var name = first__39141;
var first__39141__$1 = cljs.core.first(seq__39140__$1);
var seq__39140__$2 = cljs.core.next(seq__39140__$1);
var vec__39142 = first__39141__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39142,(0),null);
var args = vec__39142;
var body = seq__39140__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37128__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37128__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$reconciler__37129__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37128__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lifecycle__37130__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$reconciler__37129__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lifecycle)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37128__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$mounted"),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lifecycle__37130__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lifecycle__37130__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37128__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mount)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUnmount,(function (p__39145){
var vec__39146 = p__39145;
var seq__39147 = cljs.core.seq(vec__39146);
var first__39148 = cljs.core.first(seq__39147);
var seq__39147__$1 = cljs.core.next(seq__39147);
var name = first__39148;
var first__39148__$1 = cljs.core.first(seq__39147__$1);
var seq__39147__$2 = cljs.core.next(seq__39147__$1);
var vec__39149 = first__39148__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39149,(0),null);
var args = vec__39149;
var body = seq__39147__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37135__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37135__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$reconciler__37136__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37135__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lifecycle__37137__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$reconciler__37136__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lifecycle)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__37138__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$reconciler__37136__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__37139__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__37138__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37140__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__37138__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37135__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$mounted"),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__37139__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__37139__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37135__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__37139__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37135__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lifecycle__37137__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lifecycle__37137__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37135__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$unmount)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37140__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$impl$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37140__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37135__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
}),cljs.core.cst$sym$render,(function (p__39152){
var vec__39153 = p__39152;
var seq__39154 = cljs.core.seq(vec__39153);
var first__39155 = cljs.core.first(seq__39154);
var seq__39154__$1 = cljs.core.next(seq__39154);
var name = first__39155;
var first__39155__$1 = cljs.core.first(seq__39154__$1);
var seq__39154__$2 = cljs.core.next(seq__39154__$1);
var vec__39156 = first__39155__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39156,(0),null);
var args = vec__39156;
var body = seq__39154__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37142__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37142__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__STAR_reconciler_STAR_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37142__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__STAR_depth_STAR_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_inc),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_depth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37142__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__STAR_shared_STAR_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_shared),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37142__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__STAR_instrument_STAR_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_instrument),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37142__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__STAR_parent_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37142__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
})], null),cljs.core.cst$kw$defaults,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$shouldComponentUpdate),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__37150__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__STAR_blindly_DASH_render_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__37153__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$value")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond_DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_FulcroProps),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_unwrap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$current_DASH_props__37154__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props_DASH_stale_QMARK___37155__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__GT_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_basis_DASH_time),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$current_DASH_props__37154__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_basis_DASH_time),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$props_DASH_changed_QMARK___37156__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props_DASH_stale_QMARK___37155__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$current_DASH_props__37154__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$state_DASH_changed_QMARK___37159__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__37150__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$children_DASH_changed_QMARK___37160__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__37153__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$props_DASH_changed_QMARK___37156__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$state_DASH_changed_QMARK___37159__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$children_DASH_changed_QMARK___37160__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUpdate),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__37150__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_Ident),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__37161__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__37162__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__37149__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__37161__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__37162__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__37164__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__37164__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__37164__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__37165__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__37165__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__37161__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__37162__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentDidUpdate),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__37166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__37167__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillMount),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37168__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37168__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$impl$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37168__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentDidMount),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$mounted"),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUnmount),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__37169__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__37170__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__37169__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__37171__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__37170__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37168__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__37170__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"fulcro$mounted"),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__37171__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__37171__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__37171__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37168__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$impl$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__37168__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__37148__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))))], null);
fulcro.client.primitives.reshape = (function fulcro$client$primitives$reshape(dt,p__39159){
var map__39160 = p__39159;
var map__39160__$1 = ((((!((map__39160 == null)))?((((map__39160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39160):map__39160);
var reshape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,cljs.core.cst$kw$reshape);
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,cljs.core.cst$kw$defaults);
var reshape_STAR_ = ((function (map__39160,map__39160__$1,reshape,defaults){
return (function fulcro$client$primitives$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_(x)) && (cljs.core.contains_QMARK_(reshape,cljs.core.first(x)))){
var reshapef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reshape,cljs.core.first(x));
fulcro.client.primitives.validate_sig(x);

return (reshapef.cljs$core$IFn$_invoke$arity$1 ? reshapef.cljs$core$IFn$_invoke$arity$1(x) : reshapef.call(null,x));
} else {
return x;
}
});})(map__39160,map__39160__$1,reshape,defaults))
;
var add_defaults_step = ((function (map__39160,map__39160__$1,reshape,defaults){
return (function fulcro$client$primitives$reshape_$_add_defaults_step(ret,p__39172){
var vec__39173 = p__39172;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173,(0),null);
var impl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173,(1),null);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([name]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,ret))))){
var vec__39176 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null)),ret);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39176,(0),null);
var vec__39179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39176,(1),null);
var seq__39180 = cljs.core.seq(vec__39179);
var first__39181 = cljs.core.first(seq__39180);
var seq__39180__$1 = cljs.core.next(seq__39180);
var p = first__39181;
var after = seq__39180__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(before),p,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(name,impl)], 0)),after);
} else {
return ret;
}
});})(map__39160,map__39160__$1,reshape,defaults))
;
var add_defaults = ((function (map__39160,map__39160__$1,reshape,defaults){
return (function fulcro$client$primitives$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_defaults_step,dt__$1,defaults);
});})(map__39160,map__39160__$1,reshape,defaults))
;
var add_object_protocol = ((function (map__39160,map__39160__$1,reshape,defaults){
return (function fulcro$client$primitives$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null),dt__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dt__$1,cljs.core.cst$sym$Object);
} else {
return dt__$1;
}
});})(map__39160,map__39160__$1,reshape,defaults))
;
return add_defaults(add_object_protocol(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reshape_STAR_,dt))));
});
fulcro.client.primitives.defui_STAR_ = (function fulcro$client$primitives$defui_STAR_(var_args){
var G__39198 = arguments.length;
switch (G__39198) {
case 2:
return fulcro.client.primitives.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return fulcro.client.primitives.defui_STAR_.cljs$core$IFn$_invoke$arity$3(name,form,null);
});

fulcro.client.primitives.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function fulcro$client$primitives$field_set_BANG_(obj,p__39203){
var vec__39204 = p__39203;
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39204,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39204,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__11759__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = value;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
});
var docstring = ((typeof cljs.core.first(forms) === 'string')?cljs.core.first(forms):null);
var forms__$1 = (function (){var G__39208 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest(G__39208);
} else {
return G__39208;
}
})();
var map__39207 = fulcro.client.primitives.collect_statics(forms__$1);
var map__39207__$1 = ((((!((map__39207 == null)))?((((map__39207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39207):map__39207);
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207__$1,cljs.core.cst$kw$dt);
var statics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207__$1,cljs.core.cst$kw$statics);
var _ = fulcro.client.primitives.validate_statics(dt);
var fqn = (cljs.core.truth_(env)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')):name);
var ctor = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__11759__auto__ = cljs.core.with_meta(name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$jsdoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor","@nocollapse"], null)], null),cljs.core.meta(name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,docstring], null):null)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39191__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_React$Component),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39191__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39191__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39191__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39191__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39191__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39191__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
var set_react_proto_BANG_ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_clone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_React$Component$prototype))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
var ctor__$1 = (cljs.core.truth_(cljs.core.cst$kw$once.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_exists_QMARK_),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = ctor;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = set_react_proto_BANG_;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__11759__auto__ = ctor;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = set_react_proto_BANG_;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):cljs.core.cst$sym$js_SLASH_undefined);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__11759__auto__ = ctor__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives.reshape(dt,fulcro.client.primitives.reshape_map)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_constructor)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_displayName)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = display_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH__DASH_fulcro$isComponent)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__39207,map__39207__$1,dt,statics,_,fqn,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__39192_SHARP_){
return field_set_BANG_(name,p1__39192_SHARP_);
});})(docstring,forms__$1,map__39207,map__39207__$1,dt,statics,_,fqn,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__39207,map__39207__$1,dt,statics,_,fqn,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__39193_SHARP_){
var G__39211 = p1__39193_SHARP_;
if((p1__39193_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__39211,cljs.core.assoc,cljs.core.cst$kw$static,true);
} else {
return G__39211;
}
});})(docstring,forms__$1,map__39207,map__39207__$1,dt,statics,_,fqn,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(statics))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(statics)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__11759__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39194__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__39195__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__39196__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__39195__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
});

fulcro.client.primitives.defui_STAR_.cljs$lang$maxFixedArity = 3;

var ret__12130__auto___39217 = (function (){
fulcro.client.primitives.defui = (function fulcro$client$primitives$defui(var_args){
var args__12091__auto__ = [];
var len__12084__auto___39218 = arguments.length;
var i__12085__auto___39219 = (0);
while(true){
if((i__12085__auto___39219 < len__12084__auto___39218)){
args__12091__auto__.push((arguments[i__12085__auto___39219]));

var G__39220 = (i__12085__auto___39219 + (1));
i__12085__auto___39219 = G__39220;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((3) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((3)),(0),null)):null);
return fulcro.client.primitives.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12092__auto__);
});

fulcro.client.primitives.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return fulcro.client.primitives.defui_STAR_.cljs$core$IFn$_invoke$arity$3(name,forms,_AMPERSAND_env);
} else {
return null;
}
});

fulcro.client.primitives.defui.cljs$lang$maxFixedArity = (3);

fulcro.client.primitives.defui.cljs$lang$applyTo = (function (seq39213){
var G__39214 = cljs.core.first(seq39213);
var seq39213__$1 = cljs.core.next(seq39213);
var G__39215 = cljs.core.first(seq39213__$1);
var seq39213__$2 = cljs.core.next(seq39213__$1);
var G__39216 = cljs.core.first(seq39213__$2);
var seq39213__$3 = cljs.core.next(seq39213__$2);
return fulcro.client.primitives.defui.cljs$core$IFn$_invoke$arity$variadic(G__39214,G__39215,G__39216,seq39213__$3);
});

return null;
})()
;
fulcro.client.primitives.defui.cljs$lang$macro = true;

var ret__12130__auto___39224 = (function (){
fulcro.client.primitives.ui = (function fulcro$client$primitives$ui(var_args){
var args__12091__auto__ = [];
var len__12084__auto___39225 = arguments.length;
var i__12085__auto___39226 = (0);
while(true){
if((i__12085__auto___39226 < len__12084__auto___39225)){
args__12091__auto__.push((arguments[i__12085__auto___39226]));

var G__39227 = (i__12085__auto___39226 + (1));
i__12085__auto___39226 = G__39227;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.primitives.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.primitives.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("ui_"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$primitives_SLASH_defui),(function (){var x__11759__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
});

fulcro.client.primitives.ui.cljs$lang$maxFixedArity = (2);

fulcro.client.primitives.ui.cljs$lang$applyTo = (function (seq39221){
var G__39222 = cljs.core.first(seq39221);
var seq39221__$1 = cljs.core.next(seq39221);
var G__39223 = cljs.core.first(seq39221__$1);
var seq39221__$2 = cljs.core.next(seq39221__$1);
return fulcro.client.primitives.ui.cljs$core$IFn$_invoke$arity$variadic(G__39222,G__39223,seq39221__$2);
});

return null;
})()
;
fulcro.client.primitives.ui.cljs$lang$macro = true;

fulcro.client.primitives.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
fulcro.client.primitives._STAR_raf_STAR_ = null;
fulcro.client.primitives._STAR_reconciler_STAR_ = null;
fulcro.client.primitives._STAR_parent_STAR_ = null;
fulcro.client.primitives._STAR_blindly_render_STAR_ = false;
fulcro.client.primitives._STAR_shared_STAR_ = null;
fulcro.client.primitives._STAR_instrument_STAR_ = null;
fulcro.client.primitives._STAR_depth_STAR_ = (0);
fulcro.client.primitives.compute_react_key = (function fulcro$client$primitives$compute_react_key(cl,props){
var temp__5455__auto__ = cljs.core.cst$kw$react_DASH_key.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5455__auto__)){
var rk = temp__5455__auto__;
return rk;
} else {
var temp__5455__auto____$1 = cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cl.name),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Returns true if the argument is a component.
 */
fulcro.client.primitives.component_QMARK_ = (function fulcro$client$primitives$component_QMARK_(x){
if(!((x == null))){
return x.fulcro$isComponent === true;
} else {
return false;
}
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
fulcro.client.primitives.react_type = (function fulcro$client$primitives$react_type(x){
var or__10805__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.type(x);
}
});
fulcro.client.primitives.state = (function fulcro$client$primitives$state(c){
if(fulcro.client.primitives.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
fulcro.client.primitives.get_prop = (function fulcro$client$primitives$get_prop(c,k){
var G__39228 = c.props;
var G__39229 = k;
return goog.object.get(G__39228,G__39229);
});

/**
* @constructor
*/
fulcro.client.primitives.FulcroProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
});

fulcro.client.primitives.FulcroProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$basis_DASH_t], null);
});

fulcro.client.primitives.FulcroProps.cljs$lang$type = true;

fulcro.client.primitives.FulcroProps.cljs$lang$ctorStr = "fulcro.client.primitives/FulcroProps";

fulcro.client.primitives.FulcroProps.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"fulcro.client.primitives/FulcroProps");
});

fulcro.client.primitives.__GT_FulcroProps = (function fulcro$client$primitives$__GT_FulcroProps(props,basis_t){
return (new fulcro.client.primitives.FulcroProps(props,basis_t));
});

fulcro.client.primitives.om_props = (function fulcro$client$primitives$om_props(props,basis_t){
return (new fulcro.client.primitives.FulcroProps(props,basis_t));
});
fulcro.client.primitives.om_props_basis = (function fulcro$client$primitives$om_props_basis(om_props){
return om_props.basis_t;
});
fulcro.client.primitives.nil_props = fulcro.client.primitives.om_props(null,(-1));
fulcro.client.primitives.get_props_STAR_ = (function fulcro$client$primitives$get_props_STAR_(x,k){
if((x == null)){
return fulcro.client.primitives.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return fulcro.client.primitives.nil_props;
} else {
return y;
}
}
});
fulcro.client.primitives.get_prev_props = (function fulcro$client$primitives$get_prev_props(x){
return fulcro.client.primitives.get_props_STAR_(x,"fulcro$prev$value");
});
fulcro.client.primitives.get_next_props = (function fulcro$client$primitives$get_next_props(x){
return fulcro.client.primitives.get_props_STAR_(x,"fulcro$next$value");
});
fulcro.client.primitives.get_props = (function fulcro$client$primitives$get_props(x){
return fulcro.client.primitives.get_props_STAR_(x,"fulcro$value");
});
/**
 * PRIVATE: Do not use
 */
fulcro.client.primitives.set_prop_BANG_ = (function fulcro$client$primitives$set_prop_BANG_(c,k,v){
var G__39230 = c.props;
var G__39231 = k;
var G__39232 = v;
return goog.object.set(G__39230,G__39231,G__39232);
});
/**
 * Returns true if x is a reconciler.
 */
fulcro.client.primitives.reconciler_QMARK_ = (function fulcro$client$primitives$reconciler_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro$client$impl$protocols$IReconciler$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
fulcro.client.primitives.get_indexer = (function fulcro$client$primitives$get_indexer(reconciler){
if(fulcro.client.primitives.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
fulcro.client.primitives.sift_idents = (function fulcro$client$primitives$sift_idents(res){
var map__39235 = cljs.core.group_by((function (p1__39234_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__39234_SHARP_));
}),res);
var map__39235__$1 = ((((!((map__39235 == null)))?((((map__39235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39235):map__39235);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39235__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39235__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
fulcro.client.primitives.get_reconciler = (function fulcro$client$primitives$get_reconciler(c){
if(fulcro.client.primitives.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return fulcro.client.primitives.get_prop(c,"fulcro$reconciler");
});
fulcro.client.primitives.unwrap = (function fulcro$client$primitives$unwrap(om_props){
return om_props.props;
});
fulcro.client.primitives.props_STAR_ = (function fulcro$client$primitives$props_STAR_(var_args){
var G__39238 = arguments.length;
switch (G__39238) {
case 2:
return fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.om_props_basis,x,y);
});

fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.om_props_basis,x,fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

fulcro.client.primitives.props_STAR_.cljs$lang$maxFixedArity = 3;

fulcro.client.primitives.prev_props_STAR_ = (function fulcro$client$primitives$prev_props_STAR_(var_args){
var G__39241 = arguments.length;
switch (G__39241) {
case 2:
return fulcro.client.primitives.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.om_props_basis,x,y);
});

fulcro.client.primitives.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.om_props_basis,fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

fulcro.client.primitives.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

fulcro.client.primitives._prev_props = (function fulcro$client$primitives$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return fulcro.client.primitives.unwrap(fulcro.client.primitives.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_props(prev_props),fulcro.client.primitives.get_prev_props(cst)),fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_props(cst),fulcro.client.primitives.get_props(props))));
});
fulcro.client.primitives._next_props = (function fulcro$client$primitives$_next_props(next_props,component){
return fulcro.client.primitives.unwrap(fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_props(component.props),fulcro.client.primitives.get_props(next_props),fulcro.client.primitives.get_next_props(component.state)));
});
fulcro.client.primitives.merge_pending_props_BANG_ = (function fulcro$client$primitives$merge_pending_props_BANG_(c){
if(fulcro.client.primitives.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"fulcro$next$value");
var prev = fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_props(cst),fulcro.client.primitives.get_props(props));
goog.object.set(cst,"fulcro$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"fulcro$next$value");

return goog.object.set(cst,"fulcro$value",pending);
}
});
fulcro.client.primitives.clear_prev_props_BANG_ = (function fulcro$client$primitives$clear_prev_props_BANG_(c){
var G__39243 = c.state;
var G__39244 = "fulcro$prev$value";
return goog.object.remove(G__39243,G__39244);
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
fulcro.client.primitives.t = (function fulcro$client$primitives$t(c){
return fulcro.client.primitives.om_props_basis(fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_props(c.props),fulcro.client.primitives.get_props(c.state)));
});
/**
 * Returns the parent component.
 */
fulcro.client.primitives.parent = (function fulcro$client$primitives$parent(component){
return fulcro.client.primitives.get_prop(component,"fulcro$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 * the mount root.
 */
fulcro.client.primitives.depth = (function fulcro$client$primitives$depth(component){
if(fulcro.client.primitives.component_QMARK_(component)){
return fulcro.client.primitives.get_prop(component,"fulcro$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
fulcro.client.primitives.react_key = (function fulcro$client$primitives$react_key(component){
return fulcro.client.primitives.get_prop(component,"fulcro$reactKey");
});
/**
 * Return a components props.
 */
fulcro.client.primitives.props = (function fulcro$client$primitives$props(component){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return fulcro.client.primitives.unwrap(fulcro.client.primitives.props_STAR_.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_props(component.props),fulcro.client.primitives.get_props(component.state)));
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
fulcro.client.primitives.get_state = (function fulcro$client$primitives$get_state(var_args){
var G__39246 = arguments.length;
switch (G__39246) {
case 1:
return fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$ILocalState$)))?true:false):false))?fulcro.client.primitives._get_state(component):(function (){var temp__5457__auto__ = component.state;
if(cljs.core.truth_(temp__5457__auto__)){
var state = temp__5457__auto__;
var or__10805__auto__ = goog.object.get(state,"fulcro$pendingState");
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return goog.object.get(state,"fulcro$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

fulcro.client.primitives.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Get the statically-declared query of IQuery from a given class.
 */
fulcro.client.primitives.get_static_query = (function fulcro$client$primitives$get_static_query(c){
if(fulcro.client.primitives.has_query_QMARK_){
} else {
throw (new Error("Assert failed: has-query?"));
}

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

return fulcro.client.primitives.query(c);
});
/**
 * Returns true if the given component or one of its parents has a query.
 */
fulcro.client.primitives.some_hasquery_QMARK_ = (function fulcro$client$primitives$some_hasquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(fulcro.client.primitives.has_query_QMARK_(c__$1)){
return true;
} else {
var G__39249 = fulcro.client.primitives.parent(c__$1);
c__$1 = G__39249;
continue;

}
}
break;
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component. 2-arity version works on client or server using a component and
 * explicit props.
 */
fulcro.client.primitives.get_ident = (function fulcro$client$primitives$get_ident(var_args){
var G__39251 = arguments.length;
switch (G__39251) {
case 1:
return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(fulcro.client.primitives.component_QMARK_(x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = fulcro.client.primitives.props(x);
if(!((m == null))){
} else {
throw (new Error(["Assert failed: ","get-ident invoked on component with nil props","\n","(not (nil? m))"].join('')));
}

return fulcro.client.primitives.ident(x,m);
});

fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2 = (function (class$,props){
if(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$)))?true:false):false)){
return fulcro.client.primitives.ident(class$,props);
} else {
return null;
}
});

fulcro.client.primitives.get_ident.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.var_QMARK_ = (function fulcro$client$primitives$var_QMARK_(x){
var and__10793__auto__ = (x instanceof cljs.core.Symbol);
if(and__10793__auto__){
var G__39256 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
var G__39257 = "?";
return goog.string.startsWith(G__39256,G__39257);
} else {
return and__10793__auto__;
}
});
fulcro.client.primitives.var__GT_keyword = (function fulcro$client$primitives$var__GT_keyword(x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('').substring((1)));
});
fulcro.client.primitives.replace_var = (function fulcro$client$primitives$replace_var(expr,params){
if(cljs.core.truth_(fulcro.client.primitives.var_QMARK_(expr))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,fulcro.client.primitives.var__GT_keyword(expr),expr);
} else {
return expr;
}
});
fulcro.client.primitives.bind_query = (function fulcro$client$primitives$bind_query(query,params){
var qm = cljs.core.meta(query);
var tr = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (qm){
return (function (p1__39258_SHARP_){
return (fulcro.client.primitives.bind_query.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.bind_query.cljs$core$IFn$_invoke$arity$2(p1__39258_SHARP_,params) : fulcro.client.primitives.bind_query.call(null,p1__39258_SHARP_,params));
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_(query))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_(query))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(query),tr,query):fulcro.client.primitives.replace_var(query,params)
));
var G__39259 = ret;
if(cljs.core.truth_((function (){var and__10793__auto__ = qm;
if(cljs.core.truth_(and__10793__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IMeta$))){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
}
} else {
return and__10793__auto__;
}
})())){
return cljs.core.with_meta(G__39259,qm);
} else {
return G__39259;
}
});
/**
 * Returns a string ID for the query of the given class with qualifier
 */
fulcro.client.primitives.query_id = (function fulcro$client$primitives$query_id(class$,qualifier){
if((class$ == null)){
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Query ID received no class (if you see this warning, it probably means metadata was lost on your query)",cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY)], 0));
} else {
var temp__5457__auto__ = class$.name;
if(cljs.core.truth_(temp__5457__auto__)){
var classname = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(qualifier)?["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualifier)].join(''):null))].join('');
} else {
return null;
}
}
});
fulcro.client.primitives.create_element = (function fulcro$client$primitives$create_element(class$,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,props,children);
});
/**
 * Create a factory constructor from a component class created with
 *    defui.
 */
fulcro.client.primitives.factory = (function fulcro$client$primitives$factory(var_args){
var G__39262 = arguments.length;
switch (G__39262) {
case 1:
return fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__39263){
var map__39264 = p__39263;
var map__39264__$1 = ((((!((map__39264 == null)))?((((map__39264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39264):map__39264);
var opts = map__39264__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39264__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39264__$1,cljs.core.cst$kw$keyfn);
var instrument_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39264__$1,cljs.core.cst$kw$instrument_QMARK_,true);
var qualifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39264__$1,cljs.core.cst$kw$qualifier);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return cljs.core.with_meta(((function (map__39264,map__39264__$1,opts,validator,keyfn,instrument_QMARK_,qualifier){
return (function() { 
var fulcro$client$primitives$element_factory__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.client.primitives._STAR_instrument_STAR_;
if(cljs.core.truth_(and__10793__auto__)){
return instrument_QMARK_;
} else {
return and__10793__auto__;
}
})())){
var G__39266 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$children,children,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$factory,fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$instrument_QMARK_,false))], null);
return (fulcro.client.primitives._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__39266) : fulcro.client.primitives._STAR_instrument_STAR_.call(null,G__39266));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):fulcro.client.primitives.compute_react_key(class$,props));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__39267 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39267)].join('');
} else {
return G__39267;
}
})();
var t = ((!((fulcro.client.primitives._STAR_reconciler_STAR_ == null)))?fulcro.client.primitives.get_current_time(fulcro.client.primitives._STAR_reconciler_STAR_):(0));
return fulcro.client.primitives.create_element(class$,({"fulcro$reactKey": key, "fulcro$queryid": fulcro.client.primitives.query_id(class$,qualifier), "key": key, "ref": ref__$1, "fulcro$reconciler": fulcro.client.primitives._STAR_reconciler_STAR_, "fulcro$instrument": fulcro.client.primitives._STAR_instrument_STAR_, "fulcro$parent": fulcro.client.primitives._STAR_parent_STAR_, "fulcro$depth": fulcro.client.primitives._STAR_depth_STAR_, "fulcro$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "fulcro$value": fulcro.client.primitives.om_props(props,t), "fulcro$shared": fulcro.client.primitives._STAR_shared_STAR_}),(function (){var or__10805__auto__ = fulcro.util.force_children(children);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}
};
var fulcro$client$primitives$element_factory = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__39269__i = 0, G__39269__a = new Array(arguments.length -  1);
while (G__39269__i < G__39269__a.length) {G__39269__a[G__39269__i] = arguments[G__39269__i + 1]; ++G__39269__i;}
  children = new cljs.core.IndexedSeq(G__39269__a,0,null);
} 
return fulcro$client$primitives$element_factory__delegate.call(this,props,children);};
fulcro$client$primitives$element_factory.cljs$lang$maxFixedArity = 1;
fulcro$client$primitives$element_factory.cljs$lang$applyTo = (function (arglist__39270){
var props = cljs.core.first(arglist__39270);
var children = cljs.core.rest(arglist__39270);
return fulcro$client$primitives$element_factory__delegate(props,children);
});
fulcro$client$primitives$element_factory.cljs$core$IFn$_invoke$arity$variadic = fulcro$client$primitives$element_factory__delegate;
return fulcro$client$primitives$element_factory;
})()
;})(map__39264,map__39264__$1,opts,validator,keyfn,instrument_QMARK_,qualifier))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,class$,cljs.core.cst$kw$queryid,fulcro.client.primitives.query_id(class$,qualifier),cljs.core.cst$kw$qualifier,qualifier], null));
});

fulcro.client.primitives.factory.cljs$lang$maxFixedArity = 2;

/**
 * Takes a state map that may contain normalized queries and a query ID. Returns the stored query or nil.
 */
fulcro.client.primitives.denormalize_query = (function fulcro$client$primitives$denormalize_query(state_map,ID){
var get_stored_query = (function (id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,id,cljs.core.cst$kw$query], null));
});
var temp__5457__auto__ = get_stored_query(ID);
if(cljs.core.truth_(temp__5457__auto__)){
var normalized_query = temp__5457__auto__;
return clojure.walk.prewalk(((function (normalized_query,temp__5457__auto__,get_stored_query){
return (function (ele){
var temp__5455__auto__ = (function (){var and__10793__auto__ = typeof ele === 'string';
if(and__10793__auto__){
return get_stored_query(ele);
} else {
return and__10793__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var q = temp__5455__auto__;
return q;
} else {
return ele;
}
});})(normalized_query,temp__5457__auto__,get_stored_query))
,normalized_query);
} else {
return null;
}
});
/**
 * get the declared static query params on a given class
 */
fulcro.client.primitives.get_query_params = (function fulcro$client$primitives$get_query_params(class$){
if(fulcro.client.primitives.has_query_params_QMARK_(class$)){
return fulcro.client.primitives.params(class$);
} else {
return null;
}
});
fulcro.client.primitives.get_query_by_id = (function fulcro$client$primitives$get_query_by_id(state_map,class$,queryid){
var static_params = fulcro.client.primitives.get_query_params(class$);
var query = (function (){var or__10805__auto__ = fulcro.client.primitives.denormalize_query(state_map,queryid);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return fulcro.client.primitives.get_static_query(class$);
}
})();
var params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,queryid,cljs.core.cst$kw$params], null),static_params);
return cljs.core.with_meta(fulcro.client.primitives.bind_query(query,params),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,class$,cljs.core.cst$kw$queryid,queryid], null));
});
fulcro.client.primitives.is_factory_QMARK_ = (function fulcro$client$primitives$is_factory_QMARK_(class_or_factory){
return (cljs.core.fn_QMARK_(class_or_factory)) && (cljs.core.contains_QMARK_(cljs.core.meta(class_or_factory),cljs.core.cst$kw$qualifier));
});
fulcro.client.primitives._STAR_query_state_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
 * Get the query id that is cached in the component's props.
 */
fulcro.client.primitives.get_query_id = (function fulcro$client$primitives$get_query_id(component){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return fulcro.client.primitives.get_prop(component,"fulcro$queryid");
});
/**
 * Get the query for the given class or factory. If called without a state map, then you'll get the declared static
 *   query of the class. If a state map is supplied, then the dynamically set queries in that state will result in
 *   the current dynamically-set query according to that state.
 */
fulcro.client.primitives.get_query = (function fulcro$client$primitives$get_query(var_args){
var G__39272 = arguments.length;
switch (G__39272) {
case 1:
return fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1 = (function (class_or_factory){
return fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,fulcro.client.primitives._STAR_query_state_STAR_);
});

fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2 = (function (class_or_factory,state_map){
var _STAR_query_state_STAR_39273 = fulcro.client.primitives._STAR_query_state_STAR_;
fulcro.client.primitives._STAR_query_state_STAR_ = state_map;

try{var class$ = (cljs.core.truth_(fulcro.client.primitives.is_factory_QMARK_(class_or_factory))?cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):((fulcro.client.primitives.component_QMARK_(class_or_factory))?fulcro.client.primitives.react_type(class_or_factory):class_or_factory
));
var qualifier = (cljs.core.truth_(fulcro.client.primitives.is_factory_QMARK_(class_or_factory))?cljs.core.cst$kw$qualifier.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):null);
var queryid = ((fulcro.client.primitives.component_QMARK_(class_or_factory))?fulcro.client.primitives.get_query_id(class_or_factory):fulcro.client.primitives.query_id(class$,qualifier));
if(cljs.core.truth_((function (){var and__10793__auto__ = class$;
if(cljs.core.truth_(and__10793__auto__)){
return fulcro.client.primitives.has_query_QMARK_(class$);
} else {
return and__10793__auto__;
}
})())){
return fulcro.client.primitives.get_query_by_id(state_map,class$,queryid);
} else {
return null;
}
}finally {fulcro.client.primitives._STAR_query_state_STAR_ = _STAR_query_state_STAR_39273;
}});

fulcro.client.primitives.get_query.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.link_element = (function fulcro$client$primitives$link_element(element){
return clojure.walk.prewalk((function fulcro$client$primitives$link_element_$_link_element_helper(ele){
var temp__5455__auto__ = cljs.core.meta(ele);
if(cljs.core.truth_(temp__5455__auto__)){
var map__39275 = temp__5455__auto__;
var map__39275__$1 = ((((!((map__39275 == null)))?((((map__39275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39275):map__39275);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39275__$1,cljs.core.cst$kw$queryid);
return queryid;
} else {
return ele;
}
}),element);
});
fulcro.client.primitives.deep_merge = (function fulcro$client$primitives$deep_merge(var_args){
var args__12091__auto__ = [];
var len__12084__auto___39278 = arguments.length;
var i__12085__auto___39279 = (0);
while(true){
if((i__12085__auto___39279 < len__12084__auto___39278)){
args__12091__auto__.push((arguments[i__12085__auto___39279]));

var G__39280 = (i__12085__auto___39279 + (1));
i__12085__auto___39279 = G__39280;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,fulcro.client.primitives.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

fulcro.client.primitives.deep_merge.cljs$lang$maxFixedArity = (0);

fulcro.client.primitives.deep_merge.cljs$lang$applyTo = (function (seq39277){
return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39277));
});

/**
 * Determines if there are query elements in the present query that need to be normalized as well. If so, it does so.
 *   Returns the new state map.
 */
fulcro.client.primitives.normalize_query_elements = (function fulcro$client$primitives$normalize_query_elements(state_map,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function fulcro$client$primitives$normalize_query_elements_$_normalize_query_elements_reducer(state,ele){
var parameterized_QMARK_ = cljs.core.list_QMARK_(ele);
var raw_element = ((parameterized_QMARK_)?cljs.core.first(ele):ele);
if(fulcro.util.union_QMARK_(raw_element)){
var union_alternates = cljs.core.first(cljs.core.vals(raw_element));
var normalized_union_alternates = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.link_element,union_alternates));
var union_query_id = cljs.core.cst$kw$queryid.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates));
if(cljs.core.truth_(union_query_id)){
} else {
throw (new Error(["Assert failed: ","Union query has an ID. Did you use extended get-query?","\n","union-query-id"].join('')));
}

return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,cljs.core.PersistentArrayMap.createAsIfByAssoc([union_query_id,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,normalized_union_alternates,cljs.core.cst$kw$id,union_query_id], null)])], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (union_alternates,normalized_union_alternates,union_query_id,parameterized_QMARK_,raw_element){
return (function fulcro$client$primitives$normalize_query_elements_$_normalize_query_elements_reducer_$_normalize_union_reducer(s,p__39281){
var vec__39282 = p__39281;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39282,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39282,(1),null);
return (fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2(s,subquery) : fulcro.client.primitives.normalize_query.call(null,s,subquery));
});})(union_alternates,normalized_union_alternates,union_query_id,parameterized_QMARK_,raw_element))
,state,union_alternates)], 0));
} else {
if(cljs.core.truth_(fulcro.util.join_QMARK_(raw_element))){
var G__39285 = state;
var G__39286 = fulcro.util.join_value(raw_element);
return (fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2(G__39285,G__39286) : fulcro.client.primitives.normalize_query.call(null,G__39285,G__39286));
} else {
return state;

}
}
}),state_map,query);
});
/**
 * Find all of the elements (only at the top level) of the given query and replace them
 *   with their query ID
 */
fulcro.client.primitives.link_query = (function fulcro$client$primitives$link_query(query){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.link_element,query);
});
/**
 * Given a state map and a query, returns a state map with the query normalized into the database. Query fragments
 *   that already appear in the state will not be added. 
 */
fulcro.client.primitives.normalize_query = (function fulcro$client$primitives$normalize_query(state_map,query){
var new_state = fulcro.client.primitives.normalize_query_elements(state_map,query);
var new_state__$1 = (((cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries.cljs$core$IFn$_invoke$arity$1(new_state) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,cljs.core.PersistentArrayMap.EMPTY):new_state);
var top_query = fulcro.client.primitives.link_query(query);
var temp__5455__auto__ = (function (){var G__39287 = query;
var G__39287__$1 = (((G__39287 == null))?null:cljs.core.meta(G__39287));
if((G__39287__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$queryid.cljs$core$IFn$_invoke$arity$1(G__39287__$1);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var queryid = temp__5455__auto__;
return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,cljs.core.PersistentArrayMap.createAsIfByAssoc([queryid,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,top_query,cljs.core.cst$kw$id,queryid], null)])], null),new_state__$1], 0));
} else {
return new_state__$1;
}
});
/**
 * Put a query in app state.
 *   NOTE: Indexes must be rebuilt after setting a query, so this function should primarily be used to build
 *   up an initial app state.
 */
fulcro.client.primitives.set_query_STAR_ = (function fulcro$client$primitives$set_query_STAR_(state_map,ui_factory_class_or_queryid,p__39288){
var map__39289 = p__39288;
var map__39289__$1 = ((((!((map__39289 == null)))?((((map__39289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39289):map__39289);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39289__$1,cljs.core.cst$kw$query);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39289__$1,cljs.core.cst$kw$params);
var queryid = (((ui_factory_class_or_queryid == null))?null:((typeof ui_factory_class_or_queryid === 'string')?ui_factory_class_or_queryid:(cljs.core.truth_((function (){var G__39291 = ui_factory_class_or_queryid;
var G__39291__$1 = (((G__39291 == null))?null:cljs.core.meta(G__39291));
if((G__39291__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__39291__$1,cljs.core.cst$kw$queryid);
}
})())?(function (){var G__39292 = ui_factory_class_or_queryid;
var G__39292__$1 = (((G__39292 == null))?null:cljs.core.meta(G__39292));
if((G__39292__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$queryid.cljs$core$IFn$_invoke$arity$1(G__39292__$1);
}
})():fulcro.client.primitives.query_id(ui_factory_class_or_queryid,null)
)));
if(typeof queryid === 'string'){
var new_state = fulcro.client.primitives.normalize_query(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,cljs.core.dissoc,queryid),cljs.core.with_meta(query,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$queryid,queryid], null)));
var params__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,queryid,cljs.core.cst$kw$params], null),params);
if(cljs.core.truth_(params__$1)){
return cljs.core.assoc_in(new_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,queryid,cljs.core.cst$kw$params], null),params__$1);
} else {
return new_state;
}
} else {
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Set query failed. There was no query ID."], 0));

return state_map;
}
});
/**
 * Gather the keys that would be considered part of the refresh set for the given query.
 * 
 *   E.g. [:a {:j [:b]} {:u {:x [:l] :y [:k]}}] ==> #{:a :j :u}
 */
fulcro.client.primitives.gather_keys = (function fulcro$client$primitives$gather_keys(query){
if(cljs.core.vector_QMARK_(query)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function fulcro$client$primitives$gather_keys_$_gather_keys_reducer(rv,e){
if((e instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,e);
} else {
if((fulcro.util.ident_QMARK_(e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(e)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,cljs.core.first(e));
} else {
if((cljs.core.list_QMARK_(e)) && ((cljs.core.first(e) instanceof cljs.core.Keyword))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,cljs.core.first(e));
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.util.join_QMARK_(e);
if(cljs.core.truth_(and__10793__auto__)){
return (fulcro.util.ident_QMARK_(fulcro.util.join_key(e))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(fulcro.util.join_key(e))));
} else {
return and__10793__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,cljs.core.first(fulcro.util.join_key(e)));
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.util.join_QMARK_(e);
if(cljs.core.truth_(and__10793__auto__)){
return (fulcro.util.join_key(e) instanceof cljs.core.Keyword);
} else {
return and__10793__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,fulcro.util.join_key(e));
} else {
return rv;

}
}
}
}
}
}),cljs.core.PersistentHashSet.EMPTY,query);
} else {
if(cljs.core.map_QMARK_(query)){
return cljs.core.set(cljs.core.keys(query));
} else {
return cljs.core.PersistentHashSet.EMPTY;

}
}
});
/**
 * Returns the component's data path.
 */
fulcro.client.primitives.path = (function fulcro$client$primitives$path(c){
return fulcro.client.primitives.get_prop(c,"fulcro$path");
});
fulcro.client.primitives.normalize_STAR_ = (function fulcro$client$primitives$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = ((((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$)))?true:false):false))?fulcro.client.primitives.ident(class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__39297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__39298 = data;
var G__39299 = refs;
var G__39300 = union_seen;
return (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(G__39297,G__39298,G__39299,G__39300) : fulcro.client.primitives.normalize_STAR_.call(null,G__39297,G__39298,G__39299,G__39300));
})(),cljs.core.assoc,cljs.core.cst$kw$fulcro$client$primitives_SLASH_tag,cljs.core.first(ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_(data)){
return data;
} else {
var q = cljs.core.seq(query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first(q);
if(cljs.core.truth_(fulcro.util.join_QMARK_(expr))){
var vec__39301 = fulcro.util.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39301,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39301,(1),null);
var recursive_QMARK_ = fulcro.util.recursion_QMARK_(sel);
var union_entry = ((fulcro.util.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((recursive_QMARK_) && (fulcro.util.ident_QMARK_(v))){
var G__39316 = cljs.core.next(q);
var G__39317 = ret;
q = G__39316;
ret = G__39317;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,v,refs,union_entry) : fulcro.client.primitives.normalize_STAR_.call(null,sel__$1,v,refs,union_entry));
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$)))?true:false):false))))){
var i = fulcro.client.primitives.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

var G__39318 = cljs.core.next(q);
var G__39319 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__39318;
ret = G__39319;
continue;
} else {
var G__39320 = cljs.core.next(q);
var G__39321 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__39320;
ret = G__39321;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__39293_SHARP_){
return (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,p1__39293_SHARP_,refs,union_entry) : fulcro.client.primitives.normalize_STAR_.call(null,sel__$1,p1__39293_SHARP_,refs,union_entry));
});})(q,ret,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$)))?true:false):false))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__39295_SHARP_){
return fulcro.client.primitives.ident(class$,p1__39295_SHARP_);
});})(q,ret,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__39308){
var vec__39309 = p__39308;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39309,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39309,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__39312){
var vec__39313 = p__39312;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39313,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39313,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__39301,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__39322 = cljs.core.next(q);
var G__39323 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__39322;
ret = G__39323;
continue;
} else {
var G__39324 = cljs.core.next(q);
var G__39325 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__39324;
ret = G__39325;
continue;
}
} else {
if((v == null)){
var G__39326 = cljs.core.next(q);
var G__39327 = ret;
q = G__39326;
ret = G__39327;
continue;
} else {
var G__39328 = cljs.core.next(q);
var G__39329 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__39328;
ret = G__39329;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__39330 = cljs.core.next(q);
var G__39331 = ret;
q = G__39330;
ret = G__39331;
continue;
} else {
var G__39332 = cljs.core.next(q);
var G__39333 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__39332;
ret = G__39333;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
fulcro.client.primitives.tree__GT_db = (function fulcro$client$primitives$tree__GT_db(var_args){
var G__39335 = arguments.length;
switch (G__39335) {
case 2:
return fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(x,data));
var ret = fulcro.client.primitives.normalize_STAR_(x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref(refs);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,refs_SINGLEQUOTE_], 0));
} else {
return cljs.core.with_meta(ret,cljs.core.deref(refs));
}
});

fulcro.client.primitives.tree__GT_db.cljs$lang$maxFixedArity = 3;

fulcro.client.primitives.focused_join = (function fulcro$client$primitives$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta(expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(expr))?(function (){var join_value = cljs.core.second(cljs.core.first(expr));
var join_value__$1 = (((fulcro.util.recursion_QMARK_(join_value)) && (cljs.core.seq(ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.ffirst(expr),(fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(join_value__$1,ks,null) : fulcro.client.primitives.focus_query_STAR_.call(null,join_value__$1,ks,null))]);
})():((cljs.core.seq_QMARK_(expr))?(function (){var x__11759__auto__ = (function (){var G__39341 = cljs.core.first(expr);
var G__39342 = ks;
var G__39343 = null;
var G__39344 = null;
return (fulcro.client.primitives.focused_join.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.focused_join.cljs$core$IFn$_invoke$arity$4(G__39341,G__39342,G__39343,G__39344) : fulcro.client.primitives.focused_join.call(null,G__39341,G__39342,G__39343,G__39344));
})();
return cljs.core._conj((function (){var x__11759__auto____$1 = cljs.core.second(expr);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto____$1);
})(),x__11759__auto__);
})():expr
));
var G__39345 = expr_SINGLEQUOTE_;
if(!((expr_meta == null))){
return cljs.core.with_meta(G__39345,expr_meta);
} else {
return G__39345;
}
});
fulcro.client.primitives.focus_query_STAR_ = (function fulcro$client$primitives$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__39346 = path;
var seq__39347 = cljs.core.seq(vec__39346);
var first__39348 = cljs.core.first(seq__39347);
var seq__39347__$1 = cljs.core.next(seq__39347);
var k = first__39348;
var ks = seq__39347__$1;
var match = ((function (vec__39346,seq__39347,first__39348,seq__39347__$1,k,ks){
return (function fulcro$client$primitives$focus_query_STAR__$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,fulcro.util.join_key(x));
});})(vec__39346,seq__39347,first__39348,seq__39347__$1,k,ks))
;
var value = ((function (vec__39346,seq__39347,first__39348,seq__39347__$1,k,ks){
return (function fulcro$client$primitives$focus_query_STAR__$_value(x){
return fulcro.client.primitives.focused_join(x,ks,query,union_expr);
});})(vec__39346,seq__39347,first__39348,seq__39347__$1,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(function (){var G__39349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k);
var G__39350 = ks;
var G__39351 = query;
return (fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(G__39349,G__39350,G__39351) : fulcro.client.primitives.focus_query_STAR_.call(null,G__39349,G__39350,G__39351));
})()]);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
fulcro.client.primitives.focus_query = (function fulcro$client$primitives$focus_query(query,path){
return fulcro.client.primitives.focus_query_STAR_(query,path,null);
});
/**
 * Given a query expression return its key.
 */
fulcro.client.primitives.expr__GT_key = (function fulcro$client$primitives$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
var expr_SINGLEQUOTE_ = cljs.core.first(expr);
if(cljs.core.map_QMARK_(expr_SINGLEQUOTE_)){
return cljs.core.ffirst(expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(fulcro.util.ident_QMARK_(expr)){
var G__39352 = expr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(expr))){
return cljs.core.first(G__39352);
} else {
return G__39352;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid query expr ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
fulcro.client.primitives.query_zip = (function fulcro$client$primitives$query_zip(root){
return clojure.zip.zipper((function (p1__39353_SHARP_){
return (cljs.core.vector_QMARK_(p1__39353_SHARP_)) || (cljs.core.map_QMARK_(p1__39353_SHARP_)) || (cljs.core.seq_QMARK_(p1__39353_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
fulcro.client.primitives.move_to_key = (function fulcro$client$primitives$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__39354 = clojure.zip.right(loc__$1);
loc__$1 = G__39354;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
fulcro.client.primitives.query_template = (function fulcro$client$primitives$query_template(query,path){
var query_template_STAR_ = (function fulcro$client$primitives$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__39363 = clojure.zip.down(loc);
var G__39364 = path__$1;
loc = G__39363;
path__$1 = G__39364;
continue;
} else {
var vec__39359 = path__$1;
var seq__39360 = cljs.core.seq(vec__39359);
var first__39361 = cljs.core.first(seq__39360);
var seq__39360__$1 = cljs.core.next(seq__39360);
var k = first__39361;
var ks = seq__39360__$1;
var k_SINGLEQUOTE_ = fulcro.client.primitives.expr__GT_key(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_(node)) || ((cljs.core.seq_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.first(node))))){
var loc_SINGLEQUOTE_ = fulcro.client.primitives.move_to_key((function (){var G__39362 = loc;
if(cljs.core.seq_QMARK_(node)){
return clojure.zip.down(G__39362);
} else {
return G__39362;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__39365 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(fulcro.client.primitives.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__39366 = cljs.core.next(ks);
loc = G__39365;
path__$1 = G__39366;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__39367 = loc_SINGLEQUOTE_;
var G__39368 = ks;
loc = G__39367;
path__$1 = G__39368;
continue;
}
} else {
var G__39369 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__39370 = ks;
loc = G__39369;
path__$1 = G__39370;
continue;
}
} else {
var G__39371 = clojure.zip.right(loc);
var G__39372 = path__$1;
loc = G__39371;
path__$1 = G__39372;
continue;
}
}
}
break;
}
});
return query_template_STAR_(fulcro.client.primitives.query_zip(query),path);
});
fulcro.client.primitives.replace = (function fulcro$client$primitives$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
fulcro.client.primitives.reduce_query_depth = (function fulcro$client$primitives$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_(fulcro.client.primitives.focus_query(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = fulcro.client.primitives.query_template(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node(pos);
var node_SINGLEQUOTE_ = (function (){var G__39373 = node;
if(typeof node === 'number'){
return (G__39373 - (1));
} else {
return G__39373;
}
})();
return fulcro.client.primitives.replace(pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
fulcro.client.primitives.reduce_union_recursion_depth = (function fulcro$client$primitives$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39374){
var vec__39375 = p__39374;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39375,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39375,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.client.primitives.reduce_query_depth(q,recursion_key)], null);
}),union_expr));
});
fulcro.client.primitives.mappable_ident_QMARK_ = (function fulcro$client$primitives$mappable_ident_QMARK_(refs,ident){
return (fulcro.util.ident_QMARK_(ident)) && (cljs.core.contains_QMARK_(refs,cljs.core.first(ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
fulcro.client.primitives.denormalize_STAR_ = (function fulcro$client$primitives$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__10793__auto__ = union_expr;
if(cljs.core.truth_(and__10793__auto__)){
return recurse_key;
} else {
return and__10793__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(fulcro.client.primitives.mappable_ident_QMARK_(refs,data__$1))){
var G__39410 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(data__$1) : map_ident.call(null,data__$1)));
data__$1 = G__39410;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_(data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not(fulcro.client.primitives.mappable_ident_QMARK_(refs,ident))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null))){
return ident;
} else {
var map__39381 = cljs.core.group_by(fulcro.util.join_QMARK_,query);
var map__39381__$1 = ((((!((map__39381 == null)))?((((map__39381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39381):map__39381);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39381__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39381__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__39381,map__39381__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__39378_SHARP_){
var G__39383 = p1__39378_SHARP_;
if(cljs.core.seq_QMARK_(p1__39378_SHARP_)){
return cljs.core.first(G__39383);
} else {
return G__39383;
}
});})(map__39381,map__39381__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var vec__39384 = fulcro.util.join_entry(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39384,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39384,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident,key);
var G__39411 = cljs.core.next(joins__$1);
var G__39412 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,(fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel,v,refs,map_ident,idents_seen,union_expr,recurse_key) : fulcro.client.primitives.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key)));
joins__$1 = G__39411;
ret = G__39412;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(ident,props__$1),ret], 0));
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var query__$1 = (function (){var G__39387 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return fulcro.client.primitives.reduce_union_recursion_depth(G__39387,recurse_key);
} else {
return G__39387;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__39388 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return fulcro.client.primitives.reduce_union_recursion_depth(G__39388,recurse_key);
} else {
return G__39388;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__39389 = query__$1;
if(cljs.core.map_QMARK_(query__$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__39389,cljs.core.first(ident));
} else {
return G__39389;
}
})();
return (fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null) : fulcro.client.primitives.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = cljs.core.map_QMARK_(query);
if(and__10793__auto__){
return union_recur_QMARK_;
} else {
return and__10793__auto__;
}
})())){
var G__39390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(recur_ident));
var G__39391 = data__$1;
var G__39392 = refs;
var G__39393 = map_ident;
var G__39394 = idents_seen;
var G__39395 = union_expr;
var G__39396 = recurse_key;
return (fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(G__39390,G__39391,G__39392,G__39393,G__39394,G__39395,G__39396) : fulcro.client.primitives.denormalize_STAR_.call(null,G__39390,G__39391,G__39392,G__39393,G__39394,G__39395,G__39396));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data__$1;
} else {
var map__39397 = cljs.core.group_by(((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__39379_SHARP_){
var or__10805__auto__ = fulcro.util.join_QMARK_(p1__39379_SHARP_);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return (fulcro.util.ident_QMARK_(p1__39379_SHARP_)) || ((cljs.core.seq_QMARK_(p1__39379_SHARP_)) && (fulcro.util.ident_QMARK_(cljs.core.first(p1__39379_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__39397__$1 = ((((!((map__39397 == null)))?((((map__39397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39397):map__39397);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39397__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39397__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__39397,map__39397__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__39380_SHARP_){
var G__39399 = p1__39380_SHARP_;
if(cljs.core.seq_QMARK_(p1__39380_SHARP_)){
return cljs.core.first(G__39399);
} else {
return G__39399;
}
});})(map__39397,map__39397__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__39403 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__39403);
} else {
return G__39403;
}
})();
var join__$2 = (function (){var G__39404 = join__$1;
if(fulcro.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__39404],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]);
} else {
return G__39404;
}
})();
var vec__39400 = fulcro.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39400,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39400,(1),null);
var recurse_QMARK_ = fulcro.util.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((fulcro.util.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__39405 = key;
if(fulcro.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__39405);
} else {
return G__39405;
}
})();
var v__$1 = (cljs.core.truth_(fulcro.client.primitives.mappable_ident_QMARK_(refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1)));
if(cljs.core.truth_(fulcro.client.primitives.mappable_ident_QMARK_(refs,next))){
var G__39413 = next;
v__$1 = G__39413;
continue;
} else {
return (map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1));
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:cljs.core.cst$kw$none);
var union_entry = ((fulcro.util.union_QMARK_(join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:fulcro.client.primitives.reduce_query_depth(query,key__$1)):(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.client.primitives.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__10793__auto__)){
return fulcro.util.union_QMARK_(join__$2);
} else {
return and__10793__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(v__$1)):(((fulcro.util.ident_QMARK_(key__$1)) && (fulcro.util.union_QMARK_(join__$2)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$none,limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__10793__auto__ = fulcro.client.primitives.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__10793__auto__)){
return recurse_QMARK_;
} else {
return and__10793__auto__;
}
})())?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
var G__39414 = cljs.core.next(joins__$1);
var G__39415 = ret;
joins__$1 = G__39414;
ret = G__39415;
continue;
} else {
if(graph_loop_QMARK_){
var G__39416 = cljs.core.next(joins__$1);
var G__39417 = ret;
joins__$1 = G__39416;
ret = G__39417;
continue;
} else {
if((v__$1 == null)){
var G__39418 = cljs.core.next(joins__$1);
var G__39419 = ret;
joins__$1 = G__39418;
ret = G__39419;
continue;
} else {
var G__39420 = cljs.core.next(joins__$1);
var G__39421 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,(fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1) : fulcro.client.primitives.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1)));
joins__$1 = G__39420;
ret = G__39421;
continue;

}
}
}
} else {
var temp__5455__auto__ = cljs.core.some(((function (joins__$1,ret,map__39397,map__39397__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__39406){
var vec__39407 = p__39406;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,k], null));
} else {
return null;
}
});})(joins__$1,ret,map__39397,map__39397__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(idents_seen,cljs.core.cst$kw$last_DASH_ident));
if(cljs.core.truth_(temp__5455__auto__)){
var looped_key = temp__5455__auto__;
return looped_key;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(data__$1,props__$1),ret], 0));
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
fulcro.client.primitives.db__GT_tree = (function fulcro$client$primitives$db__GT_tree(var_args){
var G__39423 = arguments.length;
switch (G__39423) {
case 3:
return fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return fulcro.client.primitives.denormalize_STAR_(query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return fulcro.client.primitives.denormalize_STAR_(query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

fulcro.client.primitives.db__GT_tree.cljs$lang$maxFixedArity = 4;

/**
 * Get any component from the indexer that matches the ref.
 */
fulcro.client.primitives.ref__GT_any = (function fulcro$client$primitives$ref__GT_any(x,ref){
var indexer = ((fulcro.client.primitives.reconciler_QMARK_(x))?fulcro.client.primitives.get_indexer(x):x);
return cljs.core.first(fulcro.client.impl.protocols.key__GT_components(indexer,ref));
});
/**
 * Replaces all om-tempids in app-state with the ids returned by the server.
 */
fulcro.client.primitives.resolve_tempids = (function fulcro$client$primitives$resolve_tempids(state,tid__GT_rid){
if(cljs.core.empty_QMARK_(tid__GT_rid)){
return state;
} else {
return clojure.walk.prewalk((function (p1__39425_SHARP_){
if(cljs.core.truth_((fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__39425_SHARP_) : fulcro.client.primitives.tempid_QMARK_.call(null,p1__39425_SHARP_)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tid__GT_rid,p1__39425_SHARP_,p1__39425_SHARP_);
} else {
return p1__39425_SHARP_;
}
}),state);
}
});
/**
 * Rewrite any pending requests in the request queue to account for the fact that a response might have
 *   changed ids that are expressed in the mutations of that queue. tempid-map MUST be a map from om
 *   tempid to real ids, not idents.
 */
fulcro.client.primitives.rewrite_tempids_in_request_queue = (function fulcro$client$primitives$rewrite_tempids_in_request_queue(queue,tempid_map){
var entry = cljs.core.async.poll_BANG_(queue);
var entries = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(entry)){
var G__39430 = cljs.core.async.poll_BANG_(queue);
var G__39431 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entries,fulcro.client.primitives.resolve_tempids(entry,tempid_map));
entry = G__39430;
entries = G__39431;
continue;
} else {
if(cljs.core.seq(entries)){
var seq__39426 = cljs.core.seq(entries);
var chunk__39427 = null;
var count__39428 = (0);
var i__39429 = (0);
while(true){
if((i__39429 < count__39428)){
var e = chunk__39427.cljs$core$IIndexed$_nth$arity$2(null,i__39429);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to put request back on network queue during tempid rewrite!"], 0));
}

var G__39432 = seq__39426;
var G__39433 = chunk__39427;
var G__39434 = count__39428;
var G__39435 = (i__39429 + (1));
seq__39426 = G__39432;
chunk__39427 = G__39433;
count__39428 = G__39434;
i__39429 = G__39435;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39426);
if(temp__5457__auto__){
var seq__39426__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39426__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__39426__$1);
var G__39436 = cljs.core.chunk_rest(seq__39426__$1);
var G__39437 = c__11736__auto__;
var G__39438 = cljs.core.count(c__11736__auto__);
var G__39439 = (0);
seq__39426 = G__39436;
chunk__39427 = G__39437;
count__39428 = G__39438;
i__39429 = G__39439;
continue;
} else {
var e = cljs.core.first(seq__39426__$1);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to put request back on network queue during tempid rewrite!"], 0));
}

var G__39440 = cljs.core.next(seq__39426__$1);
var G__39441 = null;
var G__39442 = (0);
var G__39443 = (0);
seq__39426 = G__39440;
chunk__39427 = G__39441;
count__39428 = G__39442;
i__39429 = G__39443;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
break;
}
});
/**
 * Removes all fulcro/load and tx/fallback mutations from the query
 */
fulcro.client.primitives.remove_loads_and_fallbacks = (function fulcro$client$primitives$remove_loads_and_fallbacks(query){
var symbols_to_filter = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$fulcro_SLASH_load,null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_load,null,cljs.core.cst$sym$tx_SLASH_fallback,null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_fallback,null], null), null);
var ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(query) : fulcro.client.primitives.query__GT_ast.call(null,query));
var children = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_filter,ast,children){
return (function (child){
return !(cljs.core.contains_QMARK_(symbols_to_filter,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(child)));
});})(symbols_to_filter,ast,children))
,children);
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,new_children);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(new_ast) : fulcro.client.primitives.ast__GT_query.call(null,new_ast));
});
fulcro.client.primitives.fallback_tx = (function fulcro$client$primitives$fallback_tx(tx,resp){

var symbols_to_find = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$tx_SLASH_fallback,null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_fallback,null], null), null);
var ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(tx) : fulcro.client.primitives.query__GT_ast.call(null,tx));
var children = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (ast__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(ast__$1,cljs.core.cst$kw$params,cljs.core.assoc,cljs.core.cst$kw$execute,true,cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp], 0));
});})(symbols_to_find,ast,children))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (child){
return cljs.core.contains_QMARK_(symbols_to_find,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(child));
});})(symbols_to_find,ast,children))
,children));
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,new_children);
var fallback_tx = (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(new_ast) : fulcro.client.primitives.ast__GT_query.call(null,new_ast));
if(cljs.core.truth_(cljs.core.not_empty(fallback_tx))){
return fallback_tx;
} else {
return null;
}
});
/**
 * Check the given keyword to see if it is in the :ui namespace.
 */
fulcro.client.primitives.is_ui_query_fragment_QMARK_ = (function fulcro$client$primitives$is_ui_query_fragment_QMARK_(kw){
var kw__$1 = ((cljs.core.map_QMARK_(kw))?cljs.core.first(cljs.core.keys(kw)):kw);
if((kw__$1 instanceof cljs.core.Keyword)){
var G__39444 = kw__$1;
var G__39444__$1 = (((G__39444 == null))?null:cljs.core.namespace(G__39444));
if((G__39444__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^ui(?:\.|$)/,G__39444__$1);
}
} else {
return null;
}
});
/**
 * Returns a new query with fragments that are in the `ui` namespace removed.
 */
fulcro.client.primitives.strip_ui = (function fulcro$client$primitives$strip_ui(query){
var ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(query) : fulcro.client.primitives.query__GT_ast.call(null,query));
var drop_ui_children = ((function (ast){
return (function fulcro$client$primitives$strip_ui_$_drop_ui_children(ast_node){
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ast){
return (function (acc,n){
if(cljs.core.truth_(fulcro.client.primitives.is_ui_query_fragment_QMARK_(cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(n)))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,fulcro$client$primitives$strip_ui_$_drop_ui_children(n));
}
});})(ast))
,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast_node));
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_node,cljs.core.cst$kw$children,children);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast_node,cljs.core.cst$kw$children);
}
});})(ast))
;
var G__39445 = drop_ui_children(ast);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(G__39445) : fulcro.client.primitives.ast__GT_query.call(null,G__39445));
});
fulcro.client.primitives.nf = cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found;
/**
 * Returns data with meta-data marking it as a leaf in the result.
 */
fulcro.client.primitives.as_leaf = (function fulcro$client$primitives$as_leaf(data){
if(cljs.core.coll_QMARK_(data)){
return cljs.core.with_meta(data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro_SLASH_leaf,true], null));
} else {
return data;
}
});
/**
 * Returns true iff the given data is marked as a leaf in the result (according to the query). Requires pre-marking.
 */
fulcro.client.primitives.leaf_QMARK_ = (function fulcro$client$primitives$leaf_QMARK_(data){
return (!(cljs.core.coll_QMARK_(data))) || (cljs.core.empty_QMARK_(data)) || ((cljs.core.coll_QMARK_(data)) && (cljs.core.boolean$(cljs.core.cst$kw$fulcro_SLASH_leaf.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))));
});
/**
 * Turn a union query into a query that attempts to encompass all possible things that might be queried
 */
fulcro.client.primitives.union__GT_query = (function fulcro$client$primitives$union__GT_query(union_query){
return cljs.core.vec(cljs.core.set(cljs.core.flatten(cljs.core.vals(union_query))));
});
/**
 * Recursively walk the query and response marking anything that was *asked for* in the query but is *not* in the response as missing.
 *   The merge process (which happens later in the plumbing) looks for these markers as indicators to remove any existing
 *   data in the database (which has provably disappeared).
 * 
 *   The naive approach to data merging (even recursive) would fail to remove such data.
 * 
 *   Returns the result with missing markers in place (which are then used/removed in a later stage).
 */
fulcro.client.primitives.mark_missing = (function fulcro$client$primitives$mark_missing(result,query){
var missing_entity = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$not_DASH_found], null)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_entity){
return (function (result__$1,element){
var element__$1 = ((cljs.core.list_QMARK_(element))?cljs.core.first(element):element
);
var result_key = (((element__$1 instanceof cljs.core.Keyword))?element__$1:(cljs.core.truth_(fulcro.util.join_QMARK_(element__$1))?fulcro.util.join_key(element__$1):null
));
var result_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,result_key);
if(cljs.core.truth_(fulcro.client.primitives.is_ui_query_fragment_QMARK_(result_key))){
return result__$1;
} else {
if(((element__$1 instanceof cljs.core.Keyword)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found);
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__10793__auto__)){
return (typeof fulcro.util.join_value(element__$1) === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,fulcro.util.join_value(element__$1)));
} else {
return and__10793__auto__;
}
})())){
var k = fulcro.util.join_key(element__$1);
var result_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,k);
if((result_SINGLEQUOTE_ == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found);
} else {
if(cljs.core.vector_QMARK_(result_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (k,result_SINGLEQUOTE_,element__$1,result_key,result_value,missing_entity){
return (function (item){
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(item,query) : fulcro.client.primitives.mark_missing.call(null,item,query));
});})(k,result_SINGLEQUOTE_,element__$1,result_key,result_value,missing_entity))
,result_SINGLEQUOTE_));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,(fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(result_SINGLEQUOTE_,query) : fulcro.client.primitives.mark_missing.call(null,result_SINGLEQUOTE_,query)));

}
}
} else {
if((fulcro.util.ident_QMARK_(element__$1)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,missing_entity);
} else {
if(fulcro.util.union_QMARK_(element__$1)){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found);
var to_one_QMARK_ = cljs.core.map_QMARK_(v);
var to_many_QMARK_ = cljs.core.vector_QMARK_(v);
var wide_query = fulcro.client.primitives.union__GT_query(fulcro.util.join_value(element__$1));
if(to_one_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(v,wide_query) : fulcro.client.primitives.mark_missing.call(null,v,wide_query)));
} else {
if(to_many_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,to_one_QMARK_,to_many_QMARK_,wide_query,element__$1,result_key,result_value,missing_entity){
return (function (i){
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(i,wide_query) : fulcro.client.primitives.mark_missing.call(null,i,wide_query));
});})(v,to_one_QMARK_,to_many_QMARK_,wide_query,element__$1,result_key,result_value,missing_entity))
,v));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found,v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found);
} else {
return result__$1;

}
}
}
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__10793__auto__)){
return (fulcro.util.ident_QMARK_(fulcro.util.join_key(element__$1))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)) == null));
} else {
return and__10793__auto__;
}
})())){
var mock_missing_object = (function (){var G__39446 = cljs.core.PersistentArrayMap.EMPTY;
var G__39447 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__39446,G__39447) : fulcro.client.primitives.mark_missing.call(null,G__39446,G__39447));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mock_missing_object,missing_entity], 0)));
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found));
} else {
return and__10793__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found);
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.vector_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)));
} else {
return and__10793__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (element__$1,result_key,result_value,missing_entity){
return (function (item){
var G__39448 = item;
var G__39449 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__39448,G__39449) : fulcro.client.primitives.mark_missing.call(null,G__39448,G__39449));
});})(element__$1,result_key,result_value,missing_entity))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1))));
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.map_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)));
} else {
return and__10793__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),(function (){var G__39450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1));
var G__39451 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__39450,G__39451) : fulcro.client.primitives.mark_missing.call(null,G__39450,G__39451));
})());
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__10793__auto__)){
return (cljs.core.vector_QMARK_(fulcro.util.join_value(element__$1))) && (!((cljs.core.map_QMARK_(result_value)) || (cljs.core.vector_QMARK_(result_value))));
} else {
return and__10793__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(function (){var G__39452 = cljs.core.PersistentArrayMap.EMPTY;
var G__39453 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__39452,G__39453) : fulcro.client.primitives.mark_missing.call(null,G__39452,G__39453));
})());
} else {
if(cljs.core.truth_(result_key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,fulcro.client.primitives.as_leaf);
} else {
return result__$1;

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
});})(missing_entity))
,result,query);
});
/**
 * Remove not-found keys from m (non-recursive)
 */
fulcro.client.primitives.sweep_one = (function fulcro$client$primitives$sweep_one(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__39454){
var vec__39455 = p__39454;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39455,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found,k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found,v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_tempids,k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,k))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep_one,m),cljs.core.meta(m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
fulcro.client.primitives.sweep = (function fulcro$client$primitives$sweep(m){
if(cljs.core.truth_(fulcro.client.primitives.leaf_QMARK_(m))){
return fulcro.client.primitives.sweep_one(m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__39458){
var vec__39459 = p__39458;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39459,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39459,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found,k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found,v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_tempids,k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,k))){
return acc;
} else {
if((fulcro.util.ident_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found,cljs.core.second(v)))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(fulcro.client.primitives.sweep.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.sweep.cljs$core$IFn$_invoke$arity$1(v) : fulcro.client.primitives.sweep.call(null,v)));

}
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.sweep,m),cljs.core.meta(m));
} else {
return m;

}
}
}
});
/**
 * Do a recursive merge of source into target, but remove any target data that is marked as missing in the response. The
 *   missing marker is generated in the source when something has been asked for in the query, but had no value in the
 *   response. This allows us to correctly remove 'empty' data from the database without accidentally removing something
 *   that may still exist on the server (in truth we don't know its status, since it wasn't asked for, but we leave
 *   it as our 'best guess')
 */
fulcro.client.primitives.sweep_merge = (function fulcro$client$primitives$sweep_merge(target,source){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__39462){
var vec__39463 = p__39462;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39463,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39463,(1),null);
var existing_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,key);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$fulcro$client$primitives_SLASH_tempids)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$tempids)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found))){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_value,cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,key);
} else {
if((fulcro.util.ident_QMARK_(new_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_not_DASH_found,cljs.core.second(new_value)))){
return acc;
} else {
if(cljs.core.truth_(fulcro.client.primitives.leaf_QMARK_(new_value))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,fulcro.client.primitives.sweep_one(new_value));
} else {
if((cljs.core.map_QMARK_(existing_value)) && (cljs.core.map_QMARK_(new_value))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,key,fulcro.client.primitives.sweep_merge,new_value);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,fulcro.client.primitives.sweep(new_value));

}
}
}
}
}
}),target,source);
});
/**
 * Handle merging incoming data, but be sure to sweep it of values that are marked missing. Also triggers the given mutation-merge
 *   if available.
 */
fulcro.client.primitives.merge_handler = (function fulcro$client$primitives$merge_handler(mutation_merge,target,source){
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__39466){
var vec__39467 = p__39466;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39467,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39467,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = fulcro.client.primitives.sweep_merge(target,source_to_merge);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source_to_merge,merged_state){
return (function (acc,p__39470){
var vec__39471 = p__39470;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39471,(1),null);
if(cljs.core.truth_((function (){var and__10793__auto__ = mutation_merge;
if(cljs.core.truth_(and__10793__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__10793__auto__;
}
})())){
var temp__5455__auto__ = (function (){var G__39474 = acc;
var G__39475 = k;
var G__39476 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.cst$kw$tempids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fulcro$client$primitives_SLASH_tempids], 0));
return (mutation_merge.cljs$core$IFn$_invoke$arity$3 ? mutation_merge.cljs$core$IFn$_invoke$arity$3(G__39474,G__39475,G__39476) : mutation_merge.call(null,G__39474,G__39475,G__39476));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var updated_state = temp__5455__auto__;
return updated_state;
} else {
fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Return value handler for",k,"returned nil. Ignored."], 0));

return acc;
}
} else {
return acc;
}
});})(source_to_merge,merged_state))
,merged_state,source);
});
/**
 * Merge all of the mutations that were joined with a query
 */
fulcro.client.primitives.merge_mutation_joins = (function fulcro$client$primitives$merge_mutation_joins(state,query,data_tree){
if(cljs.core.map_QMARK_(data_tree)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (updated_state,query_element){
var k = (function (){var and__10793__auto__ = fulcro.util.mutation_join_QMARK_(query_element);
if(cljs.core.truth_(and__10793__auto__)){
return fulcro.util.join_key(query_element);
} else {
return and__10793__auto__;
}
})();
var subtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,k);
if(cljs.core.truth_((function (){var and__10793__auto__ = k;
if(cljs.core.truth_(and__10793__auto__)){
return subtree;
} else {
return and__10793__auto__;
}
})())){
var subquery = fulcro.util.join_value(query_element);
var target = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(subquery));
var idnt = cljs.core.cst$kw$fulcro$client$primitives_SLASH_temporary_DASH_key;
var norm_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subquery])], null);
var norm_tree = cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subtree]);
var norm_tree_marked = fulcro.client.primitives.mark_missing(norm_tree,norm_query);
var db = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3(norm_query,norm_tree_marked,true);
var G__39477 = fulcro.client.primitives.sweep_merge(updated_state,db);
var G__39477__$1 = (cljs.core.truth_(target)?fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3(G__39477,idnt,target):G__39477);
if(cljs.core.not(target)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39477__$1,db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idnt], 0));
} else {
return G__39477__$1;
}
} else {
return updated_state;
}
}),state,query);
} else {
return state;
}
});
fulcro.client.primitives.merge_idents = (function fulcro$client$primitives$merge_idents(tree,config,refs,query){
var map__39480 = config;
var map__39480__$1 = ((((!((map__39480 == null)))?((((map__39480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39480):map__39480);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39480__$1,cljs.core.cst$kw$merge_DASH_ident);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39480__$1,cljs.core.cst$kw$indexer);
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__39480,map__39480__$1,merge_ident,indexer){
return (function (p1__39478_SHARP_){
var G__39482 = p1__39478_SHARP_;
if(cljs.core.seq_QMARK_(p1__39478_SHARP_)){
return cljs.core.first(G__39482);
} else {
return G__39482;
}
});})(map__39480,map__39480__$1,merge_ident,indexer))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__39480,map__39480__$1,merge_ident,indexer){
return (function (p1__39479_SHARP_){
var and__10793__auto__ = fulcro.util.join_QMARK_(p1__39479_SHARP_);
if(cljs.core.truth_(and__10793__auto__)){
return fulcro.util.ident_QMARK_(fulcro.util.join_key(p1__39479_SHARP_));
} else {
return and__10793__auto__;
}
});})(map__39480,map__39480__$1,merge_ident,indexer))
)),query);
var step = ((function (map__39480,map__39480__$1,merge_ident,indexer,ident_joins){
return (function fulcro$client$primitives$merge_idents_$_step(tree_SINGLEQUOTE_,p__39490){
var vec__39491 = p__39490;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39491,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39491,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__10805__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident_joins,ident);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return fulcro.client.primitives.ref__GT_any(indexer,ident);
}
})();
var props_SINGLEQUOTE_ = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$2(c_or_q,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
var G__39495 = (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_));
var G__39496 = refs__$1;
var fexpr__39494 = cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__39494.cljs$core$IFn$_invoke$arity$2 ? fexpr__39494.cljs$core$IFn$_invoke$arity$2(G__39495,G__39496) : fexpr__39494.call(null,G__39495,G__39496));
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props));
}
});})(map__39480,map__39480__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
fulcro.client.primitives.merge_novelty_BANG_ = (function fulcro$client$primitives$merge_novelty_BANG_(reconciler,state,res,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__39497 = fulcro.client.primitives.sift_idents(res);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39497,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39497,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))?fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){var or__10805__auto__ = query;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
var G__39501 = fulcro.client.primitives.merge_idents(fulcro.client.primitives.merge_mutation_joins(state,query,res_SINGLEQUOTE___$1),config,idts,query);
var G__39502 = res_SINGLEQUOTE___$1;
var fexpr__39500 = cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__39500.cljs$core$IFn$_invoke$arity$2 ? fexpr__39500.cljs$core$IFn$_invoke$arity$2(G__39501,G__39502) : fexpr__39500.call(null,G__39501,G__39502));
});
fulcro.client.primitives.get_tempids = (function fulcro$client$primitives$get_tempids(m){
var or__10805__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$tempids);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$fulcro$client$primitives_SLASH_tempids);
}
});
/**
 * Internal implementation of merge. Given a reconciler, state, result, and query returns a map of the:
 * 
 *   `:keys` to refresh
 *   `:next` state
 *   and `::tempids` that need to be migrated
 */
fulcro.client.primitives.merge_STAR_ = (function fulcro$client$primitives$merge_STAR_(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),cljs.core.cst$kw$next,fulcro.client.primitives.merge_novelty_BANG_(reconciler,state,res,query),cljs.core.cst$kw$fulcro$client$primitives_SLASH_tempids,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge an arbitrary data-tree that conforms to the shape of the given query.
 * 
 *   query - A query, derived from defui components, that can be used to normalized a tree of data.
 *   data-tree - A tree of data that matches the nested shape of query
 *   remote - No longer used. May be passed, but is ignored.
 */
fulcro.client.primitives.merge_BANG_ = (function fulcro$client$primitives$merge_BANG_(var_args){
var G__39504 = arguments.length;
switch (G__39504) {
case 2:
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,data_tree){
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,data_tree,null);
});

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,data_tree,query){
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,data_tree,query,null);
});

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,data_tree,query,remote){
var tx = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$mutations_SLASH_merge_BANG_),(function (){var x__11759__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_tree,data_tree,cljs.core.cst$kw$query,query,cljs.core.cst$kw$remote,remote], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return (fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,tx) : fulcro.client.primitives.transact_BANG_.call(null,reconciler,tx));
});

fulcro.client.primitives.merge_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Build an index from property to class using the (annotated) query.
 */
fulcro.client.primitives.build_prop__GT_class_index_BANG_ = (function fulcro$client$primitives$build_prop__GT_class_index_BANG_(prop__GT_classes,query){
return clojure.walk.prewalk((function fulcro$client$primitives$build_prop__GT_class_index_BANG__$_index_walk_helper(ele){
var temp__5457__auto___39511 = (function (){var G__39506 = ele;
var G__39506__$1 = (((G__39506 == null))?null:cljs.core.meta(G__39506));
if((G__39506__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(G__39506__$1);
}
})();
if(cljs.core.truth_(temp__5457__auto___39511)){
var component_39512 = temp__5457__auto___39511;
var ks_39513 = fulcro.client.primitives.gather_keys(ele);
var seq__39507_39514 = cljs.core.seq(ks_39513);
var chunk__39508_39515 = null;
var count__39509_39516 = (0);
var i__39510_39517 = (0);
while(true){
if((i__39510_39517 < count__39509_39516)){
var k_39518 = chunk__39508_39515.cljs$core$IIndexed$_nth$arity$2(null,i__39510_39517);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prop__GT_classes,cljs.core.update,k_39518,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_39512], 0));

var G__39519 = seq__39507_39514;
var G__39520 = chunk__39508_39515;
var G__39521 = count__39509_39516;
var G__39522 = (i__39510_39517 + (1));
seq__39507_39514 = G__39519;
chunk__39508_39515 = G__39520;
count__39509_39516 = G__39521;
i__39510_39517 = G__39522;
continue;
} else {
var temp__5457__auto___39523__$1 = cljs.core.seq(seq__39507_39514);
if(temp__5457__auto___39523__$1){
var seq__39507_39524__$1 = temp__5457__auto___39523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39507_39524__$1)){
var c__11736__auto___39525 = cljs.core.chunk_first(seq__39507_39524__$1);
var G__39526 = cljs.core.chunk_rest(seq__39507_39524__$1);
var G__39527 = c__11736__auto___39525;
var G__39528 = cljs.core.count(c__11736__auto___39525);
var G__39529 = (0);
seq__39507_39514 = G__39526;
chunk__39508_39515 = G__39527;
count__39509_39516 = G__39528;
i__39510_39517 = G__39529;
continue;
} else {
var k_39530 = cljs.core.first(seq__39507_39524__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prop__GT_classes,cljs.core.update,k_39530,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_39512], 0));

var G__39531 = cljs.core.next(seq__39507_39524__$1);
var G__39532 = null;
var G__39533 = (0);
var G__39534 = (0);
seq__39507_39514 = G__39531;
chunk__39508_39515 = G__39532;
count__39509_39516 = G__39533;
i__39510_39517 = G__39534;
continue;
}
} else {
}
}
break;
}
} else {
}

return ele;
}),query);
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
 * @implements {fulcro.client.impl.protocols.IIndexer}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.primitives.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$indexes$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$index_root$arity$2 = (function (this$,root_class){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(this$__$1))){
} else {
throw (new Error(["Assert failed: ","State map is in `this` for indexing root","\n","(:state this)"].join('')));
}

var prop__GT_classes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$state);
var rootq = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(root_class,null),state_map);
fulcro.client.primitives.build_prop__GT_class_index_BANG_(prop__GT_classes,rootq);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prop_DASH__GT_classes,cljs.core.deref(prop__GT_classes)], null));
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function fulcro$client$primitives$component_indexer(indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,fulcro.client.primitives.react_type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$)))?true:false):false))?(function (){var ident = fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c));
if(fulcro.util.ident_QMARK_(ident)){
} else {
fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["malformed Ident. An ident must be a vector of ","two elements (a keyword and an EDN value). Check ","the Ident implementation of component `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),"`."].join('')], 0));
}

if(!((cljs.core.second(ident) == null))){
} else {
fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),"'s ident (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),") has a `nil` second element."," This warning can be safely ignored if that is intended."].join('')], 0));
}

return ident;
})():null);
if(!((ident == null))){
var G__39542 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__39542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__39542;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function fulcro$client$primitives$drop_component_helper(indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,fulcro.client.primitives.react_type(c)], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$)))?true:false):false))?fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c)):null);
if(!((ident == null))){
var G__39544 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__39544,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.disj,c);
} else {
return G__39544;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref(self__.indexes);
if(fulcro.client.primitives.component_QMARK_(k)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([k]);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (indexes__$1,___$1){
return (function (p1__39535_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,p1__39535_SHARP_], null));
});})(indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prop_DASH__GT_classes,k], null)));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11493__auto__,k__11494__auto__){
var self__ = this;
var this__11493__auto____$1 = this;
return this__11493__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11494__auto__,null);
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11495__auto__,k39537,else__11496__auto__){
var self__ = this;
var this__11495__auto____$1 = this;
var G__39545 = k39537;
var G__39545__$1 = (((G__39545 instanceof cljs.core.Keyword))?G__39545.fqn:null);
switch (G__39545__$1) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39537,else__11496__auto__);

}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11507__auto__,writer__11508__auto__,opts__11509__auto__){
var self__ = this;
var this__11507__auto____$1 = this;
var pr_pair__11510__auto__ = ((function (this__11507__auto____$1){
return (function (keyval__11511__auto__){
return cljs.core.pr_sequential_writer(writer__11508__auto__,cljs.core.pr_writer,""," ","",opts__11509__auto__,keyval__11511__auto__);
});})(this__11507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11508__auto__,pr_pair__11510__auto__,"#fulcro.client.primitives.Indexer{",", ","}",opts__11509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null))], null),self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39536){
var self__ = this;
var G__39536__$1 = this;
return (new cljs.core.RecordIter((0),G__39536__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11491__auto__){
var self__ = this;
var this__11491__auto____$1 = this;
return self__.__meta;
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11488__auto__){
var self__ = this;
var this__11488__auto____$1 = this;
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11497__auto__){
var self__ = this;
var this__11497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11489__auto__){
var self__ = this;
var this__11489__auto____$1 = this;
var h__11261__auto__ = self__.__hash;
if(!((h__11261__auto__ == null))){
return h__11261__auto__;
} else {
var h__11261__auto____$1 = (function (){var fexpr__39546 = ((function (h__11261__auto__,this__11489__auto____$1){
return (function (coll__11490__auto__){
return (-535195966 ^ cljs.core.hash_unordered_coll(coll__11490__auto__));
});})(h__11261__auto__,this__11489__auto____$1))
;
return fexpr__39546(this__11489__auto____$1);
})();
self__.__hash = h__11261__auto____$1;

return h__11261__auto____$1;
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39538,other39539){
var self__ = this;
var this39538__$1 = this;
return (!((other39539 == null))) && ((this39538__$1.constructor === other39539.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39538__$1.indexes,other39539.indexes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39538__$1.__extmap,other39539.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11502__auto__,k__11503__auto__){
var self__ = this;
var this__11502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indexes,null], null), null),k__11503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11502__auto____$1),self__.__meta),k__11503__auto__);
} else {
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11503__auto__)),null));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11500__auto__,k__11501__auto__,G__39536){
var self__ = this;
var this__11500__auto____$1 = this;
var pred__39547 = cljs.core.keyword_identical_QMARK_;
var expr__39548 = k__11501__auto__;
if(cljs.core.truth_((function (){var G__39550 = cljs.core.cst$kw$indexes;
var G__39551 = expr__39548;
return (pred__39547.cljs$core$IFn$_invoke$arity$2 ? pred__39547.cljs$core$IFn$_invoke$arity$2(G__39550,G__39551) : pred__39547.call(null,G__39550,G__39551));
})())){
return (new fulcro.client.primitives.Indexer(G__39536,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11501__auto__,G__39536),null));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11505__auto__){
var self__ = this;
var this__11505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null))], null),self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11492__auto__,G__39536){
var self__ = this;
var this__11492__auto____$1 = this;
return (new fulcro.client.primitives.Indexer(self__.indexes,G__39536,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11498__auto__,entry__11499__auto__){
var self__ = this;
var this__11498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11499__auto__)){
return this__11498__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11498__auto____$1,entry__11499__auto__);
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.indexes);
});

fulcro.client.primitives.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$indexes], null);
});

fulcro.client.primitives.Indexer.cljs$lang$type = true;

fulcro.client.primitives.Indexer.cljs$lang$ctorPrSeq = (function (this__11531__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fulcro.client.primitives/Indexer");
});

fulcro.client.primitives.Indexer.cljs$lang$ctorPrWriter = (function (this__11531__auto__,writer__11532__auto__){
return cljs.core._write(writer__11532__auto__,"fulcro.client.primitives/Indexer");
});

fulcro.client.primitives.__GT_Indexer = (function fulcro$client$primitives$__GT_Indexer(indexes){
return (new fulcro.client.primitives.Indexer(indexes,null,null,null));
});

fulcro.client.primitives.map__GT_Indexer = (function fulcro$client$primitives$map__GT_Indexer(G__39540){
return (new fulcro.client.primitives.Indexer(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(G__39540),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39540,cljs.core.cst$kw$indexes)),null));
});

fulcro.client.primitives.to_env = (function fulcro$client$primitives$to_env(x){
var config = ((fulcro.client.primitives.reconciler_QMARK_(x))?cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,cljs.core.cst$kw$shared,cljs.core.cst$kw$parser,cljs.core.cst$kw$pathopt], null));
});
/**
 * Given an environment, a query and a set of remotes return a hash map of remotes
 * mapped to the query specific to that remote.
 */
fulcro.client.primitives.gather_sends = (function fulcro$client$primitives$gather_sends(p__39554,q,remotes,tx_time){
var map__39555 = p__39554;
var map__39555__$1 = ((((!((map__39555 == null)))?((((map__39555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39555):map__39555);
var env = map__39555__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39555__$1,cljs.core.cst$kw$parser);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__39555,map__39555__$1,env,parser){
return (function (p1__39553_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__39553_SHARP_,(function (){var G__39557 = (parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__39553_SHARP_) : parser.call(null,env,q,p1__39553_SHARP_));
if((G__39557 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__39557,cljs.core.assoc,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time);
}
})()],null));
});})(map__39555,map__39555__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__39555,map__39555__$1,env,parser){
return (function (p__39558){
var vec__39559 = p__39558;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39559,(1),null);
return (cljs.core.count(v) > (0));
});})(map__39555,map__39555__$1,env,parser))
)),remotes);
});
fulcro.client.primitives.schedule_sends_BANG_ = (function fulcro$client$primitives$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(fulcro.client.impl.protocols.schedule_sends_BANG_(reconciler))){
var G__39562 = (function (){
return fulcro.client.impl.protocols.send_BANG_(reconciler);
});
var G__39563 = (0);
return setTimeout(G__39562,G__39563);
} else {
return null;
}
});
fulcro.client.primitives.queue_render_BANG_ = (function fulcro$client$primitives$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_(fulcro.client.primitives._STAR_raf_STAR_)){
return (fulcro.client.primitives._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : fulcro.client.primitives._STAR_raf_STAR_.call(null,f));
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
fulcro.client.primitives.schedule_render_BANG_ = (function fulcro$client$primitives$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(fulcro.client.impl.protocols.schedule_render_BANG_(reconciler))){
return fulcro.client.primitives.queue_render_BANG_((function (){
return fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$1(reconciler);
}));
} else {
return null;
}
});
/**
 * Returns true if the component is mounted.
 */
fulcro.client.primitives.mounted_QMARK_ = (function fulcro$client$primitives$mounted_QMARK_(x){
return (fulcro.client.primitives.component_QMARK_(x)) && (cljs.core.boolean$(goog.object.get(x,"fulcro$mounted")));
});
/**
 * Finds props for a given component. Returns ::no-ident if the component has
 *   no ident (which prevents localized update). This eliminates the need for
 *   path data.
 */
fulcro.client.primitives.fulcro_ui__GT_props = (function fulcro$client$primitives$fulcro_ui__GT_props(p__39564,c){
var map__39565 = p__39564;
var map__39565__$1 = ((((!((map__39565 == null)))?((((map__39565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39565):map__39565);
var env = map__39565__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39565__$1,cljs.core.cst$kw$parser);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39565__$1,cljs.core.cst$kw$state);
var ui = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$)))?true:false):false))?(function (){var id = fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c));
var has_tempid_QMARK_ = (function (){var G__39568 = cljs.core.second(id);
return (fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__39568) : fulcro.client.primitives.tempid_QMARK_.call(null,G__39568));
})();
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([id,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(state))])], null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,query) : parser.call(null,env,query)),id);
if(cljs.core.truth_((function (){var and__10793__auto__ = has_tempid_QMARK_;
if(cljs.core.truth_(and__10793__auto__)){
return ((value == null)) || (cljs.core.empty_QMARK_(value));
} else {
return and__10793__auto__;
}
})())){
return cljs.core.cst$kw$fulcro$client$primitives_SLASH_no_DASH_ident;
} else {
return value;
}
})():null);
var or__10805__auto__ = ui;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.cst$kw$fulcro$client$primitives_SLASH_no_DASH_ident;
}
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
fulcro.client.primitives.computed = (function fulcro$client$primitives$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__39569 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__39569,cljs.core.assoc,cljs.core.cst$kw$fulcro$client$primitives_SLASH_computed,computed_map);
} else {
return G__39569;
}
} else {
var G__39570 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39570,cljs.core.cst$kw$fulcro$client$primitives_SLASH_computed,computed_map);
} else {
return G__39570;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
fulcro.client.primitives.get_computed = (function fulcro$client$primitives$get_computed(var_args){
var G__39572 = arguments.length;
switch (G__39572) {
case 1:
return fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__39573 = x;
if(fulcro.client.primitives.component_QMARK_(x)){
return fulcro.client.primitives.props(G__39573);
} else {
return G__39573;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_computed], null),(function (){var G__39574 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__39574],null));
} else {
return G__39574;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
});

fulcro.client.primitives.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component's children.
 */
fulcro.client.primitives.children = (function fulcro$client$primitives$children(component){
var cs = component.props.children;
if((cljs.core.coll_QMARK_(cs)) || (cljs.core.array_QMARK_(cs))){
return cs;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null);
}
});
/**
 * Invoke the lifecycle method on the component to see if it would recommend an update given the next-props or next-props
 *   and next-state
 */
fulcro.client.primitives.should_update_QMARK_ = (function fulcro$client$primitives$should_update_QMARK_(var_args){
var G__39577 = arguments.length;
switch (G__39577) {
case 2:
return fulcro.client.primitives.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return fulcro.client.primitives.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props,null);
});

fulcro.client.primitives.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(fulcro.client.primitives.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"fulcro$value": next_props}),({"fulcro$state": next_state}));
});

fulcro.client.primitives.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * An exception-protected React .forceUpdate
 */
fulcro.client.primitives.force_update = (function fulcro$client$primitives$force_update(var_args){
var G__39580 = arguments.length;
switch (G__39580) {
case 2:
return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$2 = (function (c,cb){
try{return c.forceUpdate(cb);
}catch (e39581){var e = e39581;
return console.log("Component",c,"threw an exception while rendering ",e);
}});

fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1 = (function (c){
return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$2(c,null);
});

fulcro.client.primitives.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Store the given props onto the component so that when the factory is called (via forceUpdate) they can be used as the new
 *   props for the rendering of that component.
 */
fulcro.client.primitives.update_props_BANG_ = (function fulcro$client$primitives$update_props_BANG_(c,next_props){
if(fulcro.client.primitives.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__39583 = c.state;
var G__39584_39587 = G__39583;
var G__39585_39588 = "fulcro$next$value";
var G__39586_39589 = fulcro.client.primitives.om_props(next_props,fulcro.client.primitives.get_current_time(fulcro.client.primitives.get_reconciler(c)));
goog.object.set(G__39584_39587,G__39585_39588,G__39586_39589);

return G__39583;
});
/**
 * Force an update of a component using the given new props, skipping the render from root. This will also update the
 *   recorded reconciler basis time of the props.
 */
fulcro.client.primitives.update_component_BANG_ = (function fulcro$client$primitives$update_component_BANG_(c,next_props){
if(fulcro.client.primitives.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

fulcro.client.primitives.update_props_BANG_(c,next_props);

return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(c);
});
/**
 * Run an optimal render of the given `refresh-queue` (a list of idents and data query keywords). This function attempts
 * to refresh the minimum number of components according to the UI depth and state. If it cannot do targeted updates then
 * it will call `render-root` to render the entire UI. Other optimizations may apply in render-root.
 */
fulcro.client.primitives.optimal_render = (function fulcro$client$primitives$optimal_render(reconciler,refresh_queue,render_root){
var reconciler_state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var app_state_atom = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(config);
var components_to_refresh = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (reconciler_state,config,app_state_atom){
return (function (p1__39590_SHARP_){
return fulcro.client.impl.protocols.key__GT_components(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(config),p1__39590_SHARP_);
});})(reconciler_state,config,app_state_atom))
),((function (reconciler_state,config,app_state_atom){
return (function (p1__39591_SHARP_,p2__39592_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__39591_SHARP_,p2__39592_SHARP_);
});})(reconciler_state,config,app_state_atom))
,cljs.core.PersistentHashSet.EMPTY,refresh_queue);
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.to_env(config),cljs.core.cst$kw$reconciler,reconciler);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reconciler_state));
var sort_by_depth = cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(config);
var seq__39593 = cljs.core.seq((sort_by_depth.cljs$core$IFn$_invoke$arity$1 ? sort_by_depth.cljs$core$IFn$_invoke$arity$1(components_to_refresh) : sort_by_depth.call(null,components_to_refresh)));
var chunk__39594 = null;
var count__39595 = (0);
var i__39596 = (0);
while(true){
if((i__39596 < count__39595)){
var c = chunk__39594.cljs$core$IIndexed$_nth$arity$2(null,i__39596);
var current_time_39597 = fulcro.client.primitives.get_current_time(reconciler);
var component_time_39598 = fulcro.client.primitives.t(c);
var props_change_QMARK__39599 = (current_time_39597 > component_time_39598);
if(fulcro.client.primitives.mounted_QMARK_(c)){
var computed_39600 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(c));
var next_raw_props_39601 = ((fulcro.client.primitives.has_query_QMARK_(c))?fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(app_state_atom)),fulcro.client.primitives.fulcro_ui__GT_props(env,c),current_time_39597):fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.fulcro_ui__GT_props(env,c),current_time_39597));
var force_root_QMARK__39602 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_no_DASH_ident,next_raw_props_39601);
var next_props_39603 = ((force_root_QMARK__39602)?null:fulcro.client.primitives.computed(next_raw_props_39601,computed_39600));
if(force_root_QMARK__39602){
fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(c);

(render_root.cljs$core$IFn$_invoke$arity$0 ? render_root.cljs$core$IFn$_invoke$arity$0() : render_root.call(null));
} else {
if((typeof c.componentWillReceiveProps !== 'undefined') && (fulcro.client.primitives.has_query_QMARK_(root)) && (props_change_QMARK__39599)){
var next_props_39604__$1 = (((next_props_39603 == null))?(function (){var temp__5457__auto__ = fulcro.client.primitives.props(c);
if(cljs.core.truth_(temp__5457__auto__)){
var props = temp__5457__auto__;
return props;
} else {
return null;
}
})():next_props_39603);
c.componentWillReceiveProps(({"fulcro$value": fulcro.client.primitives.om_props(next_props_39604__$1,fulcro.client.primitives.get_current_time(reconciler))}));
} else {
}

if(cljs.core.truth_(fulcro.client.primitives.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_39603,fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_39603 == null))){
fulcro.client.primitives.update_component_BANG_(c,next_props_39603);
} else {
fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(c);
}
} else {
}
}
} else {
}

var G__39605 = seq__39593;
var G__39606 = chunk__39594;
var G__39607 = count__39595;
var G__39608 = (i__39596 + (1));
seq__39593 = G__39605;
chunk__39594 = G__39606;
count__39595 = G__39607;
i__39596 = G__39608;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39593);
if(temp__5457__auto__){
var seq__39593__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39593__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__39593__$1);
var G__39609 = cljs.core.chunk_rest(seq__39593__$1);
var G__39610 = c__11736__auto__;
var G__39611 = cljs.core.count(c__11736__auto__);
var G__39612 = (0);
seq__39593 = G__39609;
chunk__39594 = G__39610;
count__39595 = G__39611;
i__39596 = G__39612;
continue;
} else {
var c = cljs.core.first(seq__39593__$1);
var current_time_39613 = fulcro.client.primitives.get_current_time(reconciler);
var component_time_39614 = fulcro.client.primitives.t(c);
var props_change_QMARK__39615 = (current_time_39613 > component_time_39614);
if(fulcro.client.primitives.mounted_QMARK_(c)){
var computed_39616 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(c));
var next_raw_props_39617 = ((fulcro.client.primitives.has_query_QMARK_(c))?fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(app_state_atom)),fulcro.client.primitives.fulcro_ui__GT_props(env,c),current_time_39613):fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.fulcro_ui__GT_props(env,c),current_time_39613));
var force_root_QMARK__39618 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_no_DASH_ident,next_raw_props_39617);
var next_props_39619 = ((force_root_QMARK__39618)?null:fulcro.client.primitives.computed(next_raw_props_39617,computed_39616));
if(force_root_QMARK__39618){
fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(c);

(render_root.cljs$core$IFn$_invoke$arity$0 ? render_root.cljs$core$IFn$_invoke$arity$0() : render_root.call(null));
} else {
if((typeof c.componentWillReceiveProps !== 'undefined') && (fulcro.client.primitives.has_query_QMARK_(root)) && (props_change_QMARK__39615)){
var next_props_39620__$1 = (((next_props_39619 == null))?(function (){var temp__5457__auto____$1 = fulcro.client.primitives.props(c);
if(cljs.core.truth_(temp__5457__auto____$1)){
var props = temp__5457__auto____$1;
return props;
} else {
return null;
}
})():next_props_39619);
c.componentWillReceiveProps(({"fulcro$value": fulcro.client.primitives.om_props(next_props_39620__$1,fulcro.client.primitives.get_current_time(reconciler))}));
} else {
}

if(cljs.core.truth_(fulcro.client.primitives.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_39619,fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_39619 == null))){
fulcro.client.primitives.update_component_BANG_(c,next_props_39619);
} else {
fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(c);
}
} else {
}
}
} else {
}

var G__39621 = cljs.core.next(seq__39593__$1);
var G__39622 = null;
var G__39623 = (0);
var G__39624 = (0);
seq__39593 = G__39621;
chunk__39594 = G__39622;
count__39595 = G__39623;
i__39596 = G__39624;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {fulcro.client.impl.protocols.IReconciler}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.primitives.Reconciler = (function (config,state,history,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.history = history;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.client.primitives.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11493__auto__,k__11494__auto__){
var self__ = this;
var this__11493__auto____$1 = this;
return this__11493__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11494__auto__,null);
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11495__auto__,k39627,else__11496__auto__){
var self__ = this;
var this__11495__auto____$1 = this;
var G__39631 = k39627;
var G__39631__$1 = (((G__39631 instanceof cljs.core.Keyword))?G__39631.fqn:null);
switch (G__39631__$1) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
case "history":
return self__.history;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39627,else__11496__auto__);

}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
return this$__$1.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3(null,ks,null);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3 = (function (_,ks,remote){
var self__ = this;
var ___$1 = this;
if(!((remote == null))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote_DASH_queue,remote], null),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue], null),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued_DASH_sends], null),cljs.core.cst$kw$merge_DASH_sends.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sends], 0));
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$get_history$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.history;
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = cljs.core.cst$kw$queued_DASH_sends.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function fulcro$client$primitives$clear_queue_fn(state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$queued_DASH_sends,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$sends_DASH_queued,false);
});})(sends,this$__$1))
);

var G__39633 = sends;
var G__39634 = ((function (G__39633,sends,this$__$1){
return (function() {
var fulcro$client$primitives$send_cb = null;
var fulcro$client$primitives$send_cb__1 = (function (resp){
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,null);
});
var fulcro$client$primitives$send_cb__2 = (function (resp,query){
return fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,query);
});
var fulcro$client$primitives$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
this$__$1.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3(null,cljs.core.keys(resp),remote);
}

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,resp,query,remote);

return this$__$1.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2(null,remote);
});
fulcro$client$primitives$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return fulcro$client$primitives$send_cb__1.call(this,resp);
case 2:
return fulcro$client$primitives$send_cb__2.call(this,resp,query);
case 3:
return fulcro$client$primitives$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$primitives$send_cb.cljs$core$IFn$_invoke$arity$1 = fulcro$client$primitives$send_cb__1;
fulcro$client$primitives$send_cb.cljs$core$IFn$_invoke$arity$2 = fulcro$client$primitives$send_cb__2;
fulcro$client$primitives$send_cb.cljs$core$IFn$_invoke$arity$3 = fulcro$client$primitives$send_cb__3;
return fulcro$client$primitives$send_cb;
})()
;})(G__39633,sends,this$__$1))
;
var fexpr__39632 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__39632.cljs$core$IFn$_invoke$arity$2 ? fexpr__39632.cljs$core$IFn$_invoke$arity$2(G__39633,G__39634) : fexpr__39632.call(null,G__39633,G__39634));
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2(null,null);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2 = (function (this$,remote){
var self__ = this;
var this$__$1 = this;
var reconciler_state = cljs.core.deref(self__.state);
var components_to_refresh = ((!((remote == null)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote_DASH_queue,remote], null)):cljs.core.cst$kw$queue.cljs$core$IFn$_invoke$arity$1(reconciler_state));
var render_mode = cljs.core.cst$kw$render_DASH_mode.cljs$core$IFn$_invoke$arity$1(self__.config);
var force_root_QMARK_ = (cljs.core.empty_QMARK_(components_to_refresh)) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyframe,null,cljs.core.cst$kw$brutal,null], null), null),render_mode)) || (fulcro.client.primitives._STAR_blindly_render_STAR_);
var blind_refresh_QMARK_ = (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$brutal,null], null), null),render_mode)) || (fulcro.client.primitives._STAR_blindly_render_STAR_);
var rendered_root_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var render_root = ((function (reconciler_state,components_to_refresh,render_mode,force_root_QMARK_,blind_refresh_QMARK_,rendered_root_QMARK_,this$__$1){
return (function (){
var temp__5455__auto__ = cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(reconciler_state);
if(cljs.core.truth_(temp__5455__auto__)){
var do_render = temp__5455__auto__;
if(cljs.core.truth_(cljs.core.deref(rendered_root_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(rendered_root_QMARK_,true);

return (do_render.cljs$core$IFn$_invoke$arity$0 ? do_render.cljs$core$IFn$_invoke$arity$0() : do_render.call(null));
}
} else {
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Render skipped. Renderer was nil. Possibly a hot code reload?"], 0));
}
});})(reconciler_state,components_to_refresh,render_mode,force_root_QMARK_,blind_refresh_QMARK_,rendered_root_QMARK_,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);

if(!((remote == null))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote_DASH_queue,remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queue,cljs.core.PersistentVector.EMPTY);
}

var _STAR_blindly_render_STAR_39635 = fulcro.client.primitives._STAR_blindly_render_STAR_;
fulcro.client.primitives._STAR_blindly_render_STAR_ = blind_refresh_QMARK_;

try{if(force_root_QMARK_){
return render_root();
} else {
return fulcro.client.primitives.optimal_render(this$__$1,components_to_refresh,render_root);
}
}finally {fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR_39635;
}});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$queued.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queued,true);

return true;
} else {
return false;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$tick_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update,cljs.core.cst$kw$t,cljs.core.inc);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$sends_DASH_queued.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$sends_DASH_queued,true);

return true;
} else {
return false;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rctor = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = (function (){var or__10805__auto__ = this$__$1.fulcro$client$impl$protocols$IReconciler$get_id$arity$1(null);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return fulcro.util.unique_key();
}
})();
if(cljs.core.truth_(this$__$1.fulcro$client$impl$protocols$IReconciler$get_id$arity$1(null))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$id,guid);
}

if(fulcro.client.primitives.has_query_QMARK_(root_class)){
fulcro.client.impl.protocols.index_root(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.cst$kw$state,cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config))),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__10793__auto__ = cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not(cljs.core.cst$kw$normalized.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)));
} else {
return and__10793__auto__;
}
})())){
var new_state_39660 = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_39661 = cljs.core.meta(new_state_39660);
cljs.core.reset_BANG_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state_39660,refs_39661], 0)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$normalized,true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function fulcro$client$primitives$render_fn(data){
var _STAR_reconciler_STAR_39636 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_shared_STAR_39637 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_39638 = fulcro.client.primitives._STAR_instrument_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = this$__$1;

fulcro.client.primitives._STAR_shared_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config))?(function (){var fexpr__39639 = cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__39639.cljs$core$IFn$_invoke$arity$1 ? fexpr__39639.cljs$core$IFn$_invoke$arity$1(data) : fexpr__39639.call(null,data));
})():null)], 0));

fulcro.client.primitives._STAR_instrument_STAR_ = cljs.core.cst$kw$instrument.cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?(function (){var G__39641 = (rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data));
var G__39642 = target;
var fexpr__39640 = cljs.core.cst$kw$root_DASH_render.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__39640.cljs$core$IFn$_invoke$arity$2 ? fexpr__39640.cljs$core$IFn$_invoke$arity$2(G__39641,G__39642) : fexpr__39640.call(null,G__39641,G__39642));
})():(((cljs.core.deref(ret) == null))?(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)):(function (){var temp__5457__auto__ = cljs.core.deref(ret);
if(cljs.core.truth_(temp__5457__auto__)){
var c_SINGLEQUOTE_ = temp__5457__auto__;
if(fulcro.client.primitives.mounted_QMARK_(c_SINGLEQUOTE_)){
return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$2(c_SINGLEQUOTE_,data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref(ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$root,c);

return cljs.core.reset_BANG_(ret,c);
} else {
return null;
}
}finally {fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_39638;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_39637;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39636;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function fulcro$client$primitives$parse_fn(){
var root_query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(rctor,cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config)));
if(((root_query == null)) || (cljs.core.vector_QMARK_(root_query))){
} else {
throw (new Error(["Assert failed: ","Application root query must be a vector","\n","(or (nil? root-query) (vector? root-query))"].join('')));
}

if(!((root_query == null))){
var env = fulcro.client.primitives.to_env(self__.config);
var raw_props = (function (){var fexpr__39643 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__39643.cljs$core$IFn$_invoke$arity$2 ? fexpr__39643.cljs$core$IFn$_invoke$arity$2(env,root_query) : fexpr__39643.call(null,env,root_query));
})();
var current_time = fulcro.client.primitives.get_current_time(this$__$1);
var root_props = fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3(root_query,raw_props,current_time);
if(cljs.core.empty_QMARK_(root_props)){
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: Root props were empty. Your root query returned no data!"], 0));
} else {
}

return renderf(root_props);
} else {
return renderf(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$render,parsef,cljs.core.cst$kw$root,root_class,cljs.core.cst$kw$remove,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function fulcro$client$primitives$remove_fn(){
cljs.core.remove_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),this$__$1.fulcro$client$impl$protocols$IReconciler$get_id$arity$1(null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__39625_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39625_SHARP_,cljs.core.cst$kw$target),cljs.core.cst$kw$render),cljs.core.cst$kw$root),cljs.core.cst$kw$remove);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
var fexpr__39644 = cljs.core.cst$kw$root_DASH_unmount.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__39644.cljs$core$IFn$_invoke$arity$1 ? fexpr__39644.cljs$core$IFn$_invoke$arity$1(target) : fexpr__39644.call(null,target));
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),this$__$1.fulcro$client$impl$protocols$IReconciler$get_id$arity$1(null),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function fulcro$client$primitives$add_fn(_,___$1,___$2,___$3){
if(!(fulcro.client.primitives.has_query_QMARK_(root_class))){
return fulcro.client.primitives.queue_render_BANG_(parsef);
} else {
this$__$1.fulcro$client$impl$protocols$IReconciler$tick_BANG_$arity$1(null);

return fulcro.client.primitives.schedule_render_BANG_(this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef();

var temp__5457__auto___39662 = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(rctor,cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config)));
if(cljs.core.truth_(temp__5457__auto___39662)){
var sel_39663 = temp__5457__auto___39662;
var env_39664 = fulcro.client.primitives.to_env(self__.config);
var snds_39665 = fulcro.client.primitives.gather_sends(env_39664,sel_39663,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(self__.config),(0));
if(cljs.core.empty_QMARK_(snds_39665)){
} else {
var temp__5457__auto___39666__$1 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__5457__auto___39666__$1)){
var send_39667 = temp__5457__auto___39666__$1;
var G__39645_39668 = snds_39665;
var G__39646_39669 = ((function (G__39645_39668,send_39667,temp__5457__auto___39666__$1,env_39664,snds_39665,sel_39663,temp__5457__auto___39662,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var fulcro$client$primitives$send_cb = null;
var fulcro$client$primitives$send_cb__1 = (function (resp){
fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,null);

return renderf((function (){var fexpr__39647 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__39647.cljs$core$IFn$_invoke$arity$2 ? fexpr__39647.cljs$core$IFn$_invoke$arity$2(env_39664,sel_39663) : fexpr__39647.call(null,env_39664,sel_39663));
})());
});
var fulcro$client$primitives$send_cb__2 = (function (resp,query){
fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,query);

return renderf((function (){var fexpr__39648 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__39648.cljs$core$IFn$_invoke$arity$2 ? fexpr__39648.cljs$core$IFn$_invoke$arity$2(env_39664,sel_39663) : fexpr__39648.call(null,env_39664,sel_39663));
})());
});
var fulcro$client$primitives$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
this$__$1.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3(null,cljs.core.keys(resp),remote);
}

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,resp,query,remote);

return this$__$1.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2(null,remote);
});
fulcro$client$primitives$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return fulcro$client$primitives$send_cb__1.call(this,resp);
case 2:
return fulcro$client$primitives$send_cb__2.call(this,resp,query);
case 3:
return fulcro$client$primitives$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$primitives$send_cb.cljs$core$IFn$_invoke$arity$1 = fulcro$client$primitives$send_cb__1;
fulcro$client$primitives$send_cb.cljs$core$IFn$_invoke$arity$2 = fulcro$client$primitives$send_cb__2;
fulcro$client$primitives$send_cb.cljs$core$IFn$_invoke$arity$3 = fulcro$client$primitives$send_cb__3;
return fulcro$client$primitives$send_cb;
})()
;})(G__39645_39668,send_39667,temp__5457__auto___39666__$1,env_39664,snds_39665,sel_39663,temp__5457__auto___39662,renderf,parsef,ret,rctor,guid,this$__$1))
;
(send_39667.cljs$core$IFn$_invoke$arity$2 ? send_39667.cljs$core$IFn$_invoke$arity$2(G__39645_39668,G__39646_39669) : send_39667.call(null,G__39645_39668,G__39646_39669));
} else {
}
}
} else {
}

return cljs.core.deref(ret);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),cljs.core.cst$kw$root);
var root_class = fulcro.client.primitives.react_type(root);
if(fulcro.client.primitives.has_query_QMARK_(root)){
var indexer = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config);
return fulcro.client.impl.protocols.index_root(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(indexer,cljs.core.cst$kw$state,cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config))),root_class);
} else {
return null;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__5457__auto__ = cljs.core.cst$kw$remove.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
if(cljs.core.truth_(temp__5457__auto__)){
var remove = temp__5457__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$get_id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11507__auto__,writer__11508__auto__,opts__11509__auto__){
var self__ = this;
var this__11507__auto____$1 = this;
var pr_pair__11510__auto__ = ((function (this__11507__auto____$1){
return (function (keyval__11511__auto__){
return cljs.core.pr_sequential_writer(writer__11508__auto__,cljs.core.pr_writer,""," ","",opts__11509__auto__,keyval__11511__auto__);
});})(this__11507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11508__auto__,pr_pair__11510__auto__,"#fulcro.client.primitives.Reconciler{",", ","}",opts__11509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$history,self__.history],null))], null),self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39626){
var self__ = this;
var G__39626__$1 = this;
return (new cljs.core.RecordIter((0),G__39626__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$state,cljs.core.cst$kw$history], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11491__auto__){
var self__ = this;
var this__11491__auto____$1 = this;
return self__.__meta;
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11488__auto__){
var self__ = this;
var this__11488__auto____$1 = this;
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11497__auto__){
var self__ = this;
var this__11497__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11489__auto__){
var self__ = this;
var this__11489__auto____$1 = this;
var h__11261__auto__ = self__.__hash;
if(!((h__11261__auto__ == null))){
return h__11261__auto__;
} else {
var h__11261__auto____$1 = (function (){var fexpr__39649 = ((function (h__11261__auto__,this__11489__auto____$1){
return (function (coll__11490__auto__){
return (775628851 ^ cljs.core.hash_unordered_coll(coll__11490__auto__));
});})(h__11261__auto__,this__11489__auto____$1))
;
return fexpr__39649(this__11489__auto____$1);
})();
self__.__hash = h__11261__auto____$1;

return h__11261__auto____$1;
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39628,other39629){
var self__ = this;
var this39628__$1 = this;
return (!((other39629 == null))) && ((this39628__$1.constructor === other39629.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39628__$1.config,other39629.config)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39628__$1.state,other39629.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39628__$1.history,other39629.history)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39628__$1.__extmap,other39629.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11502__auto__,k__11503__auto__){
var self__ = this;
var this__11502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$config,null,cljs.core.cst$kw$history,null,cljs.core.cst$kw$state,null], null), null),k__11503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11502__auto____$1),self__.__meta),k__11503__auto__);
} else {
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11503__auto__)),null));
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11500__auto__,k__11501__auto__,G__39626){
var self__ = this;
var this__11500__auto____$1 = this;
var pred__39650 = cljs.core.keyword_identical_QMARK_;
var expr__39651 = k__11501__auto__;
if(cljs.core.truth_((function (){var G__39653 = cljs.core.cst$kw$config;
var G__39654 = expr__39651;
return (pred__39650.cljs$core$IFn$_invoke$arity$2 ? pred__39650.cljs$core$IFn$_invoke$arity$2(G__39653,G__39654) : pred__39650.call(null,G__39653,G__39654));
})())){
return (new fulcro.client.primitives.Reconciler(G__39626,self__.state,self__.history,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39655 = cljs.core.cst$kw$state;
var G__39656 = expr__39651;
return (pred__39650.cljs$core$IFn$_invoke$arity$2 ? pred__39650.cljs$core$IFn$_invoke$arity$2(G__39655,G__39656) : pred__39650.call(null,G__39655,G__39656));
})())){
return (new fulcro.client.primitives.Reconciler(self__.config,G__39626,self__.history,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39657 = cljs.core.cst$kw$history;
var G__39658 = expr__39651;
return (pred__39650.cljs$core$IFn$_invoke$arity$2 ? pred__39650.cljs$core$IFn$_invoke$arity$2(G__39657,G__39658) : pred__39650.call(null,G__39657,G__39658));
})())){
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,G__39626,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11501__auto__,G__39626),null));
}
}
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11505__auto__){
var self__ = this;
var this__11505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$history,self__.history],null))], null),self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11492__auto__,G__39626){
var self__ = this;
var this__11492__auto____$1 = this;
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,G__39626,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11498__auto__,entry__11499__auto__){
var self__ = this;
var this__11498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11499__auto__)){
return this__11498__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11498__auto____$1,entry__11499__auto__);
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config));
});

fulcro.client.primitives.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$state,cljs.core.cst$sym$history], null);
});

fulcro.client.primitives.Reconciler.cljs$lang$type = true;

fulcro.client.primitives.Reconciler.cljs$lang$ctorPrSeq = (function (this__11531__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fulcro.client.primitives/Reconciler");
});

fulcro.client.primitives.Reconciler.cljs$lang$ctorPrWriter = (function (this__11531__auto__,writer__11532__auto__){
return cljs.core._write(writer__11532__auto__,"fulcro.client.primitives/Reconciler");
});

fulcro.client.primitives.__GT_Reconciler = (function fulcro$client$primitives$__GT_Reconciler(config,state,history){
return (new fulcro.client.primitives.Reconciler(config,state,history,null,null,null));
});

fulcro.client.primitives.map__GT_Reconciler = (function fulcro$client$primitives$map__GT_Reconciler(G__39630){
return (new fulcro.client.primitives.Reconciler(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__39630),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__39630),cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(G__39630),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39630,cljs.core.cst$kw$config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state,cljs.core.cst$kw$history], 0))),null));
});

/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :id           - a unique ID that this reconciler will be known as. Used to resolve global variable usage when more than one app is on a page. If
 *                   left unspecified it will default to a random UUID.
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :history      - A positive integer. The number of history steps to keep in memory.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :render-mode  - :normal - fastest, and the default. Components with idents can refresh in isolation.
 *                             shouldComponentUpdate returns false is state/data are unchanged. Follow-on reads are
 *                             required to refresh non-local concerns.
 *                   :keyframe - Every data change runs a root-level query and re-renders from root.
 *                               shouldComponentUpdate is the same as :default. Follow-on reads are *not* needed for
 *                               non-local UI refresh.
 *                   :brutal - Every data change runs a root-level query, and re-renders from root. shouldComponentUpdate
 *                             always returns true, forcing full React diff. Not really useful for anything but benchmarking.
 *   :lifecycle    - A function (fn [component event]) that is called when react components either :mount or :unmount. Useful for debugging tools.
 *   :tx-listen    - a function of 2 arguments that will listen to transactions.
 *                   The first argument is the parser's env map also containing
 *                   the old and new state. The second argument is a history-step (see history). It also contains
 *                   a couple of legacy fields for bw compatibility with 1.0.
 */
fulcro.client.primitives.reconciler = (function fulcro$client$primitives$reconciler(p__39675){
var map__39676 = p__39675;
var map__39676__$1 = ((((!((map__39676 == null)))?((((map__39676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39676):map__39676);
var config = map__39676__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39676__$1,cljs.core.cst$kw$root_DASH_render,((function (map__39676,map__39676__$1,config){
return (function (p1__39672_SHARP_,p2__39673_SHARP_){
return ReactDOM.render(p1__39672_SHARP_,p2__39673_SHARP_);
});})(map__39676,map__39676__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$normalize);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$tx_DASH_listen);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$instrument);
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39676__$1,cljs.core.cst$kw$merge_DASH_sends,((function (map__39676,map__39676__$1,config,root_render,normalize,tx_listen,instrument){
return (function (p1__39670_SHARP_,p2__39671_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__39670_SHARP_,p2__39671_SHARP_], 0));
});})(map__39676,map__39676__$1,config,root_render,normalize,tx_listen,instrument))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$merge_DASH_ident);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39676__$1,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote], null));
var render_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39676__$1,cljs.core.cst$kw$render_DASH_mode,cljs.core.cst$kw$normal);
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$migrate);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39676__$1,cljs.core.cst$kw$history,(200));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$state);
var lifecycle = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39676__$1,cljs.core.cst$kw$lifecycle,null);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$shared_DASH_fn);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$parser);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$id);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39676__$1,cljs.core.cst$kw$root_DASH_unmount,((function (map__39676,map__39676__$1,config,root_render,normalize,tx_listen,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,parser,id){
return (function (p1__39674_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__39674_SHARP_);
});})(map__39676,map__39676__$1,config,root_render,normalize,tx_listen,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,parser,id))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$send);
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$merge_DASH_tree);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,cljs.core.cst$kw$shared);
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39676__$1,cljs.core.cst$kw$optimize,((function (map__39676,map__39676__$1,config,root_render,normalize,tx_listen,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,parser,id,root_unmount,send,merge_tree,shared){
return (function fulcro$client$primitives$reconciler_$_depth_sorter(cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.depth,cs);
});})(map__39676,map__39676__$1,config,root_render,normalize,tx_listen,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,parser,id,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = fulcro.client.primitives.map__GT_Indexer(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indexes,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null));
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$)))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state));
var ret = (new fulcro.client.primitives.Reconciler(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pathopt,cljs.core.cst$kw$instrument,cljs.core.cst$kw$merge_DASH_ident,cljs.core.cst$kw$merge_DASH_sends,cljs.core.cst$kw$remotes,cljs.core.cst$kw$render_DASH_mode,cljs.core.cst$kw$migrate,cljs.core.cst$kw$state,cljs.core.cst$kw$lifecycle,cljs.core.cst$kw$shared_DASH_fn,cljs.core.cst$kw$parser,cljs.core.cst$kw$indexer,cljs.core.cst$kw$root_DASH_unmount,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$optimize,cljs.core.cst$kw$root_DASH_render,cljs.core.cst$kw$normalize,cljs.core.cst$kw$tx_DASH_listen],[true,instrument,merge_ident,merge_sends,remotes,render_mode,migrate,state_SINGLEQUOTE_,lifecycle,shared_fn,parser,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__10805__auto__ = !(norm_QMARK_);
if(or__10805__auto__){
return or__10805__auto__;
} else {
return normalize;
}
})(),tx_listen]),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$normalized,cljs.core.cst$kw$remote_DASH_queue,cljs.core.cst$kw$remove,cljs.core.cst$kw$queue,cljs.core.cst$kw$sends_DASH_queued,cljs.core.cst$kw$queued_DASH_sends,cljs.core.cst$kw$queued,cljs.core.cst$kw$render,cljs.core.cst$kw$root,cljs.core.cst$kw$id,cljs.core.cst$kw$t,cljs.core.cst$kw$target],[norm_QMARK_,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,id,(0),null])),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fulcro.history.new_history(history)),null,null,null));
return ret;
});
/**
 * Internal implementation detail of transact!. Call that function instead.
 */
fulcro.client.primitives.transact_STAR_ = (function fulcro$client$primitives$transact_STAR_(reconciler,c,ref,tx){
if(cljs.core.truth_(reconciler)){
fulcro.client.impl.protocols.tick_BANG_(reconciler);

var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var ref__$1 = (cljs.core.truth_((function (){var and__10793__auto__ = c;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$)))?true:false):false);
if(and__10793__auto____$1){
return cljs.core.not(ref);
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())?fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reconciler,reconciler,cljs.core.cst$kw$component,c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref__$1], null):null)], 0));
var old_state = cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg));
var history = fulcro.client.primitives.get_history(reconciler);
var v = (function (){var fexpr__39681 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(cfg);
return (fexpr__39681.cljs$core$IFn$_invoke$arity$2 ? fexpr__39681.cljs$core$IFn$_invoke$arity$2(env,tx) : fexpr__39681.call(null,env,tx));
})();
var declared_refreshes = (function (){var or__10805__auto__ = (function (){var G__39683 = v;
var G__39683__$1 = (((G__39683 == null))?null:cljs.core.meta(G__39683));
var G__39683__$2 = (((G__39683__$1 == null))?null:cljs.core.cst$kw$fulcro$client$primitives_SLASH_refresh.cljs$core$IFn$_invoke$arity$1(G__39683__$1));
if((G__39683__$2 == null)){
return null;
} else {
return cljs.core.vec(G__39683__$2);
}
})();
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var follow_on_reads = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(declared_refreshes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,tx));
var tx_time = fulcro.client.primitives.get_current_time(reconciler);
var snds = fulcro.client.primitives.gather_sends(env,tx,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg),tx_time);
var new_state = cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg));
var xs = (function (){var G__39684 = follow_on_reads;
var G__39684__$1 = ((!((c == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__39684,c):G__39684);
if(!((ref__$1 == null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__39684__$1,ref__$1);
} else {
return G__39684__$1;
}
})();
var history_step = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$fulcro$history_SLASH_tx,tx,cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time,(new Date()),cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,snds,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before,old_state,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,new_state], null);
if(cljs.core.truth_(history)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history,fulcro.history.record_history_step,tx_time,history_step);
} else {
}

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,cljs.core.into.cljs$core$IFn$_invoke$arity$3(xs,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
} else {
var seq__39685_39697 = cljs.core.seq(snds);
var chunk__39686_39698 = null;
var count__39687_39699 = (0);
var i__39688_39700 = (0);
while(true){
if((i__39688_39700 < count__39687_39699)){
var vec__39689_39701 = chunk__39686_39698.cljs$core$IIndexed$_nth$arity$2(null,i__39688_39700);
var remote_39702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39689_39701,(0),null);
var __39703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39689_39701,(1),null);
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,xs,remote_39702);

var G__39704 = seq__39685_39697;
var G__39705 = chunk__39686_39698;
var G__39706 = count__39687_39699;
var G__39707 = (i__39688_39700 + (1));
seq__39685_39697 = G__39704;
chunk__39686_39698 = G__39705;
count__39687_39699 = G__39706;
i__39688_39700 = G__39707;
continue;
} else {
var temp__5457__auto___39708 = cljs.core.seq(seq__39685_39697);
if(temp__5457__auto___39708){
var seq__39685_39709__$1 = temp__5457__auto___39708;
if(cljs.core.chunked_seq_QMARK_(seq__39685_39709__$1)){
var c__11736__auto___39710 = cljs.core.chunk_first(seq__39685_39709__$1);
var G__39711 = cljs.core.chunk_rest(seq__39685_39709__$1);
var G__39712 = c__11736__auto___39710;
var G__39713 = cljs.core.count(c__11736__auto___39710);
var G__39714 = (0);
seq__39685_39697 = G__39711;
chunk__39686_39698 = G__39712;
count__39687_39699 = G__39713;
i__39688_39700 = G__39714;
continue;
} else {
var vec__39692_39715 = cljs.core.first(seq__39685_39709__$1);
var remote_39716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39692_39715,(0),null);
var __39717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39692_39715,(1),null);
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,xs,remote_39716);

var G__39718 = cljs.core.next(seq__39685_39709__$1);
var G__39719 = null;
var G__39720 = (0);
var G__39721 = (0);
seq__39685_39697 = G__39718;
chunk__39686_39698 = G__39719;
count__39687_39699 = G__39720;
i__39688_39700 = G__39721;
continue;
}
} else {
}
}
break;
}

fulcro.client.impl.protocols.queue_sends_BANG_(reconciler,snds);

fulcro.client.primitives.schedule_sends_BANG_(reconciler);
}

var temp__5457__auto___39722 = cljs.core.cst$kw$tx_DASH_listen.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5457__auto___39722)){
var f_39723 = temp__5457__auto___39722;
var tx_data_39724 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,new_state], null)], 0));
var G__39695_39725 = tx_data_39724;
var G__39696_39726 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(history_step,cljs.core.cst$kw$tx,tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,v], 0));
(f_39723.cljs$core$IFn$_invoke$arity$2 ? f_39723.cljs$core$IFn$_invoke$arity$2(G__39695_39725,G__39696_39726) : f_39723.call(null,G__39695_39725,G__39696_39726));
} else {
}

return v;
} else {
return null;
}
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
fulcro.client.primitives.annotate_mutations = (function fulcro$client$primitives$annotate_mutations(tx,ident){
var annotate = (function fulcro$client$primitives$annotate_mutations_$_annotate(expr,ident__$1){
var G__39729 = expr;
if(fulcro.util.mutation_QMARK_(expr)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__39729,cljs.core.assoc,cljs.core.cst$kw$mutator,ident__$1);
} else {
return G__39729;
}
});
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__39727_SHARP_){
return annotate(p1__39727_SHARP_,ident);
})),tx),cljs.core.meta(tx));
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 * 
 *  NOTE: transact! is not safe to call from within mutations unless you defer it inside of a setTimeout. This is
 *  because otherwise you could potentially nest calls of swap! that will cause unexpected results. In general it
 *  the model of Fulcro is such that a call transact! within a mutation is technically just bad design. If you
 *  need pessimistic UI control, see ptransact! instead.
 */
fulcro.client.primitives.transact_BANG_ = (function fulcro$client$primitives$transact_BANG_(var_args){
var G__39731 = arguments.length;
switch (G__39731) {
case 2:
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if((fulcro.client.primitives.component_QMARK_(x)) || (fulcro.client.primitives.reconciler_QMARK_(x))){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__39732 = tx;
if((function (){var and__10793__auto__ = fulcro.client.primitives.component_QMARK_(x);
if(and__10793__auto__){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro$client$primitives$Ident$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(fulcro.client.primitives.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(fulcro.client.primitives.Ident,x);
}
} else {
return and__10793__auto__;
}
})()){
return fulcro.client.primitives.annotate_mutations(G__39732,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(x));
} else {
return G__39732;
}
})();
if(fulcro.client.primitives.reconciler_QMARK_(x)){
return fulcro.client.primitives.transact_STAR_(x,null,null,tx__$1);
} else {
if(!(fulcro.client.primitives.has_query_QMARK_(x))){
if(cljs.core.truth_(fulcro.client.primitives.some_hasquery_QMARK_(x))){
} else {
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["transact! should be called on a component","that implements IQuery or has a parent that","implements IQuery"].join('')], 0));
}

return fulcro.client.primitives.transact_STAR_(fulcro.client.primitives.get_reconciler(x),null,null,tx__$1);
} else {
var p = fulcro.client.primitives.parent(x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = fulcro.client.primitives.get_reconciler(x__$1);
return fulcro.client.primitives.transact_STAR_(r,x__$1,null,tx__$2);
} else {
var vec__39735 = ((((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.fulcro$client$impl$protocols$ITxIntercept$)))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,fulcro.client.impl.protocols.tx_intercept(p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39735,(0),null);
var tx__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39735,(1),null);
var G__39740 = fulcro.client.primitives.parent(p);
var G__39741 = x_SINGLEQUOTE_;
var G__39742 = tx__$3;
p = G__39740;
x__$1 = G__39741;
tx__$2 = G__39742;
continue;
}
break;
}

}
}
});

fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return fulcro.client.primitives.transact_STAR_(r,null,ref,tx);
});

fulcro.client.primitives.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Identical to `transact!`, but marks the history edge as compressible. This means that if more than one
 *   adjacent history transition edge is compressible, only the more recent of the sequence of them is kept. This
 *   is useful for things like form input fields, where storing every keystoke in history is undesirable.
 * 
 *   NOTE: history events that trigger remote interactions are not compressible, since they may be needed for
 *   automatic network error recovery handling..
 */
fulcro.client.primitives.compressible_transact_BANG_ = (function fulcro$client$primitives$compressible_transact_BANG_(comp_or_reconciler,tx){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp_or_reconciler,fulcro.history.compressible_tx(tx));
});
/**
 * Set the component local state of the component. Analogous to React's
 * setState. WARNING: This version triggers a reconcile which *will* run the query
 * on the component. This is to avoid spurious overhead of multiple renders on the DOM by
 * pushing the refresh off to the next animation frame; however, rapid animation updates
 * will not work well with this. Use react-set-state! instead. This function may
 * evolve in the future to just be the same as react-set-state!. Your feedback is
 * welcome.
 */
fulcro.client.primitives.set_state_BANG_ = (function fulcro$client$primitives$set_state_BANG_(component,new_state){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$ILocalState$)))?true:false):false)){
fulcro.client.primitives._set_state_BANG_(component,new_state);
} else {
var G__39744_39747 = component.state;
var G__39745_39748 = "fulcro$pendingState";
var G__39746_39749 = new_state;
goog.object.set(G__39744_39747,G__39745_39748,G__39746_39749);
}

var temp__5455__auto__ = fulcro.client.primitives.get_reconciler(component);
if(cljs.core.truth_(temp__5455__auto__)){
var r = temp__5455__auto__;
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return fulcro.client.primitives.schedule_render_BANG_(r);
} else {
return fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(component);
}
});
fulcro.client.primitives.react_set_state_BANG_ = (function fulcro$client$primitives$react_set_state_BANG_(var_args){
var G__39751 = arguments.length;
switch (G__39751) {
case 2:
return fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

fulcro.client.primitives.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"fulcro$state": new_state}),cb);
});

fulcro.client.primitives.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
fulcro.client.primitives.update_state_BANG_ = (function fulcro$client$primitives$update_state_BANG_(var_args){
var G__39761 = arguments.length;
switch (G__39761) {
case 2:
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__12107__auto__ = [];
var len__12084__auto___39778 = arguments.length;
var i__12085__auto___39779 = (0);
while(true){
if((i__12085__auto___39779 < len__12084__auto___39778)){
args_arr__12107__auto__.push((arguments[i__12085__auto___39779]));

var G__39780 = (i__12085__auto___39779 + (1));
i__12085__auto___39779 = G__39780;
continue;
} else {
}
break;
}

var argseq__12108__auto__ = (new cljs.core.IndexedSeq(args_arr__12107__auto__.slice((6)),(0),null));
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__12108__auto__);

}
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__39762 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__39762) : f.call(null,G__39762));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__39763 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__39764 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__39763,G__39764) : f.call(null,G__39763,G__39764));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__39765 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__39766 = arg0;
var G__39767 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__39765,G__39766,G__39767) : f.call(null,G__39765,G__39766,G__39767));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__39768 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__39769 = arg0;
var G__39770 = arg1;
var G__39771 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__39768,G__39769,G__39770,G__39771) : f.call(null,G__39768,G__39769,G__39770,G__39771));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__39772 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__39773 = arg0;
var G__39774 = arg1;
var G__39775 = arg2;
var G__39776 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__39772,G__39773,G__39774,G__39775,G__39776) : f.call(null,G__39772,G__39773,G__39774,G__39775,G__39776));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return fulcro.client.primitives.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg3,arg_rest], 0)));
});

fulcro.client.primitives.update_state_BANG_.cljs$lang$applyTo = (function (seq39754){
var G__39755 = cljs.core.first(seq39754);
var seq39754__$1 = cljs.core.next(seq39754);
var G__39756 = cljs.core.first(seq39754__$1);
var seq39754__$2 = cljs.core.next(seq39754__$1);
var G__39757 = cljs.core.first(seq39754__$2);
var seq39754__$3 = cljs.core.next(seq39754__$2);
var G__39758 = cljs.core.first(seq39754__$3);
var seq39754__$4 = cljs.core.next(seq39754__$3);
var G__39759 = cljs.core.first(seq39754__$4);
var seq39754__$5 = cljs.core.next(seq39754__$4);
var G__39760 = cljs.core.first(seq39754__$5);
var seq39754__$6 = cljs.core.next(seq39754__$5);
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39755,G__39756,G__39757,G__39758,G__39759,G__39760,seq39754__$6);
});

fulcro.client.primitives.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
fulcro.client.primitives.app_state = (function fulcro$client$primitives$app_state(reconciler){
if(fulcro.client.primitives.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
fulcro.client.primitives.app_root = (function fulcro$client$primitives$app_root(reconciler){
if(fulcro.client.primitives.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler)),cljs.core.cst$kw$root);
});
/**
 * Given a query expression convert it into an AST.
 */
fulcro.client.primitives.query__GT_ast = (function fulcro$client$primitives$query__GT_ast(query_expr){
return fulcro.client.impl.parser.query__GT_ast(query_expr);
});
/**
 * Call query->ast and return the first children.
 */
fulcro.client.primitives.query__GT_ast1 = (function fulcro$client$primitives$query__GT_ast1(query_expr){
return cljs.core.first(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.query__GT_ast(query_expr)));
});
fulcro.client.primitives.ast__GT_query = (function fulcro$client$primitives$ast__GT_query(query_ast){

return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
/**
 * Force a re-render of the root. Runs a root query, disables shouldComponentUpdate, and renders the root component.
 * This effectively forces React to do a full VDOM diff. Useful for things like changing locales where there are no
 * real data changes, but the UI still needs to refresh.
 * recomputing :shared.
 */
fulcro.client.primitives.force_root_render_BANG_ = (function fulcro$client$primitives$force_root_render_BANG_(reconciler){
if(fulcro.client.primitives.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler)),cljs.core.cst$kw$render);
if(cljs.core.truth_(temp__5457__auto__)){
var render = temp__5457__auto__;
var _STAR_blindly_render_STAR_39781 = fulcro.client.primitives._STAR_blindly_render_STAR_;
fulcro.client.primitives._STAR_blindly_render_STAR_ = true;

try{return (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
}finally {fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR_39781;
}} else {
return null;
}
});
/**
 * Return a temporary id.
 */
fulcro.client.primitives.tempid = (function fulcro$client$primitives$tempid(var_args){
var G__39783 = arguments.length;
switch (G__39783) {
case 0:
return fulcro.client.primitives.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.primitives.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
});

fulcro.client.primitives.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
});

fulcro.client.primitives.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
fulcro.client.primitives.tempid_QMARK_ = (function fulcro$client$primitives$tempid_QMARK_(x){
return fulcro.tempid.tempid_QMARK_(x);
});
/**
 * Create a transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
fulcro.client.primitives.reader = (function fulcro$client$primitives$reader(var_args){
var G__39786 = arguments.length;
switch (G__39786) {
case 0:
return fulcro.client.primitives.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.primitives.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.transit.reader.cljs$core$IFn$_invoke$arity$0();
});

fulcro.client.primitives.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1(opts);
});

fulcro.client.primitives.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
fulcro.client.primitives.writer = (function fulcro$client$primitives$writer(var_args){
var G__39789 = arguments.length;
switch (G__39789) {
case 0:
return fulcro.client.primitives.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.primitives.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.transit.writer.cljs$core$IFn$_invoke$arity$0();
});

fulcro.client.primitives.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1(opts);
});

fulcro.client.primitives.writer.cljs$lang$maxFixedArity = 1;

/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
fulcro.client.primitives.dispatch = (function fulcro$client$primitives$dispatch(_,key,___$1){
return key;
});
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 * 
 * The mutation functions return a map keyed by:
 * 
 * `:action` - The lambda to run to do the local optimistic version of that mutation
 * any-keyword-matching-a-remote - A boolean true or AST expression of the thing to run on the named remote.
 * :refresh - A vector of namespaced keywords of data that was/will be changed by this mutation
 * 
 * When the parser runs on mutations it collects the `:refresh` list into the metadata of the results
 * under the :fulcro.client.primitives/refresh key.
 */
fulcro.client.primitives.parser = (function fulcro$client$primitives$parser(p__39791){
var map__39792 = p__39791;
var map__39792__$1 = ((((!((map__39792 == null)))?((((map__39792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39792):map__39792);
var opts = map__39792__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39792__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39792__$1,cljs.core.cst$kw$mutate);
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return fulcro.client.impl.parser.parser(opts);
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
fulcro.client.primitives.add_root_BANG_ = (function fulcro$client$primitives$add_root_BANG_(var_args){
var G__39795 = arguments.length;
switch (G__39795) {
case 3:
return fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(fulcro.client.primitives.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__5457__auto___39797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.client.primitives.roots),target);
if(cljs.core.truth_(temp__5457__auto___39797)){
var old_reconciler_39798 = temp__5457__auto___39797;
(fulcro.client.primitives.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_39798,target) : fulcro.client.primitives.remove_root_BANG_.call(null,old_reconciler_39798,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.roots,cljs.core.assoc,target,reconciler);

return fulcro.client.impl.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

fulcro.client.primitives.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
fulcro.client.primitives.remove_root_BANG_ = (function fulcro$client$primitives$remove_root_BANG_(reconciler,target){
return fulcro.client.impl.protocols.remove_root_BANG_(reconciler,target);
});
/**
 * Return the global shared properties of the root. See :shared and
 * :shared-fn reconciler options.
 */
fulcro.client.primitives.shared = (function fulcro$client$primitives$shared(var_args){
var G__39800 = arguments.length;
switch (G__39800) {
case 1:
return fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = (function (){var G__39801 = component.props;
var G__39802 = "fulcro$shared";
return goog.object.get(G__39801,G__39802);
})();
var ks = (function (){var G__39803 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__39803],null));
} else {
return G__39803;
}
})();
var G__39804 = shared;
if(!(cljs.core.empty_QMARK_(ks))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__39804,ks);
} else {
return G__39804;
}
});

fulcro.client.primitives.shared.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.instrument = (function fulcro$client$primitives$instrument(component){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return fulcro.client.primitives.get_prop(component,"fulcro$instrument");
});
fulcro.client.primitives.merge_pending_state_BANG_ = (function fulcro$client$primitives$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$ILocalState$)))?true:false):false)){
return fulcro.client.primitives._merge_pending_state_BANG_(c);
} else {
var temp__5457__auto__ = (function (){var G__39807 = c;
var G__39807__$1 = (((G__39807 == null))?null:G__39807.state);
if((G__39807__$1 == null)){
return null;
} else {
return goog.object.get(G__39807__$1,"fulcro$pendingState");
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var pending = temp__5457__auto__;
var state = c.state;
var previous = goog.object.get(state,"fulcro$state");
goog.object.remove(state,"fulcro$pendingState");

goog.object.set(state,"fulcro$previousState",previous);

return goog.object.set(state,"fulcro$state",pending);
} else {
return null;
}
}
});
/**
 * Get any component from the indexer that matches the component class.
 */
fulcro.client.primitives.class__GT_any = (function fulcro$client$primitives$class__GT_any(x,class$){
var indexer = ((fulcro.client.primitives.reconciler_QMARK_(x))?fulcro.client.primitives.get_indexer(x):x);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,class$], null)));
});
/**
 * Get any component from the indexer that matches the component class.
 */
fulcro.client.primitives.class__GT_all = (function fulcro$client$primitives$class__GT_all(x,class$){
var indexer = ((fulcro.client.primitives.reconciler_QMARK_(x))?fulcro.client.primitives.get_indexer(x):x);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,class$], null));
});
/**
 * Return all components for a given ref.
 */
fulcro.client.primitives.ref__GT_components = (function fulcro$client$primitives$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = ((fulcro.client.primitives.reconciler_QMARK_(x))?fulcro.client.primitives.get_indexer(x):x);
return fulcro.client.impl.protocols.key__GT_components(indexer,ref);
}
});
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
fulcro.client.primitives.get_rendered_state = (function fulcro$client$primitives$get_rendered_state(var_args){
var G__39809 = arguments.length;
switch (G__39809) {
case 1:
return fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

fulcro.client.primitives.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(fulcro.client.primitives.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$ILocalState$)))?true:false):false))?fulcro.client.primitives._get_rendered_state(component):(function (){var G__39811 = component;
var G__39811__$1 = (((G__39811 == null))?null:G__39811.state);
if((G__39811__$1 == null)){
return null;
} else {
return goog.object.get(G__39811__$1,"fulcro$state");
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

fulcro.client.primitives.get_rendered_state.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.nil_or_map_QMARK_ = (function fulcro$client$primitives$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
/**
 * Returns the component associated with a component's React ref.
 */
fulcro.client.primitives.react_ref = (function fulcro$client$primitives$react_ref(component,name){
var G__39813 = component.refs;
if((G__39813 == null)){
return null;
} else {
return goog.object.get(G__39813,name);
}
});
/**
 * Set a dynamic query. ALters the query, and then rebuilds internal indexes.
 */
fulcro.client.primitives.set_query_BANG_ = (function fulcro$client$primitives$set_query_BANG_(component_or_reconciler,ui_factory_or_queryid,p__39814){
var map__39815 = p__39814;
var map__39815__$1 = ((((!((map__39815 == null)))?((((map__39815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39815):map__39815);
var opts = map__39815__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39815__$1,cljs.core.cst$kw$query);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39815__$1,cljs.core.cst$kw$params);
var follow_on_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39815__$1,cljs.core.cst$kw$follow_DASH_on_DASH_reads);
var reconciler = ((fulcro.client.primitives.reconciler_QMARK_(component_or_reconciler))?component_or_reconciler:fulcro.client.primitives.get_reconciler(component_or_reconciler));
var queryid = ((typeof ui_factory_or_queryid === 'string')?ui_factory_or_queryid:(cljs.core.truth_((function (){var G__39817 = ui_factory_or_queryid;
var G__39817__$1 = (((G__39817 == null))?null:cljs.core.meta(G__39817));
if((G__39817__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__39817__$1,cljs.core.cst$kw$queryid);
}
})())?(function (){var G__39818 = ui_factory_or_queryid;
var G__39818__$1 = (((G__39818 == null))?null:cljs.core.meta(G__39818));
if((G__39818__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$queryid.cljs$core$IFn$_invoke$arity$1(G__39818__$1);
}
})():fulcro.client.primitives.query_id(ui_factory_or_queryid,null)
));
var tx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$mutations_SLASH_set_DASH_query_BANG_),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$queryid),(function (){var x__11759__auto__ = queryid;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$query),(function (){var x__11759__auto__ = query;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$params),(function (){var x__11759__auto__ = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())))),follow_on_reads);
if(cljs.core.truth_((function (){var and__10793__auto__ = typeof queryid === 'string';
if(and__10793__auto__){
var or__10805__auto__ = query;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return params;
}
} else {
return and__10793__auto__;
}
})())){
fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,tx);

return fulcro.client.impl.protocols.reindex_BANG_(reconciler);
} else {
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to set query. Invalid arguments."], 0));
}
});
/**
 * Converts a sequence of calls as if each call should run in sequence (deferring even the optimistic side until
 *   the prior calls have completed in a full-stack manner), and returns a tx that can be submitted via the normal
 *   `transact!`.
 * 
 *   The options map can contain:
 *   `valid-remotes` is a set of remote names in your application. Defaults to `#{:remote}`
 *   `env` is a map that is merged into the deferred transaction's `env`
 * 
 *   WARNING: If a mutation tries to interact with more than one simultaneous remote, the current implementation will wait
 *   until the *first* one of them completes (selected in a non-deterministic fashion), not all.
 */
fulcro.client.primitives.pessimistic_transaction__GT_transaction = (function fulcro$client$primitives$pessimistic_transaction__GT_transaction(var_args){
var G__39822 = arguments.length;
switch (G__39822) {
case 1:
return fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2(tx,null);
});

fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2 = (function (tx,p__39823){
var map__39824 = p__39823;
var map__39824__$1 = ((((!((map__39824 == null)))?((((map__39824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39824):map__39824);
var options = map__39824__$1;
var valid_remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39824__$1,cljs.core.cst$kw$valid_DASH_remotes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,null], null), null));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39824__$1,cljs.core.cst$kw$env,cljs.core.PersistentArrayMap.EMPTY);
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39824__$1,cljs.core.cst$kw$state_DASH_map,cljs.core.PersistentArrayMap.EMPTY);
var ast_nodes = cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.query__GT_ast(tx));
var map__39826 = cljs.core.group_by(((function (ast_nodes,map__39824,map__39824__$1,options,valid_remotes,env,state_map){
return (function (p1__39819_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__39819_SHARP_));
});})(ast_nodes,map__39824,map__39824__$1,options,valid_remotes,env,state_map))
,ast_nodes);
var map__39826__$1 = ((((!((map__39826 == null)))?((((map__39826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39826):map__39826);
var ast_calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39826__$1,true);
var ast_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39826__$1,false);
var ast_follow_on_reads = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$root,cljs.core.cst$kw$children,ast_reads], null));
var remote_for_ast_call = ((function (ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,map__39824,map__39824__$1,options,valid_remotes,env,state_map){
return (function (c){
var dispatch_key = cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(c);
var get_remotes = (function (){var or__10805__auto__ = (function (){var G__39836 = ((typeof fulcro.client.data_fetch.get_remotes !== 'undefined')?(new cljs.core.Var(((function (dispatch_key,ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,map__39824,map__39824__$1,options,valid_remotes,env,state_map){
return (function (){
return fulcro.client.data_fetch.get_remotes;
});})(dispatch_key,ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,map__39824,map__39824__$1,options,valid_remotes,env,state_map))
,cljs.core.with_meta(cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_get_DASH_remotes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true], null)),null)):null);
if((G__39836 == null)){
return null;
} else {
return cljs.core.deref(G__39836);
}
})();
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return ((function (or__10805__auto__,dispatch_key,ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,map__39824,map__39824__$1,options,valid_remotes,env,state_map){
return (function (state_map__$1,sym){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FAILED TO FIND get-remotes. CANNOT DERIVE REMOTES FOR ptransact! Assuming :remote"], 0));

return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,null], null), null);
});
;})(or__10805__auto__,dispatch_key,ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,map__39824,map__39824__$1,options,valid_remotes,env,state_map))
}
})();
var remotes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fallback",cljs.core.name(dispatch_key)))?cljs.core.PersistentHashSet.EMPTY:(get_remotes.cljs$core$IFn$_invoke$arity$2 ? get_remotes.cljs$core$IFn$_invoke$arity$2(state_map,dispatch_key) : get_remotes.call(null,state_map,dispatch_key)));
if(cljs.core.seq(remotes)){
return cljs.core.first(remotes);
} else {
return null;
}
});})(ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,map__39824,map__39824__$1,options,valid_remotes,env,state_map))
;
var is_local_QMARK_ = ((function (ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,map__39824,map__39824__$1,options,valid_remotes,env,state_map){
return (function (c){
return cljs.core.not(remote_for_ast_call(c));
});})(ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,map__39824,map__39824__$1,options,valid_remotes,env,state_map))
;
var vec__39827 = cljs.core.split_with(is_local_QMARK_,ast_calls);
var ast_local_calls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39827,(0),null);
var ast_remaining_calls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39827,(1),null);
var ast_first_remote_call = (function (){var G__39837 = ast_remaining_calls;
if((G__39837 == null)){
return null;
} else {
return cljs.core.first(G__39837);
}
})();
var remote = (function (){var G__39838 = ast_first_remote_call;
if((G__39838 == null)){
return null;
} else {
return remote_for_ast_call(G__39838);
}
})();
var unprocessed_call_asts = cljs.core.vec(cljs.core.rest(ast_remaining_calls));
var vec__39830 = cljs.core.split_with(is_local_QMARK_,unprocessed_call_asts);
var possible_fallback_asts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39830,(0),null);
var distant_call_asts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39830,(1),null);
var map__39833 = cljs.core.group_by(((function (ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,is_local_QMARK_,vec__39827,ast_local_calls,ast_remaining_calls,ast_first_remote_call,remote,unprocessed_call_asts,vec__39830,possible_fallback_asts,distant_call_asts,map__39824,map__39824__$1,options,valid_remotes,env,state_map){
return (function (p1__39820_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fallback",cljs.core.name(cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(p1__39820_SHARP_)));
});})(ast_nodes,map__39826,map__39826__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,is_local_QMARK_,vec__39827,ast_local_calls,ast_remaining_calls,ast_first_remote_call,remote,unprocessed_call_asts,vec__39830,possible_fallback_asts,distant_call_asts,map__39824,map__39824__$1,options,valid_remotes,env,state_map))
,possible_fallback_asts);
var map__39833__$1 = ((((!((map__39833 == null)))?((((map__39833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39833):map__39833);
var fallback_asts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39833__$1,true);
var following_call_asts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39833__$1,false);
var unprocessed_tx = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$root,cljs.core.cst$kw$children,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(following_call_asts,distant_call_asts)], null));
var calls_to_run_now = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ast_local_calls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_first_remote_call], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fallback_asts], 0)));
var tx_for_calls = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$root,cljs.core.cst$kw$children,calls_to_run_now], null));
var tx_to_run_now = cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx_for_calls,ast_follow_on_reads);
var tx_to_defer = cljs.core.into.cljs$core$IFn$_invoke$arity$2(unprocessed_tx,ast_follow_on_reads);
var defer_QMARK_ = cljs.core.seq(unprocessed_call_asts);
var deferred_params = ((defer_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$env,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remote,remote,cljs.core.cst$kw$tx,fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2(tx_to_defer,options)], null)], 0)):null);
if(defer_QMARK_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx_to_run_now,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_deferred_DASH_transaction),(function (){var x__11759__auto__ = deferred_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())))));
} else {
return tx_to_run_now;
}
});

fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$lang$maxFixedArity = 2;

/**
 * Like `transact!`, but ensures each call completes (in a full-stack, pessimistic manner) before the next call starts
 *   in any way. Note that two calls of this function have no guaranteed relationship to each other. They could end up
 *   intermingled at runtime. The only guarantee is that for *a single call* to `ptransact!`, the calls in the given tx will run
 *   pessimistically (one at a time) in the order given. Follow-on reads in the given transaction will be repeated after each remote
 *   interaction.
 * 
 *   `comp-or-reconciler` a mounted component or reconciler
 *   `tx` the tx to run
 *   `ref` the ident (ref context) in which to run the transaction (including all deferrals)
 * 
 *   NOTE: `ptransact!` *is* safe to use from within mutations (e.g. for retry behavior).
 *   WARNING: Mutations that interact with more than one remote *at the same time* will only wait for one of the remotes to finish.
 */
fulcro.client.primitives.ptransact_BANG_ = (function fulcro$client$primitives$ptransact_BANG_(var_args){
var G__39842 = arguments.length;
switch (G__39842) {
case 2:
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (comp_or_reconciler,tx){
var ref = (((fulcro.client.primitives.component_QMARK_(comp_or_reconciler)) && (fulcro.client.primitives.has_ident_QMARK_(comp_or_reconciler)))?fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(comp_or_reconciler):null);
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3(comp_or_reconciler,ref,tx);
});

fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (comp_or_reconciler,ref,tx){
var reconciler = ((fulcro.client.primitives.reconciler_QMARK_(comp_or_reconciler))?comp_or_reconciler:fulcro.client.primitives.get_reconciler(comp_or_reconciler));
var state_map = cljs.core.deref(fulcro.client.primitives.app_state(reconciler));
var remotes = (function (){var G__39843 = reconciler;
var G__39843__$1 = (((G__39843 == null))?null:cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__39843));
var G__39843__$2 = (((G__39843__$1 == null))?null:cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(G__39843__$1));
if((G__39843__$2 == null)){
return null;
} else {
return cljs.core.set(G__39843__$2);
}
})();
var ptx = fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2(tx,(function (){var G__39844 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$valid_DASH_remotes,remotes,cljs.core.cst$kw$state_DASH_map,state_map], null);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39844,cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref], null));
} else {
return G__39844;
}
})());
var G__39845 = ((function (reconciler,state_map,remotes,ptx){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp_or_reconciler,ptx);
});})(reconciler,state_map,remotes,ptx))
;
var G__39846 = (0);
return setTimeout(G__39845,G__39846);
});

fulcro.client.primitives.ptransact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Replace the first sym in a list (the function name) with the given symbol.
 * 
 *   sym - The symbol that the lambda should have
 *   external-args - A sequence of argmuments that the user should not include, but that you want to be inserted in the external-args by this function.
 *   user-arity - The number of external-args the user should supply (resulting user-arity is (count external-args) + user-arity).
 *   fn-form - The form to rewrite
 *   sym - The symbol to report in the error message (in case the rewrite uses a different target that the user knows).
 */
fulcro.client.primitives.replace_and_validate_fn = (function fulcro$client$primitives$replace_and_validate_fn(var_args){
var G__39850 = arguments.length;
switch (G__39850) {
case 4:
return fulcro.client.primitives.replace_and_validate_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return fulcro.client.primitives.replace_and_validate_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.primitives.replace_and_validate_fn.cljs$core$IFn$_invoke$arity$4 = (function (sym,external_args,user_arity,fn_form){
return fulcro.client.primitives.replace_and_validate_fn.cljs$core$IFn$_invoke$arity$5(sym,external_args,user_arity,fn_form,sym);
});

fulcro.client.primitives.replace_and_validate_fn.cljs$core$IFn$_invoke$arity$5 = (function (sym,external_args,user_arity,fn_form,user_known_sym){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_arity,cljs.core.count(cljs.core.second(fn_form)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid arity for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_known_sym)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expected,user_arity,cljs.core.cst$kw$got,cljs.core.count(cljs.core.second(fn_form))], null));
}

var user_args = cljs.core.second(fn_form);
var updated_args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec((function (){var or__10805__auto__ = external_args;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()),user_args);
var body_forms = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),fn_form);
return cljs.core.cons(sym,cljs.core.cons(updated_args,body_forms));
});

fulcro.client.primitives.replace_and_validate_fn.cljs$lang$maxFixedArity = 5;

/**
 * Build a component's initial state using the defsc initial-state-data from
 *   options, the children from options, and the params from the invocation of get-initial-state.
 */
fulcro.client.primitives.make_state_map = (function fulcro$client$primitives$make_state_map(initial_state,children_by_query_key,params){
var join_keys = cljs.core.set(cljs.core.keys(children_by_query_key));
var init_keys = cljs.core.set(cljs.core.keys(initial_state));
var is_child_QMARK_ = ((function (join_keys,init_keys){
return (function (k){
return cljs.core.contains_QMARK_(join_keys,k);
});})(join_keys,init_keys))
;
var value_of = ((function (join_keys,init_keys,is_child_QMARK_){
return (function fulcro$client$primitives$make_state_map_$_value_of_STAR_(p__39852){
var vec__39853 = p__39852;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39853,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39853,(1),null);
var param_name = ((function (vec__39853,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (v__$1){
var and__10793__auto__ = (v__$1 instanceof cljs.core.Keyword);
if(and__10793__auto__){
var and__10793__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(v__$1));
if(and__10793__auto____$1){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v__$1));
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
});})(vec__39853,k,v,join_keys,init_keys,is_child_QMARK_))
;
var substitute = ((function (param_name,vec__39853,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
var temp__5455__auto__ = param_name(ele);
if(cljs.core.truth_(temp__5455__auto__)){
var k__$1 = temp__5455__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k__$1);
} else {
return ele;
}
});})(param_name,vec__39853,k,v,join_keys,init_keys,is_child_QMARK_))
;
var param_key = param_name(v);
var param_exists_QMARK_ = cljs.core.contains_QMARK_(params,param_key);
var param_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,param_key);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children_by_query_key,k);
if(cljs.core.truth_((function (){var and__10793__auto__ = param_key;
if(cljs.core.truth_(and__10793__auto__)){
return !(param_exists_QMARK_);
} else {
return and__10793__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = cljs.core.map_QMARK_(v);
if(and__10793__auto__){
return is_child_QMARK_(k);
} else {
return and__10793__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.client.primitives.get_initial_state(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,v)))], null);
} else {
if(cljs.core.map_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,v))], null);
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = cljs.core.vector_QMARK_(v);
if(and__10793__auto__){
return is_child_QMARK_(k);
} else {
return and__10793__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__39853,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (m){
return fulcro.client.primitives.get_initial_state(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,m)));
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__39853,k,v,join_keys,init_keys,is_child_QMARK_))
,v)], null);
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = cljs.core.vector_QMARK_(param_value);
if(and__10793__auto__){
return is_child_QMARK_(k);
} else {
return and__10793__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__39853,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (params__$1){
return fulcro.client.primitives.get_initial_state(child_class,params__$1);
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__39853,k,v,join_keys,init_keys,is_child_QMARK_))
,param_value)], null);
} else {
if(cljs.core.vector_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__39853,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
return substitute(ele);
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__39853,k,v,join_keys,init_keys,is_child_QMARK_))
,v)], null);
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = param_key;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = is_child_QMARK_(k);
if(cljs.core.truth_(and__10793__auto____$1)){
return param_exists_QMARK_;
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.client.primitives.get_initial_state(child_class,param_value)], null);
} else {
if(cljs.core.truth_(param_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,param_value], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);

}
}
}
}
}
}
}
}
});})(join_keys,init_keys,is_child_QMARK_))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(value_of,initial_state));
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
fulcro.client.primitives.integrate_ident = (function fulcro$client$primitives$integrate_ident(var_args){
var args__12091__auto__ = [];
var len__12084__auto___39869 = arguments.length;
var i__12085__auto___39870 = (0);
while(true){
if((i__12085__auto___39870 < len__12084__auto___39869)){
args__12091__auto__.push((arguments[i__12085__auto___39870]));

var G__39871 = (i__12085__auto___39870 + (1));
i__12085__auto___39870 = G__39871;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.primitives.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.primitives.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__39864){
var vec__39865 = p__39864;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39865,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39865,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__39865,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__39865,command,data_path,actions){
return (function (p1__39859_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__39859_SHARP_,ident);
});})(vec__39865,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__39865,command,data_path,actions))
;
var G__39868 = command;
var G__39868__$1 = (((G__39868 instanceof cljs.core.Keyword))?G__39868.fqn:null);
switch (G__39868__$1) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for prepend must target an app-state vector."].join('')),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__39868,G__39868__$1,already_has_ident_at_path_QMARK_,vec__39865,command,data_path,actions){
return (function (p1__39860_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__39860_SHARP_);
});})(G__39868,G__39868__$1,already_has_ident_at_path_QMARK_,vec__39865,command,data_path,actions))
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

fulcro.client.primitives.integrate_ident.cljs$lang$maxFixedArity = (2);

fulcro.client.primitives.integrate_ident.cljs$lang$applyTo = (function (seq39861){
var G__39862 = cljs.core.first(seq39861);
var seq39861__$1 = cljs.core.next(seq39861);
var G__39863 = cljs.core.first(seq39861__$1);
var seq39861__$2 = cljs.core.next(seq39861__$1);
return fulcro.client.primitives.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__39862,G__39863,seq39861__$2);
});

/**
 * Calculates the query that can be used to pull (or merge) a component with an ident
 *   to/from a normalized app database. Requires a tree of data that represents the instance of
 *   the component in question (e.g. ident will work on it)
 */
fulcro.client.primitives.component_merge_query = (function fulcro$client$primitives$component_merge_query(component,object_data){
var ident = fulcro.client.primitives.ident(component,object_data);
var object_query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,object_query])], null);
});
/**
 * Does the steps necessary to honor the data merge technique defined by Fulcro with respect
 *   to data overwrites in the app database.
 */
fulcro.client.primitives.preprocess_merge = (function fulcro$client$primitives$preprocess_merge(state_atom,component,object_data){
var ident = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,object_data);
var object_query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component);
var object_query__$1 = ((cljs.core.map_QMARK_(object_query))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_query], null):object_query);
var base_query = fulcro.client.primitives.component_merge_query(component,object_data);
var merge_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro_SLASH_merge,base_query], null)], null);
var existing_data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(base_query,cljs.core.deref(state_atom),cljs.core.deref(state_atom)),ident,cljs.core.PersistentArrayMap.EMPTY);
var marked_data = fulcro.client.primitives.mark_missing(object_data,object_query__$1);
var merge_data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro_SLASH_merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_data,marked_data], 0))])], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$merge_DASH_query,merge_query,cljs.core.cst$kw$merge_DASH_data,merge_data], null);
});
/**
 * Returns TRUE when x is an atom.
 */
fulcro.client.primitives.is_atom_QMARK_ = (function fulcro$client$primitives$is_atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
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
 *   
 */
fulcro.client.primitives.integrate_ident_BANG_ = (function fulcro$client$primitives$integrate_ident_BANG_(var_args){
var args__12091__auto__ = [];
var len__12084__auto___39876 = arguments.length;
var i__12085__auto___39877 = (0);
while(true){
if((i__12085__auto___39877 < len__12084__auto___39876)){
args__12091__auto__.push((arguments[i__12085__auto___39877]));

var G__39878 = (i__12085__auto___39877 + (1));
i__12085__auto___39877 = G__39878;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.primitives.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.primitives.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.truth_(fulcro.client.primitives.is_atom_QMARK_(state))){
} else {
throw (new Error(["Assert failed: ","The state has to be an atom. Use 'integrate-ident' instead.","\n","(is-atom? state)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,fulcro.client.primitives.integrate_ident,ident,named_parameters);
});

fulcro.client.primitives.integrate_ident_BANG_.cljs$lang$maxFixedArity = (2);

fulcro.client.primitives.integrate_ident_BANG_.cljs$lang$applyTo = (function (seq39873){
var G__39874 = cljs.core.first(seq39873);
var seq39873__$1 = cljs.core.next(seq39873);
var G__39875 = cljs.core.first(seq39873__$1);
var seq39873__$2 = cljs.core.next(seq39873__$1);
return fulcro.client.primitives.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39874,G__39875,seq39873__$2);
});

/**
 * Given a state map of the application database, a component, and a tree of component-data: normalizes
 * the tree of data and merges the component table entries into the state, returning a new state map.
 * Since there is not an implied root, the component itself won't be linked into your graph (though it will
 * remain correctly linked for its own consistency).
 * Therefore, this function is just for dropping normalized things into tables
 * when they themselves have a recursive nature. This function is useful when you want to create a new component instance
 * and put it in the database, but the component instance has recursive normalized state. This is a basically a
 * thin wrapper around `prim/tree->db`.
 * 
 * See also integrate-ident, integrate-ident!, and merge-component!
 */
fulcro.client.primitives.merge_component = (function fulcro$client$primitives$merge_component(state_map,component,component_data){
var temp__5455__auto__ = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,component_data);
if(cljs.core.truth_(temp__5455__auto__)){
var top_ident = temp__5455__auto__;
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([top_ident,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component)])], null);
var state_to_merge = cljs.core.PersistentArrayMap.createAsIfByAssoc([top_ident,component_data]);
var table_entries = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,state_to_merge,true),cljs.core.cst$kw$fulcro$client$primitives_SLASH_tables,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_ident], 0));
return fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state_map,table_entries], 0));
} else {
return state_map;
}
});
/**
 * Normalize and merge a (sub)tree of application state into the application using a known UI component's query and ident.
 * 
 *   This utility function obtains the ident of the incoming object-data using the UI component's ident function. Once obtained,
 *   it uses the component's query and ident to normalize the data and place the resulting objects in the correct tables.
 *   It is also quite common to want those new objects to be linked into lists in other spot in app state, so this function
 *   supports optional named parameters for doing this. These named parameters can be repeated as many times as you like in order
 *   to place the ident of the new object into other data structures of app state.
 * 
 *   This function honors the data merge story for Fulcro: attributes that are queried for but do not appear in the
 *   data will be removed from the application. This function also uses the initial state for the component as a base
 *   for merge if there was no state for the object already in the database.
 * 
 *   This function will also trigger re-renders of components that directly render object merged, as well as any components
 *   into which you integrate that data via the named-parameters.
 * 
 *   This function is primarily meant to be used from things like server push and setTimeout/setInterval, where you're outside
 *   of the normal mutation story. Do not use this function within abstract mutations.
 * 
 *   - reconciler: A reconciler
 *   - component: The class of the component that corresponsds to the data. Must have an ident.
 *   - object-data: A map (tree) of data to merge. Will be normalized for you.
 *   - named-parameter: Post-processing ident integration steps. see integrate-ident!
 * 
 *   Any keywords that appear in ident integration steps will be added to the re-render queue.
 * 
 *   See also `fulcro.client.primitives/merge!`.
 *   
 */
fulcro.client.primitives.merge_component_BANG_ = (function fulcro$client$primitives$merge_component_BANG_(var_args){
var args__12091__auto__ = [];
var len__12084__auto___39885 = arguments.length;
var i__12085__auto___39886 = (0);
while(true){
if((i__12085__auto___39886 < len__12084__auto___39885)){
args__12091__auto__.push((arguments[i__12085__auto___39886]));

var G__39887 = (i__12085__auto___39886 + (1));
i__12085__auto___39886 = G__39887;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((3) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((3)),(0),null)):null);
return fulcro.client.primitives.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12092__auto__);
});

fulcro.client.primitives.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reconciler,component,object_data,named_parameters){
if(!(fulcro.client.primitives.has_ident_QMARK_(component))){
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["merge-component!: component must implement Ident. Merge skipped."], 0));
} else {
var ident = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,object_data);
var reconciler__$1 = ((cljs.core.contains_QMARK_(reconciler,cljs.core.cst$kw$reconciler))?cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(reconciler):reconciler);
var state = fulcro.client.primitives.app_state(reconciler__$1);
var data_path_keys = cljs.core.vec(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters))))));
var map__39883 = fulcro.client.primitives.preprocess_merge(state,component,object_data);
var map__39883__$1 = ((((!((map__39883 == null)))?((((map__39883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39883):map__39883);
var merge_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39883__$1,cljs.core.cst$kw$merge_DASH_data);
var merge_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39883__$1,cljs.core.cst$kw$merge_DASH_query);
fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler__$1,merge_data,merge_query);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$fulcro_SLASH_merge);

cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.integrate_ident_BANG_,state,ident,named_parameters);

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_path_keys,ident));

return cljs.core.deref(state);
}
});

fulcro.client.primitives.merge_component_BANG_.cljs$lang$maxFixedArity = (3);

fulcro.client.primitives.merge_component_BANG_.cljs$lang$applyTo = (function (seq39879){
var G__39880 = cljs.core.first(seq39879);
var seq39879__$1 = cljs.core.next(seq39879);
var G__39881 = cljs.core.first(seq39879__$1);
var seq39879__$2 = cljs.core.next(seq39879__$1);
var G__39882 = cljs.core.first(seq39879__$2);
var seq39879__$3 = cljs.core.next(seq39879__$2);
return fulcro.client.primitives.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39880,G__39881,G__39882,seq39879__$3);
});

/**
 * Walks the given query and calls (merge-fn parent-union-component union-child-initial-state) for each non-default element of a union that has initial app state.
 *   You probably want to use merge-alternate-union-elements[!] on a state map or app.
 */
fulcro.client.primitives.merge_alternate_unions = (function fulcro$client$primitives$merge_alternate_unions(merge_fn,root_component){
var walk_ast = (function() {
var fulcro$client$primitives$merge_alternate_unions_$_walk_ast = null;
var fulcro$client$primitives$merge_alternate_unions_$_walk_ast__2 = (function (ast,visitor){
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
});
var fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3 = (function (p__39895,visitor,parent_union){
var map__39896 = p__39895;
var map__39896__$1 = ((((!((map__39896 == null)))?((((map__39896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39896):map__39896);
var parent_ast = map__39896__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39896__$1,cljs.core.cst$kw$children);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39896__$1,cljs.core.cst$kw$component);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39896__$1,cljs.core.cst$kw$type);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39896__$1,cljs.core.cst$kw$dispatch_DASH_key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39896__$1,cljs.core.cst$kw$union_DASH_key);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39896__$1,cljs.core.cst$kw$key);
if(cljs.core.truth_((function (){var and__10793__auto__ = component;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = parent_union;
if(cljs.core.truth_(and__10793__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union_DASH_entry,type);
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())){
(visitor.cljs$core$IFn$_invoke$arity$2 ? visitor.cljs$core$IFn$_invoke$arity$2(component,parent_union) : visitor.call(null,component,parent_union));
} else {
}

if(cljs.core.truth_(children)){
var seq__39898 = cljs.core.seq(children);
var chunk__39899 = null;
var count__39900 = (0);
var i__39901 = (0);
while(true){
if((i__39901 < count__39900)){
var ast = chunk__39899.cljs$core$IIndexed$_nth$arity$2(null,i__39901);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union_DASH_entry)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}

var G__39902 = seq__39898;
var G__39903 = chunk__39899;
var G__39904 = count__39900;
var G__39905 = (i__39901 + (1));
seq__39898 = G__39902;
chunk__39899 = G__39903;
count__39900 = G__39904;
i__39901 = G__39905;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39898);
if(temp__5457__auto__){
var seq__39898__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39898__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__39898__$1);
var G__39906 = cljs.core.chunk_rest(seq__39898__$1);
var G__39907 = c__11736__auto__;
var G__39908 = cljs.core.count(c__11736__auto__);
var G__39909 = (0);
seq__39898 = G__39906;
chunk__39899 = G__39907;
count__39900 = G__39908;
i__39901 = G__39909;
continue;
} else {
var ast = cljs.core.first(seq__39898__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union_DASH_entry)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}

var G__39910 = cljs.core.next(seq__39898__$1);
var G__39911 = null;
var G__39912 = (0);
var G__39913 = (0);
seq__39898 = G__39910;
chunk__39899 = G__39911;
count__39900 = G__39912;
i__39901 = G__39913;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
fulcro$client$primitives$merge_alternate_unions_$_walk_ast = function(p__39895,visitor,parent_union){
switch(arguments.length){
case 2:
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast__2.call(this,p__39895,visitor);
case 3:
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3.call(this,p__39895,visitor,parent_union);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$2 = fulcro$client$primitives$merge_alternate_unions_$_walk_ast__2;
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3 = fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3;
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast;
})()
;
var merge_union = (function fulcro$client$primitives$merge_alternate_unions_$_merge_union(component,parent_union){
var default_initial_state = (function (){var and__10793__auto__ = parent_union;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = fulcro.client.primitives.has_initial_app_state_QMARK_(parent_union);
if(and__10793__auto____$1){
return fulcro.client.primitives.get_initial_state(parent_union,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_(default_initial_state);
var component_initial_state = (function (){var and__10793__auto__ = component;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = fulcro.client.primitives.has_initial_app_state_QMARK_(component);
if(and__10793__auto____$1){
return fulcro.client.primitives.get_initial_state(component,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})();
if(cljs.core.truth_(default_initial_state)){
} else {
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: Subelements of union ",parent_union.displayName," have initial state. This means your default branch of the union will not have initial application state."], 0));
}

if(cljs.core.truth_((function (){var and__10793__auto__ = component;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = component_initial_state;
if(cljs.core.truth_(and__10793__auto____$1)){
var and__10793__auto____$2 = parent_union;
if(cljs.core.truth_(and__10793__auto____$2)){
return (!(to_many_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(default_initial_state,component_initial_state));
} else {
return and__10793__auto____$2;
}
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())){
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(parent_union,component_initial_state) : merge_fn.call(null,parent_union,component_initial_state));
} else {
return null;
}
});
return walk_ast.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.query__GT_ast(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(root_component)),merge_union);
});
/**
 * Walks the query and initial state of root-component and merges the alternate sides of unions with initial state into
 *   the application state database. See also `merge-alternate-union-elements`, which can be used on a state map and
 *   is handy for server-side rendering. This function side-effects on your app, and returns nothing.
 */
fulcro.client.primitives.merge_alternate_union_elements_BANG_ = (function fulcro$client$primitives$merge_alternate_union_elements_BANG_(app,root_component){
return fulcro.client.primitives.merge_alternate_unions(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.merge_component_BANG_,app),root_component);
});
/**
 * Just like merge-alternate-union-elements!, but usable from within mutations and on server-side rendering. Ensures
 *   that when a component has initial state it will end up in the state map, even if it isn't currently in the
 *   initial state of the union component (which can only point to one at a time).
 */
fulcro.client.primitives.merge_alternate_union_elements = (function fulcro$client$primitives$merge_alternate_union_elements(state_map,root_component){
var initial_state = fulcro.client.primitives.get_initial_state(root_component,null);
var state_map_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_map);
var merge_to_state = ((function (initial_state,state_map_atom){
return (function (comp,tree){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map_atom,fulcro.client.primitives.merge_component,comp,tree);
});})(initial_state,state_map_atom))
;
var _ = fulcro.client.primitives.merge_alternate_unions(merge_to_state,root_component);
var new_state = cljs.core.deref(state_map_atom);
return new_state;
});

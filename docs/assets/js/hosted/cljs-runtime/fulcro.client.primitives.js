goog.provide('fulcro.client.primitives');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.object');
goog.require('fulcro_css.css');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('fulcro.history');
goog.require('fulcro.logging');
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











/**
 * @interface
 */
fulcro.client.primitives.Ident = function(){};

/**
 * Return the ident for this component
 */
fulcro.client.primitives.ident = (function fulcro$client$primitives$ident(this$,props){
if(((!((this$ == null))) && (!((this$.fulcro$client$primitives$Ident$ident$arity$2 == null))))){
return this$.fulcro$client$primitives$Ident$ident$arity$2(this$,props);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.primitives.ident[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__4212__auto__.call(null,this$,props));
} else {
var m__4212__auto____$1 = (fulcro.client.primitives.ident["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__4212__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
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
if(((!((this$ == null))) && (!((this$.fulcro$client$primitives$IQuery$query$arity$1 == null))))){
return this$.fulcro$client$primitives$IQuery$query$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.primitives.query[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (fulcro.client.primitives.query["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$primitives$ILocalState$_set_state_BANG_$arity$2 == null))))){
return this$.fulcro$client$primitives$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.primitives._set_state_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__4212__auto__.call(null,this$,new_state));
} else {
var m__4212__auto____$1 = (fulcro.client.primitives._set_state_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__4212__auto____$1.call(null,this$,new_state));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$primitives$ILocalState$_get_state$arity$1 == null))))){
return this$.fulcro$client$primitives$ILocalState$_get_state$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.primitives._get_state[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (fulcro.client.primitives._get_state["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$primitives$ILocalState$_get_rendered_state$arity$1 == null))))){
return this$.fulcro$client$primitives$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.primitives._get_rendered_state[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (fulcro.client.primitives._get_rendered_state["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$primitives$ILocalState$_merge_pending_state_BANG_$arity$1 == null))))){
return this$.fulcro$client$primitives$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.primitives._merge_pending_state_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (fulcro.client.primitives._merge_pending_state_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
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
if(((!((clz == null))) && (!((clz.fulcro$client$primitives$InitialAppState$initial_state$arity$2 == null))))){
return clz.fulcro$client$primitives$InitialAppState$initial_state$arity$2(clz,params);
} else {
var x__4211__auto__ = (((clz == null))?null:clz);
var m__4212__auto__ = (fulcro.client.primitives.initial_state[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(clz,params) : m__4212__auto__.call(null,clz,params));
} else {
var m__4212__auto____$1 = (fulcro.client.primitives.initial_state["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(clz,params) : m__4212__auto____$1.call(null,clz,params));
} else {
throw cljs.core.missing_protocol("InitialAppState.initial-state",clz);
}
}
}
});

fulcro.client.primitives.has_initial_app_state_QMARK_ = (function fulcro$client$primitives$has_initial_app_state_QMARK_(component){
if(!((component == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$InitialAppState$)))){
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$Ident$)))){
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$IQuery$)))){
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
var G__39570 = ((((!((class$ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$InitialAppState$))))?true:false):false))?fulcro.client.primitives.initial_state(class$,params):null);
if((G__39570 == null)){
return null;
} else {
return cljs.core.with_meta(G__39570,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
});
/**
 * Returns true if the given initial state was computed from a call to get-initial-state.
 */
fulcro.client.primitives.computed_initial_state_QMARK_ = (function fulcro$client$primitives$computed_initial_state_QMARK_(s){
var and__3911__auto__ = cljs.core.map_QMARK_(s);
if(and__3911__auto__){
var G__39573 = s;
var G__39573__$1 = (((G__39573 == null))?null:cljs.core.meta(G__39573));
if((G__39573__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"computed","computed",-1482016762).cljs$core$IFn$_invoke$arity$1(G__39573__$1);
}
} else {
return and__3911__auto__;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","remote","fulcro.client.primitives/remote",82057012),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-1688940366),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"missing","missing",362507769),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Symbol("fulcro.util","ident?","fulcro.util/ident?",-2064561335,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"missing","missing",362507769),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("fulcro.util","ident?","fulcro.util/ident?",-2064561335,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,fulcro.util.ident_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","query","fulcro.client.primitives/query",261276758),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","transaction","fulcro.client.primitives/transaction",1435510665),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39576#","p1__39576#",-543863219,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__39576#","p1__39576#",-543863219,null)),cljs.core.list(new cljs.core.Symbol("fulcro.util","mutation?","fulcro.util/mutation?",-1077955232,null),new cljs.core.Symbol(null,"p1__39576#","p1__39576#",-543863219,null)))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39576#","p1__39576#",-543863219,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"p1__39576#","p1__39576#",-543863219,null)),cljs.core.list(new cljs.core.Symbol("util","mutation?","util/mutation?",-1080424299,null),new cljs.core.Symbol(null,"p1__39576#","p1__39576#",-543863219,null)))),(function (p1__39576_SHARP_){
return (((p1__39576_SHARP_ instanceof cljs.core.Keyword)) || (fulcro.util.mutation_QMARK_(p1__39576_SHARP_)));
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__39581){
return cljs.core.vector_QMARK_(G__39581);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("fulcro.util","mutation?","fulcro.util/mutation?",-1077955232,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","component-or-reconciler","fulcro.client.primitives/component-or-reconciler",2040205074),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","pessimistic?","fulcro.client.primitives/pessimistic?",-804432644),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("fulcro.client.primitives","tempid?","fulcro.client.primitives/tempid?",-1763280099,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"tempid?","tempid?",2034653313,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("fulcro.client.primitives","tempid?","fulcro.client.primitives/tempid?",-1763280099,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.primitives.tempid_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__39585){
return cljs.core.map_QMARK_(G__39585);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14798__auto__,v__14799__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14799__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("fulcro.client.primitives","tempid?","fulcro.client.primitives/tempid?",-1763280099,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));
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
fulcro.client.primitives.add_basis_time_STAR_ = (function fulcro$client$primitives$add_basis_time_STAR_(p__39589,props,time){
var map__39590 = p__39589;
var map__39590__$1 = ((((!((map__39590 == null)))?(((((map__39590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39590):map__39590);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39590__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.map_QMARK_(props)){
if(cljs.core.seq(children)){
var children__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))):children);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(props,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (children__$1,map__39590,map__39590__$1,children){
return (function (p1__39586_SHARP_){
return cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__39586_SHARP_));
});})(children__$1,map__39590,map__39590__$1,children))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (children__$1,map__39590,map__39590__$1,children){
return (function (p__39592){
var map__39593 = p__39592;
var map__39593__$1 = ((((!((map__39593 == null)))?(((((map__39593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39593):map__39593);
var ast = map__39593__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39593__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39593__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,key);
var ast__$1 = (function (){var G__39595 = ast;
var G__39595__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39595,new cljs.core.Keyword(null,"children","children",-940561982),children__$1):G__39595);
if(cljs.core.pos_int_QMARK_(query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39595__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__39595,G__39595__$1,x,map__39593,map__39593__$1,ast,key,query,children__$1,map__39590,map__39590__$1,children){
return (function (p1__39587_SHARP_){
var G__39596 = p1__39587_SHARP_;
if(cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__39587_SHARP_))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__39596,new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.dec);
} else {
return G__39596;
}
});})(G__39595,G__39595__$1,x,map__39593,map__39593__$1,ast,key,query,children__$1,map__39590,map__39590__$1,children))
,children__$1));
} else {
return G__39595__$1;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core.sequential_QMARK_(x))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (x,ast__$1,map__39593,map__39593__$1,ast,key,query,children__$1,map__39590,map__39590__$1,children){
return (function (p1__39588_SHARP_){
return (fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3(ast__$1,p1__39588_SHARP_,time) : fulcro.client.primitives.add_basis_time_STAR_.call(null,ast__$1,p1__39588_SHARP_,time));
});})(x,ast__$1,map__39593,map__39593__$1,ast,key,query,children__$1,map__39590,map__39590__$1,children))
,x):(fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.add_basis_time_STAR_.cljs$core$IFn$_invoke$arity$3(ast__$1,x,time) : fulcro.client.primitives.add_basis_time_STAR_.call(null,ast__$1,x,time)))], null);
});})(children__$1,map__39590,map__39590__$1,children))
)),children__$1),cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","time","fulcro.client.primitives/time",-138753010),time);
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(props,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","time","fulcro.client.primitives/time",-138753010),time);
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
var G__39598 = arguments.length;
switch (G__39598) {
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
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(ele,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","time","fulcro.client.primitives/time",-138753010),time);
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
var or__3922__auto__ = new cljs.core.Keyword("fulcro.client.primitives","time","fulcro.client.primitives/time",-138753010).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"unset","unset",-513298114);
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
return cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",-1440077198,null),null], null), null)),forms);
});
var split_on_symbol = (function fulcro$client$primitives$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with(cljs.core.complement(cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq(dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__39600 = split_on_static(dt__$1);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600,(0),null);
var vec__39603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600,(1),null);
var seq__39604 = cljs.core.seq(vec__39603);
var first__39605 = cljs.core.first(seq__39604);
var seq__39604__$1 = cljs.core.next(seq__39604);
var _ = first__39605;
var first__39605__$1 = cljs.core.first(seq__39604__$1);
var seq__39604__$2 = cljs.core.next(seq__39604__$1);
var sym = first__39605__$1;
var remaining = seq__39604__$2;
var post = vec__39603;
var dt_SINGLEQUOTE___$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(dt_SINGLEQUOTE_,pre);
if(cljs.core.seq(post)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,new cljs.core.Symbol(null,"field","field",338095027,null))){
var vec__39606 = cljs.core.split_at((2),remaining);
var field_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(1),null);
var G__39612 = cljs.core.seq(dt__$2);
var G__39613 = dt_SINGLEQUOTE___$1;
var G__39614 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.conj,cljs.core.vec(field_info));
dt__$1 = G__39612;
dt_SINGLEQUOTE_ = G__39613;
statics = G__39614;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__39609 = split_on_symbol(remaining);
var protocol_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39609,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39609,(1),null);
var G__39615 = cljs.core.seq(dt__$2);
var G__39616 = dt_SINGLEQUOTE___$1;
var G__39617 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),cljs.core.into,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__39615;
dt_SINGLEQUOTE_ = G__39616;
statics = G__39617;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__39618 = null;
var G__39619 = dt_SINGLEQUOTE___$1;
var G__39620 = statics;
dt__$1 = G__39618;
dt_SINGLEQUOTE_ = G__39619;
statics = G__39620;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dt","dt",-368444759),dt_SINGLEQUOTE_,new cljs.core.Keyword(null,"statics","statics",-1984882809),statics], null);
}
break;
}
});
fulcro.client.primitives.validate_statics = (function fulcro$client$primitives$validate_statics(dt){
var temp__5457__auto__ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["IQuery",null,"Ident",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39621_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39621_SHARP_)].join(''),/\//));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__5457__auto__)){
var invalid = temp__5457__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid)," protocol declaration must appear with `static`."].join('')));
} else {
return null;
}
});
fulcro.client.primitives.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",-1698724833,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"prev-props","prev-props",1081981230,null),new cljs.core.Symbol(null,"prev-state","prev-state",1365252518,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null)]);
fulcro.client.primitives.validate_sig = (function fulcro$client$primitives$validate_sig(p__39622){
var vec__39623 = p__39622;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39623,(0),null);
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39623,(1),null);
var method = vec__39623;
var sig_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.lifecycle_sigs,name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sig_SINGLEQUOTE_),cljs.core.count(sig))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid signature for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),", need ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig_SINGLEQUOTE_)].join('')),"\n","(= (count sig') (count sig))"].join('')));
}
});
fulcro.client.primitives.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reshape","reshape",1588089910),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),(function (p__39691){
var vec__39693 = p__39691;
var seq__39694 = cljs.core.seq(vec__39693);
var first__39695 = cljs.core.first(seq__39694);
var seq__39694__$1 = cljs.core.next(seq__39694);
var name = first__39695;
var first__39695__$1 = cljs.core.first(seq__39694__$1);
var seq__39694__$2 = cljs.core.next(seq__39694__$1);
var vec__39696 = first__39695__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39696,(0),null);
var args = vec__39696;
var body = seq__39694__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ret__39636__auto__","ret__39636__auto__",983600943,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null),null,(1),null)),(new cljs.core.List(null,"fulcro$state",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__39636__auto__","ret__39636__auto__",983600943,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),(function (p__39703){
var vec__39704 = p__39703;
var seq__39705 = cljs.core.seq(vec__39704);
var first__39706 = cljs.core.first(seq__39705);
var seq__39705__$1 = cljs.core.next(seq__39705);
var name = first__39706;
var first__39706__$1 = cljs.core.first(seq__39705__$1);
var seq__39705__$2 = cljs.core.next(seq__39705__$1);
var vec__39707 = first__39706__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39707,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39707,(1),null);
var args = vec__39707;
var body = seq__39705__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39637__auto__","this__39637__auto__",1523070617,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39638__auto__","next-props__39638__auto__",1876287019,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39637__auto__","this__39637__auto__",1523070617,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,next_props,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-next-props","fulcro.client.primitives/-next-props",-1113285751,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39638__auto__","next-props__39638__auto__",1876287019,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39637__auto__","this__39637__auto__",1523070617,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),(function (p__39714){
var vec__39715 = p__39714;
var seq__39716 = cljs.core.seq(vec__39715);
var first__39717 = cljs.core.first(seq__39716);
var seq__39716__$1 = cljs.core.next(seq__39716);
var name = first__39717;
var first__39717__$1 = cljs.core.first(seq__39716__$1);
var seq__39716__$2 = cljs.core.next(seq__39716__$1);
var vec__39718 = first__39717__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39718,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39718,(1),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39718,(2),null);
var args = vec__39718;
var body = seq__39716__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39642__auto__","next-props__39642__auto__",1579392915,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-state__39643__auto__","next-state__39643__auto__",995738285,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,next_props,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-next-props","fulcro.client.primitives/-next-props",-1113285751,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39642__auto__","next-props__39642__auto__",1579392915,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,next_state,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","or","clojure.core/or",1106799215,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-state__39643__auto__","next-state__39643__auto__",995738285,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$pendingState",null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-state__39643__auto__","next-state__39643__auto__",995738285,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$state",null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__39644__auto__","ret__39644__auto__",567724325,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when","clojure.core/when",21610388,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","Ident","fulcro.client.primitives/Ident",-1049116985,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"ident__39645__auto__","ident__39645__auto__",-2022064434,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-48408839,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","props","fulcro.client.primitives/props",-525522558,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-ident__39646__auto__","next-ident__39646__auto__",609914732,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-48408839,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,next_props,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when","clojure.core/when",21610388,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","not=","clojure.core/not=",646247579,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ident__39645__auto__","ident__39645__auto__",-2022064434,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-ident__39646__auto__","next-ident__39646__auto__",609914732,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"idxr__39647__auto__","idxr__39647__auto__",-309264237,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-reconciler","fulcro.client.primitives/get-reconciler",394660282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"config","config",994861415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when-not","clojure.core/when-not",-516174277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"idxr__39647__auto__","idxr__39647__auto__",-309264237,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","swap!","clojure.core/swap!",-1898658849,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"idxr__39647__auto__","idxr__39647__auto__",-309264237,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"indexes__39648__auto__","indexes__39648__auto__",1796371717,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->","clojure.core/->",1452757553,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexes__39648__auto__","indexes__39648__auto__",1796371717,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","update-in","clojure.core/update-in",2079870444,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ident__39645__auto__","ident__39645__auto__",-2022064434,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","disj","clojure.core/disj",1848745359,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","update-in","clojure.core/update-in",2079870444,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-ident__39646__auto__","next-ident__39646__auto__",609914732,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fnil","clojure.core/fnil",653784127,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","conj","clojure.core/conj",-357857389,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","merge-pending-props!","fulcro.client.primitives/merge-pending-props!",-1164252098,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","merge-pending-state!","fulcro.client.primitives/merge-pending-state!",-1862657483,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39641__auto__","this__39641__auto__",154640486,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__39644__auto__","ret__39644__auto__",567724325,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),(function (p__39741){
var vec__39742 = p__39741;
var seq__39743 = cljs.core.seq(vec__39742);
var first__39744 = cljs.core.first(seq__39743);
var seq__39743__$1 = cljs.core.next(seq__39743);
var name = first__39744;
var first__39744__$1 = cljs.core.first(seq__39743__$1);
var seq__39743__$2 = cljs.core.next(seq__39743__$1);
var vec__39745 = first__39744__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39745,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39745,(1),null);
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39745,(2),null);
var args = vec__39745;
var body = seq__39743__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39649__auto__","this__39649__auto__",-1766104733,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prev-props__39650__auto__","prev-props__39650__auto__",1346359839,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"prev-state__39651__auto__","prev-state__39651__auto__",-1109500538,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39649__auto__","this__39649__auto__",-1766104733,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,prev_props,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-prev-props","fulcro.client.primitives/-prev-props",-1052362726,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prev-props__39650__auto__","prev-props__39650__auto__",1346359839,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39649__auto__","this__39649__auto__",-1766104733,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,prev_state,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prev-state__39651__auto__","prev-state__39651__auto__",-1109500538,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$previousState",null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","clear-prev-props!","fulcro.client.primitives/clear-prev-props!",-2122163606,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39649__auto__","this__39649__auto__",-1766104733,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),(function (p__39765){
var vec__39766 = p__39765;
var seq__39767 = cljs.core.seq(vec__39766);
var first__39768 = cljs.core.first(seq__39767);
var seq__39767__$1 = cljs.core.next(seq__39767);
var name = first__39768;
var first__39768__$1 = cljs.core.first(seq__39767__$1);
var seq__39767__$2 = cljs.core.next(seq__39767__$1);
var vec__39769 = first__39768__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39769,(0),null);
var args = vec__39769;
var body = seq__39767__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39654__auto__","this__39654__auto__",600407872,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39654__auto__","this__39654__auto__",600407872,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"reconciler__39655__auto__","reconciler__39655__auto__",-440618292,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-reconciler","fulcro.client.primitives/get-reconciler",394660282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39654__auto__","this__39654__auto__",600407872,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39656__auto__","indexer__39656__auto__",-1494162821,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reconciler__39655__auto__","reconciler__39655__auto__",-440618292,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"config","config",994861415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when-not","clojure.core/when-not",-516174277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39656__auto__","indexer__39656__auto__",-1494162821,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.impl.protocols","index-component!","fulcro.client.impl.protocols/index-component!",-573197644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39656__auto__","indexer__39656__auto__",-1494162821,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39654__auto__","this__39654__auto__",600407872,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),body], 0)))),null,(1),null))], 0))));
}),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",-1698724833,null),(function (p__39783){
var vec__39785 = p__39783;
var seq__39786 = cljs.core.seq(vec__39785);
var first__39787 = cljs.core.first(seq__39786);
var seq__39786__$1 = cljs.core.next(seq__39786);
var name = first__39787;
var first__39787__$1 = cljs.core.first(seq__39786__$1);
var seq__39786__$2 = cljs.core.next(seq__39786__$1);
var vec__39788 = first__39787__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39788,(0),null);
var args = vec__39788;
var body = seq__39786__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39657__auto__","this__39657__auto__",-1281836056,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39657__auto__","this__39657__auto__",-1281836056,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"reconciler__39658__auto__","reconciler__39658__auto__",-1654580689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-reconciler","fulcro.client.primitives/get-reconciler",394660282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39657__auto__","this__39657__auto__",-1281836056,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lifecycle__39659__auto__","lifecycle__39659__auto__",546682826,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reconciler__39658__auto__","reconciler__39658__auto__",-1654580689,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"config","config",994861415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39657__auto__","this__39657__auto__",-1281836056,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$mounted",null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when-not","clojure.core/when-not",-516174277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lifecycle__39659__auto__","lifecycle__39659__auto__",546682826,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"lifecycle__39659__auto__","lifecycle__39659__auto__",546682826,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39657__auto__","this__39657__auto__",-1281836056,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"mount","mount",-1560582470),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),body], 0)))),null,(1),null))], 0))));
}),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),(function (p__39800){
var vec__39802 = p__39800;
var seq__39803 = cljs.core.seq(vec__39802);
var first__39804 = cljs.core.first(seq__39803);
var seq__39803__$1 = cljs.core.next(seq__39803);
var name = first__39804;
var first__39804__$1 = cljs.core.first(seq__39803__$1);
var seq__39803__$2 = cljs.core.next(seq__39803__$1);
var vec__39805 = first__39804__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39805,(0),null);
var args = vec__39805;
var body = seq__39803__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39660__auto__","this__39660__auto__",-674862847,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39660__auto__","this__39660__auto__",-674862847,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"reconciler__39661__auto__","reconciler__39661__auto__",2082999401,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-reconciler","fulcro.client.primitives/get-reconciler",394660282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39660__auto__","this__39660__auto__",-674862847,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lifecycle__39662__auto__","lifecycle__39662__auto__",-796553624,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reconciler__39661__auto__","reconciler__39661__auto__",2082999401,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"config","config",994861415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cfg__39663__auto__","cfg__39663__auto__",-1230793310,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"config","config",994861415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reconciler__39661__auto__","reconciler__39661__auto__",2082999401,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__39665__auto__","st__39665__auto__",-1634915728,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"state","state",-1988618099),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cfg__39663__auto__","cfg__39663__auto__",-1230793310,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39666__auto__","indexer__39666__auto__",69936576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cfg__39663__auto__","cfg__39663__auto__",-1230793310,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39660__auto__","this__39660__auto__",-674862847,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$mounted",null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when","clojure.core/when",21610388,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","and","clojure.core/and",-173545115,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__39665__auto__","st__39665__auto__",-1634915728,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__39665__auto__","st__39665__auto__",-1634915728,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39660__auto__","this__39660__auto__",-674862847,null),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","swap!","clojure.core/swap!",-1898658849,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__39665__auto__","st__39665__auto__",-1634915728,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","update-in","clojure.core/update-in",2079870444,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","dissoc","clojure.core/dissoc",-334178853,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39660__auto__","this__39660__auto__",-674862847,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when-not","clojure.core/when-not",-516174277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"lifecycle__39662__auto__","lifecycle__39662__auto__",-796553624,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"lifecycle__39662__auto__","lifecycle__39662__auto__",-796553624,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39660__auto__","this__39660__auto__",-674862847,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"unmount","unmount",-1779083333),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when-not","clojure.core/when-not",-516174277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39666__auto__","indexer__39666__auto__",69936576,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.impl.protocols","drop-component!","fulcro.client.impl.protocols/drop-component!",-1384303178,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39666__auto__","indexer__39666__auto__",69936576,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39660__auto__","this__39660__auto__",-674862847,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),body], 0)))),null,(1),null))], 0))));
}),new cljs.core.Symbol(null,"render","render",232498073,null),(function (p__39817){
var vec__39818 = p__39817;
var seq__39819 = cljs.core.seq(vec__39818);
var first__39820 = cljs.core.first(seq__39819);
var seq__39819__$1 = cljs.core.next(seq__39819);
var name = first__39820;
var first__39820__$1 = cljs.core.first(seq__39819__$1);
var seq__39819__$2 = cljs.core.next(seq__39819__$1);
var vec__39821 = first__39820__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39821,(0),null);
var args = vec__39821;
var body = seq__39819__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39668__auto__","this__39668__auto__",-1961224563,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39668__auto__","this__39668__auto__",-1961224563,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","binding","clojure.core/binding",2144622993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","*reconciler*","fulcro.client.primitives/*reconciler*",-1389819093,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-reconciler","fulcro.client.primitives/get-reconciler",394660282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39668__auto__","this__39668__auto__",-1961224563,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","*depth*","fulcro.client.primitives/*depth*",-1043647943,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","inc","clojure.core/inc",-977605856,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","depth","fulcro.client.primitives/depth",798240003,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39668__auto__","this__39668__auto__",-1961224563,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","*shared*","fulcro.client.primitives/*shared*",399764910,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","shared","fulcro.client.primitives/shared",-1589508494,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39668__auto__","this__39668__auto__",-1961224563,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","*instrument*","fulcro.client.primitives/*instrument*",1628425165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","instrument","fulcro.client.primitives/instrument",-1943731993,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39668__auto__","this__39668__auto__",-1961224563,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","*parent*","fulcro.client.primitives/*parent*",-1707213508,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39668__auto__","this__39668__auto__",-1961224563,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
})], null),new cljs.core.Keyword(null,"defaults","defaults",976027214),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-state__39673__auto__","next-state__39673__auto__",1875299379,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","*blindly-render*","fulcro.client.primitives/*blindly-render*",229605902,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"next-children__39674__auto__","next-children__39674__auto__",-2032398127,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-children","fulcro.client.primitives/-children",-1506977941,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$value",null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","cond->","clojure.core/cond->",-145265574,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","FulcroProps","fulcro.client.primitives/FulcroProps",1793097754,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","unwrap","fulcro.client.primitives/unwrap",-1832736339,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"current-props__39675__auto__","current-props__39675__auto__",-812425141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","props","fulcro.client.primitives/props",-525522558,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props-stale?__39676__auto__","next-props-stale?__39676__auto__",1640838798,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core",">","clojure.core/>",1984489172,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-basis-time","fulcro.client.primitives/get-basis-time",-404242215,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"current-props__39675__auto__","current-props__39675__auto__",-812425141,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-basis-time","fulcro.client.primitives/get-basis-time",-404242215,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"props-changed?__39677__auto__","props-changed?__39677__auto__",920264319,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","and","clojure.core/and",-173545115,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props-stale?__39676__auto__","next-props-stale?__39676__auto__",1640838798,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","not=","clojure.core/not=",646247579,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"current-props__39675__auto__","current-props__39675__auto__",-812425141,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"state-changed?__39678__auto__","state-changed?__39678__auto__",503400528,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","and","clojure.core/and",-173545115,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-state","-state",1439972041,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","not=","clojure.core/not=",646247579,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-state","-state",1439972041,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$state",null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-state__39673__auto__","next-state__39673__auto__",1875299379,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$state",null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children-changed?__39679__auto__","children-changed?__39679__auto__",120235275,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","not=","clojure.core/not=",646247579,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-props","fulcro.client.primitives/-props",1729165934,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-children","fulcro.client.primitives/-children",-1506977941,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-children__39674__auto__","next-children__39674__auto__",-2032398127,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","or","clojure.core/or",1106799215,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"props-changed?__39677__auto__","props-changed?__39677__auto__",920264319,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"state-changed?__39678__auto__","state-changed?__39678__auto__",503400528,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children-changed?__39679__auto__","children-changed?__39679__auto__",120235275,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-state__39673__auto__","next-state__39673__auto__",1875299379,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when","clojure.core/when",21610388,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","Ident","fulcro.client.primitives/Ident",-1049116985,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"ident__39680__auto__","ident__39680__auto__",-40669310,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-48408839,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","props","fulcro.client.primitives/props",-525522558,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-ident__39681__auto__","next-ident__39681__auto__",-1123125697,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","ident","fulcro.client.primitives/ident",-48408839,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-next-props","fulcro.client.primitives/-next-props",-1113285751,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-props__39672__auto__","next-props__39672__auto__",1258217359,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when","clojure.core/when",21610388,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","not=","clojure.core/not=",646247579,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ident__39680__auto__","ident__39680__auto__",-40669310,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"next-ident__39681__auto__","next-ident__39681__auto__",-1123125697,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"idxr__39682__auto__","idxr__39682__auto__",-615156887,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-reconciler","fulcro.client.primitives/get-reconciler",394660282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"config","config",994861415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when-not","clojure.core/when-not",-516174277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"idxr__39682__auto__","idxr__39682__auto__",-615156887,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","swap!","clojure.core/swap!",-1898658849,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"idxr__39682__auto__","idxr__39682__auto__",-615156887,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"indexes__39683__auto__","indexes__39683__auto__",-473306533,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","->","clojure.core/->",1452757553,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexes__39683__auto__","indexes__39683__auto__",-473306533,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","update-in","clojure.core/update-in",2079870444,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ident__39680__auto__","ident__39680__auto__",-40669310,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","disj","clojure.core/disj",1848745359,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","update-in","clojure.core/update-in",2079870444,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"next-ident__39681__auto__","next-ident__39681__auto__",-1123125697,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fnil","clojure.core/fnil",653784127,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","conj","clojure.core/conj",-357857389,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","merge-pending-props!","fulcro.client.primitives/merge-pending-props!",-1164252098,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","merge-pending-state!","fulcro.client.primitives/merge-pending-state!",-1862657483,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prev-props__39684__auto__","prev-props__39684__auto__",664115568,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"prev-state__39685__auto__","prev-state__39685__auto__",1097367370,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","clear-prev-props!","fulcro.client.primitives/clear-prev-props!",-2122163606,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39686__auto__","indexer__39686__auto__",1120095601,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-reconciler","fulcro.client.primitives/get-reconciler",394660282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"config","config",994861415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when-not","clojure.core/when-not",-516174277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39686__auto__","indexer__39686__auto__",1120095601,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.impl.protocols","index-component!","fulcro.client.impl.protocols/index-component!",-573197644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39686__auto__","indexer__39686__auto__",1120095601,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"componentDidMount","componentDidMount",-1698724833,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$mounted",null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"r__39687__auto__","r__39687__auto__",-1665452406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","get-reconciler","fulcro.client.primitives/get-reconciler",394660282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"cfg__39688__auto__","cfg__39688__auto__",641411098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"config","config",994861415),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__39687__auto__","r__39687__auto__",-1665452406,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__39689__auto__","st__39689__auto__",1205910955,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"state","state",-1988618099),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cfg__39688__auto__","cfg__39688__auto__",641411098,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39686__auto__","indexer__39686__auto__",1120095601,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cfg__39688__auto__","cfg__39688__auto__",641411098,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"fulcro$mounted",null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when","clojure.core/when",21610388,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","and","clojure.core/and",-173545115,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","not","clojure.core/not",2621194,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__39689__auto__","st__39689__auto__",1205910955,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__39689__auto__","st__39689__auto__",1205910955,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","swap!","clojure.core/swap!",-1898658849,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__39689__auto__","st__39689__auto__",1205910955,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","update-in","clojure.core/update-in",2079870444,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","dissoc","clojure.core/dissoc",-334178853,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when-not","clojure.core/when-not",-516174277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39686__auto__","indexer__39686__auto__",1120095601,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.impl.protocols","drop-component!","fulcro.client.impl.protocols/drop-component!",-1384303178,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"indexer__39686__auto__","indexer__39686__auto__",1120095601,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__39671__auto__","this__39671__auto__",502486796,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))))], null);
fulcro.client.primitives.reshape = (function fulcro$client$primitives$reshape(dt,p__40158){
var map__40159 = p__40158;
var map__40159__$1 = ((((!((map__40159 == null)))?(((((map__40159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40159):map__40159);
var reshape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40159__$1,new cljs.core.Keyword(null,"reshape","reshape",1588089910));
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40159__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var reshape_STAR_ = ((function (map__40159,map__40159__$1,reshape,defaults){
return (function fulcro$client$primitives$reshape_$_reshape_STAR_(x){
if(((cljs.core.sequential_QMARK_(x)) && (cljs.core.contains_QMARK_(reshape,cljs.core.first(x))))){
var reshapef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reshape,cljs.core.first(x));
fulcro.client.primitives.validate_sig(x);

return (reshapef.cljs$core$IFn$_invoke$arity$1 ? reshapef.cljs$core$IFn$_invoke$arity$1(x) : reshapef.call(null,x));
} else {
return x;
}
});})(map__40159,map__40159__$1,reshape,defaults))
;
var add_defaults_step = ((function (map__40159,map__40159__$1,reshape,defaults){
return (function fulcro$client$primitives$reshape_$_add_defaults_step(ret,p__40184){
var vec__40186 = p__40184;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40186,(0),null);
var impl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40186,(1),null);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([name]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,ret))))){
var vec__40191 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null)),ret);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191,(0),null);
var vec__40194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191,(1),null);
var seq__40195 = cljs.core.seq(vec__40194);
var first__40196 = cljs.core.first(seq__40195);
var seq__40195__$1 = cljs.core.next(seq__40195);
var p = first__40196;
var after = seq__40195__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(before),p,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(name,impl)], 0)),after);
} else {
return ret;
}
});})(map__40159,map__40159__$1,reshape,defaults))
;
var add_defaults = ((function (map__40159,map__40159__$1,reshape,defaults){
return (function fulcro$client$primitives$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_defaults_step,dt__$1,defaults);
});})(map__40159,map__40159__$1,reshape,defaults))
;
var add_object_protocol = ((function (map__40159,map__40159__$1,reshape,defaults){
return (function fulcro$client$primitives$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null),dt__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dt__$1,new cljs.core.Symbol(null,"Object","Object",61210754,null));
} else {
return dt__$1;
}
});})(map__40159,map__40159__$1,reshape,defaults))
;
return add_defaults(add_object_protocol(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reshape_STAR_,dt))));
});
fulcro.client.primitives.defui_STAR_ = (function fulcro$client$primitives$defui_STAR_(var_args){
var G__40245 = arguments.length;
switch (G__40245) {
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
var field_set_BANG_ = (function fulcro$client$primitives$field_set_BANG_(obj,p__40256){
var vec__40257 = p__40256;
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)].join('')),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,value,null,(1),null))], 0))));
});
var docstring = ((typeof cljs.core.first(forms) === 'string')?cljs.core.first(forms):null);
var forms__$1 = (function (){var G__40267 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest(G__40267);
} else {
return G__40267;
}
})();
var map__40266 = fulcro.client.primitives.collect_statics(forms__$1);
var map__40266__$1 = ((((!((map__40266 == null)))?(((((map__40266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40266):map__40266);
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40266__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var statics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40266__$1,new cljs.core.Keyword(null,"statics","statics",-1984882809));
var _ = fulcro.client.primitives.validate_statics(dt);
var fqn = (cljs.core.truth_(env)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')):name);
var ctor = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor","@nocollapse"], null)], null),cljs.core.meta(name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null):null)], 0))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__40232__auto__","this__40232__auto__",-735811765,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","React.Component","js/React.Component",752301916,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__40232__auto__","this__40232__auto__",-735811765,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","if-not","clojure.core/if-not",-2100576274,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-initLocalState",".-initLocalState",-1875308467,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"this__40232__auto__","this__40232__auto__",-735811765,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"fulcro/client/primitives.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,521,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,70,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,521,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,75,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","js","fulcro.client.primitives/js",1733013126,null),null,(1),null))], 0)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-state",".-state",2145135971,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__40232__auto__","this__40232__auto__",-735811765,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".initLocalState",".initLocalState",-104173886,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"this__40232__auto__","this__40232__auto__",-735811765,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"fulcro/client/primitives.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,522,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,79,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,522,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,84,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","js","fulcro.client.primitives/js",1733013126,null),null,(1),null))], 0)))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-state",".-state",2145135971,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__40232__auto__","this__40232__auto__",-735811765,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__40232__auto__","this__40232__auto__",-735811765,null),null,(1),null))], 0)))),null,(1),null))], 0))));
var set_react_proto_BANG_ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("goog.object","clone","goog.object/clone",-508199474,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","React.Component.prototype","js/React.Component.prototype",259217051,null),null,(1),null))))),null,(1),null))], 0))));
var ctor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","when-not","clojure.core/when-not",-516174277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ctor,null,(1),null)),(new cljs.core.List(null,set_react_proto_BANG_,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,ctor,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,set_react_proto_BANG_,null,(1),null))], 0)))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,ctor__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives.reshape(dt,fulcro.client.primitives.reshape_map)], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-prototype","fulcro.client.primitives/-prototype",-2134858131,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-constructor","fulcro.client.primitives/-constructor",-1610906763,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,name,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-prototype","fulcro.client.primitives/-prototype",-2134858131,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-constructor","fulcro.client.primitives/-constructor",-1610906763,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","-displayName","fulcro.client.primitives/-displayName",-157445350,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,display_name,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-fulcro$isComponent",".-fulcro$isComponent",-876583754,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"fulcro/client/primitives.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,542,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,39,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,542,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,66,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.primitives","js","fulcro.client.primitives/js",1733013126,null),null,(1),null))], 0)))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__40266,map__40266__$1,dt,statics,_,fqn,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__40235_SHARP_){
return field_set_BANG_(name,p1__40235_SHARP_);
});})(docstring,forms__$1,map__40266,map__40266__$1,dt,statics,_,fqn,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(statics)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__40266,map__40266__$1,dt,statics,_,fqn,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__40236_SHARP_){
var G__40295 = p1__40236_SHARP_;
if((p1__40236_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__40295,cljs.core.assoc,new cljs.core.Keyword(null,"static","static",1214358571),true);
} else {
return G__40295;
}
});})(docstring,forms__$1,map__40266,map__40266__$1,dt,statics,_,fqn,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics)], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join(''),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__40237__auto__","this__40237__auto__",812926793,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__40238__auto__","writer__40238__auto__",-804433921,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"opt__40239__auto__","opt__40239__auto__",488306690,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__40238__auto__","writer__40238__auto__",-804433921,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join(''),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

fulcro.client.primitives.defui_STAR_.cljs$lang$maxFixedArity = 3;

fulcro.client.primitives.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
fulcro.client.primitives._STAR_raf_STAR_ = null;
fulcro.client.primitives._STAR_reconciler_STAR_ = null;
fulcro.client.primitives._STAR_parent_STAR_ = null;
fulcro.client.primitives._STAR_blindly_render_STAR_ = false;
fulcro.client.primitives._STAR_shared_STAR_ = null;
fulcro.client.primitives._STAR_instrument_STAR_ = null;
fulcro.client.primitives._STAR_depth_STAR_ = (0);
fulcro.client.primitives.compute_react_key = (function fulcro$client$primitives$compute_react_key(cl,props){
var temp__5455__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5455__auto__)){
var rk = temp__5455__auto__;
return rk;
} else {
var temp__5455__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
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
var or__3922__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var G__40417 = c.props;
var G__40418 = k;
return goog.object.get(G__40417,G__40418);
});

/**
* @constructor
*/
fulcro.client.primitives.FulcroProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
});

fulcro.client.primitives.FulcroProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

fulcro.client.primitives.FulcroProps.cljs$lang$type = true;

fulcro.client.primitives.FulcroProps.cljs$lang$ctorStr = "fulcro.client.primitives/FulcroProps";

fulcro.client.primitives.FulcroProps.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"fulcro.client.primitives/FulcroProps");
});

/**
 * Positional factory function for fulcro.client.primitives/FulcroProps.
 */
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
var G__40447 = c.props;
var G__40448 = k;
var G__40449 = v;
return goog.object.set(G__40447,G__40448,G__40449);
});
/**
 * Returns true if x is a reconciler.
 */
fulcro.client.primitives.reconciler_QMARK_ = (function fulcro$client$primitives$reconciler_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro$client$impl$protocols$IReconciler$)))){
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

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
fulcro.client.primitives.sift_idents = (function fulcro$client$primitives$sift_idents(res){
var map__40470 = cljs.core.group_by((function (p1__40467_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__40467_SHARP_));
}),res);
var map__40470__$1 = ((((!((map__40470 == null)))?(((((map__40470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40470):map__40470);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40470__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40470__$1,false);
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
var G__40495 = arguments.length;
switch (G__40495) {
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
var G__40512 = arguments.length;
switch (G__40512) {
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
var G__40544 = c.state;
var G__40545 = "fulcro$prev$value";
return goog.object.remove(G__40544,G__40545);
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
var G__40571 = arguments.length;
switch (G__40571) {
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

var cst = ((((!((component == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$ILocalState$))))?true:false):false))?fulcro.client.primitives._get_state(component):(function (){var temp__5457__auto__ = component.state;
if(cljs.core.truth_(temp__5457__auto__)){
var state = temp__5457__auto__;
var or__3922__auto__ = goog.object.get(state,"fulcro$pendingState");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var G__40598 = fulcro.client.primitives.parent(c__$1);
c__$1 = G__40598;
continue;

}
}
break;
}
});
/**
 * Get the ident for a mounted component OR using a component class.
 * 
 *   That arity-2 will return the ident using the supplied props map.
 * 
 *   The single-arity version should only be used with a mounted component (e.g. `this` from `render`), and will derive the
 *   props that were sent to it most recently.
 */
fulcro.client.primitives.get_ident = (function fulcro$client$primitives$get_ident(var_args){
var G__40602 = arguments.length;
switch (G__40602) {
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

var temp__5455__auto__ = fulcro.client.primitives.props(x);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
return fulcro.client.primitives.ident(x,m);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),849], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-ident was invoked on component with nil props (this could mean it wasn't yet mounted): ",x], 0));
}catch (e40607){if((e40607 instanceof Error)){
var e__33343__auto__ = e40607;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),849], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e40607;

}
}}
});

fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2 = (function (class$,props){
if(((!((class$ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false)){
var id = fulcro.client.primitives.ident(class$,props);
if(!(fulcro.util.ident_QMARK_(id))){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),862], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-ident returned an invalid ident for class:",class$], 0));
}catch (e40613){if((e40613 instanceof Error)){
var e__33343__auto___40624 = e40613;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),862], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___40624], 0));
} else {
throw e40613;

}
}} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),cljs.core.second(id))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id),null], null);
} else {
return id;
}
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),864], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-ident called with something that is either not a class or does not implement ident: ",class$], 0));
}catch (e40614){if((e40614 instanceof Error)){
var e__33343__auto__ = e40614;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),864], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e40614;

}
}}
});

fulcro.client.primitives.get_ident.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string version of the given react component's name.
 */
fulcro.client.primitives.component_name = (function fulcro$client$primitives$component_name(class$){
return class$.displayName;
});
/**
 * Returns a string ID for the query of the given class with qualifier
 */
fulcro.client.primitives.query_id = (function fulcro$client$primitives$query_id(class$,qualifier){
if((class$ == null)){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),876], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Query ID received no class (if you see this warning, it probably means metadata was lost on your query)",cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY)], 0));
}catch (e40637){if((e40637 instanceof Error)){
var e__33343__auto__ = e40637;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),876], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e40637;

}
}} else {
var temp__5457__auto__ = fulcro.client.primitives.component_name(class$);
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
var G__40653 = arguments.length;
switch (G__40653) {
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

fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__40658){
var map__40659 = p__40658;
var map__40659__$1 = ((((!((map__40659 == null)))?(((((map__40659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40659):map__40659);
var opts = map__40659__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40659__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40659__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40659__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
var qualifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40659__$1,new cljs.core.Keyword(null,"qualifier","qualifier",125841738));
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return cljs.core.with_meta(((function (map__40659,map__40659__$1,opts,validator,keyfn,instrument_QMARK_,qualifier){
return (function() { 
var fulcro$client$primitives$element_factory__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.client.primitives._STAR_instrument_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return instrument_QMARK_;
} else {
return and__3911__auto__;
}
})())){
var G__40663 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null);
return (fulcro.client.primitives._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__40663) : fulcro.client.primitives._STAR_instrument_STAR_.call(null,G__40663));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):fulcro.client.primitives.compute_react_key(class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__40668 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40668)].join('');
} else {
return G__40668;
}
})();
var t = ((!((fulcro.client.primitives._STAR_reconciler_STAR_ == null)))?fulcro.client.primitives.get_current_time(fulcro.client.primitives._STAR_reconciler_STAR_):(0));
return fulcro.client.primitives.create_element(class$,({"fulcro$reactKey": key, "fulcro$queryid": fulcro.client.primitives.query_id(class$,qualifier), "key": key, "ref": ref__$1, "fulcro$reconciler": fulcro.client.primitives._STAR_reconciler_STAR_, "fulcro$instrument": fulcro.client.primitives._STAR_instrument_STAR_, "fulcro$parent": fulcro.client.primitives._STAR_parent_STAR_, "fulcro$depth": fulcro.client.primitives._STAR_depth_STAR_, "fulcro$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "fulcro$value": fulcro.client.primitives.om_props(props,t), "fulcro$shared": fulcro.client.primitives._STAR_shared_STAR_}),(function (){var or__3922__auto__ = fulcro.util.force_children(children);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}
};
var fulcro$client$primitives$element_factory = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__40688__i = 0, G__40688__a = new Array(arguments.length -  1);
while (G__40688__i < G__40688__a.length) {G__40688__a[G__40688__i] = arguments[G__40688__i + 1]; ++G__40688__i;}
  children = new cljs.core.IndexedSeq(G__40688__a,0,null);
} 
return fulcro$client$primitives$element_factory__delegate.call(this,props,children);};
fulcro$client$primitives$element_factory.cljs$lang$maxFixedArity = 1;
fulcro$client$primitives$element_factory.cljs$lang$applyTo = (function (arglist__40689){
var props = cljs.core.first(arglist__40689);
var children = cljs.core.rest(arglist__40689);
return fulcro$client$primitives$element_factory__delegate(props,children);
});
fulcro$client$primitives$element_factory.cljs$core$IFn$_invoke$arity$variadic = fulcro$client$primitives$element_factory__delegate;
return fulcro$client$primitives$element_factory;
})()
;})(map__40659,map__40659__$1,opts,validator,keyfn,instrument_QMARK_,qualifier))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),fulcro.client.primitives.query_id(class$,qualifier),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),qualifier], null));
});

fulcro.client.primitives.factory.cljs$lang$maxFixedArity = 2;

/**
 * Takes a state map that may contain normalized queries and a query ID. Returns the stored query or nil.
 */
fulcro.client.primitives.denormalize_query = (function fulcro$client$primitives$denormalize_query(state_map,ID){
var get_stored_query = (function (id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),id,new cljs.core.Keyword(null,"query","query",-1288509510)], null));
});
var temp__5457__auto__ = get_stored_query(ID);
if(cljs.core.truth_(temp__5457__auto__)){
var normalized_query = temp__5457__auto__;
return clojure.walk.prewalk(((function (normalized_query,temp__5457__auto__,get_stored_query){
return (function (ele){
var temp__5455__auto__ = (function (){var and__3911__auto__ = typeof ele === 'string';
if(and__3911__auto__){
return get_stored_query(ele);
} else {
return and__3911__auto__;
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
fulcro.client.primitives.get_query_by_id = (function fulcro$client$primitives$get_query_by_id(state_map,class$,queryid){
var query = (function (){var or__3922__auto__ = fulcro.client.primitives.denormalize_query(state_map,queryid);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return fulcro.client.primitives.get_static_query(class$);
}
})();
return cljs.core.with_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid], null));
});
fulcro.client.primitives.is_factory_QMARK_ = (function fulcro$client$primitives$is_factory_QMARK_(class_or_factory){
return ((cljs.core.fn_QMARK_(class_or_factory)) && (cljs.core.contains_QMARK_(cljs.core.meta(class_or_factory),new cljs.core.Keyword(null,"qualifier","qualifier",125841738))));
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
var G__40721 = arguments.length;
switch (G__40721) {
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
var _STAR_query_state_STAR_40722 = fulcro.client.primitives._STAR_query_state_STAR_;
fulcro.client.primitives._STAR_query_state_STAR_ = state_map;

try{var class$ = (cljs.core.truth_(fulcro.client.primitives.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):((fulcro.client.primitives.component_QMARK_(class_or_factory))?fulcro.client.primitives.react_type(class_or_factory):class_or_factory
));
var qualifier = (cljs.core.truth_(fulcro.client.primitives.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"qualifier","qualifier",125841738).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):null);
var queryid = ((fulcro.client.primitives.component_QMARK_(class_or_factory))?fulcro.client.primitives.get_query_id(class_or_factory):fulcro.client.primitives.query_id(class$,qualifier));
if(cljs.core.truth_((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return fulcro.client.primitives.has_query_QMARK_(class$);
} else {
return and__3911__auto__;
}
})())){
return fulcro.client.primitives.get_query_by_id(state_map,class$,queryid);
} else {
return null;
}
}finally {fulcro.client.primitives._STAR_query_state_STAR_ = _STAR_query_state_STAR_40722;
}});

fulcro.client.primitives.get_query.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.link_element = (function fulcro$client$primitives$link_element(element){
return clojure.walk.prewalk((function fulcro$client$primitives$link_element_$_link_element_helper(ele){
var map__40724 = cljs.core.meta(ele);
var map__40724__$1 = ((((!((map__40724 == null)))?(((((map__40724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40724):map__40724);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40724__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
if(cljs.core.truth_(queryid)){
return queryid;
} else {
return ele;
}
}),element);
});
fulcro.client.primitives.deep_merge = (function fulcro$client$primitives$deep_merge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40732 = arguments.length;
var i__4500__auto___40733 = (0);
while(true){
if((i__4500__auto___40733 < len__4499__auto___40732)){
args__4502__auto__.push((arguments[i__4500__auto___40733]));

var G__40734 = (i__4500__auto___40733 + (1));
i__4500__auto___40733 = G__40734;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,fulcro.client.primitives.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

fulcro.client.primitives.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.primitives.deep_merge.cljs$lang$applyTo = (function (seq40728){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40728));
});

/**
 * Determines if there are query elements in the present query that need to be normalized as well. If so, it does so.
 *   Returns the new state map.
 */
fulcro.client.primitives.normalize_query_elements = (function fulcro$client$primitives$normalize_query_elements(state_map,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function fulcro$client$primitives$normalize_query_elements_$_normalize_query_elements_reducer(state,ele){
var parameterized_QMARK_ = cljs.core.seq_QMARK_(ele);
var raw_element = ((parameterized_QMARK_)?cljs.core.first(ele):ele);
if(fulcro.util.union_QMARK_(raw_element)){
var union_alternates = cljs.core.first(cljs.core.vals(raw_element));
var normalized_union_alternates = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.link_element,union_alternates));
var union_query_id = new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates));
if(cljs.core.truth_(union_query_id)){
} else {
throw (new Error(["Assert failed: ","Union query has an ID. Did you use extended get-query?","\n","union-query-id"].join('')));
}

return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),cljs.core.PersistentArrayMap.createAsIfByAssoc([union_query_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),normalized_union_alternates,new cljs.core.Keyword(null,"id","id",-1388402092),union_query_id], null)])], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (union_alternates,normalized_union_alternates,union_query_id,parameterized_QMARK_,raw_element){
return (function fulcro$client$primitives$normalize_query_elements_$_normalize_query_elements_reducer_$_normalize_union_reducer(s,p__40735){
var vec__40736 = p__40735;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40736,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40736,(1),null);
return (fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2(s,subquery) : fulcro.client.primitives.normalize_query.call(null,s,subquery));
});})(union_alternates,normalized_union_alternates,union_query_id,parameterized_QMARK_,raw_element))
,state,union_alternates)], 0));
} else {
if(cljs.core.truth_(fulcro.util.join_QMARK_(raw_element))){
var G__40739 = state;
var G__40740 = fulcro.util.join_value(raw_element);
return (fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.normalize_query.cljs$core$IFn$_invoke$arity$2(G__40739,G__40740) : fulcro.client.primitives.normalize_query.call(null,G__40739,G__40740));
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
var new_state__$1 = (((new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249).cljs$core$IFn$_invoke$arity$1(new_state) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),cljs.core.PersistentArrayMap.EMPTY):new_state);
var top_query = fulcro.client.primitives.link_query(query);
var temp__5455__auto__ = (function (){var G__40741 = query;
var G__40741__$1 = (((G__40741 == null))?null:cljs.core.meta(G__40741));
if((G__40741__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__40741__$1);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var queryid = temp__5455__auto__;
return fulcro.client.primitives.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),cljs.core.PersistentArrayMap.createAsIfByAssoc([queryid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),top_query,new cljs.core.Keyword(null,"id","id",-1388402092),queryid], null)])], null),new_state__$1], 0));
} else {
return new_state__$1;
}
});
/**
 * Put a query in app state.
 *   NOTE: Indexes must be rebuilt after setting a query, so this function should primarily be used to build
 *   up an initial app state.
 */
fulcro.client.primitives.set_query_STAR_ = (function fulcro$client$primitives$set_query_STAR_(state_map,ui_factory_class_or_queryid,p__40745){
var map__40746 = p__40745;
var map__40746__$1 = ((((!((map__40746 == null)))?(((((map__40746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40746):map__40746);
var args = map__40746__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40746__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var queryid = (((ui_factory_class_or_queryid == null))?null:((typeof ui_factory_class_or_queryid === 'string')?ui_factory_class_or_queryid:(cljs.core.truth_((function (){var G__40749 = ui_factory_class_or_queryid;
var G__40749__$1 = (((G__40749 == null))?null:cljs.core.meta(G__40749));
if((G__40749__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__40749__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__40750 = ui_factory_class_or_queryid;
var G__40750__$1 = (((G__40750 == null))?null:cljs.core.meta(G__40750));
if((G__40750__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__40750__$1);
}
})():fulcro.client.primitives.query_id(ui_factory_class_or_queryid,null)
)));
var setq_STAR_ = ((function (queryid,map__40746,map__40746__$1,args,query){
return (function (state){
return fulcro.client.primitives.normalize_query(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),cljs.core.dissoc,queryid),cljs.core.with_meta(query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid], null)));
});})(queryid,map__40746,map__40746__$1,args,query))
;
if(typeof queryid === 'string'){
var G__40751 = state_map;
if(cljs.core.contains_QMARK_(args,new cljs.core.Keyword(null,"query","query",-1288509510))){
return setq_STAR_(G__40751);
} else {
return G__40751;
}
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1092], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Set query failed. There was no query ID."], 0));
}catch (e40753){if((e40753 instanceof Error)){
var e__33343__auto___40760 = e40753;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1092], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___40760], 0));
} else {
throw e40753;

}
}
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
if(((fulcro.util.ident_QMARK_(e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(e))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,cljs.core.first(e));
} else {
if(((cljs.core.list_QMARK_(e)) && ((cljs.core.first(e) instanceof cljs.core.Keyword)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,cljs.core.first(e));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.util.join_QMARK_(e);
if(cljs.core.truth_(and__3911__auto__)){
return ((fulcro.util.ident_QMARK_(fulcro.util.join_key(e))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(fulcro.util.join_key(e)))));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rv,cljs.core.first(fulcro.util.join_key(e)));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.util.join_QMARK_(e);
if(cljs.core.truth_(and__3911__auto__)){
return (fulcro.util.join_key(e) instanceof cljs.core.Keyword);
} else {
return and__3911__auto__;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = ((((!((class$ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false))?fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__40779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__40780 = data;
var G__40781 = refs;
var G__40782 = union_seen;
return (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(G__40779,G__40780,G__40781,G__40782) : fulcro.client.primitives.normalize_STAR_.call(null,G__40779,G__40780,G__40781,G__40782));
})(),cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","tag","fulcro.client.primitives/tag",649496853),cljs.core.first(ident));
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
var vec__40783 = fulcro.util.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40783,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40783,(1),null);
var recursive_QMARK_ = fulcro.util.recursion_QMARK_(sel);
var union_entry = ((fulcro.util.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if(((recursive_QMARK_) && (fulcro.util.ident_QMARK_(v)))){
var G__40807 = cljs.core.next(q);
var G__40808 = ret;
q = G__40807;
ret = G__40808;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,v,refs,union_entry) : fulcro.client.primitives.normalize_STAR_.call(null,sel__$1,v,refs,union_entry));
if(!((((class$ == null)) || (!(((!((class$ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false)))))){
var i = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

var G__40809 = cljs.core.next(q);
var G__40810 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__40809;
ret = G__40810;
continue;
} else {
var G__40811 = cljs.core.next(q);
var G__40812 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__40811;
ret = G__40812;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__40769_SHARP_){
return (fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,p1__40769_SHARP_,refs,union_entry) : fulcro.client.primitives.normalize_STAR_.call(null,sel__$1,p1__40769_SHARP_,refs,union_entry));
});})(q,ret,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!((((class$ == null)) || (!(((!((class$ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$primitives$Ident$))))?true:false):false)))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__40771_SHARP_){
return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(class$,p1__40771_SHARP_);
});})(q,ret,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__40795){
var vec__40796 = p__40795;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40796,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40796,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__40800){
var vec__40801 = p__40800;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40801,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40801,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__40783,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__40817 = cljs.core.next(q);
var G__40818 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__40817;
ret = G__40818;
continue;
} else {
var G__40819 = cljs.core.next(q);
var G__40820 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__40819;
ret = G__40820;
continue;
}
} else {
if((v == null)){
var G__40824 = cljs.core.next(q);
var G__40825 = ret;
q = G__40824;
ret = G__40825;
continue;
} else {
var G__40828 = cljs.core.next(q);
var G__40829 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__40828;
ret = G__40829;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__40834 = cljs.core.next(q);
var G__40835 = ret;
q = G__40834;
ret = G__40835;
continue;
} else {
var G__40836 = cljs.core.next(q);
var G__40837 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__40836;
ret = G__40837;
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
var G__40844 = arguments.length;
switch (G__40844) {
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
var join_value__$1 = ((((fulcro.util.recursion_QMARK_(join_value)) && (cljs.core.seq(ks))))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.ffirst(expr),(fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(join_value__$1,ks,null) : fulcro.client.primitives.focus_query_STAR_.call(null,join_value__$1,ks,null))]);
})():((cljs.core.seq_QMARK_(expr))?(new cljs.core.List(null,(function (){var G__40846 = cljs.core.first(expr);
var G__40847 = ks;
var G__40848 = null;
var G__40849 = null;
return (fulcro.client.primitives.focused_join.cljs$core$IFn$_invoke$arity$4 ? fulcro.client.primitives.focused_join.cljs$core$IFn$_invoke$arity$4(G__40846,G__40847,G__40848,G__40849) : fulcro.client.primitives.focused_join.call(null,G__40846,G__40847,G__40848,G__40849));
})(),(new cljs.core.List(null,cljs.core.second(expr),null,(1),null)),(2),null)):expr
));
var G__40850 = expr_SINGLEQUOTE_;
if(!((expr_meta == null))){
return cljs.core.with_meta(G__40850,expr_meta);
} else {
return G__40850;
}
});
fulcro.client.primitives.focus_query_STAR_ = (function fulcro$client$primitives$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__40855 = path;
var seq__40856 = cljs.core.seq(vec__40855);
var first__40857 = cljs.core.first(seq__40856);
var seq__40856__$1 = cljs.core.next(seq__40856);
var k = first__40857;
var ks = seq__40856__$1;
var match = ((function (vec__40855,seq__40856,first__40857,seq__40856__$1,k,ks){
return (function fulcro$client$primitives$focus_query_STAR__$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,fulcro.util.join_key(x));
});})(vec__40855,seq__40856,first__40857,seq__40856__$1,k,ks))
;
var value = ((function (vec__40855,seq__40856,first__40857,seq__40856__$1,k,ks){
return (function fulcro$client$primitives$focus_query_STAR__$_value(x){
return fulcro.client.primitives.focused_join(x,ks,query,union_expr);
});})(vec__40855,seq__40856,first__40857,seq__40856__$1,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(function (){var G__40860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k);
var G__40861 = ks;
var G__40862 = query;
return (fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.primitives.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(G__40860,G__40861,G__40862) : fulcro.client.primitives.focus_query_STAR_.call(null,G__40860,G__40861,G__40862));
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
fulcro.client.primitives.focus_subquery_union_STAR_ = (function fulcro$client$primitives$focus_subquery_union_STAR_(query_ast,sub_ast){
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__40869_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__40869_SHARP_),p1__40869_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__40871){
var map__40872 = p__40871;
var map__40872__$1 = ((((!((map__40872 == null)))?(((((map__40872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40872):map__40872);
var union_entry = map__40872__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40872__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_index,union_key);
if(cljs.core.truth_(temp__5455__auto__)){
var sub = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(fulcro.client.primitives.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(union_entry,sub) : fulcro.client.primitives.focus_subquery_STAR_.call(null,union_entry,sub)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,union_entry);
}
});})(s_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast)));
});
fulcro.client.primitives.focus_subquery_STAR_ = (function fulcro$client$primitives$focus_subquery_STAR_(query_ast,sub_ast){
var q_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__40877_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__40877_SHARP_),p1__40877_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q_index){
return (function (children,p__40880){
var map__40881 = p__40880;
var map__40881__$1 = ((((!((map__40881 == null)))?(((((map__40881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40881):map__40881);
var focus = map__40881__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40881__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40881__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5455__auto__)){
var source = temp__5455__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(fulcro.client.primitives.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(source,focus) : fulcro.client.primitives.focus_subquery_STAR_.call(null,source,focus)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"union","union",2142937499),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,fulcro.client.primitives.focus_subquery_union_STAR_(source,focus));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,source);

}
}
} else {
return children;
}
});})(q_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast)));
});
/**
 * Given a query, focus it along the specified query expression.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
 *  => [{:foo [:bar]} :woz]
 */
fulcro.client.primitives.focus_subquery = (function fulcro$client$primitives$focus_subquery(query,sub_query){
var query_ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(query) : fulcro.client.primitives.query__GT_ast.call(null,query));
var sub_ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(sub_query) : fulcro.client.primitives.query__GT_ast.call(null,sub_query));
var G__40889 = fulcro.client.primitives.focus_subquery_STAR_(query_ast,sub_ast);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(G__40889) : fulcro.client.primitives.ast__GT_query.call(null,G__40889));
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
var G__40893 = expr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(expr))){
return cljs.core.first(G__40893);
} else {
return G__40893;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid query expr ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
fulcro.client.primitives.query_zip = (function fulcro$client$primitives$query_zip(root){
return clojure.zip.zipper((function (p1__40897_SHARP_){
return ((cljs.core.vector_QMARK_(p1__40897_SHARP_)) || (cljs.core.map_QMARK_(p1__40897_SHARP_)) || (cljs.core.seq_QMARK_(p1__40897_SHARP_)));
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
var G__40904 = clojure.zip.right(loc__$1);
loc__$1 = G__40904;
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
var G__40919 = clojure.zip.down(loc);
var G__40920 = path__$1;
loc = G__40919;
path__$1 = G__40920;
continue;
} else {
var vec__40912 = path__$1;
var seq__40913 = cljs.core.seq(vec__40912);
var first__40914 = cljs.core.first(seq__40913);
var seq__40913__$1 = cljs.core.next(seq__40913);
var k = first__40914;
var ks = seq__40913__$1;
var k_SINGLEQUOTE_ = fulcro.client.primitives.expr__GT_key(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
if(((cljs.core.map_QMARK_(node)) || (((cljs.core.seq_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.first(node))))))){
var loc_SINGLEQUOTE_ = fulcro.client.primitives.move_to_key((function (){var G__40916 = loc;
if(cljs.core.seq_QMARK_(node)){
return clojure.zip.down(G__40916);
} else {
return G__40916;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__40922 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(fulcro.client.primitives.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__40923 = cljs.core.next(ks);
loc = G__40922;
path__$1 = G__40923;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__40925 = loc_SINGLEQUOTE_;
var G__40926 = ks;
loc = G__40925;
path__$1 = G__40926;
continue;
}
} else {
var G__40928 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__40929 = ks;
loc = G__40928;
path__$1 = G__40929;
continue;
}
} else {
var G__40930 = clojure.zip.right(loc);
var G__40931 = path__$1;
loc = G__40930;
path__$1 = G__40931;
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
var node_SINGLEQUOTE_ = (function (){var G__40935 = node;
if(typeof node === 'number'){
return (G__40935 - (1));
} else {
return G__40935;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40939){
var vec__40940 = p__40939;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40940,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40940,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.client.primitives.reduce_query_depth(q,recursion_key)], null);
}),union_expr));
});
fulcro.client.primitives.mappable_ident_QMARK_ = (function fulcro$client$primitives$mappable_ident_QMARK_(refs,ident){
return ((fulcro.util.ident_QMARK_(ident)) && (cljs.core.contains_QMARK_(refs,cljs.core.first(ident))));
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
var union_recur_QMARK_ = (function (){var and__3911__auto__ = union_expr;
if(cljs.core.truth_(and__3911__auto__)){
return recurse_key;
} else {
return and__3911__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(fulcro.client.primitives.mappable_ident_QMARK_(refs,data__$1))){
var G__40993 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(data__$1) : map_ident.call(null,data__$1)));
data__$1 = G__40993;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
return ident;
} else {
var map__40953 = cljs.core.group_by(fulcro.util.join_QMARK_,query);
var map__40953__$1 = ((((!((map__40953 == null)))?(((((map__40953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40953):map__40953);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40953__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40953__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__40953,map__40953__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__40946_SHARP_){
var G__40955 = p1__40946_SHARP_;
if(cljs.core.seq_QMARK_(p1__40946_SHARP_)){
return cljs.core.first(G__40955);
} else {
return G__40955;
}
});})(map__40953,map__40953__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var vec__40956 = fulcro.util.join_entry(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40956,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40956,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident,key);
var G__40997 = cljs.core.next(joins__$1);
var G__40998 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,(fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel,v,refs,map_ident,idents_seen,union_expr,recurse_key) : fulcro.client.primitives.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key)));
joins__$1 = G__40997;
ret = G__40998;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(ident,props__$1),ret], 0));
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var query__$1 = (function (){var G__40961 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return fulcro.client.primitives.reduce_union_recursion_depth(G__40961,recurse_key);
} else {
return G__40961;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__40962 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return fulcro.client.primitives.reduce_union_recursion_depth(G__40962,recurse_key);
} else {
return G__40962;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__40963 = query__$1;
if(cljs.core.map_QMARK_(query__$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__40963,cljs.core.first(ident));
} else {
return G__40963;
}
})();
return (fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null) : fulcro.client.primitives.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.map_QMARK_(query);
if(and__3911__auto__){
return union_recur_QMARK_;
} else {
return and__3911__auto__;
}
})())){
var G__40964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(recur_ident));
var G__40965 = data__$1;
var G__40966 = refs;
var G__40967 = map_ident;
var G__40968 = idents_seen;
var G__40969 = union_expr;
var G__40970 = recurse_key;
return (fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(G__40964,G__40965,G__40966,G__40967,G__40968,G__40969,G__40970) : fulcro.client.primitives.denormalize_STAR_.call(null,G__40964,G__40965,G__40966,G__40967,G__40968,G__40969,G__40970));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__40972 = cljs.core.group_by(((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__40948_SHARP_){
var or__3922__auto__ = fulcro.util.join_QMARK_(p1__40948_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((fulcro.util.ident_QMARK_(p1__40948_SHARP_)) || (((cljs.core.seq_QMARK_(p1__40948_SHARP_)) && (fulcro.util.ident_QMARK_(cljs.core.first(p1__40948_SHARP_))))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__40972__$1 = ((((!((map__40972 == null)))?(((((map__40972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40972):map__40972);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40972__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40972__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__40972,map__40972__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__40949_SHARP_){
var G__40976 = p1__40949_SHARP_;
if(cljs.core.seq_QMARK_(p1__40949_SHARP_)){
return cljs.core.first(G__40976);
} else {
return G__40976;
}
});})(map__40972,map__40972__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__40980 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__40980);
} else {
return G__40980;
}
})();
var join__$2 = (function (){var G__40981 = join__$1;
if(fulcro.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__40981],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__40981;
}
})();
var vec__40977 = fulcro.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40977,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40977,(1),null);
var recurse_QMARK_ = fulcro.util.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((fulcro.util.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__40983 = key;
if(fulcro.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__40983);
} else {
return G__40983;
}
})();
var v__$1 = (cljs.core.truth_(fulcro.client.primitives.mappable_ident_QMARK_(refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1)));
if(cljs.core.truth_(fulcro.client.primitives.mappable_ident_QMARK_(refs,next))){
var G__41009 = next;
v__$1 = G__41009;
continue;
} else {
return (map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1));
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((fulcro.util.union_QMARK_(join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:fulcro.client.primitives.reduce_query_depth(query,key__$1)):(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.client.primitives.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__3911__auto__)){
return fulcro.util.union_QMARK_(join__$2);
} else {
return and__3911__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(v__$1)):((((fulcro.util.ident_QMARK_(key__$1)) && (fulcro.util.union_QMARK_(join__$2))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(key__$1)):sel
)));
var graph_loop_QMARK_ = ((recurse_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),limit)));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = fulcro.client.primitives.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__3911__auto__)){
return recurse_QMARK_;
} else {
return and__3911__auto__;
}
})())?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
var G__41013 = cljs.core.next(joins__$1);
var G__41014 = ret;
joins__$1 = G__41013;
ret = G__41014;
continue;
} else {
if(graph_loop_QMARK_){
var G__41016 = cljs.core.next(joins__$1);
var G__41017 = ret;
joins__$1 = G__41016;
ret = G__41017;
continue;
} else {
if((v__$1 == null)){
var G__41019 = cljs.core.next(joins__$1);
var G__41020 = ret;
joins__$1 = G__41019;
ret = G__41020;
continue;
} else {
var G__41021 = cljs.core.next(joins__$1);
var G__41022 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,(fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? fulcro.client.primitives.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1) : fulcro.client.primitives.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1)));
joins__$1 = G__41021;
ret = G__41022;
continue;

}
}
}
} else {
var temp__5455__auto__ = cljs.core.some(((function (joins__$1,ret,map__40972,map__40972__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__40987){
var vec__40988 = p__40987;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40988,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40988,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__40972,map__40972__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
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
var G__41027 = arguments.length;
switch (G__41027) {
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
return clojure.walk.prewalk((function (p1__41035_SHARP_){
if(cljs.core.truth_((fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__41035_SHARP_) : fulcro.client.primitives.tempid_QMARK_.call(null,p1__41035_SHARP_)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tid__GT_rid,p1__41035_SHARP_,p1__41035_SHARP_);
} else {
return p1__41035_SHARP_;
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
var G__41048 = cljs.core.async.poll_BANG_(queue);
var G__41049 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entries,fulcro.client.primitives.resolve_tempids(entry,tempid_map));
entry = G__41048;
entries = G__41049;
continue;
} else {
if(cljs.core.seq(entries)){
var seq__41039 = cljs.core.seq(entries);
var chunk__41040 = null;
var count__41041 = (0);
var i__41042 = (0);
while(true){
if((i__41042 < count__41041)){
var e = chunk__41040.cljs$core$IIndexed$_nth$arity$2(null,i__41042);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1569], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to put request back on network queue during tempid rewrite!"], 0));
}catch (e41044){if((e41044 instanceof Error)){
var e__33343__auto___41051 = e41044;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1569], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___41051], 0));
} else {
throw e41044;

}
}}


var G__41053 = seq__41039;
var G__41054 = chunk__41040;
var G__41055 = count__41041;
var G__41056 = (i__41042 + (1));
seq__41039 = G__41053;
chunk__41040 = G__41054;
count__41041 = G__41055;
i__41042 = G__41056;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__41039);
if(temp__5457__auto__){
var seq__41039__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41039__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__41039__$1);
var G__41058 = cljs.core.chunk_rest(seq__41039__$1);
var G__41059 = c__4319__auto__;
var G__41060 = cljs.core.count(c__4319__auto__);
var G__41061 = (0);
seq__41039 = G__41058;
chunk__41040 = G__41059;
count__41041 = G__41060;
i__41042 = G__41061;
continue;
} else {
var e = cljs.core.first(seq__41039__$1);
if(cljs.core.truth_(cljs.core.async.offer_BANG_(queue,e))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1569], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to put request back on network queue during tempid rewrite!"], 0));
}catch (e41045){if((e41045 instanceof Error)){
var e__33343__auto___41062 = e41045;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1569], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___41062], 0));
} else {
throw e41045;

}
}}


var G__41064 = cljs.core.next(seq__41039__$1);
var G__41065 = null;
var G__41066 = (0);
var G__41067 = (0);
seq__41039 = G__41064;
chunk__41040 = G__41065;
count__41041 = G__41066;
i__41042 = G__41067;
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
var symbols_to_filter = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),null,new cljs.core.Symbol("fulcro.client.data-fetch","load","fulcro.client.data-fetch/load",-1506599212,null),null,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),null,new cljs.core.Symbol("fulcro.client.data-fetch","fallback","fulcro.client.data-fetch/fallback",1556791555,null),null], null), null);
var ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(query) : fulcro.client.primitives.query__GT_ast.call(null,query));
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_filter,ast,children){
return (function (child){
return !(cljs.core.contains_QMARK_(symbols_to_filter,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(child)));
});})(symbols_to_filter,ast,children))
,children);
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),new_children);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(new_ast) : fulcro.client.primitives.ast__GT_query.call(null,new_ast));
});
fulcro.client.primitives.fallback_tx = (function fulcro$client$primitives$fallback_tx(tx,resp){

var symbols_to_find = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),null,new cljs.core.Symbol("fulcro.client.data-fetch","fallback","fulcro.client.data-fetch/fallback",1556791555,null),null], null), null);
var ast = (fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.query__GT_ast.cljs$core$IFn$_invoke$arity$1(tx) : fulcro.client.primitives.query__GT_ast.call(null,tx));
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var new_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (ast__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(ast__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"execute","execute",-129499188),true,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp], 0));
});})(symbols_to_find,ast,children))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (symbols_to_find,ast,children){
return (function (child){
return cljs.core.contains_QMARK_(symbols_to_find,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(child));
});})(symbols_to_find,ast,children))
,children));
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),new_children);
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
var G__41077 = kw__$1;
var G__41077__$1 = (((G__41077 == null))?null:cljs.core.namespace(G__41077));
if((G__41077__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^ui(?:\.|$)/,G__41077__$1);
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
if(cljs.core.truth_(fulcro.client.primitives.is_ui_query_fragment_QMARK_(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(n)))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,fulcro$client$primitives$strip_ui_$_drop_ui_children(n));
}
});})(ast))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node));
if(cljs.core.seq(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_node,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast_node,new cljs.core.Keyword(null,"children","children",-940561982));
}
});})(ast))
;
var G__41081 = drop_ui_children(ast);
return (fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.ast__GT_query.cljs$core$IFn$_invoke$arity$1(G__41081) : fulcro.client.primitives.ast__GT_query.call(null,G__41081));
});
fulcro.client.primitives.nf = new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912);
/**
 * Returns data with meta-data marking it as a leaf in the result.
 */
fulcro.client.primitives.as_leaf = (function fulcro$client$primitives$as_leaf(data){
if(cljs.core.coll_QMARK_(data)){
return cljs.core.with_meta(data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro","leaf","fulcro/leaf",-2094500471),true], null));
} else {
return data;
}
});
/**
 * Returns true iff the given data is marked as a leaf in the result (according to the query). Requires pre-marking.
 */
fulcro.client.primitives.leaf_QMARK_ = (function fulcro$client$primitives$leaf_QMARK_(data){
return ((!(cljs.core.coll_QMARK_(data))) || (cljs.core.empty_QMARK_(data)) || (((cljs.core.coll_QMARK_(data)) && (cljs.core.boolean$(new cljs.core.Keyword("fulcro","leaf","fulcro/leaf",-2094500471).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))))));
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
var missing_entity = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.impl.data-fetch","type","fulcro.client.impl.data-fetch/type",296514265),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null)], null);
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
if((((element__$1 instanceof cljs.core.Keyword)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__3911__auto__)){
return ((typeof fulcro.util.join_value(element__$1) === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),fulcro.util.join_value(element__$1))));
} else {
return and__3911__auto__;
}
})())){
var k = fulcro.util.join_key(element__$1);
var result_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,k);
if((result_SINGLEQUOTE_ == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,k,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
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
if(((fulcro.util.ident_QMARK_(element__$1)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,missing_entity);
} else {
if(fulcro.util.union_QMARK_(element__$1)){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
} else {
return result__$1;

}
}
}
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__3911__auto__)){
return ((fulcro.util.ident_QMARK_(fulcro.util.join_key(element__$1))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)) == null)));
} else {
return and__3911__auto__;
}
})())){
var mock_missing_object = (function (){var G__41096 = cljs.core.PersistentArrayMap.EMPTY;
var G__41097 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__41096,G__41097) : fulcro.client.primitives.mark_missing.call(null,G__41096,G__41097));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mock_missing_object,missing_entity], 0)));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912)));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.vector_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (element__$1,result_key,result_value,missing_entity){
return (function (item){
var G__41099 = item;
var G__41100 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__41099,G__41100) : fulcro.client.primitives.mark_missing.call(null,G__41099,G__41100));
});})(element__$1,result_key,result_value,missing_entity))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1))));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.map_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1)));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,fulcro.util.join_key(element__$1),(function (){var G__41101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,fulcro.util.join_key(element__$1));
var G__41102 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__41101,G__41102) : fulcro.client.primitives.mark_missing.call(null,G__41101,G__41102));
})());
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.util.join_QMARK_(element__$1);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.vector_QMARK_(fulcro.util.join_value(element__$1))) && (!(((cljs.core.map_QMARK_(result_value)) || (cljs.core.vector_QMARK_(result_value))))));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(function (){var G__41105 = cljs.core.PersistentArrayMap.EMPTY;
var G__41106 = fulcro.util.join_value(element__$1);
return (fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.mark_missing.cljs$core$IFn$_invoke$arity$2(G__41105,G__41106) : fulcro.client.primitives.mark_missing.call(null,G__41105,G__41106));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__41122){
var vec__41123 = p__41122;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41123,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__41130){
var vec__41131 = p__41130;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41131,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))){
return acc;
} else {
if(((fulcro.util.ident_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),cljs.core.second(v))))){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__41139){
var vec__41141 = p__41139;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41141,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41141,(1),null);
var existing_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,key);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"tempids","tempids",1767509089))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912))))){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_value,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,key);
} else {
if(((fulcro.util.ident_QMARK_(new_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),cljs.core.second(new_value))))){
return acc;
} else {
if(cljs.core.truth_(fulcro.client.primitives.leaf_QMARK_(new_value))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,fulcro.client.primitives.sweep_one(new_value));
} else {
if(((cljs.core.map_QMARK_(existing_value)) && (cljs.core.map_QMARK_(new_value)))){
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
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41149){
var vec__41150 = p__41149;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41150,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41150,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = fulcro.client.primitives.sweep_merge(target,source_to_merge);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source_to_merge,merged_state){
return (function (acc,p__41154){
var vec__41155 = p__41154;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41155,(1),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = mutation_merge;
if(cljs.core.truth_(and__3911__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__3911__auto__;
}
})())){
var temp__5455__auto__ = (function (){var G__41158 = acc;
var G__41159 = k;
var G__41160 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205)], 0));
return (mutation_merge.cljs$core$IFn$_invoke$arity$3 ? mutation_merge.cljs$core$IFn$_invoke$arity$3(G__41158,G__41159,G__41160) : mutation_merge.call(null,G__41158,G__41159,G__41160));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var updated_state = temp__5455__auto__;
return updated_state;
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1779], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Return value handler for",k,"returned nil. Ignored."], 0));
}catch (e41162){if((e41162 instanceof Error)){
var e__33343__auto___41167 = e41162;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1779], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___41167], 0));
} else {
throw e41162;

}
}
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
var k = (function (){var and__3911__auto__ = fulcro.util.mutation_join_QMARK_(query_element);
if(cljs.core.truth_(and__3911__auto__)){
return fulcro.util.join_key(query_element);
} else {
return and__3911__auto__;
}
})();
var subtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,k);
if(cljs.core.truth_((function (){var and__3911__auto__ = k;
if(cljs.core.truth_(and__3911__auto__)){
return subtree;
} else {
return and__3911__auto__;
}
})())){
var subquery = fulcro.util.join_value(query_element);
var target = new cljs.core.Keyword("fulcro.client.impl.data-fetch","target","fulcro.client.impl.data-fetch/target",1805324748).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(subquery));
var idnt = new cljs.core.Keyword("fulcro.client.primitives","temporary-key","fulcro.client.primitives/temporary-key",485271105);
var norm_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subquery])], null);
var norm_tree = cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subtree]);
var norm_tree_marked = fulcro.client.primitives.mark_missing(norm_tree,norm_query);
var db = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3(norm_query,norm_tree_marked,true);
var G__41171 = fulcro.client.primitives.sweep_merge(updated_state,db);
var G__41171__$1 = (cljs.core.truth_(target)?fulcro.client.impl.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3(G__41171,idnt,target):G__41171);
if(cljs.core.not(target)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41171__$1,db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idnt], 0));
} else {
return G__41171__$1;
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
var map__41180 = config;
var map__41180__$1 = ((((!((map__41180 == null)))?(((((map__41180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41180):map__41180);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41180__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41180__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__41180,map__41180__$1,merge_ident,indexer){
return (function (p1__41176_SHARP_){
var G__41182 = p1__41176_SHARP_;
if(cljs.core.seq_QMARK_(p1__41176_SHARP_)){
return cljs.core.first(G__41182);
} else {
return G__41182;
}
});})(map__41180,map__41180__$1,merge_ident,indexer))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__41180,map__41180__$1,merge_ident,indexer){
return (function (p1__41177_SHARP_){
var and__3911__auto__ = fulcro.util.join_QMARK_(p1__41177_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return fulcro.util.ident_QMARK_(fulcro.util.join_key(p1__41177_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__41180,map__41180__$1,merge_ident,indexer))
)),query);
var step = ((function (map__41180,map__41180__$1,merge_ident,indexer,ident_joins){
return (function fulcro$client$primitives$merge_idents_$_step(tree_SINGLEQUOTE_,p__41193){
var vec__41194 = p__41193;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41194,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41194,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident_joins,ident);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return fulcro.client.primitives.ref__GT_any(indexer,ident);
}
})();
var props_SINGLEQUOTE_ = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$2(c_or_q,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
var G__41198 = (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_));
var G__41199 = refs__$1;
var fexpr__41197 = new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__41197.cljs$core$IFn$_invoke$arity$2 ? fexpr__41197.cljs$core$IFn$_invoke$arity$2(G__41198,G__41199) : fexpr__41197.call(null,G__41198,G__41199));
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props));
}
});})(map__41180,map__41180__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
fulcro.client.primitives.merge_novelty_BANG_ = (function fulcro$client$primitives$merge_novelty_BANG_(reconciler,state,result_tree,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__41207 = fulcro.client.primitives.sift_idents(result_tree);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41207,(0),null);
var result_tree__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41207,(1),null);
var normalized_result = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){var or__3922__auto__ = query;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),result_tree__$1,true):result_tree__$1);
var G__41211 = fulcro.client.primitives.merge_idents(fulcro.client.primitives.merge_mutation_joins(state,query,result_tree__$1),config,idts,query);
var G__41212 = normalized_result;
var fexpr__41210 = new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__41210.cljs$core$IFn$_invoke$arity$2 ? fexpr__41210.cljs$core$IFn$_invoke$arity$2(G__41211,G__41212) : fexpr__41210.call(null,G__41211,G__41212));
});
fulcro.client.primitives.get_tempids = (function fulcro$client$primitives$get_tempids(m){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205));
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),new cljs.core.Keyword(null,"next","next",-117701485),fulcro.client.primitives.merge_novelty_BANG_(reconciler,state,res,query),new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge an arbitrary data-tree that conforms to the shape of the given query.
 * 
 *   query - A query, derived from defui components, that can be used to normalized a tree of data.
 *   data-tree - A tree of data that matches the nested shape of query
 *   remote - No longer used. May be passed, but is ignored.
 */
fulcro.client.primitives.merge_BANG_ = (function fulcro$client$primitives$merge_BANG_(var_args){
var G__41223 = arguments.length;
switch (G__41223) {
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
var tx = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","merge!","fulcro.client.mutations/merge!",137581651,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-tree","data-tree",1311167582),data_tree,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"remote","remote",-1593576576),remote], null),null,(1),null))))),null,(1),null))))));
return (fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,tx) : fulcro.client.primitives.transact_BANG_.call(null,reconciler,tx));
});

fulcro.client.primitives.merge_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Build an index from property to class using the (annotated) query.
 */
fulcro.client.primitives.build_prop__GT_class_index_BANG_ = (function fulcro$client$primitives$build_prop__GT_class_index_BANG_(prop__GT_classes,query){
return clojure.walk.prewalk((function fulcro$client$primitives$build_prop__GT_class_index_BANG__$_index_walk_helper(ele){
var temp__5457__auto___41239 = (function (){var G__41233 = ele;
var G__41233__$1 = (((G__41233 == null))?null:cljs.core.meta(G__41233));
if((G__41233__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__41233__$1);
}
})();
if(cljs.core.truth_(temp__5457__auto___41239)){
var component_41242 = temp__5457__auto___41239;
var ks_41243 = fulcro.client.primitives.gather_keys(ele);
var seq__41234_41244 = cljs.core.seq(ks_41243);
var chunk__41235_41245 = null;
var count__41236_41246 = (0);
var i__41237_41247 = (0);
while(true){
if((i__41237_41247 < count__41236_41246)){
var k_41248 = chunk__41235_41245.cljs$core$IIndexed$_nth$arity$2(null,i__41237_41247);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prop__GT_classes,cljs.core.update,k_41248,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_41242], 0));


var G__41249 = seq__41234_41244;
var G__41250 = chunk__41235_41245;
var G__41251 = count__41236_41246;
var G__41252 = (i__41237_41247 + (1));
seq__41234_41244 = G__41249;
chunk__41235_41245 = G__41250;
count__41236_41246 = G__41251;
i__41237_41247 = G__41252;
continue;
} else {
var temp__5457__auto___41254__$1 = cljs.core.seq(seq__41234_41244);
if(temp__5457__auto___41254__$1){
var seq__41234_41255__$1 = temp__5457__auto___41254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41234_41255__$1)){
var c__4319__auto___41256 = cljs.core.chunk_first(seq__41234_41255__$1);
var G__41257 = cljs.core.chunk_rest(seq__41234_41255__$1);
var G__41258 = c__4319__auto___41256;
var G__41259 = cljs.core.count(c__4319__auto___41256);
var G__41260 = (0);
seq__41234_41244 = G__41257;
chunk__41235_41245 = G__41258;
count__41236_41246 = G__41259;
i__41237_41247 = G__41260;
continue;
} else {
var k_41261 = cljs.core.first(seq__41234_41255__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(prop__GT_classes,cljs.core.update,k_41261,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_41242], 0));


var G__41264 = cljs.core.next(seq__41234_41255__$1);
var G__41265 = null;
var G__41266 = (0);
var G__41267 = (0);
seq__41234_41244 = G__41264;
chunk__41235_41245 = G__41265;
count__41236_41246 = G__41266;
i__41237_41247 = G__41267;
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
return new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$index_root$arity$2 = (function (this$,root_class){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(this$__$1))){
} else {
throw (new Error(["Assert failed: ","State map is in `this` for indexing root","\n","(:state this)"].join('')));
}

var prop__GT_classes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var rootq = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(root_class,null),state_map);
fulcro.client.primitives.build_prop__GT_class_index_BANG_(prop__GT_classes,rootq);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref(prop__GT_classes)], null));
});

fulcro.client.primitives.Indexer.prototype.fulcro$client$impl$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function fulcro$client$primitives$component_indexer(indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),fulcro.client.primitives.react_type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$))))?true:false):false))?(function (){var ident = fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c));
if(fulcro.util.ident_QMARK_(ident)){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1900], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["malformed Ident. An ident must be a vector of ","two elements (a keyword and an EDN value). Check ","the Ident implementation of component `",c.constructor.displayName,"`."], 0));
}catch (e41282){if((e41282 instanceof Error)){
var e__33343__auto___41311 = e41282;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1900], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___41311], 0));
} else {
throw e41282;

}
}}

if(!((cljs.core.second(ident) == null))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1906], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),"'s ident (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),") has a `nil` second element."," This warning can be safely ignored if that is intended."].join('')], 0));
}catch (e41283){if((e41283 instanceof Error)){
var e__33343__auto___41312 = e41283;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),1906], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___41312], 0));
} else {
throw e41283;

}
}}

return ident;
})():null);
if(!((ident == null))){
var G__41286 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__41286;
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
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),fulcro.client.primitives.react_type(c)], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$))))?true:false):false))?fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c)):null);
if(!((ident == null))){
var G__41289 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41289,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__41289;
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
return (function (p1__41269_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__41269_SHARP_], null));
});})(indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null)));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k41271,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__41292 = k41271;
var G__41292__$1 = (((G__41292 instanceof cljs.core.Keyword))?G__41292.fqn:null);
switch (G__41292__$1) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41271,else__12537__auto__);

}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#fulcro.client.primitives.Indexer{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41270){
var self__ = this;
var G__41270__$1 = this;
return (new cljs.core.RecordIter((0),G__41270__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__41294 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (-535195966 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__41294(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41272,other41273){
var self__ = this;
var this41272__$1 = this;
return ((!((other41273 == null))) && ((this41272__$1.constructor === other41273.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41272__$1.indexes,other41273.indexes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41272__$1.__extmap,other41273.__extmap)));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__41270){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__41297 = cljs.core.keyword_identical_QMARK_;
var expr__41298 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__41300 = new cljs.core.Keyword(null,"indexes","indexes",1496475545);
var G__41301 = expr__41298;
return (pred__41297.cljs$core$IFn$_invoke$arity$2 ? pred__41297.cljs$core$IFn$_invoke$arity$2(G__41300,G__41301) : pred__41297.call(null,G__41300,G__41301));
})())){
return (new fulcro.client.primitives.Indexer(G__41270,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.primitives.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__41270),null));
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__41270){
var self__ = this;
var this__12533__auto____$1 = this;
return (new fulcro.client.primitives.Indexer(self__.indexes,G__41270,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

fulcro.client.primitives.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.indexes);
});

fulcro.client.primitives.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null)], null);
});

fulcro.client.primitives.Indexer.cljs$lang$type = true;

fulcro.client.primitives.Indexer.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"fulcro.client.primitives/Indexer",null,(1),null));
});

fulcro.client.primitives.Indexer.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"fulcro.client.primitives/Indexer");
});

/**
 * Positional factory function for fulcro.client.primitives/Indexer.
 */
fulcro.client.primitives.__GT_Indexer = (function fulcro$client$primitives$__GT_Indexer(indexes){
return (new fulcro.client.primitives.Indexer(indexes,null,null,null));
});

/**
 * Factory function for fulcro.client.primitives/Indexer, taking a map of keywords to field values.
 */
fulcro.client.primitives.map__GT_Indexer = (function fulcro$client$primitives$map__GT_Indexer(G__41276){
return (new fulcro.client.primitives.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__41276),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41276,new cljs.core.Keyword(null,"indexes","indexes",1496475545))),null));
});

fulcro.client.primitives.to_env = (function fulcro$client$primitives$to_env(x){
var config = ((fulcro.client.primitives.reconciler_QMARK_(x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310)], null));
});
/**
 * Given an environment, a query and a set of remotes return a hash map of remotes
 * mapped to the query specific to that remote.
 */
fulcro.client.primitives.gather_sends = (function fulcro$client$primitives$gather_sends(p__41333,q,remotes,tx_time){
var map__41334 = p__41333;
var map__41334__$1 = ((((!((map__41334 == null)))?(((((map__41334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41334):map__41334);
var env = map__41334__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41334__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__41334,map__41334__$1,env,parser){
return (function (p1__41330_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__41330_SHARP_,(function (){var G__41336 = (parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__41330_SHARP_) : parser.call(null,env,q,p1__41330_SHARP_));
if((G__41336 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__41336,cljs.core.assoc,new cljs.core.Keyword("fulcro.history","tx-time","fulcro.history/tx-time",816348456),tx_time);
}
})()],null));
});})(map__41334,map__41334__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__41334,map__41334__$1,env,parser){
return (function (p__41338){
var vec__41339 = p__41338;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(1),null);
return (cljs.core.count(v) > (0));
});})(map__41334,map__41334__$1,env,parser))
)),remotes);
});
fulcro.client.primitives.schedule_sends_BANG_ = (function fulcro$client$primitives$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(fulcro.client.impl.protocols.schedule_sends_BANG_(reconciler))){
return setTimeout((function (){
return fulcro.client.impl.protocols.send_BANG_(reconciler);
}),(0));
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
return ((fulcro.client.primitives.component_QMARK_(x)) && (cljs.core.boolean$(goog.object.get(x,"fulcro$mounted"))));
});
/**
 * Finds props for a given component. Returns ::no-ident if the component has
 *   no ident (which prevents localized update). This eliminates the need for
 *   path data.
 */
fulcro.client.primitives.fulcro_ui__GT_props = (function fulcro$client$primitives$fulcro_ui__GT_props(p__41354,c){
var map__41355 = p__41354;
var map__41355__$1 = ((((!((map__41355 == null)))?(((((map__41355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41355):map__41355);
var env = map__41355__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41355__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41355__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ui = ((((!((c == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$))))?true:false):false))?(function (){var id = fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c));
var has_tempid_QMARK_ = (function (){var G__41359 = cljs.core.second(id);
return (fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.primitives.tempid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__41359) : fulcro.client.primitives.tempid_QMARK_.call(null,G__41359));
})();
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([id,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(state))])], null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,query) : parser.call(null,env,query)),id);
if(cljs.core.truth_((function (){var and__3911__auto__ = has_tempid_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (((value == null)) || (cljs.core.empty_QMARK_(value)));
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.Keyword("fulcro.client.primitives","no-ident","fulcro.client.primitives/no-ident",1180553616);
} else {
return value;
}
})():null);
var or__3922__auto__ = ui;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword("fulcro.client.primitives","no-ident","fulcro.client.primitives/no-ident",1180553616);
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
var G__41365 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__41365,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__41365;
}
} else {
var G__41367 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41367,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__41367;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
fulcro.client.primitives.get_computed = (function fulcro$client$primitives$get_computed(var_args){
var G__41371 = arguments.length;
switch (G__41371) {
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
var props = (function (){var G__41374 = x;
if(fulcro.client.primitives.component_QMARK_(x)){
return fulcro.client.primitives.props(G__41374);
} else {
return G__41374;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962)], null),(function (){var G__41376 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__41376],null));
} else {
return G__41376;
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
if(((cljs.core.coll_QMARK_(cs)) || (cljs.core.array_QMARK_(cs)))){
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
var G__41385 = arguments.length;
switch (G__41385) {
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
var G__41393 = arguments.length;
switch (G__41393) {
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
}catch (e41394){var e = e41394;
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2047], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Component",c,"threw an exception while rendering ",e], 0));
}catch (e41395){if((e41395 instanceof Error)){
var e__33343__auto__ = e41395;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2047], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e41395;

}
}}});

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

var G__41403 = c.state;
var G__41404_41407 = G__41403;
var G__41405_41408 = "fulcro$next$value";
var G__41406_41409 = fulcro.client.primitives.om_props(next_props,fulcro.client.primitives.get_current_time(fulcro.client.primitives.get_reconciler(c)));
goog.object.set(G__41404_41407,G__41405_41408,G__41406_41409);

return G__41403;
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
var reconciler_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler);
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var app_state_atom = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var components_to_refresh = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (reconciler_state,config,app_state_atom){
return (function (p1__41414_SHARP_){
return fulcro.client.impl.protocols.key__GT_components(new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(config),p1__41414_SHARP_);
});})(reconciler_state,config,app_state_atom))
),((function (reconciler_state,config,app_state_atom){
return (function (p1__41415_SHARP_,p2__41416_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__41415_SHARP_,p2__41416_SHARP_);
});})(reconciler_state,config,app_state_atom))
,cljs.core.PersistentHashSet.EMPTY,refresh_queue);
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.to_env(config),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reconciler_state));
var sort_by_depth = new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(config);
var seq__41419 = cljs.core.seq((sort_by_depth.cljs$core$IFn$_invoke$arity$1 ? sort_by_depth.cljs$core$IFn$_invoke$arity$1(components_to_refresh) : sort_by_depth.call(null,components_to_refresh)));
var chunk__41420 = null;
var count__41421 = (0);
var i__41422 = (0);
while(true){
if((i__41422 < count__41421)){
var c = chunk__41420.cljs$core$IIndexed$_nth$arity$2(null,i__41422);
var current_time_41430 = fulcro.client.primitives.get_current_time(reconciler);
var component_time_41431 = fulcro.client.primitives.t(c);
var props_change_QMARK__41432 = (current_time_41430 > component_time_41431);
if(fulcro.client.primitives.mounted_QMARK_(c)){
var computed_41433 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(c));
var next_raw_props_41434 = ((fulcro.client.primitives.has_query_QMARK_(c))?fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(app_state_atom)),fulcro.client.primitives.fulcro_ui__GT_props(env,c),current_time_41430):fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.fulcro_ui__GT_props(env,c),current_time_41430));
var force_root_QMARK__41435 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","no-ident","fulcro.client.primitives/no-ident",1180553616),next_raw_props_41434);
var next_props_41436 = ((force_root_QMARK__41435)?null:fulcro.client.primitives.computed(next_raw_props_41434,computed_41433));
if(force_root_QMARK__41435){
fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(c);

(render_root.cljs$core$IFn$_invoke$arity$0 ? render_root.cljs$core$IFn$_invoke$arity$0() : render_root.call(null));
} else {
if(((typeof c.componentWillReceiveProps !== 'undefined') && (fulcro.client.primitives.has_query_QMARK_(root)) && (props_change_QMARK__41432))){
var next_props_41439__$1 = (((next_props_41436 == null))?(function (){var temp__5457__auto__ = fulcro.client.primitives.props(c);
if(cljs.core.truth_(temp__5457__auto__)){
var props = temp__5457__auto__;
return props;
} else {
return null;
}
})():next_props_41436);
c.componentWillReceiveProps(({"fulcro$value": fulcro.client.primitives.om_props(next_props_41439__$1,fulcro.client.primitives.get_current_time(reconciler))}));
} else {
}

if(cljs.core.truth_(fulcro.client.primitives.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_41436,fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_41436 == null))){
fulcro.client.primitives.update_component_BANG_(c,next_props_41436);
} else {
fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(c);
}
} else {
}
}
} else {
}


var G__41441 = seq__41419;
var G__41442 = chunk__41420;
var G__41443 = count__41421;
var G__41444 = (i__41422 + (1));
seq__41419 = G__41441;
chunk__41420 = G__41442;
count__41421 = G__41443;
i__41422 = G__41444;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__41419);
if(temp__5457__auto__){
var seq__41419__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41419__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__41419__$1);
var G__41447 = cljs.core.chunk_rest(seq__41419__$1);
var G__41448 = c__4319__auto__;
var G__41449 = cljs.core.count(c__4319__auto__);
var G__41450 = (0);
seq__41419 = G__41447;
chunk__41420 = G__41448;
count__41421 = G__41449;
i__41422 = G__41450;
continue;
} else {
var c = cljs.core.first(seq__41419__$1);
var current_time_41451 = fulcro.client.primitives.get_current_time(reconciler);
var component_time_41452 = fulcro.client.primitives.t(c);
var props_change_QMARK__41453 = (current_time_41451 > component_time_41452);
if(fulcro.client.primitives.mounted_QMARK_(c)){
var computed_41454 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(c));
var next_raw_props_41455 = ((fulcro.client.primitives.has_query_QMARK_(c))?fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(app_state_atom)),fulcro.client.primitives.fulcro_ui__GT_props(env,c),current_time_41451):fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.fulcro_ui__GT_props(env,c),current_time_41451));
var force_root_QMARK__41456 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","no-ident","fulcro.client.primitives/no-ident",1180553616),next_raw_props_41455);
var next_props_41457 = ((force_root_QMARK__41456)?null:fulcro.client.primitives.computed(next_raw_props_41455,computed_41454));
if(force_root_QMARK__41456){
fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(c);

(render_root.cljs$core$IFn$_invoke$arity$0 ? render_root.cljs$core$IFn$_invoke$arity$0() : render_root.call(null));
} else {
if(((typeof c.componentWillReceiveProps !== 'undefined') && (fulcro.client.primitives.has_query_QMARK_(root)) && (props_change_QMARK__41453))){
var next_props_41460__$1 = (((next_props_41457 == null))?(function (){var temp__5457__auto____$1 = fulcro.client.primitives.props(c);
if(cljs.core.truth_(temp__5457__auto____$1)){
var props = temp__5457__auto____$1;
return props;
} else {
return null;
}
})():next_props_41457);
c.componentWillReceiveProps(({"fulcro$value": fulcro.client.primitives.om_props(next_props_41460__$1,fulcro.client.primitives.get_current_time(reconciler))}));
} else {
}

if(cljs.core.truth_(fulcro.client.primitives.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_41457,fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_41457 == null))){
fulcro.client.primitives.update_component_BANG_(c,next_props_41457);
} else {
fulcro.client.primitives.force_update.cljs$core$IFn$_invoke$arity$1(c);
}
} else {
}
}
} else {
}


var G__41462 = cljs.core.next(seq__41419__$1);
var G__41463 = null;
var G__41464 = (0);
var G__41465 = (0);
seq__41419 = G__41462;
chunk__41420 = G__41463;
count__41421 = G__41464;
i__41422 = G__41465;
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
fulcro.client.primitives.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k41471,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__41478 = k41471;
var G__41478__$1 = (((G__41478 instanceof cljs.core.Keyword))?G__41478.fqn:null);
switch (G__41478__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41471,else__12537__auto__);

}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
return fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,ks,null);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$queue_BANG_$arity$3 = (function (_,ks,remote){
var self__ = this;
var ___$1 = this;
if(!((remote == null))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sends], 0));
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$get_history$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.history;
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function fulcro$client$primitives$clear_queue_fn(state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

var G__41483 = sends;
var G__41484 = ((function (G__41483,sends,this$__$1){
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
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.keys(resp),remote);
}

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,resp,query,remote);

return fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,remote);
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
;})(G__41483,sends,this$__$1))
;
var fexpr__41482 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__41482.cljs$core$IFn$_invoke$arity$2 ? fexpr__41482.cljs$core$IFn$_invoke$arity$2(G__41483,G__41484) : fexpr__41482.call(null,G__41483,G__41484));
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fulcro.client.impl.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,null);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$reconcile_BANG_$arity$2 = (function (this$,remote){
var self__ = this;
var this$__$1 = this;
var reconciler_state = cljs.core.deref(self__.state);
var components_to_refresh = ((!((remote == null)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null)):new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(reconciler_state));
var render_mode = new cljs.core.Keyword(null,"render-mode","render-mode",-151613976).cljs$core$IFn$_invoke$arity$1(self__.config);
var force_root_QMARK_ = ((cljs.core.empty_QMARK_(components_to_refresh)) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyframe","keyframe",1957083746),null,new cljs.core.Keyword(null,"brutal","brutal",-361671204),null], null), null),render_mode)) || (fulcro.client.primitives._STAR_blindly_render_STAR_));
var blind_refresh_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brutal","brutal",-361671204),null], null), null),render_mode)) || (fulcro.client.primitives._STAR_blindly_render_STAR_));
var rendered_root_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var render_root = ((function (reconciler_state,components_to_refresh,render_mode,force_root_QMARK_,blind_refresh_QMARK_,rendered_root_QMARK_,this$__$1){
return (function (){
var temp__5455__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reconciler_state);
if(cljs.core.truth_(temp__5455__auto__)){
var do_render = temp__5455__auto__;
if(cljs.core.truth_(cljs.core.deref(rendered_root_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(rendered_root_QMARK_,true);

return (do_render.cljs$core$IFn$_invoke$arity$0 ? do_render.cljs$core$IFn$_invoke$arity$0() : do_render.call(null));
}
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2247], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Render skipped. Renderer was nil. Possibly a hot code reload?"], 0));
}catch (e41488){if((e41488 instanceof Error)){
var e__33343__auto__ = e41488;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2247], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e41488;

}
}}
});})(reconciler_state,components_to_refresh,render_mode,force_root_QMARK_,blind_refresh_QMARK_,rendered_root_QMARK_,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

if(!((remote == null))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);
}

var _STAR_blindly_render_STAR_41490 = fulcro.client.primitives._STAR_blindly_render_STAR_;
fulcro.client.primitives._STAR_blindly_render_STAR_ = blind_refresh_QMARK_;

try{if(force_root_QMARK_){
return render_root();
} else {
return fulcro.client.primitives.optimal_render(this$__$1,components_to_refresh,render_root);
}
}finally {fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR_41490;
}});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",1701634607),true);

return true;
} else {
return false;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$tick_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update,new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.inc);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rctor = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = (function (){var or__3922__auto__ = fulcro.client.impl.protocols.get_id(this$__$1);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return fulcro.util.unique_key();
}
})();
if(cljs.core.truth_(fulcro.client.impl.protocols.get_id(this$__$1))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),guid);
}

if(fulcro.client.primitives.has_query_QMARK_(root_class)){
fulcro.client.impl.protocols.index_root(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config))),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)));
} else {
return and__3911__auto__;
}
})())){
var new_state_41550 = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_41551 = cljs.core.meta(new_state_41550);
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state_41550,refs_41551], 0)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function fulcro$client$primitives$render_fn(data){
var _STAR_reconciler_STAR_41494 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_shared_STAR_41495 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_41496 = fulcro.client.primitives._STAR_instrument_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = this$__$1;

fulcro.client.primitives._STAR_shared_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?(function (){var fexpr__41497 = new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__41497.cljs$core$IFn$_invoke$arity$1 ? fexpr__41497.cljs$core$IFn$_invoke$arity$1(data) : fexpr__41497.call(null,data));
})():null)], 0));

fulcro.client.primitives._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?(function (){var G__41501 = (rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data));
var G__41502 = target;
var fexpr__41500 = new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__41500.cljs$core$IFn$_invoke$arity$2 ? fexpr__41500.cljs$core$IFn$_invoke$arity$2(G__41501,G__41502) : fexpr__41500.call(null,G__41501,G__41502));
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
if((((cljs.core.deref(ret) == null)) && (!((c == null))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_(ret,c);
} else {
return null;
}
}finally {fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_41496;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_41495;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41494;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function fulcro$client$primitives$parse_fn(){
var root_query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(rctor,cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
if((((root_query == null)) || (cljs.core.vector_QMARK_(root_query)))){
} else {
throw (new Error(["Assert failed: ","Application root query must be a vector","\n","(or (nil? root-query) (vector? root-query))"].join('')));
}

if(!((root_query == null))){
var env = fulcro.client.primitives.to_env(self__.config);
var raw_props = (function (){var fexpr__41504 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__41504.cljs$core$IFn$_invoke$arity$2 ? fexpr__41504.cljs$core$IFn$_invoke$arity$2(env,root_query) : fexpr__41504.call(null,env,root_query));
})();
var current_time = fulcro.client.primitives.get_current_time(this$__$1);
var root_props = fulcro.client.primitives.add_basis_time.cljs$core$IFn$_invoke$arity$3(root_query,raw_props,current_time);
if(cljs.core.empty_QMARK_(root_props)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2171], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: Root props were empty. Your root query returned no data!"], 0));
}catch (e41505){if((e41505 instanceof Error)){
var e__33343__auto___41558 = e41505;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2171], null),new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___41558], 0));
} else {
throw e41505;

}
}} else {
}

return renderf(root_props);
} else {
return renderf(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function fulcro$client$primitives$remove_fn(){
cljs.core.remove_watch(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),fulcro.client.impl.protocols.get_id(this$__$1));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__41468_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41468_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
var fexpr__41508 = new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__41508.cljs$core$IFn$_invoke$arity$1 ? fexpr__41508.cljs$core$IFn$_invoke$arity$1(target) : fexpr__41508.call(null,target));
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),fulcro.client.impl.protocols.get_id(this$__$1),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function fulcro$client$primitives$add_fn(_,___$1,___$2,___$3){
if(!(fulcro.client.primitives.has_query_QMARK_(root_class))){
return fulcro.client.primitives.queue_render_BANG_(parsef);
} else {
fulcro.client.impl.protocols.tick_BANG_(this$__$1);

return fulcro.client.primitives.schedule_render_BANG_(this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef();

return cljs.core.deref(ret);
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
var root_class = fulcro.client.primitives.react_type(root);
if(fulcro.client.primitives.has_query_QMARK_(root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
return fulcro.client.impl.protocols.index_root(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(indexer,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config))),root_class);
} else {
return null;
}
});

fulcro.client.primitives.Reconciler.prototype.fulcro$client$impl$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__5457__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
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
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#fulcro.client.primitives.Reconciler{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"history","history",-247395220),self__.history],null))], null),self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41470){
var self__ = this;
var G__41470__$1 = this;
return (new cljs.core.RecordIter((0),G__41470__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"history","history",-247395220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__41515 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (775628851 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__41515(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41472,other41473){
var self__ = this;
var this41472__$1 = this;
return ((!((other41473 == null))) && ((this41472__$1.constructor === other41473.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41472__$1.config,other41473.config)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41472__$1.state,other41473.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41472__$1.history,other41473.history)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41472__$1.__extmap,other41473.__extmap)));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"history","history",-247395220),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__41470){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__41519 = cljs.core.keyword_identical_QMARK_;
var expr__41520 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__41522 = new cljs.core.Keyword(null,"config","config",994861415);
var G__41523 = expr__41520;
return (pred__41519.cljs$core$IFn$_invoke$arity$2 ? pred__41519.cljs$core$IFn$_invoke$arity$2(G__41522,G__41523) : pred__41519.call(null,G__41522,G__41523));
})())){
return (new fulcro.client.primitives.Reconciler(G__41470,self__.state,self__.history,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41524 = new cljs.core.Keyword(null,"state","state",-1988618099);
var G__41525 = expr__41520;
return (pred__41519.cljs$core$IFn$_invoke$arity$2 ? pred__41519.cljs$core$IFn$_invoke$arity$2(G__41524,G__41525) : pred__41519.call(null,G__41524,G__41525));
})())){
return (new fulcro.client.primitives.Reconciler(self__.config,G__41470,self__.history,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41527 = new cljs.core.Keyword(null,"history","history",-247395220);
var G__41528 = expr__41520;
return (pred__41519.cljs$core$IFn$_invoke$arity$2 ? pred__41519.cljs$core$IFn$_invoke$arity$2(G__41527,G__41528) : pred__41519.call(null,G__41527,G__41528));
})())){
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,G__41470,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__41470),null));
}
}
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"history","history",-247395220),self__.history],null))], null),self__.__extmap));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__41470){
var self__ = this;
var this__12533__auto____$1 = this;
return (new fulcro.client.primitives.Reconciler(self__.config,self__.state,self__.history,G__41470,self__.__extmap,self__.__hash));
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

fulcro.client.primitives.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

fulcro.client.primitives.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"history","history",1393136307,null)], null);
});

fulcro.client.primitives.Reconciler.cljs$lang$type = true;

fulcro.client.primitives.Reconciler.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"fulcro.client.primitives/Reconciler",null,(1),null));
});

fulcro.client.primitives.Reconciler.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"fulcro.client.primitives/Reconciler");
});

/**
 * Positional factory function for fulcro.client.primitives/Reconciler.
 */
fulcro.client.primitives.__GT_Reconciler = (function fulcro$client$primitives$__GT_Reconciler(config,state,history){
return (new fulcro.client.primitives.Reconciler(config,state,history,null,null,null));
});

/**
 * Factory function for fulcro.client.primitives/Reconciler, taking a map of keywords to field values.
 */
fulcro.client.primitives.map__GT_Reconciler = (function fulcro$client$primitives$map__GT_Reconciler(G__41475){
return (new fulcro.client.primitives.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__41475),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__41475),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(G__41475),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41475,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"history","history",-247395220)], 0))),null));
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
fulcro.client.primitives.reconciler = (function fulcro$client$primitives$reconciler(p__41585){
var map__41586 = p__41585;
var map__41586__$1 = ((((!((map__41586 == null)))?(((((map__41586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41586):map__41586);
var config = map__41586__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41586__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__41586,map__41586__$1,config){
return (function (p1__41582_SHARP_,p2__41583_SHARP_){
return ReactDOM.render(p1__41582_SHARP_,p2__41583_SHARP_);
});})(map__41586,map__41586__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41586__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__41586,map__41586__$1,config,root_render,normalize,tx_listen,instrument){
return (function (p1__41580_SHARP_,p2__41581_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__41580_SHARP_,p2__41581_SHARP_], 0));
});})(map__41586,map__41586__$1,config,root_render,normalize,tx_listen,instrument))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41586__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var render_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41586__$1,new cljs.core.Keyword(null,"render-mode","render-mode",-151613976),new cljs.core.Keyword(null,"normal","normal",-1519123858));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41586__$1,new cljs.core.Keyword(null,"history","history",-247395220),(200));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var lifecycle = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41586__$1,new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),null);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41586__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__41586,map__41586__$1,config,root_render,normalize,tx_listen,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,parser,id){
return (function (p1__41584_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__41584_SHARP_);
});})(map__41586,map__41586__$1,config,root_render,normalize,tx_listen,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,parser,id))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161));
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41586__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__41586,map__41586__$1,config,root_render,normalize,tx_listen,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,parser,id,root_unmount,send,merge_tree,shared){
return (function fulcro$client$primitives$reconciler_$_depth_sorter(cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.depth,cs);
});})(map__41586,map__41586__$1,config,root_render,normalize,tx_listen,instrument,merge_sends,merge_ident,remotes,render_mode,migrate,history,state,lifecycle,shared_fn,parser,id,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = fulcro.client.primitives.map__GT_Indexer(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null));
var norm_QMARK_ = ((!((state == null)))?(((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$))))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state));
var ret = (new fulcro.client.primitives.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"render-mode","render-mode",-151613976),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367)],[true,instrument,merge_ident,merge_sends,remotes,render_mode,migrate,state_SINGLEQUOTE_,lifecycle,shared_fn,parser,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__3922__auto__ = !(norm_QMARK_);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return normalize;
}
})(),tx_listen]),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,id,(0),null])),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fulcro.history.new_history(history)),null,null,null));
return ret;
});
/**
 * Internal implementation detail of transact!. Call that function instead.
 */
fulcro.client.primitives.transact_STAR_ = (function fulcro$client$primitives$transact_STAR_(reconciler,c,ref,tx){
if(cljs.core.truth_(reconciler)){
fulcro.client.impl.protocols.tick_BANG_(reconciler);

var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var ref__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = c;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = ((!((c == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$Ident$))))?true:false):false);
if(and__3911__auto____$1){
return cljs.core.not(ref);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?fulcro.client.primitives.ident(c,fulcro.client.primitives.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null)], 0));
var old_state = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg));
var history = fulcro.client.primitives.get_history(reconciler);
var v = (function (){var fexpr__41606 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg);
return (fexpr__41606.cljs$core$IFn$_invoke$arity$2 ? fexpr__41606.cljs$core$IFn$_invoke$arity$2(env,tx) : fexpr__41606.call(null,env,tx));
})();
var declared_refreshes = (function (){var or__3922__auto__ = (function (){var G__41610 = v;
var G__41610__$1 = (((G__41610 == null))?null:cljs.core.meta(G__41610));
var G__41610__$2 = (((G__41610__$1 == null))?null:new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561).cljs$core$IFn$_invoke$arity$1(G__41610__$1));
if((G__41610__$2 == null)){
return null;
} else {
return cljs.core.vec(G__41610__$2);
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var follow_on_reads = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(declared_refreshes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,tx));
var tx_time = fulcro.client.primitives.get_current_time(reconciler);
var snds = fulcro.client.primitives.gather_sends(env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg),tx_time);
var new_state = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg));
var xs = (function (){var G__41612 = follow_on_reads;
var G__41612__$1 = ((!((c == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41612,c):G__41612);
if(!((ref__$1 == null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41612__$1,ref__$1);
} else {
return G__41612__$1;
}
})();
var history_step = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993),tx,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),snds,new cljs.core.Keyword("fulcro.history","db-before","fulcro.history/db-before",650457365),old_state,new cljs.core.Keyword("fulcro.history","db-after","fulcro.history/db-after",-1774997361),new_state], null);
if(cljs.core.truth_(history)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history,fulcro.history.record_history_step,tx_time,history_step);
} else {
}

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,cljs.core.into.cljs$core$IFn$_invoke$arity$3(xs,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
} else {
var seq__41613_41633 = cljs.core.seq(snds);
var chunk__41614_41634 = null;
var count__41615_41635 = (0);
var i__41616_41636 = (0);
while(true){
if((i__41616_41636 < count__41615_41635)){
var vec__41617_41638 = chunk__41614_41634.cljs$core$IIndexed$_nth$arity$2(null,i__41616_41636);
var remote_41639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41617_41638,(0),null);
var __41640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41617_41638,(1),null);
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,xs,remote_41639);


var G__41641 = seq__41613_41633;
var G__41642 = chunk__41614_41634;
var G__41643 = count__41615_41635;
var G__41644 = (i__41616_41636 + (1));
seq__41613_41633 = G__41641;
chunk__41614_41634 = G__41642;
count__41615_41635 = G__41643;
i__41616_41636 = G__41644;
continue;
} else {
var temp__5457__auto___41645 = cljs.core.seq(seq__41613_41633);
if(temp__5457__auto___41645){
var seq__41613_41646__$1 = temp__5457__auto___41645;
if(cljs.core.chunked_seq_QMARK_(seq__41613_41646__$1)){
var c__4319__auto___41647 = cljs.core.chunk_first(seq__41613_41646__$1);
var G__41648 = cljs.core.chunk_rest(seq__41613_41646__$1);
var G__41649 = c__4319__auto___41647;
var G__41650 = cljs.core.count(c__4319__auto___41647);
var G__41651 = (0);
seq__41613_41633 = G__41648;
chunk__41614_41634 = G__41649;
count__41615_41635 = G__41650;
i__41616_41636 = G__41651;
continue;
} else {
var vec__41620_41652 = cljs.core.first(seq__41613_41646__$1);
var remote_41653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41620_41652,(0),null);
var __41654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41620_41652,(1),null);
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,xs,remote_41653);


var G__41655 = cljs.core.next(seq__41613_41646__$1);
var G__41656 = null;
var G__41657 = (0);
var G__41658 = (0);
seq__41613_41633 = G__41655;
chunk__41614_41634 = G__41656;
count__41615_41635 = G__41657;
i__41616_41636 = G__41658;
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

var temp__5457__auto___41661 = new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5457__auto___41661)){
var f_41663 = temp__5457__auto___41661;
var tx_data_41664 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_state], null)], 0));
var G__41625_41665 = tx_data_41664;
var G__41626_41666 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(history_step,new cljs.core.Keyword(null,"tx","tx",466630418),tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ret","ret",-468222814),v], 0));
(f_41663.cljs$core$IFn$_invoke$arity$2 ? f_41663.cljs$core$IFn$_invoke$arity$2(G__41625_41665,G__41626_41666) : f_41663.call(null,G__41625_41665,G__41626_41666));
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
var G__41671 = expr;
if(fulcro.util.mutation_QMARK_(expr)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__41671,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__41671;
}
});
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__41667_SHARP_){
return annotate(p1__41667_SHARP_,ident);
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
var G__41677 = arguments.length;
switch (G__41677) {
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
if(((fulcro.client.primitives.component_QMARK_(x)) || (fulcro.client.primitives.reconciler_QMARK_(x)))){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2451], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["running transaction: ",tx], 0));
}catch (e41678){if((e41678 instanceof Error)){
var e__33343__auto___41694 = e41678;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2451], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___41694], 0));
} else {
throw e41678;

}
}
var tx__$1 = (function (){var G__41679 = tx;
if((function (){var and__3911__auto__ = fulcro.client.primitives.component_QMARK_(x);
if(and__3911__auto__){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro$client$primitives$Ident$)))){
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
return and__3911__auto__;
}
})()){
return fulcro.client.primitives.annotate_mutations(G__41679,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(x));
} else {
return G__41679;
}
})();
if(fulcro.client.primitives.reconciler_QMARK_(x)){
return fulcro.client.primitives.transact_STAR_(x,null,null,tx__$1);
} else {
if(!(fulcro.client.primitives.has_query_QMARK_(x))){
if(cljs.core.truth_(fulcro.client.primitives.some_hasquery_QMARK_(x))){
} else {
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2458], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["transact! should be called on a component","that implements IQuery or has a parent that","implements IQuery"].join('')], 0));
}catch (e41685){if((e41685 instanceof Error)){
var e__33343__auto___41695 = e41685;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2458], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___41695], 0));
} else {
throw e41685;

}
}}

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
var vec__41686 = ((((!((p == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p.fulcro$client$impl$protocols$ITxIntercept$))))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,fulcro.client.impl.protocols.tx_intercept(p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41686,(0),null);
var tx__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41686,(1),null);
var G__41699 = fulcro.client.primitives.parent(p);
var G__41700 = x_SINGLEQUOTE_;
var G__41701 = tx__$3;
p = G__41699;
x__$1 = G__41700;
tx__$2 = G__41701;
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

if(((!((component == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$ILocalState$))))?true:false):false)){
fulcro.client.primitives._set_state_BANG_(component,new_state);
} else {
var G__41706_41712 = component.state;
var G__41707_41713 = "fulcro$pendingState";
var G__41708_41714 = new_state;
goog.object.set(G__41706_41712,G__41707_41713,G__41708_41714);
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
var G__41716 = arguments.length;
switch (G__41716) {
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
var G__41732 = arguments.length;
switch (G__41732) {
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
var args_arr__4514__auto__ = [];
var len__4499__auto___41755 = arguments.length;
var i__4500__auto___41756 = (0);
while(true){
if((i__4500__auto___41756 < len__4499__auto___41755)){
args_arr__4514__auto__.push((arguments[i__4500__auto___41756]));

var G__41757 = (i__4500__auto___41756 + (1));
i__4500__auto___41756 = G__41757;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((6)),(0),null));
return fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4515__auto__);

}
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__41734 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41734) : f.call(null,G__41734));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__41737 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__41738 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41737,G__41738) : f.call(null,G__41737,G__41738));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__41739 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__41740 = arg0;
var G__41741 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__41739,G__41740,G__41741) : f.call(null,G__41739,G__41740,G__41741));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__41742 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__41743 = arg0;
var G__41744 = arg1;
var G__41745 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__41742,G__41743,G__41744,G__41745) : f.call(null,G__41742,G__41743,G__41744,G__41745));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return fulcro.client.primitives.set_state_BANG_(component,(function (){var G__41746 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__41747 = arg0;
var G__41748 = arg1;
var G__41749 = arg2;
var G__41750 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__41746,G__41747,G__41748,G__41749,G__41750) : f.call(null,G__41746,G__41747,G__41748,G__41749,G__41750));
})());
});

fulcro.client.primitives.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return fulcro.client.primitives.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg3,arg_rest], 0)));
});

/** @this {Function} */
fulcro.client.primitives.update_state_BANG_.cljs$lang$applyTo = (function (seq41725){
var G__41726 = cljs.core.first(seq41725);
var seq41725__$1 = cljs.core.next(seq41725);
var G__41727 = cljs.core.first(seq41725__$1);
var seq41725__$2 = cljs.core.next(seq41725__$1);
var G__41728 = cljs.core.first(seq41725__$2);
var seq41725__$3 = cljs.core.next(seq41725__$2);
var G__41729 = cljs.core.first(seq41725__$3);
var seq41725__$4 = cljs.core.next(seq41725__$3);
var G__41730 = cljs.core.first(seq41725__$4);
var seq41725__$5 = cljs.core.next(seq41725__$4);
var G__41731 = cljs.core.first(seq41725__$5);
var seq41725__$6 = cljs.core.next(seq41725__$5);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41726,G__41727,G__41728,G__41729,G__41730,G__41731,seq41725__$6);
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

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
fulcro.client.primitives.app_root = (function fulcro$client$primitives$app_root(reconciler){
if(fulcro.client.primitives.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
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
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.query__GT_ast(query_expr)));
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

var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454));
if(cljs.core.truth_(temp__5457__auto__)){
var render = temp__5457__auto__;
var _STAR_blindly_render_STAR_41773 = fulcro.client.primitives._STAR_blindly_render_STAR_;
fulcro.client.primitives._STAR_blindly_render_STAR_ = true;

try{return (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
}finally {fulcro.client.primitives._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR_41773;
}} else {
return null;
}
});
/**
 * Return a temporary id.
 */
fulcro.client.primitives.tempid = (function fulcro$client$primitives$tempid(var_args){
var G__41778 = arguments.length;
switch (G__41778) {
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
var G__41786 = arguments.length;
switch (G__41786) {
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
var G__41793 = arguments.length;
switch (G__41793) {
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
fulcro.client.primitives.parser = (function fulcro$client$primitives$parser(p__41798){
var map__41799 = p__41798;
var map__41799__$1 = ((((!((map__41799 == null)))?(((((map__41799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41799):map__41799);
var opts = map__41799__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41799__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41799__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
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
var G__41805 = arguments.length;
switch (G__41805) {
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

var temp__5457__auto___41810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.client.primitives.roots),target);
if(cljs.core.truth_(temp__5457__auto___41810)){
var old_reconciler_41811 = temp__5457__auto___41810;
(fulcro.client.primitives.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.primitives.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_41811,target) : fulcro.client.primitives.remove_root_BANG_.call(null,old_reconciler_41811,target));
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
var G__41813 = arguments.length;
switch (G__41813) {
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

var shared = (function (){var G__41817 = component.props;
var G__41818 = "fulcro$shared";
return goog.object.get(G__41817,G__41818);
})();
var ks = (function (){var G__41819 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__41819],null));
} else {
return G__41819;
}
})();
var G__41820 = shared;
if(!(cljs.core.empty_QMARK_(ks))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__41820,ks);
} else {
return G__41820;
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
if(((!((c == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.fulcro$client$primitives$ILocalState$))))?true:false):false)){
return fulcro.client.primitives._merge_pending_state_BANG_(c);
} else {
var temp__5457__auto__ = (function (){var G__41829 = c;
var G__41829__$1 = (((G__41829 == null))?null:G__41829.state);
if((G__41829__$1 == null)){
return null;
} else {
return goog.object.get(G__41829__$1,"fulcro$pendingState");
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
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Get any component from the indexer that matches the component class.
 */
fulcro.client.primitives.class__GT_all = (function fulcro$client$primitives$class__GT_all(x,class$){
var indexer = ((fulcro.client.primitives.reconciler_QMARK_(x))?fulcro.client.primitives.get_indexer(x):x);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null));
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
var G__41840 = arguments.length;
switch (G__41840) {
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

var cst = ((((!((component == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === component.fulcro$client$primitives$ILocalState$))))?true:false):false))?fulcro.client.primitives._get_rendered_state(component):(function (){var G__41844 = component;
var G__41844__$1 = (((G__41844 == null))?null:G__41844.state);
if((G__41844__$1 == null)){
return null;
} else {
return goog.object.get(G__41844__$1,"fulcro$state");
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

fulcro.client.primitives.get_rendered_state.cljs$lang$maxFixedArity = 2;

fulcro.client.primitives.nil_or_map_QMARK_ = (function fulcro$client$primitives$nil_or_map_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_(x)));
});
/**
 * Returns the component associated with a component's React ref.
 */
fulcro.client.primitives.react_ref = (function fulcro$client$primitives$react_ref(component,name){
var G__41850 = component.refs;
if((G__41850 == null)){
return null;
} else {
return goog.object.get(G__41850,name);
}
});
/**
 * Set a dynamic query. ALters the query, and then rebuilds internal indexes.
 */
fulcro.client.primitives.set_query_BANG_ = (function fulcro$client$primitives$set_query_BANG_(component_or_reconciler,ui_factory_or_queryid,p__41854){
var map__41855 = p__41854;
var map__41855__$1 = ((((!((map__41855 == null)))?(((((map__41855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41855):map__41855);
var opts = map__41855__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"params","params",710516235));
var follow_on_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,new cljs.core.Keyword(null,"follow-on-reads","follow-on-reads",-2113573300));
var reconciler = ((fulcro.client.primitives.reconciler_QMARK_(component_or_reconciler))?component_or_reconciler:fulcro.client.primitives.get_reconciler(component_or_reconciler));
var queryid = ((typeof ui_factory_or_queryid === 'string')?ui_factory_or_queryid:(cljs.core.truth_((function (){var G__41857 = ui_factory_or_queryid;
var G__41857__$1 = (((G__41857 == null))?null:cljs.core.meta(G__41857));
if((G__41857__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__41857__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__41859 = ui_factory_or_queryid;
var G__41859__$1 = (((G__41859 == null))?null:cljs.core.meta(G__41859));
if((G__41859__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__41859__$1);
}
})():fulcro.client.primitives.query_id(ui_factory_or_queryid,null)
));
var tx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-query!","fulcro.client.mutations/set-query!",1750034612,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"queryid","queryid",-271432056),null,(1),null)),(new cljs.core.List(null,queryid,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"query","query",-1288509510),null,(1),null)),(new cljs.core.List(null,query,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"params","params",710516235),null,(1),null)),(new cljs.core.List(null,params,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))),follow_on_reads);
if(cljs.core.truth_((function (){var and__3911__auto__ = typeof queryid === 'string';
if(and__3911__auto__){
var or__3922__auto__ = query;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return params;
}
} else {
return and__3911__auto__;
}
})())){
fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,tx);

return fulcro.client.impl.protocols.reindex_BANG_(reconciler);
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2732], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to set query. Invalid arguments."], 0));
}catch (e41862){if((e41862 instanceof Error)){
var e__33343__auto__ = e41862;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2732], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e41862;

}
}}
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
var G__41875 = arguments.length;
switch (G__41875) {
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

fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2 = (function (tx,p__41876){
var map__41877 = p__41876;
var map__41877__$1 = ((((!((map__41877 == null)))?(((((map__41877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41877):map__41877);
var options = map__41877__$1;
var valid_remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41877__$1,new cljs.core.Keyword(null,"valid-remotes","valid-remotes",-1188757845),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41877__$1,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.PersistentArrayMap.EMPTY);
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41877__$1,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),cljs.core.PersistentArrayMap.EMPTY);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.query__GT_ast(tx));
var map__41881 = cljs.core.group_by(((function (ast_nodes,map__41877,map__41877__$1,options,valid_remotes,env,state_map){
return (function (p1__41869_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__41869_SHARP_));
});})(ast_nodes,map__41877,map__41877__$1,options,valid_remotes,env,state_map))
,ast_nodes);
var map__41881__$1 = ((((!((map__41881 == null)))?(((((map__41881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41881):map__41881);
var ast_calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41881__$1,true);
var ast_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41881__$1,false);
var ast_follow_on_reads = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),ast_reads], null));
var remote_for_ast_call = ((function (ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,map__41877,map__41877__$1,options,valid_remotes,env,state_map){
return (function (c){
var dispatch_key = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(c);
var get_remotes = (function (){var or__3922__auto__ = (function (){var G__41894 = ((typeof fulcro.client.data_fetch.get_remotes !== 'undefined')?(new cljs.core.Var(((function (dispatch_key,ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,map__41877,map__41877__$1,options,valid_remotes,env,state_map){
return (function (){
return fulcro.client.data_fetch.get_remotes;
});})(dispatch_key,ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,map__41877,map__41877__$1,options,valid_remotes,env,state_map))
,cljs.core.with_meta(new cljs.core.Symbol("fulcro.client.data-fetch","get-remotes","fulcro.client.data-fetch/get-remotes",-1426481225,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
if((G__41894 == null)){
return null;
} else {
return cljs.core.deref(G__41894);
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((function (or__3922__auto__,dispatch_key,ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,map__41877,map__41877__$1,options,valid_remotes,env,state_map){
return (function (state_map__$1,sym){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2755], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FAILED TO FIND get-remotes. CANNOT DERIVE REMOTES FOR ptransact! Assuming :remote"], 0));
}catch (e41896){if((e41896 instanceof Error)){
var e__33343__auto___41910 = e41896;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),2755], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___41910], 0));
} else {
throw e41896;

}
}
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null);
});
;})(or__3922__auto__,dispatch_key,ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,map__41877,map__41877__$1,options,valid_remotes,env,state_map))
}
})();
var remotes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fallback",cljs.core.name(dispatch_key)))?cljs.core.PersistentHashSet.EMPTY:(get_remotes.cljs$core$IFn$_invoke$arity$2 ? get_remotes.cljs$core$IFn$_invoke$arity$2(state_map,dispatch_key) : get_remotes.call(null,state_map,dispatch_key)));
if(cljs.core.seq(remotes)){
return cljs.core.first(remotes);
} else {
return null;
}
});})(ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,map__41877,map__41877__$1,options,valid_remotes,env,state_map))
;
var is_local_QMARK_ = ((function (ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,map__41877,map__41877__$1,options,valid_remotes,env,state_map){
return (function (c){
return cljs.core.not(remote_for_ast_call(c));
});})(ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,map__41877,map__41877__$1,options,valid_remotes,env,state_map))
;
var vec__41882 = cljs.core.split_with(is_local_QMARK_,ast_calls);
var ast_local_calls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41882,(0),null);
var ast_remaining_calls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41882,(1),null);
var ast_first_remote_call = (function (){var G__41897 = ast_remaining_calls;
if((G__41897 == null)){
return null;
} else {
return cljs.core.first(G__41897);
}
})();
var remote = (function (){var G__41898 = ast_first_remote_call;
if((G__41898 == null)){
return null;
} else {
return remote_for_ast_call(G__41898);
}
})();
var unprocessed_call_asts = cljs.core.vec(cljs.core.rest(ast_remaining_calls));
var vec__41885 = cljs.core.split_with(is_local_QMARK_,unprocessed_call_asts);
var possible_fallback_asts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41885,(0),null);
var distant_call_asts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41885,(1),null);
var map__41888 = cljs.core.group_by(((function (ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,is_local_QMARK_,vec__41882,ast_local_calls,ast_remaining_calls,ast_first_remote_call,remote,unprocessed_call_asts,vec__41885,possible_fallback_asts,distant_call_asts,map__41877,map__41877__$1,options,valid_remotes,env,state_map){
return (function (p1__41870_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fallback",cljs.core.name(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__41870_SHARP_)));
});})(ast_nodes,map__41881,map__41881__$1,ast_calls,ast_reads,ast_follow_on_reads,remote_for_ast_call,is_local_QMARK_,vec__41882,ast_local_calls,ast_remaining_calls,ast_first_remote_call,remote,unprocessed_call_asts,vec__41885,possible_fallback_asts,distant_call_asts,map__41877,map__41877__$1,options,valid_remotes,env,state_map))
,possible_fallback_asts);
var map__41888__$1 = ((((!((map__41888 == null)))?(((((map__41888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41888):map__41888);
var fallback_asts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41888__$1,true);
var following_call_asts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41888__$1,false);
var unprocessed_tx = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(following_call_asts,distant_call_asts)], null));
var calls_to_run_now = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ast_local_calls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_first_remote_call], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fallback_asts], 0)));
var tx_for_calls = fulcro.client.primitives.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),calls_to_run_now], null));
var tx_to_run_now = cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx_for_calls,ast_follow_on_reads);
var tx_to_defer = cljs.core.into.cljs$core$IFn$_invoke$arity$2(unprocessed_tx,ast_follow_on_reads);
var defer_QMARK_ = cljs.core.seq(unprocessed_call_asts);
var deferred_params = ((defer_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"tx","tx",466630418),fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2(tx_to_defer,options)], null)], 0)):null);
if(defer_QMARK_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx_to_run_now,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.data-fetch","deferred-transaction","fulcro.client.data-fetch/deferred-transaction",574929731,null),null,(1),null)),(new cljs.core.List(null,deferred_params,null,(1),null))))),null,(1),null)))))));
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
 *   WARNINGS: Mutations that interact with more than one remote *at the same time* will only wait for one of the remotes to finish.
 *   Also, mutations that just issue loads should *not* be used. This function defers pessimistic *writes*, not reads.
 */
fulcro.client.primitives.ptransact_BANG_ = (function fulcro$client$primitives$ptransact_BANG_(var_args){
var G__41921 = arguments.length;
switch (G__41921) {
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
var ref = ((((fulcro.client.primitives.component_QMARK_(comp_or_reconciler)) && (fulcro.client.primitives.has_ident_QMARK_(comp_or_reconciler))))?fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(comp_or_reconciler):null);
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3(comp_or_reconciler,ref,tx);
});

fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (comp_or_reconciler,ref,tx){
var reconciler = ((fulcro.client.primitives.reconciler_QMARK_(comp_or_reconciler))?comp_or_reconciler:fulcro.client.primitives.get_reconciler(comp_or_reconciler));
var state_map = cljs.core.deref(fulcro.client.primitives.app_state(reconciler));
var remotes = (function (){var G__41923 = reconciler;
var G__41923__$1 = (((G__41923 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__41923));
var G__41923__$2 = (((G__41923__$1 == null))?null:new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(G__41923__$1));
if((G__41923__$2 == null)){
return null;
} else {
return cljs.core.set(G__41923__$2);
}
})();
var ptx = fulcro.client.primitives.pessimistic_transaction__GT_transaction.cljs$core$IFn$_invoke$arity$2(tx,(function (){var G__41926 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid-remotes","valid-remotes",-1188757845),remotes,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),state_map], null);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41926,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
} else {
return G__41926;
}
})());
return setTimeout(((function (reconciler,state_map,remotes,ptx){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp_or_reconciler,ptx);
});})(reconciler,state_map,remotes,ptx))
,(0));
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
var G__41936 = arguments.length;
switch (G__41936) {
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid arity for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_known_sym)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),user_arity,new cljs.core.Keyword(null,"got","got",-1674745710),cljs.core.count(cljs.core.second(fn_form))], null));
}

var user_args = cljs.core.second(fn_form);
var updated_args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec((function (){var or__3922__auto__ = external_args;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
return (function fulcro$client$primitives$make_state_map_$_value_of_STAR_(p__41944){
var vec__41945 = p__41944;
var isk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41945,(0),null);
var isv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41945,(1),null);
var param_name = ((function (vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (v){
var and__3911__auto__ = (v instanceof cljs.core.Keyword);
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(v));
if(and__3911__auto____$1){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});})(vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_))
;
var substitute = ((function (param_name,vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
var temp__5455__auto__ = param_name(ele);
if(cljs.core.truth_(temp__5455__auto__)){
var k = temp__5455__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
} else {
return ele;
}
});})(param_name,vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_))
;
var param_key = param_name(isv);
var param_exists_QMARK_ = cljs.core.contains_QMARK_(params,param_key);
var param_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,param_key);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children_by_query_key,isk);
if(cljs.core.truth_((function (){var and__3911__auto__ = param_key;
if(cljs.core.truth_(and__3911__auto__)){
return !(param_exists_QMARK_);
} else {
return and__3911__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.map_QMARK_(isv);
if(and__3911__auto__){
return is_child_QMARK_(isk);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,fulcro.client.primitives.get_initial_state(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,isv)))], null);
} else {
if(cljs.core.map_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,isv))], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.vector_QMARK_(isv);
if(and__3911__auto__){
return is_child_QMARK_(isk);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (m){
return fulcro.client.primitives.get_initial_state(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$primitives$make_state_map_$_value_of_STAR_,m)));
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_))
,isv)], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.vector_QMARK_(param_value);
if(and__3911__auto__){
return is_child_QMARK_(isk);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (params__$1){
if(cljs.core.truth_(fulcro.client.primitives.computed_initial_state_QMARK_(params__$1))){
return params__$1;
} else {
return fulcro.client.primitives.get_initial_state(child_class,params__$1);
}
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_))
,param_value)], null);
} else {
if(cljs.core.vector_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
return substitute(ele);
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__41945,isk,isv,join_keys,init_keys,is_child_QMARK_))
,isv)], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = param_key;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = is_child_QMARK_(isk);
if(cljs.core.truth_(and__3911__auto____$1)){
return param_exists_QMARK_;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,(cljs.core.truth_(fulcro.client.primitives.computed_initial_state_QMARK_(param_value))?param_value:fulcro.client.primitives.get_initial_state(child_class,param_value))], null);
} else {
if(cljs.core.truth_(param_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,param_value], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,isv], null);

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
var args__4502__auto__ = [];
var len__4499__auto___41985 = arguments.length;
var i__4500__auto___41986 = (0);
while(true){
if((i__4500__auto___41986 < len__4499__auto___41985)){
args__4502__auto__.push((arguments[i__4500__auto___41986]));

var G__41987 = (i__4500__auto___41986 + (1));
i__4500__auto___41986 = G__41987;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.client.primitives.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.client.primitives.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__41977){
var vec__41978 = p__41977;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__41978,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__41978,command,data_path,actions){
return (function (p1__41969_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__41969_SHARP_,ident);
});})(vec__41978,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__41978,command,data_path,actions))
;
var G__41981 = command;
var G__41981__$1 = (((G__41981 instanceof cljs.core.Keyword))?G__41981.fqn:null);
switch (G__41981__$1) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for prepend must target an app-state vector."].join('')),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__41981,G__41981__$1,already_has_ident_at_path_QMARK_,vec__41978,command,data_path,actions){
return (function (p1__41970_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__41970_SHARP_);
});})(G__41981,G__41981__$1,already_has_ident_at_path_QMARK_,vec__41978,command,data_path,actions))
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

fulcro.client.primitives.integrate_ident.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.primitives.integrate_ident.cljs$lang$applyTo = (function (seq41971){
var G__41972 = cljs.core.first(seq41971);
var seq41971__$1 = cljs.core.next(seq41971);
var G__41973 = cljs.core.first(seq41971__$1);
var seq41971__$2 = cljs.core.next(seq41971__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41972,G__41973,seq41971__$2);
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
var merge_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro","merge","fulcro/merge",-1037375858),base_query], null)], null);
var existing_data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(base_query,cljs.core.deref(state_atom),cljs.core.deref(state_atom)),ident,cljs.core.PersistentArrayMap.EMPTY);
var marked_data = fulcro.client.primitives.mark_missing(object_data,object_query__$1);
var merge_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro","merge","fulcro/merge",-1037375858),cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_data,marked_data], 0))])], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge-query","merge-query",610171663),merge_query,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734),merge_data], null);
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
var args__4502__auto__ = [];
var len__4499__auto___42013 = arguments.length;
var i__4500__auto___42014 = (0);
while(true){
if((i__4500__auto___42014 < len__4499__auto___42013)){
args__4502__auto__.push((arguments[i__4500__auto___42014]));

var G__42015 = (i__4500__auto___42014 + (1));
i__4500__auto___42014 = G__42015;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.client.primitives.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.client.primitives.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.truth_(fulcro.client.primitives.is_atom_QMARK_(state))){
} else {
throw (new Error(["Assert failed: ","The state has to be an atom. Use 'integrate-ident' instead.","\n","(is-atom? state)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,fulcro.client.primitives.integrate_ident,ident,named_parameters);
});

fulcro.client.primitives.integrate_ident_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.primitives.integrate_ident_BANG_.cljs$lang$applyTo = (function (seq42007){
var G__42008 = cljs.core.first(seq42007);
var seq42007__$1 = cljs.core.next(seq42007);
var G__42009 = cljs.core.first(seq42007__$1);
var seq42007__$2 = cljs.core.next(seq42007__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42008,G__42009,seq42007__$2);
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
var table_entries = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,state_to_merge,true),new cljs.core.Keyword("fulcro.client.primitives","tables","fulcro.client.primitives/tables",-1418944816),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_ident], 0));
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
var args__4502__auto__ = [];
var len__4499__auto___42035 = arguments.length;
var i__4500__auto___42036 = (0);
while(true){
if((i__4500__auto___42036 < len__4499__auto___42035)){
args__4502__auto__.push((arguments[i__4500__auto___42036]));

var G__42037 = (i__4500__auto___42036 + (1));
i__4500__auto___42036 = G__42037;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fulcro.client.primitives.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fulcro.client.primitives.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (reconciler,component,object_data,named_parameters){
if(!(fulcro.client.primitives.has_ident_QMARK_(component))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3360], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["merge-component!: component must implement Ident. Merge skipped."], 0));
}catch (e42029){if((e42029 instanceof Error)){
var e__33343__auto__ = e42029;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.primitives",new cljs.core.Keyword(null,"line","line",212345235),3360], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e42029;

}
}} else {
var ident = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,object_data);
var reconciler__$1 = ((cljs.core.contains_QMARK_(reconciler,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)))?new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(reconciler):reconciler);
var state = fulcro.client.primitives.app_state(reconciler__$1);
var data_path_keys = cljs.core.vec(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters))))));
var map__42030 = fulcro.client.primitives.preprocess_merge(state,component,object_data);
var map__42030__$1 = ((((!((map__42030 == null)))?(((((map__42030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42030):map__42030);
var merge_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42030__$1,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734));
var merge_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42030__$1,new cljs.core.Keyword(null,"merge-query","merge-query",610171663));
fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler__$1,merge_data,merge_query);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword("fulcro","merge","fulcro/merge",-1037375858));

cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.integrate_ident_BANG_,state,ident,named_parameters);

fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_path_keys,ident));

return cljs.core.deref(state);
}
});

fulcro.client.primitives.merge_component_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.client.primitives.merge_component_BANG_.cljs$lang$applyTo = (function (seq42024){
var G__42025 = cljs.core.first(seq42024);
var seq42024__$1 = cljs.core.next(seq42024);
var G__42027 = cljs.core.first(seq42024__$1);
var seq42024__$2 = cljs.core.next(seq42024__$1);
var G__42028 = cljs.core.first(seq42024__$2);
var seq42024__$3 = cljs.core.next(seq42024__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42025,G__42027,G__42028,seq42024__$3);
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
var fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3 = (function (p__42058,visitor,parent_union){
var map__42060 = p__42058;
var map__42060__$1 = ((((!((map__42060 == null)))?(((((map__42060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42060):map__42060);
var parent_ast = map__42060__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_((function (){var and__3911__auto__ = component;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = parent_union;
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union-entry","union-entry",223335750),type);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
(visitor.cljs$core$IFn$_invoke$arity$2 ? visitor.cljs$core$IFn$_invoke$arity$2(component,parent_union) : visitor.call(null,component,parent_union));
} else {
}

if(cljs.core.truth_(children)){
var seq__42063 = cljs.core.seq(children);
var chunk__42064 = null;
var count__42065 = (0);
var i__42066 = (0);
while(true){
if((i__42066 < count__42065)){
var ast = chunk__42064.cljs$core$IIndexed$_nth$arity$2(null,i__42066);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}


var G__42074 = seq__42063;
var G__42075 = chunk__42064;
var G__42076 = count__42065;
var G__42077 = (i__42066 + (1));
seq__42063 = G__42074;
chunk__42064 = G__42075;
count__42065 = G__42076;
i__42066 = G__42077;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__42063);
if(temp__5457__auto__){
var seq__42063__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42063__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__42063__$1);
var G__42080 = cljs.core.chunk_rest(seq__42063__$1);
var G__42081 = c__4319__auto__;
var G__42082 = cljs.core.count(c__4319__auto__);
var G__42083 = (0);
seq__42063 = G__42080;
chunk__42064 = G__42081;
count__42065 = G__42082;
i__42066 = G__42083;
continue;
} else {
var ast = cljs.core.first(seq__42063__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}


var G__42084 = cljs.core.next(seq__42063__$1);
var G__42085 = null;
var G__42086 = (0);
var G__42087 = (0);
seq__42063 = G__42084;
chunk__42064 = G__42085;
count__42065 = G__42086;
i__42066 = G__42087;
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
fulcro$client$primitives$merge_alternate_unions_$_walk_ast = function(p__42058,visitor,parent_union){
switch(arguments.length){
case 2:
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast__2.call(this,p__42058,visitor);
case 3:
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3.call(this,p__42058,visitor,parent_union);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$2 = fulcro$client$primitives$merge_alternate_unions_$_walk_ast__2;
fulcro$client$primitives$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3 = fulcro$client$primitives$merge_alternate_unions_$_walk_ast__3;
return fulcro$client$primitives$merge_alternate_unions_$_walk_ast;
})()
;
var merge_union = (function fulcro$client$primitives$merge_alternate_unions_$_merge_union(component,parent_union){
var default_initial_state = (function (){var and__3911__auto__ = parent_union;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = fulcro.client.primitives.has_initial_app_state_QMARK_(parent_union);
if(and__3911__auto____$1){
return fulcro.client.primitives.get_initial_state(parent_union,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_(default_initial_state);
var component_initial_state = (function (){var and__3911__auto__ = component;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = fulcro.client.primitives.has_initial_app_state_QMARK_(component);
if(and__3911__auto____$1){
return fulcro.client.primitives.get_initial_state(component,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = component;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = component_initial_state;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = parent_union;
if(cljs.core.truth_(and__3911__auto____$2)){
return ((!(to_many_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(default_initial_state,component_initial_state)));
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
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

//# sourceMappingURL=fulcro.client.primitives.js.map

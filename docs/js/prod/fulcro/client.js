// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.impl.application');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.network');
goog.require('fulcro.client.logging');
goog.require('cljs.core.async');
goog.require('fulcro.client.impl.protocols');
goog.require('fulcro.util');
goog.require('fulcro.client.util');
goog.require('clojure.set');
goog.require('goog.dom');
goog.require('cljs.spec.alpha');
goog.require('fulcro.history');
goog.require('goog.Uri');




if(typeof fulcro.client.fulcro_tools !== 'undefined'){
} else {
fulcro.client.fulcro_tools = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_namespace),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_namespace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.namespace], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client_SLASH_tx_DASH_listen,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$tx_DASH_info,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$tx_DASH_info,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$tx_DASH_info], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$tx_DASH_info,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client_SLASH_network_DASH_wrapper,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$networks,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$networks,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$networks,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client_SLASH_app_DASH_started,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$fulcro_DASH_app,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$fulcro_DASH_app,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro_DASH_app], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$fulcro_DASH_app,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client_SLASH_lifecycle_DASH_event,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mounted,null,cljs.core.cst$kw$unmounted,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mounted,null,cljs.core.cst$kw$unmounted,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client_SLASH_instrument,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_props,cljs.core.cst$kw$fulcro$client_SLASH_children,cljs.core.cst$kw$fulcro$client_SLASH_class,cljs.core.cst$kw$fulcro$client_SLASH_factory], null))),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_props,cljs.core.cst$kw$fulcro$client_SLASH_children,cljs.core.cst$kw$fulcro$client_SLASH_class,cljs.core.cst$kw$fulcro$client_SLASH_factory], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_props,cljs.core.cst$kw$fulcro$client_SLASH_children,cljs.core.cst$kw$fulcro$client_SLASH_class,cljs.core.cst$kw$fulcro$client_SLASH_factory], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42726){
return cljs.core.map_QMARK_(G__42726);
}),(function (G__42726){
return cljs.core.contains_QMARK_(G__42726,cljs.core.cst$kw$props);
}),(function (G__42726){
return cljs.core.contains_QMARK_(G__42726,cljs.core.cst$kw$children);
}),(function (G__42726){
return cljs.core.contains_QMARK_(G__42726,cljs.core.cst$kw$class);
}),(function (G__42726){
return cljs.core.contains_QMARK_(G__42726,cljs.core.cst$kw$factory);
})], null),(function (G__42726){
return (cljs.core.map_QMARK_(G__42726)) && (cljs.core.contains_QMARK_(G__42726,cljs.core.cst$kw$props)) && (cljs.core.contains_QMARK_(G__42726,cljs.core.cst$kw$children)) && (cljs.core.contains_QMARK_(G__42726,cljs.core.cst$kw$class)) && (cljs.core.contains_QMARK_(G__42726,cljs.core.cst$kw$factory));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_props,cljs.core.cst$kw$fulcro$client_SLASH_children,cljs.core.cst$kw$fulcro$client_SLASH_class,cljs.core.cst$kw$fulcro$client_SLASH_factory], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$props,cljs.core.cst$kw$children,cljs.core.cst$kw$class,cljs.core.cst$kw$factory], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$props)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$children)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$class)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$factory))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_props,cljs.core.cst$kw$fulcro$client_SLASH_children,cljs.core.cst$kw$fulcro$client_SLASH_class,cljs.core.cst$kw$fulcro$client_SLASH_factory], null))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_props,cljs.core.cst$kw$fulcro$client_SLASH_children,cljs.core.cst$kw$fulcro$client_SLASH_class,cljs.core.cst$kw$fulcro$client_SLASH_factory], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client_SLASH_component_DASH_lifecycle,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$react_DASH_component,cljs.core.cst$sym$fulcro$client$primitives_SLASH_component_QMARK_,cljs.core.cst$kw$event,cljs.core.cst$kw$fulcro$client_SLASH_lifecycle_DASH_event),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$react_DASH_component,cljs.core.cst$sym$fulcro$client$primitives_SLASH_component_QMARK_,cljs.core.cst$kw$event,cljs.core.cst$kw$fulcro$client_SLASH_lifecycle_DASH_event),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$react_DASH_component,cljs.core.cst$kw$event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.primitives.component_QMARK_,cljs.core.cst$kw$fulcro$client_SLASH_lifecycle_DASH_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fulcro$client$primitives_SLASH_component_QMARK_,cljs.core.cst$kw$fulcro$client_SLASH_lifecycle_DASH_event], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$react_DASH_component,cljs.core.cst$sym$fulcro$client$primitives_SLASH_component_QMARK_,cljs.core.cst$kw$event,cljs.core.cst$kw$fulcro$client_SLASH_lifecycle_DASH_event),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client_SLASH_instrument_DASH_wrapper,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$existing_DASH_instrument,cljs.core.cst$kw$fulcro$client_SLASH_instrument),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client_SLASH_instrument),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$existing_DASH_instrument,cljs.core.cst$kw$fulcro$client_SLASH_instrument),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$existing_DASH_instrument], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_instrument], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_instrument], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$existing_DASH_instrument,cljs.core.cst$kw$fulcro$client_SLASH_instrument),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client_SLASH_instrument,cljs.core.cst$kw$fulcro$client_SLASH_instrument,null,null),cljs.core.cst$kw$fulcro$client_SLASH_instrument,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_registry,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_tx_DASH_listen,cljs.core.cst$kw$fulcro$client_SLASH_network_DASH_wrapper,cljs.core.cst$kw$fulcro$client_SLASH_app_DASH_started,cljs.core.cst$kw$fulcro$client_SLASH_component_DASH_lifecycle,cljs.core.cst$kw$fulcro$client_SLASH_instrument_DASH_wrapper], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__42757){
return cljs.core.map_QMARK_(G__42757);
}),(function (G__42757){
return cljs.core.contains_QMARK_(G__42757,cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id);
})], null),(function (G__42757){
return (cljs.core.map_QMARK_(G__42757)) && (cljs.core.contains_QMARK_(G__42757,cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_tx_DASH_listen,cljs.core.cst$kw$fulcro$client_SLASH_network_DASH_wrapper,cljs.core.cst$kw$fulcro$client_SLASH_app_DASH_started,cljs.core.cst$kw$fulcro$client_SLASH_component_DASH_lifecycle,cljs.core.cst$kw$fulcro$client_SLASH_instrument_DASH_wrapper], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_tx_DASH_listen,cljs.core.cst$kw$fulcro$client_SLASH_network_DASH_wrapper,cljs.core.cst$kw$fulcro$client_SLASH_app_DASH_started,cljs.core.cst$kw$fulcro$client_SLASH_component_DASH_lifecycle,cljs.core.cst$kw$fulcro$client_SLASH_instrument_DASH_wrapper], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client_SLASH_tx_DASH_listen,cljs.core.cst$kw$fulcro$client_SLASH_network_DASH_wrapper,cljs.core.cst$kw$fulcro$client_SLASH_app_DASH_started,cljs.core.cst$kw$fulcro$client_SLASH_component_DASH_lifecycle,cljs.core.cst$kw$fulcro$client_SLASH_instrument_DASH_wrapper], null)])));
/**
 * Register a debug tool. When an app starts, the debug tool can have several hooks that are notified:
 * 
 *   ::tool-id some identifier to place the tool into the tool map
 *   ::tx-listen is a (fn [tx info] ...) that will be called on every `transact!` of the app. Return value is ignored.
 *   ::network-wrapper is (fn [network-map] network-map') that will be given the networking config BEFORE it is initialized. You can wrap
 *   them, but you MUST return a compatible map out or you'll disable networking.
 *   ::component-lifecycle is (fn [component evt]) that is called with evt of :mounted and :unmounted to tell you when the given component mounts/unmounts.
 *   ::instrument-wrapper is a (fn [instrument] instrument') that allows you to wrap your own instrumentation (for rendering) around any existing (which may be nil)
 *   ::app-started (fn [app] ...) that will be called once the app is mounted, just like started-callback. Return value ignored.
 */
fulcro.client.register_tool = (function fulcro$client$register_tool(p__42765){
var map__42766 = p__42765;
var map__42766__$1 = ((((!((map__42766 == null)))?((((map__42766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42766):map__42766);
var tool_registry = map__42766__$1;
var tool_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42766__$1,cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.fulcro_tools,cljs.core.assoc,tool_id,tool_registry);
});
fulcro.client.normalize_network = (function fulcro$client$normalize_network(networking){
if(((!((networking == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === networking.fulcro$client$network$FulcroNetwork$)))?true:false):false)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,networking], null);
} else {
return networking;
}
});
fulcro.client.add_tools = (function fulcro$client$add_tools(original_start,original_net,original_tx_listen,original_instrument){
var net = fulcro.client.normalize_network(original_net);
var listen = (function (){var or__10805__auto__ = original_tx_listen;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.constantly(null);
}
})();
var started = (function (){var or__10805__auto__ = original_start;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.constantly(null);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (net,listen,started){
return (function (p__42772,p__42773){
var vec__42774 = p__42772;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42774,(0),null);
var net__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42774,(1),null);
var listen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42774,(2),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42774,(3),null);
var lifecycle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42774,(4),null);
var map__42777 = p__42773;
var map__42777__$1 = ((((!((map__42777 == null)))?((((map__42777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42777):map__42777);
var tool_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,cljs.core.cst$kw$fulcro$client_SLASH_tool_DASH_id);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,cljs.core.cst$kw$fulcro$client_SLASH_tx_DASH_listen);
var network_wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,cljs.core.cst$kw$fulcro$client_SLASH_network_DASH_wrapper);
var app_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,cljs.core.cst$kw$fulcro$client_SLASH_app_DASH_started);
var instrument_wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,cljs.core.cst$kw$fulcro$client_SLASH_instrument_DASH_wrapper);
var component_lifecycle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,cljs.core.cst$kw$fulcro$client_SLASH_component_DASH_lifecycle);
var start__$1 = (cljs.core.truth_(app_started)?((function (vec__42774,start,net__$1,listen__$1,instrument,lifecycle,map__42777,map__42777__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started){
return (function (app){
(app_started.cljs$core$IFn$_invoke$arity$1 ? app_started.cljs$core$IFn$_invoke$arity$1(app) : app_started.call(null,app));

return (start.cljs$core$IFn$_invoke$arity$1 ? start.cljs$core$IFn$_invoke$arity$1(app) : start.call(null,app));
});})(vec__42774,start,net__$1,listen__$1,instrument,lifecycle,map__42777,map__42777__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started))
:start);
var net__$2 = (cljs.core.truth_(network_wrapper)?(network_wrapper.cljs$core$IFn$_invoke$arity$1 ? network_wrapper.cljs$core$IFn$_invoke$arity$1(net__$1) : network_wrapper.call(null,net__$1)):net__$1);
var listen__$2 = (cljs.core.truth_(tx_listen)?((function (start__$1,net__$2,vec__42774,start,net__$1,listen__$1,instrument,lifecycle,map__42777,map__42777__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started){
return (function (env,info){
return (tx_listen.cljs$core$IFn$_invoke$arity$2 ? tx_listen.cljs$core$IFn$_invoke$arity$2(env,info) : tx_listen.call(null,env,info));
});})(start__$1,net__$2,vec__42774,start,net__$1,listen__$1,instrument,lifecycle,map__42777,map__42777__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started))
:listen__$1);
var instrument__$1 = (cljs.core.truth_(instrument_wrapper)?(instrument_wrapper.cljs$core$IFn$_invoke$arity$1 ? instrument_wrapper.cljs$core$IFn$_invoke$arity$1(instrument) : instrument_wrapper.call(null,instrument)):instrument);
var lifecycle__$1 = (cljs.core.truth_(component_lifecycle)?((function (start__$1,net__$2,listen__$2,instrument__$1,vec__42774,start,net__$1,listen__$1,instrument,lifecycle,map__42777,map__42777__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started){
return (function (c,e){
(component_lifecycle.cljs$core$IFn$_invoke$arity$2 ? component_lifecycle.cljs$core$IFn$_invoke$arity$2(c,e) : component_lifecycle.call(null,c,e));

if(cljs.core.truth_(lifecycle)){
return (lifecycle.cljs$core$IFn$_invoke$arity$2 ? lifecycle.cljs$core$IFn$_invoke$arity$2(c,e) : lifecycle.call(null,c,e));
} else {
return null;
}
});})(start__$1,net__$2,listen__$2,instrument__$1,vec__42774,start,net__$1,listen__$1,instrument,lifecycle,map__42777,map__42777__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started))
:lifecycle);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,net__$2,listen__$2,instrument__$1,lifecycle__$1], null);
});})(net,listen,started))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [started,net,listen,null,null], null),cljs.core.vals(cljs.core.deref(fulcro.client.fulcro_tools)));
});
/**
 * Entrypoint for creating a new fulcro client. Instantiates an Application with default values, unless
 *   overridden by the parameters. If you do not supply a networking object, one will be provided that connects to the
 *   same server the application was served from, at `/api`.
 * 
 *   If you supply a `:request-transform` it must be a function:
 * 
 *   ```
 *  (fn [{:keys [body headers]}] {:body body' :headers headers'})
 *   ```
 * 
 *   it can replace the outgoing EDN of body or headers (returning both as a vector). NOTE: Both of these are clojurescript types.
 *   The edn will be encoded with transit, and the headers will be converted to a js map. IMPORTANT: Only supported
 *   when using the default built-in single-remote networking.
 * 
 *   `:initial-state` is your applications initial state. If it is an atom, it *must* be normalized. Fulcro databases
 *   always have normalization turned on (for server data merging). If it is not an atom, it will be auto-normalized.
 * 
 *   `:started-callback` is an optional function that will receive the intiailized fulcro application after it is
 *   mounted in the DOM, and is useful for triggering initial loads, routing mutations, etc. The reconciler is available
 *   under the `:reconciler` key (and you can access the app state, root node, etc from there.)
 * 
 *   `:network-error-callback` is a function of three arguments, the app state atom, status code, and the error, which will be invoked for
 *   every network error (status code >= 400, or no network found). Only works if you choose to use the default built-in
 *   networking (ignored if you also specify :networking).
 * 
 *   `:migrate` is optional. It is a (fn [state tid->rid] ... state') that should return a new state where all tempids
 *   (the keys of `tid->rid`) are rewritten to real ids (the values of tid->rid). This defaults to a full recursive
 *   algorithm against all data in the app-state, which is correct but possibly slow).  Note that tempids will have an tempid data type.
 *   See reconciler documentation for further information.
 * 
 *   `:transit-handlers` (optional). A map with keys for `:read` and `:write`, which contain maps to be used for the read
 *   and write side of transit to extend the supported data types. See `make-fulcro-network` in network.cljs. Only used
 *   when you default to the built-in networking.
 * 
 *   `:shared` (optional). A map of arbitrary values to be shared across all components, accessible to them via (prim/shared this)
 * 
 *   `:read-local` (optional). An read function for the Parser. (fn [env k params] ...). If supplied,
 *   it will be called once for each root-level query key. If it returns `nil` or `false` for that key then the built-in Fulcro read will handle that
 *   branch of the root query. If it returns a map with the shape `{:value ...}`, then that will be used for the response. This is *not*
 *   recursive. If you begin handling a *branch* (e.g. a join), you must finish doing so (though if using recursion, you can technically handle just
 *   the properties that need your custom handling). At any time you can use `prim/db->tree` to get raw graph data from the database for a branch.
 *   NOTE: *it will be allowed* to trigger remote reads. This is not recommended, as you will probably have to augment the networking layer to
 *   get it to do what you mean. Use `load` instead. You have been warned. Triggering remote reads is allowed, but discouraged and unsupported.
 * 
 *   `:networking` (optional). An instance of FulcroNetwork that will act as the default remote (named :remote). If
 *   you want to support multiple remotes, then this should be a map whose keys are the keyword names of the remotes
 *   and whose values are FulcroNetwork instances.
 * 
 *   `:mutation-merge (optional). A function `(fn [state mutation-symbol return-value])` that receives the app state as a
 *   map (NOT an atom) and should return the new state as a map. This function is run when network results are being merged,
 *   and is called once for each mutation that had a return value on the server. Returning nil from this function is safe, and will be ignored
 *   with a console message for debugging. If you need information about the original mutation arguments then you must reflect
 *   them back from the server in your return value. By default such values are discarded.
 *   
 *   `:reconciler-options (optional). A map that will be merged into the reconciler options. Currently it's mostly
 *   useful to override things like :root-render and :root-unmount for React Native Apps.`
 * 
 *   There is currently no way to circumvent the encoding of the body into transit. If you want to talk to other endpoints
 *   via alternate protocols you must currently implement that outside of the framework (e.g. global functions/state).
 *   
 */
fulcro.client.new_fulcro_client = (function fulcro$client$new_fulcro_client(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42813 = arguments.length;
var i__12085__auto___42817 = (0);
while(true){
if((i__12085__auto___42817 < len__12084__auto___42813)){
args__12091__auto__.push((arguments[i__12085__auto___42817]));

var G__42818 = (i__12085__auto___42817 + (1));
i__12085__auto___42817 = G__42818;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__42793){
var map__42794 = p__42793;
var map__42794__$1 = ((((!((map__42794 == null)))?((((map__42794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42794):map__42794);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42794__$1,cljs.core.cst$kw$started_DASH_callback,cljs.core.constantly(null));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42794__$1,cljs.core.cst$kw$initial_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42794__$1,cljs.core.cst$kw$reconciler_DASH_options);
var read_local = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42794__$1,cljs.core.cst$kw$read_DASH_local,cljs.core.constantly(false));
var network_error_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42794__$1,cljs.core.cst$kw$network_DASH_error_DASH_callback,cljs.core.constantly(null));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42794__$1,cljs.core.cst$kw$networking);
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42794__$1,cljs.core.cst$kw$mutation_DASH_merge);
var transit_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42794__$1,cljs.core.cst$kw$transit_DASH_handlers);
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42794__$1,cljs.core.cst$kw$migrate,null);
var request_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42794__$1,cljs.core.cst$kw$request_DASH_transform);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42794__$1,cljs.core.cst$kw$shared,null);
var networking__$1 = (function (){var or__10805__auto__ = networking;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic("/api",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request_DASH_transform,request_transform,cljs.core.cst$kw$transit_DASH_handlers,transit_handlers,cljs.core.cst$kw$global_DASH_error_DASH_callback,network_error_callback], 0));
}
})();
var vec__42798 = fulcro.client.add_tools(started_callback,networking__$1,cljs.core.cst$kw$tx_DASH_listen.cljs$core$IFn$_invoke$arity$1(reconciler_options),cljs.core.cst$kw$instrument.cljs$core$IFn$_invoke$arity$1(reconciler_options));
var started_callback__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42798,(0),null);
var networking__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42798,(1),null);
var tx_listen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42798,(2),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42798,(3),null);
var lifecycle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42798,(4),null);
var G__42801 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$initial_DASH_state,initial_state,cljs.core.cst$kw$read_DASH_local,read_local,cljs.core.cst$kw$mutation_DASH_merge,mutation_merge,cljs.core.cst$kw$started_DASH_callback,started_callback__$1,cljs.core.cst$kw$lifecycle,lifecycle,cljs.core.cst$kw$reconciler_DASH_options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__42802 = cljs.core.PersistentArrayMap.EMPTY;
var G__42802__$1 = (cljs.core.truth_(tx_listen)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42802,cljs.core.cst$kw$tx_DASH_listen,tx_listen):G__42802);
var G__42802__$2 = (cljs.core.truth_(instrument)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42802__$1,cljs.core.cst$kw$instrument,instrument):G__42802__$1);
var G__42802__$3 = (cljs.core.truth_(lifecycle)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42802__$2,cljs.core.cst$kw$lifecycle,lifecycle):G__42802__$2);
var G__42802__$4 = (cljs.core.truth_(migrate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42802__$3,cljs.core.cst$kw$migrate,migrate):G__42802__$3);
if(cljs.core.truth_(shared)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42802__$4,cljs.core.cst$kw$shared,shared);
} else {
return G__42802__$4;
}
})(),reconciler_options], 0)),cljs.core.cst$kw$networking,networking__$2], null);
return (fulcro.client.map__GT_Application.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.map__GT_Application.cljs$core$IFn$_invoke$arity$1(G__42801) : fulcro.client.map__GT_Application.call(null,G__42801));
});

fulcro.client.new_fulcro_client.cljs$lang$maxFixedArity = (0);

fulcro.client.new_fulcro_client.cljs$lang$applyTo = (function (seq42791){
return fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42791));
});


/**
 * @interface
 */
fulcro.client.FulcroApplication = function(){};

/**
 * Start/replace the webapp on the given DOM ID or DOM Node.
 */
fulcro.client.mount = (function fulcro$client$mount(this$,root_component,target_dom_id){
if((!((this$ == null))) && (!((this$.fulcro$client$FulcroApplication$mount$arity$3 == null)))){
return this$.fulcro$client$FulcroApplication$mount$arity$3(this$,root_component,target_dom_id);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.mount[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,target_dom_id) : m__11539__auto__.call(null,this$,root_component,target_dom_id));
} else {
var m__11539__auto____$1 = (fulcro.client.mount["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,root_component,target_dom_id) : m__11539__auto____$1.call(null,this$,root_component,target_dom_id));
} else {
throw cljs.core.missing_protocol("FulcroApplication.mount",this$);
}
}
}
});

/**
 * Replace the entire app state with the given (pre-normalized) state.
 */
fulcro.client.reset_state_BANG_ = (function fulcro$client$reset_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.fulcro$client$FulcroApplication$reset_state_BANG_$arity$2 == null)))){
return this$.fulcro$client$FulcroApplication$reset_state_BANG_$arity$2(this$,new_state);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.reset_state_BANG_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__11539__auto__.call(null,this$,new_state));
} else {
var m__11539__auto____$1 = (fulcro.client.reset_state_BANG_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__11539__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("FulcroApplication.reset-state!",this$);
}
}
}
});

/**
 * Replace the entire app state with the initial app state defined on the root component (includes auto-merging of unions). callback can be nil, a function, or :original (to call original started-callback).
 */
fulcro.client.reset_app_BANG_ = (function fulcro$client$reset_app_BANG_(this$,root_component,callback){
if((!((this$ == null))) && (!((this$.fulcro$client$FulcroApplication$reset_app_BANG_$arity$3 == null)))){
return this$.fulcro$client$FulcroApplication$reset_app_BANG_$arity$3(this$,root_component,callback);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.reset_app_BANG_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,callback) : m__11539__auto__.call(null,this$,root_component,callback));
} else {
var m__11539__auto____$1 = (fulcro.client.reset_app_BANG_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,root_component,callback) : m__11539__auto____$1.call(null,this$,root_component,callback));
} else {
throw cljs.core.missing_protocol("FulcroApplication.reset-app!",this$);
}
}
}
});

/**
 * Remove all pending network requests on the given remote(s). Useful on failures to eliminate cascading failures. Remote can be a keyword, set, or nil. `nil` means all remotes.
 */
fulcro.client.clear_pending_remote_requests_BANG_ = (function fulcro$client$clear_pending_remote_requests_BANG_(this$,remotes){
if((!((this$ == null))) && (!((this$.fulcro$client$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2 == null)))){
return this$.fulcro$client$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2(this$,remotes);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.clear_pending_remote_requests_BANG_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(this$,remotes) : m__11539__auto__.call(null,this$,remotes));
} else {
var m__11539__auto____$1 = (fulcro.client.clear_pending_remote_requests_BANG_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,remotes) : m__11539__auto____$1.call(null,this$,remotes));
} else {
throw cljs.core.missing_protocol("FulcroApplication.clear-pending-remote-requests!",this$);
}
}
}
});

/**
 * Refresh the UI (force re-render).
 */
fulcro.client.refresh = (function fulcro$client$refresh(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$FulcroApplication$refresh$arity$1 == null)))){
return this$.fulcro$client$FulcroApplication$refresh$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.refresh[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.refresh["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroApplication.refresh",this$);
}
}
}
});

/**
 * Return the current UI history of the application, suitable for network transfer
 */
fulcro.client.history = (function fulcro$client$history(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$FulcroApplication$history$arity$1 == null)))){
return this$.fulcro$client$FulcroApplication$history$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.history[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.history["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroApplication.history",this$);
}
}
}
});

/**
 * Returns the application with history reset to its initial, empty state. Resets application history to its initial, empty state. Suitable for resetting the app for situations such as user log out.
 */
fulcro.client.reset_history_BANG_ = (function fulcro$client$reset_history_BANG_(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$FulcroApplication$reset_history_BANG_$arity$1 == null)))){
return this$.fulcro$client$FulcroApplication$reset_history_BANG_$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.reset_history_BANG_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.reset_history_BANG_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroApplication.reset-history!",this$);
}
}
}
});

/**
 * Starts all remotes in a map. If a remote's `start` returns something that implements `FulcroNetwork`,
 *   update the network map with this value. Returns possibly updated `network-map`.
 */
fulcro.client.start_networking = (function fulcro$client$start_networking(network_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11687__auto__ = (function fulcro$client$start_networking_$_iter__42840(s__42841){
return (new cljs.core.LazySeq(null,(function (){
var s__42841__$1 = s__42841;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__42841__$1);
if(temp__5457__auto__){
var s__42841__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42841__$2)){
var c__11685__auto__ = cljs.core.chunk_first(s__42841__$2);
var size__11686__auto__ = cljs.core.count(c__11685__auto__);
var b__42843 = cljs.core.chunk_buffer(size__11686__auto__);
if((function (){var i__42842 = (0);
while(true){
if((i__42842 < size__11686__auto__)){
var vec__42844 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11685__auto__,i__42842);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42844,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42844,(1),null);
var started = fulcro.client.network.start(remote);
var valid = ((((!((started == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === started.fulcro$client$network$FulcroNetwork$)))?true:false):false))?started:remote);
cljs.core.chunk_append(b__42843,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,valid], null));

var G__42852 = (i__42842 + (1));
i__42842 = G__42852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42843),fulcro$client$start_networking_$_iter__42840(cljs.core.chunk_rest(s__42841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42843),null);
}
} else {
var vec__42848 = cljs.core.first(s__42841__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42848,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42848,(1),null);
var started = fulcro.client.network.start(remote);
var valid = ((((!((started == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === started.fulcro$client$network$FulcroNetwork$)))?true:false):false))?started:remote);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,valid], null),fulcro$client$start_networking_$_iter__42840(cljs.core.rest(s__42841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11687__auto__(network_map);
})());
});
/**
 * Initialize the fulcro Application. Creates network queue, sets up i18n, creates reconciler, mounts it, and returns
 *   the initialized app
 */
fulcro.client.initialize = (function fulcro$client$initialize(p__42853,initial_state,root_component,dom_id_or_node,reconciler_options){
var map__42854 = p__42853;
var map__42854__$1 = ((((!((map__42854 == null)))?((((map__42854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42854):map__42854);
var app = map__42854__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42854__$1,cljs.core.cst$kw$networking);
var read_local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42854__$1,cljs.core.cst$kw$read_DASH_local);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42854__$1,cljs.core.cst$kw$started_DASH_callback);
var network_map = fulcro.client.normalize_network(networking);
var reconciler_options__$1 = ((cljs.core.not(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(reconciler_options)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reconciler_options,cljs.core.cst$kw$id,((typeof dom_id_or_node === 'string')?dom_id_or_node:fulcro.util.unique_key())):reconciler_options);
var remotes = cljs.core.keys(network_map);
var send_queues = cljs.core.zipmap(remotes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (network_map,reconciler_options__$1,remotes,map__42854,map__42854__$1,app,networking,read_local,started_callback){
return (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1024));
});})(network_map,reconciler_options__$1,remotes,map__42854,map__42854__$1,app,networking,read_local,started_callback))
,remotes));
var response_channels = cljs.core.zipmap(remotes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (network_map,reconciler_options__$1,remotes,send_queues,map__42854,map__42854__$1,app,networking,read_local,started_callback){
return (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
});})(network_map,reconciler_options__$1,remotes,send_queues,map__42854,map__42854__$1,app,networking,read_local,started_callback))
,remotes));
var parser = fulcro.client.primitives.parser(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$elide_DASH_paths,true,cljs.core.cst$kw$read,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.application.read_local,read_local),cljs.core.cst$kw$mutate,fulcro.client.impl.application.write_entry_point], null));
var initial_app = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.cst$kw$send_DASH_queues,send_queues,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$response_DASH_channels,response_channels,cljs.core.cst$kw$parser,parser,cljs.core.cst$kw$mounted_QMARK_,true], 0));
var app_with_networking = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_app,cljs.core.cst$kw$networking,fulcro.client.start_networking(network_map));
var rec = fulcro.client.impl.application.generate_reconciler(app_with_networking,initial_state,parser,reconciler_options__$1);
var completed_app = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_with_networking,cljs.core.cst$kw$reconciler,rec);
var node = ((typeof dom_id_or_node === 'string')?goog.dom.getElement(dom_id_or_node):dom_id_or_node);
fulcro.client.impl.application.initialize_internationalization(rec);

fulcro.client.impl.application.initialize_global_error_callbacks(completed_app);

fulcro.client.impl.application.start_network_sequential_processing(completed_app);

fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(rec,root_component,node);

(fulcro.client.merge_alternate_union_elements_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.merge_alternate_union_elements_BANG_.cljs$core$IFn$_invoke$arity$2(completed_app,root_component) : fulcro.client.merge_alternate_union_elements_BANG_.call(null,completed_app,root_component));

if(cljs.core.truth_(started_callback)){
(started_callback.cljs$core$IFn$_invoke$arity$1 ? started_callback.cljs$core$IFn$_invoke$arity$1(completed_app) : started_callback.call(null,completed_app));
} else {
}

return completed_app;
});
/**
 * Needed for mocking in tests. Do not use directly. Use FulcroApplication protocol methods instead.
 */
fulcro.client.clear_queue = (function fulcro$client$clear_queue(queue){
var element = cljs.core.async.poll_BANG_(queue);
while(true){
if(cljs.core.truth_(element)){
var G__42856 = cljs.core.async.poll_BANG_(queue);
element = G__42856;
continue;
} else {
return null;
}
break;
}
});
/**
 * Needed for mocking in tests. Use FulcroApplication protocol methods instead.
 */
fulcro.client.reset_history_impl = (function fulcro$client$reset_history_impl(p__42857){
var map__42858 = p__42857;
var map__42858__$1 = ((((!((map__42858 == null)))?((((map__42858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42858):map__42858);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,cljs.core.cst$kw$reconciler);
var temp__5457__auto__ = fulcro.client.primitives.get_history(reconciler);
if(cljs.core.truth_(temp__5457__auto__)){
var hist_atom = temp__5457__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hist_atom,((function (hist_atom,temp__5457__auto__,map__42858,map__42858__$1,reconciler){
return (function (p__42860){
var map__42861 = p__42860;
var map__42861__$1 = ((((!((map__42861 == null)))?((((map__42861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42861):map__42861);
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42861__$1,cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size);
return fulcro.history.new_history(max_size);
});})(hist_atom,temp__5457__auto__,map__42858,map__42858__$1,reconciler))
);
} else {
return null;
}
});
fulcro.client.refresh_STAR_ = (function fulcro$client$refresh_STAR_(p__42863,root,target){
var map__42864 = p__42863;
var map__42864__$1 = ((((!((map__42864 == null)))?((((map__42864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42864):map__42864);
var app = map__42864__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42864__$1,cljs.core.cst$kw$reconciler);
var old_target_42866 = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler)));
var target_42867__$1 = ((typeof target === 'string')?goog.dom.getElement(target):target);
if(cljs.core.truth_((function (){var and__10793__auto__ = old_target_42866;
if(cljs.core.truth_(and__10793__auto__)){
return !((old_target_42866 === target_42867__$1));
} else {
return and__10793__auto__;
}
})())){
fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mounting on newly supplied target."], 0));

fulcro.client.primitives.remove_root_BANG_(reconciler,old_target_42866);

fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,root,target_42867__$1);
} else {
}

return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1(reconciler);
});
fulcro.client.mount_STAR_ = (function fulcro$client$mount_STAR_(p__42868,root_component,dom_id_or_node){
var map__42869 = p__42868;
var map__42869__$1 = ((((!((map__42869 == null)))?((((map__42869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42869):map__42869);
var app = map__42869__$1;
var mounted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42869__$1,cljs.core.cst$kw$mounted_QMARK_);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42869__$1,cljs.core.cst$kw$initial_DASH_state);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42869__$1,cljs.core.cst$kw$reconciler_DASH_options);
if(cljs.core.truth_(mounted_QMARK_)){
fulcro.client.refresh_STAR_(app,root_component,dom_id_or_node);

return app;
} else {
var uses_initial_app_state_QMARK_ = fulcro.client.primitives.has_initial_app_state_QMARK_(root_component);
var ui_declared_state = (function (){var and__10793__auto__ = uses_initial_app_state_QMARK_;
if(and__10793__auto__){
return fulcro.client.primitives.initial_state(root_component,null);
} else {
return and__10793__auto__;
}
})();
var explicit_state_QMARK_ = (function (){var or__10805__auto__ = fulcro.util.atom_QMARK_(initial_state);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return (cljs.core.seq(initial_state)) && (cljs.core.map_QMARK_(initial_state));
}
})();
var state = (cljs.core.truth_(explicit_state_QMARK_)?(cljs.core.truth_(initial_state)?initial_state:cljs.core.PersistentArrayMap.EMPTY):(cljs.core.truth_(ui_declared_state)?ui_declared_state:cljs.core.PersistentArrayMap.EMPTY
));
return fulcro.client.initialize(app,state,root_component,dom_id_or_node,reconciler_options);
}
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {fulcro.client.FulcroApplication}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.Application = (function (initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,read_local,parser,mounted_QMARK_,reconciler_options,__meta,__extmap,__hash){
this.initial_state = initial_state;
this.mutation_merge = mutation_merge;
this.started_callback = started_callback;
this.remotes = remotes;
this.networking = networking;
this.send_queues = send_queues;
this.response_channels = response_channels;
this.reconciler = reconciler;
this.read_local = read_local;
this.parser = parser;
this.mounted_QMARK_ = mounted_QMARK_;
this.reconciler_options = reconciler_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.client.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11493__auto__,k__11494__auto__){
var self__ = this;
var this__11493__auto____$1 = this;
return this__11493__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11494__auto__,null);
});

fulcro.client.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11495__auto__,k42872,else__11496__auto__){
var self__ = this;
var this__11495__auto____$1 = this;
var G__42876 = k42872;
var G__42876__$1 = (((G__42876 instanceof cljs.core.Keyword))?G__42876.fqn:null);
switch (G__42876__$1) {
case "initial-state":
return self__.initial_state;

break;
case "mutation-merge":
return self__.mutation_merge;

break;
case "started-callback":
return self__.started_callback;

break;
case "remotes":
return self__.remotes;

break;
case "networking":
return self__.networking;

break;
case "send-queues":
return self__.send_queues;

break;
case "response-channels":
return self__.response_channels;

break;
case "reconciler":
return self__.reconciler;

break;
case "read-local":
return self__.read_local;

break;
case "parser":
return self__.parser;

break;
case "mounted?":
return self__.mounted_QMARK_;

break;
case "reconciler-options":
return self__.reconciler_options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42872,else__11496__auto__);

}
});

fulcro.client.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11507__auto__,writer__11508__auto__,opts__11509__auto__){
var self__ = this;
var this__11507__auto____$1 = this;
var pr_pair__11510__auto__ = ((function (this__11507__auto____$1){
return (function (keyval__11511__auto__){
return cljs.core.pr_sequential_writer(writer__11508__auto__,cljs.core.pr_writer,""," ","",opts__11509__auto__,keyval__11511__auto__);
});})(this__11507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11508__auto__,pr_pair__11510__auto__,"#fulcro.client.Application{",", ","}",opts__11509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$initial_DASH_state,self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mutation_DASH_merge,self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$started_DASH_callback,self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$remotes,self__.remotes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$networking,self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$send_DASH_queues,self__.send_queues],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response_DASH_channels,self__.response_channels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler,self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read_DASH_local,self__.read_local],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parser,self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mounted_QMARK_,self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler_DASH_options,self__.reconciler_options],null))], null),self__.__extmap));
});

fulcro.client.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42871){
var self__ = this;
var G__42871__$1 = this;
return (new cljs.core.RecordIter((0),G__42871__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initial_DASH_state,cljs.core.cst$kw$mutation_DASH_merge,cljs.core.cst$kw$started_DASH_callback,cljs.core.cst$kw$remotes,cljs.core.cst$kw$networking,cljs.core.cst$kw$send_DASH_queues,cljs.core.cst$kw$response_DASH_channels,cljs.core.cst$kw$reconciler,cljs.core.cst$kw$read_DASH_local,cljs.core.cst$kw$parser,cljs.core.cst$kw$mounted_QMARK_,cljs.core.cst$kw$reconciler_DASH_options], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11491__auto__){
var self__ = this;
var this__11491__auto____$1 = this;
return self__.__meta;
});

fulcro.client.Application.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11488__auto__){
var self__ = this;
var this__11488__auto____$1 = this;
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11497__auto__){
var self__ = this;
var this__11497__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
});

fulcro.client.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11489__auto__){
var self__ = this;
var this__11489__auto____$1 = this;
var h__11261__auto__ = self__.__hash;
if(!((h__11261__auto__ == null))){
return h__11261__auto__;
} else {
var h__11261__auto____$1 = (function (){var fexpr__42877 = ((function (h__11261__auto__,this__11489__auto____$1){
return (function (coll__11490__auto__){
return (-1995471013 ^ cljs.core.hash_unordered_coll(coll__11490__auto__));
});})(h__11261__auto__,this__11489__auto____$1))
;
return fexpr__42877(this__11489__auto____$1);
})();
self__.__hash = h__11261__auto____$1;

return h__11261__auto____$1;
}
});

fulcro.client.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42873,other42874){
var self__ = this;
var this42873__$1 = this;
return (!((other42874 == null))) && ((this42873__$1.constructor === other42874.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.initial_state,other42874.initial_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.mutation_merge,other42874.mutation_merge)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.started_callback,other42874.started_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.remotes,other42874.remotes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.networking,other42874.networking)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.send_queues,other42874.send_queues)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.response_channels,other42874.response_channels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.reconciler,other42874.reconciler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.read_local,other42874.read_local)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.parser,other42874.parser)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.mounted_QMARK_,other42874.mounted_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.reconciler_options,other42874.reconciler_options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42873__$1.__extmap,other42874.__extmap));
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$mount$arity$3 = (function (this$,root_component,dom_id_or_node){
var self__ = this;
var this$__$1 = this;
return fulcro.client.mount_STAR_(this$__$1,root_component,dom_id_or_node);
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$reset_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(fulcro.client.primitives.app_state(self__.reconciler),new_state);
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$reset_app_BANG_$arity$3 = (function (this$,root_component,callback){
var self__ = this;
var this$__$1 = this;
if(!(fulcro.client.primitives.has_initial_app_state_QMARK_(root_component))){
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The specified root component does not implement InitialAppState!"], 0));
} else {
var base_state = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$3(root_component,fulcro.client.primitives.initial_state(root_component,null),true);
this$__$1.fulcro$client$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2(null,null);

cljs.core.reset_BANG_(fulcro.client.primitives.app_state(self__.reconciler),base_state);

this$__$1.fulcro$client$FulcroApplication$reset_history_BANG_$arity$1(null);

(fulcro.client.merge_alternate_union_elements_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.merge_alternate_union_elements_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,root_component) : fulcro.client.merge_alternate_union_elements_BANG_.call(null,this$__$1,root_component));

fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["updated app state to original ",fulcro.client.primitives.app_state(self__.reconciler)], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(callback,cljs.core.cst$kw$original)){
(self__.started_callback.cljs$core$IFn$_invoke$arity$1 ? self__.started_callback.cljs$core$IFn$_invoke$arity$1(this$__$1) : self__.started_callback.call(null,this$__$1));
} else {
if(cljs.core.truth_(callback)){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(this$__$1) : callback.call(null,this$__$1));
} else {
}
}

return this$__$1.fulcro$client$FulcroApplication$refresh$arity$1(null);
}
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2 = (function (this$,remotes__$1){
var self__ = this;
var this$__$1 = this;
var remotes__$2 = (((remotes__$1 == null))?cljs.core.keys(self__.send_queues):(((remotes__$1 instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [remotes__$1], null):remotes__$1
));
var seq__42878 = cljs.core.seq(remotes__$2);
var chunk__42879 = null;
var count__42880 = (0);
var i__42881 = (0);
while(true){
if((i__42881 < count__42880)){
var r = chunk__42879.cljs$core$IIndexed$_nth$arity$2(null,i__42881);
fulcro.client.clear_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r));

var G__42910 = seq__42878;
var G__42911 = chunk__42879;
var G__42912 = count__42880;
var G__42913 = (i__42881 + (1));
seq__42878 = G__42910;
chunk__42879 = G__42911;
count__42880 = G__42912;
i__42881 = G__42913;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__42878);
if(temp__5457__auto__){
var seq__42878__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42878__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__42878__$1);
var G__42914 = cljs.core.chunk_rest(seq__42878__$1);
var G__42915 = c__11736__auto__;
var G__42916 = cljs.core.count(c__11736__auto__);
var G__42917 = (0);
seq__42878 = G__42914;
chunk__42879 = G__42915;
count__42880 = G__42916;
i__42881 = G__42917;
continue;
} else {
var r = cljs.core.first(seq__42878__$1);
fulcro.client.clear_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r));

var G__42918 = cljs.core.next(seq__42878__$1);
var G__42919 = null;
var G__42920 = (0);
var G__42921 = (0);
seq__42878 = G__42918;
chunk__42879 = G__42919;
count__42880 = G__42920;
i__42881 = G__42921;
continue;
}
} else {
return null;
}
}
break;
}
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$history$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fulcro.client.primitives.get_history(self__.reconciler);
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$reset_history_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fulcro.client.reset_history_impl(this$__$1);
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$refresh$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1(self__.reconciler);
});

fulcro.client.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11502__auto__,k__11503__auto__){
var self__ = this;
var this__11502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$read_DASH_local,null,cljs.core.cst$kw$networking,null,cljs.core.cst$kw$mutation_DASH_merge,null,cljs.core.cst$kw$remotes,null,cljs.core.cst$kw$mounted_QMARK_,null,cljs.core.cst$kw$response_DASH_channels,null,cljs.core.cst$kw$reconciler,null,cljs.core.cst$kw$parser,null,cljs.core.cst$kw$send_DASH_queues,null,cljs.core.cst$kw$started_DASH_callback,null,cljs.core.cst$kw$initial_DASH_state,null,cljs.core.cst$kw$reconciler_DASH_options,null], null), null),k__11503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11502__auto____$1),self__.__meta),k__11503__auto__);
} else {
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11503__auto__)),null));
}
});

fulcro.client.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11500__auto__,k__11501__auto__,G__42871){
var self__ = this;
var this__11500__auto____$1 = this;
var pred__42882 = cljs.core.keyword_identical_QMARK_;
var expr__42883 = k__11501__auto__;
if(cljs.core.truth_((function (){var G__42885 = cljs.core.cst$kw$initial_DASH_state;
var G__42886 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42885,G__42886) : pred__42882.call(null,G__42885,G__42886));
})())){
return (new fulcro.client.Application(G__42871,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42887 = cljs.core.cst$kw$mutation_DASH_merge;
var G__42888 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42887,G__42888) : pred__42882.call(null,G__42887,G__42888));
})())){
return (new fulcro.client.Application(self__.initial_state,G__42871,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42889 = cljs.core.cst$kw$started_DASH_callback;
var G__42890 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42889,G__42890) : pred__42882.call(null,G__42889,G__42890));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,G__42871,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42891 = cljs.core.cst$kw$remotes;
var G__42892 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42891,G__42892) : pred__42882.call(null,G__42891,G__42892));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,G__42871,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42893 = cljs.core.cst$kw$networking;
var G__42894 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42893,G__42894) : pred__42882.call(null,G__42893,G__42894));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,G__42871,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42895 = cljs.core.cst$kw$send_DASH_queues;
var G__42896 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42895,G__42896) : pred__42882.call(null,G__42895,G__42896));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,G__42871,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42897 = cljs.core.cst$kw$response_DASH_channels;
var G__42898 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42897,G__42898) : pred__42882.call(null,G__42897,G__42898));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,G__42871,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42899 = cljs.core.cst$kw$reconciler;
var G__42900 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42899,G__42900) : pred__42882.call(null,G__42899,G__42900));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,G__42871,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42901 = cljs.core.cst$kw$read_DASH_local;
var G__42902 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42901,G__42902) : pred__42882.call(null,G__42901,G__42902));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,G__42871,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42903 = cljs.core.cst$kw$parser;
var G__42904 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42903,G__42904) : pred__42882.call(null,G__42903,G__42904));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,G__42871,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42905 = cljs.core.cst$kw$mounted_QMARK_;
var G__42906 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42905,G__42906) : pred__42882.call(null,G__42905,G__42906));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,G__42871,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__42907 = cljs.core.cst$kw$reconciler_DASH_options;
var G__42908 = expr__42883;
return (pred__42882.cljs$core$IFn$_invoke$arity$2 ? pred__42882.cljs$core$IFn$_invoke$arity$2(G__42907,G__42908) : pred__42882.call(null,G__42907,G__42908));
})())){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,G__42871,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11501__auto__,G__42871),null));
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
}
});

fulcro.client.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11505__auto__){
var self__ = this;
var this__11505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$initial_DASH_state,self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mutation_DASH_merge,self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$started_DASH_callback,self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$remotes,self__.remotes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$networking,self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$send_DASH_queues,self__.send_queues],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response_DASH_channels,self__.response_channels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler,self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read_DASH_local,self__.read_local],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parser,self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mounted_QMARK_,self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler_DASH_options,self__.reconciler_options],null))], null),self__.__extmap));
});

fulcro.client.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11492__auto__,G__42871){
var self__ = this;
var this__11492__auto____$1 = this;
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,G__42871,self__.__extmap,self__.__hash));
});

fulcro.client.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11498__auto__,entry__11499__auto__){
var self__ = this;
var this__11498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11499__auto__)){
return this__11498__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11498__auto____$1,entry__11499__auto__);
}
});

fulcro.client.Application.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$initial_DASH_state,cljs.core.cst$sym$mutation_DASH_merge,cljs.core.cst$sym$started_DASH_callback,cljs.core.cst$sym$remotes,cljs.core.cst$sym$networking,cljs.core.cst$sym$send_DASH_queues,cljs.core.cst$sym$response_DASH_channels,cljs.core.cst$sym$reconciler,cljs.core.cst$sym$read_DASH_local,cljs.core.cst$sym$parser,cljs.core.cst$sym$mounted_QMARK_,cljs.core.cst$sym$reconciler_DASH_options], null);
});

fulcro.client.Application.cljs$lang$type = true;

fulcro.client.Application.cljs$lang$ctorPrSeq = (function (this__11531__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fulcro.client/Application");
});

fulcro.client.Application.cljs$lang$ctorPrWriter = (function (this__11531__auto__,writer__11532__auto__){
return cljs.core._write(writer__11532__auto__,"fulcro.client/Application");
});

fulcro.client.__GT_Application = (function fulcro$client$__GT_Application(initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,read_local,parser,mounted_QMARK_,reconciler_options){
return (new fulcro.client.Application(initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,read_local,parser,mounted_QMARK_,reconciler_options,null,null,null));
});

fulcro.client.map__GT_Application = (function fulcro$client$map__GT_Application(G__42875){
return (new fulcro.client.Application(cljs.core.cst$kw$initial_DASH_state.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$mutation_DASH_merge.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$started_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$networking.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$send_DASH_queues.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$response_DASH_channels.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$read_DASH_local.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42875),cljs.core.cst$kw$reconciler_DASH_options.cljs$core$IFn$_invoke$arity$1(G__42875),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42875,cljs.core.cst$kw$initial_DASH_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mutation_DASH_merge,cljs.core.cst$kw$started_DASH_callback,cljs.core.cst$kw$remotes,cljs.core.cst$kw$networking,cljs.core.cst$kw$send_DASH_queues,cljs.core.cst$kw$response_DASH_channels,cljs.core.cst$kw$reconciler,cljs.core.cst$kw$read_DASH_local,cljs.core.cst$kw$parser,cljs.core.cst$kw$mounted_QMARK_,cljs.core.cst$kw$reconciler_DASH_options], 0))),null));
});

/**
 * Create a test client that has no networking. Useful for UI testing with a real Fulcro app container.
 */
fulcro.client.new_fulcro_test_client = (function fulcro$client$new_fulcro_test_client(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42926 = arguments.length;
var i__12085__auto___42927 = (0);
while(true){
if((i__12085__auto___42927 < len__12084__auto___42926)){
args__12091__auto__.push((arguments[i__12085__auto___42927]));

var G__42928 = (i__12085__auto___42927 + (1));
i__12085__auto___42927 = G__42928;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.new_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.new_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__42923){
var map__42924 = p__42923;
var map__42924__$1 = ((((!((map__42924 == null)))?((((map__42924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42924):map__42924);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42924__$1,cljs.core.cst$kw$initial_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42924__$1,cljs.core.cst$kw$started_DASH_callback,null);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42924__$1,cljs.core.cst$kw$reconciler_DASH_options);
return fulcro.client.map__GT_Application(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$initial_DASH_state,initial_state,cljs.core.cst$kw$started_DASH_callback,started_callback,cljs.core.cst$kw$reconciler_DASH_options,reconciler_options,cljs.core.cst$kw$networking,fulcro.client.network.mock_network()], null));
});

fulcro.client.new_fulcro_test_client.cljs$lang$maxFixedArity = (0);

fulcro.client.new_fulcro_test_client.cljs$lang$applyTo = (function (seq42922){
return fulcro.client.new_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42922));
});

/**
 * Get the current window location from the browser
 */
fulcro.client.get_url = (function fulcro$client$get_url(){
return window.location.href;
});
/**
 * Get the current URI parameters from the browser url or one you supply
 */
fulcro.client.uri_params = (function fulcro$client$uri_params(var_args){
var G__42930 = arguments.length;
switch (G__42930) {
case 0:
return fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$1(fulcro.client.get_url());
});

fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$1 = (function (url){
var query_data = (new goog.Uri(url)).getQueryData();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11687__auto__ = ((function (query_data){
return (function fulcro$client$iter__42931(s__42932){
return (new cljs.core.LazySeq(null,((function (query_data){
return (function (){
var s__42932__$1 = s__42932;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__42932__$1);
if(temp__5457__auto__){
var s__42932__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42932__$2)){
var c__11685__auto__ = cljs.core.chunk_first(s__42932__$2);
var size__11686__auto__ = cljs.core.count(c__11685__auto__);
var b__42934 = cljs.core.chunk_buffer(size__11686__auto__);
if((function (){var i__42933 = (0);
while(true){
if((i__42933 < size__11686__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11685__auto__,i__42933);
cljs.core.chunk_append(b__42934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null));

var G__42936 = (i__42933 + (1));
i__42933 = G__42936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42934),fulcro$client$iter__42931(cljs.core.chunk_rest(s__42932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42934),null);
}
} else {
var k = cljs.core.first(s__42932__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null),fulcro$client$iter__42931(cljs.core.rest(s__42932__$2)));
}
} else {
return null;
}
break;
}
});})(query_data))
,null,null));
});})(query_data))
;
return iter__11687__auto__(query_data.getKeys());
})());
});

fulcro.client.uri_params.cljs$lang$maxFixedArity = 1;

/**
 * Get the value of the named parameter from the browser URL (or an explicit one)
 */
fulcro.client.get_url_param = (function fulcro$client$get_url_param(var_args){
var G__42938 = arguments.length;
switch (G__42938) {
case 1:
return fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$1 = (function (param_name){
return fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$2(fulcro.client.get_url(),param_name);
});

fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$2 = (function (url,param_name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$1(url),param_name);
});

fulcro.client.get_url_param.cljs$lang$maxFixedArity = 2;

/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.merge_component = fulcro.client.primitives.merge_component;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.merge_alternate_unions = fulcro.client.primitives.merge_alternate_unions;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.merge_alternate_union_elements_BANG_ = fulcro.client.primitives.merge_alternate_union_elements_BANG_;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.merge_alternate_union_elements = fulcro.client.primitives.merge_alternate_union_elements;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.integrate_ident = fulcro.client.primitives.integrate_ident;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.integrate_ident_BANG_ = fulcro.client.primitives.integrate_ident_BANG_;
/**
 * See primitives/merge-component!
 */
fulcro.client.merge_state_BANG_ = (function fulcro$client$merge_state_BANG_(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42945 = arguments.length;
var i__12085__auto___42946 = (0);
while(true){
if((i__12085__auto___42946 < len__12084__auto___42945)){
args__12091__auto__.push((arguments[i__12085__auto___42946]));

var G__42947 = (i__12085__auto___42946 + (1));
i__12085__auto___42946 = G__42947;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((3) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((3)),(0),null)):null);
return fulcro.client.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12092__auto__);
});

fulcro.client.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_or_reconciler,component,object_data,named_params){
fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_or_reconciler], 0));

var reconciler = ((((!((app_or_reconciler == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_reconciler.fulcro$client$FulcroApplication$)))?true:false):false))?cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app_or_reconciler):app_or_reconciler);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(fulcro.client.primitives.merge_component_BANG_,reconciler,component,object_data,named_params);
});

fulcro.client.merge_state_BANG_.cljs$lang$maxFixedArity = (3);

fulcro.client.merge_state_BANG_.cljs$lang$applyTo = (function (seq42940){
var G__42941 = cljs.core.first(seq42940);
var seq42940__$1 = cljs.core.next(seq42940);
var G__42942 = cljs.core.first(seq42940__$1);
var seq42940__$2 = cljs.core.next(seq42940__$1);
var G__42943 = cljs.core.first(seq42940__$2);
var seq42940__$3 = cljs.core.next(seq42940__$2);
return fulcro.client.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42941,G__42942,G__42943,seq42940__$3);
});

/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.iinitial_app_state_QMARK_ = fulcro.client.primitives.has_initial_app_state_QMARK_;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.iident_QMARK_ = fulcro.client.primitives.has_ident_QMARK_;

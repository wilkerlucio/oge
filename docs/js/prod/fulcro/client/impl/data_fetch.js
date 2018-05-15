// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.impl.data_fetch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.impl.data_targeting');
goog.require('fulcro.util');
goog.require('fulcro.client.util');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('fulcro.logging');
goog.require('fulcro.history');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.impl.protocols');
goog.require('cljs.spec.alpha');
fulcro.client.impl.data_fetch.optional = (function fulcro$client$impl$data_fetch$optional(pred){
return cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nothing,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$pred], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,pred], null),null);
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.list(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_optional,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),fulcro.client.impl.data_fetch.optional(cljs.core.vector_QMARK_));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field,cljs.core.list(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_optional,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),fulcro.client.impl.data_fetch.optional(cljs.core.keyword_QMARK_));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.list(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_optional,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_),fulcro.client.impl.data_fetch.optional(cljs.core.symbol_QMARK_));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.list(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_optional,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),fulcro.client.impl.data_fetch.optional(cljs.core.map_QMARK_));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.list(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_optional,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),fulcro.client.impl.data_fetch.optional(cljs.core.vector_QMARK_));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$kw,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$bool,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kw,cljs.core.cst$kw$bool,cljs.core.cst$kw$nothing], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.boolean_QMARK_,cljs.core.nil_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.list(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_optional,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_),fulcro.client.impl.data_fetch.optional(cljs.core.boolean_QMARK_));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback,cljs.core.list(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_optional,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_),fulcro.client.impl.data_fetch.optional(cljs.core.symbol_QMARK_));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38010){
return cljs.core.map_QMARK_(G__38010);
}),(function (G__38010){
return cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type);
}),(function (G__38010){
return cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid);
}),(function (G__38010){
return cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
}),(function (G__38010){
return cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env);
}),(function (G__38010){
return cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time);
})], null),(function (G__38010){
return (cljs.core.map_QMARK_(G__38010)) && (cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type)) && (cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid)) && (cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query)) && (cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env)) && (cljs.core.contains_QMARK_(G__38010,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time));
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time))], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38024){
return cljs.core.coll_QMARK_(G__38024);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38025){
return cljs.core.map_QMARK_(G__38025);
}),(function (G__38025){
return cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
}),(function (G__38025){
return cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
}),(function (G__38025){
return cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
}),(function (G__38025){
return cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom);
}),(function (G__38025){
return cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time);
})], null),(function (G__38025){
return (cljs.core.map_QMARK_(G__38025)) && (cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query)) && (cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load)) && (cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error)) && (cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom)) && (cljs.core.contains_QMARK_(G__38025,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_error,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_error], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38032){
return cljs.core.map_QMARK_(G__38032);
})], null),(function (G__38032){
return cljs.core.map_QMARK_(G__38032);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_error], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_error], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_error], null)])));












/**
 * Test if the given bit of state is a data fetch state-tracking marker
 */
fulcro.client.impl.data_fetch.data_state_QMARK_ = (function fulcro$client$impl$data_fetch$data_state_QMARK_(state){
return (cljs.core.map_QMARK_(state)) && (cljs.core.contains_QMARK_(state,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type));
});
var is_kind_QMARK_ = (function fulcro$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_state_QMARK_(state))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type.cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
/**
 * Test if the given item is a data state marker that is in the ready state
 */
fulcro.client.impl.data_fetch.ready_QMARK_ = (function fulcro$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_(state,cljs.core.cst$kw$ready);
});

/**
 * Test if the given item is a data state marker in the loading state
 */
fulcro.client.impl.data_fetch.loading_QMARK_ = (function fulcro$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_(state,cljs.core.cst$kw$loading);
});

/**
 * Test if the given item is a data state marker in the failed state
 */
fulcro.client.impl.data_fetch.failed_QMARK_ = (function fulcro$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_(state,cljs.core.cst$kw$failed);
});
fulcro.client.impl.data_fetch.is_direct_table_load_QMARK_ = (function fulcro$client$impl$data_fetch$is_direct_table_load_QMARK_(load_marker){
return (cljs.core.not((fulcro.client.impl.data_fetch.data_field.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_field.cljs$core$IFn$_invoke$arity$1(load_marker) : fulcro.client.impl.data_fetch.data_field.call(null,load_marker)))) && (fulcro.util.ident_QMARK_((fulcro.client.impl.data_fetch.data_query_key.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_query_key.cljs$core$IFn$_invoke$arity$1(load_marker) : fulcro.client.impl.data_fetch.data_query_key.call(null,load_marker))));
});
fulcro.client.impl.data_fetch.marker_table = cljs.core.cst$kw$ui$fulcro$client$data_DASH_fetch$load_DASH_markers_SLASH_by_DASH_id;
fulcro.client.impl.data_fetch.place_load_marker = (function fulcro$client$impl$data_fetch$place_load_marker(state_map,marker){
var marker_id = (fulcro.client.impl.data_fetch.data_marker.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_marker.cljs$core$IFn$_invoke$arity$1(marker) : fulcro.client.impl.data_fetch.data_marker.call(null,marker));
var legacy_marker_QMARK_ = !((marker_id instanceof cljs.core.Keyword));
if(legacy_marker_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,(fulcro.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1(marker) : fulcro.client.impl.data_fetch.data_path.call(null,marker)),((function (marker_id,legacy_marker_QMARK_){
return (function (current_val){
if(cljs.core.truth_(fulcro.client.impl.data_fetch.is_direct_table_load_QMARK_(marker))){
if(cljs.core.map_QMARK_(current_val)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_val,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,marker);
} else {
return null;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,marker], null);
}
});})(marker_id,legacy_marker_QMARK_))
);
} else {
return cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.marker_table,marker_id], null),marker);
}
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
fulcro.client.impl.data_fetch.place_load_markers = (function fulcro$client$impl$data_fetch$place_load_markers(state_map,items_to_load){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,item){
var i = (fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(item) : fulcro.client.impl.data_fetch.set_loading_BANG_.call(null,item));
var G__38042 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),(fulcro.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1(i) : fulcro.client.impl.data_fetch.data_uuid.call(null,i)));
if(cljs.core.truth_((fulcro.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1(i) : fulcro.client.impl.data_fetch.data_marker_QMARK_.call(null,i)))){
return fulcro.client.impl.data_fetch.place_load_marker(G__38042,i);
} else {
return G__38042;
}
}),state_map,items_to_load);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_place_DASH_load_DASH_markers,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$state,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$items,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$state,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$items,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,cljs.core.cst$kw$items], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$state,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$items,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,null,null,null));
/**
 * Given a sequence of load markers, returns the history tx-time of the earliest one. Returns hist/max-tx-time if there
 *   are no markers or none have a time.
 */
fulcro.client.impl.data_fetch.earliest_load_time = (function fulcro$client$impl$data_fetch$earliest_load_time(load_markers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.min,fulcro.history.max_tx_time,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,load_markers));
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and return maps with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
fulcro.client.impl.data_fetch.mark_parallel_loading_BANG_ = (function fulcro$client$impl$data_fetch$mark_parallel_loading_BANG_(remote_name,reconciler){
var state = fulcro.client.primitives.app_state(reconciler);
var queued_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load);
var is_eligible_QMARK_ = ((function (state,queued_items){
return (function (item){
var and__10793__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remote_name,(fulcro.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1(item) : fulcro.client.impl.data_fetch.data_remote.call(null,item)));
} else {
return and__10793__auto__;
}
});})(state,queued_items))
;
var other_items_loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress)));
var items_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_eligible_QMARK_,queued_items);
var remaining_items = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,is_eligible_QMARK_),queued_items);
var loading_QMARK_ = (cljs.core.boolean$(cljs.core.seq(items_to_load))) || (other_items_loading_QMARK_);
var history_atom = fulcro.client.primitives.get_history(reconciler);
var ok = (fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.loaded_callback.call(null,reconciler));
var error = (fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.error_callback.call(null,reconciler));
var tx_time = fulcro.client.impl.data_fetch.earliest_load_time(items_to_load);
if(cljs.core.empty_QMARK_(items_to_load)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch.place_load_markers(s,items_to_load),cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load,remaining_items], 0));
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time))
);

var iter__11687__auto__ = ((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time){
return (function fulcro$client$impl$data_fetch$mark_parallel_loading_BANG__$_iter__38047(s__38048){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time){
return (function (){
var s__38048__$1 = s__38048;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__38048__$1);
if(temp__5457__auto__){
var s__38048__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38048__$2)){
var c__11685__auto__ = cljs.core.chunk_first(s__38048__$2);
var size__11686__auto__ = cljs.core.count(c__11685__auto__);
var b__38050 = cljs.core.chunk_buffer(size__11686__auto__);
if((function (){var i__38049 = (0);
while(true){
if((i__38049 < size__11686__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11685__auto__,i__38049);
cljs.core.chunk_append(b__38050,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,(function (){var G__38055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__38055) : fulcro.client.impl.data_fetch.full_query.call(null,G__38055));
})(),cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,remote_name,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,history_atom,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,ok,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,error,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__38062 = (i__38049 + (1));
i__38049 = G__38062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38050),fulcro$client$impl$data_fetch$mark_parallel_loading_BANG__$_iter__38047(cljs.core.chunk_rest(s__38048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38050),null);
}
} else {
var item = cljs.core.first(s__38048__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,(function (){var G__38056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__38056) : fulcro.client.impl.data_fetch.full_query.call(null,G__38056));
})(),cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,remote_name,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,history_atom,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,ok,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,error,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),fulcro$client$impl$data_fetch$mark_parallel_loading_BANG__$_iter__38047(cljs.core.rest(s__38048__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time))
,null,null));
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time))
;
return iter__11687__auto__(items_to_load);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_mark_DASH_parallel_DASH_loading_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$reconciler,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$reconciler,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote,cljs.core.cst$kw$reconciler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,fulcro.client.primitives.reconciler_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$reconciler,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,null,null),cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,null,null,null));
/**
 * Returns a lazy sequence of the elements of coll with dupes removed.
 * An element is a duplicate IFF (keys-fn element) has key collision with any prior element
 * to come before it. E.g. (dedupe-by identity [[:a] [:b] [:a] [:a :c]]) => [[:a] [:b]]
 * Returns a stateful transducer when no collection is provided.
 */
fulcro.client.impl.data_fetch.dedupe_by = (function fulcro$client$impl$data_fetch$dedupe_by(var_args){
var G__38068 = arguments.length;
switch (G__38068) {
case 1:
return fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__38074 = null;
var G__38074__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__38074__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__38074__2 = (function (result,input){
var input_keys = cljs.core.set((keys_fn.cljs$core$IFn$_invoke$arity$1 ? keys_fn.cljs$core$IFn$_invoke$arity$1(input) : keys_fn.call(null,input)));
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(keys_seen),input_keys))){
cljs.core._vreset_BANG_(keys_seen,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(keys_seen),input_keys));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return result;
}
});
G__38074 = function(result,input){
switch(arguments.length){
case 0:
return G__38074__0.call(this);
case 1:
return G__38074__1.call(this,result);
case 2:
return G__38074__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__38074.cljs$core$IFn$_invoke$arity$0 = G__38074__0;
G__38074.cljs$core$IFn$_invoke$arity$1 = G__38074__1;
G__38074.cljs$core$IFn$_invoke$arity$2 = G__38074__2;
return G__38074;
})()
;})(keys_seen))
});
});

fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (keys_fn,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1(keys_fn),coll);
});

fulcro.client.impl.data_fetch.dedupe_by.cljs$lang$maxFixedArity = 2;

fulcro.client.impl.data_fetch.join_key_or_nil = (function fulcro$client$impl$data_fetch$join_key_or_nil(expr){
if(cljs.core.truth_(fulcro.util.join_QMARK_(expr))){
var join_key_or_ident = fulcro.util.join_key(expr);
if(fulcro.util.ident_QMARK_(join_key_or_ident)){
return cljs.core.first(join_key_or_ident);
} else {
return join_key_or_ident;
}
} else {
return null;
}
});
/**
 * This function is used to split accidental colliding queries into separate network
 *   requests. The most general description of this issue is
 *   from two unrelated `load` calls when black-box composing functions. The two
 *   separate queries: One issues `[{:entitlements [:foo]}]`, and the other
 *   asks for `[{:entitlements [:bar]}]`. Fulcro merges these into a single query
 *   [{:entitlements [:foo]} {:entitlements [:bar]}]. However, the response to a query
 *   is a map, and such a query would result in the backend parser being called twice (once per key in the subquery)
 *   but one would stomp on the other.
 * 
 *   The other potential collision is if a load includes and abort ID. In this case such a load should not be batched
 *   with others because aborting it would take others down with it.
 * 
 *   Thus, this function ensures such accidental collisions are not combined into a single network request.
 * 
 *   This functions returns a list of the load items that can be batched (from the beginning, in order) and the
 *   remainder of the items which must be deferred to another request.
 */
fulcro.client.impl.data_fetch.split_items_ready_to_load = (function fulcro$client$impl$data_fetch$split_items_ready_to_load(items_ready_to_load){
var item_keys = (function (item){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.join_key_or_nil,(fulcro.client.impl.data_fetch.data_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_query.cljs$core$IFn$_invoke$arity$1(item) : fulcro.client.impl.data_fetch.data_query.call(null,item))));
});
var abort_id_conflict_QMARK_ = ((function (item_keys){
return (function (items_going_QMARK_,active_abort_id,abort_id){
var and__10793__auto__ = items_going_QMARK_;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = (function (){var or__10805__auto__ = abort_id;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return active_abort_id;
}
})();
if(cljs.core.truth_(and__10793__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(active_abort_id,abort_id);
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
});})(item_keys))
;
var can_go_now_QMARK_ = ((function (item_keys,abort_id_conflict_QMARK_){
return (function (p__38076,item){
var map__38077 = p__38076;
var map__38077__$1 = ((((!((map__38077 == null)))?((((map__38077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38077):map__38077);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38077__$1,cljs.core.cst$kw$items);
var current_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38077__$1,cljs.core.cst$kw$current_DASH_keys);
var current_abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38077__$1,cljs.core.cst$kw$current_DASH_abort_DASH_id);
var abort_id = cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id.cljs$core$IFn$_invoke$arity$1(item);
return (cljs.core.not(abort_id_conflict_QMARK_(cljs.core.seq(items),current_abort_id,abort_id))) && (cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(current_keys,item_keys(item))));
});})(item_keys,abort_id_conflict_QMARK_))
;
var map__38075 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (item_keys,abort_id_conflict_QMARK_,can_go_now_QMARK_){
return (function (acc,item){
if(cljs.core.truth_(can_go_now_QMARK_(acc,item))){
var G__38079 = acc;
var G__38079__$1 = (cljs.core.truth_(cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id.cljs$core$IFn$_invoke$arity$1(item))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38079,cljs.core.cst$kw$current_DASH_abort_DASH_id,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id.cljs$core$IFn$_invoke$arity$1(item)):G__38079);
var G__38079__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38079__$1,cljs.core.cst$kw$current_DASH_keys,clojure.set.union,item_keys(item))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38079__$2,cljs.core.cst$kw$items,cljs.core.conj,item);

} else {
return cljs.core.reduced(acc);
}
});})(item_keys,abort_id_conflict_QMARK_,can_go_now_QMARK_))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$current_DASH_keys,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$current_DASH_abort_DASH_id,null,cljs.core.cst$kw$items,cljs.core.PersistentVector.EMPTY], null),items_ready_to_load);
var map__38075__$1 = ((((!((map__38075 == null)))?((((map__38075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38075):map__38075);
var items_to_load_now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38075__$1,cljs.core.cst$kw$items);
var items_to_defer = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items_to_load_now),items_ready_to_load));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_to_load_now,items_to_defer], null);
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and returns a map with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
fulcro.client.impl.data_fetch.mark_loading = (function fulcro$client$impl$data_fetch$mark_loading(remote,reconciler){
var state = fulcro.client.primitives.app_state(reconciler);
var is_eligible_QMARK_ = ((function (state){
return (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remote,(fulcro.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1(item) : fulcro.client.impl.data_fetch.data_remote.call(null,item)));
});})(state))
;
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load);
var items_ready_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_eligible_QMARK_,all_items);
var items_for_other_remotes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,is_eligible_QMARK_),all_items);
var other_items_loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress)));
var vec__38081 = fulcro.client.impl.data_fetch.split_items_ready_to_load(items_ready_to_load);
var items_to_load_now = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38081,(0),null);
var items_to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38081,(1),null);
var remaining_items = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(items_for_other_remotes,items_to_defer);
var loading_QMARK_ = (cljs.core.boolean$(cljs.core.seq(items_to_load_now))) || (other_items_loading_QMARK_);
var tx_time = fulcro.client.impl.data_fetch.earliest_load_time(all_items);
if(cljs.core.empty_QMARK_(items_to_load_now)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,is_eligible_QMARK_,all_items,items_ready_to_load,items_for_other_remotes,other_items_loading_QMARK_,vec__38081,items_to_load_now,items_to_defer,remaining_items,loading_QMARK_,tx_time){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch.place_load_markers(s,items_to_load_now),cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load,remaining_items], 0));
});})(state,is_eligible_QMARK_,all_items,items_ready_to_load,items_for_other_remotes,other_items_loading_QMARK_,vec__38081,items_to_load_now,items_to_defer,remaining_items,loading_QMARK_,tx_time))
);

return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,(fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(items_to_load_now) : fulcro.client.impl.data_fetch.full_query.call(null,items_to_load_now)),cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,fulcro.client.primitives.get_history(reconciler),cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,remote,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,(fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,(fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id,cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id,items_to_load_now)),cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,items_to_load_now], null);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_mark_DASH_loading,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$reconciler,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$reconciler,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote,cljs.core.cst$kw$reconciler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,fulcro.client.primitives.reconciler_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$reconciler,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload,null,null),cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload,null,null,null));
fulcro.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ready,null,cljs.core.cst$kw$loading,null,cljs.core.cst$kw$failed,null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
fulcro.client.impl.data_fetch.make_data_state = (function fulcro$client$impl$data_fetch$make_data_state(var_args){
var G__38085 = arguments.length;
switch (G__38085) {
case 1:
return fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2(type,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_params,params], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["INVALID DATA STATE TYPE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

fulcro.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;

/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
fulcro.client.impl.data_fetch.elide_ast_nodes = (function fulcro$client$impl$data_fetch$elide_ast_nodes(p__38088,elision_set){
var map__38089 = p__38088;
var map__38089__$1 = ((((!((map__38089 == null)))?((((map__38089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38089):map__38089);
var ast = map__38089__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38089__$1,cljs.core.cst$kw$key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38089__$1,cljs.core.cst$kw$union_DASH_key);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38089__$1,cljs.core.cst$kw$children);
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count(children) <= (2)))){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.data-fetch",cljs.core.cst$kw$line,281], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unions are not designed to be used with fewer than two children. Check your calls to Fulcro\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([union_key], 0))], 0));
}catch (e38091){if((e38091 instanceof Error)){
var e__18456__auto___38093 = e38091;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.impl.data-fetch",cljs.core.cst$kw$line,281], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___38093], 0));
} else {
throw e38091;

}
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,((function (union_elision_QMARK_,map__38089,map__38089__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__38089,map__38089__$1,ast,key,union_key,children){
return (function (p1__38087_SHARP_){
return (fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__38087_SHARP_,elision_set) : fulcro.client.impl.data_fetch.elide_ast_nodes.call(null,p1__38087_SHARP_,elision_set));
});})(union_elision_QMARK_,map__38089,map__38089__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__38089,map__38089__$1,ast,key,union_key,children))
);
}
});
/**
 * Inject parameters into elements of the top-level query.
 * 
 *   `params` is a map from keyword (on the query in the AST) to parameter maps. So, given the AST for this query:
 * 
 *   ```
 *   [:a :b :c]
 *   ```
 * 
 *   and a `params` of `{:a {:x 1} :c {:y 2}}` you'll get an AST representing:
 * 
 *   ```
 *   [(:a {:x 1}) :b (:c {:y 2})]
 *   ```
 *   
 */
fulcro.client.impl.data_fetch.inject_query_params = (function fulcro$client$impl$data_fetch$inject_query_params(ast,params){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children], null),(function (p1__38094_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__5455__auto__)){
var new_params = temp__5455__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(c,cljs.core.cst$kw$params,cljs.core.merge,new_params);
} else {
return c;
}
}),p1__38094_SHARP_);
}));
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
fulcro.client.impl.data_fetch.ready_state = (function fulcro$client$impl$data_fetch$ready_state(p__38095){
var map__38096 = p__38095;
var map__38096__$1 = ((((!((map__38096 == null)))?((((map__38096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38096):map__38096);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$target);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$query);
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$abort_DASH_id);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38096__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38096__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$parallel);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38096__$1,cljs.core.cst$kw$marker,true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$params);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$field);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$env);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$post_DASH_mutation);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38096__$1,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY);
var initialize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$initialize);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$ident);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
if(cljs.core.truth_((function (){var or__10805__auto__ = field;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error(["Assert failed: ","You must supply a query or a field/ident pair","\n","(or field query)"].join('')));
}

if(cljs.core.truth_((function (){var or__10805__auto__ = cljs.core.not(field);
if(or__10805__auto__){
return or__10805__auto__;
} else {
var and__10793__auto__ = field;
if(cljs.core.truth_(and__10793__auto__)){
return fulcro.util.ident_QMARK_(ident);
} else {
return and__10793__auto__;
}
}
})())){
} else {
throw (new Error(["Assert failed: ","Field requires ident","\n","(or (not field) (and field (util/ident? ident)))"].join('')));
}

var old_ast = fulcro.client.primitives.query__GT_ast(query);
var ast = (function (){var G__38101 = old_ast;
var G__38101__$1 = (cljs.core.truth_(cljs.core.not_empty(without))?fulcro.client.impl.data_fetch.elide_ast_nodes(G__38101,without):G__38101);
var G__38101__$2 = (cljs.core.truth_((function (){var and__10793__auto__ = field;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = params;
if(cljs.core.truth_(and__10793__auto____$1)){
return !(cljs.core.contains_QMARK_(params,field));
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())?fulcro.client.impl.data_fetch.inject_query_params(G__38101__$1,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,params])):G__38101__$1);
if(cljs.core.truth_(params)){
return fulcro.client.impl.data_fetch.inject_query_params(G__38101__$2,params);
} else {
return G__38101__$2;
}
})();
var query_field = cljs.core.first(query);
var key = (cljs.core.truth_(fulcro.util.join_QMARK_(query_field))?fulcro.util.join_key(query_field):query_field);
var query_SINGLEQUOTE_ = fulcro.client.primitives.ast__GT_query(ast);
if((cljs.core.not(field)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,key))){
} else {
throw (new Error(["Assert failed: ","Component fetch query does not match supplied field.","\n","(or (not field) (= field key))"].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_initialize,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field],[initialize,abort_id,(cljs.core.truth_((function (){var G__38106 = env;
if((G__38106 == null)){
return null;
} else {
return cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(G__38106);
}
})())?fulcro.client.primitives.get_current_time(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(env)):fulcro.history.max_tx_time),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''),parallel,target,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,env),ident,remote,query_SINGLEQUOTE_,refresh,cljs.core.cst$kw$ready,post_mutation_params,fallback,marker,post_mutation,field]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load` and `load-field` functions in `fulcro.client.data-fetch` for the public API.
 */
fulcro.client.impl.data_fetch.mark_ready = (function fulcro$client$impl$data_fetch$mark_ready(p__38112){
var map__38113 = p__38112;
var map__38113__$1 = ((((!((map__38113 == null)))?((((map__38113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38113):map__38113);
var config = map__38113__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38113__$1,cljs.core.cst$kw$env);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$state);
var marker_QMARK_ = !((false === cljs.core.cst$kw$marker.cljs$core$IFn$_invoke$arity$1(config)));
var load_request = fulcro.client.impl.data_fetch.ready_state(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$env,env], null),config], 0)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,marker_QMARK_,load_request,map__38113,map__38113__$1,config,env){
return (function (s){
var G__38118 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),load_request);
if(marker_QMARK_){
return fulcro.client.impl.data_fetch.place_load_marker(G__38118,load_request);
} else {
return G__38118;
}
});})(state,marker_QMARK_,load_request,map__38113,map__38113__$1,config,env))
);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
fulcro.client.impl.data_fetch.data_target = (function fulcro$client$impl$data_fetch$data_target(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
fulcro.client.impl.data_fetch.data_ident = (function fulcro$client$impl$data_fetch$data_ident(state){
return cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the query that will be sent to the server as a result of the given data state marker
 */
fulcro.client.impl.data_fetch.data_query = (function fulcro$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_ident(state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([fulcro.client.impl.data_fetch.data_ident(state),cljs.core.cst$kw$fulcro$client$primitives_SLASH_query.cljs$core$IFn$_invoke$arity$1(state)])], null);
} else {
return cljs.core.cst$kw$fulcro$client$primitives_SLASH_query.cljs$core$IFn$_invoke$arity$1(state);
}
});
/**
 * Get the target field (if any) from the data state marker
 */
fulcro.client.impl.data_fetch.data_field = (function fulcro$client$impl$data_fetch$data_field(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the UUID of the data fetch
 */
fulcro.client.impl.data_fetch.data_uuid = (function fulcro$client$impl$data_fetch$data_uuid(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Returns the ID of the data marker, or nil/false if there isn't one. True means to use the old marker behavior of
 *   replacing the data in app state with a marker (DEPRECATED)
 */
fulcro.client.impl.data_fetch.data_marker = (function fulcro$client$impl$data_fetch$data_marker(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Test if the user desires a copy of the state marker to appear in the app state at the data path of the target data.
 */
fulcro.client.impl.data_fetch.data_marker_QMARK_ = (function fulcro$client$impl$data_fetch$data_marker_QMARK_(state){
return cljs.core.boolean$(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker.cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Get the list of query keywords that should be refreshed (re-rendered) when this load completes.
 */
fulcro.client.impl.data_fetch.data_refresh = (function fulcro$client$impl$data_fetch$data_refresh(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the remote that this marker is meant to talk to
 */
fulcro.client.impl.data_fetch.data_remote = (function fulcro$client$impl$data_fetch$data_remote(state){
return cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the 'primary' query key of the data fetch. This is defined as the first keyword of the overall query (which might
 *   be a simple prop or join key for example)
 */
fulcro.client.impl.data_fetch.data_query_key = (function fulcro$client$impl$data_fetch$data_query_key(state){
var ast = fulcro.client.primitives.query__GT_ast(cljs.core.cst$kw$fulcro$client$primitives_SLASH_query.cljs$core$IFn$_invoke$arity$1(state));
var node = cljs.core.first(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(node);
});
/**
 * Get the app-state database path of the target of the load that the given data state marker is trying to load.
 */
fulcro.client.impl.data_fetch.data_path = (function fulcro$client$impl$data_fetch$data_path(state){
var target = fulcro.client.impl.data_fetch.data_target(state);
if(cljs.core.truth_((function (){var and__10793__auto__ = (fulcro.client.impl.data_fetch.data_field(state) == null);
if(and__10793__auto__){
var and__10793__auto____$1 = cljs.core.vector_QMARK_(target);
if(and__10793__auto____$1){
return cljs.core.not_empty(target);
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())){
return target;
} else {
if((cljs.core.vector_QMARK_(fulcro.client.impl.data_fetch.data_ident(state))) && ((fulcro.client.impl.data_fetch.data_field(state) instanceof cljs.core.Keyword))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_ident(state),fulcro.client.impl.data_fetch.data_field(state));
} else {
if(fulcro.util.ident_QMARK_(fulcro.client.impl.data_fetch.data_query_key(state))){
return fulcro.client.impl.data_fetch.data_query_key(state);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.data_query_key(state)], null);

}
}
}
});
/**
 * Get the parameters that the user wants to add to the first join/keyword of the data fetch query.
 */
fulcro.client.impl.data_fetch.data_params = (function fulcro$client$impl$data_fetch$data_params(state){
return cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_params.cljs$core$IFn$_invoke$arity$1(state);
});
var set_type = (function fulcro$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_params,params], null)], 0));
});
/**
 * Returns a state (based on the input state) that is in the 'ready' to load state.
 */
fulcro.client.impl.data_fetch.set_ready_BANG_ = (function fulcro$client$impl$data_fetch$set_ready_BANG_(var_args){
var G__38124 = arguments.length;
switch (G__38124) {
case 1:
return fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type(state,cljs.core.cst$kw$ready,params);
});

fulcro.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the loading state (and ensures that it has a UUID)
 */
fulcro.client.impl.data_fetch.set_loading_BANG_ = (function fulcro$client$impl$data_fetch$set_loading_BANG_(var_args){
var G__38128 = arguments.length;
switch (G__38128) {
case 1:
return fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type(state,cljs.core.cst$kw$loading,params);
return cljs.core.with_meta(rv,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,rv], null));
});

fulcro.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the error state
 */
fulcro.client.impl.data_fetch.set_failed_BANG_ = (function fulcro$client$impl$data_fetch$set_failed_BANG_(var_args){
var G__38134 = arguments.length;
switch (G__38134) {
case 1:
return fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type(state,cljs.core.cst$kw$failed,params);
});

fulcro.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Composes together the queries of a sequence of data states into a single query.
 */
fulcro.client.impl.data_fetch.full_query = (function fulcro$client$impl$data_fetch$full_query(items){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (item){
return fulcro.client.impl.data_fetch.data_query(item);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0)));
});
fulcro.client.impl.data_fetch.set_global_loading_BANG_ = (function fulcro$client$impl$data_fetch$set_global_loading_BANG_(reconciler){

var state_atom = fulcro.client.primitives.app_state(reconciler);
var loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_atom),cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_);
});
fulcro.client.impl.data_fetch.replacement_target_QMARK_ = (function fulcro$client$impl$data_fetch$replacement_target_QMARK_(t){
return fulcro.client.impl.data_targeting.replacement_target_QMARK_(t);
});
fulcro.client.impl.data_fetch.prepend_target_QMARK_ = (function fulcro$client$impl$data_fetch$prepend_target_QMARK_(t){
return fulcro.client.impl.data_targeting.prepend_target_QMARK_(t);
});
fulcro.client.impl.data_fetch.append_target_QMARK_ = (function fulcro$client$impl$data_fetch$append_target_QMARK_(t){
return fulcro.client.impl.data_targeting.append_target_QMARK_(t);
});
fulcro.client.impl.data_fetch.multiple_targets_QMARK_ = (function fulcro$client$impl$data_fetch$multiple_targets_QMARK_(t){
return fulcro.client.impl.data_targeting.multiple_targets_QMARK_(t);
});
fulcro.client.impl.data_fetch.special_target_QMARK_ = (function fulcro$client$impl$data_fetch$special_target_QMARK_(t){
return fulcro.client.impl.data_targeting.special_target_QMARK_(t);
});
fulcro.client.impl.data_fetch.process_target = fulcro.client.impl.data_targeting.process_target;
/**
 * For items that are manually targeted, move them in app state from their result location to their target location.
 */
fulcro.client.impl.data_fetch.relocate_targeted_results_BANG_ = (function fulcro$client$impl$data_fetch$relocate_targeted_results_BANG_(state_atom,items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (state_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,item){
var default_target = fulcro.client.impl.data_fetch.data_query_key(item);
var explicit_target = (function (){var or__10805__auto__ = fulcro.client.impl.data_fetch.data_target(item);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK_ = (function (){var and__10793__auto__ = (fulcro.client.impl.data_fetch.data_field(item) == null);
if(and__10793__auto__){
return cljs.core.not_empty(explicit_target);
} else {
return and__10793__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK_)){
return (fulcro.client.impl.data_fetch.process_target.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.impl.data_fetch.process_target.cljs$core$IFn$_invoke$arity$3(state,default_target,explicit_target) : fulcro.client.impl.data_fetch.process_target.call(null,state,default_target,explicit_target));
} else {
return state;
}
}),state_map,items);
}));
});
/**
 * Returns app-state without the load marker for the given item.
 */
fulcro.client.impl.data_fetch.remove_marker = (function fulcro$client$impl$data_fetch$remove_marker(app_state,item){
var marker_id = fulcro.client.impl.data_fetch.data_marker(item);
var legacy_marker_QMARK_ = !((marker_id instanceof cljs.core.Keyword));
if(legacy_marker_QMARK_){
var path = fulcro.client.impl.data_fetch.data_path(item);
var data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,path);
if((cljs.core.map_QMARK_(data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,null], null), null),cljs.core.set(cljs.core.keys(data))))){
return cljs.core.assoc_in(app_state,path,null);
} else {
if((cljs.core.map_QMARK_(data)) && (cljs.core.contains_QMARK_(data,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,path,cljs.core.dissoc,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state);
} else {
return cljs.core.assoc_in(app_state,path,null);

}
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(app_state,fulcro.client.impl.data_fetch.marker_table,cljs.core.dissoc,marker_id);
}
});
/**
 * Build a callback env for post mutations and fallbacks
 */
fulcro.client.impl.data_fetch.callback_env = (function fulcro$client$impl$data_fetch$callback_env(reconciler,load_request,original_env){
var state = fulcro.client.primitives.app_state(reconciler);
var map__38182 = load_request;
var map__38182__$1 = ((((!((map__38182 == null)))?((((map__38182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38182):map__38182);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([original_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,state,cljs.core.cst$kw$load_DASH_request,(function (){var G__38187 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$remote,remote,cljs.core.cst$kw$marker,marker,cljs.core.cst$kw$server_DASH_query,query,cljs.core.cst$kw$parallel,cljs.core.boolean$(parallel)], null);
var G__38187__$1 = (cljs.core.truth_(post_mutation)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38187,cljs.core.cst$kw$post_DASH_mutation,post_mutation):G__38187);
var G__38187__$2 = (cljs.core.truth_(post_mutation_params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38187__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params,post_mutation_params):G__38187__$1);
var G__38187__$3 = (cljs.core.truth_(refresh)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38187__$2,cljs.core.cst$kw$refresh,refresh):G__38187__$2);
if(cljs.core.truth_(fallback)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38187__$3,cljs.core.cst$kw$fallback,fallback);
} else {
return G__38187__$3;
}
})()], null)], 0));
});
/**
 * Ability to mock in tests
 */
fulcro.client.impl.data_fetch.tick_BANG_ = (function fulcro$client$impl$data_fetch$tick_BANG_(r){
return fulcro.client.impl.protocols.tick_BANG_(r);
});
/**
 * Generates a callback that processes all of the post-processing steps once a remote ***load*** has completed. This includes:
 * 
 *   - Marking the items that were queried for but not returned as 'missing' (see documentation on mark and sweep of db)
 *   - Refreshing elements of the UI that were included in the data fetch :refresh option
 *   - Removing loading markers related to the executed loads that were not overwritten by incoming data
 *   - Merging the incoming data into the normalized database
 *   - Running post-mutations for any fetches that completed
 *   - Updating the global loading marker
 *   - Triggering re-render for all data item refresh lists
 *   - Removing the activity from history tracking
 *   
 */
fulcro.client.impl.data_fetch.loaded_callback = (function fulcro$client$impl$data_fetch$loaded_callback(reconciler){
return (function (response,items){
var query = fulcro.client.impl.data_fetch.full_query(items);
var base_merge = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (query){
return (function (initial_state,item){
var temp__5455__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_initialize.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5455__auto__)){
var item_tree = temp__5455__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_state,item_tree], 0));
} else {
return initial_state;
}
});})(query))
,cljs.core.PersistentArrayMap.EMPTY,items);
var response__$1 = fulcro.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_merge,response], 0));
var loading_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,fulcro.client.impl.data_fetch.marker_table,cljs.core.cst$kw$ui_SLASH_loading_DASH_data]),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch.data_refresh,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0)));
var marked_response = fulcro.client.primitives.mark_missing(response__$1,query);
var to_refresh = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(refresh_set),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(marked_response));
var app_state = fulcro.client.primitives.app_state(reconciler);
var ran_mutations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var remove_markers_BANG_ = ((function (query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations){
return (function (){
var seq__38220 = cljs.core.seq(loading_items);
var chunk__38221 = null;
var count__38222 = (0);
var i__38223 = (0);
while(true){
if((i__38223 < count__38222)){
var item = chunk__38221.cljs$core$IIndexed$_nth$arity$2(null,i__38223);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__38220,chunk__38221,count__38222,i__38223,item,query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations){
return (function (s){
var G__38226 = s;
var G__38226__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38226,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))){
return fulcro.client.impl.data_fetch.remove_marker(G__38226__$1,item);
} else {
return G__38226__$1;
}
});})(seq__38220,chunk__38221,count__38222,i__38223,item,query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations))
);

var G__38266 = seq__38220;
var G__38267 = chunk__38221;
var G__38268 = count__38222;
var G__38269 = (i__38223 + (1));
seq__38220 = G__38266;
chunk__38221 = G__38267;
count__38222 = G__38268;
i__38223 = G__38269;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38220);
if(temp__5457__auto__){
var seq__38220__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38220__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__38220__$1);
var G__38278 = cljs.core.chunk_rest(seq__38220__$1);
var G__38279 = c__11736__auto__;
var G__38280 = cljs.core.count(c__11736__auto__);
var G__38281 = (0);
seq__38220 = G__38278;
chunk__38221 = G__38279;
count__38222 = G__38280;
i__38223 = G__38281;
continue;
} else {
var item = cljs.core.first(seq__38220__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__38220,chunk__38221,count__38222,i__38223,item,seq__38220__$1,temp__5457__auto__,query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations){
return (function (s){
var G__38230 = s;
var G__38230__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38230,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))){
return fulcro.client.impl.data_fetch.remove_marker(G__38230__$1,item);
} else {
return G__38230__$1;
}
});})(seq__38220,chunk__38221,count__38222,i__38223,item,seq__38220__$1,temp__5457__auto__,query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations))
);

var G__38284 = cljs.core.next(seq__38220__$1);
var G__38285 = null;
var G__38286 = (0);
var G__38287 = (0);
seq__38220 = G__38284;
chunk__38221 = G__38285;
count__38222 = G__38286;
i__38223 = G__38287;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations))
;
var run_post_mutations_BANG_ = ((function (query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations,remove_markers_BANG_){
return (function (){
var seq__38233 = cljs.core.seq(loading_items);
var chunk__38234 = null;
var count__38235 = (0);
var i__38236 = (0);
while(true){
if((i__38236 < count__38235)){
var item = chunk__38234.cljs$core$IIndexed$_nth$arity$2(null,i__38236);
var temp__5457__auto___38292 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5457__auto___38292)){
var mutation_symbol_38294 = temp__5457__auto___38292;
cljs.core.reset_BANG_(ran_mutations,true);

var params_38298 = (function (){var or__10805__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_38299 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var G__38239_38305 = (function (){var G__38240 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_38299);
var G__38241 = mutation_symbol_38294;
var G__38242 = params_38298;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__38240,G__38241,G__38242) : fulcro.client.mutations.mutate.call(null,G__38240,G__38241,G__38242));
})();
var G__38239_38306__$1 = (((G__38239_38305 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__38239_38305));
if((G__38239_38306__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__38239_38306__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__38344 = seq__38233;
var G__38345 = chunk__38234;
var G__38346 = count__38235;
var G__38347 = (i__38236 + (1));
seq__38233 = G__38344;
chunk__38234 = G__38345;
count__38235 = G__38346;
i__38236 = G__38347;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38233);
if(temp__5457__auto__){
var seq__38233__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38233__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__38233__$1);
var G__38349 = cljs.core.chunk_rest(seq__38233__$1);
var G__38350 = c__11736__auto__;
var G__38351 = cljs.core.count(c__11736__auto__);
var G__38352 = (0);
seq__38233 = G__38349;
chunk__38234 = G__38350;
count__38235 = G__38351;
i__38236 = G__38352;
continue;
} else {
var item = cljs.core.first(seq__38233__$1);
var temp__5457__auto___38359__$1 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5457__auto___38359__$1)){
var mutation_symbol_38360 = temp__5457__auto___38359__$1;
cljs.core.reset_BANG_(ran_mutations,true);

var params_38362 = (function (){var or__10805__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_38363 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var G__38249_38366 = (function (){var G__38250 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_38363);
var G__38251 = mutation_symbol_38360;
var G__38252 = params_38362;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__38250,G__38251,G__38252) : fulcro.client.mutations.mutate.call(null,G__38250,G__38251,G__38252));
})();
var G__38249_38367__$1 = (((G__38249_38366 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__38249_38366));
if((G__38249_38367__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__38249_38367__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__38378 = cljs.core.next(seq__38233__$1);
var G__38379 = null;
var G__38380 = (0);
var G__38381 = (0);
seq__38233 = G__38378;
chunk__38234 = G__38379;
count__38235 = G__38380;
i__38236 = G__38381;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations,remove_markers_BANG_))
;
remove_markers_BANG_();

fulcro.client.primitives.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,marked_response,query);

fulcro.client.impl.data_fetch.relocate_targeted_results_BANG_(app_state,loading_items);

run_post_mutations_BANG_();

fulcro.client.impl.data_fetch.set_global_loading_BANG_(reconciler);

fulcro.client.impl.data_fetch.tick_BANG_(reconciler);

if(cljs.core.contains_QMARK_(refresh_set,cljs.core.cst$kw$fulcro_SLASH_force_DASH_root)){
return fulcro.client.primitives.force_root_render_BANG_(reconciler);
} else {
return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$2(reconciler,to_refresh);
}
});
});
/**
 * Generates a callback that is used whenever a hard server error occurs (status code 400+ or network error).
 * 
 *   The generated callback:
 * 
 *   - Replaces affected loading markers with error markers (if :marker is true on the load item)
 *   - Runs fallbacks associated with the loads
 *   - Sets the global error marker (:fulcro/server-error)
 *   - Refreshes UI (from root if there were fallbacks)
 *   
 */
fulcro.client.impl.data_fetch.error_callback = (function fulcro$client$impl$data_fetch$error_callback(reconciler){
return (function (error,items){
var loading_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = fulcro.client.primitives.app_state(reconciler);
var ran_fallbacks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var mark_errors = ((function (loading_items,app_state,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc,cljs.core.cst$kw$fulcro_SLASH_server_DASH_error,error);

var seq__38398 = cljs.core.seq(loading_items);
var chunk__38399 = null;
var count__38400 = (0);
var i__38401 = (0);
while(true){
if((i__38401 < count__38400)){
var item = chunk__38399.cljs$core$IIndexed$_nth$arity$2(null,i__38401);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__38398,chunk__38399,count__38400,i__38401,item,loading_items,app_state,ran_fallbacks){
return (function (s){
var G__38403 = s;
var G__38403__$1 = (cljs.core.truth_((function (){var and__10793__auto__ = fulcro.client.impl.data_fetch.data_marker_QMARK_(item);
if(cljs.core.truth_(and__10793__auto__)){
return (fulcro.client.impl.data_fetch.data_marker(item) instanceof cljs.core.Keyword);
} else {
return and__10793__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__38403,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.marker_table,fulcro.client.impl.data_fetch.data_marker(item)], null),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__38403);
var G__38403__$2 = (cljs.core.truth_((function (){var and__10793__auto__ = fulcro.client.impl.data_fetch.data_marker_QMARK_(item);
if(cljs.core.truth_(and__10793__auto__)){
return (true === fulcro.client.impl.data_fetch.data_marker(item));
} else {
return and__10793__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__38403__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__38403__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38403__$2,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__38398,chunk__38399,count__38400,i__38401,item,loading_items,app_state,ran_fallbacks))
);

var G__38450 = seq__38398;
var G__38451 = chunk__38399;
var G__38452 = count__38400;
var G__38453 = (i__38401 + (1));
seq__38398 = G__38450;
chunk__38399 = G__38451;
count__38400 = G__38452;
i__38401 = G__38453;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38398);
if(temp__5457__auto__){
var seq__38398__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38398__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__38398__$1);
var G__38456 = cljs.core.chunk_rest(seq__38398__$1);
var G__38457 = c__11736__auto__;
var G__38458 = cljs.core.count(c__11736__auto__);
var G__38459 = (0);
seq__38398 = G__38456;
chunk__38399 = G__38457;
count__38400 = G__38458;
i__38401 = G__38459;
continue;
} else {
var item = cljs.core.first(seq__38398__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__38398,chunk__38399,count__38400,i__38401,item,seq__38398__$1,temp__5457__auto__,loading_items,app_state,ran_fallbacks){
return (function (s){
var G__38413 = s;
var G__38413__$1 = (cljs.core.truth_((function (){var and__10793__auto__ = fulcro.client.impl.data_fetch.data_marker_QMARK_(item);
if(cljs.core.truth_(and__10793__auto__)){
return (fulcro.client.impl.data_fetch.data_marker(item) instanceof cljs.core.Keyword);
} else {
return and__10793__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__38413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.marker_table,fulcro.client.impl.data_fetch.data_marker(item)], null),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__38413);
var G__38413__$2 = (cljs.core.truth_((function (){var and__10793__auto__ = fulcro.client.impl.data_fetch.data_marker_QMARK_(item);
if(cljs.core.truth_(and__10793__auto__)){
return (true === fulcro.client.impl.data_fetch.data_marker(item));
} else {
return and__10793__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__38413__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__38413__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38413__$2,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__38398,chunk__38399,count__38400,i__38401,item,seq__38398__$1,temp__5457__auto__,loading_items,app_state,ran_fallbacks))
);

var G__38471 = cljs.core.next(seq__38398__$1);
var G__38472 = null;
var G__38473 = (0);
var G__38474 = (0);
seq__38398 = G__38471;
chunk__38399 = G__38472;
count__38400 = G__38473;
i__38401 = G__38474;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,ran_fallbacks))
;
var run_fallbacks = ((function (loading_items,app_state,ran_fallbacks,mark_errors){
return (function (){
var seq__38420 = cljs.core.seq(loading_items);
var chunk__38421 = null;
var count__38422 = (0);
var i__38423 = (0);
while(true){
if((i__38423 < count__38422)){
var item = chunk__38421.cljs$core$IIndexed$_nth$arity$2(null,i__38423);
var temp__5457__auto___38479 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5457__auto___38479)){
var fallback_symbol_38481 = temp__5457__auto___38479;
var original_env_38482 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var env_38483 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_38482);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__38426_38485 = (function (){var G__38427 = env_38483;
var G__38428 = fallback_symbol_38481;
var G__38429 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__38427,G__38428,G__38429) : fulcro.client.mutations.mutate.call(null,G__38427,G__38428,G__38429));
})();
var G__38426_38486__$1 = (((G__38426_38485 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__38426_38485));
if((G__38426_38486__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__38426_38486__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__38494 = seq__38420;
var G__38495 = chunk__38421;
var G__38496 = count__38422;
var G__38497 = (i__38423 + (1));
seq__38420 = G__38494;
chunk__38421 = G__38495;
count__38422 = G__38496;
i__38423 = G__38497;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38420);
if(temp__5457__auto__){
var seq__38420__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38420__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__38420__$1);
var G__38501 = cljs.core.chunk_rest(seq__38420__$1);
var G__38502 = c__11736__auto__;
var G__38503 = cljs.core.count(c__11736__auto__);
var G__38504 = (0);
seq__38420 = G__38501;
chunk__38421 = G__38502;
count__38422 = G__38503;
i__38423 = G__38504;
continue;
} else {
var item = cljs.core.first(seq__38420__$1);
var temp__5457__auto___38505__$1 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5457__auto___38505__$1)){
var fallback_symbol_38508 = temp__5457__auto___38505__$1;
var original_env_38509 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var env_38510 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_38509);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__38433_38515 = (function (){var G__38434 = env_38510;
var G__38435 = fallback_symbol_38508;
var G__38436 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__38434,G__38435,G__38436) : fulcro.client.mutations.mutate.call(null,G__38434,G__38435,G__38436));
})();
var G__38433_38516__$1 = (((G__38433_38515 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__38433_38515));
if((G__38433_38516__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__38433_38516__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__38528 = cljs.core.next(seq__38420__$1);
var G__38529 = null;
var G__38530 = (0);
var G__38531 = (0);
seq__38420 = G__38528;
chunk__38421 = G__38529;
count__38422 = G__38530;
i__38423 = G__38531;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,ran_fallbacks,mark_errors))
;
mark_errors();

run_fallbacks();

fulcro.client.impl.data_fetch.set_global_loading_BANG_(reconciler);

fulcro.client.impl.data_fetch.tick_BANG_(reconciler);

return fulcro.client.primitives.force_root_render_BANG_(reconciler);
});
});
/**
 * Returns true if the outgoing query is just a placeholder indicator for a deferred transaction in the load queue.
 */
fulcro.client.impl.data_fetch.is_deferred_transaction_QMARK_ = (function fulcro$client$impl$data_fetch$is_deferred_transaction_QMARK_(query){
return cljs.core.boolean$((function (){var and__10793__auto__ = query;
if(cljs.core.truth_(and__10793__auto__)){
return (cljs.core.vector_QMARK_(query)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_deferred_DASH_transaction,cljs.core.first(query)));
} else {
return and__10793__auto__;
}
})());
});

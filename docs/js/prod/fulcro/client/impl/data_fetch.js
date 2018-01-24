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
goog.require('fulcro.client.logging');
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
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41267){
return cljs.core.map_QMARK_(G__41267);
}),(function (G__41267){
return cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type);
}),(function (G__41267){
return cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid);
}),(function (G__41267){
return cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
}),(function (G__41267){
return cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env);
}),(function (G__41267){
return cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time);
})], null),(function (G__41267){
return (cljs.core.map_QMARK_(G__41267)) && (cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type)) && (cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid)) && (cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query)) && (cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env)) && (cljs.core.contains_QMARK_(G__41267,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time));
}),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time))], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__41297){
return cljs.core.coll_QMARK_(G__41297);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_marker)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41300){
return cljs.core.map_QMARK_(G__41300);
}),(function (G__41300){
return cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
}),(function (G__41300){
return cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load);
}),(function (G__41300){
return cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error);
}),(function (G__41300){
return cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom);
}),(function (G__41300){
return cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time);
})], null),(function (G__41300){
return (cljs.core.map_QMARK_(G__41300)) && (cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query)) && (cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load)) && (cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error)) && (cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom)) && (cljs.core.contains_QMARK_(G__41300,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_error,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_error], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__41316){
return cljs.core.map_QMARK_(G__41316);
})], null),(function (G__41316){
return cljs.core.map_QMARK_(G__41316);
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
var G__41331 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),(fulcro.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1(i) : fulcro.client.impl.data_fetch.data_uuid.call(null,i)));
if(cljs.core.truth_((fulcro.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1(i) : fulcro.client.impl.data_fetch.data_marker_QMARK_.call(null,i)))){
return fulcro.client.impl.data_fetch.place_load_marker(G__41331,i);
} else {
return G__41331;
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
return (function fulcro$client$impl$data_fetch$mark_parallel_loading_BANG__$_iter__41340(s__41341){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_,history_atom,ok,error,tx_time){
return (function (){
var s__41341__$1 = s__41341;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__41341__$1);
if(temp__5457__auto__){
var s__41341__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41341__$2)){
var c__11685__auto__ = cljs.core.chunk_first(s__41341__$2);
var size__11686__auto__ = cljs.core.count(c__11685__auto__);
var b__41343 = cljs.core.chunk_buffer(size__11686__auto__);
if((function (){var i__41342 = (0);
while(true){
if((i__41342 < size__11686__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11685__auto__,i__41342);
cljs.core.chunk_append(b__41343,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,(function (){var G__41346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__41346) : fulcro.client.impl.data_fetch.full_query.call(null,G__41346));
})(),cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,history_atom,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,ok,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,error,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__41356 = (i__41342 + (1));
i__41342 = G__41356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41343),fulcro$client$impl$data_fetch$mark_parallel_loading_BANG__$_iter__41340(cljs.core.chunk_rest(s__41341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41343),null);
}
} else {
var item = cljs.core.first(s__41341__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,(function (){var G__41347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__41347) : fulcro.client.impl.data_fetch.full_query.call(null,G__41347));
})(),cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,history_atom,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,ok,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,error,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),fulcro$client$impl$data_fetch$mark_parallel_loading_BANG__$_iter__41340(cljs.core.rest(s__41341__$2)));
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
var G__41364 = arguments.length;
switch (G__41364) {
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
var G__41368 = null;
var G__41368__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__41368__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__41368__2 = (function (result,input){
var input_keys = cljs.core.set((keys_fn.cljs$core$IFn$_invoke$arity$1 ? keys_fn.cljs$core$IFn$_invoke$arity$1(input) : keys_fn.call(null,input)));
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(keys_seen),input_keys))){
cljs.core._vreset_BANG_(keys_seen,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(keys_seen),input_keys));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return result;
}
});
G__41368 = function(result,input){
switch(arguments.length){
case 0:
return G__41368__0.call(this);
case 1:
return G__41368__1.call(this,result);
case 2:
return G__41368__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__41368.cljs$core$IFn$_invoke$arity$0 = G__41368__0;
G__41368.cljs$core$IFn$_invoke$arity$1 = G__41368__1;
G__41368.cljs$core$IFn$_invoke$arity$2 = G__41368__2;
return G__41368;
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
 *   but one would stomp on the other. Thus, this function ensures such accidental collisions are
 *   not combined into a single network request.
 */
fulcro.client.impl.data_fetch.split_items_ready_to_load = (function fulcro$client$impl$data_fetch$split_items_ready_to_load(items_ready_to_load){
var items_to_load_now = cljs.core.vec(fulcro.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.join_key_or_nil,(fulcro.client.impl.data_fetch.data_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.data_query.cljs$core$IFn$_invoke$arity$1(item) : fulcro.client.impl.data_fetch.data_query.call(null,item)));
}),items_ready_to_load));
var is_loading_now_QMARK_ = cljs.core.set(items_to_load_now);
var items_to_defer = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(is_loading_now_QMARK_,items_ready_to_load));
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
var vec__41377 = fulcro.client.impl.data_fetch.split_items_ready_to_load(items_ready_to_load);
var items_to_load_now = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41377,(0),null);
var items_to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41377,(1),null);
var remaining_items = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(items_for_other_remotes,items_to_defer);
var loading_QMARK_ = (cljs.core.boolean$(cljs.core.seq(items_to_load_now))) || (other_items_loading_QMARK_);
var tx_time = fulcro.client.impl.data_fetch.earliest_load_time(all_items);
if(cljs.core.empty_QMARK_(items_to_load_now)){
return null;
} else {
var history_atom = fulcro.client.primitives.get_history(reconciler);
if(cljs.core.truth_(history_atom)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history_atom,fulcro.history.remote_activity_started,remote,tx_time);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (history_atom,state,is_eligible_QMARK_,all_items,items_ready_to_load,items_for_other_remotes,other_items_loading_QMARK_,vec__41377,items_to_load_now,items_to_defer,remaining_items,loading_QMARK_,tx_time){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch.place_load_markers(s,items_to_load_now),cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load,remaining_items], 0));
});})(history_atom,state,is_eligible_QMARK_,all_items,items_ready_to_load,items_for_other_remotes,other_items_loading_QMARK_,vec__41377,items_to_load_now,items_to_defer,remaining_items,loading_QMARK_,tx_time))
);

return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,(fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(items_to_load_now) : fulcro.client.impl.data_fetch.full_query.call(null,items_to_load_now)),cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,fulcro.client.primitives.get_history(reconciler),cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,tx_time,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_load,(fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_on_DASH_error,(fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : fulcro.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,items_to_load_now], null);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$impl$data_DASH_fetch_SLASH_mark_DASH_loading,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$reconciler,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$reconciler,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote,cljs.core.cst$kw$reconciler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,fulcro.client.primitives.reconciler_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$reconciler,cljs.core.cst$sym$fulcro$client$primitives_SLASH_reconciler_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload,null,null),cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_payload,null,null,null));
fulcro.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ready,null,cljs.core.cst$kw$loading,null,cljs.core.cst$kw$failed,null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
fulcro.client.impl.data_fetch.make_data_state = (function fulcro$client$impl$data_fetch$make_data_state(var_args){
var G__41393 = arguments.length;
switch (G__41393) {
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
fulcro.client.impl.data_fetch.elide_ast_nodes = (function fulcro$client$impl$data_fetch$elide_ast_nodes(p__41398,elision_set){
var map__41399 = p__41398;
var map__41399__$1 = ((((!((map__41399 == null)))?((((map__41399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41399):map__41399);
var ast = map__41399__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41399__$1,cljs.core.cst$kw$key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41399__$1,cljs.core.cst$kw$union_DASH_key);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41399__$1,cljs.core.cst$kw$children);
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count(children) <= (2)))){
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unions are not designed to be used with fewer than two children. Check your calls to Fulcro\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([union_key], 0))], 0));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,((function (union_elision_QMARK_,map__41399,map__41399__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__41399,map__41399__$1,ast,key,union_key,children){
return (function (p1__41397_SHARP_){
return (fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__41397_SHARP_,elision_set) : fulcro.client.impl.data_fetch.elide_ast_nodes.call(null,p1__41397_SHARP_,elision_set));
});})(union_elision_QMARK_,map__41399,map__41399__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__41399,map__41399__$1,ast,key,union_key,children))
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children], null),(function (p1__41407_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__5455__auto__)){
var new_params = temp__5455__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(c,cljs.core.cst$kw$params,cljs.core.merge,new_params);
} else {
return c;
}
}),p1__41407_SHARP_);
}));
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
fulcro.client.impl.data_fetch.ready_state = (function fulcro$client$impl$data_fetch$ready_state(p__41412){
var map__41413 = p__41412;
var map__41413__$1 = ((((!((map__41413 == null)))?((((map__41413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41413):map__41413);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$target);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$query);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41413__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41413__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$parallel);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41413__$1,cljs.core.cst$kw$marker,true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$params);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$field);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$env);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$post_DASH_mutation);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41413__$1,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY);
var initialize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$initialize);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$ident);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41413__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
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
var ast = (function (){var G__41419 = old_ast;
var G__41419__$1 = (cljs.core.truth_(cljs.core.not_empty(without))?fulcro.client.impl.data_fetch.elide_ast_nodes(G__41419,without):G__41419);
var G__41419__$2 = (cljs.core.truth_((function (){var and__10793__auto__ = field;
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
})())?fulcro.client.impl.data_fetch.inject_query_params(G__41419__$1,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,params])):G__41419__$1);
if(cljs.core.truth_(params)){
return fulcro.client.impl.data_fetch.inject_query_params(G__41419__$2,params);
} else {
return G__41419__$2;
}
})();
var query_field = cljs.core.first(query);
var key = (cljs.core.truth_(fulcro.util.join_QMARK_(query_field))?fulcro.util.join_key(query_field):query_field);
var query_SINGLEQUOTE_ = fulcro.client.primitives.ast__GT_query(ast);
if((cljs.core.not(field)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,key))){
} else {
throw (new Error(["Assert failed: ","Component fetch query does not match supplied field.","\n","(or (not field) (= field key))"].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_initialize,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_uuid,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field],[initialize,(cljs.core.truth_((function (){var G__41422 = env;
if((G__41422 == null)){
return null;
} else {
return cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(G__41422);
}
})())?fulcro.client.primitives.get_current_time(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(env)):(function (){
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data fetch request created without a reconciler. No history time available. This could affect auto-error recovery operation."], 0));

return fulcro.history.max_tx_time;
})()
),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''),parallel,target,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,env),ident,remote,query_SINGLEQUOTE_,refresh,cljs.core.cst$kw$ready,post_mutation_params,fallback,marker,post_mutation,field]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load` and `load-field` functions in `fulcro.client.data-fetch` for the public API.
 */
fulcro.client.impl.data_fetch.mark_ready = (function fulcro$client$impl$data_fetch$mark_ready(p__41431){
var map__41434 = p__41431;
var map__41434__$1 = ((((!((map__41434 == null)))?((((map__41434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41434):map__41434);
var config = map__41434__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41434__$1,cljs.core.cst$kw$env);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$state);
var marker_QMARK_ = !((false === cljs.core.cst$kw$marker.cljs$core$IFn$_invoke$arity$1(config)));
var load_request = fulcro.client.impl.data_fetch.ready_state(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$env,env], null),config], 0)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (state,marker_QMARK_,load_request,map__41434,map__41434__$1,config,env){
return (function (s){
var G__41436 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.cst$kw$fulcro_SLASH_ready_DASH_to_DASH_load,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),load_request);
if(marker_QMARK_){
return fulcro.client.impl.data_fetch.place_load_marker(G__41436,load_request);
} else {
return G__41436;
}
});})(state,marker_QMARK_,load_request,map__41434,map__41434__$1,config,env))
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
var G__41456 = arguments.length;
switch (G__41456) {
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
var G__41458 = arguments.length;
switch (G__41458) {
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
var G__41462 = arguments.length;
switch (G__41462) {
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
var map__41490 = load_request;
var map__41490__$1 = ((((!((map__41490 == null)))?((((map__41490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41490):map__41490);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_parallel);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_target);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ident);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_query);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_refresh);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_marker);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41490__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([original_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,state,cljs.core.cst$kw$load_DASH_request,(function (){var G__41495 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$remote,remote,cljs.core.cst$kw$marker,marker,cljs.core.cst$kw$server_DASH_query,query,cljs.core.cst$kw$parallel,cljs.core.boolean$(parallel)], null);
var G__41495__$1 = (cljs.core.truth_(post_mutation)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41495,cljs.core.cst$kw$post_DASH_mutation,post_mutation):G__41495);
var G__41495__$2 = (cljs.core.truth_(post_mutation_params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41495__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params,post_mutation_params):G__41495__$1);
var G__41495__$3 = (cljs.core.truth_(refresh)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41495__$2,cljs.core.cst$kw$refresh,refresh):G__41495__$2);
if(cljs.core.truth_(fallback)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41495__$3,cljs.core.cst$kw$fallback,fallback);
} else {
return G__41495__$3;
}
})()], null)], 0));
});
/**
 * Update the history atom with a new history that does not include activity for the given load markers
 */
fulcro.client.impl.data_fetch.clear_history_activity_BANG_ = (function fulcro$client$impl$data_fetch$clear_history_activity_BANG_(history_atom,load_markers){
if(cljs.core.truth_(history_atom)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,(function (h){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (hist,p__41504){
var map__41506 = p__41504;
var map__41506__$1 = ((((!((map__41506 == null)))?((((map__41506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41506):map__41506);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41506__$1,cljs.core.cst$kw$fulcro$client$primitives_SLASH_remote);
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41506__$1,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time);
return fulcro.history.remote_activity_finished(hist,(function (){var or__10805__auto__ = remote;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.cst$kw$remote;
}
})(),tx_time);
}),h,load_markers);
}));
} else {
return null;
}
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
var seq__41514 = cljs.core.seq(loading_items);
var chunk__41515 = null;
var count__41516 = (0);
var i__41517 = (0);
while(true){
if((i__41517 < count__41516)){
var item = chunk__41515.cljs$core$IIndexed$_nth$arity$2(null,i__41517);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__41514,chunk__41515,count__41516,i__41517,item,query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations){
return (function (s){
var G__41521 = s;
var G__41521__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41521,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))){
return fulcro.client.impl.data_fetch.remove_marker(G__41521__$1,item);
} else {
return G__41521__$1;
}
});})(seq__41514,chunk__41515,count__41516,i__41517,item,query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations))
);

var G__41547 = seq__41514;
var G__41548 = chunk__41515;
var G__41549 = count__41516;
var G__41550 = (i__41517 + (1));
seq__41514 = G__41547;
chunk__41515 = G__41548;
count__41516 = G__41549;
i__41517 = G__41550;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__41514);
if(temp__5457__auto__){
var seq__41514__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41514__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__41514__$1);
var G__41554 = cljs.core.chunk_rest(seq__41514__$1);
var G__41555 = c__11736__auto__;
var G__41556 = cljs.core.count(c__11736__auto__);
var G__41557 = (0);
seq__41514 = G__41554;
chunk__41515 = G__41555;
count__41516 = G__41556;
i__41517 = G__41557;
continue;
} else {
var item = cljs.core.first(seq__41514__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__41514,chunk__41515,count__41516,i__41517,item,seq__41514__$1,temp__5457__auto__,query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations){
return (function (s){
var G__41522 = s;
var G__41522__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41522,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))){
return fulcro.client.impl.data_fetch.remove_marker(G__41522__$1,item);
} else {
return G__41522__$1;
}
});})(seq__41514,chunk__41515,count__41516,i__41517,item,seq__41514__$1,temp__5457__auto__,query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations))
);

var G__41560 = cljs.core.next(seq__41514__$1);
var G__41561 = null;
var G__41562 = (0);
var G__41563 = (0);
seq__41514 = G__41560;
chunk__41515 = G__41561;
count__41516 = G__41562;
i__41517 = G__41563;
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
var history = fulcro.client.primitives.get_history(reconciler);
var run_post_mutations_BANG_ = ((function (query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations,remove_markers_BANG_,history){
return (function (){
var seq__41523 = cljs.core.seq(loading_items);
var chunk__41524 = null;
var count__41525 = (0);
var i__41526 = (0);
while(true){
if((i__41526 < count__41525)){
var item = chunk__41524.cljs$core$IIndexed$_nth$arity$2(null,i__41526);
var temp__5457__auto___41565 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5457__auto___41565)){
var mutation_symbol_41566 = temp__5457__auto___41565;
cljs.core.reset_BANG_(ran_mutations,true);

var params_41568 = (function (){var or__10805__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_41569 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var G__41530_41572 = (function (){var G__41531 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_41569);
var G__41532 = mutation_symbol_41566;
var G__41533 = params_41568;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__41531,G__41532,G__41533) : fulcro.client.mutations.mutate.call(null,G__41531,G__41532,G__41533));
})();
var G__41530_41573__$1 = (((G__41530_41572 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__41530_41572));
if((G__41530_41573__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__41530_41573__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__41574 = seq__41523;
var G__41575 = chunk__41524;
var G__41576 = count__41525;
var G__41577 = (i__41526 + (1));
seq__41523 = G__41574;
chunk__41524 = G__41575;
count__41525 = G__41576;
i__41526 = G__41577;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__41523);
if(temp__5457__auto__){
var seq__41523__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41523__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__41523__$1);
var G__41578 = cljs.core.chunk_rest(seq__41523__$1);
var G__41579 = c__11736__auto__;
var G__41580 = cljs.core.count(c__11736__auto__);
var G__41581 = (0);
seq__41523 = G__41578;
chunk__41524 = G__41579;
count__41525 = G__41580;
i__41526 = G__41581;
continue;
} else {
var item = cljs.core.first(seq__41523__$1);
var temp__5457__auto___41585__$1 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5457__auto___41585__$1)){
var mutation_symbol_41586 = temp__5457__auto___41585__$1;
cljs.core.reset_BANG_(ran_mutations,true);

var params_41587 = (function (){var or__10805__auto__ = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var original_env_41588 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var G__41537_41589 = (function (){var G__41538 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_41588);
var G__41539 = mutation_symbol_41586;
var G__41540 = params_41587;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__41538,G__41539,G__41540) : fulcro.client.mutations.mutate.call(null,G__41538,G__41539,G__41540));
})();
var G__41537_41590__$1 = (((G__41537_41589 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__41537_41589));
if((G__41537_41590__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__41537_41590__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__41592 = cljs.core.next(seq__41523__$1);
var G__41593 = null;
var G__41594 = (0);
var G__41595 = (0);
seq__41523 = G__41592;
chunk__41524 = G__41593;
count__41525 = G__41594;
i__41526 = G__41595;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,base_merge,response__$1,loading_items,refresh_set,marked_response,to_refresh,app_state,ran_mutations,remove_markers_BANG_,history))
;
remove_markers_BANG_();

fulcro.client.impl.data_fetch.clear_history_activity_BANG_(history,loading_items);

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
 * Record a network error in history
 */
fulcro.client.impl.data_fetch.record_network_error_BANG_ = (function fulcro$client$impl$data_fetch$record_network_error_BANG_(reconciler,items,error){
var temp__5457__auto__ = fulcro.client.primitives.get_history(reconciler);
if(cljs.core.truth_(temp__5457__auto__)){
var history = temp__5457__auto__;
fulcro.client.impl.data_fetch.tick_BANG_(reconciler);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(history,fulcro.history.record_history_step,fulcro.client.impl.protocols.basis_t(reconciler),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before,cljs.core.deref(fulcro.client.primitives.app_state(reconciler)),cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_result,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_load_DASH_descriptors,items,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_error,error], null),cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.deref(fulcro.client.primitives.app_state(reconciler))], null));
} else {
return null;
}
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
fulcro.client.impl.data_fetch.record_network_error_BANG_(reconciler,items,error);

var loading_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = fulcro.client.primitives.app_state(reconciler);
var refresh_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,fulcro.client.impl.data_fetch.marker_table,cljs.core.cst$kw$ui_SLASH_loading_DASH_data]),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.impl.data_fetch.data_refresh,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items], 0)));
var to_refresh = cljs.core.vec(refresh_set);
var ran_fallbacks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var history = fulcro.client.primitives.get_history(reconciler);
var mark_errors = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,history){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc,cljs.core.cst$kw$fulcro_SLASH_server_DASH_error,error);

var seq__41604 = cljs.core.seq(loading_items);
var chunk__41605 = null;
var count__41606 = (0);
var i__41607 = (0);
while(true){
if((i__41607 < count__41606)){
var item = chunk__41605.cljs$core$IIndexed$_nth$arity$2(null,i__41607);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__41604,chunk__41605,count__41606,i__41607,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,history){
return (function (s){
var G__41610 = s;
var G__41610__$1 = (cljs.core.truth_((function (){var and__10793__auto__ = fulcro.client.impl.data_fetch.data_marker_QMARK_(item);
if(cljs.core.truth_(and__10793__auto__)){
return (fulcro.client.impl.data_fetch.data_marker(item) instanceof cljs.core.Keyword);
} else {
return and__10793__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41610,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.marker_table,fulcro.client.impl.data_fetch.data_marker(item)], null),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__41610);
var G__41610__$2 = (cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41610__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__41610__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41610__$2,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__41604,chunk__41605,count__41606,i__41607,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,history))
);

var G__41640 = seq__41604;
var G__41641 = chunk__41605;
var G__41642 = count__41606;
var G__41643 = (i__41607 + (1));
seq__41604 = G__41640;
chunk__41605 = G__41641;
count__41606 = G__41642;
i__41607 = G__41643;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__41604);
if(temp__5457__auto__){
var seq__41604__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41604__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__41604__$1);
var G__41644 = cljs.core.chunk_rest(seq__41604__$1);
var G__41645 = c__11736__auto__;
var G__41646 = cljs.core.count(c__11736__auto__);
var G__41647 = (0);
seq__41604 = G__41644;
chunk__41605 = G__41645;
count__41606 = G__41646;
i__41607 = G__41647;
continue;
} else {
var item = cljs.core.first(seq__41604__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__41604,chunk__41605,count__41606,i__41607,item,seq__41604__$1,temp__5457__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,history){
return (function (s){
var G__41612 = s;
var G__41612__$1 = (cljs.core.truth_((function (){var and__10793__auto__ = fulcro.client.impl.data_fetch.data_marker_QMARK_(item);
if(cljs.core.truth_(and__10793__auto__)){
return (fulcro.client.impl.data_fetch.data_marker(item) instanceof cljs.core.Keyword);
} else {
return and__10793__auto__;
}
})())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41612,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.data_fetch.marker_table,fulcro.client.impl.data_fetch.data_marker(item)], null),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__41612);
var G__41612__$2 = (cljs.core.truth_(fulcro.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41612__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),fulcro.client.impl.data_fetch.set_failed_BANG_,error):G__41612__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41612__$2,cljs.core.cst$kw$fulcro_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,fulcro.client.impl.data_fetch.data_uuid(item));

});})(seq__41604,chunk__41605,count__41606,i__41607,item,seq__41604__$1,temp__5457__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,history))
);

var G__41651 = cljs.core.next(seq__41604__$1);
var G__41652 = null;
var G__41653 = (0);
var G__41654 = (0);
seq__41604 = G__41651;
chunk__41605 = G__41652;
count__41606 = G__41653;
i__41607 = G__41654;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,history))
;
var run_fallbacks = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,history,mark_errors){
return (function (){
var seq__41616 = cljs.core.seq(loading_items);
var chunk__41617 = null;
var count__41618 = (0);
var i__41619 = (0);
while(true){
if((i__41619 < count__41618)){
var item = chunk__41617.cljs$core$IIndexed$_nth$arity$2(null,i__41619);
var temp__5457__auto___41658 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5457__auto___41658)){
var fallback_symbol_41659 = temp__5457__auto___41658;
var original_env_41660 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var env_41661 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_41660);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__41620_41662 = (function (){var G__41621 = env_41661;
var G__41622 = fallback_symbol_41659;
var G__41623 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__41621,G__41622,G__41623) : fulcro.client.mutations.mutate.call(null,G__41621,G__41622,G__41623));
})();
var G__41620_41663__$1 = (((G__41620_41662 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__41620_41662));
if((G__41620_41663__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__41620_41663__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__41667 = seq__41616;
var G__41668 = chunk__41617;
var G__41669 = count__41618;
var G__41670 = (i__41619 + (1));
seq__41616 = G__41667;
chunk__41617 = G__41668;
count__41618 = G__41669;
i__41619 = G__41670;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__41616);
if(temp__5457__auto__){
var seq__41616__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41616__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__41616__$1);
var G__41673 = cljs.core.chunk_rest(seq__41616__$1);
var G__41674 = c__11736__auto__;
var G__41675 = cljs.core.count(c__11736__auto__);
var G__41676 = (0);
seq__41616 = G__41673;
chunk__41617 = G__41674;
count__41618 = G__41675;
i__41619 = G__41676;
continue;
} else {
var item = cljs.core.first(seq__41616__$1);
var temp__5457__auto___41678__$1 = cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5457__auto___41678__$1)){
var fallback_symbol_41679 = temp__5457__auto___41678__$1;
var original_env_41680 = cljs.core.meta(cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_original_DASH_env.cljs$core$IFn$_invoke$arity$1(item));
var env_41681 = fulcro.client.impl.data_fetch.callback_env(reconciler,item,original_env_41680);
cljs.core.reset_BANG_(ran_fallbacks,true);

var G__41627_41682 = (function (){var G__41628 = env_41681;
var G__41629 = fallback_symbol_41679;
var G__41630 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__41628,G__41629,G__41630) : fulcro.client.mutations.mutate.call(null,G__41628,G__41629,G__41630));
})();
var G__41627_41683__$1 = (((G__41627_41682 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__41627_41682));
if((G__41627_41683__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__41627_41683__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__41686 = cljs.core.next(seq__41616__$1);
var G__41687 = null;
var G__41688 = (0);
var G__41689 = (0);
seq__41616 = G__41686;
chunk__41617 = G__41687;
count__41618 = G__41688;
i__41619 = G__41689;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,history,mark_errors))
;
mark_errors();

run_fallbacks();

fulcro.client.impl.data_fetch.set_global_loading_BANG_(reconciler);

fulcro.client.impl.data_fetch.clear_history_activity_BANG_(history,loading_items);

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

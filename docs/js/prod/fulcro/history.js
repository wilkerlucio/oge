// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.history');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.logging');
goog.require('fulcro.util');
goog.require('cljs.spec.alpha');
fulcro.history.is_timestamp_QMARK_ = (function fulcro$history$is_timestamp_QMARK_(t){
return (t instanceof Date);
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time,cljs.core.cst$sym$fulcro$history_SLASH_is_DASH_timestamp_QMARK_,fulcro.history.is_timestamp_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_result,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$nil,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$map,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nil,cljs.core.cst$kw$map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$vector_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.vector_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19409){
return cljs.core.map_QMARK_(G__19409);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17232__auto__,v__17233__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17233__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_result,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19440){
return cljs.core.map_QMARK_(G__19440);
}),(function (G__19440){
return cljs.core.contains_QMARK_(G__19440,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after);
}),(function (G__19440){
return cljs.core.contains_QMARK_(G__19440,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before);
})], null),(function (G__19440){
return (cljs.core.map_QMARK_(G__19440)) && (cljs.core.contains_QMARK_(G__19440,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after)) && (cljs.core.contains_QMARK_(G__19440,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_result,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_result,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_result,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19465){
return cljs.core.map_QMARK_(G__19465);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17232__auto__,v__17233__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17233__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$set_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.set_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19467){
return cljs.core.map_QMARK_(G__19467);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17232__auto__,v__17233__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17233__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes], null),cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19472){
return cljs.core.map_QMARK_(G__19472);
}),(function (G__19472){
return cljs.core.contains_QMARK_(G__19472,cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size);
}),(function (G__19472){
return cljs.core.contains_QMARK_(G__19472,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
})], null),(function (G__19472){
return (cljs.core.map_QMARK_(G__19472)) && (cljs.core.contains_QMARK_(G__19472,cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size)) && (cljs.core.contains_QMARK_(G__19472,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19499_SHARP_], null),cljs.core.list(cljs.core.cst$sym$fulcro$util_SLASH_atom_QMARK_,cljs.core.cst$sym$p1__19499_SHARP_)),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__19500_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_valid_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_deref,cljs.core.cst$sym$p1__19500_SHARP_)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$fulcro$util_SLASH_atom_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_valid_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_deref,cljs.core.cst$sym$_PERCENT_)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__19499_SHARP_){
return fulcro.util.atom_QMARK_(p1__19499_SHARP_);
}),(function (p1__19500_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.deref(p1__19500_SHARP_));
})], null),null));
fulcro.history.max_tx_time = (9200000000000000000);
/**
 * Record that remote activity started for the given remote at the given tx-time. Returns a new history.
 */
fulcro.history.remote_activity_started = (function fulcro$history$remote_activity_started(history,remote,tx_time){
if(cljs.core.truth_((function (){var and__10793__auto__ = remote;
if(cljs.core.truth_(and__10793__auto__)){
return tx_time;
} else {
return and__10793__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes,remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),tx_time);
} else {
return history;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_remote_DASH_activity_DASH_started,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$remote,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$remote,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist,cljs.core.cst$kw$remote,cljs.core.cst$kw$time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$missing,cljs.core.cst$kw$remote], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.keyword_QMARK_], null),null),cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$remote,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$fulcro$history_SLASH_history,null,null),cljs.core.cst$kw$fulcro$history_SLASH_history,null,null,null));
/**
 * Record that remote activity finished for the given remote at the given tx-time. Returns a new history.
 */
fulcro.history.remote_activity_finished = (function fulcro$history$remote_activity_finished(history,remote,tx_time){
if(cljs.core.truth_((function (){var and__10793__auto__ = remote;
if(cljs.core.truth_(and__10793__auto__)){
return tx_time;
} else {
return and__10793__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes,remote], null),cljs.core.disj,tx_time);
} else {
return history;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_remote_DASH_activity_DASH_finished,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$remote,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$remote,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist,cljs.core.cst$kw$remote,cljs.core.cst$kw$time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$missing,cljs.core.cst$kw$remote], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.keyword_QMARK_], null),null),cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$remote,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$fulcro$history_SLASH_history,null,null),cljs.core.cst$kw$fulcro$history_SLASH_history,null,null,null));
/**
 * Returns the tx time for the oldest in-flight send that is active. Returns Long/MAX_VALUE if none are active.
 */
fulcro.history.oldest_active_network_request = (function fulcro$history$oldest_active_network_request(p__19551){
var map__19553 = p__19551;
var map__19553__$1 = ((((!((map__19553 == null)))?((((map__19553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19553):map__19553);
var history = map__19553__$1;
var active_remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19553__$1,cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.min,fulcro.history.max_tx_time,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(active_remotes)));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_oldest_DASH_active_DASH_network_DASH_request,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.int_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_oldest_DASH_active_DASH_network_DASH_request,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.core.cst$kw$ref,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Returns a new history that has been reduced in size to target levels.
 */
fulcro.history.gc_history = (function fulcro$history$gc_history(p__19585){
var map__19586 = p__19585;
var map__19586__$1 = ((((!((map__19586 == null)))?((((map__19586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19586):map__19586);
var history = map__19586__$1;
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19586__$1,cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size);
var history_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19586__$1,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
if((cljs.core.pos_int_QMARK_(max_size)) && ((cljs.core.count(history_steps) > max_size))){
var oldest_required_history_step = fulcro.history.oldest_active_network_request(history);
var current_size = cljs.core.count(history_steps);
var overage = (current_size - max_size);
var ordered_step_keys = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(history_steps));
var proposed_keeper_keys = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(overage,ordered_step_keys);
var real_keeper_keys = (((cljs.core.first(proposed_keeper_keys) > oldest_required_history_step))?(function (){
fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: History has grown beyond max size due to network congestion."], 0));

return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (oldest_required_history_step,current_size,overage,ordered_step_keys,proposed_keeper_keys,map__19586,map__19586__$1,history,max_size,history_steps){
return (function (t){
return (t < oldest_required_history_step);
});})(oldest_required_history_step,current_size,overage,ordered_step_keys,proposed_keeper_keys,map__19586,map__19586__$1,history,max_size,history_steps))
,ordered_step_keys);
})()
:proposed_keeper_keys);
fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$1(["Compressing history from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(history_steps))," steps to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(real_keeper_keys)),". Max size is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_size)].join(''));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(history,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps,cljs.core.select_keys,real_keeper_keys);
} else {
return history;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_gc_DASH_history,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.core.cst$kw$ref,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
fulcro.history.compressible_tx = (function fulcro$history$compressible_tx(tx){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,cljs.core.cst$kw$fulcro$history_SLASH_compressible_QMARK_,true);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_compressible_DASH_tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tx], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$missing,cljs.core.cst$kw$tx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.vector_QMARK_], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$missing,cljs.core.cst$kw$tx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.vector_QMARK_], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),null,null,null));
/**
 * Returns true if the given transaction is marked as compressible.
 */
fulcro.history.compressible_tx_QMARK_ = (function fulcro$history$compressible_tx_QMARK_(tx){
return cljs.core.boolean$((function (){var G__19730 = tx;
var G__19730__$1 = (((G__19730 == null))?null:cljs.core.meta(G__19730));
if((G__19730__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$fulcro$history_SLASH_compressible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19730__$1);
}
})());
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_compressible_DASH_tx_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tx], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$missing,cljs.core.cst$kw$tx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.vector_QMARK_], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,null,null,null));
/**
 * Returns the most recent transition edge time recorded in the given history.
 */
fulcro.history.last_tx_time = (function fulcro$history$last_tx_time(p__19744){
var map__19748 = p__19744;
var map__19748__$1 = ((((!((map__19748 == null)))?((((map__19748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19748):map__19748);
var history = map__19748__$1;
var history_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19748__$1,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.keys(history_steps));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_last_DASH_tx_DASH_time,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.int_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,null,null,null));
/**
 * Record a history step in the reconciler. 
 */
fulcro.history.record_history_step = (function fulcro$history$record_history_step(p__19788,tx_time,p__19789){
var map__19790 = p__19788;
var map__19790__$1 = ((((!((map__19790 == null)))?((((map__19790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19790):map__19790);
var history = map__19790__$1;
var history_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19790__$1,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
var map__19792 = p__19789;
var map__19792__$1 = ((((!((map__19792 == null)))?((((map__19792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19792):map__19792);
var step = map__19792__$1;
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19792__$1,cljs.core.cst$kw$fulcro$history_SLASH_tx);
var last_time = fulcro.history.last_tx_time(history);
var gc_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(tx_time,(10)));
var last_tx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(history_steps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_time,cljs.core.cst$kw$fulcro$history_SLASH_tx], null),cljs.core.PersistentVector.EMPTY);
var compressible_QMARK_ = (function (){var and__10793__auto__ = fulcro.history.compressible_tx_QMARK_(tx);
if(cljs.core.truth_(and__10793__auto__)){
return fulcro.history.compressible_tx_QMARK_(last_tx);
} else {
return and__10793__auto__;
}
})();
var new_history = (function (){var G__19799 = cljs.core.assoc_in(history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps,tx_time], null),step);
if(cljs.core.truth_(compressible_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__19799,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps,cljs.core.dissoc,last_time);
} else {
return G__19799;
}
})();
if(((last_tx == null)) || ((tx_time > last_time))){
} else {
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Time did not move forward! History may have been lost."], 0));
}

fulcro.util.soft_invariant(((last_tx == null)) || ((tx_time > last_time)),"Time moved forward.");

if(gc_QMARK_){
return fulcro.history.gc_history(new_history);
} else {
return new_history;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_record_DASH_history_DASH_step,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,cljs.core.cst$kw$step,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,cljs.core.cst$kw$step,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist,cljs.core.cst$kw$time,cljs.core.cst$kw$step], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time,cljs.core.cst$kw$step,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$fulcro$history_SLASH_history,null,null),cljs.core.cst$kw$fulcro$history_SLASH_history,null,null,null));
fulcro.history.new_history = (function fulcro$history$new_history(size){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,size,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_new_DASH_history,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$size,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$size,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$size], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$size,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$fulcro$history_SLASH_history,null,null),cljs.core.cst$kw$fulcro$history_SLASH_history,null,null,null));
/**
 * Returns the current valid sequence of step times in the given history as a sorted vector.
 */
fulcro.history.ordered_steps = (function fulcro$history$ordered_steps(history){
var G__19856 = history;
var G__19856__$1 = (((G__19856 == null))?null:cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps.cljs$core$IFn$_invoke$arity$1(G__19856));
var G__19856__$2 = (((G__19856__$1 == null))?null:cljs.core.keys(G__19856__$1));
var G__19856__$3 = (((G__19856__$2 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__19856__$2));
if((G__19856__$3 == null)){
return null;
} else {
return cljs.core.vec(G__19856__$3);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_ordered_DASH_steps,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$v,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$v,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$nothing], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$int_QMARK_,cljs.core.int_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__19863){
return cljs.core.vector_QMARK_(G__19863);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null),cljs.core.nil_QMARK_], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$v,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),null,null,null));
/**
 * Returns a step from the given history that has the given tx-time. If tx-time specifies a spot where there is a gap in the history
 *   (there are steps before and after), then it will return the earlier step, unless the latter was compressible, in which case
 *   it will return the step into which the desired spot was compressed. 
 */
fulcro.history.get_step = (function fulcro$history$get_step(p__19868,tx_time){
var map__19869 = p__19868;
var map__19869__$1 = ((((!((map__19869 == null)))?((((map__19869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19869):map__19869);
var history = map__19869__$1;
var history_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869__$1,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(history_steps,tx_time);
if(cljs.core.truth_(temp__5455__auto__)){
var exact_step = temp__5455__auto__;
return exact_step;
} else {
var timeline = fulcro.history.ordered_steps(history);
var vec__19879 = cljs.core.split_with(((function (timeline,temp__5455__auto__,map__19869,map__19869__$1,history,history_steps){
return (function (p1__19866_SHARP_){
return (tx_time > p1__19866_SHARP_);
});})(timeline,temp__5455__auto__,map__19869,map__19869__$1,history,history_steps))
,timeline);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19879,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19879,(1),null);
var step_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(history_steps,cljs.core.last(before));
var step_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(history_steps,cljs.core.first(after));
if(cljs.core.truth_((function (){var and__10793__auto__ = step_before;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = step_after;
if(cljs.core.truth_(and__10793__auto____$1)){
return fulcro.history.compressible_tx_QMARK_(cljs.core.cst$kw$fulcro$history_SLASH_tx.cljs$core$IFn$_invoke$arity$1(step_after));
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())){
return step_after;
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = step_before;
if(cljs.core.truth_(and__10793__auto__)){
return step_after;
} else {
return and__10793__auto__;
}
})())){
return step_before;
} else {
return null;

}
}
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_get_DASH_step,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$step,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist,cljs.core.cst$kw$time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$step,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nothing,cljs.core.cst$kw$step], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$step,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step),null,null,null));
/**
 * Returns a navigator of history. Use focus-next, focus-previous, and current-step.
 */
fulcro.history.history_navigator = (function fulcro$history$history_navigator(history){
var steps = fulcro.history.ordered_steps(history);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$legal_DASH_steps,steps,cljs.core.cst$kw$history,history,cljs.core.cst$kw$index,(cljs.core.count(steps) - (1))], null);
});
/**
 * Gives back navigation position as a pair [current-index count-of-steps]
 */
fulcro.history.nav_position = (function fulcro$history$nav_position(history_nav){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(history_nav),cljs.core.count(cljs.core.cst$kw$legal_DASH_steps.cljs$core$IFn$_invoke$arity$1(history_nav))], null);
});
/**
 * Returns a new history navigation with the focus on the next step (or the last if already there). See history-navigator
 */
fulcro.history.focus_next = (function fulcro$history$focus_next(history_nav){
var map__19922 = history_nav;
var map__19922__$1 = ((((!((map__19922 == null)))?((((map__19922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19922):map__19922);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922__$1,cljs.core.cst$kw$legal_DASH_steps);
var last_legal_idx = (cljs.core.count(legal_steps) - (1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(history_nav,cljs.core.cst$kw$index,((function (map__19922,map__19922__$1,index,history,legal_steps,last_legal_idx){
return (function (i){
if((i < last_legal_idx)){
return (i + (1));
} else {
return i;
}
});})(map__19922,map__19922__$1,index,history,legal_steps,last_legal_idx))
);
});
/**
 * Returns a new history navigation with the focus on the prior step (or the first if already there). See history-navigator
 */
fulcro.history.focus_previous = (function fulcro$history$focus_previous(history_nav){
var map__19944 = history_nav;
var map__19944__$1 = ((((!((map__19944 == null)))?((((map__19944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19944):map__19944);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19944__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19944__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19944__$1,cljs.core.cst$kw$legal_DASH_steps);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(history_nav,cljs.core.cst$kw$index,((function (map__19944,map__19944__$1,index,history,legal_steps){
return (function (i){
if((i === (0))){
return (0);
} else {
return (i - (1));
}
});})(map__19944,map__19944__$1,index,history,legal_steps))
);
});
/**
 * Returns a new history navigation with the focus on the prior step (or the first if already there). See history-navigator
 */
fulcro.history.focus_start = (function fulcro$history$focus_start(history_nav){
var map__19952 = history_nav;
var map__19952__$1 = ((((!((map__19952 == null)))?((((map__19952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19952):map__19952);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19952__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19952__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19952__$1,cljs.core.cst$kw$legal_DASH_steps);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(history_nav,cljs.core.cst$kw$index,(0));
});
/**
 * Returns a new history navigation with the focus on the prior step (or the first if already there). See history-navigator
 */
fulcro.history.focus_end = (function fulcro$history$focus_end(history_nav){
var map__19959 = history_nav;
var map__19959__$1 = ((((!((map__19959 == null)))?((((map__19959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19959):map__19959);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19959__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19959__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19959__$1,cljs.core.cst$kw$legal_DASH_steps);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(history_nav,cljs.core.cst$kw$index,(cljs.core.count(legal_steps) - (1)));
});
/**
 * Get the current history step from the history-nav. See history-navigator.
 */
fulcro.history.current_step = (function fulcro$history$current_step(history_nav){
var map__19968 = history_nav;
var map__19968__$1 = ((((!((map__19968 == null)))?((((map__19968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19968):map__19968);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,cljs.core.cst$kw$legal_DASH_steps);
var history_step_tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(legal_steps,index);
var history_step = fulcro.history.get_step(history,history_step_tx_time);
return history_step;
});

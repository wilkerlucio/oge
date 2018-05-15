// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.history');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.logging');
goog.require('fulcro.util');
goog.require('clojure.set');
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
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$vector_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.vector_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__21767){
return cljs.core.map_QMARK_(G__21767);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_result,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__21775){
return cljs.core.map_QMARK_(G__21775);
}),(function (G__21775){
return cljs.core.contains_QMARK_(G__21775,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after);
}),(function (G__21775){
return cljs.core.contains_QMARK_(G__21775,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before);
})], null),(function (G__21775){
return (cljs.core.map_QMARK_(G__21775)) && (cljs.core.contains_QMARK_(G__21775,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after)) && (cljs.core.contains_QMARK_(G__21775,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_result,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_result,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_after)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_db_DASH_before))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_tx,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_result,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_network_DASH_result,cljs.core.cst$kw$fulcro$history_SLASH_network_DASH_sends,cljs.core.cst$kw$fulcro$history_SLASH_client_DASH_time], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__21801){
return cljs.core.map_QMARK_(G__21801);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_step)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.list(cljs.core.cst$sym$s_SLASH_map_DASH_of,cljs.core.cst$sym$pos_DASH_int_QMARK_,cljs.core.cst$sym$pos_DASH_int_QMARK_)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$pos_DASH_int_QMARK_,cljs.core.cst$sym$pos_DASH_int_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pos_int_QMARK_,cljs.core.pos_int_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__21831){
return cljs.core.map_QMARK_(G__21831);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_)], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__21825){
return cljs.core.map_QMARK_(G__21825);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_))], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes], null),cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__21849){
return cljs.core.map_QMARK_(G__21849);
}),(function (G__21849){
return cljs.core.contains_QMARK_(G__21849,cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size);
}),(function (G__21849){
return cljs.core.contains_QMARK_(G__21849,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
})], null),(function (G__21849){
return (cljs.core.map_QMARK_(G__21849)) && (cljs.core.contains_QMARK_(G__21849,cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size)) && (cljs.core.contains_QMARK_(G__21849,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_atom,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_and,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__21867_SHARP_], null),cljs.core.list(cljs.core.cst$sym$fulcro$util_SLASH_atom_QMARK_,cljs.core.cst$sym$p1__21867_SHARP_)),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__21868_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_valid_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_deref,cljs.core.cst$sym$p1__21868_SHARP_)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$fulcro$util_SLASH_atom_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_valid_QMARK_,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_deref,cljs.core.cst$sym$_PERCENT_)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__21867_SHARP_){
return fulcro.util.atom_QMARK_(p1__21867_SHARP_);
}),(function (p1__21868_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.deref(p1__21868_SHARP_));
})], null),null));
fulcro.history.max_tx_time = (9200000000000000000);
fulcro.history.decrement_or_remove = (function fulcro$history$decrement_or_remove(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,(1)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.dec);
}
});
fulcro.history.add_or_increment = (function fulcro$history$add_or_increment(m,k){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes,remote], null),fulcro.history.add_or_increment,tx_time);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes,remote], null),fulcro.history.decrement_or_remove,tx_time);
} else {
return history;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_remote_DASH_activity_DASH_finished,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$remote,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$remote,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist,cljs.core.cst$kw$remote,cljs.core.cst$kw$time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$missing,cljs.core.cst$kw$remote], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.keyword_QMARK_], null),null),cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$remote,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$time,cljs.core.cst$kw$fulcro$history_SLASH_tx_DASH_time),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$history_SLASH_history,cljs.core.cst$kw$fulcro$history_SLASH_history,null,null),cljs.core.cst$kw$fulcro$history_SLASH_history,null,null,null));
/**
 * Returns the tx time for the oldest in-flight send that is active. Returns Long/MAX_VALUE if none are active.
 */
fulcro.history.oldest_active_network_request = (function fulcro$history$oldest_active_network_request(p__21942){
var map__21943 = p__21942;
var map__21943__$1 = ((((!((map__21943 == null)))?((((map__21943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21943):map__21943);
var history = map__21943__$1;
var active_remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21943__$1,cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.min,fulcro.history.max_tx_time,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__21951 = active_remotes;
var G__21951__$1 = (((G__21951 == null))?null:cljs.core.vals(G__21951));
if((G__21951__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,G__21951__$1);
}
})()));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_oldest_DASH_active_DASH_network_DASH_request,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.int_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_oldest_DASH_active_DASH_network_DASH_request,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.core.cst$kw$ref,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Returns a new history that has been reduced in size to target levels.
 */
fulcro.history.gc_history = (function fulcro$history$gc_history(p__21990){
var map__21991 = p__21990;
var map__21991__$1 = ((((!((map__21991 == null)))?((((map__21991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21991):map__21991);
var history = map__21991__$1;
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21991__$1,cljs.core.cst$kw$fulcro$history_SLASH_max_DASH_size);
var history_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21991__$1,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
if((cljs.core.pos_int_QMARK_(max_size)) && ((cljs.core.count(history_steps) > max_size))){
var oldest_required_history_step = fulcro.history.oldest_active_network_request(history);
var current_size = cljs.core.count(history_steps);
var overage = (current_size - max_size);
var ordered_step_keys = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(history_steps));
var proposed_keeper_keys = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(overage,ordered_step_keys);
var real_keeper_keys = (((cljs.core.first(proposed_keeper_keys) > oldest_required_history_step))?(function (){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.history",cljs.core.cst$kw$line,82], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["History has grown beyond max size due to network congestion."], 0));
}catch (e22000){if((e22000 instanceof Error)){
var e__18456__auto___22025 = e22000;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.history",cljs.core.cst$kw$line,82], null),cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___22025], 0));
} else {
throw e22000;

}
}
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (oldest_required_history_step,current_size,overage,ordered_step_keys,proposed_keeper_keys,map__21991,map__21991__$1,history,max_size,history_steps){
return (function (t){
return (t < oldest_required_history_step);
});})(oldest_required_history_step,current_size,overage,ordered_step_keys,proposed_keeper_keys,map__21991,map__21991__$1,history,max_size,history_steps))
,ordered_step_keys);
})()
:proposed_keeper_keys);
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
return cljs.core.boolean$((function (){var G__22096 = tx;
var G__22096__$1 = (((G__22096 == null))?null:cljs.core.meta(G__22096));
if((G__22096__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$fulcro$history_SLASH_compressible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__22096__$1);
}
})());
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_compressible_DASH_tx_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tx], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$missing,cljs.core.cst$kw$tx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.vector_QMARK_], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$missing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,null,null,null));
/**
 * Returns the most recent transition edge time recorded in the given history.
 */
fulcro.history.last_tx_time = (function fulcro$history$last_tx_time(p__22136){
var map__22137 = p__22136;
var map__22137__$1 = ((((!((map__22137 == null)))?((((map__22137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22137):map__22137);
var history = map__22137__$1;
var history_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22137__$1,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.keys(history_steps));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_last_DASH_tx_DASH_time,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.int_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,null,null,null));
/**
 * Record a history step in the reconciler. 
 */
fulcro.history.record_history_step = (function fulcro$history$record_history_step(p__22163,tx_time,p__22164){
var map__22165 = p__22163;
var map__22165__$1 = ((((!((map__22165 == null)))?((((map__22165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22165):map__22165);
var history = map__22165__$1;
var history_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165__$1,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
var active_remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165__$1,cljs.core.cst$kw$fulcro$history_SLASH_active_DASH_remotes);
var map__22166 = p__22164;
var map__22166__$1 = ((((!((map__22166 == null)))?((((map__22166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22166):map__22166);
var step = map__22166__$1;
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22166__$1,cljs.core.cst$kw$fulcro$history_SLASH_tx);
var last_time = fulcro.history.last_tx_time(history);
var gc_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(tx_time,(10)));
var last_tx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(history_steps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_time,cljs.core.cst$kw$fulcro$history_SLASH_tx], null),cljs.core.PersistentVector.EMPTY);
var all_active_steps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,(function (){var G__22183 = active_remotes;
var G__22183__$1 = (((G__22183 == null))?null:cljs.core.vals(G__22183));
if((G__22183__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.keys),G__22183__$1);
}
})());
var compressible_QMARK_ = (function (){var and__10793__auto__ = fulcro.history.compressible_tx_QMARK_(tx);
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = fulcro.history.compressible_tx_QMARK_(last_tx);
if(cljs.core.truth_(and__10793__auto____$1)){
return !(cljs.core.contains_QMARK_(all_active_steps,last_time));
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})();
var new_history = (function (){var G__22185 = cljs.core.assoc_in(history,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps,tx_time], null),step);
if(cljs.core.truth_(compressible_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__22185,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps,cljs.core.dissoc,last_time);
} else {
return G__22185;
}
})();
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
var G__22248 = history;
var G__22248__$1 = (((G__22248 == null))?null:cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps.cljs$core$IFn$_invoke$arity$1(G__22248));
var G__22248__$2 = (((G__22248__$1 == null))?null:cljs.core.keys(G__22248__$1));
var G__22248__$3 = (((G__22248__$2 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__22248__$2));
if((G__22248__$3 == null)){
return null;
} else {
return cljs.core.vec(G__22248__$3);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$history_SLASH_ordered_DASH_steps,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$v,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hist], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$history_SLASH_history], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$hist,cljs.core.cst$kw$fulcro$history_SLASH_history),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$v,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v,cljs.core.cst$kw$nothing], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$int_QMARK_,cljs.core.int_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__22266){
return cljs.core.vector_QMARK_(G__22266);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null),cljs.core.nil_QMARK_], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$v,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_every,cljs.core.cst$sym$cljs$core_SLASH_int_QMARK_,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$nothing,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),null,null,null));
/**
 * Returns a step from the given history that has the given tx-time. If tx-time specifies a spot where there is a gap in the history
 *   (there are steps before and after), then it will return the earlier step, unless the latter was compressible, in which case
 *   it will return the step into which the desired spot was compressed. 
 */
fulcro.history.get_step = (function fulcro$history$get_step(p__22291,tx_time){
var map__22292 = p__22291;
var map__22292__$1 = ((((!((map__22292 == null)))?((((map__22292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22292):map__22292);
var history = map__22292__$1;
var history_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22292__$1,cljs.core.cst$kw$fulcro$history_SLASH_history_DASH_steps);
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(history_steps,tx_time);
if(cljs.core.truth_(temp__5455__auto__)){
var exact_step = temp__5455__auto__;
return exact_step;
} else {
var timeline = fulcro.history.ordered_steps(history);
var vec__22304 = cljs.core.split_with(((function (timeline,temp__5455__auto__,map__22292,map__22292__$1,history,history_steps){
return (function (p1__22285_SHARP_){
return (tx_time > p1__22285_SHARP_);
});})(timeline,temp__5455__auto__,map__22292,map__22292__$1,history,history_steps))
,timeline);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22304,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22304,(1),null);
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
var map__22351 = history_nav;
var map__22351__$1 = ((((!((map__22351 == null)))?((((map__22351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22351):map__22351);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,cljs.core.cst$kw$legal_DASH_steps);
var last_legal_idx = (cljs.core.count(legal_steps) - (1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(history_nav,cljs.core.cst$kw$index,((function (map__22351,map__22351__$1,index,history,legal_steps,last_legal_idx){
return (function (i){
if((i < last_legal_idx)){
return (i + (1));
} else {
return i;
}
});})(map__22351,map__22351__$1,index,history,legal_steps,last_legal_idx))
);
});
/**
 * Returns a new history navigation with the focus on the prior step (or the first if already there). See history-navigator
 */
fulcro.history.focus_previous = (function fulcro$history$focus_previous(history_nav){
var map__22359 = history_nav;
var map__22359__$1 = ((((!((map__22359 == null)))?((((map__22359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22359):map__22359);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22359__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22359__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22359__$1,cljs.core.cst$kw$legal_DASH_steps);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(history_nav,cljs.core.cst$kw$index,((function (map__22359,map__22359__$1,index,history,legal_steps){
return (function (i){
if((i === (0))){
return (0);
} else {
return (i - (1));
}
});})(map__22359,map__22359__$1,index,history,legal_steps))
);
});
/**
 * Returns a new history navigation with the focus on the prior step (or the first if already there). See history-navigator
 */
fulcro.history.focus_start = (function fulcro$history$focus_start(history_nav){
var map__22379 = history_nav;
var map__22379__$1 = ((((!((map__22379 == null)))?((((map__22379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22379):map__22379);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22379__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22379__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22379__$1,cljs.core.cst$kw$legal_DASH_steps);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(history_nav,cljs.core.cst$kw$index,(0));
});
/**
 * Returns a new history navigation with the focus on the prior step (or the first if already there). See history-navigator
 */
fulcro.history.focus_end = (function fulcro$history$focus_end(history_nav){
var map__22402 = history_nav;
var map__22402__$1 = ((((!((map__22402 == null)))?((((map__22402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22402):map__22402);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22402__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22402__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22402__$1,cljs.core.cst$kw$legal_DASH_steps);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(history_nav,cljs.core.cst$kw$index,(cljs.core.count(legal_steps) - (1)));
});
/**
 * Get the current history step from the history-nav. See history-navigator.
 */
fulcro.history.current_step = (function fulcro$history$current_step(history_nav){
var map__22410 = history_nav;
var map__22410__$1 = ((((!((map__22410 == null)))?((((map__22410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22410):map__22410);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22410__$1,cljs.core.cst$kw$index);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22410__$1,cljs.core.cst$kw$history);
var legal_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22410__$1,cljs.core.cst$kw$legal_DASH_steps);
var history_step_tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(legal_steps,index);
var history_step = fulcro.history.get_step(history,history_step_tx_time);
return history_step;
});

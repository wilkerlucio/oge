// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.pathom.connect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.spec_inspec');
goog.require('clojure.set');
goog.require('fulcro.client.primitives');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$sym$cljs$core_SLASH_symbol_QMARK_,cljs.core.symbol_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38282){
return cljs.core.set_QMARK_(G__38282);
}),cljs.core.cst$kw$kind,cljs.core.set_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_out_DASH_attribute,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$plain,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$composed,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$plain,cljs.core.cst$kw$composed], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38291){
return cljs.core.map_QMARK_(G__38291);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output)], null),null)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_out_DASH_attribute,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_out_DASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_out_DASH_attribute,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38341){
return cljs.core.vector_QMARK_(G__38341);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_out_DASH_attribute,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_resolver_DASH_data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_cache_QMARK_], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38356){
return cljs.core.map_QMARK_(G__38356);
}),(function (G__38356){
return cljs.core.contains_QMARK_(G__38356,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym);
})], null),(function (G__38356){
return (cljs.core.map_QMARK_(G__38356)) && (cljs.core.contains_QMARK_(G__38356,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_cache_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_cache_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_cache_QMARK_], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_resolver_DASH_data),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_resolver_DASH_data),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_resolver_DASH_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_resolver_DASH_data], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38394){
return cljs.core.map_QMARK_(G__38394);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_resolver_DASH_data)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38406){
return cljs.core.map_QMARK_(G__38406);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38414){
return cljs.core.map_QMARK_(G__38414);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.list(cljs.core.cst$sym$s_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.list(cljs.core.cst$sym$s_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$kind,cljs.core.cst$sym$set_QMARK_))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.list(cljs.core.cst$sym$s_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$kind,cljs.core.cst$sym$set_QMARK_)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38441){
return cljs.core.set_QMARK_(G__38441);
}),cljs.core.cst$kw$kind,cljs.core.set_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38438){
return cljs.core.map_QMARK_(G__38438);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38432){
return cljs.core.map_QMARK_(G__38432);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)))], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38455){
return cljs.core.map_QMARK_(G__38455);
}),(function (G__38455){
return cljs.core.contains_QMARK_(G__38455,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers);
}),(function (G__38455){
return cljs.core.contains_QMARK_(G__38455,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io);
}),(function (G__38455){
return cljs.core.contains_QMARK_(G__38455,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir);
})], null),(function (G__38455){
return (cljs.core.map_QMARK_(G__38455)) && (cljs.core.contains_QMARK_(G__38455,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers)) && (cljs.core.contains_QMARK_(G__38455,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io)) && (cljs.core.contains_QMARK_(G__38455,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents], null)])));
com.wsscode.pathom.connect.resolver_data = (function com$wsscode$pathom$connect$resolver_data(env,sym){
var idx = (function (){var G__38489 = env;
if(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes)){
return cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes.cljs$core$IFn$_invoke$arity$1(G__38489);
} else {
return G__38489;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers,sym], null));
});
com.wsscode.pathom.connect.spec_keys = (function com$wsscode$pathom$connect$spec_keys(form){
var select_keys_SINGLEQUOTE_ = (function (p1__38500_SHARP_,p2__38499_SHARP_){
return cljs.core.select_keys(p2__38499_SHARP_,p1__38500_SHARP_);
});
return cljs.core.vec(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(select_keys_SINGLEQUOTE_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$req,cljs.core.cst$kw$opt], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),form)))))));
});
com.wsscode.pathom.connect.resolver__GT_in_out = (function com$wsscode$pathom$connect$resolver__GT_in_out(sym){
var fspec = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),com.wsscode.spec_inspec.safe_form(sym)));
var in$ = com.wsscode.pathom.connect.spec_keys(com.wsscode.spec_inspec.spec__GT_root_sym(cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(fspec)))));
var out = com.wsscode.pathom.connect.spec_keys(com.wsscode.spec_inspec.spec__GT_root_sym(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(fspec)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.set(in$),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output,out], null);
});
com.wsscode.pathom.connect.flat_query = (function com$wsscode$pathom$connect$flat_query(query){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.query__GT_ast(query)));
});
com.wsscode.pathom.connect.normalize_io = (function com$wsscode$pathom$connect$normalize_io(output){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
if(cljs.core.map_QMARK_(x)){
var vec__38572 = cljs.core.first(x);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38572,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.normalize_io.call(null,v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.PersistentArrayMap.EMPTY], null);
}
})),output);
});
com.wsscode.pathom.connect.merge_io = (function com$wsscode$pathom$connect$merge_io(a,b){
var merge_attrs = (function com$wsscode$pathom$connect$merge_io_$_merge_attrs(a__$1,b__$1){
if((cljs.core.map_QMARK_(a__$1)) && (cljs.core.map_QMARK_(b__$1))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com$wsscode$pathom$connect$merge_io_$_merge_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0));
} else {
if(cljs.core.map_QMARK_(a__$1)){
return a__$1;
} else {
if(cljs.core.map_QMARK_(b__$1)){
return b__$1;
} else {
return b__$1;

}
}
}
});
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(merge_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
com.wsscode.pathom.connect.merge_oir = (function com$wsscode$pathom$connect$merge_oir(a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__38593_SHARP_,p2__38594_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__38593_SHARP_,p2__38594_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
if(typeof com.wsscode.pathom.connect.index_merger !== 'undefined'){
} else {
com.wsscode.pathom.connect.index_merger = (function (){var method_table__11860__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11861__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11862__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11864__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.connect","index-merger"),((function (method_table__11860__auto__,prefer_table__11861__auto__,method_cache__11862__auto__,cached_hierarchy__11863__auto__,hierarchy__11864__auto__){
return (function (k,_,___$1){
return k;
});})(method_table__11860__auto__,prefer_table__11861__auto__,method_cache__11862__auto__,cached_hierarchy__11863__auto__,hierarchy__11864__auto__))
,cljs.core.cst$kw$default,hierarchy__11864__auto__,method_table__11860__auto__,prefer_table__11861__auto__,method_cache__11862__auto__,cached_hierarchy__11863__auto__));
})();
}
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,(function (_,ia,ib){
return com.wsscode.pathom.connect.merge_io(ia,ib);
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir,(function (_,ia,ib){
return com.wsscode.pathom.connect.merge_oir(ia,ib);
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,a,b){
if((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
return b;

}
}
}));
com.wsscode.pathom.connect.merge_indexes = (function com$wsscode$pathom$connect$merge_indexes(ia,ib){
return cljs.core.reduce_kv((function (idx,k,v){
if(cljs.core.contains_QMARK_(idx,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__38610_SHARP_){
return (com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__38610_SHARP_,v) : com.wsscode.pathom.connect.index_merger.call(null,k,p1__38610_SHARP_,v));
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.add = (function com$wsscode$pathom$connect$add(var_args){
var G__38617 = arguments.length;
switch (G__38617) {
case 2:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2 = (function (indexes,sym){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(indexes,sym,cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3 = (function (indexes,sym,sym_data){
var map__38622 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,sym], null),com.wsscode.pathom.connect.resolver__GT_in_out(sym),sym_data], 0));
var map__38622__$1 = ((((!((map__38622 == null)))?((((map__38622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38622):map__38622);
var sym_data__$1 = map__38622__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38622__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38622__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output);
var input_SINGLEQUOTE_ = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__38636 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers,cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,com.wsscode.pathom.connect.normalize_io(output)]),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (input_SINGLEQUOTE_,map__38622,map__38622__$1,sym_data__$1,input,output){
return (function (indexes__$1,out_attr){
var G__38638 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__38638,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),sym);
} else {
return G__38638;
}
});})(input_SINGLEQUOTE_,map__38622,map__38622__$1,sym_data__$1,input,output))
,cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38636,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__38636;
}
})());
});

com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$connect_SLASH_add,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$indexes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$index,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.cst$kw$blank,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])),cljs.core.cst$kw$sym,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$sym_DASH_data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null)))),cljs.core.cst$kw$ret,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$indexes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$index,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.cst$kw$blank,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])),cljs.core.cst$kw$sym,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$sym_DASH_data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes,cljs.core.cst$kw$sym,cljs.core.cst$kw$sym_DASH_data], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index,cljs.core.cst$kw$blank], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38660){
return cljs.core.map_QMARK_(G__38660);
})], null),(function (G__38660){
return cljs.core.map_QMARK_(G__38660);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null)])),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$index,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.cst$kw$blank,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null)))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$indexes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$index,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.cst$kw$blank,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])),cljs.core.cst$kw$sym,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_sym,cljs.core.cst$kw$sym_DASH_data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_input,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_output], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,null,null),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,null,null,null));
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__38678){
var map__38679 = p__38678;
var map__38679__$1 = ((((!((map__38679 == null)))?((((map__38679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38679):map__38679);
var env = map__38679__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38679__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38679__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track);
var k = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ast.cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_oir,k], null));
if(cljs.core.truth_(temp__5455__auto__)){
var attr_resolvers = temp__5455__auto__;
var or__10805__auto__ = cljs.core.some(((function (attr_resolvers,temp__5455__auto__,k,e,map__38679,map__38679__$1,env,indexes,dependency_track){
return (function (p__38699){
var map__38701 = p__38699;
var map__38701__$1 = ((((!((map__38701 == null)))?((((map__38701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38701):map__38701);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38701__$1,cljs.core.cst$kw$sym);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38701__$1,cljs.core.cst$kw$attrs);
if(!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,attrs], null)))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_error,null], null), null),com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,attrs], null)),attrs));
}catch (e38705){var _ = e38705;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$e,cljs.core.select_keys(e__$1,attrs),cljs.core.cst$kw$f,cljs.core.first(sym)], null);
}
} else {
return null;
}
});})(attr_resolvers,temp__5455__auto__,k,e,map__38679,map__38679__$1,env,indexes,dependency_track))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.cst$kw$missing),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attr_resolvers,temp__5455__auto__,k,e,map__38679,map__38679__$1,env,indexes,dependency_track){
return (function (p__38707){
var vec__38708 = p__38707;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38708,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38708,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$attrs,attrs,cljs.core.cst$kw$missing,missing], null);
});})(attr_resolvers,temp__5455__auto__,k,e,map__38679,map__38679__$1,env,indexes,dependency_track))
,attr_resolvers)));
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is defined but requirements could not be met."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$attr,k,cljs.core.cst$kw$entity,e,cljs.core.cst$kw$requirements,cljs.core.keys(attr_resolvers)], null));
}
} else {
return null;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_symbol_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set),cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$s_SLASH_tuple,cljs.core.cst$sym$qualified_DASH_symbol_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_symbol_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_symbol_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set], null)),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38738){
return cljs.core.set_QMARK_(G__38738);
}),cljs.core.cst$kw$kind,cljs.core.set_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_symbol_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attributes_DASH_set),cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$connect_SLASH_pick_DASH_resolver,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38750){
return cljs.core.map_QMARK_(G__38750);
}),(function (G__38750){
return cljs.core.contains_QMARK_(G__38750,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
})], null),(function (G__38750){
return (cljs.core.map_QMARK_(G__38750)) && (cljs.core.contains_QMARK_(G__38750,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track], null))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_dependency_DASH_track], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,(function (p__38787){
var map__38788 = p__38787;
var map__38788__$1 = ((((!((map__38788 == null)))?((((map__38788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38788):map__38788);
var env = map__38788__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38788__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__38793){
var map__38794 = p__38793;
var map__38794__$1 = ((((!((map__38794 == null)))?((((map__38794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38794):map__38794);
var env = map__38794__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38794__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var temp__5455__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5455__auto__)){
var attr = temp__5455__auto__;
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents.cljs$core$IFn$_invoke$arity$1(indexes),attr)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,com.wsscode.pathom.core.ident_value(env)]);
} else {
return false;
}
} else {
return false;
}
});
com.wsscode.pathom.connect.ident_reader = (function com$wsscode$pathom$connect$ident_reader(env){
var temp__5455__auto__ = com.wsscode.pathom.connect.indexed_ident(env);
if(cljs.core.truth_(temp__5455__auto__)){
var ent = temp__5455__auto__;
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ent),env);
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
com.wsscode.pathom.connect.all_readers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
com.wsscode.pathom.connect.cached = (function com$wsscode$pathom$connect$cached(cache,x,f){
if(cljs.core.truth_(cache)){
if(cljs.core.contains_QMARK_(cljs.core.deref(cache),x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),x);
} else {
var res = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,x,res);

return res;
}
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__38816,ctx){
var map__38817 = p__38816;
var map__38817__$1 = ((((!((map__38817 == null)))?((((map__38817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38817):map__38817);
var index = map__38817__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38817__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38817__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_cache);
return com.wsscode.pathom.connect.cached(cache,ctx,((function (map__38817,map__38817__$1,index,index_io,cache){
return (function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__38817,map__38817__$1,index,index_io,cache){
return (function (a,b){
var attrs = (function (){var G__38820 = index;
var G__38821 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__38820,G__38821) : com.wsscode.pathom.connect.discover_attrs.call(null,G__38820,G__38821));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
});})(map__38817,map__38817__$1,index,index_io,cache))
,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__38817,map__38817__$1,index,index_io,cache){
return (function (p1__38809_SHARP_,p2__38808_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__38808_SHARP_) - (p1__38809_SHARP_ + (1))),p2__38808_SHARP_);
});})(map__38817,map__38817__$1,index,index_io,cache))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():com.wsscode.pathom.connect.merge_io(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY)));
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__38817,map__38817__$1,index,index_io,cache){
return (function (p__38823){
var vec__38824 = p__38823;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38824,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38824,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__38817,map__38817__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__38839 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__38817,map__38817__$1,index,index_io,cache){
return (function (p1__38814_SHARP_,p2__38815_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38814_SHARP_,p2__38815_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__38817,map__38817__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__38840 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__38839;
collected = G__38840;
continue;
} else {
return collected;
}
break;
}
});})(map__38817,map__38817__$1,index,index_io,cache))
);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$connect_SLASH_discover_DASH_attrs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$indexes,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.cst$kw$ctx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute)),cljs.core.cst$kw$ret,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$indexes,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.cst$kw$ctx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes,cljs.core.cst$kw$ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__38849){
return cljs.core.coll_QMARK_(G__38849);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute)], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$indexes,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,cljs.core.cst$kw$ctx,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_attribute)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map,null,null),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_io_DASH_map,null,null,null));
/**
 * This will use the index-fio to re-buildl the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__38855){
var map__38856 = p__38855;
var map__38856__$1 = ((((!((map__38856 == null)))?((((map__38856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38856):map__38856);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38856__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_resolvers);
return cljs.core.reduce_kv(com.wsscode.pathom.connect.add,cljs.core.PersistentArrayMap.EMPTY,index_resolvers);
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom.connect.data__GT_shape = (function com$wsscode$pathom$connect$data__GT_shape(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.reduce_kv((function (out,k,v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,((cljs.core.map_QMARK_(v))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.data__GT_shape.call(null,v))]):((cljs.core.sequential_QMARK_(v))?(function (){var shape = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (q,x){
return com.wsscode.pathom.core.merge_queries(q,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(x) : com.wsscode.pathom.connect.data__GT_shape.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,v);
if(cljs.core.seq(shape)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,shape]);
} else {
return k;
}
})():k
)));
}),cljs.core.PersistentVector.EMPTY,data);
} else {
return null;
}
});

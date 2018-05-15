// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.pathom.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.primitives');
goog.require('cljs.spec.alpha');
goog.require('clojure.set');
goog.require('goog.object');
goog.require('clojure.walk');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__37836){
return cljs.core.map_QMARK_(G__37836);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_seq,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$into,cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$into,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__37838){
return cljs.core.vector_QMARK_(G__37838);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.cst$kw$into,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$fn,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,cljs.core.cst$kw$map,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_map,cljs.core.cst$kw$list,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_seq),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$map,cljs.core.cst$kw$list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_map,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_seq], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_map,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_seq], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_reader,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.core.cst$kw$ret,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,null,null),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_error,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__37844_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$js_SLASH_Error,cljs.core.cst$sym$p1__37844_SHARP_)),cljs.core.cst$kw$gen,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_gen,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_ex_DASH_info,"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$some,"data"], null))])))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$js_SLASH_Error,cljs.core.cst$sym$_PERCENT_)),(function (p1__37844_SHARP_){
return (p1__37844_SHARP_ instanceof Error);
}),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$some,"data"], null))]));
}),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__37847){
return cljs.core.map_QMARK_(G__37847);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors_STAR_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_IAtom,cljs.core.cst$sym$_PERCENT_)),(function (p1__37849_SHARP_){
return (p1__37849_SHARP_ instanceof cljs.core.IAtom);
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_fail_DASH_fast_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_key_DASH_transform,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_value_DASH_transform,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key,cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$key,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_key_DASH_transform,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_key_DASH_transform,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_key_DASH_transform);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_value_DASH_transform,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_value_DASH_transform,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_value_DASH_transform);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$tx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn),cljs.core.cst$kw$ret,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,null,null),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$parser,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser),cljs.core.cst$kw$ret,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$parser,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$parser,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser,null,null),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_om_DASH_parser,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__37862){
return cljs.core.map_QMARK_(G__37862);
})], null),(function (G__37862){
return cljs.core.map_QMARK_(G__37862);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugins,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__37863){
return cljs.core.vector_QMARK_(G__37863);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
com.wsscode.pathom.core.filter_ast = (function com$wsscode$pathom$core$filter_ast(f,ast){
return clojure.walk.prewalk((function com$wsscode$pathom$core$filter_ast_$_filter_ast_walk(x){
if((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.cst$kw$children))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,cljs.core.cst$kw$children,(function (p1__37864_SHARP_){
return cljs.core.filterv(f,p1__37864_SHARP_);
}));
} else {
return x;
}
}),ast);
});
/**
 * Given an AST point, check if the children is a union query type.
 */
com.wsscode.pathom.core.union_children_QMARK_ = (function com$wsscode$pathom$core$union_children_QMARK_(ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union,(function (){var G__37865 = ast;
var G__37865__$1 = (((G__37865 == null))?null:cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__37865));
var G__37865__$2 = (((G__37865__$1 == null))?null:cljs.core.first(G__37865__$1));
if((G__37865__$2 == null)){
return null;
} else {
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__37865__$2);
}
})());
});
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__37868,reader){
var map__37869 = p__37868;
var map__37869__$1 = ((((!((map__37869 == null)))?((((map__37869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37869):map__37869);
var env = map__37869__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37869__$1,cljs.core.cst$kw$ast);
if(cljs.core.map_QMARK_(reader)){
var k = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var temp__5455__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__37874 = temp__5455__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__37869,map__37869__$1,env,ast){
return (function (p1__37866_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__37866_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__37866_SHARP_));
});})(map__37869,map__37869__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__37869,map__37869__$1,env,ast){
return (function (p1__37867_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37867_SHARP_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue);
});})(map__37869,map__37869__$1,env,ast))
),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),reader);
if(cljs.core.seq(res)){
return cljs.core.first(res);
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
} else {
if(cljs.core.ifn_QMARK_(reader)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't process reader",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reader,reader], null));

}
}
}
});
/**
 * Runs the read process for the reading, the reader can be a function, a vector or a map:
 * 
 *   function: will receive the environment as argument
 *   map: will dispatch from the ast key to a reader on the map value
 *   vector: will try to run each reader in sequence, when a reader returns ::p/continue it will try the next
 */
com.wsscode.pathom.core.read_from = (function com$wsscode$pathom$core$read_from(env,reader){
var res = com.wsscode.pathom.core.read_from_STAR_(env,reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue)){
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_not_DASH_found;
} else {
return res;
}
});
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return clojure.walk.prewalk((function com$wsscode$pathom$core$elide_items_$_elide_items_walk(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__37883){
var vec__37884 = p__37883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37884,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37884,(1),null);
return cljs.core.contains_QMARK_(item_set,v);
})),x);
} else {
return x;
}
}),input);
});
/**
 * Convert all ::p/not-found values of maps to nil
 */
com.wsscode.pathom.core.elide_not_found = (function com$wsscode$pathom$core$elide_not_found(input){
return com.wsscode.pathom.core.elide_items(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_not_DASH_found,null], null), null),input);
});
com.wsscode.pathom.core.atom_QMARK_ = (function com$wsscode$pathom$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__37894){
var map__37895 = p__37894;
var map__37895__$1 = ((((!((map__37895 == null)))?((((map__37895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37895):map__37895);
var env = map__37895__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37895__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,(function (){var or__10805__auto__ = entity_key;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity;
}
})());
});
/**
 * Fetch the entity according to the ::entity-key. If the entity is an IAtom, it will be derefed.
 * 
 *   If a second argument is sent, calls the parser against current element to garantee that some fields are loaded. This
 *   is useful when you need to ensure some values are loaded in order to fetch some more complex data.
 */
com.wsscode.pathom.core.entity = (function com$wsscode$pathom$core$entity(var_args){
var G__37901 = arguments.length;
switch (G__37901) {
case 1:
return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1 = (function (env){
var e = com.wsscode.pathom.core.raw_entity(env);
if(cljs.core.truth_(com.wsscode.pathom.core.atom_QMARK_(e))){
return cljs.core.deref(e);
} else {
return e;
}
});

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__37902,attributes){
var map__37903 = p__37902;
var map__37903__$1 = ((((!((map__37903 == null)))?((((map__37903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37903):map__37903);
var env = map__37903__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,cljs.core.cst$kw$parser);
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,com.wsscode.pathom.core.elide_not_found((function (){var G__37909 = env;
var G__37910 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__37909,G__37910) : parser.call(null,G__37909,G__37910));
})())], 0));
});

com.wsscode.pathom.core.entity.cljs$lang$maxFixedArity = 2;

cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_entity,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$attributes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__37914){
return cljs.core.coll_QMARK_(G__37914);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute)], null),null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity),cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity),null,null,null));
com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__37922,attributes){
var map__37923 = p__37922;
var map__37923__$1 = ((((!((map__37923 == null)))?((((map__37923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37923):map__37923);
var env = map__37923__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37923__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attributes),cljs.core.set(cljs.core.keys(e)));
if(cljs.core.seq(missing)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Entity attributes ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0)))," could not be realized"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,e,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path,path,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_missing_DASH_attributes,missing], null));
} else {
}

return e;
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_entity_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$attributes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__37929){
return cljs.core.coll_QMARK_(G__37929);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute)], null),null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity),cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity),null,null,null));
com.wsscode.pathom.core.entity_attr_BANG_ = (function com$wsscode$pathom$core$entity_attr_BANG_(env,attr){

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null)),attr);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_entity_DASH_attr_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$attribute], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__12091__auto__ = [];
var len__12084__auto___37937 = arguments.length;
var i__12085__auto___37938 = (0);
while(true){
if((i__12085__auto___37938 < len__12084__auto___37937)){
args__12091__auto__.push((arguments[i__12085__auto___37938]));

var G__37939 = (i__12085__auto___37938 + (1));
i__12085__auto___37938 = G__37939;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (env,fn,args){
var e = com.wsscode.pathom.core.raw_entity(env);
if(cljs.core.truth_(com.wsscode.pathom.core.atom_QMARK_(e))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,e,fn,args);
} else {
return null;
}
});

com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$maxFixedArity = (2);

com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq37933){
var G__37934 = cljs.core.first(seq37933);
var seq37933__$1 = cljs.core.next(seq37933);
var G__37935 = cljs.core.first(seq37933__$1);
var seq37933__$2 = cljs.core.next(seq37933__$1);
return com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37934,G__37935,seq37933__$2);
});

cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_swap_DASH_entity_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Runs a parser with current sub-query.
 */
com.wsscode.pathom.core.join = (function com$wsscode$pathom$core$join(var_args){
var G__37946 = arguments.length;
switch (G__37946) {
case 2:
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__37947){
var map__37948 = p__37947;
var map__37948__$1 = ((((!((map__37948 == null)))?((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37948):map__37948);
var env = map__37948__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,entity));
});

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__37950){
var map__37951 = p__37950;
var map__37951__$1 = ((((!((map__37951 == null)))?((((map__37951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37951):map__37951);
var env = map__37951__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37951__$1,cljs.core.cst$kw$parser);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37951__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37951__$1,cljs.core.cst$kw$query);
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37951__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_union_DASH_path);
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var query__$1 = (cljs.core.truth_(com.wsscode.pathom.core.union_children_QMARK_(ast))?(function (){var _ = (cljs.core.truth_(union_path)?null:(function(){throw (new Error(["Assert failed: ","You need to set :com.wsscode.pathom.core/union-path to handle union queries.","\n","union-path"].join('')))})());
var path = ((cljs.core.fn_QMARK_(union_path))?(union_path.cljs$core$IFn$_invoke$arity$1 ? union_path.cljs$core$IFn$_invoke$arity$1(env) : union_path.call(null,env)):(((union_path instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_path], null)),union_path):null));
var or__10805__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,path);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No query for union path",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$union_DASH_path,path,cljs.core.cst$kw$path,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path.cljs$core$IFn$_invoke$arity$1(env)], null));
}
})():query);
var env_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_parent_DASH_query,query__$1);
if((query__$1 == null)){
return e;
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_STAR_,null], null), null),query__$1))){
var computed_e = (function (){var G__37953 = env_SINGLEQUOTE_;
var G__37954 = cljs.core.filterv(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_STAR_,null], null), null)),query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__37953,G__37954) : parser.call(null,G__37953,G__37954));
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE_),computed_e], 0));
} else {
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,query__$1) : parser.call(null,env_SINGLEQUOTE_,query__$1));

}
}
});

com.wsscode.pathom.core.join.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__37960,coll){
var map__37961 = p__37960;
var map__37961__$1 = ((((!((map__37961 == null)))?((((map__37961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37961):map__37961);
var env = map__37961__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (map__37961,map__37961__$1,env,entity_key){
return (function (p1__37958_SHARP_,p2__37959_SHARP_){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,p1__37958_SHARP_),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path,cljs.core.conj,p2__37959_SHARP_));
});})(map__37961,map__37961__$1,env,entity_key))
,coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
com.wsscode.pathom.core.ident_QMARK_ = (function com$wsscode$pathom$core$ident_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)));
});
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__37963){
var map__37964 = p__37963;
var map__37964__$1 = ((((!((map__37964 == null)))?((((map__37964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37964):map__37964);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37964__$1,cljs.core.cst$kw$ast);
var key = (function (){var G__37966 = ast;
if((G__37966 == null)){
return null;
} else {
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__37966);
}
})();
if(cljs.core.vector_QMARK_(key)){
return cljs.core.first(key);
} else {
return null;
}
});
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__37967){
var map__37968 = p__37967;
var map__37968__$1 = ((((!((map__37968 == null)))?((((map__37968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37968):map__37968);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968__$1,cljs.core.cst$kw$ast);
var key = (function (){var G__37971 = ast;
if((G__37971 == null)){
return null;
} else {
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__37971);
}
})();
if(cljs.core.sequential_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__37973,elision_set){
var map__37974 = p__37973;
var map__37974__$1 = ((((!((map__37974 == null)))?((((map__37974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37974):map__37974);
var ast = map__37974__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37974__$1,cljs.core.cst$kw$key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37974__$1,cljs.core.cst$kw$union_DASH_key);
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,((function (union_elision_QMARK_,map__37974,map__37974__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__37974,map__37974__$1,ast,key,union_key){
return (function (p1__37972_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__37972_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__37972_SHARP_,elision_set));
});})(union_elision_QMARK_,map__37974,map__37974__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__37974,map__37974__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__37977){
var map__37978 = p__37977;
var map__37978__$1 = ((((!((map__37978 == null)))?((((map__37978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37978):map__37978);
var env = map__37978__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37978__$1,cljs.core.cst$kw$ast);
var G__37980 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
if((cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key.cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37980,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity);
} else {
return G__37980;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__37983){
var map__37984 = p__37983;
var map__37984__$1 = ((((!((map__37984 == null)))?((((map__37984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37984):map__37984);
var item_b = map__37984__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,cljs.core.cst$kw$key);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,cljs.core.cst$kw$type);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,cljs.core.cst$kw$params);
var temp__5455__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__37984,map__37984__$1,item_b,key,type,params){
return (function (p1__37982_SHARP_,p2__37981_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p2__37981_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37982_SHARP_,p2__37981_SHARP_], null);
} else {
return null;
}
});})(map__37984,map__37984__$1,item_b,key,type,params))
,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__37986 = temp__5455__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37986,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37986,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$join,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$prop,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(item),params)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,idx], null),com.wsscode.pathom.core.merge_queries_STAR_,item_b);
} else {
return cljs.core.reduced(null);
}
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prop,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$join,type))){
return cljs.core.assoc_in(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,idx], null),item_b);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type)){
return cljs.core.reduced(null);
} else {
return ast;

}
}
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ast,cljs.core.cst$kw$children,cljs.core.conj,item_b);
}
}),qa,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(qb));
});
com.wsscode.pathom.core.merge_queries = (function com$wsscode$pathom$core$merge_queries(qa,qb){
var G__37989 = com.wsscode.pathom.core.merge_queries_STAR_(fulcro.client.primitives.query__GT_ast(qa),fulcro.client.primitives.query__GT_ast(qb));
if((G__37989 == null)){
return null;
} else {
return fulcro.client.primitives.ast__GT_query(G__37989);
}
});
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__37990){
var map__37991 = p__37990;
var map__37991__$1 = ((((!((map__37991 == null)))?((((map__37991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37991):map__37991);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37991__$1,cljs.core.cst$kw$ast);
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
});
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__37993){
var map__37994 = p__37993;
var map__37994__$1 = ((((!((map__37994 == null)))?((((map__37994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37994):map__37994);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37994__$1,cljs.core.cst$kw$ast);
if(cljs.core.vector_QMARK_(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.first(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return null;
}
});
/**
 * Produces a reader that will respond to any keyword with the namespace ns. The join node logical level stays the same
 *   as the parent where the placeholder node is requested.
 */
com.wsscode.pathom.core.placeholder_reader = (function com$wsscode$pathom$core$placeholder_reader(var_args){
var G__37999 = arguments.length;
switch (G__37999) {
case 0:
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1(">");
});

com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return (function (p__38000){
var map__38001 = p__38000;
var map__38001__$1 = ((((!((map__38001 == null)))?((((map__38001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38001):map__38001);
var env = map__38001__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001__$1,cljs.core.cst$kw$ast);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast)))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
});

com.wsscode.pathom.core.placeholder_reader.cljs$lang$maxFixedArity = 1;

com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__38004){
var map__38005 = p__38004;
var map__38005__$1 = ((((!((map__38005 == null)))?((((map__38005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38005):map__38005);
var env = map__38005__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,cljs.core.cst$kw$query);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5455__auto__ = cljs.core.find(entity,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__38007 = temp__5455__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38007,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = cljs.core.map_QMARK_(v);
if(and__10793__auto__){
return query;
} else {
return and__10793__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
return v;
}
}
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__38011){
var map__38012 = p__38011;
var map__38012__$1 = ((((!((map__38012 == null)))?((((map__38012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38012):map__38012);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38012__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_key_DASH_transform);
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38012__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_value_DASH_transform);
return ((function (map__38012,map__38012__$1,map_key_transform,map_value_transform){
return (function (p__38014){
var map__38015 = p__38014;
var map__38015__$1 = ((((!((map__38015 == null)))?((((map__38015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38015):map__38015);
var env = map__38015__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38015__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38015__$1,cljs.core.cst$kw$query);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38015__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var key = (function (){var G__38017 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__38017) : map_key_transform.call(null,G__38017));
} else {
return G__38017;
}
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5455__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__38018 = temp__5455__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38018,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = cljs.core.map_QMARK_(v);
if(and__10793__auto__){
return query;
} else {
return and__10793__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__38021 = v;
if(cljs.core.truth_(map_value_transform)){
var G__38022 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var G__38023 = G__38021;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__38022,G__38023) : map_value_transform.call(null,G__38022,G__38023));
} else {
return G__38021;
}
}
}
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
;})(map__38012,map__38012__$1,map_key_transform,map_value_transform))
});
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__38026){
var map__38027 = p__38026;
var map__38027__$1 = ((((!((map__38027 == null)))?((((map__38027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38027):map__38027);
var env = map__38027__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38027__$1,cljs.core.cst$kw$query);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38027__$1,cljs.core.cst$kw$ast);
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38027__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_key_DASH_transform,cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38027__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_value_DASH_transform,((function (map__38027,map__38027__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__38027,map__38027__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38027__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var js_key = (function (){var G__38029 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__38029) : js_key_transform.call(null,G__38029));
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(goog.object.containsKey(entity,js_key))){
var v = goog.object.get(entity,js_key);
if(cljs.core.truth_(Array.isArray(v))){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = query;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),Object);
} else {
return and__10793__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__38030 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var G__38031 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__38030,G__38031) : js_value_transform.call(null,G__38030,G__38031));
}
}
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
com.wsscode.pathom.core.error_str = (function com$wsscode$pathom$core$error_str(err){
var msg = err.getMessage();
var data = cljs.core.ex_data(err);
var G__38033 = cljs.core.type(err);
var G__38033__$1 = (cljs.core.truth_(msg)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38033),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''):G__38033);
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38033__$1)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)))].join('');
} else {
return G__38033__$1;
}
});
/**
 * Helper function to update a mutation action.
 */
com.wsscode.pathom.core.update_action = (function com$wsscode$pathom$core$update_action(m,f){
if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$action)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$action,f);
} else {
return m;
}
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__38034){
var map__38035 = p__38034;
var map__38035__$1 = ((((!((map__38035 == null)))?((((map__38035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38035):map__38035);
var env = map__38035__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors_STAR_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_error);
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_fail_DASH_fast_QMARK_);
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
}catch (e38037){var e = e38037;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,(cljs.core.truth_(process_error)?(process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e)):com.wsscode.pathom.core.error_str(e)));

return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_error;
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__38038,k,p){
var map__38039 = p__38038;
var map__38039__$1 = ((((!((map__38039 == null)))?((((map__38039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38039):map__38039);
var env = map__38039__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38039__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_error);
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38039__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_fail_DASH_fast_QMARK_);
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__38039,map__38039__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__38039,map__38039__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
}catch (e38041){var e = e38041;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_error,com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__38039,map__38039__$1,env,process_error,fail_fast_QMARK_))
});})(map__38039,map__38039__$1,env,process_error,fail_fast_QMARK_))
);
}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__38043 = (function (){var G__38044 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors_STAR_,errors);
var G__38045 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__38044,G__38045) : parser.call(null,G__38044,G__38045));
})();
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38043,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors,cljs.core.deref(errors));
} else {
return G__38043;
}
});
});
com.wsscode.pathom.core.error_handler_plugin = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,com.wsscode.pathom.core.wrap_handle_exception,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,com.wsscode.pathom.core.wrap_parser_exception,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_mutate,com.wsscode.pathom.core.wrap_mutate_handle_exception], null);
com.wsscode.pathom.core.collapse_error_path = (function com$wsscode$pathom$core$collapse_error_path(m,path){

return cljs.core.vec((function (){var path_SINGLEQUOTE_ = path;
while(true){
if((cljs.core.count(path_SINGLEQUOTE_) === (0))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),path);
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,path_SINGLEQUOTE_))){
return path_SINGLEQUOTE_;
} else {
var G__38046 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__38046;
continue;
}
}
break;
}
})());
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_collapse_DASH_error_DASH_path,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$m,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$m,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$m,cljs.core.cst$kw$path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$m,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.vector_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,null,null,null));
com.wsscode.pathom.core.raise_errors = (function com$wsscode$pathom$core$raise_errors(data){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__38051){
var vec__38052 = p__38051;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_error,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,path))){
var path_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors,cljs.core.last(path)], null));
return cljs.core.assoc_in(m,path_SINGLEQUOTE_,err);
} else {
return m;
}
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_raise_DASH_errors,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors], null))),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__38057){
return cljs.core.map_QMARK_(G__38057);
})], null),(function (G__38057){
return cljs.core.map_QMARK_(G__38057);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors], null))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$data,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,null,null,null));
/**
 * Mutations running through a parser all come back in a map like this {'my/mutation {:result {...}}}. This function
 *   converts that to {'my/mutation {...}}. Copied from fulcro.server.
 */
com.wsscode.pathom.core.raise_response = (function com$wsscode$pathom$core$raise_response(resp){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__38058){
var vec__38059 = p__38058;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38059,(1),null);
if(((k instanceof cljs.core.Symbol)) && (!((cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(v) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,resp);
});
com.wsscode.pathom.core.raise_mutation_result_plugin = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,(function com$wsscode$pathom$core$raise_mutation_result_wrap_parser(parser){
return (function com$wsscode$pathom$core$raise_mutation_result_wrap_parser_$_raise_mutation_result_wrap_internal(env,tx){
return com.wsscode.pathom.core.raise_response((parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx)));
});
})], null);
com.wsscode.pathom.core.env_plugin = (function com$wsscode$pathom$core$env_plugin(extra_env){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,(function com$wsscode$pathom$core$env_plugin_$_env_plugin_wrap_parser(parser){
return (function com$wsscode$pathom$core$env_plugin_$_env_plugin_wrap_parser_$_env_plugin_wrap_internal(env,tx){
var G__38063 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,extra_env], 0));
var G__38064 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__38063,G__38064) : parser.call(null,G__38063,G__38064));
});
})], null);
});
/**
 * This plugin receives a function that will be called to wrap the current
 *   enviroment each time the main parser is called (parser level).
 */
com.wsscode.pathom.core.env_wrap_plugin = (function com$wsscode$pathom$core$env_wrap_plugin(extra_env_wrapper){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,(function com$wsscode$pathom$core$env_wrap_plugin_$_env_wrap_wrap_parser(parser){
return (function com$wsscode$pathom$core$env_wrap_plugin_$_env_wrap_wrap_parser_$_env_wrap_wrap_internal(env,tx){
var G__38065 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__38066 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__38065,G__38066) : parser.call(null,G__38065,G__38066));
});
})], null);
});
com.wsscode.pathom.core.request_cache_plugin = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,(function com$wsscode$pathom$core$request_cache_wrap_parser(parser){
return (function com$wsscode$pathom$core$request_cache_wrap_parser_$_request_cache_wrap_internal(env,tx){
var G__38069 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_request_DASH_cache,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__38070 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__38069,G__38070) : parser.call(null,G__38069,G__38070));
});
})], null);
var ret__12130__auto___38092 = com.wsscode.pathom.core.cached = (function com$wsscode$pathom$core$cached(_AMPERSAND_form,_AMPERSAND_env,env,key,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cache__38071__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__11759__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_request_DASH_cache)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__38072__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cache__38071__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__38072__auto__),(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11759__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__38072__auto__),(function (){var x__11759__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cache__38071__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),(function (){var x__11759__auto__ = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__38072__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__38072__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()], 0))));
});
com.wsscode.pathom.core.cached.cljs$lang$macro = true;

com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__38098,key,value){
var map__38099 = p__38098;
var map__38099__$1 = ((((!((map__38099 == null)))?((((map__38099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38099):map__38099);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38099__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_request_DASH_cache);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__38102){
var map__38103 = p__38102;
var map__38103__$1 = ((((!((map__38103 == null)))?((((map__38103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38103):map__38103);
var env = map__38103__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,cljs.core.cst$kw$ast);
var G__38105 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__38105) : reader.call(null,G__38105));
});
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(parser){
return (function (env,tx){
var G__38107 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_parent_DASH_query,tx], 0));
var G__38108 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__38107,G__38108) : parser.call(null,G__38107,G__38108));
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__38109){
var map__38110 = p__38109;
var map__38110__$1 = ((((!((map__38110 == null)))?((((map__38110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38110):map__38110);
var env = map__38110__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38110__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader);
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(v,plugins,key){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x,plugin){
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,key);
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return x;
}
}),v,plugins);
});
com.wsscode.pathom.core.parser = (function com$wsscode$pathom$core$parser(p__38114){
var map__38115 = p__38114;
var map__38115__$1 = ((((!((map__38115 == null)))?((((map__38115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38115):map__38115);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,cljs.core.cst$kw$mutate);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugins);
return com.wsscode.pathom.core.wrap_normalize_env(com.wsscode.pathom.core.apply_plugins(fulcro.client.primitives.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,com.wsscode.pathom.core.wrap_reduce_params(com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read))),cljs.core.cst$kw$mutate,(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_mutate):null)], null)),plugins,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser));
});
com.wsscode.pathom.core.continue$ = com.wsscode.pathom.core.join;
com.wsscode.pathom.core.continue_seq = com.wsscode.pathom.core.join_seq;
com.wsscode.pathom.core.placeholder_node = com.wsscode.pathom.core.placeholder_reader;
/**
 * DEPRECATED: use p/parser to create your parser
 */
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__38119,_,___$1){
var map__38120 = p__38119;
var map__38120__$1 = ((((!((map__38120 == null)))?((((map__38120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38120):map__38120);
var env = map__38120__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38120__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader);
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38120__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_reader);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__38122 = ast;
if((G__38122 == null)){
return null;
} else {
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__38122);
}
})();
if(cljs.core.sequential_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
com.wsscode.pathom.core.ensure_attrs = (function com$wsscode$pathom$core$ensure_attrs(env,attributes){

return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
});

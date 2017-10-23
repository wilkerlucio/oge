// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.pathom.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('cljs.spec.alpha');
goog.require('clojure.set');
goog.require('goog.object');
goog.require('clojure.walk');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__33241){
return cljs.core.map_QMARK_(G__33241);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__28446__auto__,v__28447__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__28447__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_seq,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$into,cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$into,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__33249){
return cljs.core.vector_QMARK_(G__33249);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.cst$kw$into,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$fn,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,cljs.core.cst$kw$map,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_map,cljs.core.cst$kw$list,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_seq),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$map,cljs.core.cst$kw$list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_map,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_seq], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_fn,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_map,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_seq], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_reader,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.core.cst$kw$ret,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,null,null),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_error,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_spec,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__33273_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$js_SLASH_Error,cljs.core.cst$sym$p1__33273_SHARP_)),cljs.core.cst$kw$gen,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_gen,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_ex_DASH_info,"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$some,"data"], null))])))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$js_SLASH_Error,cljs.core.cst$sym$_PERCENT_)),(function (p1__33273_SHARP_){
return (p1__33273_SHARP_ instanceof Error);
}),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$some,"data"], null))]));
}),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$any_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__33282){
return cljs.core.map_QMARK_(G__33282);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__28446__auto__,v__28447__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__28447__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors_STAR_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_IAtom,cljs.core.cst$sym$_PERCENT_)),(function (p1__33287_SHARP_){
return (p1__33287_SHARP_ instanceof cljs.core.IAtom);
}));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_error,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$error,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_error),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$error,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_error),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$error], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_error], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_error], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$error,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_error),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
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
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__33303){
return cljs.core.map_QMARK_(G__33303);
})], null),(function (G__33303){
return cljs.core.map_QMARK_(G__33303);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugins,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__33304){
return cljs.core.vector_QMARK_(G__33304);
}),cljs.core.cst$kw$kind,cljs.core.vector_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugin,cljs.core.cst$kw$kind,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_)], null),null));
/**
 * Given an AST point, check if the children is a union query type.
 */
com.wsscode.pathom.core.union_children_QMARK_ = (function com$wsscode$pathom$core$union_children_QMARK_(ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union,(function (){var G__33305 = ast;
var G__33305__$1 = (((G__33305 == null))?null:cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__33305));
var G__33305__$2 = (((G__33305__$1 == null))?null:cljs.core.first(G__33305__$1));
if((G__33305__$2 == null)){
return null;
} else {
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__33305__$2);
}
})());
});
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__33308,reader){
var map__33309 = p__33308;
var map__33309__$1 = ((((!((map__33309 == null)))?((((map__33309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33309):map__33309);
var env = map__33309__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33309__$1,cljs.core.cst$kw$ast);
if(cljs.core.map_QMARK_(reader)){
var k = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var temp__5457__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__33313 = temp__5457__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33313,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__33309,map__33309__$1,env,ast){
return (function (p1__33306_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__33306_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__33306_SHARP_));
});})(map__33309,map__33309__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__33309,map__33309__$1,env,ast){
return (function (p1__33307_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__33307_SHARP_,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue);
});})(map__33309,map__33309__$1,env,ast))
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
 * Convert all ::p/not-found values of maps to nil
 */
com.wsscode.pathom.core.elide_not_found = (function com$wsscode$pathom$core$elide_not_found(input){
return clojure.walk.prewalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__33326){
var vec__33327 = p__33326;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33327,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33327,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_not_DASH_found);
})),x);
} else {
return x;
}
}),input);
});
com.wsscode.pathom.core.atom_QMARK_ = (function com$wsscode$pathom$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__33338){
var map__33339 = p__33338;
var map__33339__$1 = ((((!((map__33339 == null)))?((((map__33339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33339):map__33339);
var env = map__33339__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33339__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,(function (){var or__10412__auto__ = entity_key;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
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
var G__33348 = arguments.length;
switch (G__33348) {
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

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__33352,attributes){
var map__33353 = p__33352;
var map__33353__$1 = ((((!((map__33353 == null)))?((((map__33353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33353):map__33353);
var env = map__33353__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33353__$1,cljs.core.cst$kw$parser);
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,com.wsscode.pathom.core.elide_not_found((function (){var G__33357 = env;
var G__33358 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__33357,G__33358) : parser.call(null,G__33357,G__33358));
})())], 0));
});

com.wsscode.pathom.core.entity.cljs$lang$maxFixedArity = 2;

cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_entity,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$attributes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__33373){
return cljs.core.coll_QMARK_(G__33373);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute)], null),null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity),cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity),null,null,null));
com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__33381,attributes){
var map__33382 = p__33381;
var map__33382__$1 = ((((!((map__33382 == null)))?((((map__33382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33382):map__33382);
var env = map__33382__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33382__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attributes),cljs.core.set(cljs.core.keys(e)));
if(cljs.core.seq(missing)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Entity attributes ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0)))," could not be realized"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,e,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path,path,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_missing_DASH_attributes,missing], null));
} else {
}

return e;
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_entity_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$attributes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__33395){
return cljs.core.coll_QMARK_(G__33395);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute)], null),null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attributes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity),cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity,null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity),null,null,null));
com.wsscode.pathom.core.entity_attr_BANG_ = (function com$wsscode$pathom$core$entity_attr_BANG_(env,attr){

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null)),attr);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_entity_DASH_attr_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$attribute], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$attribute,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_attribute),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___33437 = arguments.length;
var i__11692__auto___33438 = (0);
while(true){
if((i__11692__auto___33438 < len__11691__auto___33437)){
args__11698__auto__.push((arguments[i__11692__auto___33438]));

var G__33439 = (i__11692__auto___33438 + (1));
i__11692__auto___33438 = G__33439;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
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

com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq33422){
var G__33423 = cljs.core.first(seq33422);
var seq33422__$1 = cljs.core.next(seq33422);
var G__33424 = cljs.core.first(seq33422__$1);
var seq33422__$2 = cljs.core.next(seq33422__$1);
return com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33423,G__33424,seq33422__$2);
});

cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$pathom$core_SLASH_swap_DASH_entity_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_env,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Runs a parser with current sub-query.
 */
com.wsscode.pathom.core.join = (function com$wsscode$pathom$core$join(var_args){
var G__33452 = arguments.length;
switch (G__33452) {
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__33457){
var map__33458 = p__33457;
var map__33458__$1 = ((((!((map__33458 == null)))?((((map__33458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33458):map__33458);
var env = map__33458__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33458__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,entity));
});

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__33461){
var map__33462 = p__33461;
var map__33462__$1 = ((((!((map__33462 == null)))?((((map__33462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33462):map__33462);
var env = map__33462__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33462__$1,cljs.core.cst$kw$parser);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33462__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33462__$1,cljs.core.cst$kw$query);
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33462__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_union_DASH_path);
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var query__$1 = (cljs.core.truth_(com.wsscode.pathom.core.union_children_QMARK_(ast))?(function (){var _ = (cljs.core.truth_(union_path)?null:(function(){throw (new Error(["Assert failed: ","You need to set :com.wsscode.pathom.core/union-path to handle union queries.","\n","union-path"].join('')))})());
var path = ((cljs.core.fn_QMARK_(union_path))?(union_path.cljs$core$IFn$_invoke$arity$1 ? union_path.cljs$core$IFn$_invoke$arity$1(env) : union_path.call(null,env)):(((union_path instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_path], null)),union_path):null));
var or__10412__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,path);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No query for union path",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$union_DASH_path,path,cljs.core.cst$kw$path,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path.cljs$core$IFn$_invoke$arity$1(env)], null));
}
})():query);
if((query__$1 == null)){
return e;
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_STAR_,null], null), null),query__$1))){
var computed_e = (function (){var G__33470 = env;
var G__33471 = cljs.core.filterv(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_STAR_,null], null), null)),query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__33470,G__33471) : parser.call(null,G__33470,G__33471));
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),computed_e], 0));
} else {
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,query__$1) : parser.call(null,env,query__$1));

}
}
});

com.wsscode.pathom.core.join.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__33487,coll){
var map__33491 = p__33487;
var map__33491__$1 = ((((!((map__33491 == null)))?((((map__33491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33491):map__33491);
var env = map__33491__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33491__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (map__33491,map__33491__$1,env,entity_key){
return (function (p1__33485_SHARP_,p2__33486_SHARP_){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,p1__33485_SHARP_),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path,cljs.core.conj,p2__33486_SHARP_));
});})(map__33491,map__33491__$1,env,entity_key))
,coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__33498){
var map__33499 = p__33498;
var map__33499__$1 = ((((!((map__33499 == null)))?((((map__33499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33499):map__33499);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33499__$1,cljs.core.cst$kw$ast);
var key = (function (){var G__33502 = ast;
if((G__33502 == null)){
return null;
} else {
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__33502);
}
})();
if(cljs.core.vector_QMARK_(key)){
return cljs.core.first(key);
} else {
return null;
}
});
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__33506){
var map__33507 = p__33506;
var map__33507__$1 = ((((!((map__33507 == null)))?((((map__33507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33507):map__33507);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33507__$1,cljs.core.cst$kw$ast);
var key = (function (){var G__33511 = ast;
if((G__33511 == null)){
return null;
} else {
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__33511);
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
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__33516,elision_set){
var map__33517 = p__33516;
var map__33517__$1 = ((((!((map__33517 == null)))?((((map__33517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33517):map__33517);
var ast = map__33517__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33517__$1,cljs.core.cst$kw$key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33517__$1,cljs.core.cst$kw$union_DASH_key);
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,((function (union_elision_QMARK_,map__33517,map__33517__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__33517,map__33517__$1,ast,key,union_key){
return (function (p1__33514_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__33514_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__33514_SHARP_,elision_set));
});})(union_elision_QMARK_,map__33517,map__33517__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__33517,map__33517__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__33530){
var map__33531 = p__33530;
var map__33531__$1 = ((((!((map__33531 == null)))?((((map__33531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33531):map__33531);
var env = map__33531__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33531__$1,cljs.core.cst$kw$ast);
var G__33534 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
if((cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key.cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33534,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity);
} else {
return G__33534;
}
});
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__33546){
var map__33547 = p__33546;
var map__33547__$1 = ((((!((map__33547 == null)))?((((map__33547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33547):map__33547);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33547__$1,cljs.core.cst$kw$ast);
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
});
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__33561){
var map__33564 = p__33561;
var map__33564__$1 = ((((!((map__33564 == null)))?((((map__33564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33564):map__33564);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33564__$1,cljs.core.cst$kw$ast);
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
var G__33578 = arguments.length;
switch (G__33578) {
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
return (function (p__33580){
var map__33581 = p__33580;
var map__33581__$1 = ((((!((map__33581 == null)))?((((map__33581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33581):map__33581);
var env = map__33581__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33581__$1,cljs.core.cst$kw$ast);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast)))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
});

com.wsscode.pathom.core.placeholder_reader.cljs$lang$maxFixedArity = 1;

com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__33589){
var map__33590 = p__33589;
var map__33590__$1 = ((((!((map__33590 == null)))?((((map__33590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33590):map__33590);
var env = map__33590__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33590__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33590__$1,cljs.core.cst$kw$query);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33590__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5457__auto__ = cljs.core.find(entity,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__33599 = temp__5457__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.map_QMARK_(v);
if(and__10400__auto__){
return query;
} else {
return and__10400__auto__;
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
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__33608){
var map__33609 = p__33608;
var map__33609__$1 = ((((!((map__33609 == null)))?((((map__33609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33609):map__33609);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33609__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_key_DASH_transform);
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33609__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_map_DASH_value_DASH_transform);
return ((function (map__33609,map__33609__$1,map_key_transform,map_value_transform){
return (function (p__33614){
var map__33615 = p__33614;
var map__33615__$1 = ((((!((map__33615 == null)))?((((map__33615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33615):map__33615);
var env = map__33615__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33615__$1,cljs.core.cst$kw$ast);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33615__$1,cljs.core.cst$kw$query);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33615__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var key = (function (){var G__33619 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__33619) : map_key_transform.call(null,G__33619));
} else {
return G__33619;
}
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5457__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__33620 = temp__5457__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33620,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.map_QMARK_(v);
if(and__10400__auto__){
return query;
} else {
return and__10400__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__33625 = v;
if(cljs.core.truth_(map_value_transform)){
var G__33626 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var G__33627 = G__33625;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__33626,G__33627) : map_value_transform.call(null,G__33626,G__33627));
} else {
return G__33625;
}
}
}
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
;})(map__33609,map__33609__$1,map_key_transform,map_value_transform))
});
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__33645){
var map__33646 = p__33645;
var map__33646__$1 = ((((!((map__33646 == null)))?((((map__33646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33646):map__33646);
var env = map__33646__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33646__$1,cljs.core.cst$kw$query);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33646__$1,cljs.core.cst$kw$ast);
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33646__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_key_DASH_transform,cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33646__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_js_DASH_value_DASH_transform,((function (map__33646,map__33646__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__33646,map__33646__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33646__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key);
var js_key = (function (){var G__33654 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__33654) : js_key_transform.call(null,G__33654));
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(goog.object.containsKey(entity,js_key))){
var v = goog.object.get(entity,js_key);
if(cljs.core.truth_(Array.isArray(v))){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = query;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),Object);
} else {
return and__10400__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__33661 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var G__33662 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__33661,G__33662) : js_value_transform.call(null,G__33661,G__33662));
}
}
} else {
return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_continue;
}
});
com.wsscode.pathom.core.error_str = (function com$wsscode$pathom$core$error_str(err){
var msg = err.getMessage();
var data = cljs.core.ex_data(err);
var G__33687 = cljs.core.type(err);
var G__33687__$1 = (cljs.core.truth_(msg)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33687),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''):G__33687);
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33687__$1)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)))].join('');
} else {
return G__33687__$1;
}
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function (p__33694){
var map__33695 = p__33694;
var map__33695__$1 = ((((!((map__33695 == null)))?((((map__33695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33695):map__33695);
var env = map__33695__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors_STAR_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path);
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_error);
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_fail_DASH_fast_QMARK_);
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
}catch (e33701){var e = e33701;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,(cljs.core.truth_(process_error)?(process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e)):com.wsscode.pathom.core.error_str(e)));

return cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader_DASH_error;
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function (env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__33709 = (function (){var G__33710 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors_STAR_,errors);
var G__33711 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__33710,G__33711) : parser.call(null,G__33710,G__33711));
})();
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33709,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors,cljs.core.deref(errors));
} else {
return G__33709;
}
});
});
com.wsscode.pathom.core.error_handler_plugin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read,com.wsscode.pathom.core.wrap_handle_exception,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,com.wsscode.pathom.core.wrap_parser_exception], null);
com.wsscode.pathom.core.env_plugin = (function com$wsscode$pathom$core$env_plugin(extra_env){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,(function (parser){
return (function (env,tx){
var G__33722 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,extra_env], 0));
var G__33723 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__33722,G__33723) : parser.call(null,G__33722,G__33723));
});
})], null);
});
/**
 * This plugin receives a function that will be called to wrap the current
 *   enviroment each time the main parser is called (parser level).
 */
com.wsscode.pathom.core.env_wrap_plugin = (function com$wsscode$pathom$core$env_wrap_plugin(extra_env_wrapper){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,(function (parser){
return (function (env,tx){
var G__33728 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__33729 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__33728,G__33729) : parser.call(null,G__33728,G__33729));
});
})], null);
});
com.wsscode.pathom.core.request_cache_plugin = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser,(function (parser){
return (function (env,tx){
var G__33732 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_request_DASH_cache,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__33733 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__33732,G__33733) : parser.call(null,G__33732,G__33733));
});
})], null);
var ret__11737__auto___33843 = com.wsscode.pathom.core.cached = (function com$wsscode$pathom$core$cached(_AMPERSAND_form,_AMPERSAND_env,env,key,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cache__33736__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__11366__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_request_DASH_cache)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__33738__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cache__33736__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__33738__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__33738__auto__),(function (){var x__11366__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cache__33736__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),(function (){var x__11366__auto__ = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__33738__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hit__33738__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
});
com.wsscode.pathom.core.cached.cljs$lang$macro = true;

com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__33869,key,value){
var map__33871 = p__33869;
var map__33871__$1 = ((((!((map__33871 == null)))?((((map__33871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33871):map__33871);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33871__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_request_DASH_cache);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__33882){
var map__33883 = p__33882;
var map__33883__$1 = ((((!((map__33883 == null)))?((((map__33883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33883):map__33883);
var env = map__33883__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33883__$1,cljs.core.cst$kw$ast);
var G__33885 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__33885) : reader.call(null,G__33885));
});
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(parser){
return (function (env,tx){
var G__33889 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity_DASH_key,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_entity);
var G__33890 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__33889,G__33890) : parser.call(null,G__33889,G__33890));
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__33894){
var map__33895 = p__33894;
var map__33895__$1 = ((((!((map__33895 == null)))?((((map__33895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33895):map__33895);
var env = map__33895__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33895__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader);
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
com.wsscode.pathom.core.parser = (function com$wsscode$pathom$core$parser(p__33902){
var map__33903 = p__33902;
var map__33903__$1 = ((((!((map__33903 == null)))?((((map__33903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33903):map__33903);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33903__$1,cljs.core.cst$kw$mutate);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33903__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_plugins);
return com.wsscode.pathom.core.wrap_normalize_env(com.wsscode.pathom.core.apply_plugins(om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,com.wsscode.pathom.core.wrap_reduce_params(com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_read))),cljs.core.cst$kw$mutate,mutate], null)),plugins,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_wrap_DASH_parser));
});
com.wsscode.pathom.core.continue$ = com.wsscode.pathom.core.join;
com.wsscode.pathom.core.continue_seq = com.wsscode.pathom.core.join_seq;
com.wsscode.pathom.core.placeholder_node = com.wsscode.pathom.core.placeholder_reader;
/**
 * DEPRECATED: use p/parser to create your parser
 */
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__33912,_,___$1){
var map__33913 = p__33912;
var map__33913__$1 = ((((!((map__33913 == null)))?((((map__33913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33913):map__33913);
var env = map__33913__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33913__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_reader);
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33913__$1,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_process_DASH_reader);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__33922 = ast;
if((G__33922 == null)){
return null;
} else {
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__33922);
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

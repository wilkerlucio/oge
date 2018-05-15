// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.spec_inspec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
com.wsscode.spec_inspec.accept_keyword = (function com$wsscode$spec_inspec$accept_keyword(x){
if(cljs.core.qualified_keyword_QMARK_(x)){
return x;
} else {
return null;
}
});
com.wsscode.spec_inspec.accept_symbol = (function com$wsscode$spec_inspec$accept_symbol(x){
if(cljs.core.qualified_symbol_QMARK_(x)){
return x;
} else {
return null;
}
});
com.wsscode.spec_inspec.accept_symbol_call = (function com$wsscode$spec_inspec$accept_symbol_call(spec){
if((cljs.core.seq_QMARK_(spec)) && ((cljs.core.first(spec) instanceof cljs.core.Symbol))){
return spec;
} else {
return null;
}
});
/**
 * Return the spec form or nil.
 */
com.wsscode.spec_inspec.safe_form = (function com$wsscode$spec_inspec$safe_form(spec){
if(cljs.core.contains_QMARK_(cljs.spec.alpha.registry(),spec)){
return cljs.spec.alpha.form(spec);
} else {
return null;
}
});
/**
 * Return the spec, or first spec when input is a s/and.
 */
com.wsscode.spec_inspec.form__GT_spec = (function com$wsscode$spec_inspec$form__GT_spec(and_spec){
if((cljs.core.seq_QMARK_(and_spec)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(and_spec),cljs.core.cst$sym$cljs$spec$alpha_SLASH_and))){
return cljs.core.second(and_spec);
} else {
return and_spec;
}
});
/**
 * Determine the main spec symbol from a spec form.
 */
com.wsscode.spec_inspec.spec__GT_root_sym = (function com$wsscode$spec_inspec$spec__GT_root_sym(spec){
while(true){
var f = (function (){var or__10805__auto__ = com.wsscode.spec_inspec.safe_form(spec);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
var or__10805__auto____$1 = com.wsscode.spec_inspec.accept_symbol(spec);
if(cljs.core.truth_(or__10805__auto____$1)){
return or__10805__auto____$1;
} else {
return com.wsscode.spec_inspec.accept_symbol_call(spec);
}
}
})();
var spec_def = com.wsscode.spec_inspec.form__GT_spec(f);
if(cljs.core.qualified_keyword_QMARK_(spec_def)){
var G__25308 = spec_def;
spec = G__25308;
continue;
} else {
return spec_def;
}
break;
}
});
/**
 * Look up for the parent coercer using the spec hierarchy.
 */
com.wsscode.spec_inspec.parent_spec = (function com$wsscode$spec_inspec$parent_spec(k){
var or__10805__auto__ = com.wsscode.spec_inspec.accept_keyword(cljs.spec.alpha.get_spec(k));
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return com.wsscode.spec_inspec.accept_keyword(com.wsscode.spec_inspec.form__GT_spec(com.wsscode.spec_inspec.safe_form(k)));
}
});
/**
 * Look for the key in registry, if not found try key spec parent recursively.
 */
com.wsscode.spec_inspec.registry_lookup = (function com$wsscode$spec_inspec$registry_lookup(registry,k){
while(true){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(registry,k);
if(cljs.core.truth_(temp__5455__auto__)){
var c = temp__5455__auto__;
return c;
} else {
var temp__5457__auto__ = com.wsscode.spec_inspec.accept_keyword(com.wsscode.spec_inspec.parent_spec(k));
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
var G__25322 = registry;
var G__25323 = parent;
registry = G__25322;
k = G__25323;
continue;
} else {
return null;
}
}
break;
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$spec_DASH_inspec_SLASH_registry_DASH_lookup,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$registry,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$registry,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$registry,cljs.core.cst$kw$k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.qualified_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$registry,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$k,cljs.core.cst$sym$cljs$core_SLASH_qualified_DASH_keyword_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));

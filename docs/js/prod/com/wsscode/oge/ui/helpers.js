// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.ui.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('cljs.spec.alpha');
com.wsscode.oge.ui.helpers.js_get_in = (function com$wsscode$oge$ui$helpers$js_get_in(x,path){
var G__41258 = x;
var G__41259 = cljs.core.clj__GT_js(path);
return goog.object.getValueByKeys(G__41258,G__41259);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$oge$ui$helpers_SLASH_js_DASH_get_DASH_in,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
com.wsscode.oge.ui.helpers.html_attr_merge = (function com$wsscode$oge$ui$helpers$html_attr_merge(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if(typeof a === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
} else {
return b;

}
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$oge$ui$helpers_SLASH_html_DASH_attr_DASH_merge,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$a,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$b,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$a,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$b,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.cst$kw$b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$a,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$b,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
com.wsscode.oge.ui.helpers.props__GT_html = (function com$wsscode$oge$ui$helpers$props__GT_html(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41289 = arguments.length;
var i__12085__auto___41290 = (0);
while(true){
if((i__12085__auto___41290 < len__12084__auto___41289)){
args__12091__auto__.push((arguments[i__12085__auto___41290]));

var G__41292 = (i__12085__auto___41290 + (1));
i__12085__auto___41290 = G__41292;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__41283){
var vec__41286 = p__41283;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41286,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41286,(1),null);
return cljs.core.simple_keyword_QMARK_(k);
})),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,com.wsscode.oge.ui.helpers.html_attr_merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$react_DASH_key),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__41275_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41275_SHARP_,cljs.core.cst$kw$react_DASH_key);
}),props))));
});

com.wsscode.oge.ui.helpers.props__GT_html.cljs$lang$maxFixedArity = (1);

com.wsscode.oge.ui.helpers.props__GT_html.cljs$lang$applyTo = (function (seq41276){
var G__41280 = cljs.core.first(seq41276);
var seq41276__$1 = cljs.core.next(seq41276);
return com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__41280,seq41276__$1);
});

com.wsscode.oge.ui.helpers.expand_classes = (function com$wsscode$oge$ui$helpers$expand_classes(css,classes){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(css,classes))], null);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$oge$ui$helpers_SLASH_expand_DASH_classes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$css,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$classes,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$css,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$classes,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$css,cljs.core.cst$kw$classes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$css,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$classes,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,null,null,null));
com.wsscode.oge.ui.helpers.strings = (function com$wsscode$oge$ui$helpers$strings(strings){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41303_SHARP_){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41303_SHARP_),"\""].join('');
}),strings));
});

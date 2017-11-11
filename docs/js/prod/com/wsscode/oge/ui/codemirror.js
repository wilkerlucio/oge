// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.ui.codemirror');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('om.dom');
goog.require('goog.object');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.spec.alpha');
goog.require('cljs.reader');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$obj,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$obj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.map_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_readOnly,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_onChange,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$code,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$code,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$code,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__40179){
return cljs.core.map_QMARK_(G__40179);
})], null),(function (G__40179){
return cljs.core.map_QMARK_(G__40179);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_props,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__40209){
return cljs.core.map_QMARK_(G__40209);
}),(function (G__40209){
return cljs.core.contains_QMARK_(G__40209,cljs.core.cst$kw$value);
})], null),(function (G__40209){
return (cljs.core.map_QMARK_(G__40209)) && (cljs.core.contains_QMARK_(G__40209,cljs.core.cst$kw$value));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$value))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_extraKeys,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$s_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$fn_QMARK_)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$str,cljs.core.cst$kw$fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.fn_QMARK_], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__40231){
return cljs.core.map_QMARK_(G__40231);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__24401__auto__,v__24402__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__24402__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_))], null),null));
com.wsscode.oge.ui.codemirror.prop_call = (function com$wsscode$oge$ui$codemirror$prop_call(var_args){
var args__11698__auto__ = [];
var len__11691__auto___40269 = arguments.length;
var i__11692__auto___40271 = (0);
while(true){
if((i__11692__auto___40271 < len__11691__auto___40269)){
args__11698__auto__.push((arguments[i__11692__auto___40271]));

var G__40275 = (i__11692__auto___40271 + (1));
i__11692__auto___40271 = G__40275;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic = (function (comp,name,args){
var temp__5459__auto__ = (function (){var G__40261 = om.next.props(comp);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__40261) : name.call(null,G__40261));
})();
if(cljs.core.truth_(temp__5459__auto__)){
var f = temp__5459__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
});

com.wsscode.oge.ui.codemirror.prop_call.cljs$lang$maxFixedArity = (2);

com.wsscode.oge.ui.codemirror.prop_call.cljs$lang$applyTo = (function (seq40257){
var G__40258 = cljs.core.first(seq40257);
var seq40257__$1 = cljs.core.next(seq40257);
var G__40259 = cljs.core.first(seq40257__$1);
var seq40257__$2 = cljs.core.next(seq40257__$1);
return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic(G__40258,G__40259,seq40257__$2);
});

com.wsscode.oge.ui.codemirror.html_props = (function com$wsscode$oge$ui$codemirror$html_props(props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40308){
var vec__40309 = p__40308;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40309,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40309,(1),null);
return cljs.core.namespace(k);
}),props)));
});
com.wsscode.oge.ui.codemirror.oge_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof com.wsscode.oge.ui.codemirror.Editor !== 'undefined'){
} else {
/**
 * @constructor
 */
com.wsscode.oge.ui.codemirror.Editor = (function com$wsscode$oge$ui$codemirror$Editor(){
var this__20292__auto__ = this;
React.Component.apply(this__20292__auto__,arguments);

if(!((this__20292__auto__.initLocalState == null))){
this__20292__auto__.state = this__20292__auto__.initLocalState();
} else {
this__20292__auto__.state = {};
}

return this__20292__auto__;
});

com.wsscode.oge.ui.codemirror.Editor.prototype = goog.object.clone(React.Component.prototype);
}

var x40333_40451 = com.wsscode.oge.ui.codemirror.Editor.prototype;
x40333_40451.componentWillUpdate = ((function (x40333_40451){
return (function (next_props__20043__auto__,next_state__20044__auto__){
var this__20042__auto__ = this;
if(((!((this__20042__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__20042__auto__.om$next$Ident$)))?true:false):false)){
var ident__20046__auto___40463 = om.next.ident(this__20042__auto__,om.next.props(this__20042__auto__));
var next_ident__20047__auto___40464 = om.next.ident(this__20042__auto__,om.next._next_props(next_props__20043__auto__,this__20042__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__20046__auto___40463,next_ident__20047__auto___40464)){
var idxr__20048__auto___40468 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__20042__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__20048__auto___40468 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__20048__auto___40468),((function (idxr__20048__auto___40468,ident__20046__auto___40463,next_ident__20047__auto___40464,this__20042__auto__,x40333_40451){
return (function (indexes__20049__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__20049__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__20046__auto___40463], null),cljs.core.disj,this__20042__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__20047__auto___40464], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20042__auto__);
});})(idxr__20048__auto___40468,ident__20046__auto___40463,next_ident__20047__auto___40464,this__20042__auto__,x40333_40451))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__20042__auto__);

return om.next.merge_pending_state_BANG_(this__20042__auto__);
});})(x40333_40451))
;

x40333_40451.shouldComponentUpdate = ((function (x40333_40451){
return (function (next_props__20043__auto__,next_state__20044__auto__){
var this__20042__auto__ = this;
var next_children__20045__auto__ = next_props__20043__auto__.children;
var next_props__20043__auto____$1 = goog.object.get(next_props__20043__auto__,"omcljs$value");
var next_props__20043__auto____$2 = (function (){var G__40343 = next_props__20043__auto____$1;
if((next_props__20043__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__40343);
} else {
return G__40343;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__20042__auto__),next_props__20043__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__20042__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__40370 = this__20042__auto__.state;
var G__40371 = "omcljs$state";
return goog.object.get(G__40370,G__40371);
})(),goog.object.get(next_state__20044__auto__,"omcljs$state"));
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__20042__auto__.props.children,next_children__20045__auto__);
}
}
});})(x40333_40451))
;

x40333_40451.componentDidUpdate = ((function (x40333_40451){
return (function (prev_props__20050__auto__,prev_state__20051__auto__){
var this__20042__auto__ = this;
return om.next.clear_prev_props_BANG_(this__20042__auto__);
});})(x40333_40451))
;

x40333_40451.isMounted = ((function (x40333_40451){
return (function (){
var this__20042__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__20042__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x40333_40451))
;

x40333_40451.componentWillMount = ((function (x40333_40451){
return (function (){
var this__20042__auto__ = this;
var indexer__20052__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__20042__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__20052__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__20052__auto__,this__20042__auto__);
}
});})(x40333_40451))
;

x40333_40451.componentWillReceiveProps = ((function (x40333_40451){
return (function (next_props__20022__auto__){
var this__20021__auto__ = this;
var this$ = this__20021__auto__;
var map__40383 = om.next._next_props(next_props__20022__auto__,this__20021__auto__);
var map__40383__$1 = ((((!((map__40383 == null)))?((((map__40383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40383):map__40383);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40383__$1,cljs.core.cst$kw$value);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40383__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var cm = goog.object.get(this$,"codemirror");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(indexes,goog.object.get(cm,"ogeIndex"))){
cljs.core.reset_BANG_(com.wsscode.oge.ui.codemirror.oge_cache,cljs.core.PersistentArrayMap.EMPTY);

goog.object.set(cm,"ogeIndex",indexes);

var G__40388_40498 = (function (){var G__40391 = cm;
var G__40392 = ["options","hintOptions"];
return goog.object.getValueByKeys(G__40391,G__40392);
})();
var G__40389_40499 = "hint";
var G__40390_40500 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.oge.ui.codemirror.autocomplete,indexes);
goog.object.set(G__40388_40498,G__40389_40499,G__40390_40500);
} else {
}

if(cljs.core.not(goog.object.get(this$,"editorHold"))){
var cur_value = cm.getValue();
if(cljs.core.truth_((function (){var and__10400__auto__ = cm;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = value;
if(cljs.core.truth_(and__10400__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cur_value);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return cm.setValue(value);
} else {
return null;
}
} else {
return null;
}
});})(x40333_40451))
;

x40333_40451.componentDidMount = ((function (x40333_40451){
return (function (){
var this$ = this;
var textarea = goog.object.get(this$,"textNode");
var options = cljs.core.clj__GT_js((function (){var or__10412__auto__ = cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var process = cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_process.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
var codemirror = CodeMirror.fromTextArea(textarea,options);
try{codemirror.on("change",((function (textarea,options,process,codemirror,this$,x40333_40451){
return (function (p1__40325_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(p1__40325_SHARP_,"origin"),"setValue")){
var G__40400_40512 = goog.object.get(this$,"editorHold");
clearTimeout(G__40400_40512);

var G__40402_40513 = this$;
var G__40403_40514 = "editorHold";
var G__40404_40515 = (function (){var G__40408 = ((function (G__40402_40513,G__40403_40514,textarea,options,process,codemirror,this$,x40333_40451){
return (function (){
return goog.object.set(this$,"editorHold",false);
});})(G__40402_40513,G__40403_40514,textarea,options,process,codemirror,this$,x40333_40451))
;
var G__40409 = (800);
return setTimeout(G__40408,G__40409);
})();
goog.object.set(G__40402_40513,G__40403_40514,G__40404_40515);

return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.cst$kw$onChange,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__40325_SHARP_.getValue()], 0));
} else {
return null;
}
});})(textarea,options,process,codemirror,this$,x40333_40451))
);

codemirror.setValue(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));

if(cljs.core.truth_(process)){
(process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(codemirror) : process.call(null,codemirror));
} else {
}
}catch (e40399){var e_40519 = e40399;
console.warn("Error setting up CodeMirror",e_40519);
}
return goog.object.set(this$,"codemirror",codemirror);
});})(x40333_40451))
;

x40333_40451.componentWillUnmount = ((function (x40333_40451){
return (function (){
var this__20036__auto__ = this;
var this$ = this__20036__auto__;
var r__20037__auto__ = om.next.get_reconciler(this__20036__auto__);
var cfg__20038__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__20037__auto__);
var st__20039__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__20038__auto__);
var indexer__20040__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__20038__auto__);
if(cljs.core.truth_((function (){var and__10400__auto__ = !((st__20039__auto__ == null));
if(and__10400__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__20039__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__20036__auto__], null));
} else {
return and__10400__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__20039__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__20036__auto__], 0));
} else {
}

if((indexer__20040__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_(indexer__20040__auto__,this__20036__auto__);
}

var temp__5457__auto__ = goog.object.get(this$,"codemirror");
if(cljs.core.truth_(temp__5457__auto__)){
var cm = temp__5457__auto__;
return cm.toTextArea();
} else {
return null;
}
});})(x40333_40451))
;

x40333_40451.render = ((function (x40333_40451){
return (function (){
var this__20041__auto__ = this;
var this$ = this__20041__auto__;
var _STAR_reconciler_STAR_40423 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_40424 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_40425 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_40426 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_40427 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__20041__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__20041__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__20041__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__20041__auto__);

om.next._STAR_parent_STAR_ = this__20041__auto__;

try{var props = om.next.props(this$);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.codemirror.html_props(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$onChange], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__40432 = "textarea";
var G__40433 = ({"ref": ((function (G__40432,props,_STAR_reconciler_STAR_40423,_STAR_depth_STAR_40424,_STAR_shared_STAR_40425,_STAR_instrument_STAR_40426,_STAR_parent_STAR_40427,this$,this__20041__auto__,x40333_40451){
return (function (p1__40328_SHARP_){
return goog.object.set(this$,"textNode",p1__40328_SHARP_);
});})(G__40432,props,_STAR_reconciler_STAR_40423,_STAR_depth_STAR_40424,_STAR_shared_STAR_40425,_STAR_instrument_STAR_40426,_STAR_parent_STAR_40427,this$,this__20041__auto__,x40333_40451))
, "defaultValue": cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props)});
return React.createElement(G__40432,G__40433);
})()], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_40427;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_40426;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_40425;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_40424;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_40423;
}});})(x40333_40451))
;


com.wsscode.oge.ui.codemirror.Editor.prototype.constructor = com.wsscode.oge.ui.codemirror.Editor;

com.wsscode.oge.ui.codemirror.Editor.prototype.constructor.displayName = "com.wsscode.oge.ui.codemirror/Editor";

com.wsscode.oge.ui.codemirror.Editor.prototype.om$isComponent = true;

var x40437_40526 = com.wsscode.oge.ui.codemirror.Editor;


var x40438_40527 = com.wsscode.oge.ui.codemirror.Editor.prototype;


com.wsscode.oge.ui.codemirror.Editor.cljs$lang$type = true;

com.wsscode.oge.ui.codemirror.Editor.cljs$lang$ctorStr = "com.wsscode.oge.ui.codemirror/Editor";

com.wsscode.oge.ui.codemirror.Editor.cljs$lang$ctorPrWriter = (function (this__20295__auto__,writer__20296__auto__,opt__20297__auto__){
return cljs.core._write(writer__20296__auto__,"com.wsscode.oge.ui.codemirror/Editor");
});
com.wsscode.oge.ui.codemirror.editor = om.next.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.Editor);
com.wsscode.oge.ui.codemirror.escape_re = (function com$wsscode$oge$ui$codemirror$escape_re(input){
var re = (new RegExp("([.*+?^=!:${}()|[\\]\\/\\\\])","g"));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)].join('').replace(re,"\\$1");
});
com.wsscode.oge.ui.codemirror.fuzzy_re = (function com$wsscode$oge$ui$codemirror$fuzzy_re(input){
var G__40530 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.escape_re(c)),".*"].join('');
}),"",input);
var G__40531 = "i";
return RegExp(G__40530,G__40531);
});
com.wsscode.oge.ui.codemirror.str__GT_keyword = (function com$wsscode$oge$ui$codemirror$str__GT_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
});
com.wsscode.oge.ui.codemirror.token_context = (function com$wsscode$oge$ui$codemirror$token_context(p__40543,editor){
var map__40544 = p__40543;
var map__40544__$1 = ((((!((map__40544 == null)))?((((map__40544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40544):map__40544);
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40544__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io);
var cur = editor.getCursor();
var token = editor.getTokenAt(cur);
var state = goog.object.get(token,"state");
var mode = goog.object.get(state,"mode");
var path_stack = goog.object.get(state,"pathStack");
var find_ctx = ((function (cur,token,state,mode,path_stack,map__40544,map__40544__$1,index_io){
return (function() {
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx = null;
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__1 = (function (s){
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
});
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__2 = (function (s,ctx){
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",goog.object.get(s,"mode"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",(function (){var G__40553 = s;
var G__40555 = ["key","mode"];
return goog.object.getValueByKeys(G__40553,G__40555);
})()))){
var key = com.wsscode.oge.ui.codemirror.str__GT_keyword((function (){var G__40557 = s;
var G__40558 = ["key","key"];
return goog.object.getValueByKeys(G__40557,G__40558);
})());
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key)], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",goog.object.get(s,"mode"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(typeof goog.object.get(s,"key") === 'string'))){
var key = com.wsscode.oge.ui.codemirror.str__GT_keyword(goog.object.get(s,"key"));
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_io,cljs.core.PersistentHashSet.EMPTY),key)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key)], null);
} else {
var G__40582 = (function (){var G__40566 = s;
var G__40567 = ["prev","prev"];
return goog.object.getValueByKeys(G__40566,G__40567);
})();
var G__40583 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key);
s = G__40582;
ctx = G__40583;
continue;
}
} else {
if(cljs.core.not(cljs.core.seq(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(s)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,ctx], null);
} else {
return null;
}
}
}
break;
}
});
com$wsscode$oge$ui$codemirror$token_context_$_find_ctx = function(s,ctx){
switch(arguments.length){
case 1:
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__1.call(this,s);
case 2:
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__2.call(this,s,ctx);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$oge$ui$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$1 = com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__1;
com$wsscode$oge$ui$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2 = com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__2;
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx;
})()
;})(cur,token,state,mode,path_stack,map__40544,map__40544__$1,index_io))
;
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",mode)) && (((goog.object.get(path_stack,"key") == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$ident], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode)) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))) || ((goog.object.get(path_stack,"key") == null)))){
return find_ctx.cljs$core$IFn$_invoke$arity$1((function (){var G__40568 = path_stack;
var G__40569 = ["prev","prev"];
return goog.object.getValueByKeys(G__40568,G__40569);
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",mode)){
if(cljs.core.truth_((function (){var G__40570 = path_stack;
var G__40571 = ["prev","mode"];
return goog.object.getValueByKeys(G__40570,G__40571);
})())){
return find_ctx.cljs$core$IFn$_invoke$arity$1(goog.object.get(path_stack,"prev"));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,cljs.core.PersistentVector.EMPTY], null);
}
} else {
return null;
}
}
}
});
com.wsscode.oge.ui.codemirror.completions = (function com$wsscode$oge$ui$codemirror$completions(index,cm){
var cur = cm.getCursor();
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
var ctx = com.wsscode.oge.ui.codemirror.token_context(index,cm);
if(cljs.core.truth_(reg)){
var G__40597 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ctx);
var G__40597__$1 = (((G__40597 instanceof cljs.core.Keyword))?G__40597.fqn:null);
switch (G__40597__$1) {
case "attribute":
return com.wsscode.pathom.connect.discover_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_cache,com.wsscode.oge.ui.codemirror.oge_cache),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),cljs.core.namespace),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(ctx)));

break;
case "ident":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__40597,G__40597__$1,cur,ch,token,reg,ctx){
return (function (p1__40594_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__40594_SHARP_],[cljs.core.PersistentArrayMap.EMPTY]);
});})(G__40597,G__40597__$1,cur,ch,token,reg,ctx))
),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents.cljs$core$IFn$_invoke$arity$1(index));

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return null;
}
});
com.wsscode.oge.ui.codemirror.autocomplete = (function com$wsscode$oge$ui$codemirror$autocomplete(index,cm,options){
var cur = cm.getCursor();
var line = cur.line;
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
var blank_QMARK_ = (function (){var fexpr__40618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["{",null,"[",null," ",null], null), null);
return (fexpr__40618.cljs$core$IFn$_invoke$arity$1 ? fexpr__40618.cljs$core$IFn$_invoke$arity$1(reg) : fexpr__40618.call(null,reg));
})();
var start = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,(ch - cljs.core.count(reg))));
var end = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,goog.object.get(token,"end")));
var words = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,com.wsscode.oge.ui.codemirror.completions(index,cm));
if(cljs.core.truth_(words)){
var fuzzy = (cljs.core.truth_(blank_QMARK_)?/.*/:com.wsscode.oge.ui.codemirror.fuzzy_re(reg));
return ({"list": cljs.core.clj__GT_js(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (fuzzy,cur,line,ch,token,reg,blank_QMARK_,start,end,words){
return (function (p1__40617_SHARP_){
return cljs.core.re_find(fuzzy,p1__40617_SHARP_);
});})(fuzzy,cur,line,ch,token,reg,blank_QMARK_,start,end,words))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(index,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_autocomplete_DASH_ignore,cljs.core.PersistentHashSet.EMPTY),words))))), "from": start, "to": end});
} else {
return null;
}
});
com.wsscode.oge.ui.codemirror.def_cm_command = (function com$wsscode$oge$ui$codemirror$def_cm_command(name,f){
var G__40633 = goog.object.get(CodeMirror,"commands");
var G__40634 = name;
var G__40635 = f;
return goog.object.set(G__40633,G__40634,G__40635);
});
com.wsscode.oge.ui.codemirror.def_cm_command("ogeJoin",(function (cm){
var cur = cm.getCursor();
var token = cm.getTokenAt(cur);
var words = com.wsscode.oge.ui.codemirror.completions(goog.object.get(cm,"ogeIndex"),cm);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom",goog.object.get(token,"type"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",(function (){var G__40645 = token;
var G__40646 = ["state","mode"];
return goog.object.getValueByKeys(G__40645,G__40646);
})())) && ((cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(words,com.wsscode.oge.ui.codemirror.str__GT_keyword(goog.object.get(token,"string"))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.namespace(com.wsscode.oge.ui.codemirror.str__GT_keyword(goog.object.get(token,"string"))))))){
var line = cur.line;
var start = CodeMirror.Pos(line,goog.object.get(token,"start"));
var end = CodeMirror.Pos(line,goog.object.get(token,"end"));
var s = goog.object.get(token,"string");
var cursor_end = CodeMirror.Pos(line,((goog.object.get(token,"start") + cljs.core.count(s)) + (3)));
var joined = ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," []}"].join('');
cm.replaceRange(joined,start,end);

cm.setCursor(cursor_end);

return cm.showHint();
} else {
return null;
}
}));
com.wsscode.oge.ui.codemirror.oge = (function com$wsscode$oge$ui$codemirror$oge(p__40665){
var map__40666 = p__40665;
var map__40666__$1 = ((((!((map__40666 == null)))?((((map__40666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40666):map__40666);
var props = map__40666__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40666__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var options = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_extraKeys,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_hintOptions,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_autoCloseBrackets,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_gutters,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_matchBrackets,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_foldGutter,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_highlightSelectionMatches],[new cljs.core.PersistentArrayMap(null, 1, ["Ctrl-Space","autocomplete"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hint,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.oge.ui.codemirror.autocomplete,indexes),cljs.core.cst$kw$completeSingle,false], null),true,true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null),"oge",true,true,true]);
var G__40672 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_process,((function (options,map__40666,map__40666__$1,props,indexes){
return (function (cm){
cm.on("keyup",((function (options,map__40666,map__40666__$1,props,indexes){
return (function (cm__$1,e){
if((cljs.core.not((function (){var G__40678 = cm__$1;
var G__40679 = ["state","completionActive"];
return goog.object.getValueByKeys(G__40678,G__40679);
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(goog.object.get(e,"key"))))){
return CodeMirror.showHint(cm__$1);
} else {
return null;
}
});})(options,map__40666,map__40666__$1,props,indexes))
);

goog.object.set(cm,"ogeIndex",indexes);

var G__40685 = cm;
var G__40686 = "smart";
var G__40687 = ({"forceBalance": true});
var fexpr__40684 = goog.object.get(parinferCodeMirror,"init");
return (fexpr__40684.cljs$core$IFn$_invoke$arity$3 ? fexpr__40684.cljs$core$IFn$_invoke$arity$3(G__40685,G__40686,G__40687) : fexpr__40684.call(null,G__40685,G__40686,G__40687));
});})(options,map__40666,map__40666__$1,props,indexes))
),cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,((function (options,map__40666,map__40666__$1,props,indexes){
return (function (p1__40664_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__40664_SHARP_], 0));
});})(options,map__40666,map__40666__$1,props,indexes))
);
return (com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__40672) : com.wsscode.oge.ui.codemirror.editor.call(null,G__40672));
});
com.wsscode.oge.ui.codemirror.clojure = (function com$wsscode$oge$ui$codemirror$clojure(props){
var options = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,"clojure",cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_matchBrackets,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_highlightSelectionMatches,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_foldGutter,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_gutters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null)], null);
var G__40719 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,((function (options){
return (function (p1__40718_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__40718_SHARP_], 0));
});})(options))
);
return (com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__40719) : com.wsscode.oge.ui.codemirror.editor.call(null,G__40719));
});

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
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__46177){
return cljs.core.map_QMARK_(G__46177);
})], null),(function (G__46177){
return cljs.core.map_QMARK_(G__46177);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_props,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__46190){
return cljs.core.map_QMARK_(G__46190);
}),(function (G__46190){
return cljs.core.contains_QMARK_(G__46190,cljs.core.cst$kw$value);
})], null),(function (G__46190){
return (cljs.core.map_QMARK_(G__46190)) && (cljs.core.contains_QMARK_(G__46190,cljs.core.cst$kw$value));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$value))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_extraKeys,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$s_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$fn_QMARK_)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$str,cljs.core.cst$kw$fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.fn_QMARK_], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__46200){
return cljs.core.map_QMARK_(G__46200);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__28446__auto__,v__28447__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__28447__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_))], null),null));
com.wsscode.oge.ui.codemirror.prop_call = (function com$wsscode$oge$ui$codemirror$prop_call(var_args){
var args__11698__auto__ = [];
var len__11691__auto___46219 = arguments.length;
var i__11692__auto___46220 = (0);
while(true){
if((i__11692__auto___46220 < len__11691__auto___46219)){
args__11698__auto__.push((arguments[i__11692__auto___46220]));

var G__46221 = (i__11692__auto___46220 + (1));
i__11692__auto___46220 = G__46221;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic = (function (comp,name,args){
var temp__5459__auto__ = (function (){var G__46216 = om.next.props(comp);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__46216) : name.call(null,G__46216));
})();
if(cljs.core.truth_(temp__5459__auto__)){
var f = temp__5459__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
});

com.wsscode.oge.ui.codemirror.prop_call.cljs$lang$maxFixedArity = (2);

com.wsscode.oge.ui.codemirror.prop_call.cljs$lang$applyTo = (function (seq46205){
var G__46206 = cljs.core.first(seq46205);
var seq46205__$1 = cljs.core.next(seq46205);
var G__46207 = cljs.core.first(seq46205__$1);
var seq46205__$2 = cljs.core.next(seq46205__$1);
return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic(G__46206,G__46207,seq46205__$2);
});

com.wsscode.oge.ui.codemirror.html_props = (function com$wsscode$oge$ui$codemirror$html_props(props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46222){
var vec__46223 = p__46222;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46223,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46223,(1),null);
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
var this__24695__auto__ = this;
React.Component.apply(this__24695__auto__,arguments);

if(!((this__24695__auto__.initLocalState == null))){
this__24695__auto__.state = this__24695__auto__.initLocalState();
} else {
this__24695__auto__.state = {};
}

return this__24695__auto__;
});

com.wsscode.oge.ui.codemirror.Editor.prototype = goog.object.clone(React.Component.prototype);
}

var x46239_46336 = com.wsscode.oge.ui.codemirror.Editor.prototype;
x46239_46336.componentWillUpdate = ((function (x46239_46336){
return (function (next_props__24537__auto__,next_state__24538__auto__){
var this__24536__auto__ = this;
if(((!((this__24536__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__24536__auto__.om$next$Ident$)))?true:false):false)){
var ident__24540__auto___46343 = om.next.ident(this__24536__auto__,om.next.props(this__24536__auto__));
var next_ident__24541__auto___46344 = om.next.ident(this__24536__auto__,om.next._next_props(next_props__24537__auto__,this__24536__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24540__auto___46343,next_ident__24541__auto___46344)){
var idxr__24542__auto___46345 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24542__auto___46345 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24542__auto___46345),((function (idxr__24542__auto___46345,ident__24540__auto___46343,next_ident__24541__auto___46344,this__24536__auto__,x46239_46336){
return (function (indexes__24543__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24543__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24540__auto___46343], null),cljs.core.disj,this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24541__auto___46344], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24536__auto__);
});})(idxr__24542__auto___46345,ident__24540__auto___46343,next_ident__24541__auto___46344,this__24536__auto__,x46239_46336))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24536__auto__);

return om.next.merge_pending_state_BANG_(this__24536__auto__);
});})(x46239_46336))
;

x46239_46336.shouldComponentUpdate = ((function (x46239_46336){
return (function (next_props__24537__auto__,next_state__24538__auto__){
var this__24536__auto__ = this;
var next_children__24539__auto__ = next_props__24537__auto__.children;
var next_props__24537__auto____$1 = goog.object.get(next_props__24537__auto__,"omcljs$value");
var next_props__24537__auto____$2 = (function (){var G__46250 = next_props__24537__auto____$1;
if((next_props__24537__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__46250);
} else {
return G__46250;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24536__auto__),next_props__24537__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__24536__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46260 = this__24536__auto__.state;
var G__46261 = "omcljs$state";
return goog.object.get(G__46260,G__46261);
})(),goog.object.get(next_state__24538__auto__,"omcljs$state"));
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__24536__auto__.props.children,next_children__24539__auto__);
}
}
});})(x46239_46336))
;

x46239_46336.componentDidUpdate = ((function (x46239_46336){
return (function (prev_props__24544__auto__,prev_state__24545__auto__){
var this__24536__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24536__auto__);
});})(x46239_46336))
;

x46239_46336.isMounted = ((function (x46239_46336){
return (function (){
var this__24536__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24536__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x46239_46336))
;

x46239_46336.componentWillMount = ((function (x46239_46336){
return (function (){
var this__24536__auto__ = this;
var indexer__24546__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24546__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24546__auto__,this__24536__auto__);
}
});})(x46239_46336))
;

x46239_46336.componentWillReceiveProps = ((function (x46239_46336){
return (function (next_props__24516__auto__){
var this__24515__auto__ = this;
var this$ = this__24515__auto__;
var map__46264 = om.next._next_props(next_props__24516__auto__,this__24515__auto__);
var map__46264__$1 = ((((!((map__46264 == null)))?((((map__46264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46264):map__46264);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46264__$1,cljs.core.cst$kw$value);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46264__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var cm = goog.object.get(this$,"codemirror");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(indexes,goog.object.get(cm,"ogeIndex"))){
cljs.core.reset_BANG_(com.wsscode.oge.ui.codemirror.oge_cache,cljs.core.PersistentArrayMap.EMPTY);

goog.object.set(cm,"ogeIndex",indexes);

var G__46271_46383 = (function (){var G__46275 = cm;
var G__46276 = ["options","hintOptions"];
return goog.object.getValueByKeys(G__46275,G__46276);
})();
var G__46273_46384 = "hint";
var G__46274_46385 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.oge.ui.codemirror.autocomplete,indexes);
goog.object.set(G__46271_46383,G__46273_46384,G__46274_46385);
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
});})(x46239_46336))
;

x46239_46336.componentDidMount = ((function (x46239_46336){
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
try{codemirror.on("change",((function (textarea,options,process,codemirror,this$,x46239_46336){
return (function (p1__46226_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(p1__46226_SHARP_,"origin"),"setValue")){
var G__46289_46403 = goog.object.get(this$,"editorHold");
clearTimeout(G__46289_46403);

var G__46290_46404 = this$;
var G__46291_46405 = "editorHold";
var G__46292_46406 = (function (){var G__46293 = ((function (G__46290_46404,G__46291_46405,textarea,options,process,codemirror,this$,x46239_46336){
return (function (){
return goog.object.set(this$,"editorHold",false);
});})(G__46290_46404,G__46291_46405,textarea,options,process,codemirror,this$,x46239_46336))
;
var G__46294 = (800);
return setTimeout(G__46293,G__46294);
})();
goog.object.set(G__46290_46404,G__46291_46405,G__46292_46406);

return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.cst$kw$onChange,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__46226_SHARP_.getValue()], 0));
} else {
return null;
}
});})(textarea,options,process,codemirror,this$,x46239_46336))
);

codemirror.setValue(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));

if(cljs.core.truth_(process)){
(process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(codemirror) : process.call(null,codemirror));
} else {
}
}catch (e46288){var e_46408 = e46288;
console.warn("Error setting up CodeMirror",e_46408);
}
return goog.object.set(this$,"codemirror",codemirror);
});})(x46239_46336))
;

x46239_46336.componentWillUnmount = ((function (x46239_46336){
return (function (){
var this__24530__auto__ = this;
var this$ = this__24530__auto__;
var r__24531__auto__ = om.next.get_reconciler(this__24530__auto__);
var cfg__24532__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24531__auto__);
var st__24533__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24532__auto__);
var indexer__24534__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24532__auto__);
if(cljs.core.truth_((function (){var and__10400__auto__ = !((st__24533__auto__ == null));
if(and__10400__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__24533__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24530__auto__], null));
} else {
return and__10400__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24533__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__24530__auto__], 0));
} else {
}

if((indexer__24534__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_(indexer__24534__auto__,this__24530__auto__);
}

var temp__5457__auto__ = goog.object.get(this$,"codemirror");
if(cljs.core.truth_(temp__5457__auto__)){
var cm = temp__5457__auto__;
return cm.toTextArea();
} else {
return null;
}
});})(x46239_46336))
;

x46239_46336.render = ((function (x46239_46336){
return (function (){
var this__24535__auto__ = this;
var this$ = this__24535__auto__;
var _STAR_reconciler_STAR_46304 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46305 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_46306 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_46307 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_46308 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24535__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24535__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24535__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24535__auto__);

om.next._STAR_parent_STAR_ = this__24535__auto__;

try{var props = om.next.props(this$);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.codemirror.html_props(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$onChange], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__46319 = "textarea";
var G__46320 = ({"ref": ((function (G__46319,props,_STAR_reconciler_STAR_46304,_STAR_depth_STAR_46305,_STAR_shared_STAR_46306,_STAR_instrument_STAR_46307,_STAR_parent_STAR_46308,this$,this__24535__auto__,x46239_46336){
return (function (p1__46227_SHARP_){
return goog.object.set(this$,"textNode",p1__46227_SHARP_);
});})(G__46319,props,_STAR_reconciler_STAR_46304,_STAR_depth_STAR_46305,_STAR_shared_STAR_46306,_STAR_instrument_STAR_46307,_STAR_parent_STAR_46308,this$,this__24535__auto__,x46239_46336))
, "defaultValue": cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props)});
return React.createElement(G__46319,G__46320);
})()], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_46308;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_46307;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_46306;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_46305;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46304;
}});})(x46239_46336))
;


com.wsscode.oge.ui.codemirror.Editor.prototype.constructor = com.wsscode.oge.ui.codemirror.Editor;

com.wsscode.oge.ui.codemirror.Editor.prototype.constructor.displayName = "com.wsscode.oge.ui.codemirror/Editor";

com.wsscode.oge.ui.codemirror.Editor.prototype.om$isComponent = true;

var x46329_46429 = com.wsscode.oge.ui.codemirror.Editor;


var x46330_46430 = com.wsscode.oge.ui.codemirror.Editor.prototype;


com.wsscode.oge.ui.codemirror.Editor.cljs$lang$type = true;

com.wsscode.oge.ui.codemirror.Editor.cljs$lang$ctorStr = "com.wsscode.oge.ui.codemirror/Editor";

com.wsscode.oge.ui.codemirror.Editor.cljs$lang$ctorPrWriter = (function (this__24698__auto__,writer__24699__auto__,opt__24700__auto__){
return cljs.core._write(writer__24699__auto__,"com.wsscode.oge.ui.codemirror/Editor");
});
com.wsscode.oge.ui.codemirror.editor = om.next.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.Editor);
com.wsscode.oge.ui.codemirror.escape_re = (function com$wsscode$oge$ui$codemirror$escape_re(input){
var re = (new RegExp("([.*+?^=!:${}()|[\\]\\/\\\\])","g"));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)].join('').replace(re,"\\$1");
});
com.wsscode.oge.ui.codemirror.fuzzy_re = (function com$wsscode$oge$ui$codemirror$fuzzy_re(input){
var G__46443 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.escape_re(c)),".*"].join('');
}),"",input);
var G__46444 = "i";
return RegExp(G__46443,G__46444);
});
com.wsscode.oge.ui.codemirror.str__GT_keyword = (function com$wsscode$oge$ui$codemirror$str__GT_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
});
com.wsscode.oge.ui.codemirror.token_context = (function com$wsscode$oge$ui$codemirror$token_context(p__46445,editor){
var map__46446 = p__46445;
var map__46446__$1 = ((((!((map__46446 == null)))?((((map__46446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46446):map__46446);
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46446__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io);
var cur = editor.getCursor();
var token = editor.getTokenAt(cur);
var state = goog.object.get(token,"state");
var mode = goog.object.get(state,"mode");
var path_stack = goog.object.get(state,"pathStack");
var find_ctx = ((function (cur,token,state,mode,path_stack,map__46446,map__46446__$1,index_io){
return (function() {
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx = null;
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__1 = (function (s){
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
});
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__2 = (function (s,ctx){
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",goog.object.get(s,"mode"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",(function (){var G__46470 = s;
var G__46471 = ["key","mode"];
return goog.object.getValueByKeys(G__46470,G__46471);
})()))){
var key = com.wsscode.oge.ui.codemirror.str__GT_keyword((function (){var G__46472 = s;
var G__46473 = ["key","key"];
return goog.object.getValueByKeys(G__46472,G__46473);
})());
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key)], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",goog.object.get(s,"mode"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(typeof goog.object.get(s,"key") === 'string'))){
var key = com.wsscode.oge.ui.codemirror.str__GT_keyword(goog.object.get(s,"key"));
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_io,cljs.core.PersistentHashSet.EMPTY),key)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key)], null);
} else {
var G__46514 = (function (){var G__46476 = s;
var G__46477 = ["prev","prev"];
return goog.object.getValueByKeys(G__46476,G__46477);
})();
var G__46515 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key);
s = G__46514;
ctx = G__46515;
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
;})(cur,token,state,mode,path_stack,map__46446,map__46446__$1,index_io))
;
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",mode)) && (((goog.object.get(path_stack,"key") == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$ident], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode)) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))) || ((goog.object.get(path_stack,"key") == null)))){
return find_ctx.cljs$core$IFn$_invoke$arity$1((function (){var G__46478 = path_stack;
var G__46479 = ["prev","prev"];
return goog.object.getValueByKeys(G__46478,G__46479);
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",mode)){
if(cljs.core.truth_((function (){var G__46484 = path_stack;
var G__46485 = ["prev","mode"];
return goog.object.getValueByKeys(G__46484,G__46485);
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
var G__46537 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ctx);
var G__46537__$1 = (((G__46537 instanceof cljs.core.Keyword))?G__46537.fqn:null);
switch (G__46537__$1) {
case "attribute":
return com.wsscode.pathom.connect.discover_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_cache,com.wsscode.oge.ui.codemirror.oge_cache),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),cljs.core.namespace),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(ctx)));

break;
case "ident":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__46537,G__46537__$1,cur,ch,token,reg,ctx){
return (function (p1__46536_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__46536_SHARP_],[cljs.core.PersistentArrayMap.EMPTY]);
});})(G__46537,G__46537__$1,cur,ch,token,reg,ctx))
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
var blank_QMARK_ = (function (){var fexpr__46555 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["{",null,"[",null," ",null], null), null);
return (fexpr__46555.cljs$core$IFn$_invoke$arity$1 ? fexpr__46555.cljs$core$IFn$_invoke$arity$1(reg) : fexpr__46555.call(null,reg));
})();
var start = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,(ch - cljs.core.count(reg))));
var end = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,goog.object.get(token,"end")));
var words = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,com.wsscode.oge.ui.codemirror.completions(index,cm));
if(cljs.core.truth_(words)){
var fuzzy = (cljs.core.truth_(blank_QMARK_)?/.*/:com.wsscode.oge.ui.codemirror.fuzzy_re(reg));
return ({"list": cljs.core.clj__GT_js(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (fuzzy,cur,line,ch,token,reg,blank_QMARK_,start,end,words){
return (function (p1__46549_SHARP_){
return cljs.core.re_find(fuzzy,p1__46549_SHARP_);
});})(fuzzy,cur,line,ch,token,reg,blank_QMARK_,start,end,words))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,words)))), "from": start, "to": end});
} else {
return null;
}
});
com.wsscode.oge.ui.codemirror.def_cm_command = (function com$wsscode$oge$ui$codemirror$def_cm_command(name,f){
var G__46559 = goog.object.get(CodeMirror,"commands");
var G__46560 = name;
var G__46561 = f;
return goog.object.set(G__46559,G__46560,G__46561);
});
com.wsscode.oge.ui.codemirror.def_cm_command("ogeJoin",(function (cm){
var cur = cm.getCursor();
var token = cm.getTokenAt(cur);
var words = com.wsscode.oge.ui.codemirror.completions(goog.object.get(cm,"ogeIndex"),cm);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom",goog.object.get(token,"type"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",(function (){var G__46571 = token;
var G__46572 = ["state","mode"];
return goog.object.getValueByKeys(G__46571,G__46572);
})())) && (cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(words,com.wsscode.oge.ui.codemirror.str__GT_keyword(goog.object.get(token,"string")))))){
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
com.wsscode.oge.ui.codemirror.oge = (function com$wsscode$oge$ui$codemirror$oge(p__46585){
var map__46586 = p__46585;
var map__46586__$1 = ((((!((map__46586 == null)))?((((map__46586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46586):map__46586);
var props = map__46586__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46586__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var options = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_extraKeys,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_hintOptions,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_autoCloseBrackets,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_gutters,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_matchBrackets,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_foldGutter,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_highlightSelectionMatches],[new cljs.core.PersistentArrayMap(null, 1, ["Ctrl-Space","autocomplete"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hint,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.oge.ui.codemirror.autocomplete,indexes),cljs.core.cst$kw$completeSingle,false], null),true,true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null),"oge",true,true,true]);
var G__46592 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_process,((function (options,map__46586,map__46586__$1,props,indexes){
return (function (cm){
cm.on("keyup",((function (options,map__46586,map__46586__$1,props,indexes){
return (function (cm__$1,e){
if((cljs.core.not((function (){var G__46601 = cm__$1;
var G__46602 = ["state","completionActive"];
return goog.object.getValueByKeys(G__46601,G__46602);
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(goog.object.get(e,"key"))))){
return CodeMirror.showHint(cm__$1);
} else {
return null;
}
});})(options,map__46586,map__46586__$1,props,indexes))
);

goog.object.set(cm,"ogeIndex",indexes);

var G__46605 = cm;
var G__46606 = "smart";
var G__46607 = ({"forceBalance": true});
var fexpr__46604 = goog.object.get(parinferCodeMirror,"init");
return (fexpr__46604.cljs$core$IFn$_invoke$arity$3 ? fexpr__46604.cljs$core$IFn$_invoke$arity$3(G__46605,G__46606,G__46607) : fexpr__46604.call(null,G__46605,G__46606,G__46607));
});})(options,map__46586,map__46586__$1,props,indexes))
),cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,((function (options,map__46586,map__46586__$1,props,indexes){
return (function (p1__46584_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__46584_SHARP_], 0));
});})(options,map__46586,map__46586__$1,props,indexes))
);
return (com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__46592) : com.wsscode.oge.ui.codemirror.editor.call(null,G__46592));
});
com.wsscode.oge.ui.codemirror.clojure = (function com$wsscode$oge$ui$codemirror$clojure(props){
var options = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,"clojure",cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_matchBrackets,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_highlightSelectionMatches,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_foldGutter,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_gutters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null)], null);
var G__46645 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,((function (options){
return (function (p1__46643_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__46643_SHARP_], 0));
});})(options))
);
return (com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__46645) : com.wsscode.oge.ui.codemirror.editor.call(null,G__46645));
});

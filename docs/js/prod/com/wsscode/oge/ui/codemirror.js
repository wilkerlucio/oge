// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.ui.codemirror');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.dom');
goog.require('goog.object');
goog.require('com.wsscode.pathom.connect');
goog.require('cljs.spec.alpha');
goog.require('cljs.reader');
goog.require('clojure.string');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$obj,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$obj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.map_QMARK_], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_readOnly,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_onChange,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$code,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$code,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$code,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__39048){
return cljs.core.map_QMARK_(G__39048);
})], null),(function (G__39048){
return cljs.core.map_QMARK_(G__39048);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_theme,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_indentUnit,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_smartIndent,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_props,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__39053){
return cljs.core.map_QMARK_(G__39053);
}),(function (G__39053){
return cljs.core.contains_QMARK_(G__39053,cljs.core.cst$kw$value);
})], null),(function (G__39053){
return (cljs.core.map_QMARK_(G__39053)) && (cljs.core.contains_QMARK_(G__39053,cljs.core.cst$kw$value));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_value], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$value))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options], null)])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_extraKeys,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$s_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$fn_QMARK_)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$str,cljs.core.cst$kw$fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.fn_QMARK_], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__39079){
return cljs.core.map_QMARK_(G__39079);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$str,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_))], null),null));
com.wsscode.oge.ui.codemirror.prop_call = (function com$wsscode$oge$ui$codemirror$prop_call(var_args){
var args__12091__auto__ = [];
var len__12084__auto___39103 = arguments.length;
var i__12085__auto___39104 = (0);
while(true){
if((i__12085__auto___39104 < len__12084__auto___39103)){
args__12091__auto__.push((arguments[i__12085__auto___39104]));

var G__39105 = (i__12085__auto___39104 + (1));
i__12085__auto___39104 = G__39105;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic = (function (comp,name,args){
var temp__5457__auto__ = (function (){var G__39101 = fulcro.client.primitives.props(comp);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__39101) : name.call(null,G__39101));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
});

com.wsscode.oge.ui.codemirror.prop_call.cljs$lang$maxFixedArity = (2);

com.wsscode.oge.ui.codemirror.prop_call.cljs$lang$applyTo = (function (seq39095){
var G__39096 = cljs.core.first(seq39095);
var seq39095__$1 = cljs.core.next(seq39095);
var G__39098 = cljs.core.first(seq39095__$1);
var seq39095__$2 = cljs.core.next(seq39095__$1);
return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic(G__39096,G__39098,seq39095__$2);
});

com.wsscode.oge.ui.codemirror.html_props = (function com$wsscode$oge$ui$codemirror$html_props(props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39121){
var vec__39122 = p__39121;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(1),null);
return cljs.core.namespace(k);
}),props)));
});
com.wsscode.oge.ui.codemirror.oge_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof com.wsscode.oge.ui.codemirror.Editor !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.codemirror.Editor = (function com$wsscode$oge$ui$codemirror$Editor(){
var this__35867__auto__ = this;
React.Component.apply(this__35867__auto__,arguments);

if(!((this__35867__auto__.initLocalState == null))){
this__35867__auto__.state = this__35867__auto__.initLocalState();
} else {
this__35867__auto__.state = {};
}

return this__35867__auto__;
});

com.wsscode.oge.ui.codemirror.Editor.prototype = goog.object.clone(React.Component.prototype);
}

var x39158_39281 = com.wsscode.oge.ui.codemirror.Editor.prototype;
x39158_39281.componentWillUpdate = ((function (x39158_39281){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(((!((this__35722__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35722__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35731__auto___39288 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives.props(this__35722__auto__));
var next_ident__35732__auto___39289 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives._next_props(next_props__35723__auto__,this__35722__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35731__auto___39288,next_ident__35732__auto___39289)){
var idxr__35733__auto___39293 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35733__auto___39293 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35733__auto___39293),((function (idxr__35733__auto___39293,ident__35731__auto___39288,next_ident__35732__auto___39289,this__35722__auto__,x39158_39281){
return (function (indexes__35734__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35734__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35731__auto___39288], null),cljs.core.disj,this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35732__auto___39289], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35722__auto__);
});})(idxr__35733__auto___39293,ident__35731__auto___39288,next_ident__35732__auto___39289,this__35722__auto__,x39158_39281))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35722__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35722__auto__);
});})(x39158_39281))
;

x39158_39281.shouldComponentUpdate = ((function (x39158_39281){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35725__auto__ = next_props__35723__auto__.children;
var next_props__35723__auto____$1 = goog.object.get(next_props__35723__auto__,"fulcro$value");
var next_props__35723__auto____$2 = (function (){var G__39163 = next_props__35723__auto____$1;
if((next_props__35723__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__39163);
} else {
return G__39163;
}
})();
var current_props__35726__auto__ = fulcro.client.primitives.props(this__35722__auto__);
var next_props_stale_QMARK___35727__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35726__auto__) > fulcro.client.primitives.get_basis_time(next_props__35723__auto____$2));
var props_changed_QMARK___35728__auto__ = (!(next_props_stale_QMARK___35727__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35726__auto__,next_props__35723__auto____$2));
var state_changed_QMARK___35729__auto__ = (function (){var and__10793__auto__ = this__35722__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__39164 = this__35722__auto__.state;
var G__39165 = "fulcro$state";
return goog.object.get(G__39164,G__39165);
})(),goog.object.get(next_state__35724__auto__,"fulcro$state"));
} else {
return and__10793__auto__;
}
})();
var children_changed_QMARK___35730__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__35722__auto__.props.children,next_children__35725__auto__);
var or__10805__auto__ = props_changed_QMARK___35728__auto__;
if(or__10805__auto__){
return or__10805__auto__;
} else {
var or__10805__auto____$1 = state_changed_QMARK___35729__auto__;
if(cljs.core.truth_(or__10805__auto____$1)){
return or__10805__auto____$1;
} else {
return children_changed_QMARK___35730__auto__;
}
}
}
});})(x39158_39281))
;

x39158_39281.componentDidUpdate = ((function (x39158_39281){
return (function (prev_props__35735__auto__,prev_state__35736__auto__){
var this__35722__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35722__auto__);
});})(x39158_39281))
;

x39158_39281.componentWillMount = ((function (x39158_39281){
return (function (){
var this__35722__auto__ = this;
var indexer__35737__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x39158_39281))
;

x39158_39281.componentWillReceiveProps = ((function (x39158_39281){
return (function (next_props__35697__auto__){
var this__35696__auto__ = this;
var this$ = this__35696__auto__;
var map__39187 = fulcro.client.primitives._next_props(next_props__35697__auto__,this__35696__auto__);
var map__39187__$1 = ((((!((map__39187 == null)))?((((map__39187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39187):map__39187);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39187__$1,cljs.core.cst$kw$value);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39187__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var cm = goog.object.get(this$,"codemirror");
var cur_index = (function (){var G__39194 = cm;
var G__39195 = ["options","ogeIndex"];
return goog.object.getValueByKeys(G__39194,G__39195);
})();
if(cljs.core.truth_((function (){var and__10793__auto__ = cur_index;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(indexes,cljs.core.deref(cur_index));
} else {
return and__10793__auto__;
}
})())){
cljs.core.reset_BANG_(com.wsscode.oge.ui.codemirror.oge_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(cur_index,indexes);

var G__39197_39325 = (function (){var G__39200 = cm;
var G__39201 = ["options","hintOptions"];
return goog.object.getValueByKeys(G__39200,G__39201);
})();
var G__39198_39326 = "hint";
var G__39199_39327 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.oge.ui.codemirror.autocomplete,indexes);
goog.object.set(G__39197_39325,G__39198_39326,G__39199_39327);
} else {
}

if(cljs.core.not(goog.object.get(this$,"editorHold"))){
var cur_value = cm.getValue();
if(cljs.core.truth_((function (){var and__10793__auto__ = cm;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = value;
if(cljs.core.truth_(and__10793__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cur_value);
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())){
return cm.setValue(value);
} else {
return null;
}
} else {
return null;
}
});})(x39158_39281))
;

x39158_39281.componentDidMount = ((function (x39158_39281){
return (function (){
var this__35712__auto__ = this;
var this$ = this__35712__auto__;
var reconciler__35713__auto__ = fulcro.client.primitives.get_reconciler(this__35712__auto__);
var lifecycle__35714__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__35713__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$lifecycle], null));
goog.object.set(this__35712__auto__,"fulcro$mounted",true);

if((lifecycle__35714__auto__ == null)){
} else {
var G__39208_39331 = this__35712__auto__;
var G__39209_39332 = cljs.core.cst$kw$mount;
(lifecycle__35714__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__35714__auto__.cljs$core$IFn$_invoke$arity$2(G__39208_39331,G__39209_39332) : lifecycle__35714__auto__.call(null,G__39208_39331,G__39209_39332));
}

var textarea = goog.object.get(this$,"textNode");
var options = cljs.core.clj__GT_js((function (){var or__10805__auto__ = cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var process = cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_process.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var codemirror = CodeMirror.fromTextArea(textarea,options);
try{codemirror.on("change",((function (textarea,options,process,codemirror,this$,reconciler__35713__auto__,lifecycle__35714__auto__,this__35712__auto__,x39158_39281){
return (function (p1__39134_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(p1__39134_SHARP_,"origin"),"setValue")){
var G__39225_39333 = goog.object.get(this$,"editorHold");
clearTimeout(G__39225_39333);

var G__39227_39334 = this$;
var G__39228_39335 = "editorHold";
var G__39229_39336 = (function (){var G__39230 = ((function (G__39227_39334,G__39228_39335,textarea,options,process,codemirror,this$,reconciler__35713__auto__,lifecycle__35714__auto__,this__35712__auto__,x39158_39281){
return (function (){
return goog.object.set(this$,"editorHold",false);
});})(G__39227_39334,G__39228_39335,textarea,options,process,codemirror,this$,reconciler__35713__auto__,lifecycle__35714__auto__,this__35712__auto__,x39158_39281))
;
var G__39231 = (800);
return setTimeout(G__39230,G__39231);
})();
goog.object.set(G__39227_39334,G__39228_39335,G__39229_39336);

return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.cst$kw$onChange,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__39134_SHARP_.getValue()], 0));
} else {
return null;
}
});})(textarea,options,process,codemirror,this$,reconciler__35713__auto__,lifecycle__35714__auto__,this__35712__auto__,x39158_39281))
);

codemirror.setValue(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));

if(cljs.core.truth_(process)){
(process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(codemirror) : process.call(null,codemirror));
} else {
}
}catch (e39220){var e_39341 = e39220;
console.warn("Error setting up CodeMirror",e_39341);
}
return goog.object.set(this$,"codemirror",codemirror);
});})(x39158_39281))
;

x39158_39281.componentWillUnmount = ((function (x39158_39281){
return (function (){
var this__35715__auto__ = this;
var this$ = this__35715__auto__;
var reconciler__35716__auto__ = fulcro.client.primitives.get_reconciler(this__35715__auto__);
var lifecycle__35717__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__35716__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$lifecycle], null));
var cfg__35718__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler__35716__auto__);
var st__35719__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__35718__auto__);
var indexer__35720__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__35718__auto__);
goog.object.set(this__35715__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__10793__auto__ = !((st__35719__auto__ == null));
if(and__10793__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__35719__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,this__35715__auto__], null));
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__35719__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__35715__auto__], 0));
} else {
}

if((lifecycle__35717__auto__ == null)){
} else {
var G__39244_39347 = this__35715__auto__;
var G__39245_39348 = cljs.core.cst$kw$unmount;
(lifecycle__35717__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__35717__auto__.cljs$core$IFn$_invoke$arity$2(G__39244_39347,G__39245_39348) : lifecycle__35717__auto__.call(null,G__39244_39347,G__39245_39348));
}

if((indexer__35720__auto__ == null)){
} else {
fulcro.client.impl.protocols.drop_component_BANG_(indexer__35720__auto__,this__35715__auto__);
}

var temp__5455__auto__ = goog.object.get(this$,"codemirror");
if(cljs.core.truth_(temp__5455__auto__)){
var cm = temp__5455__auto__;
return cm.toTextArea();
} else {
return null;
}
});})(x39158_39281))
;

x39158_39281.render = ((function (x39158_39281){
return (function (){
var this__35721__auto__ = this;
var this$ = this__35721__auto__;
var _STAR_reconciler_STAR_39262 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_39263 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_39264 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_39265 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_39266 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35721__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35721__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35721__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35721__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35721__auto__;

try{var props = fulcro.client.primitives.props(this$);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.codemirror.html_props(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$onChange], 0))),fulcro.util.force_children((function (){var G__39271 = "textarea";
var G__39272 = ({"ref": ((function (G__39271,props,_STAR_reconciler_STAR_39262,_STAR_depth_STAR_39263,_STAR_shared_STAR_39264,_STAR_instrument_STAR_39265,_STAR_parent_STAR_39266,this$,this__35721__auto__,x39158_39281){
return (function (p1__39139_SHARP_){
return goog.object.set(this$,"textNode",p1__39139_SHARP_);
});})(G__39271,props,_STAR_reconciler_STAR_39262,_STAR_depth_STAR_39263,_STAR_shared_STAR_39264,_STAR_instrument_STAR_39265,_STAR_parent_STAR_39266,this$,this__35721__auto__,x39158_39281))
, "defaultValue": cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props)});
return React.createElement(G__39271,G__39272);
})())], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_39266;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_39265;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_39264;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_39263;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39262;
}});})(x39158_39281))
;


com.wsscode.oge.ui.codemirror.Editor.prototype.constructor = com.wsscode.oge.ui.codemirror.Editor;

com.wsscode.oge.ui.codemirror.Editor.prototype.constructor.displayName = "com.wsscode.oge.ui.codemirror/Editor";

com.wsscode.oge.ui.codemirror.Editor.prototype.fulcro$isComponent = true;

var x39278_39355 = com.wsscode.oge.ui.codemirror.Editor;


var x39279_39356 = com.wsscode.oge.ui.codemirror.Editor.prototype;


com.wsscode.oge.ui.codemirror.Editor.cljs$lang$type = true;

com.wsscode.oge.ui.codemirror.Editor.cljs$lang$ctorStr = "com.wsscode.oge.ui.codemirror/Editor";

com.wsscode.oge.ui.codemirror.Editor.cljs$lang$ctorPrWriter = (function (this__35870__auto__,writer__35871__auto__,opt__35872__auto__){
return cljs.core._write(writer__35871__auto__,"com.wsscode.oge.ui.codemirror/Editor");
});
com.wsscode.oge.ui.codemirror.editor = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.Editor);
com.wsscode.oge.ui.codemirror.escape_re = (function com$wsscode$oge$ui$codemirror$escape_re(input){
var re = (new RegExp("([.*+?^=!:${}()|[\\]\\/\\\\])","g"));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)].join('').replace(re,"\\$1");
});
com.wsscode.oge.ui.codemirror.fuzzy_re = (function com$wsscode$oge$ui$codemirror$fuzzy_re(input){
var G__39358 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.escape_re(c)),".*"].join('');
}),"",input);
var G__39359 = "i";
return RegExp(G__39358,G__39359);
});
com.wsscode.oge.ui.codemirror.str__GT_keyword = (function com$wsscode$oge$ui$codemirror$str__GT_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
});
com.wsscode.oge.ui.codemirror.token_context = (function com$wsscode$oge$ui$codemirror$token_context(p__39373,token){
var map__39374 = p__39373;
var map__39374__$1 = ((((!((map__39374 == null)))?((((map__39374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39374):map__39374);
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io);
var state = goog.object.get(token,"state");
var mode = goog.object.get(state,"mode");
var path_stack = goog.object.get(state,"pathStack");
var find_ctx = ((function (state,mode,path_stack,map__39374,map__39374__$1,index_io){
return (function() {
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx = null;
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__1 = (function (s){
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
});
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__2 = (function (s,ctx){
while(true){
var mode__$1 = goog.object.get(s,"mode");
var key = goog.object.get(s,"key");
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",(function (){var G__39386 = s;
var G__39387 = ["key","mode"];
return goog.object.getValueByKeys(G__39386,G__39387);
})()))){
var key__$1 = com.wsscode.oge.ui.codemirror.str__GT_keyword((function (){var G__39392 = s;
var G__39393 = ["key","key"];
return goog.object.getValueByKeys(G__39392,G__39393);
})());
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1)], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(typeof key === 'string'))){
var key__$1 = com.wsscode.oge.ui.codemirror.str__GT_keyword(key);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_io,cljs.core.PersistentHashSet.EMPTY),key__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1)], null);
} else {
var G__39485 = (function (){var G__39418 = s;
var G__39419 = ["prev","prev"];
return goog.object.getValueByKeys(G__39418,G__39419);
})();
var G__39486 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1);
s = G__39485;
ctx = G__39486;
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
;})(state,mode,path_stack,map__39374,map__39374__$1,index_io))
;
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",mode)) && (((goog.object.get(path_stack,"key") == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$ident], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode)) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))) || ((goog.object.get(path_stack,"key") == null)))){
return find_ctx.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param-exp",(function (){var G__39426 = path_stack;
var G__39427 = ["prev","mode"];
return goog.object.getValueByKeys(G__39426,G__39427);
})()))?(function (){var G__39429 = path_stack;
var G__39430 = ["prev","prev","prev"];
return goog.object.getValueByKeys(G__39429,G__39430);
})():(function (){var G__39432 = path_stack;
var G__39433 = ["prev","prev"];
return goog.object.getValueByKeys(G__39432,G__39433);
})()));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",mode)){
if(cljs.core.truth_((function (){var G__39434 = path_stack;
var G__39435 = ["prev","mode"];
return goog.object.getValueByKeys(G__39434,G__39435);
})())){
return find_ctx.cljs$core$IFn$_invoke$arity$1(goog.object.get(path_stack,"prev"));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,cljs.core.PersistentVector.EMPTY], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param-exp",mode)){
if(cljs.core.truth_((function (){var and__10793__auto__ = (function (){var G__39441 = path_stack;
var G__39442 = ["prev","prev","mode"];
return goog.object.getValueByKeys(G__39441,G__39442);
})();
if(cljs.core.truth_(and__10793__auto__)){
var or__10805__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",(function (){var G__39449 = path_stack;
var G__39450 = ["prev","mode"];
return goog.object.getValueByKeys(G__39449,G__39450);
})());
if(or__10805__auto__){
return or__10805__auto__;
} else {
var G__39451 = path_stack;
var G__39452 = ["prev","prev","prev","mode"];
return goog.object.getValueByKeys(G__39451,G__39452);
}
} else {
return and__10793__auto__;
}
})())){
return find_ctx.cljs$core$IFn$_invoke$arity$1((function (){var G__39454 = path_stack;
var G__39455 = ["prev","prev"];
return goog.object.getValueByKeys(G__39454,G__39455);
})());
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$attribute,cljs.core.cst$kw$context,cljs.core.PersistentVector.EMPTY], null);
}
} else {
return null;
}
}
}
}
});
com.wsscode.oge.ui.codemirror.completions = (function com$wsscode$oge$ui$codemirror$completions(index,token,reg){
var ctx = com.wsscode.oge.ui.codemirror.token_context(index,token);
if(cljs.core.truth_(reg)){
var G__39502 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ctx);
var G__39502__$1 = (((G__39502 instanceof cljs.core.Keyword))?G__39502.fqn:null);
switch (G__39502__$1) {
case "attribute":
return com.wsscode.pathom.connect.discover_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_cache,com.wsscode.oge.ui.codemirror.oge_cache),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),cljs.core.namespace),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(ctx)));

break;
case "ident":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__39502,G__39502__$1,ctx){
return (function (p1__39501_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__39501_SHARP_],[cljs.core.PersistentArrayMap.EMPTY]);
});})(G__39502,G__39502__$1,ctx))
),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents.cljs$core$IFn$_invoke$arity$1(index));

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return null;
}
});
goog.exportSymbol('com.wsscode.oge.ui.codemirror.completions', com.wsscode.oge.ui.codemirror.completions);
goog.object.set(window,"cljsDeref",cljs.core.deref);
com.wsscode.oge.ui.codemirror.cm_completions = (function com$wsscode$oge$ui$codemirror$cm_completions(index,cm){
var cur = cm.getCursor();
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
return com.wsscode.oge.ui.codemirror.completions(index,token,reg);
});
com.wsscode.oge.ui.codemirror.autocomplete = (function com$wsscode$oge$ui$codemirror$autocomplete(index,cm,options){
var cur = cm.getCursor();
var line = cur.line;
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
var blank_QMARK_ = (function (){var fexpr__39512 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["(",null,"{",null,"[",null," ",null], null), null);
return (fexpr__39512.cljs$core$IFn$_invoke$arity$1 ? fexpr__39512.cljs$core$IFn$_invoke$arity$1(reg) : fexpr__39512.call(null,reg));
})();
var start = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,(ch - cljs.core.count(reg))));
var end = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,goog.object.get(token,"end")));
var words = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,com.wsscode.oge.ui.codemirror.cm_completions(index,cm));
if(cljs.core.truth_(words)){
var fuzzy = (cljs.core.truth_(blank_QMARK_)?/.*/:com.wsscode.oge.ui.codemirror.fuzzy_re(reg));
return ({"list": cljs.core.clj__GT_js(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (fuzzy,cur,line,ch,token,reg,blank_QMARK_,start,end,words){
return (function (p1__39510_SHARP_){
return cljs.core.re_find(fuzzy,p1__39510_SHARP_);
});})(fuzzy,cur,line,ch,token,reg,blank_QMARK_,start,end,words))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(index,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_autocomplete_DASH_ignore,cljs.core.PersistentHashSet.EMPTY),words))))), "from": start, "to": end});
} else {
return null;
}
});
com.wsscode.oge.ui.codemirror.def_cm_command = (function com$wsscode$oge$ui$codemirror$def_cm_command(name,f){
var G__39523 = goog.object.get(CodeMirror,"commands");
var G__39524 = name;
var G__39525 = f;
return goog.object.set(G__39523,G__39524,G__39525);
});
com.wsscode.oge.ui.codemirror.key_has_children_QMARK_ = (function com$wsscode$oge$ui$codemirror$key_has_children_QMARK_(completions,token){
var reg = com.wsscode.oge.ui.codemirror.str__GT_keyword(goog.object.get(token,"string"));
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom",goog.object.get(token,"type"))) && ((cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(completions,reg))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.namespace(reg))));
});
goog.exportSymbol('com.wsscode.oge.ui.codemirror.key_has_children_QMARK_', com.wsscode.oge.ui.codemirror.key_has_children_QMARK_);
com.wsscode.oge.ui.codemirror.str_repeat = (function com$wsscode$oge$ui$codemirror$str_repeat(s,n){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,s));
});
com.wsscode.oge.ui.codemirror.def_cm_command("ogeJoin",(function (cm){
var cur = cm.getCursor();
var token = cm.getTokenAt(cur);
var indent = (function (){var or__10805__auto__ = (function (){var G__39541 = token;
var G__39542 = ["state","pathStack","indent"];
return goog.object.getValueByKeys(G__39541,G__39542);
})();
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return (0);
}
})();
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",(function (){var G__39553 = token;
var G__39554 = ["state","mode"];
return goog.object.getValueByKeys(G__39553,G__39554);
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom-composite",goog.object.get(token,"type")))){
var line = cur.line;
var start = CodeMirror.Pos(line,goog.object.get(token,"start"));
var end = CodeMirror.Pos(line,goog.object.get(token,"end"));
var s = goog.object.get(token,"string");
var vec__39555 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start.ch,indent))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [CodeMirror.Pos((line + (1)),((2) + indent)),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.str_repeat(" ",(indent + (1)))),"[]}"].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [CodeMirror.Pos(line,((goog.object.get(token,"start") + cljs.core.count(s)) + (3))),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," []}"].join('')], null));
var cursor_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39555,(0),null);
var joined = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39555,(1),null);
cm.replaceRange(joined,start,end);

cm.setCursor(cursor_end);

return cm.showHint();
} else {
return null;
}
}));
com.wsscode.oge.ui.codemirror.oge = (function com$wsscode$oge$ui$codemirror$oge(p__39568){
var map__39570 = p__39568;
var map__39570__$1 = ((((!((map__39570 == null)))?((((map__39570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39570):map__39570);
var props = map__39570__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39570__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var options = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_extraKeys,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_hintOptions,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_autoCloseBrackets,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,cljs.core.cst$kw$ogeIndex,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_gutters,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_matchBrackets,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_foldGutter,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_highlightSelectionMatches],[new cljs.core.PersistentArrayMap(null, 1, ["Ctrl-Space","autocomplete"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hint,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.oge.ui.codemirror.autocomplete,indexes),cljs.core.cst$kw$completeSingle,false], null),true,true,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(indexes),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null),"oge",true,true,true]);
var G__39574 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_process,((function (options,map__39570,map__39570__$1,props,indexes){
return (function (cm){
cm.on("keyup",((function (options,map__39570,map__39570__$1,props,indexes){
return (function (cm__$1,e){
if((cljs.core.not((function (){var G__39578 = cm__$1;
var G__39579 = ["state","completionActive"];
return goog.object.getValueByKeys(G__39578,G__39579);
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(goog.object.get(e,"key"))))){
return CodeMirror.showHint(cm__$1);
} else {
return null;
}
});})(options,map__39570,map__39570__$1,props,indexes))
);

var G__39581 = cm;
var G__39582 = "smart";
var G__39583 = ({"forceBalance": true});
var fexpr__39580 = goog.object.get(parinferCodeMirror,"init");
return (fexpr__39580.cljs$core$IFn$_invoke$arity$3 ? fexpr__39580.cljs$core$IFn$_invoke$arity$3(G__39581,G__39582,G__39583) : fexpr__39580.call(null,G__39581,G__39582,G__39583));
});})(options,map__39570,map__39570__$1,props,indexes))
),cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,((function (options,map__39570,map__39570__$1,props,indexes){
return (function (p1__39567_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__39567_SHARP_], 0));
});})(options,map__39570,map__39570__$1,props,indexes))
);
return (com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__39574) : com.wsscode.oge.ui.codemirror.editor.call(null,G__39574));
});
com.wsscode.oge.ui.codemirror.clojure = (function com$wsscode$oge$ui$codemirror$clojure(props){
var options = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_mode,"clojure",cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_matchBrackets,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_highlightSelectionMatches,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_foldGutter,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_gutters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null)], null);
var G__39591 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,((function (options){
return (function (p1__39590_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__39590_SHARP_], 0));
});})(options))
);
return (com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__39591) : com.wsscode.oge.ui.codemirror.editor.call(null,G__39591));
});

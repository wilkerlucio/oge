// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.ui.common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.primitives');
goog.require('com.wsscode.oge.ui.helpers');
goog.require('fulcro_css.css');
goog.require('fulcro.client.dom');
com.wsscode.oge.ui.common.css_button = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$vertical_DASH_align,cljs.core.cst$kw$white_DASH_space,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$transition,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$cursor,cljs.core.cst$kw$padding,cljs.core.cst$kw$border_DASH_color,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$user_DASH_select],["1.25","#fff","center","middle","nowrap","1rem","all .2s ease-in-out","400","#0275d8","pointer",".5rem 1rem","#0275d8","inline-block","1px solid transparent",".25rem","none"]);
com.wsscode.oge.ui.common.css_button_hover = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"#fff",cljs.core.cst$kw$background_DASH_color,"#025aa5",cljs.core.cst$kw$border_DASH_color,"#01549b"], null);
if(typeof com.wsscode.oge.ui.common.Button !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.common.Button = (function com$wsscode$oge$ui$common$Button(){
var this__35978__auto__ = this;
React.Component.apply(this__35978__auto__,arguments);

if(!((this__35978__auto__.initLocalState == null))){
this__35978__auto__.state = this__35978__auto__.initLocalState();
} else {
this__35978__auto__.state = {};
}

return this__35978__auto__;
});

com.wsscode.oge.ui.common.Button.prototype = goog.object.clone(React.Component.prototype);
}

var x42686_42707 = com.wsscode.oge.ui.common.Button.prototype;
x42686_42707.componentDidMount = ((function (x42686_42707){
return (function (){
var this__35833__auto__ = this;
return goog.object.set(this__35833__auto__,"fulcro$mounted",true);
});})(x42686_42707))
;

x42686_42707.componentWillUpdate = ((function (x42686_42707){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(((!((this__35833__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35833__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35842__auto___42708 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives.props(this__35833__auto__));
var next_ident__35843__auto___42709 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives._next_props(next_props__35834__auto__,this__35833__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35842__auto___42708,next_ident__35843__auto___42709)){
var idxr__35844__auto___42710 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35844__auto___42710 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35844__auto___42710),((function (idxr__35844__auto___42710,ident__35842__auto___42708,next_ident__35843__auto___42709,this__35833__auto__,x42686_42707){
return (function (indexes__35845__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35845__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35842__auto___42708], null),cljs.core.disj,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35843__auto___42709], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35833__auto__);
});})(idxr__35844__auto___42710,ident__35842__auto___42708,next_ident__35843__auto___42709,this__35833__auto__,x42686_42707))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35833__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35833__auto__);
});})(x42686_42707))
;

x42686_42707.shouldComponentUpdate = ((function (x42686_42707){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35836__auto__ = next_props__35834__auto__.children;
var next_props__35834__auto____$1 = goog.object.get(next_props__35834__auto__,"fulcro$value");
var next_props__35834__auto____$2 = (function (){var G__42693 = next_props__35834__auto____$1;
if((next_props__35834__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__42693);
} else {
return G__42693;
}
})();
var current_props__35837__auto__ = fulcro.client.primitives.props(this__35833__auto__);
var next_props_stale_QMARK___35838__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35837__auto__) > fulcro.client.primitives.get_basis_time(next_props__35834__auto____$2));
var props_changed_QMARK___35839__auto__ = (!(next_props_stale_QMARK___35838__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35837__auto__,next_props__35834__auto____$2));
var state_changed_QMARK___35840__auto__ = (function (){var and__10793__auto__ = this__35833__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42695 = this__35833__auto__.state;
var G__42696 = "fulcro$state";
return goog.object.get(G__42695,G__42696);
})(),goog.object.get(next_state__35835__auto__,"fulcro$state"));
} else {
return and__10793__auto__;
}
})();
var children_changed_QMARK___35841__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__35833__auto__.props.children,next_children__35836__auto__);
var or__10805__auto__ = props_changed_QMARK___35839__auto__;
if(or__10805__auto__){
return or__10805__auto__;
} else {
var or__10805__auto____$1 = state_changed_QMARK___35840__auto__;
if(cljs.core.truth_(or__10805__auto____$1)){
return or__10805__auto____$1;
} else {
return children_changed_QMARK___35841__auto__;
}
}
}
});})(x42686_42707))
;

x42686_42707.componentWillUnmount = ((function (x42686_42707){
return (function (){
var this__35833__auto__ = this;
var r__35849__auto__ = fulcro.client.primitives.get_reconciler(this__35833__auto__);
var cfg__35850__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__35849__auto__);
var st__35851__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__35850__auto__);
var indexer__35848__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__35850__auto__);
goog.object.set(this__35833__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__10793__auto__ = !((st__35851__auto__ == null));
if(and__10793__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__35851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,this__35833__auto__], null));
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__35851__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__35833__auto__], 0));
} else {
}

if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x42686_42707))
;

x42686_42707.componentDidUpdate = ((function (x42686_42707){
return (function (prev_props__35846__auto__,prev_state__35847__auto__){
var this__35833__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35833__auto__);
});})(x42686_42707))
;

x42686_42707.componentWillMount = ((function (x42686_42707){
return (function (){
var this__35833__auto__ = this;
var indexer__35848__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x42686_42707))
;

x42686_42707.render = ((function (x42686_42707){
return (function (){
var this__35832__auto__ = this;
var this$ = this__35832__auto__;
var _STAR_reconciler_STAR_42697 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42698 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_42699 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_42700 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_42701 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35832__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35832__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35832__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35832__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35832__auto__;

try{var props = fulcro.client.primitives.props(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.ui.common.Button);
return fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,cljs.core.cst$kw$button.cljs$core$IFn$_invoke$arity$1(css)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives.children(this$)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_42701;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_42700;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_42699;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_42698;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42697;
}});})(x42686_42707))
;


com.wsscode.oge.ui.common.Button.prototype.constructor = com.wsscode.oge.ui.common.Button;

com.wsscode.oge.ui.common.Button.prototype.constructor.displayName = "com.wsscode.oge.ui.common/Button";

com.wsscode.oge.ui.common.Button.prototype.fulcro$isComponent = true;

var x42702_42722 = com.wsscode.oge.ui.common.Button;
x42702_42722.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x42702_42722.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42702_42722){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$button,com.wsscode.oge.ui.common.css_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_hover,com.wsscode.oge.ui.common.css_button_hover], null)], null)], null);
});})(x42702_42722))
;

x42702_42722.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42702_42722){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x42702_42722))
;


var x42703_42724 = com.wsscode.oge.ui.common.Button.prototype;
x42703_42724.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x42703_42724.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42703_42724){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$button,com.wsscode.oge.ui.common.css_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_hover,com.wsscode.oge.ui.common.css_button_hover], null)], null)], null);
});})(x42703_42724))
;

x42703_42724.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42703_42724){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x42703_42724))
;


com.wsscode.oge.ui.common.Button.cljs$lang$type = true;

com.wsscode.oge.ui.common.Button.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/Button";

com.wsscode.oge.ui.common.Button.cljs$lang$ctorPrWriter = (function (this__35981__auto__,writer__35982__auto__,opt__35983__auto__){
return cljs.core._write(writer__35982__auto__,"com.wsscode.oge.ui.common/Button");
});
com.wsscode.oge.ui.common.button = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.common.Button);
com.wsscode.oge.ui.common.css_input = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$transition,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$background_DASH_clip,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$padding,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius],["1.25","#464a4c","1rem","border-color ease-in-out .15s,box-shadow ease-in-out .15s","#fff","100%","padding-box","none",".5rem .75rem","block","1px solid rgba(0,0,0,.15)",".25rem"]);
com.wsscode.oge.ui.common.css_input_focus = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,"#464a4c",cljs.core.cst$kw$background_DASH_color,"#fff",cljs.core.cst$kw$border_DASH_color,"#5cb3fd",cljs.core.cst$kw$outline,"0"], null);
if(typeof com.wsscode.oge.ui.common.TextField !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.common.TextField = (function com$wsscode$oge$ui$common$TextField(){
var this__35978__auto__ = this;
React.Component.apply(this__35978__auto__,arguments);

if(!((this__35978__auto__.initLocalState == null))){
this__35978__auto__.state = this__35978__auto__.initLocalState();
} else {
this__35978__auto__.state = {};
}

return this__35978__auto__;
});

com.wsscode.oge.ui.common.TextField.prototype = goog.object.clone(React.Component.prototype);
}

var x42731_42760 = com.wsscode.oge.ui.common.TextField.prototype;
x42731_42760.componentDidMount = ((function (x42731_42760){
return (function (){
var this__35833__auto__ = this;
return goog.object.set(this__35833__auto__,"fulcro$mounted",true);
});})(x42731_42760))
;

x42731_42760.componentWillUpdate = ((function (x42731_42760){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(((!((this__35833__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35833__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35842__auto___42761 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives.props(this__35833__auto__));
var next_ident__35843__auto___42762 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives._next_props(next_props__35834__auto__,this__35833__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35842__auto___42761,next_ident__35843__auto___42762)){
var idxr__35844__auto___42768 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35844__auto___42768 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35844__auto___42768),((function (idxr__35844__auto___42768,ident__35842__auto___42761,next_ident__35843__auto___42762,this__35833__auto__,x42731_42760){
return (function (indexes__35845__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35845__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35842__auto___42761], null),cljs.core.disj,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35843__auto___42762], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35833__auto__);
});})(idxr__35844__auto___42768,ident__35842__auto___42761,next_ident__35843__auto___42762,this__35833__auto__,x42731_42760))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35833__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35833__auto__);
});})(x42731_42760))
;

x42731_42760.shouldComponentUpdate = ((function (x42731_42760){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35836__auto__ = next_props__35834__auto__.children;
var next_props__35834__auto____$1 = goog.object.get(next_props__35834__auto__,"fulcro$value");
var next_props__35834__auto____$2 = (function (){var G__42736 = next_props__35834__auto____$1;
if((next_props__35834__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__42736);
} else {
return G__42736;
}
})();
var current_props__35837__auto__ = fulcro.client.primitives.props(this__35833__auto__);
var next_props_stale_QMARK___35838__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35837__auto__) > fulcro.client.primitives.get_basis_time(next_props__35834__auto____$2));
var props_changed_QMARK___35839__auto__ = (!(next_props_stale_QMARK___35838__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35837__auto__,next_props__35834__auto____$2));
var state_changed_QMARK___35840__auto__ = (function (){var and__10793__auto__ = this__35833__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42743 = this__35833__auto__.state;
var G__42744 = "fulcro$state";
return goog.object.get(G__42743,G__42744);
})(),goog.object.get(next_state__35835__auto__,"fulcro$state"));
} else {
return and__10793__auto__;
}
})();
var children_changed_QMARK___35841__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__35833__auto__.props.children,next_children__35836__auto__);
var or__10805__auto__ = props_changed_QMARK___35839__auto__;
if(or__10805__auto__){
return or__10805__auto__;
} else {
var or__10805__auto____$1 = state_changed_QMARK___35840__auto__;
if(cljs.core.truth_(or__10805__auto____$1)){
return or__10805__auto____$1;
} else {
return children_changed_QMARK___35841__auto__;
}
}
}
});})(x42731_42760))
;

x42731_42760.componentWillUnmount = ((function (x42731_42760){
return (function (){
var this__35833__auto__ = this;
var r__35849__auto__ = fulcro.client.primitives.get_reconciler(this__35833__auto__);
var cfg__35850__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__35849__auto__);
var st__35851__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__35850__auto__);
var indexer__35848__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__35850__auto__);
goog.object.set(this__35833__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__10793__auto__ = !((st__35851__auto__ == null));
if(and__10793__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__35851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,this__35833__auto__], null));
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__35851__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__35833__auto__], 0));
} else {
}

if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x42731_42760))
;

x42731_42760.componentDidUpdate = ((function (x42731_42760){
return (function (prev_props__35846__auto__,prev_state__35847__auto__){
var this__35833__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35833__auto__);
});})(x42731_42760))
;

x42731_42760.componentWillMount = ((function (x42731_42760){
return (function (){
var this__35833__auto__ = this;
var indexer__35848__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x42731_42760))
;

x42731_42760.render = ((function (x42731_42760){
return (function (){
var this__35832__auto__ = this;
var this$ = this__35832__auto__;
var _STAR_reconciler_STAR_42747 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42748 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_42749 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_42750 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_42751 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35832__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35832__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35832__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35832__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35832__auto__;

try{var props = fulcro.client.primitives.props(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.ui.common.TextField);
var G__42756 = com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$type,"text"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.oge.ui.helpers.expand_classes(css,cljs.core.cst$kw$com$wsscode$oge$ui$common_SLASH_classes.cljs$core$IFn$_invoke$arity$1(props)),props], 0));
return (fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$1(G__42756) : fulcro.client.dom.input.call(null,G__42756));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_42751;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_42750;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_42749;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_42748;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42747;
}});})(x42731_42760))
;


com.wsscode.oge.ui.common.TextField.prototype.constructor = com.wsscode.oge.ui.common.TextField;

com.wsscode.oge.ui.common.TextField.prototype.constructor.displayName = "com.wsscode.oge.ui.common/TextField";

com.wsscode.oge.ui.common.TextField.prototype.fulcro$isComponent = true;

var x42758_42780 = com.wsscode.oge.ui.common.TextField;
x42758_42780.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x42758_42780.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42758_42780){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,com.wsscode.oge.ui.common.css_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_focus,com.wsscode.oge.ui.common.css_input_focus], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#5cb85c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$warning,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#f0ad4e"], null)], null)], null)], null);
});})(x42758_42780))
;

x42758_42780.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42758_42780){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x42758_42780))
;


var x42759_42782 = com.wsscode.oge.ui.common.TextField.prototype;
x42759_42782.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x42759_42782.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42759_42782){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,com.wsscode.oge.ui.common.css_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_focus,com.wsscode.oge.ui.common.css_input_focus], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#5cb85c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$warning,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#f0ad4e"], null)], null)], null)], null);
});})(x42759_42782))
;

x42759_42782.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42759_42782){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x42759_42782))
;


com.wsscode.oge.ui.common.TextField.cljs$lang$type = true;

com.wsscode.oge.ui.common.TextField.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/TextField";

com.wsscode.oge.ui.common.TextField.cljs$lang$ctorPrWriter = (function (this__35981__auto__,writer__35982__auto__,opt__35983__auto__){
return cljs.core._write(writer__35982__auto__,"com.wsscode.oge.ui.common/TextField");
});
com.wsscode.oge.ui.common.text_field = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.common.TextField);
if(typeof com.wsscode.oge.ui.common.CSS !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.common.CSS = (function com$wsscode$oge$ui$common$CSS(){
var this__35978__auto__ = this;
React.Component.apply(this__35978__auto__,arguments);

if(!((this__35978__auto__.initLocalState == null))){
this__35978__auto__.state = this__35978__auto__.initLocalState();
} else {
this__35978__auto__.state = {};
}

return this__35978__auto__;
});

com.wsscode.oge.ui.common.CSS.prototype = goog.object.clone(React.Component.prototype);
}

var x42786_42819 = com.wsscode.oge.ui.common.CSS.prototype;
x42786_42819.componentDidMount = ((function (x42786_42819){
return (function (){
var this__35833__auto__ = this;
return goog.object.set(this__35833__auto__,"fulcro$mounted",true);
});})(x42786_42819))
;

x42786_42819.componentWillUpdate = ((function (x42786_42819){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(((!((this__35833__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35833__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35842__auto___42820 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives.props(this__35833__auto__));
var next_ident__35843__auto___42821 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives._next_props(next_props__35834__auto__,this__35833__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35842__auto___42820,next_ident__35843__auto___42821)){
var idxr__35844__auto___42822 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35844__auto___42822 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35844__auto___42822),((function (idxr__35844__auto___42822,ident__35842__auto___42820,next_ident__35843__auto___42821,this__35833__auto__,x42786_42819){
return (function (indexes__35845__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35845__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35842__auto___42820], null),cljs.core.disj,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35843__auto___42821], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35833__auto__);
});})(idxr__35844__auto___42822,ident__35842__auto___42820,next_ident__35843__auto___42821,this__35833__auto__,x42786_42819))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35833__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35833__auto__);
});})(x42786_42819))
;

x42786_42819.shouldComponentUpdate = ((function (x42786_42819){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35836__auto__ = next_props__35834__auto__.children;
var next_props__35834__auto____$1 = goog.object.get(next_props__35834__auto__,"fulcro$value");
var next_props__35834__auto____$2 = (function (){var G__42792 = next_props__35834__auto____$1;
if((next_props__35834__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__42792);
} else {
return G__42792;
}
})();
var current_props__35837__auto__ = fulcro.client.primitives.props(this__35833__auto__);
var next_props_stale_QMARK___35838__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35837__auto__) > fulcro.client.primitives.get_basis_time(next_props__35834__auto____$2));
var props_changed_QMARK___35839__auto__ = (!(next_props_stale_QMARK___35838__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35837__auto__,next_props__35834__auto____$2));
var state_changed_QMARK___35840__auto__ = (function (){var and__10793__auto__ = this__35833__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42795 = this__35833__auto__.state;
var G__42796 = "fulcro$state";
return goog.object.get(G__42795,G__42796);
})(),goog.object.get(next_state__35835__auto__,"fulcro$state"));
} else {
return and__10793__auto__;
}
})();
var children_changed_QMARK___35841__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__35833__auto__.props.children,next_children__35836__auto__);
var or__10805__auto__ = props_changed_QMARK___35839__auto__;
if(or__10805__auto__){
return or__10805__auto__;
} else {
var or__10805__auto____$1 = state_changed_QMARK___35840__auto__;
if(cljs.core.truth_(or__10805__auto____$1)){
return or__10805__auto____$1;
} else {
return children_changed_QMARK___35841__auto__;
}
}
}
});})(x42786_42819))
;

x42786_42819.componentWillUnmount = ((function (x42786_42819){
return (function (){
var this__35833__auto__ = this;
var r__35849__auto__ = fulcro.client.primitives.get_reconciler(this__35833__auto__);
var cfg__35850__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__35849__auto__);
var st__35851__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__35850__auto__);
var indexer__35848__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__35850__auto__);
goog.object.set(this__35833__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__10793__auto__ = !((st__35851__auto__ == null));
if(and__10793__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__35851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,this__35833__auto__], null));
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__35851__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__35833__auto__], 0));
} else {
}

if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x42786_42819))
;

x42786_42819.componentDidUpdate = ((function (x42786_42819){
return (function (prev_props__35846__auto__,prev_state__35847__auto__){
var this__35833__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35833__auto__);
});})(x42786_42819))
;

x42786_42819.componentWillMount = ((function (x42786_42819){
return (function (){
var this__35833__auto__ = this;
var indexer__35848__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x42786_42819))
;


com.wsscode.oge.ui.common.CSS.prototype.constructor = com.wsscode.oge.ui.common.CSS;

com.wsscode.oge.ui.common.CSS.prototype.constructor.displayName = "com.wsscode.oge.ui.common/CSS";

com.wsscode.oge.ui.common.CSS.prototype.fulcro$isComponent = true;

var x42803_42836 = com.wsscode.oge.ui.common.CSS;
x42803_42836.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x42803_42836.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42803_42836){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x42803_42836))
;

x42803_42836.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42803_42836){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.Button,com.wsscode.oge.ui.common.TextField], null);
});})(x42803_42836))
;


var x42808_42837 = com.wsscode.oge.ui.common.CSS.prototype;
x42808_42837.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x42808_42837.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42808_42837){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x42808_42837))
;

x42808_42837.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42808_42837){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.Button,com.wsscode.oge.ui.common.TextField], null);
});})(x42808_42837))
;


com.wsscode.oge.ui.common.CSS.cljs$lang$type = true;

com.wsscode.oge.ui.common.CSS.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/CSS";

com.wsscode.oge.ui.common.CSS.cljs$lang$ctorPrWriter = (function (this__35981__auto__,writer__35982__auto__,opt__35983__auto__){
return cljs.core._write(writer__35982__auto__,"com.wsscode.oge.ui.common/CSS");
});

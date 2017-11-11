// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.ui.common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('com.wsscode.oge.ui.helpers');
goog.require('fulcro_css.css');
goog.require('om.dom');
com.wsscode.oge.ui.common.css_button = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$vertical_DASH_align,cljs.core.cst$kw$white_DASH_space,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$transition,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$cursor,cljs.core.cst$kw$padding,cljs.core.cst$kw$border_DASH_color,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$user_DASH_select],["1.25","#fff","center","middle","nowrap","1rem","all .2s ease-in-out","400","#0275d8","pointer",".5rem 1rem","#0275d8","inline-block","1px solid transparent",".25rem","none"]);
com.wsscode.oge.ui.common.css_button_hover = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"#fff",cljs.core.cst$kw$background_DASH_color,"#025aa5",cljs.core.cst$kw$border_DASH_color,"#01549b"], null);
if(typeof com.wsscode.oge.ui.common.Button !== 'undefined'){
} else {
/**
 * @constructor
 */
com.wsscode.oge.ui.common.Button = (function com$wsscode$oge$ui$common$Button(){
var this__24695__auto__ = this;
React.Component.apply(this__24695__auto__,arguments);

if(!((this__24695__auto__.initLocalState == null))){
this__24695__auto__.state = this__24695__auto__.initLocalState();
} else {
this__24695__auto__.state = {};
}

return this__24695__auto__;
});

com.wsscode.oge.ui.common.Button.prototype = goog.object.clone(React.Component.prototype);
}

var x48697_48720 = com.wsscode.oge.ui.common.Button.prototype;
x48697_48720.componentWillUpdate = ((function (x48697_48720){
return (function (next_props__24537__auto__,next_state__24538__auto__){
var this__24536__auto__ = this;
if(((!((this__24536__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__24536__auto__.om$next$Ident$)))?true:false):false)){
var ident__24540__auto___48721 = om.next.ident(this__24536__auto__,om.next.props(this__24536__auto__));
var next_ident__24541__auto___48722 = om.next.ident(this__24536__auto__,om.next._next_props(next_props__24537__auto__,this__24536__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24540__auto___48721,next_ident__24541__auto___48722)){
var idxr__24542__auto___48723 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24542__auto___48723 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24542__auto___48723),((function (idxr__24542__auto___48723,ident__24540__auto___48721,next_ident__24541__auto___48722,this__24536__auto__,x48697_48720){
return (function (indexes__24543__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24543__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24540__auto___48721], null),cljs.core.disj,this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24541__auto___48722], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24536__auto__);
});})(idxr__24542__auto___48723,ident__24540__auto___48721,next_ident__24541__auto___48722,this__24536__auto__,x48697_48720))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24536__auto__);

return om.next.merge_pending_state_BANG_(this__24536__auto__);
});})(x48697_48720))
;

x48697_48720.shouldComponentUpdate = ((function (x48697_48720){
return (function (next_props__24537__auto__,next_state__24538__auto__){
var this__24536__auto__ = this;
var next_children__24539__auto__ = next_props__24537__auto__.children;
var next_props__24537__auto____$1 = goog.object.get(next_props__24537__auto__,"omcljs$value");
var next_props__24537__auto____$2 = (function (){var G__48699 = next_props__24537__auto____$1;
if((next_props__24537__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__48699);
} else {
return G__48699;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24536__auto__),next_props__24537__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__24536__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__48704 = this__24536__auto__.state;
var G__48705 = "omcljs$state";
return goog.object.get(G__48704,G__48705);
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
});})(x48697_48720))
;

x48697_48720.componentWillUnmount = ((function (x48697_48720){
return (function (){
var this__24536__auto__ = this;
var r__24547__auto__ = om.next.get_reconciler(this__24536__auto__);
var cfg__24548__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24547__auto__);
var st__24549__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24548__auto__);
var indexer__24546__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24548__auto__);
if(cljs.core.truth_((function (){var and__10400__auto__ = !((st__24549__auto__ == null));
if(and__10400__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__24549__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24536__auto__], null));
} else {
return and__10400__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24549__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__24536__auto__], 0));
} else {
}

if((indexer__24546__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__24546__auto__,this__24536__auto__);
}
});})(x48697_48720))
;

x48697_48720.componentDidUpdate = ((function (x48697_48720){
return (function (prev_props__24544__auto__,prev_state__24545__auto__){
var this__24536__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24536__auto__);
});})(x48697_48720))
;

x48697_48720.isMounted = ((function (x48697_48720){
return (function (){
var this__24536__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24536__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x48697_48720))
;

x48697_48720.componentWillMount = ((function (x48697_48720){
return (function (){
var this__24536__auto__ = this;
var indexer__24546__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24546__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24546__auto__,this__24536__auto__);
}
});})(x48697_48720))
;

x48697_48720.render = ((function (x48697_48720){
return (function (){
var this__24535__auto__ = this;
var this$ = this__24535__auto__;
var _STAR_reconciler_STAR_48708 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_48709 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_48710 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_48711 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_48712 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24535__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24535__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24535__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24535__auto__);

om.next._STAR_parent_STAR_ = this__24535__auto__;

try{var props = om.next.props(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.ui.common.Button);
return om.dom.button.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,cljs.core.cst$kw$button.cljs$core$IFn$_invoke$arity$1(css)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.next.children(this$)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_48712;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_48711;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_48710;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_48709;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_48708;
}});})(x48697_48720))
;


com.wsscode.oge.ui.common.Button.prototype.constructor = com.wsscode.oge.ui.common.Button;

com.wsscode.oge.ui.common.Button.prototype.constructor.displayName = "com.wsscode.oge.ui.common/Button";

com.wsscode.oge.ui.common.Button.prototype.om$isComponent = true;

var x48716_48732 = com.wsscode.oge.ui.common.Button;
/** @nocollapse */
x48716_48732.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48716_48732.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48716_48732){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$button,com.wsscode.oge.ui.common.css_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_hover,com.wsscode.oge.ui.common.css_button_hover], null)], null)], null);
});})(x48716_48732))
;

/** @nocollapse */
x48716_48732.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48716_48732){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48716_48732))
;


var x48717_48734 = com.wsscode.oge.ui.common.Button.prototype;

x48717_48734.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x48717_48734.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48717_48734){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$button,com.wsscode.oge.ui.common.css_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_hover,com.wsscode.oge.ui.common.css_button_hover], null)], null)], null);
});})(x48717_48734))
;


x48717_48734.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48717_48734){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48717_48734))
;


com.wsscode.oge.ui.common.Button.cljs$lang$type = true;

com.wsscode.oge.ui.common.Button.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/Button";

com.wsscode.oge.ui.common.Button.cljs$lang$ctorPrWriter = (function (this__24698__auto__,writer__24699__auto__,opt__24700__auto__){
return cljs.core._write(writer__24699__auto__,"com.wsscode.oge.ui.common/Button");
});
com.wsscode.oge.ui.common.button = com.wsscode.oge.ui.helpers.container_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.common.Button);
com.wsscode.oge.ui.common.css_input = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$transition,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$background_DASH_clip,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$padding,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius],["1.25","#464a4c","1rem","border-color ease-in-out .15s,box-shadow ease-in-out .15s","#fff","100%","padding-box","none",".5rem .75rem","block","1px solid rgba(0,0,0,.15)",".25rem"]);
com.wsscode.oge.ui.common.css_input_focus = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,"#464a4c",cljs.core.cst$kw$background_DASH_color,"#fff",cljs.core.cst$kw$border_DASH_color,"#5cb3fd",cljs.core.cst$kw$outline,"0"], null);
if(typeof com.wsscode.oge.ui.common.TextField !== 'undefined'){
} else {
/**
 * @constructor
 */
com.wsscode.oge.ui.common.TextField = (function com$wsscode$oge$ui$common$TextField(){
var this__24695__auto__ = this;
React.Component.apply(this__24695__auto__,arguments);

if(!((this__24695__auto__.initLocalState == null))){
this__24695__auto__.state = this__24695__auto__.initLocalState();
} else {
this__24695__auto__.state = {};
}

return this__24695__auto__;
});

com.wsscode.oge.ui.common.TextField.prototype = goog.object.clone(React.Component.prototype);
}

var x48737_48763 = com.wsscode.oge.ui.common.TextField.prototype;
x48737_48763.componentWillUpdate = ((function (x48737_48763){
return (function (next_props__24537__auto__,next_state__24538__auto__){
var this__24536__auto__ = this;
if(((!((this__24536__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__24536__auto__.om$next$Ident$)))?true:false):false)){
var ident__24540__auto___48771 = om.next.ident(this__24536__auto__,om.next.props(this__24536__auto__));
var next_ident__24541__auto___48772 = om.next.ident(this__24536__auto__,om.next._next_props(next_props__24537__auto__,this__24536__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24540__auto___48771,next_ident__24541__auto___48772)){
var idxr__24542__auto___48778 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24542__auto___48778 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24542__auto___48778),((function (idxr__24542__auto___48778,ident__24540__auto___48771,next_ident__24541__auto___48772,this__24536__auto__,x48737_48763){
return (function (indexes__24543__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24543__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24540__auto___48771], null),cljs.core.disj,this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24541__auto___48772], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24536__auto__);
});})(idxr__24542__auto___48778,ident__24540__auto___48771,next_ident__24541__auto___48772,this__24536__auto__,x48737_48763))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24536__auto__);

return om.next.merge_pending_state_BANG_(this__24536__auto__);
});})(x48737_48763))
;

x48737_48763.shouldComponentUpdate = ((function (x48737_48763){
return (function (next_props__24537__auto__,next_state__24538__auto__){
var this__24536__auto__ = this;
var next_children__24539__auto__ = next_props__24537__auto__.children;
var next_props__24537__auto____$1 = goog.object.get(next_props__24537__auto__,"omcljs$value");
var next_props__24537__auto____$2 = (function (){var G__48740 = next_props__24537__auto____$1;
if((next_props__24537__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__48740);
} else {
return G__48740;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24536__auto__),next_props__24537__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__24536__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__48745 = this__24536__auto__.state;
var G__48746 = "omcljs$state";
return goog.object.get(G__48745,G__48746);
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
});})(x48737_48763))
;

x48737_48763.componentWillUnmount = ((function (x48737_48763){
return (function (){
var this__24536__auto__ = this;
var r__24547__auto__ = om.next.get_reconciler(this__24536__auto__);
var cfg__24548__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24547__auto__);
var st__24549__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24548__auto__);
var indexer__24546__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24548__auto__);
if(cljs.core.truth_((function (){var and__10400__auto__ = !((st__24549__auto__ == null));
if(and__10400__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__24549__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24536__auto__], null));
} else {
return and__10400__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24549__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__24536__auto__], 0));
} else {
}

if((indexer__24546__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__24546__auto__,this__24536__auto__);
}
});})(x48737_48763))
;

x48737_48763.componentDidUpdate = ((function (x48737_48763){
return (function (prev_props__24544__auto__,prev_state__24545__auto__){
var this__24536__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24536__auto__);
});})(x48737_48763))
;

x48737_48763.isMounted = ((function (x48737_48763){
return (function (){
var this__24536__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24536__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x48737_48763))
;

x48737_48763.componentWillMount = ((function (x48737_48763){
return (function (){
var this__24536__auto__ = this;
var indexer__24546__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24546__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24546__auto__,this__24536__auto__);
}
});})(x48737_48763))
;

x48737_48763.render = ((function (x48737_48763){
return (function (){
var this__24535__auto__ = this;
var this$ = this__24535__auto__;
var _STAR_reconciler_STAR_48747 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_48748 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_48749 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_48750 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_48751 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__24535__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__24535__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__24535__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__24535__auto__);

om.next._STAR_parent_STAR_ = this__24535__auto__;

try{var props = om.next.props(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.ui.common.TextField);
var G__48756 = com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$type,"text"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.oge.ui.helpers.expand_classes(css,cljs.core.cst$kw$com$wsscode$oge$ui$common_SLASH_classes.cljs$core$IFn$_invoke$arity$1(props)),props], 0));
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__48756) : om.dom.input.call(null,G__48756));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_48751;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_48750;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_48749;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_48748;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_48747;
}});})(x48737_48763))
;


com.wsscode.oge.ui.common.TextField.prototype.constructor = com.wsscode.oge.ui.common.TextField;

com.wsscode.oge.ui.common.TextField.prototype.constructor.displayName = "com.wsscode.oge.ui.common/TextField";

com.wsscode.oge.ui.common.TextField.prototype.om$isComponent = true;

var x48757_48795 = com.wsscode.oge.ui.common.TextField;
/** @nocollapse */
x48757_48795.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48757_48795.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48757_48795){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,com.wsscode.oge.ui.common.css_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_focus,com.wsscode.oge.ui.common.css_input_focus], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#5cb85c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$warning,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#f0ad4e"], null)], null)], null)], null);
});})(x48757_48795))
;

/** @nocollapse */
x48757_48795.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48757_48795){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48757_48795))
;


var x48762_48796 = com.wsscode.oge.ui.common.TextField.prototype;

x48762_48796.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x48762_48796.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48762_48796){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,com.wsscode.oge.ui.common.css_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_focus,com.wsscode.oge.ui.common.css_input_focus], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#5cb85c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$warning,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#f0ad4e"], null)], null)], null)], null);
});})(x48762_48796))
;


x48762_48796.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48762_48796){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48762_48796))
;


com.wsscode.oge.ui.common.TextField.cljs$lang$type = true;

com.wsscode.oge.ui.common.TextField.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/TextField";

com.wsscode.oge.ui.common.TextField.cljs$lang$ctorPrWriter = (function (this__24698__auto__,writer__24699__auto__,opt__24700__auto__){
return cljs.core._write(writer__24699__auto__,"com.wsscode.oge.ui.common/TextField");
});
com.wsscode.oge.ui.common.text_field = om.next.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.common.TextField);
if(typeof com.wsscode.oge.ui.common.CSS !== 'undefined'){
} else {
/**
 * @constructor
 */
com.wsscode.oge.ui.common.CSS = (function com$wsscode$oge$ui$common$CSS(){
var this__24695__auto__ = this;
React.Component.apply(this__24695__auto__,arguments);

if(!((this__24695__auto__.initLocalState == null))){
this__24695__auto__.state = this__24695__auto__.initLocalState();
} else {
this__24695__auto__.state = {};
}

return this__24695__auto__;
});

com.wsscode.oge.ui.common.CSS.prototype = goog.object.clone(React.Component.prototype);
}

var x48799_48810 = com.wsscode.oge.ui.common.CSS.prototype;
x48799_48810.componentWillUpdate = ((function (x48799_48810){
return (function (next_props__24537__auto__,next_state__24538__auto__){
var this__24536__auto__ = this;
if(((!((this__24536__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__24536__auto__.om$next$Ident$)))?true:false):false)){
var ident__24540__auto___48811 = om.next.ident(this__24536__auto__,om.next.props(this__24536__auto__));
var next_ident__24541__auto___48812 = om.next.ident(this__24536__auto__,om.next._next_props(next_props__24537__auto__,this__24536__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__24540__auto___48811,next_ident__24541__auto___48812)){
var idxr__24542__auto___48813 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__24542__auto___48813 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__24542__auto___48813),((function (idxr__24542__auto___48813,ident__24540__auto___48811,next_ident__24541__auto___48812,this__24536__auto__,x48799_48810){
return (function (indexes__24543__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__24543__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__24540__auto___48811], null),cljs.core.disj,this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__24541__auto___48812], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24536__auto__);
});})(idxr__24542__auto___48813,ident__24540__auto___48811,next_ident__24541__auto___48812,this__24536__auto__,x48799_48810))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__24536__auto__);

return om.next.merge_pending_state_BANG_(this__24536__auto__);
});})(x48799_48810))
;

x48799_48810.shouldComponentUpdate = ((function (x48799_48810){
return (function (next_props__24537__auto__,next_state__24538__auto__){
var this__24536__auto__ = this;
var next_children__24539__auto__ = next_props__24537__auto__.children;
var next_props__24537__auto____$1 = goog.object.get(next_props__24537__auto__,"omcljs$value");
var next_props__24537__auto____$2 = (function (){var G__48801 = next_props__24537__auto____$1;
if((next_props__24537__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__48801);
} else {
return G__48801;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__24536__auto__),next_props__24537__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__24536__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__48806 = this__24536__auto__.state;
var G__48807 = "omcljs$state";
return goog.object.get(G__48806,G__48807);
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
});})(x48799_48810))
;

x48799_48810.componentWillUnmount = ((function (x48799_48810){
return (function (){
var this__24536__auto__ = this;
var r__24547__auto__ = om.next.get_reconciler(this__24536__auto__);
var cfg__24548__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__24547__auto__);
var st__24549__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__24548__auto__);
var indexer__24546__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__24548__auto__);
if(cljs.core.truth_((function (){var and__10400__auto__ = !((st__24549__auto__ == null));
if(and__10400__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__24549__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__24536__auto__], null));
} else {
return and__10400__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__24549__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__24536__auto__], 0));
} else {
}

if((indexer__24546__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__24546__auto__,this__24536__auto__);
}
});})(x48799_48810))
;

x48799_48810.componentDidUpdate = ((function (x48799_48810){
return (function (prev_props__24544__auto__,prev_state__24545__auto__){
var this__24536__auto__ = this;
return om.next.clear_prev_props_BANG_(this__24536__auto__);
});})(x48799_48810))
;

x48799_48810.isMounted = ((function (x48799_48810){
return (function (){
var this__24536__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__24536__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x48799_48810))
;

x48799_48810.componentWillMount = ((function (x48799_48810){
return (function (){
var this__24536__auto__ = this;
var indexer__24546__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__24536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__24546__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__24546__auto__,this__24536__auto__);
}
});})(x48799_48810))
;


com.wsscode.oge.ui.common.CSS.prototype.constructor = com.wsscode.oge.ui.common.CSS;

com.wsscode.oge.ui.common.CSS.prototype.constructor.displayName = "com.wsscode.oge.ui.common/CSS";

com.wsscode.oge.ui.common.CSS.prototype.om$isComponent = true;

var x48808_48826 = com.wsscode.oge.ui.common.CSS;
/** @nocollapse */
x48808_48826.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48808_48826.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48808_48826){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48808_48826))
;

/** @nocollapse */
x48808_48826.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48808_48826){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.Button,com.wsscode.oge.ui.common.TextField], null);
});})(x48808_48826))
;


var x48809_48827 = com.wsscode.oge.ui.common.CSS.prototype;

x48809_48827.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x48809_48827.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48809_48827){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48809_48827))
;


x48809_48827.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48809_48827){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.Button,com.wsscode.oge.ui.common.TextField], null);
});})(x48809_48827))
;


com.wsscode.oge.ui.common.CSS.cljs$lang$type = true;

com.wsscode.oge.ui.common.CSS.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/CSS";

com.wsscode.oge.ui.common.CSS.cljs$lang$ctorPrWriter = (function (this__24698__auto__,writer__24699__auto__,opt__24700__auto__){
return cljs.core._write(writer__24699__auto__,"com.wsscode.oge.ui.common/CSS");
});

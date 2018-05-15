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
var this__35867__auto__ = this;
React.Component.apply(this__35867__auto__,arguments);

if(!((this__35867__auto__.initLocalState == null))){
this__35867__auto__.state = this__35867__auto__.initLocalState();
} else {
this__35867__auto__.state = {};
}

return this__35867__auto__;
});

com.wsscode.oge.ui.common.Button.prototype = goog.object.clone(React.Component.prototype);
}

var x38721_38800 = com.wsscode.oge.ui.common.Button.prototype;
x38721_38800.componentDidMount = ((function (x38721_38800){
return (function (){
var this__35722__auto__ = this;
return goog.object.set(this__35722__auto__,"fulcro$mounted",true);
});})(x38721_38800))
;

x38721_38800.componentWillUpdate = ((function (x38721_38800){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(((!((this__35722__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35722__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35731__auto___38802 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives.props(this__35722__auto__));
var next_ident__35732__auto___38803 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives._next_props(next_props__35723__auto__,this__35722__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35731__auto___38802,next_ident__35732__auto___38803)){
var idxr__35733__auto___38805 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35733__auto___38805 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35733__auto___38805),((function (idxr__35733__auto___38805,ident__35731__auto___38802,next_ident__35732__auto___38803,this__35722__auto__,x38721_38800){
return (function (indexes__35734__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35734__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35731__auto___38802], null),cljs.core.disj,this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35732__auto___38803], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35722__auto__);
});})(idxr__35733__auto___38805,ident__35731__auto___38802,next_ident__35732__auto___38803,this__35722__auto__,x38721_38800))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35722__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35722__auto__);
});})(x38721_38800))
;

x38721_38800.shouldComponentUpdate = ((function (x38721_38800){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35725__auto__ = next_props__35723__auto__.children;
var next_props__35723__auto____$1 = goog.object.get(next_props__35723__auto__,"fulcro$value");
var next_props__35723__auto____$2 = (function (){var G__38734 = next_props__35723__auto____$1;
if((next_props__35723__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__38734);
} else {
return G__38734;
}
})();
var current_props__35726__auto__ = fulcro.client.primitives.props(this__35722__auto__);
var next_props_stale_QMARK___35727__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35726__auto__) > fulcro.client.primitives.get_basis_time(next_props__35723__auto____$2));
var props_changed_QMARK___35728__auto__ = (!(next_props_stale_QMARK___35727__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35726__auto__,next_props__35723__auto____$2));
var state_changed_QMARK___35729__auto__ = (function (){var and__10793__auto__ = this__35722__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38736 = this__35722__auto__.state;
var G__38737 = "fulcro$state";
return goog.object.get(G__38736,G__38737);
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
});})(x38721_38800))
;

x38721_38800.componentWillUnmount = ((function (x38721_38800){
return (function (){
var this__35722__auto__ = this;
var r__35738__auto__ = fulcro.client.primitives.get_reconciler(this__35722__auto__);
var cfg__35739__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__35738__auto__);
var st__35740__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__35739__auto__);
var indexer__35737__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__35739__auto__);
goog.object.set(this__35722__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__10793__auto__ = !((st__35740__auto__ == null));
if(and__10793__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__35740__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,this__35722__auto__], null));
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__35740__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__35722__auto__], 0));
} else {
}

if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x38721_38800))
;

x38721_38800.componentDidUpdate = ((function (x38721_38800){
return (function (prev_props__35735__auto__,prev_state__35736__auto__){
var this__35722__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35722__auto__);
});})(x38721_38800))
;

x38721_38800.componentWillMount = ((function (x38721_38800){
return (function (){
var this__35722__auto__ = this;
var indexer__35737__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x38721_38800))
;

x38721_38800.render = ((function (x38721_38800){
return (function (){
var this__35721__auto__ = this;
var this$ = this__35721__auto__;
var _STAR_reconciler_STAR_38739 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38740 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_38741 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_38742 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_38743 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35721__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35721__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35721__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35721__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35721__auto__;

try{var props = fulcro.client.primitives.props(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.ui.common.Button);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,cljs.core.cst$kw$button.cljs$core$IFn$_invoke$arity$1(css)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)),fulcro.util.force_children(fulcro.client.primitives.children(this$))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_38743;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_38742;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_38741;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_38740;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38739;
}});})(x38721_38800))
;


com.wsscode.oge.ui.common.Button.prototype.constructor = com.wsscode.oge.ui.common.Button;

com.wsscode.oge.ui.common.Button.prototype.constructor.displayName = "com.wsscode.oge.ui.common/Button";

com.wsscode.oge.ui.common.Button.prototype.fulcro$isComponent = true;

var x38791_38830 = com.wsscode.oge.ui.common.Button;
x38791_38830.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x38791_38830.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x38791_38830){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$button,com.wsscode.oge.ui.common.css_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_hover,com.wsscode.oge.ui.common.css_button_hover], null)], null)], null);
});})(x38791_38830))
;

x38791_38830.fulcro_css$css$CSS$include_children$arity$1 = ((function (x38791_38830){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x38791_38830))
;


var x38792_38836 = com.wsscode.oge.ui.common.Button.prototype;
x38792_38836.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x38792_38836.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x38792_38836){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$button,com.wsscode.oge.ui.common.css_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_hover,com.wsscode.oge.ui.common.css_button_hover], null)], null)], null);
});})(x38792_38836))
;

x38792_38836.fulcro_css$css$CSS$include_children$arity$1 = ((function (x38792_38836){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x38792_38836))
;


com.wsscode.oge.ui.common.Button.cljs$lang$type = true;

com.wsscode.oge.ui.common.Button.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/Button";

com.wsscode.oge.ui.common.Button.cljs$lang$ctorPrWriter = (function (this__35870__auto__,writer__35871__auto__,opt__35872__auto__){
return cljs.core._write(writer__35871__auto__,"com.wsscode.oge.ui.common/Button");
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
var this__35867__auto__ = this;
React.Component.apply(this__35867__auto__,arguments);

if(!((this__35867__auto__.initLocalState == null))){
this__35867__auto__.state = this__35867__auto__.initLocalState();
} else {
this__35867__auto__.state = {};
}

return this__35867__auto__;
});

com.wsscode.oge.ui.common.TextField.prototype = goog.object.clone(React.Component.prototype);
}

var x38854_38966 = com.wsscode.oge.ui.common.TextField.prototype;
x38854_38966.componentDidMount = ((function (x38854_38966){
return (function (){
var this__35722__auto__ = this;
return goog.object.set(this__35722__auto__,"fulcro$mounted",true);
});})(x38854_38966))
;

x38854_38966.componentWillUpdate = ((function (x38854_38966){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(((!((this__35722__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35722__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35731__auto___38972 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives.props(this__35722__auto__));
var next_ident__35732__auto___38973 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives._next_props(next_props__35723__auto__,this__35722__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35731__auto___38972,next_ident__35732__auto___38973)){
var idxr__35733__auto___38974 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35733__auto___38974 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35733__auto___38974),((function (idxr__35733__auto___38974,ident__35731__auto___38972,next_ident__35732__auto___38973,this__35722__auto__,x38854_38966){
return (function (indexes__35734__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35734__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35731__auto___38972], null),cljs.core.disj,this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35732__auto___38973], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35722__auto__);
});})(idxr__35733__auto___38974,ident__35731__auto___38972,next_ident__35732__auto___38973,this__35722__auto__,x38854_38966))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35722__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35722__auto__);
});})(x38854_38966))
;

x38854_38966.shouldComponentUpdate = ((function (x38854_38966){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35725__auto__ = next_props__35723__auto__.children;
var next_props__35723__auto____$1 = goog.object.get(next_props__35723__auto__,"fulcro$value");
var next_props__35723__auto____$2 = (function (){var G__38859 = next_props__35723__auto____$1;
if((next_props__35723__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__38859);
} else {
return G__38859;
}
})();
var current_props__35726__auto__ = fulcro.client.primitives.props(this__35722__auto__);
var next_props_stale_QMARK___35727__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35726__auto__) > fulcro.client.primitives.get_basis_time(next_props__35723__auto____$2));
var props_changed_QMARK___35728__auto__ = (!(next_props_stale_QMARK___35727__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35726__auto__,next_props__35723__auto____$2));
var state_changed_QMARK___35729__auto__ = (function (){var and__10793__auto__ = this__35722__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38860 = this__35722__auto__.state;
var G__38861 = "fulcro$state";
return goog.object.get(G__38860,G__38861);
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
});})(x38854_38966))
;

x38854_38966.componentWillUnmount = ((function (x38854_38966){
return (function (){
var this__35722__auto__ = this;
var r__35738__auto__ = fulcro.client.primitives.get_reconciler(this__35722__auto__);
var cfg__35739__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__35738__auto__);
var st__35740__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__35739__auto__);
var indexer__35737__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__35739__auto__);
goog.object.set(this__35722__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__10793__auto__ = !((st__35740__auto__ == null));
if(and__10793__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__35740__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,this__35722__auto__], null));
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__35740__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__35722__auto__], 0));
} else {
}

if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x38854_38966))
;

x38854_38966.componentDidUpdate = ((function (x38854_38966){
return (function (prev_props__35735__auto__,prev_state__35736__auto__){
var this__35722__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35722__auto__);
});})(x38854_38966))
;

x38854_38966.componentWillMount = ((function (x38854_38966){
return (function (){
var this__35722__auto__ = this;
var indexer__35737__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x38854_38966))
;

x38854_38966.render = ((function (x38854_38966){
return (function (){
var this__35721__auto__ = this;
var this$ = this__35721__auto__;
var _STAR_reconciler_STAR_38898 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38899 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_38900 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_38901 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_38902 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35721__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35721__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35721__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35721__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35721__auto__;

try{var props = fulcro.client.primitives.props(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.ui.common.TextField);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$type,"text"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.oge.ui.helpers.expand_classes(css,cljs.core.cst$kw$com$wsscode$oge$ui$common_SLASH_classes.cljs$core$IFn$_invoke$arity$1(props)),props], 0))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_38902;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_38901;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_38900;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_38899;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38898;
}});})(x38854_38966))
;


com.wsscode.oge.ui.common.TextField.prototype.constructor = com.wsscode.oge.ui.common.TextField;

com.wsscode.oge.ui.common.TextField.prototype.constructor.displayName = "com.wsscode.oge.ui.common/TextField";

com.wsscode.oge.ui.common.TextField.prototype.fulcro$isComponent = true;

var x38945_38998 = com.wsscode.oge.ui.common.TextField;
x38945_38998.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x38945_38998.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x38945_38998){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,com.wsscode.oge.ui.common.css_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_focus,com.wsscode.oge.ui.common.css_input_focus], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#5cb85c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$warning,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#f0ad4e"], null)], null)], null)], null);
});})(x38945_38998))
;

x38945_38998.fulcro_css$css$CSS$include_children$arity$1 = ((function (x38945_38998){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x38945_38998))
;


var x38952_39010 = com.wsscode.oge.ui.common.TextField.prototype;
x38952_39010.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x38952_39010.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x38952_39010){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,com.wsscode.oge.ui.common.css_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND__COLON_focus,com.wsscode.oge.ui.common.css_input_focus], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#5cb85c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$warning,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_color,"#f0ad4e"], null)], null)], null)], null);
});})(x38952_39010))
;

x38952_39010.fulcro_css$css$CSS$include_children$arity$1 = ((function (x38952_39010){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x38952_39010))
;


com.wsscode.oge.ui.common.TextField.cljs$lang$type = true;

com.wsscode.oge.ui.common.TextField.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/TextField";

com.wsscode.oge.ui.common.TextField.cljs$lang$ctorPrWriter = (function (this__35870__auto__,writer__35871__auto__,opt__35872__auto__){
return cljs.core._write(writer__35871__auto__,"com.wsscode.oge.ui.common/TextField");
});
com.wsscode.oge.ui.common.text_field = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.common.TextField);
if(typeof com.wsscode.oge.ui.common.CSS !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.common.CSS = (function com$wsscode$oge$ui$common$CSS(){
var this__35867__auto__ = this;
React.Component.apply(this__35867__auto__,arguments);

if(!((this__35867__auto__.initLocalState == null))){
this__35867__auto__.state = this__35867__auto__.initLocalState();
} else {
this__35867__auto__.state = {};
}

return this__35867__auto__;
});

com.wsscode.oge.ui.common.CSS.prototype = goog.object.clone(React.Component.prototype);
}

var x39042_39077 = com.wsscode.oge.ui.common.CSS.prototype;
x39042_39077.componentDidMount = ((function (x39042_39077){
return (function (){
var this__35722__auto__ = this;
return goog.object.set(this__35722__auto__,"fulcro$mounted",true);
});})(x39042_39077))
;

x39042_39077.componentWillUpdate = ((function (x39042_39077){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(((!((this__35722__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35722__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35731__auto___39081 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives.props(this__35722__auto__));
var next_ident__35732__auto___39082 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives._next_props(next_props__35723__auto__,this__35722__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35731__auto___39081,next_ident__35732__auto___39082)){
var idxr__35733__auto___39086 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35733__auto___39086 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35733__auto___39086),((function (idxr__35733__auto___39086,ident__35731__auto___39081,next_ident__35732__auto___39082,this__35722__auto__,x39042_39077){
return (function (indexes__35734__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35734__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35731__auto___39081], null),cljs.core.disj,this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35732__auto___39082], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35722__auto__);
});})(idxr__35733__auto___39086,ident__35731__auto___39081,next_ident__35732__auto___39082,this__35722__auto__,x39042_39077))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35722__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35722__auto__);
});})(x39042_39077))
;

x39042_39077.shouldComponentUpdate = ((function (x39042_39077){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35725__auto__ = next_props__35723__auto__.children;
var next_props__35723__auto____$1 = goog.object.get(next_props__35723__auto__,"fulcro$value");
var next_props__35723__auto____$2 = (function (){var G__39045 = next_props__35723__auto____$1;
if((next_props__35723__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__39045);
} else {
return G__39045;
}
})();
var current_props__35726__auto__ = fulcro.client.primitives.props(this__35722__auto__);
var next_props_stale_QMARK___35727__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35726__auto__) > fulcro.client.primitives.get_basis_time(next_props__35723__auto____$2));
var props_changed_QMARK___35728__auto__ = (!(next_props_stale_QMARK___35727__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35726__auto__,next_props__35723__auto____$2));
var state_changed_QMARK___35729__auto__ = (function (){var and__10793__auto__ = this__35722__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__39046 = this__35722__auto__.state;
var G__39047 = "fulcro$state";
return goog.object.get(G__39046,G__39047);
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
});})(x39042_39077))
;

x39042_39077.componentWillUnmount = ((function (x39042_39077){
return (function (){
var this__35722__auto__ = this;
var r__35738__auto__ = fulcro.client.primitives.get_reconciler(this__35722__auto__);
var cfg__35739__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__35738__auto__);
var st__35740__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__35739__auto__);
var indexer__35737__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__35739__auto__);
goog.object.set(this__35722__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__10793__auto__ = !((st__35740__auto__ == null));
if(and__10793__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__35740__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,this__35722__auto__], null));
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__35740__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__35722__auto__], 0));
} else {
}

if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x39042_39077))
;

x39042_39077.componentDidUpdate = ((function (x39042_39077){
return (function (prev_props__35735__auto__,prev_state__35736__auto__){
var this__35722__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35722__auto__);
});})(x39042_39077))
;

x39042_39077.componentWillMount = ((function (x39042_39077){
return (function (){
var this__35722__auto__ = this;
var indexer__35737__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x39042_39077))
;


com.wsscode.oge.ui.common.CSS.prototype.constructor = com.wsscode.oge.ui.common.CSS;

com.wsscode.oge.ui.common.CSS.prototype.constructor.displayName = "com.wsscode.oge.ui.common/CSS";

com.wsscode.oge.ui.common.CSS.prototype.fulcro$isComponent = true;

var x39055_39120 = com.wsscode.oge.ui.common.CSS;
x39055_39120.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x39055_39120.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x39055_39120){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x39055_39120))
;

x39055_39120.fulcro_css$css$CSS$include_children$arity$1 = ((function (x39055_39120){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.Button,com.wsscode.oge.ui.common.TextField], null);
});})(x39055_39120))
;


var x39061_39125 = com.wsscode.oge.ui.common.CSS.prototype;
x39061_39125.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x39061_39125.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x39061_39125){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x39061_39125))
;

x39061_39125.fulcro_css$css$CSS$include_children$arity$1 = ((function (x39061_39125){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.Button,com.wsscode.oge.ui.common.TextField], null);
});})(x39061_39125))
;


com.wsscode.oge.ui.common.CSS.cljs$lang$type = true;

com.wsscode.oge.ui.common.CSS.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/CSS";

com.wsscode.oge.ui.common.CSS.cljs$lang$ctorPrWriter = (function (this__35870__auto__,writer__35871__auto__,opt__35872__auto__){
return cljs.core._write(writer__35871__auto__,"com.wsscode.oge.ui.common/CSS");
});

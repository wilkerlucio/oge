goog.provide('com.wsscode.oge.ui.common');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('com.wsscode.oge.ui.helpers');
goog.require('fulcro_css.css');
goog.require('fulcro.client.dom');
com.wsscode.oge.ui.common.css_button = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["1.25","#fff","center","middle","nowrap","1rem","all .2s ease-in-out","400","#0275d8","pointer",".5rem 1rem","#0275d8","inline-block","1px solid transparent",".25rem","none"]);
com.wsscode.oge.ui.common.css_button_hover = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#025aa5",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#01549b"], null);
if(typeof com.wsscode.oge.ui.common.Button !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.common.Button = (function com$wsscode$oge$ui$common$Button(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

com.wsscode.oge.ui.common.Button.prototype = goog.object.clone(React.Component.prototype);
}

var x47819_47845 = com.wsscode.oge.ui.common.Button.prototype;
x47819_47845.componentDidMount = ((function (x47819_47845){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x47819_47845))
;

x47819_47845.componentWillUpdate = ((function (x47819_47845){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___47848 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___47849 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___47848,next_ident__38531__auto___47849)){
var idxr__38532__auto___47852 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___47852 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___47852),((function (idxr__38532__auto___47852,ident__38530__auto___47848,next_ident__38531__auto___47849,this__38521__auto__,x47819_47845){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___47848], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___47849], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___47852,ident__38530__auto___47848,next_ident__38531__auto___47849,this__38521__auto__,x47819_47845))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x47819_47845))
;

x47819_47845.shouldComponentUpdate = ((function (x47819_47845){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__47823 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__47823);
} else {
return G__47823;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__47824 = this__38521__auto__.state;
var G__47825 = "fulcro$state";
return goog.object.get(G__47824,G__47825);
})(),goog.object.get(next_state__38523__auto__,"fulcro$state"));
} else {
return and__3911__auto__;
}
})();
var children_changed_QMARK___38529__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__38521__auto__.props.children,next_children__38524__auto__);
var or__3922__auto__ = props_changed_QMARK___38527__auto__;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = state_changed_QMARK___38528__auto__;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return children_changed_QMARK___38529__auto__;
}
}
}
});})(x47819_47845))
;

x47819_47845.componentWillUnmount = ((function (x47819_47845){
return (function (){
var this__38521__auto__ = this;
var r__38537__auto__ = fulcro.client.primitives.get_reconciler(this__38521__auto__);
var cfg__38538__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__38537__auto__);
var st__38539__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__38538__auto__);
var indexer__38536__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__38538__auto__);
goog.object.set(this__38521__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__38539__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__38539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__38521__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__38539__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__38521__auto__], 0));
} else {
}

if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x47819_47845))
;

x47819_47845.componentDidUpdate = ((function (x47819_47845){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x47819_47845))
;

x47819_47845.componentWillMount = ((function (x47819_47845){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x47819_47845))
;

x47819_47845.render = ((function (x47819_47845){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_47829 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47830 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_47831 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_47832 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_47833 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var props = fulcro.client.primitives.props(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.ui.common.Button);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(css)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)),fulcro.util.force_children(fulcro.client.primitives.children(this$))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_47833;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_47832;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_47831;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_47830;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47829;
}});})(x47819_47845))
;


com.wsscode.oge.ui.common.Button.prototype.constructor = com.wsscode.oge.ui.common.Button;

com.wsscode.oge.ui.common.Button.prototype.constructor.displayName = "com.wsscode.oge.ui.common/Button";

com.wsscode.oge.ui.common.Button.prototype.fulcro$isComponent = true;

var x47840_47894 = com.wsscode.oge.ui.common.Button;
x47840_47894.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x47840_47894.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x47840_47894){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".button",".button",48002398),com.wsscode.oge.ui.common.css_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),com.wsscode.oge.ui.common.css_button_hover], null)], null)], null);
});})(x47840_47894))
;

x47840_47894.fulcro_css$css$CSS$include_children$arity$1 = ((function (x47840_47894){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x47840_47894))
;


var x47841_47895 = com.wsscode.oge.ui.common.Button.prototype;
x47841_47895.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x47841_47895.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x47841_47895){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".button",".button",48002398),com.wsscode.oge.ui.common.css_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),com.wsscode.oge.ui.common.css_button_hover], null)], null)], null);
});})(x47841_47895))
;

x47841_47895.fulcro_css$css$CSS$include_children$arity$1 = ((function (x47841_47895){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x47841_47895))
;


com.wsscode.oge.ui.common.Button.cljs$lang$type = true;

com.wsscode.oge.ui.common.Button.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/Button";

com.wsscode.oge.ui.common.Button.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"com.wsscode.oge.ui.common/Button");
});
com.wsscode.oge.ui.common.button = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.common.Button);
com.wsscode.oge.ui.common.css_input = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background-clip","background-clip",1705503920),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["1.25","#464a4c","1rem","border-color ease-in-out .15s,box-shadow ease-in-out .15s","#fff","100%","padding-box","none",".5rem .75rem","block","1px solid rgba(0,0,0,.15)",".25rem"]);
com.wsscode.oge.ui.common.css_input_focus = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#464a4c",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#5cb3fd",new cljs.core.Keyword(null,"outline","outline",793464534),"0"], null);
if(typeof com.wsscode.oge.ui.common.TextField !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.common.TextField = (function com$wsscode$oge$ui$common$TextField(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

com.wsscode.oge.ui.common.TextField.prototype = goog.object.clone(React.Component.prototype);
}

var x47909_47939 = com.wsscode.oge.ui.common.TextField.prototype;
x47909_47939.componentDidMount = ((function (x47909_47939){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x47909_47939))
;

x47909_47939.componentWillUpdate = ((function (x47909_47939){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___47942 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___47943 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___47942,next_ident__38531__auto___47943)){
var idxr__38532__auto___47944 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___47944 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___47944),((function (idxr__38532__auto___47944,ident__38530__auto___47942,next_ident__38531__auto___47943,this__38521__auto__,x47909_47939){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___47942], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___47943], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___47944,ident__38530__auto___47942,next_ident__38531__auto___47943,this__38521__auto__,x47909_47939))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x47909_47939))
;

x47909_47939.shouldComponentUpdate = ((function (x47909_47939){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__47920 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__47920);
} else {
return G__47920;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__47922 = this__38521__auto__.state;
var G__47923 = "fulcro$state";
return goog.object.get(G__47922,G__47923);
})(),goog.object.get(next_state__38523__auto__,"fulcro$state"));
} else {
return and__3911__auto__;
}
})();
var children_changed_QMARK___38529__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__38521__auto__.props.children,next_children__38524__auto__);
var or__3922__auto__ = props_changed_QMARK___38527__auto__;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = state_changed_QMARK___38528__auto__;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return children_changed_QMARK___38529__auto__;
}
}
}
});})(x47909_47939))
;

x47909_47939.componentWillUnmount = ((function (x47909_47939){
return (function (){
var this__38521__auto__ = this;
var r__38537__auto__ = fulcro.client.primitives.get_reconciler(this__38521__auto__);
var cfg__38538__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__38537__auto__);
var st__38539__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__38538__auto__);
var indexer__38536__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__38538__auto__);
goog.object.set(this__38521__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__38539__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__38539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__38521__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__38539__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__38521__auto__], 0));
} else {
}

if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x47909_47939))
;

x47909_47939.componentDidUpdate = ((function (x47909_47939){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x47909_47939))
;

x47909_47939.componentWillMount = ((function (x47909_47939){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x47909_47939))
;

x47909_47939.render = ((function (x47909_47939){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_47931 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_47932 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_47933 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_47934 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_47935 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var props = fulcro.client.primitives.props(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.ui.common.TextField);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"type","type",1174270348),"text"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.oge.ui.helpers.expand_classes(css,new cljs.core.Keyword("com.wsscode.oge.ui.common","classes","com.wsscode.oge.ui.common/classes",884011983).cljs$core$IFn$_invoke$arity$1(props)),props], 0))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_47935;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_47934;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_47933;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_47932;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_47931;
}});})(x47909_47939))
;


com.wsscode.oge.ui.common.TextField.prototype.constructor = com.wsscode.oge.ui.common.TextField;

com.wsscode.oge.ui.common.TextField.prototype.constructor.displayName = "com.wsscode.oge.ui.common/TextField";

com.wsscode.oge.ui.common.TextField.prototype.fulcro$isComponent = true;

var x47936_47947 = com.wsscode.oge.ui.common.TextField;
x47936_47947.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x47936_47947.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x47936_47947){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".input",".input",-1804475321),com.wsscode.oge.ui.common.css_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:focus","&:focus",1074121139),com.wsscode.oge.ui.common.css_input_focus], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.success","&.success",503251929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#5cb85c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.warning","&.warning",-575617957),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#f0ad4e"], null)], null)], null)], null);
});})(x47936_47947))
;

x47936_47947.fulcro_css$css$CSS$include_children$arity$1 = ((function (x47936_47947){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x47936_47947))
;


var x47937_47948 = com.wsscode.oge.ui.common.TextField.prototype;
x47937_47948.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x47937_47948.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x47937_47948){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".input",".input",-1804475321),com.wsscode.oge.ui.common.css_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:focus","&:focus",1074121139),com.wsscode.oge.ui.common.css_input_focus], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.success","&.success",503251929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#5cb85c"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.warning","&.warning",-575617957),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#f0ad4e"], null)], null)], null)], null);
});})(x47937_47948))
;

x47937_47948.fulcro_css$css$CSS$include_children$arity$1 = ((function (x47937_47948){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x47937_47948))
;


com.wsscode.oge.ui.common.TextField.cljs$lang$type = true;

com.wsscode.oge.ui.common.TextField.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/TextField";

com.wsscode.oge.ui.common.TextField.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"com.wsscode.oge.ui.common/TextField");
});
com.wsscode.oge.ui.common.text_field = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.common.TextField);
if(typeof com.wsscode.oge.ui.common.CSS !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.common.CSS = (function com$wsscode$oge$ui$common$CSS(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

com.wsscode.oge.ui.common.CSS.prototype = goog.object.clone(React.Component.prototype);
}

var x47954_47961 = com.wsscode.oge.ui.common.CSS.prototype;
x47954_47961.componentDidMount = ((function (x47954_47961){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x47954_47961))
;

x47954_47961.componentWillUpdate = ((function (x47954_47961){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___47962 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___47963 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___47962,next_ident__38531__auto___47963)){
var idxr__38532__auto___47964 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___47964 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___47964),((function (idxr__38532__auto___47964,ident__38530__auto___47962,next_ident__38531__auto___47963,this__38521__auto__,x47954_47961){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___47962], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___47963], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___47964,ident__38530__auto___47962,next_ident__38531__auto___47963,this__38521__auto__,x47954_47961))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x47954_47961))
;

x47954_47961.shouldComponentUpdate = ((function (x47954_47961){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__47956 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__47956);
} else {
return G__47956;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__47957 = this__38521__auto__.state;
var G__47958 = "fulcro$state";
return goog.object.get(G__47957,G__47958);
})(),goog.object.get(next_state__38523__auto__,"fulcro$state"));
} else {
return and__3911__auto__;
}
})();
var children_changed_QMARK___38529__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__38521__auto__.props.children,next_children__38524__auto__);
var or__3922__auto__ = props_changed_QMARK___38527__auto__;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = state_changed_QMARK___38528__auto__;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return children_changed_QMARK___38529__auto__;
}
}
}
});})(x47954_47961))
;

x47954_47961.componentWillUnmount = ((function (x47954_47961){
return (function (){
var this__38521__auto__ = this;
var r__38537__auto__ = fulcro.client.primitives.get_reconciler(this__38521__auto__);
var cfg__38538__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__38537__auto__);
var st__38539__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__38538__auto__);
var indexer__38536__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__38538__auto__);
goog.object.set(this__38521__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__38539__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__38539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__38521__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__38539__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__38521__auto__], 0));
} else {
}

if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x47954_47961))
;

x47954_47961.componentDidUpdate = ((function (x47954_47961){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x47954_47961))
;

x47954_47961.componentWillMount = ((function (x47954_47961){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x47954_47961))
;


com.wsscode.oge.ui.common.CSS.prototype.constructor = com.wsscode.oge.ui.common.CSS;

com.wsscode.oge.ui.common.CSS.prototype.constructor.displayName = "com.wsscode.oge.ui.common/CSS";

com.wsscode.oge.ui.common.CSS.prototype.fulcro$isComponent = true;

var x47959_47965 = com.wsscode.oge.ui.common.CSS;
x47959_47965.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x47959_47965.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x47959_47965){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x47959_47965))
;

x47959_47965.fulcro_css$css$CSS$include_children$arity$1 = ((function (x47959_47965){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.Button,com.wsscode.oge.ui.common.TextField], null);
});})(x47959_47965))
;


var x47960_47966 = com.wsscode.oge.ui.common.CSS.prototype;
x47960_47966.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x47960_47966.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x47960_47966){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x47960_47966))
;

x47960_47966.fulcro_css$css$CSS$include_children$arity$1 = ((function (x47960_47966){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.Button,com.wsscode.oge.ui.common.TextField], null);
});})(x47960_47966))
;


com.wsscode.oge.ui.common.CSS.cljs$lang$type = true;

com.wsscode.oge.ui.common.CSS.cljs$lang$ctorStr = "com.wsscode.oge.ui.common/CSS";

com.wsscode.oge.ui.common.CSS.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"com.wsscode.oge.ui.common/CSS");
});

//# sourceMappingURL=com.wsscode.oge.ui.common.js.map

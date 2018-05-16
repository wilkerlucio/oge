goog.provide('fulcro.inspect.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('goog.functions');
goog.require('goog.object');
goog.require('fulcro.client');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.network');
goog.require('fulcro.inspect.helpers');
goog.require('fulcro.inspect.lib.local_storage');
goog.require('fulcro.inspect.ui.data_history');
goog.require('fulcro.inspect.ui.dom_history_viewer');
goog.require('fulcro.inspect.ui.inspector');
goog.require('fulcro.inspect.ui.multi_inspector');
goog.require('fulcro.inspect.ui.events');
goog.require('fulcro.inspect.ui.element');
goog.require('fulcro.inspect.ui.network');
goog.require('fulcro.inspect.ui.transactions');
goog.require('fulcro_css.css');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
goog.require('fulcro.inspect.ui.helpers');
fulcro.inspect.core.set_style_BANG_ = (function fulcro$inspect$core$set_style_BANG_(node,prop,value){
var G__46191 = goog.object.get(node,"style");
var G__46192 = prop;
var G__46193 = value;
return goog.object.set(G__46191,G__46192,G__46193);
});
fulcro.inspect.core.update_frame_content = (function fulcro$inspect$core$update_frame_content(this$,child){
var frame_component = goog.object.get(this$,"frame-component");
if(cljs.core.truth_(frame_component)){
return ReactDOM.render(child,frame_component);
} else {
return null;
}
});
fulcro.inspect.core.start_frame = (function fulcro$inspect$core$start_frame(this$){
var frame_body = ReactDOM.findDOMNode(this$).contentDocument.body;
var map__46194 = fulcro.client.primitives.props(this$);
var map__46194__$1 = ((((!((map__46194 == null)))?(((((map__46194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46194):map__46194);
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46194__$1,new cljs.core.Keyword(null,"child","child",623967545));
var e1 = document.createElement("div");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(function (){var G__46196 = frame_body;
var G__46197 = ["children","length"];
return goog.object.getValueByKeys(G__46196,G__46197);
})())){
frame_body.appendChild(e1);

goog.object.set(this$,"frame-component",e1);

return fulcro.inspect.core.update_frame_content(this$,child);
} else {
return null;
}
});
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.core.IFrame = (function fulcro$inspect$core$IFrame(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.core.IFrame.prototype = goog.object.clone(React.Component.prototype);

var x46200_46216 = fulcro.inspect.core.IFrame.prototype;
x46200_46216.componentWillUpdate = ((function (x46200_46216){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___46217 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___46218 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___46217,next_ident__38531__auto___46218)){
var idxr__38532__auto___46219 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___46219 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___46219),((function (idxr__38532__auto___46219,ident__38530__auto___46217,next_ident__38531__auto___46218,this__38521__auto__,x46200_46216){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___46217], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___46218], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___46219,ident__38530__auto___46217,next_ident__38531__auto___46218,this__38521__auto__,x46200_46216))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x46200_46216))
;

x46200_46216.shouldComponentUpdate = ((function (x46200_46216){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__46202 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__46202);
} else {
return G__46202;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46203 = this__38521__auto__.state;
var G__46204 = "fulcro$state";
return goog.object.get(G__46203,G__46204);
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
});})(x46200_46216))
;

x46200_46216.componentWillMount = ((function (x46200_46216){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x46200_46216))
;

x46200_46216.componentDidMount = ((function (x46200_46216){
return (function (){
var this__38511__auto__ = this;
var this$ = this__38511__auto__;
var reconciler__38512__auto__ = fulcro.client.primitives.get_reconciler(this__38511__auto__);
var lifecycle__38513__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__38512__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
goog.object.set(this__38511__auto__,"fulcro$mounted",true);

if((lifecycle__38513__auto__ == null)){
} else {
var G__46205_46220 = this__38511__auto__;
var G__46206_46221 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__38513__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__38513__auto__.cljs$core$IFn$_invoke$arity$2(G__46205_46220,G__46206_46221) : lifecycle__38513__auto__.call(null,G__46205_46220,G__46206_46221));
}

return fulcro.inspect.core.start_frame(this$);
});})(x46200_46216))
;

x46200_46216.componentDidUpdate = ((function (x46200_46216){
return (function (prev_props__38506__auto__,prev_state__38507__auto__){
var this__38505__auto__ = this;
var this$ = this__38505__auto__;
var _ = fulcro.client.primitives._prev_props(prev_props__38506__auto__,this__38505__auto__);
var ___$1 = goog.object.get(prev_state__38507__auto__,"fulcro$previousState");
var child_46222 = new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
fulcro.inspect.core.update_frame_content(this$,child_46222);

return fulcro.client.primitives.clear_prev_props_BANG_(this__38505__auto__);
});})(x46200_46216))
;

x46200_46216.componentWillUnmount = ((function (x46200_46216){
return (function (){
var this__38514__auto__ = this;
var this$ = this__38514__auto__;
var reconciler__38515__auto__ = fulcro.client.primitives.get_reconciler(this__38514__auto__);
var lifecycle__38516__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__38515__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__38517__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__38515__auto__);
var st__38518__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__38517__auto__);
var indexer__38519__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__38517__auto__);
goog.object.set(this__38514__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__38518__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__38518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__38514__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__38518__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__38514__auto__], 0));
} else {
}

if((lifecycle__38516__auto__ == null)){
} else {
var G__46207_46223 = this__38514__auto__;
var G__46208_46224 = new cljs.core.Keyword(null,"unmount","unmount",-1779083333);
(lifecycle__38516__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__38516__auto__.cljs$core$IFn$_invoke$arity$2(G__46207_46223,G__46208_46224) : lifecycle__38516__auto__.call(null,G__46207_46223,G__46208_46224));
}

if((indexer__38519__auto__ == null)){
} else {
fulcro.client.impl.protocols.drop_component_BANG_(indexer__38519__auto__,this__38514__auto__);
}

var frame_component = goog.object.get(this$,"frame-component");
return ReactDOM.unmountComponentAtNode(frame_component);
});})(x46200_46216))
;

x46200_46216.render = ((function (x46200_46216){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_46209 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46210 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_46211 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_46212 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_46213 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.props(this$),new cljs.core.Keyword(null,"child","child",623967545)),new cljs.core.Keyword(null,"onLoad","onLoad",-1227893830),((function (_STAR_reconciler_STAR_46209,_STAR_depth_STAR_46210,_STAR_shared_STAR_46211,_STAR_instrument_STAR_46212,_STAR_parent_STAR_46213,this$,this__38520__auto__,x46200_46216){
return (function (){
return fulcro.inspect.core.start_frame(this$);
});})(_STAR_reconciler_STAR_46209,_STAR_depth_STAR_46210,_STAR_shared_STAR_46211,_STAR_instrument_STAR_46212,_STAR_parent_STAR_46213,this$,this__38520__auto__,x46200_46216))
))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_46213;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_46212;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_46211;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_46210;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46209;
}});})(x46200_46216))
;


fulcro.inspect.core.IFrame.prototype.constructor = fulcro.inspect.core.IFrame;

fulcro.inspect.core.IFrame.prototype.constructor.displayName = "fulcro.inspect.core/IFrame";

fulcro.inspect.core.IFrame.prototype.fulcro$isComponent = true;

var x46214_46225 = fulcro.inspect.core.IFrame;


var x46215_46226 = fulcro.inspect.core.IFrame.prototype;


fulcro.inspect.core.IFrame.cljs$lang$type = true;

fulcro.inspect.core.IFrame.cljs$lang$ctorStr = "fulcro.inspect.core/IFrame";

fulcro.inspect.core.IFrame.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.core/IFrame");
});
var factory_46228 = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.core.IFrame);
fulcro.inspect.core.ui_iframe = ((function (factory_46228){
return (function fulcro$inspect$core$ui_iframe(props,child){
var G__46227 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"child","child",623967545),child);
return (factory_46228.cljs$core$IFn$_invoke$arity$1 ? factory_46228.cljs$core$IFn$_invoke$arity$1(G__46227) : factory_46228.call(null,G__46227));
});})(factory_46228))
;
if(typeof fulcro.inspect.core.GlobalInspector !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.core.GlobalInspector = (function fulcro$inspect$core$GlobalInspector(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.core.GlobalInspector.prototype = goog.object.clone(React.Component.prototype);
}

var x46238_46279 = fulcro.inspect.core.GlobalInspector.prototype;
x46238_46279.componentWillUpdate = ((function (x46238_46279){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___46280 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___46281 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___46280,next_ident__38531__auto___46281)){
var idxr__38532__auto___46282 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___46282 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___46282),((function (idxr__38532__auto___46282,ident__38530__auto___46280,next_ident__38531__auto___46281,this__38521__auto__,x46238_46279){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___46280], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___46281], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___46282,ident__38530__auto___46280,next_ident__38531__auto___46281,this__38521__auto__,x46238_46279))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x46238_46279))
;

x46238_46279.shouldComponentUpdate = ((function (x46238_46279){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__46240 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__46240);
} else {
return G__46240;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46241 = this__38521__auto__.state;
var G__46242 = "fulcro$state";
return goog.object.get(G__46241,G__46242);
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
});})(x46238_46279))
;

x46238_46279.componentWillUnmount = ((function (x46238_46279){
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
});})(x46238_46279))
;

x46238_46279.componentWillMount = ((function (x46238_46279){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x46238_46279))
;

x46238_46279.componentDidMount = ((function (x46238_46279){
return (function (){
var this__38511__auto__ = this;
var this$ = this__38511__auto__;
var reconciler__38512__auto__ = fulcro.client.primitives.get_reconciler(this__38511__auto__);
var lifecycle__38513__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__38512__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
goog.object.set(this__38511__auto__,"fulcro$mounted",true);

if((lifecycle__38513__auto__ == null)){
} else {
var G__46243_46283 = this__38511__auto__;
var G__46244_46284 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__38513__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__38513__auto__.cljs$core$IFn$_invoke$arity$2(G__46243_46283,G__46244_46284) : lifecycle__38513__auto__.call(null,G__46243_46283,G__46244_46284));
}

var G__46245_46285 = this$;
var G__46246_46286 = "frame-dom";
var G__46247_46287 = ReactDOM.findDOMNode(goog.object.get(this$,"frame-node"));
goog.object.set(G__46245_46285,G__46246_46286,G__46247_46287);

var G__46248 = this$;
var G__46249 = "resize-debouncer";
var G__46250 = (function (){var G__46251 = ((function (G__46248,G__46249,this$,reconciler__38512__auto__,lifecycle__38513__auto__,this__38511__auto__,x46238_46279){
return (function (p1__46229_SHARP_){
return fulcro.inspect.helpers.persistent_set_BANG_(this$,new cljs.core.Keyword("ui","size","ui/size",1098726147),new cljs.core.Keyword("fulcro.inspect.core","dock-size","fulcro.inspect.core/dock-size",1379842751),p1__46229_SHARP_);
});})(G__46248,G__46249,this$,reconciler__38512__auto__,lifecycle__38513__auto__,this__38511__auto__,x46238_46279))
;
var G__46252 = (300);
return goog.functions.debounce(G__46251,G__46252);
})();
return goog.object.set(G__46248,G__46249,G__46250);
});})(x46238_46279))
;

x46238_46279.componentDidUpdate = ((function (x46238_46279){
return (function (prev_props__38506__auto__,prev_state__38507__auto__){
var this__38505__auto__ = this;
var this$ = this__38505__auto__;
var _ = fulcro.client.primitives._prev_props(prev_props__38506__auto__,this__38505__auto__);
var ___$1 = goog.object.get(prev_state__38507__auto__,"fulcro$previousState");
var G__46253_46288 = this$;
var G__46254_46289 = "frame-dom";
var G__46255_46290 = ReactDOM.findDOMNode(goog.object.get(this$,"frame-node"));
goog.object.set(G__46253_46288,G__46254_46289,G__46255_46290);

return fulcro.client.primitives.clear_prev_props_BANG_(this__38505__auto__);
});})(x46238_46279))
;

x46238_46279.render = ((function (x46238_46279){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_46256 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46257 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_46258 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_46259 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_46260 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__46261 = fulcro.client.primitives.props(this$);
var map__46261__$1 = ((((!((map__46261 == null)))?(((((map__46261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46261):map__46261);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46261__$1,new cljs.core.Keyword("ui","size","ui/size",1098726147));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46261__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var inspector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46261__$1,new cljs.core.Keyword("ui","inspector","ui/inspector",1532867636));
var historical_dom_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46261__$1,new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860));
var dock_side = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46261__$1,new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160));
var map__46262 = inspector;
var map__46262__$1 = ((((!((map__46262 == null)))?(((((map__46262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46262):map__46262);
var current_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46262__$1,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924));
var app = new cljs.core.Keyword("fulcro.inspect.ui.inspector","target-app","fulcro.inspect.ui.inspector/target-app",1521628481).cljs$core$IFn$_invoke$arity$1(current_app);
var keystroke = (function (){var or__3922__auto__ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"launch-keystroke","launch-keystroke",1925423288)], null));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "ctrl-f";
}
})();
var size__$1 = (function (){var or__3922__auto__ = size;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (50);
}
})();
var css = fulcro_css.css.get_classnames(fulcro.inspect.core.GlobalInspector);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__46265 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.events","action","fulcro.inspect.ui.events/action",-487804538),((function (map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (){
return fulcro.inspect.helpers.persistent_set_BANG_(this$,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),new cljs.core.Keyword("fulcro.inspect.core","dock-visible?","fulcro.inspect.core/dock-visible?",-1200481470),cljs.core.not(visible_QMARK_));
});})(map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
,new cljs.core.Keyword("fulcro.inspect.ui.events","keystroke","fulcro.inspect.ui.events/keystroke",624751047),keystroke], null);
return (fulcro.inspect.ui.events.key_listener.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.events.key_listener.cljs$core$IFn$_invoke$arity$1(G__46265) : fulcro.inspect.ui.events.key_listener.call(null,G__46265));
})()),fulcro.util.force_children((function (){var G__46266 = fulcro.client.primitives.computed(historical_dom_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target-app","target-app",876281807),app], null));
return (fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.cljs$core$IFn$_invoke$arity$1(G__46266) : fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view.call(null,G__46266));
})()),fulcro.util.force_children((cljs.core.truth_(visible_QMARK_)?(function (){var G__46267 = dock_side;
var G__46267__$1 = (((G__46267 instanceof cljs.core.Keyword))?G__46267.fqn:null);
switch (G__46267__$1) {
case "fulcro.inspect.core/dock-right":
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resizer","resizer",1358802315).cljs$core$IFn$_invoke$arity$1(css))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resizer-horizontal","resizer-horizontal",-1425242580).cljs$core$IFn$_invoke$arity$1(css))].join(''), "ref": ((function (G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (p1__46230_SHARP_){
return goog.object.set(this$,"resizer",p1__46230_SHARP_);
});})(G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
, "style": ({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size__$1),"%"].join('')}), "onMouseDown": ((function (G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (_){
var handler = ((function (G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (e){
var mouse = e.clientX;
var vw = window.innerWidth;
var pos = ((mouse / vw) * (100));
if((pos > (0))){
fulcro.inspect.core.set_style_BANG_(goog.object.get(this$,"resizer"),"left",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos),"%"].join(''));

fulcro.inspect.core.set_style_BANG_(goog.object.get(this$,"container"),"width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - pos)),"%"].join(''));

var fexpr__46268 = goog.object.get(this$,"resize-debouncer");
return (fexpr__46268.cljs$core$IFn$_invoke$arity$1 ? fexpr__46268.cljs$core$IFn$_invoke$arity$1(pos) : fexpr__46268.call(null,pos));
} else {
return null;
}
});})(G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
;
var frame = ReactDOM.findDOMNode(goog.object.get(this$,"frame-node"));
fulcro.inspect.core.set_style_BANG_(frame,"pointerEvents","none");

document.addEventListener("mousemove",handler);

return document.addEventListener("mouseup",((function (handler,frame,G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (e){
var G__46269_46296 = frame.style;
var G__46270_46297 = "pointerEvents";
var G__46271_46298 = "initial";
goog.object.set(G__46269_46296,G__46270_46297,G__46271_46298);

return document.removeEventListener("mousemove",handler);
});})(handler,frame,G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
);
});})(G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
})]);

break;
case "fulcro.inspect.core/dock-bottom":
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resizer","resizer",1358802315).cljs$core$IFn$_invoke$arity$1(css))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resizer-vertical","resizer-vertical",11610718).cljs$core$IFn$_invoke$arity$1(css))].join(''), "ref": ((function (G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (p1__46231_SHARP_){
return goog.object.set(this$,"resizer",p1__46231_SHARP_);
});})(G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
, "style": ({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size__$1),"%"].join('')}), "onMouseDown": ((function (G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (_){
var handler = ((function (G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (e){
var mouse = e.clientY;
var vh = window.innerHeight;
var pos = ((mouse / vh) * (100));
if((pos > (0))){
fulcro.inspect.core.set_style_BANG_(goog.object.get(this$,"resizer"),"top",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos),"%"].join(''));

fulcro.inspect.core.set_style_BANG_(goog.object.get(this$,"container"),"height",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - pos)),"%"].join(''));

var fexpr__46272 = goog.object.get(this$,"resize-debouncer");
return (fexpr__46272.cljs$core$IFn$_invoke$arity$1 ? fexpr__46272.cljs$core$IFn$_invoke$arity$1(pos) : fexpr__46272.call(null,pos));
} else {
return null;
}
});})(G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
;
var frame = ReactDOM.findDOMNode(goog.object.get(this$,"frame-node"));
fulcro.inspect.core.set_style_BANG_(frame,"pointerEvents","none");

document.addEventListener("mousemove",handler);

return document.addEventListener("mouseup",((function (handler,frame,G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (e){
var G__46273_46301 = frame.style;
var G__46274_46302 = "pointerEvents";
var G__46275_46303 = "initial";
goog.object.set(G__46273_46301,G__46274_46302,G__46275_46303);

return document.removeEventListener("mousemove",handler);
});})(handler,frame,G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
);
});})(G__46267,G__46267__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
})]);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46267__$1)].join('')));

}
})():null)),fulcro.util.force_children((cljs.core.truth_(visible_QMARK_)?(function (){var G__46276 = dock_side;
var G__46276__$1 = (((G__46276 instanceof cljs.core.Keyword))?G__46276.fqn:null);
switch (G__46276__$1) {
case "fulcro.inspect.core/dock-right":
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container-right","container-right",-919268144).cljs$core$IFn$_invoke$arity$1(css))].join(''), "style": ({"width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - size__$1)),"%"].join('')}), "ref": ((function (G__46276,G__46276__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (p1__46232_SHARP_){
return goog.object.set(this$,"container",p1__46232_SHARP_);
});})(G__46276,G__46276__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
}),fulcro.util.force_children(fulcro.inspect.core.ui_iframe(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"ref","ref",1289896967),((function (G__46276,G__46276__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (p1__46233_SHARP_){
return goog.object.set(this$,"frame-node",p1__46233_SHARP_);
});})(G__46276,G__46276__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
], null),(fulcro.inspect.ui.multi_inspector.multi_inspector.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.multi_inspector.multi_inspector.cljs$core$IFn$_invoke$arity$1(inspector) : fulcro.inspect.ui.multi_inspector.multi_inspector.call(null,inspector))))]);

break;
case "fulcro.inspect.core/dock-bottom":
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container-bottom","container-bottom",1411816202).cljs$core$IFn$_invoke$arity$1(css))].join(''), "style": ({"height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - size__$1)),"%"].join('')}), "ref": ((function (G__46276,G__46276__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (p1__46234_SHARP_){
return goog.object.set(this$,"container",p1__46234_SHARP_);
});})(G__46276,G__46276__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
}),fulcro.util.force_children(fulcro.inspect.core.ui_iframe(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"ref","ref",1289896967),((function (G__46276,G__46276__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279){
return (function (p1__46235_SHARP_){
return goog.object.set(this$,"frame-node",p1__46235_SHARP_);
});})(G__46276,G__46276__$1,map__46261,map__46261__$1,size,visible_QMARK_,inspector,historical_dom_view,dock_side,map__46262,map__46262__$1,current_app,app,keystroke,size__$1,css,_STAR_reconciler_STAR_46256,_STAR_depth_STAR_46257,_STAR_shared_STAR_46258,_STAR_instrument_STAR_46259,_STAR_parent_STAR_46260,this$,this__38520__auto__,x46238_46279))
], null),(fulcro.inspect.ui.multi_inspector.multi_inspector.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.multi_inspector.multi_inspector.cljs$core$IFn$_invoke$arity$1(inspector) : fulcro.inspect.ui.multi_inspector.multi_inspector.call(null,inspector))))]);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46276__$1)].join('')));

}
})():null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_46260;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_46259;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_46258;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_46257;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46256;
}});})(x46238_46279))
;


fulcro.inspect.core.GlobalInspector.prototype.constructor = fulcro.inspect.core.GlobalInspector;

fulcro.inspect.core.GlobalInspector.prototype.constructor.displayName = "fulcro.inspect.core/GlobalInspector";

fulcro.inspect.core.GlobalInspector.prototype.fulcro$isComponent = true;

var x46277_46305 = fulcro.inspect.core.GlobalInspector;
x46277_46305.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x46277_46305.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x46277_46305){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("ui","size","ui/size",1098726147),fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.inspect.core","dock-size","fulcro.inspect.core/dock-size",1379842751),(50)),new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160),fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.inspect.core","dock-side","fulcro.inspect.core/dock-side",-999703424),new cljs.core.Keyword("fulcro.inspect.core","dock-right","fulcro.inspect.core/dock-right",1966122867)),new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.inspect.core","dock-visible?","fulcro.inspect.core/dock-visible?",-1200481470),false),new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("ui","inspector","ui/inspector",1532867636),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.multi_inspector.MultiInspector,params)], null);
});})(x46277_46305))
;

x46277_46305.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x46277_46305.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x46277_46305){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null);
});})(x46277_46305))
;

x46277_46305.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x46277_46305.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x46277_46305){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","inspector","ui/inspector",1532867636),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.multi_inspector.MultiInspector)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView)], null),new cljs.core.Keyword("ui","size","ui/size",1098726147),new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160)], null);
});})(x46277_46305))
;

x46277_46305.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x46277_46305.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x46277_46305){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgba(0, 0, 0, 0.3) 0px 0px 4px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"9999999"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container-right",".container-right",-324246500),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0",new cljs.core.Keyword(null,"width","width",-384071477),"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container-bottom",".container-bottom",1591702432),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resizer",".resizer",1680442843),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"99999"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resizer-horizontal",".resizer-horizontal",950701679),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ew-resize",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-5px",new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resizer-vertical",".resizer-vertical",-1226316396),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ns-resize",new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-5px",new cljs.core.Keyword(null,"height","height",1025178622),"10px",new cljs.core.Keyword(null,"right","right",-452581833),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".frame",".frame",-1990123647),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"border","border",1444987323),"0"], null)], null)], null);
});})(x46277_46305))
;

x46277_46305.fulcro_css$css$CSS$include_children$arity$1 = ((function (x46277_46305){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.element.MarkerCSS,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null);
});})(x46277_46305))
;


var x46278_46306 = fulcro.inspect.core.GlobalInspector.prototype;
x46278_46306.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x46278_46306.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x46278_46306){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("ui","size","ui/size",1098726147),fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.inspect.core","dock-size","fulcro.inspect.core/dock-size",1379842751),(50)),new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160),fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.inspect.core","dock-side","fulcro.inspect.core/dock-side",-999703424),new cljs.core.Keyword("fulcro.inspect.core","dock-right","fulcro.inspect.core/dock-right",1966122867)),new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.inspect.core","dock-visible?","fulcro.inspect.core/dock-visible?",-1200481470),false),new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("ui","inspector","ui/inspector",1532867636),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.multi_inspector.MultiInspector,params)], null);
});})(x46278_46306))
;

x46278_46306.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x46278_46306.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x46278_46306){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null);
});})(x46278_46306))
;

x46278_46306.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x46278_46306.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x46278_46306){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","inspector","ui/inspector",1532867636),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.multi_inspector.MultiInspector)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView)], null),new cljs.core.Keyword("ui","size","ui/size",1098726147),new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160)], null);
});})(x46278_46306))
;

x46278_46306.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x46278_46306.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x46278_46306){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgba(0, 0, 0, 0.3) 0px 0px 4px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"9999999"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container-right",".container-right",-324246500),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0",new cljs.core.Keyword(null,"width","width",-384071477),"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container-bottom",".container-bottom",1591702432),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resizer",".resizer",1680442843),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"99999"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resizer-horizontal",".resizer-horizontal",950701679),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ew-resize",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-5px",new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resizer-vertical",".resizer-vertical",-1226316396),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ns-resize",new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-5px",new cljs.core.Keyword(null,"height","height",1025178622),"10px",new cljs.core.Keyword(null,"right","right",-452581833),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".frame",".frame",-1990123647),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"border","border",1444987323),"0"], null)], null)], null);
});})(x46278_46306))
;

x46278_46306.fulcro_css$css$CSS$include_children$arity$1 = ((function (x46278_46306){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.element.MarkerCSS,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView], null);
});})(x46278_46306))
;


fulcro.inspect.core.GlobalInspector.cljs$lang$type = true;

fulcro.inspect.core.GlobalInspector.cljs$lang$ctorStr = "fulcro.inspect.core/GlobalInspector";

fulcro.inspect.core.GlobalInspector.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.core/GlobalInspector");
});
fulcro.inspect.core.global_inspector_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.core.GlobalInspector);
if(typeof fulcro.inspect.core.GlobalRoot !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.core.GlobalRoot = (function fulcro$inspect$core$GlobalRoot(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.core.GlobalRoot.prototype = goog.object.clone(React.Component.prototype);
}

var x46314_46346 = fulcro.inspect.core.GlobalRoot.prototype;
x46314_46346.componentDidMount = ((function (x46314_46346){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x46314_46346))
;

x46314_46346.componentWillUpdate = ((function (x46314_46346){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___46347 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___46348 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___46347,next_ident__38531__auto___46348)){
var idxr__38532__auto___46349 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___46349 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___46349),((function (idxr__38532__auto___46349,ident__38530__auto___46347,next_ident__38531__auto___46348,this__38521__auto__,x46314_46346){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___46347], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___46348], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___46349,ident__38530__auto___46347,next_ident__38531__auto___46348,this__38521__auto__,x46314_46346))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x46314_46346))
;

x46314_46346.shouldComponentUpdate = ((function (x46314_46346){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__46322 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__46322);
} else {
return G__46322;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46324 = this__38521__auto__.state;
var G__46325 = "fulcro$state";
return goog.object.get(G__46324,G__46325);
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
});})(x46314_46346))
;

x46314_46346.componentWillUnmount = ((function (x46314_46346){
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
});})(x46314_46346))
;

x46314_46346.componentDidUpdate = ((function (x46314_46346){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x46314_46346))
;

x46314_46346.componentWillMount = ((function (x46314_46346){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x46314_46346))
;

x46314_46346.render = ((function (x46314_46346){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_46329 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46330 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_46331 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_46332 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_46333 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__46336 = fulcro.client.primitives.props(this$);
var map__46336__$1 = ((((!((map__46336 == null)))?(((((map__46336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46336):map__46336);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46336__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46336__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
return fulcro.client.dom.macro_create_element_STAR_(["div",({"key": react_key}),fulcro.util.force_children((fulcro.inspect.core.global_inspector_view.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.core.global_inspector_view.cljs$core$IFn$_invoke$arity$1(root) : fulcro.inspect.core.global_inspector_view.call(null,root)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_46333;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_46332;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_46331;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_46330;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46329;
}});})(x46314_46346))
;


fulcro.inspect.core.GlobalRoot.prototype.constructor = fulcro.inspect.core.GlobalRoot;

fulcro.inspect.core.GlobalRoot.prototype.constructor.displayName = "fulcro.inspect.core/GlobalRoot";

fulcro.inspect.core.GlobalRoot.prototype.fulcro$isComponent = true;

var x46338_46371 = fulcro.inspect.core.GlobalRoot;
x46338_46371.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x46338_46371.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x46338_46371){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),cljs.core.random_uuid(),new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(fulcro.inspect.core.GlobalInspector,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x46338_46371))
;

x46338_46371.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x46338_46371.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x46338_46371){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.core.GlobalInspector)], null)], null);
});})(x46338_46371))
;

x46338_46371.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x46338_46371.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x46338_46371){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x46338_46371))
;

x46338_46371.fulcro_css$css$CSS$include_children$arity$1 = ((function (x46338_46371){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.core.GlobalInspector], null);
});})(x46338_46371))
;


var x46341_46372 = fulcro.inspect.core.GlobalRoot.prototype;
x46341_46372.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x46341_46372.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x46341_46372){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),cljs.core.random_uuid(),new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(fulcro.inspect.core.GlobalInspector,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x46341_46372))
;

x46341_46372.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x46341_46372.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x46341_46372){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.core.GlobalInspector)], null)], null);
});})(x46341_46372))
;

x46341_46372.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x46341_46372.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x46341_46372){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x46341_46372))
;

x46341_46372.fulcro_css$css$CSS$include_children$arity$1 = ((function (x46341_46372){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.core.GlobalInspector], null);
});})(x46341_46372))
;


fulcro.inspect.core.GlobalRoot.cljs$lang$type = true;

fulcro.inspect.core.GlobalRoot.cljs$lang$ctorStr = "fulcro.inspect.core/GlobalRoot";

fulcro.inspect.core.GlobalRoot.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.core/GlobalRoot");
});
if(typeof fulcro.inspect.core.global_inspector_STAR_ !== 'undefined'){
} else {
fulcro.inspect.core.global_inspector_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
fulcro.inspect.core.start_global_inspector = (function fulcro$inspect$core$start_global_inspector(options){
var app = fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),options], null)], 0));
var node = document.createElement("div");
document.body.appendChild(node);

fulcro_css.css.upsert_css("fulcro.inspector",fulcro.inspect.core.GlobalRoot);

return fulcro.client.mount(app,fulcro.inspect.core.GlobalRoot,node);
});
fulcro.inspect.core.global_inspector = (function fulcro$inspect$core$global_inspector(var_args){
var G__46379 = arguments.length;
switch (G__46379) {
case 0:
return fulcro.inspect.core.global_inspector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.inspect.core.global_inspector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.core.global_inspector.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.deref(fulcro.inspect.core.global_inspector_STAR_);
});

fulcro.inspect.core.global_inspector.cljs$core$IFn$_invoke$arity$1 = (function (options){
var or__3922__auto__ = cljs.core.deref(fulcro.inspect.core.global_inspector_STAR_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.reset_BANG_(fulcro.inspect.core.global_inspector_STAR_,fulcro.inspect.core.start_global_inspector(options));
}
});

fulcro.inspect.core.global_inspector.cljs$lang$maxFixedArity = 1;

fulcro.inspect.core.update_inspect_state = (function fulcro$inspect$core$update_inspect_state(reconciler,app_id,state){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","set-content","fulcro.inspect.ui.data-history/set-content",-1511573547,null),null,(1),null)),(new cljs.core.List(null,state,null,(1),null))))),new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698)], null));
});
fulcro.inspect.core.inspect_network_init = (function fulcro$inspect$core$inspect_network_init(network,app){
var G__46392 = network;
var G__46392__$1 = (((G__46392 == null))?null:new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__46392));
var G__46392__$2 = (((G__46392__$1 == null))?null:new cljs.core.Keyword("fulcro.inspect.core","app*","fulcro.inspect.core/app*",1935902816).cljs$core$IFn$_invoke$arity$1(G__46392__$1));
if((G__46392__$2 == null)){
return null;
} else {
return cljs.core.reset_BANG_(G__46392__$2,app);
}
});
fulcro.inspect.core.inspect_app = (function fulcro$inspect$core$inspect_app(app_id,target_app){
var inspector = fulcro.inspect.core.global_inspector.cljs$core$IFn$_invoke$arity$0();
var state_STAR_ = (function (){var G__46398 = target_app;
var G__46398__$1 = (((G__46398 == null))?null:new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__46398));
var G__46398__$2 = (((G__46398__$1 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__46398__$1));
if((G__46398__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__46398__$2);
}
})();
var new_inspector = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.inspector.Inspector,cljs.core.deref(state_STAR_)),new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),app_id),new cljs.core.Keyword("fulcro.inspect.ui.inspector","target-app","fulcro.inspect.ui.inspector/target-app",1521628481),target_app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","app-state","fulcro.inspect.ui.inspector/app-state",-1147484576),new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","app-state","fulcro.inspect.ui.inspector/app-state",-1147484576),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646)], null),fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646),fulcro.inspect.ui.helpers.normalize_id(app_id)], null),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","network","fulcro.inspect.ui.inspector/network",1598528347),new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","element","fulcro.inspect.ui.inspector/element",-603966681),new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","element","fulcro.inspect.ui.inspector/element",-603966681),new cljs.core.Keyword("fulcro.inspect.ui.element","target-reconciler","fulcro.inspect.ui.element/target-reconciler",1217227334)], null),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(target_app)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","transactions","fulcro.inspect.ui.inspector/transactions",-2066201560),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id], null));
fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(inspector),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","multi-inspector","fulcro.inspect.ui.multi-inspector/multi-inspector",1353666037),"main"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.multi-inspector","add-inspector","fulcro.inspect.ui.multi-inspector/add-inspector",951751359,null),null,(1),null)),(new cljs.core.List(null,new_inspector,null,(1),null))))),new cljs.core.Keyword("fulcro.inspect.core","inspectors","fulcro.inspect.core/inspectors",-672651634)], null));

fulcro.inspect.core.inspect_network_init(new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(target_app)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspector","inspector",1532863880),inspector,new cljs.core.Keyword(null,"app","app",-560961707),target_app], null));

cljs.core.add_watch(state_STAR_,app_id,((function (inspector,state_STAR_,new_inspector){
return (function (p1__46394_SHARP_,p2__46395_SHARP_,p3__46396_SHARP_,p4__46393_SHARP_){
return fulcro.inspect.core.update_inspect_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(inspector),app_id,p4__46393_SHARP_);
});})(inspector,state_STAR_,new_inspector))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.core","initialized","fulcro.inspect.core/initialized",382929594),true);

return new_inspector;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {fulcro.client.network.FulcroNetwork}
 * @implements {fulcro.client.network.NetworkBehavior}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.inspect.core.TransformNetwork = (function (network,options,__meta,__extmap,__hash){
this.network = network;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.inspect.core.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k46428,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__46452 = k46428;
var G__46452__$1 = (((G__46452 instanceof cljs.core.Keyword))?G__46452.fqn:null);
switch (G__46452__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46428,else__12537__auto__);

}
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#fulcro.inspect.core.TransformNetwork{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46427){
var self__ = this;
var G__46427__$1 = this;
return (new cljs.core.RecordIter((0),G__46427__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new fulcro.inspect.core.TransformNetwork(self__.network,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__46458 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (-1464583796 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__46458(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46429,other46430){
var self__ = this;
var this46429__$1 = this;
return ((!((other46430 == null))) && ((this46429__$1.constructor === other46430.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46429__$1.network,other46430.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46429__$1.options,other46430.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46429__$1.__extmap,other46430.__extmap)));
});

fulcro.inspect.core.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.core.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__46461 = self__.options;
var map__46461__$1 = ((((!((map__46461 == null)))?(((((map__46461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46461):map__46461);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46461__$1,new cljs.core.Keyword("fulcro.inspect.core","transform-query","fulcro.inspect.core/transform-query",831679949),((function (map__46461,map__46461__$1,___$1){
return (function (___$2,x){
return x;
});})(map__46461,map__46461__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46461__$1,new cljs.core.Keyword("fulcro.inspect.core","transform-response","fulcro.inspect.core/transform-response",-607893223),((function (map__46461,map__46461__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__46461,map__46461__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46461__$1,new cljs.core.Keyword("fulcro.inspect.core","transform-error","fulcro.inspect.core/transform-error",829208507),((function (map__46461,map__46461__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__46461,map__46461__$1,transform_query,transform_response,___$1))
);
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46461__$1,new cljs.core.Keyword("fulcro.inspect.core","app*","fulcro.inspect.core/app*",1935902816));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","request-id","fulcro.inspect.core/request-id",316326783),req_id,new cljs.core.Keyword("fulcro.inspect.core","app","fulcro.inspect.core/app",796164937),cljs.core.deref(app_STAR_)], null);
var temp__5455__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5455__auto__)){
var edn_SINGLEQUOTE_ = temp__5455__auto__;
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5455__auto__,map__46461,map__46461__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1){
return (function (p1__46425_SHARP_){
var G__46470 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__46425_SHARP_) : transform_response.call(null,env,p1__46425_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__46470) : ok.call(null,G__46470));
});})(edn_SINGLEQUOTE_,temp__5455__auto__,map__46461,map__46461__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5455__auto__,map__46461,map__46461__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1){
return (function (p1__46426_SHARP_){
var G__46473 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__46426_SHARP_) : transform_error.call(null,env,p1__46426_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__46473) : error.call(null,G__46473));
});})(edn_SINGLEQUOTE_,temp__5455__auto__,map__46461,map__46461__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1))
);
} else {
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(null) : ok.call(null,null));
}
});

fulcro.inspect.core.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
try{fulcro.client.network.start(self__.network);
}catch (e46475){if(cljs.core.truth_((function (){var c__3954__auto__ = new cljs.core.Keyword("fulcro.inspect.core","default","fulcro.inspect.core/default",-652306180);
var x__3955__auto__ = e46475;
return (x__3955__auto__ instanceof c__3954__auto__);
})())){
var e_46514 = e46475;
console.log("Error starting sub network",e_46514);
} else {
throw e46475;

}
}
return this$__$1;
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"network","network",2050004697),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new fulcro.inspect.core.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

fulcro.inspect.core.TransformNetwork.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.core.TransformNetwork.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e46481){var _ = e46481;
return true;
}});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__46427){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__46483 = cljs.core.keyword_identical_QMARK_;
var expr__46484 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__46487 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__46488 = expr__46484;
return (pred__46483.cljs$core$IFn$_invoke$arity$2 ? pred__46483.cljs$core$IFn$_invoke$arity$2(G__46487,G__46488) : pred__46483.call(null,G__46487,G__46488));
})())){
return (new fulcro.inspect.core.TransformNetwork(G__46427,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46489 = new cljs.core.Keyword(null,"options","options",99638489);
var G__46490 = expr__46484;
return (pred__46483.cljs$core$IFn$_invoke$arity$2 ? pred__46483.cljs$core$IFn$_invoke$arity$2(G__46489,G__46490) : pred__46483.call(null,G__46489,G__46490));
})())){
return (new fulcro.inspect.core.TransformNetwork(self__.network,G__46427,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.inspect.core.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__46427),null));
}
}
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__46427){
var self__ = this;
var this__12533__auto____$1 = this;
return (new fulcro.inspect.core.TransformNetwork(self__.network,self__.options,G__46427,self__.__extmap,self__.__hash));
});

fulcro.inspect.core.TransformNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

fulcro.inspect.core.TransformNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"network","network",-604431072,null),new cljs.core.Symbol(null,"options","options",1740170016,null)], null);
});

fulcro.inspect.core.TransformNetwork.cljs$lang$type = true;

fulcro.inspect.core.TransformNetwork.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"fulcro.inspect.core/TransformNetwork",null,(1),null));
});

fulcro.inspect.core.TransformNetwork.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"fulcro.inspect.core/TransformNetwork");
});

/**
 * Positional factory function for fulcro.inspect.core/TransformNetwork.
 */
fulcro.inspect.core.__GT_TransformNetwork = (function fulcro$inspect$core$__GT_TransformNetwork(network,options){
return (new fulcro.inspect.core.TransformNetwork(network,options,null,null,null));
});

/**
 * Factory function for fulcro.inspect.core/TransformNetwork, taking a map of keywords to field values.
 */
fulcro.inspect.core.map__GT_TransformNetwork = (function fulcro$inspect$core$map__GT_TransformNetwork(G__46432){
return (new fulcro.inspect.core.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__46432),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__46432),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46432,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0))),null));
});

fulcro.inspect.core.transform_network = (function fulcro$inspect$core$transform_network(network,options){
return fulcro.inspect.core.__GT_TransformNetwork(network,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("fulcro.inspect.core","app*","fulcro.inspect.core/app*",1935902816),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fulcro.client.network.FulcroRemoteI}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.inspect.core.TransformNetworkI = (function (network,options,__meta,__extmap,__hash){
this.network = network;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k46539,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__46553 = k46539;
var G__46553__$1 = (((G__46553 instanceof cljs.core.Keyword))?G__46553.fqn:null);
switch (G__46553__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46539,else__12537__auto__);

}
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#fulcro.inspect.core.TransformNetworkI{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46538){
var self__ = this;
var G__46538__$1 = this;
return (new cljs.core.RecordIter((0),G__46538__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new fulcro.inspect.core.TransformNetworkI(self__.network,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__46569 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (-1303888972 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__46569(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46540,other46541){
var self__ = this;
var this46540__$1 = this;
return ((!((other46541 == null))) && ((this46540__$1.constructor === other46541.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46540__$1.network,other46541.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46540__$1.options,other46541.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46540__$1.__extmap,other46541.__extmap)));
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"network","network",2050004697),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new fulcro.inspect.core.TransformNetworkI(self__.network,self__.options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__46538){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__46570 = cljs.core.keyword_identical_QMARK_;
var expr__46571 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__46573 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__46574 = expr__46571;
return (pred__46570.cljs$core$IFn$_invoke$arity$2 ? pred__46570.cljs$core$IFn$_invoke$arity$2(G__46573,G__46574) : pred__46570.call(null,G__46573,G__46574));
})())){
return (new fulcro.inspect.core.TransformNetworkI(G__46538,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46575 = new cljs.core.Keyword(null,"options","options",99638489);
var G__46576 = expr__46571;
return (pred__46570.cljs$core$IFn$_invoke$arity$2 ? pred__46570.cljs$core$IFn$_invoke$arity$2(G__46575,G__46576) : pred__46570.call(null,G__46575,G__46576));
})())){
return (new fulcro.inspect.core.TransformNetworkI(self__.network,G__46538,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.inspect.core.TransformNetworkI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__46538),null));
}
}
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

fulcro.inspect.core.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.inspect.core.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (_,p__46577){
var self__ = this;
var map__46578 = p__46577;
var map__46578__$1 = ((((!((map__46578 == null)))?(((((map__46578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46578):map__46578);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46578__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46578__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46578__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var ___$1 = this;
var map__46581 = self__.options;
var map__46581__$1 = ((((!((map__46581 == null)))?(((((map__46581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46581):map__46581);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46581__$1,new cljs.core.Keyword("fulcro.inspect.core","transform-query","fulcro.inspect.core/transform-query",831679949),((function (map__46581,map__46581__$1,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler){
return (function (___$2,x){
return x;
});})(map__46581,map__46581__$1,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46581__$1,new cljs.core.Keyword("fulcro.inspect.core","transform-response","fulcro.inspect.core/transform-response",-607893223),((function (map__46581,map__46581__$1,transform_query,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler){
return (function (___$2,x){
return x;
});})(map__46581,map__46581__$1,transform_query,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46581__$1,new cljs.core.Keyword("fulcro.inspect.core","transform-error","fulcro.inspect.core/transform-error",829208507),((function (map__46581,map__46581__$1,transform_query,transform_response,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler){
return (function (___$2,x){
return x;
});})(map__46581,map__46581__$1,transform_query,transform_response,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler))
);
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46581__$1,new cljs.core.Keyword("fulcro.inspect.core","app*","fulcro.inspect.core/app*",1935902816));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","request-id","fulcro.inspect.core/request-id",316326783),req_id,new cljs.core.Keyword("fulcro.inspect.core","app","fulcro.inspect.core/app",796164937),cljs.core.deref(app_STAR_)], null);
var temp__5455__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5455__auto__)){
var edn_SINGLEQUOTE_ = temp__5455__auto__;
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5455__auto__,map__46581,map__46581__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler){
return (function (p1__46536_SHARP_){
var G__46584 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__46536_SHARP_) : transform_response.call(null,env,p1__46536_SHARP_));
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__46584) : ok_handler.call(null,G__46584));
});})(edn_SINGLEQUOTE_,temp__5455__auto__,map__46581,map__46581__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5455__auto__,map__46581,map__46581__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler){
return (function (p1__46537_SHARP_){
var G__46587 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__46537_SHARP_) : transform_error.call(null,env,p1__46537_SHARP_));
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__46587) : error_handler.call(null,G__46587));
});})(edn_SINGLEQUOTE_,temp__5455__auto__,map__46581,map__46581__$1,transform_query,transform_response,transform_error,app_STAR_,req_id,env,___$1,map__46578,map__46578__$1,edn,ok_handler,error_handler))
], null));
} else {
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(null) : ok_handler.call(null,null));
}
});

fulcro.inspect.core.TransformNetworkI.prototype.fulcro$client$network$FulcroRemoteI$abort$arity$2 = (function (_,abort_id){
var self__ = this;
var ___$1 = this;
return fulcro.client.network.abort(self__.network,abort_id);
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__46538){
var self__ = this;
var this__12533__auto____$1 = this;
return (new fulcro.inspect.core.TransformNetworkI(self__.network,self__.options,G__46538,self__.__extmap,self__.__hash));
});

fulcro.inspect.core.TransformNetworkI.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

fulcro.inspect.core.TransformNetworkI.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"network","network",-604431072,null),new cljs.core.Symbol(null,"options","options",1740170016,null)], null);
});

fulcro.inspect.core.TransformNetworkI.cljs$lang$type = true;

fulcro.inspect.core.TransformNetworkI.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"fulcro.inspect.core/TransformNetworkI",null,(1),null));
});

fulcro.inspect.core.TransformNetworkI.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"fulcro.inspect.core/TransformNetworkI");
});

/**
 * Positional factory function for fulcro.inspect.core/TransformNetworkI.
 */
fulcro.inspect.core.__GT_TransformNetworkI = (function fulcro$inspect$core$__GT_TransformNetworkI(network,options){
return (new fulcro.inspect.core.TransformNetworkI(network,options,null,null,null));
});

/**
 * Factory function for fulcro.inspect.core/TransformNetworkI, taking a map of keywords to field values.
 */
fulcro.inspect.core.map__GT_TransformNetworkI = (function fulcro$inspect$core$map__GT_TransformNetworkI(G__46546){
return (new fulcro.inspect.core.TransformNetworkI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__46546),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__46546),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46546,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0))),null));
});

fulcro.inspect.core.transform_network_i = (function fulcro$inspect$core$transform_network_i(network,options){
return fulcro.inspect.core.__GT_TransformNetworkI(network,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("fulcro.inspect.core","app*","fulcro.inspect.core/app*",1935902816),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)));
});
fulcro.inspect.core.app_id = (function fulcro$inspect$core$app_id(reconciler){
var or__3922__auto__ = (function (){var G__46638 = reconciler;
var G__46638__$1 = (((G__46638 == null))?null:fulcro.client.primitives.app_state(G__46638));
var G__46638__$2 = (((G__46638__$1 == null))?null:cljs.core.deref(G__46638__$1));
if((G__46638__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__46638__$2);
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__46639 = reconciler;
var G__46639__$1 = (((G__46639 == null))?null:fulcro.client.primitives.app_root(G__46639));
var G__46639__$2 = (((G__46639__$1 == null))?null:fulcro.client.primitives.react_type(G__46639__$1));
var G__46639__$3 = (((G__46639__$2 == null))?null:goog.object.get(G__46639__$2,"displayName"));
if((G__46639__$3 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__46639__$3);
}
}
});
fulcro.inspect.core.inspect_network = (function fulcro$inspect$core$inspect_network(remote,network){
var ts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.core","transform-query","fulcro.inspect.core/transform-query",831679949),(function (p__46650,edn){
var map__46651 = p__46650;
var map__46651__$1 = ((((!((map__46651 == null)))?(((((map__46651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46651):map__46651);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46651__$1,new cljs.core.Keyword("fulcro.inspect.core","request-id","fulcro.inspect.core/request-id",316326783));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46651__$1,new cljs.core.Keyword("fulcro.inspect.core","app","fulcro.inspect.core/app",796164937));
var map__46653_46676 = app;
var map__46653_46677__$1 = ((((!((map__46653_46676 == null)))?(((((map__46653_46676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46653_46676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46653_46676):map__46653_46676);
var inspector_46678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46653_46677__$1,new cljs.core.Keyword(null,"inspector","inspector",1532863880));
var app_46679__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46653_46677__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app_id_46680 = fulcro.inspect.core.app_id(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app_46679__$1));
fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(inspector_46678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id_46680], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),edn], null),null,(1),null)))))], null));

return edn;
}),new cljs.core.Keyword("fulcro.inspect.core","transform-response","fulcro.inspect.core/transform-response",-607893223),(function (p__46656,response){
var map__46657 = p__46656;
var map__46657__$1 = ((((!((map__46657 == null)))?(((((map__46657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46657):map__46657);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46657__$1,new cljs.core.Keyword("fulcro.inspect.core","request-id","fulcro.inspect.core/request-id",316326783));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46657__$1,new cljs.core.Keyword("fulcro.inspect.core","app","fulcro.inspect.core/app",796164937));
var map__46660_46682 = app;
var map__46660_46683__$1 = ((((!((map__46660_46682 == null)))?(((((map__46660_46682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46660_46682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46660_46682):map__46660_46682);
var inspector_46684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46660_46683__$1,new cljs.core.Keyword(null,"inspector","inspector",1532863880));
var app_46685__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46660_46683__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app_id_46686 = fulcro.inspect.core.app_id(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app_46685__$1));
fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(inspector_46684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id_46686], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));

return response;
}),new cljs.core.Keyword("fulcro.inspect.core","transform-error","fulcro.inspect.core/transform-error",829208507),(function (p__46662,error){
var map__46663 = p__46662;
var map__46663__$1 = ((((!((map__46663 == null)))?(((((map__46663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46663):map__46663);
var request_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46663__$1,new cljs.core.Keyword("fulcro.inspect.core","request-id","fulcro.inspect.core/request-id",316326783));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46663__$1,new cljs.core.Keyword("fulcro.inspect.core","app","fulcro.inspect.core/app",796164937));
var map__46665_46691 = app;
var map__46665_46692__$1 = ((((!((map__46665_46691 == null)))?(((((map__46665_46691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46665_46691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46665_46691):map__46665_46691);
var inspector_46693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46665_46692__$1,new cljs.core.Keyword(null,"inspector","inspector",1532863880));
var app_46694__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46665_46692__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app_id_46695 = fulcro.inspect.core.app_id(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app_46694__$1));
fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(inspector_46693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id_46695], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),request_id,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));

return error;
})], null);
if(((!((network == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return fulcro.inspect.core.transform_network(network,ts);
} else {
if(((!((network == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === network.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
return fulcro.inspect.core.transform_network_i(network,cljs.core.update.cljs$core$IFn$_invoke$arity$3(ts,new cljs.core.Keyword("fulcro.inspect.core","transform-response","fulcro.inspect.core/transform-response",-607893223),((function (ts){
return (function (tr){
return ((function (ts){
return (function (env,p__46669){
var map__46670 = p__46669;
var map__46670__$1 = ((((!((map__46670 == null)))?(((((map__46670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46670):map__46670);
var response = map__46670__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46670__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(tr.cljs$core$IFn$_invoke$arity$2 ? tr.cljs$core$IFn$_invoke$arity$2(env,body) : tr.call(null,env,body));

return response;
});
;})(ts))
});})(ts))
));
} else {
return console.warn("Invalid network",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"network","network",2050004697),network], null));

}
}
});
fulcro.inspect.core.inc_id = (function fulcro$inspect$core$inc_id(id){
var new_id = (function (){var temp__5455__auto__ = cljs.core.re_find(/(.+?)(\d+)$/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__46699 = temp__5455__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46699,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46699,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46699,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1((parseInt(d) + (1)))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-0"].join('');
}
})();
if((id instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new_id,(1)));
} else {
if((id instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new_id);
} else {
return new_id;

}
}
});
fulcro.inspect.core.inspector_app_ids = (function fulcro$inspect$core$inspector_app_ids(){
var G__46711 = fulcro.inspect.core.global_inspector.cljs$core$IFn$_invoke$arity$0();
var G__46711__$1 = (((G__46711 == null))?null:new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__46711));
var G__46711__$2 = (((G__46711__$1 == null))?null:fulcro.client.primitives.app_state(G__46711__$1));
var G__46711__$3 = (((G__46711__$2 == null))?null:cljs.core.deref(G__46711__$2));
if((G__46711__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094).cljs$core$IFn$_invoke$arity$1(G__46711__$3);
}
});
fulcro.inspect.core.dedupe_id = (function fulcro$inspect$core$dedupe_id(id){
var ids_in_use = fulcro.inspect.core.inspector_app_ids();
var new_id = id;
while(true){
if(cljs.core.contains_QMARK_(ids_in_use,new_id)){
var G__46720 = fulcro.inspect.core.inc_id(new_id);
new_id = G__46720;
continue;
} else {
return new_id;
}
break;
}
});
fulcro.inspect.core.inspect_tx = (function fulcro$inspect$core$inspect_tx(p__46721,info){
var map__46722 = p__46721;
var map__46722__$1 = ((((!((map__46722 == null)))?(((((map__46722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46722):map__46722);
var env = map__46722__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46722__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
if(cljs.core.truth_(fulcro.client.primitives.app_root(reconciler))){
var inspector = fulcro.inspect.core.global_inspector.cljs$core$IFn$_invoke$arity$0();
var tx = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info,cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old-state","old-state",1039580704),new cljs.core.Keyword(null,"new-state","new-state",-490349212),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"component","component",1555936782)], null))], 0));
var app_id = fulcro.inspect.core.app_id(reconciler);
if(cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.core","initialized","fulcro.inspect.core/initialized",382929594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fulcro.client.primitives.app_state(reconciler))))){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(inspector),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.transactions","add-tx","fulcro.inspect.ui.transactions/add-tx",-536229177,null),null,(1),null)),(new cljs.core.List(null,tx,null,(1),null))))),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874)], null));
} else {
return null;
}
} else {
return null;
}
});
fulcro.inspect.core.install = (function fulcro$inspect$core$install(options){
if(cljs.core.truth_(cljs.core.deref(fulcro.inspect.core.global_inspector_STAR_))){
return null;
} else {
console.log("Installing Fulcro Inspect",options);

fulcro.inspect.core.global_inspector.cljs$core$IFn$_invoke$arity$1(options);

return fulcro.client.register_tool(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184),new cljs.core.Keyword("fulcro.inspect.core","fulcro-inspect","fulcro.inspect.core/fulcro-inspect",976735013),new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305),(function (p__46725){
var map__46726 = p__46725;
var map__46726__$1 = ((((!((map__46726 == null)))?(((((map__46726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46726):map__46726);
var app = map__46726__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46726__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var id_46744 = fulcro.inspect.core.dedupe_id(fulcro.inspect.core.app_id(reconciler));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.primitives.app_state(reconciler),cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),id_46744);

fulcro.inspect.core.inspect_app(id_46744,app);

return app;
}),new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985),(function (networks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__46728){
var vec__46729 = p__46728;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46729,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.inspect.core.inspect_network(k,v)], null);
})),networks);
}),new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069),new cljs.core.Var(function(){return fulcro.inspect.core.inspect_tx;},new cljs.core.Symbol("fulcro.inspect.core","inspect-tx","fulcro.inspect.core/inspect-tx",1665367947,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fulcro.inspect.core","fulcro.inspect.core",-1472082027,null),new cljs.core.Symbol(null,"inspect-tx","inspect-tx",285072263,null),"fulcro/inspect/core.cljs",17,1,385,385,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"env","env",-175281708,null)], null),new cljs.core.Symbol(null,"info","info",1323462525,null)], null)),null,(cljs.core.truth_(fulcro.inspect.core.inspect_tx)?fulcro.inspect.core.inspect_tx.cljs$lang$test:null)]))], null));
}
});

//# sourceMappingURL=fulcro.inspect.core.js.map

goog.provide('fulcro.inspect.ui.dom_history_viewer');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('fulcro_css.css');
goog.require('fulcro.client.dom');
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","show-dom-preview","fulcro.inspect.ui.dom-history-viewer/show-dom-preview",626121644,null),(function (env43234,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__43235 = env43234;
var map__43235__$1 = ((((!((map__43235 == null)))?(((((map__43235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43235):map__43235);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43235__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__43235,map__43235__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798),new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447)], null),true);
});})(map__43235,map__43235__$1,state))
], null);
})(),(function (){var env = env43234;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860)], null)], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","hide-dom-preview","fulcro.inspect.ui.dom-history-viewer/hide-dom-preview",1398943440,null),(function (env43250,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__43251 = env43250;
var map__43251__$1 = ((((!((map__43251 == null)))?(((((map__43251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43251):map__43251);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43251__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__43251,map__43251__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798),new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447)], null),false);
});})(map__43251,map__43251__$1,state))
], null);
})(),(function (){var env = env43250;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860)], null)], null);
})()], 0));
}));
if(typeof fulcro.inspect.ui.dom_history_viewer.DOMHistoryView !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.dom_history_viewer.DOMHistoryView = (function fulcro$inspect$ui$dom_history_viewer$DOMHistoryView(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype = goog.object.clone(React.Component.prototype);
}

var x43282_43324 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype;
x43282_43324.componentDidMount = ((function (x43282_43324){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x43282_43324))
;

x43282_43324.componentWillUpdate = ((function (x43282_43324){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___43325 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___43326 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___43325,next_ident__38531__auto___43326)){
var idxr__38532__auto___43327 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___43327 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___43327),((function (idxr__38532__auto___43327,ident__38530__auto___43325,next_ident__38531__auto___43326,this__38521__auto__,x43282_43324){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___43325], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___43326], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___43327,ident__38530__auto___43325,next_ident__38531__auto___43326,this__38521__auto__,x43282_43324))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x43282_43324))
;

x43282_43324.shouldComponentUpdate = ((function (x43282_43324){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__43287 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__43287);
} else {
return G__43287;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43288 = this__38521__auto__.state;
var G__43289 = "fulcro$state";
return goog.object.get(G__43288,G__43289);
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
});})(x43282_43324))
;

x43282_43324.componentWillUnmount = ((function (x43282_43324){
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
});})(x43282_43324))
;

x43282_43324.componentDidUpdate = ((function (x43282_43324){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x43282_43324))
;

x43282_43324.componentWillMount = ((function (x43282_43324){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x43282_43324))
;

x43282_43324.render = ((function (x43282_43324){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_43293 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_43294 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_43295 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_43296 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_43297 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__43301 = fulcro.client.primitives.props(this$);
var map__43301__$1 = ((((!((map__43301 == null)))?(((((map__43301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43301):map__43301);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43301__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43301__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var map__43302 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__43302__$1 = ((((!((map__43302 == null)))?(((((map__43302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43302):map__43302);
var target_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43302__$1,new cljs.core.Keyword(null,"target-app","target-app",876281807));
var map__43303 = fulcro_css.css.get_classnames(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView);
var map__43303__$1 = ((((!((map__43303 == null)))?(((((map__43303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43303):map__43303);
var dom_overlay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43303__$1,new cljs.core.Keyword(null,"dom-overlay","dom-overlay",1341792472));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43303__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var temp__5457__auto__ = new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(target_app);
if(cljs.core.truth_(temp__5457__auto__)){
var reconciler = temp__5457__auto__;
var app_root_class = fulcro.client.primitives.react_type(fulcro.client.primitives.app_root(reconciler));
var app_root_class_factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(app_root_class);
var root_query = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(app_root_class,app_state);
var view_tree = fulcro.client.primitives.db__GT_tree.cljs$core$IFn$_invoke$arity$3(root_query,app_state,app_state);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom_overlay)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(visible_QMARK_)?null:hidden))].join(''), "title": "Click to close preview.", "onClick": ((function (app_root_class,app_root_class_factory,root_query,view_tree,reconciler,temp__5457__auto__,map__43301,map__43301__$1,visible_QMARK_,app_state,map__43302,map__43302__$1,target_app,map__43303,map__43303__$1,dom_overlay,hidden,_STAR_reconciler_STAR_43293,_STAR_depth_STAR_43294,_STAR_shared_STAR_43295,_STAR_instrument_STAR_43296,_STAR_parent_STAR_43297,this$,this__38520__auto__,x43282_43324){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","hide-dom-preview","fulcro.inspect.ui.dom-history-viewer/hide-dom-preview",1398943440,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(app_root_class,app_root_class_factory,root_query,view_tree,reconciler,temp__5457__auto__,map__43301,map__43301__$1,visible_QMARK_,app_state,map__43302,map__43302__$1,target_app,map__43303,map__43303__$1,dom_overlay,hidden,_STAR_reconciler_STAR_43293,_STAR_depth_STAR_43294,_STAR_shared_STAR_43295,_STAR_instrument_STAR_43296,_STAR_parent_STAR_43297,this$,this__38520__auto__,x43282_43324))
}),fulcro.util.force_children((app_root_class_factory.cljs$core$IFn$_invoke$arity$1 ? app_root_class_factory.cljs$core$IFn$_invoke$arity$1(view_tree) : app_root_class_factory.call(null,view_tree)))]);
} else {
return null;
}
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_43297;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_43296;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_43295;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_43294;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43293;
}});})(x43282_43324))
;


fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype.constructor = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView;

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype.constructor.displayName = "fulcro.inspect.ui.dom-history-viewer/DOMHistoryView";

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype.fulcro$isComponent = true;

var x43307_43340 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView;
x43307_43340.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x43307_43340.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x43307_43340){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"100px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hidden",".hidden",-1525088678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dom-overlay",".dom-overlay",-1206289147),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10000),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null)], null);
});})(x43307_43340))
;

x43307_43340.fulcro_css$css$CSS$include_children$arity$1 = ((function (x43307_43340){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x43307_43340))
;

x43307_43340.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x43307_43340.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x43307_43340){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),false,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,params);
});})(x43307_43340))
;

x43307_43340.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x43307_43340.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x43307_43340){
return (function (this$,p__43311){
var map__43312 = p__43311;
var map__43312__$1 = ((((!((map__43312 == null)))?(((((map__43312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43312):map__43312);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
});})(x43307_43340))
;

x43307_43340.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x43307_43340.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x43307_43340){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),new cljs.core.Keyword(null,"app-state","app-state",-1509963278)], null);
});})(x43307_43340))
;


var x43314_43344 = fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.prototype;
x43314_43344.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x43314_43344.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x43314_43344){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"100px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hidden",".hidden",-1525088678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dom-overlay",".dom-overlay",-1206289147),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10000),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null)], null);
});})(x43314_43344))
;

x43314_43344.fulcro_css$css$CSS$include_children$arity$1 = ((function (x43314_43344){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x43314_43344))
;

x43314_43344.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x43314_43344.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x43314_43344){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),false,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,params);
});})(x43314_43344))
;

x43314_43344.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x43314_43344.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x43314_43344){
return (function (this$,p__43318){
var map__43319 = p__43318;
var map__43319__$1 = ((((!((map__43319 == null)))?(((((map__43319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43319):map__43319);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.dom-history-viewer","dom-viewer","fulcro.inspect.ui.dom-history-viewer/dom-viewer",212161533),new cljs.core.Keyword(null,"singleton","singleton",-1768662798)], null);
});})(x43314_43344))
;

x43314_43344.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x43314_43344.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x43314_43344){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),new cljs.core.Keyword(null,"app-state","app-state",-1509963278)], null);
});})(x43314_43344))
;


fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.cljs$lang$type = true;

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.cljs$lang$ctorStr = "fulcro.inspect.ui.dom-history-viewer/DOMHistoryView";

fulcro.inspect.ui.dom_history_viewer.DOMHistoryView.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.dom-history-viewer/DOMHistoryView");
});
fulcro.inspect.ui.dom_history_viewer.ui_dom_history_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView);

//# sourceMappingURL=fulcro.inspect.ui.dom_history_viewer.js.map

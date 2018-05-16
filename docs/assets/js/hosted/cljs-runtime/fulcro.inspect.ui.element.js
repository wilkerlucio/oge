goog.provide('fulcro.inspect.ui.element');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fulcro_css.css');
goog.require('fulcro.client.mutations');
goog.require('fulcro.inspect.helpers');
goog.require('fulcro.inspect.ui.core');
goog.require('fulcro.inspect.ui.data_viewer');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
if(typeof fulcro.inspect.ui.element.Details !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.element.Details = (function fulcro$inspect$ui$element$Details(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.element.Details.prototype = goog.object.clone(React.Component.prototype);
}

var x44600_44668 = fulcro.inspect.ui.element.Details.prototype;
x44600_44668.componentDidMount = ((function (x44600_44668){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44600_44668))
;

x44600_44668.componentWillUpdate = ((function (x44600_44668){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44669 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44670 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44669,next_ident__38531__auto___44670)){
var idxr__38532__auto___44676 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44676 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44676),((function (idxr__38532__auto___44676,ident__38530__auto___44669,next_ident__38531__auto___44670,this__38521__auto__,x44600_44668){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44669], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44670], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44676,ident__38530__auto___44669,next_ident__38531__auto___44670,this__38521__auto__,x44600_44668))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44600_44668))
;

x44600_44668.shouldComponentUpdate = ((function (x44600_44668){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44609 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44609);
} else {
return G__44609;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44616 = this__38521__auto__.state;
var G__44617 = "fulcro$state";
return goog.object.get(G__44616,G__44617);
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
});})(x44600_44668))
;

x44600_44668.componentWillUnmount = ((function (x44600_44668){
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
});})(x44600_44668))
;

x44600_44668.componentDidUpdate = ((function (x44600_44668){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44600_44668))
;

x44600_44668.componentWillMount = ((function (x44600_44668){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44600_44668))
;

x44600_44668.render = ((function (x44600_44668){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44627 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44628 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44629 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44630 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44631 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44634 = fulcro.client.primitives.props(this$);
var map__44634__$1 = ((((!((map__44634 == null)))?(((((map__44634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44634):map__44634);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44634__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","display-name","fulcro.inspect.ui.element/display-name",-1091845070));
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44634__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","ident","fulcro.inspect.ui.element/ident",-1839254913));
var props_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44634__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","props-view","fulcro.inspect.ui.element/props-view",1864003535));
var query_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44634__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","query-view","fulcro.inspect.ui.element/query-view",37445187));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.element.Details);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Display Name"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.comp_display_name(cljs.core.PersistentArrayMap.EMPTY,display_name)], 0))),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Ident"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.ident(cljs.core.PersistentArrayMap.EMPTY,ident)], 0))),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Props"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(props_view)], 0))),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Query"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(query_view)], 0)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44631;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44630;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44629;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44628;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44627;
}});})(x44600_44668))
;


fulcro.inspect.ui.element.Details.prototype.constructor = fulcro.inspect.ui.element.Details;

fulcro.inspect.ui.element.Details.prototype.constructor.displayName = "fulcro.inspect.ui.element/Details";

fulcro.inspect.ui.element.Details.prototype.fulcro$isComponent = true;

var x44639_44706 = fulcro.inspect.ui.element.Details;
x44639_44706.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44639_44706.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44639_44706){
return (function (_,p__44640){
var map__44642 = p__44640;
var map__44642__$1 = ((((!((map__44642 == null)))?(((((map__44642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44642):map__44642);
var params = map__44642__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","props","fulcro.inspect.ui.element/props",-1984763386));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","query","fulcro.inspect.ui.element/query",113020567));
var ___$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.element","detail-id","fulcro.inspect.ui.element/detail-id",81534376),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.element","props-view","fulcro.inspect.ui.element/props-view",1864003535),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,props),new cljs.core.Keyword("fulcro.inspect.ui.element","query-view","fulcro.inspect.ui.element/query-view",37445187),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,query)], null),params], 0));
});})(x44639_44706))
;

x44639_44706.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44639_44706.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44639_44706){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","detail-id","fulcro.inspect.ui.element/detail-id",81534376),new cljs.core.Keyword("fulcro.inspect.ui.element","detail-id","fulcro.inspect.ui.element/detail-id",81534376).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44639_44706))
;

x44639_44706.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44639_44706.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44639_44706){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","detail-id","fulcro.inspect.ui.element/detail-id",81534376),new cljs.core.Keyword("fulcro.inspect.ui.element","display-name","fulcro.inspect.ui.element/display-name",-1091845070),new cljs.core.Keyword("fulcro.inspect.ui.element","ident","fulcro.inspect.ui.element/ident",-1839254913),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.element","props-view","fulcro.inspect.ui.element/props-view",1864003535),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.element","query-view","fulcro.inspect.ui.element/query-view",37445187),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44639_44706))
;

x44639_44706.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44639_44706.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44639_44706){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 10px"], null)], null)], null);
});})(x44639_44706))
;

x44639_44706.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44639_44706){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44639_44706))
;


var x44659_44717 = fulcro.inspect.ui.element.Details.prototype;
x44659_44717.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44659_44717.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44659_44717){
return (function (_,p__44660){
var map__44661 = p__44660;
var map__44661__$1 = ((((!((map__44661 == null)))?(((((map__44661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44661):map__44661);
var params = map__44661__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44661__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","props","fulcro.inspect.ui.element/props",-1984763386));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44661__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","query","fulcro.inspect.ui.element/query",113020567));
var ___$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.element","detail-id","fulcro.inspect.ui.element/detail-id",81534376),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.element","props-view","fulcro.inspect.ui.element/props-view",1864003535),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,props),new cljs.core.Keyword("fulcro.inspect.ui.element","query-view","fulcro.inspect.ui.element/query-view",37445187),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,query)], null),params], 0));
});})(x44659_44717))
;

x44659_44717.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44659_44717.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44659_44717){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","detail-id","fulcro.inspect.ui.element/detail-id",81534376),new cljs.core.Keyword("fulcro.inspect.ui.element","detail-id","fulcro.inspect.ui.element/detail-id",81534376).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44659_44717))
;

x44659_44717.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44659_44717.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44659_44717){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","detail-id","fulcro.inspect.ui.element/detail-id",81534376),new cljs.core.Keyword("fulcro.inspect.ui.element","display-name","fulcro.inspect.ui.element/display-name",-1091845070),new cljs.core.Keyword("fulcro.inspect.ui.element","ident","fulcro.inspect.ui.element/ident",-1839254913),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.element","props-view","fulcro.inspect.ui.element/props-view",1864003535),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.element","query-view","fulcro.inspect.ui.element/query-view",37445187),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44659_44717))
;

x44659_44717.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44659_44717.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44659_44717){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 10px"], null)], null)], null);
});})(x44659_44717))
;

x44659_44717.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44659_44717){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44659_44717))
;


fulcro.inspect.ui.element.Details.cljs$lang$type = true;

fulcro.inspect.ui.element.Details.cljs$lang$ctorStr = "fulcro.inspect.ui.element/Details";

fulcro.inspect.ui.element.Details.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.element/Details");
});
fulcro.inspect.ui.element.details = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element.Details);
if(typeof fulcro.inspect.ui.element.MarkerCSS !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.element.MarkerCSS = (function fulcro$inspect$ui$element$MarkerCSS(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.element.MarkerCSS.prototype = goog.object.clone(React.Component.prototype);
}

var x44732_44754 = fulcro.inspect.ui.element.MarkerCSS.prototype;
x44732_44754.componentDidMount = ((function (x44732_44754){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44732_44754))
;

x44732_44754.componentWillUpdate = ((function (x44732_44754){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44757 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44758 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44757,next_ident__38531__auto___44758)){
var idxr__38532__auto___44759 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44759 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44759),((function (idxr__38532__auto___44759,ident__38530__auto___44757,next_ident__38531__auto___44758,this__38521__auto__,x44732_44754){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44757], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44758], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44759,ident__38530__auto___44757,next_ident__38531__auto___44758,this__38521__auto__,x44732_44754))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44732_44754))
;

x44732_44754.shouldComponentUpdate = ((function (x44732_44754){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44737 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44737);
} else {
return G__44737;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44739 = this__38521__auto__.state;
var G__44740 = "fulcro$state";
return goog.object.get(G__44739,G__44740);
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
});})(x44732_44754))
;

x44732_44754.componentWillUnmount = ((function (x44732_44754){
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
});})(x44732_44754))
;

x44732_44754.componentDidUpdate = ((function (x44732_44754){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44732_44754))
;

x44732_44754.componentWillMount = ((function (x44732_44754){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44732_44754))
;


fulcro.inspect.ui.element.MarkerCSS.prototype.constructor = fulcro.inspect.ui.element.MarkerCSS;

fulcro.inspect.ui.element.MarkerCSS.prototype.constructor.displayName = "fulcro.inspect.ui.element/MarkerCSS";

fulcro.inspect.ui.element.MarkerCSS.prototype.fulcro$isComponent = true;

var x44746_44774 = fulcro.inspect.ui.element.MarkerCSS;
x44746_44774.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44746_44774.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44746_44774){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#fff","12px","hidden","rgba(67, 132, 208, 0.5)","999999","3px 5px","none","absolute","none","monospace"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#ffab66","nowrap","10px","bold","#333740","999999","6px 8px","none","absolute","3px","none","sans-serif"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["8px solid transparent","24px","\"\"","0","8px solid transparent","absolute","8px solid #333740","0","9px"])], null)], null)], null);
});})(x44746_44774))
;

x44746_44774.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44746_44774){
return (function (_){
var ___$1 = this;
return null;
});})(x44746_44774))
;


var x44750_44780 = fulcro.inspect.ui.element.MarkerCSS.prototype;
x44750_44780.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44750_44780.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44750_44780){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#fff","12px","hidden","rgba(67, 132, 208, 0.5)","999999","3px 5px","none","absolute","none","monospace"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#ffab66","nowrap","10px","bold","#333740","999999","6px 8px","none","absolute","3px","none","sans-serif"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["8px solid transparent","24px","\"\"","0","8px solid transparent","absolute","8px solid #333740","0","9px"])], null)], null)], null);
});})(x44750_44780))
;

x44750_44780.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44750_44780){
return (function (_){
var ___$1 = this;
return null;
});})(x44750_44780))
;


fulcro.inspect.ui.element.MarkerCSS.cljs$lang$type = true;

fulcro.inspect.ui.element.MarkerCSS.cljs$lang$ctorStr = "fulcro.inspect.ui.element/MarkerCSS";

fulcro.inspect.ui.element.MarkerCSS.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.element/MarkerCSS");
});
fulcro.inspect.ui.element.marker_element = (function fulcro$inspect$ui$element$marker_element(){
var id = "__fulcro_inspect_marker";
var or__3922__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__44785 = document.createElement("div");
goog.object.set(G__44785,"id",id);

var G__44789_44793 = G__44785;
var G__44790_44794 = "className";
var G__44791_44795 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(fulcro_css.css.get_classnames(fulcro.inspect.ui.element.MarkerCSS));
goog.object.set(G__44789_44793,G__44790_44794,G__44791_44795);

goog.dom.appendChild(document.body,G__44785);

return G__44785;
}
});
fulcro.inspect.ui.element.marker_label_element = (function fulcro$inspect$ui$element$marker_label_element(){
var id = "__fulcro_inspect_marker_label";
var or__3922__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__44804 = document.createElement("div");
goog.object.set(G__44804,"id",id);

var G__44805_44810 = G__44804;
var G__44806_44811 = "className";
var G__44807_44812 = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(fulcro_css.css.get_classnames(fulcro.inspect.ui.element.MarkerCSS));
goog.object.set(G__44805_44810,G__44806_44811,G__44807_44812);

goog.dom.appendChild(document.body,G__44804);

return G__44804;
}
});
fulcro.inspect.ui.element.react_instance = (function fulcro$inspect$ui$element$react_instance(node){
var temp__5455__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44815_SHARP_){
return clojure.string.starts_with_QMARK_(p1__44815_SHARP_,"__reactInternalInstance$");
}),goog.object.getKeys(node)));
if(cljs.core.truth_(temp__5455__auto__)){
var instance_key = temp__5455__auto__;
return goog.object.get(node,instance_key);
} else {
return null;
}
});
fulcro.inspect.ui.element.ensure_reconciler = (function fulcro$inspect$ui$element$ensure_reconciler(x,app){
try{if(cljs.core.truth_((function (){var G__44823 = fulcro.client.primitives.get_reconciler(x);
var G__44823__$1 = (((G__44823 == null))?null:fulcro.client.primitives.app_state(G__44823));
var G__44823__$2 = (((G__44823__$1 == null))?null:cljs.core.deref(G__44823__$1));
var G__44823__$3 = (((G__44823__$2 == null))?null:new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__44823__$2));
if((G__44823__$3 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__44823__$3,app);
}
})())){
return x;
} else {
return null;
}
}catch (e44822){var _ = e44822;
return null;
}});
fulcro.inspect.ui.element.pick_element = (function fulcro$inspect$ui$element$pick_element(p__44833){
var map__44834 = p__44833;
var map__44834__$1 = ((((!((map__44834 == null)))?(((((map__44834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44834):map__44834);
var on_pick = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44834__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","on-pick","fulcro.inspect.ui.element/on-pick",-38511365),cljs.core.identity);
var app_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44834__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","app-id","fulcro.inspect.ui.element/app-id",217367420));
var marker = fulcro.inspect.ui.element.marker_element();
var marker_label = fulcro.inspect.ui.element.marker_label_element();
var current = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var over_handler = ((function (marker,marker_label,current,map__44834,map__44834__$1,on_pick,app_id){
return (function (e){
var target = e.target;
var temp__5457__auto__ = (function (){var G__44841 = target;
var G__44841__$1 = (((G__44841 == null))?null:fulcro.inspect.ui.element.react_instance(G__44841));
var G__44841__$2 = (((G__44841__$1 == null))?null:(function (){var G__44842 = G__44841__$1;
var G__44843 = ["_currentElement","_owner","_instance"];
return goog.object.getValueByKeys(G__44842,G__44843);
})());
if((G__44841__$2 == null)){
return null;
} else {
return fulcro.inspect.ui.element.ensure_reconciler(G__44841__$2,app_id);
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var instance = temp__5457__auto__;
e.stopPropagation();

cljs.core.reset_BANG_(current,instance);

var G__44845_44880 = marker_label;
var G__44846_44881 = (function (){var G__44847 = fulcro.client.primitives.react_type(instance);
var G__44848 = "displayName";
return goog.object.get(G__44847,G__44848);
})();
goog.dom.setTextContent(G__44845_44880,G__44846_44881);

var target_SINGLEQUOTE_ = ReactDOM.findDOMNode(instance);
var offset = goog.style.getPageOffset(target_SINGLEQUOTE_);
var size = goog.style.getSize(target_SINGLEQUOTE_);
var G__44850_44885 = marker_label;
var G__44851_44886 = ({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.x),"px"].join(''), "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset.y - (36))),"px"].join('')});
goog.style.setStyle(G__44850_44885,G__44851_44886);

var G__44854 = marker;
var G__44855 = ({"width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.width),"px"].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size.height),"px"].join(''), "left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.x),"px"].join(''), "top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset.y),"px"].join('')});
return goog.style.setStyle(G__44854,G__44855);
} else {
return null;
}
});})(marker,marker_label,current,map__44834,map__44834__$1,on_pick,app_id))
;
var pick_handler = ((function (marker,marker_label,current,over_handler,map__44834,map__44834__$1,on_pick,app_id){
return (function fulcro$inspect$ui$element$pick_element_$_self(){
var G__44857_44889 = cljs.core.deref(current);
(on_pick.cljs$core$IFn$_invoke$arity$1 ? on_pick.cljs$core$IFn$_invoke$arity$1(G__44857_44889) : on_pick.call(null,G__44857_44889));

var G__44858_44890 = marker;
var G__44859_44891 = ({"display": "none"});
goog.style.setStyle(G__44858_44890,G__44859_44891);

var G__44860_44892 = marker_label;
var G__44861_44893 = ({"display": "none"});
goog.style.setStyle(G__44860_44892,G__44861_44893);

removeEventListener("click",fulcro$inspect$ui$element$pick_element_$_self);

return removeEventListener("mouseover",over_handler);
});})(marker,marker_label,current,over_handler,map__44834,map__44834__$1,on_pick,app_id))
;
var G__44867_44895 = marker;
var G__44868_44896 = ({"display": "block", "top": "-100000px", "left": "-100000px"});
goog.style.setStyle(G__44867_44895,G__44868_44896);

var G__44869_44897 = marker_label;
var G__44870_44898 = ({"display": "block", "top": "-100000px", "left": "-100000px"});
goog.style.setStyle(G__44869_44897,G__44870_44898);

addEventListener("mouseover",over_handler);

return setTimeout(((function (marker,marker_label,current,over_handler,pick_handler,map__44834,map__44834__$1,on_pick,app_id){
return (function (){
return addEventListener("click",pick_handler);
});})(marker,marker_label,current,over_handler,pick_handler,map__44834,map__44834__$1,on_pick,app_id))
,(10));
});
fulcro.inspect.ui.element.inspect_component = (function fulcro$inspect$ui$element$inspect_component(comp){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.element","display-name","fulcro.inspect.ui.element/display-name",-1091845070),(function (){var G__44899 = comp;
var G__44899__$1 = (((G__44899 == null))?null:fulcro.client.primitives.react_type(G__44899));
if((G__44899__$1 == null)){
return null;
} else {
return goog.object.get(G__44899__$1,"displayName");
}
})(),new cljs.core.Keyword("fulcro.inspect.ui.element","props","fulcro.inspect.ui.element/props",-1984763386),fulcro.client.primitives.props(comp),new cljs.core.Keyword("fulcro.inspect.ui.element","ident","fulcro.inspect.ui.element/ident",-1839254913),(function (){try{return fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(comp);
}catch (e44900){var _ = e44900;
return null;
}})(),new cljs.core.Keyword("fulcro.inspect.ui.element","query","fulcro.inspect.ui.element/query",113020567),(function (){try{var G__44902 = comp;
var G__44902__$1 = (((G__44902 == null))?null:fulcro.client.primitives.react_type(G__44902));
if((G__44902__$1 == null)){
return null;
} else {
return fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(G__44902__$1);
}
}catch (e44901){var _ = e44901;
return null;
}})()], null);
});
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.element","set-element","fulcro.inspect.ui.element/set-element",1898236728,null),(function (env44908,_,details){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44908;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("ui","picking?","ui/picking?",969621556),false], 0));

fulcro.inspect.helpers.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","details","fulcro.inspect.ui.element/details",-398996132)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.ui.element","ident","fulcro.inspect.ui.element/ident",-1839254913),null], 0));

fulcro.inspect.helpers.remove_edge_BANG_(env,new cljs.core.Keyword("fulcro.inspect.ui.element","details","fulcro.inspect.ui.element/details",-398996132));

return fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,fulcro.inspect.ui.element.Details,details,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("fulcro.inspect.ui.element","details","fulcro.inspect.ui.element/details",-398996132)], 0));
});})(env))
], null);
})(),(function (){var env = env44908;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
if(typeof fulcro.inspect.ui.element.Panel !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.element.Panel = (function fulcro$inspect$ui$element$Panel(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.element.Panel.prototype = goog.object.clone(React.Component.prototype);
}

var x44913_44955 = fulcro.inspect.ui.element.Panel.prototype;
x44913_44955.componentDidMount = ((function (x44913_44955){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44913_44955))
;

x44913_44955.componentWillUpdate = ((function (x44913_44955){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44959 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44960 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44959,next_ident__38531__auto___44960)){
var idxr__38532__auto___44962 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44962 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44962),((function (idxr__38532__auto___44962,ident__38530__auto___44959,next_ident__38531__auto___44960,this__38521__auto__,x44913_44955){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44959], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44960], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44962,ident__38530__auto___44959,next_ident__38531__auto___44960,this__38521__auto__,x44913_44955))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44913_44955))
;

x44913_44955.shouldComponentUpdate = ((function (x44913_44955){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44919 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44919);
} else {
return G__44919;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44921 = this__38521__auto__.state;
var G__44922 = "fulcro$state";
return goog.object.get(G__44921,G__44922);
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
});})(x44913_44955))
;

x44913_44955.componentWillUnmount = ((function (x44913_44955){
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
});})(x44913_44955))
;

x44913_44955.componentDidUpdate = ((function (x44913_44955){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44913_44955))
;

x44913_44955.componentWillMount = ((function (x44913_44955){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44913_44955))
;

x44913_44955.render = ((function (x44913_44955){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44927 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44928 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44929 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44930 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44931 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44936 = fulcro.client.primitives.props(this$);
var map__44936__$1 = ((((!((map__44936 == null)))?(((((map__44936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44936):map__44936);
var props = map__44936__$1;
var picking_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44936__$1,new cljs.core.Keyword("ui","picking?","ui/picking?",969621556));
var panel_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44936__$1,new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.element.Panel);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__44938 = cljs.core.PersistentArrayMap.EMPTY;
var G__44939 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic((function (){var G__44940 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__44938,map__44936,map__44936__$1,props,picking_QMARK_,panel_id,css,_STAR_reconciler_STAR_44927,_STAR_depth_STAR_44928,_STAR_shared_STAR_44929,_STAR_instrument_STAR_44930,_STAR_parent_STAR_44931,this$,this__38520__auto__,x44913_44955){
return (function (){
fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","picking?","ui/picking?",969621556),true);

return fulcro.inspect.ui.element.pick_element(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.element","app-id","fulcro.inspect.ui.element/app-id",217367420),(function (){try{return cljs.core.second(panel_id);
}catch (e44941){var _ = e44941;
return null;
}})(),new cljs.core.Keyword("fulcro.inspect.ui.element","on-pick","fulcro.inspect.ui.element/on-pick",-38511365),((function (G__44938,map__44936,map__44936__$1,props,picking_QMARK_,panel_id,css,_STAR_reconciler_STAR_44927,_STAR_depth_STAR_44928,_STAR_shared_STAR_44929,_STAR_instrument_STAR_44930,_STAR_parent_STAR_44931,this$,this__38520__auto__,x44913_44955){
return (function (comp){
if(cljs.core.truth_(comp)){
var details = fulcro.inspect.ui.element.inspect_component(comp);
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.element","set-element","fulcro.inspect.ui.element/set-element",1898236728,null),null,(1),null)),(new cljs.core.List(null,details,null,(1),null)))))], null));
} else {
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","picking?","ui/picking?",969621556),false);
}
});})(G__44938,map__44936,map__44936__$1,props,picking_QMARK_,panel_id,css,_STAR_reconciler_STAR_44927,_STAR_depth_STAR_44928,_STAR_shared_STAR_44929,_STAR_instrument_STAR_44930,_STAR_parent_STAR_44931,this$,this__38520__auto__,x44913_44955))
], null));
});})(G__44938,map__44936,map__44936__$1,props,picking_QMARK_,panel_id,css,_STAR_reconciler_STAR_44927,_STAR_depth_STAR_44928,_STAR_shared_STAR_44929,_STAR_instrument_STAR_44930,_STAR_parent_STAR_44931,this$,this__38520__auto__,x44913_44955))
], null);
if(cljs.core.truth_(picking_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44940,new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon-active","icon-active",-1832427784).cljs$core$IFn$_invoke$arity$1(css));
} else {
return G__44940;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gps_fixed","gps_fixed",436830533))], 0));
return (fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$2(G__44938,G__44939) : fulcro.inspect.ui.core.toolbar.call(null,G__44938,G__44939));
})()),fulcro.util.force_children((cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.ui.element","details","fulcro.inspect.ui.element/details",-398996132).cljs$core$IFn$_invoke$arity$1(props))?(function (){var G__44944 = new cljs.core.Keyword("fulcro.inspect.ui.element","details","fulcro.inspect.ui.element/details",-398996132).cljs$core$IFn$_invoke$arity$1(props);
return (fulcro.inspect.ui.element.details.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.element.details.cljs$core$IFn$_invoke$arity$1(G__44944) : fulcro.inspect.ui.element.details.call(null,G__44944));
})():null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44931;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44930;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44929;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44928;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44927;
}});})(x44913_44955))
;


fulcro.inspect.ui.element.Panel.prototype.constructor = fulcro.inspect.ui.element.Panel;

fulcro.inspect.ui.element.Panel.prototype.constructor.displayName = "fulcro.inspect.ui.element/Panel";

fulcro.inspect.ui.element.Panel.prototype.fulcro$isComponent = true;

var x44945_45003 = fulcro.inspect.ui.element.Panel;
x44945_45003.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44945_45003.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44945_45003){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),cljs.core.random_uuid()], null);
});})(x44945_45003))
;

x44945_45003.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44945_45003.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44945_45003){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44945_45003))
;

x44945_45003.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44945_45003.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44945_45003){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.Keyword("ui","picking?","ui/picking?",969621556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.element","details","fulcro.inspect.ui.element/details",-398996132),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element.Details)], null)], null);
});})(x44945_45003))
;

x44945_45003.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44945_45003.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44945_45003){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon-active",".icon-active",57256079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.c-icon","svg.c-icon",791857529),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#4682E9"], null)], null)], null)], null)], null);
});})(x44945_45003))
;

x44945_45003.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44945_45003){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.core.CSS,fulcro.inspect.ui.element.MarkerCSS,fulcro.inspect.ui.element.Details], null);
});})(x44945_45003))
;


var x44950_45008 = fulcro.inspect.ui.element.Panel.prototype;
x44950_45008.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44950_45008.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44950_45008){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),cljs.core.random_uuid()], null);
});})(x44950_45008))
;

x44950_45008.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44950_45008.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44950_45008){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44950_45008))
;

x44950_45008.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44950_45008.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44950_45008){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.element","panel-id","fulcro.inspect.ui.element/panel-id",714724520),new cljs.core.Keyword("ui","picking?","ui/picking?",969621556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.element","details","fulcro.inspect.ui.element/details",-398996132),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element.Details)], null)], null);
});})(x44950_45008))
;

x44950_45008.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44950_45008.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44950_45008){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon-active",".icon-active",57256079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.c-icon","svg.c-icon",791857529),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#4682E9"], null)], null)], null)], null)], null);
});})(x44950_45008))
;

x44950_45008.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44950_45008){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.core.CSS,fulcro.inspect.ui.element.MarkerCSS,fulcro.inspect.ui.element.Details], null);
});})(x44950_45008))
;


fulcro.inspect.ui.element.Panel.cljs$lang$type = true;

fulcro.inspect.ui.element.Panel.cljs$lang$ctorStr = "fulcro.inspect.ui.element/Panel";

fulcro.inspect.ui.element.Panel.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.element/Panel");
});
fulcro.inspect.ui.element.panel = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element.Panel);

//# sourceMappingURL=fulcro.inspect.ui.element.js.map

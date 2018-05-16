goog.provide('fulcro.inspect.ui.inspector');
goog.require('cljs.core');
goog.require('fulcro_css.css');
goog.require('fulcro.client.mutations');
goog.require('fulcro.inspect.ui.core');
goog.require('fulcro.inspect.ui.data_history');
goog.require('fulcro.inspect.ui.data_viewer');
goog.require('fulcro.inspect.ui.data_watcher');
goog.require('fulcro.inspect.ui.element');
goog.require('fulcro.inspect.ui.network');
goog.require('fulcro.inspect.ui.transactions');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
goog.require('fulcro.inspect.helpers');
if(typeof fulcro.inspect.ui.inspector.Inspector !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.inspector.Inspector = (function fulcro$inspect$ui$inspector$Inspector(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.inspector.Inspector.prototype = goog.object.clone(React.Component.prototype);
}

var x46075_46117 = fulcro.inspect.ui.inspector.Inspector.prototype;
x46075_46117.componentDidMount = ((function (x46075_46117){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x46075_46117))
;

x46075_46117.componentWillUpdate = ((function (x46075_46117){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___46118 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___46119 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___46118,next_ident__38531__auto___46119)){
var idxr__38532__auto___46123 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___46123 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___46123),((function (idxr__38532__auto___46123,ident__38530__auto___46118,next_ident__38531__auto___46119,this__38521__auto__,x46075_46117){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___46118], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___46119], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___46123,ident__38530__auto___46118,next_ident__38531__auto___46119,this__38521__auto__,x46075_46117))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x46075_46117))
;

x46075_46117.shouldComponentUpdate = ((function (x46075_46117){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__46080 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__46080);
} else {
return G__46080;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46081 = this__38521__auto__.state;
var G__46082 = "fulcro$state";
return goog.object.get(G__46081,G__46082);
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
});})(x46075_46117))
;

x46075_46117.componentWillUnmount = ((function (x46075_46117){
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
});})(x46075_46117))
;

x46075_46117.componentDidUpdate = ((function (x46075_46117){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x46075_46117))
;

x46075_46117.componentWillMount = ((function (x46075_46117){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x46075_46117))
;

x46075_46117.render = ((function (x46075_46117){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_46083 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46084 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_46085 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_46086 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_46087 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__46088 = fulcro.client.primitives.props(this$);
var map__46088__$1 = ((((!((map__46088 == null)))?(((((map__46088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46088):map__46088);
var props = map__46088__$1;
var target_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword("fulcro.inspect.ui.inspector","target-app","fulcro.inspect.ui.inspector/target-app",1521628481));
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword("fulcro.inspect.ui.inspector","app-state","fulcro.inspect.ui.inspector/app-state",-1147484576));
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword("fulcro.inspect.ui.inspector","tab","fulcro.inspect.ui.inspector/tab",-116631043));
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword("fulcro.inspect.ui.inspector","element","fulcro.inspect.ui.inspector/element",-603966681));
var network = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword("fulcro.inspect.ui.inspector","network","fulcro.inspect.ui.inspector/network",1598528347));
var transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword("fulcro.inspect.ui.inspector","transactions","fulcro.inspect.ui.inspector/transactions",-2066201560));
var more_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword("ui","more-open?","ui/more-open?",1003437467));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.inspector.Inspector);
var tab_item = ((function (map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117){
return (function (p__46091){
var map__46092 = p__46091;
var map__46092__$1 = ((((!((map__46092 == null)))?(((((map__46092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46092):map__46092);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092__$1,new cljs.core.Keyword(null,"title","title",636505583));
var html_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092__$1,new cljs.core.Keyword(null,"html-title","html-title",1353481924));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092__$1,new cljs.core.Keyword(null,"page","page",849072397));
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": (function (){var G__46094 = new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(css);
var G__46094__$1 = (cljs.core.truth_(disabled_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46094)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab-disabled","tab-disabled",737107727).cljs$core$IFn$_invoke$arity$1(css))].join(''):G__46094);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,page)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46094__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab-selected","tab-selected",249855202).cljs$core$IFn$_invoke$arity$1(css))].join('');
} else {
return G__46094__$1;
}
})(), "title": html_title, "onClick": ((function (map__46092,map__46092__$1,title,html_title,disabled_QMARK_,page,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117){
return (function (){
if(cljs.core.not(disabled_QMARK_)){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.inspector","tab","fulcro.inspect.ui.inspector/tab",-116631043),page);
} else {
return null;
}
});})(map__46092,map__46092__$1,title,html_title,disabled_QMARK_,page,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117))
}),fulcro.util.force_children(title)]);
});})(map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117))
;
var map__46090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null));
var map__46090__$1 = ((((!((map__46090 == null)))?(((((map__46090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46090):map__46090);
var dock_side = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46090__$1,new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160));
var set_dock_BANG_ = ((function (tab_item,map__46090,map__46090__$1,dock_side,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117){
return (function (p1__46055_SHARP_){
fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_reconciler(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.helpers","persistent-set-props","fulcro.inspect.helpers/persistent-set-props",-1753072879,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.helpers","local-key","fulcro.inspect.helpers/local-key",-858551382),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.helpers","storage-key","fulcro.inspect.helpers/storage-key",1801490937),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.core","dock-side","fulcro.inspect.core/dock-side",-999703424),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.helpers","value","fulcro.inspect.helpers/value",1147993961),null,(1),null)),(new cljs.core.List(null,p1__46055_SHARP_,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160),null,(1),null)))))));

return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","more-open?","ui/more-open?",1003437467),false);
});})(tab_item,map__46090,map__46090__$1,dock_side,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117))
;
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117){
return (function (){
if(cljs.core.truth_(more_open_QMARK_)){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","more-open?","ui/more-open?",1003437467),false);
} else {
return null;
}
});})(tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117))
}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(tab_item(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"DB",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("fulcro.inspect.ui.inspector","page-db","fulcro.inspect.ui.inspector/page-db",1681046108)], null))),fulcro.util.force_children(tab_item(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Element",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("fulcro.inspect.ui.inspector","page-element","fulcro.inspect.ui.inspector/page-element",-598016244)], null))),fulcro.util.force_children(tab_item(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Transactions",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("fulcro.inspect.ui.inspector","page-transactions","fulcro.inspect.ui.inspector/page-transactions",1830373775)], null))),fulcro.util.force_children(tab_item(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Network",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("fulcro.inspect.ui.inspector","page-network","fulcro.inspect.ui.inspector/page-network",2091047715)], null))),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(css)})])),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"more","more",-2058821800).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117){
return (function (e){
e.stopPropagation();

return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","more-open?","ui/more-open?",1003437467));
});})(tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117))
}),fulcro.util.force_children(fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"more_vert","more_vert",-1362542752)))]))])),fulcro.util.force_children((cljs.core.truth_(more_open_QMARK_)?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"more-panel","more-panel",-459401242).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117){
return (function (p1__46056_SHARP_){
return p1__46056_SHARP_.stopPropagation();
});})(tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117))
}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"dock-side","dock-side",-1797998460).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"dock-title","dock-title",-89722314).cljs$core$IFn$_invoke$arity$1(css)}),"Dock side"])),fulcro.util.force_children(fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"dock-icon","dock-icon",693009746).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"title","title",636505583),"Dock to bottom",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117){
return (function (){
return set_dock_BANG_(new cljs.core.Keyword("fulcro.inspect.core","dock-bottom","fulcro.inspect.core/dock-bottom",-1441669555));
});})(tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dock_side,new cljs.core.Keyword("fulcro.inspect.core","dock-bottom","fulcro.inspect.core/dock-bottom",-1441669555)))?new cljs.core.Keyword(null,"dock-bottom-blue","dock-bottom-blue",-537131060):new cljs.core.Keyword(null,"dock-bottom","dock-bottom",-123209135)))),fulcro.util.force_children(fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"dock-icon","dock-icon",693009746).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"title","title",636505583),"Dock to right",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117){
return (function (){
return set_dock_BANG_(new cljs.core.Keyword("fulcro.inspect.core","dock-right","fulcro.inspect.core/dock-right",1966122867));
});})(tab_item,map__46090,map__46090__$1,dock_side,set_dock_BANG_,map__46088,map__46088__$1,props,target_app,app_state,tab,element,network,transactions,more_open_QMARK_,_,css,_STAR_reconciler_STAR_46083,_STAR_depth_STAR_46084,_STAR_shared_STAR_46085,_STAR_instrument_STAR_46086,_STAR_parent_STAR_46087,this$,this__38520__auto__,x46075_46117))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dock_side,new cljs.core.Keyword("fulcro.inspect.core","dock-right","fulcro.inspect.core/dock-right",1966122867)))?new cljs.core.Keyword(null,"dock-right-blue","dock-right-blue",51799240):new cljs.core.Keyword(null,"dock-right","dock-right",-1512832137))))]))]):null)),fulcro.util.force_children((function (){var G__46102 = tab;
var G__46102__$1 = (((G__46102 instanceof cljs.core.Keyword))?G__46102.fqn:null);
switch (G__46102__$1) {
case "fulcro.inspect.ui.inspector/page-db":
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"tab-content","tab-content",291252087).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__46103 = fulcro.client.primitives.computed(app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target-app","target-app",876281807),target_app], null));
return (fulcro.inspect.ui.data_history.data_history.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.data_history.data_history.cljs$core$IFn$_invoke$arity$1(G__46103) : fulcro.inspect.ui.data_history.data_history.call(null,G__46103));
})())]);

break;
case "fulcro.inspect.ui.inspector/page-element":
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"tab-content","tab-content",291252087).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((fulcro.inspect.ui.element.panel.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.element.panel.cljs$core$IFn$_invoke$arity$1(element) : fulcro.inspect.ui.element.panel.call(null,element)))]);

break;
case "fulcro.inspect.ui.inspector/page-transactions":
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"tab-content","tab-content",291252087).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__46104 = fulcro.client.primitives.computed(transactions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target-app","target-app",876281807),target_app], null));
return (fulcro.inspect.ui.transactions.transaction_list.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.transactions.transaction_list.cljs$core$IFn$_invoke$arity$1(G__46104) : fulcro.inspect.ui.transactions.transaction_list.call(null,G__46104));
})())]);

break;
case "fulcro.inspect.ui.inspector/page-network":
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"tab-content","tab-content",291252087).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((fulcro.inspect.ui.network.network_history.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.network.network_history.cljs$core$IFn$_invoke$arity$1(network) : fulcro.inspect.ui.network.network_history.call(null,network)))]);

break;
default:
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"tab-content","tab-content",291252087).cljs$core$IFn$_invoke$arity$1(css)}),"Invalid page ",fulcro.util.force_children(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tab], 0)))]);

}
})())]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_46087;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_46086;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_46085;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_46084;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46083;
}});})(x46075_46117))
;


fulcro.inspect.ui.inspector.Inspector.prototype.constructor = fulcro.inspect.ui.inspector.Inspector;

fulcro.inspect.ui.inspector.Inspector.prototype.constructor.displayName = "fulcro.inspect.ui.inspector/Inspector";

fulcro.inspect.ui.inspector.Inspector.prototype.fulcro$isComponent = true;

var x46108_46143 = fulcro.inspect.ui.inspector.Inspector;
x46108_46143.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x46108_46143.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x46108_46143){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tabs",".tabs",642963783),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"background","background",-863952629),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_normal,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #ccc",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tab",".tab",1455359754),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 10px 5px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#e5e5e5",new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_strong], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.tab-selected","&.tab-selected",-1184997697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid #5c7ebb",new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_strong,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-1px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.tab-disabled","&.tab-disabled",2029943686),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_faded,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"transparent"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tab-content",".tab-content",-1261724363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.spaced","&.spaced",-302340253),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more",".more",196863026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.8)",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more-panel",".more-panel",-16737937),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],[fulcro.inspect.ui.core.box_shadow,"26px","#f3f3f3","1","14px","0","absolute","1px solid #C8C8C8","4px"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dock-side",".dock-side",-598079902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dock-title",".dock-title",839587003),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dock-icon",".dock-icon",-499065816),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"width","width",-384071477),"14px",new cljs.core.Keyword(null,"height","height",1025178622),"12px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 5px"], null)], null)], null);
});})(x46108_46143))
;

x46108_46143.fulcro_css$css$CSS$include_children$arity$1 = ((function (x46108_46143){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_history.DataHistory,fulcro.inspect.ui.network.NetworkHistory,fulcro.inspect.ui.transactions.TransactionList,fulcro.inspect.ui.element.Panel], null);
});})(x46108_46143))
;

x46108_46143.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x46108_46143.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x46108_46143){
return (function (this$,state){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.inspector","tab","fulcro.inspect.ui.inspector/tab",-116631043),new cljs.core.Keyword("fulcro.inspect.ui.inspector","page-db","fulcro.inspect.ui.inspector/page-db",1681046108),new cljs.core.Keyword("fulcro.inspect.ui.inspector","app-state","fulcro.inspect.ui.inspector/app-state",-1147484576),cljs.core.assoc_in(fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_history.DataHistory,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,true])),new cljs.core.Keyword("fulcro.inspect.ui.inspector","element","fulcro.inspect.ui.inspector/element",-603966681),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.element.Panel,null),new cljs.core.Keyword("fulcro.inspect.ui.inspector","network","fulcro.inspect.ui.inspector/network",1598528347),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.network.NetworkHistory,null),new cljs.core.Keyword("fulcro.inspect.ui.inspector","transactions","fulcro.inspect.ui.inspector/transactions",-2066201560),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.transactions.TransactionList,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("ui","more-open?","ui/more-open?",1003437467),false], null);
});})(x46108_46143))
;

x46108_46143.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x46108_46143.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x46108_46143){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x46108_46143))
;

x46108_46143.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x46108_46143.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x46108_46143){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","tab","fulcro.inspect.ui.inspector/tab",-116631043),new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),new cljs.core.Keyword("ui","more-open?","ui/more-open?",1003437467),new cljs.core.Keyword("fulcro.inspect.ui.inspector","target-app","fulcro.inspect.ui.inspector/target-app",1521628481),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160)], null)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","app-state","fulcro.inspect.ui.inspector/app-state",-1147484576),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_history.DataHistory)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","element","fulcro.inspect.ui.inspector/element",-603966681),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element.Panel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","network","fulcro.inspect.ui.inspector/network",1598528347),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.network.NetworkHistory)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","transactions","fulcro.inspect.ui.inspector/transactions",-2066201560),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.transactions.TransactionList)], null)], null);
});})(x46108_46143))
;


var x46113_46144 = fulcro.inspect.ui.inspector.Inspector.prototype;
x46113_46144.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x46113_46144.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x46113_46144){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tabs",".tabs",642963783),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"background","background",-863952629),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_normal,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #ccc",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tab",".tab",1455359754),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 10px 5px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#e5e5e5",new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_strong], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.tab-selected","&.tab-selected",-1184997697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid #5c7ebb",new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_strong,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-1px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.tab-disabled","&.tab-disabled",2029943686),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_faded,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"transparent"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tab-content",".tab-content",-1261724363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.spaced","&.spaced",-302340253),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more",".more",196863026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.8)",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more-panel",".more-panel",-16737937),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],[fulcro.inspect.ui.core.box_shadow,"26px","#f3f3f3","1","14px","0","absolute","1px solid #C8C8C8","4px"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dock-side",".dock-side",-598079902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dock-title",".dock-title",839587003),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".dock-icon",".dock-icon",-499065816),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"width","width",-384071477),"14px",new cljs.core.Keyword(null,"height","height",1025178622),"12px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 5px"], null)], null)], null);
});})(x46113_46144))
;

x46113_46144.fulcro_css$css$CSS$include_children$arity$1 = ((function (x46113_46144){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_history.DataHistory,fulcro.inspect.ui.network.NetworkHistory,fulcro.inspect.ui.transactions.TransactionList,fulcro.inspect.ui.element.Panel], null);
});})(x46113_46144))
;

x46113_46144.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x46113_46144.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x46113_46144){
return (function (this$,state){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.inspector","tab","fulcro.inspect.ui.inspector/tab",-116631043),new cljs.core.Keyword("fulcro.inspect.ui.inspector","page-db","fulcro.inspect.ui.inspector/page-db",1681046108),new cljs.core.Keyword("fulcro.inspect.ui.inspector","app-state","fulcro.inspect.ui.inspector/app-state",-1147484576),cljs.core.assoc_in(fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_history.DataHistory,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,true])),new cljs.core.Keyword("fulcro.inspect.ui.inspector","element","fulcro.inspect.ui.inspector/element",-603966681),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.element.Panel,null),new cljs.core.Keyword("fulcro.inspect.ui.inspector","network","fulcro.inspect.ui.inspector/network",1598528347),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.network.NetworkHistory,null),new cljs.core.Keyword("fulcro.inspect.ui.inspector","transactions","fulcro.inspect.ui.inspector/transactions",-2066201560),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.transactions.TransactionList,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("ui","more-open?","ui/more-open?",1003437467),false], null);
});})(x46113_46144))
;

x46113_46144.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x46113_46144.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x46113_46144){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x46113_46144))
;

x46113_46144.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x46113_46144.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x46113_46144){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","tab","fulcro.inspect.ui.inspector/tab",-116631043),new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),new cljs.core.Keyword("ui","more-open?","ui/more-open?",1003437467),new cljs.core.Keyword("fulcro.inspect.ui.inspector","target-app","fulcro.inspect.ui.inspector/target-app",1521628481),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","dock-side","ui/dock-side",-1798002160)], null)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","app-state","fulcro.inspect.ui.inspector/app-state",-1147484576),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_history.DataHistory)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","element","fulcro.inspect.ui.inspector/element",-603966681),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.element.Panel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","network","fulcro.inspect.ui.inspector/network",1598528347),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.network.NetworkHistory)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","transactions","fulcro.inspect.ui.inspector/transactions",-2066201560),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.transactions.TransactionList)], null)], null);
});})(x46113_46144))
;


fulcro.inspect.ui.inspector.Inspector.cljs$lang$type = true;

fulcro.inspect.ui.inspector.Inspector.cljs$lang$ctorStr = "fulcro.inspect.ui.inspector/Inspector";

fulcro.inspect.ui.inspector.Inspector.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.inspector/Inspector");
});
fulcro.inspect.ui.inspector.inspector = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.inspector.Inspector);

//# sourceMappingURL=fulcro.inspect.ui.inspector.js.map

goog.provide('fulcro.inspect.ui.transactions');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('clojure.string');
goog.require('fulcro_css.css');
goog.require('fulcro.client.mutations');
goog.require('fulcro.inspect.helpers');
goog.require('fulcro.inspect.ui.core');
goog.require('fulcro.inspect.ui.data_viewer');
goog.require('goog.object');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
if(typeof fulcro.inspect.ui.transactions.TransactionRow !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.transactions.TransactionRow = (function fulcro$inspect$ui$transactions$TransactionRow(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.transactions.TransactionRow.prototype = goog.object.clone(React.Component.prototype);
}

var x44599_44678 = fulcro.inspect.ui.transactions.TransactionRow.prototype;
x44599_44678.componentDidMount = ((function (x44599_44678){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44599_44678))
;

x44599_44678.componentWillUpdate = ((function (x44599_44678){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44680 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44681 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44680,next_ident__38531__auto___44681)){
var idxr__38532__auto___44683 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44683 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44683),((function (idxr__38532__auto___44683,ident__38530__auto___44680,next_ident__38531__auto___44681,this__38521__auto__,x44599_44678){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44680], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44681], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44683,ident__38530__auto___44680,next_ident__38531__auto___44681,this__38521__auto__,x44599_44678))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44599_44678))
;

x44599_44678.shouldComponentUpdate = ((function (x44599_44678){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44608 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44608);
} else {
return G__44608;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44614 = this__38521__auto__.state;
var G__44615 = "fulcro$state";
return goog.object.get(G__44614,G__44615);
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
});})(x44599_44678))
;

x44599_44678.componentWillUnmount = ((function (x44599_44678){
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
});})(x44599_44678))
;

x44599_44678.componentDidUpdate = ((function (x44599_44678){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44599_44678))
;

x44599_44678.componentWillMount = ((function (x44599_44678){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44599_44678))
;

x44599_44678.render = ((function (x44599_44678){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44622 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44623 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44624 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44625 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44626 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44632 = fulcro.client.primitives.props(this$);
var map__44632__$1 = ((((!((map__44632 == null)))?(((((map__44632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44632):map__44632);
var props = map__44632__$1;
var tx_row_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44632__$1,new cljs.core.Keyword("ui","tx-row-view","ui/tx-row-view",839808511));
var client_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44632__$1,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278));
var map__44633 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
var map__44633__$1 = ((((!((map__44633 == null)))?(((((map__44633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44633):map__44633);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44633__$1,new cljs.core.Keyword("fulcro.inspect.ui.transactions","on-select","fulcro.inspect.ui.transactions/on-select",415769996));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44633__$1,new cljs.core.Keyword("fulcro.inspect.ui.transactions","selected?","fulcro.inspect.ui.transactions/selected?",-1224890638));
var on_replay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44633__$1,new cljs.core.Keyword("fulcro.inspect.ui.transactions","on-replay","fulcro.inspect.ui.transactions/on-replay",-1382275086));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.transactions.TransactionRow);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": (function (){var G__44638 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css);
if(cljs.core.truth_(selected_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44638)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(css))].join('');
} else {
return G__44638;
}
})(), "onClick": ((function (map__44632,map__44632__$1,props,tx_row_view,client_time,map__44633,map__44633__$1,on_select,selected_QMARK_,on_replay,css,_STAR_reconciler_STAR_44622,_STAR_depth_STAR_44623,_STAR_shared_STAR_44624,_STAR_instrument_STAR_44625,_STAR_parent_STAR_44626,this$,this__38520__auto__,x44599_44678){
return (function (){
if(cljs.core.truth_(on_select)){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(props) : on_select.call(null,props));
} else {
return null;
}
});})(map__44632,map__44632__$1,props,tx_row_view,client_time,map__44633,map__44633__$1,on_select,selected_QMARK_,on_replay,css,_STAR_reconciler_STAR_44622,_STAR_depth_STAR_44623,_STAR_shared_STAR_44624,_STAR_instrument_STAR_44625,_STAR_parent_STAR_44626,this$,this__38520__auto__,x44599_44678))
}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.inspect.ui.core.print_timestamp(client_time))])),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"data-container","data-container",1473653353).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.inspect.ui.data_viewer.data_viewer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_row_view,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","static?","fulcro.inspect.ui.data-viewer/static?",1252357018),true)))])),fulcro.util.force_children((cljs.core.truth_(on_replay)?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (map__44632,map__44632__$1,props,tx_row_view,client_time,map__44633,map__44633__$1,on_select,selected_QMARK_,on_replay,css,_STAR_reconciler_STAR_44622,_STAR_depth_STAR_44623,_STAR_shared_STAR_44624,_STAR_instrument_STAR_44625,_STAR_parent_STAR_44626,this$,this__38520__auto__,x44599_44678){
return (function (p1__44590_SHARP_){
p1__44590_SHARP_.stopPropagation();

return (on_replay.cljs$core$IFn$_invoke$arity$1 ? on_replay.cljs$core$IFn$_invoke$arity$1(props) : on_replay.call(null,props));
});})(map__44632,map__44632__$1,props,tx_row_view,client_time,map__44633,map__44633__$1,on_select,selected_QMARK_,on_replay,css,_STAR_reconciler_STAR_44622,_STAR_depth_STAR_44623,_STAR_shared_STAR_44624,_STAR_instrument_STAR_44625,_STAR_parent_STAR_44626,this$,this__38520__auto__,x44599_44678))
}),fulcro.util.force_children(fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Replay mutation"], null),new cljs.core.Keyword(null,"refresh","refresh",1947415525)))]):null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44626;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44625;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44624;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44623;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44622;
}});})(x44599_44678))
;


fulcro.inspect.ui.transactions.TransactionRow.prototype.constructor = fulcro.inspect.ui.transactions.TransactionRow;

fulcro.inspect.ui.transactions.TransactionRow.prototype.constructor.displayName = "fulcro.inspect.ui.transactions/TransactionRow";

fulcro.inspect.ui.transactions.TransactionRow.prototype.fulcro$isComponent = true;

var x44647_44713 = fulcro.inspect.ui.transactions.TransactionRow;
x44647_44713.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44647_44713.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44647_44713){
return (function (_,p__44648){
var map__44649 = p__44648;
var map__44649__$1 = ((((!((map__44649 == null)))?(((((map__44649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44649):map__44649);
var transaction = map__44649__$1;
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44649__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ___$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("ui","tx-row-view","ui/tx-row-view",839808511),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,tx)], null),transaction], 0));
});})(x44647_44713))
;

x44647_44713.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44647_44713.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44647_44713){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44647_44713))
;

x44647_44713.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44647_44713.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44647_44713){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","tx-row-view","ui/tx-row-view",839808511),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44647_44713))
;

x44647_44713.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44647_44713.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44647_44713){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #eee",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon",".icon",1539505086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),fulcro.inspect.ui.core.color_row_hover], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon",".icon",1539505086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.selected","&.selected",-406082501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),fulcro.inspect.ui.core.color_row_selected], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-container",".data-container",-1473223121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon",".icon",1539505086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"-5px 6px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$c-icon","$c-icon",821230173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_normal,new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.7)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_strong], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".timestamp",".timestamp",-286443380),fulcro.inspect.ui.core.css_timestamp], null)], null);
});})(x44647_44713))
;

x44647_44713.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44647_44713){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer], null);
});})(x44647_44713))
;


var x44663_44722 = fulcro.inspect.ui.transactions.TransactionRow.prototype;
x44663_44722.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44663_44722.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44663_44722){
return (function (_,p__44664){
var map__44665 = p__44664;
var map__44665__$1 = ((((!((map__44665 == null)))?(((((map__44665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44665):map__44665);
var transaction = map__44665__$1;
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44665__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ___$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("ui","tx-row-view","ui/tx-row-view",839808511),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,tx)], null),transaction], 0));
});})(x44663_44722))
;

x44663_44722.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44663_44722.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44663_44722){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44663_44722))
;

x44663_44722.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44663_44722.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44663_44722){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","tx-row-view","ui/tx-row-view",839808511),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44663_44722))
;

x44663_44722.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44663_44722.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44663_44722){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #eee",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon",".icon",1539505086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),fulcro.inspect.ui.core.color_row_hover], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon",".icon",1539505086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.selected","&.selected",-406082501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),fulcro.inspect.ui.core.color_row_selected], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-container",".data-container",-1473223121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".icon",".icon",1539505086),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"-5px 6px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$c-icon","$c-icon",821230173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_normal,new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.7)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_strong], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".timestamp",".timestamp",-286443380),fulcro.inspect.ui.core.css_timestamp], null)], null);
});})(x44663_44722))
;

x44663_44722.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44663_44722){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer], null);
});})(x44663_44722))
;


fulcro.inspect.ui.transactions.TransactionRow.cljs$lang$type = true;

fulcro.inspect.ui.transactions.TransactionRow.cljs$lang$ctorStr = "fulcro.inspect.ui.transactions/TransactionRow";

fulcro.inspect.ui.transactions.TransactionRow.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.transactions/TransactionRow");
});
var factory_44741 = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.transactions.TransactionRow,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198)], null));
fulcro.inspect.ui.transactions.transaction_row = ((function (factory_44741){
return (function fulcro$inspect$ui$transactions$transaction_row(props,computed){
var G__44738 = fulcro.client.primitives.computed(props,computed);
return (factory_44741.cljs$core$IFn$_invoke$arity$1 ? factory_44741.cljs$core$IFn$_invoke$arity$1(G__44738) : factory_44741.call(null,G__44738));
});})(factory_44741))
;
if(typeof fulcro.inspect.ui.transactions.Transaction !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.transactions.Transaction = (function fulcro$inspect$ui$transactions$Transaction(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.transactions.Transaction.prototype = goog.object.clone(React.Component.prototype);
}

var x44749_44809 = fulcro.inspect.ui.transactions.Transaction.prototype;
x44749_44809.componentDidMount = ((function (x44749_44809){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44749_44809))
;

x44749_44809.componentWillUpdate = ((function (x44749_44809){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44817 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44818 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44817,next_ident__38531__auto___44818)){
var idxr__38532__auto___44819 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44819 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44819),((function (idxr__38532__auto___44819,ident__38530__auto___44817,next_ident__38531__auto___44818,this__38521__auto__,x44749_44809){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44817], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44818], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44819,ident__38530__auto___44817,next_ident__38531__auto___44818,this__38521__auto__,x44749_44809))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44749_44809))
;

x44749_44809.shouldComponentUpdate = ((function (x44749_44809){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44753 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44753);
} else {
return G__44753;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44755 = this__38521__auto__.state;
var G__44756 = "fulcro$state";
return goog.object.get(G__44755,G__44756);
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
});})(x44749_44809))
;

x44749_44809.componentWillUnmount = ((function (x44749_44809){
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
});})(x44749_44809))
;

x44749_44809.componentDidUpdate = ((function (x44749_44809){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44749_44809))
;

x44749_44809.componentWillMount = ((function (x44749_44809){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44749_44809))
;

x44749_44809.render = ((function (x44749_44809){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44761 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44762 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44763 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44764 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44765 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44766 = fulcro.client.primitives.props(this$);
var map__44766__$1 = ((((!((map__44766 == null)))?(((((map__44766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44766):map__44766);
var ret_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword("ui","ret-view","ui/ret-view",-1696067883));
var diff_rem_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword("ui","diff-rem-view","ui/diff-rem-view",-1438720607));
var sends_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword("ui","sends-view","ui/sends-view",994781198));
var network_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789));
var tx_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword("ui","tx-view","ui/tx-view",-1330776934));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var diff_add_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword("ui","diff-add-view","ui/diff-add-view",1309037526));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var new_state_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword("ui","new-state-view","ui/new-state-view",-856169443));
var old_state_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44766__$1,new cljs.core.Keyword("ui","old-state-view","ui/old-state-view",-875791584));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.transactions.Transaction);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Ref"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.ident(cljs.core.PersistentArrayMap.EMPTY,ref)], 0))),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Transaction"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(tx_view)], 0))),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Response"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(ret_view)], 0))),fulcro.util.force_children(((cljs.core.seq(network_sends))?fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Sends"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(sends_view)], 0)):null)),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Diff added"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(diff_add_view)], 0))),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Diff removed"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(diff_rem_view)], 0))),fulcro.util.force_children((cljs.core.truth_(component)?fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Component"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.comp_display_name(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__44768 = fulcro.client.primitives.react_type(component);
var G__44769 = "displayName";
return goog.object.get(G__44768,G__44769);
})())], 0)):null)),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"State before"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(old_state_view)], 0))),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"State after"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(new_state_view)], 0)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44765;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44764;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44763;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44762;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44761;
}});})(x44749_44809))
;


fulcro.inspect.ui.transactions.Transaction.prototype.constructor = fulcro.inspect.ui.transactions.Transaction;

fulcro.inspect.ui.transactions.Transaction.prototype.constructor.displayName = "fulcro.inspect.ui.transactions/Transaction";

fulcro.inspect.ui.transactions.Transaction.prototype.fulcro$isComponent = true;

var x44770_44887 = fulcro.inspect.ui.transactions.Transaction;
x44770_44887.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44770_44887.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44770_44887){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
});})(x44770_44887))
;

x44770_44887.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44770_44887){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer], null);
});})(x44770_44887))
;

x44770_44887.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44770_44887.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44770_44887){
return (function (this$,p__44776){
var map__44777 = p__44776;
var map__44777__$1 = ((((!((map__44777 == null)))?(((((map__44777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44777):map__44777);
var transaction = map__44777__$1;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44777__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44777__$1,new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993));
var network_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44777__$1,new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789));
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44777__$1,new cljs.core.Keyword("fulcro.history","db-before","fulcro.history/db-before",650457365));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44777__$1,new cljs.core.Keyword("fulcro.history","db-after","fulcro.history/db-after",-1774997361));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.transactions.TransactionRow,transaction),transaction,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),cljs.core.random_uuid(),new cljs.core.Keyword("ui","tx-view","ui/tx-view",-1330776934),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,tx),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,true])),new cljs.core.Keyword("ui","ret-view","ui/ret-view",-1696067883),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,ret),new cljs.core.Keyword("ui","sends-view","ui/sends-view",994781198),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,network_sends),new cljs.core.Keyword("ui","old-state-view","ui/old-state-view",-875791584),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,db_before),new cljs.core.Keyword("ui","new-state-view","ui/new-state-view",-856169443),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,db_after)], null)], 0));
});})(x44770_44887))
;

x44770_44887.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44770_44887.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44770_44887){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44770_44887))
;

x44770_44887.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44770_44887.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44770_44887){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),new cljs.core.Keyword("fulcro.inspect.ui.transactions","timestamp","fulcro.inspect.ui.transactions/timestamp",1321869025),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"old-state","old-state",1039580704),new cljs.core.Keyword(null,"new-state","new-state",-490349212),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","tx-view","ui/tx-view",-1330776934),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","ret-view","ui/ret-view",-1696067883),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","tx-row-view","ui/tx-row-view",839808511),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","sends-view","ui/sends-view",994781198),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","old-state-view","ui/old-state-view",-875791584),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","new-state-view","ui/new-state-view",-856169443),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","diff-add-view","ui/diff-add-view",1309037526),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","diff-rem-view","ui/diff-rem-view",-1438720607),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44770_44887))
;


var x44784_44903 = fulcro.inspect.ui.transactions.Transaction.prototype;
x44784_44903.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44784_44903.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44784_44903){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
});})(x44784_44903))
;

x44784_44903.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44784_44903){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer], null);
});})(x44784_44903))
;

x44784_44903.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44784_44903.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44784_44903){
return (function (this$,p__44786){
var map__44787 = p__44786;
var map__44787__$1 = ((((!((map__44787 == null)))?(((((map__44787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44787):map__44787);
var transaction = map__44787__$1;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44787__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44787__$1,new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993));
var network_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44787__$1,new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789));
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44787__$1,new cljs.core.Keyword("fulcro.history","db-before","fulcro.history/db-before",650457365));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44787__$1,new cljs.core.Keyword("fulcro.history","db-after","fulcro.history/db-after",-1774997361));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.transactions.TransactionRow,transaction),transaction,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),cljs.core.random_uuid(),new cljs.core.Keyword("ui","tx-view","ui/tx-view",-1330776934),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,tx),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,true])),new cljs.core.Keyword("ui","ret-view","ui/ret-view",-1696067883),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,ret),new cljs.core.Keyword("ui","sends-view","ui/sends-view",994781198),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,network_sends),new cljs.core.Keyword("ui","old-state-view","ui/old-state-view",-875791584),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,db_before),new cljs.core.Keyword("ui","new-state-view","ui/new-state-view",-856169443),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,db_after)], null)], 0));
});})(x44784_44903))
;

x44784_44903.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44784_44903.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44784_44903){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44784_44903))
;

x44784_44903.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44784_44903.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44784_44903){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),new cljs.core.Keyword("fulcro.inspect.ui.transactions","timestamp","fulcro.inspect.ui.transactions/timestamp",1321869025),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"old-state","old-state",1039580704),new cljs.core.Keyword(null,"new-state","new-state",-490349212),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","tx-view","ui/tx-view",-1330776934),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","ret-view","ui/ret-view",-1696067883),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","tx-row-view","ui/tx-row-view",839808511),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","sends-view","ui/sends-view",994781198),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","old-state-view","ui/old-state-view",-875791584),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","new-state-view","ui/new-state-view",-856169443),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","diff-add-view","ui/diff-add-view",1309037526),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","diff-rem-view","ui/diff-rem-view",-1438720607),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44784_44903))
;


fulcro.inspect.ui.transactions.Transaction.cljs$lang$type = true;

fulcro.inspect.ui.transactions.Transaction.cljs$lang$ctorStr = "fulcro.inspect.ui.transactions/Transaction";

fulcro.inspect.ui.transactions.Transaction.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.transactions/Transaction");
});
fulcro.inspect.ui.transactions.transaction = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.transactions.Transaction,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198)], null));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.transactions","add-tx","fulcro.inspect.ui.transactions/add-tx",-536229177,null),(function (env44910,_,tx){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44910;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,fulcro.inspect.ui.transactions.Transaction,tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874)], 0));

return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874),((function (env){
return (function (p1__44909_SHARP_){
return cljs.core.vec(cljs.core.take_last((100),p1__44909_SHARP_));
});})(env))
], 0));
});})(env))
], null);
})(),(function (){var env = env44910;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.transactions","select-tx","fulcro.inspect.ui.transactions/select-tx",1904699802,null),(function (env44915,_,tx){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44915;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
var map__44916 = env;
var map__44916__$1 = ((((!((map__44916 == null)))?(((((map__44916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44916):map__44916);
var env__$1 = map__44916__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44916__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44916__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var tx_ref = fulcro.client.primitives.ident(fulcro.inspect.ui.transactions.Transaction,tx);
var map__44917 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),tx_ref);
var map__44917__$1 = ((((!((map__44917 == null)))?(((((map__44917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44917):map__44917);
var diff_computed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword("ui","diff-computed?","ui/diff-computed?",1839026745));
var old_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword(null,"old-state","old-state",1039580704));
var new_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword(null,"new-state","new-state",-490349212));
if(cljs.core.not(diff_computed_QMARK_)){
var vec__44924_44932 = clojure.data.diff(new_state,old_state);
var add_44933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44924_44932,(0),null);
var rem_44934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44924_44932,(1),null);
var env_SINGLEQUOTE__44935 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),tx_ref);
fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_SINGLEQUOTE__44935,fulcro.inspect.ui.data_viewer.DataViewer,add_44933,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("ui","diff-add-view","ui/diff-add-view",1309037526)], 0));

fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_SINGLEQUOTE__44935,fulcro.inspect.ui.data_viewer.DataViewer,rem_44934,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("ui","diff-rem-view","ui/diff-rem-view",-1438720607)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,tx_ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","diff-computed?","ui/diff-computed?",1839026745),true], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.inspect.ui.transactions","active-tx","fulcro.inspect.ui.transactions/active-tx",-845028666),tx_ref], 0));
});})(env))
], null);
})(),(function (){var env = env44915;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.transactions","clear-transactions","fulcro.inspect.ui.transactions/clear-transactions",-2123643353,null),(function (env44943,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44943;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
var map__44946 = env;
var map__44946__$1 = ((((!((map__44946 == null)))?(((((map__44946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44946):map__44946);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44946__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44946__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var tx_refs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("fulcro.inspect.ui.transactions","active-tx","fulcro.inspect.ui.transactions/active-tx",-845028666),null], 0));

if(cljs.core.seq(tx_refs)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__44946,map__44946__$1,state,ref,tx_refs,env){
return (function (p1__44942_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fulcro.inspect.helpers.deep_remove_ref,p1__44942_SHARP_,tx_refs);
});})(map__44946,map__44946__$1,state,ref,tx_refs,env))
);
} else {
return null;
}
});})(env))
], null);
})(),(function (){var env = env44943;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
if(typeof fulcro.inspect.ui.transactions.TransactionList !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.transactions.TransactionList = (function fulcro$inspect$ui$transactions$TransactionList(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.transactions.TransactionList.prototype = goog.object.clone(React.Component.prototype);
}

var x44958_45011 = fulcro.inspect.ui.transactions.TransactionList.prototype;
x44958_45011.componentDidMount = ((function (x44958_45011){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44958_45011))
;

x44958_45011.componentWillUpdate = ((function (x44958_45011){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___45013 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___45014 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___45013,next_ident__38531__auto___45014)){
var idxr__38532__auto___45017 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___45017 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___45017),((function (idxr__38532__auto___45017,ident__38530__auto___45013,next_ident__38531__auto___45014,this__38521__auto__,x44958_45011){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___45013], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___45014], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___45017,ident__38530__auto___45013,next_ident__38531__auto___45014,this__38521__auto__,x44958_45011))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44958_45011))
;

x44958_45011.shouldComponentUpdate = ((function (x44958_45011){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44964 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44964);
} else {
return G__44964;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44968 = this__38521__auto__.state;
var G__44969 = "fulcro$state";
return goog.object.get(G__44968,G__44969);
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
});})(x44958_45011))
;

x44958_45011.componentWillUnmount = ((function (x44958_45011){
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
});})(x44958_45011))
;

x44958_45011.componentDidUpdate = ((function (x44958_45011){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44958_45011))
;

x44958_45011.componentWillMount = ((function (x44958_45011){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44958_45011))
;

x44958_45011.render = ((function (x44958_45011){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44974 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44975 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44976 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44977 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44978 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44979 = fulcro.client.primitives.props(this$);
var map__44979__$1 = ((((!((map__44979 == null)))?(((((map__44979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44979):map__44979);
var props = map__44979__$1;
var tx_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44979__$1,new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874));
var active_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44979__$1,new cljs.core.Keyword("fulcro.inspect.ui.transactions","active-tx","fulcro.inspect.ui.transactions/active-tx",-845028666));
var tx_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44979__$1,new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-filter","fulcro.inspect.ui.transactions/tx-filter",1944506753));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.transactions.TransactionList);
var map__44980 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
var map__44980__$1 = ((((!((map__44980 == null)))?(((((map__44980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44980):map__44980);
var target_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44980__$1,new cljs.core.Keyword(null,"target-app","target-app",876281807));
var tx_list__$1 = ((cljs.core.seq(tx_filter))?cljs.core.filterv(((function (map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011){
return (function (p1__44952_SHARP_){
return clojure.string.includes_QMARK_(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(p1__44952_SHARP_)], 0)),tx_filter);
});})(map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011))
,tx_list):tx_list);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__44987 = cljs.core.PersistentArrayMap.EMPTY;
var G__44989 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__44987,map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.transactions","clear-transactions","fulcro.inspect.ui.transactions/clear-transactions",-2123643353,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
});})(G__44987,map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011))
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Clear transactions"], null),new cljs.core.Keyword(null,"do_not_disturb","do_not_disturb",-976357213))], 0));
var G__44990 = fulcro.inspect.ui.core.toolbar_separator();
var G__44991 = fulcro.inspect.ui.core.toolbar_text_field(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter",new cljs.core.Keyword(null,"value","value",305978217),tx_filter,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__44987,G__44989,G__44990,map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011){
return (function (p1__44953_SHARP_){
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-filter","fulcro.inspect.ui.transactions/tx-filter",1944506753),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),p1__44953_SHARP_], 0));
});})(G__44987,G__44989,G__44990,map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011))
], null));
return (fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$4 ? fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$4(G__44987,G__44989,G__44990,G__44991) : fulcro.inspect.ui.core.toolbar.call(null,G__44987,G__44989,G__44990,G__44991));
})()),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"transactions","transactions",-1425846118).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(((cljs.core.seq(tx_list__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011){
return (function (p1__44954_SHARP_){
return fulcro.inspect.ui.transactions.transaction_row(p1__44954_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","on-select","fulcro.inspect.ui.transactions/on-select",415769996),((function (map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011){
return (function (tx){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.transactions","select-tx","fulcro.inspect.ui.transactions/select-tx",1904699802,null),null,(1),null)),(new cljs.core.List(null,tx,null,(1),null)))))], null));
});})(map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011))
,new cljs.core.Keyword("fulcro.inspect.ui.transactions","on-replay","fulcro.inspect.ui.transactions/on-replay",-1382275086),((function (map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011){
return (function (p__44996){
var map__44997 = p__44996;
var map__44997__$1 = ((((!((map__44997 == null)))?(((((map__44997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44997):map__44997);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44997__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44997__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if(cljs.core.truth_(target_app)){
if(cljs.core.truth_(ref)){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(target_app),ref,tx);
} else {
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(target_app),tx);
}
} else {
return null;
}
});})(map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011))
,new cljs.core.Keyword("fulcro.inspect.ui.transactions","selected?","fulcro.inspect.ui.transactions/selected?",-1224890638),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198).cljs$core$IFn$_invoke$arity$1(active_tx),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198).cljs$core$IFn$_invoke$arity$1(p1__44954_SHARP_))], null));
});})(map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011))
,cljs.core.rseq(tx_list__$1)):null))])),fulcro.util.force_children((cljs.core.truth_(active_tx)?fulcro.inspect.ui.core.focus_panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__44999 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","classes","fulcro.inspect.ui.core/classes",2092032546),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411)], null)], null);
var G__45000 = fulcro.inspect.ui.core.toolbar_spacer();
var G__45001 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__44999,G__45000,map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.transactions","active-tx","fulcro.inspect.ui.transactions/active-tx",-845028666),null);
});})(G__44999,G__45000,map__44979,map__44979__$1,props,tx_list,active_tx,tx_filter,css,map__44980,map__44980__$1,target_app,tx_list__$1,_STAR_reconciler_STAR_44974,_STAR_depth_STAR_44975,_STAR_shared_STAR_44976,_STAR_instrument_STAR_44977,_STAR_parent_STAR_44978,this$,this__38520__auto__,x44958_45011))
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Close panel"], null),new cljs.core.Keyword(null,"clear","clear",1877104959))], 0));
return (fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$3 ? fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$3(G__44999,G__45000,G__45001) : fulcro.inspect.ui.core.toolbar.call(null,G__44999,G__45000,G__45001));
})(),fulcro.inspect.ui.core.focus_panel_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(fulcro.inspect.ui.transactions.transaction.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.transactions.transaction.cljs$core$IFn$_invoke$arity$1(active_tx) : fulcro.inspect.ui.transactions.transaction.call(null,active_tx))], 0))], 0)):null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44978;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44977;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44976;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44975;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44974;
}});})(x44958_45011))
;


fulcro.inspect.ui.transactions.TransactionList.prototype.constructor = fulcro.inspect.ui.transactions.TransactionList;

fulcro.inspect.ui.transactions.TransactionList.prototype.constructor.displayName = "fulcro.inspect.ui.transactions/TransactionList";

fulcro.inspect.ui.transactions.TransactionList.prototype.fulcro$isComponent = true;

var x45002_45020 = fulcro.inspect.ui.transactions.TransactionList;
x45002_45020.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x45002_45020.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x45002_45020){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-filter","fulcro.inspect.ui.transactions/tx-filter",1944506753),""], null);
});})(x45002_45020))
;

x45002_45020.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x45002_45020.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x45002_45020){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45002_45020))
;

x45002_45020.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x45002_45020.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x45002_45020){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-filter","fulcro.inspect.ui.transactions/tx-filter",1944506753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","active-tx","fulcro.inspect.ui.transactions/active-tx",-845028666),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.transactions.Transaction)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.transactions.TransactionRow)], null)], null);
});})(x45002_45020))
;

x45002_45020.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x45002_45020.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x45002_45020){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".transactions",".transactions",1057690536),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x45002_45020))
;

x45002_45020.fulcro_css$css$CSS$include_children$arity$1 = ((function (x45002_45020){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.transactions.Transaction,fulcro.inspect.ui.transactions.TransactionRow,fulcro.inspect.ui.core.CSS], null);
});})(x45002_45020))
;


var x45009_45022 = fulcro.inspect.ui.transactions.TransactionList.prototype;
x45009_45022.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x45009_45022.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x45009_45022){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-filter","fulcro.inspect.ui.transactions/tx-filter",1944506753),""], null);
});})(x45009_45022))
;

x45009_45022.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x45009_45022.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x45009_45022){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45009_45022))
;

x45009_45022.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x45009_45022.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x45009_45022){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-filter","fulcro.inspect.ui.transactions/tx-filter",1944506753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","active-tx","fulcro.inspect.ui.transactions/active-tx",-845028666),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.transactions.Transaction)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list","fulcro.inspect.ui.transactions/tx-list",-957250874),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.transactions.TransactionRow)], null)], null);
});})(x45009_45022))
;

x45009_45022.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x45009_45022.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x45009_45022){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".transactions",".transactions",1057690536),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x45009_45022))
;

x45009_45022.fulcro_css$css$CSS$include_children$arity$1 = ((function (x45009_45022){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.transactions.Transaction,fulcro.inspect.ui.transactions.TransactionRow,fulcro.inspect.ui.core.CSS], null);
});})(x45009_45022))
;


fulcro.inspect.ui.transactions.TransactionList.cljs$lang$type = true;

fulcro.inspect.ui.transactions.TransactionList.cljs$lang$ctorStr = "fulcro.inspect.ui.transactions/TransactionList";

fulcro.inspect.ui.transactions.TransactionList.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.transactions/TransactionList");
});
fulcro.inspect.ui.transactions.transaction_list = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.transactions.TransactionList,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-list-id","fulcro.inspect.ui.transactions/tx-list-id",-1710180960)], null));

//# sourceMappingURL=fulcro.inspect.ui.transactions.js.map

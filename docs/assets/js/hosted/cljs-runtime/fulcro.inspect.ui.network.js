goog.provide('fulcro.inspect.ui.network');
goog.require('cljs.core');
goog.require('garden.selectors');
goog.require('fulcro.client.mutations');
goog.require('fulcro_css.css');
goog.require('fulcro.inspect.helpers');
goog.require('fulcro.inspect.ui.core');
goog.require('fulcro.inspect.ui.data_viewer');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),(function (env44588,_,p__44589){
var map__44591 = p__44589;
var map__44591__$1 = ((((!((map__44591 == null)))?(((((map__44591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44591):map__44591);
var request = map__44591__$1;
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44591__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44588;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__44591,map__44591__$1,request,remote){
return (function (){
fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,fulcro.inspect.ui.network.Request,request,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.Keyword("fulcro.inspect.ui.network","requests","fulcro.inspect.ui.network/requests",280569571)], 0));

fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword("fulcro.inspect.ui.network","remotes","fulcro.inspect.ui.network/remotes",-2062861471),cljs.core.conj,remote], 0));

return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword("fulcro.inspect.ui.network","requests","fulcro.inspect.ui.network/requests",280569571),((function (env,map__44591,map__44591__$1,request,remote){
return (function (p1__44587_SHARP_){
return cljs.core.vec(cljs.core.take_last((50),p1__44587_SHARP_));
});})(env,map__44591,map__44591__$1,request,remote))
], 0));
});})(env,map__44591,map__44591__$1,request,remote))
], null);
})(),(function (){var env = env44588;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),(function (env44610,_,p__44611){
var map__44612 = p__44611;
var map__44612__$1 = ((((!((map__44612 == null)))?(((((map__44612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44612):map__44612);
var request = map__44612__$1;
var response_edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44612__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44612__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44610;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__44612,map__44612__$1,request,response_edn,error){
return (function (){
var map__44620 = env;
var map__44620__$1 = ((((!((map__44620 == null)))?(((((map__44620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44620):map__44620);
var env__$1 = map__44620__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),fulcro.client.primitives.ident(fulcro.inspect.ui.network.Request,request)))){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("ui","request-edn-view","ui/request-edn-view",425837875))))){
if(cljs.core.truth_(response_edn)){
fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env__$1,fulcro.inspect.ui.data_viewer.DataViewer,response_edn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("ui","response-edn-view","ui/response-edn-view",-14076929)], 0));
} else {
}

if(cljs.core.truth_(error)){
fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env__$1,fulcro.inspect.ui.data_viewer.DataViewer,error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("ui","error-view","ui/error-view",1379534057)], 0));
} else {
}
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.inspect.helpers.merge_entity,fulcro.inspect.ui.network.Request,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),(new Date())));
} else {
return null;
}
});})(env,map__44612,map__44612__$1,request,response_edn,error))
], null);
})(),(function (){var env = env44610;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.network","select-request","fulcro.inspect.ui.network/select-request",-425821564,null),(function (env44641,_,p__44644){
var map__44645 = p__44644;
var map__44645__$1 = ((((!((map__44645 == null)))?(((((map__44645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44645):map__44645);
var request = map__44645__$1;
var request_edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44645__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885));
var response_edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44645__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44645__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44641;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__44645,map__44645__$1,request,request_edn,response_edn,error){
return (function (){
var map__44650 = env;
var map__44650__$1 = ((((!((map__44650 == null)))?(((((map__44650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44650):map__44650);
var env__$1 = map__44650__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44650__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var req_ref = fulcro.client.primitives.ident(fulcro.inspect.ui.network.Request,request);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(req_ref,new cljs.core.Keyword("ui","request-edn-view","ui/request-edn-view",425837875))))){
var env_SINGLEQUOTE__44667 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),req_ref);
fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_SINGLEQUOTE__44667,fulcro.inspect.ui.data_viewer.DataViewer,request_edn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("ui","request-edn-view","ui/request-edn-view",425837875)], 0));

if(cljs.core.truth_(response_edn)){
fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_SINGLEQUOTE__44667,fulcro.inspect.ui.data_viewer.DataViewer,response_edn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("ui","response-edn-view","ui/response-edn-view",-14076929)], 0));
} else {
}

if(cljs.core.truth_(error)){
fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_SINGLEQUOTE__44667,fulcro.inspect.ui.data_viewer.DataViewer,error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("ui","error-view","ui/error-view",1379534057)], 0));
} else {
}
} else {
}

return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.ui.network","active-request","fulcro.inspect.ui.network/active-request",-2033491755),req_ref], 0));
});})(env,map__44645,map__44645__$1,request,request_edn,response_edn,error))
], null);
})(),(function (){var env = env44641;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.network","clear-requests","fulcro.inspect.ui.network/clear-requests",-923861892,null),(function (env44673,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44673;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.ui.network","active-request","fulcro.inspect.ui.network/active-request",-2033491755),null,new cljs.core.Keyword("fulcro.inspect.ui.network","remotes","fulcro.inspect.ui.network/remotes",-2062861471),cljs.core.PersistentHashSet.EMPTY], 0));

return fulcro.inspect.helpers.remove_edge_BANG_(env,new cljs.core.Keyword("fulcro.inspect.ui.network","requests","fulcro.inspect.ui.network/requests",280569571));
});})(env))
], null);
})(),(function (){var env = env44673;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
if(typeof fulcro.inspect.ui.network.RequestDetails !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.network.RequestDetails = (function fulcro$inspect$ui$network$RequestDetails(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.network.RequestDetails.prototype = goog.object.clone(React.Component.prototype);
}

var x44686_44721 = fulcro.inspect.ui.network.RequestDetails.prototype;
x44686_44721.componentDidMount = ((function (x44686_44721){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44686_44721))
;

x44686_44721.componentWillUpdate = ((function (x44686_44721){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44726 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44727 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44726,next_ident__38531__auto___44727)){
var idxr__38532__auto___44728 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44728 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44728),((function (idxr__38532__auto___44728,ident__38530__auto___44726,next_ident__38531__auto___44727,this__38521__auto__,x44686_44721){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44726], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44727], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44728,ident__38530__auto___44726,next_ident__38531__auto___44727,this__38521__auto__,x44686_44721))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44686_44721))
;

x44686_44721.shouldComponentUpdate = ((function (x44686_44721){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44689 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44689);
} else {
return G__44689;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44690 = this__38521__auto__.state;
var G__44691 = "fulcro$state";
return goog.object.get(G__44690,G__44691);
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
});})(x44686_44721))
;

x44686_44721.componentWillUnmount = ((function (x44686_44721){
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
});})(x44686_44721))
;

x44686_44721.componentDidUpdate = ((function (x44686_44721){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44686_44721))
;

x44686_44721.componentWillMount = ((function (x44686_44721){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44686_44721))
;

x44686_44721.render = ((function (x44686_44721){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44697 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44698 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44699 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44700 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44701 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44704 = fulcro.client.primitives.props(this$);
var map__44704__$1 = ((((!((map__44704 == null)))?(((((map__44704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44704):map__44704);
var request_edn_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44704__$1,new cljs.core.Keyword("ui","request-edn-view","ui/request-edn-view",425837875));
var response_edn_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44704__$1,new cljs.core.Keyword("ui","response-edn-view","ui/response-edn-view",-14076929));
var error_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44704__$1,new cljs.core.Keyword("ui","error-view","ui/error-view",1379534057));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.network.RequestDetails);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Request"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(request_edn_view)], 0))),fulcro.util.force_children((cljs.core.truth_(response_edn_view)?fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Response"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(response_edn_view)], 0)):null)),fulcro.util.force_children((cljs.core.truth_(error_view)?fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499),"Error"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.data_viewer(error_view)], 0)):null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44701;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44700;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44699;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44698;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44697;
}});})(x44686_44721))
;


fulcro.inspect.ui.network.RequestDetails.prototype.constructor = fulcro.inspect.ui.network.RequestDetails;

fulcro.inspect.ui.network.RequestDetails.prototype.constructor.displayName = "fulcro.inspect.ui.network/RequestDetails";

fulcro.inspect.ui.network.RequestDetails.prototype.fulcro$isComponent = true;

var x44707_44752 = fulcro.inspect.ui.network.RequestDetails;
x44707_44752.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44707_44752.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44707_44752){
return (function (_,___$1){
var ___$2 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});})(x44707_44752))
;

x44707_44752.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44707_44752.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44707_44752){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44707_44752))
;

x44707_44752.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44707_44752.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44707_44752){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","request-edn-view","ui/request-edn-view",425837875),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","response-edn-view","ui/response-edn-view",-14076929),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","error-view","ui/error-view",1379534057),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44707_44752))
;

x44707_44752.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44707_44752.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44707_44752){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44707_44752))
;

x44707_44752.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44707_44752){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44707_44752))
;


var x44718_44760 = fulcro.inspect.ui.network.RequestDetails.prototype;
x44718_44760.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44718_44760.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44718_44760){
return (function (_,___$1){
var ___$2 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});})(x44718_44760))
;

x44718_44760.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44718_44760.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44718_44760){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44718_44760))
;

x44718_44760.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44718_44760.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44718_44760){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","request-edn-view","ui/request-edn-view",425837875),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","response-edn-view","ui/response-edn-view",-14076929),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","error-view","ui/error-view",1379534057),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44718_44760))
;

x44718_44760.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44718_44760.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44718_44760){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44718_44760))
;

x44718_44760.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44718_44760){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44718_44760))
;


fulcro.inspect.ui.network.RequestDetails.cljs$lang$type = true;

fulcro.inspect.ui.network.RequestDetails.cljs$lang$ctorStr = "fulcro.inspect.ui.network/RequestDetails";

fulcro.inspect.ui.network.RequestDetails.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.network/RequestDetails");
});
fulcro.inspect.ui.network.request_details = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.network.RequestDetails);
if(typeof fulcro.inspect.ui.network.Request !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.network.Request = (function fulcro$inspect$ui$network$Request(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.network.Request.prototype = goog.object.clone(React.Component.prototype);
}

var x44773_44879 = fulcro.inspect.ui.network.Request.prototype;
x44773_44879.componentDidMount = ((function (x44773_44879){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44773_44879))
;

x44773_44879.componentWillUpdate = ((function (x44773_44879){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44882 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44883 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44882,next_ident__38531__auto___44883)){
var idxr__38532__auto___44884 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44884 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44884),((function (idxr__38532__auto___44884,ident__38530__auto___44882,next_ident__38531__auto___44883,this__38521__auto__,x44773_44879){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44882], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44883], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44884,ident__38530__auto___44882,next_ident__38531__auto___44883,this__38521__auto__,x44773_44879))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44773_44879))
;

x44773_44879.shouldComponentUpdate = ((function (x44773_44879){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44781 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44781);
} else {
return G__44781;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44782 = this__38521__auto__.state;
var G__44783 = "fulcro$state";
return goog.object.get(G__44782,G__44783);
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
});})(x44773_44879))
;

x44773_44879.componentWillUnmount = ((function (x44773_44879){
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
});})(x44773_44879))
;

x44773_44879.componentDidUpdate = ((function (x44773_44879){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44773_44879))
;

x44773_44879.componentWillMount = ((function (x44773_44879){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44773_44879))
;

x44773_44879.render = ((function (x44773_44879){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44796 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44797 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44798 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44799 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44800 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44801 = fulcro.client.primitives.props(this$);
var map__44801__$1 = ((((!((map__44801 == null)))?(((((map__44801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44801):map__44801);
var props = map__44801__$1;
var request_edn_row_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44801__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn-row-view","fulcro.inspect.ui.network/request-edn-row-view",-1794929064));
var response_edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44801__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44801__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44801__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223));
var request_started_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44801__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117));
var request_finished_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44801__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883));
var map__44802 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
var map__44802__$1 = ((((!((map__44802 == null)))?(((((map__44802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44802):map__44802);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","columns","fulcro.inspect.ui.network/columns",848523553));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","on-select","fulcro.inspect.ui.network/on-select",876002265));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","selected?","fulcro.inspect.ui.network/selected?",346095619));
var show_remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","show-remote?","fulcro.inspect.ui.network/show-remote?",-2024841927));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.network.Request);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44813 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var G__44814 = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(css);
var G__44814__$1 = (cljs.core.truth_(error)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44814)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(css))].join(''):G__44814);
if(cljs.core.truth_(selected_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44814__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(css))].join('');
} else {
return G__44814__$1;
}
})()], null);
var G__44813__$1 = (cljs.core.truth_(on_select)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44813,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__44813,map__44801,map__44801__$1,props,request_edn_row_view,response_edn,error,remote,request_started_at,request_finished_at,map__44802,map__44802__$1,columns,on_select,selected_QMARK_,show_remote_QMARK_,css,_STAR_reconciler_STAR_44796,_STAR_depth_STAR_44797,_STAR_shared_STAR_44798,_STAR_instrument_STAR_44799,_STAR_parent_STAR_44800,this$,this__38520__auto__,x44773_44879){
return (function (){
var G__44816 = fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1(this$);
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__44816) : on_select.call(null,G__44816));
});})(G__44813,map__44801,map__44801__$1,props,request_edn_row_view,response_edn,error,remote,request_started_at,request_finished_at,map__44802,map__44802__$1,columns,on_select,selected_QMARK_,show_remote_QMARK_,css,_STAR_reconciler_STAR_44796,_STAR_depth_STAR_44797,_STAR_shared_STAR_44798,_STAR_instrument_STAR_44799,_STAR_parent_STAR_44800,this$,this__38520__auto__,x44773_44879))
):G__44813);
return cljs.core.clj__GT_js(G__44813__$1);

})(),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"table-cell","table-cell",-1603031178).cljs$core$IFn$_invoke$arity$1(css), "style": ({"width": new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(columns)})}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["span",({"className": new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.inspect.ui.core.print_timestamp(request_started_at))]))])),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table-cell","table-cell",-1603031178).cljs$core$IFn$_invoke$arity$1(css))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(css))].join('')}),fulcro.util.force_children(fulcro.inspect.ui.data_viewer.data_viewer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request_edn_row_view,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","static?","fulcro.inspect.ui.data-viewer/static?",1252357018),true)))])),fulcro.util.force_children((cljs.core.truth_(show_remote_QMARK_)?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"table-cell","table-cell",-1603031178).cljs$core$IFn$_invoke$arity$1(css), "style": ({"width": new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(columns)})}),fulcro.util.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(remote)].join(''))]):null)),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"table-cell","table-cell",-1603031178).cljs$core$IFn$_invoke$arity$1(css), "style": ({"width": new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(columns)})}),fulcro.util.force_children((cljs.core.truth_(response_edn)?"Success":(cljs.core.truth_(error)?"Error":fulcro.client.dom.macro_create_element_STAR_(["span",({"className": new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(css)}),"(pending...)"])
)))])),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"table-cell","table-cell",-1603031178).cljs$core$IFn$_invoke$arity$1(css), "style": ({"width": new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(columns)})}),fulcro.util.force_children((cljs.core.truth_((function (){var and__3911__auto__ = request_started_at;
if(cljs.core.truth_(and__3911__auto__)){
return request_finished_at;
} else {
return and__3911__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((request_finished_at.getTime() - request_started_at.getTime()))," ms"].join(''):fulcro.client.dom.macro_create_element_STAR_(["span",({"className": new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(css)}),"(pending...)"])))]))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44800;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44799;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44798;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44797;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44796;
}});})(x44773_44879))
;


fulcro.inspect.ui.network.Request.prototype.constructor = fulcro.inspect.ui.network.Request;

fulcro.inspect.ui.network.Request.prototype.constructor.displayName = "fulcro.inspect.ui.network/Request";

fulcro.inspect.ui.network.Request.prototype.fulcro$isComponent = true;

var x44827_44923 = fulcro.inspect.ui.network.Request;
x44827_44923.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44827_44923.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44827_44923){
return (function (_,p__44828){
var map__44829 = p__44828;
var map__44829__$1 = ((((!((map__44829 == null)))?(((((map__44829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44829):map__44829);
var props = map__44829__$1;
var request_edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44829__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885));
var ___$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__44832 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),(new Date())], null);
if(cljs.core.truth_(request_edn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44832,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn-row-view","fulcro.inspect.ui.network/request-edn-row-view",-1794929064),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,request_edn));
} else {
return G__44832;
}
})(),props], 0));
});})(x44827_44923))
;

x44827_44923.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44827_44923.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44827_44923){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44827_44923))
;

x44827_44923.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44827_44923.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44827_44923){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn-row-view","fulcro.inspect.ui.network/request-edn-row-view",-1794929064),new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909)], null);
});})(x44827_44923))
;

x44827_44923.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44827_44923.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44827_44923){
return (function (_){
var ___$1 = this;
var border = ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.color_bg_light_border)].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row",".row",-368374508),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44837 = (function (){var G__44838 = new cljs.core.Keyword(null,"odd","odd",-1213409872);
return (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1(G__44838) : garden.selectors.nth_child.call(null,G__44838));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__44837) : garden.selectors._AMPERSAND_.call(null,G__44837));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),fulcro.inspect.ui.core.color_bg_light], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.color_row_hover),"!important"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.error","&.error",788554965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#e80000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.selected","&.selected",-406082501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.color_row_selected),"!important"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pending",".pending",154050866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_faded], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table-cell",".table-cell",-1163057510),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border,new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 4px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$fulcro_inspect_ui_data-viewer_DataViewer__container","$fulcro_inspect_ui_data-viewer_DataViewer__container",470959903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.flex","&.flex",1014540986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.last_child) : garden.selectors._AMPERSAND_.call(null,garden.selectors.last_child)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".timestamp",".timestamp",-286443380),fulcro.inspect.ui.core.css_timestamp], null)], null);
});})(x44827_44923))
;

x44827_44923.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44827_44923){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer], null);
});})(x44827_44923))
;


var x44844_44948 = fulcro.inspect.ui.network.Request.prototype;
x44844_44948.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44844_44948.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44844_44948){
return (function (_,p__44849){
var map__44852 = p__44849;
var map__44852__$1 = ((((!((map__44852 == null)))?(((((map__44852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44852):map__44852);
var props = map__44852__$1;
var request_edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44852__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885));
var ___$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__44856 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),(new Date())], null);
if(cljs.core.truth_(request_edn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44856,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn-row-view","fulcro.inspect.ui.network/request-edn-row-view",-1794929064),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,request_edn));
} else {
return G__44856;
}
})(),props], 0));
});})(x44844_44948))
;

x44844_44948.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44844_44948.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44844_44948){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44844_44948))
;

x44844_44948.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44844_44948.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44844_44948){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn-row-view","fulcro.inspect.ui.network/request-edn-row-view",-1794929064),new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909)], null);
});})(x44844_44948))
;

x44844_44948.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44844_44948.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44844_44948){
return (function (_){
var ___$1 = this;
var border = ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.color_bg_light_border)].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row",".row",-368374508),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44872 = (function (){var G__44874 = new cljs.core.Keyword(null,"odd","odd",-1213409872);
return (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1(G__44874) : garden.selectors.nth_child.call(null,G__44874));
})();
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__44872) : garden.selectors._AMPERSAND_.call(null,G__44872));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),fulcro.inspect.ui.core.color_bg_light], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.color_row_hover),"!important"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.error","&.error",788554965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#e80000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.selected","&.selected",-406082501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.color_row_selected),"!important"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pending",".pending",154050866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_faded], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table-cell",".table-cell",-1163057510),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border,new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 4px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$fulcro_inspect_ui_data-viewer_DataViewer__container","$fulcro_inspect_ui_data-viewer_DataViewer__container",470959903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.flex","&.flex",1014540986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.last_child) : garden.selectors._AMPERSAND_.call(null,garden.selectors.last_child)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".timestamp",".timestamp",-286443380),fulcro.inspect.ui.core.css_timestamp], null)], null);
});})(x44844_44948))
;

x44844_44948.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44844_44948){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer], null);
});})(x44844_44948))
;


fulcro.inspect.ui.network.Request.cljs$lang$type = true;

fulcro.inspect.ui.network.Request.cljs$lang$ctorStr = "fulcro.inspect.ui.network/Request";

fulcro.inspect.ui.network.Request.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.network/Request");
});
fulcro.inspect.ui.network.request = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.network.Request,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204)], null));
if(typeof fulcro.inspect.ui.network.NetworkHistory !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.network.NetworkHistory = (function fulcro$inspect$ui$network$NetworkHistory(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.network.NetworkHistory.prototype = goog.object.clone(React.Component.prototype);
}

var x44967_45012 = fulcro.inspect.ui.network.NetworkHistory.prototype;
x44967_45012.componentDidMount = ((function (x44967_45012){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44967_45012))
;

x44967_45012.componentWillUpdate = ((function (x44967_45012){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___45015 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___45016 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___45015,next_ident__38531__auto___45016)){
var idxr__38532__auto___45018 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___45018 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___45018),((function (idxr__38532__auto___45018,ident__38530__auto___45015,next_ident__38531__auto___45016,this__38521__auto__,x44967_45012){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___45015], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___45016], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___45018,ident__38530__auto___45015,next_ident__38531__auto___45016,this__38521__auto__,x44967_45012))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44967_45012))
;

x44967_45012.shouldComponentUpdate = ((function (x44967_45012){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44971 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44971);
} else {
return G__44971;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44972 = this__38521__auto__.state;
var G__44973 = "fulcro$state";
return goog.object.get(G__44972,G__44973);
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
});})(x44967_45012))
;

x44967_45012.componentWillUnmount = ((function (x44967_45012){
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
});})(x44967_45012))
;

x44967_45012.componentDidUpdate = ((function (x44967_45012){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44967_45012))
;

x44967_45012.componentWillMount = ((function (x44967_45012){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44967_45012))
;

x44967_45012.render = ((function (x44967_45012){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44983 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44984 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44985 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44986 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44988 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44992 = fulcro.client.primitives.props(this$);
var map__44992__$1 = ((((!((map__44992 == null)))?(((((map__44992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44992):map__44992);
var requests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44992__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","requests","fulcro.inspect.ui.network/requests",280569571));
var active_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44992__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","active-request","fulcro.inspect.ui.network/active-request",-2033491755));
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44992__$1,new cljs.core.Keyword("fulcro.inspect.ui.network","remotes","fulcro.inspect.ui.network/remotes",-2062861471));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.network.NetworkHistory);
var show_remote_QMARK_ = (cljs.core.count(remotes) > (1));
var columns = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"started","started",585705024),(100),new cljs.core.Keyword(null,"remote","remote",-1593576576),(80),new cljs.core.Keyword(null,"status","status",-1997798413),(90),new cljs.core.Keyword(null,"time","time",1385887882),(70)], null);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__44994 = cljs.core.PersistentArrayMap.EMPTY;
var G__44995 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Clear requests",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__44994,map__44992,map__44992__$1,requests,active_request,remotes,css,show_remote_QMARK_,columns,_STAR_reconciler_STAR_44983,_STAR_depth_STAR_44984,_STAR_shared_STAR_44985,_STAR_instrument_STAR_44986,_STAR_parent_STAR_44988,this$,this__38520__auto__,x44967_45012){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","clear-requests","fulcro.inspect.ui.network/clear-requests",-923861892,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
});})(G__44994,map__44992,map__44992__$1,requests,active_request,remotes,css,show_remote_QMARK_,columns,_STAR_reconciler_STAR_44983,_STAR_depth_STAR_44984,_STAR_shared_STAR_44985,_STAR_instrument_STAR_44986,_STAR_parent_STAR_44988,this$,this__38520__auto__,x44967_45012))
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"do_not_disturb","do_not_disturb",-976357213))], 0));
return (fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$2(G__44994,G__44995) : fulcro.inspect.ui.core.toolbar.call(null,G__44994,G__44995));
})()),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"table-header","table-header",564803008).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"style": ({"width": new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(columns)})}),"Started"])),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(css)}),"Request"])),fulcro.util.force_children(((show_remote_QMARK_)?fulcro.client.dom.macro_create_element_STAR_(["div",({"style": ({"width": new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(columns)})}),"Remote"]):null)),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"style": ({"width": new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(columns)})}),"Status"])),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"style": ({"width": new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(columns)})}),"Time"]))])),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"table-body","table-body",-753458877).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(((cljs.core.seq(requests))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.network.request,((function (map__44992,map__44992__$1,requests,active_request,remotes,css,show_remote_QMARK_,columns,_STAR_reconciler_STAR_44983,_STAR_depth_STAR_44984,_STAR_shared_STAR_44985,_STAR_instrument_STAR_44986,_STAR_parent_STAR_44988,this$,this__38520__auto__,x44967_45012){
return (function (p1__44963_SHARP_){
return fulcro.client.primitives.computed(p1__44963_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","show-remote?","fulcro.inspect.ui.network/show-remote?",-2024841927),show_remote_QMARK_,new cljs.core.Keyword("fulcro.inspect.ui.network","columns","fulcro.inspect.ui.network/columns",848523553),columns,new cljs.core.Keyword("fulcro.inspect.ui.network","selected?","fulcro.inspect.ui.network/selected?",346095619),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204).cljs$core$IFn$_invoke$arity$1(active_request),new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204).cljs$core$IFn$_invoke$arity$1(p1__44963_SHARP_)),new cljs.core.Keyword("fulcro.inspect.ui.network","on-select","fulcro.inspect.ui.network/on-select",876002265),((function (map__44992,map__44992__$1,requests,active_request,remotes,css,show_remote_QMARK_,columns,_STAR_reconciler_STAR_44983,_STAR_depth_STAR_44984,_STAR_shared_STAR_44985,_STAR_instrument_STAR_44986,_STAR_parent_STAR_44988,this$,this__38520__auto__,x44967_45012){
return (function (r){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","select-request","fulcro.inspect.ui.network/select-request",-425821564,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)))))));
});})(map__44992,map__44992__$1,requests,active_request,remotes,css,show_remote_QMARK_,columns,_STAR_reconciler_STAR_44983,_STAR_depth_STAR_44984,_STAR_shared_STAR_44985,_STAR_instrument_STAR_44986,_STAR_parent_STAR_44988,this$,this__38520__auto__,x44967_45012))
], null));
});})(map__44992,map__44992__$1,requests,active_request,remotes,css,show_remote_QMARK_,columns,_STAR_reconciler_STAR_44983,_STAR_depth_STAR_44984,_STAR_shared_STAR_44985,_STAR_instrument_STAR_44986,_STAR_parent_STAR_44988,this$,this__38520__auto__,x44967_45012))
),cljs.core.rseq(requests)):null))]))])),fulcro.util.force_children((cljs.core.truth_(active_request)?fulcro.inspect.ui.core.focus_panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__45004 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.core","classes","fulcro.inspect.ui.core/classes",2092032546),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411)], null)], null);
var G__45005 = fulcro.inspect.ui.core.toolbar_spacer();
var G__45006 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Close panel",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__45004,G__45005,map__44992,map__44992__$1,requests,active_request,remotes,css,show_remote_QMARK_,columns,_STAR_reconciler_STAR_44983,_STAR_depth_STAR_44984,_STAR_shared_STAR_44985,_STAR_instrument_STAR_44986,_STAR_parent_STAR_44988,this$,this__38520__auto__,x44967_45012){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.network","active-request","fulcro.inspect.ui.network/active-request",-2033491755),null);
});})(G__45004,G__45005,map__44992,map__44992__$1,requests,active_request,remotes,css,show_remote_QMARK_,columns,_STAR_reconciler_STAR_44983,_STAR_depth_STAR_44984,_STAR_shared_STAR_44985,_STAR_instrument_STAR_44986,_STAR_parent_STAR_44988,this$,this__38520__auto__,x44967_45012))
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clear","clear",1877104959))], 0));
return (fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$3 ? fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$3(G__45004,G__45005,G__45006) : fulcro.inspect.ui.core.toolbar.call(null,G__45004,G__45005,G__45006));
})(),fulcro.inspect.ui.core.focus_panel_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(fulcro.inspect.ui.network.request_details.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.network.request_details.cljs$core$IFn$_invoke$arity$1(active_request) : fulcro.inspect.ui.network.request_details.call(null,active_request))], 0))], 0)):null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44988;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44986;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44985;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44984;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44983;
}});})(x44967_45012))
;


fulcro.inspect.ui.network.NetworkHistory.prototype.constructor = fulcro.inspect.ui.network.NetworkHistory;

fulcro.inspect.ui.network.NetworkHistory.prototype.constructor.displayName = "fulcro.inspect.ui.network/NetworkHistory";

fulcro.inspect.ui.network.NetworkHistory.prototype.fulcro$isComponent = true;

var x45007_45019 = fulcro.inspect.ui.network.NetworkHistory;
x45007_45019.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x45007_45019.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x45007_45019){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.network","remotes","fulcro.inspect.ui.network/remotes",-2062861471),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("fulcro.inspect.ui.network","requests","fulcro.inspect.ui.network/requests",280569571),cljs.core.PersistentVector.EMPTY], null);
});})(x45007_45019))
;

x45007_45019.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x45007_45019.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x45007_45019){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45007_45019))
;

x45007_45019.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x45007_45019.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x45007_45019){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.Keyword("fulcro.inspect.ui.network","remotes","fulcro.inspect.ui.network/remotes",-2062861471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.network","requests","fulcro.inspect.ui.network/requests",280569571),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.network.Request)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.network","active-request","fulcro.inspect.ui.network/active-request",-2033491755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.network.RequestDetails)], null)], null);
});})(x45007_45019))
;

x45007_45019.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x45007_45019.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x45007_45019){
return (function (_){
var ___$1 = this;
var border = ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.color_bg_medium_border)].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table",".table",-667706186),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"color","color",1011675173),"#313942",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table-header",".table-header",-1000990883),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,".table-header",".table-header",-1000990883),"div"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 4px",new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.flex","&.flex",1014540986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.last_child) : garden.selectors._AMPERSAND_.call(null,garden.selectors.last_child)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table-body",".table-body",-1846456082),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll"], null)], null)], null);
});})(x45007_45019))
;

x45007_45019.fulcro_css$css$CSS$include_children$arity$1 = ((function (x45007_45019){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.network.Request,fulcro.inspect.ui.network.RequestDetails,fulcro.inspect.ui.core.CSS], null);
});})(x45007_45019))
;


var x45010_45021 = fulcro.inspect.ui.network.NetworkHistory.prototype;
x45010_45021.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x45010_45021.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x45010_45021){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.network","remotes","fulcro.inspect.ui.network/remotes",-2062861471),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("fulcro.inspect.ui.network","requests","fulcro.inspect.ui.network/requests",280569571),cljs.core.PersistentVector.EMPTY], null);
});})(x45010_45021))
;

x45010_45021.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x45010_45021.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x45010_45021){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45010_45021))
;

x45010_45021.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x45010_45021.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x45010_45021){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.Keyword("fulcro.inspect.ui.network","remotes","fulcro.inspect.ui.network/remotes",-2062861471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.network","requests","fulcro.inspect.ui.network/requests",280569571),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.network.Request)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.network","active-request","fulcro.inspect.ui.network/active-request",-2033491755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.network.RequestDetails)], null)], null);
});})(x45010_45021))
;

x45010_45021.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x45010_45021.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x45010_45021){
return (function (_){
var ___$1 = this;
var border = ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.color_bg_medium_border)].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table",".table",-667706186),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse",new cljs.core.Keyword(null,"color","color",1011675173),"#313942",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table-header",".table-header",-1000990883),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,".table-header",".table-header",-1000990883),"div"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 4px",new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.flex","&.flex",1014540986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.last_child) : garden.selectors._AMPERSAND_.call(null,garden.selectors.last_child)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".table-body",".table-body",-1846456082),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll"], null)], null)], null);
});})(x45010_45021))
;

x45010_45021.fulcro_css$css$CSS$include_children$arity$1 = ((function (x45010_45021){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.network.Request,fulcro.inspect.ui.network.RequestDetails,fulcro.inspect.ui.core.CSS], null);
});})(x45010_45021))
;


fulcro.inspect.ui.network.NetworkHistory.cljs$lang$type = true;

fulcro.inspect.ui.network.NetworkHistory.cljs$lang$ctorStr = "fulcro.inspect.ui.network/NetworkHistory";

fulcro.inspect.ui.network.NetworkHistory.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.network/NetworkHistory");
});
fulcro.inspect.ui.network.network_history = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.network.NetworkHistory);

//# sourceMappingURL=fulcro.inspect.ui.network.js.map

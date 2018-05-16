goog.provide('fulcro.inspect.ui.data_watcher');
goog.require('cljs.core');
goog.require('fulcro.client.mutations');
goog.require('fulcro.inspect.ui.data_viewer');
goog.require('fulcro.inspect.helpers');
goog.require('fulcro_css.css');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
goog.require('fulcro.inspect.ui.helpers');
fulcro.inspect.ui.data_watcher.update_watchers = (function fulcro$inspect$ui$data_watcher$update_watchers(state,new_state,watches){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,watcher_ref){
var map__44593 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,watcher_ref);
var map__44593__$1 = ((((!((map__44593 == null)))?(((((map__44593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44593):map__44593);
var data_viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44593__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","data-viewer","fulcro.inspect.ui.data-watcher/data-viewer",1485089161));
var watch_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44593__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-path","fulcro.inspect.ui.data-watcher/watch-path",-1429352075));
return cljs.core.assoc_in(s,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_viewer,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,watch_path));
}),state,watches);
});
/**
 * 
 */
fulcro.inspect.ui.data_watcher.update_state = (function (){
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-watcher","update-state","fulcro.inspect.ui.data-watcher/update-state",186392562,null),(function (env44605,_,new_state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44605;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
var map__44606 = env;
var map__44606__$1 = ((((!((map__44606 == null)))?(((((map__44606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44606):map__44606);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44606__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44606__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var watches = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693)));
var content_ref = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282))),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (map__44606,map__44606__$1,ref,state,watches,content_ref,env){
return (function (p1__44603_SHARP_){
return cljs.core.assoc_in(p1__44603_SHARP_,content_ref,new_state);
});})(map__44606,map__44606__$1,ref,state,watches,content_ref,env))
,((function (map__44606,map__44606__$1,ref,state,watches,content_ref,env){
return (function (p1__44604_SHARP_){
return fulcro.inspect.ui.data_watcher.update_watchers(p1__44604_SHARP_,new_state,watches);
});})(map__44606,map__44606__$1,ref,state,watches,content_ref,env))
));
});})(env))
], null);
})(),(function (){var env = env44605;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));

return (function (env,new_state){
var map__44618 = env;
var map__44618__$1 = ((((!((map__44618 == null)))?(((((map__44618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44618):map__44618);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44618__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44618__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var watches = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693)));
var content_ref = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282))),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (map__44618,map__44618__$1,ref,state,watches,content_ref){
return (function (p1__44603_SHARP_){
return cljs.core.assoc_in(p1__44603_SHARP_,content_ref,new_state);
});})(map__44618,map__44618__$1,ref,state,watches,content_ref))
,((function (map__44618,map__44618__$1,ref,state,watches,content_ref){
return (function (p1__44604_SHARP_){
return fulcro.inspect.ui.data_watcher.update_watchers(p1__44604_SHARP_,new_state,watches);
});})(map__44618,map__44618__$1,ref,state,watches,content_ref))
));
});
})()
;
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-watcher","add-data-watch","fulcro.inspect.ui.data-watcher/add-data-watch",-201097858,null),(function (env44653,_,p__44654){
var map__44655 = p__44654;
var map__44655__$1 = ((((!((map__44655 == null)))?(((((map__44655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44655):map__44655);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44655__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44653;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__44655,map__44655__$1,path){
return (function (){
var map__44657 = env;
var map__44657__$1 = ((((!((map__44657 == null)))?(((((map__44657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44657):map__44657);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44657__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44657__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var content = (function (){var _LT__GT_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282)));
var _LT__GT___$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_LT__GT_,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(_LT__GT___$1,path);
})();
return fulcro.inspect.helpers.create_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,fulcro.inspect.ui.data_watcher.WatchPin,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content","content",15833224),content], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prepend","prepend",342616040),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693)], 0));
});})(env,map__44655,map__44655__$1,path))
], null);
})(),(function (){var env = env44653;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-watcher","remove-data-watch","fulcro.inspect.ui.data-watcher/remove-data-watch",-1902381909,null),(function (env44672,_,p__44674){
var map__44675 = p__44674;
var map__44675__$1 = ((((!((map__44675 == null)))?(((((map__44675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44675):map__44675);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44675__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44672;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__44675,map__44675__$1,index){
return (function (){
var map__44679 = env;
var map__44679__$1 = ((((!((map__44679 == null)))?(((((map__44679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44679):map__44679);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44679__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44679__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var watch_ref = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index], 0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,fulcro.inspect.helpers.deep_remove_ref,watch_ref);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693)),((function (map__44679,map__44679__$1,ref,state,watch_ref,env,map__44675,map__44675__$1,index){
return (function (p1__44671_SHARP_){
return fulcro.inspect.helpers.vec_remove_index(index,p1__44671_SHARP_);
});})(map__44679,map__44679__$1,ref,state,watch_ref,env,map__44675,map__44675__$1,index))
);
});})(env,map__44675,map__44675__$1,index))
], null);
})(),(function (){var env = env44672;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
if(typeof fulcro.inspect.ui.data_watcher.WatchPin !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.data_watcher.WatchPin = (function fulcro$inspect$ui$data_watcher$WatchPin(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.data_watcher.WatchPin.prototype = goog.object.clone(React.Component.prototype);
}

var x44694_44742 = fulcro.inspect.ui.data_watcher.WatchPin.prototype;
x44694_44742.componentDidMount = ((function (x44694_44742){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44694_44742))
;

x44694_44742.componentWillUpdate = ((function (x44694_44742){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44743 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44744 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44743,next_ident__38531__auto___44744)){
var idxr__38532__auto___44745 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44745 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44745),((function (idxr__38532__auto___44745,ident__38530__auto___44743,next_ident__38531__auto___44744,this__38521__auto__,x44694_44742){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44743], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44744], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44745,ident__38530__auto___44743,next_ident__38531__auto___44744,this__38521__auto__,x44694_44742))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44694_44742))
;

x44694_44742.shouldComponentUpdate = ((function (x44694_44742){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44696 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44696);
} else {
return G__44696;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44702 = this__38521__auto__.state;
var G__44703 = "fulcro$state";
return goog.object.get(G__44702,G__44703);
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
});})(x44694_44742))
;

x44694_44742.componentWillUnmount = ((function (x44694_44742){
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
});})(x44694_44742))
;

x44694_44742.componentDidUpdate = ((function (x44694_44742){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44694_44742))
;

x44694_44742.componentWillMount = ((function (x44694_44742){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44694_44742))
;

x44694_44742.render = ((function (x44694_44742){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44708 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44709 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44710 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44711 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44712 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44714 = fulcro.client.primitives.props(this$);
var map__44714__$1 = ((((!((map__44714 == null)))?(((((map__44714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44714):map__44714);
var watch_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44714__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-path","fulcro.inspect.ui.data-watcher/watch-path",-1429352075));
var data_viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44714__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","data-viewer","fulcro.inspect.ui.data-watcher/data-viewer",1485089161));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44714__$1,new cljs.core.Keyword("ui","expanded?","ui/expanded?",2055846268));
var map__44715 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__44715__$1 = ((((!((map__44715 == null)))?(((((map__44715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44715):map__44715);
var delete_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44715__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","delete-item","fulcro.inspect.ui.data-watcher/delete-item",-999478250));
var path_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44715__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","path-action","fulcro.inspect.ui.data-viewer/path-action",-1571957884));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.data_watcher.WatchPin);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"toggle-row","toggle-row",-1443650136).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (css,map__44714,map__44714__$1,watch_path,data_viewer,expanded_QMARK_,map__44715,map__44715__$1,delete_item,path_action,_STAR_reconciler_STAR_44708,_STAR_depth_STAR_44709,_STAR_shared_STAR_44710,_STAR_instrument_STAR_44711,_STAR_parent_STAR_44712,this$,this__38520__auto__,x44694_44742){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("ui","expanded?","ui/expanded?",2055846268),cljs.core.not(expanded_QMARK_));
});})(css,map__44714,map__44714__$1,watch_path,data_viewer,expanded_QMARK_,map__44715,map__44715__$1,delete_item,path_action,_STAR_reconciler_STAR_44708,_STAR_depth_STAR_44709,_STAR_shared_STAR_44710,_STAR_instrument_STAR_44711,_STAR_parent_STAR_44712,this$,this__38520__auto__,x44694_44742))
}),fulcro.util.force_children((cljs.core.truth_(expanded_QMARK_)?"\u25BC":"\u25B6"))])),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (css,map__44714,map__44714__$1,watch_path,data_viewer,expanded_QMARK_,map__44715,map__44715__$1,delete_item,path_action,_STAR_reconciler_STAR_44708,_STAR_depth_STAR_44709,_STAR_shared_STAR_44710,_STAR_instrument_STAR_44711,_STAR_parent_STAR_44712,this$,this__38520__auto__,x44694_44742){
return (function (p1__44688_SHARP_){
if(cljs.core.truth_(delete_item)){
return (delete_item.cljs$core$IFn$_invoke$arity$1 ? delete_item.cljs$core$IFn$_invoke$arity$1(p1__44688_SHARP_) : delete_item.call(null,p1__44688_SHARP_));
} else {
return null;
}
});})(css,map__44714,map__44714__$1,watch_path,data_viewer,expanded_QMARK_,map__44715,map__44715__$1,delete_item,path_action,_STAR_reconciler_STAR_44708,_STAR_depth_STAR_44709,_STAR_shared_STAR_44710,_STAR_instrument_STAR_44711,_STAR_parent_STAR_44712,this$,this__38520__auto__,x44694_44742))
}),fulcro.util.force_children(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([watch_path], 0)))]))])),fulcro.util.force_children((cljs.core.truth_(expanded_QMARK_)?fulcro.inspect.ui.data_viewer.data_viewer.cljs$core$IFn$_invoke$arity$variadic(data_viewer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","path-action","fulcro.inspect.ui.data-viewer/path-action",-1571957884),path_action], null)], 0)):null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44712;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44711;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44710;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44709;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44708;
}});})(x44694_44742))
;


fulcro.inspect.ui.data_watcher.WatchPin.prototype.constructor = fulcro.inspect.ui.data_watcher.WatchPin;

fulcro.inspect.ui.data_watcher.WatchPin.prototype.constructor.displayName = "fulcro.inspect.ui.data-watcher/WatchPin";

fulcro.inspect.ui.data_watcher.WatchPin.prototype.fulcro$isComponent = true;

var x44720_44779 = fulcro.inspect.ui.data_watcher.WatchPin;
x44720_44779.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44720_44779.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44720_44779){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"6px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toggle-row",".toggle-row",-1141760505),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toggle-button",".toggle-button",-1541139659),fulcro.inspect.ui.data_viewer.css_triangle], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".path",".path",-1294433436),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.css_code_font,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fafafa",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #efeef1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 3px 1px",new cljs.core.Keyword(null,"color","color",1011675173),"#222",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], null)], null)], null);
});})(x44720_44779))
;

x44720_44779.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44720_44779){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer], null);
});})(x44720_44779))
;

x44720_44779.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44720_44779.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44720_44779){
return (function (this$,p__44723){
var map__44724 = p__44723;
var map__44724__$1 = ((((!((map__44724 == null)))?(((((map__44724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44724):map__44724);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44724__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44724__$1,new cljs.core.Keyword(null,"content","content",15833224));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("ui","expanded?","ui/expanded?",2055846268),true,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-id","fulcro.inspect.ui.data-watcher/watch-id",-334295655),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-path","fulcro.inspect.ui.data-watcher/watch-path",-1429352075),path,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","data-viewer","fulcro.inspect.ui.data-watcher/data-viewer",1485089161),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,content)], null);
});})(x44720_44779))
;

x44720_44779.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44720_44779.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44720_44779){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-id","fulcro.inspect.ui.data-watcher/watch-id",-334295655),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-id","fulcro.inspect.ui.data-watcher/watch-id",-334295655).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44720_44779))
;

x44720_44779.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44720_44779.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44720_44779){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","expanded?","ui/expanded?",2055846268),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-id","fulcro.inspect.ui.data-watcher/watch-id",-334295655),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-path","fulcro.inspect.ui.data-watcher/watch-path",-1429352075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","data-viewer","fulcro.inspect.ui.data-watcher/data-viewer",1485089161),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44720_44779))
;


var x44729_44792 = fulcro.inspect.ui.data_watcher.WatchPin.prototype;
x44729_44792.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44729_44792.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44729_44792){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"6px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toggle-row",".toggle-row",-1141760505),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toggle-button",".toggle-button",-1541139659),fulcro.inspect.ui.data_viewer.css_triangle], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".path",".path",-1294433436),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.data_viewer.css_code_font,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fafafa",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #efeef1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 3px 1px",new cljs.core.Keyword(null,"color","color",1011675173),"#222",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], null)], null)], null);
});})(x44729_44792))
;

x44729_44792.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44729_44792){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer], null);
});})(x44729_44792))
;

x44729_44792.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44729_44792.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44729_44792){
return (function (this$,p__44734){
var map__44735 = p__44734;
var map__44735__$1 = ((((!((map__44735 == null)))?(((((map__44735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44735):map__44735);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44735__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44735__$1,new cljs.core.Keyword(null,"content","content",15833224));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("ui","expanded?","ui/expanded?",2055846268),true,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-id","fulcro.inspect.ui.data-watcher/watch-id",-334295655),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-path","fulcro.inspect.ui.data-watcher/watch-path",-1429352075),path,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","data-viewer","fulcro.inspect.ui.data-watcher/data-viewer",1485089161),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,content)], null);
});})(x44729_44792))
;

x44729_44792.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44729_44792.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44729_44792){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-id","fulcro.inspect.ui.data-watcher/watch-id",-334295655),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-id","fulcro.inspect.ui.data-watcher/watch-id",-334295655).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44729_44792))
;

x44729_44792.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44729_44792.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44729_44792){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","expanded?","ui/expanded?",2055846268),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-id","fulcro.inspect.ui.data-watcher/watch-id",-334295655),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-path","fulcro.inspect.ui.data-watcher/watch-path",-1429352075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","data-viewer","fulcro.inspect.ui.data-watcher/data-viewer",1485089161),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null)], null);
});})(x44729_44792))
;


fulcro.inspect.ui.data_watcher.WatchPin.cljs$lang$type = true;

fulcro.inspect.ui.data_watcher.WatchPin.cljs$lang$ctorStr = "fulcro.inspect.ui.data-watcher/WatchPin";

fulcro.inspect.ui.data_watcher.WatchPin.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.data-watcher/WatchPin");
});
fulcro.inspect.ui.data_watcher.watch_pin = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.data_watcher.WatchPin,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-id","fulcro.inspect.ui.data-watcher/watch-id",-334295655)], null));
if(typeof fulcro.inspect.ui.data_watcher.DataWatcher !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.data_watcher.DataWatcher = (function fulcro$inspect$ui$data_watcher$DataWatcher(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.data_watcher.DataWatcher.prototype = goog.object.clone(React.Component.prototype);
}

var x44826_44904 = fulcro.inspect.ui.data_watcher.DataWatcher.prototype;
x44826_44904.componentDidMount = ((function (x44826_44904){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44826_44904))
;

x44826_44904.componentWillUpdate = ((function (x44826_44904){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44905 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44906 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44905,next_ident__38531__auto___44906)){
var idxr__38532__auto___44907 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44907 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44907),((function (idxr__38532__auto___44907,ident__38530__auto___44905,next_ident__38531__auto___44906,this__38521__auto__,x44826_44904){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44905], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44906], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44907,ident__38530__auto___44905,next_ident__38531__auto___44906,this__38521__auto__,x44826_44904))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44826_44904))
;

x44826_44904.shouldComponentUpdate = ((function (x44826_44904){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44836 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44836);
} else {
return G__44836;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44839 = this__38521__auto__.state;
var G__44840 = "fulcro$state";
return goog.object.get(G__44839,G__44840);
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
});})(x44826_44904))
;

x44826_44904.componentWillUnmount = ((function (x44826_44904){
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
});})(x44826_44904))
;

x44826_44904.componentDidUpdate = ((function (x44826_44904){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44826_44904))
;

x44826_44904.componentWillMount = ((function (x44826_44904){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44826_44904))
;

x44826_44904.render = ((function (x44826_44904){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44862 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44863 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44864 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44865 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44866 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44871 = fulcro.client.primitives.props(this$);
var map__44871__$1 = ((((!((map__44871 == null)))?(((((map__44871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44871):map__44871);
var props = map__44871__$1;
var root_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44871__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282));
var watches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44871__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var content = new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168).cljs$core$IFn$_invoke$arity$1(root_data);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.helpers.props__GT_html(props),fulcro.util.force_children(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(fulcro.inspect.ui.data_watcher.watch_pin,((function (content,map__44871,map__44871__$1,props,root_data,watches,_,_STAR_reconciler_STAR_44862,_STAR_depth_STAR_44863,_STAR_shared_STAR_44864,_STAR_instrument_STAR_44865,_STAR_parent_STAR_44866,this$,this__38520__auto__,x44826_44904){
return (function (p__44875){
var vec__44876 = p__44875;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44876,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44876,(1),null);
return fulcro.client.primitives.computed(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","content","fulcro.inspect.ui.data-watcher/content",1345827414),content),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","delete-item","fulcro.inspect.ui.data-watcher/delete-item",-999478250),((function (vec__44876,x,i,content,map__44871,map__44871__$1,props,root_data,watches,_,_STAR_reconciler_STAR_44862,_STAR_depth_STAR_44863,_STAR_shared_STAR_44864,_STAR_instrument_STAR_44865,_STAR_parent_STAR_44866,this$,this__38520__auto__,x44826_44904){
return (function (___$1){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-watcher","remove-data-watch","fulcro.inspect.ui.data-watcher/remove-data-watch",-1902381909,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"index","index",-1531685915),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)))))),null,(1),null)))))], null));
});})(vec__44876,x,i,content,map__44871,map__44871__$1,props,root_data,watches,_,_STAR_reconciler_STAR_44862,_STAR_depth_STAR_44863,_STAR_shared_STAR_44864,_STAR_instrument_STAR_44865,_STAR_parent_STAR_44866,this$,this__38520__auto__,x44826_44904))
,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","path-action","fulcro.inspect.ui.data-viewer/path-action",-1571957884),((function (vec__44876,x,i,content,map__44871,map__44871__$1,props,root_data,watches,_,_STAR_reconciler_STAR_44862,_STAR_depth_STAR_44863,_STAR_shared_STAR_44864,_STAR_instrument_STAR_44865,_STAR_parent_STAR_44866,this$,this__38520__auto__,x44826_44904){
return (function (p1__44820_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-watcher","add-data-watch","fulcro.inspect.ui.data-watcher/add-data-watch",-201097858,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"path","path",-188191168),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watch-path","fulcro.inspect.ui.data-watcher/watch-path",-1429352075).cljs$core$IFn$_invoke$arity$1(x),p1__44820_SHARP_)),null,(1),null)))))),null,(1),null)))))], null));
});})(vec__44876,x,i,content,map__44871,map__44871__$1,props,root_data,watches,_,_STAR_reconciler_STAR_44862,_STAR_depth_STAR_44863,_STAR_shared_STAR_44864,_STAR_instrument_STAR_44865,_STAR_parent_STAR_44866,this$,this__38520__auto__,x44826_44904))
], null));
});})(content,map__44871,map__44871__$1,props,root_data,watches,_,_STAR_reconciler_STAR_44862,_STAR_depth_STAR_44863,_STAR_shared_STAR_44864,_STAR_instrument_STAR_44865,_STAR_parent_STAR_44866,this$,this__38520__auto__,x44826_44904))
,cljs.core.vector),watches,cljs.core.range.cljs$core$IFn$_invoke$arity$0())),fulcro.util.force_children(fulcro.inspect.ui.data_viewer.data_viewer.cljs$core$IFn$_invoke$arity$variadic(root_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","path-action","fulcro.inspect.ui.data-viewer/path-action",-1571957884),((function (content,map__44871,map__44871__$1,props,root_data,watches,_,_STAR_reconciler_STAR_44862,_STAR_depth_STAR_44863,_STAR_shared_STAR_44864,_STAR_instrument_STAR_44865,_STAR_parent_STAR_44866,this$,this__38520__auto__,x44826_44904){
return (function (p1__44821_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-watcher","add-data-watch","fulcro.inspect.ui.data-watcher/add-data-watch",-201097858,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"path","path",-188191168),null,(1),null)),(new cljs.core.List(null,p1__44821_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(content,map__44871,map__44871__$1,props,root_data,watches,_,_STAR_reconciler_STAR_44862,_STAR_depth_STAR_44863,_STAR_shared_STAR_44864,_STAR_instrument_STAR_44865,_STAR_parent_STAR_44866,this$,this__38520__auto__,x44826_44904))
], null)], 0)))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44866;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44865;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44864;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44863;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44862;
}});})(x44826_44904))
;


fulcro.inspect.ui.data_watcher.DataWatcher.prototype.constructor = fulcro.inspect.ui.data_watcher.DataWatcher;

fulcro.inspect.ui.data_watcher.DataWatcher.prototype.constructor.displayName = "fulcro.inspect.ui.data-watcher/DataWatcher";

fulcro.inspect.ui.data_watcher.DataWatcher.prototype.fulcro$isComponent = true;

var x44888_44949 = fulcro.inspect.ui.data_watcher.DataWatcher;
x44888_44949.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44888_44949.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44888_44949){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44888_44949))
;

x44888_44949.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44888_44949){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer,fulcro.inspect.ui.data_watcher.WatchPin], null);
});})(x44888_44949))
;

x44888_44949.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44888_44949.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44888_44949){
return (function (this$,state){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,state),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693),cljs.core.PersistentVector.EMPTY], null);
});})(x44888_44949))
;

x44888_44949.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44888_44949.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44888_44949){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44888_44949))
;

x44888_44949.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44888_44949.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44888_44949){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_watcher.WatchPin)], null)], null);
});})(x44888_44949))
;


var x44894_44951 = fulcro.inspect.ui.data_watcher.DataWatcher.prototype;
x44894_44951.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44894_44951.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44894_44951){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44894_44951))
;

x44894_44951.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44894_44951){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_viewer.DataViewer,fulcro.inspect.ui.data_watcher.WatchPin], null);
});})(x44894_44951))
;

x44894_44951.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44894_44951.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44894_44951){
return (function (this$,state){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_viewer.DataViewer,state),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693),cljs.core.PersistentVector.EMPTY], null);
});})(x44894_44951))
;

x44894_44951.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44894_44951.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44894_44951){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44894_44951))
;

x44894_44951.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44894_44951.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44894_44951){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","watches","fulcro.inspect.ui.data-watcher/watches",-1609107693),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_watcher.WatchPin)], null)], null);
});})(x44894_44951))
;


fulcro.inspect.ui.data_watcher.DataWatcher.cljs$lang$type = true;

fulcro.inspect.ui.data_watcher.DataWatcher.cljs$lang$ctorStr = "fulcro.inspect.ui.data-watcher/DataWatcher";

fulcro.inspect.ui.data_watcher.DataWatcher.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.data-watcher/DataWatcher");
});
fulcro.inspect.ui.data_watcher.data_watcher = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_watcher.DataWatcher);

//# sourceMappingURL=fulcro.inspect.ui.data_watcher.js.map

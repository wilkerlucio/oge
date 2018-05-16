goog.provide('fulcro.inspect.ui.multi_inspector');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('fulcro_css.css');
goog.require('fulcro.client.mutations');
goog.require('fulcro.inspect.ui.core');
goog.require('fulcro.inspect.ui.inspector');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
goog.require('fulcro.inspect.helpers');
goog.require('fulcro.inspect.ui.events');
goog.require('garden.core');
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.multi-inspector","add-inspector","fulcro.inspect.ui.multi-inspector/add-inspector",951751359,null),(function (env46145,_,inspector){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env46145;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
var map__46146 = env;
var map__46146__$1 = ((((!((map__46146 == null)))?(((((map__46146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46146):map__46146);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46146__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46146__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var inspector_ref = fulcro.client.primitives.ident(fulcro.inspect.ui.inspector.Inspector,inspector);
var current = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,fulcro.inspect.helpers.merge_entity,fulcro.inspect.ui.inspector.Inspector,inspector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572))], 0));

if((current == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924),inspector_ref], 0));
} else {
return null;
}
});})(env))
], null);
})(),(function (){var env = env46145;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.multi-inspector","set-app","fulcro.inspect.ui.multi-inspector/set-app",1544309293,null),(function (env46148,_,p__46149){
var map__46150 = p__46149;
var map__46150__$1 = ((((!((map__46150 == null)))?(((((map__46150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46150):map__46150);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46150__$1,new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env46148;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__46150,map__46150__$1,id){
return (function (){
var map__46152 = env;
var map__46152__$1 = ((((!((map__46152 == null)))?(((((map__46152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46152):map__46152);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46152__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46152__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),id], null)], 0));
});})(env,map__46150,map__46150__$1,id))
], null);
})(),(function (){var env = env46148;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
if(typeof fulcro.inspect.ui.multi_inspector.MultiInspector !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.multi_inspector.MultiInspector = (function fulcro$inspect$ui$multi_inspector$MultiInspector(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.multi_inspector.MultiInspector.prototype = goog.object.clone(React.Component.prototype);
}

var x46157_46184 = fulcro.inspect.ui.multi_inspector.MultiInspector.prototype;
x46157_46184.componentDidMount = ((function (x46157_46184){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x46157_46184))
;

x46157_46184.componentWillUpdate = ((function (x46157_46184){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___46185 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___46186 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___46185,next_ident__38531__auto___46186)){
var idxr__38532__auto___46187 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___46187 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___46187),((function (idxr__38532__auto___46187,ident__38530__auto___46185,next_ident__38531__auto___46186,this__38521__auto__,x46157_46184){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___46185], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___46186], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___46187,ident__38530__auto___46185,next_ident__38531__auto___46186,this__38521__auto__,x46157_46184))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x46157_46184))
;

x46157_46184.shouldComponentUpdate = ((function (x46157_46184){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__46159 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__46159);
} else {
return G__46159;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46160 = this__38521__auto__.state;
var G__46161 = "fulcro$state";
return goog.object.get(G__46160,G__46161);
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
});})(x46157_46184))
;

x46157_46184.componentWillUnmount = ((function (x46157_46184){
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
});})(x46157_46184))
;

x46157_46184.componentDidUpdate = ((function (x46157_46184){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x46157_46184))
;

x46157_46184.componentWillMount = ((function (x46157_46184){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x46157_46184))
;

x46157_46184.render = ((function (x46157_46184){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_46162 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46163 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_46164 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_46165 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_46166 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__46167 = fulcro.client.primitives.props(this$);
var map__46167__$1 = ((((!((map__46167 == null)))?(((((map__46167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46167):map__46167);
var props = map__46167__$1;
var inspectors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572));
var current_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.multi_inspector.MultiInspector);
var keystroke = (function (){var or__3922__auto__ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"launch-keystroke","launch-keystroke",1925423288)], null));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "ctrl-f";
}
})();
var map__46169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null));
var map__46169__$1 = ((((!((map__46169 == null)))?(((((map__46169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46169):map__46169);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46169__$1,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447));
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__46171 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.events","action","fulcro.inspect.ui.events/action",-487804538),((function (keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_reconciler(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.helpers","persistent-set-props","fulcro.inspect.helpers/persistent-set-props",-1753072879,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.helpers","local-key","fulcro.inspect.helpers/local-key",-858551382),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.helpers","storage-key","fulcro.inspect.helpers/storage-key",1801490937),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.core","dock-visible?","fulcro.inspect.core/dock-visible?",-1200481470),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.helpers","value","fulcro.inspect.helpers/value",1147993961),null,(1),null)),(new cljs.core.List(null,cljs.core.not(visible_QMARK_),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447),null,(1),null)))))));
});})(keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184))
,new cljs.core.Keyword("fulcro.inspect.ui.events","keystroke","fulcro.inspect.ui.events/keystroke",624751047),keystroke,new cljs.core.Keyword("fulcro.inspect.ui.events","target","fulcro.inspect.ui.events/target",-652104725),((function (keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184){
return (function (){
return fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$1(this$).closest("body");
});})(keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184))
], null);
return (fulcro.inspect.ui.events.key_listener.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.events.key_listener.cljs$core$IFn$_invoke$arity$1(G__46171) : fulcro.inspect.ui.events.key_listener.call(null,G__46171));
})()),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["style",({"dangerouslySetInnerHTML": ({"__html": garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null)], null)], 0))})})])),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["style",({"dangerouslySetInnerHTML": ({"__html": garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.get_css(fulcro.inspect.ui.multi_inspector.MultiInspector)], 0))})})])),fulcro.util.force_children((cljs.core.truth_(current_app)?(fulcro.inspect.ui.inspector.inspector.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.inspector.inspector.cljs$core$IFn$_invoke$arity$1(current_app) : fulcro.inspect.ui.inspector.inspector.call(null,current_app)):fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"no-app","no-app",1765544666).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({}),"No app connected."]))]))),fulcro.util.force_children((((cljs.core.count(inspectors) > (1)))?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(css)}),"App"])),fulcro.util.force_children(fulcro.client.dom.macro_create_wrapped_form_element(["select",({"value": cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094).cljs$core$IFn$_invoke$arity$1(current_app)], 0)), "onChange": ((function (keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184){
return (function (p1__46154_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.multi-inspector","set-app","fulcro.inspect.ui.multi-inspector/set-app",1544309293,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.ui.inspector","id","fulcro.inspect.ui.inspector/id",-803234094),null,(1),null)),(new cljs.core.List(null,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__46154_SHARP_.target.value),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184))
}),fulcro.util.force_children((function (){var iter__4292__auto__ = ((function (keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184){
return (function fulcro$inspect$ui$multi_inspector$iter__46172(s__46173){
return (new cljs.core.LazySeq(null,((function (keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184){
return (function (){
var s__46173__$1 = s__46173;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__46173__$1);
if(temp__5457__auto__){
var s__46173__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46173__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__46173__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__46175 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__46174 = (0);
while(true){
if((i__46174 < size__4291__auto__)){
var app_id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__46174);
cljs.core.chunk_append(b__46175,fulcro.client.dom.macro_create_wrapped_form_element(["option",({"key": app_id, "value": app_id}),fulcro.util.force_children(app_id)]));

var G__46188 = (i__46174 + (1));
i__46174 = G__46188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46175),fulcro$inspect$ui$multi_inspector$iter__46172(cljs.core.chunk_rest(s__46173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46175),null);
}
} else {
var app_id = cljs.core.first(s__46173__$2);
return cljs.core.cons(fulcro.client.dom.macro_create_wrapped_form_element(["option",({"key": app_id, "value": app_id}),fulcro.util.force_children(app_id)]),fulcro$inspect$ui$multi_inspector$iter__46172(cljs.core.rest(s__46173__$2)));
}
} else {
return null;
}
break;
}
});})(keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184))
,null,null));
});})(keystroke,map__46169,map__46169__$1,visible_QMARK_,map__46167,map__46167__$1,props,inspectors,current_app,_,css,_STAR_reconciler_STAR_46162,_STAR_depth_STAR_46163,_STAR_shared_STAR_46164,_STAR_instrument_STAR_46165,_STAR_parent_STAR_46166,this$,this__38520__auto__,x46157_46184))
;
return iter__4292__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,cljs.core.second),inspectors)));
})())]))]):null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_46166;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_46165;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_46164;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_46163;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46162;
}});})(x46157_46184))
;


fulcro.inspect.ui.multi_inspector.MultiInspector.prototype.constructor = fulcro.inspect.ui.multi_inspector.MultiInspector;

fulcro.inspect.ui.multi_inspector.MultiInspector.prototype.constructor.displayName = "fulcro.inspect.ui.multi-inspector/MultiInspector";

fulcro.inspect.ui.multi_inspector.MultiInspector.prototype.fulcro$isComponent = true;

var x46176_46189 = fulcro.inspect.ui.multi_inspector.MultiInspector;
x46176_46189.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x46176_46189.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x46176_46189){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".selector",".selector",1944674042),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["center",fulcro.inspect.ui.core.color_text_normal,fulcro.inspect.ui.core.label_font_size,"#f3f3f3","12px","flex","1px solid #ccc","none",fulcro.inspect.ui.core.label_font_family])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".no-app",".no-app",1709466512),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"background","background",-863952629),"#f3f3f3",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"23px",new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null)], null);
});})(x46176_46189))
;

x46176_46189.fulcro_css$css$CSS$include_children$arity$1 = ((function (x46176_46189){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.inspector.Inspector], null);
});})(x46176_46189))
;

x46176_46189.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x46176_46189.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x46176_46189){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924),null], null);
});})(x46176_46189))
;

x46176_46189.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x46176_46189.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x46176_46189){
return (function (this$,p__46177){
var map__46178 = p__46177;
var map__46178__$1 = ((((!((map__46178 == null)))?(((((map__46178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46178):map__46178);
var props = map__46178__$1;
var inspectors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46178__$1,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572));
var current_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46178__$1,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","multi-inspector","fulcro.inspect.ui.multi-inspector/multi-inspector",1353666037),"main"], null);
});})(x46176_46189))
;

x46176_46189.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x46176_46189.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x46176_46189){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447)], null)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.inspector.Inspector)], null)], null);
});})(x46176_46189))
;


var x46180_46190 = fulcro.inspect.ui.multi_inspector.MultiInspector.prototype;
x46180_46190.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x46180_46190.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x46180_46190){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".selector",".selector",1944674042),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["center",fulcro.inspect.ui.core.color_text_normal,fulcro.inspect.ui.core.label_font_size,"#f3f3f3","12px","flex","1px solid #ccc","none",fulcro.inspect.ui.core.label_font_family])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".no-app",".no-app",1709466512),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"background","background",-863952629),"#f3f3f3",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"23px",new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null)], null);
});})(x46180_46190))
;

x46180_46190.fulcro_css$css$CSS$include_children$arity$1 = ((function (x46180_46190){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.inspector.Inspector], null);
});})(x46180_46190))
;

x46180_46190.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x46180_46190.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x46180_46190){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924),null], null);
});})(x46180_46190))
;

x46180_46190.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x46180_46190.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x46180_46190){
return (function (this$,p__46181){
var map__46182 = p__46181;
var map__46182__$1 = ((((!((map__46182 == null)))?(((((map__46182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46182):map__46182);
var props = map__46182__$1;
var inspectors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46182__$1,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572));
var current_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46182__$1,new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","multi-inspector","fulcro.inspect.ui.multi-inspector/multi-inspector",1353666037),"main"], null);
});})(x46180_46190))
;

x46180_46190.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x46180_46190.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x46180_46190){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","floating-panel","fulcro.inspect.core/floating-panel",-1683124363),"main"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","visible?","ui/visible?",2129867447)], null)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","current-app","fulcro.inspect.ui.multi-inspector/current-app",-410602924),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.inspector.Inspector)], null)], null);
});})(x46180_46190))
;


fulcro.inspect.ui.multi_inspector.MultiInspector.cljs$lang$type = true;

fulcro.inspect.ui.multi_inspector.MultiInspector.cljs$lang$ctorStr = "fulcro.inspect.ui.multi-inspector/MultiInspector";

fulcro.inspect.ui.multi_inspector.MultiInspector.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.multi-inspector/MultiInspector");
});
fulcro.inspect.ui.multi_inspector.multi_inspector = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.multi_inspector.MultiInspector,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","multi-inspector","fulcro.inspect.ui.multi-inspector/multi-inspector",1353666037)], null));

//# sourceMappingURL=fulcro.inspect.ui.multi_inspector.js.map

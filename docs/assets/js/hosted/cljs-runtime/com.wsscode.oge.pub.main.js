goog.provide('com.wsscode.oge.pub.main');
goog.require('cljs.core');
goog.require('fulcro.client');
goog.require('fulcro.client.mutations');
goog.require('fulcro_css.css');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.oge.core');
goog.require('com.wsscode.oge.ui.common');
goog.require('com.wsscode.oge.pub.network');
goog.require('goog.functions');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.data_fetch');
com.wsscode.oge.pub.main.update_index = (function com$wsscode$oge$pub$main$update_index(reconciler){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oge","id","oge/id",-1388421977),"editor",new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"query","query",-1288509510),fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null)),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","editor","ui/editor",-989382022),null], null), null)], null),null,(1),null)),(2),null))], null));
});
com.wsscode.oge.pub.main.debounced_update_index = goog.functions.debounce(com.wsscode.oge.pub.main.update_index,(600));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("com.wsscode.oge.pub.main","update-endpoint","com.wsscode.oge.pub.main/update-endpoint",924893507,null),(function (env30852,_,p__30853){
var map__30854 = p__30853;
var map__30854__$1 = ((((!((map__30854 == null)))?(((((map__30854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30854):map__30854);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30854__$1,new cljs.core.Keyword("com.wsscode.oge.pub.main","url","com.wsscode.oge.pub.main/url",-1157551208));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__30856 = env30852;
var map__30856__$1 = ((((!((map__30856 == null)))?(((((map__30856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30856):map__30856);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30856__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30856__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30856__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30856__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__30856,map__30856__$1,state,ref,reconciler,shared,map__30854,map__30854__$1,url){
return (function (){
cljs.core.reset_BANG_(new cljs.core.Keyword("com.wsscode.oge.pub.main","endpoint*","com.wsscode.oge.pub.main/endpoint*",1037799883).cljs$core$IFn$_invoke$arity$1(shared),url);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("ui","target-url","ui/target-url",-432309590)),url);

localStorage.setItem("oge-pub-last-url",url);

return (com.wsscode.oge.pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1(reconciler) : com.wsscode.oge.pub.main.debounced_update_index.call(null,reconciler));
});})(map__30856,map__30856__$1,state,ref,reconciler,shared,map__30854,map__30854__$1,url))
], null);
})(),(function (){var env = env30852;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
if(typeof com.wsscode.oge.pub.main.OgeMain !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.pub.main.OgeMain = (function com$wsscode$oge$pub$main$OgeMain(){
var this__28659__auto__ = this;
React.Component.apply(this__28659__auto__,arguments);

if(!((this__28659__auto__.initLocalState == null))){
this__28659__auto__.state = this__28659__auto__.initLocalState();
} else {
this__28659__auto__.state = {};
}

return this__28659__auto__;
});

com.wsscode.oge.pub.main.OgeMain.prototype = goog.object.clone(React.Component.prototype);
}

var x30861_30883 = com.wsscode.oge.pub.main.OgeMain.prototype;
x30861_30883.componentDidMount = ((function (x30861_30883){
return (function (){
var this__28514__auto__ = this;
return goog.object.set(this__28514__auto__,"fulcro$mounted",true);
});})(x30861_30883))
;

x30861_30883.componentWillUpdate = ((function (x30861_30883){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(((!((this__28514__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__28514__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__28523__auto___30884 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives.props(this__28514__auto__));
var next_ident__28524__auto___30885 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives._next_props(next_props__28515__auto__,this__28514__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__28523__auto___30884,next_ident__28524__auto___30885)){
var idxr__28525__auto___30886 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28525__auto___30886 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28525__auto___30886),((function (idxr__28525__auto___30886,ident__28523__auto___30884,next_ident__28524__auto___30885,this__28514__auto__,x30861_30883){
return (function (indexes__28526__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__28526__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28523__auto___30884], null),cljs.core.disj,this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28524__auto___30885], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28514__auto__);
});})(idxr__28525__auto___30886,ident__28523__auto___30884,next_ident__28524__auto___30885,this__28514__auto__,x30861_30883))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__28514__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__28514__auto__);
});})(x30861_30883))
;

x30861_30883.shouldComponentUpdate = ((function (x30861_30883){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__28517__auto__ = next_props__28515__auto__.children;
var next_props__28515__auto____$1 = goog.object.get(next_props__28515__auto__,"fulcro$value");
var next_props__28515__auto____$2 = (function (){var G__30863 = next_props__28515__auto____$1;
if((next_props__28515__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__30863);
} else {
return G__30863;
}
})();
var current_props__28518__auto__ = fulcro.client.primitives.props(this__28514__auto__);
var next_props_stale_QMARK___28519__auto__ = (fulcro.client.primitives.get_basis_time(current_props__28518__auto__) > fulcro.client.primitives.get_basis_time(next_props__28515__auto____$2));
var props_changed_QMARK___28520__auto__ = ((!(next_props_stale_QMARK___28519__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__28518__auto__,next_props__28515__auto____$2)));
var state_changed_QMARK___28521__auto__ = (function (){var and__3911__auto__ = this__28514__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30864 = this__28514__auto__.state;
var G__30865 = "fulcro$state";
return goog.object.get(G__30864,G__30865);
})(),goog.object.get(next_state__28516__auto__,"fulcro$state"));
} else {
return and__3911__auto__;
}
})();
var children_changed_QMARK___28522__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__28514__auto__.props.children,next_children__28517__auto__);
var or__3922__auto__ = props_changed_QMARK___28520__auto__;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = state_changed_QMARK___28521__auto__;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return children_changed_QMARK___28522__auto__;
}
}
}
});})(x30861_30883))
;

x30861_30883.componentWillUnmount = ((function (x30861_30883){
return (function (){
var this__28514__auto__ = this;
var r__28530__auto__ = fulcro.client.primitives.get_reconciler(this__28514__auto__);
var cfg__28531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28530__auto__);
var st__28532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28531__auto__);
var indexer__28529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28531__auto__);
goog.object.set(this__28514__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__28532__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__28532__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__28514__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__28532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__28514__auto__], 0));
} else {
}

if((indexer__28529__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__28529__auto__,this__28514__auto__);
}
});})(x30861_30883))
;

x30861_30883.componentDidUpdate = ((function (x30861_30883){
return (function (prev_props__28527__auto__,prev_state__28528__auto__){
var this__28514__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__28514__auto__);
});})(x30861_30883))
;

x30861_30883.componentWillMount = ((function (x30861_30883){
return (function (){
var this__28514__auto__ = this;
var indexer__28529__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28529__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__28529__auto__,this__28514__auto__);
}
});})(x30861_30883))
;

x30861_30883.render = ((function (x30861_30883){
return (function (){
var this__28513__auto__ = this;
var this$ = this__28513__auto__;
var _STAR_reconciler_STAR_30866 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30867 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_30868 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_30869 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_30870 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__28513__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__28513__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__28513__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__28513__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__28513__auto__;

try{var map__30871 = fulcro.client.primitives.props(this$);
var map__30871__$1 = ((((!((map__30871 == null)))?(((((map__30871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30871):map__30871);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30871__$1,new cljs.core.Keyword("ui","editor","ui/editor",-989382022));
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30871__$1,new cljs.core.Keyword("ui","target-url","ui/target-url",-432309590));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.pub.main.OgeMain);
var fs = new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(editor));
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__30873 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),target_url,new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"https://your-endpoint.here.com",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (fs,map__30871,map__30871__$1,editor,target_url,_,css,_STAR_reconciler_STAR_30866,_STAR_depth_STAR_30867,_STAR_shared_STAR_30868,_STAR_instrument_STAR_30869,_STAR_parent_STAR_30870,this$,this__28513__auto__,x30861_30883){
return (function (p1__30858_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.oge.pub.main","update-endpoint","com.wsscode.oge.pub.main/update-endpoint",924893507,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.oge.pub.main","url","com.wsscode.oge.pub.main/url",-1157551208),null,(1),null)),(new cljs.core.List(null,p1__30858_SHARP_.target.value,null,(1),null)))))),null,(1),null)))))], null));
});})(fs,map__30871,map__30871__$1,editor,target_url,_,css,_STAR_reconciler_STAR_30866,_STAR_depth_STAR_30867,_STAR_shared_STAR_30868,_STAR_instrument_STAR_30869,_STAR_parent_STAR_30870,this$,this__28513__auto__,x30861_30883))
,new cljs.core.Keyword("com.wsscode.oge.ui.common","classes","com.wsscode.oge.ui.common/classes",884011983),(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(editor)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906)], null):(cljs.core.truth_(fulcro.client.data_fetch.failed_QMARK_(fs))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warning","warning",-1685650671)], null):null))], null);
return (com.wsscode.oge.ui.common.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.common.text_field.cljs$core$IFn$_invoke$arity$1(G__30873) : com.wsscode.oge.ui.common.text_field.call(null,G__30873));
})()),fulcro.util.force_children((function (){var G__30874 = fulcro.client.primitives.computed(editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null));
return (com.wsscode.oge.core.oge.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.core.oge.cljs$core$IFn$_invoke$arity$1(G__30874) : com.wsscode.oge.core.oge.call(null,G__30874));
})())]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_30870;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_30869;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_30868;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_30867;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30866;
}});})(x30861_30883))
;


com.wsscode.oge.pub.main.OgeMain.prototype.constructor = com.wsscode.oge.pub.main.OgeMain;

com.wsscode.oge.pub.main.OgeMain.prototype.constructor.displayName = "com.wsscode.oge.pub.main/OgeMain";

com.wsscode.oge.pub.main.OgeMain.prototype.fulcro$isComponent = true;

var x30875_30887 = com.wsscode.oge.pub.main.OgeMain;
x30875_30887.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x30875_30887.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x30875_30887){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$flex","$flex",-287051280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".input",".input",-1804475321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null)], null);
});})(x30875_30887))
;

x30875_30887.fulcro_css$css$CSS$include_children$arity$1 = ((function (x30875_30887){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.core.Oge], null);
});})(x30875_30887))
;

x30875_30887.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x30875_30887.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x30875_30887){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","editor","ui/editor",-989382022),fulcro.client.primitives.get_initial_state(com.wsscode.oge.core.Oge,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("ui","target-url","ui/target-url",-432309590),(function (){var or__3922__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})()], null);
});})(x30875_30887))
;

x30875_30887.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x30875_30887.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x30875_30887){
return (function (this$,p__30876){
var map__30877 = p__30876;
var map__30877__$1 = ((((!((map__30877 == null)))?(((((map__30877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30877):map__30877);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30877__$1,new cljs.core.Keyword("ui","editor","ui/editor",-989382022));
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30877__$1,new cljs.core.Keyword("ui","target-url","ui/target-url",-432309590));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oge-app","oge-app",1494230315),"main"], null);
});})(x30875_30887))
;

x30875_30887.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x30875_30887.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x30875_30887){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","editor","ui/editor",-989382022),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge)], null),new cljs.core.Keyword("ui","target-url","ui/target-url",-432309590)], null);
});})(x30875_30887))
;


var x30879_30888 = com.wsscode.oge.pub.main.OgeMain.prototype;
x30879_30888.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x30879_30888.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x30879_30888){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$flex","$flex",-287051280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".input",".input",-1804475321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null)], null);
});})(x30879_30888))
;

x30879_30888.fulcro_css$css$CSS$include_children$arity$1 = ((function (x30879_30888){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.core.Oge], null);
});})(x30879_30888))
;

x30879_30888.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x30879_30888.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x30879_30888){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","editor","ui/editor",-989382022),fulcro.client.primitives.get_initial_state(com.wsscode.oge.core.Oge,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("ui","target-url","ui/target-url",-432309590),(function (){var or__3922__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})()], null);
});})(x30879_30888))
;

x30879_30888.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x30879_30888.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x30879_30888){
return (function (this$,p__30880){
var map__30881 = p__30880;
var map__30881__$1 = ((((!((map__30881 == null)))?(((((map__30881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30881):map__30881);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30881__$1,new cljs.core.Keyword("ui","editor","ui/editor",-989382022));
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30881__$1,new cljs.core.Keyword("ui","target-url","ui/target-url",-432309590));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oge-app","oge-app",1494230315),"main"], null);
});})(x30879_30888))
;

x30879_30888.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x30879_30888.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x30879_30888){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","editor","ui/editor",-989382022),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge)], null),new cljs.core.Keyword("ui","target-url","ui/target-url",-432309590)], null);
});})(x30879_30888))
;


com.wsscode.oge.pub.main.OgeMain.cljs$lang$type = true;

com.wsscode.oge.pub.main.OgeMain.cljs$lang$ctorStr = "com.wsscode.oge.pub.main/OgeMain";

com.wsscode.oge.pub.main.OgeMain.cljs$lang$ctorPrWriter = (function (this__28662__auto__,writer__28663__auto__,opt__28664__auto__){
return cljs.core._write(writer__28663__auto__,"com.wsscode.oge.pub.main/OgeMain");
});
com.wsscode.oge.pub.main.oge_main = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain);
if(typeof com.wsscode.oge.pub.main.Root !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.pub.main.Root = (function com$wsscode$oge$pub$main$Root(){
var this__28659__auto__ = this;
React.Component.apply(this__28659__auto__,arguments);

if(!((this__28659__auto__.initLocalState == null))){
this__28659__auto__.state = this__28659__auto__.initLocalState();
} else {
this__28659__auto__.state = {};
}

return this__28659__auto__;
});

com.wsscode.oge.pub.main.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x30891_30905 = com.wsscode.oge.pub.main.Root.prototype;
x30891_30905.componentDidMount = ((function (x30891_30905){
return (function (){
var this__28514__auto__ = this;
return goog.object.set(this__28514__auto__,"fulcro$mounted",true);
});})(x30891_30905))
;

x30891_30905.componentWillUpdate = ((function (x30891_30905){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(((!((this__28514__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__28514__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__28523__auto___30906 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives.props(this__28514__auto__));
var next_ident__28524__auto___30907 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives._next_props(next_props__28515__auto__,this__28514__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__28523__auto___30906,next_ident__28524__auto___30907)){
var idxr__28525__auto___30908 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28525__auto___30908 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28525__auto___30908),((function (idxr__28525__auto___30908,ident__28523__auto___30906,next_ident__28524__auto___30907,this__28514__auto__,x30891_30905){
return (function (indexes__28526__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__28526__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28523__auto___30906], null),cljs.core.disj,this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28524__auto___30907], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28514__auto__);
});})(idxr__28525__auto___30908,ident__28523__auto___30906,next_ident__28524__auto___30907,this__28514__auto__,x30891_30905))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__28514__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__28514__auto__);
});})(x30891_30905))
;

x30891_30905.shouldComponentUpdate = ((function (x30891_30905){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__28517__auto__ = next_props__28515__auto__.children;
var next_props__28515__auto____$1 = goog.object.get(next_props__28515__auto__,"fulcro$value");
var next_props__28515__auto____$2 = (function (){var G__30893 = next_props__28515__auto____$1;
if((next_props__28515__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__30893);
} else {
return G__30893;
}
})();
var current_props__28518__auto__ = fulcro.client.primitives.props(this__28514__auto__);
var next_props_stale_QMARK___28519__auto__ = (fulcro.client.primitives.get_basis_time(current_props__28518__auto__) > fulcro.client.primitives.get_basis_time(next_props__28515__auto____$2));
var props_changed_QMARK___28520__auto__ = ((!(next_props_stale_QMARK___28519__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__28518__auto__,next_props__28515__auto____$2)));
var state_changed_QMARK___28521__auto__ = (function (){var and__3911__auto__ = this__28514__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30894 = this__28514__auto__.state;
var G__30895 = "fulcro$state";
return goog.object.get(G__30894,G__30895);
})(),goog.object.get(next_state__28516__auto__,"fulcro$state"));
} else {
return and__3911__auto__;
}
})();
var children_changed_QMARK___28522__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__28514__auto__.props.children,next_children__28517__auto__);
var or__3922__auto__ = props_changed_QMARK___28520__auto__;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = state_changed_QMARK___28521__auto__;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return children_changed_QMARK___28522__auto__;
}
}
}
});})(x30891_30905))
;

x30891_30905.componentWillUnmount = ((function (x30891_30905){
return (function (){
var this__28514__auto__ = this;
var r__28530__auto__ = fulcro.client.primitives.get_reconciler(this__28514__auto__);
var cfg__28531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__28530__auto__);
var st__28532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28531__auto__);
var indexer__28529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28531__auto__);
goog.object.set(this__28514__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__28532__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__28532__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__28514__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__28532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__28514__auto__], 0));
} else {
}

if((indexer__28529__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__28529__auto__,this__28514__auto__);
}
});})(x30891_30905))
;

x30891_30905.componentDidUpdate = ((function (x30891_30905){
return (function (prev_props__28527__auto__,prev_state__28528__auto__){
var this__28514__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__28514__auto__);
});})(x30891_30905))
;

x30891_30905.componentWillMount = ((function (x30891_30905){
return (function (){
var this__28514__auto__ = this;
var indexer__28529__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28529__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__28529__auto__,this__28514__auto__);
}
});})(x30891_30905))
;

x30891_30905.render = ((function (x30891_30905){
return (function (){
var this__28513__auto__ = this;
var this$ = this__28513__auto__;
var _STAR_reconciler_STAR_30896 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30897 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_30898 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_30899 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_30900 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__28513__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__28513__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__28513__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__28513__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__28513__auto__;

try{var map__30901 = fulcro.client.primitives.props(this$);
var map__30901__$1 = ((((!((map__30901 == null)))?(((((map__30901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30901):map__30901);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30901__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30901__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
return fulcro.client.dom.macro_create_element_STAR_(["div",({"key": react_key}),fulcro.util.force_children((com.wsscode.oge.pub.main.oge_main.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.pub.main.oge_main.cljs$core$IFn$_invoke$arity$1(root) : com.wsscode.oge.pub.main.oge_main.call(null,root)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_30900;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_30899;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_30898;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_30897;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30896;
}});})(x30891_30905))
;


com.wsscode.oge.pub.main.Root.prototype.constructor = com.wsscode.oge.pub.main.Root;

com.wsscode.oge.pub.main.Root.prototype.constructor.displayName = "com.wsscode.oge.pub.main/Root";

com.wsscode.oge.pub.main.Root.prototype.fulcro$isComponent = true;

var x30903_30909 = com.wsscode.oge.pub.main.Root;
x30903_30909.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x30903_30909.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x30903_30909){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),cljs.core.random_uuid(),new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(com.wsscode.oge.pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x30903_30909))
;

x30903_30909.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x30903_30909.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x30903_30909){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain)], null),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)], null);
});})(x30903_30909))
;

x30903_30909.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x30903_30909.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x30903_30909){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x30903_30909))
;

x30903_30909.fulcro_css$css$CSS$include_children$arity$1 = ((function (x30903_30909){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.pub.main.OgeMain], null);
});})(x30903_30909))
;


var x30904_30910 = com.wsscode.oge.pub.main.Root.prototype;
x30904_30910.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x30904_30910.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x30904_30910){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),cljs.core.random_uuid(),new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(com.wsscode.oge.pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x30904_30910))
;

x30904_30910.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x30904_30910.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x30904_30910){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain)], null),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)], null);
});})(x30904_30910))
;

x30904_30910.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x30904_30910.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x30904_30910){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x30904_30910))
;

x30904_30910.fulcro_css$css$CSS$include_children$arity$1 = ((function (x30904_30910){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.pub.main.OgeMain], null);
});})(x30904_30910))
;


com.wsscode.oge.pub.main.Root.cljs$lang$type = true;

com.wsscode.oge.pub.main.Root.cljs$lang$ctorStr = "com.wsscode.oge.pub.main/Root";

com.wsscode.oge.pub.main.Root.cljs$lang$ctorPrWriter = (function (this__28662__auto__,writer__28663__auto__,opt__28664__auto__){
return cljs.core._write(writer__28663__auto__,"com.wsscode.oge.pub.main/Root");
});
com.wsscode.oge.pub.main.endpoint = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());
if(typeof com.wsscode.oge.pub.main.app !== 'undefined'){
} else {
com.wsscode.oge.pub.main.app = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"networking","networking",586110628),com.wsscode.oge.pub.network.make_network.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.endpoint),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.oge.pub.main","endpoint*","com.wsscode.oge.pub.main/endpoint*",1037799883),com.wsscode.oge.pub.main.endpoint], null),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (app){
return com.wsscode.oge.pub.main.update_index(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app));
})], 0)));
}
com.wsscode.oge.pub.main.init = (function com$wsscode$oge$pub$main$init(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.wsscode.oge.pub.main.app,fulcro.client.mount,com.wsscode.oge.pub.main.Root,"oge-container");

return fulcro_css.css.upsert_css("oge",com.wsscode.oge.pub.main.Root);
});
com.wsscode.oge.pub.main.init();
com.wsscode.oge.pub.main.log_state = (function com$wsscode$oge$pub$main$log_state(){
return cljs.core.deref(fulcro.client.primitives.app_state(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.wsscode.oge.pub.main.app))));
});

//# sourceMappingURL=com.wsscode.oge.pub.main.js.map

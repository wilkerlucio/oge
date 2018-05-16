goog.provide('com.wsscode.oge.core');
goog.require('cljs.core');
goog.require('fulcro.client.data_fetch');
goog.require('fulcro.client.mutations');
goog.require('fulcro_css.css');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.profile');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.oge.ui.codemirror');
goog.require('com.wsscode.oge.ui.flame_graph');
goog.require('com.wsscode.oge.ui.helpers');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.dom');
goog.require('cljs.pprint');
goog.require('cljs.reader');
goog.require('com.wsscode.oge.ui.common');
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("com.wsscode.oge.core","clear-errors","com.wsscode.oge.core/clear-errors",-2061220675,null),(function (env30807,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__30808 = env30807;
var map__30808__$1 = ((((!((map__30808 == null)))?(((((map__30808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30808):map__30808);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30808__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__30808,map__30808__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217));
});})(map__30808,map__30808__$1,state))
], null);
})(),(function (){var env = env30807;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("com.wsscode.oge.core","normalize-result","com.wsscode.oge.core/normalize-result",-2001482897,null),(function (env30810,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__30811 = env30810;
var map__30811__$1 = ((((!((map__30811 == null)))?(((((map__30811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30811):map__30811);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30811__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30811__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__30811,map__30811__$1,ref,state){
return (function (){
var result_SINGLEQUOTE_ = (function (){var G__30813 = new cljs.core.Keyword("oge","result'","oge/result'",1930806495).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30813,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__30813,map__30811,map__30811__$1,ref,state){
return (function (p__30814){
var vec__30815 = p__30814;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30815,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.next(k)),v], null);
});})(G__30813,map__30811,map__30811__$1,ref,state))
),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217))));
} else {
return G__30813;
}
})();
var profile = (function (){var G__30818 = result_SINGLEQUOTE_;
var G__30818__$1 = (((G__30818 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583).cljs$core$IFn$_invoke$arity$1(G__30818));
if((G__30818__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(">","oge",">/oge",-1341762313).cljs$core$IFn$_invoke$arity$1(G__30818__$1);
}
})();
var result = (function (){var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30819_30821 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30820_30822 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30819_30821,_STAR_print_fn_STAR_30820_30822,sb__4430__auto__,result_SINGLEQUOTE_,profile,map__30811,map__30811__$1,ref,state){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_30819_30821,_STAR_print_fn_STAR_30820_30822,sb__4430__auto__,result_SINGLEQUOTE_,profile,map__30811,map__30811__$1,ref,state))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30820_30822;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30819_30821;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("oge","result","oge/result",1415079746),result,new cljs.core.Keyword("oge","profile","oge/profile",-546664927),profile], null)], 0));
});})(map__30811,map__30811__$1,ref,state))
], null);
})(),(function (){var env = env30810;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
com.wsscode.oge.core.oge_query = (function com$wsscode$oge$core$oge_query(this$,query){
try{return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.oge.core","clear-errors","com.wsscode.oge.core/clear-errors",-2061220675,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),(new cljs.core.List(null,new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword("oge","result'","oge/result'",1930806495)),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","oge",">/oge",-1341762313),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query),new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583))], null)], null),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oge","result","oge/result",1415079746)], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("com.wsscode.oge.core","normalize-result","com.wsscode.oge.core/normalize-result",-2001482897,null)], null),null,(1),null)),(2),null))], null));
}catch (e30823){var e = e30823;
return console.error("Invalid query",e);
}});
if(typeof com.wsscode.oge.core.Oge !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.core.Oge = (function com$wsscode$oge$core$Oge(){
var this__28659__auto__ = this;
React.Component.apply(this__28659__auto__,arguments);

if(!((this__28659__auto__.initLocalState == null))){
this__28659__auto__.state = this__28659__auto__.initLocalState();
} else {
this__28659__auto__.state = {};
}

return this__28659__auto__;
});

com.wsscode.oge.core.Oge.prototype = goog.object.clone(React.Component.prototype);
}

var x30827_30846 = com.wsscode.oge.core.Oge.prototype;
x30827_30846.componentDidMount = ((function (x30827_30846){
return (function (){
var this__28514__auto__ = this;
return goog.object.set(this__28514__auto__,"fulcro$mounted",true);
});})(x30827_30846))
;

x30827_30846.componentWillUpdate = ((function (x30827_30846){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(((!((this__28514__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__28514__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__28523__auto___30847 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives.props(this__28514__auto__));
var next_ident__28524__auto___30848 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives._next_props(next_props__28515__auto__,this__28514__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__28523__auto___30847,next_ident__28524__auto___30848)){
var idxr__28525__auto___30849 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28525__auto___30849 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28525__auto___30849),((function (idxr__28525__auto___30849,ident__28523__auto___30847,next_ident__28524__auto___30848,this__28514__auto__,x30827_30846){
return (function (indexes__28526__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__28526__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28523__auto___30847], null),cljs.core.disj,this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28524__auto___30848], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28514__auto__);
});})(idxr__28525__auto___30849,ident__28523__auto___30847,next_ident__28524__auto___30848,this__28514__auto__,x30827_30846))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__28514__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__28514__auto__);
});})(x30827_30846))
;

x30827_30846.shouldComponentUpdate = ((function (x30827_30846){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__28517__auto__ = next_props__28515__auto__.children;
var next_props__28515__auto____$1 = goog.object.get(next_props__28515__auto__,"fulcro$value");
var next_props__28515__auto____$2 = (function (){var G__30829 = next_props__28515__auto____$1;
if((next_props__28515__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__30829);
} else {
return G__30829;
}
})();
var current_props__28518__auto__ = fulcro.client.primitives.props(this__28514__auto__);
var next_props_stale_QMARK___28519__auto__ = (fulcro.client.primitives.get_basis_time(current_props__28518__auto__) > fulcro.client.primitives.get_basis_time(next_props__28515__auto____$2));
var props_changed_QMARK___28520__auto__ = ((!(next_props_stale_QMARK___28519__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__28518__auto__,next_props__28515__auto____$2)));
var state_changed_QMARK___28521__auto__ = (function (){var and__3911__auto__ = this__28514__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30830 = this__28514__auto__.state;
var G__30831 = "fulcro$state";
return goog.object.get(G__30830,G__30831);
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
});})(x30827_30846))
;

x30827_30846.componentWillUnmount = ((function (x30827_30846){
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
});})(x30827_30846))
;

x30827_30846.componentDidUpdate = ((function (x30827_30846){
return (function (prev_props__28527__auto__,prev_state__28528__auto__){
var this__28514__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__28514__auto__);
});})(x30827_30846))
;

x30827_30846.componentWillMount = ((function (x30827_30846){
return (function (){
var this__28514__auto__ = this;
var indexer__28529__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28529__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__28529__auto__,this__28514__auto__);
}
});})(x30827_30846))
;

x30827_30846.render = ((function (x30827_30846){
return (function (){
var this__28513__auto__ = this;
var this$ = this__28513__auto__;
var _STAR_reconciler_STAR_30832 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30833 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_30834 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_30835 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_30836 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__28513__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__28513__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__28513__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__28513__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__28513__auto__;

try{var map__30837 = fulcro.client.primitives.props(this$);
var map__30837__$1 = ((((!((map__30837 == null)))?(((((map__30837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30837):map__30837);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword("oge","query","oge/query",-1288612019));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword("oge","result","oge/result",1415079746));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword("oge","profile","oge/profile",-546664927));
var result_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword("oge","result'","oge/result'",1930806495));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30837__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var map__30838 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__30838__$1 = ((((!((map__30838 == null)))?(((((map__30838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30838):map__30838);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30838__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var css = fulcro_css.css.get_classnames(com.wsscode.oge.core.Oge);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(profile))?new cljs.core.Keyword(null,"simple","simple",-581868663).cljs$core$IFn$_invoke$arity$1(css):null))].join(''), "style": cljs.core.clj__GT_js(style)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["h2",({"className": ["flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title-oge","title-oge",-942453599).cljs$core$IFn$_invoke$arity$1(css))].join('')}),"OgE"])),fulcro.util.force_children((function (){var G__30841 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"marginLeft": (10)}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),fulcro.client.data_fetch.loading_QMARK_(new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927).cljs$core$IFn$_invoke$arity$1(result_SINGLEQUOTE_)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846){
return (function (){
return com.wsscode.oge.core.oge_query(this$,query);
});})(map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846))
], null);
var G__30842 = (cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927).cljs$core$IFn$_invoke$arity$1(result_SINGLEQUOTE_)))?"Loading...":"Run Query");
return (com.wsscode.oge.ui.common.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.oge.ui.common.button.cljs$core$IFn$_invoke$arity$2(G__30841,G__30842) : com.wsscode.oge.ui.common.button.call(null,G__30841,G__30842));
})())])),fulcro.util.force_children(com.wsscode.oge.ui.codemirror.oge(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),com.wsscode.pathom.core.elide_not_found(indexes),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","extraKeys","com.wsscode.oge.ui.codemirror/extraKeys",561680448),new cljs.core.PersistentArrayMap(null, 5, ["Cmd-Enter",((function (map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846){
return (function (_){
return com.wsscode.oge.core.oge_query(this$,new cljs.core.Keyword("oge","query","oge/query",-1288612019).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846))
,"Ctrl-Enter",((function (map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846){
return (function (_){
return com.wsscode.oge.core.oge_query(this$,new cljs.core.Keyword("oge","query","oge/query",-1288612019).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846))
,"Shift-Enter",((function (map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846){
return (function (_){
return com.wsscode.oge.core.oge_query(this$,new cljs.core.Keyword("oge","query","oge/query",-1288612019).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846))
,"Cmd-J","ogeJoin","Ctrl-Space","autocomplete"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846){
return (function (p1__30824_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("oge","query","oge/query",-1288612019),p1__30824_SHARP_);
});})(map__30837,map__30837__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__30838,map__30838__$1,style,css,_STAR_reconciler_STAR_30832,_STAR_depth_STAR_30833,_STAR_shared_STAR_30834,_STAR_instrument_STAR_30835,_STAR_parent_STAR_30836,this$,this__28513__auto__,x30827_30846))
], null))),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"divisor","divisor",-25029120).cljs$core$IFn$_invoke$arity$1(css)})])),fulcro.util.force_children(com.wsscode.oge.ui.codemirror.clojure(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)].join('');
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","readOnly","com.wsscode.oge.ui.codemirror/readOnly",1751105953),true,new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","lineNumbers","com.wsscode.oge.ui.codemirror/lineNumbers",58719631),true], null)], null))),fulcro.util.force_children((cljs.core.truth_(profile)?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"hdiv","hdiv",1585481190).cljs$core$IFn$_invoke$arity$1(css)})]):null)),fulcro.util.force_children((cljs.core.truth_(profile)?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"flame","flame",-813204755).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__30843 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),profile], null);
return (com.wsscode.oge.ui.flame_graph.flame_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.flame_graph.flame_graph.cljs$core$IFn$_invoke$arity$1(G__30843) : com.wsscode.oge.ui.flame_graph.flame_graph.call(null,G__30843));
})())]):null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_30836;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_30835;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_30834;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_30833;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30832;
}});})(x30827_30846))
;


com.wsscode.oge.core.Oge.prototype.constructor = com.wsscode.oge.core.Oge;

com.wsscode.oge.core.Oge.prototype.constructor.displayName = "com.wsscode.oge.core/Oge";

com.wsscode.oge.core.Oge.prototype.fulcro$isComponent = true;

var x30844_30850 = com.wsscode.oge.core.Oge;
x30844_30850.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x30844_30850.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x30844_30850){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("oge","id","oge/id",-1388421977),"editor",new cljs.core.Keyword("oge","query","oge/query",-1288612019),"[]",new cljs.core.Keyword("oge","result","oge/result",1415079746),"{}",new cljs.core.Keyword("oge","profile","oge/profile",-546664927),null], null);
});})(x30844_30850))
;

x30844_30850.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x30844_30850.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x30844_30850){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oge","id","oge/id",-1388421977),new cljs.core.Keyword("oge","query","oge/query",-1288612019),new cljs.core.Keyword("oge","result","oge/result",1415079746),new cljs.core.Keyword("oge","profile","oge/profile",-546664927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("oge","result'","oge/result'",1930806495),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)], null)], null)], null);
});})(x30844_30850))
;

x30844_30850.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x30844_30850.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x30844_30850){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oge","id","oge/id",-1388421977),new cljs.core.Keyword("oge","id","oge/id",-1388421977).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x30844_30850))
;

x30844_30850.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x30844_30850.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x30844_30850){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"auto 1fr 12px 300px",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"600px 12px 1fr",new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result","hdiv divisor result","flame divisor result"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.simple","&.simple",842170072),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"auto 1fr",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"600px 12px 1fr",new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"title",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"background","background",-863952629),"linear-gradient(#f7f7f7, #e2e2e2)",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 10px",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e0e0e0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title-oge",".title-oge",-328203011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor",".divisor",-429615332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"divisor",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".editor",".editor",2032871892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"editor",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"result",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hdiv",".hdiv",-210435882),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"hdiv",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flame",".flame",609683491),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"flame",new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-composite","$cm-atom-composite",-229866949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ab890d"], null)], null)], null);
});})(x30844_30850))
;

x30844_30850.fulcro_css$css$CSS$include_children$arity$1 = ((function (x30844_30850){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.CSS], null);
});})(x30844_30850))
;


var x30845_30851 = com.wsscode.oge.core.Oge.prototype;
x30845_30851.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x30845_30851.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x30845_30851){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("oge","id","oge/id",-1388421977),"editor",new cljs.core.Keyword("oge","query","oge/query",-1288612019),"[]",new cljs.core.Keyword("oge","result","oge/result",1415079746),"{}",new cljs.core.Keyword("oge","profile","oge/profile",-546664927),null], null);
});})(x30845_30851))
;

x30845_30851.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x30845_30851.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x30845_30851){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oge","id","oge/id",-1388421977),new cljs.core.Keyword("oge","query","oge/query",-1288612019),new cljs.core.Keyword("oge","result","oge/result",1415079746),new cljs.core.Keyword("oge","profile","oge/profile",-546664927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("oge","result'","oge/result'",1930806495),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)], null)], null)], null);
});})(x30845_30851))
;

x30845_30851.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x30845_30851.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x30845_30851){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oge","id","oge/id",-1388421977),new cljs.core.Keyword("oge","id","oge/id",-1388421977).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x30845_30851))
;

x30845_30851.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x30845_30851.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x30845_30851){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"auto 1fr 12px 300px",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"600px 12px 1fr",new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result","hdiv divisor result","flame divisor result"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.simple","&.simple",842170072),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"auto 1fr",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"600px 12px 1fr",new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"title",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"background","background",-863952629),"linear-gradient(#f7f7f7, #e2e2e2)",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 10px",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e0e0e0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title-oge",".title-oge",-328203011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor",".divisor",-429615332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"divisor",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".editor",".editor",2032871892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"editor",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"result",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".hdiv",".hdiv",-210435882),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"hdiv",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flame",".flame",609683491),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"flame",new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-composite","$cm-atom-composite",-229866949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ab890d"], null)], null)], null);
});})(x30845_30851))
;

x30845_30851.fulcro_css$css$CSS$include_children$arity$1 = ((function (x30845_30851){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.CSS], null);
});})(x30845_30851))
;


com.wsscode.oge.core.Oge.cljs$lang$type = true;

com.wsscode.oge.core.Oge.cljs$lang$ctorStr = "com.wsscode.oge.core/Oge";

com.wsscode.oge.core.Oge.cljs$lang$ctorPrWriter = (function (this__28662__auto__,writer__28663__auto__,opt__28664__auto__){
return cljs.core._write(writer__28663__auto__,"com.wsscode.oge.core/Oge");
});
com.wsscode.oge.core.oge = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge);

//# sourceMappingURL=com.wsscode.oge.core.js.map

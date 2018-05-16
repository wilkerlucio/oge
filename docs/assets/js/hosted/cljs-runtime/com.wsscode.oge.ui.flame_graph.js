goog.provide('com.wsscode.oge.ui.flame_graph');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.dom');
goog.require('com.wsscode.pathom.profile');
goog.require('cljsjs.d3');
var module$node_modules$d3_tip$index=shadow.js.require("module$node_modules$d3_tip$index", {});
var module$node_modules$d3_flame_graph$dist$d3_flamegraph=shadow.js.require("module$node_modules$d3_flame_graph$dist$d3_flamegraph", {});
goog.require('goog.object');
com.wsscode.oge.ui.flame_graph.js_call = (function com$wsscode$oge$ui$flame_graph$js_call(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30640 = arguments.length;
var i__4500__auto___30641 = (0);
while(true){
if((i__4500__auto___30641 < len__4499__auto___30640)){
args__4502__auto__.push((arguments[i__4500__auto___30641]));

var G__30642 = (i__4500__auto___30641 + (1));
i__4500__auto___30641 = G__30642;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,fn,args){
var f = goog.object.get(obj,fn);
return f.apply(obj,cljs.core.to_array(args));
});

com.wsscode.oge.ui.flame_graph.js_call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.oge.ui.flame_graph.js_call.cljs$lang$applyTo = (function (seq30637){
var G__30638 = cljs.core.first(seq30637);
var seq30637__$1 = cljs.core.next(seq30637);
var G__30639 = cljs.core.first(seq30637__$1);
var seq30637__$2 = cljs.core.next(seq30637__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30638,G__30639,seq30637__$2);
});

console.log("FLAME",module$node_modules$d3_flame_graph$dist$d3_flamegraph);
com.wsscode.oge.ui.flame_graph.render_flame = (function com$wsscode$oge$ui$flame_graph$render_flame(profile,target){
var profile_SINGLEQUOTE_ = cljs.core.clj__GT_js((com.wsscode.pathom.profile.profile__GT_flame_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_flame_graph.cljs$core$IFn$_invoke$arity$1(profile) : com.wsscode.pathom.profile.profile__GT_flame_graph.call(null,profile)));
var tooltip = ((function (profile_SINGLEQUOTE_){
return (function (d){
var name = (function (){var G__30645 = d;
var G__30646 = ["data","name"];
return goog.object.getValueByKeys(G__30645,G__30646);
})();
var value = goog.object.get(d,"value");
var children = goog.object.get(d,"children");
var self = (value - cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (name,value,children,profile_SINGLEQUOTE_){
return (function (p1__30643_SHARP_){
return goog.object.get(p1__30643_SHARP_,"value");
});})(name,value,children,profile_SINGLEQUOTE_))
),cljs.core._PLUS_,children));
var total_value = goog.object.get(profile_SINGLEQUOTE_,"value");
var pct = ((value / total_value) * (100)).toFixed((2));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"ms<br />",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct),"% of total"].join('');
});})(profile_SINGLEQUOTE_))
;
var tip = com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$d3_tip$index(),"attr",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["class","d3-flame-graph-tip"], 0)),"html",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tooltip], 0));
var flame = com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$d3_flame_graph$dist$d3_flamegraph.flamegraph(),"width",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(600)], 0)),"height",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(300)], 0)),"tooltip",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tip], 0));
return d3.select(target).datum(profile_SINGLEQUOTE_).call(flame);
});
if(typeof com.wsscode.oge.ui.flame_graph.FlameGraph !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.flame_graph.FlameGraph = (function com$wsscode$oge$ui$flame_graph$FlameGraph(){
var this__28659__auto__ = this;
React.Component.apply(this__28659__auto__,arguments);

if(!((this__28659__auto__.initLocalState == null))){
this__28659__auto__.state = this__28659__auto__.initLocalState();
} else {
this__28659__auto__.state = {};
}

return this__28659__auto__;
});

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype = goog.object.clone(React.Component.prototype);
}

var x30652_30702 = com.wsscode.oge.ui.flame_graph.FlameGraph.prototype;
x30652_30702.componentWillUpdate = ((function (x30652_30702){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(((!((this__28514__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__28514__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__28523__auto___30706 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives.props(this__28514__auto__));
var next_ident__28524__auto___30707 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives._next_props(next_props__28515__auto__,this__28514__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__28523__auto___30706,next_ident__28524__auto___30707)){
var idxr__28525__auto___30708 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28525__auto___30708 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28525__auto___30708),((function (idxr__28525__auto___30708,ident__28523__auto___30706,next_ident__28524__auto___30707,this__28514__auto__,x30652_30702){
return (function (indexes__28526__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__28526__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28523__auto___30706], null),cljs.core.disj,this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28524__auto___30707], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28514__auto__);
});})(idxr__28525__auto___30708,ident__28523__auto___30706,next_ident__28524__auto___30707,this__28514__auto__,x30652_30702))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__28514__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__28514__auto__);
});})(x30652_30702))
;

x30652_30702.shouldComponentUpdate = ((function (x30652_30702){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__28517__auto__ = next_props__28515__auto__.children;
var next_props__28515__auto____$1 = goog.object.get(next_props__28515__auto__,"fulcro$value");
var next_props__28515__auto____$2 = (function (){var G__30658 = next_props__28515__auto____$1;
if((next_props__28515__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__30658);
} else {
return G__30658;
}
})();
var current_props__28518__auto__ = fulcro.client.primitives.props(this__28514__auto__);
var next_props_stale_QMARK___28519__auto__ = (fulcro.client.primitives.get_basis_time(current_props__28518__auto__) > fulcro.client.primitives.get_basis_time(next_props__28515__auto____$2));
var props_changed_QMARK___28520__auto__ = ((!(next_props_stale_QMARK___28519__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__28518__auto__,next_props__28515__auto____$2)));
var state_changed_QMARK___28521__auto__ = (function (){var and__3911__auto__ = this__28514__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30659 = this__28514__auto__.state;
var G__30660 = "fulcro$state";
return goog.object.get(G__30659,G__30660);
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
});})(x30652_30702))
;

x30652_30702.componentWillUnmount = ((function (x30652_30702){
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
});})(x30652_30702))
;

x30652_30702.componentDidUpdate = ((function (x30652_30702){
return (function (prev_props__28527__auto__,prev_state__28528__auto__){
var this__28514__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__28514__auto__);
});})(x30652_30702))
;

x30652_30702.componentWillMount = ((function (x30652_30702){
return (function (){
var this__28514__auto__ = this;
var indexer__28529__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28529__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__28529__auto__,this__28514__auto__);
}
});})(x30652_30702))
;

x30652_30702.componentDidMount = ((function (x30652_30702){
return (function (){
var this__28504__auto__ = this;
var this$ = this__28504__auto__;
var reconciler__28505__auto__ = fulcro.client.primitives.get_reconciler(this__28504__auto__);
var lifecycle__28506__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__28505__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
goog.object.set(this__28504__auto__,"fulcro$mounted",true);

if((lifecycle__28506__auto__ == null)){
} else {
var G__30664_30721 = this__28504__auto__;
var G__30665_30722 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__28506__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__28506__auto__.cljs$core$IFn$_invoke$arity$2(G__30664_30721,G__30665_30722) : lifecycle__28506__auto__.call(null,G__30664_30721,G__30665_30722));
}

var map__30670 = fulcro.client.primitives.props(this$);
var map__30670__$1 = ((((!((map__30670 == null)))?(((((map__30670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30670):map__30670);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30670__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return com.wsscode.oge.ui.flame_graph.render_flame(profile,goog.object.get(this$,"root"));
});})(x30652_30702))
;

x30652_30702.componentWillReceiveProps = ((function (x30652_30702){
return (function (next_props__28489__auto__){
var this__28488__auto__ = this;
var this$ = this__28488__auto__;
var map__30672 = fulcro.client.primitives._next_props(next_props__28489__auto__,this__28488__auto__);
var map__30672__$1 = ((((!((map__30672 == null)))?(((((map__30672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30672):map__30672);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30672__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)))){
return com.wsscode.oge.ui.flame_graph.render_flame(profile,goog.object.get(this$,"root"));
} else {
return null;
}
});})(x30652_30702))
;

x30652_30702.render = ((function (x30652_30702){
return (function (){
var this__28513__auto__ = this;
var this$ = this__28513__auto__;
var _STAR_reconciler_STAR_30674 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30675 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_30676 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_30677 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_30678 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__28513__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__28513__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__28513__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__28513__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__28513__auto__;

try{return fulcro.client.dom.macro_create_element_STAR_(["div",({"ref": ((function (_STAR_reconciler_STAR_30674,_STAR_depth_STAR_30675,_STAR_shared_STAR_30676,_STAR_instrument_STAR_30677,_STAR_parent_STAR_30678,this$,this__28513__auto__,x30652_30702){
return (function (p1__30648_SHARP_){
return goog.object.set(this$,"root",p1__30648_SHARP_);
});})(_STAR_reconciler_STAR_30674,_STAR_depth_STAR_30675,_STAR_shared_STAR_30676,_STAR_instrument_STAR_30677,_STAR_parent_STAR_30678,this$,this__28513__auto__,x30652_30702))
})]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_30678;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_30677;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_30676;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_30675;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30674;
}});})(x30652_30702))
;


com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.constructor = com.wsscode.oge.ui.flame_graph.FlameGraph;

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.constructor.displayName = "com.wsscode.oge.ui.flame-graph/FlameGraph";

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.fulcro$isComponent = true;

var x30697_30724 = com.wsscode.oge.ui.flame_graph.FlameGraph;


var x30698_30725 = com.wsscode.oge.ui.flame_graph.FlameGraph.prototype;


com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$type = true;

com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$ctorStr = "com.wsscode.oge.ui.flame-graph/FlameGraph";

com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$ctorPrWriter = (function (this__28662__auto__,writer__28663__auto__,opt__28664__auto__){
return cljs.core._write(writer__28663__auto__,"com.wsscode.oge.ui.flame-graph/FlameGraph");
});
com.wsscode.oge.ui.flame_graph.flame_graph = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.flame_graph.FlameGraph);

//# sourceMappingURL=com.wsscode.oge.ui.flame_graph.js.map

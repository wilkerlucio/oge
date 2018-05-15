// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.ui.flame_graph');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.dom');
goog.require('com.wsscode.pathom.profile');
goog.require('goog.object');
com.wsscode.oge.ui.flame_graph.js_call = (function com$wsscode$oge$ui$flame_graph$js_call(var_args){
var args__12091__auto__ = [];
var len__12084__auto___39126 = arguments.length;
var i__12085__auto___39127 = (0);
while(true){
if((i__12085__auto___39127 < len__12084__auto___39126)){
args__12091__auto__.push((arguments[i__12085__auto___39127]));

var G__39128 = (i__12085__auto___39127 + (1));
i__12085__auto___39127 = G__39128;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,fn,args){
var f = goog.object.get(obj,fn);
return f.apply(obj,cljs.core.to_array(args));
});

com.wsscode.oge.ui.flame_graph.js_call.cljs$lang$maxFixedArity = (2);

com.wsscode.oge.ui.flame_graph.js_call.cljs$lang$applyTo = (function (seq39114){
var G__39115 = cljs.core.first(seq39114);
var seq39114__$1 = cljs.core.next(seq39114);
var G__39116 = cljs.core.first(seq39114__$1);
var seq39114__$2 = cljs.core.next(seq39114__$1);
return com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(G__39115,G__39116,seq39114__$2);
});

com.wsscode.oge.ui.flame_graph.render_flame = (function com$wsscode$oge$ui$flame_graph$render_flame(profile,target){
var profile_SINGLEQUOTE_ = cljs.core.clj__GT_js((com.wsscode.pathom.profile.profile__GT_flame_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_flame_graph.cljs$core$IFn$_invoke$arity$1(profile) : com.wsscode.pathom.profile.profile__GT_flame_graph.call(null,profile)));
var tooltip = ((function (profile_SINGLEQUOTE_){
return (function (d){
var name = (function (){var G__39144 = d;
var G__39148 = ["data","name"];
return goog.object.getValueByKeys(G__39144,G__39148);
})();
var value = goog.object.get(d,"value");
var children = goog.object.get(d,"children");
var self = (value - cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (name,value,children,profile_SINGLEQUOTE_){
return (function (p1__39135_SHARP_){
return goog.object.get(p1__39135_SHARP_,"value");
});})(name,value,children,profile_SINGLEQUOTE_))
),cljs.core._PLUS_,children));
var total_value = goog.object.get(profile_SINGLEQUOTE_,"value");
var pct = ((value / total_value) * (100)).toFixed((2));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"ms<br />",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct),"% of total"].join('');
});})(profile_SINGLEQUOTE_))
;
var tip = com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__39157 = goog.object.get(d3,"tip");
return (fexpr__39157.cljs$core$IFn$_invoke$arity$0 ? fexpr__39157.cljs$core$IFn$_invoke$arity$0() : fexpr__39157.call(null));
})(),"attr",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["class","d3-flame-graph-tip"], 0)),"html",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tooltip], 0));
var flame = com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__39159 = goog.object.get(d3,"flameGraph");
return (fexpr__39159.cljs$core$IFn$_invoke$arity$0 ? fexpr__39159.cljs$core$IFn$_invoke$arity$0() : fexpr__39159.call(null));
})(),"width",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(600)], 0)),"height",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(300)], 0)),"tooltip",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tip], 0));
return d3.select(target).datum(profile_SINGLEQUOTE_).call(flame);
});
if(typeof com.wsscode.oge.ui.flame_graph.FlameGraph !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.flame_graph.FlameGraph = (function com$wsscode$oge$ui$flame_graph$FlameGraph(){
var this__35867__auto__ = this;
React.Component.apply(this__35867__auto__,arguments);

if(!((this__35867__auto__.initLocalState == null))){
this__35867__auto__.state = this__35867__auto__.initLocalState();
} else {
this__35867__auto__.state = {};
}

return this__35867__auto__;
});

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype = goog.object.clone(React.Component.prototype);
}

var x39191_39306 = com.wsscode.oge.ui.flame_graph.FlameGraph.prototype;
x39191_39306.componentWillUpdate = ((function (x39191_39306){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(((!((this__35722__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35722__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35731__auto___39307 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives.props(this__35722__auto__));
var next_ident__35732__auto___39308 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives._next_props(next_props__35723__auto__,this__35722__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35731__auto___39307,next_ident__35732__auto___39308)){
var idxr__35733__auto___39309 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35733__auto___39309 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35733__auto___39309),((function (idxr__35733__auto___39309,ident__35731__auto___39307,next_ident__35732__auto___39308,this__35722__auto__,x39191_39306){
return (function (indexes__35734__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35734__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35731__auto___39307], null),cljs.core.disj,this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35732__auto___39308], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35722__auto__);
});})(idxr__35733__auto___39309,ident__35731__auto___39307,next_ident__35732__auto___39308,this__35722__auto__,x39191_39306))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35722__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35722__auto__);
});})(x39191_39306))
;

x39191_39306.shouldComponentUpdate = ((function (x39191_39306){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35725__auto__ = next_props__35723__auto__.children;
var next_props__35723__auto____$1 = goog.object.get(next_props__35723__auto__,"fulcro$value");
var next_props__35723__auto____$2 = (function (){var G__39206 = next_props__35723__auto____$1;
if((next_props__35723__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__39206);
} else {
return G__39206;
}
})();
var current_props__35726__auto__ = fulcro.client.primitives.props(this__35722__auto__);
var next_props_stale_QMARK___35727__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35726__auto__) > fulcro.client.primitives.get_basis_time(next_props__35723__auto____$2));
var props_changed_QMARK___35728__auto__ = (!(next_props_stale_QMARK___35727__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35726__auto__,next_props__35723__auto____$2));
var state_changed_QMARK___35729__auto__ = (function (){var and__10793__auto__ = this__35722__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__39216 = this__35722__auto__.state;
var G__39217 = "fulcro$state";
return goog.object.get(G__39216,G__39217);
})(),goog.object.get(next_state__35724__auto__,"fulcro$state"));
} else {
return and__10793__auto__;
}
})();
var children_changed_QMARK___35730__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__35722__auto__.props.children,next_children__35725__auto__);
var or__10805__auto__ = props_changed_QMARK___35728__auto__;
if(or__10805__auto__){
return or__10805__auto__;
} else {
var or__10805__auto____$1 = state_changed_QMARK___35729__auto__;
if(cljs.core.truth_(or__10805__auto____$1)){
return or__10805__auto____$1;
} else {
return children_changed_QMARK___35730__auto__;
}
}
}
});})(x39191_39306))
;

x39191_39306.componentWillUnmount = ((function (x39191_39306){
return (function (){
var this__35722__auto__ = this;
var r__35738__auto__ = fulcro.client.primitives.get_reconciler(this__35722__auto__);
var cfg__35739__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__35738__auto__);
var st__35740__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__35739__auto__);
var indexer__35737__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__35739__auto__);
goog.object.set(this__35722__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__10793__auto__ = !((st__35740__auto__ == null));
if(and__10793__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__35740__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,this__35722__auto__], null));
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__35740__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__35722__auto__], 0));
} else {
}

if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x39191_39306))
;

x39191_39306.componentDidUpdate = ((function (x39191_39306){
return (function (prev_props__35735__auto__,prev_state__35736__auto__){
var this__35722__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35722__auto__);
});})(x39191_39306))
;

x39191_39306.componentWillMount = ((function (x39191_39306){
return (function (){
var this__35722__auto__ = this;
var indexer__35737__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x39191_39306))
;

x39191_39306.componentDidMount = ((function (x39191_39306){
return (function (){
var this__35712__auto__ = this;
var this$ = this__35712__auto__;
var reconciler__35713__auto__ = fulcro.client.primitives.get_reconciler(this__35712__auto__);
var lifecycle__35714__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__35713__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$lifecycle], null));
goog.object.set(this__35712__auto__,"fulcro$mounted",true);

if((lifecycle__35714__auto__ == null)){
} else {
var G__39258_39329 = this__35712__auto__;
var G__39259_39330 = cljs.core.cst$kw$mount;
(lifecycle__35714__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__35714__auto__.cljs$core$IFn$_invoke$arity$2(G__39258_39329,G__39259_39330) : lifecycle__35714__auto__.call(null,G__39258_39329,G__39259_39330));
}

var map__39260 = fulcro.client.primitives.props(this$);
var map__39260__$1 = ((((!((map__39260 == null)))?((((map__39260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39260):map__39260);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39260__$1,cljs.core.cst$kw$profile);
return com.wsscode.oge.ui.flame_graph.render_flame(profile,goog.object.get(this$,"root"));
});})(x39191_39306))
;

x39191_39306.componentWillReceiveProps = ((function (x39191_39306){
return (function (next_props__35697__auto__){
var this__35696__auto__ = this;
var this$ = this__35696__auto__;
var map__39267 = fulcro.client.primitives._next_props(next_props__35697__auto__,this__35696__auto__);
var map__39267__$1 = ((((!((map__39267 == null)))?((((map__39267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39267):map__39267);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39267__$1,cljs.core.cst$kw$profile);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(profile,cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)))){
return com.wsscode.oge.ui.flame_graph.render_flame(profile,goog.object.get(this$,"root"));
} else {
return null;
}
});})(x39191_39306))
;

x39191_39306.render = ((function (x39191_39306){
return (function (){
var this__35721__auto__ = this;
var this$ = this__35721__auto__;
var _STAR_reconciler_STAR_39273 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_39274 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_39275 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_39276 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_39277 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35721__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35721__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35721__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35721__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35721__auto__;

try{return fulcro.client.dom.macro_create_element_STAR_(["div",({"ref": ((function (_STAR_reconciler_STAR_39273,_STAR_depth_STAR_39274,_STAR_shared_STAR_39275,_STAR_instrument_STAR_39276,_STAR_parent_STAR_39277,this$,this__35721__auto__,x39191_39306){
return (function (p1__39178_SHARP_){
return goog.object.set(this$,"root",p1__39178_SHARP_);
});})(_STAR_reconciler_STAR_39273,_STAR_depth_STAR_39274,_STAR_shared_STAR_39275,_STAR_instrument_STAR_39276,_STAR_parent_STAR_39277,this$,this__35721__auto__,x39191_39306))
})]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_39277;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_39276;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_39275;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_39274;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39273;
}});})(x39191_39306))
;


com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.constructor = com.wsscode.oge.ui.flame_graph.FlameGraph;

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.constructor.displayName = "com.wsscode.oge.ui.flame-graph/FlameGraph";

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.fulcro$isComponent = true;

var x39282_39344 = com.wsscode.oge.ui.flame_graph.FlameGraph;


var x39283_39345 = com.wsscode.oge.ui.flame_graph.FlameGraph.prototype;


com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$type = true;

com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$ctorStr = "com.wsscode.oge.ui.flame-graph/FlameGraph";

com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$ctorPrWriter = (function (this__35870__auto__,writer__35871__auto__,opt__35872__auto__){
return cljs.core._write(writer__35871__auto__,"com.wsscode.oge.ui.flame-graph/FlameGraph");
});
com.wsscode.oge.ui.flame_graph.flame_graph = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.flame_graph.FlameGraph);

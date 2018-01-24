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
var len__12084__auto___42495 = arguments.length;
var i__12085__auto___42496 = (0);
while(true){
if((i__12085__auto___42496 < len__12084__auto___42495)){
args__12091__auto__.push((arguments[i__12085__auto___42496]));

var G__42498 = (i__12085__auto___42496 + (1));
i__12085__auto___42496 = G__42498;
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

com.wsscode.oge.ui.flame_graph.js_call.cljs$lang$applyTo = (function (seq42489){
var G__42490 = cljs.core.first(seq42489);
var seq42489__$1 = cljs.core.next(seq42489);
var G__42491 = cljs.core.first(seq42489__$1);
var seq42489__$2 = cljs.core.next(seq42489__$1);
return com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(G__42490,G__42491,seq42489__$2);
});

com.wsscode.oge.ui.flame_graph.render_flame = (function com$wsscode$oge$ui$flame_graph$render_flame(profile,target){
var profile_SINGLEQUOTE_ = cljs.core.clj__GT_js((com.wsscode.pathom.profile.profile__GT_flame_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_flame_graph.cljs$core$IFn$_invoke$arity$1(profile) : com.wsscode.pathom.profile.profile__GT_flame_graph.call(null,profile)));
var tooltip = ((function (profile_SINGLEQUOTE_){
return (function (d){
var name = (function (){var G__42506 = d;
var G__42507 = ["data","name"];
return goog.object.getValueByKeys(G__42506,G__42507);
})();
var value = goog.object.get(d,"value");
var children = goog.object.get(d,"children");
var self = (value - cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (name,value,children,profile_SINGLEQUOTE_){
return (function (p1__42503_SHARP_){
return goog.object.get(p1__42503_SHARP_,"value");
});})(name,value,children,profile_SINGLEQUOTE_))
),cljs.core._PLUS_,children));
var total_value = goog.object.get(profile_SINGLEQUOTE_,"value");
var pct = ((value / total_value) * (100)).toFixed((2));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"ms<br />",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct),"% of total"].join('');
});})(profile_SINGLEQUOTE_))
;
var tip = com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__42508 = goog.object.get(d3,"tip");
return (fexpr__42508.cljs$core$IFn$_invoke$arity$0 ? fexpr__42508.cljs$core$IFn$_invoke$arity$0() : fexpr__42508.call(null));
})(),"attr",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["class","d3-flame-graph-tip"], 0)),"html",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tooltip], 0));
var flame = com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__42509 = goog.object.get(d3,"flameGraph");
return (fexpr__42509.cljs$core$IFn$_invoke$arity$0 ? fexpr__42509.cljs$core$IFn$_invoke$arity$0() : fexpr__42509.call(null));
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
var this__35978__auto__ = this;
React.Component.apply(this__35978__auto__,arguments);

if(!((this__35978__auto__.initLocalState == null))){
this__35978__auto__.state = this__35978__auto__.initLocalState();
} else {
this__35978__auto__.state = {};
}

return this__35978__auto__;
});

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype = goog.object.clone(React.Component.prototype);
}

var x42533_42589 = com.wsscode.oge.ui.flame_graph.FlameGraph.prototype;
x42533_42589.componentWillUpdate = ((function (x42533_42589){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(((!((this__35833__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35833__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35842__auto___42593 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives.props(this__35833__auto__));
var next_ident__35843__auto___42594 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives._next_props(next_props__35834__auto__,this__35833__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35842__auto___42593,next_ident__35843__auto___42594)){
var idxr__35844__auto___42595 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35844__auto___42595 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35844__auto___42595),((function (idxr__35844__auto___42595,ident__35842__auto___42593,next_ident__35843__auto___42594,this__35833__auto__,x42533_42589){
return (function (indexes__35845__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35845__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35842__auto___42593], null),cljs.core.disj,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35843__auto___42594], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35833__auto__);
});})(idxr__35844__auto___42595,ident__35842__auto___42593,next_ident__35843__auto___42594,this__35833__auto__,x42533_42589))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35833__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35833__auto__);
});})(x42533_42589))
;

x42533_42589.shouldComponentUpdate = ((function (x42533_42589){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35836__auto__ = next_props__35834__auto__.children;
var next_props__35834__auto____$1 = goog.object.get(next_props__35834__auto__,"fulcro$value");
var next_props__35834__auto____$2 = (function (){var G__42542 = next_props__35834__auto____$1;
if((next_props__35834__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__42542);
} else {
return G__42542;
}
})();
var current_props__35837__auto__ = fulcro.client.primitives.props(this__35833__auto__);
var next_props_stale_QMARK___35838__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35837__auto__) > fulcro.client.primitives.get_basis_time(next_props__35834__auto____$2));
var props_changed_QMARK___35839__auto__ = (!(next_props_stale_QMARK___35838__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35837__auto__,next_props__35834__auto____$2));
var state_changed_QMARK___35840__auto__ = (function (){var and__10793__auto__ = this__35833__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42543 = this__35833__auto__.state;
var G__42544 = "fulcro$state";
return goog.object.get(G__42543,G__42544);
})(),goog.object.get(next_state__35835__auto__,"fulcro$state"));
} else {
return and__10793__auto__;
}
})();
var children_changed_QMARK___35841__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__35833__auto__.props.children,next_children__35836__auto__);
var or__10805__auto__ = props_changed_QMARK___35839__auto__;
if(or__10805__auto__){
return or__10805__auto__;
} else {
var or__10805__auto____$1 = state_changed_QMARK___35840__auto__;
if(cljs.core.truth_(or__10805__auto____$1)){
return or__10805__auto____$1;
} else {
return children_changed_QMARK___35841__auto__;
}
}
}
});})(x42533_42589))
;

x42533_42589.componentWillUnmount = ((function (x42533_42589){
return (function (){
var this__35833__auto__ = this;
var r__35849__auto__ = fulcro.client.primitives.get_reconciler(this__35833__auto__);
var cfg__35850__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__35849__auto__);
var st__35851__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__35850__auto__);
var indexer__35848__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__35850__auto__);
goog.object.set(this__35833__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__10793__auto__ = !((st__35851__auto__ == null));
if(and__10793__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__35851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries,this__35833__auto__], null));
} else {
return and__10793__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__35851__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__35833__auto__], 0));
} else {
}

if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x42533_42589))
;

x42533_42589.componentDidUpdate = ((function (x42533_42589){
return (function (prev_props__35846__auto__,prev_state__35847__auto__){
var this__35833__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35833__auto__);
});})(x42533_42589))
;

x42533_42589.componentWillMount = ((function (x42533_42589){
return (function (){
var this__35833__auto__ = this;
var indexer__35848__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x42533_42589))
;

x42533_42589.componentDidMount = ((function (x42533_42589){
return (function (){
var this__35823__auto__ = this;
var this$ = this__35823__auto__;
var reconciler__35824__auto__ = fulcro.client.primitives.get_reconciler(this__35823__auto__);
var lifecycle__35825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__35824__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$lifecycle], null));
goog.object.set(this__35823__auto__,"fulcro$mounted",true);

if((lifecycle__35825__auto__ == null)){
} else {
var G__42546_42604 = this__35823__auto__;
var G__42547_42605 = cljs.core.cst$kw$mount;
(lifecycle__35825__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__35825__auto__.cljs$core$IFn$_invoke$arity$2(G__42546_42604,G__42547_42605) : lifecycle__35825__auto__.call(null,G__42546_42604,G__42547_42605));
}

var map__42549 = fulcro.client.primitives.props(this$);
var map__42549__$1 = ((((!((map__42549 == null)))?((((map__42549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42549):map__42549);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,cljs.core.cst$kw$profile);
return com.wsscode.oge.ui.flame_graph.render_flame(profile,goog.object.get(this$,"root"));
});})(x42533_42589))
;

x42533_42589.componentWillReceiveProps = ((function (x42533_42589){
return (function (next_props__35808__auto__){
var this__35807__auto__ = this;
var this$ = this__35807__auto__;
var map__42551 = fulcro.client.primitives._next_props(next_props__35808__auto__,this__35807__auto__);
var map__42551__$1 = ((((!((map__42551 == null)))?((((map__42551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42551):map__42551);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,cljs.core.cst$kw$profile);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(profile,cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)))){
return com.wsscode.oge.ui.flame_graph.render_flame(profile,goog.object.get(this$,"root"));
} else {
return null;
}
});})(x42533_42589))
;

x42533_42589.render = ((function (x42533_42589){
return (function (){
var this__35832__auto__ = this;
var this$ = this__35832__auto__;
var _STAR_reconciler_STAR_42562 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42563 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_42564 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_42565 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_42566 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35832__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35832__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35832__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35832__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35832__auto__;

try{return fulcro.client.dom.div(({"ref": ((function (_STAR_reconciler_STAR_42562,_STAR_depth_STAR_42563,_STAR_shared_STAR_42564,_STAR_instrument_STAR_42565,_STAR_parent_STAR_42566,this$,this__35832__auto__,x42533_42589){
return (function (p1__42520_SHARP_){
return goog.object.set(this$,"root",p1__42520_SHARP_);
});})(_STAR_reconciler_STAR_42562,_STAR_depth_STAR_42563,_STAR_shared_STAR_42564,_STAR_instrument_STAR_42565,_STAR_parent_STAR_42566,this$,this__35832__auto__,x42533_42589))
}));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_42566;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_42565;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_42564;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_42563;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42562;
}});})(x42533_42589))
;


com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.constructor = com.wsscode.oge.ui.flame_graph.FlameGraph;

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.constructor.displayName = "com.wsscode.oge.ui.flame-graph/FlameGraph";

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.fulcro$isComponent = true;

var x42579_42626 = com.wsscode.oge.ui.flame_graph.FlameGraph;


var x42581_42631 = com.wsscode.oge.ui.flame_graph.FlameGraph.prototype;


com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$type = true;

com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$ctorStr = "com.wsscode.oge.ui.flame-graph/FlameGraph";

com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$ctorPrWriter = (function (this__35981__auto__,writer__35982__auto__,opt__35983__auto__){
return cljs.core._write(writer__35982__auto__,"com.wsscode.oge.ui.flame-graph/FlameGraph");
});
com.wsscode.oge.ui.flame_graph.flame_graph = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.flame_graph.FlameGraph);

// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.ui.flame_graph');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('om.dom');
goog.require('com.wsscode.pathom.profile');
goog.require('goog.object');
com.wsscode.oge.ui.flame_graph.js_call = (function com$wsscode$oge$ui$flame_graph$js_call(var_args){
var args__11698__auto__ = [];
var len__11691__auto___45398 = arguments.length;
var i__11692__auto___45399 = (0);
while(true){
if((i__11692__auto___45399 < len__11691__auto___45398)){
args__11698__auto__.push((arguments[i__11692__auto___45399]));

var G__45400 = (i__11692__auto___45399 + (1));
i__11692__auto___45399 = G__45400;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,fn,args){
var f = goog.object.get(obj,fn);
return f.apply(obj,cljs.core.to_array(args));
});

com.wsscode.oge.ui.flame_graph.js_call.cljs$lang$maxFixedArity = (2);

com.wsscode.oge.ui.flame_graph.js_call.cljs$lang$applyTo = (function (seq45393){
var G__45394 = cljs.core.first(seq45393);
var seq45393__$1 = cljs.core.next(seq45393);
var G__45395 = cljs.core.first(seq45393__$1);
var seq45393__$2 = cljs.core.next(seq45393__$1);
return com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(G__45394,G__45395,seq45393__$2);
});

com.wsscode.oge.ui.flame_graph.render_flame = (function com$wsscode$oge$ui$flame_graph$render_flame(profile,target){
var profile_SINGLEQUOTE_ = cljs.core.clj__GT_js((com.wsscode.pathom.profile.profile__GT_flame_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_flame_graph.cljs$core$IFn$_invoke$arity$1(profile) : com.wsscode.pathom.profile.profile__GT_flame_graph.call(null,profile)));
var tooltip = ((function (profile_SINGLEQUOTE_){
return (function (d){
var name = (function (){var G__45404 = d;
var G__45405 = ["data","name"];
return goog.object.getValueByKeys(G__45404,G__45405);
})();
var value = goog.object.get(d,"value");
var children = goog.object.get(d,"children");
var self = (value - cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (name,value,children,profile_SINGLEQUOTE_){
return (function (p1__45403_SHARP_){
return goog.object.get(p1__45403_SHARP_,"value");
});})(name,value,children,profile_SINGLEQUOTE_))
),cljs.core._PLUS_,children));
var total_value = goog.object.get(profile_SINGLEQUOTE_,"value");
var pct = ((value / total_value) * (100)).toFixed((2));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"<br>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"ms<br />",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct),"% of total"].join('');
});})(profile_SINGLEQUOTE_))
;
var tip = com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__45406 = goog.object.get(d3,"tip");
return (fexpr__45406.cljs$core$IFn$_invoke$arity$0 ? fexpr__45406.cljs$core$IFn$_invoke$arity$0() : fexpr__45406.call(null));
})(),"attr",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["class","d3-flame-graph-tip"], 0)),"html",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tooltip], 0));
var flame = com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.oge.ui.flame_graph.js_call.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__45409 = goog.object.get(d3,"flameGraph");
return (fexpr__45409.cljs$core$IFn$_invoke$arity$0 ? fexpr__45409.cljs$core$IFn$_invoke$arity$0() : fexpr__45409.call(null));
})(),"width",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(600)], 0)),"height",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(300)], 0)),"tooltip",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tip], 0));
return d3.select(target).datum(profile_SINGLEQUOTE_).call(flame);
});
if(typeof com.wsscode.oge.ui.flame_graph.FlameGraph !== 'undefined'){
} else {
/**
 * @constructor
 */
com.wsscode.oge.ui.flame_graph.FlameGraph = (function com$wsscode$oge$ui$flame_graph$FlameGraph(){
var this__27063__auto__ = this;
React.Component.apply(this__27063__auto__,arguments);

if(!((this__27063__auto__.initLocalState == null))){
this__27063__auto__.state = this__27063__auto__.initLocalState();
} else {
this__27063__auto__.state = {};
}

return this__27063__auto__;
});

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype = goog.object.clone(React.Component.prototype);
}

var x45420_45444 = com.wsscode.oge.ui.flame_graph.FlameGraph.prototype;
x45420_45444.componentWillUpdate = ((function (x45420_45444){
return (function (next_props__26662__auto__,next_state__26663__auto__){
var this__26661__auto__ = this;
if(((!((this__26661__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__26661__auto__.om$next$Ident$)))?true:false):false)){
var ident__26665__auto___45445 = om.next.ident(this__26661__auto__,om.next.props(this__26661__auto__));
var next_ident__26666__auto___45446 = om.next.ident(this__26661__auto__,om.next._next_props(next_props__26662__auto__,this__26661__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__26665__auto___45445,next_ident__26666__auto___45446)){
var idxr__26667__auto___45447 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__26661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__26667__auto___45447 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__26667__auto___45447),((function (idxr__26667__auto___45447,ident__26665__auto___45445,next_ident__26666__auto___45446,this__26661__auto__,x45420_45444){
return (function (indexes__26668__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__26668__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__26665__auto___45445], null),cljs.core.disj,this__26661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__26666__auto___45446], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26661__auto__);
});})(idxr__26667__auto___45447,ident__26665__auto___45445,next_ident__26666__auto___45446,this__26661__auto__,x45420_45444))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__26661__auto__);

return om.next.merge_pending_state_BANG_(this__26661__auto__);
});})(x45420_45444))
;

x45420_45444.shouldComponentUpdate = ((function (x45420_45444){
return (function (next_props__26662__auto__,next_state__26663__auto__){
var this__26661__auto__ = this;
var next_children__26664__auto__ = next_props__26662__auto__.children;
var next_props__26662__auto____$1 = goog.object.get(next_props__26662__auto__,"omcljs$value");
var next_props__26662__auto____$2 = (function (){var G__45423 = next_props__26662__auto____$1;
if((next_props__26662__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__45423);
} else {
return G__45423;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__26661__auto__),next_props__26662__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__26661__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45429 = this__26661__auto__.state;
var G__45430 = "omcljs$state";
return goog.object.get(G__45429,G__45430);
})(),goog.object.get(next_state__26663__auto__,"omcljs$state"));
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__26661__auto__.props.children,next_children__26664__auto__);
}
}
});})(x45420_45444))
;

x45420_45444.componentWillUnmount = ((function (x45420_45444){
return (function (){
var this__26661__auto__ = this;
var r__26672__auto__ = om.next.get_reconciler(this__26661__auto__);
var cfg__26673__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__26672__auto__);
var st__26674__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__26673__auto__);
var indexer__26671__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__26673__auto__);
if(cljs.core.truth_((function (){var and__10400__auto__ = !((st__26674__auto__ == null));
if(and__10400__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__26674__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__26661__auto__], null));
} else {
return and__10400__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__26674__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__26661__auto__], 0));
} else {
}

if((indexer__26671__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__26671__auto__,this__26661__auto__);
}
});})(x45420_45444))
;

x45420_45444.componentDidUpdate = ((function (x45420_45444){
return (function (prev_props__26669__auto__,prev_state__26670__auto__){
var this__26661__auto__ = this;
return om.next.clear_prev_props_BANG_(this__26661__auto__);
});})(x45420_45444))
;

x45420_45444.isMounted = ((function (x45420_45444){
return (function (){
var this__26661__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__26661__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x45420_45444))
;

x45420_45444.componentWillMount = ((function (x45420_45444){
return (function (){
var this__26661__auto__ = this;
var indexer__26671__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__26661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__26671__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__26671__auto__,this__26661__auto__);
}
});})(x45420_45444))
;

x45420_45444.componentDidMount = ((function (x45420_45444){
return (function (){
var this$ = this;
var map__45431 = om.next.props(this$);
var map__45431__$1 = ((((!((map__45431 == null)))?((((map__45431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45431):map__45431);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45431__$1,cljs.core.cst$kw$profile);
return com.wsscode.oge.ui.flame_graph.render_flame(profile,goog.object.get(this$,"root"));
});})(x45420_45444))
;

x45420_45444.componentWillReceiveProps = ((function (x45420_45444){
return (function (next_props__26641__auto__){
var this__26640__auto__ = this;
var this$ = this__26640__auto__;
var map__45433 = om.next._next_props(next_props__26641__auto__,this__26640__auto__);
var map__45433__$1 = ((((!((map__45433 == null)))?((((map__45433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45433):map__45433);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45433__$1,cljs.core.cst$kw$profile);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(profile,cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)))){
return com.wsscode.oge.ui.flame_graph.render_flame(profile,goog.object.get(this$,"root"));
} else {
return null;
}
});})(x45420_45444))
;

x45420_45444.render = ((function (x45420_45444){
return (function (){
var this__26660__auto__ = this;
var this$ = this__26660__auto__;
var _STAR_reconciler_STAR_45435 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45436 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_45437 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45438 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_45439 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__26660__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__26660__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__26660__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__26660__auto__);

om.next._STAR_parent_STAR_ = this__26660__auto__;

try{return om.dom.div(({"ref": ((function (_STAR_reconciler_STAR_45435,_STAR_depth_STAR_45436,_STAR_shared_STAR_45437,_STAR_instrument_STAR_45438,_STAR_parent_STAR_45439,this$,this__26660__auto__,x45420_45444){
return (function (p1__45416_SHARP_){
return goog.object.set(this$,"root",p1__45416_SHARP_);
});})(_STAR_reconciler_STAR_45435,_STAR_depth_STAR_45436,_STAR_shared_STAR_45437,_STAR_instrument_STAR_45438,_STAR_parent_STAR_45439,this$,this__26660__auto__,x45420_45444))
}));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_45439;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45438;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45437;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_45436;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45435;
}});})(x45420_45444))
;


com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.constructor = com.wsscode.oge.ui.flame_graph.FlameGraph;

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.constructor.displayName = "com.wsscode.oge.ui.flame-graph/FlameGraph";

com.wsscode.oge.ui.flame_graph.FlameGraph.prototype.om$isComponent = true;

var x45440_45460 = com.wsscode.oge.ui.flame_graph.FlameGraph;


var x45441_45461 = com.wsscode.oge.ui.flame_graph.FlameGraph.prototype;


com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$type = true;

com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$ctorStr = "com.wsscode.oge.ui.flame-graph/FlameGraph";

com.wsscode.oge.ui.flame_graph.FlameGraph.cljs$lang$ctorPrWriter = (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write(writer__27067__auto__,"com.wsscode.oge.ui.flame-graph/FlameGraph");
});
com.wsscode.oge.ui.flame_graph.flame_graph = om.next.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.flame_graph.FlameGraph);

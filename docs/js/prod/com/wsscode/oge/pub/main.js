// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.pub.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__11759__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,"editor",cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),cljs.core.cst$kw$query,fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null)),cljs.core.cst$kw$refresh,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,null], null), null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.cst$sym$fulcro_SLASH_load)], null));
});
com.wsscode.oge.pub.main.debounced_update_index = goog.functions.debounce(com.wsscode.oge.pub.main.update_index,(600));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$com$wsscode$oge$pub$main_SLASH_update_DASH_endpoint,(function (env43093,_,p__43094){
var map__43095 = p__43094;
var map__43095__$1 = ((((!((map__43095 == null)))?((((map__43095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43095):map__43095);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43095__$1,cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_url);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__43097 = env43093;
var map__43097__$1 = ((((!((map__43097 == null)))?((((map__43097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43097):map__43097);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43097__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43097__$1,cljs.core.cst$kw$ref);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43097__$1,cljs.core.cst$kw$reconciler);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43097__$1,cljs.core.cst$kw$shared);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__43097,map__43097__$1,state,ref,reconciler,shared,map__43095,map__43095__$1,url){
return (function (){
cljs.core.reset_BANG_(cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_endpoint_STAR_.cljs$core$IFn$_invoke$arity$1(shared),url);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,cljs.core.cst$kw$ui_SLASH_target_DASH_url),url);

localStorage.setItem("oge-pub-last-url",url);

return (com.wsscode.oge.pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1(reconciler) : com.wsscode.oge.pub.main.debounced_update_index.call(null,reconciler));
});})(map__43097,map__43097__$1,state,ref,reconciler,shared,map__43095,map__43095__$1,url))
], null);
})(),(function (){var env = env43093;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
if(typeof com.wsscode.oge.pub.main.OgeMain !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.pub.main.OgeMain = (function com$wsscode$oge$pub$main$OgeMain(){
var this__35978__auto__ = this;
React.Component.apply(this__35978__auto__,arguments);

if(!((this__35978__auto__.initLocalState == null))){
this__35978__auto__.state = this__35978__auto__.initLocalState();
} else {
this__35978__auto__.state = {};
}

return this__35978__auto__;
});

com.wsscode.oge.pub.main.OgeMain.prototype = goog.object.clone(React.Component.prototype);
}

var x43102_43124 = com.wsscode.oge.pub.main.OgeMain.prototype;
x43102_43124.componentDidMount = ((function (x43102_43124){
return (function (){
var this__35833__auto__ = this;
return goog.object.set(this__35833__auto__,"fulcro$mounted",true);
});})(x43102_43124))
;

x43102_43124.componentWillUpdate = ((function (x43102_43124){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(((!((this__35833__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35833__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35842__auto___43125 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives.props(this__35833__auto__));
var next_ident__35843__auto___43126 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives._next_props(next_props__35834__auto__,this__35833__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35842__auto___43125,next_ident__35843__auto___43126)){
var idxr__35844__auto___43127 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35844__auto___43127 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35844__auto___43127),((function (idxr__35844__auto___43127,ident__35842__auto___43125,next_ident__35843__auto___43126,this__35833__auto__,x43102_43124){
return (function (indexes__35845__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35845__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35842__auto___43125], null),cljs.core.disj,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35843__auto___43126], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35833__auto__);
});})(idxr__35844__auto___43127,ident__35842__auto___43125,next_ident__35843__auto___43126,this__35833__auto__,x43102_43124))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35833__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35833__auto__);
});})(x43102_43124))
;

x43102_43124.shouldComponentUpdate = ((function (x43102_43124){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35836__auto__ = next_props__35834__auto__.children;
var next_props__35834__auto____$1 = goog.object.get(next_props__35834__auto__,"fulcro$value");
var next_props__35834__auto____$2 = (function (){var G__43104 = next_props__35834__auto____$1;
if((next_props__35834__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__43104);
} else {
return G__43104;
}
})();
var current_props__35837__auto__ = fulcro.client.primitives.props(this__35833__auto__);
var next_props_stale_QMARK___35838__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35837__auto__) > fulcro.client.primitives.get_basis_time(next_props__35834__auto____$2));
var props_changed_QMARK___35839__auto__ = (!(next_props_stale_QMARK___35838__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35837__auto__,next_props__35834__auto____$2));
var state_changed_QMARK___35840__auto__ = (function (){var and__10793__auto__ = this__35833__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43105 = this__35833__auto__.state;
var G__43106 = "fulcro$state";
return goog.object.get(G__43105,G__43106);
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
});})(x43102_43124))
;

x43102_43124.componentWillUnmount = ((function (x43102_43124){
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
});})(x43102_43124))
;

x43102_43124.componentDidUpdate = ((function (x43102_43124){
return (function (prev_props__35846__auto__,prev_state__35847__auto__){
var this__35833__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35833__auto__);
});})(x43102_43124))
;

x43102_43124.componentWillMount = ((function (x43102_43124){
return (function (){
var this__35833__auto__ = this;
var indexer__35848__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x43102_43124))
;

x43102_43124.render = ((function (x43102_43124){
return (function (){
var this__35832__auto__ = this;
var this$ = this__35832__auto__;
var _STAR_reconciler_STAR_43107 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_43108 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_43109 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_43110 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_43111 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35832__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35832__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35832__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35832__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35832__auto__;

try{var map__43112 = fulcro.client.primitives.props(this$);
var map__43112__$1 = ((((!((map__43112 == null)))?((((map__43112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43112):map__43112);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,cljs.core.cst$kw$ui_SLASH_editor);
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,cljs.core.cst$kw$ui_SLASH_target_DASH_url);
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.pub.main.OgeMain);
var fs = cljs.core.cst$kw$ui_SLASH_fetch_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes.cljs$core$IFn$_invoke$arity$1(editor));
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(css)}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43114 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,target_url,cljs.core.cst$kw$className,cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$placeholder,"https://your-endpoint.here.com",cljs.core.cst$kw$onChange,((function (fs,map__43112,map__43112__$1,editor,target_url,_,css,_STAR_reconciler_STAR_43107,_STAR_depth_STAR_43108,_STAR_shared_STAR_43109,_STAR_instrument_STAR_43110,_STAR_parent_STAR_43111,this$,this__35832__auto__,x43102_43124){
return (function (p1__43099_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$com$wsscode$oge$pub$main_SLASH_update_DASH_endpoint),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_url),(function (){var x__11759__auto__ = p1__43099_SHARP_.target.value;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())))], null));
});})(fs,map__43112,map__43112__$1,editor,target_url,_,css,_STAR_reconciler_STAR_43107,_STAR_depth_STAR_43108,_STAR_shared_STAR_43109,_STAR_instrument_STAR_43110,_STAR_parent_STAR_43111,this$,this__35832__auto__,x43102_43124))
,cljs.core.cst$kw$com$wsscode$oge$ui$common_SLASH_classes,(cljs.core.truth_(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes.cljs$core$IFn$_invoke$arity$1(editor)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success], null):(cljs.core.truth_(fulcro.client.data_fetch.failed_QMARK_(fs))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warning], null):null))], null);
return (com.wsscode.oge.ui.common.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.common.text_field.cljs$core$IFn$_invoke$arity$1(G__43114) : com.wsscode.oge.ui.common.text_field.call(null,G__43114));
})(),(function (){var G__43115 = fulcro.client.primitives.computed(editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null));
return (com.wsscode.oge.core.oge.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.core.oge.cljs$core$IFn$_invoke$arity$1(G__43115) : com.wsscode.oge.core.oge.call(null,G__43115));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_43111;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_43110;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_43109;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_43108;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43107;
}});})(x43102_43124))
;


com.wsscode.oge.pub.main.OgeMain.prototype.constructor = com.wsscode.oge.pub.main.OgeMain;

com.wsscode.oge.pub.main.OgeMain.prototype.constructor.displayName = "com.wsscode.oge.pub.main/OgeMain";

com.wsscode.oge.pub.main.OgeMain.prototype.fulcro$isComponent = true;

var x43116_43128 = com.wsscode.oge.pub.main.OgeMain;
x43116_43128.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x43116_43128.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x43116_43128){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$overflow,"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flex,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null)], null);
});})(x43116_43128))
;

x43116_43128.fulcro_css$css$CSS$include_children$arity$1 = ((function (x43116_43128){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.core.Oge], null);
});})(x43116_43128))
;

x43116_43128.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x43116_43128.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x43116_43128){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.primitives.get_initial_state(com.wsscode.oge.core.Oge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$ui_SLASH_target_DASH_url,(function (){var or__10805__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "";
}
})()], null);
});})(x43116_43128))
;

x43116_43128.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x43116_43128.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x43116_43128){
return (function (this$,p__43117){
var map__43118 = p__43117;
var map__43118__$1 = ((((!((map__43118 == null)))?((((map__43118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43118):map__43118);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43118__$1,cljs.core.cst$kw$ui_SLASH_editor);
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43118__$1,cljs.core.cst$kw$ui_SLASH_target_DASH_url);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_DASH_app,"main"], null);
});})(x43116_43128))
;

x43116_43128.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x43116_43128.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x43116_43128){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge)], null),cljs.core.cst$kw$ui_SLASH_target_DASH_url], null);
});})(x43116_43128))
;


var x43120_43129 = com.wsscode.oge.pub.main.OgeMain.prototype;
x43120_43129.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x43120_43129.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x43120_43129){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$overflow,"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flex,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null)], null);
});})(x43120_43129))
;

x43120_43129.fulcro_css$css$CSS$include_children$arity$1 = ((function (x43120_43129){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.core.Oge], null);
});})(x43120_43129))
;

x43120_43129.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x43120_43129.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x43120_43129){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.primitives.get_initial_state(com.wsscode.oge.core.Oge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$ui_SLASH_target_DASH_url,(function (){var or__10805__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "";
}
})()], null);
});})(x43120_43129))
;

x43120_43129.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x43120_43129.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x43120_43129){
return (function (this$,p__43121){
var map__43122 = p__43121;
var map__43122__$1 = ((((!((map__43122 == null)))?((((map__43122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43122):map__43122);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43122__$1,cljs.core.cst$kw$ui_SLASH_editor);
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43122__$1,cljs.core.cst$kw$ui_SLASH_target_DASH_url);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_DASH_app,"main"], null);
});})(x43120_43129))
;

x43120_43129.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x43120_43129.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x43120_43129){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge)], null),cljs.core.cst$kw$ui_SLASH_target_DASH_url], null);
});})(x43120_43129))
;


com.wsscode.oge.pub.main.OgeMain.cljs$lang$type = true;

com.wsscode.oge.pub.main.OgeMain.cljs$lang$ctorStr = "com.wsscode.oge.pub.main/OgeMain";

com.wsscode.oge.pub.main.OgeMain.cljs$lang$ctorPrWriter = (function (this__35981__auto__,writer__35982__auto__,opt__35983__auto__){
return cljs.core._write(writer__35982__auto__,"com.wsscode.oge.pub.main/OgeMain");
});
com.wsscode.oge.pub.main.oge_main = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain);
if(typeof com.wsscode.oge.pub.main.Root !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.pub.main.Root = (function com$wsscode$oge$pub$main$Root(){
var this__35978__auto__ = this;
React.Component.apply(this__35978__auto__,arguments);

if(!((this__35978__auto__.initLocalState == null))){
this__35978__auto__.state = this__35978__auto__.initLocalState();
} else {
this__35978__auto__.state = {};
}

return this__35978__auto__;
});

com.wsscode.oge.pub.main.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x43132_43146 = com.wsscode.oge.pub.main.Root.prototype;
x43132_43146.componentDidMount = ((function (x43132_43146){
return (function (){
var this__35833__auto__ = this;
return goog.object.set(this__35833__auto__,"fulcro$mounted",true);
});})(x43132_43146))
;

x43132_43146.componentWillUpdate = ((function (x43132_43146){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(((!((this__35833__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35833__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35842__auto___43147 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives.props(this__35833__auto__));
var next_ident__35843__auto___43148 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives._next_props(next_props__35834__auto__,this__35833__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35842__auto___43147,next_ident__35843__auto___43148)){
var idxr__35844__auto___43149 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35844__auto___43149 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35844__auto___43149),((function (idxr__35844__auto___43149,ident__35842__auto___43147,next_ident__35843__auto___43148,this__35833__auto__,x43132_43146){
return (function (indexes__35845__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35845__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35842__auto___43147], null),cljs.core.disj,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35843__auto___43148], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35833__auto__);
});})(idxr__35844__auto___43149,ident__35842__auto___43147,next_ident__35843__auto___43148,this__35833__auto__,x43132_43146))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35833__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35833__auto__);
});})(x43132_43146))
;

x43132_43146.shouldComponentUpdate = ((function (x43132_43146){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35836__auto__ = next_props__35834__auto__.children;
var next_props__35834__auto____$1 = goog.object.get(next_props__35834__auto__,"fulcro$value");
var next_props__35834__auto____$2 = (function (){var G__43134 = next_props__35834__auto____$1;
if((next_props__35834__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__43134);
} else {
return G__43134;
}
})();
var current_props__35837__auto__ = fulcro.client.primitives.props(this__35833__auto__);
var next_props_stale_QMARK___35838__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35837__auto__) > fulcro.client.primitives.get_basis_time(next_props__35834__auto____$2));
var props_changed_QMARK___35839__auto__ = (!(next_props_stale_QMARK___35838__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35837__auto__,next_props__35834__auto____$2));
var state_changed_QMARK___35840__auto__ = (function (){var and__10793__auto__ = this__35833__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43135 = this__35833__auto__.state;
var G__43136 = "fulcro$state";
return goog.object.get(G__43135,G__43136);
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
});})(x43132_43146))
;

x43132_43146.componentWillUnmount = ((function (x43132_43146){
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
});})(x43132_43146))
;

x43132_43146.componentDidUpdate = ((function (x43132_43146){
return (function (prev_props__35846__auto__,prev_state__35847__auto__){
var this__35833__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35833__auto__);
});})(x43132_43146))
;

x43132_43146.componentWillMount = ((function (x43132_43146){
return (function (){
var this__35833__auto__ = this;
var indexer__35848__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x43132_43146))
;

x43132_43146.render = ((function (x43132_43146){
return (function (){
var this__35832__auto__ = this;
var this$ = this__35832__auto__;
var _STAR_reconciler_STAR_43137 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_43138 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_43139 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_43140 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_43141 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35832__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35832__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35832__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35832__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35832__auto__;

try{var map__43142 = fulcro.client.primitives.props(this$);
var map__43142__$1 = ((((!((map__43142 == null)))?((((map__43142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43142):map__43142);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43142__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43142__$1,cljs.core.cst$kw$ui_SLASH_root);
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": react_key}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.oge.pub.main.oge_main.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.pub.main.oge_main.cljs$core$IFn$_invoke$arity$1(root) : com.wsscode.oge.pub.main.oge_main.call(null,root))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_43141;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_43140;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_43139;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_43138;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43137;
}});})(x43132_43146))
;


com.wsscode.oge.pub.main.Root.prototype.constructor = com.wsscode.oge.pub.main.Root;

com.wsscode.oge.pub.main.Root.prototype.constructor.displayName = "com.wsscode.oge.pub.main/Root";

com.wsscode.oge.pub.main.Root.prototype.fulcro$isComponent = true;

var x43144_43150 = com.wsscode.oge.pub.main.Root;
x43144_43150.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x43144_43150.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x43144_43150){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.random_uuid(),cljs.core.cst$kw$ui_SLASH_root,fulcro.client.primitives.get_initial_state(com.wsscode.oge.pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x43144_43150))
;

x43144_43150.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x43144_43150.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x43144_43150){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_root,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain)], null),cljs.core.cst$kw$ui_SLASH_react_DASH_key], null);
});})(x43144_43150))
;

x43144_43150.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x43144_43150.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x43144_43150){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x43144_43150))
;

x43144_43150.fulcro_css$css$CSS$include_children$arity$1 = ((function (x43144_43150){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.pub.main.OgeMain], null);
});})(x43144_43150))
;


var x43145_43151 = com.wsscode.oge.pub.main.Root.prototype;
x43145_43151.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x43145_43151.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x43145_43151){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.random_uuid(),cljs.core.cst$kw$ui_SLASH_root,fulcro.client.primitives.get_initial_state(com.wsscode.oge.pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x43145_43151))
;

x43145_43151.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x43145_43151.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x43145_43151){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_root,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain)], null),cljs.core.cst$kw$ui_SLASH_react_DASH_key], null);
});})(x43145_43151))
;

x43145_43151.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x43145_43151.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x43145_43151){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x43145_43151))
;

x43145_43151.fulcro_css$css$CSS$include_children$arity$1 = ((function (x43145_43151){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.pub.main.OgeMain], null);
});})(x43145_43151))
;


com.wsscode.oge.pub.main.Root.cljs$lang$type = true;

com.wsscode.oge.pub.main.Root.cljs$lang$ctorStr = "com.wsscode.oge.pub.main/Root";

com.wsscode.oge.pub.main.Root.cljs$lang$ctorPrWriter = (function (this__35981__auto__,writer__35982__auto__,opt__35983__auto__){
return cljs.core._write(writer__35982__auto__,"com.wsscode.oge.pub.main/Root");
});
com.wsscode.oge.pub.main.endpoint = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__10805__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "";
}
})());
if(typeof com.wsscode.oge.pub.main.app !== 'undefined'){
} else {
com.wsscode.oge.pub.main.app = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$networking,com.wsscode.oge.pub.network.make_network.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.endpoint),cljs.core.cst$kw$shared,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_endpoint_STAR_,com.wsscode.oge.pub.main.endpoint], null),cljs.core.cst$kw$started_DASH_callback,(function (app){
return com.wsscode.oge.pub.main.update_index(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app));
})], 0)));
}
com.wsscode.oge.pub.main.init = (function com$wsscode$oge$pub$main$init(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.wsscode.oge.pub.main.app,fulcro.client.mount,com.wsscode.oge.pub.main.Root,"oge-container");

return fulcro_css.css.upsert_css("oge",com.wsscode.oge.pub.main.Root);
});
com.wsscode.oge.pub.main.init();
com.wsscode.oge.pub.main.log_state = (function com$wsscode$oge$pub$main$log_state(){
return cljs.core.deref(fulcro.client.primitives.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.wsscode.oge.pub.main.app))));
});

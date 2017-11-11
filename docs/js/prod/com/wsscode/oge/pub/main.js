// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.pub.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.core');
goog.require('fulcro.client.mutations');
goog.require('fulcro_css.css');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.oge.core');
goog.require('com.wsscode.oge.ui.common');
goog.require('com.wsscode.oge.pub.network');
goog.require('goog.functions');
goog.require('om.next');
goog.require('om.dom');
goog.require('fulcro.client.data_fetch');
com.wsscode.oge.pub.main.update_index = (function com$wsscode$oge$pub$main$update_index(reconciler){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__11366__auto__ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,"editor",cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),cljs.core.cst$kw$query,om.next.focus_query(om.next.get_query(com.wsscode.oge.core.Oge),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null)),cljs.core.cst$kw$refresh,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,null], null), null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.cst$sym$fulcro_SLASH_load)], null));
});
com.wsscode.oge.pub.main.debounced_update_index = goog.functions.debounce(com.wsscode.oge.pub.main.update_index,(600));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$com$wsscode$oge$pub$main_SLASH_update_DASH_endpoint,(function (p__42599,_,p__42600){
var map__42601 = p__42599;
var map__42601__$1 = ((((!((map__42601 == null)))?((((map__42601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42601):map__42601);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42601__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42601__$1,cljs.core.cst$kw$ref);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42601__$1,cljs.core.cst$kw$reconciler);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42601__$1,cljs.core.cst$kw$shared);
var map__42602 = p__42600;
var map__42602__$1 = ((((!((map__42602 == null)))?((((map__42602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42602):map__42602);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42602__$1,cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_url);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__42601,map__42601__$1,state,ref,reconciler,shared,map__42602,map__42602__$1,url){
return (function (){
cljs.core.reset_BANG_(cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_endpoint_STAR_.cljs$core$IFn$_invoke$arity$1(shared),url);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,cljs.core.cst$kw$ui_SLASH_target_DASH_url),url);

localStorage.setItem("oge-pub-last-url",url);

return (com.wsscode.oge.pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1(reconciler) : com.wsscode.oge.pub.main.debounced_update_index.call(null,reconciler));
});})(map__42601,map__42601__$1,state,ref,reconciler,shared,map__42602,map__42602__$1,url))
], null);
}));
if(typeof com.wsscode.oge.pub.main.OgeMain !== 'undefined'){
} else {
/**
 * @constructor
 */
com.wsscode.oge.pub.main.OgeMain = (function com$wsscode$oge$pub$main$OgeMain(){
var this__20292__auto__ = this;
React.Component.apply(this__20292__auto__,arguments);

if(!((this__20292__auto__.initLocalState == null))){
this__20292__auto__.state = this__20292__auto__.initLocalState();
} else {
this__20292__auto__.state = {};
}

return this__20292__auto__;
});

com.wsscode.oge.pub.main.OgeMain.prototype = goog.object.clone(React.Component.prototype);
}

var x42608_42628 = com.wsscode.oge.pub.main.OgeMain.prototype;
x42608_42628.componentWillUpdate = ((function (x42608_42628){
return (function (next_props__20043__auto__,next_state__20044__auto__){
var this__20042__auto__ = this;
if(((!((this__20042__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__20042__auto__.om$next$Ident$)))?true:false):false)){
var ident__20046__auto___42629 = om.next.ident(this__20042__auto__,om.next.props(this__20042__auto__));
var next_ident__20047__auto___42630 = om.next.ident(this__20042__auto__,om.next._next_props(next_props__20043__auto__,this__20042__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__20046__auto___42629,next_ident__20047__auto___42630)){
var idxr__20048__auto___42631 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__20042__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__20048__auto___42631 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__20048__auto___42631),((function (idxr__20048__auto___42631,ident__20046__auto___42629,next_ident__20047__auto___42630,this__20042__auto__,x42608_42628){
return (function (indexes__20049__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__20049__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__20046__auto___42629], null),cljs.core.disj,this__20042__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__20047__auto___42630], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20042__auto__);
});})(idxr__20048__auto___42631,ident__20046__auto___42629,next_ident__20047__auto___42630,this__20042__auto__,x42608_42628))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__20042__auto__);

return om.next.merge_pending_state_BANG_(this__20042__auto__);
});})(x42608_42628))
;

x42608_42628.shouldComponentUpdate = ((function (x42608_42628){
return (function (next_props__20043__auto__,next_state__20044__auto__){
var this__20042__auto__ = this;
var next_children__20045__auto__ = next_props__20043__auto__.children;
var next_props__20043__auto____$1 = goog.object.get(next_props__20043__auto__,"omcljs$value");
var next_props__20043__auto____$2 = (function (){var G__42610 = next_props__20043__auto____$1;
if((next_props__20043__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__42610);
} else {
return G__42610;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__20042__auto__),next_props__20043__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__20042__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42615 = this__20042__auto__.state;
var G__42616 = "omcljs$state";
return goog.object.get(G__42615,G__42616);
})(),goog.object.get(next_state__20044__auto__,"omcljs$state"));
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__20042__auto__.props.children,next_children__20045__auto__);
}
}
});})(x42608_42628))
;

x42608_42628.componentWillUnmount = ((function (x42608_42628){
return (function (){
var this__20042__auto__ = this;
var r__20053__auto__ = om.next.get_reconciler(this__20042__auto__);
var cfg__20054__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__20053__auto__);
var st__20055__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__20054__auto__);
var indexer__20052__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__20054__auto__);
if(cljs.core.truth_((function (){var and__10400__auto__ = !((st__20055__auto__ == null));
if(and__10400__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__20055__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__20042__auto__], null));
} else {
return and__10400__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__20055__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__20042__auto__], 0));
} else {
}

if((indexer__20052__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__20052__auto__,this__20042__auto__);
}
});})(x42608_42628))
;

x42608_42628.componentDidUpdate = ((function (x42608_42628){
return (function (prev_props__20050__auto__,prev_state__20051__auto__){
var this__20042__auto__ = this;
return om.next.clear_prev_props_BANG_(this__20042__auto__);
});})(x42608_42628))
;

x42608_42628.isMounted = ((function (x42608_42628){
return (function (){
var this__20042__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__20042__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x42608_42628))
;

x42608_42628.componentWillMount = ((function (x42608_42628){
return (function (){
var this__20042__auto__ = this;
var indexer__20052__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__20042__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__20052__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__20052__auto__,this__20042__auto__);
}
});})(x42608_42628))
;

x42608_42628.render = ((function (x42608_42628){
return (function (){
var this__20041__auto__ = this;
var this$ = this__20041__auto__;
var _STAR_reconciler_STAR_42617 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42618 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_42619 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_42620 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_42621 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__20041__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__20041__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__20041__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__20041__auto__);

om.next._STAR_parent_STAR_ = this__20041__auto__;

try{var map__42622 = om.next.props(this$);
var map__42622__$1 = ((((!((map__42622 == null)))?((((map__42622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42622):map__42622);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42622__$1,cljs.core.cst$kw$ui_SLASH_editor);
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42622__$1,cljs.core.cst$kw$ui_SLASH_target_DASH_url);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.pub.main.OgeMain);
var fs = cljs.core.cst$kw$ui_SLASH_fetch_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes.cljs$core$IFn$_invoke$arity$1(editor));
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(css)}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__42624 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,target_url,cljs.core.cst$kw$className,cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$placeholder,"https://your-endpoint.here.com",cljs.core.cst$kw$onChange,((function (map__42622,map__42622__$1,editor,target_url,css,fs,_STAR_reconciler_STAR_42617,_STAR_depth_STAR_42618,_STAR_shared_STAR_42619,_STAR_instrument_STAR_42620,_STAR_parent_STAR_42621,this$,this__20041__auto__,x42608_42628){
return (function (p1__42605_SHARP_){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$com$wsscode$oge$pub$main_SLASH_update_DASH_endpoint),(function (){var x__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_url),(function (){var x__11366__auto__ = p1__42605_SHARP_.target.value;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())))], null));
});})(map__42622,map__42622__$1,editor,target_url,css,fs,_STAR_reconciler_STAR_42617,_STAR_depth_STAR_42618,_STAR_shared_STAR_42619,_STAR_instrument_STAR_42620,_STAR_parent_STAR_42621,this$,this__20041__auto__,x42608_42628))
,cljs.core.cst$kw$com$wsscode$oge$ui$common_SLASH_classes,(cljs.core.truth_(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes.cljs$core$IFn$_invoke$arity$1(editor)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success], null):(cljs.core.truth_(fulcro.client.data_fetch.failed_QMARK_(fs))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warning], null):null))], null);
return (com.wsscode.oge.ui.common.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.common.text_field.cljs$core$IFn$_invoke$arity$1(G__42624) : com.wsscode.oge.ui.common.text_field.call(null,G__42624));
})(),(function (){var G__42625 = om.next.computed(editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null));
return (com.wsscode.oge.core.oge.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.core.oge.cljs$core$IFn$_invoke$arity$1(G__42625) : com.wsscode.oge.core.oge.call(null,G__42625));
})()], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_42621;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_42620;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_42619;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_42618;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42617;
}});})(x42608_42628))
;


com.wsscode.oge.pub.main.OgeMain.prototype.constructor = com.wsscode.oge.pub.main.OgeMain;

com.wsscode.oge.pub.main.OgeMain.prototype.constructor.displayName = "com.wsscode.oge.pub.main/OgeMain";

com.wsscode.oge.pub.main.OgeMain.prototype.om$isComponent = true;

var x42626_42632 = com.wsscode.oge.pub.main.OgeMain;
/** @nocollapse */
x42626_42632.fulcro$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42626_42632.fulcro$client$core$InitialAppState$initial_state$arity$2 = ((function (x42626_42632){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.core.get_initial_state(com.wsscode.oge.core.Oge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$ui_SLASH_target_DASH_url,(function (){var or__10412__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return "";
}
})()], null);
});})(x42626_42632))
;

/** @nocollapse */
x42626_42632.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42626_42632.om$next$IQuery$query$arity$1 = ((function (x42626_42632){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,om.next.get_query(com.wsscode.oge.core.Oge)], null),cljs.core.cst$kw$ui_SLASH_target_DASH_url], null);
});})(x42626_42632))
;

/** @nocollapse */
x42626_42632.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42626_42632.om$next$Ident$ident$arity$2 = ((function (x42626_42632){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_DASH_app,"main"], null);
});})(x42626_42632))
;

/** @nocollapse */
x42626_42632.fulcro_css$css$Global$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42626_42632.fulcro_css$css$Global$global_rules$arity$1 = ((function (x42626_42632){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$overflow,"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flex,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"1"], null)], null)], null);
});})(x42626_42632))
;

/** @nocollapse */
x42626_42632.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42626_42632.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42626_42632){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null)], null);
});})(x42626_42632))
;

/** @nocollapse */
x42626_42632.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42626_42632){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.core.Oge], null);
});})(x42626_42632))
;


var x42627_42633 = com.wsscode.oge.pub.main.OgeMain.prototype;

x42627_42633.fulcro$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x42627_42633.fulcro$client$core$InitialAppState$initial_state$arity$2 = ((function (x42627_42633){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.core.get_initial_state(com.wsscode.oge.core.Oge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$ui_SLASH_target_DASH_url,(function (){var or__10412__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return "";
}
})()], null);
});})(x42627_42633))
;


x42627_42633.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x42627_42633.om$next$IQuery$query$arity$1 = ((function (x42627_42633){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,om.next.get_query(com.wsscode.oge.core.Oge)], null),cljs.core.cst$kw$ui_SLASH_target_DASH_url], null);
});})(x42627_42633))
;


x42627_42633.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x42627_42633.om$next$Ident$ident$arity$2 = ((function (x42627_42633){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_DASH_app,"main"], null);
});})(x42627_42633))
;


x42627_42633.fulcro_css$css$Global$ = cljs.core.PROTOCOL_SENTINEL;


x42627_42633.fulcro_css$css$Global$global_rules$arity$1 = ((function (x42627_42633){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$overflow,"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flex,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"1"], null)], null)], null);
});})(x42627_42633))
;


x42627_42633.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x42627_42633.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42627_42633){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null)], null);
});})(x42627_42633))
;


x42627_42633.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42627_42633){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.core.Oge], null);
});})(x42627_42633))
;


com.wsscode.oge.pub.main.OgeMain.cljs$lang$type = true;

com.wsscode.oge.pub.main.OgeMain.cljs$lang$ctorStr = "com.wsscode.oge.pub.main/OgeMain";

com.wsscode.oge.pub.main.OgeMain.cljs$lang$ctorPrWriter = (function (this__20295__auto__,writer__20296__auto__,opt__20297__auto__){
return cljs.core._write(writer__20296__auto__,"com.wsscode.oge.pub.main/OgeMain");
});
com.wsscode.oge.pub.main.oge_main = om.next.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain);
if(typeof com.wsscode.oge.pub.main.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
com.wsscode.oge.pub.main.Root = (function com$wsscode$oge$pub$main$Root(){
var this__20292__auto__ = this;
React.Component.apply(this__20292__auto__,arguments);

if(!((this__20292__auto__.initLocalState == null))){
this__20292__auto__.state = this__20292__auto__.initLocalState();
} else {
this__20292__auto__.state = {};
}

return this__20292__auto__;
});

com.wsscode.oge.pub.main.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x42636_42654 = com.wsscode.oge.pub.main.Root.prototype;
x42636_42654.componentWillUpdate = ((function (x42636_42654){
return (function (next_props__20043__auto__,next_state__20044__auto__){
var this__20042__auto__ = this;
if(((!((this__20042__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__20042__auto__.om$next$Ident$)))?true:false):false)){
var ident__20046__auto___42655 = om.next.ident(this__20042__auto__,om.next.props(this__20042__auto__));
var next_ident__20047__auto___42656 = om.next.ident(this__20042__auto__,om.next._next_props(next_props__20043__auto__,this__20042__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__20046__auto___42655,next_ident__20047__auto___42656)){
var idxr__20048__auto___42657 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__20042__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__20048__auto___42657 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__20048__auto___42657),((function (idxr__20048__auto___42657,ident__20046__auto___42655,next_ident__20047__auto___42656,this__20042__auto__,x42636_42654){
return (function (indexes__20049__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__20049__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__20046__auto___42655], null),cljs.core.disj,this__20042__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__20047__auto___42656], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20042__auto__);
});})(idxr__20048__auto___42657,ident__20046__auto___42655,next_ident__20047__auto___42656,this__20042__auto__,x42636_42654))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__20042__auto__);

return om.next.merge_pending_state_BANG_(this__20042__auto__);
});})(x42636_42654))
;

x42636_42654.shouldComponentUpdate = ((function (x42636_42654){
return (function (next_props__20043__auto__,next_state__20044__auto__){
var this__20042__auto__ = this;
var next_children__20045__auto__ = next_props__20043__auto__.children;
var next_props__20043__auto____$1 = goog.object.get(next_props__20043__auto__,"omcljs$value");
var next_props__20043__auto____$2 = (function (){var G__42638 = next_props__20043__auto____$1;
if((next_props__20043__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__42638);
} else {
return G__42638;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__20042__auto__),next_props__20043__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__20042__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42643 = this__20042__auto__.state;
var G__42644 = "omcljs$state";
return goog.object.get(G__42643,G__42644);
})(),goog.object.get(next_state__20044__auto__,"omcljs$state"));
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__20042__auto__.props.children,next_children__20045__auto__);
}
}
});})(x42636_42654))
;

x42636_42654.componentWillUnmount = ((function (x42636_42654){
return (function (){
var this__20042__auto__ = this;
var r__20053__auto__ = om.next.get_reconciler(this__20042__auto__);
var cfg__20054__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__20053__auto__);
var st__20055__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__20054__auto__);
var indexer__20052__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__20054__auto__);
if(cljs.core.truth_((function (){var and__10400__auto__ = !((st__20055__auto__ == null));
if(and__10400__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__20055__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__20042__auto__], null));
} else {
return and__10400__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__20055__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__20042__auto__], 0));
} else {
}

if((indexer__20052__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__20052__auto__,this__20042__auto__);
}
});})(x42636_42654))
;

x42636_42654.componentDidUpdate = ((function (x42636_42654){
return (function (prev_props__20050__auto__,prev_state__20051__auto__){
var this__20042__auto__ = this;
return om.next.clear_prev_props_BANG_(this__20042__auto__);
});})(x42636_42654))
;

x42636_42654.isMounted = ((function (x42636_42654){
return (function (){
var this__20042__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__20042__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x42636_42654))
;

x42636_42654.componentWillMount = ((function (x42636_42654){
return (function (){
var this__20042__auto__ = this;
var indexer__20052__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__20042__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__20052__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__20052__auto__,this__20042__auto__);
}
});})(x42636_42654))
;

x42636_42654.render = ((function (x42636_42654){
return (function (){
var this__20041__auto__ = this;
var this$ = this__20041__auto__;
var _STAR_reconciler_STAR_42645 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42646 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_42647 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_42648 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_42649 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__20041__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__20041__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__20041__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__20041__auto__);

om.next._STAR_parent_STAR_ = this__20041__auto__;

try{var map__42650 = om.next.props(this$);
var map__42650__$1 = ((((!((map__42650 == null)))?((((map__42650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42650):map__42650);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42650__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42650__$1,cljs.core.cst$kw$ui_SLASH_root);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": react_key}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.oge.pub.main.oge_main.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.pub.main.oge_main.cljs$core$IFn$_invoke$arity$1(root) : com.wsscode.oge.pub.main.oge_main.call(null,root))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_42649;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_42648;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_42647;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_42646;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42645;
}});})(x42636_42654))
;


com.wsscode.oge.pub.main.Root.prototype.constructor = com.wsscode.oge.pub.main.Root;

com.wsscode.oge.pub.main.Root.prototype.constructor.displayName = "com.wsscode.oge.pub.main/Root";

com.wsscode.oge.pub.main.Root.prototype.om$isComponent = true;

var x42652_42658 = com.wsscode.oge.pub.main.Root;
/** @nocollapse */
x42652_42658.fulcro$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42652_42658.fulcro$client$core$InitialAppState$initial_state$arity$2 = ((function (x42652_42658){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.random_uuid(),cljs.core.cst$kw$ui_SLASH_root,fulcro.client.core.get_initial_state(com.wsscode.oge.pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x42652_42658))
;

/** @nocollapse */
x42652_42658.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42652_42658.om$next$IQuery$query$arity$1 = ((function (x42652_42658){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_root,om.next.get_query(com.wsscode.oge.pub.main.OgeMain)], null),cljs.core.cst$kw$ui_SLASH_react_DASH_key], null);
});})(x42652_42658))
;

/** @nocollapse */
x42652_42658.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x42652_42658.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42652_42658){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x42652_42658))
;

/** @nocollapse */
x42652_42658.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42652_42658){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.pub.main.OgeMain], null);
});})(x42652_42658))
;


var x42653_42659 = com.wsscode.oge.pub.main.Root.prototype;

x42653_42659.fulcro$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x42653_42659.fulcro$client$core$InitialAppState$initial_state$arity$2 = ((function (x42653_42659){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.random_uuid(),cljs.core.cst$kw$ui_SLASH_root,fulcro.client.core.get_initial_state(com.wsscode.oge.pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x42653_42659))
;


x42653_42659.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x42653_42659.om$next$IQuery$query$arity$1 = ((function (x42653_42659){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_root,om.next.get_query(com.wsscode.oge.pub.main.OgeMain)], null),cljs.core.cst$kw$ui_SLASH_react_DASH_key], null);
});})(x42653_42659))
;


x42653_42659.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x42653_42659.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x42653_42659){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x42653_42659))
;


x42653_42659.fulcro_css$css$CSS$include_children$arity$1 = ((function (x42653_42659){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.pub.main.OgeMain], null);
});})(x42653_42659))
;


com.wsscode.oge.pub.main.Root.cljs$lang$type = true;

com.wsscode.oge.pub.main.Root.cljs$lang$ctorStr = "com.wsscode.oge.pub.main/Root";

com.wsscode.oge.pub.main.Root.cljs$lang$ctorPrWriter = (function (this__20295__auto__,writer__20296__auto__,opt__20297__auto__){
return cljs.core._write(writer__20296__auto__,"com.wsscode.oge.pub.main/Root");
});
com.wsscode.oge.pub.main.endpoint = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__10412__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return "";
}
})());
if(typeof com.wsscode.oge.pub.main.app !== 'undefined'){
} else {
com.wsscode.oge.pub.main.app = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fulcro.client.core.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$networking,com.wsscode.oge.pub.network.make_network.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.endpoint),cljs.core.cst$kw$shared,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_endpoint_STAR_,com.wsscode.oge.pub.main.endpoint], null),cljs.core.cst$kw$started_DASH_callback,(function (app){
return com.wsscode.oge.pub.main.update_index(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app));
})], 0)));
}
com.wsscode.oge.pub.main.init = (function com$wsscode$oge$pub$main$init(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.wsscode.oge.pub.main.app,fulcro.client.core.mount,com.wsscode.oge.pub.main.Root,"oge-container");

return fulcro_css.css.upsert_css("oge",com.wsscode.oge.pub.main.Root);
});
com.wsscode.oge.pub.main.init();
com.wsscode.oge.pub.main.log_state = (function com$wsscode$oge$pub$main$log_state(){
return cljs.core.deref(om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.wsscode.oge.pub.main.app))));
});

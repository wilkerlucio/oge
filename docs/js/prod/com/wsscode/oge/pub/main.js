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
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$com$wsscode$oge$pub$main_SLASH_update_DASH_endpoint,(function (env40990,_,p__40991){
var map__40992 = p__40991;
var map__40992__$1 = ((((!((map__40992 == null)))?((((map__40992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40992):map__40992);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40992__$1,cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_url);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__40994 = env40990;
var map__40994__$1 = ((((!((map__40994 == null)))?((((map__40994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40994):map__40994);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994__$1,cljs.core.cst$kw$ref);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994__$1,cljs.core.cst$kw$reconciler);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994__$1,cljs.core.cst$kw$shared);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__40994,map__40994__$1,state,ref,reconciler,shared,map__40992,map__40992__$1,url){
return (function (){
cljs.core.reset_BANG_(cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_endpoint_STAR_.cljs$core$IFn$_invoke$arity$1(shared),url);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,cljs.core.cst$kw$ui_SLASH_target_DASH_url),url);

localStorage.setItem("oge-pub-last-url",url);

return (com.wsscode.oge.pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1(reconciler) : com.wsscode.oge.pub.main.debounced_update_index.call(null,reconciler));
});})(map__40994,map__40994__$1,state,ref,reconciler,shared,map__40992,map__40992__$1,url))
], null);
})(),(function (){var env = env40990;
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
var this__35867__auto__ = this;
React.Component.apply(this__35867__auto__,arguments);

if(!((this__35867__auto__.initLocalState == null))){
this__35867__auto__.state = this__35867__auto__.initLocalState();
} else {
this__35867__auto__.state = {};
}

return this__35867__auto__;
});

com.wsscode.oge.pub.main.OgeMain.prototype = goog.object.clone(React.Component.prototype);
}

var x40999_41021 = com.wsscode.oge.pub.main.OgeMain.prototype;
x40999_41021.componentDidMount = ((function (x40999_41021){
return (function (){
var this__35722__auto__ = this;
return goog.object.set(this__35722__auto__,"fulcro$mounted",true);
});})(x40999_41021))
;

x40999_41021.componentWillUpdate = ((function (x40999_41021){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(((!((this__35722__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35722__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35731__auto___41022 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives.props(this__35722__auto__));
var next_ident__35732__auto___41023 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives._next_props(next_props__35723__auto__,this__35722__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35731__auto___41022,next_ident__35732__auto___41023)){
var idxr__35733__auto___41024 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35733__auto___41024 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35733__auto___41024),((function (idxr__35733__auto___41024,ident__35731__auto___41022,next_ident__35732__auto___41023,this__35722__auto__,x40999_41021){
return (function (indexes__35734__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35734__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35731__auto___41022], null),cljs.core.disj,this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35732__auto___41023], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35722__auto__);
});})(idxr__35733__auto___41024,ident__35731__auto___41022,next_ident__35732__auto___41023,this__35722__auto__,x40999_41021))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35722__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35722__auto__);
});})(x40999_41021))
;

x40999_41021.shouldComponentUpdate = ((function (x40999_41021){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35725__auto__ = next_props__35723__auto__.children;
var next_props__35723__auto____$1 = goog.object.get(next_props__35723__auto__,"fulcro$value");
var next_props__35723__auto____$2 = (function (){var G__41001 = next_props__35723__auto____$1;
if((next_props__35723__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__41001);
} else {
return G__41001;
}
})();
var current_props__35726__auto__ = fulcro.client.primitives.props(this__35722__auto__);
var next_props_stale_QMARK___35727__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35726__auto__) > fulcro.client.primitives.get_basis_time(next_props__35723__auto____$2));
var props_changed_QMARK___35728__auto__ = (!(next_props_stale_QMARK___35727__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35726__auto__,next_props__35723__auto____$2));
var state_changed_QMARK___35729__auto__ = (function (){var and__10793__auto__ = this__35722__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__41002 = this__35722__auto__.state;
var G__41003 = "fulcro$state";
return goog.object.get(G__41002,G__41003);
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
});})(x40999_41021))
;

x40999_41021.componentWillUnmount = ((function (x40999_41021){
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
});})(x40999_41021))
;

x40999_41021.componentDidUpdate = ((function (x40999_41021){
return (function (prev_props__35735__auto__,prev_state__35736__auto__){
var this__35722__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35722__auto__);
});})(x40999_41021))
;

x40999_41021.componentWillMount = ((function (x40999_41021){
return (function (){
var this__35722__auto__ = this;
var indexer__35737__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x40999_41021))
;

x40999_41021.render = ((function (x40999_41021){
return (function (){
var this__35721__auto__ = this;
var this$ = this__35721__auto__;
var _STAR_reconciler_STAR_41004 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41005 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_41006 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_41007 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_41008 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35721__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35721__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35721__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35721__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35721__auto__;

try{var map__41009 = fulcro.client.primitives.props(this$);
var map__41009__$1 = ((((!((map__41009 == null)))?((((map__41009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41009):map__41009);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41009__$1,cljs.core.cst$kw$ui_SLASH_editor);
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41009__$1,cljs.core.cst$kw$ui_SLASH_target_DASH_url);
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.pub.main.OgeMain);
var fs = cljs.core.cst$kw$ui_SLASH_fetch_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes.cljs$core$IFn$_invoke$arity$1(editor));
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__41011 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,target_url,cljs.core.cst$kw$className,cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$placeholder,"https://your-endpoint.here.com",cljs.core.cst$kw$onChange,((function (fs,map__41009,map__41009__$1,editor,target_url,_,css,_STAR_reconciler_STAR_41004,_STAR_depth_STAR_41005,_STAR_shared_STAR_41006,_STAR_instrument_STAR_41007,_STAR_parent_STAR_41008,this$,this__35721__auto__,x40999_41021){
return (function (p1__40996_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$com$wsscode$oge$pub$main_SLASH_update_DASH_endpoint),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$com$wsscode$oge$pub$main_SLASH_url),(function (){var x__11759__auto__ = p1__40996_SHARP_.target.value;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())))], null));
});})(fs,map__41009,map__41009__$1,editor,target_url,_,css,_STAR_reconciler_STAR_41004,_STAR_depth_STAR_41005,_STAR_shared_STAR_41006,_STAR_instrument_STAR_41007,_STAR_parent_STAR_41008,this$,this__35721__auto__,x40999_41021))
,cljs.core.cst$kw$com$wsscode$oge$ui$common_SLASH_classes,(cljs.core.truth_(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes.cljs$core$IFn$_invoke$arity$1(editor)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success], null):(cljs.core.truth_(fulcro.client.data_fetch.failed_QMARK_(fs))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warning], null):null))], null);
return (com.wsscode.oge.ui.common.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.common.text_field.cljs$core$IFn$_invoke$arity$1(G__41011) : com.wsscode.oge.ui.common.text_field.call(null,G__41011));
})()),fulcro.util.force_children((function (){var G__41012 = fulcro.client.primitives.computed(editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null));
return (com.wsscode.oge.core.oge.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.core.oge.cljs$core$IFn$_invoke$arity$1(G__41012) : com.wsscode.oge.core.oge.call(null,G__41012));
})())]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_41008;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_41007;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_41006;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_41005;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41004;
}});})(x40999_41021))
;


com.wsscode.oge.pub.main.OgeMain.prototype.constructor = com.wsscode.oge.pub.main.OgeMain;

com.wsscode.oge.pub.main.OgeMain.prototype.constructor.displayName = "com.wsscode.oge.pub.main/OgeMain";

com.wsscode.oge.pub.main.OgeMain.prototype.fulcro$isComponent = true;

var x41013_41025 = com.wsscode.oge.pub.main.OgeMain;
x41013_41025.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x41013_41025.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x41013_41025){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$overflow,"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flex,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null)], null);
});})(x41013_41025))
;

x41013_41025.fulcro_css$css$CSS$include_children$arity$1 = ((function (x41013_41025){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.core.Oge], null);
});})(x41013_41025))
;

x41013_41025.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x41013_41025.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x41013_41025){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.primitives.get_initial_state(com.wsscode.oge.core.Oge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$ui_SLASH_target_DASH_url,(function (){var or__10805__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "";
}
})()], null);
});})(x41013_41025))
;

x41013_41025.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x41013_41025.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x41013_41025){
return (function (this$,p__41014){
var map__41015 = p__41014;
var map__41015__$1 = ((((!((map__41015 == null)))?((((map__41015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41015):map__41015);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41015__$1,cljs.core.cst$kw$ui_SLASH_editor);
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41015__$1,cljs.core.cst$kw$ui_SLASH_target_DASH_url);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_DASH_app,"main"], null);
});})(x41013_41025))
;

x41013_41025.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x41013_41025.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x41013_41025){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge)], null),cljs.core.cst$kw$ui_SLASH_target_DASH_url], null);
});})(x41013_41025))
;


var x41017_41026 = com.wsscode.oge.pub.main.OgeMain.prototype;
x41017_41026.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x41017_41026.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x41017_41026){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$overflow,"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flex,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null)], null);
});})(x41017_41026))
;

x41017_41026.fulcro_css$css$CSS$include_children$arity$1 = ((function (x41017_41026){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.core.Oge], null);
});})(x41017_41026))
;

x41017_41026.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x41017_41026.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x41017_41026){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.primitives.get_initial_state(com.wsscode.oge.core.Oge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$ui_SLASH_target_DASH_url,(function (){var or__10805__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "";
}
})()], null);
});})(x41017_41026))
;

x41017_41026.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x41017_41026.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x41017_41026){
return (function (this$,p__41018){
var map__41019 = p__41018;
var map__41019__$1 = ((((!((map__41019 == null)))?((((map__41019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41019):map__41019);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41019__$1,cljs.core.cst$kw$ui_SLASH_editor);
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41019__$1,cljs.core.cst$kw$ui_SLASH_target_DASH_url);
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_DASH_app,"main"], null);
});})(x41017_41026))
;

x41017_41026.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x41017_41026.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x41017_41026){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge)], null),cljs.core.cst$kw$ui_SLASH_target_DASH_url], null);
});})(x41017_41026))
;


com.wsscode.oge.pub.main.OgeMain.cljs$lang$type = true;

com.wsscode.oge.pub.main.OgeMain.cljs$lang$ctorStr = "com.wsscode.oge.pub.main/OgeMain";

com.wsscode.oge.pub.main.OgeMain.cljs$lang$ctorPrWriter = (function (this__35870__auto__,writer__35871__auto__,opt__35872__auto__){
return cljs.core._write(writer__35871__auto__,"com.wsscode.oge.pub.main/OgeMain");
});
com.wsscode.oge.pub.main.oge_main = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain);
if(typeof com.wsscode.oge.pub.main.Root !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.pub.main.Root = (function com$wsscode$oge$pub$main$Root(){
var this__35867__auto__ = this;
React.Component.apply(this__35867__auto__,arguments);

if(!((this__35867__auto__.initLocalState == null))){
this__35867__auto__.state = this__35867__auto__.initLocalState();
} else {
this__35867__auto__.state = {};
}

return this__35867__auto__;
});

com.wsscode.oge.pub.main.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x41029_41043 = com.wsscode.oge.pub.main.Root.prototype;
x41029_41043.componentDidMount = ((function (x41029_41043){
return (function (){
var this__35722__auto__ = this;
return goog.object.set(this__35722__auto__,"fulcro$mounted",true);
});})(x41029_41043))
;

x41029_41043.componentWillUpdate = ((function (x41029_41043){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(((!((this__35722__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35722__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35731__auto___41044 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives.props(this__35722__auto__));
var next_ident__35732__auto___41045 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives._next_props(next_props__35723__auto__,this__35722__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35731__auto___41044,next_ident__35732__auto___41045)){
var idxr__35733__auto___41046 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35733__auto___41046 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35733__auto___41046),((function (idxr__35733__auto___41046,ident__35731__auto___41044,next_ident__35732__auto___41045,this__35722__auto__,x41029_41043){
return (function (indexes__35734__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35734__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35731__auto___41044], null),cljs.core.disj,this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35732__auto___41045], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35722__auto__);
});})(idxr__35733__auto___41046,ident__35731__auto___41044,next_ident__35732__auto___41045,this__35722__auto__,x41029_41043))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35722__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35722__auto__);
});})(x41029_41043))
;

x41029_41043.shouldComponentUpdate = ((function (x41029_41043){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35725__auto__ = next_props__35723__auto__.children;
var next_props__35723__auto____$1 = goog.object.get(next_props__35723__auto__,"fulcro$value");
var next_props__35723__auto____$2 = (function (){var G__41031 = next_props__35723__auto____$1;
if((next_props__35723__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__41031);
} else {
return G__41031;
}
})();
var current_props__35726__auto__ = fulcro.client.primitives.props(this__35722__auto__);
var next_props_stale_QMARK___35727__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35726__auto__) > fulcro.client.primitives.get_basis_time(next_props__35723__auto____$2));
var props_changed_QMARK___35728__auto__ = (!(next_props_stale_QMARK___35727__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35726__auto__,next_props__35723__auto____$2));
var state_changed_QMARK___35729__auto__ = (function (){var and__10793__auto__ = this__35722__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__41032 = this__35722__auto__.state;
var G__41033 = "fulcro$state";
return goog.object.get(G__41032,G__41033);
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
});})(x41029_41043))
;

x41029_41043.componentWillUnmount = ((function (x41029_41043){
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
});})(x41029_41043))
;

x41029_41043.componentDidUpdate = ((function (x41029_41043){
return (function (prev_props__35735__auto__,prev_state__35736__auto__){
var this__35722__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35722__auto__);
});})(x41029_41043))
;

x41029_41043.componentWillMount = ((function (x41029_41043){
return (function (){
var this__35722__auto__ = this;
var indexer__35737__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x41029_41043))
;

x41029_41043.render = ((function (x41029_41043){
return (function (){
var this__35721__auto__ = this;
var this$ = this__35721__auto__;
var _STAR_reconciler_STAR_41034 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41035 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_41036 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_41037 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_41038 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35721__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35721__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35721__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35721__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35721__auto__;

try{var map__41039 = fulcro.client.primitives.props(this$);
var map__41039__$1 = ((((!((map__41039 == null)))?((((map__41039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41039):map__41039);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039__$1,cljs.core.cst$kw$ui_SLASH_root);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"key": react_key}),fulcro.util.force_children((com.wsscode.oge.pub.main.oge_main.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.pub.main.oge_main.cljs$core$IFn$_invoke$arity$1(root) : com.wsscode.oge.pub.main.oge_main.call(null,root)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_41038;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_41037;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_41036;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_41035;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41034;
}});})(x41029_41043))
;


com.wsscode.oge.pub.main.Root.prototype.constructor = com.wsscode.oge.pub.main.Root;

com.wsscode.oge.pub.main.Root.prototype.constructor.displayName = "com.wsscode.oge.pub.main/Root";

com.wsscode.oge.pub.main.Root.prototype.fulcro$isComponent = true;

var x41041_41047 = com.wsscode.oge.pub.main.Root;
x41041_41047.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x41041_41047.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x41041_41047){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.random_uuid(),cljs.core.cst$kw$ui_SLASH_root,fulcro.client.primitives.get_initial_state(com.wsscode.oge.pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x41041_41047))
;

x41041_41047.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x41041_41047.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x41041_41047){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_root,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain)], null),cljs.core.cst$kw$ui_SLASH_react_DASH_key], null);
});})(x41041_41047))
;

x41041_41047.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x41041_41047.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x41041_41047){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x41041_41047))
;

x41041_41047.fulcro_css$css$CSS$include_children$arity$1 = ((function (x41041_41047){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.pub.main.OgeMain], null);
});})(x41041_41047))
;


var x41042_41048 = com.wsscode.oge.pub.main.Root.prototype;
x41042_41048.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x41042_41048.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x41042_41048){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.random_uuid(),cljs.core.cst$kw$ui_SLASH_root,fulcro.client.primitives.get_initial_state(com.wsscode.oge.pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x41042_41048))
;

x41042_41048.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x41042_41048.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x41042_41048){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_root,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.pub.main.OgeMain)], null),cljs.core.cst$kw$ui_SLASH_react_DASH_key], null);
});})(x41042_41048))
;

x41042_41048.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x41042_41048.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x41042_41048){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x41042_41048))
;

x41042_41048.fulcro_css$css$CSS$include_children$arity$1 = ((function (x41042_41048){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.pub.main.OgeMain], null);
});})(x41042_41048))
;


com.wsscode.oge.pub.main.Root.cljs$lang$type = true;

com.wsscode.oge.pub.main.Root.cljs$lang$ctorStr = "com.wsscode.oge.pub.main/Root";

com.wsscode.oge.pub.main.Root.cljs$lang$ctorPrWriter = (function (this__35870__auto__,writer__35871__auto__,opt__35872__auto__){
return cljs.core._write(writer__35871__auto__,"com.wsscode.oge.pub.main/Root");
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

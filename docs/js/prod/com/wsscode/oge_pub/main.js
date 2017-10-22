// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge_pub.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.core');
goog.require('fulcro.client.mutations');
goog.require('fulcro_css.css');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.oge.main');
goog.require('com.wsscode.oge_pub.network');
goog.require('goog.functions');
goog.require('om.next');
goog.require('om.dom');
com.wsscode.oge_pub.main.update_index = (function com$wsscode$oge_pub$main$update_index(reconciler){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__11366__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,"editor",cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null),cljs.core.cst$kw$query,om.next.focus_query(om.next.get_query(com.wsscode.oge.main.Oge),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes], null))], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.cst$sym$fulcro_SLASH_load)], null));
});
com.wsscode.oge_pub.main.debounced_update_index = goog.functions.debounce(com.wsscode.oge_pub.main.update_index,(600));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$com$wsscode$oge_DASH_pub$main_SLASH_update_DASH_endpoint,(function (p__48913,_,p__48914){
var map__48915 = p__48913;
var map__48915__$1 = ((((!((map__48915 == null)))?((((map__48915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48915):map__48915);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48915__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48915__$1,cljs.core.cst$kw$ref);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48915__$1,cljs.core.cst$kw$reconciler);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48915__$1,cljs.core.cst$kw$shared);
var map__48916 = p__48914;
var map__48916__$1 = ((((!((map__48916 == null)))?((((map__48916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48916):map__48916);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,cljs.core.cst$kw$com$wsscode$oge_DASH_pub$main_SLASH_url);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__48915,map__48915__$1,state,ref,reconciler,shared,map__48916,map__48916__$1,url){
return (function (){
cljs.core.reset_BANG_(cljs.core.cst$kw$com$wsscode$oge_DASH_pub$main_SLASH_endpoint_STAR_.cljs$core$IFn$_invoke$arity$1(shared),url);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,cljs.core.cst$kw$ui_SLASH_target_DASH_url),url);

localStorage.setItem("oge-pub-last-url",url);

return (com.wsscode.oge_pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge_pub.main.debounced_update_index.cljs$core$IFn$_invoke$arity$1(reconciler) : com.wsscode.oge_pub.main.debounced_update_index.call(null,reconciler));
});})(map__48915,map__48915__$1,state,ref,reconciler,shared,map__48916,map__48916__$1,url))
], null);
}));
if(typeof com.wsscode.oge_pub.main.OgeMain !== 'undefined'){
} else {
/**
 * @constructor
 */
com.wsscode.oge_pub.main.OgeMain = (function com$wsscode$oge_pub$main$OgeMain(){
var this__27063__auto__ = this;
React.Component.apply(this__27063__auto__,arguments);

if(!((this__27063__auto__.initLocalState == null))){
this__27063__auto__.state = this__27063__auto__.initLocalState();
} else {
this__27063__auto__.state = {};
}

return this__27063__auto__;
});

com.wsscode.oge_pub.main.OgeMain.prototype = goog.object.clone(React.Component.prototype);
}

var x48922_48942 = com.wsscode.oge_pub.main.OgeMain.prototype;
x48922_48942.componentWillUpdate = ((function (x48922_48942){
return (function (next_props__26662__auto__,next_state__26663__auto__){
var this__26661__auto__ = this;
if(((!((this__26661__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__26661__auto__.om$next$Ident$)))?true:false):false)){
var ident__26665__auto___48943 = om.next.ident(this__26661__auto__,om.next.props(this__26661__auto__));
var next_ident__26666__auto___48944 = om.next.ident(this__26661__auto__,om.next._next_props(next_props__26662__auto__,this__26661__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__26665__auto___48943,next_ident__26666__auto___48944)){
var idxr__26667__auto___48945 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__26661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__26667__auto___48945 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__26667__auto___48945),((function (idxr__26667__auto___48945,ident__26665__auto___48943,next_ident__26666__auto___48944,this__26661__auto__,x48922_48942){
return (function (indexes__26668__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__26668__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__26665__auto___48943], null),cljs.core.disj,this__26661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__26666__auto___48944], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26661__auto__);
});})(idxr__26667__auto___48945,ident__26665__auto___48943,next_ident__26666__auto___48944,this__26661__auto__,x48922_48942))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__26661__auto__);

return om.next.merge_pending_state_BANG_(this__26661__auto__);
});})(x48922_48942))
;

x48922_48942.shouldComponentUpdate = ((function (x48922_48942){
return (function (next_props__26662__auto__,next_state__26663__auto__){
var this__26661__auto__ = this;
var next_children__26664__auto__ = next_props__26662__auto__.children;
var next_props__26662__auto____$1 = goog.object.get(next_props__26662__auto__,"omcljs$value");
var next_props__26662__auto____$2 = (function (){var G__48924 = next_props__26662__auto____$1;
if((next_props__26662__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__48924);
} else {
return G__48924;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__26661__auto__),next_props__26662__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__26661__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__48929 = this__26661__auto__.state;
var G__48930 = "omcljs$state";
return goog.object.get(G__48929,G__48930);
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
});})(x48922_48942))
;

x48922_48942.componentWillUnmount = ((function (x48922_48942){
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
});})(x48922_48942))
;

x48922_48942.componentDidUpdate = ((function (x48922_48942){
return (function (prev_props__26669__auto__,prev_state__26670__auto__){
var this__26661__auto__ = this;
return om.next.clear_prev_props_BANG_(this__26661__auto__);
});})(x48922_48942))
;

x48922_48942.isMounted = ((function (x48922_48942){
return (function (){
var this__26661__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__26661__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x48922_48942))
;

x48922_48942.componentWillMount = ((function (x48922_48942){
return (function (){
var this__26661__auto__ = this;
var indexer__26671__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__26661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__26671__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__26671__auto__,this__26661__auto__);
}
});})(x48922_48942))
;

x48922_48942.render = ((function (x48922_48942){
return (function (){
var this__26660__auto__ = this;
var this$ = this__26660__auto__;
var _STAR_reconciler_STAR_48931 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_48932 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_48933 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_48934 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_48935 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__26660__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__26660__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__26660__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__26660__auto__);

om.next._STAR_parent_STAR_ = this__26660__auto__;

try{var map__48936 = om.next.props(this$);
var map__48936__$1 = ((((!((map__48936 == null)))?((((map__48936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48936):map__48936);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48936__$1,cljs.core.cst$kw$ui_SLASH_editor);
var target_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48936__$1,cljs.core.cst$kw$ui_SLASH_target_DASH_url);
var css = fulcro_css.css.get_classnames(com.wsscode.oge_pub.main.OgeMain);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(css)}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__48938 = ({"type": "text", "value": target_url, "className": ["form-control ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(css))].join(''), "placeholder": "https://your-endpoint.here.com", "onChange": ((function (map__48936,map__48936__$1,editor,target_url,css,_STAR_reconciler_STAR_48931,_STAR_depth_STAR_48932,_STAR_shared_STAR_48933,_STAR_instrument_STAR_48934,_STAR_parent_STAR_48935,this$,this__26660__auto__,x48922_48942){
return (function (p1__48919_SHARP_){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$com$wsscode$oge_DASH_pub$main_SLASH_update_DASH_endpoint),(function (){var x__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$com$wsscode$oge_DASH_pub$main_SLASH_url),(function (){var x__11366__auto__ = p1__48919_SHARP_.target.value;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())))], null));
});})(map__48936,map__48936__$1,editor,target_url,css,_STAR_reconciler_STAR_48931,_STAR_depth_STAR_48932,_STAR_shared_STAR_48933,_STAR_instrument_STAR_48934,_STAR_parent_STAR_48935,this$,this__26660__auto__,x48922_48942))
});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__48938) : om.dom.input.call(null,G__48938));
})(),(function (){var G__48939 = om.next.computed(editor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null));
return (com.wsscode.oge.main.oge.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.main.oge.cljs$core$IFn$_invoke$arity$1(G__48939) : com.wsscode.oge.main.oge.call(null,G__48939));
})()], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_48935;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_48934;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_48933;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_48932;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_48931;
}});})(x48922_48942))
;


com.wsscode.oge_pub.main.OgeMain.prototype.constructor = com.wsscode.oge_pub.main.OgeMain;

com.wsscode.oge_pub.main.OgeMain.prototype.constructor.displayName = "com.wsscode.oge-pub.main/OgeMain";

com.wsscode.oge_pub.main.OgeMain.prototype.om$isComponent = true;

var x48940_48946 = com.wsscode.oge_pub.main.OgeMain;
/** @nocollapse */
x48940_48946.fulcro$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48940_48946.fulcro$client$core$InitialAppState$initial_state$arity$2 = ((function (x48940_48946){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.core.get_initial_state(com.wsscode.oge.main.Oge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$ui_SLASH_target_DASH_url,(function (){var or__10412__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return "";
}
})()], null);
});})(x48940_48946))
;

/** @nocollapse */
x48940_48946.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48940_48946.om$next$IQuery$query$arity$1 = ((function (x48940_48946){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,om.next.get_query(com.wsscode.oge.main.Oge)], null),cljs.core.cst$kw$ui_SLASH_target_DASH_url], null);
});})(x48940_48946))
;

/** @nocollapse */
x48940_48946.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48940_48946.om$next$Ident$ident$arity$2 = ((function (x48940_48946){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_DASH_app,"main"], null);
});})(x48940_48946))
;

/** @nocollapse */
x48940_48946.fulcro_css$css$Global$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48940_48946.fulcro_css$css$Global$global_rules$arity$1 = ((function (x48940_48946){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$overflow,"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flex,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"1"], null)], null)], null);
});})(x48940_48946))
;

/** @nocollapse */
x48940_48946.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48940_48946.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48940_48946){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null)], null);
});})(x48940_48946))
;

/** @nocollapse */
x48940_48946.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48940_48946){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.main.Oge], null);
});})(x48940_48946))
;


var x48941_48947 = com.wsscode.oge_pub.main.OgeMain.prototype;

x48941_48947.fulcro$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x48941_48947.fulcro$client$core$InitialAppState$initial_state$arity$2 = ((function (x48941_48947){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_editor,fulcro.client.core.get_initial_state(com.wsscode.oge.main.Oge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$ui_SLASH_target_DASH_url,(function (){var or__10412__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return "";
}
})()], null);
});})(x48941_48947))
;


x48941_48947.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x48941_48947.om$next$IQuery$query$arity$1 = ((function (x48941_48947){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_editor,om.next.get_query(com.wsscode.oge.main.Oge)], null),cljs.core.cst$kw$ui_SLASH_target_DASH_url], null);
});})(x48941_48947))
;


x48941_48947.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x48941_48947.om$next$Ident$ident$arity$2 = ((function (x48941_48947){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_DASH_app,"main"], null);
});})(x48941_48947))
;


x48941_48947.fulcro_css$css$Global$ = cljs.core.PROTOCOL_SENTINEL;


x48941_48947.fulcro_css$css$Global$global_rules$arity$1 = ((function (x48941_48947){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$overflow,"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flex,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"1"], null)], null)], null);
});})(x48941_48947))
;


x48941_48947.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x48941_48947.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48941_48947){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null)], null);
});})(x48941_48947))
;


x48941_48947.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48941_48947){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.main.Oge], null);
});})(x48941_48947))
;


com.wsscode.oge_pub.main.OgeMain.cljs$lang$type = true;

com.wsscode.oge_pub.main.OgeMain.cljs$lang$ctorStr = "com.wsscode.oge-pub.main/OgeMain";

com.wsscode.oge_pub.main.OgeMain.cljs$lang$ctorPrWriter = (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write(writer__27067__auto__,"com.wsscode.oge-pub.main/OgeMain");
});
com.wsscode.oge_pub.main.oge_main = om.next.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge_pub.main.OgeMain);
if(typeof com.wsscode.oge_pub.main.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
com.wsscode.oge_pub.main.Root = (function com$wsscode$oge_pub$main$Root(){
var this__27063__auto__ = this;
React.Component.apply(this__27063__auto__,arguments);

if(!((this__27063__auto__.initLocalState == null))){
this__27063__auto__.state = this__27063__auto__.initLocalState();
} else {
this__27063__auto__.state = {};
}

return this__27063__auto__;
});

com.wsscode.oge_pub.main.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x48950_48968 = com.wsscode.oge_pub.main.Root.prototype;
x48950_48968.componentWillUpdate = ((function (x48950_48968){
return (function (next_props__26662__auto__,next_state__26663__auto__){
var this__26661__auto__ = this;
if(((!((this__26661__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__26661__auto__.om$next$Ident$)))?true:false):false)){
var ident__26665__auto___48969 = om.next.ident(this__26661__auto__,om.next.props(this__26661__auto__));
var next_ident__26666__auto___48970 = om.next.ident(this__26661__auto__,om.next._next_props(next_props__26662__auto__,this__26661__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__26665__auto___48969,next_ident__26666__auto___48970)){
var idxr__26667__auto___48971 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__26661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__26667__auto___48971 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__26667__auto___48971),((function (idxr__26667__auto___48971,ident__26665__auto___48969,next_ident__26666__auto___48970,this__26661__auto__,x48950_48968){
return (function (indexes__26668__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__26668__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__26665__auto___48969], null),cljs.core.disj,this__26661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__26666__auto___48970], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26661__auto__);
});})(idxr__26667__auto___48971,ident__26665__auto___48969,next_ident__26666__auto___48970,this__26661__auto__,x48950_48968))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__26661__auto__);

return om.next.merge_pending_state_BANG_(this__26661__auto__);
});})(x48950_48968))
;

x48950_48968.shouldComponentUpdate = ((function (x48950_48968){
return (function (next_props__26662__auto__,next_state__26663__auto__){
var this__26661__auto__ = this;
var next_children__26664__auto__ = next_props__26662__auto__.children;
var next_props__26662__auto____$1 = goog.object.get(next_props__26662__auto__,"omcljs$value");
var next_props__26662__auto____$2 = (function (){var G__48952 = next_props__26662__auto____$1;
if((next_props__26662__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__48952);
} else {
return G__48952;
}
})();
var or__10412__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__26661__auto__),next_props__26662__auto____$2);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var and__10400__auto__ = this__26661__auto__.state;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__48957 = this__26661__auto__.state;
var G__48958 = "omcljs$state";
return goog.object.get(G__48957,G__48958);
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
});})(x48950_48968))
;

x48950_48968.componentWillUnmount = ((function (x48950_48968){
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
});})(x48950_48968))
;

x48950_48968.componentDidUpdate = ((function (x48950_48968){
return (function (prev_props__26669__auto__,prev_state__26670__auto__){
var this__26661__auto__ = this;
return om.next.clear_prev_props_BANG_(this__26661__auto__);
});})(x48950_48968))
;

x48950_48968.isMounted = ((function (x48950_48968){
return (function (){
var this__26661__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__26661__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x48950_48968))
;

x48950_48968.componentWillMount = ((function (x48950_48968){
return (function (){
var this__26661__auto__ = this;
var indexer__26671__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__26661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__26671__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__26671__auto__,this__26661__auto__);
}
});})(x48950_48968))
;

x48950_48968.render = ((function (x48950_48968){
return (function (){
var this__26660__auto__ = this;
var this$ = this__26660__auto__;
var _STAR_reconciler_STAR_48959 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_48960 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_48961 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_48962 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_48963 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__26660__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__26660__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__26660__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__26660__auto__);

om.next._STAR_parent_STAR_ = this__26660__auto__;

try{var map__48964 = om.next.props(this$);
var map__48964__$1 = ((((!((map__48964 == null)))?((((map__48964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48964):map__48964);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48964__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48964__$1,cljs.core.cst$kw$ui_SLASH_root);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": react_key}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.oge_pub.main.oge_main.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge_pub.main.oge_main.cljs$core$IFn$_invoke$arity$1(root) : com.wsscode.oge_pub.main.oge_main.call(null,root))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_48963;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_48962;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_48961;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_48960;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_48959;
}});})(x48950_48968))
;


com.wsscode.oge_pub.main.Root.prototype.constructor = com.wsscode.oge_pub.main.Root;

com.wsscode.oge_pub.main.Root.prototype.constructor.displayName = "com.wsscode.oge-pub.main/Root";

com.wsscode.oge_pub.main.Root.prototype.om$isComponent = true;

var x48966_48972 = com.wsscode.oge_pub.main.Root;
/** @nocollapse */
x48966_48972.fulcro$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48966_48972.fulcro$client$core$InitialAppState$initial_state$arity$2 = ((function (x48966_48972){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.random_uuid(),cljs.core.cst$kw$ui_SLASH_root,fulcro.client.core.get_initial_state(com.wsscode.oge_pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x48966_48972))
;

/** @nocollapse */
x48966_48972.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48966_48972.om$next$IQuery$query$arity$1 = ((function (x48966_48972){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_root,om.next.get_query(com.wsscode.oge_pub.main.OgeMain)], null),cljs.core.cst$kw$ui_SLASH_react_DASH_key], null);
});})(x48966_48972))
;

/** @nocollapse */
x48966_48972.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48966_48972.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48966_48972){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48966_48972))
;

/** @nocollapse */
x48966_48972.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48966_48972){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge_pub.main.OgeMain], null);
});})(x48966_48972))
;


var x48967_48973 = com.wsscode.oge_pub.main.Root.prototype;

x48967_48973.fulcro$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x48967_48973.fulcro$client$core$InitialAppState$initial_state$arity$2 = ((function (x48967_48973){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,cljs.core.random_uuid(),cljs.core.cst$kw$ui_SLASH_root,fulcro.client.core.get_initial_state(com.wsscode.oge_pub.main.OgeMain,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x48967_48973))
;


x48967_48973.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x48967_48973.om$next$IQuery$query$arity$1 = ((function (x48967_48973){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_root,om.next.get_query(com.wsscode.oge_pub.main.OgeMain)], null),cljs.core.cst$kw$ui_SLASH_react_DASH_key], null);
});})(x48967_48973))
;


x48967_48973.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x48967_48973.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x48967_48973){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48967_48973))
;


x48967_48973.fulcro_css$css$CSS$include_children$arity$1 = ((function (x48967_48973){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge_pub.main.OgeMain], null);
});})(x48967_48973))
;


com.wsscode.oge_pub.main.Root.cljs$lang$type = true;

com.wsscode.oge_pub.main.Root.cljs$lang$ctorStr = "com.wsscode.oge-pub.main/Root";

com.wsscode.oge_pub.main.Root.cljs$lang$ctorPrWriter = (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write(writer__27067__auto__,"com.wsscode.oge-pub.main/Root");
});
com.wsscode.oge_pub.main.endpoint = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__10412__auto__ = localStorage.getItem("oge-pub-last-url");
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return "";
}
})());
if(typeof com.wsscode.oge_pub.main.app !== 'undefined'){
} else {
com.wsscode.oge_pub.main.app = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fulcro.client.core.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$networking,com.wsscode.oge_pub.network.make_network.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge_pub.main.endpoint),cljs.core.cst$kw$shared,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$oge_DASH_pub$main_SLASH_endpoint_STAR_,com.wsscode.oge_pub.main.endpoint], null),cljs.core.cst$kw$started_DASH_callback,(function (app){
return com.wsscode.oge_pub.main.update_index(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app));
})], 0)));
}
com.wsscode.oge_pub.main.init = (function com$wsscode$oge_pub$main$init(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.wsscode.oge_pub.main.app,fulcro.client.core.mount,com.wsscode.oge_pub.main.Root,"oge-container");

return fulcro_css.css.upsert_css("oge",com.wsscode.oge_pub.main.Root);
});
com.wsscode.oge_pub.main.init();
com.wsscode.oge_pub.main.log_state = (function com$wsscode$oge_pub$main$log_state(){
return cljs.core.deref(om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.wsscode.oge_pub.main.app))));
});

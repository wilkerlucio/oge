// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$com$wsscode$oge$core_SLASH_clear_DASH_errors,(function (env40943,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__40944 = env40943;
var map__40944__$1 = ((((!((map__40944 == null)))?((((map__40944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40944):map__40944);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40944__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__40944,map__40944__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors);
});})(map__40944,map__40944__$1,state))
], null);
})(),(function (){var env = env40943;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$com$wsscode$oge$core_SLASH_normalize_DASH_result,(function (env40946,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__40947 = env40946;
var map__40947__$1 = ((((!((map__40947 == null)))?((((map__40947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40947):map__40947);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40947__$1,cljs.core.cst$kw$ref);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40947__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__40947,map__40947__$1,ref,state){
return (function (){
var result_SINGLEQUOTE_ = (function (){var G__40949 = cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40949,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__40949,map__40947,map__40947__$1,ref,state){
return (function (p__40950){
var vec__40951 = p__40950;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40951,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40951,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.next(k)),v], null);
});})(G__40949,map__40947,map__40947__$1,ref,state))
),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors)));
} else {
return G__40949;
}
})();
var profile = (function (){var G__40954 = result_SINGLEQUOTE_;
var G__40954__$1 = (((G__40954 == null))?null:cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile.cljs$core$IFn$_invoke$arity$1(G__40954));
if((G__40954__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$_GT__SLASH_oge.cljs$core$IFn$_invoke$arity$1(G__40954__$1);
}
})();
var result = (function (){var sb__11932__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40955_40957 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40956_40958 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40955_40957,_STAR_print_fn_STAR_40956_40958,sb__11932__auto__,result_SINGLEQUOTE_,profile,map__40947,map__40947__$1,ref,state){
return (function (x__11933__auto__){
return sb__11932__auto__.append(x__11933__auto__);
});})(_STAR_print_newline_STAR_40955_40957,_STAR_print_fn_STAR_40956_40958,sb__11932__auto__,result_SINGLEQUOTE_,profile,map__40947,map__40947__$1,ref,state))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result_SINGLEQUOTE_,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40956_40958;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40955_40957;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__11932__auto__)].join('');
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$oge_SLASH_result,result,cljs.core.cst$kw$oge_SLASH_profile,profile], null)], 0));
});})(map__40947,map__40947__$1,ref,state))
], null);
})(),(function (){var env = env40946;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
com.wsscode.oge.core.oge_query = (function com$wsscode$oge$core$oge_query(this$,query){
try{return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$com$wsscode$oge$core_SLASH_clear_DASH_errors),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))),cljs.core._conj((function (){var x__11759__auto__ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_),cljs.core.cst$kw$query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_GT__SLASH_oge,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query),cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile)], null)], null),cljs.core.cst$kw$refresh,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_result], null),cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$sym$com$wsscode$oge$core_SLASH_normalize_DASH_result], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.cst$sym$fulcro_SLASH_load)], null));
}catch (e40959){var e = e40959;
return console.error("Invalid query",e);
}});
if(typeof com.wsscode.oge.core.Oge !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.core.Oge = (function com$wsscode$oge$core$Oge(){
var this__35867__auto__ = this;
React.Component.apply(this__35867__auto__,arguments);

if(!((this__35867__auto__.initLocalState == null))){
this__35867__auto__.state = this__35867__auto__.initLocalState();
} else {
this__35867__auto__.state = {};
}

return this__35867__auto__;
});

com.wsscode.oge.core.Oge.prototype = goog.object.clone(React.Component.prototype);
}

var x40963_40982 = com.wsscode.oge.core.Oge.prototype;
x40963_40982.componentDidMount = ((function (x40963_40982){
return (function (){
var this__35722__auto__ = this;
return goog.object.set(this__35722__auto__,"fulcro$mounted",true);
});})(x40963_40982))
;

x40963_40982.componentWillUpdate = ((function (x40963_40982){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(((!((this__35722__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35722__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35731__auto___40983 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives.props(this__35722__auto__));
var next_ident__35732__auto___40984 = fulcro.client.primitives.ident(this__35722__auto__,fulcro.client.primitives._next_props(next_props__35723__auto__,this__35722__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35731__auto___40983,next_ident__35732__auto___40984)){
var idxr__35733__auto___40985 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35733__auto___40985 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35733__auto___40985),((function (idxr__35733__auto___40985,ident__35731__auto___40983,next_ident__35732__auto___40984,this__35722__auto__,x40963_40982){
return (function (indexes__35734__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35734__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35731__auto___40983], null),cljs.core.disj,this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35732__auto___40984], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35722__auto__);
});})(idxr__35733__auto___40985,ident__35731__auto___40983,next_ident__35732__auto___40984,this__35722__auto__,x40963_40982))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35722__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35722__auto__);
});})(x40963_40982))
;

x40963_40982.shouldComponentUpdate = ((function (x40963_40982){
return (function (next_props__35723__auto__,next_state__35724__auto__){
var this__35722__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35725__auto__ = next_props__35723__auto__.children;
var next_props__35723__auto____$1 = goog.object.get(next_props__35723__auto__,"fulcro$value");
var next_props__35723__auto____$2 = (function (){var G__40965 = next_props__35723__auto____$1;
if((next_props__35723__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__40965);
} else {
return G__40965;
}
})();
var current_props__35726__auto__ = fulcro.client.primitives.props(this__35722__auto__);
var next_props_stale_QMARK___35727__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35726__auto__) > fulcro.client.primitives.get_basis_time(next_props__35723__auto____$2));
var props_changed_QMARK___35728__auto__ = (!(next_props_stale_QMARK___35727__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35726__auto__,next_props__35723__auto____$2));
var state_changed_QMARK___35729__auto__ = (function (){var and__10793__auto__ = this__35722__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__40966 = this__35722__auto__.state;
var G__40967 = "fulcro$state";
return goog.object.get(G__40966,G__40967);
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
});})(x40963_40982))
;

x40963_40982.componentWillUnmount = ((function (x40963_40982){
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
});})(x40963_40982))
;

x40963_40982.componentDidUpdate = ((function (x40963_40982){
return (function (prev_props__35735__auto__,prev_state__35736__auto__){
var this__35722__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35722__auto__);
});})(x40963_40982))
;

x40963_40982.componentWillMount = ((function (x40963_40982){
return (function (){
var this__35722__auto__ = this;
var indexer__35737__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35722__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35737__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35737__auto__,this__35722__auto__);
}
});})(x40963_40982))
;

x40963_40982.render = ((function (x40963_40982){
return (function (){
var this__35721__auto__ = this;
var this$ = this__35721__auto__;
var _STAR_reconciler_STAR_40968 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_40969 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_40970 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_40971 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_40972 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35721__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35721__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35721__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35721__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35721__auto__;

try{var map__40973 = fulcro.client.primitives.props(this$);
var map__40973__$1 = ((((!((map__40973 == null)))?((((map__40973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40973):map__40973);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40973__$1,cljs.core.cst$kw$oge_SLASH_query);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40973__$1,cljs.core.cst$kw$oge_SLASH_result);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40973__$1,cljs.core.cst$kw$oge_SLASH_profile);
var result_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40973__$1,cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40973__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var map__40974 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__40974__$1 = ((((!((map__40974 == null)))?((((map__40974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40974):map__40974);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,cljs.core.cst$kw$style);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.core.Oge);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(css))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(profile))?cljs.core.cst$kw$simple.cljs$core$IFn$_invoke$arity$1(css):null))].join(''), "style": cljs.core.clj__GT_js(style)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["h2",({"className": ["flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title_DASH_oge.cljs$core$IFn$_invoke$arity$1(css))].join('')}),"OgE"])),fulcro.util.force_children((function (){var G__40977 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,({"marginLeft": (10)}),cljs.core.cst$kw$disabled,fulcro.client.data_fetch.loading_QMARK_(cljs.core.cst$kw$ui_SLASH_fetch_DASH_state.cljs$core$IFn$_invoke$arity$1(result_SINGLEQUOTE_)),cljs.core.cst$kw$onClick,((function (map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982){
return (function (){
return com.wsscode.oge.core.oge_query(this$,query);
});})(map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982))
], null);
var G__40978 = (cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(cljs.core.cst$kw$ui_SLASH_fetch_DASH_state.cljs$core$IFn$_invoke$arity$1(result_SINGLEQUOTE_)))?"Loading...":"Run Query");
return (com.wsscode.oge.ui.common.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.oge.ui.common.button.cljs$core$IFn$_invoke$arity$2(G__40977,G__40978) : com.wsscode.oge.ui.common.button.call(null,G__40977,G__40978));
})())])),fulcro.util.force_children(com.wsscode.oge.ui.codemirror.oge(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$className,cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$value,(function (){var or__10805__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,com.wsscode.pathom.core.elide_not_found(indexes),cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_extraKeys,new cljs.core.PersistentArrayMap(null, 5, ["Cmd-Enter",((function (map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982){
return (function (_){
return com.wsscode.oge.core.oge_query(this$,cljs.core.cst$kw$oge_SLASH_query.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982))
,"Ctrl-Enter",((function (map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982){
return (function (_){
return com.wsscode.oge.core.oge_query(this$,cljs.core.cst$kw$oge_SLASH_query.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982))
,"Shift-Enter",((function (map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982){
return (function (_){
return com.wsscode.oge.core.oge_query(this$,cljs.core.cst$kw$oge_SLASH_query.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982))
,"Cmd-J","ogeJoin","Ctrl-Space","autocomplete"], null)], null),cljs.core.cst$kw$onChange,((function (map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982){
return (function (p1__40960_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,cljs.core.cst$kw$oge_SLASH_query,p1__40960_SHARP_);
});})(map__40973,map__40973__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__40974,map__40974__$1,style,css,_STAR_reconciler_STAR_40968,_STAR_depth_STAR_40969,_STAR_shared_STAR_40970,_STAR_instrument_STAR_40971,_STAR_parent_STAR_40972,this$,this__35721__auto__,x40963_40982))
], null))),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": cljs.core.cst$kw$divisor.cljs$core$IFn$_invoke$arity$1(css)})])),fulcro.util.force_children(com.wsscode.oge.ui.codemirror.clojure(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$className,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$value,(function (){var or__10805__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)].join('');
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_readOnly,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,true], null)], null))),fulcro.util.force_children((cljs.core.truth_(profile)?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": cljs.core.cst$kw$hdiv.cljs$core$IFn$_invoke$arity$1(css)})]):null)),fulcro.util.force_children((cljs.core.truth_(profile)?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": cljs.core.cst$kw$flame.cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__40979 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,profile], null);
return (com.wsscode.oge.ui.flame_graph.flame_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.flame_graph.flame_graph.cljs$core$IFn$_invoke$arity$1(G__40979) : com.wsscode.oge.ui.flame_graph.flame_graph.call(null,G__40979));
})())]):null))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_40972;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_40971;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_40970;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_40969;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_40968;
}});})(x40963_40982))
;


com.wsscode.oge.core.Oge.prototype.constructor = com.wsscode.oge.core.Oge;

com.wsscode.oge.core.Oge.prototype.constructor.displayName = "com.wsscode.oge.core/Oge";

com.wsscode.oge.core.Oge.prototype.fulcro$isComponent = true;

var x40980_40986 = com.wsscode.oge.core.Oge;
x40980_40986.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x40980_40986.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x40980_40986){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$oge_SLASH_id,"editor",cljs.core.cst$kw$oge_SLASH_query,"[]",cljs.core.cst$kw$oge_SLASH_result,"{}",cljs.core.cst$kw$oge_SLASH_profile,null], null);
});})(x40980_40986))
;

x40980_40986.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x40980_40986.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x40980_40986){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,cljs.core.cst$kw$oge_SLASH_query,cljs.core.cst$kw$oge_SLASH_result,cljs.core.cst$kw$oge_SLASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_autocomplete_DASH_ignore,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state], null)], null)], null);
});})(x40980_40986))
;

x40980_40986.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x40980_40986.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x40980_40986){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,cljs.core.cst$kw$oge_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x40980_40986))
;

x40980_40986.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x40980_40986.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x40980_40986){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display,"grid",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border,"1px solid #ddd",cljs.core.cst$kw$grid_DASH_template_DASH_rows,"auto 1fr 12px 300px",cljs.core.cst$kw$grid_DASH_template_DASH_columns,"600px 12px 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_areas,com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result","hdiv divisor result","flame divisor result"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$simple,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grid_DASH_template_DASH_rows,"auto 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_columns,"600px 12px 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_areas,com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$CodeMirror,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$position,"absolute"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$grid_DASH_area,"title",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$background,"linear-gradient(#f7f7f7, #e2e2e2)",cljs.core.cst$kw$padding,"2px 10px",cljs.core.cst$kw$border_DASH_bottom,"1px solid #e0e0e0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title_DASH_oge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"0",cljs.core.cst$kw$margin_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$divisor,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$grid_DASH_area,"divisor",cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$border,"1px solid #e0e0e0",cljs.core.cst$kw$border_DASH_top,"0",cljs.core.cst$kw$border_DASH_bottom,"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$editor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"editor",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$result,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"result",cljs.core.cst$kw$position,"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$CodeMirror,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$hdiv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$grid_DASH_area,"hdiv",cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$border,"1px solid #e0e0e0",cljs.core.cst$kw$border_DASH_width,"1px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flame,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"flame",cljs.core.cst$kw$background,"#f6f7f8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$cm_DASH_atom_DASH_composite,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#ab890d"], null)], null)], null);
});})(x40980_40986))
;

x40980_40986.fulcro_css$css$CSS$include_children$arity$1 = ((function (x40980_40986){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.CSS], null);
});})(x40980_40986))
;


var x40981_40987 = com.wsscode.oge.core.Oge.prototype;
x40981_40987.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x40981_40987.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x40981_40987){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$oge_SLASH_id,"editor",cljs.core.cst$kw$oge_SLASH_query,"[]",cljs.core.cst$kw$oge_SLASH_result,"{}",cljs.core.cst$kw$oge_SLASH_profile,null], null);
});})(x40981_40987))
;

x40981_40987.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x40981_40987.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x40981_40987){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,cljs.core.cst$kw$oge_SLASH_query,cljs.core.cst$kw$oge_SLASH_result,cljs.core.cst$kw$oge_SLASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_autocomplete_DASH_ignore,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state], null)], null)], null);
});})(x40981_40987))
;

x40981_40987.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x40981_40987.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x40981_40987){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,cljs.core.cst$kw$oge_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x40981_40987))
;

x40981_40987.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x40981_40987.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x40981_40987){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display,"grid",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border,"1px solid #ddd",cljs.core.cst$kw$grid_DASH_template_DASH_rows,"auto 1fr 12px 300px",cljs.core.cst$kw$grid_DASH_template_DASH_columns,"600px 12px 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_areas,com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result","hdiv divisor result","flame divisor result"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$simple,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grid_DASH_template_DASH_rows,"auto 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_columns,"600px 12px 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_areas,com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$CodeMirror,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$position,"absolute"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$grid_DASH_area,"title",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$background,"linear-gradient(#f7f7f7, #e2e2e2)",cljs.core.cst$kw$padding,"2px 10px",cljs.core.cst$kw$border_DASH_bottom,"1px solid #e0e0e0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title_DASH_oge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"0",cljs.core.cst$kw$margin_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$divisor,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$grid_DASH_area,"divisor",cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$border,"1px solid #e0e0e0",cljs.core.cst$kw$border_DASH_top,"0",cljs.core.cst$kw$border_DASH_bottom,"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$editor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"editor",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$result,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"result",cljs.core.cst$kw$position,"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$CodeMirror,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$hdiv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$grid_DASH_area,"hdiv",cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$border,"1px solid #e0e0e0",cljs.core.cst$kw$border_DASH_width,"1px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flame,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"flame",cljs.core.cst$kw$background,"#f6f7f8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$cm_DASH_atom_DASH_composite,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#ab890d"], null)], null)], null);
});})(x40981_40987))
;

x40981_40987.fulcro_css$css$CSS$include_children$arity$1 = ((function (x40981_40987){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.CSS], null);
});})(x40981_40987))
;


com.wsscode.oge.core.Oge.cljs$lang$type = true;

com.wsscode.oge.core.Oge.cljs$lang$ctorStr = "com.wsscode.oge.core/Oge";

com.wsscode.oge.core.Oge.cljs$lang$ctorPrWriter = (function (this__35870__auto__,writer__35871__auto__,opt__35872__auto__){
return cljs.core._write(writer__35871__auto__,"com.wsscode.oge.core/Oge");
});
com.wsscode.oge.core.oge = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge);

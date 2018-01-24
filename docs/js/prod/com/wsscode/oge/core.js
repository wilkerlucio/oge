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
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$com$wsscode$oge$core_SLASH_clear_DASH_errors,(function (env43046,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__43047 = env43046;
var map__43047__$1 = ((((!((map__43047 == null)))?((((map__43047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43047):map__43047);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43047__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__43047,map__43047__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors);
});})(map__43047,map__43047__$1,state))
], null);
})(),(function (){var env = env43046;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$com$wsscode$oge$core_SLASH_normalize_DASH_result,(function (env43049,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__43050 = env43049;
var map__43050__$1 = ((((!((map__43050 == null)))?((((map__43050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43050):map__43050);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43050__$1,cljs.core.cst$kw$ref);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43050__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__43050,map__43050__$1,ref,state){
return (function (){
var result_SINGLEQUOTE_ = (function (){var G__43052 = cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43052,cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__43052,map__43050,map__43050__$1,ref,state){
return (function (p__43053){
var vec__43054 = p__43053;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43054,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.next(k)),v], null);
});})(G__43052,map__43050,map__43050__$1,ref,state))
),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$com$wsscode$pathom$core_SLASH_errors)));
} else {
return G__43052;
}
})();
var profile = (function (){var G__43057 = result_SINGLEQUOTE_;
var G__43057__$1 = (((G__43057 == null))?null:cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile.cljs$core$IFn$_invoke$arity$1(G__43057));
if((G__43057__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$_GT__SLASH_oge.cljs$core$IFn$_invoke$arity$1(G__43057__$1);
}
})();
var result = (function (){var sb__11932__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43058_43060 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43059_43061 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43058_43060,_STAR_print_fn_STAR_43059_43061,sb__11932__auto__,result_SINGLEQUOTE_,profile,map__43050,map__43050__$1,ref,state){
return (function (x__11933__auto__){
return sb__11932__auto__.append(x__11933__auto__);
});})(_STAR_print_newline_STAR_43058_43060,_STAR_print_fn_STAR_43059_43061,sb__11932__auto__,result_SINGLEQUOTE_,profile,map__43050,map__43050__$1,ref,state))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result_SINGLEQUOTE_,cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43059_43061;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43058_43060;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__11932__auto__)].join('');
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$oge_SLASH_result,result,cljs.core.cst$kw$oge_SLASH_profile,profile], null)], 0));
});})(map__43050,map__43050__$1,ref,state))
], null);
})(),(function (){var env = env43049;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
com.wsscode.oge.core.oge_query = (function com$wsscode$oge$core$oge_query(this$,query){
try{return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$com$wsscode$oge$core_SLASH_clear_DASH_errors),(function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))),cljs.core._conj((function (){var x__11759__auto__ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_),cljs.core.cst$kw$query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_GT__SLASH_oge,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query),cljs.core.cst$kw$com$wsscode$pathom$profile_SLASH_profile)], null)], null),cljs.core.cst$kw$refresh,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_result], null),cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$sym$com$wsscode$oge$core_SLASH_normalize_DASH_result], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.cst$sym$fulcro_SLASH_load)], null));
}catch (e43062){var e = e43062;
return console.error("Invalid query",e);
}});
if(typeof com.wsscode.oge.core.Oge !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.core.Oge = (function com$wsscode$oge$core$Oge(){
var this__35978__auto__ = this;
React.Component.apply(this__35978__auto__,arguments);

if(!((this__35978__auto__.initLocalState == null))){
this__35978__auto__.state = this__35978__auto__.initLocalState();
} else {
this__35978__auto__.state = {};
}

return this__35978__auto__;
});

com.wsscode.oge.core.Oge.prototype = goog.object.clone(React.Component.prototype);
}

var x43066_43085 = com.wsscode.oge.core.Oge.prototype;
x43066_43085.componentDidMount = ((function (x43066_43085){
return (function (){
var this__35833__auto__ = this;
return goog.object.set(this__35833__auto__,"fulcro$mounted",true);
});})(x43066_43085))
;

x43066_43085.componentWillUpdate = ((function (x43066_43085){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(((!((this__35833__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__35833__auto__.fulcro$client$primitives$Ident$)))?true:false):false)){
var ident__35842__auto___43086 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives.props(this__35833__auto__));
var next_ident__35843__auto___43087 = fulcro.client.primitives.ident(this__35833__auto__,fulcro.client.primitives._next_props(next_props__35834__auto__,this__35833__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__35842__auto___43086,next_ident__35843__auto___43087)){
var idxr__35844__auto___43088 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__35844__auto___43088 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__35844__auto___43088),((function (idxr__35844__auto___43088,ident__35842__auto___43086,next_ident__35843__auto___43087,this__35833__auto__,x43066_43085){
return (function (indexes__35845__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__35845__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__35842__auto___43086], null),cljs.core.disj,this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__35843__auto___43087], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35833__auto__);
});})(idxr__35844__auto___43088,ident__35842__auto___43086,next_ident__35843__auto___43087,this__35833__auto__,x43066_43085))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__35833__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__35833__auto__);
});})(x43066_43085))
;

x43066_43085.shouldComponentUpdate = ((function (x43066_43085){
return (function (next_props__35834__auto__,next_state__35835__auto__){
var this__35833__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__35836__auto__ = next_props__35834__auto__.children;
var next_props__35834__auto____$1 = goog.object.get(next_props__35834__auto__,"fulcro$value");
var next_props__35834__auto____$2 = (function (){var G__43068 = next_props__35834__auto____$1;
if((next_props__35834__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__43068);
} else {
return G__43068;
}
})();
var current_props__35837__auto__ = fulcro.client.primitives.props(this__35833__auto__);
var next_props_stale_QMARK___35838__auto__ = (fulcro.client.primitives.get_basis_time(current_props__35837__auto__) > fulcro.client.primitives.get_basis_time(next_props__35834__auto____$2));
var props_changed_QMARK___35839__auto__ = (!(next_props_stale_QMARK___35838__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__35837__auto__,next_props__35834__auto____$2));
var state_changed_QMARK___35840__auto__ = (function (){var and__10793__auto__ = this__35833__auto__.state;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43069 = this__35833__auto__.state;
var G__43070 = "fulcro$state";
return goog.object.get(G__43069,G__43070);
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
});})(x43066_43085))
;

x43066_43085.componentWillUnmount = ((function (x43066_43085){
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
});})(x43066_43085))
;

x43066_43085.componentDidUpdate = ((function (x43066_43085){
return (function (prev_props__35846__auto__,prev_state__35847__auto__){
var this__35833__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__35833__auto__);
});})(x43066_43085))
;

x43066_43085.componentWillMount = ((function (x43066_43085){
return (function (){
var this__35833__auto__ = this;
var indexer__35848__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__35833__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__35848__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__35848__auto__,this__35833__auto__);
}
});})(x43066_43085))
;

x43066_43085.render = ((function (x43066_43085){
return (function (){
var this__35832__auto__ = this;
var this$ = this__35832__auto__;
var _STAR_reconciler_STAR_43071 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_43072 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_43073 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_43074 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_43075 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__35832__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__35832__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__35832__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__35832__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__35832__auto__;

try{var map__43076 = fulcro.client.primitives.props(this$);
var map__43076__$1 = ((((!((map__43076 == null)))?((((map__43076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43076):map__43076);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,cljs.core.cst$kw$oge_SLASH_query);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,cljs.core.cst$kw$oge_SLASH_result);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,cljs.core.cst$kw$oge_SLASH_profile);
var result_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes);
var map__43077 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__43077__$1 = ((((!((map__43077 == null)))?((((map__43077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43077):map__43077);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43077__$1,cljs.core.cst$kw$style);
var css = fulcro_css.css.get_classnames(com.wsscode.oge.core.Oge);
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$container.cljs$core$IFn$_invoke$arity$1(css))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(profile))?cljs.core.cst$kw$simple.cljs$core$IFn$_invoke$arity$1(css):null))].join(''), "style": cljs.core.clj__GT_js(style)}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(css)}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic(({"className": ["flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$title_DASH_oge.cljs$core$IFn$_invoke$arity$1(css))].join('')}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OgE"], 0)),(function (){var G__43080 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,({"marginLeft": (10)}),cljs.core.cst$kw$disabled,fulcro.client.data_fetch.loading_QMARK_(cljs.core.cst$kw$ui_SLASH_fetch_DASH_state.cljs$core$IFn$_invoke$arity$1(result_SINGLEQUOTE_)),cljs.core.cst$kw$onClick,((function (map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085){
return (function (){
return com.wsscode.oge.core.oge_query(this$,query);
});})(map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085))
], null);
var G__43081 = (cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(cljs.core.cst$kw$ui_SLASH_fetch_DASH_state.cljs$core$IFn$_invoke$arity$1(result_SINGLEQUOTE_)))?"Loading...":"Run Query");
return (com.wsscode.oge.ui.common.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.oge.ui.common.button.cljs$core$IFn$_invoke$arity$2(G__43080,G__43081) : com.wsscode.oge.ui.common.button.call(null,G__43080,G__43081));
})()], 0)),com.wsscode.oge.ui.codemirror.oge(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$className,cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$value,(function (){var or__10805__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,com.wsscode.pathom.core.elide_not_found(indexes),cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_extraKeys,new cljs.core.PersistentArrayMap(null, 5, ["Cmd-Enter",((function (map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085){
return (function (_){
return com.wsscode.oge.core.oge_query(this$,cljs.core.cst$kw$oge_SLASH_query.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085))
,"Ctrl-Enter",((function (map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085){
return (function (_){
return com.wsscode.oge.core.oge_query(this$,cljs.core.cst$kw$oge_SLASH_query.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085))
,"Shift-Enter",((function (map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085){
return (function (_){
return com.wsscode.oge.core.oge_query(this$,cljs.core.cst$kw$oge_SLASH_query.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085))
,"Cmd-J","ogeJoin","Ctrl-Space","autocomplete"], null)], null),cljs.core.cst$kw$onChange,((function (map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085){
return (function (p1__43063_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,cljs.core.cst$kw$oge_SLASH_query,p1__43063_SHARP_);
});})(map__43076,map__43076__$1,query,result,profile,result_SINGLEQUOTE_,indexes,map__43077,map__43077__$1,style,css,_STAR_reconciler_STAR_43071,_STAR_depth_STAR_43072,_STAR_shared_STAR_43073,_STAR_instrument_STAR_43074,_STAR_parent_STAR_43075,this$,this__35832__auto__,x43066_43085))
], null)),fulcro.client.dom.div(({"className": cljs.core.cst$kw$divisor.cljs$core$IFn$_invoke$arity$1(css)})),com.wsscode.oge.ui.codemirror.clojure(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$className,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(css),cljs.core.cst$kw$value,(function (){var or__10805__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)].join('');
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_options,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_readOnly,true,cljs.core.cst$kw$com$wsscode$oge$ui$codemirror_SLASH_lineNumbers,true], null)], null)),(cljs.core.truth_(profile)?fulcro.client.dom.div(({"className": cljs.core.cst$kw$hdiv.cljs$core$IFn$_invoke$arity$1(css)})):null),(cljs.core.truth_(profile)?fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": cljs.core.cst$kw$flame.cljs$core$IFn$_invoke$arity$1(css)}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43082 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,profile], null);
return (com.wsscode.oge.ui.flame_graph.flame_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.flame_graph.flame_graph.cljs$core$IFn$_invoke$arity$1(G__43082) : com.wsscode.oge.ui.flame_graph.flame_graph.call(null,G__43082));
})()], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_43075;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_43074;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_43073;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_43072;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_43071;
}});})(x43066_43085))
;


com.wsscode.oge.core.Oge.prototype.constructor = com.wsscode.oge.core.Oge;

com.wsscode.oge.core.Oge.prototype.constructor.displayName = "com.wsscode.oge.core/Oge";

com.wsscode.oge.core.Oge.prototype.fulcro$isComponent = true;

var x43083_43089 = com.wsscode.oge.core.Oge;
x43083_43089.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x43083_43089.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x43083_43089){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$oge_SLASH_id,"editor",cljs.core.cst$kw$oge_SLASH_query,"[]",cljs.core.cst$kw$oge_SLASH_result,"{}",cljs.core.cst$kw$oge_SLASH_profile,null], null);
});})(x43083_43089))
;

x43083_43089.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x43083_43089.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x43083_43089){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,cljs.core.cst$kw$oge_SLASH_query,cljs.core.cst$kw$oge_SLASH_result,cljs.core.cst$kw$oge_SLASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_autocomplete_DASH_ignore,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state], null)], null)], null);
});})(x43083_43089))
;

x43083_43089.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x43083_43089.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x43083_43089){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,cljs.core.cst$kw$oge_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x43083_43089))
;

x43083_43089.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x43083_43089.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x43083_43089){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display,"grid",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border,"1px solid #ddd",cljs.core.cst$kw$grid_DASH_template_DASH_rows,"auto 1fr 12px 300px",cljs.core.cst$kw$grid_DASH_template_DASH_columns,"600px 12px 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_areas,com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result","hdiv divisor result","flame divisor result"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$simple,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grid_DASH_template_DASH_rows,"auto 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_columns,"600px 12px 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_areas,com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$CodeMirror,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$position,"absolute"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$grid_DASH_area,"title",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$background,"linear-gradient(#f7f7f7, #e2e2e2)",cljs.core.cst$kw$padding,"2px 10px",cljs.core.cst$kw$border_DASH_bottom,"1px solid #e0e0e0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title_DASH_oge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"0",cljs.core.cst$kw$margin_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$divisor,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$grid_DASH_area,"divisor",cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$border,"1px solid #e0e0e0",cljs.core.cst$kw$border_DASH_top,"0",cljs.core.cst$kw$border_DASH_bottom,"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$editor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"editor",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$result,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"result",cljs.core.cst$kw$position,"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$CodeMirror,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$hdiv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$grid_DASH_area,"hdiv",cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$border,"1px solid #e0e0e0",cljs.core.cst$kw$border_DASH_width,"1px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flame,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"flame",cljs.core.cst$kw$background,"#f6f7f8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$cm_DASH_atom_DASH_composed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#ab890d"], null)], null)], null);
});})(x43083_43089))
;

x43083_43089.fulcro_css$css$CSS$include_children$arity$1 = ((function (x43083_43089){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.CSS], null);
});})(x43083_43089))
;


var x43084_43090 = com.wsscode.oge.core.Oge.prototype;
x43084_43090.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x43084_43090.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x43084_43090){
return (function (_,___$1){
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$oge_SLASH_id,"editor",cljs.core.cst$kw$oge_SLASH_query,"[]",cljs.core.cst$kw$oge_SLASH_result,"{}",cljs.core.cst$kw$oge_SLASH_profile,null], null);
});})(x43084_43090))
;

x43084_43090.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x43084_43090.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x43084_43090){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,cljs.core.cst$kw$oge_SLASH_query,cljs.core.cst$kw$oge_SLASH_result,cljs.core.cst$kw$oge_SLASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_indexes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_idents,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_index_DASH_io,cljs.core.cst$kw$com$wsscode$pathom$connect_SLASH_autocomplete_DASH_ignore,cljs.core.cst$kw$ui_SLASH_fetch_DASH_state], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oge_SLASH_result_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state], null)], null)], null);
});})(x43084_43090))
;

x43084_43090.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x43084_43090.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x43084_43090){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$oge_SLASH_id,cljs.core.cst$kw$oge_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x43084_43090))
;

x43084_43090.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x43084_43090.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x43084_43090){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$container,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display,"grid",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border,"1px solid #ddd",cljs.core.cst$kw$grid_DASH_template_DASH_rows,"auto 1fr 12px 300px",cljs.core.cst$kw$grid_DASH_template_DASH_columns,"600px 12px 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_areas,com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result","hdiv divisor result","flame divisor result"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$simple,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grid_DASH_template_DASH_rows,"auto 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_columns,"600px 12px 1fr",cljs.core.cst$kw$grid_DASH_template_DASH_areas,com.wsscode.oge.ui.helpers.strings(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title title title","editor divisor result"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$CodeMirror,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$position,"absolute"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$grid_DASH_area,"title",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$background,"linear-gradient(#f7f7f7, #e2e2e2)",cljs.core.cst$kw$padding,"2px 10px",cljs.core.cst$kw$border_DASH_bottom,"1px solid #e0e0e0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$title_DASH_oge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"0",cljs.core.cst$kw$margin_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$divisor,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$grid_DASH_area,"divisor",cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$border,"1px solid #e0e0e0",cljs.core.cst$kw$border_DASH_top,"0",cljs.core.cst$kw$border_DASH_bottom,"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$editor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"editor",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$result,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"result",cljs.core.cst$kw$position,"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$CodeMirror,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$hdiv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$grid_DASH_area,"hdiv",cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$border,"1px solid #e0e0e0",cljs.core.cst$kw$border_DASH_width,"1px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flame,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$grid_DASH_area,"flame",cljs.core.cst$kw$background,"#f6f7f8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$cm_DASH_atom_DASH_composed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#ab890d"], null)], null)], null);
});})(x43084_43090))
;

x43084_43090.fulcro_css$css$CSS$include_children$arity$1 = ((function (x43084_43090){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.common.CSS], null);
});})(x43084_43090))
;


com.wsscode.oge.core.Oge.cljs$lang$type = true;

com.wsscode.oge.core.Oge.cljs$lang$ctorStr = "com.wsscode.oge.core/Oge";

com.wsscode.oge.core.Oge.cljs$lang$ctorPrWriter = (function (this__35981__auto__,writer__35982__auto__,opt__35983__auto__){
return cljs.core._write(writer__35982__auto__,"com.wsscode.oge.core/Oge");
});
com.wsscode.oge.core.oge = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.core.Oge);
